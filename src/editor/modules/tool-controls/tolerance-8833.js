window.__editorModules[8833] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(6722);
      var r = s(3244);
      var h = s(5527);
      var l = s(3517);
      var c = s(5259);
      var d = s(98);
      var u = s(749);
      class p extends h.A {
        constructor(t) {
          super("fill", t);
          this.keyDown = t => {
            if (t.key === "Control" && !this.stage.coating.override) {
              this.stage.coating.setPicker();
            }
          };
          this.keyUp = t => {
            if (t.key === "Control" && this.stage.coating.override) {
              this.stage.coating.removePicker();
            }
          };
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedType(u.A.TYPE_IMAGE)) {
              (0, i.Ay)("fill-no-layer").style.display = "flex";
              (0, i.Ay)("fill-settings").style.display = "none";
              this.stage.raster.style.cursor = "unset";
              this.selected = null;
              return;
            }
            (0, i.Ay)("fill-settings").style.display = "flex";
            (0, i.Ay)("fill-no-layer").style.display = "none";
            this.stage.raster.style.cursor = "crosshair";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
          };
          this.down = t => {
            if (!this.selected) {
              return;
            }
            if ((t = this.stage.translateRasterToFresco(t)).x < 0 || t.y < 0 || t.x > this.scratch.canvas.width || t.y > this.scratch.canvas.height) {
              return;
            }
            let e;
            let s = this.tolerance.getValue();
            let a = c.A.fromHEX(d.Ay.mainColor);
            if (this.selected.canvas && this.selected.rect) {
              this.stage.coating.animateCursorTap();
              if (this.scratch.rect.equalTo(this.selected.rect)) {
                const t = this.selected.canvas.getContext("2d");
                this.canvasData = t.getImageData(0, 0, this.selected.canvas.width, this.selected.canvas.height).data;
              } else {
                let t = n.Nw(this.scratch.canvas.width, this.scratch.canvas.height);
                let e = t.getContext("2d");
                e.drawImage(this.selected.canvas, this.selected.rect.x, this.selected.rect.y);
                this.canvasData = e.getImageData(0, 0, t.width, t.height).data;
                e = undefined;
              }
              if (this.selected.rect.isInside(t)) {
                const s = (t.y * this.scratch.canvas.width + t.x) * 4;
                e = new c.A(this.canvasData[s], this.canvasData[s + 1], this.canvasData[s + 2], this.canvasData[s + 3]);
              } else {
                e = new c.A(0, 0, 0, 0);
              }
              let o = this.scratch.ctx.getImageData(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
              this.scratchData = o.data;
              if ((0, i.Ay)("fill-contiguous").checked) {
                this.floodFill(t, e, a, s, (0, i.Ay)("fill-anti-alias").checked);
              } else {
                this.allFill(e, a, s, (0, i.Ay)("fill-anti-alias").checked);
              }
              this.scratch.ctx.putImageData(o, 0, 0);
            } else {
              this.scratch.ctx.fillStyle = a.toRGBA(this.opacity.getValue() * 255);
              this.scratch.ctx.fillRect(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
            }
            this.scratch.applySelection(this.stage);
            let o = n.TL(this.scratch.getCanvas());
            if (o && o.width > 0 && o.height > 0) {
              let t = this.selected.rect ? n.ON(this.selected.canvas, o.rebase(this.selected.rect.x, this.selected.rect.y)) : undefined;
              const e = this.selected.rect ? this.selected.rect.clone() : undefined;
              const s = n.$z(this.selected.mask);
              this.selected.extendCanvas(o);
              this.scratch.drawToLayer(this.selected, "source-over", this.opacity.getValue());
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "fill",
                layer: this.selected,
                patchRect: this.selected.rect ? o.rebase(this.selected.rect.x, this.selected.rect.y) : o,
                patch: t,
                rect: e,
                mask: s
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.allFill = (t, e, s, i) => {
            var a;
            var n;
            for (var o = 0, r = this.scratch.canvas.height; o < r; ++o) {
              for (var h = 0, l = this.scratch.canvas.width; h < l; ++h) {
                n = (o * l + h) * 4;
                if ((a = this.tolerate(n, t, s, i)) > 64) {
                  if (a > 128) {
                    a = 255;
                  }
                  this.scratchData[n] = e.r;
                  this.scratchData[n + 1] = e.g;
                  this.scratchData[n + 2] = e.b;
                  this.scratchData[n + 3] = a;
                }
              }
            }
          };
          this.floodFill = (t, e, s, i, a) => {
            let n = this.scratch.canvas.width;
            let o = this.scratch.canvas.height;
            let r = new Array();
            let h = new Array(n * o);
            for (this.linearFill(t.x, t.y, e, s, i, a, r, h); r.length > 0;) {
              for (var l = r.shift(), c = l.start; c <= l.stop; ++c) {
                if (l.row > 0 && !h[(l.row - 1) * n + c]) {
                  this.linearFill(c, l.row - 1, e, s, i, a, r, h);
                }
                if (l.row < o - 1 && !h[(l.row + 1) * n + c]) {
                  this.linearFill(c, l.row + 1, e, s, i, a, r, h);
                }
              }
            }
          };
          this.linearFill = (t, e, s, i, a, n, r, h) => {
            var l = this.scratch.canvas.width;
            h[l * e + t] = true;
            let c = (l * e + t) * 4;
            let d = this.tolerate(c, s, a, n);
            if (d > 5) {
              this.scratchData[c] = i.r;
              this.scratchData[c + 1] = i.g;
              this.scratchData[c + 2] = i.b;
              this.scratchData[c + 3] = d > 160 ? 255 : d;
            }
            if (d > 64) {
              for (var u = t - 1, p = t + 1; u >= 0 && !h[l * e + u] && d > 64;) {
                h[l * e + u] = true;
                c = (l * e + u) * 4;
                d = this.tolerate(c, s, a, n);
                if (d > 5) {
                  this.scratchData[c] = i.r;
                  this.scratchData[c + 1] = i.g;
                  this.scratchData[c + 2] = i.b;
                  this.scratchData[c + 3] = d > 160 ? 255 : d;
                }
                --u;
              }
              for (d = 255; p < l && !h[l * e + p] && d > 64;) {
                h[l * e + p] = true;
                c = (l * e + p) * 4;
                d = this.tolerate(c, s, a, n);
                if (d > 5) {
                  this.scratchData[c] = i.r;
                  this.scratchData[c + 1] = i.g;
                  this.scratchData[c + 2] = i.b;
                  this.scratchData[c + 3] = d > 160 ? 255 : d;
                }
                ++p;
              }
              r.push(new o.A(u + 1, p - 1, e));
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
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.stage.coating.removePicker();
            this.removeDownListeners();
            this.tolerance.cleanUp();
            this.opacity.cleanUp();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          this.tolerance = new l.A("fill-tolerance", {
            compact: true,
            label: (0, a.A)("tolerance") + ":",
            defaultValue: 32,
            range: [0, 255],
            step: 1
          });
          this.opacity = new l.A("fill-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%"
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
