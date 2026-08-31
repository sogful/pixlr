window.__editorModules[9468] = function (t, e, s) {
      s.d(e, {
        A: () => o,
        X: () => n
      });
      var i = s(6050);
      var a = s(466);
      class n {
        constructor(t) {
          this.preset = t;
        }
        static createCurveSet(t) {
          const e = new Array();
          const s = new Array();
          const a = new Array();
          const n = new Array();
          for (let o = 0; o < t.preset[0].length; o += 2) {
            e.push(new i.A(t.preset[0][o], t.preset[0][o + 1]));
          }
          for (let o = 0; o < t.preset[1].length; o += 2) {
            s.push(new i.A(t.preset[1][o], t.preset[1][o + 1]));
          }
          for (let o = 0; o < t.preset[2].length; o += 2) {
            a.push(new i.A(t.preset[2][o], t.preset[2][o + 1]));
          }
          for (let o = 0; o < t.preset[3].length; o += 2) {
            n.push(new i.A(t.preset[3][o], t.preset[3][o + 1]));
          }
          return new o(1, e, s, a, n);
        }
      }
      class o {
        constructor(t = 255, e = [], s = [], i = [], a = []) {
          this.scale = t;
          this.rgb = e;
          this.red = s;
          this.green = i;
          this.blue = a;
          this.percent = 1;
        }
        static getInterpolation(t, e) {
          let s = [];
          let i = [];
          let n = new Float32Array(256);
          for (var o = 0; o < e.length; o++) {
            s.push(e[o].x * t);
            i.push(e[o].y * t);
          }
          let r = new a.A(s, i);
          for (var h = 0; h < Math.ceil(s[0]); h++) {
            n[h] = i[0];
          }
          for (h = Math.ceil(s[0]); h < Math.ceil(s[s.length - 1]); h++) {
            n[h] = r.interpolate(h);
          }
          for (h = Math.ceil(s[s.length - 1]); h < 256; h++) {
            n[h] = i[i.length - 1];
          }
          return n;
        }
        static fillPaletteMap(t, e) {
          let s = o.getInterpolation(t.scale, t.rgb);
          let i = o.getInterpolation(t.scale, t.red);
          let a = o.getInterpolation(t.scale, t.green);
          let n = o.getInterpolation(t.scale, t.blue);
          for (let o = 0; o < 256; ++o) {
            let r = o - s[o];
            e.data[o * 4] = o - Math.round((o - (i[o] - r)) * t.percent);
            e.data[o * 4 + 1] = o - Math.round((o - (a[o] - r)) * t.percent);
            e.data[o * 4 + 2] = o - Math.round((o - (n[o] - r)) * t.percent);
          }
        }
      }
    }
