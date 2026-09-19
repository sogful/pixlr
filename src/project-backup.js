window.projectbackup = (() => {
    const indexpath = "/snapshot/index.json";
    let running;
    const request = operation => new Promise((resolve, reject) => {
        operation.onsuccess = () => resolve(operation.result);
        operation.onerror = () => reject(operation.error);
    });
    const complete = transaction => new Promise((resolve, reject) => {
        transaction.oncomplete = resolve;
        transaction.onabort = transaction.onerror = () => reject(transaction.error);
    });
    const pause = () => new Promise(resolve => setTimeout(resolve, 0));
    const json = value => new Response(JSON.stringify(value), {headers: {"Content-Type": "application/json"}});
    async function readindex(cache) {
        const response = await cache.match(indexpath);
        return response ? response.json() : {version: 1, documents: [], fonts: []};
    }
    async function putvalue(cache, path, value) {
        if (value === undefined) {
            return false;
        }
        await cache.put(path, value instanceof Blob ? new Response(value) : json(value));
        return value instanceof Blob ? "blob" : "json";
    }
    async function getvalue(cache, path, kind) {
        if (!kind) {
            return undefined;
        }
        const response = await cache.match(path);
        if (!response) {
            throw new Error("The local backup is incomplete.");
        }
        return kind === "blob" ? response.blob() : response.json();
    }
    async function copydocument(database, cache, document) {
        const transaction = database.transaction(["document-meta", "document-thumbnail", "document-selection", "layer-meta", "layer-bitmap", "layer-mask"], "readonly");
        const finished = complete(transaction);
        const [metadata, thumbnail, selection, layers] = await Promise.all([
            request(transaction.objectStore("document-meta").get(document.id)),
            request(transaction.objectStore("document-thumbnail").get(document.id)),
            request(transaction.objectStore("document-selection").get(document.id)),
            request(transaction.objectStore("layer-meta").index("document").getAll(document.id))
        ]);
        const contents = await Promise.all(layers.map(async layer => ({
            metadata: layer,
            bitmap: await request(transaction.objectStore("layer-bitmap").get(layer.id)),
            mask: await request(transaction.objectStore("layer-mask").get(layer.id))
        })));
        await finished;
        if (!metadata || metadata.syncPending) {
            return;
        }
        const path = "/snapshot/documents/" + encodeURIComponent(metadata.id) + "/" + crypto.randomUUID() + "/";
        const record = {metadata, layers: []};
        record.thumbnail = await putvalue(cache, path + "thumbnail", thumbnail);
        record.selection = await putvalue(cache, path + "selection", selection);
        for (const layer of contents) {
            const prefix = path + encodeURIComponent(layer.metadata.id);
            record.layers.push({metadata: layer.metadata,
                bitmap: await putvalue(cache, prefix + "/bitmap", layer.bitmap),
                mask: await putvalue(cache, prefix + "/mask", layer.mask)});
        }
        await cache.put(path + "metadata", json(record));
        return {id: metadata.id, signature: JSON.stringify(metadata), path};
    }
    async function synchronize(database) {
        const cache = await caches.open("pixlr-backup");
        const previous = await readindex(cache);
        const transaction = database.transaction(["document-meta", "fonts"], "readonly");
        const [documents, fonts] = await Promise.all([
            request(transaction.objectStore("document-meta").getAll()),
            request(transaction.objectStore("fonts").getAll())
        ]);
        if (!documents.length) {
            return {copied: 0, unchanged: 0};
        }
        const next = {version: 1, documents: [], fonts: []};
        const old = new Map(previous.documents.map(document => [document.id, document]));
        let copied = 0;
        for (const document of documents) {
            const existing = old.get(document.id);
            if (document.syncPending) {
                if (existing) next.documents.push(existing);
                continue;
            }
            if (existing && existing.signature === JSON.stringify(document)) {
                next.documents.push(existing);
            } else {
                const entry = await copydocument(database, cache, document);
                if (entry) {
                    next.documents.push(entry);
                    copied++;
                } else if (existing) {
                    next.documents.push(existing);
                }
            }
            await pause();
        }
        for (const font of fonts) {
            const digest = font.font instanceof Blob ? Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", await font.font.arrayBuffer())), byte => byte.toString(16).padStart(2, "0")).join("") : "";
            const existing = previous.fonts.find(entry => entry.name === font.name && entry.digest === digest && entry.type === font.type);
            if (existing) {
                next.fonts.push(existing);
                continue;
            }
            const path = "/snapshot/fonts/" + crypto.randomUUID() + "/";
            const record = {...font};
            record.font = await putvalue(cache, path + "font", font.font);
            record.thumb = await putvalue(cache, path + "thumb", font.thumb);
            await cache.put(path + "metadata", json(record));
            next.fonts.push({name: font.name, digest, type: font.type, path});
        }
        if (!copied && JSON.stringify(next) === JSON.stringify(previous)) {
            return {copied: 0, unchanged: next.documents.length};
        }
        await cache.put(indexpath, json(next));
        const prefixes = [...next.documents, ...next.fonts].map(entry => entry.path);
        for (const key of navigator.locks ? await cache.keys() : []) {
            const path = new URL(key.url).pathname;
            if (path.startsWith("/snapshot/") && path !== indexpath && !prefixes.some(prefix => path.startsWith(prefix))) {
                await cache.delete(key);
            }
        }
        return {copied, unchanged: next.documents.length - copied};
    }
    async function restore(database) {
        const cache = await caches.open("pixlr-backup");
        const index = await readindex(cache);
        if (index.version !== 1 || !index.documents.length) {
            throw new Error("No local project snapshot was found.");
        }
        for (const entry of index.fonts) {
            const record = await getvalue(cache, entry.path + "metadata", "json");
            record.font = await getvalue(cache, entry.path + "font", record.font);
            record.thumb = await getvalue(cache, entry.path + "thumb", record.thumb);
            const transaction = database.transaction("fonts", "readwrite");
            const finished = complete(transaction);
            transaction.objectStore("fonts").put(record, record.name);
            await finished;
        }
        for (const entry of index.documents) {
            const record = await getvalue(cache, entry.path + "metadata", "json");
            const thumbnail = await getvalue(cache, entry.path + "thumbnail", record.thumbnail);
            const selection = await getvalue(cache, entry.path + "selection", record.selection);
            const layers = [];
            for (const layer of record.layers) {
                const prefix = entry.path + encodeURIComponent(layer.metadata.id);
                layers.push({metadata: layer.metadata,
                    bitmap: await getvalue(cache, prefix + "/bitmap", layer.bitmap),
                    mask: await getvalue(cache, prefix + "/mask", layer.mask)});
            }
            const transaction = database.transaction(["document-meta", "document-thumbnail", "document-selection", "layer-meta", "layer-bitmap", "layer-mask"], "readwrite");
            const finished = complete(transaction);
            record.metadata.lastModified = new Date(record.metadata.lastModified);
            transaction.objectStore("document-meta").put(record.metadata);
            if (thumbnail !== undefined) transaction.objectStore("document-thumbnail").put(thumbnail, entry.id);
            if (selection !== undefined) transaction.objectStore("document-selection").put(selection, entry.id);
            for (const layer of layers) {
                transaction.objectStore("layer-meta").put(layer.metadata);
                if (layer.bitmap !== undefined) transaction.objectStore("layer-bitmap").put(layer.bitmap, layer.metadata.id);
                if (layer.mask !== undefined) transaction.objectStore("layer-mask").put(layer.mask, layer.metadata.id);
            }
            await finished;
            await pause();
        }
        return index.documents.length;
    }
    return {
        sync(database) {
            if (!running) {
                const operation = () => synchronize(database);
                running = (navigator.locks ? navigator.locks.request("pixlr-project-backup", operation) : operation()).finally(() => {running = undefined;});
            }
            return running;
        },
        restore(database) {
            const operation = () => restore(database);
            return navigator.locks ? navigator.locks.request("pixlr-project-backup", operation) : operation();
        },
        async available() {
            const index = await readindex(await caches.open("pixlr-backup"));
            return index.version === 1 && index.documents.length > 0;
        }
    };
})();
