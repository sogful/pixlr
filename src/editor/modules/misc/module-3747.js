window.__editorModules[3747] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5699);
      var a = s(3244);
      var n = s(6957);
      var o = s(6050);
      var r = s(7572);
      class h {
        constructor(t, e) {
          this.setMask = t => {
            this.mask = t;
            this.ctx = this.mask.getContext("2d", {
              willReadFrequently: true
            });
            this.createOutline();
          };
          this.isSelected = t => {
            var e;
            return !!((e = this.bounds) === null || e === undefined ? undefined : e.isInside(t)) && this.ctx.getImageData(t.x, t.y, 1, 1).data[3] >= 64;
          };
          this.applyOffset = () => {
            let t = i.oM(this.mask);
            this.ctx.clearRect(0, 0, this.mask.width, this.mask.height);
            this.ctx.drawImage(t, this.offset.x, this.offset.y);
            this.offset.x = this.offset.y = 0;
            this.createOutline();
          };
          this.editRectangle = (t, e, s) => {
            let a = i.Nw(this.mask.width, this.mask.height);
            let n = a.getContext("2d");
            r.A.fill(n, "rectangle", t.topLeft(), t.bottomRight());
            n = undefined;
            this.drawOnMask(a, e, false, s);
          };
          this.editEllipse = (t, e, s, a) => {
            let n = i.Nw(this.mask.width, this.mask.height);
            let o = n.getContext("2d");
            r.A.fill(o, "ellipse", t.topLeft(), t.bottomRight());
            o = undefined;
            this.drawOnMask(n, e, s, a);
          };
          this.editBezier = (t, e, s, a) => {
            let n = i.Nw(this.mask.width, this.mask.height);
            let o = n.getContext("2d");
            o.beginPath();
            o.moveTo(t[0].x, t[0].y);
            for (let i = 1; i < t.length; i += 2) {
              if (i + 1 === t.length) {
                o.lineTo(t[i].x, t[i].y);
              } else {
                o.quadraticCurveTo(t[i + 1].x, t[i + 1].y, t[i].x, t[i].y);
              }
            }
            o.fill();
            o = undefined;
            this.drawOnMask(n, e, s, a);
          };
          this.editPolygon = (t, e, s, a) => {
            let n = i.Nw(this.mask.width, this.mask.height);
            let o = n.getContext("2d");
            o.beginPath();
            o.moveTo(t[0].x, t[0].y);
            t.forEach(t => o.lineTo(t.x, t.y));
            o.fill();
            o = undefined;
            this.drawOnMask(n, e, s, a);
          };
          this.drawOnMask = (t, e = 0, s = false, i = false, a = new o.A(0, 0)) => {
            if (e > 0) {
              let s = new n.A();
              s.addShader("blur", e);
              t = s.apply(t);
            } else if (s) {
              let e = new n.A();
              e.addShader("dealiasing", true);
              t = e.apply(t);
            }
            this.ctx.save();
            if (i) {
              this.ctx.globalCompositeOperation = "destination-out";
            }
            this.ctx.drawImage(t, a.x, a.y);
            this.ctx.restore();
            this.createOutline();
          };
          this.selectAll = () => {
            this.ctx.fillRect(0, 0, this.mask.width, this.mask.height);
            this.createOutline();
          };
          this.invert = () => {
            const t = new n.A([]);
            t.addShader("alpha-invert", 1);
            this.mask = i.oM(t.apply(this.mask));
            this.ctx = this.mask.getContext("2d", {
              willReadFrequently: true
            });
            this.createOutline();
          };
          this.size = (t, e) => {
            const s = i.Nw(t, e);
            this.ctx = s.getContext("2d", {
              willReadFrequently: true
            });
            const a = Math.round((s.width - this.mask.width) * 0.5);
            const n = Math.round((s.height - this.mask.height) * 0.5);
            this.ctx.drawImage(this.mask, a, n);
            this.mask = s;
            this.createOutline();
          };
          this.resize = (t, e) => {
            this.mask = i.H5(this.mask, t, e);
            this.ctx = this.mask.getContext("2d", {
              willReadFrequently: true
            });
            this.createOutline();
          };
          this.createOutline = () => {
            let t = this.ctx.getImageData(0, 0, this.mask.width, this.mask.height);
            this.bounds = i.zR(t);
            if (!this.bounds) {
              return;
            }
            let e = this.bounds.top();
            let s = this.bounds.left();
            let a = this.bounds.right();
            let n = this.bounds.bottom();
            let o = this.mask.width;
            let r = this.mask.height;
            this.outline = new Array();
            let h;
            let l;
            let c;
            let d;
            let u;
            let p = -1;
            for (let i = e; i < n; ++i) {
              l = s === 0 || t.data[(i * o + s - 1) * 4 + 3] < 64;
              c = t.data[(i * o + s) * 4 + 3] < 64;
              for (let e = s; e < a; ++e) {
                h = l;
                l = c;
                c = e + 1 === o || t.data[(i * o + e + 1) * 4 + 3] < 64;
                if (!l) {
                  p = -1;
                  d = i - 1 < 0 || t.data[((i - 1) * o + e) * 4 + 3] < 64;
                  u = i + 1 === r || t.data[((i + 1) * o + e) * 4 + 3] < 64;
                  if (h && d && c && u) {
                    p = 8;
                  } else if (h && d && u) {
                    p = 9;
                  } else if (c && d && u) {
                    p = 10;
                  } else if (c && d && h) {
                    p = 11;
                  } else if (c && u && h) {
                    p = 12;
                  } else if (h && c) {
                    p = 13;
                  } else if (u && d) {
                    p = 14;
                  } else if (h && d) {
                    p = 0;
                  } else if (d && c) {
                    p = 2;
                  } else if (h && u) {
                    p = 5;
                  } else if (u && c) {
                    p = 7;
                  } else if (d) {
                    p = 1;
                  } else if (h) {
                    p = 3;
                  } else if (c) {
                    p = 4;
                  } else if (u) {
                    p = 6;
                  }
                  if (p !== -1) {
                    this.outline.push(e, i, p);
                  }
                }
              }
            }
          };
          this.clear = () => {
            this.ctx.clearRect(0, 0, this.mask.width, this.mask.height);
            this.outline = new Array();
          };
          this.reset = () => {
            this.ctx.clearRect(0, 0, this.mask.width, this.mask.height);
            this.outline = new Array();
            this.offset = new o.A();
            this.bounds = new a.A();
          };
          this.cleanUp = () => {
            this.outline = undefined;
            this.offset = undefined;
            this.bounds = undefined;
            this.mask = undefined;
            this.ctx = undefined;
          };
          this.mask = i.Nw(t, e);
          this.offset = new o.A();
          this.bounds = new a.A();
          this.ctx = this.mask.getContext("2d", {
            willReadFrequently: true
          });
        }
      }
    }
