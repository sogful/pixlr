window.__editorModules[5477] = function (t, e, s) {
      s.d(e, {
        A: () => v
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(5527);
      var h = s(3517);
      var l = s(6050);
      var c = s(5259);
      var d = s(2037);
      var u = s(3328);
      class p {
        constructor(t) {
          this.stage = t;
          this.resize = () => {
            const t = document.querySelector(".raster");
            this.container.style.top = t.style.top;
            this.container.style.left = t.style.left;
            this.container.style.width = t.style.width;
          };
          this.bar = (0, i.T)("div");
          this.container = (0, i.T)("div", {
            id: "workspace-progress"
          }, this.bar);
          (0, i.Ay)("workspace").append(this.container);
          this.resize();
          document.addEventListener("viewport-update", this.resize);
          document.addEventListener("resize", this.resize);
        }
        update(t) {
          this.bar.style.width = `${(t * 100).toFixed(0)}%`;
        }
        show() {
          this.bar.style.width = "0";
          this.container.style.display = "block";
          this.resize();
        }
        hide() {
          this.container.style.display = "none";
          this.resize();
        }
        cleanUp() {
          this.container.remove();
        }
      }
      class g {
        constructor(t) {
          this.internal = t;
        }
        send(t, e) {
          this.internal.postMessage(t, e);
        }
        async receive() {
          return await new Promise((t, e) => {
            this.internal.onmessage = e => {
              this.internal.onerror = undefined;
              this.internal.onmessage = undefined;
              t(e.data);
            };
            this.internal.onerror = e;
          });
        }
        terminate() {
          var t;
          if ((t = this.internal) !== null && t !== undefined) {
            t.terminate();
          }
          this.internal = null;
        }
      }
      class m extends g {
        constructor() {
          super(new Worker(new URL(s.p + s.u(161), s.b)));
        }
      }
      const y = {
        speed: [2, 20],
        balanced: [20, 20],
        quality: [50, 50],
        ultra: [100, 100]
      };
      class v extends r.A {
        constructor(t) {
          super("heal", t);
          this.workset = null;
          this.changeMode = () => {
            this.mode = document.querySelector("input[name=\"heal-mode\"]:checked").value;
            this.updateBrush();
            (0, i.Ay)("heal-presets").style.display = this.mode === "object" ? "flex" : "none";
          };
          this.layerSelect = () => {
            if (this.selected?.id !== this.stage.fresco.getSelected()?.id) {
              this.cleanUpWorker();
              this.worker = new m();
            }
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("heal-no-layer").style.display = "flex";
              (0, i.Ay)("heal-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("heal-settings").style.display = "flex";
            (0, i.Ay)("heal-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            this.scratch.settings.opacity = 0.4;
            this.updateBrush();
          };
          this.keyDown = t => {
            if (t.key === "," || t.key === ".") {
              switch (t.key) {
                case ",":
                  this.size.setValue(this.size.getValue() - 10);
                  break;
                case ".":
                  this.size.setValue(this.size.getValue() + 10);
              }
              this.brush.settings.size = this.size.getValue();
              this.updateBrush();
            }
          };
          this.updateBrush = () => {
            this.brush.generate(new c.A(0, 255, 0, 255));
            if (this.selected) {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.down = (t, e) => {
            if (!this.selected || this.workset !== null) {
              return;
            }
            let s = document.querySelector("input[name=\"heal-mode\"]:checked").value;
            if (s === "spot") {
              this.stage.coating.animateCursorTap();
              this.applyHealSpot(t);
            } else if (s === "soft") {
              this.stage.coating.animateCursorTap();
              this.applyHealSoft(t);
            } else {
              this.brushPoints = [];
              this.x = this.y = -1;
              if (e !== "touch") {
                this.move(t);
              }
              this.addMoveListeners();
            }
          };
          this.x = -1;
          this.y = -1;
          this.move = t => {
            let e = this.brush.getStep();
            let s = false;
            t = this.stage.translateRasterToFresco(t, this.selected.rect);
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
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.drawShape = (t, e) => {
            this.brushPoints.push(new l.A(t, e));
            this.scratch.ctx.drawImage(this.brush.canvas, t, e);
          };
          this.up = async t => {
            try {
              this.removeMoveListeners();
              const t = document.querySelector("input[name=\"heal-preset\"]:checked").value;
              const [e, s] = y[t];
              let i = 50;
              if (t === "ultra") {
                i = 100;
              }
              let a = o.A.fromPointRects(this.brushPoints, this.brush.canvas.width, this.brush.canvas.height);
              a.x -= i;
              a.y -= i;
              a.width += i * 2;
              a.height += i * 2;
              a = a.intersect(new o.A(0, 0, this.scratch.canvas.width, this.scratch.canvas.height));
              if (!a) {
                return;
              }
              const r = n.ON(this.selected.canvas, a);
              this.workset = [a, r];
              await this.fill(a, true, e, s);
              this.stage.history.add({
                type: "bitmapChange",
                kind: "healObject",
                layer: this.selected,
                patchRect: a,
                patch: r,
                rect: this.selected.rect.clone()
              });
            } finally {
              this.workset = null;
            }
          };
          this.applyHealSpot = async t => {
            try {
              (t = this.stage.translateRasterToFresco(t, this.selected.rect)).x -= ~~(this.brush.canvas.width / 2);
              t.y -= ~~(this.brush.canvas.height / 2);
              this.scratch.ctx.drawImage(this.brush.canvas, t.x, t.y);
              let e = this.brush.canvas.width;
              let s = this.brush.canvas.height;
              const i = 50;
              let a = new o.A(t.x - i, t.y - i, e + i * 2, s + i * 2);
              a = a.intersect(new o.A(0, 0, this.scratch.canvas.width, this.scratch.canvas.height));
              if (!a) {
                return;
              }
              const r = n.ON(this.selected.canvas, a);
              this.workset = [a, r];
              const [h, l] = y.balanced;
              await this.fill(a, false, h, l);
              this.stage.history.add({
                type: "bitmapChange",
                kind: "healSpot",
                layer: this.selected,
                patchRect: a,
                patch: r,
                rect: this.selected.rect.clone()
              });
            } finally {
              this.workset = null;
            }
          };
          this.fill = async (t, e, s, i) => {
            if (e) {
              this.stage.coating.removeCursorImage();
              this.progress.show();
            }
            const a = this.selected.canvas.getContext("2d");
            const o = a.getImageData(t.x, t.y, t.width, t.height);
            const r = n.Nw(t.width, t.height);
            const h = r.getContext("2d");
            h.fillStyle = "#fff";
            h.fillRect(0, 0, t.width, t.height);
            h.drawImage(this.scratch.canvas, t.x, t.y, t.width, t.height, 0, 0, t.width, t.height);
            const l = h.getImageData(0, 0, t.width, t.height);
            this.worker.send({
              image: o,
              neighbour: s,
              random: i,
              mask: l,
              intermediateImage: e
            }, [o.data.buffer, l.data.buffer]);
            h.globalCompositeOperation = "copy";
            h.drawImage(this.scratch.canvas, t.x, t.y, t.width, t.height, 0, 0, t.width, t.height);
            const c = n.Nw(t.width, t.height);
            const d = c.getContext("2d");
            d.globalCompositeOperation = "destination-atop";
            this.scratch.clear();
            this.stage.render();
            while (true) {
              const {
                progress: e,
                image: s
              } = await this.worker.receive();
              if (e === "done") {
                this.progress.update(1);
                a.putImageData(s, t.x, t.y);
                break;
              }
              this.progress.update(e);
              if (s) {
                d.putImageData(s, 0, 0);
                d.drawImage(r, 0, 0);
                a.drawImage(c, 0, 0, t.width, t.height, t.x, t.y, t.width, t.height);
                window.requestAnimationFrame(() => {
                  this.selected.render();
                  this.stage.render();
                });
              }
            }
            if (e) {
              setTimeout(() => this.progress.hide(), 300);
              this.updateBrush();
            }
            this.selected.render();
            this.stage.render();
          };
          this.cleanUpWorker = () => {
            var t;
            if ((t = this.worker) !== null && t !== undefined) {
              t.terminate();
            }
            this.progress.hide();
            if (this.workset) {
              const [t, e] = this.workset;
              this.selected.canvas.getContext("2d").putImageData(e, t.x, t.y);
              this.selected.render();
              this.stage.render();
              this.workset = null;
            }
          };
          this.apply = () => {};
          this.applyHealSoft = t => {
            (t = this.stage.translateRasterToFresco(t, this.selected.rect)).x -= ~~(this.brush.canvas.width / 2);
            t.y -= ~~(this.brush.canvas.height / 2);
            let e = this.brush.canvas.width;
            let s = this.brush.canvas.height;
            const i = new o.A(t.x, t.y, e, s);
            const a = n.ON(this.selected.canvas, i);
            this.blendImages(t);
            this.selected.render();
            this.stage.render();
            this.stage.history.add({
              type: "bitmapChange",
              kind: "healSoft",
              layer: this.selected,
              patchRect: i,
              patch: a,
              rect: this.selected.rect.clone()
            });
          };
          this.blendImages = t => {
            let e = this.brush.canvas.width;
            let s = this.brush.canvas.height;
            let i = this.brush.canvas.getContext("2d").getImageData(0, 0, e, s);
            let a = this.selected.canvas.getContext("2d");
            var n = a.getImageData(t.x, t.y, e, s);
            var r = a.getImageData(t.x, t.y, e, s);
            r = this.createGradient(r, n);
            let h = new o.A(t.x - e, t.y - s, e * 3, s * 3);
            let l = a.getImageData(h.x, h.y, h.width, h.height);
            var c = this.locateBestTexture(l, h, e);
            c.x += t.x - e;
            c.y += t.y - s;
            var d = a.getImageData(c.x, c.y, e, s);
            let u;
            let p;
            let g;
            let m = 1;
            let y = 0;
            let v = 0;
            let f = 0;
            let w = 0;
            let x = 0;
            let b = 0;
            let A = 0;
            let k = 0;
            while (true) {
              u = 0;
              p = 0;
              f = 1;
              for (; f < s - 1; f++) {
                for (v = 1; v < e - 1; v++) {
                  w = (f * e + v) * 4;
                  if (i.data[w + 3] > 0) {
                    g = [((f - 1) * e + v) * 4, ((f + 1) * e + v) * 4, (f * e + (v - 1)) * 4, (f * e + (v + 1)) * 4];
                    b = 0;
                    for (; b < 3; b++) {
                      A = 0;
                      x = 0;
                      for (; x < 4; x++) {
                        if (i.data[w + 3] > 64) {
                          A += r.data[g[x] + b];
                        } else {
                          A += n.data[g[x] + b];
                        }
                        A += d.data[w + b] - d.data[g[x] + b];
                      }
                      k = A / 4;
                      u += Math.abs(k - r.data[w + b]);
                      p += Math.abs(k);
                      r.data[w + b] = k;
                    }
                  }
                }
              }
              y++;
              var S = u / p;
              if (!S || m - S === 0 || y > 250) {
                break;
              }
              m = S;
            }
            a.putImageData(r, t.x, t.y);
          };
          this.locateBestTexture = (t, e, s) => {
            let i = this.sobel(t);
            let a = new l.A(-1, -1);
            let n = Number.POSITIVE_INFINITY;
            let r = new l.A(Math.round(e.width / 2), Math.round(e.height / 2));
            const h = Math.round(s / 2);
            let c = new o.A(0, 0, this.selected.canvas.width, this.selected.canvas.height);
            for (let l = 0; l < 40; l++) {
              const t = r.y - Math.round(Math.sin(Math.PI * 2 * l / 40) * s);
              const d = r.x + Math.round(Math.cos(Math.PI * 2 * l / 40) * s);
              if (!c.contains(new o.A(d - h + e.x, t - h + e.y, s, s))) {
                continue;
              }
              let u = this.computeEnergy(i, e.width, d - h, t - h, s);
              if (u < n) {
                n = u;
                a.x = d - h;
                a.y = t - h;
              }
            }
            return a;
          };
          this.computeEnergy = (t, e, s, i, a) => {
            let n = 0;
            for (let o = i; o < i + a; o += 2) {
              for (let i = s; i < s + a; i += 2) {
                let s = t[o * e + i];
                n += s * s;
              }
            }
            return n;
          };
          this.pixelAt = (t, e, s, i) => s[e * i + t];
          this.sobel = t => {
            var e;
            var s;
            var i;
            var a = t.width;
            var n = t.height;
            var o = [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]];
            var r = [[-1, -2, -1], [0, 0, 0], [1, 2, 1]];
            var h = new Array();
            var l = new Array();
            for (s = 0; s < n; s++) {
              for (e = 0; e < a; e++) {
                i = (s * a + e) * 4;
                l.push(Math.round((t.data[i] + t.data[i + 1] + t.data[i + 2]) / 3));
              }
            }
            for (s = 0; s < n; s++) {
              for (e = 0; e < a; e++) {
                var c = o[0][0] * this.pixelAt(e - 1, s - 1, l, a) + o[0][1] * this.pixelAt(e, s - 1, l, a) + o[0][2] * this.pixelAt(e + 1, s - 1, l, a) + o[1][0] * this.pixelAt(e - 1, s, l, a) + o[1][1] * this.pixelAt(e, s, l, a) + o[1][2] * this.pixelAt(e + 1, s, l, a) + o[2][0] * this.pixelAt(e - 1, s + 1, l, a) + o[2][1] * this.pixelAt(e, s + 1, l, a) + o[2][2] * this.pixelAt(e + 1, s + 1, l, a);
                var d = r[0][0] * this.pixelAt(e - 1, s - 1, l, a) + r[0][1] * this.pixelAt(e, s - 1, l, a) + r[0][2] * this.pixelAt(e + 1, s - 1, l, a) + r[1][0] * this.pixelAt(e - 1, s, l, a) + r[1][1] * this.pixelAt(e, s, l, a) + r[1][2] * this.pixelAt(e + 1, s, l, a) + r[2][0] * this.pixelAt(e - 1, s + 1, l, a) + r[2][1] * this.pixelAt(e, s + 1, l, a) + r[2][2] * this.pixelAt(e + 1, s + 1, l, a);
                var u = Math.sqrt(c * c + d * d) >>> 0;
                h.push(u);
              }
            }
            return h;
          };
          this.createGradient = (t, e) => {
            var s;
            var i;
            var a = Math.round(e.height * 0.4);
            let n = Math.round(a * 0.1);
            let o = ~~(e.width / 2);
            let r = ~~(e.height / 2);
            let h = e.width;
            let l = 0;
            let c = 0;
            for (var d = -a; d < a; d++) {
              for (var u = -a; u < a; u++) {
                if ((i = (Math.sqrt(d * d + u * u) + 1) / (a - 1)) < 1) {
                  s = Math.round(u / i + (Math.random() * n - n / 2));
                  l = ((r + d) * h + (o + u)) * 4;
                  c = ((r + Math.round(d / i + (Math.random() * n - n / 2))) * h + (o + s)) * 4;
                  t.data[l] = e.data[c];
                  t.data[l + 1] = e.data[c + 1];
                  t.data[l + 2] = e.data[c + 2];
                }
              }
            }
            n = Math.round(a * 0.5);
            for (d = -(a = Math.round(a * 0.8)); d < a; d++) {
              for (u = -a; u < a; u++) {
                if (Math.sqrt(d * d + u * u) < a) {
                  s = Math.round(u + (Math.random() * n - n / 2));
                  l = ((r + d) * h + (o + u)) * 4;
                  c = ((r + Math.round(d + (Math.random() * n - n / 2))) * h + (o + s)) * 4;
                  t.data[l] = t.data[c];
                  t.data[l + 1] = t.data[c + 1];
                  t.data[l + 2] = t.data[c + 2];
                }
              }
            }
            return t;
          };
          this.cleanUp = () => {
            var t;
            this.cleanUpWorker();
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.removeDownListeners();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("fresco-select", this.changeMode, false);
            document.removeEventListener("keydown", this.keyDown, false);
            this.size.cleanUp();
            this.progress.cleanUp();
            document.getElementsByName("heal-mode").forEach(t => {
              t.removeEventListener("click", this.changeMode, false);
            });
            this.selected = null;
            this.scratch = null;
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          document.addEventListener("fresco-select", this.changeMode, false);
          document.addEventListener("keydown", this.keyDown, false);
          this.brush = new d.A(new u.A("circle", 50, 0));
          this.progress = new p(this.stage);
          this.size = new h.A("heal-brush-size", {
            compact: true,
            label: (0, a.A)("size") + ":",
            step: 2,
            range: [5, 200],
            defaultValue: this.brush.settings.size,
            labelFormat: t => t.toFixed(0),
            onEnd: t => {
              this.brush.settings.size = t;
              this.updateBrush();
            }
          });
          document.getElementsByName("heal-mode").forEach(t => {
            t.addEventListener("click", this.changeMode, false);
          });
          this.addDownListeners();
          this.changeMode();
          this.layerSelect();
        }
      }
    }
