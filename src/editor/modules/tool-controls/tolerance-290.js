window.__editorModules[290] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(5527);
      var r = s(3517);
      var h = s(98);
      var l = s(2037);
      var c = s(3566);
      var d = s(5259);
      var u = s(3328);
      class p extends o.A {
        constructor(t) {
          super("replace", t);
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
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("replace-no-layer").style.display = "flex";
              (0, i.Ay)("replace-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("replace-no-layer").style.display = "none";
            (0, i.Ay)("replace-settings").style.display = "flex";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            this.cache = n.oM(this.selected.canvas);
            this.cachectx = this.cache.getContext("2d");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
            this.updateBrush();
          };
          this.updateBrush = () => {
            this.brush.generate(new d.A(), (0, i.Ay)("replace-hard-tip").checked);
            if (this.selected) {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom, new d.A(255, 255, 255, 255)));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.down = (t, e) => {
            if (!this.selected) {
              return;
            }
            this.stage.coating.freeze(true);
            this.mode = (0, i.Ay)("replace-mode").value;
            this.scratch.settings.opacity = this.opacity.getValue();
            const s = this.tolerance.getValue();
            this.sRGB = this.getSourcePixelAverage(this.stage.translateRasterToFresco(t, this.selected.rect));
            this.sHSB = this.sRGB.toHSB();
            this.shmax = this.sHSB.h + s;
            this.shmin = this.sHSB.h - s;
            if (this.shmax > 360) {
              this.shmax -= 360;
            }
            if (this.shmin < 0) {
              this.shmin += 360;
            }
            this.tRGB = d.A.fromHEX(h.Ay.mainColor);
            this.tHSB = this.tRGB.toHSB();
            if (!this.isShiftDown) {
              this.x = this.y = -1;
            }
            if (e !== "touch") {
              this.move(t);
            }
            this.addMoveListeners();
          };
          this.getSourcePixelAverage = t => {
            let e = 0;
            let s = 0;
            let i = 0;
            const a = this.cache.getContext("2d").getImageData(t.x - 1, t.y - 1, 3, 3).data;
            for (let n = 0; n < 36; n += 4) {
              e += a[n];
              s += a[n + 1];
              i += a[n + 2];
            }
            return new d.A(Math.round(e / 9), Math.round(s / 9), Math.round(i / 9));
          };
          this.x = -1;
          this.y = -1;
          this.move = t => {
            let e = this.brush.getStep();
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
            const s = this.brush.canvas.width;
            const i = this.brush.canvas.height;
            let a = this.getPatchContext(s, i);
            a.save();
            a.drawImage(this.selected.canvas, -t, -e);
            const n = a.getImageData(0, 0, s, i);
            const o = this.cachectx.getImageData(t, e, s, i);
            switch (this.mode) {
              case "auto":
                this.changeAuto(n.data, o.data, s, i);
                break;
              case "hue":
                this.changeHue(n.data, s, i);
                break;
              case "sat":
                this.changeSat(n.data, s, i);
                break;
              case "bri":
                this.changeBri(n.data, s, i);
                break;
              case "fill":
                this.changeFill(n.data, s, i);
            }
            a.putImageData(n, 0, 0);
            a.globalCompositeOperation = "destination-in";
            a.drawImage(this.brush.canvas, 0, 0);
            a.restore();
            this.scratch.ctx.drawImage(this.patch, t, e);
          };
          this.changeAuto = (t, e, s, i) => {
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            let d;
            let u;
            let p;
            let g;
            let m;
            let y;
            let v;
            let f;
            let w;
            let x = i;
            const b = this.tHSB.b / this.sHSB.b;
            const A = this.tHSB.s / this.sHSB.s;
            while (x--) {
              for (a = s; a--;) {
                w = (x * s + a) * 4;
                o = e[w];
                r = e[w + 1];
                h = e[w + 2];
                u = Math.min(o, r, h);
                p = Math.max(o, r, h);
                d = p / 255;
                g = p - u;
                l = c = 0;
                if (g) {
                  c = g / p;
                  l = o == p ? (r - h) / g * 60 : r == p ? (2 + (h - o) / g) * 60 : (4 + (o - r) / g) * 60;
                  if (l > 360) {
                    l -= 360;
                  } else if (l < 0) {
                    l += 360;
                  }
                }
                if (c < 0.05 || d < 0.05 || l < this.shmax && l > this.shmin || this.shmax < this.shmin && (l > this.shmin || l < this.shmax)) {
                  l = this.tHSB.h;
                  d *= b;
                  c *= A;
                  if (d < 0) {
                    d = 0;
                  } else if (d > 1) {
                    d = 1;
                  }
                  if (d === 0) {
                    o = 0;
                    r = 0;
                    h = 0;
                  } else if (c === 0) {
                    o = r = h = d;
                  } else {
                    m = l / 60;
                    n = m - ~~m;
                    v = d * (1 - c);
                    f = d * (1 - c * n);
                    y = d * (1 - c * (1 - n));
                    switch (~~m) {
                      case 0:
                      case 6:
                        o = d;
                        r = y;
                        h = v;
                        break;
                      case 1:
                        o = f;
                        r = d;
                        h = v;
                        break;
                      case 2:
                        o = v;
                        r = d;
                        h = y;
                        break;
                      case 3:
                        o = v;
                        r = f;
                        h = d;
                        break;
                      case 4:
                        o = y;
                        r = v;
                        h = d;
                        break;
                      case 5:
                        o = d;
                        r = v;
                        h = f;
                    }
                  }
                  o *= 255;
                  r *= 255;
                  h *= 255;
                  t[w] = o;
                  t[w + 1] = r;
                  t[w + 2] = h;
                }
              }
            }
          };
          this.changeHue = (t, e, s) => {
            let i;
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            let d;
            let u;
            let p;
            let g;
            let m;
            let y;
            let v;
            let f;
            let w = s;
            while (w--) {
              for (i = e; i--;) {
                f = (w * e + i) * 4;
                n = t[f];
                o = t[f + 1];
                r = t[f + 2];
                d = Math.min(n, o, r);
                u = Math.max(n, o, r);
                c = u / 255;
                p = u - d;
                h = l = 0;
                if (p) {
                  l = p / u;
                  h = n == u ? (o - r) / p * 60 : o == u ? (2 + (r - n) / p) * 60 : (4 + (n - o) / p) * 60;
                  if (h > 360) {
                    h -= 360;
                  } else if (h < 0) {
                    h += 360;
                  }
                }
                if (l > 0.2 && h < this.shmax && h > this.shmin || this.shmax < this.shmin && (h > this.shmin || h < this.shmax)) {
                  h = this.tHSB.h;
                  if (c < 0) {
                    c = 0;
                  } else if (c > 1) {
                    c = 1;
                  }
                  if (c == 0) {
                    n = 0;
                    o = 0;
                    r = 0;
                  } else if (l == 0) {
                    n = o = r = c;
                  } else {
                    g = h / 60;
                    a = g - ~~g;
                    y = c * (1 - l);
                    v = c * (1 - l * a);
                    m = c * (1 - l * (1 - a));
                    switch (~~g) {
                      case 0:
                      case 6:
                        n = c;
                        o = m;
                        r = y;
                        break;
                      case 1:
                        n = v;
                        o = c;
                        r = y;
                        break;
                      case 2:
                        n = y;
                        o = c;
                        r = m;
                        break;
                      case 3:
                        n = y;
                        o = v;
                        r = c;
                        break;
                      case 4:
                        n = m;
                        o = y;
                        r = c;
                        break;
                      case 5:
                        n = c;
                        o = y;
                        r = v;
                    }
                  }
                  n *= 255;
                  o *= 255;
                  r *= 255;
                  t[f] = n;
                  t[f + 1] = o;
                  t[f + 2] = r;
                }
              }
            }
          };
          this.changeSat = (t, e, s) => {
            let i;
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            let d;
            let u;
            let p;
            let g;
            let m;
            let y;
            let v;
            let f;
            let w = s;
            const x = this.tHSB.s / this.sHSB.s;
            while (w--) {
              for (i = e; i--;) {
                f = (w * e + i) * 4;
                n = t[f];
                o = t[f + 1];
                r = t[f + 2];
                d = Math.min(n, o, r);
                u = Math.max(n, o, r);
                c = u / 255;
                p = u - d;
                h = l = 0;
                if (p) {
                  l = p / u;
                  h = n == u ? (o - r) / p * 60 : o == u ? (2 + (r - n) / p) * 60 : (4 + (n - o) / p) * 60;
                  if (h > 360) {
                    h -= 360;
                  } else if (h < 0) {
                    h += 360;
                  }
                }
                if (h < this.shmax && h > this.shmin || this.shmax < this.shmin && (h > this.shmin || h < this.shmax)) {
                  l *= x;
                  if (c < 0) {
                    c = 0;
                  } else if (c > 1) {
                    c = 1;
                  }
                  if (c == 0) {
                    n = 0;
                    o = 0;
                    r = 0;
                  } else if (l == 0) {
                    n = o = r = c;
                  } else {
                    g = h / 60;
                    a = g - ~~g;
                    y = c * (1 - l);
                    v = c * (1 - l * a);
                    m = c * (1 - l * (1 - a));
                    switch (~~g) {
                      case 0:
                      case 6:
                        n = c;
                        o = m;
                        r = y;
                        break;
                      case 1:
                        n = v;
                        o = c;
                        r = y;
                        break;
                      case 2:
                        n = y;
                        o = c;
                        r = m;
                        break;
                      case 3:
                        n = y;
                        o = v;
                        r = c;
                        break;
                      case 4:
                        n = m;
                        o = y;
                        r = c;
                        break;
                      case 5:
                        n = c;
                        o = y;
                        r = v;
                    }
                  }
                  n *= 255;
                  o *= 255;
                  r *= 255;
                  t[f] = n;
                  t[f + 1] = o;
                  t[f + 2] = r;
                }
              }
            }
          };
          this.changeBri = (t, e, s) => {
            let i;
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            let d;
            let u;
            let p;
            let g;
            let m;
            let y;
            let v;
            let f = s;
            const w = this.tHSB.b / this.sHSB.b;
            while (f--) {
              for (i = e; i--;) {
                v = (f * e + i) * 4;
                n = t[v];
                o = t[v + 1];
                r = t[v + 2];
                d = Math.min(n, o, r);
                u = Math.max(n, o, r);
                c = u / 255;
                var x = u - d;
                h = l = 0;
                if (x) {
                  l = x / u;
                  h = n == u ? (o - r) / x * 60 : o == u ? (2 + (r - n) / x) * 60 : (4 + (n - o) / x) * 60;
                  if (h > 360) {
                    h -= 360;
                  } else if (h < 0) {
                    h += 360;
                  }
                }
                if (h < this.shmax && h > this.shmin || this.shmax < this.shmin && (h > this.shmin || h < this.shmax)) {
                  c *= w;
                  if (c < 0) {
                    c = 0;
                  } else if (c > 1) {
                    c = 1;
                  }
                  if (c == 0) {
                    n = 0;
                    o = 0;
                    r = 0;
                  } else if (l == 0) {
                    n = o = r = c;
                  } else {
                    p = h / 60;
                    a = p - ~~p;
                    m = c * (1 - l);
                    y = c * (1 - l * a);
                    g = c * (1 - l * (1 - a));
                    switch (~~p) {
                      case 0:
                      case 6:
                        n = c;
                        o = g;
                        r = m;
                        break;
                      case 1:
                        n = y;
                        o = c;
                        r = m;
                        break;
                      case 2:
                        n = m;
                        o = c;
                        r = g;
                        break;
                      case 3:
                        n = m;
                        o = y;
                        r = c;
                        break;
                      case 4:
                        n = g;
                        o = m;
                        r = c;
                        break;
                      case 5:
                        n = c;
                        o = m;
                        r = y;
                    }
                  }
                  n *= 255;
                  o *= 255;
                  r *= 255;
                  t[v] = n;
                  t[v + 1] = o;
                  t[v + 2] = r;
                }
              }
            }
          };
          this.changeFill = (t, e, s) => {
            let i;
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            let c;
            let d;
            let u;
            let p = s;
            while (p--) {
              for (i = e; i--;) {
                u = (p * e + i) * 4;
                a = t[u];
                n = t[u + 1];
                o = t[u + 2];
                c = Math.min(a, n, o);
                d = Math.max(a, n, o);
                l = d / 255;
                var g = d - c;
                r = h = 0;
                if (g) {
                  h = g / d;
                  r = a == d ? (n - o) / g * 60 : n == d ? (2 + (o - a) / g) * 60 : (4 + (a - n) / g) * 60;
                  if (r > 360) {
                    r -= 360;
                  } else if (r < 0) {
                    r += 360;
                  }
                }
                if (h > 0.2 && l > 0.1 && r < this.shmax && r > this.shmin || this.shmax < this.shmin && (r > this.shmin || r < this.shmax)) {
                  t[u] = this.tRGB.r;
                  t[u + 1] = this.tRGB.g;
                  t[u + 2] = this.tRGB.b;
                }
              }
            }
          };
          this.getPatchContext = (t, e) => this.patch ? (this.patch.width !== t || this.patch.height !== e ? (this.patch.width = t, this.patch.height = e) : this.ptx.clearRect(0, 0, t, e), this.ptx) : (this.patch = n.VI(t, e), this.ptx = this.patch.getContext("2d"), this.ptx);
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            let e = n.TL(this.scratch.getCanvas());
            if (e && e.width > 0 && e.height > 0) {
              let t = n.ON(this.selected.canvas, e);
              const s = this.selected.rect.clone();
              this.scratch.drawToLayer(this.selected, "source-over", this.opacity.getValue());
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "replace",
                layer: this.selected,
                patchRect: e,
                patch: t,
                rect: s
              });
            }
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
            (0, i.Ay)("replace-hard-tip").addEventListener("click", this.updateBrush, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("replace-hard-tip").addEventListener("click", this.updateBrush, false);
          this.brush = new l.A(new u.A());
          this.brushPod = new c.A(t, "replace-brush", this.brush, this.updateBrush);
          this.tolerance = new r.A("replace-tolerance", {
            compact: true,
            label: (0, a.A)("tolerance") + ":",
            defaultValue: 36,
            range: [0, 150],
            step: 1
          });
          this.opacity = new r.A("replace-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            range: [0, 1],
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
