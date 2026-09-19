window.__editorModules[2128] = function (t, e, s) {
      s.d(e, {
        Tq: () => z,
        XN: () => P,
        h6: () => F
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(5699);
      var o = s(5056);
      var r = s(4587);
      var h = s(3244);
      var l = s(3088);
      var c = s(5259);
      var d = s(6050);
      var u = s(298);
      var p = s(5907);
      var g = s(7135);
      var m = s(98);
      var y = s(749);
      var v = s(5432);
      var f = s(4182);
      var w = s(2216);
      var x = s(9632);
      var b = s(4932);
      var A = s(7732);
      var k = s(6238);
      var S = s(6);
      var E = s(8464);
      var C = s(1736);
      var T = s(4358);
      var L = s(5138);
      var M = s(5096);
      var database = s(9973);
      function P(t, e = false, s = "*/*") {
        return new Promise((i, n) => {
          if ((0, a.Ay)("browse")) {
            (0, a.Ay)("browse").remove();
          }
          let o = document.createElement("input");
          o.id = "browse";
          o.type = "file";
          o.multiple = t;
          o.accept = s;
          o.className = "offscreen";
          if (e) {
            o.accept = "image/*";
            o.capture = "camera";
          }
          o.addEventListener("change", () => {
            if (o.files.length > 0) {
              i(o.files);
            } else {
              i(undefined);
            }
            document.body.removeChild(o);
          }, false);
          document.body.appendChild(o);
          o.click();
        });
      }
      async function D(t, e, s = 30000, i = "text/javascript") {
        let o = false;
        for (let a = 0; a < document.head.childNodes.length; a++) {
          const e = document.head.childNodes[a];
          if (e.nodeType === Node.ELEMENT_NODE && e.getAttribute("src") === t) {
            o = true;
            break;
          }
        }
        if (!o) {
          document.head.appendChild((0, a.T)("script", {
            src: t,
            type: i
          }));
        }
        let r = 0;
        while (!e()) {
          if (r >= s) {
            throw new Error(`Timeout triggered when loading script ${t}`);
          }
          const e = 500;
          r += e;
          await n.uk(e);
        }
      }
      async function z(t, e = null, a = true, r = "add") {
        var d;
        if (t) {
          let x;
          let b = t.type ?? "";
          (0, g.A)("open-file", b);
          if (t.type == "") {
            const e = (await n.E5(t)) ? "image/heic" : "";
            if (e) {
              b = e;
            }
          }
          try {
            switch (b) {
              case "image/psd":
              case "application/psd":
              case "application/photoshop":
              case "application/x-photoshop":
              case "image/vnd.adobe.photoshop":
                (0, g.A)("open-file", "image/psd");
                x = await _(e, t, r);
                break;
              case "image/tiff":
                x = await async function (t, e, i) {
                  const a = await async function (t) {
                    const e = (await s.e(990).then(s.t.bind(s, 8593, 23))).default;
                    const i = await (0, o.CB)(t);
                    e.initialize({
                      TOTAL_MEMORY: i.byteLength * 2
                    });
                    return new e({
                      buffer: i
                    });
                  }(e);
                  let n = e.name.replace(/^.*[\\\/]/, "");
                  if (!t) {
                    return a.toCanvas();
                  }
                  t.addImage(a.toCanvas(), n, i);
                }(e, t, r);
                break;
              case "application/zip":
                (0, g.A)("open-file", "application/zip");
                x = await I(e, t, undefined, r);
                break;
              case "image/heic":
                (0, g.A)("open-file", "image/heic");
                x = await async function (t, e, i = true, a) {
                  try {
                    const r = (await Promise.all([s.e(220), s.e(876)]).then(s.t.bind(s, 3220, 23))).default;
                    const c = await (0, o.CB)(e);
                    const d = new r.HeifDecoder();
                    const g = d.decode(c)[0];
                    const y = g.get_width();
                    const f = g.get_height();
                    const w = document.createElement("canvas");
                    w.width = y;
                    w.height = f;
                    const x = w.getContext("2d");
                    const b = x.createImageData(y, f);
                    await new Promise((t, e) => {
                      g.display(b, s => {
                        if (!s) {
                          return e(new Error("HEIF processing error"));
                        }
                        t(true);
                      });
                    });
                    x.putImageData(b, 0, 0);
                    const A = await (0, o.Ep)(await n.PG(w));
                    if (!t) {
                      return A;
                    }
                    let k;
                    let S = m.Ay.product === "editor" && i || m.Ay.product !== "editor" ? "create" : "layer";
                    if ((m.Ay.product === "express" || a === "drop") && (S = i && t.fresco ? await new p.A().init() : t.fresco ? "layer" : "create", S === "close")) {
                      return;
                    }
                    let E = 0;
                    if (m.Ay.askToPreResize && S === "create" && (A.width > 2500 || A.height > 2500)) {
                      [k, E] = await new u.A(A, await l.A.rotation(e)).init();
                      if (k === undefined) {
                        return;
                      }
                    } else {
                      k = h.A.bestFit(A.width, A.height, (0, v.zl)("premium") ? 8196 : 4096, (0, v.zl)("premium") ? 8196 : 4096).size();
                      E = 0;
                    }
                    let C = n.k8(A, k.width > k.height ? k.width : k.height, E);
                    let T = e.name ? e.name : "Untitled";
                    if (S === "create") {
                      t.addTab(new M.A(n.Os(), T, C.width, C.height, undefined, undefined, a), "image");
                    }
                    t.addImage(C, T, a);
                  } catch (r) {
                    alert("Error while loading HEIC file :(");
                    return;
                  }
                }(e, t, a, r);
                break;
              case "application/pdf":
                (0, g.A)("open-file", "application/pdf");
                x = await async function (t, e, s) {
                  const i = await (0, o.CB)(e);
                  await D("assets/static/pdf.js", () => !!window.pdfjsLib, undefined, "module");
                  const a = window.pdfjsLib;
                  a.GlobalWorkerOptions.workerSrc = "assets/static/pdf.worker.mjs";
                  const r = await a.getDocument(new Uint8Array(i)).promise;
                  const h = await r.getPage(1);
                  const l = h.getViewport({
                    scale: 1
                  });
                  const c = document.createElement("canvas");
                  const d = c.getContext("2d");
                  c.height = l.height;
                  c.width = l.width;
                  await h.render({
                    canvasContext: d,
                    viewport: l
                  }).promise;
                  const u = await (0, o.Ep)(await n.PG(c));
                  if (!t) {
                    return u;
                  }
                  t.addImage(c, e.name, s);
                }(e, t, r);
                break;
              default:
                const c = (d = t.name) === null || d === undefined ? undefined : d.toLowerCase();
                if (c) {
                  if (c.endsWith(".psd")) {
                    (0, g.A)("open-file", "image/psd");
                    x = await _(e, t, r);
                    return x;
                  }
                  if (c.endsWith(".pxd")) {
                    (0, g.A)("open-file", "image/pxd");
                    await async function (t, e, i) {
                      document.dispatchEvent(new CustomEvent("loading", {
                        detail: "start"
                      }));
                      const {
                        PXD: a
                      } = await s.e(262).then(s.bind(s, 2355));
                      const r = await (0, o.CB)(e);
                      const l = a.decode(new Uint8Array(r));
                      const c = new M.A(n.Os(), e.name, l.width, l.height, undefined, undefined, i);
                      try {
                        t.supressRender = true;
                        t.addTab(c, "document");
                        for (let e = 0; e < l.layers; e++) {
                          const e = l.takeNextLayer();
                          const s = e.width;
                          const i = e.height;
                          switch (e.kind) {
                            case "bitmap":
                            case "shape":
                              {
                                if (s === 0 || i === 0) {
                                  const s = new A.A(n.Os(), e.name, undefined, undefined, false);
                                  s.settings.opacity = e.alpha;
                                  s.settings.blendmode = e.blendMode;
                                  s.settings.visible = e.visible;
                                  s.settings.locked = e.locked;
                                  t.fresco.layers.push(s);
                                  e.free();
                                  continue;
                                }
                                const a = n.Nw(s, i);
                                const o = a.getContext("2d");
                                const r = e.takeCanvas();
                                o.putImageData(new ImageData(r, s, i), 0, 0);
                                const l = new A.A(n.Os(), e.name, a, new h.A(e.x, e.y, s, i, e.rotation), e.locked);
                                l.settings.opacity = e.alpha;
                                l.settings.blendmode = e.blendMode;
                                l.settings.visible = e.visible;
                                const c = e.takeMask();
                                if (c.length > 0) {
                                  const t = n.Nw(s, i);
                                  t.getContext("2d").putImageData(new ImageData(c, s, i), 0, 0);
                                  l.mask = t;
                                  l.render();
                                }
                                t.fresco.layers.push(l);
                                break;
                              }
                            case "text":
                              {
                                const a = JSON.parse(e.meta);
                                const o = new E.A(a.textSettings.font, a.textSettings.size);
                                Object.assign(o, a.textSettings);
                                const r = new w.A(n.Os(), a.text, new h.A(e.x, e.y, s, i, e.rotation), o);
                                r.settings.opacity = e.alpha;
                                r.settings.blendmode = e.blendMode;
                                r.settings.visible = e.visible;
                                await f.A.loadFont(o.font);
                                o.measureText();
                                await r.prepare();
                                t.fresco.layers.push(r);
                              }
                          }
                          e.free();
                        }
                      } finally {
                        l.free();
                        t.supressRender = false;
                        document.dispatchEvent(new CustomEvent("loading", {
                          detail: "stop"
                        }));
                      }
                      await t.syncDocument(t.fresco);
                      t.selectLayer(t.fresco.layers[0]);
                      t.setZoom("fit");
                      document.dispatchEvent(new CustomEvent("layerlist-update"));
                      return Promise.reject();
                    }(e, t, r);
                    return;
                  }
                  if (c.endsWith(".pxz")) {
                    (0, g.A)("open-file", "image/pxz");
                    x = await I(e, t, undefined, r);
                    return x;
                  }
                  if (c.endsWith(".svg") && r !== "frame") {
                    (0, g.A)("open-file", "image/svg+xml");
                    x = await async function (t, e, s = true, i = "add") {
                      let a = await e.text();
                      if (!t) {
                        let t = new C.A();
                        t.variant = "svg";
                        t.content = a;
                        let e = new Blob([t.content], {
                          type: "image/svg+xml"
                        });
                        return await (0, o.Ep)(e);
                      }
                      t.addSVGShape(a, e.name, i);
                    }(e, t, a, r);
                    return x;
                  }
                  if (c.endsWith(".otf") || c.endsWith(".ttf") || c.endsWith(".woff") || c.endsWith(".woff2")) {
                    (0, g.A)("open-file", "font/" + t.name.split(".")[1]);
                    await f.A.loadFontFromUpload(t);
                    return;
                  }
                }
                x = await async function (t, e, s = true, a) {
                  let r;
                  try {
                    r = await (0, o.Ep)(e);
                  } catch (w) {
                    document.dispatchEvent(new CustomEvent("notification", {
                      detail: (0, i.A)("commonFileLoadError") || "Failed to load image. The file may be corrupt or unsupported."
                    }));
                    return;
                  }
                  if (!t) {
                    return r;
                  }
                  let c;
                  let d;
                  let g = m.Ay.product === "editor" && s || m.Ay.product !== "editor" ? "create" : "layer";
                  if ((m.Ay.product === "express" || a === "drop") && (g = s && t.fresco ? await new p.A().init() : t.fresco ? "layer" : "create", g === "close")) {
                    return;
                  }
                  if (m.Ay.askToPreResize && g === "create" && (r.width > 2500 || r.height > 2500)) {
                    [c, d] = await new u.A(r, await l.A.rotation(e)).init();
                    if (c === undefined) {
                      return;
                    }
                  } else {
                    c = h.A.bestFit(r.width, r.height, (0, v.zl)("premium") ? 8196 : 4096, (0, v.zl)("premium") ? 8196 : 4096).size();
                    d = 0;
                  }
                  let y = n.k8(r, c.width > c.height ? c.width : c.height, d);
                  let f = e.name ? e.name : r.src.replace(/^.*[\\\/]/, "");
                  if (g === "create") {
                    t.addTab(new M.A(n.Os(), f, y.width, y.height, undefined, undefined, a), "image");
                  }
                  t.addImage(y, f, a);
                }(e, t, a, r);
            }
            return x;
          } catch (y) {
            document.dispatchEvent(new CustomEvent("loading", {
              detail: "stop"
            }));
            throw y;
          }
        } else {
          document.dispatchEvent(new CustomEvent("loading", {
            detail: "stop"
          }));
        }
      }
      function __parseStoreZip(buf) {
        try {
          const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
          const entries = [];
          let off = 0;
          while (off + 30 <= buf.length && dv.getUint32(off, true) === 0x04034b50) {
            const method = dv.getUint16(off + 8, true);
            if (method !== 0) return null;
            const compSize = dv.getUint32(off + 18, true);
            const nameLen = dv.getUint16(off + 26, true);
            const extraLen = dv.getUint16(off + 28, true);
            const nameStart = off + 30;
            const name = new TextDecoder().decode(buf.subarray(nameStart, nameStart + nameLen));
            const dataStart = nameStart + nameLen + extraLen;
            const data = buf.subarray(dataStart, dataStart + compSize);
            entries.push({name, data});
            off = dataStart + compSize;
            if (entries.length > 1000) break;
          }
          return entries.length ? entries : null;
        } catch (e) {
          return null;
        }
      }
      async function I(t, e, i, a, bulk = false) {
        const __pxzBuf = new Uint8Array(await e.arrayBuffer());
        const __pxzEntries = __parseStoreZip(__pxzBuf);
        if (__pxzEntries && __pxzEntries.length && !__pxzEntries.some(en => en.name === "manifest.json") && __pxzEntries.every(en => /\.pxz$/i.test(en.name))) {
          document.dispatchEvent(new CustomEvent("loading", {detail: "start"}));
          t.importing = true;
          try {
            let __skipped = 0;
            let completed = 0;
            for (const en of __pxzEntries) {
              completed++;
              document.dispatchEvent(new CustomEvent("loading", {detail: "Importing " + completed + " of " + __pxzEntries.length}));
              while (t.syncQueue) await new Promise(resolve => setTimeout(resolve, 10));
              if (await I(t, new File([en.data], en.name), i, a, true) === false) __skipped++;
              await new Promise(resolve => setTimeout(resolve, 0));
            }
            if (__skipped > 0) {
              document.dispatchEvent(new CustomEvent("notification", {detail: "Skipped " + __skipped + " already-imported project(s)"}));
            }
          } finally {
            t.importing = false;
            document.dispatchEvent(new CustomEvent("loading", {detail: "stop"}));
            document.dispatchEvent(new CustomEvent("navigate", {detail: "home"}));
          }
          return;
        }
        const {
          ZipReader: r
        } = await s.e(262).then(s.bind(s, 2355));
        let h;
        try {
          h = new r(__pxzBuf);
          let c = h.readString("manifest.json");
          let u = JSON.parse(c);
          if (!t) {
            const t = u.stack[0];
            if (t.type === y.A.TYPE_IMAGE || t.type === y.A.TYPE_ELEMENT) {
              let e = h.readFile(t.content);
              if (e) {
                return await (0, o.Ep)(new Blob([e.buffer]));
              }
            }
            throw new Error("No image in PXZ file");
          }
          if (bulk && u.id) {
            const connection = await database.P2();
            const [store] = connection.transaction("readonly", "document-meta");
            if (await store.get(u.id)) return false;
          }
          if (!bulk) t.supressRender = true;
          const p = new M.A(bulk && u.id ? u.id : n.Os(), u.name, u.width, u.height, u.background, i, a);
          if (!bulk) t.addTab(p, "template");
          if (!bulk) document.dispatchEvent(new CustomEvent("loading", {
            detail: "start"
          }));
          if (!bulk) try {
            let e = h.readFile("thumbnail.webp");
            let s = await n.lz(new Blob([e.buffer]));
            t.renderPreview(s);
          } catch (l) {
            console.log(l);
          }
          let g = await R(u, new d.A(), h, undefined, bulk);
          p.layers.push(...g);
          await t.syncDocument(p);
          if (bulk) {
            const thumbnail = h.readFile("thumbnail.webp");
            if (thumbnail) {
              const connection = await database.P2();
              const [store] = connection.transaction("readwrite", "document-thumbnail");
              await store.put(new Blob([thumbnail], {type: "image/webp"}), p.id);
            }
          }
        } catch (c) {
          console.log(c);
          alert("Error while loading PXZ file :(");
          return;
        } finally {
          if (h != null) {
            h.free();
          }
          if (t && !bulk) {
            t.supressRender = false;
          }
          if (!bulk) document.dispatchEvent(new CustomEvent("loading", {
            detail: "stop"
          }));
        }
        if (bulk) return;
        t.selectLayer(t.fresco.layers[0]);
        t.setZoom("fit");
        document.dispatchEvent(new CustomEvent("layerlist-update"));
      }
      async function F(t, e) {
        let s;
        document.dispatchEvent(new CustomEvent("loading", {
          detail: "start"
        }));
        let i = new d.A();
        try {
          const a = await fetch(e);
          const n = await a.json();
          i.x = Math.round((t.fresco.width - n.width) / 2);
          i.y = Math.round((t.fresco.height - n.height) / 2);
          s = await R(n, i);
        } catch (o) {
          console.log(o);
          document.dispatchEvent(new CustomEvent("loading", {
            detail: "stop"
          }));
        }
        if (!s || s.length === 0) {
          return;
        }
        const a = n.r0();
        s.forEach(t => t.settings.link = a);
        t.addLayer(s);
        document.dispatchEvent(new CustomEvent("loading", {
          detail: "stop"
        }));
        document.dispatchEvent(new CustomEvent("layer-select"));
        document.dispatchEvent(new CustomEvent("viewport-render"));
        document.dispatchEvent(new CustomEvent("layerlist-update"));
      }
      async function R(t, e = new d.A(), s, i, bulk = false) {
        let l = new Array();
        if (t.stack) {
          for (let d = 0; d < t.stack.length; d++) {
            let u = t.stack[d];
            switch (u.type) {
              case y.A.TYPE_IMAGE:
              case y.A.TYPE_ELEMENT:
                {
                  let t;
                  const encoded = {};
                  let a = u.rect ? new h.A(u.rect.x + e.x, u.rect.y + e.y, u.rect.w, u.rect.h, u.rect.r) : undefined;
                  if (u.content !== undefined) {
                    if (s) {
                      let e = s.readFile(u.content);
                      if (e) {
                        encoded.bitmap = new Blob([e]);
                        if (!bulk) t = await n.lz(encoded.bitmap);
                      }
                    } else {
                      let e = await (0, o.yP)(i + u.content);
                      if (e) {
                        t = await n.lz(e);
                      }
                    }
                  }
                  let r = new A.A(n.Os(), u.name, t, a, u.locked);
                  if (bulk) r.encoded = encoded;
                  if (u.opacity !== undefined) {
                    r.settings.opacity = u.opacity;
                  }
                  if (u.blendmode !== undefined) {
                    r.settings.blendmode = u.blendmode;
                  }
                  if (u.locked !== undefined) {
                    r.settings.locked = u.locked;
                  }
                  if (u.visible !== undefined) {
                    r.settings.visible = u.visible;
                  }
                  if (u.macro !== undefined) {
                    r.macro = u.macro;
                  }
                  if (u.mask !== undefined && s) {
                    let t = s.readFile(u.mask);
                    if (t) {
                      encoded.mask = new Blob([t]);
                      if (!bulk) r.mask = await n.lz(encoded.mask);
                    }
                    if (!bulk) r.render();
                  }
                  l.push(r);
                  break;
                }
              case y.A.TYPE_TEXT:
                {
                  if (!u.format) {
                    continue;
                  }
                  let t = new E.A(u.format.font?.name, u.format.size, !bulk);
                  if (u.format.align !== undefined) {
                    t.align = u.format.align;
                  }
                  if (u.format.bold !== undefined) {
                    t.bold = u.format.bold;
                  }
                  if (u.format.italic !== undefined) {
                    t.italic = u.format.italic;
                  }
                  if (u.format.underline !== undefined) {
                    t.underline = u.format.underline;
                  }
                  if (u.format.uppercase !== undefined) {
                    t.uppercase = u.format.uppercase;
                  }
                  if (u.format.linespace !== undefined) {
                    t.lineSpace = u.format.linespace;
                  }
                  if (u.format.letterspace !== undefined) {
                    t.letterSpace = u.format.letterspace;
                  }
                  let d = new w.A(n.Os(), u.content, new h.A(u.rect.x + e.x, u.rect.y + e.y, u.rect.w, u.rect.h, u.rect.r), t);
                  if (u.opacity !== undefined) {
                    d.settings.opacity = u.opacity;
                  }
                  if (u.blendmode !== undefined) {
                    d.settings.blendmode = u.blendmode;
                  }
                  if (u.locked !== undefined) {
                    d.settings.locked = u.locked;
                  }
                  if (u.visible !== undefined) {
                    d.settings.visible = u.visible;
                  }
                  if (u.macro !== undefined) {
                    d.macro = u.macro;
                  }
                  if (t.font) {
                    let e = f.A.getFontDesc(t.font);
                    if (!e && u.format.font.content) {
                      let t;
                      t = s ? new Blob([s.readFile(u.format.font.content)]) : await (0, o.yP)(i + u.format.font.content);
                      if (t) {
                        e = await f.A.loadFontFromTemplate(t, u.format.font.name, u.format.font.content);
                      }
                    } else if (e && !bulk) {
                      await f.A.addToDOM(e);
                    }
                    if (!bulk) t.measureText();
                  }
                  if (u.style) {
                    if (u.style.curve) {
                      d.textSettings.curve = true;
                      if (u.style.curve.type !== undefined) {
                        d.textSettings.curveType = u.style.curve.type;
                      }
                      if (u.style.curve.amount !== undefined) {
                        d.textSettings.curveAmount = u.style.curve.amount;
                      }
                      if (u.style.curve.spread !== undefined) {
                        d.textSettings.curveSpread = u.style.curve.spread;
                      }
                      if (u.style.curve.flip !== undefined) {
                        d.textSettings.curveFlip = u.style.curve.flip;
                      }
                    }
                    if (u.style.warp) {
                      d.textSettings.warp = true;
                      if (u.style.warp.type !== undefined) {
                        d.textSettings.warpType = u.style.warp.type;
                      }
                      if (u.style.warp.mode !== undefined) {
                        d.textSettings.warpMode = u.style.warp.mode;
                      }
                      if (u.style.warp.edgesize !== undefined) {
                        d.textSettings.warpEdgeSize = u.style.warp.edgesize;
                      }
                      if (u.style.warp.centersize !== undefined) {
                        d.textSettings.warpCenterSize = u.style.warp.centersize;
                      }
                      if (u.style.warp.verticaloffset !== undefined) {
                        d.textSettings.warpVerticalOffset = u.style.warp.verticaloffset;
                      }
                      if (u.style.warp.horizontaloffset !== undefined) {
                        d.textSettings.warpHorizontalOffset = u.style.warp.horizontaloffset;
                      }
                    }
                    if (u.style.background) {
                      d.textSettings.background = true;
                      if (u.style.background.color !== undefined) {
                        d.textSettings.backgroundColor = u.style.background.color;
                      }
                      if (u.style.background.type !== undefined) {
                        d.textSettings.backgroundType = u.style.background.type;
                      }
                      if (u.style.background.punch !== undefined) {
                        d.textSettings.backgroundPunch = u.style.background.punch;
                      }
                      if (u.style.background.offset !== undefined) {
                        d.textSettings.backgroundOffset = u.style.background.offset;
                      }
                    }
                    if (u.style.outline) {
                      d.textSettings.outline = true;
                      if (u.style.outline.size !== undefined) {
                        d.textSettings.outlineSize = u.style.outline.size;
                      }
                      if (u.style.outline.color !== undefined) {
                        d.textSettings.outlineColor = u.style.outline.color;
                      }
                      if (u.style.outline.punch !== undefined) {
                        d.textSettings.outlinePunch = u.style.outline.punch;
                      }
                      if (u.style.outline.distance !== undefined) {
                        d.textSettings.outlineDistance = u.style.outline.distance;
                      }
                      if (u.style.outline.direction !== undefined) {
                        d.textSettings.outlineDirection = u.style.outline.direction;
                      }
                    }
                    if (u.style.shadow) {
                      d.textSettings.shadow = true;
                      if (u.style.shadow.blur !== undefined) {
                        d.textSettings.shadowBlur = u.style.shadow.blur;
                      }
                      if (u.style.shadow.color !== undefined) {
                        d.textSettings.shadowColor = u.style.shadow.color;
                      }
                      if (u.style.shadow.opacity !== undefined) {
                        d.textSettings.shadowAlpha = u.style.shadow.opacity;
                      }
                      if (u.style.shadow.distance !== undefined) {
                        d.textSettings.shadowDistance = u.style.shadow.distance;
                      }
                      if (u.style.shadow.direction !== undefined) {
                        d.textSettings.shadowDirection = u.style.shadow.direction;
                      }
                    }
                  }
                  if (u.format.fill !== undefined) {
                    let t;
                    switch (u.format.fill.type) {
                      case "color":
                        t = new r.A(c.A.fromHEX(u.format.fill.value));
                        break;
                      case "gradient":
                        t = new r.A(S.Ay.fromIGradient(u.format.fill.value));
                        break;
                      case "pattern":
                        let e = u.format.fill.value;
                        if (s) {
                          e.svg = s.readString(e.svg);
                        } else {
                          let t = await (0, o.yP)(i + e.svg);
                          if (t) {
                            e.svg = await t.text();
                          }
                        }
                        t = new r.A(await L.A.fromIPattern(e));
                    }
                    d.textSettings.fillType = t.getType();
                    d.textSettings.fillValue = t.getStringValue();
                    d.fill = t;
                  }
                  if (!bulk) await d.prepare();
                  d.settings.name = u.name;
                  l.push(d);
                  break;
                }
              case y.A.TYPE_SHAPE:
                {
                  let t = new C.A();
                  t.variant = u.format ? u.format.variant : "svg";
                  if (t.variant === "svg") {
                    let e;
                    if (u.content) {
                      if (s) {
                        e = s.readString(u.content);
                      } else {
                        let t = await (0, o.yP)(i + u.content);
                        if (t) {
                          e = await t.text();
                        }
                      }
                    }
                    if (!e) {
                      continue;
                    }
                    t.content = e;
                  }
                  if (t.variant === "path") {
                    t.content = u.content;
                  }
                  if (u.style) {
                    if (u.style.outline) {
                      if (u.style.outline.size !== undefined) {
                        t.outlineSize = u.style.outline.size;
                      }
                      if (u.style.outline.color !== undefined) {
                        t.outlineColor = u.style.outline.color;
                      }
                    }
                    if (u.style.shadow) {
                      t.shadow = true;
                      if (u.style.shadow.blur !== undefined) {
                        t.shadowBlur = u.style.shadow.blur;
                      }
                      if (u.style.shadow.color !== undefined) {
                        t.shadowColor = u.style.shadow.color;
                      }
                      if (u.style.shadow.opacity !== undefined) {
                        t.shadowOpacity = u.style.shadow.opacity;
                      }
                      if (u.style.shadow.distance !== undefined) {
                        t.shadowDistance = u.style.shadow.distance;
                      }
                      if (u.style.shadow.direction !== undefined) {
                        t.shadowDirection = u.style.shadow.direction;
                      }
                    }
                  }
                  let a = new x.A(n.Os(), u.name, new h.A(u.rect.x + e.x, u.rect.y + e.y, u.rect.w, u.rect.h, u.rect.r), t);
                  if (u.opacity !== undefined) {
                    a.settings.opacity = u.opacity;
                  }
                  if (u.blendmode !== undefined) {
                    a.settings.blendmode = u.blendmode;
                  }
                  if (u.locked !== undefined) {
                    a.settings.locked = u.locked;
                  }
                  if (u.visible !== undefined) {
                    a.settings.visible = u.visible;
                  }
                  if (u.macro !== undefined) {
                    a.macro = u.macro;
                  }
                  if (u.format !== undefined) {
                    if (u.format.fill !== undefined) {
                      let t;
                      switch (u.format.fill.type) {
                        case "color":
                          t = new r.A(c.A.fromHEX(u.format.fill.value));
                          break;
                        case "gradient":
                          t = new r.A(S.Ay.fromIGradient(u.format.fill.value));
                          break;
                        case "pattern":
                          let e = u.format.fill.value;
                          if (s) {
                            e.svg = s.readString(e.svg);
                          } else {
                            let t = await (0, o.yP)(i + e.svg);
                            if (t) {
                              e.svg = await t.text();
                            }
                          }
                          t = new r.A(await L.A.fromIPattern(e));
                      }
                      a.shapeSettings.fillType = t.getType();
                      a.shapeSettings.fillValue = t.getStringValue();
                      a.fill = t;
                    }
                    if (u.format.radii) {
                      a.shapeSettings.radii = u.format.radii;
                    }
                  }
                  if (!bulk) await a.prepare();
                  l.push(a);
                  break;
                }
              case y.A.TYPE_FRAME:
                {
                  let t = new b.A(n.Os(), u.name, new h.A(u.rect.x + e.x, u.rect.y + e.y, u.rect.w, u.rect.h, u.rect.r));
                  if (u.opacity !== undefined) {
                    t.settings.opacity = u.opacity;
                  }
                  if (u.blendmode !== undefined) {
                    t.settings.blendmode = u.blendmode;
                  }
                  if (u.locked !== undefined) {
                    t.settings.locked = u.locked;
                  }
                  if (u.visible !== undefined) {
                    t.settings.visible = u.visible;
                  }
                  if (u.macro !== undefined) {
                    t.macro = u.macro;
                  }
                  if (u.frame) {
                    if (u.frame.trim !== undefined) {
                      t.trim = new h.A(u.frame.trim.x, u.frame.trim.y, u.frame.trim.w, u.frame.trim.h);
                    }
                    if (u.frame.clip !== undefined) {
                      t.frameSettings.clip = u.frame.clip;
                    }
                  }
                  if (u.content) {
                    if (s) {
                      let e = s.readFile(u.content);
                      if (e) {
                        t.canvas = await n.lz(new Blob([e.buffer]));
                      }
                    } else {
                      let e = await (0, o.yP)(i + u.content);
                      if (e) {
                        t.canvas = await n.lz(e);
                      }
                    }
                  }
                  if (u.style) {
                    if (u.style.outline) {
                      t.frameSettings.outline = true;
                      if (u.style.outline.size !== undefined) {
                        t.frameSettings.outlineSize = u.style.outline.size;
                      }
                      if (u.style.outline.color !== undefined) {
                        t.frameSettings.outlineColor = u.style.outline.color;
                      }
                    }
                    if (u.style.shadow) {
                      t.frameSettings.shadow = true;
                      if (u.style.shadow.blur !== undefined) {
                        t.frameSettings.shadowBlur = u.style.shadow.blur;
                      }
                      if (u.style.shadow.color !== undefined) {
                        t.frameSettings.shadowColor = u.style.shadow.color;
                      }
                      if (u.style.shadow.opacity !== undefined) {
                        t.frameSettings.shadowOpacity = u.style.shadow.opacity;
                      }
                      if (u.style.shadow.distance !== undefined) {
                        t.frameSettings.shadowDistance = u.style.shadow.distance;
                      }
                      if (u.style.shadow.direction !== undefined) {
                        t.frameSettings.shadowDirection = u.style.shadow.direction;
                      }
                    }
                  }
                  t.prepare();
                  l.push(t);
                  break;
                }
              case y.A.TYPE_GROUP:
                {
                  let t = new k.A(n.Os(), u.name, new T.A());
                  if (u.meta !== undefined) {
                    if (u.meta.color !== undefined) {
                      t.groupSettings.color = u.meta.color;
                    }
                    if (u.meta.collapsed !== undefined) {
                      t.groupSettings.collapsed = u.meta.collapsed;
                    }
                    if (u.meta.members !== undefined) {
                      t.groupSettings.numberOfMembers = u.meta.members;
                    }
                  }
                  if (u.opacity !== undefined) {
                    t.settings.opacity = u.opacity;
                  }
                  if (u.locked !== undefined) {
                    t.settings.locked = u.locked;
                  }
                  if (u.visible !== undefined) {
                    t.settings.visible = u.visible;
                  }
                  if (u.macro !== undefined) {
                    t.macro = u.macro;
                  }
                  break;
                }
            }
          }
        }
        return l;
      }
      async function _(t, e, s) {
        document.dispatchEvent(new CustomEvent("loading", {
          detail: "start"
        }));
        const i = await async function (t) {
          await D("assets/static/psd.js", () => window.require && window.require("psd"));
          const e = window.require("psd");
          const s = await new Response(t).arrayBuffer();
          const i = new e(new Uint8Array(s));
          i.parse();
          return i;
        }(e);
        const a = i.tree();
        if (!t) {
          document.dispatchEvent(new CustomEvent("loading", {
            detail: "stop"
          }));
          return await i.image.toPng();
        }
        const o = new M.A(n.Os(), e.name, i.header.cols, i.header.rows, undefined, undefined, s);
        try {
          t.supressRender = true;
          t.addTab(o, "document");
          let e = a.descendants();
          for (let s = e.length - 1; s >= 0; s--) {
            const i = e[s];
            if (!i.isGroup()) {
              try {
                const a = new h.A(i.layer.left, i.layer.top, i.layer.width, i.layer.height);
                const o = i.get("typeTool");
                let r;
                if (o) {
                  const t = o.export();
                  let e = t.font.sizes ? t.font.sizes[0] : 12;
                  const s = t.font.name.trim();
                  const i = new E.A(s.substr(0, s.length - 1), e);
                  r = new w.A(n.Os(), t.value.trim(), a.clone(), i);
                  r.textSettings.fillType = "color";
                  r.textSettings.fillValue = new c.A(t.font.colors[0][0], t.font.colors[0][1], t.font.colors[0][2], t.font.colors[0][3]).toHEX();
                  r.prepare();
                } else {
                  const t = await new Promise((t, e) => {
                    const s = i.toPng();
                    s.onload = () => t(s);
                    s.onerror = t => e(t);
                  });
                  let o = n.k8(t, 4096);
                  r = new A.A(n.Os(), i.layer.name, o, a, s == e.length - 1);
                }
                const l = {
                  norm: "source-over",
                  dark: "darken",
                  lite: "lighten",
                  hue: "hue",
                  sat: "saturation",
                  colr: "color",
                  lum: "luminosity",
                  mul: "multiply",
                  scrn: "screen",
                  diss: "source-over",
                  over: "overlay",
                  hLit: "hard-light",
                  sLit: "soft-light",
                  diff: "difference",
                  smud: "exclusion",
                  div: "color-doge",
                  idiv: "color-burn",
                  lbrn: "source-over",
                  lddg: "source-over",
                  vLit: "source-over",
                  lLit: "source-over",
                  pLit: "source-over",
                  hMix: "source-over",
                  pass: "source-over",
                  dkCl: "source-over",
                  lgCl: "source-over",
                  fsub: "source-over",
                  fdiv: "source-over"
                };
                r.settings.blendmode = l[i.layer.blendMode.blendKey] || "source-over";
                r.settings.visible = i.layer.visible;
                r.settings.opacity = i.layer.opacity / 255;
                t.fresco.layers.push(r);
              } catch (r) {
                console.log("pxd layer read", r);
              }
            }
          }
          t.selectLayer(t.fresco.layers[0]);
          await t.syncDocument(t.fresco);
        } catch (r) {
          t.close(o.id);
          throw r;
        } finally {
          t.supressRender = false;
          document.dispatchEvent(new CustomEvent("loading", {
            detail: "stop"
          }));
        }
        t.setZoom("fit");
        document.dispatchEvent(new CustomEvent("layerlist-update"));
      }
    }
