window.__editorModules[5698] = function (t, e, s) {
      s.d(e, {
        A: () => m
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(5527);
      var h = s(3517);
      var l = s(5259);
      var c = s(98);
      var d = s(2037);
      var u = s(749);
      var p = s(3566);
      var g = s(3328);
      class m extends r.A {
        constructor(t) {
          super("draw", t);
          this.stage = t;
          this.isShiftDown = false;
          this.keyDown = t => {
            if (t.key !== "Shift") {
              if (t.key !== "Control" || this.stage.coating.override) {
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
                this.stage.coating.setPicker();
              }
            } else {
              this.isShiftDown = true;
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
            }
            if (t.key === "Control" && this.stage.coating.override) {
              this.stage.coating.removePicker();
            }
          };
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedType(u.A.TYPE_IMAGE)) {
              (0, i.Ay)("draw-no-layer").style.display = "flex";
              (0, i.Ay)("draw-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("draw-no-layer").style.display = "none";
            (0, i.Ay)("draw-settings").style.display = "flex";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, new o.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            this.updateBrush();
          };
          this.updateBrush = () => {
            if (this.selected) {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom, new l.A(255, 255, 255, 255)));
            } else {
              this.stage.coating.removeCursorImage();
            }
            this.lastTip = undefined;
            this.lastColor = undefined;
            this.lastSettings = undefined;
          };
          this.down = (t, e, s) => {
            if (!this.selected) {
              return;
            }
            this.stage.coating.freeze(true);
            if (!this.isShiftDown) {
              this.x = this.y = -1;
            }
            let a = l.A.fromHEX(c.Ay.mainColor);
            let n = (0, i.Ay)("draw-hard-tip").checked;
            if (!!g.A.isEqual(this.brush.settings, this.lastSettings) || !a.isEqual(this.lastColor) || n !== this.lastTip) {
              this.brush.generate(a, n);
              this.lastSettings = this.brush.settings;
              this.lastColor = a;
              this.lastTip = n;
            }
            this.scratch.settings.opacity = this.opacity.getValue();
            this.mirror = (0, i.Ay)("draw-mirror").value;
            this.scatter = (0, i.Ay)("draw-scatter").checked;
            this.usePen = (0, i.Ay)("draw-pen-pressure").checked;
            if (e !== "touch") {
              this.move(t, e, s);
            }
            this.addMoveListeners();
          };
          this.x = -1;
          this.y = -1;
          this.move = (t, e, s = 1) => {
            let i = this.brush.getStep();
            let a = false;
            this.scratch.ctx.globalAlpha = (e === "pen" || e === "touch") && this.usePen && s > 0 ? s * s : this.flow.getValue();
            t = this.stage.translateRasterToFresco(t);
            if (this.x === -1) {
              this.lx = t.x;
              this.ly = t.y;
              this.x = t.x;
              this.y = t.y;
              this.draw(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
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
                    this.draw(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    this.lx = this.x;
                    this.ly = this.y;
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
                    this.draw(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    this.lx = this.x;
                    this.ly = this.y;
                    a = true;
                  }
                }
              }
            }
            if (a) {
              this.scratch.applySelection(this.stage);
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.draw = (t, e) => {
            if (this.scatter) {
              const s = (this.brush.canvas.width + this.brush.canvas.height) * 0.5;
              t += Math.round(Math.random() * s - s * 0.5);
              e += Math.round(Math.random() * s - s * 0.5);
            }
            this.scratch.ctx.drawImage(this.brush.canvas, t, e);
            if (this.mirror === "vertical" || this.mirror === "fourway") {
              let s = this.scratch.rect.width - t - this.brush.canvas.width;
              this.scratch.ctx.drawImage(this.brush.canvas, s, e);
            }
            if (this.mirror === "horizontal" || this.mirror === "fourway") {
              let s = this.scratch.rect.height - e - this.brush.canvas.height;
              this.scratch.ctx.drawImage(this.brush.canvas, t, s);
            }
            if (this.mirror === "fourway") {
              let s = this.scratch.rect.width - t - this.brush.canvas.width;
              let i = this.scratch.rect.height - e - this.brush.canvas.height;
              this.scratch.ctx.drawImage(this.brush.canvas, s, i);
            }
          };
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            const e = n.TL(this.scratch.canvas);
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
                kind: "draw",
                layer: this.selected,
                patchRect: this.selected.rect ? e.rebase(this.selected.rect.x, this.selected.rect.y) : e,
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
            this.stage.coating.removePicker();
            this.brushPod.cleanUp();
            this.opacity.cleanUp();
            this.flow.cleanUp();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            this.removeDownListeners();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          this.brush = new d.A(new g.A());
          this.brushPod = new p.A(t, "draw-brush", this.brush, this.updateBrush);
          this.opacity = new h.A("draw-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          this.flow = new h.A("draw-flow", {
            compact: true,
            label: (0, a.A)("flow") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
