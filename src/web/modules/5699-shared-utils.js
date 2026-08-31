window.__webModules[5699] = function (e, t, i) {
      i.d(t, {
        $e: () => d,
        B3: () => m,
        H5: () => g,
        Nw: () => c,
        Os: () => S,
        PG: () => p,
        SE: () => x,
        TL: () => k,
        VI: () => r,
        XP: () => L,
        bD: () => s,
        bK: () => v,
        k8: () => u,
        lz: () => l,
        oM: () => w,
        oc: () => A,
        p: () => f,
        qE: () => P,
        r0: () => N,
        tN: () => h,
        tm: () => y,
        wc: () => M,
        y2: () => b,
        yz: () => T,
        zR: () => C
      });
      var n = i(7775);
      var a = i(3244);
      var o = i(6279);
      function s(e, t) {
        if (t === undefined) {
          return;
        }
        if (t instanceof e) {
          return t;
        }
        const i = Object.create(e.prototype);
        return Object.assign(i, t);
      }
      function r(e, t) {
        if (e < 0) {
          e = 1;
        }
        if (t < 0) {
          t = 1;
        }
        let i = document.createElement("canvas");
        i.width = e;
        i.height = t;
        return i;
      }
      function c(e, t) {
        if (e < 0) {
          e = 1;
        }
        if (t < 0) {
          t = 1;
        }
        return o.mM.acquire(e, t);
      }
      async function l(e) {
        if (!e) {
          return;
        }
        const t = URL.createObjectURL(e);
        const i = await d(t);
        URL.revokeObjectURL(t);
        return i;
      }
      function d(e, t = false) {
        if (e !== undefined) {
          return new Promise((i, n) => {
            if (!e) {
              console.log("Invalid URL in dataURLToCanvas");
              i(undefined);
              return;
            }
            const a = t ? r(100, 100) : c(100, 100);
            const o = a.getContext("2d");
            const s = new Image();
            s.onerror = e => n(e);
            s.onload = () => {
              a.width = s.width;
              a.height = s.height;
              o.drawImage(s, 0, 0);
              i(a);
            };
            s.crossOrigin = "anonymous";
            s.src = e;
          });
        }
      }
      function p(e, t) {
        if (!e) {
          return;
        }
        const i = (t == null ? undefined : t.rect) || new a.A(0, 0, e.width, e.height);
        const n = c(i.width, i.height);
        n.getContext("2d").drawImage(e, -i.x, -i.y);
        return new Promise((e, i) => n.toBlob(e, t == null ? undefined : t.type, t == null ? undefined : t.quality));
      }
      function h(e, t, i) {
        if (!e || !t) {
          return;
        }
        let n = e.getContext("2d");
        n.save();
        n.globalCompositeOperation = "copy";
        n.drawImage(t, i.x, i.y);
        n.restore();
        n = undefined;
      }
      function u(e, t, i = 0, o = false) {
        const s = E();
        if (s === 0) ;else if (e.width > s || e.height > s) {
          alert((0, n.A)("imageMaxAllowedError").replace("{width}", s.toString()).replace("{height}", s.toString()));
          return null;
        }
        let l = o ? r(e.width, e.height) : c(e.width, e.height);
        let d = l.getContext("2d");
        d.drawImage(e, 0, 0, e.width, e.height);
        d = undefined;
        if (l.width > t || l.height > t) {
          let i = a.A.bestFit(e.width, e.height, t, t);
          l = y(l, i.width, i.height);
        }
        if (i !== 0) {
          l = x(l, i);
        }
        return l;
      }
      function m(e, t, i) {
        if (!e) {
          return;
        }
        let n = c(t, i);
        var a = e.getContext("2d").getImageData(0, 0, e.width, e.height);
        var o = new Int32Array(a.data.buffer);
        var s = e.width;
        var r = e.height;
        var l = n.width;
        var d = n.height;
        let p = n.getContext("2d");
        var h = p.getImageData(0, 0, n.width, n.height);
        var u = new Int32Array(h.data.buffer);
        const m = l / s;
        const y = d / r;
        for (let c = 0; c < d;) {
          const e = s * ~~(c / y);
          const t = l * c++;
          for (let i = 0; i < l;) {
            u[t + i++] = o[e + ~~(i / m)];
          }
        }
        p.putImageData(h, 0, 0);
        return n;
      }
      function y(e, t, i) {
        if (!e) {
          return;
        }
        if (t > e.width || i > e.width) {
          return g(e, t, i);
        }
        if (t < 4096 && i < 4096 && (e.width > 4096 || e.height > 4096)) {
          let t = a.A.bestFit(e.width, e.height, 4096, 4096);
          e = g(e, t.width, t.height);
        }
        let n = c(t, i);
        var o = e.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, e.width, e.height).data;
        var s = e.width;
        var r = e.height;
        var l = n.width;
        var d = n.height;
        let p = n.getContext("2d");
        var h = p.getImageData(0, 0, n.width, n.height);
        var u = h.data;
        var m = s / l;
        var y = r / d;
        var v = Math.ceil(m / 2);
        var f = Math.ceil(y / 2);
        for (var b = 0; b < d; b++) {
          for (var w = 0; w < l; w++) {
            var x = (w + b * l) * 4;
            var A = 0;
            var T = 0;
            var k = 0;
            var C = 0;
            var S = 0;
            var N = 0;
            var P = (b + 0.5) * y;
            for (var L = Math.floor(b * y); L < (b + 1) * y; L++) {
              var M = Math.abs(P - (L + 0.5)) / f;
              var E = (w + 0.5) * m;
              var I = M * M;
              for (var U = Math.floor(w * m); U < (w + 1) * m; U++) {
                var $ = Math.abs(E - (U + 0.5)) / v;
                var R = Math.sqrt(I + $ * $);
                if (R >= -1 && R <= 1 && (A = R * 2 * R * R - R * 3 * R + 1) > 0) {
                  k += A * o[$ = (U + L * s) * 4];
                  C += A * o[$ + 1];
                  S += A * o[$ + 2];
                  N += A * o[$ + 3];
                  T += A;
                }
              }
            }
            u[x] = k / T;
            u[x + 1] = C / T;
            u[x + 2] = S / T;
            u[x + 3] = N / T;
          }
        }
        p.putImageData(h, 0, 0);
        return n;
      }
      function g(e, t, i, n = true, a) {
        if (!e) {
          return;
        }
        if (t < 1) {
          t = 1;
        }
        if (i < 1) {
          i = 1;
        }
        let o = a ?? c(t, i);
        var s = o.getContext("2d");
        s.imageSmoothingQuality = "high";
        s.imageSmoothingEnabled = n;
        s.drawImage(e, 0, 0, o.width, o.height);
        s = undefined;
        return o;
      }
      function v(e, t) {
        let i = c(t.width, t.height);
        let n = i.getContext("2d");
        n.drawImage(e, -t.x, -t.y);
        n = undefined;
        return i;
      }
      function f(e, t, i) {
        let n = c(i.width, i.height);
        let a = n.getContext("2d");
        a.imageSmoothingQuality = "high";
        a.imageSmoothingEnabled = true;
        a.drawImage(e, t.x - i.x, t.y - i.y, t.width, t.height);
        a = undefined;
        return n;
      }
      function b(e, t) {
        if (e) {
          var i = c(t.width, t.height);
          var n = i.getContext("2d");
          n.drawImage(e, -t.x, -t.y);
          n = undefined;
          return i;
        }
      }
      function w(e, t = false) {
        if (e) {
          var i = t || e instanceof HTMLCanvasElement ? r(e.width, e.height) : c(e.width, e.height);
          var n = i.getContext("2d");
          n.drawImage(e, 0, 0);
          n = undefined;
          return i;
        }
      }
      function x(e, t) {
        if (e) {
          var i = c(e.width, e.height);
          var n = i.getContext("2d");
          if (t !== 180) {
            i.width = e.height;
            i.height = e.width;
          }
          n.translate(i.width / 2, i.height / 2);
          n.rotate(t * Math.PI / 180);
          n.drawImage(e, -e.width / 2, -e.height / 2);
          n.setTransform(1, 0, 0, 1, 0, 0);
          n = undefined;
          return i;
        }
      }
      function A(e, t, i) {
        let n = c(i.width, i.height);
        let a = n.getContext("2d");
        a.save();
        a.translate(i.width / 2, i.height / 2);
        a.rotate(t * Math.PI / 180);
        a.drawImage(e, -e.width / 2, -e.height / 2);
        a.restore();
        a = null;
        return n;
      }
      function T(e, t) {
        if (e) {
          var i = c(e.width, e.height);
          var n = i.getContext("2d");
          n.save();
          if (t) {
            n.scale(1, -1);
            n.drawImage(e, 0, -e.height, e.width, e.height);
          } else {
            n.scale(-1, 1);
            n.drawImage(e, -e.width, 0, e.width, e.height);
          }
          n.restore();
          n = undefined;
          return i;
        }
      }
      function k(e) {
        if (!e) {
          return;
        }
        const t = e.width;
        const i = e.height;
        return C(e.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, t, i));
      }
      function C(e) {
        if (!e) {
          return;
        }
        const t = e.width;
        const i = e.height;
        let n;
        let o;
        let s = new Uint32Array(e.data.buffer);
        let r = -1;
        let c = -1;
        let l = -1;
        let d = -1;
        for (o = 0; o < i; ++o) {
          for (n = 0; n < t; ++n) {
            if (s[n + o * t] > 0) {
              c = o;
              break;
            }
          }
          if (c !== -1) {
            break;
          }
        }
        if (c !== -1) {
          for (o = i - 1; o >= c; --o) {
            for (n = 0; n < t; ++n) {
              if (s[n + o * t] > 0) {
                d = o + 1;
                break;
              }
            }
            if (d !== -1) {
              break;
            }
          }
          for (n = 0; n < t; ++n) {
            for (o = c; o <= d; ++o) {
              if (s[n + o * t] > 0) {
                r = n;
                break;
              }
            }
            if (r !== -1) {
              break;
            }
          }
          for (n = t - 1; n >= r; --n) {
            for (o = c; o <= d; ++o) {
              if (s[n + o * t] > 0) {
                l = n + 1;
                break;
              }
            }
            if (l !== -1) {
              break;
            }
          }
          return new a.A(r, c, l - r, d - c);
        }
      }
      function S() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = Math.random() * 16 | 0;
          return (e == "x" ? t : t & 3 | 8).toString(16);
        });
      }
      function N() {
        return "xxxxyxxx4xxx".replace(/[xy]/g, function (e) {
          var t = Math.random() * 16 | 0;
          return (e == "x" ? t : t & 3 | 8).toString(16);
        });
      }
      function P(e, t, i) {
        if (isNaN(e)) {
          return t;
        } else {
          return Math.min(Math.max(e, t), i);
        }
      }
      function L(e) {
        const t = (new Date().getTime() - e.getTime()) / 1000;
        if (t < 0) {
          return "It's the future man";
        }
        const i = Math.floor(t / 86400);
        if (i >= 1) {
          if (i > 1) {
            return (0, n.A)("sinceDays", i);
          } else {
            return (0, n.A)("sinceDay");
          }
        }
        const a = Math.floor(t / 3600);
        if (a >= 1) {
          if (a > 1) {
            return (0, n.A)("sinceHours", a);
          } else {
            return (0, n.A)("sinceHour");
          }
        }
        const o = Math.floor(t / 60);
        if (o >= 1) {
          if (o > 1) {
            return (0, n.A)("sinceMinutes", o);
          } else {
            return (0, n.A)("sinceMinute");
          }
        } else {
          return (0, n.A)("sinceNow");
        }
      }
      class M {
        constructor() {
          this.promise = new Promise((e, t) => {
            this.resolve = e;
            this.reject = t;
          });
        }
        then(e, t) {
          return this.promise.then(e, t);
        }
        catch(e) {
          return this.promise.catch(e);
        }
        finally(e) {
          return this.promise.finally(e);
        }
      }
      Symbol.toStringTag;
      Error;
      const E = (e = 32768) => {
        const t = (e, t) => {
          var i;
          t.width = t.height = e;
          const n = t.getContext("2d");
          try {
            return !!n && !((i = n.isContextLost) === null || i === undefined ? undefined : i.call(n)) && (n.fillStyle = "#000", n.fillRect(0, 0, 1, 1), n.getImageData(0, 0, 1, 1).data[3] === 255);
          } catch (a) {
            return false;
          }
        };
        let i = e;
        while (i > 0) {
          const e = document.createElement("canvas");
          const n = t(i, e);
          I(e);
          if (n) {
            return i;
          }
          i = Math.floor(i / 2);
        }
        return 0;
      };
      const I = e => {
        try {
          e.width = 0;
          e.height = 0;
        } catch (t) {}
        try {
          if (e.parentNode) {
            e.parentNode.removeChild(e);
          }
        } catch (i) {}
        e = null;
      };
      i.d(t, ["Q5", 0, e => {
        const t = e.lastIndexOf("(");
        const i = e.lastIndexOf(")");
        const n = () => {
          const t = e.lastIndexOf(".");
          return `${e.slice(0, t)} (1)${e.slice(t)}`;
        };
        if (!t || !i) {
          return n();
        }
        const a = parseInt(e.slice(t + 1, i));
        if (a) {
          return e.slice(0, t + 1) + (a + 1) + e.slice(i);
        } else {
          return n();
        }
      }]);
    }
