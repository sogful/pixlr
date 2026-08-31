window.__editorModules[5259] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5699);
      class a {
        constructor(t, e, s) {
          this.h = t;
          this.s = e;
          this.b = s;
        }
        toColor() {
          let t;
          let e;
          let s;
          let i;
          let a;
          let o;
          let r;
          let h;
          if (this.b == 0) {
            t = 0;
            e = 0;
            s = 0;
          } else if (this.s == 0) {
            t = e = s = this.b;
          } else {
            i = this.h / 60;
            a = i - Math.floor(i);
            o = this.b * (1 - this.s);
            h = this.b * (1 - this.s * a);
            r = this.b * (1 - this.s * (1 - a));
            switch (Math.floor(i)) {
              case 0:
              case 6:
                t = this.b;
                e = r;
                s = o;
                break;
              case 1:
                t = h;
                e = this.b;
                s = o;
                break;
              case 2:
                t = o;
                e = this.b;
                s = r;
                break;
              case 3:
                t = o;
                e = h;
                s = this.b;
                break;
              case 4:
                t = r;
                e = o;
                s = this.b;
                break;
              case 5:
                t = this.b;
                e = o;
                s = h;
            }
          }
          return new n(Math.round(t * 255), Math.round(e * 255), Math.round(s * 255));
        }
        toHEX() {
          const t = this.toColor();
          const e = t => {
            const e = t.toString(16);
            if (e.length === 1) {
              return "0" + e;
            } else {
              return e;
            }
          };
          return `#${e(t.r)}${e(t.g)}${e(t.b)}`;
        }
      }
      class n {
        constructor(t = 255, e = 255, s = 255, n = 255) {
          this.isEqual = t => !!t && this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
          this.toHEX = () => {
            const t = t => {
              const e = t.toString(16);
              if (e.length === 1) {
                return "0" + e;
              } else {
                return e;
              }
            };
            return `#${t(this.r)}${t(this.g)}${t(this.b)}`;
          };
          this.toHEXA = () => {
            const t = t => {
              const e = t.toString(16);
              if (e.length === 1) {
                return "0" + e;
              } else {
                return e;
              }
            };
            return `#${t(this.r)}${t(this.g)}${t(this.b)}${t(this.a)}`;
          };
          this.toRGBA = (t = this.a) => `rgba(${this.r},${this.g},${this.b},${t / 255})`;
          this.toHSB = () => {
            let t;
            let e;
            let s;
            let i = Math.min(this.r, this.g, this.b);
            let n = Math.max(this.r, this.g, this.b);
            s = n / 255;
            let o = n - i;
            if (o) {
              e = o / n;
              t = this.r == n ? (this.g - this.b) / o * 60 : this.g == n ? (2 + (this.b - this.r) / o) * 60 : (4 + (this.r - this.g) / o) * 60;
              if (t > 360) {
                t -= 360;
              } else if (t < 0) {
                t += 360;
              }
            } else {
              t = e = 0;
            }
            return new a(t, e, s);
          };
          this.r = i.qE(t, 0, 255);
          this.g = i.qE(e, 0, 255);
          this.b = i.qE(s, 0, 255);
          this.a = i.qE(n, 0, 255);
        }
        rotateHue(t) {
          let e;
          let s;
          let i;
          let a = Math.min(this.r, this.g, this.b);
          let o = Math.max(this.r, this.g, this.b);
          e = o / 255;
          var r = o - a;
          if (r) {
            s = r / o;
            i = this.r == o ? (this.g - this.b) / r * 60 : this.g == o ? (2 + (this.b - this.r) / r) * 60 : (4 + (this.r - this.g) / r) * 60;
          } else {
            i = s = 0;
          }
          i += t;
          if (i > 360) {
            i -= 360;
          } else if (i < 0) {
            i += 360;
          }
          if (i === 360) {
            i = 0;
          }
          return n.fromHSB(i, s, e);
        }
        static fromRGB(t) {
          if (/^#[0-9A-F]{6}$/i.test(t)) {
            return n.fromHEX(t);
          }
          let e = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
          if (!e || e.length < 4) {
            return new n();
          } else {
            return new n(Number(e[1]), Number(e[2]), Number(e[3]));
          }
        }
        static fromHEXA(t) {
          let e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          if (!e || e.length < 4) {
            return new n();
          } else {
            return new n(parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16), parseInt(e[4], 16));
          }
        }
        static fromHEX(t, e = 255) {
          let s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          if (!s || s.length < 3) {
            return new n();
          } else {
            return new n(parseInt(s[1], 16), parseInt(s[2], 16), parseInt(s[3], 16), e);
          }
        }
        static fromHSB(t, e, s) {
          let i;
          let a;
          let o;
          let r;
          let h;
          let l;
          let c;
          let d;
          if (s == 0) {
            i = 0;
            a = 0;
            o = 0;
          } else if (e == 0) {
            i = a = o = s;
          } else {
            r = t / 60;
            h = r - Math.floor(r);
            l = s * (1 - e);
            d = s * (1 - e * h);
            c = s * (1 - e * (1 - h));
            switch (Math.floor(r)) {
              case 0:
              case 6:
                i = s;
                a = c;
                o = l;
                break;
              case 1:
                i = d;
                a = s;
                o = l;
                break;
              case 2:
                i = l;
                a = s;
                o = c;
                break;
              case 3:
                i = l;
                a = d;
                o = s;
                break;
              case 4:
                i = c;
                a = l;
                o = s;
                break;
              case 5:
                i = s;
                a = l;
                o = d;
            }
          }
          return new n(Math.round(i * 255), Math.round(a * 255), Math.round(o * 255));
        }
        clone() {
          return new n(this.r, this.g, this.b, this.a);
        }
      }
    }
