window.__editorModules[2037] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(5699);
      var n = s(5259);
      var o = s(6050);
      var r = s(3328);
      class h {
        constructor(t) {
          this.getSettingsString = () => JSON.stringify(this.settings);
          this.setSettingsString = t => {
            this.settings = a.bD(r.A, JSON.parse(t));
            this.generate();
          };
          this.getStep = () => Math.round(this.settings.distance * this.settings.size);
          this.getCursorImage = (t, e = new n.A(255, 255, 255, 255)) => {
            if (!(this.canvas.width * t > 512) && !(this.canvas.height * t > 512)) {
              return this.generatetOutline(t, e);
            }
          };
          this.generateBasic = (t, e) => {
            let s = this.settings.softness;
            if (this.settings.size < 3) {
              if (this.settings.size === 1 || s < 0.25) {
                this.canvas.width = this.settings.size;
                this.canvas.height = this.settings.size;
                this.context.fillStyle = t.toRGBA();
                this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
                return;
              }
              s -= 0.25;
            }
            const i = this.settings.size;
            const a = (i % 2 ? i : i + 1) / 2;
            let n;
            let r;
            let h;
            let l;
            let c;
            let d;
            let u;
            let p;
            let g;
            let m = 0;
            let y = 0;
            let v = new o.A(0, 0);
            let f = new o.A(0, 0);
            d = Math.sin(this.settings.angle * Math.PI / 180);
            c = Math.cos(this.settings.angle * Math.PI / 180);
            g = a * this.settings.aspect;
            v.x = c * a;
            v.y = d * a * -1;
            f.x = d * g;
            f.y = c * g;
            switch (this.settings.type) {
              case "circle":
                m = Math.ceil(Math.sqrt(v.x * v.x + f.x * f.x));
                y = Math.ceil(Math.sqrt(v.y * v.y + f.y * f.y));
                break;
              case "square":
                m = Math.ceil(Math.abs(v.x) + Math.abs(f.x));
                y = Math.ceil(Math.abs(v.y) + Math.abs(f.y));
                break;
              case "diamond":
                m = Math.ceil(Math.max(Math.abs(v.x), Math.abs(f.x)));
                y = Math.ceil(Math.max(Math.abs(v.y), Math.abs(f.y)));
            }
            if (this.settings.spikes > 2) {
              m = y = Math.ceil(Math.sqrt(a * a + g * g));
              f.x = d * a;
              f.y = c * a;
            }
            this.canvas.width = m * 2 + 1;
            this.canvas.height = y * 2 + 1;
            const w = this.lookupTable(a, s);
            u = Math.cos(Math.PI * -2 / this.settings.spikes);
            p = Math.sin(Math.PI * -2 / this.settings.spikes);
            const x = this.context.canvas.width;
            const b = this.context.getImageData(0, 0, x, this.context.canvas.height);
            for (h = -y; h <= y; ++h) {
              for (r = -m; r <= m; ++r) {
                let s = 0;
                let i = c * r - d * h;
                let o = Math.abs(d * r + c * h);
                if (this.settings.spikes > 2) {
                  let t;
                  let e;
                  let s = Math.atan2(o, i);
                  while (s > Math.PI / this.settings.spikes) {
                    e = i;
                    t = o;
                    i = u * e - p * t;
                    o = p * e + u * t;
                    s -= Math.PI * 2 / this.settings.spikes;
                  }
                }
                o /= this.settings.aspect;
                switch (this.settings.type) {
                  case "circle":
                    s = Math.sqrt(i * i + o * o);
                    break;
                  case "square":
                    s = Math.max(Math.abs(i), Math.abs(o));
                    break;
                  case "diamond":
                    s = Math.abs(i) + Math.abs(o);
                }
                n = s < a + 1 ? w[Math.floor(s * 4)] : 0;
                if (e) {
                  n = n < 64 ? 0 : 255;
                }
                l = ((h + y) * x + (r + m)) * 4;
                b.data[l] = t.r;
                b.data[l + 1] = t.g;
                b.data[l + 2] = t.b;
                b.data[l + 3] = n;
              }
            }
            this.context.putImageData(b, 0, 0);
          };
          this.generateCustom = (t, e) => {};
          this.canvas = (0, i.T)("canvas");
          this.settings = t;
          this.context = this.canvas.getContext("2d", {
            willReadFrequently: true
          });
          this.generate();
        }
        generate(t = new n.A(), e = false) {
          if (this.settings.type === "custom") {
            this.generateCustom(t, e);
          } else {
            this.generateBasic(t, e);
          }
        }
        generatetOutline(t = 1, e = new n.A(255, 255, 255, 255)) {
          const s = Math.round(this.canvas.width * t) || 1;
          const i = Math.round(this.canvas.height * t) || 1;
          let o = a.VI(s + 2, i + 2);
          const r = o.getContext("2d");
          r.fillStyle = e.toRGBA();
          r.shadowColor = new n.A(0, 0, 0).toRGBA();
          r.shadowBlur = 1;
          if (s > 20 && i > 20) {
            r.fillRect(~~(s / 2) - 3, ~~(i / 2), 8, 2);
            r.fillRect(~~(s / 2), ~~(i / 2) - 3, 2, 8);
          }
          let h;
          let l;
          let c;
          let d;
          let u;
          let p = t != 1 ? a.H5(this.canvas, s, i, false).getContext("2d").getImageData(0, 0, s, i) : this.context.getImageData(0, 0, s, i);
          for (let a = 0; a < i; ++a) {
            l = true;
            c = Boolean(p.data[a * s * 4 + 3] < 64);
            for (let t = 0; t < s; ++t) {
              h = l;
              l = c;
              c = t + 1 === s || p.data[(a * s + t + 1) * 4 + 3] < 64;
              if (!l) {
                d = a - 1 < 0 || p.data[((a - 1) * s + t) * 4 + 3] < 64;
                u = a + 1 === i || p.data[((a + 1) * s + t) * 4 + 3] < 64;
                if (h || d || c || u) {
                  r.fillRect(t + 1, a + 1, 1, 1);
                }
              }
            }
          }
          if (s <= 20 && i <= 20) {
            const t = a.VI(33, 33);
            const s = t.getContext("2d");
            s.drawImage(o, Math.floor((33 - o.width) / 2), Math.floor((33 - o.height) / 2));
            s.fillStyle = e.toRGBA();
            s.shadowColor = new n.A(0, 0, 0).toRGBA();
            s.shadowBlur = 1;
            s.fillRect(2, 15, 4, 2);
            s.fillRect(26, 15, 4, 2);
            s.fillRect(15, 2, 2, 4);
            s.fillRect(15, 26, 2, 4);
            o = t;
          }
          return o;
        }
        lookupTable(t, e) {
          const s = new Array();
          let i;
          let a;
          let n = 0;
          const o = new Array(4);
          const r = Math.round(t + 1);
          const h = Math.ceil(1 + Math.sqrt(r * r * 2)) * 4;
          let l;
          a = e < 4e-7 ? 1000000 : 0.4 / e;
          l = 0;
          for (; l < 4; l++) {
            i = Math.abs((l + 0.5) / 4 - 0.5);
            o[l] = i > t ? 0 : this.gaussian(Math.pow(i / t, a));
            n += o[l];
          }
          for (l = 0; i < t || n > 0.00001; i += 1 / 4) {
            n -= o[l % 4];
            o[l % 4] = i > t ? 0 : this.gaussian(Math.pow(i / t, a));
            n += o[l % 4];
            let e = Math.floor(n * 63.75);
            s[l++] = Math.max(0, e);
          }
          while (l < h) {
            s[l++] = 0;
          }
          return s;
        }
        gaussian(t) {
          if (t < -0.5) {
            return (t = -1 - t) * 2 * t;
          } else if (t < 0.5) {
            return 1 - t * 2 * t;
          } else {
            return (t = 1 - t) * 2 * t;
          }
        }
      }
    }
