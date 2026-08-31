window.__editorModules[9043] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(5527);
      var h = s(3517);
      var l = s(2037);
      var c = s(749);
      var d = s(3566);
      var u = s(3328);
      class p extends r.A {
        constructor(t) {
          super("clone", t);
          this.mode = "source";
          this.layerSelect = () => {
            const t = this.selected === this.stage.fresco.getSelected();
            if (!this.stage.fresco.isSelectedType(c.A.TYPE_IMAGE)) {
              (0, i.Ay)("clone-no-layer").style.display = "flex";
              (0, i.Ay)("clone-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("clone-settings").style.display = "flex";
            (0, i.Ay)("clone-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, new o.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
            this.flat = this.stage.getOutputCanvas();
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            if (!t) {
              this.alignChange();
              this.updateBrush();
            }
          };
          this.alignChange = () => {
            this.source = undefined;
            this.setMode("source");
          };
          this.toggleMode = () => {
            this.setMode(this.mode === "paint" ? "source" : "paint");
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget === (0, i.Ay)("clone-mode-paint") ? "paint" : "source");
          };
          this.setMode = t => {
            this.mode = t;
            (0, i.Ay)("clone-mode-paint").checked = this.mode === "paint";
            (0, i.Ay)("clone-mode-source").checked = this.mode === "source";
            this.updateBrush();
          };
          this.isShiftDown = false;
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              this.toggleMode();
              return;
            }
            switch (t.key) {
              case ",":
                if (t.shiftKey) {
                  this.brushPod.stepSoftness(0.1);
                } else {
                  this.brushPod.stepSize(-10);
                }
                break;
              case ".":
                if (t.shiftKey) {
                  this.brushPod.stepSoftness(-0.1);
                } else {
                  this.brushPod.stepSize(10);
                }
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
              this.toggleMode();
            }
          };
          this.updateBrush = () => {
            if (this.selected) {
              this.stage.coating.setCursorImage(this.mode === "source" ? null : this.brush.getCursorImage(this.stage.zoom));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.down = (t, e) => {
            if (this.selected) {
              if (this.mode == "source") {
                this.source = this.stage.translateRasterToFresco(t);
                this.offset = undefined;
                if (!this.isShiftDown) {
                  this.toggleMode();
                }
                return;
              } else {
                if (this.source) {
                  this.stage.coating.freeze(true);
                  (0, i.Ay)("workspace").appendChild(this.sourceMarker);
                  if (!(0, i.Ay)("clone-aligned").checked || !this.offset) {
                    this.offset = this.stage.translateRasterToFresco(t);
                    this.offset.x = this.offset.x - this.source.x;
                    this.offset.y = this.offset.y - this.source.y;
                  }
                  this.x = this.y = -1;
                  this.scratch.settings.opacity = this.opacity.getValue();
                  this.useFlat = (0, i.Ay)("clone-sample-all").checked;
                  if (e !== "touch") {
                    this.move(t);
                  }
                  this.addMoveListeners();
                } else {
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: (0, a.A)("selectSource")
                  }));
                }
                return;
              }
            }
          };
          this.x = -1;
          this.y = -1;
          this.move = t => {
            let e = this.brush.getStep();
            let s = false;
            this.sourceMarker.style.top = t.y - Math.round(this.offset.y * this.stage.zoom) + (this.stage.raster.offsetTop - 16) + "px";
            this.sourceMarker.style.left = t.x - Math.round(this.offset.x * this.stage.zoom) + (this.stage.raster.offsetLeft - 16) + "px";
            t = this.stage.translateRasterToFresco(t);
            if (this.x == -1) {
              this.lx = t.x;
              this.ly = t.y;
              this.x = t.x;
              this.y = t.y;
              this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
              s = true;
            }
            if (t.x !== this.x || t.y !== this.y) {
              let i = t.x - this.x;
              let a = t.y - this.y;
              let n = i > 0 ? 1 : -1;
              let o = a > 0 ? 1 : -1;
              i = i < 0 ? -i : i;
              a = a < 0 ? -a : a;
              if (i > a) {
                let t = i * 0.5;
                for (let r = 1; r <= i; r++) {
                  this.x += n;
                  t += a;
                  if (t >= i) {
                    t -= i;
                    this.y += o;
                  }
                  if (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) {
                    this.lx = this.x;
                    this.ly = this.y;
                    this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    s = true;
                  }
                }
              } else {
                let t = a * 0.5;
                for (let r = 1; r <= a; r++) {
                  this.y += o;
                  t += i;
                  if (t >= a) {
                    t -= a;
                    this.x += n;
                  }
                  if (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) {
                    this.lx = this.x;
                    this.ly = this.y;
                    this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    s = true;
                  }
                }
              }
            }
            if (s) {
              this.scratch.applySelection(this.stage);
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.drawShape = (t, e) => {
            let s = this.getPatchContext(this.brush.canvas.width, this.brush.canvas.height);
            s.save();
            const i = this.selected.rect && !this.useFlat ? this.selected.rect.x : 0;
            const a = this.selected.rect && !this.useFlat ? this.selected.rect.y : 0;
            s.drawImage(this.useFlat || !this.selected.canvas ? this.flat : this.selected.canvas, -(t - this.offset.x - i), -(e - this.offset.y - a));
            s.globalCompositeOperation = "destination-in";
            s.drawImage(this.brush.canvas, 0, 0);
            s.restore();
            this.scratch.ctx.drawImage(this.patch, t, e);
          };
          this.getPatchContext = (t, e) => this.patch ? (this.patch.width !== t || this.patch.height !== e ? (this.patch.width = t, this.patch.height = e) : this.ptx.clearRect(0, 0, t, e), this.ptx) : (this.patch = n.VI(t, e), this.ptx = this.patch.getContext("2d"), this.ptx);
          this.up = t => {
            this.sourceMarker.remove();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            let e = n.TL(this.scratch.canvas);
            if (e && e.width > 0 && e.height > 0) {
              let t = this.selected.rect ? n.ON(this.selected.canvas, e.rebase(this.selected.rect.x, this.selected.rect.y)) : undefined;
              const s = n.$z(this.selected.mask);
              const i = this.selected.rect ? this.selected.rect.clone() : undefined;
              this.selected.extendCanvas(e);
              this.scratch.drawToLayer(this.selected, "source-over", this.opacity.getValue());
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "clone",
                layer: this.selected,
                patchRect: e.rebase(this.selected.rect.x, this.selected.rect.y),
                patch: t,
                rect: i,
                mask: s
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.sourceMarker.remove();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            this.removeDownListeners();
            this.brushPod.cleanUp();
            this.opacity.cleanUp();
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            (0, i.Ay)("clone-mode-source").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("clone-mode-paint").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("clone-aligned").removeEventListener("change", this.alignChange, false);
            this.selected = undefined;
            this.scratch = undefined;
            this.patch = undefined;
            this.flat = undefined;
            this.ptx = undefined;
          };
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("clone-mode-source").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("clone-mode-paint").addEventListener("click", this.selectMode, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          this.brush = new l.A(new u.A());
          this.brushPod = new d.A(t, "clone-brush", this.brush, this.updateBrush);
          this.opacity = new h.A("clone-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          (0, i.Ay)("clone-aligned").addEventListener("change", this.alignChange, false);
          this.sourceMarker = document.createElement("img");
          this.sourceMarker.src = "assets/images/cursor/source.svg";
          this.sourceMarker.id = "source-marker";
          this.addDownListeners();
          this.setMode("source");
          this.layerSelect();
        }
      }
    }
