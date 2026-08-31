window.__editorModules[8342] = function (t, e, s) {
      s.d(e, {
        t: () => u
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
        const y = new Date();
        switch (e.type) {
          case "bitmapChange":
            {
              const t = e.layer;
              const s = i.ON(e.layer.canvas, e.patchRect);
              const a = t.rect ? t.rect.clone() : undefined;
              let o = (0, d.$z)(t.mask);
              if (e.patch) {
                const s = e.rect;
                const n = !!t.canvas;
                t.extendCanvas(s);
                if (n) {
                  e.patchRect.x += a.x - t.rect.x;
                  e.patchRect.y += a.y - t.rect.y;
                }
                t.canvas.getContext("2d").putImageData(e.patch, e.patchRect.x, e.patchRect.y);
                if (e.rect.width < t.rect.width || e.rect.height < t.rect.height) {
                  const a = i.Nw(e.rect.width, e.rect.height);
                  a.getContext("2d").drawImage(t.canvas, t.rect.x - e.rect.x, t.rect.y - e.rect.y);
                  e.patchRect.x += t.rect.x - s.x;
                  e.patchRect.y += t.rect.y - s.y;
                  t.canvas = a;
                  t.rect = s;
                }
              } else {
                t.canvas = null;
                t.rect = new n.A(0, 0, 0, 0);
              }
              if (e.mask) {
                t.mask = (0, d.Mo)(e.mask);
              }
              t.render();
              e.layer.syncRequested = y;
              return {
                type: "bitmapChange",
                layer: t,
                rect: a,
                kind: e.kind,
                patch: s,
                patchRect: e.patchRect.clone(),
                mask: o
              };
            }
          case "bitmapSwitch":
            {
              const t = e.layer;
              const s = (0, d.$z)(e.layer.canvas);
              const i = e.layer.trim ? e.layer.trim.clone() : e.layer.rect.clone();
              t.switchCanvas((0, d.Mo)(e.canvas), e.rect);
              t.render();
              e.layer.syncRequested = y;
              return {
                type: "bitmapSwitch",
                kind: e.kind,
                layer: t,
                rect: i,
                canvas: s
              };
            }
          case "selectionAndBitmapSwitch":
            {
              const i = e.layer;
              const a = (0, d.$z)(e.layer.canvas);
              const n = i.rect.clone();
              i.switchCanvas((0, d.Mo)(e.canvas), e.rect);
              i.render();
              e.layer.syncRequested = y;
              const o = (0, d.$z)((t == null ? undefined : t.selection)?.mask);
              if (e.selection) {
                t.addSelection();
                t.selection.setMask((0, d.Mo)(e.selection));
                return {
                  type: "selectionAndBitmapSwitch",
                  kind: e.kind,
                  selection: o,
                  layer: i,
                  rect: n,
                  canvas: a
                };
              } else {
                t.removeSelection();
                return {
                  type: "selectionAndBitmapSwitch",
                  kind: e.kind,
                  selection: o,
                  layer: i,
                  rect: n,
                  canvas: a
                };
              }
            }
          case "addLayer":
            t.layers.splice(e.order, 0, e.layer);
            return {
              type: "addLayer",
              kind: e.kind,
              layer: e.layer
            };
          case "deleteLayer":
            t.deleteLayerById(e.layer.id);
            return e;
          case "order":
            t.changeLayerOrder(e.to, e.from);
            return e;
          case "layerSettings":
            {
              const t = Object.assign({}, e.layer.settings);
              e.layer.settings = e.settings;
              e.layer.syncRequested = y;
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
              e.layer.syncRequested = y;
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
              e.layer.syncRequested = y;
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
              let t;
              const s = e.layer.hasMask();
              if (!s && e.patch) {
                e.layer.addMask();
              }
              if (e.patch) {
                const a = e.layer.mask.getContext("2d");
                if (s) {
                  t = i.ON(e.layer.mask, new n.A(e.rect.x, e.rect.y, e.patch.width, e.patch.height));
                }
                a.putImageData(e.patch, e.rect.x, e.rect.y);
              } else {
                e.layer.removeMask();
              }
              e.layer.render();
              e.layer.syncRequested = y;
              return {
                type: "mask",
                layer: e.layer,
                rect: e.rect,
                patch: t
              };
            }
          case "maskInvert":
            e.layer.invertMask();
            e.layer.render();
            e.layer.syncRequested = y;
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
            e.layer.syncRequested = y;
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
                    layer: e.layer,
                    kind: e.kind,
                    action: {
                      type: "rect",
                      rect: t
                    }
                  };
                }
              case "trim":
                {
                  const t = e.layer.trim.clone();
                  e.layer.trim = e.action.rect;
                  e.layer.render();
                  return {
                    type: "arrange",
                    layer: e.layer,
                    kind: e.kind,
                    action: {
                      type: "trim",
                      rect: t
                    }
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
                a.syncRequested = y;
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
                t[e].layer.syncRequested = y;
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
            e.layer.syncRequested = y;
            return {
              type: "flipLayer",
              layer: e.layer,
              vertical: e.vertical
            };
          case "rotateLayer":
            e.layer.rotate(!e.counterClock);
            e.layer.render();
            e.layer.syncRequested = y;
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
                s.syncRequested = y;
                s.canvas = (0, d.Mo)(e.straighten);
                s.rect = new n.A(0, 0, s.canvas.width, s.canvas.height);
                t.width = s.rect.width;
                t.height = s.rect.height;
              }
              t.layers.forEach(t => t.syncRequested = y);
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
                s.syncRequested = y;
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
            t.layers.forEach(t => t.syncRequested = y);
            return {
              type: "flip",
              vertical: e.vertical
            };
          case "rotate":
            t.rotate(e.counterClock);
            document.dispatchEvent(new CustomEvent("reset-viewport"));
            t.layers.forEach(t => t.syncRequested = y);
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
              const s = e.from.map(e => t.layers.find(t => t.id === e.id));
              const i = e.from;
              const a = t.layers.map(t => t.id);
              t.layers = t.layers.filter(t => !i.includes(t));
              t.layers.splice(e.order, 0, e.target);
              if (t.getSelected() && !t.hasLayer(t.getSelected())) {
                t.selectLayerById(e.target.id);
              }
              return {
                type: "merge",
                kind: e.kind,
                target: e.target,
                order: a,
                layers: s
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
              const s = (0, d.$z)(t.selection.mask);
              e.layer.addMask();
              e.layer.mask.getContext("2d").drawImage(t.selection.mask, -e.layer.rect.x, -e.layer.rect.y);
              e.layer.render();
              t.removeSelection();
              e.layer.syncRequested = y;
              return {
                type: "convertSelectionToMask",
                layer: e.layer,
                selection: s
              };
            }
          case "convertMaskToSelection":
            {
              const s = (0, d.$z)(e.layer.mask);
              e.layer.removeMask();
              t.addSelection();
              t.selection.setMask((0, d.Mo)(e.selection));
              e.layer.syncRequested = y;
              return {
                type: "convertMaskToSelection",
                layer: e.layer,
                mask: s
              };
            }
          case "applyMask":
            {
              const t = (0, d.$z)(e.layer.canvas);
              const s = (0, d.$z)(e.layer.mask);
              let i = e.layer.rect.clone();
              e.layer.render();
              e.layer.canvas = e.layer.baked;
              e.layer.removeMask();
              e.layer.shrinkWrap();
              e.layer.syncRequested = y;
              return {
                type: "applyMask",
                layer: e.layer,
                canvas: t,
                mask: s,
                rect: i
              };
            }
          case "frameContent":
            {
              let t;
              let s;
              if (e.layer.canvas) {
                t = (0, d.$z)(e.layer.canvas);
                s = (m = e.layer.trim) === null || m === undefined ? undefined : m.clone();
              }
              e.layer.canvas = (0, d.Mo)(e.canvas);
              e.layer.trim = e.trim;
              if (e.layer instanceof c.A) {
                e.layer.render();
              }
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
              e.layer.syncRequested = y;
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
              e.layer.syncRequested = y;
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
              e.layer.syncRequested = y;
              return {
                type: "groupSettings",
                kind: e.kind,
                layer: e.layer,
                settings: t
              };
            }
          default:
            throw new Error("No handler for this redo type");
        }
      }
    }
