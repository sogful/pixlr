var editor;
(() => {
  "use strict";

  var t = window.__editorModules;
  const e = {};
  function s(i) {
    const a = e[i];
    if (a !== undefined) {
      return a.exports;
    }
    const n = e[i] = {
      id: i,
      loaded: false,
      exports: {}
    };
    t[i](n, n.exports, s);
    n.loaded = true;
    return n.exports;
  }
  s.m = t;
  (() => {
    const t = Symbol("webpack queues");
    const e = Symbol("webpack exports");
    const i = Symbol("webpack error");
    const a = t => {
      if (t?.d < 1) {
        t.d = 1;
        t.forEach(t => t.r--);
        t.forEach(t => t.r-- ? t.r++ : t());
      }
    };
    s.a = (s, n, o) => {
      let r;
      if (o) {
        (r = []).d = -1;
      }
      const h = new Set();
      const l = s.exports;
      let c;
      let d;
      let u;
      const p = new Promise((t, e) => {
        u = e;
        d = t;
      });
      p[e] = l;
      p[t] = t => {
        if (r) {
          t(r);
        }
        h.forEach(t);
        return p.catch(t => {});
      };
      s.exports = p;
      n(s => {
        let n;
        c = (s => s.map(s => {
          if (s !== null && typeof s == "object") {
            if (s[t]) {
              return s;
            }
            if (s.then) {
              const n = [];
              n.d = 0;
              s.then(t => {
                o[e] = t;
                a(n);
              }, t => {
                o[i] = t;
                a(n);
              });
              const o = {};
              o[t] = t => t(n);
              return o;
            }
          }
          const n = {
            [t]: t => {},
            [e]: s
          };
          return n;
        }))(s);
        const o = () => c.map(t => {
          if (t[i]) {
            throw t[i];
          }
          return t[e];
        });
        const l = new Promise(e => {
          n = () => e(o);
          n.r = 0;
          const s = t => t !== r && !h.has(t) && (h.add(t), t && !t.d && (n.r++, t.push(n)));
          c.forEach(e => e[t](s));
        });
        if (n.r) {
          return l;
        } else {
          return o();
        }
      }, t => {
        if (t) {
          u(p[i] = t);
        } else {
          d(l);
        }
        return a(r);
      });
      if (r?.d < 0) {
        r.d = 0;
      }
    };
  })();
  s.n = t => {
    const e = t && t.__esModule ? () => t.default : () => t;
    s.d(e, {
      a: e
    });
    return e;
  };
  (() => {
    const t = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__;
    let e;
    s.t = function (i, a) {
      if (a & 1) {
        i = this(i);
      }
      if (a & 8) {
        return i;
      }
      if (typeof i == "object" && i) {
        if (a & 4 && i.__esModule) {
          return i;
        }
        if (a & 16 && typeof i.then == "function") {
          return i;
        }
      }
      const n = Object.create(null);
      s.r(n);
      const o = {};
      e = e || [null, t({}), t([]), t(t)];
      for (var r = a & 2 && i; (typeof r == "object" || typeof r == "function") && !~e.indexOf(r); r = t(r)) {
        Object.getOwnPropertyNames(r).forEach(t => o[t] = () => i[t]);
      }
      o.default = () => i;
      s.d(n, o);
      return n;
    };
  })();
  s.d = (t, e) => {
    if (Array.isArray(e)) {
      for (var i = 0; i < e.length;) {
        var a = e[i++];
        var n = e[i++];
        if (s.o(t, a)) {
          if (n === 0) {
            i++;
          }
        } else if (n === 0) {
          Object.defineProperty(t, a, {
            enumerable: true,
            value: e[i++]
          });
        } else {
          Object.defineProperty(t, a, {
            enumerable: true,
            get: n
          });
        }
      }
    } else {
      for (var a in e) {
        if (s.o(e, a) && !s.o(t, a)) {
          Object.defineProperty(t, a, {
            enumerable: true,
            get: e[a]
          });
        }
      }
    }
  };
  s.f = {};
  s.e = t => Promise.all(Object.keys(s.f).reduce((e, i) => {
    s.f[i](t, e);
    return e;
  }, []));
  s.u = t => ({
    161: "infill",
    262: "native",
    885: "pdf-lib",
    990: "tiff"
  }[t] || t) + ".js";
  s.miniCssF = t => {};
  s.hmd = t => {
    if (!(t = Object.create(t)).children) {
      t.children = [];
    }
    Object.defineProperty(t, "exports", {
      enumerable: true,
      set() {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + t.id);
      }
    });
    return t;
  };
  s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
  (() => {
    const t = {};
    const e = "pixlr:";
    s.l = (i, a, n, o) => {
      if (t[i]) {
        t[i].push(a);
        return;
      }
      let r;
      let h;
      if (n !== undefined) {
        const t = document.getElementsByTagName("script");
        for (var l = 0; l < t.length; l++) {
          const s = t[l];
          if (s.getAttribute("src") == i || s.getAttribute("data-webpack") == e + n) {
            r = s;
            break;
          }
        }
      }
      if (!r) {
        h = true;
        r = document.createElement("script");
        r.charset = "utf-8";
        if (s.nc) {
          r.setAttribute("nonce", s.nc);
        }
        r.setAttribute("data-webpack", e + n);
        r.src = i;
      }
      t[i] = [a];
      const c = (e, s) => {
        r.onerror = r.onload = null;
        clearTimeout(d);
        const a = t[i];
        delete t[i];
        r.parentNode?.removeChild(r);
        a?.forEach(t => t(s));
        if (e) {
          return e(s);
        }
      };
      const d = setTimeout(c.bind(null, undefined, {
        type: "timeout",
        target: r
      }), 120000);
      r.onerror = c.bind(null, r.onerror);
      r.onload = c.bind(null, r.onload);
      if (h) {
        document.head.appendChild(r);
      }
    };
  })();
  s.r = t => {
    if (Symbol.toStringTag) {
      Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(t, "__esModule", {
      value: true
    });
  };
  s.v = (t, e, i, a) => {
    var n = fetch(s.p + "" + i + ".module.wasm");
    var o = () => n.then(t => t.arrayBuffer()).then(t => WebAssembly.instantiate(t, a)).then(e => Object.assign(t, e.instance.exports));
    return n.then(e => typeof WebAssembly.instantiateStreaming == "function" ? WebAssembly.instantiateStreaming(e, a).then(e => Object.assign(t, e.instance.exports), t => {
      if (e.headers.get("Content-Type") !== "application/wasm") {
        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", t);
        return o();
      }
      throw t;
    }) : o());
  };
  s.p = "assets/static/";
  (() => {
    s.b = typeof document != "undefined" && document.baseURI || self.location.href;
    const t = {
      8: 0,
      262: 0,
      334: 0
    };
    s.f.j = (e, i) => {
      let a = s.o(t, e) ? t[e] : undefined;
      if (a !== 0) {
        if (a) {
          i.push(a[2]);
        } else {
          const n = new Promise((s, i) => a = t[e] = [s, i]);
          i.push(a[2] = n);
          const o = s.p + s.u(e);
          const r = new Error();
          const h = i => {
            if (s.o(t, e) && (a = t[e], a !== 0 && (t[e] = undefined), a)) {
              const t = i && (i.type === "load" ? "missing" : i.type);
              const s = i && i.target && i.target.src;
              r.message = "Loading chunk " + e + " failed.\n(" + t + ": " + s + ")";
              r.name = "ChunkLoadError";
              r.type = t;
              r.request = s;
              r.event = i;
              a[1](r);
            }
          };
          s.l(o, h, "chunk-" + e, e);
        }
      }
    };
    const e = (e, i) => {
      let [a, n, o] = i;
      var r;
      var h;
      var l = 0;
      if (a.some(e => t[e] !== 0)) {
        for (r in n) {
          if (s.o(n, r)) {
            s.m[r] = n[r];
          }
        }
        if (o) {
          o(s);
        }
      }
      for (e && e(i); l < a.length; l++) {
        h = a[l];
        if (s.o(t, h) && t[h]) {
          t[h][0]();
        }
        t[h] = 0;
      }
    };
    const i = self.webpackChunkpixlr = self.webpackChunkpixlr || [];
    i.forEach(e.bind(null, 0));
    i.push = e.bind(null, i.push.bind(i));
  })();
  s.nc = undefined;
  let i = s(6883);
  editor = i;
})();