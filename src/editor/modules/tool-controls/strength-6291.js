window.__editorModules[6291] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(5527);
      var r = s(3517);
      var h = s(2037);
      var l = s(3328);
      var c = s(3566);
      class d extends o.A {
        constructor(t) {
          super("toning", t);
          this.mode = "lighten";
          this.range = "midtone";
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("toning-no-layer").style.display = "flex";
              (0, i.Ay)("toning-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("toning-settings").style.display = "flex";
            (0, i.Ay)("toning-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            this.updateBrush();
          };
          this.toggleMode = () => {
            this.setMode(this.mode === "lighten" ? "darken" : "lighten");
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget === (0, i.Ay)("toning-mode-lighten") ? "lighten" : "darken");
          };
          this.setMode = t => {
            this.mode = t;
            (0, i.Ay)("toning-mode-lighten").checked = this.mode === "lighten";
            (0, i.Ay)("toning-mode-darken").checked = this.mode === "darken";
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
              this.range = document.querySelector("input[name=\"toning-range\"]:checked").value;
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
            let i = this.getPatchContext(this.brush.canvas.width, this.brush.canvas.height);
            i.save();
            i.drawImage(this.selected.canvas, -t, -e);
            if (this.mode === "lighten") {
              this.lighten(i, this.range, s);
            } else {
              this.darken(i, this.range, s);
            }
            i.globalCompositeOperation = "destination-in";
            i.drawImage(this.brush.canvas, 0, 0);
            i.restore();
            this.scratch.ctx.drawImage(this.patch, t, e);
          };
          this.getPatchContext = (t, e) => this.patch ? (this.patch.width !== t || this.patch.height !== e ? (this.patch.width = t, this.patch.height = e) : this.ptx.clearRect(0, 0, t, e), this.ptx) : (this.patch = n.VI(t, e), this.ptx = this.patch.getContext("2d"), this.ptx);
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            let e = n.TL(this.scratch.getCanvas());
            if (e && e.width > 0 && e.height > 0) {
              let t = n.ON(this.selected.canvas, e);
              const s = this.selected.rect.clone();
              this.scratch.drawToLayer(this.selected);
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "toning",
                layer: this.selected,
                patchRect: e,
                patch: t,
                rect: s
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.lighten = (t, e, s) => {
            var i = t.canvas.width;
            var a = t.canvas.height;
            s /= 100;
            var n;
            var o;
            var r;
            var h;
            var l;
            var c;
            var d = t.getImageData(0, 0, i, a);
            var u = d.data;
            for (var p = a; p--;) {
              for (n = i; n--;) {
                o = u[l = (p * i + n) * 4] / 255;
                r = u[l + 1] / 255;
                h = u[l + 2] / 255;
                switch (e) {
                  case "highlight":
                    o += s * (Math.exp(o) - 1);
                    r += s * (Math.exp(r) - 1);
                    h += s * (Math.exp(h) - 1);
                    break;
                  case "midtone":
                    o += (c = s * 0.25) * Math.sin(o * Math.PI);
                    r += c * Math.sin(r * Math.PI);
                    h += c * Math.sin(h * Math.PI);
                    break;
                  case "shadow":
                    o = (c = 1 - s * 0.5) * o + (1 - c);
                    r = c * r + (1 - c);
                    h = c * h + (1 - c);
                }
                if ((o *= 255) > 255) {
                  o = 255;
                }
                if ((r *= 255) > 255) {
                  r = 255;
                }
                if ((h *= 255) > 255) {
                  h = 255;
                }
                u[l] = o;
                u[l + 1] = r;
                u[l + 2] = h;
              }
            }
            t.putImageData(d, 0, 0);
          };
          this.darken = (t, e, s) => {
            var i = t.canvas.width;
            var a = t.canvas.height;
            s /= 100;
            var n;
            var o;
            var r;
            var h;
            var l;
            var c;
            var d = t.getImageData(0, 0, i, a);
            var u = d.data;
            for (var p = a; p--;) {
              for (n = i; n--;) {
                o = u[l = (p * i + n) * 4] / 255;
                r = u[l + 1] / 255;
                h = u[l + 2] / 255;
                switch (e) {
                  case "highlight":
                    o *= c = 1 - s * 0.75;
                    r *= c;
                    h *= c;
                    break;
                  case "midtone":
                    o -= (c = s * 0.25) * Math.sin(o * Math.PI);
                    r -= c * Math.sin(r * Math.PI);
                    h -= c * Math.sin(h * Math.PI);
                    break;
                  case "shadow":
                    o += s * (1 - Math.exp(1 - o));
                    r += s * (1 - Math.exp(1 - r));
                    h += s * (1 - Math.exp(1 - h));
                }
                if ((o *= 255) < 0) {
                  o = 0;
                }
                if ((r *= 255) < 0) {
                  r = 0;
                }
                if ((h *= 255) < 0) {
                  h = 0;
                }
                u[l] = o;
                u[l + 1] = r;
                u[l + 2] = h;
              }
            }
            t.putImageData(d, 0, 0);
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
            (0, i.Ay)("toning-mode-lighten").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("toning-mode-darken").removeEventListener("click", this.selectMode, false);
            this.selected = null;
            this.patch = null;
            this.ptx = null;
          };
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("toning-mode-lighten").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("toning-mode-darken").addEventListener("click", this.selectMode, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          this.brush = new h.A(new l.A());
          this.brushPod = new c.A(t, "toning-brush", this.brush, this.updateBrush);
          this.strength = new r.A("toning-brush-strength", {
            compact: true,
            label: (0, a.A)("strength") + ":",
            range: [1, 100],
            defaultValue: 30,
            step: 1
          });
          const e = document.querySelector("input[name=\"toning-mode\"]:checked").value;
          this.setMode(e);
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
