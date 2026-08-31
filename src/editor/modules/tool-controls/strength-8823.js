window.__editorModules[8823] = function (t, e, s) {
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
          super("detail", t);
          this.mode = "blur";
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("detail-no-layer").style.display = "flex";
              (0, i.Ay)("detail-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("detail-settings").style.display = "flex";
            (0, i.Ay)("detail-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            this.updateBrush();
          };
          this.selectMode = t => {
            switch (t.currentTarget.id) {
              case "detail-mode-blur":
                this.setMode("blur");
                break;
              case "detail-mode-smudge":
                this.setMode("smudge");
                break;
              case "detail-mode-sharpen":
                this.setMode("sharpen");
            }
          };
          this.setMode = t => {
            this.mode = t;
            (0, i.Ay)("detail-mode-blur").checked = this.mode === "blur";
            (0, i.Ay)("detail-mode-sharpen").checked = this.mode === "sharpen";
            (0, i.Ay)("detail-mode-smudge").checked = this.mode === "smudge";
          };
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
              if (!this.isShiftDown) {
                this.x = this.y = -1;
              }
              if (this.mode === "smudge" && this.ptt) {
                this.ptt.clearRect(0, 0, this.ptt.canvas.width, this.ptt.canvas.height);
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
            let e = this.mode === "smudge" ? 1 : this.brush.getStep();
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
                    this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    this.lx = this.x;
                    this.ly = this.y;
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
                    this.drawShape(this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    this.lx = this.x;
                    this.ly = this.y;
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
            i.drawImage(this.selected.canvas, -t, -e);
            if (this.mode === "smudge") {
              if (this.x !== this.lx || this.y !== this.ly) {
                i.drawImage(this.scratch.canvas, -t, -e);
                let a = this.getPatternContext(this.brush.canvas.width, this.brush.canvas.height);
                a.save();
                a.drawImage(this.scratch.canvas, -(this.lx - ~~(this.brush.canvas.width / 2)), -(this.ly - ~~(this.brush.canvas.height / 2)));
                a.restore();
                a.save();
                a.globalCompositeOperation = "destination-in";
                a.drawImage(this.brush.canvas, 0, 0);
                a.restore();
                i.save();
                i.globalAlpha = s / 100;
                i.drawImage(this.ptt.canvas, 0, 0);
                i.restore();
              }
              this.scratch.ctx.drawImage(this.patch, t, e);
            } else {
              if (this.mode === "blur") {
                this.blur(i);
              } else if (this.mode === "sharpen") {
                this.sharpen(i);
              }
              i.save();
              i.globalCompositeOperation = "destination-in";
              i.drawImage(this.brush.canvas, 0, 0);
              i.restore();
              this.scratch.ctx.save();
              this.scratch.ctx.globalAlpha = s * 0.01;
              this.scratch.ctx.drawImage(this.patch, t, e);
              this.scratch.ctx.restore();
            }
          };
          this.getPatchContext = (t, e) => this.patch ? (this.patch.width !== t || this.patch.height !== e ? (this.patch.width = t, this.patch.height = e) : this.ptx.clearRect(0, 0, t, e), this.ptx) : (this.patch = n.VI(t, e), this.ptx = this.patch.getContext("2d"), this.ptx);
          this.getPatternContext = (t, e) => this.pattern ? (this.pattern.width !== t || this.pattern.height !== e ? (this.pattern.width = t, this.pattern.height = e) : this.ptt.clearRect(0, 0, t, e), this.ptt) : (this.pattern = n.VI(t, e), this.ptt = this.pattern.getContext("2d"), this.ptt);
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            let e = n.TL(this.scratch.canvas);
            if (e && e.width > 0 && e.height > 0) {
              let t = n.ON(this.selected.canvas, e);
              const s = this.selected.rect.clone();
              this.scratch.drawToLayer(this.selected);
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "detail",
                layer: this.selected,
                patchRect: e,
                patch: t,
                rect: s
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.sharpen = t => {
            const e = 0.3;
            var s;
            var i;
            var a;
            for (var n, o, r, h, l, c, d, u, p, g, m = t.canvas.width, y = t.canvas.height, v = [0, -1, 0, -1, 5, -1, 0, -1, 0], f = Math.round(Math.sqrt(v.length)), w = f * 0.5 | 0, x = t.createImageData(m, y), b = x.data, A = t.getImageData(0, 0, m, y).data, k = y; k--;) {
              for (s = m; s--;) {
                a = k;
                i = s;
                h = (k * m + s) * 4;
                n = 0;
                o = 0;
                r = 0;
                u = 0;
                for (; u < f; u++) {
                  for (d = 0; d < f; d++) {
                    g = i + d - w;
                    if ((p = a + u - w) >= 0 && p < y && g >= 0 && g < m) {
                      c = v[u * f + d];
                      n += A[l = (p * m + g) * 4] * c;
                      o += A[l + 1] * c;
                      r += A[l + 2] * c;
                      A[l + 3] * c;
                    }
                  }
                }
                b[h] = n * e + A[h] * 0.7;
                b[h + 1] = o * e + A[h + 1] * 0.7;
                b[h + 2] = r * e + A[h + 2] * 0.7;
                b[h + 3] = A[h + 3];
              }
            }
            t.putImageData(x, 0, 0);
          };
          this.blur = t => {
            var e;
            var s;
            var i;
            var a;
            var n;
            var o;
            var r;
            var h;
            var l;
            var c;
            var d;
            var u;
            var p;
            var g;
            var m = t.canvas.width;
            var y = t.canvas.height;
            var v = t.getImageData(0, 0, m, y);
            var f = v.data;
            var w = m - 1;
            var x = y - 1;
            var b = [];
            var A = [];
            var k = [];
            var S = [];
            var E = [];
            var C = [];
            p = u = 0;
            o = 0;
            for (; o < y; o++) {
              e = f[p] * 6;
              s = f[p + 1] * 6;
              i = f[p + 2] * 6;
              a = f[p + 3] * 6;
              r = 1;
              for (; r <= 5; r++) {
                h = p + ((r > w ? w : r) << 2);
                e += f[h++];
                s += f[h++];
                i += f[h++];
                a += f[h];
              }
              for (n = 0; n < m; n++) {
                b[u] = e;
                A[u] = s;
                k[u] = i;
                S[u] = a;
                if (o == 0) {
                  E[n] = ((h = n + 6) < w ? h : w) << 2;
                  C[n] = (h = n - 5) > 0 ? h << 2 : 0;
                }
                l = p + E[n];
                c = p + C[n];
                e += f[l++] - f[c++];
                s += f[l++] - f[c++];
                i += f[l++] - f[c++];
                a += f[l] - f[c];
                u++;
              }
              p += m << 2;
            }
            for (n = 0; n < m; n++) {
              e = b[d = n] * 6;
              s = A[d] * 6;
              i = k[d] * 6;
              a = S[d] * 6;
              r = 1;
              for (; r <= 5; r++) {
                e += b[d += r > x ? 0 : m];
                s += A[d];
                i += k[d];
                a += S[d];
              }
              u = n << 2;
              o = 0;
              for (; o < y; o++) {
                f[u + 3] = g = a * 34 >>> 12;
                if (g > 0) {
                  g = 255 / g;
                  f[u] = (e * 34 >>> 12) * g;
                  f[u + 1] = (s * 34 >>> 12) * g;
                  f[u + 2] = (i * 34 >>> 12) * g;
                } else {
                  f[u] = f[u + 1] = f[u + 2] = 0;
                }
                if (n === 0) {
                  E[o] = ((h = o + 6) < x ? h : x) * m;
                  C[o] = (h = o - 5) > 0 ? h * m : 0;
                }
                l = n + E[o];
                c = n + C[o];
                e += b[l] - b[c];
                s += A[l] - A[c];
                i += k[l] - k[c];
                a += S[l] - S[c];
                u += m << 2;
              }
            }
            t.putImageData(v, 0, 0);
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.removeDownListeners();
            this.brushPod.cleanUp();
            this.strength.cleanUp();
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            (0, i.Ay)("detail-mode-blur").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("detail-mode-sharpen").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("detail-mode-smudge").removeEventListener("click", this.selectMode, false);
            this.selected = undefined;
            this.pattern = undefined;
            this.patch = undefined;
            this.ptx = undefined;
            this.ptt = undefined;
          };
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("detail-mode-blur").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("detail-mode-sharpen").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("detail-mode-smudge").addEventListener("click", this.selectMode, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          this.brush = new h.A(new l.A("circle", 50, 0.5));
          this.brushPod = new c.A(t, "detail-brush", this.brush, this.updateBrush);
          this.strength = new r.A("detail-strength", {
            compact: true,
            label: (0, a.A)("strength") + ":",
            range: [1, 100],
            defaultValue: 40,
            step: 1
          });
          const e = document.querySelector("input[name=\"detail-mode\"]:checked").value;
          this.setMode(e);
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
