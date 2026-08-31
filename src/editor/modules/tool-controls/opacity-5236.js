window.__editorModules[5236] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(5283);
      var a = s(5699);
      var n = s(5527);
      var o = s(3517);
      var r = s(5259);
      var h = s(2037);
      var l = s(3328);
      var c = s(3566);
      var d = s(7775);
      class u extends n.A {
        constructor(t) {
          super("eraser", t);
          this.stage = t;
          this.isShiftDown = false;
          this.keyDown = t => {
            if (t.key !== "Shift") {
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
            } else {
              this.isShiftDown = true;
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
            }
          };
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("eraser-no-layer").style.display = "flex";
              (0, i.Ay)("eraser-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("eraser-no-layer").style.display = "none";
            (0, i.Ay)("eraser-settings").style.display = "flex";
            this.selected = this.stage.fresco.getSelected();
            this.cached = a.oM(this.selected.canvas);
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "none");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            this.usePen = (0, i.Ay)("eraser-pen-pressure").checked;
            this.isTransparent = this.stage.fresco.selectedLayerNr() !== 0 || !this.selected.settings.locked || a.P1(this.selected.canvas);
            this.updateBrush();
          };
          this.updateBrush = () => {
            if (this.selected) {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom, new r.A(255, 255, 255, 255)));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.down = (t, e, s) => {
            if (this.selected) {
              this.stage.coating.freeze(true);
              this.brush.generate(new r.A(), (0, i.Ay)("eraser-hard-tip").checked);
              if (!this.isShiftDown) {
                this.x = this.y = -1;
              }
              if (e !== "touch") {
                this.move(t, e, s);
              }
              this.addMoveListeners();
            }
          };
          this.x = -1;
          this.y = -1;
          this.move = (t, e, s) => {
            let i = this.brush.getStep();
            let a = false;
            this.scratch.ctx.globalAlpha = (e === "pen" || e === "touch") && this.usePen && s > 0 ? s * s : this.flow.getValue();
            t = this.stage.translateRasterToFresco(t, this.selected.rect);
            if (this.x === -1) {
              this.lx = t.x;
              this.ly = t.y;
              this.x = t.x;
              this.y = t.y;
              this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
              a = true;
            }
            if (t.x !== this.x || t.y !== this.y) {
              let e = t.x - this.x;
              let s = t.y - this.y;
              let n = e > 0 ? 1 : -1;
              let o = s > 0 ? 1 : -1;
              e = e < 0 ? -e : e;
              s = s < 0 ? -s : s;
              if (e > s) {
                let t = e * 0.5;
                for (let r = 1; r <= e; r++) {
                  this.x += n;
                  t += s;
                  if (t >= e) {
                    t -= e;
                    this.y += o;
                  }
                  if (this.x > this.lx + i || this.x < this.lx - i || this.y > this.ly + i || this.y < this.ly - i) {
                    this.lx = this.x;
                    this.ly = this.y;
                    this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    a = true;
                  }
                }
              } else {
                let t = s * 0.5;
                for (let r = 1; r <= s; r++) {
                  this.y += o;
                  t += e;
                  if (t >= s) {
                    t -= s;
                    this.x += n;
                  }
                  if (this.x > this.lx + i || this.x < this.lx - i || this.y > this.ly + i || this.y < this.ly - i) {
                    this.lx = this.x;
                    this.ly = this.y;
                    this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    a = true;
                  }
                }
              }
            }
            if (a) {
              this.scratch.applySelection(this.stage);
              this.selected.replaceCanvas(this.cached);
              this.scratch.drawToLayer(this.selected, this.isTransparent ? "destination-out" : "source-over", this.opacity.getValue());
              this.selected.render();
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.drawShape = (t, e) => {
            this.scratch.ctx.drawImage(this.brush.canvas, t, e);
          };
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            let e = a.TL(this.scratch.getCanvas());
            if (e && e.width > 0 && e.height > 0) {
              let t = a.ON(this.cached, e);
              const s = this.selected.rect.clone();
              this.cached = a.oM(this.selected.canvas);
              const i = this.selected.shrinkWrap();
              if (this.selected.rect) {
                e = e.rebase(this.selected.rect.x - s.x, this.selected.rect.y - s.y);
              }
              this.stage.history.add({
                type: "bitmapChange",
                kind: "eraser",
                layer: this.selected,
                patchRect: e,
                patch: t,
                rect: s
              });
              if (i) {
                this.layerSelect();
                return;
              }
            }
            this.scratch.clear();
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.brushPod.cleanUp();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            this.removeDownListeners();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            this.cached = undefined;
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          this.brush = new h.A(new l.A());
          this.brushPod = new c.A(t, "eraser-brush", this.brush, this.updateBrush);
          this.opacity = new o.A("eraser-opacity", {
            compact: true,
            label: (0, d.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          this.flow = new o.A("eraser-flow", {
            compact: true,
            label: (0, d.A)("flow") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
