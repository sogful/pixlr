window.__editorModules[6460] = function (t, e, s) {
      s.d(e, {
        Z: () => u
      });
      var i = s(5699);
      var a = s(651);
      var n = s(3244);
      var o = s(6050);
      var r = s(7872);
      var h = s(2216);
      var l = s(7732);
      var c = s(4932);
      var d = s(6279);
      async function u(t, e) {
        var m;
        var y;
        const v = new Date();
        switch (e.type) {
          case "bitmapChange":
            {
              if (!t.hasLayer(e.layer)) {
                return;
              }
              const s = e.layer;
              const a = s.rect ? s.rect.clone() : undefined;
              let o;
              let r = (0, d.$z)(s.mask);
              if (s.canvas) {
                o = s.canvas.getContext("2d").getImageData(e.patchRect.x, e.patchRect.y, e.patchRect.width, e.patchRect.height);
              }
              if (e.patch) {
                const t = e.rect;
                const n = !!s.canvas;
                s.extendCanvas(t);
                const o = s.canvas.getContext("2d");
                if (n) {
                  e.patchRect.x += a.x - s.rect.x;
                  e.patchRect.y += a.y - s.rect.y;
                }
                o.putImageData(e.patch, e.patchRect.x, e.patchRect.y);
                if (e.rect.width < s.rect.width || e.rect.height < s.rect.height) {
                  const a = i.Nw(e.rect.width, e.rect.height);
                  a.getContext("2d").drawImage(s.canvas, s.rect.x - e.rect.x, s.rect.y - e.rect.y);
                  e.patchRect.x += s.rect.x - t.x;
                  e.patchRect.y += s.rect.y - t.y;
                  s.canvas = a;
                  s.rect = t;
                }
              } else {
                s.canvas = null;
                s.rect = new n.A(0, 0, 0, 0);
              }
              if (e.mask) {
                s.mask = (0, d.Mo)(e.mask);
              }
              s.render();
              e.layer.syncRequested = v;
              return {
                type: "bitmapChange",
                kind: e.kind,
                layer: s,
                rect: a,
                patch: o,
                patchRect: e.patchRect.clone(),
                mask: r
              };
            }
          case "bitmapSwitch":
            {
              const t = (0, d.$z)(e.layer.canvas);
              const s = e.layer.trim ? e.layer.trim.clone() : e.layer.rect.clone();
              e.layer.switchCanvas((0, d.Mo)(e.canvas), e.rect);
              e.layer.render();
              e.layer.syncRequested = v;
              return {
                type: "bitmapSwitch",
                kind: e.kind,
                layer: e.layer,
                rect: s,
                canvas: t
              };
            }
          case "selectionAndBitmapSwitch":
            {
              const i = (0, d.$z)(e.layer.canvas);
              const a = e.layer.rect.clone();
              e.layer.switchCanvas((0, d.Mo)(e.canvas), e.rect);
              e.layer.render();
              e.layer.syncRequested = v;
              const n = (0, d.$z)((t == null ? undefined : t.selection)?.mask);
              t.addSelection();
              t.selection.setMask((0, d.Mo)(e.selection));
              return {
                type: "selectionAndBitmapSwitch",
                kind: e.kind,
                selection: n,
                layer: e.layer,
                rect: a,
                canvas: i
              };
            }
          case "addLayer":
            {
              const s = t.layerNr(e.layer.id);
              const i = t.deleteLayerById(e.layer.id);
              return {
                type: "addLayer",
                kind: e.kind,
                layer: i,
                order: s
              };
            }
          case "deleteLayer":
            t.layers.splice(e.index, 0, e.layer);
            return e;
          case "order":
            t.changeLayerOrder(e.to, e.from);
            return e;
          case "layerSettings":
            {
              const t = Object.assign({}, e.layer.settings);
              e.layer.settings = e.settings;
              e.layer.syncRequested = v;
              return {
                type: "layerSettings",
                kind: e.kind,
                layer: e.layer,
                settings: t
              };
            }
          case "textChange":
            {
              const t = e.layer.text;
              e.layer.setText(e.text);
              e.layer.syncRequested = v;
              return {
                type: "textChange",
                layer: e.layer,
                text: t
              };
            }
          case "textSettings":
            {
              const t = e.layer.textSettings.clone();
              e.layer.textSettings = e.settings;
              e.layer.textSettings.measureText();
              await e.layer.prepare(true);
              e.layer.syncRequested = v;
              return {
                type: "textSettings",
                kind: e.kind,
                layer: e.layer,
                settings: t
              };
            }
          case "background":
            {
              const s = t.color;
              t.color = e.color;
              return {
                type: "background",
                color: s
              };
            }
          case "mask":
            {
              const t = e.layer;
              let s;
              const i = t.hasMask();
              if (!i && e.patch) {
                e.layer.addMask();
              }
              if (e.patch) {
                const a = e.patch;
                const n = t.mask.getContext("2d");
                if (i) {
                  s = n.getImageData(e.rect.x, e.rect.y, e.rect.width, e.rect.height);
                }
                n.putImageData(a, e.rect.x, e.rect.y);
              } else {
                if (i) {
                  s = t.mask.getContext("2d").getImageData(0, 0, t.mask.width, t.mask.height);
                }
                e.layer.removeMask();
              }
              t.render();
              e.layer.syncRequested = v;
              return {
                type: "mask",
                layer: t,
                rect: e.patch && e.rect ? e.rect : new n.A(0, 0, t.canvas.width, t.canvas.height),
                patch: s
              };
            }
          case "maskInvert":
            e.layer.invertMask();
            e.layer.render();
            e.layer.syncRequested = v;
            return {
              type: "maskInvert",
              layer: e.layer
            };
          case "adjust":
            {
              const t = e.shaders.cloneChain();
              e.shaders.chain = e.chain;
              return {
                type: "adjust",
                layer: e.layer,
                kind: e.kind,
                chain: t,
                shaders: e.shaders
              };
            }
          case "glitch":
            {
              const t = e.shaders.cloneChain();
              e.shaders.chain = e.chain;
              return {
                type: "glitch",
                layer: e.layer,
                kind: e.kind,
                chain: t,
                shaders: e.shaders
              };
            }
          case "effect":
            {
              let t;
              let s;
              if (e.tool.marked) {
                t = e.tool.marked.name;
                s = e.tool.marked.value;
              }
              e.tool.shaders.reset();
              if (e.name) {
                e.tool.shaders.addPreset(e.name, e.value);
                e.tool.marked = new r.A(e.name, e.value);
              } else {
                e.tool.marked = undefined;
              }
              return {
                type: "effect",
                layer: e.layer,
                kind: e.kind,
                tool: e.tool,
                name: t,
                value: s
              };
            }
          case "arrange":
            e.layer.syncRequested = v;
            switch (e.action.type) {
              case "rect":
                {
                  const t = e.layer.rect.clone();
                  e.layer.rect = e.action.rect;
                  if (e.layer instanceof h.A) {
                    t.height = e.layer.textSettings.size;
                    if (e.layer.rect.height !== e.layer.textSettings.size) {
                      e.layer.setTextSize(e.layer.rect.height);
                    }
                  }
                  if (e.layer instanceof c.A) {
                    e.layer.trimOnResize(t);
                  }
                  if (!(e.layer instanceof l.A)) {
                    e.layer.render();
                  }
                  return {
                    type: "arrange",
                    kind: e.kind,
                    action: {
                      type: "rect",
                      rect: t
                    },
                    layer: e.layer
                  };
                }
              case "trim":
                {
                  const t = e.layer.trim.clone();
                  e.layer.trim = e.action.rect;
                  e.layer.render();
                  return {
                    type: "arrange",
                    kind: e.kind,
                    action: {
                      type: "trim",
                      rect: t
                    },
                    layer: e.layer
                  };
                }
              case "trans":
                {
                  const t = (0, d.$z)(e.layer.canvas);
                  const s = (0, d.$z)(e.layer.mask);
                  const i = e.layer.rect.clone();
                  e.layer.canvas = (0, d.Mo)(e.action.data);
                  e.layer.mask = (0, d.Mo)(e.action.mask);
                  e.layer.rect = e.action.rect;
                  e.layer.render();
                  return {
                    type: "arrange",
                    layer: e.layer,
                    kind: e.kind,
                    action: {
                      type: "trans",
                      data: t,
                      mask: s,
                      rect: i
                    }
                  };
                }
            }
          case "arrangeStack":
            {
              let t = e.stack;
              let s = e.rects;
              let i = new Array();
              for (let e = 0; e < t.length; e++) {
                let a = t[e];
                let n = a.rect ? a.rect.clone() : undefined;
                a.rect = s[e];
                if (a instanceof h.A) {
                  n.height = a.textSettings.size;
                  if (a.rect.height !== a.textSettings.size) {
                    a.setTextSize(a.rect.height);
                  }
                }
                if (a instanceof c.A) {
                  a.trimOnResize(n);
                }
                i.push(n);
                a.syncRequested = v;
                a.render();
              }
              return {
                type: "arrangeStack",
                id: e.id,
                kind: "arrange",
                stack: e.stack,
                rects: i
              };
            }
          case "link":
            {
              let t = e.stack;
              let s = new Array();
              for (let e = 0; e < t.length; e++) {
                s.push({
                  layer: t[e].layer,
                  link: t[e].layer.settings.link ?? ""
                });
                t[e].layer.settings.link = t[e].link;
                t[e].layer.syncRequested = v;
              }
              return {
                type: "link",
                kind: e.kind,
                stack: s
              };
            }
          case "flipLayer":
            e.layer.flip(e.vertical);
            e.layer.render();
            e.layer.syncRequested = v;
            return {
              type: "flipLayer",
              layer: e.layer,
              vertical: e.vertical
            };
          case "rotateLayer":
            e.layer.rotate(!e.counterClock);
            e.layer.render();
            e.layer.syncRequested = v;
            return {
              type: "rotateLayer",
              layer: e.layer,
              counterClock: !e.counterClock
            };
          case "crop":
            {
              const s = new o.A(-e.offset.x, -e.offset.y);
              const i = new a.A(t.width, t.height);
              let r;
              t.crop(new n.A(e.offset.x, e.offset.y, e.size.width, e.size.height));
              if (e.straighten) {
                const s = t.layers[0];
                r = (0, d.$z)(s.canvas);
                s.syncRequested = v;
                s.canvas = (0, d.Mo)(e.straighten);
                s.rect = new n.A(0, 0, s.canvas.width, s.canvas.height);
                t.width = s.rect.width;
                t.height = s.rect.height;
              }
              t.layers.forEach(t => t.syncRequested = v);
              document.dispatchEvent(new CustomEvent("reset-viewport"));
              return {
                type: "crop",
                offset: s,
                size: i,
                straighten: r
              };
            }
          case "pageSize":
            {
              const s = new a.A(t.width, t.height);
              t.size(e.size.width, e.size.height, false, e.anchor);
              document.dispatchEvent(new CustomEvent("reset-viewport"));
              return {
                type: "pageSize",
                anchor: e.anchor,
                size: s
              };
            }
          case "pageResize":
            {
              const s = new a.A(t.width, t.height);
              const i = t.layers.map(t => t.clone(true));
              t.width = e.size.width;
              t.height = e.size.height;
              for (let a = 0; a < e.layers.length; a++) {
                const s = e.layers[a];
                s.syncRequested = v;
                t.replaceLayer(s);
                s.render();
              }
              if (t.selection) {
                t.selection.resize(t.width, t.height);
              }
              document.dispatchEvent(new CustomEvent("reset-viewport"));
              return {
                type: "pageResize",
                size: s,
                layers: i
              };
            }
          case "flip":
            t.flip(e.vertical);
            t.layers.forEach(t => t.syncRequested = v);
            return {
              type: "flip",
              vertical: e.vertical
            };
          case "rotate":
            t.rotate(!e.counterClock);
            document.dispatchEvent(new CustomEvent("reset-viewport"));
            t.layers.forEach(t => t.syncRequested = v);
            return {
              type: "rotate",
              counterClock: e.counterClock
            };
          case "selectionChange":
            {
              const s = (0, d.$z)((t == null ? undefined : t.selection)?.mask);
              if (e.selection) {
                t.addSelection();
                t.selection.setMask((0, d.Mo)(e.selection));
                return Object.assign(Object.assign({}, e), {
                  selection: s
                });
              } else {
                t.removeSelection();
                return Object.assign(Object.assign({}, e), {
                  selection: s
                });
              }
            }
          case "merge":
            {
              const s = t.layers.findIndex(t => t === e.target);
              if (s < 0) {
                return;
              }
              const [i] = t.layers.splice(s, 1);
              e.layers.forEach(s => {
                const i = e.order.findIndex(t => t === s.id);
                if (i < 0) {
                  t.layers.push(s);
                } else {
                  t.layers.splice(i, 0, s);
                }
              });
              if (t.getSelected() && !t.hasLayer(t.getSelected())) {
                t.selectLayerById(e.layers[0].id);
              }
              return {
                type: "merge",
                kind: e.kind,
                target: i,
                from: e.layers,
                order: s
              };
            }
          case "rasterize":
            {
              const s = t.layers.findIndex(t => t.id === e.newId);
              if (s < 0) {
                return;
              }
              const [i] = t.layers.splice(s, 1, e.layer);
              if ((t == null ? undefined : t.getSelected())?.id === i.id) {
                t.selectLayerById(e.layer.id);
              }
              return {
                type: "rasterize",
                layer: i,
                kind: e.kind,
                newId: e.layer.id
              };
            }
          case "convertSelectionToMask":
            {
              const s = (0, d.$z)(e.layer.mask);
              e.layer.removeMask();
              e.layer.syncRequested = v;
              const i = (0, d.Mo)(e.selection);
              t.addSelection();
              t.selection.mask = i;
              t.selection.ctx = i.getContext("2d");
              t.selection.createOutline();
              return {
                type: "convertSelectionToMask",
                layer: e.layer,
                mask: s
              };
            }
          case "convertMaskToSelection":
            {
              const s = (0, d.$z)(t.selection.mask);
              t.removeSelection();
              e.layer.mask = (0, d.Mo)(e.mask);
              e.layer.render();
              e.layer.syncRequested = v;
              return {
                type: "convertMaskToSelection",
                layer: e.layer,
                selection: s
              };
            }
          case "applyMask":
            e.layer.canvas = (0, d.Mo)(e.canvas);
            e.layer.mask = (0, d.Mo)(e.mask);
            e.layer.rect = (m = e.rect) === null || m === undefined ? undefined : m.clone();
            e.layer.render();
            e.layer.syncRequested = v;
            return {
              type: "applyMask",
              layer: e.layer
            };
          case "frameContent":
            {
              let t;
              let s;
              if (e.layer.canvas) {
                t = (0, d.$z)(e.layer.canvas);
                s = (y = e.layer.trim) === null || y === undefined ? undefined : y.clone();
              }
              e.layer.canvas = (0, d.Mo)(e.canvas);
              e.layer.trim = e.trim;
              e.layer.render();
              return {
                type: "frameContent",
                kind: e.kind,
                layer: e.layer,
                canvas: t,
                trim: s
              };
            }
          case "frameSettings":
            {
              const t = e.layer.frameSettings.clone();
              e.layer.frameSettings = e.settings;
              e.layer.prepare();
              e.layer.syncRequested = v;
              return {
                type: "frameSettings",
                kind: e.kind,
                layer: e.layer,
                settings: t
              };
            }
          case "shapeSettings":
            {
              const t = e.layer.shapeSettings.clone();
              e.layer.shapeSettings = e.settings;
              await e.layer.prepare();
              e.layer.syncRequested = v;
              return {
                type: "shapeSettings",
                kind: e.kind,
                layer: e.layer,
                settings: t
              };
            }
          case "groupSettings":
            {
              const t = e.layer.groupSettings.clone();
              e.layer.groupSettings = e.settings;
              e.layer.syncRequested = v;
              return {
                type: "groupSettings",
                kind: e.kind,
                layer: e.layer,
                settings: t
              };
            }
          default:
            throw new Error("No handler for this undo type");
        }
      }
    }
