window.__editorModules[9310] = function (t, e, s) {
      s.d(e, {
        A: () => c
      });
      var i = s(7775);
      var a = s(6939);
      var n = s(5283);
      var o = s(5699);
      var r = s(749);
      var h = s(6957);
      var l = s(4932);
      class c extends a.A {
        constructor(t, e, s = false, a = true, c = 0) {
          super(e, false, s);
          this.isMasked = false;
          this.createCombinationMask = t => {
            if (this.selected.type === r.A.TYPE_FRAME || !this.stage.fresco.hasSelection() && !t) {
              return;
            }
            let e = this.selected;
            if (!this.stage.fresco.hasSelection() && !e.hasMask()) {
              return;
            }
            let s = o.Nw(e.canvas.width, e.canvas.height);
            let i = s.getContext("2d");
            if (this.stage.fresco.hasSelection()) {
              i.drawImage(this.stage.fresco.selection.mask, -e.rect.x, -e.rect.y);
            }
            if (t && e.hasMask()) {
              i.save();
              if (this.stage.fresco.hasSelection()) {
                i.globalCompositeOperation = "destination-in";
              }
              i.drawImage(this.selected.mask, 0, 0);
              i.restore();
            }
            i = undefined;
            return s;
          };
          this.compareDown = () => {
            this.scratch.canvas = this.cache;
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.compareUp = () => {
            this.scratch.canvas = this.shaders.apply(this.cache);
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.change = (t, e) => {
            if (this.selected.canvas) {
              this.kind ||= t;
              this.shaders.addShader(t, e);
              setTimeout(() => {
                this.scratch.canvas = this.shaders.apply(this.cache);
                window.requestAnimationFrame(() => this.stage.render());
              }, 0);
            }
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.apply = () => {
            if (this.scratch && this.shaders.chain.length > 0) {
              const e = this.selected.trim ? this.selected.trim.clone() : this.selected.rect.clone();
              const s = o.$z(this.selected.canvas);
              this.stage.history.add({
                type: "bitmapSwitch",
                kind: this.kind,
                layer: this.selected,
                rect: e,
                canvas: s
              });
              let i = this.createCombinationMask(false);
              if (i) {
                this.cache = o.oM(this.selected.canvas);
                var t = this.cache.getContext("2d");
                t.save();
                t.globalCompositeOperation = "destination-in";
                t.drawImage(i, 0, 0);
                t.restore();
                t = null;
                this.isMasked = true;
              } else {
                this.cache = this.selected.canvas;
                this.isMasked = false;
              }
              this.scratch.canvas = this.shaders.apply(this.cache);
              this.scratch.drawToLayer(this.selected, this.isMasked ? "source-over" : "copy", 1);
              this.selected.render();
            }
            this.cleanUp();
          };
          this.cleanUp = () => {
            this.stage.coating.freeze(false);
            this.stage.fresco.removeScratch();
            document.removeEventListener("keydown", this.keyDown, false);
            this.compare.removeEventListener("mousedown", this.compareDown, true);
            this.compare.removeEventListener("mouseup", this.compareUp, true);
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            this.selected = undefined;
            this.shaders.cleanUp();
            this.shaders = undefined;
            this.dialog.remove();
            this.dialog = undefined;
            this.modal.remove();
            this.modal = undefined;
          };
          this.stage = t;
          this.stage.coating.freeze(true);
          this.shaders = new h.A();
          this.selected = this.stage.fresco.getSelected();
          this.compare = (0, n.T)("div", {
            className: "icon-button compare"
          }, (0, n.T)("img", {
            src: "assets/images/icon/compare.svg",
            className: "ic"
          }));
          this.compare.setAttribute("tooltip", (0, i.A)("compare"));
          this.compare.setAttribute("flow", "down");
          this.compare.addEventListener("mousedown", this.compareDown, true);
          this.compare.addEventListener("mouseup", this.compareUp, true);
          (0, n.Ay)("dialog-buttons" + this.mid).prepend(this.compare);
          let d = this.createCombinationMask(a);
          if (d) {
            this.cache = o.oM(this.selected.canvas);
            var u = this.cache.getContext("2d");
            u.save();
            u.globalCompositeOperation = "destination-in";
            u.drawImage(d, 0, 0);
            u.restore();
            u = null;
            this.isMasked = true;
          } else {
            this.cache = this.selected.canvas;
          }
          const p = (this.selected.trim && this.selected instanceof l.A ? this.selected.getGlobalTrim() : this.selected.rect).pad(c);
          if (c > 0) {
            const t = o.Nw(p.width, p.height);
            t.getContext("2d").drawImage(this.cache, c, c);
            this.cache = t;
          }
          this.scratch = this.stage.fresco.addScratch();
          this.scratch.setTarget(this.selected.id, p, this.isMasked ? "over" : "replace");
          this.scratch.settings.blendmode = this.selected.settings.blendmode;
          this.scratch.settings.opacity = this.selected.settings.opacity;
          this.scratch.canvas = this.cache;
        }
      }
    }
