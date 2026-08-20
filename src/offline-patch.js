if (navigator.storage && navigator.storage.persist) {
    navigator.storage.persist()
}
document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("history-import")
    const input = document.getElementById("history-import-input")
    if (!button || !input) return
    button.addEventListener("click", function() {input.click()})
    input.addEventListener("change", function() {
        const file = input.files && input.files[0]
        input.value = ""
        if (!file) return
        importZipFile(file)
    })
})

function importZipFile(file) {
    const transfer = new DataTransfer()
    transfer.items.add(file)
    const event = new DragEvent("drop", {bubbles: true, cancelable: true})
    Object.defineProperty(event, "dataTransfer", {value: transfer})
    document.dispatchEvent(event)
}

function countLocalProjects() {
    return new Promise(resolve => {
        if (!("indexedDB" in window)) {resolve(0); return}
        try {
            const req = indexedDB.open("pixlr")
            req.onsuccess = () => {
                try {
                    const db = req.result
                    if (!db.objectStoreNames.contains("document-meta")) {resolve(0); return}
                    const tx = db.transaction("document-meta", "readonly")
                    const countReq = tx.objectStore("document-meta").count()
                    countReq.onsuccess = () => resolve(countReq.result || 0)
                    countReq.onerror = () => resolve(0)
                } catch (e) {resolve(0)}
            }
            req.onerror = () => resolve(0)
        } catch (e) {resolve(0)}
    })
}

async function checkLocalBackupRecovery() {
    if (!("caches" in window)) return
    const localCount = await countLocalProjects()
    if (localCount > 0) return
    let cache
    try {cache = await caches.open("pixlr-backup")} catch (e) {return}
    const response = await cache.match("/backup.zip")
    if (!response) return
    const blob = await response.blob()
    const banner = document.createElement("div")
    banner.className = "history-undo-toast"
    banner.style.bottom = "auto"
    banner.style.top = "20px"
    const span = document.createElement("span")
    span.textContent = "Local backup found"
    const restore = document.createElement("a")
    restore.textContent = "Restore"
    restore.addEventListener("click", () => {
        banner.remove()
        importZipFile(new File([blob], "backup.zip", {type: "application/zip"}))
    })
    const dismiss = document.createElement("a")
    dismiss.textContent = "Dismiss"
    dismiss.style.backgroundColor = "transparent"
    dismiss.style.opacity = "0.6"
    dismiss.addEventListener("click", () => banner.remove())
    banner.append(span, restore, dismiss)
    document.body.appendChild(banner)
}

setTimeout(checkLocalBackupRecovery, 4000)
