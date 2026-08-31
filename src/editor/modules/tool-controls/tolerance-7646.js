window.__editorModules[7646] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(6722);
      var r = s(3244);
      var h = s(3517);
      var l = s(5259);
      var c = s(709);
      class d extends c.A {
        constructor(t) {
          super("wand", t);
          this.selectMode = () => {
            this.mode = document.querySelector("input[name=\"wand-mode\"]:checked").value;
          };
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              if (!this.isDown) {
                (0, i.Ay)("wand-mode-add").checked = true;
                this.selectMode();
              }
            }
            if (t.key === "Control" && !this.isCtrlDown) {
              this.isCtrlDown = true;
              if (!this.isDown) {
                (0, i.Ay)("wand-mode-remove").checked = true;
                this.selectMode();
              }
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift" && this.isShiftDown) {
              this.isShiftDown = false;
              if (!this.isCtrlDown && !this.isDown) {
                (0, i.Ay)("wand-mode-new").checked = true;
                this.selectMode();
              }
            }
            if (t.key === "Control" && this.isCtrlDown) {
              this.isCtrlDown = false;
              if (!this.isDown) {
                (0, i.Ay)("wand-mode-new").checked = true;
                this.selectMode();
              }
            }
          };
          this.layerSelect = () => {
            this.scratch = this.stage.fresco.addScratch();
            this.flat = this.stage.getOutputCanvas();
            this.canvas = this.stage.getSingleLayerOutputCanvas();
          };
          this.down = t => {
            this.stage.coating.animateCursorTap();
            let e = !this.canvas || (0, i.Ay)("wand-sample-all").checked;
            t = this.stage.translateRasterToFresco(t);
            if (this.mode === "new" && this.stage.fresco.selection) {
              this.stage.fresco.selection.clear();
            }
            let s = this.tolerance.getValue();
            if (e) {
              this.canvasData = new Uint8Array(this.flat.getContext("2d").getImageData(0, 0, this.flat.width, this.flat.height).data.buffer);
              this.scratch.setTarget("flat", new r.A(0, 0, this.flat.width, this.flat.height), "none");
            } else {
              if (!this.canvas) {
                return;
              }
              this.canvasData = new Uint8Array(this.canvas.getContext("2d").getImageData(0, 0, this.canvas.width, this.canvas.height).data.buffer);
              this.scratch.setTarget("flat", new r.A(0, 0, this.canvas.width, this.canvas.height), "none");
            }
            this.setHistory();
            if (t.x < 0 || t.y < 0 || t.x > this.scratch.canvas.width || t.y > this.scratch.canvas.height) {
              if (this.stage.fresco.hasSelection()) {
                this.stage.fresco.selection.reset();
                this.addHistory("deselect");
              }
              return;
            }
            let a = (t.y * (e ? this.flat.width : this.canvas.width) + t.x) * 4;
            let o = new l.A(this.canvasData[a], this.canvasData[a + 1], this.canvasData[a + 2], this.canvasData[a + 3]);
            let h = this.scratch.ctx.getImageData(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
            this.scratchData = new Uint8Array(h.data.buffer);
            if ((0, i.Ay)("wand-contiguous").checked) {
              this.floodFill(t, o, s, (0, i.Ay)("wand-anti-alias").checked);
            } else {
              this.allFill(o, s, (0, i.Ay)("wand-anti-alias").checked);
            }
            this.scratch.ctx.putImageData(h, 0, 0);
            let c = n.TL(this.scratch.canvas);
            if (c && c.width > 0 && c.height > 0) {
              this.stage.fresco.addSelection();
              this.stage.fresco.selection.drawOnMask(this.scratch.canvas, this.feather.getValue(), false, this.mode === "remove");
              window.requestAnimationFrame(() => {
                this.stage.coating.render();
              });
            }
            this.isDown = false;
            this.addHistory();
          };
          this.allFill = (t, e, s) => {
            var i;
            var a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            let d;
            for (var u = 0, p = this.scratch.canvas.height; u < p; ++u) {
              for (var g = 0, m = this.scratch.canvas.width; g < m; ++g) {
                a = (u * m + g) * 4;
                h = t.a - this.canvasData[a + 3];
                o = h < 0 ? -h : h;
                if (t.a > 0) {
                  l = t.r - this.canvasData[a];
                  n = l < 0 ? -l : l;
                  if (n > o) {
                    o = n;
                  }
                  c = t.g - this.canvasData[a + 1];
                  n = c < 0 ? -c : c;
                  if (n > o) {
                    o = n;
                  }
                  d = t.b - this.canvasData[a + 2];
                  n = d < 0 ? -d : d;
                  if (n > o) {
                    o = n;
                  }
                }
                if (s && e > 0) {
                  r = 1.5 - o / e;
                  i = r <= 0 ? 0 : r < 0.5 ? Math.round(r * 512) : 255;
                } else {
                  i = o > e ? 0 : 255;
                }
                if (i > 64) {
                  if (i > 128) {
                    i = 255;
                  }
                  this.scratchData[a + 3] = i;
                }
              }
            }
          };
          this.floodFill = (t, e, s, i) => {
            let a = this.scratch.canvas.width;
            let n = this.scratch.canvas.height;
            let o = new Array();
            let r = new Array(a * n);
            for (this.linearFill(t.x, t.y, e, s, i, o, r); o.length > 0;) {
              for (var h = o.shift(), l = h.start; l <= h.stop; ++l) {
                if (h.row > 0 && !r[(h.row - 1) * a + l]) {
                  this.linearFill(l, h.row - 1, e, s, i, o, r);
                }
                if (h.row < n - 1 && !r[(h.row + 1) * a + l]) {
                  this.linearFill(l, h.row + 1, e, s, i, o, r);
                }
              }
            }
          };
          this.linearFill = (t, e, s, i, a, n, r) => {
            var h = this.scratch.canvas.width;
            r[h * e + t] = true;
            let l = (h * e + t) * 4;
            let c = this.tolerate(l, s, i, a);
            if (c > 5) {
              this.scratchData[l + 3] = c > 160 ? 255 : c;
            }
            if (c > 64) {
              for (var d = t - 1, u = t + 1; d >= 0 && !r[h * e + d] && c > 64;) {
                r[h * e + d] = true;
                l = (h * e + d) * 4;
                c = this.tolerate(l, s, i, a);
                if (c > 5) {
                  this.scratchData[l + 3] = c > 160 ? 255 : c;
                }
                --d;
              }
              for (c = 255; u < h && !r[h * e + u] && c > 64;) {
                r[h * e + u] = true;
                l = (h * e + u) * 4;
                c = this.tolerate(l, s, i, a);
                if (c > 5) {
                  this.scratchData[l + 3] = c > 160 ? 255 : c;
                }
                ++u;
              }
              n.push(new o.A(d + 1, u - 1, e));
            }
          };
          this.tolerate = (t, e, s, i = false) => {
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            r = e.a - this.canvasData[t + 3];
            n = r < 0 ? -r : r;
            if (e.a > 0) {
              h = e.r - this.canvasData[t];
              a = h < 0 ? -h : h;
              if (a > n) {
                n = a;
              }
              l = e.g - this.canvasData[t + 1];
              a = l < 0 ? -l : l;
              if (a > n) {
                n = a;
              }
              c = e.b - this.canvasData[t + 2];
              a = c < 0 ? -c : c;
              if (a > n) {
                n = a;
              }
            }
            if (i && s > 0) {
              o = 1.5 - n / s;
              if (o <= 0) {
                return 0;
              } else if (o < 0.5) {
                return Math.round(o * 512);
              } else {
                return 255;
              }
            } else if (n > s) {
              return 0;
            } else {
              return 255;
            }
          };
          this.cleanUp = () => {
            var e;
            if (this.isShiftDown || this.isCtrlDown) {
              (0, i.Ay)("wand-mode-new").checked = true;
            }
            this.superClean();
            if (this.stage.fresco && this.stage.fresco.selection && this.stage.fresco.selection.outline?.length === 0) {
              this.stage.fresco.removeSelection();
            }
            if ((e = this.stage.fresco) !== null && e !== undefined) {
              e.removeScratch();
            }
            this.canvas = undefined;
            this.flat = undefined;
            this.feather.cleanUp();
            this.tolerance.cleanUp();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            (0, i.Ay)("wand-mode-new").removeEventListener("change", this.selectMode, false);
            (0, i.Ay)("wand-mode-add").removeEventListener("change", this.selectMode, false);
            (0, i.Ay)("wand-mode-remove").removeEventListener("change", this.selectMode, false);
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          this.tolerance = new h.A("wand-tolerance", {
            compact: true,
            label: (0, a.A)("tolerance") + ":",
            defaultValue: 32,
            range: [0, 255],
            step: 1
          });
          this.feather = new h.A("wand-feather", {
            compact: true,
            defaultValue: 0,
            label: (0, a.A)("feather") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          (0, i.Ay)("wand-mode-new").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("wand-mode-add").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("wand-mode-remove").addEventListener("change", this.selectMode, false);
          this.selectMode();
          this.layerSelect();
        }
      }
    }
