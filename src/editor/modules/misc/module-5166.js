window.__editorModules[5166] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor(t = 0, e = 255, s = 0, i = 255, a = 1, n = 0.5) {
          this.minin = t;
          this.maxin = e;
          this.minout = s;
          this.maxout = i;
          this.midin = a;
          this.mid = n;
          this.map = t => {
            t = (t - this.minin) / (this.maxin - this.minin);
            t = Math.pow(t, this.midin);
            if ((t = this.minout + t * (this.maxout - this.minout)) > this.maxout) {
              t = this.maxout;
            } else if (t < this.minout) {
              t = this.minout;
            }
            return Math.round(t);
          };
        }
        reset() {
          this.minout = 0;
          this.maxout = 255;
          this.midin = 1;
          this.minin = 0;
          this.maxin = 255;
          this.mid = 0.5;
        }
        isFlat() {
          return Boolean(this.minout == 0 && this.maxout == 255 && this.mid == 0.5 && this.minin == 0 && this.maxin == 255);
        }
        setMid(t) {
          this.mid = (t - this.minin) / (this.maxin - this.minin);
          this.midin = this.midToIn(this.mid);
        }
        midToIn(t) {
          return Math.min(Math.max(Math.pow(9.99, t * 2 - 1), 0.1), 9.99);
        }
        static fillPaletteMap(t, e) {
          for (let s = 0; s < 256; ++s) {
            let i = t.map(s);
            e.data[s * 4] = i;
            e.data[s * 4 + 1] = i;
            e.data[s * 4 + 2] = i;
          }
        }
        static fillRGBPaletteMap(t, e, s, i) {
          for (let a = 0; a < 256; ++a) {
            i.data[a * 4] = t ? t.map(a) : a;
            i.data[a * 4 + 1] = e ? e.map(a) : a;
            i.data[a * 4 + 2] = s ? s.map(a) : a;
          }
        }
      }
    }
