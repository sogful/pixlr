window.__editorModules[3350] = function (t, e, s) {
      s.d(e, {
        A: () => D
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(9973);
      var o = s(7135);
      var r = s(98);
      var h = s(2128);
      var l = s(5096);
      var c = s(7113);
      var u = s(5699);
      var p = s(6279);
      var g = s(651);
      var m = s(3244);
      var y = s(6050);
      var v = s(749);
      var f = s(6957);
      var w = s(2216);
      var x = s(4932);
      var b = s(7732);
      var A = s(9632);
      var k = s(5887);
      var S = s(8464);
      var E = s(1736);
      var C = s(3012);
      var T = s(2334);
      var L = s(6238);
      var M = s(4358);
      class P {
        constructor(t, e, s = false) {
          this.zoom = 1;
          this.zoomMode = "fit";
          this.anchor = new y.A(0, 0);
          this.fresco = t;
          this.history = new C.J(t, e, s);
        }
      }
      class D {
        constructor(t) {
          this.tabLimit = 10;
          this.showTabs = false;
          this.bounds = r.Ay.product === "editor" ? 20 : 40;
          this.syncDisabled = false;
          this.supressRender = false;
          this.zoom = 1;
          this.zoomMode = "fit";
          this.createBGPattern = () => {
            let t = "#353535";
            let e = "#1f1f1f";
            switch (r.Ay.workspace) {
              case "iron":
                t = "#2d2d2d";
                e = "#3e3e3e";
                break;
              case "steel":
                t = "#f5f5f5";
                e = "#b6b6b6";
                break;
              case "light":
                t = "#ffffff";
                e = "#cccccc";
            }
            let s = u.VI(20, 20);
            let i = s.getContext("2d");
            i.fillStyle = t;
            i.fillRect(0, 0, 20, 20);
            i.fillStyle = e;
            i.fillRect(10, 0, 10, 10);
            i.fillRect(0, 10, 10, 10);
            this.ptn = this.ctx.createPattern(s, "repeat");
          };
          this.doSync = t => {
            if (t instanceof CustomEvent) {
              this.syncDocument(t.detail);
            }
          };
          this.doRender = t => {
            if (t instanceof CustomEvent) {
              this.supressRender = t.detail === false;
            }
          };
          this.touch = () => {
            document.documentElement.classList.add("touch");
            document.removeEventListener("touchstart", this.touch, false);
            r.Ay.canTouch = true;
          };
          this.notify = t => {
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, i.A)(t)
            }));
          };
          this.syncQueue = 0;
          this.browseFrameImage = async () => {
            await h.XN(false, true).then(async t => {
              document.dispatchEvent(new CustomEvent("loading", {
                detail: "start"
              }));
              for (let e = 0; e < t.length; e++) {
                await h.Tq(t[e], this, false, "frame");
              }
              document.dispatchEvent(new CustomEvent("loading", {
                detail: "stop"
              }));
            });
          };
          this.setFrameContent = t => {
            var e;
            const s = this.fresco.getSelected();
            let i;
            let a;
            if (s.canvas) {
              i = u.oM(s.canvas);
              a = (e = s.trim) === null || e === undefined ? undefined : e.clone();
            }
            s.setContent(t);
            s.editMode = false;
            const n = i ? t ? "replace" : "delete" : "add";
            this.history.add({
              type: "frameContent",
              kind: n,
              layer: s,
              canvas: u.$z(i),
              trim: a
            });
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layerlist-update"));
          };
          this.fitFrameContent = () => {
            var t;
            const e = this.fresco.getSelected();
            if (e instanceof x.A) {
              let s = (t = e.trim) === null || t === undefined ? undefined : t.clone();
              e.fitContent();
              this.history.add({
                type: "arrange",
                layer: e,
                kind: "fitContent",
                action: {
                  type: "trim",
                  rect: s
                }
              });
            }
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layerlist-update"));
          };
          this.addLayer = t => {
            for (let e = 0; e < t.length; e++) {
              this.fresco.addLayer(t[e]);
              this.history.add({
                type: "addLayer",
                kind: "add" + t[e].type,
                layer: t[e]
              });
            }
            this.fresco.selectLayerStack(t);
          };
          this.addCopiedLayer = async t => {
            let e;
            let s = new Array();
            let a = new m.A(0, 0, this.fresco.width, this.fresco.height);
            let n = this.fresco.getStackBounds(t);
            if (n && !a.contains(n)) {
              e = new y.A(Math.round((a.width - n.width) / 2), Math.round((a.height - n.height) / 2));
            }
            for (let o = 0; o < t.length; o++) {
              let a = t[o].clone();
              if (a.settings.name.indexOf((0, i.A)("copy")) === -1) {
                a.settings.name += " " + (0, i.A)("copy");
              }
              a.settings.link = "";
              if (e) {
                a.rect.x = a.rect.x - n.x + e.x;
                a.rect.y = a.rect.y - n.y + e.y;
              }
              if (a instanceof A.A || a instanceof w.A || a instanceof x.A) {
                await a.prepare();
              } else {
                a.render();
              }
              this.fresco.addLayer(a);
              this.history.add({
                type: "addLayer",
                kind: "paste" + a.type,
                layer: a
              });
              s.push(a);
            }
            this.fresco.selectLayerStack(s);
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.duplicateLayer = async (t = true) => {
            let e = this.fresco.getSelectedStack();
            if (e.length === 0) {
              return;
            }
            let s = new Array();
            for (let a = 0; a < e.length; a++) {
              let t = e[a].clone();
              if (t.settings.name.indexOf((0, i.A)("copy")) === -1) {
                t.settings.name += " " + (0, i.A)("copy");
              }
              t.settings.link = "";
              if (t instanceof A.A || t instanceof w.A || t instanceof x.A) {
                await t.prepare();
              } else {
                t.render();
              }
              this.fresco.addLayer(t);
              this.history.add({
                type: "addLayer",
                kind: "duplicate" + t.type,
                layer: t
              });
              s.push(t);
            }
            this.fresco.selectLayerStack(s);
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            if (t) {
              this.notify("duplicated");
            }
          };
          this.deleteLayer = (t = false) => {
            let e = this.fresco.getSelectedStack();
            if (e.length !== 0) {
              if (e.length === 1 && e[0] instanceof x.A && (t || e[0].editMode)) {
                this.setFrameContent(undefined);
              } else {
                this.fresco.getStackId().forEach(t => {
                  const e = this.fresco.layerNr(t);
                  const s = this.fresco.deleteLayerById(t);
                  this.history.add({
                    type: "deleteLayer",
                    layer: s,
                    index: e
                  });
                });
                document.dispatchEvent(new CustomEvent("layer-select"));
                document.dispatchEvent(new CustomEvent("viewport-render"));
              }
              this.notify("deleted");
            }
          };
          this.linkLayer = () => {
            let t = this.fresco.getSelectedStack();
            if (t.length === 0 || t.length === 1 && !t[0].hasLink()) {
              return;
            }
            let e = "add";
            const s = new Array();
            const i = u.r0();
            const a = t.filter(t => !t.hasLink());
            if (a.length === t.length) {
              t.forEach(t => {
                s.push({
                  layer: t,
                  link: t.settings.link ?? ""
                });
                t.settings.link = i;
              });
            } else if (a.length === 0) {
              e = "remove";
              const i = new Set();
              t.forEach(t => {
                i.add(t.settings.link);
                s.push({
                  layer: t,
                  link: t.settings.link ?? ""
                });
                t.settings.link = "";
              });
              i.forEach(t => {
                const i = this.fresco.layers.filter(e => e.settings.link === t);
                if (i.length === 1) {
                  s.push({
                    layer: i[0],
                    link: i[0].settings.link ?? ""
                  });
                  i[0].settings.link = "";
                }
              });
            } else {
              const e = new Set();
              t.forEach(t => {
                e.add(t.settings.link);
              });
              if (e.entries.length === 1) {
                let t = [...e][0];
                a.forEach(e => {
                  s.push({
                    layer: e,
                    link: e.settings.link ?? ""
                  });
                  e.settings.link = t;
                });
              } else {
                t.forEach(t => {
                  s.push({
                    layer: t,
                    link: t.settings.link ?? ""
                  });
                  t.settings.link = i;
                });
                e.forEach(t => {
                  const i = this.fresco.layers.filter(e => e.settings.link === t);
                  if (i.length === 1) {
                    s.push({
                      layer: i[0],
                      link: i[0].settings.link ?? ""
                    });
                    i[0].settings.link = "";
                  }
                });
              }
            }
            if (s.length > 0) {
              this.history.add({
                type: "link",
                kind: e,
                stack: s
              });
            }
            this.fresco.updateSelectedLinkedStack();
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.selectLayer = (t, e = false, s = false, i = false) => {
            this.selectLayerById(t ? t.id : undefined, e, s, i);
          };
          this.selectLayerStack = (t, e = false, s = false) => {
            this.fresco.selectLayerStack(t, e);
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.selectLayerById = (t, e = false, s = false, i = false) => {
            if (this.fresco.selectLayerById(t, e, s)) {
              document.dispatchEvent(new CustomEvent("layer-select"));
              document.dispatchEvent(new CustomEvent("viewport-render"));
              if (i) {
                document.dispatchEvent(new CustomEvent("layer-marked"));
              }
            }
          };
          this.unselectLayerById = t => {
            if (this.fresco.unselectLayerById(t)) {
              document.dispatchEvent(new CustomEvent("layer-select"));
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          };
          this.isSelectedLayerShaderble = () => {
            var t;
            const e = (t = this.fresco) === null || t === undefined ? undefined : t.getSelected();
            return e && (e.type === v.A.TYPE_IMAGE || e.type === v.A.TYPE_FRAME || e.type === v.A.TYPE_ELEMENT) && !!e.canvas;
          };
          this.mergeDown = () => {
            if (!this.fresco.getSelected()) {
              return;
            }
            const t = this.fresco.getSelected();
            const e = this.fresco.layers.findIndex(e => t.id === e.id);
            const s = this.fresco.layers.map(t => t.id);
            if (e < 1) {
              this.notify("noMerger");
              return;
            }
            const i = this.fresco.layers[e - 1];
            const a = t.rect ? t.rect.getRotatedBounds() : undefined;
            const n = i.rect ? i.rect.getRotatedBounds() : undefined;
            const o = a ? a.union(n) : n;
            let r;
            if (o) {
              r = u.Nw(o.width, o.height);
              const e = r.getContext("2d");
              this.renderLayer(e, i, false, o.topLeft());
              this.renderLayer(e, t, false, o.topLeft());
            }
            const h = new b.A(u.Os(), t.settings.name, r, o, i.settings.locked);
            const l = this.fresco.layers.splice(e - 1, 2, h);
            this.fresco.selectLayerById(h.id);
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            this.history.add({
              type: "merge",
              kind: "down",
              layers: l,
              order: s,
              target: h
            });
            this.notify("layersMerged");
          };
          this.mergeVisible = () => {
            const t = this.fresco.layers.findIndex(t => t.settings.visible);
            const e = this.fresco.layers.map(t => t.id);
            if (t < 0) {
              this.notify("noMerge");
              return;
            }
            const s = this.fresco.layers[t];
            let i = this.getOutputCanvas();
            const a = new b.A(u.Os(), s.settings.name, i, new m.A(0, 0, i.width, i.height), true);
            const n = this.fresco.layers.filter(t => t.settings.visible);
            this.fresco.layers = this.fresco.layers.filter(t => !t.settings.visible);
            this.fresco.layers.splice(t, 0, a);
            this.fresco.selectLayerById(a.id);
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            this.history.add({
              type: "merge",
              kind: "visible",
              order: e,
              layers: n,
              target: a
            });
            this.notify("layersMerged");
          };
          this.mergeFlatten = () => {
            let t = this.getOutputCanvas();
            const e = new b.A(u.Os(), (0, i.A)("background"), t, new m.A(0, 0, t.width, t.height), true);
            const s = this.fresco.layers.slice();
            const a = this.fresco.layers.map(t => t.id);
            this.fresco.layers = [e];
            this.fresco.selectLayerById(e.id);
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            this.history.add({
              type: "merge",
              kind: "flatten",
              layers: s,
              order: a,
              target: e
            });
            this.notify("imageFlattend");
          };
          this.moveUp = () => {
            if (this.fresco.getSelected()) {
              let t = this.fresco.selectedLayerNr();
              let e = t + 1;
              if ((t != 0 || !this.fresco.lockedBackground()) && e < this.fresco.numLayers()) {
                this.changeOrder(t, e);
              }
            }
          };
          this.moveDown = () => {
            if (this.fresco.getSelected()) {
              let t = this.fresco.selectedLayerNr();
              let e = t - 1;
              if (e > 0 || !this.fresco.lockedBackground() && t == 1) {
                this.changeOrder(t, e);
              }
            }
          };
          this.changeOrder = (t, e) => {
            this.fresco.changeLayerOrder(t, e);
            this.render();
            this.history.add({
              type: "order",
              from: t,
              to: e
            });
          };
          this.changeVisible = (t, e) => {
            if (!t) {
              return;
            }
            const s = Object.assign({}, t.settings);
            t.settings.visible = e;
            this.history.add({
              type: "layerSettings",
              kind: "visible",
              layer: t,
              settings: s
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeLocked = (t, e) => {
            t ||= this.fresco.getSelected();
            if (!t) {
              return;
            }
            const s = Object.assign({}, t.settings);
            t.settings.locked = e;
            this.history.add({
              type: "layerSettings",
              kind: "locked",
              layer: t,
              settings: s
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
          };
          this.changeCollapsed = t => {
            const e = t.groupSettings.clone();
            t.groupSettings.collapsed = !t.groupSettings.collapsed;
            this.history.add({
              type: "groupSettings",
              kind: "collapse",
              layer: t,
              settings: e
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
          };
          this.rasterize = () => {
            let t = this.fresco.getSelectedStack();
            if (t.length === 0) {
              return;
            }
            let e = new Array();
            for (let s = 0; s < t.length; s++) {
              let i = t[s];
              if (i instanceof b.A || i instanceof x.A && !i.canvas) {
                e.push(i);
                continue;
              }
              const a = this.fresco.layers.findIndex(t => t.id === i.id);
              const n = i.rasterize();
              this.fresco.layers.splice(a, 1, n);
              this.history.add({
                type: "rasterize",
                kind: i.type,
                newId: n.id,
                layer: i
              });
              e.push(n);
            }
            if (e.length > 0) {
              this.fresco.selectLayerStack(e);
              this.notify("layerRasterized");
            } else {
              this.notify("noRasterization");
            }
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.cutLayer = () => {
            let t = this.fresco.getSelectedStack();
            if (t.length > 0) {
              let e = new Array();
              t.forEach(t => {
                e.push(t.clone());
              });
              this.clipboard = e;
              this.clipboardSize = this.fresco.getStackBounds(e).size();
              this.deleteLayer();
              this.notify("cut");
            }
          };
          this.copyLayer = () => {
            let t = this.fresco.getSelectedStack();
            if (t.length > 0) {
              let e = new Array();
              t.forEach(t => {
                e.push(t.clone());
              });
              this.clipboard = e;
              this.clipboardSize = this.fresco.getStackBounds(e).size();
              this.notify("copy");
            }
          };
          this.pasteLayer = () => {
            if (Array.isArray(this.clipboard)) {
              this.addCopiedLayer(this.clipboard);
              this.notify("paste");
            } else {
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          };
          this.pasteFromSelection = () => {
            if (this.fresco.hasSelection()) {
              let t = this.copy();
              if (t instanceof HTMLCanvasElement) {
                this.addImage(u.oM(t), (this.fresco, this.fresco.nextAddedLayerNumber()), "paste");
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, i.A)("paste")
                }));
                this.selectionDeselect();
              } else {
                this.notify("selectionEmpty");
              }
            } else {
              this.notify("selectionEmpty");
            }
          };
          this.cut = () => {
            if (!this.fresco.hasSelection()) {
              this.cutLayer();
              return;
            }
            let t = this.copy();
            if (t) {
              this.clear("cut");
              this.selectionDeselect();
              return t;
            } else {
              return undefined;
            }
          };
          this.copy = () => {
            if (!this.fresco) {
              return;
            }
            if (!this.fresco.hasSelection() && this.fresco.hasSelected()) {
              this.copyLayer();
              return;
            }
            const t = this.fresco.getSelected();
            if (!t || !t.rect || !t.rect.isSet()) {
              this.notify("selectionEmpty");
              return;
            }
            let e = this.fresco.selection.bounds.intersect(t.rect);
            if (e) {
              let s = u.Nw(e.width, e.height);
              let i = s.getContext("2d");
              i.drawImage(t.baked ? t.baked : t.canvas, t.rect.x - e.x, t.rect.y - e.y);
              const a = new y.A(-e.x, -e.y);
              i.save();
              i.globalCompositeOperation = "destination-in";
              i.drawImage(this.fresco.selection.mask, a.x, a.y);
              i.restore();
              i = undefined;
              return s;
            }
            this.notify("selectionEmpty");
          };
          this.clear = (t = "clear") => {
            if (!this.fresco || !this.fresco.hasSelection()) {
              return false;
            }
            if (!this.fresco.isSelectedImageWithCanvas()) {
              this.notify("notAImageLayer");
              return false;
            }
            const e = this.fresco.getSelected();
            let s = this.fresco.selection.bounds.intersect(e.rect);
            if (!s) {
              this.notify("selectionEmpty");
              return;
            }
            s = s.rebase(e.rect.x, e.rect.y);
            const i = u.ON(e.canvas, s);
            const a = e.rect.clone();
            let n = e.canvas.getContext("2d");
            n.save();
            n.globalCompositeOperation = "destination-out";
            n.drawImage(this.fresco.selection.mask, -e.rect.x, -e.rect.y);
            n.restore();
            n = undefined;
            e.shrinkWrap();
            e.render();
            if (e.rect) {
              s = s.rebase(e.rect.x - a.x, e.rect.y - a.y);
            }
            this.history.add({
              type: "bitmapChange",
              kind: t,
              layer: e,
              patchRect: s,
              rect: a,
              patch: i
            });
            this.render();
            return true;
          };
          this.primeCut = (t = true) => {
            if (!this.fresco || !this.fresco.hasSelection()) {
              return [undefined, undefined];
            }
            const e = this.fresco.getSelected();
            if (!e || !e.rect) {
              this.notify("noLayerSelected");
              return [undefined, undefined];
            }
            const s = this.fresco.selection.bounds.intersect(e.rect);
            if (s) {
              let i = u.Nw(s.width, s.height);
              let a = i.getContext("2d");
              a.drawImage(e.canvas, e.rect.x - s.x, e.rect.y - s.y);
              a.save();
              a.globalCompositeOperation = "destination-in";
              a.drawImage(this.fresco.selection.mask, -s.x, -s.y);
              a.restore();
              a = undefined;
              if (t) {
                a = e.canvas.getContext("2d");
                a.save();
                a.globalCompositeOperation = "destination-out";
                a.drawImage(this.fresco.selection.mask, -e.rect.x, -e.rect.y);
                a.restore();
                a = undefined;
                e.render();
              }
              return [i, s];
            }
            this.notify("selectionEmpty");
            return [undefined, undefined];
          };
          this.selectionSave = () => {
            if (this.fresco && this.fresco.selection) {
              (0, a.Ay)("selection-restore").classList.remove("disabled");
              this.selection = u.oM(this.fresco.selection.mask);
              this.notify("selectionSaved");
            }
          };
          this.selectionRestore = () => {
            if (this.selection) {
              this.history.add({
                type: "selectionChange",
                kind: "restore",
                selection: u.$z(this.fresco?.selection?.mask)
              });
              this.fresco.addSelection();
              this.fresco.selection.drawOnMask(this.selection, 0, false, false);
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
            }
          };
          this.selectionAll = () => {
            if (this.fresco) {
              this.history.add({
                type: "selectionChange",
                kind: "all",
                selection: u.$z(this.fresco?.selection?.mask)
              });
              this.fresco.addSelection();
              this.fresco.selection.selectAll();
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
            }
          };
          this.selectionDeselect = () => {
            if (this.fresco && this.fresco.selection) {
              this.history.add({
                type: "selectionChange",
                kind: "deselect",
                selection: u.$z(this.fresco?.selection?.mask)
              });
              this.fresco.removeSelection();
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
            }
          };
          this.selectionInvert = () => {
            if (this.fresco && this.fresco.hasSelection()) {
              this.history.add({
                type: "selectionChange",
                kind: "invert",
                selection: u.$z(this.fresco?.selection?.mask)
              });
              this.fresco.selection.invert();
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
            }
          };
          this.selectionPixels = () => {
            const s = this.fresco.getSelected();
            if (!s || !s.canvas) {
              return;
            }
            this.history.add({
              type: "selectionChange",
              kind: "pixels",
              selection: u.$z(this.fresco?.selection?.mask)
            });
            this.fresco.addSelection();
            this.fresco.clearSelection();
            let i = new f.A();
            i.addShader("alpha-mask", 1);
            const a = i.apply(s.canvas);
            this.fresco.selection.drawOnMask(a, 0, false, false, s.rect.topLeft());
            i.cleanUp();
            i = undefined;
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
          };
          this.selectionConvert = () => {
            if (!this.fresco.isSelectedImageWithCanvas()) {
              return;
            }
            if (!this.fresco.hasSelection()) {
              return;
            }
            const t = this.fresco.getSelected();
            const e = u.$z(this.fresco.selection.mask);
            t.addMask();
            t.mask.getContext("2d").drawImage(this.fresco.selection.mask, -t.rect.x, -t.rect.y);
            this.fresco.removeSelection();
            this.history.add({
              type: "convertSelectionToMask",
              layer: t,
              selection: e
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
          };
          this.maskAdd = () => {
            if (!this.fresco.isSelectedImageWithCanvas()) {
              return;
            }
            const t = this.fresco.getSelected();
            this.history.add({
              type: "mask",
              layer: t,
              rect: t.rect.clone()
            });
            t.addMask();
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
          };
          this.maskApply = () => {
            if (!this.fresco.isSelectedImageWithCanvas()) {
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("noCutout")
              }));
              return;
            }
            const t = this.fresco.getSelected();
            const e = t.mask;
            const s = t.canvas;
            const a = t.rect.clone();
            t.render();
            t.canvas = t.baked;
            t.removeMask();
            t.shrinkWrap();
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, i.A)("maskApplied")
            }));
            this.history.add({
              type: "applyMask",
              layer: t,
              canvas: u.$z(s),
              mask: u.$z(e),
              rect: a
            });
          };
          this.maskInvert = () => {
            if (!this.fresco.isSelectedImageWithCanvas()) {
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("noCutout")
              }));
              return;
            }
            const t = this.fresco.getSelected();
            if (t.hasMask()) {
              t.invertMask();
              t.render();
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("invert")
              }));
              document.dispatchEvent(new CustomEvent("layer-select"));
              this.history.add({
                type: "maskInvert",
                layer: t
              });
            } else {
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("noCutout")
              }));
            }
          };
          this.maskDelete = () => {
            if (!this.fresco.getSelected()) {
              return;
            }
            const t = this.fresco.getSelected();
            if (!t.hasMask()) {
              return;
            }
            const e = u.ON(t.mask);
            t.removeMask();
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, i.A)("reset")
            }));
            this.history.add({
              type: "mask",
              layer: t,
              rect: new m.A(0, 0, e.width, e.height),
              patch: e
            });
          };
          this.maskExtract = () => {
            const t = this.fresco.getSelected();
            if (t && t.mask) {
              let e = u.oM(t.canvas);
              let s = e.getContext("2d");
              s.save();
              s.globalCompositeOperation = "destination-in";
              s.drawImage(t.mask, 0, 0);
              s.restore();
              s = undefined;
              let a = u.TL(t.mask);
              let n = u.Nw(a.width, a.height);
              s = n.getContext("2d");
              s.drawImage(e, -a.x, -a.y);
              this.addImage(n, "Cutout", "extract");
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("layerCreated")
              }));
            } else {
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("noCutout")
              }));
            }
          };
          this.maskConvert = () => {
            const t = this.fresco.getSelected();
            if (!t || !t.hasMask()) {
              return;
            }
            const e = t.mask;
            this.fresco.addSelection();
            this.fresco.selection.drawOnMask(t.mask, 0, false, false, t.rect.topLeft());
            t.removeMask();
            this.history.add({
              type: "convertMaskToSelection",
              layer: t,
              mask: u.$z(e)
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
          };
          this.resize = (t, e, s, i) => {
            this.canvas.height = this.raster.height = r.Ay.isHDPI ? i * 2 : i;
            this.canvas.width = this.raster.width = r.Ay.isHDPI ? s * 2 : s;
            this.canvas.style.left = this.raster.style.left = t + "px";
            this.canvas.style.top = this.raster.style.top = e + "px";
            this.canvas.style.width = this.raster.style.width = s + "px";
            this.canvas.style.height = this.raster.style.height = i + "px";
            let a = this.raster.getBoundingClientRect();
            this.rasterRect = new m.A(a.x, a.y, a.width, a.height);
            this.setZoom(this.zoomMode);
          };
          this.setZoomStep = (t, e = 1) => {
            if (this.fresco) {
              if (e === 1) {
                this.zoom = Math.round(this.zoom * 10) / 10;
              }
              this.zoom += t ? this.zoom >= 5 ? e * 1 : e * 0.1 : this.zoom >= 6 ? e * -1 : e * -0.1;
              this.zoom = u.qE(this.zoom, 0.1, 50);
              this.zoomMode = "free";
              this.updateViewport();
              document.dispatchEvent(new CustomEvent("zoom-change"));
            }
          };
          this.setFluidZoom = t => {
            if (!this.fresco) {
              return;
            }
            const e = r.Ay.isHDPI ? 0.1 : 0.12;
            this.zoomMode = "free";
            this.zoom += t ? this.zoom * e : -this.zoom * e;
            this.zoom = u.qE(this.zoom, 0.1, 50);
            if (this.zoom > 0.95 && this.zoom < 1.05) {
              this.zoom = 1;
            }
            this.updateViewport();
            document.dispatchEvent(new CustomEvent("zoom-change"));
          };
          this.resetZoom = () => {
            this.setZoom(this.zoomMode);
          };
          this.setZoom = t => {
            if (this.fresco) {
              if (t === "fit") {
                this.zoomMode = "fit";
                this.zoom = u.yu(this.fresco.width, this.fresco.height, this.raster.width - this.bounds * 2, this.raster.height - this.bounds * 2);
                this.anchor.x = Math.round(this.fresco.width / 2);
                this.anchor.y = Math.round(this.fresco.height / 2);
              } else if (t === "fill") {
                this.zoomMode = "fill";
                this.zoom = u.aE(this.fresco.width, this.fresco.height, this.raster.width, this.raster.height);
                this.anchor.x = Math.round(this.fresco.width / 2);
                this.anchor.y = Math.round(this.fresco.height / 2);
              } else if (t !== "free") {
                this.zoomMode = "free";
                this.zoom = Number.parseFloat(t);
                this.zoom = u.qE(this.zoom, 0.1, 50);
              }
              this.updateViewport();
              document.dispatchEvent(new CustomEvent("zoom-change"));
            }
          };
          this.setAnchor = t => {
            this.anchor.x = u.qE(t.x, 0, this.fresco.width);
            this.anchor.y = u.qE(t.y, 0, this.fresco.height);
          };
          this.resetAnchor = () => {
            this.setAnchor(this.getViewPortAnchor());
          };
          this.updateViewport = () => {
            if (!this.fresco) {
              return;
            }
            const t = this.fresco.width * this.zoom;
            const e = this.fresco.height * this.zoom;
            const s = (this.canvas.width - t) * 0.5;
            const i = (this.canvas.height - e) * 0.5;
            const a = t < this.canvas.width ? t : this.canvas.width;
            const n = e < this.canvas.height ? e : this.canvas.height;
            const o = s < 0 ? 0 : s;
            const h = i < 0 ? 0 : i;
            this.viewClip = new m.A(~~o, ~~h, ~~a, ~~n);
            this.offset = new y.A(this.viewClip.x, this.viewClip.y);
            this.overshot = new y.A();
            const l = r.Ay.isHDPI ? 500 : 250;
            if (this.offset.x === 0) {
              let e = this.anchor.x * this.zoom - this.canvas.width / 2;
              let s = t - this.canvas.width;
              this.offset.x = -u.qE(e, 0, s);
              if (e < 0) {
                let t = u.qE(e * -1, 0, l);
                this.viewClip.width = this.canvas.width - t;
                this.viewClip.x = t;
                this.offset.x += t;
                this.overshot.x = t;
              }
              if (e > s) {
                let t = u.qE(e - s, 0, l);
                this.viewClip.width = this.canvas.width - t;
                this.offset.x -= t;
                this.overshot.x = -t;
              }
            }
            if (this.offset.y === 0) {
              let t = this.anchor.y * this.zoom - this.canvas.height / 2;
              let e = this.fresco.height * this.zoom - this.canvas.height;
              this.offset.y = -u.qE(t, 0, e);
              if (t < 0) {
                let e = u.qE(t * -1, 0, l);
                this.viewClip.height = this.canvas.height - e;
                this.viewClip.y = e;
                this.offset.y += e;
                this.overshot.y = e;
              }
              if (t > e) {
                let s = u.qE(t - e, 0, l);
                this.viewClip.height = this.canvas.height - s;
                this.offset.y -= s;
                this.overshot.y = -s;
              }
            }
            if (!this.supressRender) {
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
            document.dispatchEvent(new CustomEvent("viewport-update"));
          };
          this.getViewPort = () => new m.A(this.offset.x > 0 ? 0 : ~~(this.offset.x / this.zoom) * -1, this.offset.y > 0 ? 0 : ~~(this.offset.y / this.zoom) * -1, Math.ceil(this.viewClip.width / this.zoom), Math.ceil(this.viewClip.height / this.zoom));
          this.getViewPortAnchor = () => {
            let t = new y.A();
            t.x = (this.offset.x > 0 ? -this.offset.x / this.zoom : this.offset.x / this.zoom * -1) + this.canvas.width / this.zoom / 2;
            t.y = (this.offset.y > 0 ? -this.offset.y / this.zoom : this.offset.y / this.zoom * -1) + this.canvas.height / this.zoom / 2;
            return t;
          };
          this.getLayerLocationRect = t => {
            if (t.rect) {
              return new m.A(Math.round(t.rect.x * this.zoom + this.offset.x), Math.round(t.rect.y * this.zoom + this.offset.y), Math.round(t.rect.width * this.zoom), Math.round(t.rect.height * this.zoom), t.rect.rotation);
            }
          };
          this.getLayerLocationTrim = t => {
            if (!t.trim) {
              return;
            }
            let e = t.getGlobalTrim();
            return new m.A(Math.round(e.x * this.zoom + this.offset.x), Math.round(e.y * this.zoom + this.offset.y), Math.round(e.width * this.zoom), Math.round(e.height * this.zoom), e.rotation);
          };
          this.translateToRect = (t, e, s, i) => {
            if (s) {
              const s = t.x - e.x;
              const i = t.y - e.y;
              let a = Math.sqrt(s * s + i * i) / Math.sqrt(2);
              e.x = t.x + (s > 0 ? -a : a);
              e.y = t.y + (i > 0 ? -a : a);
            }
            let a = t.x < e.x ? t.x : e.x;
            let n = t.y < e.y ? t.y : e.y;
            let o = t.x < e.x ? e.x : t.x;
            let r = t.y < e.y ? e.y : t.y;
            t = this.translateRasterToFresco(new y.A(a, n), undefined, true);
            (e = this.translateRasterToFresco(new y.A(o, r), undefined, false)).x = Math.ceil(e.x);
            e.y = Math.ceil(e.y);
            if (i) {
              t = this.translateFrescoToRaster(t);
              e = this.translateFrescoToRaster(e);
            }
            return new m.A(t.x, t.y, e.x - t.x, e.y - t.y);
          };
          this.translateRasterToFresco = (t, e = undefined, s = true) => {
            let i = (t.x - this.offset.x) / this.zoom;
            let a = (t.y - this.offset.y) / this.zoom;
            if (e) {
              i -= e.x;
              a -= e.y;
            }
            if (s) {
              return new y.A(Math.floor(i), Math.floor(a));
            } else {
              return new y.A(i, a);
            }
          };
          this.translateFrescoToRaster = (t, e) => {
            let s = t.x;
            let i = t.y;
            if (e) {
              s += e.x;
              i += e.y;
            }
            s = Math.round(s * this.zoom) + this.offset.x;
            i = Math.round(i * this.zoom) + this.offset.y;
            return new y.A(s, i);
          };
          this.render = () => {
            if (!this.supressRender) {
              if (this.fresco) {
                this.ctx &&= this.canvas.getContext("2d");
                this.ctx.save();
                this.ctx.globalAlpha = 1;
                this.ctx.globalCompositeOperation = "source-over";
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
                this.ctx.beginPath();
                this.ctx.rect(this.viewClip.x, this.viewClip.y, this.viewClip.width, this.viewClip.height);
                this.ctx.clip();
                this.ctx.fillStyle = this.fresco.color ? this.fresco.color : this.ptn;
                this.ctx.fillRect(this.viewClip.x, this.viewClip.y, this.viewClip.width, this.viewClip.height);
                this.ctx.translate(this.offset.x, this.offset.y);
                this.ctx.scale(this.zoom, this.zoom);
                for (let t = 0; t < this.fresco.layers.length; t++) {
                  const e = this.fresco.layers[t];
                  if (e.settings.visible) {
                    if (this.fresco.hasScratch() && this.fresco.scratch.id === e.id) {
                      if (this.fresco.scratch.renderMode === "over") {
                        this.renderLayer(this.ctx, e, this.zoom < 1);
                      }
                      this.renderLayer(this.ctx, this.fresco.scratch, this.zoom < 1);
                    } else {
                      this.renderLayer(this.ctx, e, this.zoom < 1);
                    }
                  }
                }
                this.ctx.restore();
              } else if (!this.fresco) {
                this.canvas.width = 1;
                this.canvas.height = 1;
              }
            }
          };
          this.renderOutputFrame = (t, e, s = false) => {
            t.save();
            t.clearRect(0, 0, t.canvas.width, t.canvas.height);
            if (!s) {
              t.fillStyle = this.fresco.color ? this.fresco.color : "#000000";
              t.fillRect(0, 0, t.canvas.width, t.canvas.height);
            }
            t.imageSmoothingEnabled = true;
            t.imageSmoothingQuality = "high";
            for (var i = 0; i < this.fresco.layers.length; i++) {
              const s = this.fresco.layers[i];
              if (e || s.settings.visible) {
                this.renderLayer(t, s, false);
              }
            }
            t.restore();
          };
          this.renderLayer = (t, e, s, i) => {
            if ((e.canvas || e.baked) && e.rect) {
              t.imageSmoothingQuality = "high";
              t.globalAlpha = e.settings.opacity;
              t.imageSmoothingEnabled = s || e.rect.rotation !== 0;
              t.globalCompositeOperation = e.settings.blendmode === "" ? "source-over" : e.settings.blendmode;
              try {
                const s = e.bect ? e.bect : e.rect;
                const a = e.transient ? e.transient : e.baked ? e.baked : e.canvas;
                if (e.rect.rotation) {
                  let n = s.x + s.width * 0.5;
                  let o = s.y + s.height * 0.5;
                  if (i) {
                    n -= i.x;
                    o -= i.y;
                  }
                  t.save();
                  t.translate(n, o);
                  t.rotate(e.rect.rotation * Math.PI / 180);
                  t.drawImage(a, s.width * -0.5, s.height * -0.5, s.width, s.height);
                  t.restore();
                } else {
                  let e = s.x;
                  let n = s.y;
                  if (i) {
                    e -= i.x;
                    n -= i.y;
                  }
                  t.drawImage(a, e, n, s.width, s.height);
                }
              } catch (a) {
                console.log(a);
              }
            }
          };
          this.renderPreview = t => {
            if (this.ctx && t) {
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.drawImage(t, this.viewClip.x, this.viewClip.y, this.viewClip.width, this.viewClip.height);
            }
          };
          this.getThumbnail = () => {
            if (this.canvas) {
              return this.getOutputCanvas(this.fresco, u.aE(this.fresco.width, this.fresco.height, 200, 180));
            }
          };
          this.getSingleLayerOutputCanvas = () => {
            const t = this.fresco.getSelected();
            if (!t || !t.canvas) {
              return;
            }
            let e = u.Nw(this.fresco.width, this.fresco.height);
            let s = e.getContext("2d");
            this.renderLayer(s, t, false);
            s = null;
            return e;
          };
          this.getOutputCanvas = (t = this.fresco, e = 1, s, i) => {
            if (e > 1) {
              e = 1;
            }
            if (!i) {
              i = u.VI(Math.round(t.width * e), Math.round(t.height * e)).getContext("2d");
            }
            i.save();
            i.scale(e, e);
            if (t.color || s) {
              i.fillStyle = t.color ? t.color : s;
              i.fillRect(0, 0, i.canvas.width, i.canvas.height);
            } else {
              i.clearRect(0, 0, i.canvas.width, i.canvas.height);
            }
            for (var a = 0; a < t.layers.length; a++) {
              const s = t.layers[a];
              if (s.settings.visible) {
                this.renderLayer(i, s, e < 1);
              }
            }
            i.restore();
            return i.canvas;
          };
          this.layerDragMove = () => {
            if (this.layerDrag.fresco !== this.fresco.id) {
              this.coating.drawDropPreviewRect(this.layerDrag.position, this.layerDrag.layer);
            }
          };
          this.layerDragDrop = () => {
            const t = this.layerDrag;
            if (t.fresco === this.fresco.id) {
              return;
            }
            const e = this.layerDrag.layer.clone();
            const s = new y.A(t.position.x - this.rasterRect.x, t.position.y - this.rasterRect.y);
            const i = this.translateRasterToFresco(s);
            e.rect.x = i.x - t.layer.rect.width / 2;
            e.rect.y = i.y - t.layer.rect.height / 2;
            e.settings.link = "";
            this.fresco.addLayer(e);
            this.coating.clear();
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            this.history.add({
              type: "addLayer",
              kind: "duplicate" + e.type,
              layer: e
            });
          };
          this.close = t => {
            if (t === undefined && this.fresco) {
              t = this.fresco.id;
            }
            const e = this.tabs.findIndex(e => e.fresco.id === t);
            const s = this.fresco && this.fresco.id === t;
            if (!(e < 0)) {
              this.tabs.splice(e, 1).forEach(t => t.fresco.cleanUp());
              if (this.tabs.length === 1 && r.Ay.api) {
                this.showTabs = false;
                document.dispatchEvent(new CustomEvent("fresco-select"));
                document.dispatchEvent(new CustomEvent("resize"));
              }
              if (this.tabs.length === 0) {
                this.history = null;
                this.fresco = null;
                this.showTabs = false;
                this.coating.clear();
                this.render();
                document.dispatchEvent(new CustomEvent("tool-apply"));
                document.dispatchEvent(new CustomEvent("fresco-select"));
                document.dispatchEvent(new CustomEvent("history-update"));
                document.dispatchEvent(new CustomEvent("viewport-update"));
                document.dispatchEvent(new CustomEvent("layerlist-update"));
                return;
              }
              if (s) {
                const t = Math.min(e, this.tabs.length - 1);
                this.select(this.tabs[t].fresco.id);
              } else {
                document.dispatchEvent(new CustomEvent("fresco-select"));
              }
            }
          };
          this.cleanUp = () => {
            document.removeEventListener("viewport-render", this.render, false);
            document.removeEventListener("sync-document", this.doSync, false);
            document.removeEventListener("layer-drag-move", this.layerDragMove, false);
            document.removeEventListener("layer-drag-drop", this.layerDragDrop, false);
            document.removeEventListener("render-enabled", this.doRender, false);
            document.removeEventListener("reset-viewport", this.resetZoom, false);
            document.removeEventListener("touchstart", this.touch, false);
            document.removeEventListener("visibilitychange", this.visibilityChange, false);
          };
          this.visibilityChange = () => {
            if (this.fresco && document.visibilityState === "visible") {
              this.render();
            }
          };
          this.workspace = t;
          this.tabs = [];
          document.addEventListener("touchstart", this.touch, false);
          r.Ay.isHDPI = matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches && !r.Ay.performanceMode && document.body.clientWidth < 650;
          r.Ay.isSafari = navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome");
          r.Ay.isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
          if (r.Ay.isIOS) {
            document.documentElement.classList.add("ios");
          }
          this.canvas = this.workspace.querySelector(".canvas");
          if (!this.canvas) {
            this.canvas = (0, a.T)("canvas", {
              className: "canvas"
            });
            t.appendChild(this.canvas);
          }
          this.canvas.width = this.canvas.height = 1;
          this.ctx = this.canvas.getContext("2d", {
            willReadFrequently: true
          });
          this.createBGPattern();
          this.raster = this.workspace.querySelector(".raster");
          if (!this.raster) {
            this.raster = (0, a.T)("canvas", {
              className: "raster"
            });
            t.appendChild(this.raster);
          }
          this.anchor = new y.A(0, 0);
          this.offset = new y.A(0, 0);
          this.coating = new c.A(this);
          document.addEventListener("viewport-render", this.render, false);
          document.addEventListener("sync-document", this.doSync, false);
          document.addEventListener("layer-drag-move", this.layerDragMove, false);
          document.addEventListener("layer-drag-drop", this.layerDragDrop, false);
          document.addEventListener("render-enabled", this.doRender, false);
          document.addEventListener("reset-viewport", this.resetZoom, false);
          document.addEventListener("visibilitychange", this.visibilityChange, false);
        }
        async syncDocument(t) {
          if (t && this.syncQueue > 0 && !this.syncDisabled && !r.Ay.api) {
            this.pendingSync ||= new Set();
            this.pendingSync.add(t);
            return;
          }
          if (!!t && !(this.syncQueue > 0) && !this.syncDisabled && !r.Ay.api) {
            try {
              this.syncQueue++;
              let a;
              let o = new Date();
              if (t.id === this.fresco?.id) {
                a = await u.PG(this.getThumbnail());
              }
              const r = t.layers.map(t => t.id);
              const h = await u.PG((t == null ? undefined : t.selection)?.mask);
              const l = await (0, n.P2)();
              const [c, d, p, g] = l.transaction("readwrite", "document-meta", "document-thumbnail", "document-selection", "layer-meta");
              let m = u.bD(T.DocumentMeta, await c.get(t.id));
              m ||= new T.DocumentMeta(t.id, t.name, t.width, t.height);
              m.lastModified = o;
              m.width = t.width;
              m.color = t.color;
              m.height = t.height;
              m.selected = (t == null ? undefined : t.getSelected())?.id;
              m.order = r;
              const [y] = await Promise.all([g.index("document").getAllKeys(t.id), a ? d.put(a, t.id) : undefined, h ? p.put(h, t.id) : p.delete(t.id), c.put(m)]);
              const v = y.filter(e => !t.layers.some(t => t.id === e));
              const f = t.layers.filter(t => !y.includes(t.id));
              await Promise.all(f.map(e => T.z.sync(e, t)));
              await Promise.all(v.map(async t => T.z.delete(t)));
              const w = t.layers.filter(t => t.syncRequested && (!t.syncLatest || t.syncRequested > t.syncLatest));
              await Promise.all(w.map(e => T.z.sync(e, t)));
              document.cookie = "has-history=true; path=/; SameSite=Strict; expires=Fri, 31 Dec 9999 23:59:59 GMT";
            } finally {
              this.syncQueue--;
              const pending = this.pendingSync?.values().next().value;
              if (pending) {
                this.pendingSync.delete(pending);
                await this.syncDocument(pending);
              }
            }
          }
        }
        createNew(t, e, s, i) {
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
          this.addTab(new l.A(u.Os(), t, e, s, i), "create");
          this.addEmpty();
          this.setZoom("fit");
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
        }
        async openFromHistory(t, e) {
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
          const s = new l.A(t.id, t.name, t.width, t.height, t.transparent ? undefined : t.color);
          this.addTab(s, "document");
          this.setZoom("fit");
          this.renderPreview(e);
          this.supressRender = true;
          document.dispatchEvent(new CustomEvent("loading", {
            detail: "start"
          }));
          try {
            await t.restore(s);
            if (s.layers.length > 0) {
              this.selectLayer(s.layers[0]);
            }
          } catch (i) {
            console.log(i);
          }
          document.dispatchEvent(new CustomEvent("loading", {
            detail: "stop"
          }));
          this.supressRender = false;
          document.dispatchEvent(new CustomEvent("fresco-select"));
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          document.dispatchEvent(new CustomEvent("selection-update"));
          document.dispatchEvent(new CustomEvent("resize"));
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
        }
        addGroup() {
          let t = "Group " + this.fresco.nextAddedLayerNumber();
          const e = new M.A();
          if (this.fresco.numSelected() > 1) {
            e.numberOfMembers = this.fresco.numSelected();
          }
          let s = new L.A(u.Os(), t, e);
          this.fresco.addLayer(s);
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          this.history.add({
            type: "addLayer",
            kind: "group",
            layer: s
          });
          return s;
        }
        addEmpty() {
          let t = "Layer " + this.fresco.nextAddedLayerNumber();
          let e = new b.A(u.Os(), t);
          this.fresco.addLayer(e);
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          this.history.add({
            type: "addLayer",
            kind: "addemptyimage",
            layer: e
          });
          return e;
        }
        addImage(t, e, s) {
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
          if (!this.fresco) {
            this.addTab(new l.A(u.Os(), e, t.width, t.height, undefined, undefined, s), "image");
          }
          if (s === "frame" && this.fresco.getSelected() instanceof x.A) {
            this.setFrameContent(t);
            return;
          }
          const a = this.fresco.layers.length === 0;
          let n = this.fresco.addLayer(new b.A(u.Os(), a ? (0, i.A)("background") : e, t, new m.A(0, 0, t.width, t.height), a));
          if (a) {
            this.setZoom("fit");
            this.syncDocument(this.fresco);
          } else {
            let t = this.getViewPort().center();
            n.rect.x = Math.round(t.x - n.rect.width / 2);
            n.rect.y = Math.round(t.y - n.rect.height / 2);
            this.history.add({
              type: "addLayer",
              kind: s + "image",
              layer: n
            });
          }
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
          if (r.Ay.tool) {
            document.dispatchEvent(new CustomEvent("select-tool", {
              detail: r.Ay.tool
            }));
            r.Ay.tool = undefined;
          }
          return n;
        }
        async addSVGShape(t, e, s) {
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
          let i = new E.A();
          i.variant = "svg";
          i.content = t;
          let a = new A.A(u.Os(), e, undefined, i);
          await a.prepare();
          if (!this.fresco) {
            this.addTab(new l.A(u.Os(), a.settings.name, a.rect.width, a.rect.height, undefined, undefined, s), "shape");
          }
          this.fresco.addLayer(a);
          if (this.fresco.layers.length === 1) {
            this.setZoom("fit");
            this.syncDocument(this.fresco);
          } else {
            let t = this.getViewPort().center();
            a.rect.x = Math.round(t.x - a.rect.width / 2);
            a.rect.y = Math.round(t.y - a.rect.height / 2);
            this.history.add({
              type: "addLayer",
              kind: s + "shape",
              layer: a
            });
          }
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          document.dispatchEvent(new CustomEvent("navigate", {
            detail: "editor"
          }));
          if (r.Ay.tool) {
            document.dispatchEvent(new CustomEvent("select-tool", {
              detail: r.Ay.tool
            }));
            r.Ay.tool = undefined;
          }
          return a;
        }
        async addShape(t, e, s = "add") {
          t ||= new m.A(Math.round(this.fresco.width / 4), Math.round(this.fresco.height / 4), Math.round(this.fresco.width / 2), Math.round(this.fresco.height / 2));
          if (!e) {
            (e = new E.A()).variant = "rectangle";
            e.fillType = "color";
            e.fillValue = "#444444";
          }
          let a = (0, i.A)("shape") + " " + this.fresco.nextAddedLayerNumber();
          let n = new A.A(u.Os(), a, t, e);
          await n.prepare();
          this.fresco.addLayer(n);
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          this.history.add({
            type: "addLayer",
            kind: s + "shape",
            layer: n
          });
          return n;
        }
        addElement(t, e, s, i, a) {
          let n;
          (0, o.A)("add-element", s);
          if (a !== k.A.SCALE_METHOD_NONE) {
            if (this.fresco.height > this.fresco.width && t.height < t.width || this.fresco.width > this.fresco.height && t.width < t.height) {
              t = u.SE(t, 90);
            }
            n = new k.A(u.Os(), e, t, s, "overlay", i, a);
            if (a == k.A.SCALE_METHOD_FILL) {
              let e = m.A.fillFit(t.width, t.height, this.fresco.width, this.fresco.height);
              n.calculate(new y.A(e.x, e.y), new y.A(e.right(), e.bottom()), 0);
            } else {
              n.calculate(new y.A(0, 0), new y.A(this.fresco.width, this.fresco.height), 0);
            }
          } else {
            let o = m.A.bestFit(t.width, t.height, this.fresco.width, this.fresco.height);
            if (t.height > this.fresco.height || t.width > this.fresco.width) {
              t = u.tm(t, o.width, o.height);
            }
            n = new k.A(u.Os(), e, t, s, "sticker", i, a);
            n.rect.x = o.x;
            n.rect.y = o.y;
          }
          this.fresco.addLayer(n);
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          this.history.add({
            type: "addLayer",
            kind: "addelement",
            layer: n
          });
          return n;
        }
        async addText(t, e, s, i = "add") {
          if (!t || !e || !s) {
            t = "Lorem ipsum ..";
            (s = new S.A("Verdana", 40)).fillType = "color";
            s.fillValue = "#ffffff";
            let i = this.getViewPort();
            e = new m.A(Math.round(i.x + (i.width - Math.round(i.width / 1.2)) / 2), Math.round(i.y + i.height / 2.5), Math.round(i.width / 1.2), 40);
          }
          const a = new w.A(u.Os(), t, e, s);
          await a.prepare();
          this.fresco.addLayer(a);
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          this.history.add({
            type: "addLayer",
            kind: i + "text",
            layer: a
          });
          return a;
        }
        addFrame(t) {
          t ||= new m.A(Math.round(this.fresco.width / 4), Math.round(this.fresco.height / 4), Math.round(this.fresco.width / 2), Math.round(this.fresco.height / 2));
          let e = (0, i.A)("frame") + " " + this.fresco.nextAddedLayerNumber();
          const s = new x.A(u.Os(), e, t);
          this.fresco.addLayer(s);
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("viewport-render"));
          this.history.add({
            type: "addLayer",
            kind: "addframe",
            layer: s
          });
          return s;
        }
        crop(t) {
          const e = new g.A(this.fresco.width, this.fresco.height);
          const s = new y.A(-t.x, -t.y);
          this.fresco.crop(t);
          this.updateViewport();
          this.history.add({
            type: "crop",
            offset: s,
            size: e
          });
        }
        flip(t) {
          this.fresco.flip(t);
          this.render();
          this.history.add({
            type: "flip",
            vertical: t
          });
        }
        rotate(t) {
          this.fresco.rotate(t);
          this.updateViewport();
          this.history.add({
            type: "rotate",
            counterClock: t
          });
        }
        rotateSelected(t) {
          const e = this.fresco.getSelected();
          if (e) {
            if (e.settings.locked) {
              this.notify("layer locked");
            } else {
              this.history.add({
                type: "rotateLayer",
                layer: e,
                counterClock: t
              });
              e.rotate(t);
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          } else {
            this.notify("no layer selected");
          }
        }
        flipSelected(t) {
          if (!this.isSelectedLayerShaderble()) {
            this.notify("onlyImageLayer");
            return;
          }
          const e = this.fresco.getSelected();
          if (e.settings.locked) {
            this.notify("layerLocked");
          } else {
            this.history.add({
              type: "flipLayer",
              layer: e,
              vertical: t
            });
            e.flip(t);
            e.render();
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
          }
        }
        straighten(t) {
          if (!this.fresco.lockedBackground()) {
            return;
          }
          const e = this.fresco.layers[0].rect.rotatedSize(t);
          this.fresco.straighten(t, e.width, e.height);
          this.updateViewport();
        }
        addTab(t, e, s = true, i = false, a = false) {
          if (!i) {
            document.dispatchEvent(new CustomEvent("navigate", {
              detail: "editor"
            }));
          }
          const n = new P(t, e, a);
          this.tabs.push(n);
          if (s) {
            this.fresco = n.fresco;
            this.history = n.history;
            this.setZoom("fit");
            n.zoom = this.zoom;
            n.zoomMode = this.zoomMode;
            n.anchor = this.anchor;
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            this.history.dispatchHistoryStatus();
          }
          if (this.tabs.length > this.tabLimit) {
            this.close(this.tabs[0].fresco.id);
          }
          if (this.tabs.length > 1) {
            this.showTabs = true;
          }
          document.dispatchEvent(new CustomEvent("fresco-select"));
          document.dispatchEvent(new CustomEvent("resize"));
        }
        select(t) {
          const e = this.tabs.find(e => e.fresco.id === t);
          if (!e) {
            return;
          }
          const s = this.tabs.find(t => {
            return t.fresco.id === this.fresco?.id;
          });
          if (s) {
            s.zoom = this.zoom;
            s.zoomMode = this.zoomMode;
            s.anchor = this.anchor.clone();
          }
          this.fresco = e.fresco;
          this.history = e.history;
          this.zoom = e.zoom;
          this.zoomMode = e.zoomMode;
          this.anchor = e.anchor;
          this.updateViewport();
          document.dispatchEvent(new CustomEvent("zoom-change"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("fresco-select"));
          document.dispatchEvent(new CustomEvent("resize"));
          this.history.dispatchHistoryStatus();
        }
        duplicate(t) {
          const e = this.tabs.find(e => e.fresco.id === t);
          if (!e) {
            return;
          }
          const s = e.fresco.clone();
          this.addTab(s, "image");
          this.syncDocument(s);
        }
      }
    }
