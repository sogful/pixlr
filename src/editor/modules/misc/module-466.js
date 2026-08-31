window.__editorModules[466] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor(t, e) {
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
          if (t != null && e != null) {
            l = t.length - 1;
            n = [];
            u = [];
            h = [];
            d = [];
            p = [];
            i = [];
            s = [];
            a = [];
            r = [];
            c = [];
            o = 0;
            for (; l >= 0 ? o < l : o > l; l >= 0 ? o += 1 : o -= 1) {
              n[o] = t[o + 1] - t[o];
              r[o] = e[o + 1] - e[o];
              c[o] = r[o] / n[o];
            }
            for (o = 1; l >= 1 ? o < l : o > l; l >= 1 ? o += 1 : o -= 1) {
              u[o] = 3 / n[o] * (e[o + 1] - e[o]) - 3 / n[o - 1] * (e[o] - e[o - 1]);
            }
            h[0] = 1;
            d[0] = 0;
            p[0] = 0;
            o = 1;
            for (; l >= 1 ? o < l : o > l; l >= 1 ? o += 1 : o -= 1) {
              h[o] = (t[o + 1] - t[o - 1]) * 2 - n[o - 1] * d[o - 1];
              d[o] = n[o] / h[o];
              p[o] = (u[o] - n[o - 1] * p[o - 1]) / h[o];
            }
            h[l] = 1;
            p[l] = 0;
            i[l] = 0;
            o = g = l - 1;
            for (; g <= 0 ? o <= 0 : o >= 0; g <= 0 ? o += 1 : o -= 1) {
              i[o] = p[o] - d[o] * i[o + 1];
              s[o] = (e[o + 1] - e[o]) / n[o] - n[o] * (i[o + 1] + i[o] * 2) / 3;
              a[o] = (i[o + 1] - i[o]) / (n[o] * 3);
            }
            this.x = t.slice(0, l + 1);
            this.a = e.slice(0, l);
            this.b = s;
            this.c = i.slice(0, l);
            this.d = a;
          }
        }
        interpolate(t) {
          var e;
          var s;
          var i;
          for (s = i = this.x.length - 1; (i <= 0 ? s <= 0 : s >= 0) && !(this.x[s] <= t); i <= 0 ? s += 1 : s -= 1);
          e = t - this.x[s];
          return this.a[s] + this.b[s] * e + this.c[s] * Math.pow(e, 2) + this.d[s] * Math.pow(e, 3);
        }
      }
    }
