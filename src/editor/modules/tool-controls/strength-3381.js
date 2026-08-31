window.__editorModules[3381] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5283);
      var a = s(5699);
      var n = s(5527);
      var o = s(3517);
      var r = s(2037);
      var h = s(3328);
      var l = s(3566);
      var c = s(7775);
      class d extends n.A {
        constructor(t) {
          super("temper", t);
          this.mode = "increase";
          this.method = "vibrance";
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("temper-no-layer").style.display = "flex";
              (0, i.Ay)("temper-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("temper-settings").style.display = "flex";
            (0, i.Ay)("temper-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            this.updateBrush();
          };
          this.toggleMode = () => {
            this.setMode(this.mode === "increase" ? "decrease" : "increase");
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget === (0, i.Ay)("temper-mode-increase") ? "increase" : "decrease");
          };
          this.setMode = t => {
            this.mode = t;
            (0, i.Ay)("temper-mode-increase").checked = this.mode === "increase";
            (0, i.Ay)("temper-mode-decrease").checked = this.mode === "decrease";
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
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.down = (t, e) => {
            if (this.selected) {
              this.stage.coating.freeze(true);
              this.method = document.querySelector("input[name=\"temper-method\"]:checked").value;
              if (!this.isShiftDown) {
                this.x = this.y = -1;
              }
              if (e !== "touch") {
                this.move(t);
              }
              this.addMoveListeners();
            }
          };
          this.x = -1;
          this.y = -1;
          this.move = t => {
            let e = this.brush.getStep() * 2;
            let s = false;
            t = this.stage.translateRasterToFresco(t, this.selected.rect);
            if (this.x === -1) {
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
            let s = this.strength.getValue();
            if (this.mode === "decrease") {
              s *= -1;
            }
            let i = this.getPatchContext(this.brush.canvas.width, this.brush.canvas.height);
            i.save();
            i.drawImage(this.selected.canvas, -t, -e);
            switch (this.method) {
              case "vibrance":
                this.vibrance(i, s);
                break;
              case "saturation":
                this.saturation(i, s);
                break;
              case "temperature":
                this.temperature(i, s);
            }
            i.globalCompositeOperation = "destination-in";
            i.drawImage(this.brush.canvas, 0, 0);
            i.restore();
            this.scratch.ctx.drawImage(this.patch, t, e);
          };
          this.getPatchContext = (t, e) => this.patch ? (this.patch.width !== t || this.patch.height !== e ? (this.patch.width = t, this.patch.height = e) : this.ptx.clearRect(0, 0, t, e), this.ptx) : (this.patch = a.VI(t, e), this.ptx = this.patch.getContext("2d"), this.ptx);
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            let e = a.TL(this.scratch.getCanvas());
            if (e && e.width > 0 && e.height > 0) {
              let t = a.ON(this.selected.canvas, e);
              const s = this.selected.rect.clone();
              this.scratch.drawToLayer(this.selected);
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "temper",
                layer: this.selected,
                patchRect: e,
                patch: t,
                rect: s
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.saturation = (t, e) => {
            var s = t.canvas.width;
            var i = t.canvas.height;
            e += 100;
            e /= 100;
            var a;
            var n;
            var o;
            var r;
            var h;
            var l;
            var c = t.getImageData(0, 0, s, i);
            var d = c.data;
            for (var u = i; u--;) {
              for (a = s; a--;) {
                n = d[h = (u * s + a) * 4];
                o = d[h + 1];
                r = d[h + 2];
                if ((n = (l = Math.sqrt(n * n * 0.299 + o * o * 0.587 + r * r * 0.114)) + (n - l) * e) > 255) {
                  n = 255;
                } else if (n < 0) {
                  n = 0;
                }
                if ((o = l + (o - l) * e) > 255) {
                  o = 255;
                } else if (o < 0) {
                  o = 0;
                }
                if ((r = l + (r - l) * e) > 255) {
                  r = 255;
                } else if (r < 0) {
                  r = 0;
                }
                d[h] = n;
                d[h + 1] = o;
                d[h + 2] = r;
              }
            }
            t.putImageData(c, 0, 0);
          };
          this.vibrance = (t, e) => {
            var s = t.canvas.width;
            var i = t.canvas.height;
            e *= -0.02;
            var n;
            var o;
            var r;
            var h;
            var l;
            var c;
            var d;
            var u;
            var p = t.getImageData(0, 0, s, i);
            var g = p.data;
            for (var m = i; m--;) {
              for (n = s; n--;) {
                c = (o = g[l = (m * s + n) * 4]) * 0.299 + (r = g[l + 1]) * 0.587 + (h = g[l + 2]) * 0.114;
                d = Math.max(o, r, h);
                Math.min(o, r, h);
                u = (d - c) * e / 255;
                if ((o = a.jh(o, d, u)) > 255) {
                  o = 255;
                } else if (o < 0) {
                  o = 0;
                }
                if ((r = a.jh(r, d, u)) > 255) {
                  r = 255;
                } else if (r < 0) {
                  r = 0;
                }
                if ((h = a.jh(h, d, u)) > 255) {
                  h = 255;
                } else if (h < 0) {
                  h = 0;
                }
                g[l] = o;
                g[l + 1] = r;
                g[l + 2] = h;
              }
            }
            t.putImageData(p, 0, 0);
          };
          this.temperature = (t, e) => {
            var s = t.canvas.width;
            var i = t.canvas.height;
            e = Math.round(e / 10);
            var a;
            var n;
            var o;
            var r;
            var h = t.getImageData(0, 0, s, i);
            var l = h.data;
            for (var c = i; c--;) {
              for (a = s; a--;) {
                if ((n = l[r = (c * s + a) * 4] + e) > 255) {
                  n = 255;
                } else if (n < 0) {
                  n = 0;
                }
                if ((o = l[r + 2] - e) > 255) {
                  o = 255;
                } else if (o < 0) {
                  o = 0;
                }
                l[r] = n;
                l[r + 2] = o;
              }
            }
            t.putImageData(h, 0, 0);
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.brushPod.cleanUp();
            this.strength.cleanUp();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            this.removeDownListeners();
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            (0, i.Ay)("temper-mode-increase").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("temper-mode-decrease").removeEventListener("click", this.selectMode, false);
            this.selected = null;
            this.patch = null;
            this.ptx = null;
          };
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("temper-mode-increase").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("temper-mode-decrease").addEventListener("click", this.selectMode, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          this.brush = new r.A(new h.A());
          this.brushPod = new l.A(t, "temper-brush", this.brush, this.updateBrush);
          this.strength = new o.A("temper-brush-strength", {
            compact: true,
            label: (0, c.A)("strength") + ":",
            range: [1, 100],
            defaultValue: 30,
            step: 1
          });
          const e = document.querySelector("input[name=\"temper-mode\"]:checked").value;
          this.setMode(e);
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
