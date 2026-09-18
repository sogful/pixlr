window.__editorModules[5699] = function (t, e, s) {
      s.d(e, {
        $e: () => g,
        $z: () => o.$z,
        B3: () => b,
        D9: () => V,
        H5: () => k,
        HO: () => c,
        Jn: () => G,
        Nw: () => u,
        ON: () => v,
        Os: () => F,
        Ov: () => I,
        P1: () => N,
        PG: () => f,
        SE: () => L,
        T6: () => O,
        TL: () => D,
        VI: () => d,
        XP: () => $,
        aE: () => l,
        bD: () => r,
        bK: () => S,
        k8: () => x,
        lz: () => p,
        oM: () => T,
        oR: () => j,
        oc: () => M,
        p: () => E,
        qE: () => _,
        r$: () => y,
        r0: () => R,
        sg: () => H,
        tN: () => w,
        tm: () => A,
        tn: () => B,
        uk: () => q,
        wJ: () => m,
        wc: () => X,
        y2: () => C,
        yu: () => h,
        yz: () => P,
        zR: () => z
      });
      var i = s(7775);
      var a = s(3244);
      var n = s(6050);
      var o = s(6279);
      function r(t, e) {
        if (e === undefined) {
          return;
        }
        if (e instanceof t) {
          return e;
        }
        const s = Object.create(t.prototype);
        return Object.assign(s, e);
      }
      function h(t, e, s, i, a = true) {
        let n;
        n = t / e > s / i ? s / t : i / e;
        if (a && n > 1) {
          return 1;
        } else {
          return n;
        }
      }
      function l(t, e, s, i) {
        if (t / e < s / i) {
          return s / t;
        } else {
          return i / e;
        }
      }
      function c(t, e, s, i, a, n) {
        return n >= e && n < e + i && a >= t && a < t + s;
      }
      function d(t, e) {
        if (t < 0) {
          t = 1;
        }
        if (e < 0) {
          e = 1;
        }
        let s = document.createElement("canvas");
        s.width = t;
        s.height = e;
        return s;
      }
      function u(t, e) {
        if (t < 0) {
          t = 1;
        }
        if (e < 0) {
          e = 1;
        }
        return o.mM.acquire(t, e);
      }
      async function p(t) {
        if (!t) {
          return;
        }
        const e = URL.createObjectURL(t);
        const s = await g(e);
        URL.revokeObjectURL(e);
        return s;
      }
      function g(t, e = false) {
        if (t !== undefined) {
          return new Promise((s, i) => {
            if (!t) {
              console.log("Invalid URL in dataURLToCanvas");
              s(undefined);
              return;
            }
            const a = e ? d(100, 100) : u(100, 100);
            const n = a.getContext("2d");
            const o = new Image();
            o.onerror = t => i(t);
            o.onload = () => {
              a.width = o.width;
              a.height = o.height;
              n.drawImage(o, 0, 0);
              s(a);
            };
            o.crossOrigin = "anonymous";
            o.src = t;
          });
        }
      }
      function m(t) {
        if (t !== undefined) {
          return new Promise((e, s) => {
            if (!t) {
              console.log("Invalid URL in dataURLToImage");
              e(undefined);
              return;
            }
            const i = new Image();
            i.onerror = t => s(t);
            i.onload = () => {
              e(i);
            };
            i.crossOrigin = "anonymous";
            i.src = t;
          });
        }
      }
      function y(t, e) {
        if (!t) {
          return;
        }
        const s = e || new a.A(0, 0, t.width, t.height);
        const i = u(s.width, s.height);
        i.getContext("2d").drawImage(t, -s.x, -s.y);
        return new Promise((t, e) => {
          if (!i) {
            t(undefined);
          }
          i.toBlob(s => {
            const i = new FileReader();
            i.onerror = t => e(t);
            i.onload = () => t(i.result);
            i.readAsDataURL(s);
          }, "image/jpeg", 1);
        });
      }
      function v(t, e) {
        if (!t) {
          return;
        }
        const s = e || new a.A(0, 0, t.width, t.height);
        return t.getContext("2d").getImageData(s.x, s.y, s.width, s.height);
      }
      function f(t, e) {
        if (!t) {
          return;
        }
        const s = (e == null ? undefined : e.rect) || new a.A(0, 0, t.width, t.height);
        const i = u(s.width, s.height);
        i.getContext("2d").drawImage(t, -s.x, -s.y);
        return new Promise((resolve, reject) => i.toBlob(blob => {
          if (blob && blob.size) {
            resolve(blob);
          } else {
            reject(new Error("Image encoding failed. Please try saving again."));
          }
        }, e == null ? undefined : e.type, e == null ? undefined : e.quality));
      }
      function w(t, e, s) {
        if (!t || !e) {
          return;
        }
        let i = t.getContext("2d");
        i.save();
        i.globalCompositeOperation = "copy";
        i.drawImage(e, s.x, s.y);
        i.restore();
        i = undefined;
      }
      function x(t, e, s = 0, n = false) {
        const o = W();
        if (o === 0) ;else if (t.width > o || t.height > o) {
          alert((0, i.A)("imageMaxAllowedError").replace("{width}", o.toString()).replace("{height}", o.toString()));
          return null;
        }
        let r = n ? d(t.width, t.height) : u(t.width, t.height);
        let h = r.getContext("2d");
        h.drawImage(t, 0, 0, t.width, t.height);
        h = undefined;
        if (r.width > e || r.height > e) {
          let s = a.A.bestFit(t.width, t.height, e, e);
          r = A(r, s.width, s.height);
        }
        if (s !== 0) {
          r = L(r, s);
        }
        return r;
      }
      function b(t, e, s) {
        if (!t) {
          return;
        }
        let i = u(e, s);
        var a = t.getContext("2d").getImageData(0, 0, t.width, t.height);
        var n = new Int32Array(a.data.buffer);
        var o = t.width;
        var r = t.height;
        var h = i.width;
        var l = i.height;
        let c = i.getContext("2d");
        var d = c.getImageData(0, 0, i.width, i.height);
        var p = new Int32Array(d.data.buffer);
        const g = h / o;
        const m = l / r;
        for (let u = 0; u < l;) {
          const t = o * ~~(u / m);
          const e = h * u++;
          for (let s = 0; s < h; s++) {
            p[e + s] = n[t + Math.min(o - 1, Math.floor(s / g))];
          }
        }
        c.putImageData(d, 0, 0);
        return i;
      }
      function A(t, e, s) {
        if (!t) {
          return;
        }
        if (e > t.width || s > t.height) {
          return k(t, e, s);
        }
        if (e < 4096 && s < 4096 && (t.width > 4096 || t.height > 4096)) {
          let e = a.A.bestFit(t.width, t.height, 4096, 4096);
          t = k(t, e.width, e.height);
        }
        let i = u(e, s);
        var n = t.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, t.width, t.height).data;
        var o = t.width;
        var r = t.height;
        var h = i.width;
        var l = i.height;
        let c = i.getContext("2d");
        var d = c.getImageData(0, 0, i.width, i.height);
        var p = d.data;
        var g = o / h;
        var m = r / l;
        var y = Math.ceil(g / 2);
        var v = Math.ceil(m / 2);
        for (var f = 0; f < l; f++) {
          for (var w = 0; w < h; w++) {
            var x = (w + f * h) * 4;
            var b = 0;
            var A = 0;
            var S = 0;
            var E = 0;
            var C = 0;
            var T = 0;
            var L = (f + 0.5) * m;
            for (var M = Math.floor(f * m); M < (f + 1) * m; M++) {
              var P = Math.abs(L - (M + 0.5)) / v;
              var D = (w + 0.5) * g;
              var z = P * P;
              for (var I = Math.floor(w * g); I < (w + 1) * g; I++) {
                var F = Math.abs(D - (I + 0.5)) / y;
                var R = Math.sqrt(z + F * F);
                if (R >= -1 && R <= 1 && (b = R * 2 * R * R - R * 3 * R + 1) > 0) {
                  S += b * n[F = (I + M * o) * 4];
                  E += b * n[F + 1];
                  C += b * n[F + 2];
                  T += b * n[F + 3];
                  A += b;
                }
              }
            }
            p[x] = S / A;
            p[x + 1] = E / A;
            p[x + 2] = C / A;
            p[x + 3] = T / A;
          }
        }
        c.putImageData(d, 0, 0);
        return i;
      }
      function k(t, e, s, i = true, a) {
        if (!t) {
          return;
        }
        if (e < 1) {
          e = 1;
        }
        if (s < 1) {
          s = 1;
        }
        let n = a ?? u(e, s);
        var o = n.getContext("2d");
        o.imageSmoothingQuality = "high";
        o.imageSmoothingEnabled = i;
        o.drawImage(t, 0, 0, n.width, n.height);
        o = undefined;
        return n;
      }
      function S(t, e) {
        let s = u(e.width, e.height);
        let i = s.getContext("2d");
        i.drawImage(t, -e.x, -e.y);
        i = undefined;
        return s;
      }
      function E(t, e, s) {
        let i = u(s.width, s.height);
        let a = i.getContext("2d");
        a.imageSmoothingQuality = "high";
        a.imageSmoothingEnabled = true;
        a.drawImage(t, e.x - s.x, e.y - s.y, e.width, e.height);
        a = undefined;
        return i;
      }
      function C(t, e) {
        if (t) {
          var s = u(e.width, e.height);
          var i = s.getContext("2d");
          i.drawImage(t, -e.x, -e.y);
          i = undefined;
          return s;
        }
      }
      function T(t, e = false) {
        if (t) {
          var s = e || t instanceof HTMLCanvasElement ? d(t.width, t.height) : u(t.width, t.height);
          var i = s.getContext("2d");
          i.drawImage(t, 0, 0);
          i = undefined;
          return s;
        }
      }
      function L(t, e) {
        if (t) {
          var s = u(t.width, t.height);
          var i = s.getContext("2d");
          if (e !== 180) {
            s.width = t.height;
            s.height = t.width;
          }
          i.translate(s.width / 2, s.height / 2);
          i.rotate(e * Math.PI / 180);
          i.drawImage(t, -t.width / 2, -t.height / 2);
          i.setTransform(1, 0, 0, 1, 0, 0);
          i = undefined;
          return s;
        }
      }
      function M(t, e, s) {
        let i = u(s.width, s.height);
        let a = i.getContext("2d");
        a.save();
        a.translate(s.width / 2, s.height / 2);
        a.rotate(e * Math.PI / 180);
        a.drawImage(t, -t.width / 2, -t.height / 2);
        a.restore();
        a = null;
        return i;
      }
      function P(t, e) {
        if (t) {
          var s = u(t.width, t.height);
          var i = s.getContext("2d");
          i.save();
          if (e) {
            i.scale(1, -1);
            i.drawImage(t, 0, -t.height, t.width, t.height);
          } else {
            i.scale(-1, 1);
            i.drawImage(t, -t.width, 0, t.width, t.height);
          }
          i.restore();
          i = undefined;
          return s;
        }
      }
      function D(t) {
        if (!t) {
          return;
        }
        const e = t.width;
        const s = t.height;
        return z(t.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, e, s));
      }
      function z(t) {
        if (!t) {
          return;
        }
        const e = t.width;
        const s = t.height;
        let i;
        let n;
        let o = new Uint32Array(t.data.buffer);
        let r = -1;
        let h = -1;
        let l = -1;
        let c = -1;
        for (n = 0; n < s; ++n) {
          for (i = 0; i < e; ++i) {
            if (o[i + n * e] > 0) {
              h = n;
              break;
            }
          }
          if (h !== -1) {
            break;
          }
        }
        if (h !== -1) {
          for (n = s - 1; n >= h; --n) {
            for (i = 0; i < e; ++i) {
              if (o[i + n * e] > 0) {
                c = n + 1;
                break;
              }
            }
            if (c !== -1) {
              break;
            }
          }
          for (i = 0; i < e; ++i) {
            for (n = h; n <= c; ++n) {
              if (o[i + n * e] > 0) {
                r = i;
                break;
              }
            }
            if (r !== -1) {
              break;
            }
          }
          for (i = e - 1; i >= r; --i) {
            for (n = h; n <= c; ++n) {
              if (o[i + n * e] > 0) {
                l = i + 1;
                break;
              }
            }
            if (l !== -1) {
              break;
            }
          }
          return new a.A(r, h, l - r, c - h);
        }
      }
      function I(t) {
        let e = t / 1024;
        if (e > 1024) {
          return (e / 1024).toFixed(1) + "mb";
        } else if (e > 100) {
          return Math.round(e) + "kb";
        } else {
          return Math.round(e * 10) / 10 + "kb";
        }
      }
      function F() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
          var e = Math.random() * 16 | 0;
          return (t == "x" ? e : e & 3 | 8).toString(16);
        });
      }
      function R() {
        return "xxxxyxxx4xxx".replace(/[xy]/g, function (t) {
          var e = Math.random() * 16 | 0;
          return (t == "x" ? e : e & 3 | 8).toString(16);
        });
      }
      function _(t, e, s) {
        if (isNaN(t)) {
          return e;
        } else {
          return Math.min(Math.max(t, e), s);
        }
      }
      function N(t) {
        let e = false;
        let s = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
        for (var i = 0; i < s.length; i += 4) {
          if (s[i + 3] < 255) {
            e = true;
            break;
          }
        }
        return e;
      }
      function B(t) {
        let e = new n.A(0, 255);
        var s = Array(256);
        s.fill(0);
        var i = t.getContext("2d").getImageData(0, 0, t.width, t.height).data;
        for (let n = 0; n < i.length; n += 4) {
          s[i[n]] += 1;
          s[i[n + 1]] += 1;
          s[i[n + 2]] += 1;
        }
        var a = Math.round(t.width * t.height / 1000);
        let o;
        for (o = 0; o < 256; ++o) {
          if (s[o] > a) {
            e.x = o;
            break;
          }
        }
        for (o = 255; o >= 0; --o) {
          if (s[o] > a) {
            e.y = o;
            break;
          }
        }
        if (e.x > 100) {
          e.x = 100;
        }
        if (e.y < 155) {
          e.y = 155;
        }
        return e;
      }
      function O(t) {
        let e = 1;
        let s = 1;
        let i = t.width < 500 && t.height < 500 ? t : k(t, 500, 500);
        const a = i.width;
        const n = i.height;
        let o;
        let r;
        let h;
        let l;
        let c;
        let d;
        let u;
        let p;
        let g;
        let m = i.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, a, n).data;
        for (c = n; c--;) {
          for (l = a; l--;) {
            d = (c * a + l) * 4;
            o = m[d];
            r = m[d + 1];
            h = m[d + 2];
            u = Math.min(o, r, h);
            p = Math.max(o, r, h);
            s += p / 255;
            g = p - u;
            if (g) {
              e += g / p;
            }
          }
        }
        e = (e + s) / (i.width * i.height * 2);
        return e;
      }
      const U = {};
      function H(t, e, s) {
        window.clearTimeout(U[t]);
        U[t] = window.setTimeout(() => {
          delete U[t];
          s();
        }, e);
      }
      function q(t) {
        return new Promise((e, s) => {
          setTimeout(() => e(), t);
        });
      }
      function V() {
        return new Promise((t, e) => {
          window.requestAnimationFrame(() => {
            window.requestAnimationFrame(() => {
              t();
            });
          });
        });
      }
      function $(t) {
        const e = (new Date().getTime() - t.getTime()) / 1000;
        if (e < 0) {
          return "It's the future man";
        }
        const s = Math.floor(e / 86400);
        if (s >= 1) {
          if (s > 1) {
            return (0, i.A)("sinceDays", s);
          } else {
            return (0, i.A)("sinceDay");
          }
        }
        const a = Math.floor(e / 3600);
        if (a >= 1) {
          if (a > 1) {
            return (0, i.A)("sinceHours", a);
          } else {
            return (0, i.A)("sinceHour");
          }
        }
        const n = Math.floor(e / 60);
        if (n >= 1) {
          if (n > 1) {
            return (0, i.A)("sinceMinutes", n);
          } else {
            return (0, i.A)("sinceMinute");
          }
        } else {
          return (0, i.A)("sinceNow");
        }
      }
      function G(t) {
        if (!t) {
          return false;
        }
        if (t.nodeName === "TEXTAREA") {
          return true;
        }
        if (t.nodeName === "INPUT") {
          const e = t;
          const s = e.type.toLowerCase();
          return s === "text" || s === "number" || s === "url" || e.isContentEditable;
        }
        return false;
      }
      function j(t) {
        let e = new n.A(t.offsetLeft, t.offsetTop);
        while (t.offsetParent && (e.x = e.x + t.offsetParent.offsetLeft, e.y = e.y + t.offsetParent.offsetTop, t != document.getElementsByTagName("body")[0])) {
          t = t.offsetParent;
        }
        return e;
      }
      class X {
        constructor() {
          this.promise = new Promise((t, e) => {
            this.resolve = t;
            this.reject = e;
          });
        }
        then(t, e) {
          return this.promise.then(t, e);
        }
        catch(t) {
          return this.promise.catch(t);
        }
        finally(t) {
          return this.promise.finally(t);
        }
      }
      Symbol.toStringTag;
      Error;
      const W = (t = 32768) => {
        const e = (t, e) => {
          var s;
          e.width = e.height = t;
          const i = e.getContext("2d");
          try {
            return !!i && !((s = i.isContextLost) === null || s === undefined ? undefined : s.call(i)) && (i.fillStyle = "#000", i.fillRect(0, 0, 1, 1), i.getImageData(0, 0, 1, 1).data[3] === 255);
          } catch (a) {
            return false;
          }
        };
        let s = t;
        while (s > 0) {
          const t = document.createElement("canvas");
          const i = e(s, t);
          Y(t);
          if (i) {
            return s;
          }
          s = Math.floor(s / 2);
        }
        return 0;
      };
      const Y = t => {
        try {
          t.width = 0;
          t.height = 0;
        } catch (e) {}
        try {
          if (t.parentNode) {
            t.parentNode.removeChild(t);
          }
        } catch (s) {}
        t = null;
      };
      s.d(e, ["Al", 0, "rgb(255,0,255)", "Dk", 0, t => t.substring(0, t.lastIndexOf(".")) || t, "E5", 0, t => new Promise(e => {
        const s = new FileReader();
        s.onloadend = function (t) {
          const s = new Uint8Array(t.target.result).subarray(0, 12);
          const i = Array.from(s, t => t.toString(16).padStart(2, "0")).join("");
          e(i.startsWith("000000186674797068656963"));
        };
        s.readAsArrayBuffer(t.slice(0, 12));
      }), "KP", 0, "rgb(75,75,75)", "Q5", 0, t => {
        const e = t.lastIndexOf("(");
        const s = t.lastIndexOf(")");
        const i = () => {
          const e = t.lastIndexOf(".");
          return `${t.slice(0, e)} (1)${t.slice(e)}`;
        };
        if (!e || !s) {
          return i();
        }
        const a = parseInt(t.slice(e + 1, s));
        if (a) {
          return t.slice(0, e + 1) + (a + 1) + t.slice(s);
        } else {
          return i();
        }
      }, "RZ", 0, "rgb(67,201,143)", "Sg", 0, "rgb(32,209,139)", "YD", 0, "rgb(209,72,14)", "bi", 0, "rgb(0,163,218)", "eD", 0, (t, e) => {
        let s;
        return (...i) => {
          clearTimeout(s);
          s = window.setTimeout(() => e(...i), t);
        };
      }, "fu", 0, "rgb(148,148,148)", "jh", 0, (t, e, s) => e * s + t * (1 - s), "q5", 0, "rgb(255,255,255)", "z", 0, "rgba(255,255,255, 0.7)"]);
    }
