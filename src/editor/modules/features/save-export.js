window.__editorModules[3641] = function (t, e, s) {
      s.d(e, {
        Ab: () => f,
        D0: () => m,
        EB: () => w,
        IF: () => y,
        gr: () => v,
        zu: () => g
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(5699);
      var o = s(6);
      var r = s(7135);
      var h = s(5259);
      var l = s(749);
      var c = s(5138);
      var d = s(5887);
      var u = s(4182);
      var p = s(98);
      s(2128);
      function g() {
        return window.showSaveFilePicker !== undefined;
      }
      async function m(t, e, s, i = "image/png") {
        try {
          return await window.showSaveFilePicker({
            suggestedName: t + "." + e,
            types: [{
              description: s,
              accept: {
                [i]: ["." + e]
              }
            }]
          });
        } catch (a) {
          if (a.name === "AbortError") {
            return false;
          }
          throw a;
        }
      }
      async function y(t, e) {
        try {
          const s = await t.createWritable();
          await s.write(e);
          await s.close();
        } catch (s) {
          console.log(s);
          return false;
        }
        return true;
      }
      function v(t, e, s) {
        let i = (0, a.T)("a", {
          id: "download-link"
        });
        window.document.body.append(i);
        i.download = e + "." + s;
        i.href = URL.createObjectURL(t);
        if (i.download === undefined) {
          window.location = i.href;
        } else {
          i.click();
        }
        i.remove();
      }
      async function f(t, e, i = t.fresco) {
        const {
          ZipWriter: a
        } = await s.e(262).then(s.bind(s, 2355));
        const r = e.unit !== "pixel";
        const p = i.color && e.type !== "component" ? i.color : undefined;
        let g = (t, e) => e == 0 ? t : g(e, t % e);
        let m = t => r ? t / i.width : t;
        let y = t => r ? t / i.height : t;
        const v = g(i.width, i.height);
        const f = r ? i.width / v : i.width;
        const w = r ? i.height / v : i.height;
        let x = {
          id: e.id,
          name: e.name,
          type: e.type,
          unit: e.unit,
          width: f,
          height: w,
          background: p,
          stack: new Array()
        };
        const b = new Array();
        const A = new Array();
        const k = t.getOutputCanvas(i);
        if (e.type === "template" && t.fresco === i) {
          const t = n.tm(k, Math.round(i.width * (640 / i.height)), 640);
          const e = await n.PG(t, {
            type: "image/webp",
            quality: 0.9
          });
          b.push(new File([e], "preview.webp"));
        }
        const S = e.type === "component" ? 480 : 350;
        const E = n.tm(k, Math.round(i.width * (S / i.height)), S);
        const C = await n.PG(E, {
          type: "image/webp",
          quality: 0.7
        });
        b.push(new File([C], "thumbnail.webp"));
        for (let s = 0; s < i.layers.length; s++) {
          let t = i.layers[s];
          if (e.type !== "document" && !t.settings.visible || !t.rect) {
            continue;
          }
          if (e.type === "template" && t.type === "group") {
            continue;
          }
          const a = n.r0();
          let r = {
            name: t.settings.name,
            type: t.type,
            rect: t.rect ? {
              x: m(t.rect.x),
              y: y(t.rect.y),
              w: m(t.rect.width),
              h: y(t.rect.height),
              r: Number(t.rect.rotation.toFixed(2))
            } : undefined,
            blendmode: t.settings.blendmode !== "" ? t.settings.blendmode : undefined,
            opacity: Math.round(t.settings.opacity * 100) / 100,
            locked: t.settings.locked,
            visible: t.settings.visible,
            link: t.settings.link
          };
          if (t.macro) {
            r.macro = t.macro;
          }
          switch (t.type) {
            case l.A.TYPE_ELEMENT:
            case l.A.TYPE_IMAGE:
              r.type = l.A.TYPE_IMAGE;
              let s = t.canvas;
              if (t instanceof d.A && t.rect && s) {
                if (t.rect.width !== s.width || t.rect.height !== s.height) {
                  s = n.tm(s, t.rect.width, t.rect.height);
                }
              }
              if (t.mask) {
                let e = n.r0();
                const s = await n.PG(t.mask, {
                  type: "image/web",
                  quality: 0.8
                });
                b.push(new File([s], e + ".webp"));
                r.mask = e + ".webp";
              }
              if (s) {
                const t = await n.PG(s, {
                  type: e.nonDestructive ? "image/png" : "image/webp",
                  quality: e.quality
                });
                b.push(new File([t], a + (e.nonDestructive ? ".png" : ".webp")));
                r.content = a + (e.nonDestructive ? ".png" : ".webp");
              }
              break;
            case l.A.TYPE_TEXT:
              let i = t;
              let p = u.A.getFontDesc(i.textSettings.font);
              if (p && !A.find(t => t.name === p.name)) {
                A.push(p);
              }
              r.content = i.text;
              r.format = {
                size: y(i.textSettings.size),
                align: i.textSettings.align,
                bold: i.textSettings.bold,
                italic: i.textSettings.italic,
                underline: i.textSettings.underline,
                uppercase: i.textSettings.uppercase,
                linespace: i.textSettings.lineSpace,
                letterspace: i.textSettings.letterSpace,
                font: {
                  name: i.textSettings.font,
                  content: p ? p.short + "." + p.type : ""
                }
              };
              if (i.fill && i.fill.value && (r.format.fill = {
                type: i.fill.getType()
              }, i.fill.value instanceof h.A && (r.format.fill.value = i.fill.value.toHEX()), i.fill.value instanceof o.Ay && (r.format.fill.value = i.fill.value.toIGradient()), i.fill.value instanceof c.A)) {
                let t = n.r0();
                b.push(new File([new Blob([i.fill.value.svg], {
                  type: "image/svg+xml;charset=utf-8"
                })], t + ".svg"));
                r.format.fill.value = i.fill.value.toIPattern(t + ".svg");
              }
              if (i.textSettings.curve || i.textSettings.warp || i.textSettings.background || i.textSettings.outline || i.textSettings.shadow) {
                r.style = {};
                if (i.textSettings.warp) {
                  r.style.warp = {
                    type: i.textSettings.warpType,
                    mode: i.textSettings.warpMode,
                    edgesize: i.textSettings.warpEdgeSize,
                    centersize: i.textSettings.warpCenterSize,
                    verticaloffset: i.textSettings.warpVerticalOffset,
                    horizontaloffset: i.textSettings.warpHorizontalOffset
                  };
                }
                if (i.textSettings.curve) {
                  r.style.curve = {
                    type: i.textSettings.curveType,
                    amount: i.textSettings.curveAmount,
                    spread: i.textSettings.curveSpread,
                    flip: i.textSettings.curveFlip
                  };
                }
                if (i.textSettings.background) {
                  r.style.background = {
                    type: i.textSettings.backgroundType,
                    color: i.textSettings.backgroundColor,
                    punch: i.textSettings.backgroundPunch,
                    offset: i.textSettings.backgroundOffset
                  };
                }
                if (i.textSettings.outline) {
                  r.style.outline = {
                    size: i.textSettings.outlineSize,
                    color: i.textSettings.outlineColor,
                    punch: i.textSettings.outlinePunch,
                    distance: i.textSettings.outlineDistance,
                    direction: i.textSettings.outlineDirection
                  };
                }
                if (i.textSettings.shadow) {
                  r.style.shadow = {
                    blur: i.textSettings.shadowBlur,
                    color: i.textSettings.shadowColor,
                    opacity: i.textSettings.shadowAlpha,
                    distance: i.textSettings.shadowDistance,
                    direction: i.textSettings.shadowDirection
                  };
                }
              }
              break;
            case l.A.TYPE_SHAPE:
              let g = t;
              if (g.shapeSettings.variant === "svg") {
                if (g.shapeSettings.content) {
                  b.push(new File([new Blob([g.shapeSettings.content], {
                    type: "image/svg+xml;charset=utf-8"
                  })], a + ".svg"));
                  r.content = a + ".svg";
                }
                r.format = {
                  variant: g.shapeSettings.variant
                };
              } else {
                r.content = g.shapeSettings.content;
                r.format = {
                  variant: g.shapeSettings.variant
                };
                if (g.shapeSettings.radii !== 0) {
                  r.format.radii = g.shapeSettings.radii;
                }
                if (g.fill && g.fill.value && (r.format.fill = {
                  type: g.fill.getType()
                }, g.fill.value instanceof h.A && (r.format.fill.value = g.fill.value.toHEX()), g.fill.value instanceof o.Ay && (r.format.fill.value = g.fill.value.toIGradient()), g.fill.value instanceof c.A)) {
                  let t = n.r0();
                  b.push(new File([new Blob([g.fill.value.svg], {
                    type: "image/svg+xml;charset=utf-8"
                  })], t + ".svg"));
                  r.format.fill.value = g.fill.value.toIPattern(t + ".svg");
                }
              }
              if (g.shapeSettings.shadow || g.shapeSettings.outlineSize > 0) {
                r.style = {};
                if (g.shapeSettings.outlineSize > 0) {
                  r.style.outline = {
                    size: g.shapeSettings.outlineSize,
                    color: g.shapeSettings.outlineColor
                  };
                }
                if (g.shapeSettings.shadow) {
                  r.style.shadow = {
                    blur: g.shapeSettings.shadowBlur,
                    color: g.shapeSettings.shadowColor,
                    opacity: g.shapeSettings.shadowOpacity,
                    distance: g.shapeSettings.shadowDistance,
                    direction: g.shapeSettings.shadowDirection
                  };
                }
              }
              break;
            case l.A.TYPE_FRAME:
              let v = t;
              if (v.canvas) {
                if (!!v.trim && (v.trim.width !== v.canvas.width || v.trim.height !== v.canvas.height)) {
                  v.canvas = n.tm(v.canvas, v.trim.width, v.trim.height);
                }
                const t = await n.PG(v.canvas, {
                  type: "image/web",
                  quality: e.quality
                });
                b.push(new File([t], a + ".webp"));
                r.content = a + ".webp";
              }
              r.frame = {
                trim: v.trim ? {
                  x: m(v.trim.x),
                  y: y(v.trim.y),
                  w: m(v.trim.width),
                  h: y(v.trim.height),
                  r: 0
                } : undefined,
                clip: v.frameSettings.clip
              };
              if (v.frameSettings.outline || v.frameSettings.shadow) {
                r.style = {};
                if (v.frameSettings.outline) {
                  r.style.outline = {
                    size: v.frameSettings.outlineSize,
                    color: v.frameSettings.outlineColor
                  };
                }
                if (v.frameSettings.shadow) {
                  r.style.shadow = {
                    blur: v.frameSettings.shadowBlur,
                    color: v.frameSettings.shadowColor,
                    opacity: v.frameSettings.shadowOpacity,
                    distance: v.frameSettings.shadowDistance,
                    direction: v.frameSettings.shadowDirection
                  };
                }
              }
              break;
            case l.A.TYPE_GROUP:
              let f = t;
              r.meta = {
                members: f.groupSettings.numberOfMembers,
                collapsed: f.groupSettings.collapsed,
                color: f.groupSettings.color
              };
          }
          x.stack.push(r);
        }
        let T = new a();
        T.writeString("manifest.json", JSON.stringify(x), true);
        for (let s = 0; s < b.length; s++) {
          const t = b[s];
          let e = await t.arrayBuffer();
          let i = new Uint8Array(e);
          T.writeFile(t.name, i, t.name.endsWith(".svg"));
        }
        for (let s = 0; s < A.length; s++) {
          const t = A[s];
          let e = await u.A.getFontFile(t.name);
          if (e) {
            let s = await e.arrayBuffer();
            let i = new Uint8Array(s);
            T.writeFile(t.short + "." + t.type, i, true);
          }
        }
        const L = T.finish();
        return new Blob([L.buffer]);
      }
      async function w(t, e, i) {
        const a = await s.e(885).then(s.bind(s, 2987));
        const n = await a.PDFDocument.create();
        const o = n.addPage([t, e]);
        const r = await n.embedJpg(await i.arrayBuffer());
        o.drawImage(r, {
          x: 0,
          y: 0,
          width: t,
          height: e
        });
        return new Blob([await n.save()]);
      }
      const x = async (t, e, s = "client") => {
        const i = p.Ay.follow;
        if (e instanceof MessagePort) {
          e.postMessage(t);
        } else if (e instanceof URL && i) {
          const s = (0, a.T)("form");
          s.method = "post";
          s.action = e.toString();
          s.enctype = "multipart/form-data";
          document.body.append(s);
          s.addEventListener("formdata", e => {
            if (Array.isArray(t)) {
              t.forEach((t, s) => {
                e.formData.append(`file[${s}]`, t);
              });
            } else {
              e.formData.append("file", t);
            }
          });
          s.submit();
        } else if (e instanceof URL && !i) {
          const i = new FormData();
          if (Array.isArray(t)) {
            t.forEach((t, e) => {
              i.append(`file[${e}]`, t);
            });
          } else {
            i.append("file", t);
          }
          try {
            const t = await fetch(e, {
              method: "post",
              body: i
            });
            if (t.status < 200 && t.status >= 300) {
              throw new Error("non 2xx status");
            }
            await t.json();
            let a = `<p>The image was saved to ${s}</p> <div class="buttons center"><a class="button positive xlarge" href=" ${e} ">View</a></div>`;
            console.log("Save completed", a);
            return a;
          } catch (n) {
            console.log(`Error Failed to save to ${s}, please try again.`);
            return `Error Failed to save to ${s}, please try again.`;
          }
        }
      };
      const b = async (t = "png", e, s = false) => {
        let a;
        let o;
        o = e.getOutputCanvas();
        a = e.fresco.name || "untitled";
        a = n.Dk(a);
        let h = await n.PG(o, {
          type: "image/" + t.replace("jpg", "jpeg"),
          quality: 1
        });
        if (t === "pxz") {
          try {
            h = await f(e, {
              id: e.fresco.id,
              name: a,
              quality: 1,
              nonDestructive: true,
              type: "document",
              unit: "pixel"
            });
          } catch (d) {
            console.error(d);
            console.log("Error when creating PXZ file");
            return;
          }
        }
        if (t === "pdf") {
          h = await n.PG(o, {
            type: "image/jpeg",
            quality: 1
          });
          try {
            h = await w(e.fresco.width, e.fresco.height, h);
          } catch (d) {
            console.error(d);
            console.log("Error when creating PDF file");
            return;
          }
        }
        let l = "image/jpeg";
        let c = "Jpg image";
        switch (t) {
          case "pxz":
            l = "application/pxz";
            c = "Pixlr document";
            break;
          case "png":
            l = "image/png";
            c = "PNG image";
            break;
          case "webp":
            l = "image/webp";
            c = "WebP image";
            break;
          case "pdf":
            l = "application/pdf";
            c = "PDF document";
            break;
          case "jpeg":
            l = "image/jpeg";
            c = "Jpeg image";
        }
        if (s) {
          return new File([h], a + "." + t, {
            type: l
          });
        }
        await (async (t, e, s, a, n, o = "normal") => {
          if (o !== "normal") {
            const s = new File([n], t + "." + e, {
              type: a
            });
            await x(s, o, p.Ay.referrer);
            return;
          }
          let r;
          if (!p.Ay.useLegacySave && g() && (r = await m(t, e, s, a), r === false)) {
            return false;
          }
          if (r !== false) {
            if (r) {
              if (!(await y(r, new File([n], t + "." + e)))) {
                v(new File([n], t + "." + e), t, e);
              }
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("fileSaved")
              }));
            } else {
              v(new File([n], t + "." + e), t, e);
            }
          }
        })(a, t, c, l, h, e.fresco.saveMethod);
        (0, r.A)("quick-save", "page");
      };
      s.d(e, ["s5", 0, async t => {
        if (p.Ay.exportFormats.length === 1) {
          const e = await b(p.Ay.exportFormats[0], t, true);
          await x(e, t.fresco.saveMethod, p.Ay.referrer);
          return;
        }
        const e = p.Ay.exportFormats.map(e => b(e, t, true));
        const s = await Promise.all(e);
        await x(s, t.fresco.saveMethod, p.Ay.referrer);
      }]);
    }
