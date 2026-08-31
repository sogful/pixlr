window.__editorModules[6314] = function (t) {
      t.exports = function (t) {
        var e = [];
        e.toString = function () {
          return this.map(function (e) {
            var s = t(e);
            if (e[2]) {
              return `@media ${e[2]} {${s}}`;
            } else {
              return s;
            }
          }).join("");
        };
        e.i = function (t, s, i) {
          if (typeof t == "string") {
            t = [[null, t, ""]];
          }
          var a = {};
          if (i) {
            for (var n = 0; n < this.length; n++) {
              var o = this[n][0];
              if (o != null) {
                a[o] = true;
              }
            }
          }
          for (var r = 0; r < t.length; r++) {
            var h = [].concat(t[r]);
            if (!i || !a[h[0]]) {
              if (s) {
                if (h[2]) {
                  h[2] = `${s} and ${h[2]}`;
                } else {
                  h[2] = s;
                }
              }
              e.push(h);
            }
          }
        };
        return e;
      };
    }
