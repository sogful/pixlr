/**
 * Bundled by jsDelivr using Rollup v2.79.1 and Terser v5.19.2.
 * Original file: /npm/pdfjs-dist@4.8.69/build/pdf.mjs
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
function t(t, e) {
  return (
    e.forEach(function (e) {
      e &&
        "string" != typeof e &&
        !Array.isArray(e) &&
        Object.keys(e).forEach(function (i) {
          if ("default" !== i && !(i in t)) {
            var s = Object.getOwnPropertyDescriptor(e, i);
            Object.defineProperty(
              t,
              i,
              s.get
                ? s
                : {
                    enumerable: !0,
                    get: function () {
                      return e[i];
                    },
                  },
            );
          }
        });
    }),
    Object.freeze(t)
  );
}
var e =
  "undefined" != typeof global
    ? global
    : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
        ? window
        : {};
function i() {
  throw new Error("setTimeout has not been defined");
}
function s() {
  throw new Error("clearTimeout has not been defined");
}
var n = i,
  a = s;
function r(t) {
  if (n === setTimeout) return setTimeout(t, 0);
  if ((n === i || !n) && setTimeout)
    return ((n = setTimeout), setTimeout(t, 0));
  try {
    return n(t, 0);
  } catch (e) {
    try {
      return n.call(null, t, 0);
    } catch (e) {
      return n.call(this, t, 0);
    }
  }
}
("function" == typeof e.setTimeout && (n = setTimeout),
  "function" == typeof e.clearTimeout && (a = clearTimeout));
var o,
  h = [],
  l = !1,
  c = -1;
function d() {
  l &&
    o &&
    ((l = !1), o.length ? (h = o.concat(h)) : (c = -1), h.length && u());
}
function u() {
  if (!l) {
    var t = r(d);
    l = !0;
    for (var e = h.length; e; ) {
      for (o = h, h = []; ++c < e; ) o && o[c].run();
      ((c = -1), (e = h.length));
    }
    ((o = null),
      (l = !1),
      (function (t) {
        if (a === clearTimeout) return clearTimeout(t);
        if ((a === s || !a) && clearTimeout)
          return ((a = clearTimeout), clearTimeout(t));
        try {
          return a(t);
        } catch (e) {
          try {
            return a.call(null, t);
          } catch (e) {
            return a.call(this, t);
          }
        }
      })(t));
  }
}
function p(t, e) {
  ((this.fun = t), (this.array = e));
}
p.prototype.run = function () {
  this.fun.apply(null, this.array);
};
function g() {}
var f = g,
  m = g,
  b = g,
  v = g,
  A = g,
  y = g,
  w = g;
var _ = e.performance || {},
  x =
    _.now ||
    _.mozNow ||
    _.msNow ||
    _.oNow ||
    _.webkitNow ||
    function () {
      return new Date().getTime();
    };
var C = new Date();
var E = {
    nextTick: function (t) {
      var e = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
      (h.push(new p(t, e)), 1 !== h.length || l || r(u));
    },
    title: "browser",
    browser: !0,
    env: {},
    argv: [],
    version: "",
    versions: {},
    on: f,
    addListener: m,
    once: b,
    off: v,
    removeListener: A,
    removeAllListeners: y,
    emit: w,
    binding: function (t) {
      throw new Error("process.binding is not supported");
    },
    cwd: function () {
      return "/";
    },
    chdir: function (t) {
      throw new Error("process.chdir is not supported");
    },
    umask: function () {
      return 0;
    },
    hrtime: function (t) {
      var e = 0.001 * x.call(_),
        i = Math.floor(e),
        s = Math.floor((e % 1) * 1e9);
      return (t && ((i -= t[0]), (s -= t[1]) < 0 && (i--, (s += 1e9))), [i, s]);
    },
    platform: "browser",
    release: {},
    config: {},
    uptime: function () {
      return (new Date() - C) / 1e3;
    },
  },
  S = [],
  T = [],
  M = "undefined" != typeof Uint8Array ? Uint8Array : Array,
  k = !1;
function P() {
  k = !0;
  for (
    var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
      e = 0;
    e < 64;
    ++e
  )
    ((S[e] = t[e]), (T[t.charCodeAt(e)] = e));
  ((T["-".charCodeAt(0)] = 62), (T["_".charCodeAt(0)] = 63));
}
function R(t, e, i) {
  for (var s, n, a = [], r = e; r < i; r += 3)
    ((s = (t[r] << 16) + (t[r + 1] << 8) + t[r + 2]),
      a.push(
        S[((n = s) >> 18) & 63] +
          S[(n >> 12) & 63] +
          S[(n >> 6) & 63] +
          S[63 & n],
      ));
  return a.join("");
}
function I(t) {
  var e;
  k || P();
  for (
    var i = t.length, s = i % 3, n = "", a = [], r = 16383, o = 0, h = i - s;
    o < h;
    o += r
  )
    a.push(R(t, o, o + r > h ? h : o + r));
  return (
    1 === s
      ? ((e = t[i - 1]), (n += S[e >> 2]), (n += S[(e << 4) & 63]), (n += "=="))
      : 2 === s &&
        ((e = (t[i - 2] << 8) + t[i - 1]),
        (n += S[e >> 10]),
        (n += S[(e >> 4) & 63]),
        (n += S[(e << 2) & 63]),
        (n += "=")),
    a.push(n),
    a.join("")
  );
}
function D(t, e, i, s, n) {
  var a,
    r,
    o = 8 * n - s - 1,
    h = (1 << o) - 1,
    l = h >> 1,
    c = -7,
    d = i ? n - 1 : 0,
    u = i ? -1 : 1,
    p = t[e + d];
  for (
    d += u, a = p & ((1 << -c) - 1), p >>= -c, c += o;
    c > 0;
    a = 256 * a + t[e + d], d += u, c -= 8
  );
  for (
    r = a & ((1 << -c) - 1), a >>= -c, c += s;
    c > 0;
    r = 256 * r + t[e + d], d += u, c -= 8
  );
  if (0 === a) a = 1 - l;
  else {
    if (a === h) return r ? NaN : (1 / 0) * (p ? -1 : 1);
    ((r += Math.pow(2, s)), (a -= l));
  }
  return (p ? -1 : 1) * r * Math.pow(2, a - s);
}
function L(t, e, i, s, n, a) {
  var r,
    o,
    h,
    l = 8 * a - n - 1,
    c = (1 << l) - 1,
    d = c >> 1,
    u = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
    p = s ? 0 : a - 1,
    g = s ? 1 : -1,
    f = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
  for (
    e = Math.abs(e),
      isNaN(e) || e === 1 / 0
        ? ((o = isNaN(e) ? 1 : 0), (r = c))
        : ((r = Math.floor(Math.log(e) / Math.LN2)),
          e * (h = Math.pow(2, -r)) < 1 && (r--, (h *= 2)),
          (e += r + d >= 1 ? u / h : u * Math.pow(2, 1 - d)) * h >= 2 &&
            (r++, (h /= 2)),
          r + d >= c
            ? ((o = 0), (r = c))
            : r + d >= 1
              ? ((o = (e * h - 1) * Math.pow(2, n)), (r += d))
              : ((o = e * Math.pow(2, d - 1) * Math.pow(2, n)), (r = 0)));
    n >= 8;
    t[i + p] = 255 & o, p += g, o /= 256, n -= 8
  );
  for (
    r = (r << n) | o, l += n;
    l > 0;
    t[i + p] = 255 & r, p += g, r /= 256, l -= 8
  );
  t[i + p - g] |= 128 * f;
}
var F = {}.toString,
  N =
    Array.isArray ||
    function (t) {
      return "[object Array]" == F.call(t);
    };
function O() {
  return z.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
}
function B(t, e) {
  if (O() < e) throw new RangeError("Invalid typed array length");
  return (
    z.TYPED_ARRAY_SUPPORT
      ? ((t = new Uint8Array(e)).__proto__ = z.prototype)
      : (null === t && (t = new z(e)), (t.length = e)),
    t
  );
}
function z(t, e, i) {
  if (!(z.TYPED_ARRAY_SUPPORT || this instanceof z)) return new z(t, e, i);
  if ("number" == typeof t) {
    if ("string" == typeof e)
      throw new Error(
        "If encoding is specified then the first argument must be a string",
      );
    return j(this, t);
  }
  return H(this, t, e, i);
}
function H(t, e, i, s) {
  if ("number" == typeof e)
    throw new TypeError('"value" argument must not be a number');
  return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
    ? (function (t, e, i, s) {
        if ((e.byteLength, i < 0 || e.byteLength < i))
          throw new RangeError("'offset' is out of bounds");
        if (e.byteLength < i + (s || 0))
          throw new RangeError("'length' is out of bounds");
        e =
          void 0 === i && void 0 === s
            ? new Uint8Array(e)
            : void 0 === s
              ? new Uint8Array(e, i)
              : new Uint8Array(e, i, s);
        z.TYPED_ARRAY_SUPPORT
          ? ((t = e).__proto__ = z.prototype)
          : (t = $(t, e));
        return t;
      })(t, e, i, s)
    : "string" == typeof e
      ? (function (t, e, i) {
          ("string" == typeof i && "" !== i) || (i = "utf8");
          if (!z.isEncoding(i))
            throw new TypeError('"encoding" must be a valid string encoding');
          var s = 0 | W(e, i);
          t = B(t, s);
          var n = t.write(e, i);
          n !== s && (t = t.slice(0, n));
          return t;
        })(t, e, i)
      : (function (t, e) {
          if (V(e)) {
            var i = 0 | G(e.length);
            return (0 === (t = B(t, i)).length || e.copy(t, 0, 0, i), t);
          }
          if (e) {
            if (
              ("undefined" != typeof ArrayBuffer &&
                e.buffer instanceof ArrayBuffer) ||
              "length" in e
            )
              return "number" != typeof e.length || (s = e.length) != s
                ? B(t, 0)
                : $(t, e);
            if ("Buffer" === e.type && N(e.data)) return $(t, e.data);
          }
          var s;
          throw new TypeError(
            "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.",
          );
        })(t, e);
}
function U(t) {
  if ("number" != typeof t)
    throw new TypeError('"size" argument must be a number');
  if (t < 0) throw new RangeError('"size" argument must not be negative');
}
function j(t, e) {
  if ((U(e), (t = B(t, e < 0 ? 0 : 0 | G(e))), !z.TYPED_ARRAY_SUPPORT))
    for (var i = 0; i < e; ++i) t[i] = 0;
  return t;
}
function $(t, e) {
  var i = e.length < 0 ? 0 : 0 | G(e.length);
  t = B(t, i);
  for (var s = 0; s < i; s += 1) t[s] = 255 & e[s];
  return t;
}
function G(t) {
  if (t >= O())
    throw new RangeError(
      "Attempt to allocate Buffer larger than maximum size: 0x" +
        O().toString(16) +
        " bytes",
    );
  return 0 | t;
}
function V(t) {
  return !(null == t || !t._isBuffer);
}
function W(t, e) {
  if (V(t)) return t.length;
  if (
    "undefined" != typeof ArrayBuffer &&
    "function" == typeof ArrayBuffer.isView &&
    (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
  )
    return t.byteLength;
  "string" != typeof t && (t = "" + t);
  var i = t.length;
  if (0 === i) return 0;
  for (var s = !1; ; )
    switch (e) {
      case "ascii":
      case "latin1":
      case "binary":
        return i;
      case "utf8":
      case "utf-8":
      case void 0:
        return At(t).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return 2 * i;
      case "hex":
        return i >>> 1;
      case "base64":
        return yt(t).length;
      default:
        if (s) return At(t).length;
        ((e = ("" + e).toLowerCase()), (s = !0));
    }
}
function q(t, e, i) {
  var s = !1;
  if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
  if (((void 0 === i || i > this.length) && (i = this.length), i <= 0))
    return "";
  if ((i >>>= 0) <= (e >>>= 0)) return "";
  for (t || (t = "utf8"); ; )
    switch (t) {
      case "hex":
        return ht(this, e, i);
      case "utf8":
      case "utf-8":
        return nt(this, e, i);
      case "ascii":
        return rt(this, e, i);
      case "latin1":
      case "binary":
        return ot(this, e, i);
      case "base64":
        return st(this, e, i);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return lt(this, e, i);
      default:
        if (s) throw new TypeError("Unknown encoding: " + t);
        ((t = (t + "").toLowerCase()), (s = !0));
    }
}
function Y(t, e, i) {
  var s = t[e];
  ((t[e] = t[i]), (t[i] = s));
}
function X(t, e, i, s, n) {
  if (0 === t.length) return -1;
  if (
    ("string" == typeof i
      ? ((s = i), (i = 0))
      : i > 2147483647
        ? (i = 2147483647)
        : i < -2147483648 && (i = -2147483648),
    (i = +i),
    isNaN(i) && (i = n ? 0 : t.length - 1),
    i < 0 && (i = t.length + i),
    i >= t.length)
  ) {
    if (n) return -1;
    i = t.length - 1;
  } else if (i < 0) {
    if (!n) return -1;
    i = 0;
  }
  if (("string" == typeof e && (e = z.from(e, s)), V(e)))
    return 0 === e.length ? -1 : K(t, e, i, s, n);
  if ("number" == typeof e)
    return (
      (e &= 255),
      z.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf
        ? n
          ? Uint8Array.prototype.indexOf.call(t, e, i)
          : Uint8Array.prototype.lastIndexOf.call(t, e, i)
        : K(t, [e], i, s, n)
    );
  throw new TypeError("val must be string, number or Buffer");
}
function K(t, e, i, s, n) {
  var a,
    r = 1,
    o = t.length,
    h = e.length;
  if (
    void 0 !== s &&
    ("ucs2" === (s = String(s).toLowerCase()) ||
      "ucs-2" === s ||
      "utf16le" === s ||
      "utf-16le" === s)
  ) {
    if (t.length < 2 || e.length < 2) return -1;
    ((r = 2), (o /= 2), (h /= 2), (i /= 2));
  }
  function l(t, e) {
    return 1 === r ? t[e] : t.readUInt16BE(e * r);
  }
  if (n) {
    var c = -1;
    for (a = i; a < o; a++)
      if (l(t, a) === l(e, -1 === c ? 0 : a - c)) {
        if ((-1 === c && (c = a), a - c + 1 === h)) return c * r;
      } else (-1 !== c && (a -= a - c), (c = -1));
  } else
    for (i + h > o && (i = o - h), a = i; a >= 0; a--) {
      for (var d = !0, u = 0; u < h; u++)
        if (l(t, a + u) !== l(e, u)) {
          d = !1;
          break;
        }
      if (d) return a;
    }
  return -1;
}
function Q(t, e, i, s) {
  i = Number(i) || 0;
  var n = t.length - i;
  s ? (s = Number(s)) > n && (s = n) : (s = n);
  var a = e.length;
  if (a % 2 != 0) throw new TypeError("Invalid hex string");
  s > a / 2 && (s = a / 2);
  for (var r = 0; r < s; ++r) {
    var o = parseInt(e.substr(2 * r, 2), 16);
    if (isNaN(o)) return r;
    t[i + r] = o;
  }
  return r;
}
function J(t, e, i, s) {
  return wt(At(e, t.length - i), t, i, s);
}
function Z(t, e, i, s) {
  return wt(
    (function (t) {
      for (var e = [], i = 0; i < t.length; ++i) e.push(255 & t.charCodeAt(i));
      return e;
    })(e),
    t,
    i,
    s,
  );
}
function tt(t, e, i, s) {
  return Z(t, e, i, s);
}
function et(t, e, i, s) {
  return wt(yt(e), t, i, s);
}
function it(t, e, i, s) {
  return wt(
    (function (t, e) {
      for (var i, s, n, a = [], r = 0; r < t.length && !((e -= 2) < 0); ++r)
        ((s = (i = t.charCodeAt(r)) >> 8), (n = i % 256), a.push(n), a.push(s));
      return a;
    })(e, t.length - i),
    t,
    i,
    s,
  );
}
function st(t, e, i) {
  return 0 === e && i === t.length ? I(t) : I(t.slice(e, i));
}
function nt(t, e, i) {
  i = Math.min(t.length, i);
  for (var s = [], n = e; n < i; ) {
    var a,
      r,
      o,
      h,
      l = t[n],
      c = null,
      d = l > 239 ? 4 : l > 223 ? 3 : l > 191 ? 2 : 1;
    if (n + d <= i)
      switch (d) {
        case 1:
          l < 128 && (c = l);
          break;
        case 2:
          128 == (192 & (a = t[n + 1])) &&
            (h = ((31 & l) << 6) | (63 & a)) > 127 &&
            (c = h);
          break;
        case 3:
          ((a = t[n + 1]),
            (r = t[n + 2]),
            128 == (192 & a) &&
              128 == (192 & r) &&
              (h = ((15 & l) << 12) | ((63 & a) << 6) | (63 & r)) > 2047 &&
              (h < 55296 || h > 57343) &&
              (c = h));
          break;
        case 4:
          ((a = t[n + 1]),
            (r = t[n + 2]),
            (o = t[n + 3]),
            128 == (192 & a) &&
              128 == (192 & r) &&
              128 == (192 & o) &&
              (h =
                ((15 & l) << 18) |
                ((63 & a) << 12) |
                ((63 & r) << 6) |
                (63 & o)) > 65535 &&
              h < 1114112 &&
              (c = h));
      }
    (null === c
      ? ((c = 65533), (d = 1))
      : c > 65535 &&
        ((c -= 65536),
        s.push(((c >>> 10) & 1023) | 55296),
        (c = 56320 | (1023 & c))),
      s.push(c),
      (n += d));
  }
  return (function (t) {
    var e = t.length;
    if (e <= at) return String.fromCharCode.apply(String, t);
    var i = "",
      s = 0;
    for (; s < e; )
      i += String.fromCharCode.apply(String, t.slice(s, (s += at)));
    return i;
  })(s);
}
((z.TYPED_ARRAY_SUPPORT =
  void 0 === e.TYPED_ARRAY_SUPPORT || e.TYPED_ARRAY_SUPPORT),
  O(),
  (z.poolSize = 8192),
  (z._augment = function (t) {
    return ((t.__proto__ = z.prototype), t);
  }),
  (z.from = function (t, e, i) {
    return H(null, t, e, i);
  }),
  z.TYPED_ARRAY_SUPPORT &&
    ((z.prototype.__proto__ = Uint8Array.prototype),
    (z.__proto__ = Uint8Array),
    "undefined" != typeof Symbol && Symbol.species && z[Symbol.species]),
  (z.alloc = function (t, e, i) {
    return (function (t, e, i, s) {
      return (
        U(e),
        e <= 0
          ? B(t, e)
          : void 0 !== i
            ? "string" == typeof s
              ? B(t, e).fill(i, s)
              : B(t, e).fill(i)
            : B(t, e)
      );
    })(null, t, e, i);
  }),
  (z.allocUnsafe = function (t) {
    return j(null, t);
  }),
  (z.allocUnsafeSlow = function (t) {
    return j(null, t);
  }),
  (z.isBuffer = function (t) {
    return (
      null != t &&
      (!!t._isBuffer ||
        _t(t) ||
        (function (t) {
          return (
            "function" == typeof t.readFloatLE &&
            "function" == typeof t.slice &&
            _t(t.slice(0, 0))
          );
        })(
          /**
           * @licstart The following is the entire license notice for the
           * JavaScript code in this page
           *
           * Copyright 2024 Mozilla Foundation
           *
           * Licensed under the Apache License, Version 2.0 (the "License");
           * you may not use this file except in compliance with the License.
           * You may obtain a copy of the License at
           *
           *     http://www.apache.org/licenses/LICENSE-2.0
           *
           * Unless required by applicable law or agreed to in writing, software
           * distributed under the License is distributed on an "AS IS" BASIS,
           * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
           * See the License for the specific language governing permissions and
           * limitations under the License.
           *
           * @licend The above is the entire license notice for the
           * JavaScript code in this page
           */ t,
        ))
    );
  }),
  (z.compare = function (t, e) {
    if (!V(t) || !V(e)) throw new TypeError("Arguments must be Buffers");
    if (t === e) return 0;
    for (var i = t.length, s = e.length, n = 0, a = Math.min(i, s); n < a; ++n)
      if (t[n] !== e[n]) {
        ((i = t[n]), (s = e[n]));
        break;
      }
    return i < s ? -1 : s < i ? 1 : 0;
  }),
  (z.isEncoding = function (t) {
    switch (String(t).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }),
  (z.concat = function (t, e) {
    if (!N(t))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (0 === t.length) return z.alloc(0);
    var i;
    if (void 0 === e) for (e = 0, i = 0; i < t.length; ++i) e += t[i].length;
    var s = z.allocUnsafe(e),
      n = 0;
    for (i = 0; i < t.length; ++i) {
      var a = t[i];
      if (!V(a))
        throw new TypeError('"list" argument must be an Array of Buffers');
      (a.copy(s, n), (n += a.length));
    }
    return s;
  }),
  (z.byteLength = W),
  (z.prototype._isBuffer = !0),
  (z.prototype.swap16 = function () {
    var t = this.length;
    if (t % 2 != 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (var e = 0; e < t; e += 2) Y(this, e, e + 1);
    return this;
  }),
  (z.prototype.swap32 = function () {
    var t = this.length;
    if (t % 4 != 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (var e = 0; e < t; e += 4) (Y(this, e, e + 3), Y(this, e + 1, e + 2));
    return this;
  }),
  (z.prototype.swap64 = function () {
    var t = this.length;
    if (t % 8 != 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (var e = 0; e < t; e += 8)
      (Y(this, e, e + 7),
        Y(this, e + 1, e + 6),
        Y(this, e + 2, e + 5),
        Y(this, e + 3, e + 4));
    return this;
  }),
  (z.prototype.toString = function () {
    var t = 0 | this.length;
    return 0 === t
      ? ""
      : 0 === arguments.length
        ? nt(this, 0, t)
        : q.apply(this, arguments);
  }),
  (z.prototype.equals = function (t) {
    if (!V(t)) throw new TypeError("Argument must be a Buffer");
    return this === t || 0 === z.compare(this, t);
  }),
  (z.prototype.inspect = function () {
    var t = "";
    return (
      this.length > 0 &&
        ((t = this.toString("hex", 0, 50).match(/.{2}/g).join(" ")),
        this.length > 50 && (t += " ... ")),
      "<Buffer " + t + ">"
    );
  }),
  (z.prototype.compare = function (t, e, i, s, n) {
    if (!V(t)) throw new TypeError("Argument must be a Buffer");
    if (
      (void 0 === e && (e = 0),
      void 0 === i && (i = t ? t.length : 0),
      void 0 === s && (s = 0),
      void 0 === n && (n = this.length),
      e < 0 || i > t.length || s < 0 || n > this.length)
    )
      throw new RangeError("out of range index");
    if (s >= n && e >= i) return 0;
    if (s >= n) return -1;
    if (e >= i) return 1;
    if (this === t) return 0;
    for (
      var a = (n >>>= 0) - (s >>>= 0),
        r = (i >>>= 0) - (e >>>= 0),
        o = Math.min(a, r),
        h = this.slice(s, n),
        l = t.slice(e, i),
        c = 0;
      c < o;
      ++c
    )
      if (h[c] !== l[c]) {
        ((a = h[c]), (r = l[c]));
        break;
      }
    return a < r ? -1 : r < a ? 1 : 0;
  }),
  (z.prototype.includes = function (t, e, i) {
    return -1 !== this.indexOf(t, e, i);
  }),
  (z.prototype.indexOf = function (t, e, i) {
    return X(this, t, e, i, !0);
  }),
  (z.prototype.lastIndexOf = function (t, e, i) {
    return X(this, t, e, i, !1);
  }),
  (z.prototype.write = function (t, e, i, s) {
    if (void 0 === e) ((s = "utf8"), (i = this.length), (e = 0));
    else if (void 0 === i && "string" == typeof e)
      ((s = e), (i = this.length), (e = 0));
    else {
      if (!isFinite(e))
        throw new Error(
          "Buffer.write(string, encoding, offset[, length]) is no longer supported",
        );
      ((e |= 0),
        isFinite(i)
          ? ((i |= 0), void 0 === s && (s = "utf8"))
          : ((s = i), (i = void 0)));
    }
    var n = this.length - e;
    if (
      ((void 0 === i || i > n) && (i = n),
      (t.length > 0 && (i < 0 || e < 0)) || e > this.length)
    )
      throw new RangeError("Attempt to write outside buffer bounds");
    s || (s = "utf8");
    for (var a = !1; ; )
      switch (s) {
        case "hex":
          return Q(this, t, e, i);
        case "utf8":
        case "utf-8":
          return J(this, t, e, i);
        case "ascii":
          return Z(this, t, e, i);
        case "latin1":
        case "binary":
          return tt(this, t, e, i);
        case "base64":
          return et(this, t, e, i);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return it(this, t, e, i);
        default:
          if (a) throw new TypeError("Unknown encoding: " + s);
          ((s = ("" + s).toLowerCase()), (a = !0));
      }
  }),
  (z.prototype.toJSON = function () {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0),
    };
  }));
var at = 4096;
function rt(t, e, i) {
  var s = "";
  i = Math.min(t.length, i);
  for (var n = e; n < i; ++n) s += String.fromCharCode(127 & t[n]);
  return s;
}
function ot(t, e, i) {
  var s = "";
  i = Math.min(t.length, i);
  for (var n = e; n < i; ++n) s += String.fromCharCode(t[n]);
  return s;
}
function ht(t, e, i) {
  var s = t.length;
  ((!e || e < 0) && (e = 0), (!i || i < 0 || i > s) && (i = s));
  for (var n = "", a = e; a < i; ++a) n += vt(t[a]);
  return n;
}
function lt(t, e, i) {
  for (var s = t.slice(e, i), n = "", a = 0; a < s.length; a += 2)
    n += String.fromCharCode(s[a] + 256 * s[a + 1]);
  return n;
}
function ct(t, e, i) {
  if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
  if (t + e > i) throw new RangeError("Trying to access beyond buffer length");
}
function dt(t, e, i, s, n, a) {
  if (!V(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
  if (e > n || e < a) throw new RangeError('"value" argument is out of bounds');
  if (i + s > t.length) throw new RangeError("Index out of range");
}
function ut(t, e, i, s) {
  e < 0 && (e = 65535 + e + 1);
  for (var n = 0, a = Math.min(t.length - i, 2); n < a; ++n)
    t[i + n] = (e & (255 << (8 * (s ? n : 1 - n)))) >>> (8 * (s ? n : 1 - n));
}
function pt(t, e, i, s) {
  e < 0 && (e = 4294967295 + e + 1);
  for (var n = 0, a = Math.min(t.length - i, 4); n < a; ++n)
    t[i + n] = (e >>> (8 * (s ? n : 3 - n))) & 255;
}
function gt(t, e, i, s, n, a) {
  if (i + s > t.length) throw new RangeError("Index out of range");
  if (i < 0) throw new RangeError("Index out of range");
}
function ft(t, e, i, s, n) {
  return (n || gt(t, 0, i, 4), L(t, e, i, s, 23, 4), i + 4);
}
function mt(t, e, i, s, n) {
  return (n || gt(t, 0, i, 8), L(t, e, i, s, 52, 8), i + 8);
}
((z.prototype.slice = function (t, e) {
  var i,
    s = this.length;
  if (
    ((t = ~~t) < 0 ? (t += s) < 0 && (t = 0) : t > s && (t = s),
    (e = void 0 === e ? s : ~~e) < 0
      ? (e += s) < 0 && (e = 0)
      : e > s && (e = s),
    e < t && (e = t),
    z.TYPED_ARRAY_SUPPORT)
  )
    (i = this.subarray(t, e)).__proto__ = z.prototype;
  else {
    var n = e - t;
    i = new z(n, void 0);
    for (var a = 0; a < n; ++a) i[a] = this[a + t];
  }
  return i;
}),
  (z.prototype.readUIntLE = function (t, e, i) {
    ((t |= 0), (e |= 0), i || ct(t, e, this.length));
    for (var s = this[t], n = 1, a = 0; ++a < e && (n *= 256); )
      s += this[t + a] * n;
    return s;
  }),
  (z.prototype.readUIntBE = function (t, e, i) {
    ((t |= 0), (e |= 0), i || ct(t, e, this.length));
    for (var s = this[t + --e], n = 1; e > 0 && (n *= 256); )
      s += this[t + --e] * n;
    return s;
  }),
  (z.prototype.readUInt8 = function (t, e) {
    return (e || ct(t, 1, this.length), this[t]);
  }),
  (z.prototype.readUInt16LE = function (t, e) {
    return (e || ct(t, 2, this.length), this[t] | (this[t + 1] << 8));
  }),
  (z.prototype.readUInt16BE = function (t, e) {
    return (e || ct(t, 2, this.length), (this[t] << 8) | this[t + 1]);
  }),
  (z.prototype.readUInt32LE = function (t, e) {
    return (
      e || ct(t, 4, this.length),
      (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
        16777216 * this[t + 3]
    );
  }),
  (z.prototype.readUInt32BE = function (t, e) {
    return (
      e || ct(t, 4, this.length),
      16777216 * this[t] +
        ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
    );
  }),
  (z.prototype.readIntLE = function (t, e, i) {
    ((t |= 0), (e |= 0), i || ct(t, e, this.length));
    for (var s = this[t], n = 1, a = 0; ++a < e && (n *= 256); )
      s += this[t + a] * n;
    return (s >= (n *= 128) && (s -= Math.pow(2, 8 * e)), s);
  }),
  (z.prototype.readIntBE = function (t, e, i) {
    ((t |= 0), (e |= 0), i || ct(t, e, this.length));
    for (var s = e, n = 1, a = this[t + --s]; s > 0 && (n *= 256); )
      a += this[t + --s] * n;
    return (a >= (n *= 128) && (a -= Math.pow(2, 8 * e)), a);
  }),
  (z.prototype.readInt8 = function (t, e) {
    return (
      e || ct(t, 1, this.length),
      128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
    );
  }),
  (z.prototype.readInt16LE = function (t, e) {
    e || ct(t, 2, this.length);
    var i = this[t] | (this[t + 1] << 8);
    return 32768 & i ? 4294901760 | i : i;
  }),
  (z.prototype.readInt16BE = function (t, e) {
    e || ct(t, 2, this.length);
    var i = this[t + 1] | (this[t] << 8);
    return 32768 & i ? 4294901760 | i : i;
  }),
  (z.prototype.readInt32LE = function (t, e) {
    return (
      e || ct(t, 4, this.length),
      this[t] | (this[t + 1] << 8) | (this[t + 2] << 16) | (this[t + 3] << 24)
    );
  }),
  (z.prototype.readInt32BE = function (t, e) {
    return (
      e || ct(t, 4, this.length),
      (this[t] << 24) | (this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3]
    );
  }),
  (z.prototype.readFloatLE = function (t, e) {
    return (e || ct(t, 4, this.length), D(this, t, !0, 23, 4));
  }),
  (z.prototype.readFloatBE = function (t, e) {
    return (e || ct(t, 4, this.length), D(this, t, !1, 23, 4));
  }),
  (z.prototype.readDoubleLE = function (t, e) {
    return (e || ct(t, 8, this.length), D(this, t, !0, 52, 8));
  }),
  (z.prototype.readDoubleBE = function (t, e) {
    return (e || ct(t, 8, this.length), D(this, t, !1, 52, 8));
  }),
  (z.prototype.writeUIntLE = function (t, e, i, s) {
    ((t = +t), (e |= 0), (i |= 0), s) ||
      dt(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
    var n = 1,
      a = 0;
    for (this[e] = 255 & t; ++a < i && (n *= 256); )
      this[e + a] = (t / n) & 255;
    return e + i;
  }),
  (z.prototype.writeUIntBE = function (t, e, i, s) {
    ((t = +t), (e |= 0), (i |= 0), s) ||
      dt(this, t, e, i, Math.pow(2, 8 * i) - 1, 0);
    var n = i - 1,
      a = 1;
    for (this[e + n] = 255 & t; --n >= 0 && (a *= 256); )
      this[e + n] = (t / a) & 255;
    return e + i;
  }),
  (z.prototype.writeUInt8 = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 1, 255, 0),
      z.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (z.prototype.writeUInt16LE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 2, 65535, 0),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
        : ut(this, t, e, !0),
      e + 2
    );
  }),
  (z.prototype.writeUInt16BE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 2, 65535, 0),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
        : ut(this, t, e, !1),
      e + 2
    );
  }),
  (z.prototype.writeUInt32LE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 4, 4294967295, 0),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e + 3] = t >>> 24),
          (this[e + 2] = t >>> 16),
          (this[e + 1] = t >>> 8),
          (this[e] = 255 & t))
        : pt(this, t, e, !0),
      e + 4
    );
  }),
  (z.prototype.writeUInt32BE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 4, 4294967295, 0),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t))
        : pt(this, t, e, !1),
      e + 4
    );
  }),
  (z.prototype.writeIntLE = function (t, e, i, s) {
    if (((t = +t), (e |= 0), !s)) {
      var n = Math.pow(2, 8 * i - 1);
      dt(this, t, e, i, n - 1, -n);
    }
    var a = 0,
      r = 1,
      o = 0;
    for (this[e] = 255 & t; ++a < i && (r *= 256); )
      (t < 0 && 0 === o && 0 !== this[e + a - 1] && (o = 1),
        (this[e + a] = (((t / r) >> 0) - o) & 255));
    return e + i;
  }),
  (z.prototype.writeIntBE = function (t, e, i, s) {
    if (((t = +t), (e |= 0), !s)) {
      var n = Math.pow(2, 8 * i - 1);
      dt(this, t, e, i, n - 1, -n);
    }
    var a = i - 1,
      r = 1,
      o = 0;
    for (this[e + a] = 255 & t; --a >= 0 && (r *= 256); )
      (t < 0 && 0 === o && 0 !== this[e + a + 1] && (o = 1),
        (this[e + a] = (((t / r) >> 0) - o) & 255));
    return e + i;
  }),
  (z.prototype.writeInt8 = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 1, 127, -128),
      z.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
      t < 0 && (t = 255 + t + 1),
      (this[e] = 255 & t),
      e + 1
    );
  }),
  (z.prototype.writeInt16LE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 2, 32767, -32768),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
        : ut(this, t, e, !0),
      e + 2
    );
  }),
  (z.prototype.writeInt16BE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 2, 32767, -32768),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
        : ut(this, t, e, !1),
      e + 2
    );
  }),
  (z.prototype.writeInt32LE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 4, 2147483647, -2147483648),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = 255 & t),
          (this[e + 1] = t >>> 8),
          (this[e + 2] = t >>> 16),
          (this[e + 3] = t >>> 24))
        : pt(this, t, e, !0),
      e + 4
    );
  }),
  (z.prototype.writeInt32BE = function (t, e, i) {
    return (
      (t = +t),
      (e |= 0),
      i || dt(this, t, e, 4, 2147483647, -2147483648),
      t < 0 && (t = 4294967295 + t + 1),
      z.TYPED_ARRAY_SUPPORT
        ? ((this[e] = t >>> 24),
          (this[e + 1] = t >>> 16),
          (this[e + 2] = t >>> 8),
          (this[e + 3] = 255 & t))
        : pt(this, t, e, !1),
      e + 4
    );
  }),
  (z.prototype.writeFloatLE = function (t, e, i) {
    return ft(this, t, e, !0, i);
  }),
  (z.prototype.writeFloatBE = function (t, e, i) {
    return ft(this, t, e, !1, i);
  }),
  (z.prototype.writeDoubleLE = function (t, e, i) {
    return mt(this, t, e, !0, i);
  }),
  (z.prototype.writeDoubleBE = function (t, e, i) {
    return mt(this, t, e, !1, i);
  }),
  (z.prototype.copy = function (t, e, i, s) {
    if (
      (i || (i = 0),
      s || 0 === s || (s = this.length),
      e >= t.length && (e = t.length),
      e || (e = 0),
      s > 0 && s < i && (s = i),
      s === i)
    )
      return 0;
    if (0 === t.length || 0 === this.length) return 0;
    if (e < 0) throw new RangeError("targetStart out of bounds");
    if (i < 0 || i >= this.length)
      throw new RangeError("sourceStart out of bounds");
    if (s < 0) throw new RangeError("sourceEnd out of bounds");
    (s > this.length && (s = this.length),
      t.length - e < s - i && (s = t.length - e + i));
    var n,
      a = s - i;
    if (this === t && i < e && e < s)
      for (n = a - 1; n >= 0; --n) t[n + e] = this[n + i];
    else if (a < 1e3 || !z.TYPED_ARRAY_SUPPORT)
      for (n = 0; n < a; ++n) t[n + e] = this[n + i];
    else Uint8Array.prototype.set.call(t, this.subarray(i, i + a), e);
    return a;
  }),
  (z.prototype.fill = function (t, e, i, s) {
    if ("string" == typeof t) {
      if (
        ("string" == typeof e
          ? ((s = e), (e = 0), (i = this.length))
          : "string" == typeof i && ((s = i), (i = this.length)),
        1 === t.length)
      ) {
        var n = t.charCodeAt(0);
        n < 256 && (t = n);
      }
      if (void 0 !== s && "string" != typeof s)
        throw new TypeError("encoding must be a string");
      if ("string" == typeof s && !z.isEncoding(s))
        throw new TypeError("Unknown encoding: " + s);
    } else "number" == typeof t && (t &= 255);
    if (e < 0 || this.length < e || this.length < i)
      throw new RangeError("Out of range index");
    if (i <= e) return this;
    var a;
    if (
      ((e >>>= 0),
      (i = void 0 === i ? this.length : i >>> 0),
      t || (t = 0),
      "number" == typeof t)
    )
      for (a = e; a < i; ++a) this[a] = t;
    else {
      var r = V(t) ? t : At(new z(t, s).toString()),
        o = r.length;
      for (a = 0; a < i - e; ++a) this[a + e] = r[a % o];
    }
    return this;
  }));
var bt = /[^+\/0-9A-Za-z-_]/g;
function vt(t) {
  return t < 16 ? "0" + t.toString(16) : t.toString(16);
}
function At(t, e) {
  var i;
  e = e || 1 / 0;
  for (var s = t.length, n = null, a = [], r = 0; r < s; ++r) {
    if ((i = t.charCodeAt(r)) > 55295 && i < 57344) {
      if (!n) {
        if (i > 56319) {
          (e -= 3) > -1 && a.push(239, 191, 189);
          continue;
        }
        if (r + 1 === s) {
          (e -= 3) > -1 && a.push(239, 191, 189);
          continue;
        }
        n = i;
        continue;
      }
      if (i < 56320) {
        ((e -= 3) > -1 && a.push(239, 191, 189), (n = i));
        continue;
      }
      i = 65536 + (((n - 55296) << 10) | (i - 56320));
    } else n && (e -= 3) > -1 && a.push(239, 191, 189);
    if (((n = null), i < 128)) {
      if ((e -= 1) < 0) break;
      a.push(i);
    } else if (i < 2048) {
      if ((e -= 2) < 0) break;
      a.push((i >> 6) | 192, (63 & i) | 128);
    } else if (i < 65536) {
      if ((e -= 3) < 0) break;
      a.push((i >> 12) | 224, ((i >> 6) & 63) | 128, (63 & i) | 128);
    } else {
      if (!(i < 1114112)) throw new Error("Invalid code point");
      if ((e -= 4) < 0) break;
      a.push(
        (i >> 18) | 240,
        ((i >> 12) & 63) | 128,
        ((i >> 6) & 63) | 128,
        (63 & i) | 128,
      );
    }
  }
  return a;
}
function yt(t) {
  return (function (t) {
    var e, i, s, n, a, r;
    k || P();
    var o = t.length;
    if (o % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    ((a = "=" === t[o - 2] ? 2 : "=" === t[o - 1] ? 1 : 0),
      (r = new M((3 * o) / 4 - a)),
      (s = a > 0 ? o - 4 : o));
    var h = 0;
    for (e = 0, i = 0; e < s; e += 4, i += 3)
      ((n =
        (T[t.charCodeAt(e)] << 18) |
        (T[t.charCodeAt(e + 1)] << 12) |
        (T[t.charCodeAt(e + 2)] << 6) |
        T[t.charCodeAt(e + 3)]),
        (r[h++] = (n >> 16) & 255),
        (r[h++] = (n >> 8) & 255),
        (r[h++] = 255 & n));
    return (
      2 === a
        ? ((n = (T[t.charCodeAt(e)] << 2) | (T[t.charCodeAt(e + 1)] >> 4)),
          (r[h++] = 255 & n))
        : 1 === a &&
          ((n =
            (T[t.charCodeAt(e)] << 10) |
            (T[t.charCodeAt(e + 1)] << 4) |
            (T[t.charCodeAt(e + 2)] >> 2)),
          (r[h++] = (n >> 8) & 255),
          (r[h++] = 255 & n)),
      r
    );
  })(
    (function (t) {
      if (
        (t = (function (t) {
          return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
        })(t).replace(bt, "")).length < 2
      )
        return "";
      for (; t.length % 4 != 0; ) t += "=";
      return t;
    })(t),
  );
}
function wt(t, e, i, s) {
  for (var n = 0; n < s && !(n + i >= e.length || n >= t.length); ++n)
    e[n + i] = t[n];
  return n;
}
function _t(t) {
  return (
    !!t.constructor &&
    "function" == typeof t.constructor.isBuffer &&
    t.constructor.isBuffer(t)
  );
}
var xt = {
    d: (t, e) => {
      for (var i in e)
        xt.o(e, i) &&
          !xt.o(t, i) &&
          Object.defineProperty(t, i, { enumerable: !0, get: e[i] });
    },
    o: (t, e) => Object.prototype.hasOwnProperty.call(t, e),
  },
  Ct = (globalThis.pdfjsLib = {});
xt.d(Ct, {
  AbortException: () => Ne,
  AnnotationEditorLayer: () => Na,
  AnnotationEditorParamsType: () => zt,
  AnnotationEditorType: () => Bt,
  AnnotationEditorUIManager: () => Pi,
  AnnotationLayer: () => _a,
  AnnotationMode: () => Ot,
  ColorPicker: () => Ia,
  DOMSVGFactory: () => Gn,
  DrawLayer: () => Oa,
  FeatureTest: () => He,
  GlobalWorkerOptions: () => Ts,
  ImageKind: () => qt,
  InvalidPDFException: () => Ie,
  MissingPDFException: () => De,
  OPS: () => ve,
  OutputScale: () => wi,
  PDFDataRangeTransport: () => Mn,
  PDFDateString: () => fi,
  PDFWorker: () => In,
  PasswordResponses: () => Ae,
  PermissionFlag: () => Ht,
  PixelsPerInch: () => si,
  RenderingCancelledException: () => ri,
  TextLayer: () => vn,
  UnexpectedResponseException: () => Le,
  Util: () => je,
  VerbosityLevel: () => be,
  XfaLayer: () => Vn,
  build: () => zn,
  createValidAbsoluteUrl: () => Te,
  fetchData: () => ni,
  getDocument: () => En,
  getFilenameFromUrl: () => li,
  getPdfFilenameFromUrl: () => ci,
  getXfaPageViewport: () => mi,
  isDataScheme: () => oi,
  isPdfFile: () => hi,
  noContextMenu: () => pi,
  normalizeUnicode: () => Ve,
  setLayerDimensions: () => yi,
  shadow: () => Me,
  version: () => Bn,
});
const Et = !(
    "object" != typeof E ||
    E + "" != "[object process]" ||
    E.versions.nw ||
    (E.versions.electron && E.type && "browser" !== E.type)
  ),
  St = [1, 0, 0, 1, 0, 0],
  Tt = [0.001, 0, 0, 0.001, 0, 0],
  Mt = 1.35,
  kt = 1,
  Pt = 2,
  Rt = 4,
  It = 16,
  Dt = 32,
  Lt = 64,
  Ft = 128,
  Nt = 256,
  Ot = { DISABLE: 0, ENABLE: 1, ENABLE_FORMS: 2, ENABLE_STORAGE: 3 },
  Bt = { DISABLE: -1, NONE: 0, FREETEXT: 3, HIGHLIGHT: 9, STAMP: 13, INK: 15 },
  zt = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_DEFAULT_COLOR: 32,
    HIGHLIGHT_THICKNESS: 33,
    HIGHLIGHT_FREE: 34,
    HIGHLIGHT_SHOW_ALL: 35,
  },
  Ht = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048,
  },
  Ut = 0,
  jt = 1,
  $t = 2,
  Gt = 3,
  Vt = 3,
  Wt = 4,
  qt = { GRAYSCALE_1BPP: 1, RGB_24BPP: 2, RGBA_32BPP: 3 },
  Yt = 1,
  Xt = 2,
  Kt = 3,
  Qt = 4,
  Jt = 5,
  Zt = 6,
  te = 7,
  ee = 8,
  ie = 9,
  se = 10,
  ne = 11,
  ae = 12,
  re = 13,
  oe = 14,
  he = 15,
  le = 16,
  ce = 17,
  de = 20,
  ue = 1,
  pe = 2,
  ge = 3,
  fe = 4,
  me = 5,
  be = { ERRORS: 0, WARNINGS: 1, INFOS: 5 },
  ve = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93,
  },
  Ae = { NEED_PASSWORD: 1, INCORRECT_PASSWORD: 2 };
let ye = be.WARNINGS;
function we(t) {
  Number.isInteger(t) && (ye = t);
}
function _e() {
  return ye;
}
function xe(t) {
  ye >= be.INFOS && console.log(`Info: ${t}`);
}
function Ce(t) {
  ye >= be.WARNINGS && console.log(`Warning: ${t}`);
}
function Ee(t) {
  throw new Error(t);
}
function Se(t, e) {
  t || Ee(e);
}
function Te(t, e = null, i = null) {
  if (!t) return null;
  try {
    if (i && "string" == typeof t) {
      if (i.addDefaultProtocol && t.startsWith("www.")) {
        const e = t.match(/\./g);
        e?.length >= 2 && (t = `http://${t}`);
      }
      if (i.tryConvertEncoding)
        try {
          t = decodeURIComponent(escape(t));
        } catch {}
    }
    const s = e ? new URL(t, e) : new URL(t);
    if (
      (function (t) {
        switch (t?.protocol) {
          case "http:":
          case "https:":
          case "ftp:":
          case "mailto:":
          case "tel:":
            return !0;
          default:
            return !1;
        }
      })(s)
    )
      return s;
  } catch {}
  return null;
}
function Me(t, e, i, s = !1) {
  return (
    Object.defineProperty(t, e, {
      value: i,
      enumerable: !s,
      configurable: !0,
      writable: !1,
    }),
    i
  );
}
const ke = (function () {
  function t(t, e) {
    ((this.message = t), (this.name = e));
  }
  return ((t.prototype = new Error()), (t.constructor = t), t);
})();
class Pe extends ke {
  constructor(t, e) {
    (super(t, "PasswordException"), (this.code = e));
  }
}
class Re extends ke {
  constructor(t, e) {
    (super(t, "UnknownErrorException"), (this.details = e));
  }
}
class Ie extends ke {
  constructor(t) {
    super(t, "InvalidPDFException");
  }
}
class De extends ke {
  constructor(t) {
    super(t, "MissingPDFException");
  }
}
class Le extends ke {
  constructor(t, e) {
    (super(t, "UnexpectedResponseException"), (this.status = e));
  }
}
class Fe extends ke {
  constructor(t) {
    super(t, "FormatError");
  }
}
class Ne extends ke {
  constructor(t) {
    super(t, "AbortException");
  }
}
function Oe(t) {
  ("object" == typeof t && void 0 !== t?.length) ||
    Ee("Invalid argument for bytesToString");
  const e = t.length,
    i = 8192;
  if (e < i) return String.fromCharCode.apply(null, t);
  const s = [];
  for (let n = 0; n < e; n += i) {
    const a = Math.min(n + i, e),
      r = t.subarray(n, a);
    s.push(String.fromCharCode.apply(null, r));
  }
  return s.join("");
}
function Be(t) {
  "string" != typeof t && Ee("Invalid argument for stringToBytes");
  const e = t.length,
    i = new Uint8Array(e);
  for (let s = 0; s < e; ++s) i[s] = 255 & t.charCodeAt(s);
  return i;
}
function ze(t) {
  const e = Object.create(null);
  for (const [i, s] of t) e[i] = s;
  return e;
}
class He {
  static get isLittleEndian() {
    return Me(
      this,
      "isLittleEndian",
      (function () {
        const t = new Uint8Array(4);
        return ((t[0] = 1), 1 === new Uint32Array(t.buffer, 0, 1)[0]);
      })(),
    );
  }
  static get isEvalSupported() {
    return Me(
      this,
      "isEvalSupported",
      (function () {
        try {
          return (new Function(""), !0);
        } catch {
          return !1;
        }
      })(),
    );
  }
  static get isOffscreenCanvasSupported() {
    return Me(
      this,
      "isOffscreenCanvasSupported",
      "undefined" != typeof OffscreenCanvas,
    );
  }
  static get platform() {
    return "undefined" != typeof navigator &&
      "string" == typeof navigator?.platform
      ? Me(this, "platform", {
          isMac: navigator.platform.includes("Mac"),
          isWindows: navigator.platform.includes("Win"),
          isFirefox:
            "string" == typeof navigator?.userAgent &&
            navigator.userAgent.includes("Firefox"),
        })
      : Me(this, "platform", { isMac: !1, isWindows: !1, isFirefox: !1 });
  }
  static get isCSSRoundSupported() {
    return Me(
      this,
      "isCSSRoundSupported",
      globalThis.CSS?.supports?.("width: round(1.5px, 1px)"),
    );
  }
}
const Ue = Array.from(Array(256).keys(), (t) =>
  t.toString(16).padStart(2, "0"),
);
class je {
  static makeHexColor(t, e, i) {
    return `#${Ue[t]}${Ue[e]}${Ue[i]}`;
  }
  static scaleMinMax(t, e) {
    let i;
    (t[0]
      ? (t[0] < 0 && ((i = e[0]), (e[0] = e[2]), (e[2] = i)),
        (e[0] *= t[0]),
        (e[2] *= t[0]),
        t[3] < 0 && ((i = e[1]), (e[1] = e[3]), (e[3] = i)),
        (e[1] *= t[3]),
        (e[3] *= t[3]))
      : ((i = e[0]),
        (e[0] = e[1]),
        (e[1] = i),
        (i = e[2]),
        (e[2] = e[3]),
        (e[3] = i),
        t[1] < 0 && ((i = e[1]), (e[1] = e[3]), (e[3] = i)),
        (e[1] *= t[1]),
        (e[3] *= t[1]),
        t[2] < 0 && ((i = e[0]), (e[0] = e[2]), (e[2] = i)),
        (e[0] *= t[2]),
        (e[2] *= t[2])),
      (e[0] += t[4]),
      (e[1] += t[5]),
      (e[2] += t[4]),
      (e[3] += t[5]));
  }
  static transform(t, e) {
    return [
      t[0] * e[0] + t[2] * e[1],
      t[1] * e[0] + t[3] * e[1],
      t[0] * e[2] + t[2] * e[3],
      t[1] * e[2] + t[3] * e[3],
      t[0] * e[4] + t[2] * e[5] + t[4],
      t[1] * e[4] + t[3] * e[5] + t[5],
    ];
  }
  static applyTransform(t, e) {
    return [t[0] * e[0] + t[1] * e[2] + e[4], t[0] * e[1] + t[1] * e[3] + e[5]];
  }
  static applyInverseTransform(t, e) {
    const i = e[0] * e[3] - e[1] * e[2];
    return [
      (t[0] * e[3] - t[1] * e[2] + e[2] * e[5] - e[4] * e[3]) / i,
      (-t[0] * e[1] + t[1] * e[0] + e[4] * e[1] - e[5] * e[0]) / i,
    ];
  }
  static getAxialAlignedBoundingBox(t, e) {
    const i = this.applyTransform(t, e),
      s = this.applyTransform(t.slice(2, 4), e),
      n = this.applyTransform([t[0], t[3]], e),
      a = this.applyTransform([t[2], t[1]], e);
    return [
      Math.min(i[0], s[0], n[0], a[0]),
      Math.min(i[1], s[1], n[1], a[1]),
      Math.max(i[0], s[0], n[0], a[0]),
      Math.max(i[1], s[1], n[1], a[1]),
    ];
  }
  static inverseTransform(t) {
    const e = t[0] * t[3] - t[1] * t[2];
    return [
      t[3] / e,
      -t[1] / e,
      -t[2] / e,
      t[0] / e,
      (t[2] * t[5] - t[4] * t[3]) / e,
      (t[4] * t[1] - t[5] * t[0]) / e,
    ];
  }
  static singularValueDecompose2dScale(t) {
    const e = [t[0], t[2], t[1], t[3]],
      i = t[0] * e[0] + t[1] * e[2],
      s = t[0] * e[1] + t[1] * e[3],
      n = t[2] * e[0] + t[3] * e[2],
      a = t[2] * e[1] + t[3] * e[3],
      r = (i + a) / 2,
      o = Math.sqrt((i + a) ** 2 - 4 * (i * a - n * s)) / 2,
      h = r + o || 1,
      l = r - o || 1;
    return [Math.sqrt(h), Math.sqrt(l)];
  }
  static normalizeRect(t) {
    const e = t.slice(0);
    return (
      t[0] > t[2] && ((e[0] = t[2]), (e[2] = t[0])),
      t[1] > t[3] && ((e[1] = t[3]), (e[3] = t[1])),
      e
    );
  }
  static intersect(t, e) {
    const i = Math.max(Math.min(t[0], t[2]), Math.min(e[0], e[2])),
      s = Math.min(Math.max(t[0], t[2]), Math.max(e[0], e[2]));
    if (i > s) return null;
    const n = Math.max(Math.min(t[1], t[3]), Math.min(e[1], e[3])),
      a = Math.min(Math.max(t[1], t[3]), Math.max(e[1], e[3]));
    return n > a ? null : [i, n, s, a];
  }
  static #t(t, e, i, s, n, a, r, o, h, l) {
    if (h <= 0 || h >= 1) return;
    const c = 1 - h,
      d = h * h,
      u = d * h,
      p = c * (c * (c * t + 3 * h * e) + 3 * d * i) + u * s,
      g = c * (c * (c * n + 3 * h * a) + 3 * d * r) + u * o;
    ((l[0] = Math.min(l[0], p)),
      (l[1] = Math.min(l[1], g)),
      (l[2] = Math.max(l[2], p)),
      (l[3] = Math.max(l[3], g)));
  }
  static #e(t, e, i, s, n, a, r, o, h, l, c, d) {
    if (Math.abs(h) < 1e-12)
      return void (
        Math.abs(l) >= 1e-12 && this.#t(t, e, i, s, n, a, r, o, -c / l, d)
      );
    const u = l ** 2 - 4 * c * h;
    if (u < 0) return;
    const p = Math.sqrt(u),
      g = 2 * h;
    (this.#t(t, e, i, s, n, a, r, o, (-l + p) / g, d),
      this.#t(t, e, i, s, n, a, r, o, (-l - p) / g, d));
  }
  static bezierBoundingBox(t, e, i, s, n, a, r, o, h) {
    return (
      h
        ? ((h[0] = Math.min(h[0], t, r)),
          (h[1] = Math.min(h[1], e, o)),
          (h[2] = Math.max(h[2], t, r)),
          (h[3] = Math.max(h[3], e, o)))
        : (h = [
            Math.min(t, r),
            Math.min(e, o),
            Math.max(t, r),
            Math.max(e, o),
          ]),
      this.#e(
        t,
        i,
        n,
        r,
        e,
        s,
        a,
        o,
        3 * (3 * (i - n) - t + r),
        6 * (t - 2 * i + n),
        3 * (i - t),
        h,
      ),
      this.#e(
        t,
        i,
        n,
        r,
        e,
        s,
        a,
        o,
        3 * (3 * (s - a) - e + o),
        6 * (e - 2 * s + a),
        3 * (s - e),
        h,
      ),
      h
    );
  }
}
let $e = null,
  Ge = null;
function Ve(t) {
  return (
    $e ||
      (($e =
        /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
      (Ge = new Map([["ﬅ", "ſt"]]))),
    t.replaceAll($e, (t, e, i) => (e ? e.normalize("NFKC") : Ge.get(i)))
  );
}
const We = "pdfjs_internal_id_",
  qe = 0,
  Ye = 1,
  Xe = 2,
  Ke = 3,
  Qe = 4,
  Je = 5,
  Ze = 6,
  ti = 7,
  ei = 8;
const ii = "http://www.w3.org/2000/svg";
class si {
  static CSS = 96;
  static PDF = 72;
  static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
}
async function ni(t, e = "text") {
  if (ui(t, document.baseURI)) {
    const i = await fetch(t);
    if (!i.ok) throw new Error(i.statusText);
    switch (e) {
      case "arraybuffer":
        return i.arrayBuffer();
      case "blob":
        return i.blob();
      case "json":
        return i.json();
    }
    return i.text();
  }
  return new Promise((i, s) => {
    const n = new XMLHttpRequest();
    (n.open("GET", t, !0),
      (n.responseType = e),
      (n.onreadystatechange = () => {
        if (n.readyState === XMLHttpRequest.DONE)
          if (200 !== n.status && 0 !== n.status) s(new Error(n.statusText));
          else {
            switch (e) {
              case "arraybuffer":
              case "blob":
              case "json":
                return void i(n.response);
            }
            i(n.responseText);
          }
      }),
      n.send(null));
  });
}
class ai {
  constructor({
    viewBox: t,
    scale: e,
    rotation: i,
    offsetX: s = 0,
    offsetY: n = 0,
    dontFlip: a = !1,
  }) {
    ((this.viewBox = t),
      (this.scale = e),
      (this.rotation = i),
      (this.offsetX = s),
      (this.offsetY = n));
    const r = (t[2] + t[0]) / 2,
      o = (t[3] + t[1]) / 2;
    let h, l, c, d, u, p, g, f;
    switch (((i %= 360) < 0 && (i += 360), i)) {
      case 180:
        ((h = -1), (l = 0), (c = 0), (d = 1));
        break;
      case 90:
        ((h = 0), (l = 1), (c = 1), (d = 0));
        break;
      case 270:
        ((h = 0), (l = -1), (c = -1), (d = 0));
        break;
      case 0:
        ((h = 1), (l = 0), (c = 0), (d = -1));
        break;
      default:
        throw new Error(
          "PageViewport: Invalid rotation, must be a multiple of 90 degrees.",
        );
    }
    (a && ((c = -c), (d = -d)),
      0 === h
        ? ((u = Math.abs(o - t[1]) * e + s),
          (p = Math.abs(r - t[0]) * e + n),
          (g = (t[3] - t[1]) * e),
          (f = (t[2] - t[0]) * e))
        : ((u = Math.abs(r - t[0]) * e + s),
          (p = Math.abs(o - t[1]) * e + n),
          (g = (t[2] - t[0]) * e),
          (f = (t[3] - t[1]) * e)),
      (this.transform = [
        h * e,
        l * e,
        c * e,
        d * e,
        u - h * e * r - c * e * o,
        p - l * e * r - d * e * o,
      ]),
      (this.width = g),
      (this.height = f));
  }
  get rawDims() {
    const { viewBox: t } = this;
    return Me(this, "rawDims", {
      pageWidth: t[2] - t[0],
      pageHeight: t[3] - t[1],
      pageX: t[0],
      pageY: t[1],
    });
  }
  clone({
    scale: t = this.scale,
    rotation: e = this.rotation,
    offsetX: i = this.offsetX,
    offsetY: s = this.offsetY,
    dontFlip: n = !1,
  } = {}) {
    return new ai({
      viewBox: this.viewBox.slice(),
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: n,
    });
  }
  convertToViewportPoint(t, e) {
    return je.applyTransform([t, e], this.transform);
  }
  convertToViewportRectangle(t) {
    const e = je.applyTransform([t[0], t[1]], this.transform),
      i = je.applyTransform([t[2], t[3]], this.transform);
    return [e[0], e[1], i[0], i[1]];
  }
  convertToPdfPoint(t, e) {
    return je.applyInverseTransform([t, e], this.transform);
  }
}
class ri extends ke {
  constructor(t, e = 0) {
    (super(t, "RenderingCancelledException"), (this.extraDelay = e));
  }
}
function oi(t) {
  const e = t.length;
  let i = 0;
  for (; i < e && "" === t[i].trim(); ) i++;
  return "data:" === t.substring(i, i + 5).toLowerCase();
}
function hi(t) {
  return "string" == typeof t && /\.pdf$/i.test(t);
}
function li(t) {
  return (([t] = t.split(/[#?]/, 1)), t.substring(t.lastIndexOf("/") + 1));
}
function ci(t, e = "document.pdf") {
  if ("string" != typeof t) return e;
  if (oi(t))
    return (
      Ce('getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.'),
      e
    );
  const i = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i,
    s = /^(?:(?:[^:]+:)?\/\/[^/]+)?([^?#]*)(\?[^#]*)?(#.*)?$/.exec(t);
  let n = i.exec(s[1]) || i.exec(s[2]) || i.exec(s[3]);
  if (n && ((n = n[0]), n.includes("%")))
    try {
      n = i.exec(decodeURIComponent(n))[0];
    } catch {}
  return n || e;
}
class di {
  started = Object.create(null);
  times = [];
  time(t) {
    (t in this.started && Ce(`Timer is already running for ${t}`),
      (this.started[t] = Date.now()));
  }
  timeEnd(t) {
    (t in this.started || Ce(`Timer has not been started for ${t}`),
      this.times.push({ name: t, start: this.started[t], end: Date.now() }),
      delete this.started[t]);
  }
  toString() {
    const t = [];
    let e = 0;
    for (const { name: t } of this.times) e = Math.max(t.length, e);
    for (const { name: i, start: s, end: n } of this.times)
      t.push(`${i.padEnd(e)} ${n - s}ms\n`);
    return t.join("");
  }
}
function ui(t, e) {
  try {
    const { protocol: i } = e ? new URL(t, e) : new URL(t);
    return "http:" === i || "https:" === i;
  } catch {
    return !1;
  }
}
function pi(t) {
  t.preventDefault();
}
function gi(t) {
  console.log("Deprecated API usage: " + t);
}
class fi {
  static #i;
  static toDateObject(t) {
    if (!t || "string" != typeof t) return null;
    this.#i ||= new RegExp(
      "^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?",
    );
    const e = this.#i.exec(t);
    if (!e) return null;
    const i = parseInt(e[1], 10);
    let s = parseInt(e[2], 10);
    s = s >= 1 && s <= 12 ? s - 1 : 0;
    let n = parseInt(e[3], 10);
    n = n >= 1 && n <= 31 ? n : 1;
    let a = parseInt(e[4], 10);
    a = a >= 0 && a <= 23 ? a : 0;
    let r = parseInt(e[5], 10);
    r = r >= 0 && r <= 59 ? r : 0;
    let o = parseInt(e[6], 10);
    o = o >= 0 && o <= 59 ? o : 0;
    const h = e[7] || "Z";
    let l = parseInt(e[8], 10);
    l = l >= 0 && l <= 23 ? l : 0;
    let c = parseInt(e[9], 10) || 0;
    return (
      (c = c >= 0 && c <= 59 ? c : 0),
      "-" === h ? ((a += l), (r += c)) : "+" === h && ((a -= l), (r -= c)),
      new Date(Date.UTC(i, s, n, a, r, o))
    );
  }
}
function mi(t, { scale: e = 1, rotation: i = 0 }) {
  const { width: s, height: n } = t.attributes.style,
    a = [0, 0, parseInt(s), parseInt(n)];
  return new ai({ viewBox: a, scale: e, rotation: i });
}
function bi(t) {
  if (t.startsWith("#")) {
    const e = parseInt(t.slice(1), 16);
    return [(16711680 & e) >> 16, (65280 & e) >> 8, 255 & e];
  }
  return t.startsWith("rgb(")
    ? t
        .slice(4, -1)
        .split(",")
        .map((t) => parseInt(t))
    : t.startsWith("rgba(")
      ? t
          .slice(5, -1)
          .split(",")
          .map((t) => parseInt(t))
          .slice(0, 3)
      : (Ce(`Not a valid color format: "${t}"`), [0, 0, 0]);
}
function vi(t) {
  const { a: e, b: i, c: s, d: n, e: a, f: r } = t.getTransform();
  return [e, i, s, n, a, r];
}
function Ai(t) {
  const { a: e, b: i, c: s, d: n, e: a, f: r } = t.getTransform().invertSelf();
  return [e, i, s, n, a, r];
}
function yi(t, e, i = !1, s = !0) {
  if (e instanceof ai) {
    const { pageWidth: s, pageHeight: n } = e.rawDims,
      { style: a } = t,
      r = He.isCSSRoundSupported,
      o = `var(--scale-factor) * ${s}px`,
      h = `var(--scale-factor) * ${n}px`,
      l = r ? `round(down, ${o}, var(--scale-round-x, 1px))` : `calc(${o})`,
      c = r ? `round(down, ${h}, var(--scale-round-y, 1px))` : `calc(${h})`;
    i && e.rotation % 180 != 0
      ? ((a.width = c), (a.height = l))
      : ((a.width = l), (a.height = c));
  }
  s && t.setAttribute("data-main-rotation", e.rotation);
}
class wi {
  constructor() {
    const t = window.devicePixelRatio || 1;
    ((this.sx = t), (this.sy = t));
  }
  get scaled() {
    return 1 !== this.sx || 1 !== this.sy;
  }
  get symmetric() {
    return this.sx === this.sy;
  }
}
class _i {
  #s = null;
  #n = null;
  #a;
  #r = null;
  #o = null;
  static #h = null;
  constructor(t) {
    ((this.#a = t),
      (_i.#h ||= Object.freeze({
        freetext: "pdfjs-editor-remove-freetext-button",
        highlight: "pdfjs-editor-remove-highlight-button",
        ink: "pdfjs-editor-remove-ink-button",
        stamp: "pdfjs-editor-remove-stamp-button",
      })));
  }
  render() {
    const t = (this.#s = document.createElement("div"));
    (t.classList.add("editToolbar", "hidden"),
      t.setAttribute("role", "toolbar"));
    const e = this.#a._uiManager._signal;
    (t.addEventListener("contextmenu", pi, { signal: e }),
      t.addEventListener("pointerdown", _i.#l, { signal: e }));
    const i = (this.#r = document.createElement("div"));
    ((i.className = "buttons"), t.append(i));
    const s = this.#a.toolbarPosition;
    if (s) {
      const { style: e } = t,
        i = "ltr" === this.#a._uiManager.direction ? 1 - s[0] : s[0];
      ((e.insetInlineEnd = 100 * i + "%"),
        (e.top = `calc(${100 * s[1]}% + var(--editor-toolbar-vert-offset))`));
    }
    return (this.#c(), t);
  }
  get div() {
    return this.#s;
  }
  static #l(t) {
    t.stopPropagation();
  }
  #d(t) {
    ((this.#a._focusEventsAllowed = !1),
      t.preventDefault(),
      t.stopPropagation());
  }
  #u(t) {
    ((this.#a._focusEventsAllowed = !0),
      t.preventDefault(),
      t.stopPropagation());
  }
  #p(t) {
    const e = this.#a._uiManager._signal;
    (t.addEventListener("focusin", this.#d.bind(this), {
      capture: !0,
      signal: e,
    }),
      t.addEventListener("focusout", this.#u.bind(this), {
        capture: !0,
        signal: e,
      }),
      t.addEventListener("contextmenu", pi, { signal: e }));
  }
  hide() {
    (this.#s.classList.add("hidden"), this.#n?.hideDropdown());
  }
  show() {
    (this.#s.classList.remove("hidden"), this.#o?.shown());
  }
  #c() {
    const { editorType: t, _uiManager: e } = this.#a,
      i = document.createElement("button");
    ((i.className = "delete"),
      (i.tabIndex = 0),
      i.setAttribute("data-l10n-id", _i.#h[t]),
      this.#p(i),
      i.addEventListener(
        "click",
        (t) => {
          e.delete();
        },
        { signal: e._signal },
      ),
      this.#r.append(i));
  }
  get #g() {
    const t = document.createElement("div");
    return ((t.className = "divider"), t);
  }
  async addAltText(t) {
    const e = await t.render();
    (this.#p(e), this.#r.prepend(e, this.#g), (this.#o = t));
  }
  addColorPicker(t) {
    this.#n = t;
    const e = t.renderButton();
    (this.#p(e), this.#r.prepend(e, this.#g));
  }
  remove() {
    (this.#s.remove(), this.#n?.destroy(), (this.#n = null));
  }
}
class xi {
  #r = null;
  #s = null;
  #f;
  constructor(t) {
    this.#f = t;
  }
  #m() {
    const t = (this.#s = document.createElement("div"));
    ((t.className = "editToolbar"),
      t.setAttribute("role", "toolbar"),
      t.addEventListener("contextmenu", pi, { signal: this.#f._signal }));
    const e = (this.#r = document.createElement("div"));
    return ((e.className = "buttons"), t.append(e), this.#b(), t);
  }
  #v(t, e) {
    let i = 0,
      s = 0;
    for (const n of t) {
      const t = n.y + n.height;
      if (t < i) continue;
      const a = n.x + (e ? n.width : 0);
      t > i ? ((s = a), (i = t)) : e ? a > s && (s = a) : a < s && (s = a);
    }
    return [e ? 1 - s : s, i];
  }
  show(t, e, i) {
    const [s, n] = this.#v(e, i),
      { style: a } = (this.#s ||= this.#m());
    (t.append(this.#s),
      (a.insetInlineEnd = 100 * s + "%"),
      (a.top = `calc(${100 * n}% + var(--editor-toolbar-vert-offset))`));
  }
  hide() {
    this.#s.remove();
  }
  #b() {
    const t = document.createElement("button");
    ((t.className = "highlightButton"),
      (t.tabIndex = 0),
      t.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button1"));
    const e = document.createElement("span");
    (t.append(e),
      (e.className = "visuallyHidden"),
      e.setAttribute("data-l10n-id", "pdfjs-highlight-floating-button-label"));
    const i = this.#f._signal;
    (t.addEventListener("contextmenu", pi, { signal: i }),
      t.addEventListener(
        "click",
        () => {
          this.#f.highlightSelection("floating_button");
        },
        { signal: i },
      ),
      this.#r.append(t));
  }
}
function Ci(t, e, i) {
  for (const s of i) e.addEventListener(s, t[s].bind(t));
}
class Ei {
  #A = 0;
  get id() {
    return "pdfjs_internal_editor_" + this.#A++;
  }
}
class Si {
  #y = (function () {
    if ("undefined" != typeof crypto && "function" == typeof crypto?.randomUUID)
      return crypto.randomUUID();
    const t = new Uint8Array(32);
    if (
      "undefined" != typeof crypto &&
      "function" == typeof crypto?.getRandomValues
    )
      crypto.getRandomValues(t);
    else for (let e = 0; e < 32; e++) t[e] = Math.floor(255 * Math.random());
    return Oe(t);
  })();
  #A = 0;
  #w = null;
  static get _isSVGFittingCanvas() {
    const t = new OffscreenCanvas(1, 3).getContext("2d", {
        willReadFrequently: !0,
      }),
      e = new Image();
    e.src =
      'data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>';
    return Me(
      this,
      "_isSVGFittingCanvas",
      e
        .decode()
        .then(
          () => (
            t.drawImage(e, 0, 0, 1, 1, 0, 0, 1, 3),
            0 === new Uint32Array(t.getImageData(0, 0, 1, 1).data.buffer)[0]
          ),
        ),
    );
  }
  async #_(t, e) {
    this.#w ||= new Map();
    let i = this.#w.get(t);
    if (null === i) return null;
    if (i?.bitmap) return ((i.refCounter += 1), i);
    try {
      let t;
      if (
        ((i ||= {
          bitmap: null,
          id: `image_${this.#y}_${this.#A++}`,
          refCounter: 0,
          isSvg: !1,
        }),
        "string" == typeof e
          ? ((i.url = e), (t = await ni(e, "blob")))
          : e instanceof File
            ? (t = i.file = e)
            : e instanceof Blob && (t = e),
        "image/svg+xml" === t.type)
      ) {
        const e = Si._isSVGFittingCanvas,
          s = new FileReader(),
          n = new Image(),
          a = new Promise((t, a) => {
            ((n.onload = () => {
              ((i.bitmap = n), (i.isSvg = !0), t());
            }),
              (s.onload = async () => {
                const t = (i.svgUrl = s.result);
                n.src = (await e)
                  ? `${t}#svgView(preserveAspectRatio(none))`
                  : t;
              }),
              (n.onerror = s.onerror = a));
          });
        (s.readAsDataURL(t), await a);
      } else i.bitmap = await createImageBitmap(t);
      i.refCounter = 1;
    } catch (t) {
      (console.error(t), (i = null));
    }
    return (this.#w.set(t, i), i && this.#w.set(i.id, i), i);
  }
  async getFromFile(t) {
    const { lastModified: e, name: i, size: s, type: n } = t;
    return this.#_(`${e}_${i}_${s}_${n}`, t);
  }
  async getFromUrl(t) {
    return this.#_(t, t);
  }
  async getFromBlob(t, e) {
    const i = await e;
    return this.#_(t, i);
  }
  async getFromId(t) {
    this.#w ||= new Map();
    const e = this.#w.get(t);
    if (!e) return null;
    if (e.bitmap) return ((e.refCounter += 1), e);
    if (e.file) return this.getFromFile(e.file);
    if (e.blobPromise) {
      const { blobPromise: t } = e;
      return (delete e.blobPromise, this.getFromBlob(e.id, t));
    }
    return this.getFromUrl(e.url);
  }
  getFromCanvas(t, e) {
    this.#w ||= new Map();
    let i = this.#w.get(t);
    if (i?.bitmap) return ((i.refCounter += 1), i);
    const s = new OffscreenCanvas(e.width, e.height);
    return (
      s.getContext("2d").drawImage(e, 0, 0),
      (i = {
        bitmap: s.transferToImageBitmap(),
        id: `image_${this.#y}_${this.#A++}`,
        refCounter: 1,
        isSvg: !1,
      }),
      this.#w.set(t, i),
      this.#w.set(i.id, i),
      i
    );
  }
  getSvgUrl(t) {
    const e = this.#w.get(t);
    return e?.isSvg ? e.svgUrl : null;
  }
  deleteId(t) {
    this.#w ||= new Map();
    const e = this.#w.get(t);
    if (!e) return;
    if (((e.refCounter -= 1), 0 !== e.refCounter)) return;
    const { bitmap: i } = e;
    if (!e.url && !e.file) {
      const t = new OffscreenCanvas(i.width, i.height);
      (t.getContext("bitmaprenderer").transferFromImageBitmap(i),
        (e.blobPromise = t.convertToBlob()));
    }
    (i.close?.(), (e.bitmap = null));
  }
  isValidId(t) {
    return t.startsWith(`image_${this.#y}_`);
  }
}
class Ti {
  #x = [];
  #C = !1;
  #E;
  #S = -1;
  constructor(t = 128) {
    this.#E = t;
  }
  add({
    cmd: t,
    undo: e,
    post: i,
    mustExec: s,
    type: n = NaN,
    overwriteIfSameType: a = !1,
    keepUndo: r = !1,
  }) {
    if ((s && t(), this.#C)) return;
    const o = { cmd: t, undo: e, post: i, type: n };
    if (-1 === this.#S)
      return (
        this.#x.length > 0 && (this.#x.length = 0),
        (this.#S = 0),
        void this.#x.push(o)
      );
    if (a && this.#x[this.#S].type === n)
      return (
        r && (o.undo = this.#x[this.#S].undo),
        void (this.#x[this.#S] = o)
      );
    const h = this.#S + 1;
    (h === this.#E
      ? this.#x.splice(0, 1)
      : ((this.#S = h), h < this.#x.length && this.#x.splice(h)),
      this.#x.push(o));
  }
  undo() {
    if (-1 === this.#S) return;
    this.#C = !0;
    const { undo: t, post: e } = this.#x[this.#S];
    (t(), e?.(), (this.#C = !1), (this.#S -= 1));
  }
  redo() {
    if (this.#S < this.#x.length - 1) {
      ((this.#S += 1), (this.#C = !0));
      const { cmd: t, post: e } = this.#x[this.#S];
      (t(), e?.(), (this.#C = !1));
    }
  }
  hasSomethingToUndo() {
    return -1 !== this.#S;
  }
  hasSomethingToRedo() {
    return this.#S < this.#x.length - 1;
  }
  destroy() {
    this.#x = null;
  }
}
class Mi {
  constructor(t) {
    ((this.buffer = []),
      (this.callbacks = new Map()),
      (this.allKeys = new Set()));
    const { isMac: e } = He.platform;
    for (const [i, s, n = {}] of t)
      for (const t of i) {
        const i = t.startsWith("mac+");
        e && i
          ? (this.callbacks.set(t.slice(4), { callback: s, options: n }),
            this.allKeys.add(t.split("+").at(-1)))
          : e ||
            i ||
            (this.callbacks.set(t, { callback: s, options: n }),
            this.allKeys.add(t.split("+").at(-1)));
      }
  }
  #T(t) {
    (t.altKey && this.buffer.push("alt"),
      t.ctrlKey && this.buffer.push("ctrl"),
      t.metaKey && this.buffer.push("meta"),
      t.shiftKey && this.buffer.push("shift"),
      this.buffer.push(t.key));
    const e = this.buffer.join("+");
    return ((this.buffer.length = 0), e);
  }
  exec(t, e) {
    if (!this.allKeys.has(e.key)) return;
    const i = this.callbacks.get(this.#T(e));
    if (!i) return;
    const {
      callback: s,
      options: { bubbles: n = !1, args: a = [], checker: r = null },
    } = i;
    (r && !r(t, e)) ||
      (s.bind(t, ...a, e)(), n || (e.stopPropagation(), e.preventDefault()));
  }
}
class ki {
  static _colorsMapping = new Map([
    ["CanvasText", [0, 0, 0]],
    ["Canvas", [255, 255, 255]],
  ]);
  get _colors() {
    const t = new Map([
      ["CanvasText", null],
      ["Canvas", null],
    ]);
    return (
      (function (t) {
        const e = document.createElement("span");
        ((e.style.visibility = "hidden"), document.body.append(e));
        for (const i of t.keys()) {
          e.style.color = i;
          const s = window.getComputedStyle(e).color;
          t.set(i, bi(s));
        }
        e.remove();
      })(t),
      Me(this, "_colors", t)
    );
  }
  convert(t) {
    const e = bi(t);
    if (!window.matchMedia("(forced-colors: active)").matches) return e;
    for (const [t, i] of this._colors)
      if (i.every((t, i) => t === e[i])) return ki._colorsMapping.get(t);
    return e;
  }
  getHexCode(t) {
    const e = this._colors.get(t);
    return e ? je.makeHexColor(...e) : t;
  }
}
class Pi {
  #M = new AbortController();
  #k = null;
  #P = new Map();
  #R = new Map();
  #I = null;
  #D = null;
  #L = null;
  #F = new Ti();
  #N = null;
  #O = 0;
  #B = new Set();
  #z = null;
  #H = null;
  #U = new Set();
  #j = !1;
  #$ = !1;
  #G = !1;
  #V = null;
  #W = null;
  #q = null;
  #Y = null;
  #X = !1;
  #K = null;
  #Q = new Ei();
  #J = !1;
  #Z = !1;
  #tt = null;
  #et = null;
  #it = null;
  #st = null;
  #nt = Bt.NONE;
  #at = new Set();
  #rt = null;
  #ot = null;
  #ht = null;
  #lt = {
    isEditing: !1,
    isEmpty: !0,
    hasSomethingToUndo: !1,
    hasSomethingToRedo: !1,
    hasSelectedEditor: !1,
    hasSelectedText: !1,
  };
  #ct = [0, 0];
  #dt = null;
  #ut = null;
  #pt = null;
  #gt = null;
  static TRANSLATE_SMALL = 1;
  static TRANSLATE_BIG = 10;
  static get _keyboardManager() {
    const t = Pi.prototype,
      e = (t) =>
        t.#ut.contains(document.activeElement) &&
        "BUTTON" !== document.activeElement.tagName &&
        t.hasSomethingToControl(),
      i = (t, { target: e }) => {
        if (e instanceof HTMLInputElement) {
          const { type: t } = e;
          return "text" !== t && "number" !== t;
        }
        return !0;
      },
      s = this.TRANSLATE_SMALL,
      n = this.TRANSLATE_BIG;
    return Me(
      this,
      "_keyboardManager",
      new Mi([
        [["ctrl+a", "mac+meta+a"], t.selectAll, { checker: i }],
        [["ctrl+z", "mac+meta+z"], t.undo, { checker: i }],
        [
          [
            "ctrl+y",
            "ctrl+shift+z",
            "mac+meta+shift+z",
            "ctrl+shift+Z",
            "mac+meta+shift+Z",
          ],
          t.redo,
          { checker: i },
        ],
        [
          [
            "Backspace",
            "alt+Backspace",
            "ctrl+Backspace",
            "shift+Backspace",
            "mac+Backspace",
            "mac+alt+Backspace",
            "mac+ctrl+Backspace",
            "Delete",
            "ctrl+Delete",
            "shift+Delete",
            "mac+Delete",
          ],
          t.delete,
          { checker: i },
        ],
        [
          ["Enter", "mac+Enter"],
          t.addNewEditorFromKeyboard,
          {
            checker: (t, { target: e }) =>
              !(e instanceof HTMLButtonElement) &&
              t.#ut.contains(e) &&
              !t.isEnterHandled,
          },
        ],
        [
          [" ", "mac+ "],
          t.addNewEditorFromKeyboard,
          {
            checker: (t, { target: e }) =>
              !(e instanceof HTMLButtonElement) &&
              t.#ut.contains(document.activeElement),
          },
        ],
        [["Escape", "mac+Escape"], t.unselectAll],
        [
          ["ArrowLeft", "mac+ArrowLeft"],
          t.translateSelectedEditors,
          { args: [-s, 0], checker: e },
        ],
        [
          ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
          t.translateSelectedEditors,
          { args: [-n, 0], checker: e },
        ],
        [
          ["ArrowRight", "mac+ArrowRight"],
          t.translateSelectedEditors,
          { args: [s, 0], checker: e },
        ],
        [
          ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
          t.translateSelectedEditors,
          { args: [n, 0], checker: e },
        ],
        [
          ["ArrowUp", "mac+ArrowUp"],
          t.translateSelectedEditors,
          { args: [0, -s], checker: e },
        ],
        [
          ["ctrl+ArrowUp", "mac+shift+ArrowUp"],
          t.translateSelectedEditors,
          { args: [0, -n], checker: e },
        ],
        [
          ["ArrowDown", "mac+ArrowDown"],
          t.translateSelectedEditors,
          { args: [0, s], checker: e },
        ],
        [
          ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
          t.translateSelectedEditors,
          { args: [0, n], checker: e },
        ],
      ]),
    );
  }
  constructor(t, e, i, s, n, a, r, o, h, l, c) {
    const d = (this._signal = this.#M.signal);
    ((this.#ut = t),
      (this.#pt = e),
      (this.#I = i),
      (this._eventBus = s),
      s._on("editingaction", this.onEditingAction.bind(this), { signal: d }),
      s._on("pagechanging", this.onPageChanging.bind(this), { signal: d }),
      s._on("scalechanging", this.onScaleChanging.bind(this), { signal: d }),
      s._on("rotationchanging", this.onRotationChanging.bind(this), {
        signal: d,
      }),
      s._on("setpreference", this.onSetPreference.bind(this), { signal: d }),
      s._on(
        "switchannotationeditorparams",
        (t) => this.updateParams(t.type, t.value),
        { signal: d },
      ),
      this.#ft(),
      this.#mt(),
      this.#bt(),
      (this.#D = n.annotationStorage),
      (this.#V = n.filterFactory),
      (this.#ot = a),
      (this.#Y = r || null),
      (this.#j = o),
      (this.#$ = h),
      (this.#G = l),
      (this.#st = c || null),
      (this.viewParameters = { realScale: si.PDF_TO_CSS_UNITS, rotation: 0 }),
      (this.isShiftKeyDown = !1));
  }
  destroy() {
    (this.#gt?.resolve(),
      (this.#gt = null),
      this.#M?.abort(),
      (this.#M = null),
      (this._signal = null));
    for (const t of this.#R.values()) t.destroy();
    (this.#R.clear(),
      this.#P.clear(),
      this.#U.clear(),
      (this.#k = null),
      this.#at.clear(),
      this.#F.destroy(),
      this.#I?.destroy(),
      this.#K?.hide(),
      (this.#K = null),
      this.#W && (clearTimeout(this.#W), (this.#W = null)),
      this.#dt && (clearTimeout(this.#dt), (this.#dt = null)));
  }
  combinedSignal(t) {
    return AbortSignal.any([this._signal, t.signal]);
  }
  get mlManager() {
    return this.#st;
  }
  get useNewAltTextFlow() {
    return this.#$;
  }
  get useNewAltTextWhenAddingImage() {
    return this.#G;
  }
  get hcmFilter() {
    return Me(
      this,
      "hcmFilter",
      this.#ot
        ? this.#V.addHCMFilter(this.#ot.foreground, this.#ot.background)
        : "none",
    );
  }
  get direction() {
    return Me(this, "direction", getComputedStyle(this.#ut).direction);
  }
  get highlightColors() {
    return Me(
      this,
      "highlightColors",
      this.#Y
        ? new Map(
            this.#Y.split(",").map((t) => t.split("=").map((t) => t.trim())),
          )
        : null,
    );
  }
  get highlightColorNames() {
    return Me(
      this,
      "highlightColorNames",
      this.highlightColors
        ? new Map(Array.from(this.highlightColors, (t) => t.reverse()))
        : null,
    );
  }
  setMainHighlightColorPicker(t) {
    this.#it = t;
  }
  editAltText(t, e = !1) {
    this.#I?.editAltText(this, t, e);
  }
  switchToMode(t, e) {
    (this._eventBus.on("annotationeditormodechanged", e, {
      once: !0,
      signal: this._signal,
    }),
      this._eventBus.dispatch("showannotationeditorui", {
        source: this,
        mode: t,
      }));
  }
  setPreference(t, e) {
    this._eventBus.dispatch("setpreference", {
      source: this,
      name: t,
      value: e,
    });
  }
  onSetPreference({ name: t, value: e }) {
    if ("enableNewAltTextWhenAddingImage" === t) this.#G = e;
  }
  onPageChanging({ pageNumber: t }) {
    this.#O = t - 1;
  }
  focusMainContainer() {
    this.#ut.focus();
  }
  findParent(t, e) {
    for (const i of this.#R.values()) {
      const { x: s, y: n, width: a, height: r } = i.div.getBoundingClientRect();
      if (t >= s && t <= s + a && e >= n && e <= n + r) return i;
    }
    return null;
  }
  disableUserSelect(t = !1) {
    this.#pt.classList.toggle("noUserSelect", t);
  }
  addShouldRescale(t) {
    this.#U.add(t);
  }
  removeShouldRescale(t) {
    this.#U.delete(t);
  }
  onScaleChanging({ scale: t }) {
    (this.commitOrRemove(),
      (this.viewParameters.realScale = t * si.PDF_TO_CSS_UNITS));
    for (const t of this.#U) t.onScaleChanging();
  }
  onRotationChanging({ pagesRotation: t }) {
    (this.commitOrRemove(), (this.viewParameters.rotation = t));
  }
  #vt({ anchorNode: t }) {
    return t.nodeType === Node.TEXT_NODE ? t.parentElement : t;
  }
  #At(t) {
    const { currentLayer: e } = this;
    if (e.hasTextLayer(t)) return e;
    for (const e of this.#R.values()) if (e.hasTextLayer(t)) return e;
    return null;
  }
  highlightSelection(t = "") {
    const e = document.getSelection();
    if (!e || e.isCollapsed) return;
    const { anchorNode: i, anchorOffset: s, focusNode: n, focusOffset: a } = e,
      r = e.toString(),
      o = this.#vt(e).closest(".textLayer"),
      h = this.getSelectionBoxes(o);
    if (!h) return;
    e.empty();
    const l = this.#At(o),
      c = this.#nt === Bt.NONE,
      d = () => {
        (l?.createAndAddNewEditor({ x: 0, y: 0 }, !1, {
          methodOfCreation: t,
          boxes: h,
          anchorNode: i,
          anchorOffset: s,
          focusNode: n,
          focusOffset: a,
          text: r,
        }),
          c && this.showAllEditors("highlight", !0, !0));
      };
    c ? this.switchToMode(Bt.HIGHLIGHT, d) : d();
  }
  #yt() {
    const t = document.getSelection();
    if (!t || t.isCollapsed) return;
    const e = this.#vt(t).closest(".textLayer"),
      i = this.getSelectionBoxes(e);
    i &&
      ((this.#K ||= new xi(this)),
      this.#K.show(e, i, "ltr" === this.direction));
  }
  addToAnnotationStorage(t) {
    t.isEmpty() || !this.#D || this.#D.has(t.id) || this.#D.setValue(t.id, t);
  }
  #wt() {
    const t = document.getSelection();
    if (!t || t.isCollapsed)
      return void (
        this.#rt &&
        (this.#K?.hide(), (this.#rt = null), this.#_t({ hasSelectedText: !1 }))
      );
    const { anchorNode: e } = t;
    if (e === this.#rt) return;
    const i = this.#vt(t).closest(".textLayer");
    if (i) {
      if (
        (this.#K?.hide(),
        (this.#rt = e),
        this.#_t({ hasSelectedText: !0 }),
        (this.#nt === Bt.HIGHLIGHT || this.#nt === Bt.NONE) &&
          (this.#nt === Bt.HIGHLIGHT &&
            this.showAllEditors("highlight", !0, !0),
          (this.#X = this.isShiftKeyDown),
          !this.isShiftKeyDown))
      ) {
        const t = this.#nt === Bt.HIGHLIGHT ? this.#At(i) : null;
        t?.toggleDrawing();
        const e = new AbortController(),
          s = this.combinedSignal(e),
          n = (i) => {
            ("pointerup" === i.type && 0 !== i.button) ||
              (e.abort(),
              t?.toggleDrawing(!0),
              "pointerup" === i.type && this.#xt("main_toolbar"));
          };
        (window.addEventListener("pointerup", n, { signal: s }),
          window.addEventListener("blur", n, { signal: s }));
      }
    } else
      this.#rt &&
        (this.#K?.hide(), (this.#rt = null), this.#_t({ hasSelectedText: !1 }));
  }
  #xt(t = "") {
    this.#nt === Bt.HIGHLIGHT
      ? this.highlightSelection(t)
      : this.#j && this.#yt();
  }
  #ft() {
    document.addEventListener("selectionchange", this.#wt.bind(this), {
      signal: this._signal,
    });
  }
  #Ct() {
    if (this.#q) return;
    this.#q = new AbortController();
    const t = this.combinedSignal(this.#q);
    (window.addEventListener("focus", this.focus.bind(this), { signal: t }),
      window.addEventListener("blur", this.blur.bind(this), { signal: t }));
  }
  #Et() {
    (this.#q?.abort(), (this.#q = null));
  }
  blur() {
    if (
      ((this.isShiftKeyDown = !1),
      this.#X && ((this.#X = !1), this.#xt("main_toolbar")),
      !this.hasSelection)
    )
      return;
    const { activeElement: t } = document;
    for (const e of this.#at)
      if (e.div.contains(t)) {
        ((this.#et = [e, t]), (e._focusEventsAllowed = !1));
        break;
      }
  }
  focus() {
    if (!this.#et) return;
    const [t, e] = this.#et;
    ((this.#et = null),
      e.addEventListener(
        "focusin",
        () => {
          t._focusEventsAllowed = !0;
        },
        { once: !0, signal: this._signal },
      ),
      e.focus());
  }
  #bt() {
    if (this.#tt) return;
    this.#tt = new AbortController();
    const t = this.combinedSignal(this.#tt);
    (window.addEventListener("keydown", this.keydown.bind(this), { signal: t }),
      window.addEventListener("keyup", this.keyup.bind(this), { signal: t }));
  }
  #St() {
    (this.#tt?.abort(), (this.#tt = null));
  }
  #Tt() {
    if (this.#N) return;
    this.#N = new AbortController();
    const t = this.combinedSignal(this.#N);
    (document.addEventListener("copy", this.copy.bind(this), { signal: t }),
      document.addEventListener("cut", this.cut.bind(this), { signal: t }),
      document.addEventListener("paste", this.paste.bind(this), { signal: t }));
  }
  #Mt() {
    (this.#N?.abort(), (this.#N = null));
  }
  #mt() {
    const t = this._signal;
    (document.addEventListener("dragover", this.dragOver.bind(this), {
      signal: t,
    }),
      document.addEventListener("drop", this.drop.bind(this), { signal: t }));
  }
  addEditListeners() {
    (this.#bt(), this.#Tt());
  }
  removeEditListeners() {
    (this.#St(), this.#Mt());
  }
  dragOver(t) {
    for (const { type: e } of t.dataTransfer.items)
      for (const i of this.#H)
        if (i.isHandlingMimeForPasting(e))
          return (
            (t.dataTransfer.dropEffect = "copy"),
            void t.preventDefault()
          );
  }
  drop(t) {
    for (const e of t.dataTransfer.items)
      for (const i of this.#H)
        if (i.isHandlingMimeForPasting(e.type))
          return (i.paste(e, this.currentLayer), void t.preventDefault());
  }
  copy(t) {
    if ((t.preventDefault(), this.#k?.commitOrRemove(), !this.hasSelection))
      return;
    const e = [];
    for (const t of this.#at) {
      const i = t.serialize(!0);
      i && e.push(i);
    }
    0 !== e.length &&
      t.clipboardData.setData("application/pdfjs", JSON.stringify(e));
  }
  cut(t) {
    (this.copy(t), this.delete());
  }
  async paste(t) {
    t.preventDefault();
    const { clipboardData: e } = t;
    for (const t of e.items)
      for (const e of this.#H)
        if (e.isHandlingMimeForPasting(t.type))
          return void e.paste(t, this.currentLayer);
    let i = e.getData("application/pdfjs");
    if (!i) return;
    try {
      i = JSON.parse(i);
    } catch (t) {
      return void Ce(`paste: "${t.message}".`);
    }
    if (!Array.isArray(i)) return;
    this.unselectAll();
    const s = this.currentLayer;
    try {
      const t = [];
      for (const e of i) {
        const i = await s.deserialize(e);
        if (!i) return;
        t.push(i);
      }
      const e = () => {
          for (const e of t) this.#kt(e);
          this.#Pt(t);
        },
        n = () => {
          for (const e of t) e.remove();
        };
      this.addCommands({ cmd: e, undo: n, mustExec: !0 });
    } catch (t) {
      Ce(`paste: "${t.message}".`);
    }
  }
  keydown(t) {
    (this.isShiftKeyDown || "Shift" !== t.key || (this.isShiftKeyDown = !0),
      this.#nt === Bt.NONE ||
        this.isEditorHandlingKeyboard ||
        Pi._keyboardManager.exec(this, t));
  }
  keyup(t) {
    this.isShiftKeyDown &&
      "Shift" === t.key &&
      ((this.isShiftKeyDown = !1),
      this.#X && ((this.#X = !1), this.#xt("main_toolbar")));
  }
  onEditingAction({ name: t }) {
    switch (t) {
      case "undo":
      case "redo":
      case "delete":
      case "selectAll":
        this[t]();
        break;
      case "highlightSelection":
        this.highlightSelection("context_menu");
    }
  }
  #_t(t) {
    Object.entries(t).some(([t, e]) => this.#lt[t] !== e) &&
      (this._eventBus.dispatch("annotationeditorstateschanged", {
        source: this,
        details: Object.assign(this.#lt, t),
      }),
      this.#nt === Bt.HIGHLIGHT &&
        !1 === t.hasSelectedEditor &&
        this.#Rt([[zt.HIGHLIGHT_FREE, !0]]));
  }
  #Rt(t) {
    this._eventBus.dispatch("annotationeditorparamschanged", {
      source: this,
      details: t,
    });
  }
  setEditingState(t) {
    t
      ? (this.#Ct(),
        this.#Tt(),
        this.#_t({
          isEditing: this.#nt !== Bt.NONE,
          isEmpty: this.#It(),
          hasSomethingToUndo: this.#F.hasSomethingToUndo(),
          hasSomethingToRedo: this.#F.hasSomethingToRedo(),
          hasSelectedEditor: !1,
        }))
      : (this.#Et(),
        this.#Mt(),
        this.#_t({ isEditing: !1 }),
        this.disableUserSelect(!1));
  }
  registerEditorTypes(t) {
    if (!this.#H) {
      this.#H = t;
      for (const t of this.#H) this.#Rt(t.defaultPropertiesToUpdate);
    }
  }
  getId() {
    return this.#Q.id;
  }
  get currentLayer() {
    return this.#R.get(this.#O);
  }
  getLayer(t) {
    return this.#R.get(t);
  }
  get currentPageIndex() {
    return this.#O;
  }
  addLayer(t) {
    (this.#R.set(t.pageIndex, t), this.#J ? t.enable() : t.disable());
  }
  removeLayer(t) {
    this.#R.delete(t.pageIndex);
  }
  async updateMode(t, e = null, i = !1) {
    if (this.#nt !== t && (!this.#gt || (await this.#gt.promise, this.#gt))) {
      if (((this.#gt = Promise.withResolvers()), (this.#nt = t), t === Bt.NONE))
        return (this.setEditingState(!1), this.#Dt(), void this.#gt.resolve());
      (this.setEditingState(!0), await this.#Lt(), this.unselectAll());
      for (const e of this.#R.values()) e.updateMode(t);
      if (!e)
        return (i && this.addNewEditorFromKeyboard(), void this.#gt.resolve());
      for (const t of this.#P.values())
        t.annotationElementId === e
          ? (this.setSelected(t), t.enterInEditMode())
          : t.unselect();
      this.#gt.resolve();
    }
  }
  addNewEditorFromKeyboard() {
    this.currentLayer.canCreateNewEmptyEditor() &&
      this.currentLayer.addNewEditor();
  }
  updateToolbar(t) {
    t !== this.#nt &&
      this._eventBus.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
      });
  }
  updateParams(t, e) {
    if (this.#H) {
      switch (t) {
        case zt.CREATE:
          return void this.currentLayer.addNewEditor();
        case zt.HIGHLIGHT_DEFAULT_COLOR:
          this.#it?.updateColor(e);
          break;
        case zt.HIGHLIGHT_SHOW_ALL:
          (this._eventBus.dispatch("reporttelemetry", {
            source: this,
            details: {
              type: "editing",
              data: { type: "highlight", action: "toggle_visibility" },
            },
          }),
            (this.#ht ||= new Map()).set(t, e),
            this.showAllEditors("highlight", e));
      }
      for (const i of this.#at) i.updateParams(t, e);
      for (const i of this.#H) i.updateDefaultParams(t, e);
    }
  }
  showAllEditors(t, e, i = !1) {
    for (const i of this.#P.values()) i.editorType === t && i.show(e);
    (this.#ht?.get(zt.HIGHLIGHT_SHOW_ALL) ?? !0) !== e &&
      this.#Rt([[zt.HIGHLIGHT_SHOW_ALL, e]]);
  }
  enableWaiting(t = !1) {
    if (this.#Z !== t) {
      this.#Z = t;
      for (const e of this.#R.values())
        (t ? e.disableClick() : e.enableClick(),
          e.div.classList.toggle("waiting", t));
    }
  }
  async #Lt() {
    if (!this.#J) {
      this.#J = !0;
      const t = [];
      for (const e of this.#R.values()) t.push(e.enable());
      await Promise.all(t);
      for (const t of this.#P.values()) t.enable();
    }
  }
  #Dt() {
    if ((this.unselectAll(), this.#J)) {
      this.#J = !1;
      for (const t of this.#R.values()) t.disable();
      for (const t of this.#P.values()) t.disable();
    }
  }
  getEditors(t) {
    const e = [];
    for (const i of this.#P.values()) i.pageIndex === t && e.push(i);
    return e;
  }
  getEditor(t) {
    return this.#P.get(t);
  }
  addEditor(t) {
    this.#P.set(t.id, t);
  }
  removeEditor(t) {
    (t.div.contains(document.activeElement) &&
      (this.#W && clearTimeout(this.#W),
      (this.#W = setTimeout(() => {
        (this.focusMainContainer(), (this.#W = null));
      }, 0))),
      this.#P.delete(t.id),
      this.unselect(t),
      (t.annotationElementId && this.#B.has(t.annotationElementId)) ||
        this.#D?.remove(t.id));
  }
  addDeletedAnnotationElement(t) {
    (this.#B.add(t.annotationElementId),
      this.addChangedExistingAnnotation(t),
      (t.deleted = !0));
  }
  isDeletedAnnotationElement(t) {
    return this.#B.has(t);
  }
  removeDeletedAnnotationElement(t) {
    (this.#B.delete(t.annotationElementId),
      this.removeChangedExistingAnnotation(t),
      (t.deleted = !1));
  }
  #kt(t) {
    const e = this.#R.get(t.pageIndex);
    e ? e.addOrRebuild(t) : (this.addEditor(t), this.addToAnnotationStorage(t));
  }
  setActiveEditor(t) {
    this.#k !== t && ((this.#k = t), t && this.#Rt(t.propertiesToUpdate));
  }
  get #Ft() {
    let t = null;
    for (t of this.#at);
    return t;
  }
  updateUI(t) {
    this.#Ft === t && this.#Rt(t.propertiesToUpdate);
  }
  toggleSelected(t) {
    if (this.#at.has(t))
      return (
        this.#at.delete(t),
        t.unselect(),
        void this.#_t({ hasSelectedEditor: this.hasSelection })
      );
    (this.#at.add(t),
      t.select(),
      this.#Rt(t.propertiesToUpdate),
      this.#_t({ hasSelectedEditor: !0 }));
  }
  setSelected(t) {
    for (const e of this.#at) e !== t && e.unselect();
    (this.#at.clear(),
      this.#at.add(t),
      t.select(),
      this.#Rt(t.propertiesToUpdate),
      this.#_t({ hasSelectedEditor: !0 }));
  }
  isSelected(t) {
    return this.#at.has(t);
  }
  get firstSelectedEditor() {
    return this.#at.values().next().value;
  }
  unselect(t) {
    (t.unselect(),
      this.#at.delete(t),
      this.#_t({ hasSelectedEditor: this.hasSelection }));
  }
  get hasSelection() {
    return 0 !== this.#at.size;
  }
  get isEnterHandled() {
    return 1 === this.#at.size && this.firstSelectedEditor.isEnterHandled;
  }
  undo() {
    (this.#F.undo(),
      this.#_t({
        hasSomethingToUndo: this.#F.hasSomethingToUndo(),
        hasSomethingToRedo: !0,
        isEmpty: this.#It(),
      }));
  }
  redo() {
    (this.#F.redo(),
      this.#_t({
        hasSomethingToUndo: !0,
        hasSomethingToRedo: this.#F.hasSomethingToRedo(),
        isEmpty: this.#It(),
      }));
  }
  addCommands(t) {
    (this.#F.add(t),
      this.#_t({
        hasSomethingToUndo: !0,
        hasSomethingToRedo: !1,
        isEmpty: this.#It(),
      }));
  }
  #It() {
    if (0 === this.#P.size) return !0;
    if (1 === this.#P.size)
      for (const t of this.#P.values()) return t.isEmpty();
    return !1;
  }
  delete() {
    if ((this.commitOrRemove(), !this.hasSelection)) return;
    const t = [...this.#at];
    this.addCommands({
      cmd: () => {
        for (const e of t) e.remove();
      },
      undo: () => {
        for (const e of t) this.#kt(e);
      },
      mustExec: !0,
    });
  }
  commitOrRemove() {
    this.#k?.commitOrRemove();
  }
  hasSomethingToControl() {
    return this.#k || this.hasSelection;
  }
  #Pt(t) {
    for (const t of this.#at) t.unselect();
    this.#at.clear();
    for (const e of t) e.isEmpty() || (this.#at.add(e), e.select());
    this.#_t({ hasSelectedEditor: this.hasSelection });
  }
  selectAll() {
    for (const t of this.#at) t.commit();
    this.#Pt(this.#P.values());
  }
  unselectAll() {
    if (
      (!this.#k || (this.#k.commitOrRemove(), this.#nt === Bt.NONE)) &&
      this.hasSelection
    ) {
      for (const t of this.#at) t.unselect();
      (this.#at.clear(), this.#_t({ hasSelectedEditor: !1 }));
    }
  }
  translateSelectedEditors(t, e, i = !1) {
    if ((i || this.commitOrRemove(), !this.hasSelection)) return;
    ((this.#ct[0] += t), (this.#ct[1] += e));
    const [s, n] = this.#ct,
      a = [...this.#at];
    (this.#dt && clearTimeout(this.#dt),
      (this.#dt = setTimeout(() => {
        ((this.#dt = null),
          (this.#ct[0] = this.#ct[1] = 0),
          this.addCommands({
            cmd: () => {
              for (const t of a) this.#P.has(t.id) && t.translateInPage(s, n);
            },
            undo: () => {
              for (const t of a) this.#P.has(t.id) && t.translateInPage(-s, -n);
            },
            mustExec: !1,
          }));
      }, 1e3)));
    for (const i of a) i.translateInPage(t, e);
  }
  setUpDragSession() {
    if (this.hasSelection) {
      (this.disableUserSelect(!0), (this.#z = new Map()));
      for (const t of this.#at)
        this.#z.set(t, {
          savedX: t.x,
          savedY: t.y,
          savedPageIndex: t.pageIndex,
          newX: 0,
          newY: 0,
          newPageIndex: -1,
        });
    }
  }
  endDragSession() {
    if (!this.#z) return !1;
    this.disableUserSelect(!1);
    const t = this.#z;
    this.#z = null;
    let e = !1;
    for (const [{ x: i, y: s, pageIndex: n }, a] of t)
      ((a.newX = i),
        (a.newY = s),
        (a.newPageIndex = n),
        (e ||= i !== a.savedX || s !== a.savedY || n !== a.savedPageIndex));
    if (!e) return !1;
    const i = (t, e, i, s) => {
      if (this.#P.has(t.id)) {
        const n = this.#R.get(s);
        n
          ? t._setParentAndPosition(n, e, i)
          : ((t.pageIndex = s), (t.x = e), (t.y = i));
      }
    };
    return (
      this.addCommands({
        cmd: () => {
          for (const [e, { newX: s, newY: n, newPageIndex: a }] of t)
            i(e, s, n, a);
        },
        undo: () => {
          for (const [e, { savedX: s, savedY: n, savedPageIndex: a }] of t)
            i(e, s, n, a);
        },
        mustExec: !0,
      }),
      !0
    );
  }
  dragSelectedEditors(t, e) {
    if (this.#z) for (const i of this.#z.keys()) i.drag(t, e);
  }
  rebuild(t) {
    if (null === t.parent) {
      const e = this.getLayer(t.pageIndex);
      e
        ? (e.changeParent(t), e.addOrRebuild(t))
        : (this.addEditor(t), this.addToAnnotationStorage(t), t.rebuild());
    } else t.parent.addOrRebuild(t);
  }
  get isEditorHandlingKeyboard() {
    return (
      this.getActive()?.shouldGetKeyboardEvents() ||
      (1 === this.#at.size &&
        this.firstSelectedEditor.shouldGetKeyboardEvents())
    );
  }
  isActive(t) {
    return this.#k === t;
  }
  getActive() {
    return this.#k;
  }
  getMode() {
    return this.#nt;
  }
  get imageManager() {
    return Me(this, "imageManager", new Si());
  }
  getSelectionBoxes(t) {
    if (!t) return null;
    const e = document.getSelection();
    for (let i = 0, s = e.rangeCount; i < s; i++)
      if (!t.contains(e.getRangeAt(i).commonAncestorContainer)) return null;
    const { x: i, y: s, width: n, height: a } = t.getBoundingClientRect();
    let r;
    switch (t.getAttribute("data-main-rotation")) {
      case "90":
        r = (t, e, r, o) => ({
          x: (e - s) / a,
          y: 1 - (t + r - i) / n,
          width: o / a,
          height: r / n,
        });
        break;
      case "180":
        r = (t, e, r, o) => ({
          x: 1 - (t + r - i) / n,
          y: 1 - (e + o - s) / a,
          width: r / n,
          height: o / a,
        });
        break;
      case "270":
        r = (t, e, r, o) => ({
          x: 1 - (e + o - s) / a,
          y: (t - i) / n,
          width: o / a,
          height: r / n,
        });
        break;
      default:
        r = (t, e, r, o) => ({
          x: (t - i) / n,
          y: (e - s) / a,
          width: r / n,
          height: o / a,
        });
    }
    const o = [];
    for (let t = 0, i = e.rangeCount; t < i; t++) {
      const i = e.getRangeAt(t);
      if (!i.collapsed)
        for (const { x: t, y: e, width: s, height: n } of i.getClientRects())
          0 !== s && 0 !== n && o.push(r(t, e, s, n));
    }
    return 0 === o.length ? null : o;
  }
  addChangedExistingAnnotation({ annotationElementId: t, id: e }) {
    (this.#L ||= new Map()).set(t, e);
  }
  removeChangedExistingAnnotation({ annotationElementId: t }) {
    this.#L?.delete(t);
  }
  renderAnnotationElement(t) {
    const e = this.#L?.get(t.data.id);
    if (!e) return;
    const i = this.#D.getRawValue(e);
    i &&
      (this.#nt !== Bt.NONE || i.hasBeenModified) &&
      i.renderAnnotationElement(t);
  }
}
class Ri {
  #o = null;
  #Nt = !1;
  #Ot = null;
  #Bt = null;
  #zt = null;
  #Ht = null;
  #Ut = !1;
  #jt = null;
  #a = null;
  #$t = null;
  #Gt = null;
  #Vt = !1;
  static #Wt = null;
  static _l10n = null;
  constructor(t) {
    ((this.#a = t),
      (this.#Vt = t._uiManager.useNewAltTextFlow),
      (Ri.#Wt ||= Object.freeze({
        added: "pdfjs-editor-new-alt-text-added-button",
        "added-label": "pdfjs-editor-new-alt-text-added-button-label",
        missing: "pdfjs-editor-new-alt-text-missing-button",
        "missing-label": "pdfjs-editor-new-alt-text-missing-button-label",
        review: "pdfjs-editor-new-alt-text-to-review-button",
        "review-label": "pdfjs-editor-new-alt-text-to-review-button-label",
      })));
  }
  static initialize(t) {
    Ri._l10n ??= t;
  }
  async render() {
    const t = (this.#Ot = document.createElement("button"));
    ((t.className = "altText"), (t.tabIndex = "0"));
    const e = (this.#Bt = document.createElement("span"));
    (t.append(e),
      this.#Vt
        ? (t.classList.add("new"),
          t.setAttribute("data-l10n-id", Ri.#Wt.missing),
          e.setAttribute("data-l10n-id", Ri.#Wt["missing-label"]))
        : (t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-button"),
          e.setAttribute(
            "data-l10n-id",
            "pdfjs-editor-alt-text-button-label",
          )));
    const i = this.#a._uiManager._signal;
    (t.addEventListener("contextmenu", pi, { signal: i }),
      t.addEventListener("pointerdown", (t) => t.stopPropagation(), {
        signal: i,
      }));
    const s = (t) => {
      (t.preventDefault(),
        this.#a._uiManager.editAltText(this.#a),
        this.#Vt &&
          this.#a._reportTelemetry({
            action: "pdfjs.image.alt_text.image_status_label_clicked",
            data: { label: this.#qt },
          }));
    };
    return (
      t.addEventListener("click", s, { capture: !0, signal: i }),
      t.addEventListener(
        "keydown",
        (e) => {
          e.target === t && "Enter" === e.key && ((this.#Ut = !0), s(e));
        },
        { signal: i },
      ),
      await this.#Yt(),
      t
    );
  }
  get #qt() {
    return (
      (this.#o ? "added" : null === this.#o && this.guessedText && "review") ||
      "missing"
    );
  }
  finish() {
    this.#Ot && (this.#Ot.focus({ focusVisible: this.#Ut }), (this.#Ut = !1));
  }
  isEmpty() {
    return this.#Vt ? null === this.#o : !this.#o && !this.#Nt;
  }
  hasData() {
    return this.#Vt ? null !== this.#o || !!this.#$t : this.isEmpty();
  }
  get guessedText() {
    return this.#$t;
  }
  async setGuessedText(t) {
    null === this.#o &&
      ((this.#$t = t),
      (this.#Gt = await Ri._l10n.get(
        "pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer",
        { generatedAltText: t },
      )),
      this.#Yt());
  }
  toggleAltTextBadge(t = !1) {
    if (!this.#Vt || this.#o)
      return (this.#jt?.remove(), void (this.#jt = null));
    if (!this.#jt) {
      const t = (this.#jt = document.createElement("div"));
      ((t.className = "noAltTextBadge"), this.#a.div.append(t));
    }
    this.#jt.classList.toggle("hidden", !t);
  }
  serialize(t) {
    let e = this.#o;
    return (
      t || this.#$t !== e || (e = this.#Gt),
      {
        altText: e,
        decorative: this.#Nt,
        guessedText: this.#$t,
        textWithDisclaimer: this.#Gt,
      }
    );
  }
  get data() {
    return { altText: this.#o, decorative: this.#Nt };
  }
  set data({
    altText: t,
    decorative: e,
    guessedText: i,
    textWithDisclaimer: s,
    cancel: n = !1,
  }) {
    (i && ((this.#$t = i), (this.#Gt = s)),
      (this.#o === t && this.#Nt === e) ||
        (n || ((this.#o = t), (this.#Nt = e)), this.#Yt()));
  }
  toggle(t = !1) {
    this.#Ot &&
      (!t && this.#Ht && (clearTimeout(this.#Ht), (this.#Ht = null)),
      (this.#Ot.disabled = !t));
  }
  shown() {
    this.#a._reportTelemetry({
      action: "pdfjs.image.alt_text.image_status_label_displayed",
      data: { label: this.#qt },
    });
  }
  destroy() {
    (this.#Ot?.remove(),
      (this.#Ot = null),
      (this.#Bt = null),
      (this.#zt = null),
      this.#jt?.remove(),
      (this.#jt = null));
  }
  async #Yt() {
    const t = this.#Ot;
    if (!t) return;
    if (this.#Vt) {
      if (
        (t.classList.toggle("done", !!this.#o),
        t.setAttribute("data-l10n-id", Ri.#Wt[this.#qt]),
        this.#Bt?.setAttribute("data-l10n-id", Ri.#Wt[`${this.#qt}-label`]),
        !this.#o)
      )
        return void this.#zt?.remove();
    } else {
      if (!this.#o && !this.#Nt)
        return (t.classList.remove("done"), void this.#zt?.remove());
      (t.classList.add("done"),
        t.setAttribute("data-l10n-id", "pdfjs-editor-alt-text-edit-button"));
    }
    let e = this.#zt;
    if (!e) {
      ((this.#zt = e = document.createElement("span")),
        (e.className = "tooltip"),
        e.setAttribute("role", "tooltip"),
        (e.id = `alt-text-tooltip-${this.#a.id}`));
      const i = 100,
        s = this.#a._uiManager._signal;
      (s.addEventListener(
        "abort",
        () => {
          (clearTimeout(this.#Ht), (this.#Ht = null));
        },
        { once: !0 },
      ),
        t.addEventListener(
          "mouseenter",
          () => {
            this.#Ht = setTimeout(() => {
              ((this.#Ht = null),
                this.#zt.classList.add("show"),
                this.#a._reportTelemetry({ action: "alt_text_tooltip" }));
            }, i);
          },
          { signal: s },
        ),
        t.addEventListener(
          "mouseleave",
          () => {
            (this.#Ht && (clearTimeout(this.#Ht), (this.#Ht = null)),
              this.#zt?.classList.remove("show"));
          },
          { signal: s },
        ));
    }
    (this.#Nt
      ? e.setAttribute(
          "data-l10n-id",
          "pdfjs-editor-alt-text-decorative-tooltip",
        )
      : (e.removeAttribute("data-l10n-id"), (e.textContent = this.#o)),
      e.parentNode || t.append(e));
    const i = this.#a.getImageForAltText();
    i?.setAttribute("aria-describedby", e.id);
  }
}
class Ii {
  #Xt = null;
  #Kt = null;
  #o = null;
  #Qt = !1;
  #Jt = !1;
  #Zt = null;
  #te = null;
  #ee = null;
  #ie = "";
  #se = !1;
  #ne = null;
  #ae = !1;
  #re = !1;
  #oe = !1;
  #he = null;
  #le = 0;
  #ce = 0;
  #de = null;
  _editToolbar = null;
  _initialOptions = Object.create(null);
  _initialData = null;
  _isVisible = !0;
  _uiManager = null;
  _focusEventsAllowed = !0;
  static _l10n = null;
  static _l10nResizer = null;
  #ue = !1;
  #pe = Ii._zIndex++;
  static _borderLineWidth = -1;
  static _colorManager = new ki();
  static _zIndex = 1;
  static _telemetryTimeout = 1e3;
  static get _resizerKeyboardManager() {
    const t = Ii.prototype._resizeWithKeyboard,
      e = Pi.TRANSLATE_SMALL,
      i = Pi.TRANSLATE_BIG;
    return Me(
      this,
      "_resizerKeyboardManager",
      new Mi([
        [["ArrowLeft", "mac+ArrowLeft"], t, { args: [-e, 0] }],
        [["ctrl+ArrowLeft", "mac+shift+ArrowLeft"], t, { args: [-i, 0] }],
        [["ArrowRight", "mac+ArrowRight"], t, { args: [e, 0] }],
        [["ctrl+ArrowRight", "mac+shift+ArrowRight"], t, { args: [i, 0] }],
        [["ArrowUp", "mac+ArrowUp"], t, { args: [0, -e] }],
        [["ctrl+ArrowUp", "mac+shift+ArrowUp"], t, { args: [0, -i] }],
        [["ArrowDown", "mac+ArrowDown"], t, { args: [0, e] }],
        [["ctrl+ArrowDown", "mac+shift+ArrowDown"], t, { args: [0, i] }],
        [["Escape", "mac+Escape"], Ii.prototype._stopResizingWithKeyboard],
      ]),
    );
  }
  constructor(t) {
    ((this.parent = t.parent),
      (this.id = t.id),
      (this.width = this.height = null),
      (this.pageIndex = t.parent.pageIndex),
      (this.name = t.name),
      (this.div = null),
      (this._uiManager = t.uiManager),
      (this.annotationElementId = null),
      (this._willKeepAspectRatio = !1),
      (this._initialOptions.isCentered = t.isCentered),
      (this._structTreeParentId = null));
    const {
      rotation: e,
      rawDims: { pageWidth: i, pageHeight: s, pageX: n, pageY: a },
    } = this.parent.viewport;
    ((this.rotation = e),
      (this.pageRotation =
        (360 + e - this._uiManager.viewParameters.rotation) % 360),
      (this.pageDimensions = [i, s]),
      (this.pageTranslation = [n, a]));
    const [r, o] = this.parentDimensions;
    ((this.x = t.x / r),
      (this.y = t.y / o),
      (this.isAttachedToDOM = !1),
      (this.deleted = !1));
  }
  get editorType() {
    return Object.getPrototypeOf(this).constructor._type;
  }
  static get _defaultLineColor() {
    return Me(
      this,
      "_defaultLineColor",
      this._colorManager.getHexCode("CanvasText"),
    );
  }
  static deleteAnnotationElement(t) {
    const e = new Di({
      id: t.parent.getNextId(),
      parent: t.parent,
      uiManager: t._uiManager,
    });
    ((e.annotationElementId = t.annotationElementId),
      (e.deleted = !0),
      e._uiManager.addToAnnotationStorage(e));
  }
  static initialize(t, e) {
    if (
      ((Ii._l10n ??= t),
      (Ii._l10nResizer ||= Object.freeze({
        topLeft: "pdfjs-editor-resizer-top-left",
        topMiddle: "pdfjs-editor-resizer-top-middle",
        topRight: "pdfjs-editor-resizer-top-right",
        middleRight: "pdfjs-editor-resizer-middle-right",
        bottomRight: "pdfjs-editor-resizer-bottom-right",
        bottomMiddle: "pdfjs-editor-resizer-bottom-middle",
        bottomLeft: "pdfjs-editor-resizer-bottom-left",
        middleLeft: "pdfjs-editor-resizer-middle-left",
      })),
      -1 !== Ii._borderLineWidth)
    )
      return;
    const i = getComputedStyle(document.documentElement);
    Ii._borderLineWidth =
      parseFloat(i.getPropertyValue("--outline-width")) || 0;
  }
  static updateDefaultParams(t, e) {}
  static get defaultPropertiesToUpdate() {
    return [];
  }
  static isHandlingMimeForPasting(t) {
    return !1;
  }
  static paste(t, e) {
    Ee("Not implemented");
  }
  get propertiesToUpdate() {
    return [];
  }
  get _isDraggable() {
    return this.#ue;
  }
  set _isDraggable(t) {
    ((this.#ue = t), this.div?.classList.toggle("draggable", t));
  }
  get isEnterHandled() {
    return !0;
  }
  center() {
    const [t, e] = this.pageDimensions;
    switch (this.parentRotation) {
      case 90:
        ((this.x -= (this.height * e) / (2 * t)),
          (this.y += (this.width * t) / (2 * e)));
        break;
      case 180:
        ((this.x += this.width / 2), (this.y += this.height / 2));
        break;
      case 270:
        ((this.x += (this.height * e) / (2 * t)),
          (this.y -= (this.width * t) / (2 * e)));
        break;
      default:
        ((this.x -= this.width / 2), (this.y -= this.height / 2));
    }
    this.fixAndSetPosition();
  }
  addCommands(t) {
    this._uiManager.addCommands(t);
  }
  get currentLayer() {
    return this._uiManager.currentLayer;
  }
  setInBackground() {
    this.div.style.zIndex = 0;
  }
  setInForeground() {
    this.div.style.zIndex = this.#pe;
  }
  setParent(t) {
    (null !== t
      ? ((this.pageIndex = t.pageIndex),
        (this.pageDimensions = t.pageDimensions))
      : this.#ge(),
      (this.parent = t));
  }
  focusin(t) {
    this._focusEventsAllowed &&
      (this.#se ? (this.#se = !1) : this.parent.setSelected(this));
  }
  focusout(t) {
    if (!this._focusEventsAllowed) return;
    if (!this.isAttachedToDOM) return;
    const e = t.relatedTarget;
    e?.closest(`#${this.id}`) ||
      (t.preventDefault(),
      this.parent?.isMultipleSelection || this.commitOrRemove());
  }
  commitOrRemove() {
    this.isEmpty() ? this.remove() : this.commit();
  }
  commit() {
    this.addToAnnotationStorage();
  }
  addToAnnotationStorage() {
    this._uiManager.addToAnnotationStorage(this);
  }
  setAt(t, e, i, s) {
    const [n, a] = this.parentDimensions;
    (([i, s] = this.screenToPageTranslation(i, s)),
      (this.x = (t + i) / n),
      (this.y = (e + s) / a),
      this.fixAndSetPosition());
  }
  #fe([t, e], i, s) {
    (([i, s] = this.screenToPageTranslation(i, s)),
      (this.x += i / t),
      (this.y += s / e),
      this.fixAndSetPosition());
  }
  translate(t, e) {
    this.#fe(this.parentDimensions, t, e);
  }
  translateInPage(t, e) {
    ((this.#ne ||= [this.x, this.y]),
      this.#fe(this.pageDimensions, t, e),
      this.div.scrollIntoView({ block: "nearest" }));
  }
  drag(t, e) {
    this.#ne ||= [this.x, this.y];
    const [i, s] = this.parentDimensions;
    if (
      ((this.x += t / i),
      (this.y += e / s),
      this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1))
    ) {
      const { x: t, y: e } = this.div.getBoundingClientRect();
      this.parent.findNewParent(this, t, e) &&
        ((this.x -= Math.floor(this.x)), (this.y -= Math.floor(this.y)));
    }
    let { x: n, y: a } = this;
    const [r, o] = this.getBaseTranslation();
    ((n += r),
      (a += o),
      (this.div.style.left = `${(100 * n).toFixed(2)}%`),
      (this.div.style.top = `${(100 * a).toFixed(2)}%`),
      this.div.scrollIntoView({ block: "nearest" }));
  }
  get _hasBeenMoved() {
    return !!this.#ne && (this.#ne[0] !== this.x || this.#ne[1] !== this.y);
  }
  getBaseTranslation() {
    const [t, e] = this.parentDimensions,
      { _borderLineWidth: i } = Ii,
      s = i / t,
      n = i / e;
    switch (this.rotation) {
      case 90:
        return [-s, n];
      case 180:
        return [s, n];
      case 270:
        return [s, -n];
      default:
        return [-s, -n];
    }
  }
  get _mustFixPosition() {
    return !0;
  }
  fixAndSetPosition(t = this.rotation) {
    const [e, i] = this.pageDimensions;
    let { x: s, y: n, width: a, height: r } = this;
    if (((a *= e), (r *= i), (s *= e), (n *= i), this._mustFixPosition))
      switch (t) {
        case 0:
          ((s = Math.max(0, Math.min(e - a, s))),
            (n = Math.max(0, Math.min(i - r, n))));
          break;
        case 90:
          ((s = Math.max(0, Math.min(e - r, s))),
            (n = Math.min(i, Math.max(a, n))));
          break;
        case 180:
          ((s = Math.min(e, Math.max(a, s))),
            (n = Math.min(i, Math.max(r, n))));
          break;
        case 270:
          ((s = Math.min(e, Math.max(r, s))),
            (n = Math.max(0, Math.min(i - a, n))));
      }
    ((this.x = s /= e), (this.y = n /= i));
    const [o, h] = this.getBaseTranslation();
    ((s += o), (n += h));
    const { style: l } = this.div;
    ((l.left = `${(100 * s).toFixed(2)}%`),
      (l.top = `${(100 * n).toFixed(2)}%`),
      this.moveInDOM());
  }
  static #me(t, e, i) {
    switch (i) {
      case 90:
        return [e, -t];
      case 180:
        return [-t, -e];
      case 270:
        return [-e, t];
      default:
        return [t, e];
    }
  }
  screenToPageTranslation(t, e) {
    return Ii.#me(t, e, this.parentRotation);
  }
  pageTranslationToScreen(t, e) {
    return Ii.#me(t, e, 360 - this.parentRotation);
  }
  #be(t) {
    switch (t) {
      case 90: {
        const [t, e] = this.pageDimensions;
        return [0, -t / e, e / t, 0];
      }
      case 180:
        return [-1, 0, 0, -1];
      case 270: {
        const [t, e] = this.pageDimensions;
        return [0, t / e, -e / t, 0];
      }
      default:
        return [1, 0, 0, 1];
    }
  }
  get parentScale() {
    return this._uiManager.viewParameters.realScale;
  }
  get parentRotation() {
    return (this._uiManager.viewParameters.rotation + this.pageRotation) % 360;
  }
  get parentDimensions() {
    const {
      parentScale: t,
      pageDimensions: [e, i],
    } = this;
    return [e * t, i * t];
  }
  setDims(t, e) {
    const [i, s] = this.parentDimensions;
    ((this.div.style.width = `${((100 * t) / i).toFixed(2)}%`),
      this.#Jt || (this.div.style.height = `${((100 * e) / s).toFixed(2)}%`));
  }
  fixDims() {
    const { style: t } = this.div,
      { height: e, width: i } = t,
      s = i.endsWith("%"),
      n = !this.#Jt && e.endsWith("%");
    if (s && n) return;
    const [a, r] = this.parentDimensions;
    (s || (t.width = `${((100 * parseFloat(i)) / a).toFixed(2)}%`),
      this.#Jt ||
        n ||
        (t.height = `${((100 * parseFloat(e)) / r).toFixed(2)}%`));
  }
  getInitialTranslation() {
    return [0, 0];
  }
  #ve() {
    if (this.#Zt) return;
    ((this.#Zt = document.createElement("div")),
      this.#Zt.classList.add("resizers"));
    const t = this._willKeepAspectRatio
        ? ["topLeft", "topRight", "bottomRight", "bottomLeft"]
        : [
            "topLeft",
            "topMiddle",
            "topRight",
            "middleRight",
            "bottomRight",
            "bottomMiddle",
            "bottomLeft",
            "middleLeft",
          ],
      e = this._uiManager._signal;
    for (const i of t) {
      const t = document.createElement("div");
      (this.#Zt.append(t),
        t.classList.add("resizer", i),
        t.setAttribute("data-resizer-name", i),
        t.addEventListener("pointerdown", this.#Ae.bind(this, i), {
          signal: e,
        }),
        t.addEventListener("contextmenu", pi, { signal: e }),
        (t.tabIndex = -1));
    }
    this.div.prepend(this.#Zt);
  }
  #Ae(t, e) {
    e.preventDefault();
    const { isMac: i } = He.platform;
    if (0 !== e.button || (e.ctrlKey && i)) return;
    this.#o?.toggle(!1);
    const s = this._isDraggable;
    this._isDraggable = !1;
    const n = new AbortController(),
      a = this._uiManager.combinedSignal(n);
    (this.parent.togglePointerEvents(!1),
      window.addEventListener("pointermove", this.#ye.bind(this, t), {
        passive: !0,
        capture: !0,
        signal: a,
      }),
      window.addEventListener("contextmenu", pi, { signal: a }));
    const r = this.x,
      o = this.y,
      h = this.width,
      l = this.height,
      c = this.parent.div.style.cursor,
      d = this.div.style.cursor;
    this.div.style.cursor = this.parent.div.style.cursor =
      window.getComputedStyle(e.target).cursor;
    const u = () => {
      (n.abort(),
        this.parent.togglePointerEvents(!0),
        this.#o?.toggle(!0),
        (this._isDraggable = s),
        (this.parent.div.style.cursor = c),
        (this.div.style.cursor = d),
        this.#we(r, o, h, l));
    };
    (window.addEventListener("pointerup", u, { signal: a }),
      window.addEventListener("blur", u, { signal: a }));
  }
  #we(t, e, i, s) {
    const n = this.x,
      a = this.y,
      r = this.width,
      o = this.height;
    (n === t && a === e && r === i && o === s) ||
      this.addCommands({
        cmd: () => {
          ((this.width = r), (this.height = o), (this.x = n), (this.y = a));
          const [t, e] = this.parentDimensions;
          (this.setDims(t * r, e * o), this.fixAndSetPosition());
        },
        undo: () => {
          ((this.width = i), (this.height = s), (this.x = t), (this.y = e));
          const [n, a] = this.parentDimensions;
          (this.setDims(n * i, a * s), this.fixAndSetPosition());
        },
        mustExec: !0,
      });
  }
  #ye(t, e) {
    const [i, s] = this.parentDimensions,
      n = this.x,
      a = this.y,
      r = this.width,
      o = this.height,
      h = Ii.MIN_SIZE / i,
      l = Ii.MIN_SIZE / s,
      c = (t) => Math.round(1e4 * t) / 1e4,
      d = this.#be(this.rotation),
      u = (t, e) => [d[0] * t + d[2] * e, d[1] * t + d[3] * e],
      p = this.#be(360 - this.rotation);
    let g,
      f,
      m = !1,
      b = !1;
    switch (t) {
      case "topLeft":
        ((m = !0), (g = (t, e) => [0, 0]), (f = (t, e) => [t, e]));
        break;
      case "topMiddle":
        ((g = (t, e) => [t / 2, 0]), (f = (t, e) => [t / 2, e]));
        break;
      case "topRight":
        ((m = !0), (g = (t, e) => [t, 0]), (f = (t, e) => [0, e]));
        break;
      case "middleRight":
        ((b = !0), (g = (t, e) => [t, e / 2]), (f = (t, e) => [0, e / 2]));
        break;
      case "bottomRight":
        ((m = !0), (g = (t, e) => [t, e]), (f = (t, e) => [0, 0]));
        break;
      case "bottomMiddle":
        ((g = (t, e) => [t / 2, e]), (f = (t, e) => [t / 2, 0]));
        break;
      case "bottomLeft":
        ((m = !0), (g = (t, e) => [0, e]), (f = (t, e) => [t, 0]));
        break;
      case "middleLeft":
        ((b = !0), (g = (t, e) => [0, e / 2]), (f = (t, e) => [t, e / 2]));
    }
    const v = g(r, o),
      A = f(r, o);
    let y = u(...A);
    const w = c(n + y[0]),
      _ = c(a + y[1]);
    let x = 1,
      C = 1,
      [E, S] = this.screenToPageTranslation(e.movementX, e.movementY);
    var T, M;
    if (
      (([E, S] =
        ((T = E / i), (M = S / s), [p[0] * T + p[2] * M, p[1] * T + p[3] * M])),
      m)
    ) {
      const t = Math.hypot(r, o);
      x = C = Math.max(
        Math.min(
          Math.hypot(A[0] - v[0] - E, A[1] - v[1] - S) / t,
          1 / r,
          1 / o,
        ),
        h / r,
        l / o,
      );
    } else
      b
        ? (x = Math.max(h, Math.min(1, Math.abs(A[0] - v[0] - E))) / r)
        : (C = Math.max(l, Math.min(1, Math.abs(A[1] - v[1] - S))) / o);
    const k = c(r * x),
      P = c(o * C);
    y = u(...f(k, P));
    const R = w - y[0],
      I = _ - y[1];
    ((this.width = k),
      (this.height = P),
      (this.x = R),
      (this.y = I),
      this.setDims(i * k, s * P),
      this.fixAndSetPosition());
  }
  altTextFinish() {
    this.#o?.finish();
  }
  async addEditToolbar() {
    return (
      this._editToolbar ||
        this.#re ||
        ((this._editToolbar = new _i(this)),
        this.div.append(this._editToolbar.render()),
        this.#o && (await this._editToolbar.addAltText(this.#o))),
      this._editToolbar
    );
  }
  removeEditToolbar() {
    this._editToolbar &&
      (this._editToolbar.remove(),
      (this._editToolbar = null),
      this.#o?.destroy());
  }
  addContainer(t) {
    const e = this._editToolbar?.div;
    e ? e.before(t) : this.div.append(t);
  }
  getClientDimensions() {
    return this.div.getBoundingClientRect();
  }
  async addAltTextButton() {
    this.#o ||
      (Ri.initialize(Ii._l10n),
      (this.#o = new Ri(this)),
      this.#Xt && ((this.#o.data = this.#Xt), (this.#Xt = null)),
      await this.addEditToolbar());
  }
  get altTextData() {
    return this.#o?.data;
  }
  set altTextData(t) {
    this.#o && (this.#o.data = t);
  }
  get guessedAltText() {
    return this.#o?.guessedText;
  }
  async setGuessedAltText(t) {
    await this.#o?.setGuessedText(t);
  }
  serializeAltText(t) {
    return this.#o?.serialize(t);
  }
  hasAltText() {
    return !!this.#o && !this.#o.isEmpty();
  }
  hasAltTextData() {
    return this.#o?.hasData() ?? !1;
  }
  render() {
    ((this.div = document.createElement("div")),
      this.div.setAttribute(
        "data-editor-rotation",
        (360 - this.rotation) % 360,
      ),
      (this.div.className = this.name),
      this.div.setAttribute("id", this.id),
      (this.div.tabIndex = this.#Qt ? -1 : 0),
      this._isVisible || this.div.classList.add("hidden"),
      this.setInForeground(),
      this.#_e());
    const [t, e] = this.parentDimensions;
    this.parentRotation % 180 != 0 &&
      ((this.div.style.maxWidth = `${((100 * e) / t).toFixed(2)}%`),
      (this.div.style.maxHeight = `${((100 * t) / e).toFixed(2)}%`));
    const [i, s] = this.getInitialTranslation();
    return (
      this.translate(i, s),
      Ci(this, this.div, ["pointerdown"]),
      this.div
    );
  }
  pointerdown(t) {
    const { isMac: e } = He.platform;
    0 !== t.button || (t.ctrlKey && e)
      ? t.preventDefault()
      : ((this.#se = !0), this._isDraggable ? this.#xe(t) : this.#Ce(t));
  }
  get isSelected() {
    return this._uiManager.isSelected(this);
  }
  #Ce(t) {
    const { isMac: e } = He.platform;
    (t.ctrlKey && !e) || t.shiftKey || (t.metaKey && e)
      ? this.parent.toggleSelected(this)
      : this.parent.setSelected(this);
  }
  #xe(t) {
    const { isSelected: e } = this;
    this._uiManager.setUpDragSession();
    const i = new AbortController(),
      s = this._uiManager.combinedSignal(i);
    if (e) {
      (this.div.classList.add("moving"),
        (this.#le = t.clientX),
        (this.#ce = t.clientY));
      const e = (t) => {
        const { clientX: e, clientY: i } = t,
          [s, n] = this.screenToPageTranslation(e - this.#le, i - this.#ce);
        ((this.#le = e),
          (this.#ce = i),
          this._uiManager.dragSelectedEditors(s, n));
      };
      window.addEventListener("pointermove", e, {
        passive: !0,
        capture: !0,
        signal: s,
      });
    }
    const n = () => {
      (i.abort(),
        e && this.div.classList.remove("moving"),
        (this.#se = !1),
        this._uiManager.endDragSession() || this.#Ce(t));
    };
    (window.addEventListener("pointerup", n, { signal: s }),
      window.addEventListener("blur", n, { signal: s }));
  }
  moveInDOM() {
    (this.#he && clearTimeout(this.#he),
      (this.#he = setTimeout(() => {
        ((this.#he = null), this.parent?.moveEditorInDOM(this));
      }, 0)));
  }
  _setParentAndPosition(t, e, i) {
    (t.changeParent(this),
      (this.x = e),
      (this.y = i),
      this.fixAndSetPosition());
  }
  getRect(t, e, i = this.rotation) {
    const s = this.parentScale,
      [n, a] = this.pageDimensions,
      [r, o] = this.pageTranslation,
      h = t / s,
      l = e / s,
      c = this.x * n,
      d = this.y * a,
      u = this.width * n,
      p = this.height * a;
    switch (i) {
      case 0:
        return [c + h + r, a - d - l - p + o, c + h + u + r, a - d - l + o];
      case 90:
        return [c + l + r, a - d + h + o, c + l + p + r, a - d + h + u + o];
      case 180:
        return [c - h - u + r, a - d + l + o, c - h + r, a - d + l + p + o];
      case 270:
        return [c - l - p + r, a - d - h - u + o, c - l + r, a - d - h + o];
      default:
        throw new Error("Invalid rotation");
    }
  }
  getRectInCurrentCoords(t, e) {
    const [i, s, n, a] = t,
      r = n - i,
      o = a - s;
    switch (this.rotation) {
      case 0:
        return [i, e - a, r, o];
      case 90:
        return [i, e - s, o, r];
      case 180:
        return [n, e - s, r, o];
      case 270:
        return [n, e - a, o, r];
      default:
        throw new Error("Invalid rotation");
    }
  }
  onceAdded() {}
  isEmpty() {
    return !1;
  }
  enableEditMode() {
    this.#re = !0;
  }
  disableEditMode() {
    this.#re = !1;
  }
  isInEditMode() {
    return this.#re;
  }
  shouldGetKeyboardEvents() {
    return this.#oe;
  }
  needsToBeRebuilt() {
    return this.div && !this.isAttachedToDOM;
  }
  #_e() {
    if (this.#ee || !this.div) return;
    this.#ee = new AbortController();
    const t = this._uiManager.combinedSignal(this.#ee);
    (this.div.addEventListener("focusin", this.focusin.bind(this), {
      signal: t,
    }),
      this.div.addEventListener("focusout", this.focusout.bind(this), {
        signal: t,
      }));
  }
  rebuild() {
    this.#_e();
  }
  rotate(t) {}
  serializeDeleted() {
    return {
      id: this.annotationElementId,
      deleted: !0,
      pageIndex: this.pageIndex,
      popupRef: this._initialData?.popupRef || "",
    };
  }
  serialize(t = !1, e = null) {
    Ee("An editor must be serializable");
  }
  static async deserialize(t, e, i) {
    const s = new this.prototype.constructor({
      parent: e,
      id: e.getNextId(),
      uiManager: i,
    });
    ((s.rotation = t.rotation), (s.#Xt = t.accessibilityData));
    const [n, a] = s.pageDimensions,
      [r, o, h, l] = s.getRectInCurrentCoords(t.rect, a);
    return (
      (s.x = r / n),
      (s.y = o / a),
      (s.width = h / n),
      (s.height = l / a),
      s
    );
  }
  get hasBeenModified() {
    return (
      !!this.annotationElementId && (this.deleted || null !== this.serialize())
    );
  }
  remove() {
    if (
      (this.#ee?.abort(),
      (this.#ee = null),
      this.isEmpty() || this.commit(),
      this.parent
        ? this.parent.remove(this)
        : this._uiManager.removeEditor(this),
      this.#he && (clearTimeout(this.#he), (this.#he = null)),
      this.#ge(),
      this.removeEditToolbar(),
      this.#de)
    ) {
      for (const t of this.#de.values()) clearTimeout(t);
      this.#de = null;
    }
    this.parent = null;
  }
  get isResizable() {
    return !1;
  }
  makeResizable() {
    this.isResizable &&
      (this.#ve(),
      this.#Zt.classList.remove("hidden"),
      Ci(this, this.div, ["keydown"]));
  }
  get toolbarPosition() {
    return null;
  }
  keydown(t) {
    if (!this.isResizable || t.target !== this.div || "Enter" !== t.key) return;
    (this._uiManager.setSelected(this),
      (this.#te = {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height,
      }));
    const e = this.#Zt.children;
    if (!this.#Kt) {
      this.#Kt = Array.from(e);
      const t = this.#Ee.bind(this),
        i = this.#Se.bind(this),
        s = this._uiManager._signal;
      for (const e of this.#Kt) {
        const n = e.getAttribute("data-resizer-name");
        (e.setAttribute("role", "spinbutton"),
          e.addEventListener("keydown", t, { signal: s }),
          e.addEventListener("blur", i, { signal: s }),
          e.addEventListener("focus", this.#Te.bind(this, n), { signal: s }),
          e.setAttribute("data-l10n-id", Ii._l10nResizer[n]));
      }
    }
    const i = this.#Kt[0];
    let s = 0;
    for (const t of e) {
      if (t === i) break;
      s++;
    }
    const n =
      (((360 - this.rotation + this.parentRotation) % 360) / 90) *
      (this.#Kt.length / 4);
    if (n !== s) {
      if (n < s)
        for (let t = 0; t < s - n; t++) this.#Zt.append(this.#Zt.firstChild);
      else if (n > s)
        for (let t = 0; t < n - s; t++)
          this.#Zt.firstChild.before(this.#Zt.lastChild);
      let t = 0;
      for (const i of e) {
        const e = this.#Kt[t++].getAttribute("data-resizer-name");
        i.setAttribute("data-l10n-id", Ii._l10nResizer[e]);
      }
    }
    (this.#Me(0),
      (this.#oe = !0),
      this.#Zt.firstChild.focus({ focusVisible: !0 }),
      t.preventDefault(),
      t.stopImmediatePropagation());
  }
  #Ee(t) {
    Ii._resizerKeyboardManager.exec(this, t);
  }
  #Se(t) {
    this.#oe && t.relatedTarget?.parentNode !== this.#Zt && this.#ge();
  }
  #Te(t) {
    this.#ie = this.#oe ? t : "";
  }
  #Me(t) {
    if (this.#Kt) for (const e of this.#Kt) e.tabIndex = t;
  }
  _resizeWithKeyboard(t, e) {
    this.#oe && this.#ye(this.#ie, { movementX: t, movementY: e });
  }
  #ge() {
    if (((this.#oe = !1), this.#Me(-1), this.#te)) {
      const { savedX: t, savedY: e, savedWidth: i, savedHeight: s } = this.#te;
      (this.#we(t, e, i, s), (this.#te = null));
    }
  }
  _stopResizingWithKeyboard() {
    (this.#ge(), this.div.focus());
  }
  select() {
    (this.makeResizable(),
      this.div?.classList.add("selectedEditor"),
      this._editToolbar
        ? (this._editToolbar?.show(), this.#o?.toggleAltTextBadge(!1))
        : this.addEditToolbar().then(() => {
            this.div?.classList.contains("selectedEditor") &&
              this._editToolbar?.show();
          }));
  }
  unselect() {
    (this.#Zt?.classList.add("hidden"),
      this.div?.classList.remove("selectedEditor"),
      this.div?.contains(document.activeElement) &&
        this._uiManager.currentLayer.div.focus({ preventScroll: !0 }),
      this._editToolbar?.hide(),
      this.#o?.toggleAltTextBadge(!0));
  }
  updateParams(t, e) {}
  disableEditing() {}
  enableEditing() {}
  enterInEditMode() {}
  getImageForAltText() {
    return null;
  }
  get contentDiv() {
    return this.div;
  }
  get isEditing() {
    return this.#ae;
  }
  set isEditing(t) {
    ((this.#ae = t),
      this.parent &&
        (t
          ? (this.parent.setSelected(this), this.parent.setActiveEditor(this))
          : this.parent.setActiveEditor(null)));
  }
  setAspectRatio(t, e) {
    this.#Jt = !0;
    const i = t / e,
      { style: s } = this.div;
    ((s.aspectRatio = i), (s.height = "auto"));
  }
  static get MIN_SIZE() {
    return 16;
  }
  static canCreateNewEmptyEditor() {
    return !0;
  }
  get telemetryInitialData() {
    return { action: "added" };
  }
  get telemetryFinalData() {
    return null;
  }
  _reportTelemetry(t, e = !1) {
    if (e) {
      this.#de ||= new Map();
      const { action: e } = t;
      let i = this.#de.get(e);
      return (
        i && clearTimeout(i),
        (i = setTimeout(() => {
          (this._reportTelemetry(t),
            this.#de.delete(e),
            0 === this.#de.size && (this.#de = null));
        }, Ii._telemetryTimeout)),
        void this.#de.set(e, i)
      );
    }
    ((t.type ||= this.editorType),
      this._uiManager._eventBus.dispatch("reporttelemetry", {
        source: this,
        details: { type: "editing", data: t },
      }));
  }
  show(t = this._isVisible) {
    (this.div.classList.toggle("hidden", !t), (this._isVisible = t));
  }
  enable() {
    (this.div && (this.div.tabIndex = 0), (this.#Qt = !1));
  }
  disable() {
    (this.div && (this.div.tabIndex = -1), (this.#Qt = !0));
  }
  renderAnnotationElement(t) {
    let e = t.container.querySelector(".annotationContent");
    if (e) {
      if ("CANVAS" === e.nodeName) {
        const t = e;
        ((e = document.createElement("div")),
          e.classList.add("annotationContent", this.editorType),
          t.before(e));
      }
    } else
      ((e = document.createElement("div")),
        e.classList.add("annotationContent", this.editorType),
        t.container.prepend(e));
    return e;
  }
  resetAnnotationElement(t) {
    const { firstChild: e } = t.container;
    "DIV" === e?.nodeName &&
      e.classList.contains("annotationContent") &&
      e.remove();
  }
}
class Di extends Ii {
  constructor(t) {
    (super(t),
      (this.annotationElementId = t.annotationElementId),
      (this.deleted = !0));
  }
  serialize() {
    return this.serializeDeleted();
  }
}
const Li = 3285377520,
  Fi = 4294901760,
  Ni = 65535;
class Oi {
  constructor(t) {
    ((this.h1 = t ? 4294967295 & t : Li), (this.h2 = t ? 4294967295 & t : Li));
  }
  update(t) {
    let e, i;
    if ("string" == typeof t) {
      ((e = new Uint8Array(2 * t.length)), (i = 0));
      for (let s = 0, n = t.length; s < n; s++) {
        const n = t.charCodeAt(s);
        n <= 255 ? (e[i++] = n) : ((e[i++] = n >>> 8), (e[i++] = 255 & n));
      }
    } else {
      if (!ArrayBuffer.isView(t))
        throw new Error("Invalid data format, must be a string or TypedArray.");
      ((e = t.slice()), (i = e.byteLength));
    }
    const s = i >> 2,
      n = i - 4 * s,
      a = new Uint32Array(e.buffer, 0, s);
    let r = 0,
      o = 0,
      h = this.h1,
      l = this.h2;
    const c = 3432918353,
      d = 461845907,
      u = 11601,
      p = 13715;
    for (let t = 0; t < s; t++)
      1 & t
        ? ((r = a[t]),
          (r = ((r * c) & Fi) | ((r * u) & Ni)),
          (r = (r << 15) | (r >>> 17)),
          (r = ((r * d) & Fi) | ((r * p) & Ni)),
          (h ^= r),
          (h = (h << 13) | (h >>> 19)),
          (h = 5 * h + 3864292196))
        : ((o = a[t]),
          (o = ((o * c) & Fi) | ((o * u) & Ni)),
          (o = (o << 15) | (o >>> 17)),
          (o = ((o * d) & Fi) | ((o * p) & Ni)),
          (l ^= o),
          (l = (l << 13) | (l >>> 19)),
          (l = 5 * l + 3864292196));
    switch (((r = 0), n)) {
      case 3:
        r ^= e[4 * s + 2] << 16;
      case 2:
        r ^= e[4 * s + 1] << 8;
      case 1:
        ((r ^= e[4 * s]),
          (r = ((r * c) & Fi) | ((r * u) & Ni)),
          (r = (r << 15) | (r >>> 17)),
          (r = ((r * d) & Fi) | ((r * p) & Ni)),
          1 & s ? (h ^= r) : (l ^= r));
    }
    ((this.h1 = h), (this.h2 = l));
  }
  hexdigest() {
    let t = this.h1,
      e = this.h2;
    return (
      (t ^= e >>> 1),
      (t = ((3981806797 * t) & Fi) | ((36045 * t) & Ni)),
      (e =
        ((4283543511 * e) & Fi) |
        (((2950163797 * ((e << 16) | (t >>> 16))) & Fi) >>> 16)),
      (t ^= e >>> 1),
      (t = ((444984403 * t) & Fi) | ((60499 * t) & Ni)),
      (e =
        ((3301882366 * e) & Fi) |
        (((3120437893 * ((e << 16) | (t >>> 16))) & Fi) >>> 16)),
      (t ^= e >>> 1),
      (t >>> 0).toString(16).padStart(8, "0") +
        (e >>> 0).toString(16).padStart(8, "0")
    );
  }
}
const Bi = Object.freeze({ map: null, hash: "", transfer: void 0 });
class zi {
  #ke = !1;
  #Pe = null;
  #Re = new Map();
  constructor() {
    ((this.onSetModified = null),
      (this.onResetModified = null),
      (this.onAnnotationEditor = null));
  }
  getValue(t, e) {
    const i = this.#Re.get(t);
    return void 0 === i ? e : Object.assign(e, i);
  }
  getRawValue(t) {
    return this.#Re.get(t);
  }
  remove(t) {
    if (
      (this.#Re.delete(t),
      0 === this.#Re.size && this.resetModified(),
      "function" == typeof this.onAnnotationEditor)
    ) {
      for (const t of this.#Re.values()) if (t instanceof Ii) return;
      this.onAnnotationEditor(null);
    }
  }
  setValue(t, e) {
    const i = this.#Re.get(t);
    let s = !1;
    if (void 0 !== i)
      for (const [t, n] of Object.entries(e))
        i[t] !== n && ((s = !0), (i[t] = n));
    else ((s = !0), this.#Re.set(t, e));
    (s && this.#Ie(),
      e instanceof Ii &&
        "function" == typeof this.onAnnotationEditor &&
        this.onAnnotationEditor(e.constructor._type));
  }
  has(t) {
    return this.#Re.has(t);
  }
  getAll() {
    return this.#Re.size > 0 ? ze(this.#Re) : null;
  }
  setAll(t) {
    for (const [e, i] of Object.entries(t)) this.setValue(e, i);
  }
  get size() {
    return this.#Re.size;
  }
  #Ie() {
    this.#ke ||
      ((this.#ke = !0),
      "function" == typeof this.onSetModified && this.onSetModified());
  }
  resetModified() {
    this.#ke &&
      ((this.#ke = !1),
      "function" == typeof this.onResetModified && this.onResetModified());
  }
  get print() {
    return new Hi(this);
  }
  get serializable() {
    if (0 === this.#Re.size) return Bi;
    const t = new Map(),
      e = new Oi(),
      i = [],
      s = Object.create(null);
    let n = !1;
    for (const [i, a] of this.#Re) {
      const r = a instanceof Ii ? a.serialize(!1, s) : a;
      r &&
        (t.set(i, r),
        e.update(`${i}:${JSON.stringify(r)}`),
        (n ||= !!r.bitmap));
    }
    if (n) for (const e of t.values()) e.bitmap && i.push(e.bitmap);
    return t.size > 0 ? { map: t, hash: e.hexdigest(), transfer: i } : Bi;
  }
  get editorStats() {
    let t = null;
    const e = new Map();
    for (const i of this.#Re.values()) {
      if (!(i instanceof Ii)) continue;
      const s = i.telemetryFinalData;
      if (!s) continue;
      const { type: n } = s;
      (e.has(n) || e.set(n, Object.getPrototypeOf(i).constructor),
        (t ||= Object.create(null)));
      const a = (t[n] ||= new Map());
      for (const [t, e] of Object.entries(s)) {
        if ("type" === t) continue;
        let i = a.get(t);
        i || ((i = new Map()), a.set(t, i));
        const s = i.get(e) ?? 0;
        i.set(e, s + 1);
      }
    }
    for (const [i, s] of e) t[i] = s.computeTelemetryFinalData(t[i]);
    return t;
  }
  resetModifiedIds() {
    this.#Pe = null;
  }
  get modifiedIds() {
    if (this.#Pe) return this.#Pe;
    const t = [];
    for (const e of this.#Re.values())
      e instanceof Ii &&
        e.annotationElementId &&
        e.serialize() &&
        t.push(e.annotationElementId);
    return (this.#Pe = { ids: new Set(t), hash: t.join(",") });
  }
}
class Hi extends zi {
  #De;
  constructor(t) {
    super();
    const { map: e, hash: i, transfer: s } = t.serializable,
      n = structuredClone(e, s ? { transfer: s } : null);
    this.#De = { map: n, hash: i, transfer: s };
  }
  get print() {
    Ee("Should not call PrintAnnotationStorage.print");
  }
  get serializable() {
    return this.#De;
  }
  get modifiedIds() {
    return Me(this, "modifiedIds", { ids: new Set(), hash: "" });
  }
}
class Ui {
  #Le = new Set();
  constructor({
    ownerDocument: t = globalThis.document,
    styleElement: e = null,
  }) {
    ((this._document = t),
      (this.nativeFontFaces = new Set()),
      (this.styleElement = null),
      (this.loadingRequests = []),
      (this.loadTestFontId = 0));
  }
  addNativeFontFace(t) {
    (this.nativeFontFaces.add(t), this._document.fonts.add(t));
  }
  removeNativeFontFace(t) {
    (this.nativeFontFaces.delete(t), this._document.fonts.delete(t));
  }
  insertRule(t) {
    this.styleElement ||
      ((this.styleElement = this._document.createElement("style")),
      this._document.documentElement
        .getElementsByTagName("head")[0]
        .append(this.styleElement));
    const e = this.styleElement.sheet;
    e.insertRule(t, e.cssRules.length);
  }
  clear() {
    for (const t of this.nativeFontFaces) this._document.fonts.delete(t);
    (this.nativeFontFaces.clear(),
      this.#Le.clear(),
      this.styleElement &&
        (this.styleElement.remove(), (this.styleElement = null)));
  }
  async loadSystemFont({ systemFontInfo: t, _inspectFont: e }) {
    if (t && !this.#Le.has(t.loadedName))
      if (
        (Se(
          !this.disableFontFace,
          "loadSystemFont shouldn't be called when `disableFontFace` is set.",
        ),
        this.isFontLoadingAPISupported)
      ) {
        const { loadedName: i, src: s, style: n } = t,
          a = new FontFace(i, s, n);
        this.addNativeFontFace(a);
        try {
          (await a.load(), this.#Le.add(i), e?.(t));
        } catch {
          (Ce(
            `Cannot load system font: ${t.baseFontName}, installing it could help to improve PDF rendering.`,
          ),
            this.removeNativeFontFace(a));
        }
      } else
        Ee("Not implemented: loadSystemFont without the Font Loading API.");
  }
  async bind(t) {
    if (t.attached || (t.missingFile && !t.systemFontInfo)) return;
    if (((t.attached = !0), t.systemFontInfo))
      return void (await this.loadSystemFont(t));
    if (this.isFontLoadingAPISupported) {
      const e = t.createNativeFontFace();
      if (e) {
        this.addNativeFontFace(e);
        try {
          await e.loaded;
        } catch (i) {
          throw (
            Ce(`Failed to load font '${e.family}': '${i}'.`),
            (t.disableFontFace = !0),
            i
          );
        }
      }
      return;
    }
    const e = t.createFontFaceRule();
    if (e) {
      if ((this.insertRule(e), this.isSyncFontLoadingSupported)) return;
      await new Promise((e) => {
        const i = this._queueLoadingCallback(e);
        this._prepareFontLoadEvent(t, i);
      });
    }
  }
  get isFontLoadingAPISupported() {
    return Me(this, "isFontLoadingAPISupported", !!this._document?.fonts);
  }
  get isSyncFontLoadingSupported() {
    let t = !1;
    return (
      (Et ||
        ("undefined" != typeof navigator &&
          "string" == typeof navigator?.userAgent &&
          /Mozilla\/5.0.*?rv:\d+.*? Gecko/.test(navigator.userAgent))) &&
        (t = !0),
      Me(this, "isSyncFontLoadingSupported", t)
    );
  }
  _queueLoadingCallback(t) {
    const { loadingRequests: e } = this,
      i = {
        done: !1,
        complete: function () {
          for (
            Se(!i.done, "completeRequest() cannot be called twice."),
              i.done = !0;
            e.length > 0 && e[0].done;
          ) {
            const t = e.shift();
            setTimeout(t.callback, 0);
          }
        },
        callback: t,
      };
    return (e.push(i), i);
  }
  get _loadTestFont() {
    return Me(
      this,
      "_loadTestFont",
      atob(
        "T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==",
      ),
    );
  }
  _prepareFontLoadEvent(t, e) {
    function i(t, e) {
      return (
        (t.charCodeAt(e) << 24) |
        (t.charCodeAt(e + 1) << 16) |
        (t.charCodeAt(e + 2) << 8) |
        (255 & t.charCodeAt(e + 3))
      );
    }
    function s(t, e, i, s) {
      return t.substring(0, e) + s + t.substring(e + i);
    }
    let n, a;
    const r = this._document.createElement("canvas");
    ((r.width = 1), (r.height = 1));
    const o = r.getContext("2d");
    let h = 0;
    const l = `lt${Date.now()}${this.loadTestFontId++}`;
    let c = this._loadTestFont;
    c = s(c, 976, l.length, l);
    const d = 1482184792;
    let u = i(c, 16);
    for (n = 0, a = l.length - 3; n < a; n += 4) u = (u - d + i(l, n)) | 0;
    var p;
    (n < l.length && (u = (u - d + i(l + "XXX", n)) | 0),
      (c = s(
        c,
        16,
        4,
        ((p = u),
        String.fromCharCode(
          (p >> 24) & 255,
          (p >> 16) & 255,
          (p >> 8) & 255,
          255 & p,
        )),
      )));
    const g = `@font-face {font-family:"${l}";src:${`url(data:font/opentype;base64,${btoa(c)});`}}`;
    this.insertRule(g);
    const f = this._document.createElement("div");
    ((f.style.visibility = "hidden"),
      (f.style.width = f.style.height = "10px"),
      (f.style.position = "absolute"),
      (f.style.top = f.style.left = "0px"));
    for (const e of [t.loadedName, l]) {
      const t = this._document.createElement("span");
      ((t.textContent = "Hi"), (t.style.fontFamily = e), f.append(t));
    }
    (this._document.body.append(f),
      (function t(e, i) {
        if (++h > 30) return (Ce("Load test font never loaded."), void i());
        ((o.font = "30px " + e),
          o.fillText(".", 0, 20),
          o.getImageData(0, 0, 1, 1).data[3] > 0
            ? i()
            : setTimeout(t.bind(null, e, i)));
      })(l, () => {
        (f.remove(), e.complete());
      }));
  }
}
class ji {
  constructor(t, { disableFontFace: e = !1, inspectFont: i = null }) {
    this.compiledGlyphs = Object.create(null);
    for (const e in t) this[e] = t[e];
    ((this.disableFontFace = !0 === e), (this._inspectFont = i));
  }
  createNativeFontFace() {
    if (!this.data || this.disableFontFace) return null;
    let t;
    if (this.cssFontInfo) {
      const e = { weight: this.cssFontInfo.fontWeight };
      (this.cssFontInfo.italicAngle &&
        (e.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
        (t = new FontFace(this.cssFontInfo.fontFamily, this.data, e)));
    } else t = new FontFace(this.loadedName, this.data, {});
    return (this._inspectFont?.(this), t);
  }
  createFontFaceRule() {
    if (!this.data || this.disableFontFace) return null;
    const t = `url(data:${this.mimetype};base64,${((e = this.data), Uint8Array.prototype.toBase64 ? e.toBase64() : btoa(Oe(e)))});`;
    var e;
    let i;
    if (this.cssFontInfo) {
      let e = `font-weight: ${this.cssFontInfo.fontWeight};`;
      (this.cssFontInfo.italicAngle &&
        (e += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
        (i = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${e}src:${t}}`));
    } else i = `@font-face {font-family:"${this.loadedName}";src:${t}}`;
    return (this._inspectFont?.(this, t), i);
  }
  getPathGenerator(t, e) {
    if (void 0 !== this.compiledGlyphs[e]) return this.compiledGlyphs[e];
    let i;
    try {
      i = t.get(this.loadedName + "_path_" + e);
    } catch (t) {
      Ce(`getPathGenerator - ignoring character: "${t}".`);
    }
    if (!Array.isArray(i) || 0 === i.length)
      return (this.compiledGlyphs[e] = function (t, e) {});
    const s = [];
    for (let t = 0, e = i.length; t < e; )
      switch (i[t++]) {
        case qe:
          {
            const [e, n, a, r, o, h] = i.slice(t, t + 6);
            (s.push((t) => t.bezierCurveTo(e, n, a, r, o, h)), (t += 6));
          }
          break;
        case Ye:
          {
            const [e, n] = i.slice(t, t + 2);
            (s.push((t) => t.moveTo(e, n)), (t += 2));
          }
          break;
        case Xe:
          {
            const [e, n] = i.slice(t, t + 2);
            (s.push((t) => t.lineTo(e, n)), (t += 2));
          }
          break;
        case Ke:
          {
            const [e, n, a, r] = i.slice(t, t + 4);
            (s.push((t) => t.quadraticCurveTo(e, n, a, r)), (t += 4));
          }
          break;
        case Qe:
          s.push((t) => t.restore());
          break;
        case Je:
          s.push((t) => t.save());
          break;
        case Ze:
          Se(
            2 === s.length,
            "Scale command is only valid at the third position.",
          );
          break;
        case ti:
          {
            const [e, n, a, r, o, h] = i.slice(t, t + 6);
            (s.push((t) => t.transform(e, n, a, r, o, h)), (t += 6));
          }
          break;
        case ei: {
          const [e, n] = i.slice(t, t + 2);
          (s.push((t) => t.translate(e, n)), (t += 2));
        }
      }
    return (this.compiledGlyphs[e] = function (t, e) {
      (s[0](t), s[1](t), t.scale(e, -e));
      for (let e = 2, i = s.length; e < i; e++) s[e](t);
    });
  }
}
class $i {
  #Fe = !1;
  constructor({ enableHWA: t = !1 }) {
    this.#Fe = t;
  }
  create(t, e) {
    if (t <= 0 || e <= 0) throw new Error("Invalid canvas size");
    const i = this._createCanvas(t, e);
    return {
      canvas: i,
      context: i.getContext("2d", { willReadFrequently: !this.#Fe }),
    };
  }
  reset(t, e, i) {
    if (!t.canvas) throw new Error("Canvas is not specified");
    if (e <= 0 || i <= 0) throw new Error("Invalid canvas size");
    ((t.canvas.width = e), (t.canvas.height = i));
  }
  destroy(t) {
    if (!t.canvas) throw new Error("Canvas is not specified");
    ((t.canvas.width = 0),
      (t.canvas.height = 0),
      (t.canvas = null),
      (t.context = null));
  }
  _createCanvas(t, e) {
    Ee("Abstract method `_createCanvas` called.");
  }
}
class Gi {
  constructor({ baseUrl: t = null, isCompressed: e = !0 }) {
    ((this.baseUrl = t), (this.isCompressed = e));
  }
  async fetch({ name: t }) {
    if (!this.baseUrl)
      throw new Error(
        "Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.",
      );
    if (!t) throw new Error("CMap name must be specified.");
    const e = this.baseUrl + t + (this.isCompressed ? ".bcmap" : "");
    return this._fetch(e)
      .then((t) => ({ cMapData: t, isCompressed: this.isCompressed }))
      .catch((t) => {
        throw new Error(
          `Unable to load ${this.isCompressed ? "binary " : ""}CMap at: ${e}`,
        );
      });
  }
  async _fetch(t) {
    Ee("Abstract method `_fetch` called.");
  }
}
class Vi extends Gi {
  async _fetch(t) {
    const e = await ni(t, this.isCompressed ? "arraybuffer" : "text");
    return e instanceof ArrayBuffer ? new Uint8Array(e) : Be(e);
  }
}
class Wi {
  addFilter(t) {
    return "none";
  }
  addHCMFilter(t, e) {
    return "none";
  }
  addAlphaFilter(t) {
    return "none";
  }
  addLuminosityFilter(t) {
    return "none";
  }
  addHighlightHCMFilter(t, e, i, s, n) {
    return "none";
  }
  destroy(t = !1) {}
}
class qi {
  constructor({ baseUrl: t = null }) {
    this.baseUrl = t;
  }
  async fetch({ filename: t }) {
    if (!this.baseUrl)
      throw new Error(
        "Ensure that the `standardFontDataUrl` API parameter is provided.",
      );
    if (!t) throw new Error("Font filename must be specified.");
    const e = `${this.baseUrl}${t}`;
    return this._fetch(e).catch((t) => {
      throw new Error(`Unable to load font data at: ${e}`);
    });
  }
  async _fetch(t) {
    Ee("Abstract method `_fetch` called.");
  }
}
class Yi extends qi {
  async _fetch(t) {
    const e = await ni(t, "arraybuffer");
    return new Uint8Array(e);
  }
}
if (Et) {
  var Xi = Promise.withResolvers(),
    Ki = null;
  (async () => {
    const t = await Promise.resolve().then(function () {
        return Mr;
      }),
      e = await Promise.resolve().then(function () {
        return Mr;
      }),
      i = await Promise.resolve().then(function () {
        return Mr;
      }),
      s = await Promise.resolve().then(function () {
        return Mr;
      });
    return new Map(
      Object.entries({
        fs: t,
        http: e,
        https: i,
        url: s,
        canvas: undefined,
        path2d: undefined,
      }),
    );
  })().then(
    (t) => {
      ((Ki = t), Xi.resolve());
    },
    (t) => {
      (Ce(`loadPackages: ${t}`), (Ki = new Map()), Xi.resolve());
    },
  );
}
class Qi {
  static get promise() {
    return Xi.promise;
  }
  static get(t) {
    return Ki?.get(t);
  }
}
async function Ji(t) {
  const e = Qi.get("fs"),
    i = await e.promises.readFile(t);
  return new Uint8Array(i);
}
const Zi = "Fill",
  ts = "Stroke",
  es = "Shading";
function is(t, e) {
  if (!e) return;
  const i = e[2] - e[0],
    s = e[3] - e[1],
    n = new Path2D();
  (n.rect(e[0], e[1], i, s), t.clip(n));
}
class ss {
  getPattern() {
    Ee("Abstract method `getPattern` called.");
  }
}
class ns extends ss {
  constructor(t) {
    (super(),
      (this._type = t[1]),
      (this._bbox = t[2]),
      (this._colorStops = t[3]),
      (this._p0 = t[4]),
      (this._p1 = t[5]),
      (this._r0 = t[6]),
      (this._r1 = t[7]),
      (this.matrix = null));
  }
  _createGradient(t) {
    let e;
    "axial" === this._type
      ? (e = t.createLinearGradient(
          this._p0[0],
          this._p0[1],
          this._p1[0],
          this._p1[1],
        ))
      : "radial" === this._type &&
        (e = t.createRadialGradient(
          this._p0[0],
          this._p0[1],
          this._r0,
          this._p1[0],
          this._p1[1],
          this._r1,
        ));
    for (const t of this._colorStops) e.addColorStop(t[0], t[1]);
    return e;
  }
  getPattern(t, e, i, s) {
    let n;
    if (s === ts || s === Zi) {
      const a = e.current.getClippedPathBoundingBox(s, vi(t)) || [0, 0, 0, 0],
        r = Math.ceil(a[2] - a[0]) || 1,
        o = Math.ceil(a[3] - a[1]) || 1,
        h = e.cachedCanvases.getCanvas("pattern", r, o),
        l = h.context;
      (l.clearRect(0, 0, l.canvas.width, l.canvas.height),
        l.beginPath(),
        l.rect(0, 0, l.canvas.width, l.canvas.height),
        l.translate(-a[0], -a[1]),
        (i = je.transform(i, [1, 0, 0, 1, a[0], a[1]])),
        l.transform(...e.baseTransform),
        this.matrix && l.transform(...this.matrix),
        is(l, this._bbox),
        (l.fillStyle = this._createGradient(l)),
        l.fill(),
        (n = t.createPattern(h.canvas, "no-repeat")));
      const c = new DOMMatrix(i);
      n.setTransform(c);
    } else (is(t, this._bbox), (n = this._createGradient(t)));
    return n;
  }
}
function as(t, e, i, s, n, a, r, o) {
  const h = e.coords,
    l = e.colors,
    c = t.data,
    d = 4 * t.width;
  let u;
  (h[i + 1] > h[s + 1] &&
    ((u = i), (i = s), (s = u), (u = a), (a = r), (r = u)),
    h[s + 1] > h[n + 1] &&
      ((u = s), (s = n), (n = u), (u = r), (r = o), (o = u)),
    h[i + 1] > h[s + 1] &&
      ((u = i), (i = s), (s = u), (u = a), (a = r), (r = u)));
  const p = (h[i] + e.offsetX) * e.scaleX,
    g = (h[i + 1] + e.offsetY) * e.scaleY,
    f = (h[s] + e.offsetX) * e.scaleX,
    m = (h[s + 1] + e.offsetY) * e.scaleY,
    b = (h[n] + e.offsetX) * e.scaleX,
    v = (h[n + 1] + e.offsetY) * e.scaleY;
  if (g >= v) return;
  const A = l[a],
    y = l[a + 1],
    w = l[a + 2],
    _ = l[r],
    x = l[r + 1],
    C = l[r + 2],
    E = l[o],
    S = l[o + 1],
    T = l[o + 2],
    M = Math.round(g),
    k = Math.round(v);
  let P, R, I, D, L, F, N, O;
  for (let t = M; t <= k; t++) {
    if (t < m) {
      const e = t < g ? 0 : (g - t) / (g - m);
      ((P = p - (p - f) * e),
        (R = A - (A - _) * e),
        (I = y - (y - x) * e),
        (D = w - (w - C) * e));
    } else {
      let e;
      ((e = t > v ? 1 : m === v ? 0 : (m - t) / (m - v)),
        (P = f - (f - b) * e),
        (R = _ - (_ - E) * e),
        (I = x - (x - S) * e),
        (D = C - (C - T) * e));
    }
    let e;
    ((e = t < g ? 0 : t > v ? 1 : (g - t) / (g - v)),
      (L = p - (p - b) * e),
      (F = A - (A - E) * e),
      (N = y - (y - S) * e),
      (O = w - (w - T) * e));
    const i = Math.round(Math.min(P, L)),
      s = Math.round(Math.max(P, L));
    let n = d * t + 4 * i;
    for (let t = i; t <= s; t++)
      ((e = (P - t) / (P - L)),
        e < 0 ? (e = 0) : e > 1 && (e = 1),
        (c[n++] = (R - (R - F) * e) | 0),
        (c[n++] = (I - (I - N) * e) | 0),
        (c[n++] = (D - (D - O) * e) | 0),
        (c[n++] = 255));
  }
}
function rs(t, e, i) {
  const s = e.coords,
    n = e.colors;
  let a, r;
  switch (e.type) {
    case "lattice":
      const o = e.verticesPerRow,
        h = Math.floor(s.length / o) - 1,
        l = o - 1;
      for (a = 0; a < h; a++) {
        let e = a * o;
        for (let a = 0; a < l; a++, e++)
          (as(t, i, s[e], s[e + 1], s[e + o], n[e], n[e + 1], n[e + o]),
            as(
              t,
              i,
              s[e + o + 1],
              s[e + 1],
              s[e + o],
              n[e + o + 1],
              n[e + 1],
              n[e + o],
            ));
      }
      break;
    case "triangles":
      for (a = 0, r = s.length; a < r; a += 3)
        as(t, i, s[a], s[a + 1], s[a + 2], n[a], n[a + 1], n[a + 2]);
      break;
    default:
      throw new Error("illegal figure");
  }
}
class os extends ss {
  constructor(t) {
    (super(),
      (this._coords = t[2]),
      (this._colors = t[3]),
      (this._figures = t[4]),
      (this._bounds = t[5]),
      (this._bbox = t[7]),
      (this._background = t[8]),
      (this.matrix = null));
  }
  _createMeshCanvas(t, e, i) {
    const s = Math.floor(this._bounds[0]),
      n = Math.floor(this._bounds[1]),
      a = Math.ceil(this._bounds[2]) - s,
      r = Math.ceil(this._bounds[3]) - n,
      o = Math.min(Math.ceil(Math.abs(a * t[0] * 1.1)), 3e3),
      h = Math.min(Math.ceil(Math.abs(r * t[1] * 1.1)), 3e3),
      l = a / o,
      c = r / h,
      d = {
        coords: this._coords,
        colors: this._colors,
        offsetX: -s,
        offsetY: -n,
        scaleX: 1 / l,
        scaleY: 1 / c,
      },
      u = o + 4,
      p = h + 4,
      g = i.getCanvas("mesh", u, p),
      f = g.context,
      m = f.createImageData(o, h);
    if (e) {
      const t = m.data;
      for (let i = 0, s = t.length; i < s; i += 4)
        ((t[i] = e[0]), (t[i + 1] = e[1]), (t[i + 2] = e[2]), (t[i + 3] = 255));
    }
    for (const t of this._figures) rs(m, t, d);
    f.putImageData(m, 2, 2);
    return {
      canvas: g.canvas,
      offsetX: s - 2 * l,
      offsetY: n - 2 * c,
      scaleX: l,
      scaleY: c,
    };
  }
  getPattern(t, e, i, s) {
    let n;
    if ((is(t, this._bbox), s === es))
      n = je.singularValueDecompose2dScale(vi(t));
    else if (
      ((n = je.singularValueDecompose2dScale(e.baseTransform)), this.matrix)
    ) {
      const t = je.singularValueDecompose2dScale(this.matrix);
      n = [n[0] * t[0], n[1] * t[1]];
    }
    const a = this._createMeshCanvas(
      n,
      s === es ? null : this._background,
      e.cachedCanvases,
    );
    return (
      s !== es &&
        (t.setTransform(...e.baseTransform),
        this.matrix && t.transform(...this.matrix)),
      t.translate(a.offsetX, a.offsetY),
      t.scale(a.scaleX, a.scaleY),
      t.createPattern(a.canvas, "no-repeat")
    );
  }
}
class hs extends ss {
  getPattern() {
    return "hotpink";
  }
}
const ls = 1,
  cs = 2;
class ds {
  static MAX_PATTERN_SIZE = 3e3;
  constructor(t, e, i, s, n) {
    ((this.operatorList = t[2]),
      (this.matrix = t[3]),
      (this.bbox = t[4]),
      (this.xstep = t[5]),
      (this.ystep = t[6]),
      (this.paintType = t[7]),
      (this.tilingType = t[8]),
      (this.color = e),
      (this.ctx = i),
      (this.canvasGraphicsFactory = s),
      (this.baseTransform = n));
  }
  createPatternCanvas(t) {
    const {
      bbox: e,
      operatorList: i,
      paintType: s,
      tilingType: n,
      color: a,
      canvasGraphicsFactory: r,
    } = this;
    let { xstep: o, ystep: h } = this;
    ((o = Math.abs(o)), (h = Math.abs(h)), xe("TilingType: " + n));
    const l = e[0],
      c = e[1],
      d = e[2],
      u = e[3],
      p = d - l,
      g = u - c,
      f = je.singularValueDecompose2dScale(this.matrix),
      m = je.singularValueDecompose2dScale(this.baseTransform),
      b = f[0] * m[0],
      v = f[1] * m[1];
    let A = p,
      y = g,
      w = !1,
      _ = !1;
    const x = Math.ceil(o * b),
      C = Math.ceil(h * v);
    (x >= Math.ceil(p * b) ? (A = o) : (w = !0),
      C >= Math.ceil(g * v) ? (y = h) : (_ = !0));
    const E = this.getSizeAndScale(A, this.ctx.canvas.width, b),
      S = this.getSizeAndScale(y, this.ctx.canvas.height, v),
      T = t.cachedCanvases.getCanvas("pattern", E.size, S.size),
      M = T.context,
      k = r.createCanvasGraphics(M);
    if (
      ((k.groupLevel = t.groupLevel),
      this.setFillAndStrokeStyleToContext(k, s, a),
      M.translate(-E.scale * l, -S.scale * c),
      k.transform(E.scale, 0, 0, S.scale, 0, 0),
      M.save(),
      this.clipBbox(k, l, c, d, u),
      (k.baseTransform = vi(k.ctx)),
      k.executeOperatorList(i),
      k.endDrawing(),
      M.restore(),
      w || _)
    ) {
      const e = T.canvas;
      (w && (A = o), _ && (y = h));
      const i = this.getSizeAndScale(A, this.ctx.canvas.width, b),
        s = this.getSizeAndScale(y, this.ctx.canvas.height, v),
        n = i.size,
        a = s.size,
        r = t.cachedCanvases.getCanvas("pattern-workaround", n, a),
        d = r.context,
        u = w ? Math.floor(p / o) : 0,
        f = _ ? Math.floor(g / h) : 0;
      for (let t = 0; t <= u; t++)
        for (let i = 0; i <= f; i++)
          d.drawImage(e, n * t, a * i, n, a, 0, 0, n, a);
      return {
        canvas: r.canvas,
        scaleX: i.scale,
        scaleY: s.scale,
        offsetX: l,
        offsetY: c,
      };
    }
    return {
      canvas: T.canvas,
      scaleX: E.scale,
      scaleY: S.scale,
      offsetX: l,
      offsetY: c,
    };
  }
  getSizeAndScale(t, e, i) {
    const s = Math.max(ds.MAX_PATTERN_SIZE, e);
    let n = Math.ceil(t * i);
    return (n >= s ? (n = s) : (i = n / t), { scale: i, size: n });
  }
  clipBbox(t, e, i, s, n) {
    const a = s - e,
      r = n - i;
    (t.ctx.rect(e, i, a, r),
      t.current.updateRectMinMax(vi(t.ctx), [e, i, s, n]),
      t.clip(),
      t.endPath());
  }
  setFillAndStrokeStyleToContext(t, e, i) {
    const s = t.ctx,
      n = t.current;
    switch (e) {
      case ls:
        const t = this.ctx;
        ((s.fillStyle = t.fillStyle),
          (s.strokeStyle = t.strokeStyle),
          (n.fillColor = t.fillStyle),
          (n.strokeColor = t.strokeStyle));
        break;
      case cs:
        const a = je.makeHexColor(i[0], i[1], i[2]);
        ((s.fillStyle = a),
          (s.strokeStyle = a),
          (n.fillColor = a),
          (n.strokeColor = a));
        break;
      default:
        throw new Fe(`Unsupported paint type: ${e}`);
    }
  }
  getPattern(t, e, i, s) {
    let n = i;
    s !== es &&
      ((n = je.transform(n, e.baseTransform)),
      this.matrix && (n = je.transform(n, this.matrix)));
    const a = this.createPatternCanvas(e);
    let r = new DOMMatrix(n);
    ((r = r.translate(a.offsetX, a.offsetY)),
      (r = r.scale(1 / a.scaleX, 1 / a.scaleY)));
    const o = t.createPattern(a.canvas, "repeat");
    return (o.setTransform(r), o);
  }
}
function us({
  src: t,
  srcPos: e = 0,
  dest: i,
  width: s,
  height: n,
  nonBlackColor: a = 4294967295,
  inverseDecode: r = !1,
}) {
  const o = He.isLittleEndian ? 4278190080 : 255,
    [h, l] = r ? [a, o] : [o, a],
    c = s >> 3,
    d = 7 & s,
    u = t.length;
  i = new Uint32Array(i.buffer);
  let p = 0;
  for (let s = 0; s < n; s++) {
    for (const s = e + c; e < s; e++) {
      const s = e < u ? t[e] : 255;
      ((i[p++] = 128 & s ? l : h),
        (i[p++] = 64 & s ? l : h),
        (i[p++] = 32 & s ? l : h),
        (i[p++] = 16 & s ? l : h),
        (i[p++] = 8 & s ? l : h),
        (i[p++] = 4 & s ? l : h),
        (i[p++] = 2 & s ? l : h),
        (i[p++] = 1 & s ? l : h));
    }
    if (0 === d) continue;
    const s = e < u ? t[e++] : 255;
    for (let t = 0; t < d; t++) i[p++] = s & (1 << (7 - t)) ? l : h;
  }
  return { srcPos: e, destPos: p };
}
const ps = 16;
class gs {
  constructor(t) {
    ((this.canvasFactory = t), (this.cache = Object.create(null)));
  }
  getCanvas(t, e, i) {
    let s;
    return (
      void 0 !== this.cache[t]
        ? ((s = this.cache[t]), this.canvasFactory.reset(s, e, i))
        : ((s = this.canvasFactory.create(e, i)), (this.cache[t] = s)),
      s
    );
  }
  delete(t) {
    delete this.cache[t];
  }
  clear() {
    for (const t in this.cache) {
      const e = this.cache[t];
      (this.canvasFactory.destroy(e), delete this.cache[t]);
    }
  }
}
function fs(t, e, i, s, n, a, r, o, h, l) {
  const [c, d, u, p, g, f] = vi(t);
  if (0 === d && 0 === u) {
    const m = r * c + g,
      b = Math.round(m),
      v = o * p + f,
      A = Math.round(v),
      y = (r + h) * c + g,
      w = Math.abs(Math.round(y) - b) || 1,
      _ = (o + l) * p + f,
      x = Math.abs(Math.round(_) - A) || 1;
    return (
      t.setTransform(Math.sign(c), 0, 0, Math.sign(p), b, A),
      t.drawImage(e, i, s, n, a, 0, 0, w, x),
      t.setTransform(c, d, u, p, g, f),
      [w, x]
    );
  }
  if (0 === c && 0 === p) {
    const m = o * u + g,
      b = Math.round(m),
      v = r * d + f,
      A = Math.round(v),
      y = (o + l) * u + g,
      w = Math.abs(Math.round(y) - b) || 1,
      _ = (r + h) * d + f,
      x = Math.abs(Math.round(_) - A) || 1;
    return (
      t.setTransform(0, Math.sign(d), Math.sign(u), 0, b, A),
      t.drawImage(e, i, s, n, a, 0, 0, x, w),
      t.setTransform(c, d, u, p, g, f),
      [x, w]
    );
  }
  t.drawImage(e, i, s, n, a, r, o, h, l);
  return [Math.hypot(c, d) * h, Math.hypot(u, p) * l];
}
class ms {
  constructor(t, e) {
    ((this.alphaIsShape = !1),
      (this.fontSize = 0),
      (this.fontSizeScale = 1),
      (this.textMatrix = St),
      (this.textMatrixScale = 1),
      (this.fontMatrix = Tt),
      (this.leading = 0),
      (this.x = 0),
      (this.y = 0),
      (this.lineX = 0),
      (this.lineY = 0),
      (this.charSpacing = 0),
      (this.wordSpacing = 0),
      (this.textHScale = 1),
      (this.textRenderingMode = Ut),
      (this.textRise = 0),
      (this.fillColor = "#000000"),
      (this.strokeColor = "#000000"),
      (this.patternFill = !1),
      (this.fillAlpha = 1),
      (this.strokeAlpha = 1),
      (this.lineWidth = 1),
      (this.activeSMask = null),
      (this.transferMaps = "none"),
      this.startNewPathAndClipBox([0, 0, t, e]));
  }
  clone() {
    const t = Object.create(this);
    return ((t.clipBox = this.clipBox.slice()), t);
  }
  setCurrentPoint(t, e) {
    ((this.x = t), (this.y = e));
  }
  updatePathMinMax(t, e, i) {
    (([e, i] = je.applyTransform([e, i], t)),
      (this.minX = Math.min(this.minX, e)),
      (this.minY = Math.min(this.minY, i)),
      (this.maxX = Math.max(this.maxX, e)),
      (this.maxY = Math.max(this.maxY, i)));
  }
  updateRectMinMax(t, e) {
    const i = je.applyTransform(e, t),
      s = je.applyTransform(e.slice(2), t),
      n = je.applyTransform([e[0], e[3]], t),
      a = je.applyTransform([e[2], e[1]], t);
    ((this.minX = Math.min(this.minX, i[0], s[0], n[0], a[0])),
      (this.minY = Math.min(this.minY, i[1], s[1], n[1], a[1])),
      (this.maxX = Math.max(this.maxX, i[0], s[0], n[0], a[0])),
      (this.maxY = Math.max(this.maxY, i[1], s[1], n[1], a[1])));
  }
  updateScalingPathMinMax(t, e) {
    (je.scaleMinMax(t, e),
      (this.minX = Math.min(this.minX, e[0])),
      (this.minY = Math.min(this.minY, e[1])),
      (this.maxX = Math.max(this.maxX, e[2])),
      (this.maxY = Math.max(this.maxY, e[3])));
  }
  updateCurvePathMinMax(t, e, i, s, n, a, r, o, h, l) {
    const c = je.bezierBoundingBox(e, i, s, n, a, r, o, h, l);
    l || this.updateRectMinMax(t, c);
  }
  getPathBoundingBox(t = Zi, e = null) {
    const i = [this.minX, this.minY, this.maxX, this.maxY];
    if (t === ts) {
      e || Ee("Stroke bounding box must include transform.");
      const t = je.singularValueDecompose2dScale(e),
        s = (t[0] * this.lineWidth) / 2,
        n = (t[1] * this.lineWidth) / 2;
      ((i[0] -= s), (i[1] -= n), (i[2] += s), (i[3] += n));
    }
    return i;
  }
  updateClipFromPath() {
    const t = je.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(t || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minX === 1 / 0;
  }
  startNewPathAndClipBox(t) {
    ((this.clipBox = t),
      (this.minX = 1 / 0),
      (this.minY = 1 / 0),
      (this.maxX = 0),
      (this.maxY = 0));
  }
  getClippedPathBoundingBox(t = Zi, e = null) {
    return je.intersect(this.clipBox, this.getPathBoundingBox(t, e));
  }
}
function bs(t, e) {
  if ("undefined" != typeof ImageData && e instanceof ImageData)
    return void t.putImageData(e, 0, 0);
  const i = e.height,
    s = e.width,
    n = i % ps,
    a = (i - n) / ps,
    r = 0 === n ? a : a + 1,
    o = t.createImageData(s, ps);
  let h,
    l = 0;
  const c = e.data,
    d = o.data;
  let u, p, g, f;
  if (e.kind === qt.GRAYSCALE_1BPP) {
    const e = c.byteLength,
      i = new Uint32Array(d.buffer, 0, d.byteLength >> 2),
      f = i.length,
      m = (s + 7) >> 3,
      b = 4294967295,
      v = He.isLittleEndian ? 4278190080 : 255;
    for (u = 0; u < r; u++) {
      for (g = u < a ? ps : n, h = 0, p = 0; p < g; p++) {
        const t = e - l;
        let n = 0;
        const a = t > m ? s : 8 * t - 7,
          r = -8 & a;
        let o = 0,
          d = 0;
        for (; n < r; n += 8)
          ((d = c[l++]),
            (i[h++] = 128 & d ? b : v),
            (i[h++] = 64 & d ? b : v),
            (i[h++] = 32 & d ? b : v),
            (i[h++] = 16 & d ? b : v),
            (i[h++] = 8 & d ? b : v),
            (i[h++] = 4 & d ? b : v),
            (i[h++] = 2 & d ? b : v),
            (i[h++] = 1 & d ? b : v));
        for (; n < a; n++)
          (0 === o && ((d = c[l++]), (o = 128)),
            (i[h++] = d & o ? b : v),
            (o >>= 1));
      }
      for (; h < f; ) i[h++] = 0;
      t.putImageData(o, 0, u * ps);
    }
  } else if (e.kind === qt.RGBA_32BPP) {
    for (p = 0, f = s * ps * 4, u = 0; u < a; u++)
      (d.set(c.subarray(l, l + f)),
        (l += f),
        t.putImageData(o, 0, p),
        (p += ps));
    u < r &&
      ((f = s * n * 4), d.set(c.subarray(l, l + f)), t.putImageData(o, 0, p));
  } else {
    if (e.kind !== qt.RGB_24BPP) throw new Error(`bad image kind: ${e.kind}`);
    for (g = ps, f = s * g, u = 0; u < r; u++) {
      for (u >= a && ((g = n), (f = s * g)), h = 0, p = f; p--; )
        ((d[h++] = c[l++]),
          (d[h++] = c[l++]),
          (d[h++] = c[l++]),
          (d[h++] = 255));
      t.putImageData(o, 0, u * ps);
    }
  }
}
function vs(t, e) {
  if (e.bitmap) return void t.drawImage(e.bitmap, 0, 0);
  const i = e.height,
    s = e.width,
    n = i % ps,
    a = (i - n) / ps,
    r = 0 === n ? a : a + 1,
    o = t.createImageData(s, ps);
  let h = 0;
  const l = e.data,
    c = o.data;
  for (let e = 0; e < r; e++) {
    const i = e < a ? ps : n;
    (({ srcPos: h } = us({
      src: l,
      srcPos: h,
      dest: c,
      width: s,
      height: i,
      nonBlackColor: 0,
    })),
      t.putImageData(o, 0, e * ps));
  }
}
function As(t, e) {
  const i = [
    "strokeStyle",
    "fillStyle",
    "fillRule",
    "globalAlpha",
    "lineWidth",
    "lineCap",
    "lineJoin",
    "miterLimit",
    "globalCompositeOperation",
    "font",
    "filter",
  ];
  for (const s of i) void 0 !== t[s] && (e[s] = t[s]);
  void 0 !== t.setLineDash &&
    (e.setLineDash(t.getLineDash()), (e.lineDashOffset = t.lineDashOffset));
}
function ys(t) {
  if (
    ((t.strokeStyle = t.fillStyle = "#000000"),
    (t.fillRule = "nonzero"),
    (t.globalAlpha = 1),
    (t.lineWidth = 1),
    (t.lineCap = "butt"),
    (t.lineJoin = "miter"),
    (t.miterLimit = 10),
    (t.globalCompositeOperation = "source-over"),
    (t.font = "10px sans-serif"),
    void 0 !== t.setLineDash && (t.setLineDash([]), (t.lineDashOffset = 0)),
    !Et)
  ) {
    const { filter: e } = t;
    "none" !== e && "" !== e && (t.filter = "none");
  }
}
function ws(t, e) {
  if (e) return !0;
  const i = je.singularValueDecompose2dScale(t);
  ((i[0] = Math.fround(i[0])), (i[1] = Math.fround(i[1])));
  const s = Math.fround(
    (globalThis.devicePixelRatio || 1) * si.PDF_TO_CSS_UNITS,
  );
  return i[0] <= s && i[1] <= s;
}
const _s = ["butt", "round", "square"],
  xs = ["miter", "round", "bevel"],
  Cs = {},
  Es = {};
class Ss {
  constructor(
    t,
    e,
    i,
    s,
    n,
    { optionalContentConfig: a, markedContentStack: r = null },
    o,
    h,
  ) {
    ((this.ctx = t),
      (this.current = new ms(this.ctx.canvas.width, this.ctx.canvas.height)),
      (this.stateStack = []),
      (this.pendingClip = null),
      (this.pendingEOFill = !1),
      (this.res = null),
      (this.xobjs = null),
      (this.commonObjs = e),
      (this.objs = i),
      (this.canvasFactory = s),
      (this.filterFactory = n),
      (this.groupStack = []),
      (this.processingType3 = null),
      (this.baseTransform = null),
      (this.baseTransformStack = []),
      (this.groupLevel = 0),
      (this.smaskStack = []),
      (this.smaskCounter = 0),
      (this.tempSMask = null),
      (this.suspendedCtx = null),
      (this.contentVisible = !0),
      (this.markedContentStack = r || []),
      (this.optionalContentConfig = a),
      (this.cachedCanvases = new gs(this.canvasFactory)),
      (this.cachedPatterns = new Map()),
      (this.annotationCanvasMap = o),
      (this.viewportScale = 1),
      (this.outputScaleX = 1),
      (this.outputScaleY = 1),
      (this.pageColors = h),
      (this._cachedScaleForStroking = [-1, 0]),
      (this._cachedGetSinglePixelWidth = null),
      (this._cachedBitmapsMap = new Map()));
  }
  getObject(t, e = null) {
    return "string" == typeof t
      ? t.startsWith("g_")
        ? this.commonObjs.get(t)
        : this.objs.get(t)
      : e;
  }
  beginDrawing({
    transform: t,
    viewport: e,
    transparency: i = !1,
    background: s = null,
  }) {
    const n = this.ctx.canvas.width,
      a = this.ctx.canvas.height,
      r = this.ctx.fillStyle;
    if (
      ((this.ctx.fillStyle = s || "#ffffff"),
      this.ctx.fillRect(0, 0, n, a),
      (this.ctx.fillStyle = r),
      i)
    ) {
      const t = this.cachedCanvases.getCanvas("transparent", n, a);
      ((this.compositeCtx = this.ctx),
        (this.transparentCanvas = t.canvas),
        (this.ctx = t.context),
        this.ctx.save(),
        this.ctx.transform(...vi(this.compositeCtx)));
    }
    (this.ctx.save(),
      ys(this.ctx),
      t &&
        (this.ctx.transform(...t),
        (this.outputScaleX = t[0]),
        (this.outputScaleY = t[0])),
      this.ctx.transform(...e.transform),
      (this.viewportScale = e.scale),
      (this.baseTransform = vi(this.ctx)));
  }
  executeOperatorList(t, e, i, s) {
    const n = t.argsArray,
      a = t.fnArray;
    let r = e || 0;
    const o = n.length;
    if (o === r) return r;
    const h = o - r > 10 && "function" == typeof i,
      l = h ? Date.now() + 15 : 0;
    let c = 0;
    const d = this.commonObjs,
      u = this.objs;
    let p;
    for (;;) {
      if (void 0 !== s && r === s.nextBreakPoint) return (s.breakIt(r, i), r);
      if (((p = a[r]), p !== ve.dependency)) this[p].apply(this, n[r]);
      else
        for (const t of n[r]) {
          const e = t.startsWith("g_") ? d : u;
          if (!e.has(t)) return (e.get(t, i), r);
        }
      if ((r++, r === o)) return r;
      if (h && ++c > 10) {
        if (Date.now() > l) return (i(), r);
        c = 0;
      }
    }
  }
  #Ne() {
    for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
    ((this.current.activeSMask = null),
      this.ctx.restore(),
      this.transparentCanvas &&
        ((this.ctx = this.compositeCtx),
        this.ctx.save(),
        this.ctx.setTransform(1, 0, 0, 1, 0, 0),
        this.ctx.drawImage(this.transparentCanvas, 0, 0),
        this.ctx.restore(),
        (this.transparentCanvas = null)));
  }
  endDrawing() {
    (this.#Ne(), this.cachedCanvases.clear(), this.cachedPatterns.clear());
    for (const t of this._cachedBitmapsMap.values()) {
      for (const e of t.values())
        "undefined" != typeof HTMLCanvasElement &&
          e instanceof HTMLCanvasElement &&
          (e.width = e.height = 0);
      t.clear();
    }
    (this._cachedBitmapsMap.clear(), this.#Oe());
  }
  #Oe() {
    if (this.pageColors) {
      const t = this.filterFactory.addHCMFilter(
        this.pageColors.foreground,
        this.pageColors.background,
      );
      if ("none" !== t) {
        const e = this.ctx.filter;
        ((this.ctx.filter = t),
          this.ctx.drawImage(this.ctx.canvas, 0, 0),
          (this.ctx.filter = e));
      }
    }
  }
  _scaleImage(t, e) {
    const i = t.width ?? t.displayWidth,
      s = t.height ?? t.displayHeight;
    let n,
      a,
      r = Math.max(Math.hypot(e[0], e[1]), 1),
      o = Math.max(Math.hypot(e[2], e[3]), 1),
      h = i,
      l = s,
      c = "prescale1";
    for (; (r > 2 && h > 1) || (o > 2 && l > 1); ) {
      let e = h,
        i = l;
      (r > 2 &&
        h > 1 &&
        ((e = h >= 16384 ? Math.floor(h / 2) - 1 || 1 : Math.ceil(h / 2)),
        (r /= h / e)),
        o > 2 &&
          l > 1 &&
          ((i = l >= 16384 ? Math.floor(l / 2) - 1 || 1 : Math.ceil(l) / 2),
          (o /= l / i)),
        (n = this.cachedCanvases.getCanvas(c, e, i)),
        (a = n.context),
        a.clearRect(0, 0, e, i),
        a.drawImage(t, 0, 0, h, l, 0, 0, e, i),
        (t = n.canvas),
        (h = e),
        (l = i),
        (c = "prescale1" === c ? "prescale2" : "prescale1"));
    }
    return { img: t, paintWidth: h, paintHeight: l };
  }
  _createMaskCanvas(t) {
    const e = this.ctx,
      { width: i, height: s } = t,
      n = this.current.fillColor,
      a = this.current.patternFill,
      r = vi(e);
    let o, h, l, c;
    if ((t.bitmap || t.data) && t.count > 1) {
      const e = t.bitmap || t.data.buffer;
      ((h = JSON.stringify(a ? r : [r.slice(0, 4), n])),
        (o = this._cachedBitmapsMap.get(e)),
        o || ((o = new Map()), this._cachedBitmapsMap.set(e, o)));
      const i = o.get(h);
      if (i && !a) {
        return {
          canvas: i,
          offsetX: Math.round(Math.min(r[0], r[2]) + r[4]),
          offsetY: Math.round(Math.min(r[1], r[3]) + r[5]),
        };
      }
      l = i;
    }
    l ||
      ((c = this.cachedCanvases.getCanvas("maskCanvas", i, s)),
      vs(c.context, t));
    let d = je.transform(r, [1 / i, 0, 0, -1 / s, 0, 0]);
    d = je.transform(d, [1, 0, 0, 1, 0, -s]);
    const [u, p, g, f] = je.getAxialAlignedBoundingBox([0, 0, i, s], d),
      m = Math.round(g - u) || 1,
      b = Math.round(f - p) || 1,
      v = this.cachedCanvases.getCanvas("fillCanvas", m, b),
      A = v.context,
      y = u,
      w = p;
    (A.translate(-y, -w),
      A.transform(...d),
      l ||
        ((l = this._scaleImage(c.canvas, Ai(A))),
        (l = l.img),
        o && a && o.set(h, l)),
      (A.imageSmoothingEnabled = ws(vi(A), t.interpolate)),
      fs(A, l, 0, 0, l.width, l.height, 0, 0, i, s),
      (A.globalCompositeOperation = "source-in"));
    const _ = je.transform(Ai(A), [1, 0, 0, 1, -y, -w]);
    return (
      (A.fillStyle = a ? n.getPattern(e, this, _, Zi) : n),
      A.fillRect(0, 0, i, s),
      o && !a && (this.cachedCanvases.delete("fillCanvas"), o.set(h, v.canvas)),
      { canvas: v.canvas, offsetX: Math.round(y), offsetY: Math.round(w) }
    );
  }
  setLineWidth(t) {
    (t !== this.current.lineWidth && (this._cachedScaleForStroking[0] = -1),
      (this.current.lineWidth = t),
      (this.ctx.lineWidth = t));
  }
  setLineCap(t) {
    this.ctx.lineCap = _s[t];
  }
  setLineJoin(t) {
    this.ctx.lineJoin = xs[t];
  }
  setMiterLimit(t) {
    this.ctx.miterLimit = t;
  }
  setDash(t, e) {
    const i = this.ctx;
    void 0 !== i.setLineDash && (i.setLineDash(t), (i.lineDashOffset = e));
  }
  setRenderingIntent(t) {}
  setFlatness(t) {}
  setGState(t) {
    for (const [e, i] of t)
      switch (e) {
        case "LW":
          this.setLineWidth(i);
          break;
        case "LC":
          this.setLineCap(i);
          break;
        case "LJ":
          this.setLineJoin(i);
          break;
        case "ML":
          this.setMiterLimit(i);
          break;
        case "D":
          this.setDash(i[0], i[1]);
          break;
        case "RI":
          this.setRenderingIntent(i);
          break;
        case "FL":
          this.setFlatness(i);
          break;
        case "Font":
          this.setFont(i[0], i[1]);
          break;
        case "CA":
          this.current.strokeAlpha = i;
          break;
        case "ca":
          ((this.current.fillAlpha = i), (this.ctx.globalAlpha = i));
          break;
        case "BM":
          this.ctx.globalCompositeOperation = i;
          break;
        case "SMask":
          ((this.current.activeSMask = i ? this.tempSMask : null),
            (this.tempSMask = null),
            this.checkSMaskState());
          break;
        case "TR":
          this.ctx.filter = this.current.transferMaps =
            this.filterFactory.addFilter(i);
      }
  }
  get inSMaskMode() {
    return !!this.suspendedCtx;
  }
  checkSMaskState() {
    const t = this.inSMaskMode;
    this.current.activeSMask && !t
      ? this.beginSMaskMode()
      : !this.current.activeSMask && t && this.endSMaskMode();
  }
  beginSMaskMode() {
    if (this.inSMaskMode)
      throw new Error("beginSMaskMode called while already in smask mode");
    const t = this.ctx.canvas.width,
      e = this.ctx.canvas.height,
      i = "smaskGroupAt" + this.groupLevel,
      s = this.cachedCanvases.getCanvas(i, t, e);
    ((this.suspendedCtx = this.ctx), (this.ctx = s.context));
    const n = this.ctx;
    (n.setTransform(...vi(this.suspendedCtx)),
      As(this.suspendedCtx, n),
      (function (t, e) {
        if (t._removeMirroring)
          throw new Error("Context is already forwarding operations.");
        ((t.__originalSave = t.save),
          (t.__originalRestore = t.restore),
          (t.__originalRotate = t.rotate),
          (t.__originalScale = t.scale),
          (t.__originalTranslate = t.translate),
          (t.__originalTransform = t.transform),
          (t.__originalSetTransform = t.setTransform),
          (t.__originalResetTransform = t.resetTransform),
          (t.__originalClip = t.clip),
          (t.__originalMoveTo = t.moveTo),
          (t.__originalLineTo = t.lineTo),
          (t.__originalBezierCurveTo = t.bezierCurveTo),
          (t.__originalRect = t.rect),
          (t.__originalClosePath = t.closePath),
          (t.__originalBeginPath = t.beginPath),
          (t._removeMirroring = () => {
            ((t.save = t.__originalSave),
              (t.restore = t.__originalRestore),
              (t.rotate = t.__originalRotate),
              (t.scale = t.__originalScale),
              (t.translate = t.__originalTranslate),
              (t.transform = t.__originalTransform),
              (t.setTransform = t.__originalSetTransform),
              (t.resetTransform = t.__originalResetTransform),
              (t.clip = t.__originalClip),
              (t.moveTo = t.__originalMoveTo),
              (t.lineTo = t.__originalLineTo),
              (t.bezierCurveTo = t.__originalBezierCurveTo),
              (t.rect = t.__originalRect),
              (t.closePath = t.__originalClosePath),
              (t.beginPath = t.__originalBeginPath),
              delete t._removeMirroring);
          }),
          (t.save = function () {
            (e.save(), this.__originalSave());
          }),
          (t.restore = function () {
            (e.restore(), this.__originalRestore());
          }),
          (t.translate = function (t, i) {
            (e.translate(t, i), this.__originalTranslate(t, i));
          }),
          (t.scale = function (t, i) {
            (e.scale(t, i), this.__originalScale(t, i));
          }),
          (t.transform = function (t, i, s, n, a, r) {
            (e.transform(t, i, s, n, a, r),
              this.__originalTransform(t, i, s, n, a, r));
          }),
          (t.setTransform = function (t, i, s, n, a, r) {
            (e.setTransform(t, i, s, n, a, r),
              this.__originalSetTransform(t, i, s, n, a, r));
          }),
          (t.resetTransform = function () {
            (e.resetTransform(), this.__originalResetTransform());
          }),
          (t.rotate = function (t) {
            (e.rotate(t), this.__originalRotate(t));
          }),
          (t.clip = function (t) {
            (e.clip(t), this.__originalClip(t));
          }),
          (t.moveTo = function (t, i) {
            (e.moveTo(t, i), this.__originalMoveTo(t, i));
          }),
          (t.lineTo = function (t, i) {
            (e.lineTo(t, i), this.__originalLineTo(t, i));
          }),
          (t.bezierCurveTo = function (t, i, s, n, a, r) {
            (e.bezierCurveTo(t, i, s, n, a, r),
              this.__originalBezierCurveTo(t, i, s, n, a, r));
          }),
          (t.rect = function (t, i, s, n) {
            (e.rect(t, i, s, n), this.__originalRect(t, i, s, n));
          }),
          (t.closePath = function () {
            (e.closePath(), this.__originalClosePath());
          }),
          (t.beginPath = function () {
            (e.beginPath(), this.__originalBeginPath());
          }));
      })(n, this.suspendedCtx),
      this.setGState([
        ["BM", "source-over"],
        ["ca", 1],
        ["CA", 1],
      ]));
  }
  endSMaskMode() {
    if (!this.inSMaskMode)
      throw new Error("endSMaskMode called while not in smask mode");
    (this.ctx._removeMirroring(),
      As(this.ctx, this.suspendedCtx),
      (this.ctx = this.suspendedCtx),
      (this.suspendedCtx = null));
  }
  compose(t) {
    if (!this.current.activeSMask) return;
    t
      ? ((t[0] = Math.floor(t[0])),
        (t[1] = Math.floor(t[1])),
        (t[2] = Math.ceil(t[2])),
        (t[3] = Math.ceil(t[3])))
      : (t = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]);
    const e = this.current.activeSMask,
      i = this.suspendedCtx;
    (this.composeSMask(i, e, this.ctx, t),
      this.ctx.save(),
      this.ctx.setTransform(1, 0, 0, 1, 0, 0),
      this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height),
      this.ctx.restore());
  }
  composeSMask(t, e, i, s) {
    const n = s[0],
      a = s[1],
      r = s[2] - n,
      o = s[3] - a;
    0 !== r &&
      0 !== o &&
      (this.genericComposeSMask(
        e.context,
        i,
        r,
        o,
        e.subtype,
        e.backdrop,
        e.transferMap,
        n,
        a,
        e.offsetX,
        e.offsetY,
      ),
      t.save(),
      (t.globalAlpha = 1),
      (t.globalCompositeOperation = "source-over"),
      t.setTransform(1, 0, 0, 1, 0, 0),
      t.drawImage(i.canvas, 0, 0),
      t.restore());
  }
  genericComposeSMask(t, e, i, s, n, a, r, o, h, l, c) {
    let d = t.canvas,
      u = o - l,
      p = h - c;
    if (a) {
      const e = je.makeHexColor(...a);
      if (u < 0 || p < 0 || u + i > d.width || p + s > d.height) {
        const t = this.cachedCanvases.getCanvas("maskExtension", i, s),
          n = t.context;
        (n.drawImage(d, -u, -p),
          (n.globalCompositeOperation = "destination-atop"),
          (n.fillStyle = e),
          n.fillRect(0, 0, i, s),
          (n.globalCompositeOperation = "source-over"),
          (d = t.canvas),
          (u = p = 0));
      } else {
        (t.save(), (t.globalAlpha = 1), t.setTransform(1, 0, 0, 1, 0, 0));
        const n = new Path2D();
        (n.rect(u, p, i, s),
          t.clip(n),
          (t.globalCompositeOperation = "destination-atop"),
          (t.fillStyle = e),
          t.fillRect(u, p, i, s),
          t.restore());
      }
    }
    (e.save(),
      (e.globalAlpha = 1),
      e.setTransform(1, 0, 0, 1, 0, 0),
      "Alpha" === n && r
        ? (e.filter = this.filterFactory.addAlphaFilter(r))
        : "Luminosity" === n &&
          (e.filter = this.filterFactory.addLuminosityFilter(r)));
    const g = new Path2D();
    (g.rect(o, h, i, s),
      e.clip(g),
      (e.globalCompositeOperation = "destination-in"),
      e.drawImage(d, u, p, i, s, o, h, i, s),
      e.restore());
  }
  save() {
    this.inSMaskMode
      ? (As(this.ctx, this.suspendedCtx), this.suspendedCtx.save())
      : this.ctx.save();
    const t = this.current;
    (this.stateStack.push(t), (this.current = t.clone()));
  }
  restore() {
    (0 === this.stateStack.length && this.inSMaskMode && this.endSMaskMode(),
      0 !== this.stateStack.length &&
        ((this.current = this.stateStack.pop()),
        this.inSMaskMode
          ? (this.suspendedCtx.restore(), As(this.suspendedCtx, this.ctx))
          : this.ctx.restore(),
        this.checkSMaskState(),
        (this.pendingClip = null),
        (this._cachedScaleForStroking[0] = -1),
        (this._cachedGetSinglePixelWidth = null)));
  }
  transform(t, e, i, s, n, a) {
    (this.ctx.transform(t, e, i, s, n, a),
      (this._cachedScaleForStroking[0] = -1),
      (this._cachedGetSinglePixelWidth = null));
  }
  constructPath(t, e, i) {
    const s = this.ctx,
      n = this.current;
    let a,
      r,
      o = n.x,
      h = n.y;
    const l = vi(s),
      c = (0 === l[0] && 0 === l[3]) || (0 === l[1] && 0 === l[2]),
      d = c ? i.slice(0) : null;
    for (let i = 0, u = 0, p = t.length; i < p; i++)
      switch (0 | t[i]) {
        case ve.rectangle:
          ((o = e[u++]), (h = e[u++]));
          const t = e[u++],
            i = e[u++],
            p = o + t,
            g = h + i;
          (s.moveTo(o, h),
            0 === t || 0 === i
              ? s.lineTo(p, g)
              : (s.lineTo(p, h), s.lineTo(p, g), s.lineTo(o, g)),
            c || n.updateRectMinMax(l, [o, h, p, g]),
            s.closePath());
          break;
        case ve.moveTo:
          ((o = e[u++]),
            (h = e[u++]),
            s.moveTo(o, h),
            c || n.updatePathMinMax(l, o, h));
          break;
        case ve.lineTo:
          ((o = e[u++]),
            (h = e[u++]),
            s.lineTo(o, h),
            c || n.updatePathMinMax(l, o, h));
          break;
        case ve.curveTo:
          ((a = o),
            (r = h),
            (o = e[u + 4]),
            (h = e[u + 5]),
            s.bezierCurveTo(e[u], e[u + 1], e[u + 2], e[u + 3], o, h),
            n.updateCurvePathMinMax(
              l,
              a,
              r,
              e[u],
              e[u + 1],
              e[u + 2],
              e[u + 3],
              o,
              h,
              d,
            ),
            (u += 6));
          break;
        case ve.curveTo2:
          ((a = o),
            (r = h),
            s.bezierCurveTo(o, h, e[u], e[u + 1], e[u + 2], e[u + 3]),
            n.updateCurvePathMinMax(
              l,
              a,
              r,
              o,
              h,
              e[u],
              e[u + 1],
              e[u + 2],
              e[u + 3],
              d,
            ),
            (o = e[u + 2]),
            (h = e[u + 3]),
            (u += 4));
          break;
        case ve.curveTo3:
          ((a = o),
            (r = h),
            (o = e[u + 2]),
            (h = e[u + 3]),
            s.bezierCurveTo(e[u], e[u + 1], o, h, o, h),
            n.updateCurvePathMinMax(l, a, r, e[u], e[u + 1], o, h, o, h, d),
            (u += 4));
          break;
        case ve.closePath:
          s.closePath();
      }
    (c && n.updateScalingPathMinMax(l, d), n.setCurrentPoint(o, h));
  }
  closePath() {
    this.ctx.closePath();
  }
  stroke(t = !0) {
    const e = this.ctx,
      i = this.current.strokeColor;
    ((e.globalAlpha = this.current.strokeAlpha),
      this.contentVisible &&
        ("object" == typeof i && i?.getPattern
          ? (e.save(),
            (e.strokeStyle = i.getPattern(e, this, Ai(e), ts)),
            this.rescaleAndStroke(!1),
            e.restore())
          : this.rescaleAndStroke(!0)),
      t && this.consumePath(this.current.getClippedPathBoundingBox()),
      (e.globalAlpha = this.current.fillAlpha));
  }
  closeStroke() {
    (this.closePath(), this.stroke());
  }
  fill(t = !0) {
    const e = this.ctx,
      i = this.current.fillColor;
    let s = !1;
    this.current.patternFill &&
      (e.save(), (e.fillStyle = i.getPattern(e, this, Ai(e), Zi)), (s = !0));
    const n = this.current.getClippedPathBoundingBox();
    (this.contentVisible &&
      null !== n &&
      (this.pendingEOFill
        ? (e.fill("evenodd"), (this.pendingEOFill = !1))
        : e.fill()),
      s && e.restore(),
      t && this.consumePath(n));
  }
  eoFill() {
    ((this.pendingEOFill = !0), this.fill());
  }
  fillStroke() {
    (this.fill(!1), this.stroke(!1), this.consumePath());
  }
  eoFillStroke() {
    ((this.pendingEOFill = !0), this.fillStroke());
  }
  closeFillStroke() {
    (this.closePath(), this.fillStroke());
  }
  closeEOFillStroke() {
    ((this.pendingEOFill = !0), this.closePath(), this.fillStroke());
  }
  endPath() {
    this.consumePath();
  }
  clip() {
    this.pendingClip = Cs;
  }
  eoClip() {
    this.pendingClip = Es;
  }
  beginText() {
    ((this.current.textMatrix = St),
      (this.current.textMatrixScale = 1),
      (this.current.x = this.current.lineX = 0),
      (this.current.y = this.current.lineY = 0));
  }
  endText() {
    const t = this.pendingTextPaths,
      e = this.ctx;
    if (void 0 !== t) {
      (e.save(), e.beginPath());
      for (const i of t)
        (e.setTransform(...i.transform),
          e.translate(i.x, i.y),
          i.addToPath(e, i.fontSize));
      (e.restore(), e.clip(), e.beginPath(), delete this.pendingTextPaths);
    } else e.beginPath();
  }
  setCharSpacing(t) {
    this.current.charSpacing = t;
  }
  setWordSpacing(t) {
    this.current.wordSpacing = t;
  }
  setHScale(t) {
    this.current.textHScale = t / 100;
  }
  setLeading(t) {
    this.current.leading = -t;
  }
  setFont(t, e) {
    const i = this.commonObjs.get(t),
      s = this.current;
    if (!i) throw new Error(`Can't find font for ${t}`);
    if (
      ((s.fontMatrix = i.fontMatrix || Tt),
      (0 !== s.fontMatrix[0] && 0 !== s.fontMatrix[3]) ||
        Ce("Invalid font matrix for font " + t),
      e < 0 ? ((e = -e), (s.fontDirection = -1)) : (s.fontDirection = 1),
      (this.current.font = i),
      (this.current.fontSize = e),
      i.isType3Font)
    )
      return;
    const n = i.loadedName || "sans-serif",
      a = i.systemFontInfo?.css || `"${n}", ${i.fallbackName}`;
    let r = "normal";
    i.black ? (r = "900") : i.bold && (r = "bold");
    const o = i.italic ? "italic" : "normal";
    let h = e;
    (e < 16 ? (h = 16) : e > 100 && (h = 100),
      (this.current.fontSizeScale = e / h),
      (this.ctx.font = `${o} ${r} ${h}px ${a}`));
  }
  setTextRenderingMode(t) {
    this.current.textRenderingMode = t;
  }
  setTextRise(t) {
    this.current.textRise = t;
  }
  moveText(t, e) {
    ((this.current.x = this.current.lineX += t),
      (this.current.y = this.current.lineY += e));
  }
  setLeadingMoveText(t, e) {
    (this.setLeading(-e), this.moveText(t, e));
  }
  setTextMatrix(t, e, i, s, n, a) {
    ((this.current.textMatrix = [t, e, i, s, n, a]),
      (this.current.textMatrixScale = Math.hypot(t, e)),
      (this.current.x = this.current.lineX = 0),
      (this.current.y = this.current.lineY = 0));
  }
  nextLine() {
    this.moveText(0, this.current.leading);
  }
  paintChar(t, e, i, s) {
    const n = this.ctx,
      a = this.current,
      r = a.font,
      o = a.textRenderingMode,
      h = a.fontSize / a.fontSizeScale,
      l = o & Vt,
      c = !!(o & Wt),
      d = a.patternFill && !r.missingFile;
    let u;
    if (
      ((r.disableFontFace || c || d) &&
        (u = r.getPathGenerator(this.commonObjs, t)),
      r.disableFontFace || d
        ? (n.save(),
          n.translate(e, i),
          n.beginPath(),
          u(n, h),
          s && n.setTransform(...s),
          (l !== Ut && l !== $t) || n.fill(),
          (l !== jt && l !== $t) || n.stroke(),
          n.restore())
        : ((l !== Ut && l !== $t) || n.fillText(t, e, i),
          (l !== jt && l !== $t) || n.strokeText(t, e, i)),
      c)
    ) {
      (this.pendingTextPaths ||= []).push({
        transform: vi(n),
        x: e,
        y: i,
        fontSize: h,
        addToPath: u,
      });
    }
  }
  get isFontSubpixelAAEnabled() {
    const { context: t } = this.cachedCanvases.getCanvas(
      "isFontSubpixelAAEnabled",
      10,
      10,
    );
    (t.scale(1.5, 1), t.fillText("I", 0, 10));
    const e = t.getImageData(0, 0, 10, 10).data;
    let i = !1;
    for (let t = 3; t < e.length; t += 4)
      if (e[t] > 0 && e[t] < 255) {
        i = !0;
        break;
      }
    return Me(this, "isFontSubpixelAAEnabled", i);
  }
  showText(t) {
    const e = this.current,
      i = e.font;
    if (i.isType3Font) return this.showType3Text(t);
    const s = e.fontSize;
    if (0 === s) return;
    const n = this.ctx,
      a = e.fontSizeScale,
      r = e.charSpacing,
      o = e.wordSpacing,
      h = e.fontDirection,
      l = e.textHScale * h,
      c = t.length,
      d = i.vertical,
      u = d ? 1 : -1,
      p = i.defaultVMetrics,
      g = s * e.fontMatrix[0],
      f = e.textRenderingMode === Ut && !i.disableFontFace && !e.patternFill;
    let m;
    if (
      (n.save(),
      n.transform(...e.textMatrix),
      n.translate(e.x, e.y + e.textRise),
      h > 0 ? n.scale(l, -1) : n.scale(l, 1),
      e.patternFill)
    ) {
      n.save();
      const t = e.fillColor.getPattern(n, this, Ai(n), Zi);
      ((m = vi(n)), n.restore(), (n.fillStyle = t));
    }
    let b = e.lineWidth;
    const v = e.textMatrixScale;
    if (0 === v || 0 === b) {
      const t = e.textRenderingMode & Vt;
      (t !== jt && t !== $t) || (b = this.getSinglePixelWidth());
    } else b /= v;
    if (
      (1 !== a && (n.scale(a, a), (b /= a)),
      (n.lineWidth = b),
      i.isInvalidPDFjsFont)
    ) {
      const i = [];
      let s = 0;
      for (const e of t) (i.push(e.unicode), (s += e.width));
      return (
        n.fillText(i.join(""), 0, 0),
        (e.x += s * g * l),
        n.restore(),
        void this.compose()
      );
    }
    let A,
      y = 0;
    for (A = 0; A < c; ++A) {
      const e = t[A];
      if ("number" == typeof e) {
        y += (u * e * s) / 1e3;
        continue;
      }
      let l = !1;
      const c = (e.isSpace ? o : 0) + r,
        b = e.fontChar,
        v = e.accent;
      let w,
        _,
        x = e.width;
      if (d) {
        const t = e.vmetric || p,
          i = -(e.vmetric ? t[1] : 0.5 * x) * g,
          s = t[2] * g;
        ((x = t ? -t[0] : x), (w = i / a), (_ = (y + s) / a));
      } else ((w = y / a), (_ = 0));
      if (i.remeasure && x > 0) {
        const t = ((1e3 * n.measureText(b).width) / s) * a;
        if (x < t && this.isFontSubpixelAAEnabled) {
          const e = x / t;
          ((l = !0), n.save(), n.scale(e, 1), (w /= e));
        } else x !== t && (w += (((x - t) / 2e3) * s) / a);
      }
      if (this.contentVisible && (e.isInFont || i.missingFile))
        if (f && !v) n.fillText(b, w, _);
        else if ((this.paintChar(b, w, _, m), v)) {
          const t = w + (s * v.offset.x) / a,
            e = _ - (s * v.offset.y) / a;
          this.paintChar(v.fontChar, t, e, m);
        }
      ((y += d ? x * g - c * h : x * g + c * h), l && n.restore());
    }
    (d ? (e.y -= y) : (e.x += y * l), n.restore(), this.compose());
  }
  showType3Text(t) {
    const e = this.ctx,
      i = this.current,
      s = i.font,
      n = i.fontSize,
      a = i.fontDirection,
      r = s.vertical ? 1 : -1,
      o = i.charSpacing,
      h = i.wordSpacing,
      l = i.textHScale * a,
      c = i.fontMatrix || Tt,
      d = t.length;
    let u, p, g, f;
    if (!(i.textRenderingMode === Gt) && 0 !== n) {
      for (
        this._cachedScaleForStroking[0] = -1,
          this._cachedGetSinglePixelWidth = null,
          e.save(),
          e.transform(...i.textMatrix),
          e.translate(i.x, i.y),
          e.scale(l, a),
          u = 0;
        u < d;
        ++u
      ) {
        if (((p = t[u]), "number" == typeof p)) {
          ((f = (r * p * n) / 1e3), this.ctx.translate(f, 0), (i.x += f * l));
          continue;
        }
        const a = (p.isSpace ? h : 0) + o,
          d = s.charProcOperatorList[p.operatorListId];
        if (!d) {
          Ce(`Type3 character "${p.operatorListId}" is not available.`);
          continue;
        }
        this.contentVisible &&
          ((this.processingType3 = p),
          this.save(),
          e.scale(n, n),
          e.transform(...c),
          this.executeOperatorList(d),
          this.restore());
        ((g = je.applyTransform([p.width, 0], c)[0] * n + a),
          e.translate(g, 0),
          (i.x += g * l));
      }
      (e.restore(), (this.processingType3 = null));
    }
  }
  setCharWidth(t, e) {}
  setCharWidthAndBounds(t, e, i, s, n, a) {
    (this.ctx.rect(i, s, n - i, a - s), this.ctx.clip(), this.endPath());
  }
  getColorN_Pattern(t) {
    let e;
    if ("TilingPattern" === t[0]) {
      const i = t[1],
        s = this.baseTransform || vi(this.ctx),
        n = {
          createCanvasGraphics: (t) =>
            new Ss(
              t,
              this.commonObjs,
              this.objs,
              this.canvasFactory,
              this.filterFactory,
              {
                optionalContentConfig: this.optionalContentConfig,
                markedContentStack: this.markedContentStack,
              },
            ),
        };
      e = new ds(t, i, this.ctx, n, s);
    } else e = this._getPattern(t[1], t[2]);
    return e;
  }
  setStrokeColorN() {
    this.current.strokeColor = this.getColorN_Pattern(arguments);
  }
  setFillColorN() {
    ((this.current.fillColor = this.getColorN_Pattern(arguments)),
      (this.current.patternFill = !0));
  }
  setStrokeRGBColor(t, e, i) {
    this.ctx.strokeStyle = this.current.strokeColor = je.makeHexColor(t, e, i);
  }
  setStrokeTransparent() {
    this.ctx.strokeStyle = this.current.strokeColor = "transparent";
  }
  setFillRGBColor(t, e, i) {
    ((this.ctx.fillStyle = this.current.fillColor = je.makeHexColor(t, e, i)),
      (this.current.patternFill = !1));
  }
  setFillTransparent() {
    ((this.ctx.fillStyle = this.current.fillColor = "transparent"),
      (this.current.patternFill = !1));
  }
  _getPattern(t, e = null) {
    let i;
    return (
      this.cachedPatterns.has(t)
        ? (i = this.cachedPatterns.get(t))
        : ((i = (function (t) {
            switch (t[0]) {
              case "RadialAxial":
                return new ns(t);
              case "Mesh":
                return new os(t);
              case "Dummy":
                return new hs();
            }
            throw new Error(`Unknown IR type: ${t[0]}`);
          })(this.getObject(t))),
          this.cachedPatterns.set(t, i)),
      e && (i.matrix = e),
      i
    );
  }
  shadingFill(t) {
    if (!this.contentVisible) return;
    const e = this.ctx;
    this.save();
    const i = this._getPattern(t);
    e.fillStyle = i.getPattern(e, this, Ai(e), es);
    const s = Ai(e);
    if (s) {
      const { width: t, height: i } = e.canvas,
        [n, a, r, o] = je.getAxialAlignedBoundingBox([0, 0, t, i], s);
      this.ctx.fillRect(n, a, r - n, o - a);
    } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
    (this.compose(this.current.getClippedPathBoundingBox()), this.restore());
  }
  beginInlineImage() {
    Ee("Should not call beginInlineImage");
  }
  beginImageData() {
    Ee("Should not call beginImageData");
  }
  paintFormXObjectBegin(t, e) {
    if (
      this.contentVisible &&
      (this.save(),
      this.baseTransformStack.push(this.baseTransform),
      t && this.transform(...t),
      (this.baseTransform = vi(this.ctx)),
      e)
    ) {
      const t = e[2] - e[0],
        i = e[3] - e[1];
      (this.ctx.rect(e[0], e[1], t, i),
        this.current.updateRectMinMax(vi(this.ctx), e),
        this.clip(),
        this.endPath());
    }
  }
  paintFormXObjectEnd() {
    this.contentVisible &&
      (this.restore(), (this.baseTransform = this.baseTransformStack.pop()));
  }
  beginGroup(t) {
    if (!this.contentVisible) return;
    (this.save(),
      this.inSMaskMode &&
        (this.endSMaskMode(), (this.current.activeSMask = null)));
    const e = this.ctx;
    (t.isolated || xe("TODO: Support non-isolated groups."),
      t.knockout && Ce("Knockout groups not supported."));
    const i = vi(e);
    if ((t.matrix && e.transform(...t.matrix), !t.bbox))
      throw new Error("Bounding box is required.");
    let s = je.getAxialAlignedBoundingBox(t.bbox, vi(e));
    const n = [0, 0, e.canvas.width, e.canvas.height];
    s = je.intersect(s, n) || [0, 0, 0, 0];
    const a = Math.floor(s[0]),
      r = Math.floor(s[1]),
      o = Math.max(Math.ceil(s[2]) - a, 1),
      h = Math.max(Math.ceil(s[3]) - r, 1);
    this.current.startNewPathAndClipBox([0, 0, o, h]);
    let l = "groupAt" + this.groupLevel;
    t.smask && (l += "_smask_" + (this.smaskCounter++ % 2));
    const c = this.cachedCanvases.getCanvas(l, o, h),
      d = c.context;
    (d.translate(-a, -r),
      d.transform(...i),
      t.smask
        ? this.smaskStack.push({
            canvas: c.canvas,
            context: d,
            offsetX: a,
            offsetY: r,
            subtype: t.smask.subtype,
            backdrop: t.smask.backdrop,
            transferMap: t.smask.transferMap || null,
            startTransformInverse: null,
          })
        : (e.setTransform(1, 0, 0, 1, 0, 0), e.translate(a, r), e.save()),
      As(e, d),
      (this.ctx = d),
      this.setGState([
        ["BM", "source-over"],
        ["ca", 1],
        ["CA", 1],
      ]),
      this.groupStack.push(e),
      this.groupLevel++);
  }
  endGroup(t) {
    if (!this.contentVisible) return;
    this.groupLevel--;
    const e = this.ctx,
      i = this.groupStack.pop();
    if (((this.ctx = i), (this.ctx.imageSmoothingEnabled = !1), t.smask))
      ((this.tempSMask = this.smaskStack.pop()), this.restore());
    else {
      this.ctx.restore();
      const t = vi(this.ctx);
      (this.restore(), this.ctx.save(), this.ctx.setTransform(...t));
      const i = je.getAxialAlignedBoundingBox(
        [0, 0, e.canvas.width, e.canvas.height],
        t,
      );
      (this.ctx.drawImage(e.canvas, 0, 0), this.ctx.restore(), this.compose(i));
    }
  }
  beginAnnotation(t, e, i, s, n) {
    if (
      (this.#Ne(),
      ys(this.ctx),
      this.ctx.save(),
      this.save(),
      this.baseTransform && this.ctx.setTransform(...this.baseTransform),
      e)
    ) {
      const s = e[2] - e[0],
        a = e[3] - e[1];
      if (n && this.annotationCanvasMap) {
        (((i = i.slice())[4] -= e[0]),
          (i[5] -= e[1]),
          ((e = e.slice())[0] = e[1] = 0),
          (e[2] = s),
          (e[3] = a));
        const [n, r] = je.singularValueDecompose2dScale(vi(this.ctx)),
          { viewportScale: o } = this,
          h = Math.ceil(s * this.outputScaleX * o),
          l = Math.ceil(a * this.outputScaleY * o);
        this.annotationCanvas = this.canvasFactory.create(h, l);
        const { canvas: c, context: d } = this.annotationCanvas;
        (this.annotationCanvasMap.set(t, c),
          (this.annotationCanvas.savedCtx = this.ctx),
          (this.ctx = d),
          this.ctx.save(),
          this.ctx.setTransform(n, 0, 0, -r, 0, a * r),
          ys(this.ctx));
      } else
        (ys(this.ctx),
          this.endPath(),
          this.ctx.rect(e[0], e[1], s, a),
          this.ctx.clip(),
          this.ctx.beginPath());
    }
    ((this.current = new ms(this.ctx.canvas.width, this.ctx.canvas.height)),
      this.transform(...i),
      this.transform(...s));
  }
  endAnnotation() {
    this.annotationCanvas &&
      (this.ctx.restore(),
      this.#Oe(),
      (this.ctx = this.annotationCanvas.savedCtx),
      delete this.annotationCanvas.savedCtx,
      delete this.annotationCanvas);
  }
  paintImageMaskXObject(t) {
    if (!this.contentVisible) return;
    const e = t.count;
    (t = this.getObject(t.data, t)).count = e;
    const i = this.ctx,
      s = this.processingType3;
    if (
      s &&
      (void 0 === s.compiled &&
        (s.compiled = (function (t) {
          const { width: e, height: i } = t;
          if (e > 1e3 || i > 1e3) return null;
          const s = new Uint8Array([
              0, 2, 4, 0, 1, 0, 5, 4, 8, 10, 0, 8, 0, 2, 1, 0,
            ]),
            n = e + 1;
          let a,
            r,
            o,
            h = new Uint8Array(n * (i + 1));
          const l = (e + 7) & -8;
          let c = new Uint8Array(l * i),
            d = 0;
          for (const e of t.data) {
            let t = 128;
            for (; t > 0; ) ((c[d++] = e & t ? 0 : 255), (t >>= 1));
          }
          let u = 0;
          for (d = 0, 0 !== c[d] && ((h[0] = 1), ++u), r = 1; r < e; r++)
            (c[d] !== c[d + 1] && ((h[r] = c[d] ? 2 : 1), ++u), d++);
          for (0 !== c[d] && ((h[r] = 2), ++u), a = 1; a < i; a++) {
            ((d = a * l),
              (o = a * n),
              c[d - l] !== c[d] && ((h[o] = c[d] ? 1 : 8), ++u));
            let t = (c[d] ? 4 : 0) + (c[d - l] ? 8 : 0);
            for (r = 1; r < e; r++)
              ((t = (t >> 2) + (c[d + 1] ? 4 : 0) + (c[d - l + 1] ? 8 : 0)),
                s[t] && ((h[o + r] = s[t]), ++u),
                d++);
            if (
              (c[d - l] !== c[d] && ((h[o + r] = c[d] ? 2 : 4), ++u), u > 1e3)
            )
              return null;
          }
          for (
            d = l * (i - 1), o = a * n, 0 !== c[d] && ((h[o] = 8), ++u), r = 1;
            r < e;
            r++
          )
            (c[d] !== c[d + 1] && ((h[o + r] = c[d] ? 4 : 8), ++u), d++);
          if ((0 !== c[d] && ((h[o + r] = 4), ++u), u > 1e3)) return null;
          const p = new Int32Array([0, n, -1, 0, -n, 0, 0, 0, 1]),
            g = new Path2D();
          for (a = 0; u && a <= i; a++) {
            let t = a * n;
            const i = t + e;
            for (; t < i && !h[t]; ) t++;
            if (t === i) continue;
            g.moveTo(t % n, a);
            const s = t;
            let r = h[t];
            do {
              const e = p[r];
              do {
                t += e;
              } while (!h[t]);
              const i = h[t];
              (5 !== i && 10 !== i
                ? ((r = i), (h[t] = 0))
                : ((r = i & ((51 * r) >> 4)), (h[t] &= (r >> 2) | (r << 2))),
                g.lineTo(t % n, (t / n) | 0),
                h[t] || --u);
            } while (s !== t);
            --a;
          }
          return (
            (c = null),
            (h = null),
            function (t) {
              (t.save(),
                t.scale(1 / e, -1 / i),
                t.translate(0, -i),
                t.fill(g),
                t.beginPath(),
                t.restore());
            }
          );
        })(t)),
      s.compiled)
    )
      return void s.compiled(i);
    const n = this._createMaskCanvas(t),
      a = n.canvas;
    (i.save(),
      i.setTransform(1, 0, 0, 1, 0, 0),
      i.drawImage(a, n.offsetX, n.offsetY),
      i.restore(),
      this.compose());
  }
  paintImageMaskXObjectRepeat(t, e, i = 0, s = 0, n, a) {
    if (!this.contentVisible) return;
    t = this.getObject(t.data, t);
    const r = this.ctx;
    r.save();
    const o = vi(r);
    r.transform(e, i, s, n, 0, 0);
    const h = this._createMaskCanvas(t);
    r.setTransform(1, 0, 0, 1, h.offsetX - o[4], h.offsetY - o[5]);
    for (let t = 0, l = a.length; t < l; t += 2) {
      const l = je.transform(o, [e, i, s, n, a[t], a[t + 1]]),
        [c, d] = je.applyTransform([0, 0], l);
      r.drawImage(h.canvas, c, d);
    }
    (r.restore(), this.compose());
  }
  paintImageMaskXObjectGroup(t) {
    if (!this.contentVisible) return;
    const e = this.ctx,
      i = this.current.fillColor,
      s = this.current.patternFill;
    for (const n of t) {
      const { data: t, width: a, height: r, transform: o } = n,
        h = this.cachedCanvases.getCanvas("maskCanvas", a, r),
        l = h.context;
      l.save();
      (vs(l, this.getObject(t, n)),
        (l.globalCompositeOperation = "source-in"),
        (l.fillStyle = s ? i.getPattern(l, this, Ai(e), Zi) : i),
        l.fillRect(0, 0, a, r),
        l.restore(),
        e.save(),
        e.transform(...o),
        e.scale(1, -1),
        fs(e, h.canvas, 0, 0, a, r, 0, -1, 1, 1),
        e.restore());
    }
    this.compose();
  }
  paintImageXObject(t) {
    if (!this.contentVisible) return;
    const e = this.getObject(t);
    e ? this.paintInlineImageXObject(e) : Ce("Dependent image isn't ready yet");
  }
  paintImageXObjectRepeat(t, e, i, s) {
    if (!this.contentVisible) return;
    const n = this.getObject(t);
    if (!n) return void Ce("Dependent image isn't ready yet");
    const a = n.width,
      r = n.height,
      o = [];
    for (let t = 0, n = s.length; t < n; t += 2)
      o.push({
        transform: [e, 0, 0, i, s[t], s[t + 1]],
        x: 0,
        y: 0,
        w: a,
        h: r,
      });
    this.paintInlineImageXObjectGroup(n, o);
  }
  applyTransferMapsToCanvas(t) {
    return (
      "none" !== this.current.transferMaps &&
        ((t.filter = this.current.transferMaps),
        t.drawImage(t.canvas, 0, 0),
        (t.filter = "none")),
      t.canvas
    );
  }
  applyTransferMapsToBitmap(t) {
    if ("none" === this.current.transferMaps) return t.bitmap;
    const { bitmap: e, width: i, height: s } = t,
      n = this.cachedCanvases.getCanvas("inlineImage", i, s),
      a = n.context;
    return (
      (a.filter = this.current.transferMaps),
      a.drawImage(e, 0, 0),
      (a.filter = "none"),
      n.canvas
    );
  }
  paintInlineImageXObject(t) {
    if (!this.contentVisible) return;
    const e = t.width,
      i = t.height,
      s = this.ctx;
    if ((this.save(), !Et)) {
      const { filter: t } = s;
      "none" !== t && "" !== t && (s.filter = "none");
    }
    let n;
    if ((s.scale(1 / e, -1 / i), t.bitmap))
      n = this.applyTransferMapsToBitmap(t);
    else if (
      ("function" == typeof HTMLElement && t instanceof HTMLElement) ||
      !t.data
    )
      n = t;
    else {
      const s = this.cachedCanvases.getCanvas("inlineImage", e, i).context;
      (bs(s, t), (n = this.applyTransferMapsToCanvas(s)));
    }
    const a = this._scaleImage(n, Ai(s));
    ((s.imageSmoothingEnabled = ws(vi(s), t.interpolate)),
      fs(s, a.img, 0, 0, a.paintWidth, a.paintHeight, 0, -i, e, i),
      this.compose(),
      this.restore());
  }
  paintInlineImageXObjectGroup(t, e) {
    if (!this.contentVisible) return;
    const i = this.ctx;
    let s;
    if (t.bitmap) s = t.bitmap;
    else {
      const e = t.width,
        i = t.height,
        n = this.cachedCanvases.getCanvas("inlineImage", e, i).context;
      (bs(n, t), (s = this.applyTransferMapsToCanvas(n)));
    }
    for (const t of e)
      (i.save(),
        i.transform(...t.transform),
        i.scale(1, -1),
        fs(i, s, t.x, t.y, t.w, t.h, 0, -1, 1, 1),
        i.restore());
    this.compose();
  }
  paintSolidColorImageMask() {
    this.contentVisible && (this.ctx.fillRect(0, 0, 1, 1), this.compose());
  }
  markPoint(t) {}
  markPointProps(t, e) {}
  beginMarkedContent(t) {
    this.markedContentStack.push({ visible: !0 });
  }
  beginMarkedContentProps(t, e) {
    ("OC" === t
      ? this.markedContentStack.push({
          visible: this.optionalContentConfig.isVisible(e),
        })
      : this.markedContentStack.push({ visible: !0 }),
      (this.contentVisible = this.isContentVisible()));
  }
  endMarkedContent() {
    (this.markedContentStack.pop(),
      (this.contentVisible = this.isContentVisible()));
  }
  beginCompat() {}
  endCompat() {}
  consumePath(t) {
    const e = this.current.isEmptyClip();
    (this.pendingClip && this.current.updateClipFromPath(),
      this.pendingClip || this.compose(t));
    const i = this.ctx;
    (this.pendingClip &&
      (e || (this.pendingClip === Es ? i.clip("evenodd") : i.clip()),
      (this.pendingClip = null)),
      this.current.startNewPathAndClipBox(this.current.clipBox),
      i.beginPath());
  }
  getSinglePixelWidth() {
    if (!this._cachedGetSinglePixelWidth) {
      const t = vi(this.ctx);
      if (0 === t[1] && 0 === t[2])
        this._cachedGetSinglePixelWidth =
          1 / Math.min(Math.abs(t[0]), Math.abs(t[3]));
      else {
        const e = Math.abs(t[0] * t[3] - t[2] * t[1]),
          i = Math.hypot(t[0], t[2]),
          s = Math.hypot(t[1], t[3]);
        this._cachedGetSinglePixelWidth = Math.max(i, s) / e;
      }
    }
    return this._cachedGetSinglePixelWidth;
  }
  getScaleForStroking() {
    if (-1 === this._cachedScaleForStroking[0]) {
      const { lineWidth: t } = this.current,
        { a: e, b: i, c: s, d: n } = this.ctx.getTransform();
      let a, r;
      if (0 === i && 0 === s) {
        const i = Math.abs(e),
          s = Math.abs(n);
        if (i === s)
          if (0 === t) a = r = 1 / i;
          else {
            const e = i * t;
            a = r = e < 1 ? 1 / e : 1;
          }
        else if (0 === t) ((a = 1 / i), (r = 1 / s));
        else {
          const e = i * t,
            n = s * t;
          ((a = e < 1 ? 1 / e : 1), (r = n < 1 ? 1 / n : 1));
        }
      } else {
        const o = Math.abs(e * n - i * s),
          h = Math.hypot(e, i),
          l = Math.hypot(s, n);
        if (0 === t) ((a = l / o), (r = h / o));
        else {
          const e = t * o;
          ((a = l > e ? l / e : 1), (r = h > e ? h / e : 1));
        }
      }
      ((this._cachedScaleForStroking[0] = a),
        (this._cachedScaleForStroking[1] = r));
    }
    return this._cachedScaleForStroking;
  }
  rescaleAndStroke(t) {
    const { ctx: e } = this,
      { lineWidth: i } = this.current,
      [s, n] = this.getScaleForStroking();
    if (((e.lineWidth = i || 1), 1 === s && 1 === n)) return void e.stroke();
    const a = e.getLineDash();
    if ((t && e.save(), e.scale(s, n), a.length > 0)) {
      const t = Math.max(s, n);
      (e.setLineDash(a.map((e) => e / t)), (e.lineDashOffset /= t));
    }
    (e.stroke(), t && e.restore());
  }
  isContentVisible() {
    for (let t = this.markedContentStack.length - 1; t >= 0; t--)
      if (!this.markedContentStack[t].visible) return !1;
    return !0;
  }
}
for (const t in ve)
  void 0 !== Ss.prototype[t] && (Ss.prototype[ve[t]] = Ss.prototype[t]);
class Ts {
  static #Be = null;
  static #ze = "";
  static get workerPort() {
    return this.#Be;
  }
  static set workerPort(t) {
    if (!("undefined" != typeof Worker && t instanceof Worker) && null !== t)
      throw new Error("Invalid `workerPort` type.");
    this.#Be = t;
  }
  static get workerSrc() {
    return this.#ze;
  }
  static set workerSrc(t) {
    if ("string" != typeof t) throw new Error("Invalid `workerSrc` type.");
    this.#ze = t;
  }
}
const Ms = 1,
  ks = 2,
  Ps = 1,
  Rs = 2,
  Is = 3,
  Ds = 4,
  Ls = 5,
  Fs = 6,
  Ns = 7,
  Os = 8;
function Bs(t) {
  switch (
    (t instanceof Error ||
      ("object" == typeof t && null !== t) ||
      Ee('wrapReason: Expected "reason" to be a (possibly cloned) Error.'),
    t.name)
  ) {
    case "AbortException":
      return new Ne(t.message);
    case "MissingPDFException":
      return new De(t.message);
    case "PasswordException":
      return new Pe(t.message, t.code);
    case "UnexpectedResponseException":
      return new Le(t.message, t.status);
    case "UnknownErrorException":
      return new Re(t.message, t.details);
    default:
      return new Re(t.message, t.toString());
  }
}
class zs {
  #He = new AbortController();
  constructor(t, e, i) {
    ((this.sourceName = t),
      (this.targetName = e),
      (this.comObj = i),
      (this.callbackId = 1),
      (this.streamId = 1),
      (this.streamSinks = Object.create(null)),
      (this.streamControllers = Object.create(null)),
      (this.callbackCapabilities = Object.create(null)),
      (this.actionHandler = Object.create(null)),
      i.addEventListener("message", this.#Ue.bind(this), {
        signal: this.#He.signal,
      }));
  }
  #Ue({ data: t }) {
    if (t.targetName !== this.sourceName) return;
    if (t.stream) return void this.#je(t);
    if (t.callback) {
      const e = t.callbackId,
        i = this.callbackCapabilities[e];
      if (!i) throw new Error(`Cannot resolve callback ${e}`);
      if ((delete this.callbackCapabilities[e], t.callback === Ms))
        i.resolve(t.data);
      else {
        if (t.callback !== ks) throw new Error("Unexpected callback case");
        i.reject(Bs(t.reason));
      }
      return;
    }
    const e = this.actionHandler[t.action];
    if (!e) throw new Error(`Unknown action from worker: ${t.action}`);
    if (t.callbackId) {
      const i = this.sourceName,
        s = t.sourceName,
        n = this.comObj;
      new Promise(function (i) {
        i(e(t.data));
      }).then(
        function (e) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            callback: Ms,
            callbackId: t.callbackId,
            data: e,
          });
        },
        function (e) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            callback: ks,
            callbackId: t.callbackId,
            reason: Bs(e),
          });
        },
      );
    } else t.streamId ? this.#$e(t) : e(t.data);
  }
  on(t, e) {
    const i = this.actionHandler;
    if (i[t]) throw new Error(`There is already an actionName called "${t}"`);
    i[t] = e;
  }
  send(t, e, i) {
    this.comObj.postMessage(
      {
        sourceName: this.sourceName,
        targetName: this.targetName,
        action: t,
        data: e,
      },
      i,
    );
  }
  sendWithPromise(t, e, i) {
    const s = this.callbackId++,
      n = Promise.withResolvers();
    this.callbackCapabilities[s] = n;
    try {
      this.comObj.postMessage(
        {
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: t,
          callbackId: s,
          data: e,
        },
        i,
      );
    } catch (t) {
      n.reject(t);
    }
    return n.promise;
  }
  sendWithStream(t, e, i, s) {
    const n = this.streamId++,
      a = this.sourceName,
      r = this.targetName,
      o = this.comObj;
    return new ReadableStream(
      {
        start: (i) => {
          const h = Promise.withResolvers();
          return (
            (this.streamControllers[n] = {
              controller: i,
              startCall: h,
              pullCall: null,
              cancelCall: null,
              isClosed: !1,
            }),
            o.postMessage(
              {
                sourceName: a,
                targetName: r,
                action: t,
                streamId: n,
                data: e,
                desiredSize: i.desiredSize,
              },
              s,
            ),
            h.promise
          );
        },
        pull: (t) => {
          const e = Promise.withResolvers();
          return (
            (this.streamControllers[n].pullCall = e),
            o.postMessage({
              sourceName: a,
              targetName: r,
              stream: Fs,
              streamId: n,
              desiredSize: t.desiredSize,
            }),
            e.promise
          );
        },
        cancel: (t) => {
          Se(t instanceof Error, "cancel must have a valid reason");
          const e = Promise.withResolvers();
          return (
            (this.streamControllers[n].cancelCall = e),
            (this.streamControllers[n].isClosed = !0),
            o.postMessage({
              sourceName: a,
              targetName: r,
              stream: Ps,
              streamId: n,
              reason: Bs(t),
            }),
            e.promise
          );
        },
      },
      i,
    );
  }
  #$e(t) {
    const e = t.streamId,
      i = this.sourceName,
      s = t.sourceName,
      n = this.comObj,
      a = this,
      r = this.actionHandler[t.action],
      o = {
        enqueue(t, a = 1, r) {
          if (this.isCancelled) return;
          const o = this.desiredSize;
          ((this.desiredSize -= a),
            o > 0 &&
              this.desiredSize <= 0 &&
              ((this.sinkCapability = Promise.withResolvers()),
              (this.ready = this.sinkCapability.promise)),
            n.postMessage(
              {
                sourceName: i,
                targetName: s,
                stream: Ds,
                streamId: e,
                chunk: t,
              },
              r,
            ));
        },
        close() {
          this.isCancelled ||
            ((this.isCancelled = !0),
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: Is,
              streamId: e,
            }),
            delete a.streamSinks[e]);
        },
        error(t) {
          (Se(t instanceof Error, "error must have a valid reason"),
            this.isCancelled ||
              ((this.isCancelled = !0),
              n.postMessage({
                sourceName: i,
                targetName: s,
                stream: Ls,
                streamId: e,
                reason: Bs(t),
              })));
        },
        sinkCapability: Promise.withResolvers(),
        onPull: null,
        onCancel: null,
        isCancelled: !1,
        desiredSize: t.desiredSize,
        ready: null,
      };
    (o.sinkCapability.resolve(),
      (o.ready = o.sinkCapability.promise),
      (this.streamSinks[e] = o),
      new Promise(function (e) {
        e(r(t.data, o));
      }).then(
        function () {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: Os,
            streamId: e,
            success: !0,
          });
        },
        function (t) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: Os,
            streamId: e,
            reason: Bs(t),
          });
        },
      ));
  }
  #je(t) {
    const e = t.streamId,
      i = this.sourceName,
      s = t.sourceName,
      n = this.comObj,
      a = this.streamControllers[e],
      r = this.streamSinks[e];
    switch (t.stream) {
      case Os:
        t.success ? a.startCall.resolve() : a.startCall.reject(Bs(t.reason));
        break;
      case Ns:
        t.success ? a.pullCall.resolve() : a.pullCall.reject(Bs(t.reason));
        break;
      case Fs:
        if (!r) {
          n.postMessage({
            sourceName: i,
            targetName: s,
            stream: Ns,
            streamId: e,
            success: !0,
          });
          break;
        }
        (r.desiredSize <= 0 && t.desiredSize > 0 && r.sinkCapability.resolve(),
          (r.desiredSize = t.desiredSize),
          new Promise(function (t) {
            t(r.onPull?.());
          }).then(
            function () {
              n.postMessage({
                sourceName: i,
                targetName: s,
                stream: Ns,
                streamId: e,
                success: !0,
              });
            },
            function (t) {
              n.postMessage({
                sourceName: i,
                targetName: s,
                stream: Ns,
                streamId: e,
                reason: Bs(t),
              });
            },
          ));
        break;
      case Ds:
        if ((Se(a, "enqueue should have stream controller"), a.isClosed)) break;
        a.controller.enqueue(t.chunk);
        break;
      case Is:
        if ((Se(a, "close should have stream controller"), a.isClosed)) break;
        ((a.isClosed = !0), a.controller.close(), this.#Ge(a, e));
        break;
      case Ls:
        (Se(a, "error should have stream controller"),
          a.controller.error(Bs(t.reason)),
          this.#Ge(a, e));
        break;
      case Rs:
        (t.success ? a.cancelCall.resolve() : a.cancelCall.reject(Bs(t.reason)),
          this.#Ge(a, e));
        break;
      case Ps:
        if (!r) break;
        (new Promise(function (e) {
          e(r.onCancel?.(Bs(t.reason)));
        }).then(
          function () {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: Rs,
              streamId: e,
              success: !0,
            });
          },
          function (t) {
            n.postMessage({
              sourceName: i,
              targetName: s,
              stream: Rs,
              streamId: e,
              reason: Bs(t),
            });
          },
        ),
          r.sinkCapability.reject(Bs(t.reason)),
          (r.isCancelled = !0),
          delete this.streamSinks[e]);
        break;
      default:
        throw new Error("Unexpected stream case");
    }
  }
  async #Ge(t, e) {
    (await Promise.allSettled([
      t.startCall?.promise,
      t.pullCall?.promise,
      t.cancelCall?.promise,
    ]),
      delete this.streamControllers[e]);
  }
  destroy() {
    (this.#He?.abort(), (this.#He = null));
  }
}
class Hs {
  #Ve;
  #We;
  constructor({ parsedData: t, rawData: e }) {
    ((this.#Ve = t), (this.#We = e));
  }
  getRaw() {
    return this.#We;
  }
  get(t) {
    return this.#Ve.get(t) ?? null;
  }
  getAll() {
    return ze(this.#Ve);
  }
  has(t) {
    return this.#Ve.has(t);
  }
}
const Us = Symbol("INTERNAL");
class js {
  #qe = !1;
  #Ye = !1;
  #Xe = !1;
  #Ke = !0;
  constructor(t, { name: e, intent: i, usage: s, rbGroups: n }) {
    ((this.#qe = !!(t & Pt)),
      (this.#Ye = !!(t & Rt)),
      (this.name = e),
      (this.intent = i),
      (this.usage = s),
      (this.rbGroups = n));
  }
  get visible() {
    if (this.#Xe) return this.#Ke;
    if (!this.#Ke) return !1;
    const { print: t, view: e } = this.usage;
    return this.#qe
      ? "OFF" !== e?.viewState
      : !this.#Ye || "OFF" !== t?.printState;
  }
  _setVisible(t, e, i = !1) {
    (t !== Us && Ee("Internal method `_setVisible` called."),
      (this.#Xe = i),
      (this.#Ke = e));
  }
}
class $s {
  #Qe = null;
  #Je = new Map();
  #Ze = null;
  #ti = null;
  constructor(t, e = Pt) {
    if (
      ((this.renderingIntent = e),
      (this.name = null),
      (this.creator = null),
      null !== t)
    ) {
      ((this.name = t.name), (this.creator = t.creator), (this.#ti = t.order));
      for (const i of t.groups) this.#Je.set(i.id, new js(e, i));
      if ("OFF" === t.baseState)
        for (const t of this.#Je.values()) t._setVisible(Us, !1);
      for (const e of t.on) this.#Je.get(e)._setVisible(Us, !0);
      for (const e of t.off) this.#Je.get(e)._setVisible(Us, !1);
      this.#Ze = this.getHash();
    }
  }
  #ei(t) {
    const e = t.length;
    if (e < 2) return !0;
    const i = t[0];
    for (let s = 1; s < e; s++) {
      const e = t[s];
      let n;
      if (Array.isArray(e)) n = this.#ei(e);
      else {
        if (!this.#Je.has(e))
          return (Ce(`Optional content group not found: ${e}`), !0);
        n = this.#Je.get(e).visible;
      }
      switch (i) {
        case "And":
          if (!n) return !1;
          break;
        case "Or":
          if (n) return !0;
          break;
        case "Not":
          return !n;
        default:
          return !0;
      }
    }
    return "And" === i;
  }
  isVisible(t) {
    if (0 === this.#Je.size) return !0;
    if (!t) return (xe("Optional content group not defined."), !0);
    if ("OCG" === t.type)
      return this.#Je.has(t.id)
        ? this.#Je.get(t.id).visible
        : (Ce(`Optional content group not found: ${t.id}`), !0);
    if ("OCMD" === t.type) {
      if (t.expression) return this.#ei(t.expression);
      if (!t.policy || "AnyOn" === t.policy) {
        for (const e of t.ids) {
          if (!this.#Je.has(e))
            return (Ce(`Optional content group not found: ${e}`), !0);
          if (this.#Je.get(e).visible) return !0;
        }
        return !1;
      }
      if ("AllOn" === t.policy) {
        for (const e of t.ids) {
          if (!this.#Je.has(e))
            return (Ce(`Optional content group not found: ${e}`), !0);
          if (!this.#Je.get(e).visible) return !1;
        }
        return !0;
      }
      if ("AnyOff" === t.policy) {
        for (const e of t.ids) {
          if (!this.#Je.has(e))
            return (Ce(`Optional content group not found: ${e}`), !0);
          if (!this.#Je.get(e).visible) return !0;
        }
        return !1;
      }
      if ("AllOff" === t.policy) {
        for (const e of t.ids) {
          if (!this.#Je.has(e))
            return (Ce(`Optional content group not found: ${e}`), !0);
          if (this.#Je.get(e).visible) return !1;
        }
        return !0;
      }
      return (Ce(`Unknown optional content policy ${t.policy}.`), !0);
    }
    return (Ce(`Unknown group type ${t.type}.`), !0);
  }
  setVisibility(t, e = !0, i = !0) {
    const s = this.#Je.get(t);
    if (s) {
      if (i && e && s.rbGroups.length)
        for (const e of s.rbGroups)
          for (const i of e)
            i !== t && this.#Je.get(i)?._setVisible(Us, !1, !0);
      (s._setVisible(Us, !!e, !0), (this.#Qe = null));
    } else Ce(`Optional content group not found: ${t}`);
  }
  setOCGState({ state: t, preserveRB: e }) {
    let i;
    for (const s of t) {
      switch (s) {
        case "ON":
        case "OFF":
        case "Toggle":
          i = s;
          continue;
      }
      const t = this.#Je.get(s);
      if (t)
        switch (i) {
          case "ON":
            this.setVisibility(s, !0, e);
            break;
          case "OFF":
            this.setVisibility(s, !1, e);
            break;
          case "Toggle":
            this.setVisibility(s, !t.visible, e);
        }
    }
    this.#Qe = null;
  }
  get hasInitialVisibility() {
    return null === this.#Ze || this.getHash() === this.#Ze;
  }
  getOrder() {
    return this.#Je.size
      ? this.#ti
        ? this.#ti.slice()
        : [...this.#Je.keys()]
      : null;
  }
  getGroups() {
    return this.#Je.size > 0 ? ze(this.#Je) : null;
  }
  getGroup(t) {
    return this.#Je.get(t) || null;
  }
  getHash() {
    if (null !== this.#Qe) return this.#Qe;
    const t = new Oi();
    for (const [e, i] of this.#Je) t.update(`${e}:${i.visible}`);
    return (this.#Qe = t.hexdigest());
  }
}
class Gs {
  constructor(t, { disableRange: e = !1, disableStream: i = !1 }) {
    Se(
      t,
      'PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.',
    );
    const {
      length: s,
      initialData: n,
      progressiveDone: a,
      contentDispositionFilename: r,
    } = t;
    if (
      ((this._queuedChunks = []),
      (this._progressiveDone = a),
      (this._contentDispositionFilename = r),
      n?.length > 0)
    ) {
      const t =
        n instanceof Uint8Array && n.byteLength === n.buffer.byteLength
          ? n.buffer
          : new Uint8Array(n).buffer;
      this._queuedChunks.push(t);
    }
    ((this._pdfDataRangeTransport = t),
      (this._isStreamingSupported = !i),
      (this._isRangeSupported = !e),
      (this._contentLength = s),
      (this._fullRequestReader = null),
      (this._rangeReaders = []),
      t.addRangeListener((t, e) => {
        this._onReceiveData({ begin: t, chunk: e });
      }),
      t.addProgressListener((t, e) => {
        this._onProgress({ loaded: t, total: e });
      }),
      t.addProgressiveReadListener((t) => {
        this._onReceiveData({ chunk: t });
      }),
      t.addProgressiveDoneListener(() => {
        this._onProgressiveDone();
      }),
      t.transportReady());
  }
  _onReceiveData({ begin: t, chunk: e }) {
    const i =
      e instanceof Uint8Array && e.byteLength === e.buffer.byteLength
        ? e.buffer
        : new Uint8Array(e).buffer;
    if (void 0 === t)
      this._fullRequestReader
        ? this._fullRequestReader._enqueue(i)
        : this._queuedChunks.push(i);
    else {
      Se(
        this._rangeReaders.some(function (e) {
          return e._begin === t && (e._enqueue(i), !0);
        }),
        "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.",
      );
    }
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  _onProgress(t) {
    void 0 === t.total
      ? this._rangeReaders[0]?.onProgress?.({ loaded: t.loaded })
      : this._fullRequestReader?.onProgress?.({
          loaded: t.loaded,
          total: t.total,
        });
  }
  _onProgressiveDone() {
    (this._fullRequestReader?.progressiveDone(), (this._progressiveDone = !0));
  }
  _removeRangeReader(t) {
    const e = this._rangeReaders.indexOf(t);
    e >= 0 && this._rangeReaders.splice(e, 1);
  }
  getFullReader() {
    Se(
      !this._fullRequestReader,
      "PDFDataTransportStream.getFullReader can only be called once.",
    );
    const t = this._queuedChunks;
    return (
      (this._queuedChunks = null),
      new Vs(this, t, this._progressiveDone, this._contentDispositionFilename)
    );
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new Ws(this, t, e);
    return (
      this._pdfDataRangeTransport.requestDataRange(t, e),
      this._rangeReaders.push(i),
      i
    );
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeReaders.slice(0)) e.cancel(t);
    this._pdfDataRangeTransport.abort();
  }
}
class Vs {
  constructor(t, e, i = !1, s = null) {
    ((this._stream = t),
      (this._done = i || !1),
      (this._filename = hi(s) ? s : null),
      (this._queuedChunks = e || []),
      (this._loaded = 0));
    for (const t of this._queuedChunks) this._loaded += t.byteLength;
    ((this._requests = []),
      (this._headersReady = Promise.resolve()),
      (t._fullRequestReader = this),
      (this.onProgress = null));
  }
  _enqueue(t) {
    if (!this._done) {
      if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t, done: !1 });
      } else this._queuedChunks.push(t);
      this._loaded += t.byteLength;
    }
  }
  get headersReady() {
    return this._headersReady;
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._stream._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._stream._isStreamingSupported;
  }
  get contentLength() {
    return this._stream._contentLength;
  }
  async read() {
    if (this._queuedChunks.length > 0) {
      return { value: this._queuedChunks.shift(), done: !1 };
    }
    if (this._done) return { value: void 0, done: !0 };
    const t = Promise.withResolvers();
    return (this._requests.push(t), t.promise);
  }
  cancel(t) {
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    this._requests.length = 0;
  }
  progressiveDone() {
    this._done || (this._done = !0);
  }
}
class Ws {
  constructor(t, e, i) {
    ((this._stream = t),
      (this._begin = e),
      (this._end = i),
      (this._queuedChunk = null),
      (this._requests = []),
      (this._done = !1),
      (this.onProgress = null));
  }
  _enqueue(t) {
    if (!this._done) {
      if (0 === this._requests.length) this._queuedChunk = t;
      else {
        this._requests.shift().resolve({ value: t, done: !1 });
        for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
        this._requests.length = 0;
      }
      ((this._done = !0), this._stream._removeRangeReader(this));
    }
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._queuedChunk) {
      const t = this._queuedChunk;
      return ((this._queuedChunk = null), { value: t, done: !1 });
    }
    if (this._done) return { value: void 0, done: !0 };
    const t = Promise.withResolvers();
    return (this._requests.push(t), t.promise);
  }
  cancel(t) {
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    ((this._requests.length = 0), this._stream._removeRangeReader(this));
  }
}
function qs(t, e) {
  const i = new Headers();
  if (!t || !e || "object" != typeof e) return i;
  for (const t in e) {
    const s = e[t];
    void 0 !== s && i.append(t, s);
  }
  return i;
}
function Ys({
  responseHeaders: t,
  isHttp: e,
  rangeChunkSize: i,
  disableRange: s,
}) {
  const n = { allowRangeRequests: !1, suggestedLength: void 0 },
    a = parseInt(t.get("Content-Length"), 10);
  if (!Number.isInteger(a)) return n;
  if (((n.suggestedLength = a), a <= 2 * i)) return n;
  if (s || !e) return n;
  if ("bytes" !== t.get("Accept-Ranges")) return n;
  return (
    "identity" !== (t.get("Content-Encoding") || "identity") ||
      (n.allowRangeRequests = !0),
    n
  );
}
function Xs(t) {
  const e = t.get("Content-Disposition");
  if (e) {
    let t = (function (t) {
      let e = !0,
        i = s("filename\\*", "i").exec(t);
      if (i) {
        i = i[1];
        let t = r(i);
        return ((t = unescape(t)), (t = o(t)), (t = h(t)), a(t));
      }
      if (
        ((i = (function (t) {
          const e = [];
          let i;
          const n = s("filename\\*((?!0\\d)\\d+)(\\*?)", "ig");
          for (; null !== (i = n.exec(t)); ) {
            let [, t, s, n] = i;
            if (((t = parseInt(t, 10)), t in e)) {
              if (0 === t) break;
            } else e[t] = [s, n];
          }
          const a = [];
          for (let t = 0; t < e.length && t in e; ++t) {
            let [i, s] = e[t];
            ((s = r(s)),
              i && ((s = unescape(s)), 0 === t && (s = o(s))),
              a.push(s));
          }
          return a.join("");
        })(t)),
        i)
      )
        return a(h(i));
      if (((i = s("filename", "i").exec(t)), i)) {
        i = i[1];
        let t = r(i);
        return ((t = h(t)), a(t));
      }
      function s(t, e) {
        return new RegExp(
          "(?:^|;)\\s*" +
            t +
            '\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)',
          e,
        );
      }
      function n(t, i) {
        if (t) {
          if (!/^[\x00-\xFF]+$/.test(i)) return i;
          try {
            const s = new TextDecoder(t, { fatal: !0 }),
              n = Be(i);
            ((i = s.decode(n)), (e = !1));
          } catch {}
        }
        return i;
      }
      function a(t) {
        return (
          e &&
            /[\x80-\xff]/.test(t) &&
            ((t = n("utf-8", t)), e && (t = n("iso-8859-1", t))),
          t
        );
      }
      function r(t) {
        if (t.startsWith('"')) {
          const e = t.slice(1).split('\\"');
          for (let t = 0; t < e.length; ++t) {
            const i = e[t].indexOf('"');
            (-1 !== i && ((e[t] = e[t].slice(0, i)), (e.length = t + 1)),
              (e[t] = e[t].replaceAll(/\\(.)/g, "$1")));
          }
          t = e.join('"');
        }
        return t;
      }
      function o(t) {
        const e = t.indexOf("'");
        return -1 === e
          ? t
          : n(t.slice(0, e), t.slice(e + 1).replace(/^[^']*'/, ""));
      }
      function h(t) {
        return !t.startsWith("=?") || /[\x00-\x19\x80-\xff]/.test(t)
          ? t
          : t.replaceAll(
              /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
              function (t, e, i, s) {
                if ("q" === i || "Q" === i)
                  return n(
                    e,
                    (s = (s = s.replaceAll("_", " ")).replaceAll(
                      /=([0-9a-fA-F]{2})/g,
                      function (t, e) {
                        return String.fromCharCode(parseInt(e, 16));
                      },
                    )),
                  );
                try {
                  s = atob(s);
                } catch {}
                return n(e, s);
              },
            );
      }
      return "";
    })(e);
    if (t.includes("%"))
      try {
        t = decodeURIComponent(t);
      } catch {}
    if (hi(t)) return t;
  }
  return null;
}
function Ks(t, e) {
  return 404 === t || (0 === t && e.startsWith("file:"))
    ? new De('Missing PDF "' + e + '".')
    : new Le(
        `Unexpected server response (${t}) while retrieving PDF "${e}".`,
        t,
      );
}
function Qs(t) {
  return 200 === t || 206 === t;
}
function Js(t, e, i) {
  return {
    method: "GET",
    headers: t,
    signal: i.signal,
    mode: "cors",
    credentials: e ? "include" : "same-origin",
    redirect: "follow",
  };
}
function Zs(t) {
  return t instanceof Uint8Array
    ? t.buffer
    : t instanceof ArrayBuffer
      ? t
      : (Ce(`getArrayBuffer - unexpected data format: ${t}`),
        new Uint8Array(t).buffer);
}
class tn {
  constructor(t) {
    ((this.source = t),
      (this.isHttp = /^https?:/i.test(t.url)),
      (this.headers = qs(this.isHttp, t.httpHeaders)),
      (this._fullRequestReader = null),
      (this._rangeRequestReaders = []));
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    return (
      Se(
        !this._fullRequestReader,
        "PDFFetchStream.getFullReader can only be called once.",
      ),
      (this._fullRequestReader = new en(this)),
      this._fullRequestReader
    );
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = new sn(this, t, e);
    return (this._rangeRequestReaders.push(i), i);
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
  }
}
class en {
  constructor(t) {
    ((this._stream = t),
      (this._reader = null),
      (this._loaded = 0),
      (this._filename = null));
    const e = t.source;
    ((this._withCredentials = e.withCredentials || !1),
      (this._contentLength = e.length),
      (this._headersCapability = Promise.withResolvers()),
      (this._disableRange = e.disableRange || !1),
      (this._rangeChunkSize = e.rangeChunkSize),
      this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
      (this._abortController = new AbortController()),
      (this._isStreamingSupported = !e.disableStream),
      (this._isRangeSupported = !e.disableRange));
    const i = new Headers(t.headers),
      s = e.url;
    (fetch(s, Js(i, this._withCredentials, this._abortController))
      .then((e) => {
        if (!Qs(e.status)) throw Ks(e.status, s);
        ((this._reader = e.body.getReader()),
          this._headersCapability.resolve());
        const i = e.headers,
          { allowRangeRequests: n, suggestedLength: a } = Ys({
            responseHeaders: i,
            isHttp: t.isHttp,
            rangeChunkSize: this._rangeChunkSize,
            disableRange: this._disableRange,
          });
        ((this._isRangeSupported = n),
          (this._contentLength = a || this._contentLength),
          (this._filename = Xs(i)),
          !this._isStreamingSupported &&
            this._isRangeSupported &&
            this.cancel(new Ne("Streaming is disabled.")));
      })
      .catch(this._headersCapability.reject),
      (this.onProgress = null));
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._headersCapability.promise;
    const { value: t, done: e } = await this._reader.read();
    return e
      ? { value: t, done: e }
      : ((this._loaded += t.byteLength),
        this.onProgress?.({ loaded: this._loaded, total: this._contentLength }),
        { value: Zs(t), done: !1 });
  }
  cancel(t) {
    (this._reader?.cancel(t), this._abortController.abort());
  }
}
class sn {
  constructor(t, e, i) {
    ((this._stream = t), (this._reader = null), (this._loaded = 0));
    const s = t.source;
    ((this._withCredentials = s.withCredentials || !1),
      (this._readCapability = Promise.withResolvers()),
      (this._isStreamingSupported = !s.disableStream),
      (this._abortController = new AbortController()));
    const n = new Headers(t.headers);
    n.append("Range", `bytes=${e}-${i - 1}`);
    const a = s.url;
    (fetch(a, Js(n, this._withCredentials, this._abortController))
      .then((t) => {
        if (!Qs(t.status)) throw Ks(t.status, a);
        (this._readCapability.resolve(), (this._reader = t.body.getReader()));
      })
      .catch(this._readCapability.reject),
      (this.onProgress = null));
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    await this._readCapability.promise;
    const { value: t, done: e } = await this._reader.read();
    return e
      ? { value: t, done: e }
      : ((this._loaded += t.byteLength),
        this.onProgress?.({ loaded: this._loaded }),
        { value: Zs(t), done: !1 });
  }
  cancel(t) {
    (this._reader?.cancel(t), this._abortController.abort());
  }
}
class nn {
  constructor({ url: t, httpHeaders: e, withCredentials: i }) {
    ((this.url = t),
      (this.isHttp = /^https?:/i.test(t)),
      (this.headers = qs(this.isHttp, e)),
      (this.withCredentials = i || !1),
      (this.currXhrId = 0),
      (this.pendingRequests = Object.create(null)));
  }
  requestRange(t, e, i) {
    const s = { begin: t, end: e };
    for (const t in i) s[t] = i[t];
    return this.request(s);
  }
  requestFull(t) {
    return this.request(t);
  }
  request(t) {
    const e = new XMLHttpRequest(),
      i = this.currXhrId++,
      s = (this.pendingRequests[i] = { xhr: e });
    (e.open("GET", this.url), (e.withCredentials = this.withCredentials));
    for (const [t, i] of this.headers) e.setRequestHeader(t, i);
    return (
      this.isHttp && "begin" in t && "end" in t
        ? (e.setRequestHeader("Range", `bytes=${t.begin}-${t.end - 1}`),
          (s.expectedStatus = 206))
        : (s.expectedStatus = 200),
      (e.responseType = "arraybuffer"),
      t.onError &&
        (e.onerror = function (i) {
          t.onError(e.status);
        }),
      (e.onreadystatechange = this.onStateChange.bind(this, i)),
      (e.onprogress = this.onProgress.bind(this, i)),
      (s.onHeadersReceived = t.onHeadersReceived),
      (s.onDone = t.onDone),
      (s.onError = t.onError),
      (s.onProgress = t.onProgress),
      e.send(null),
      i
    );
  }
  onProgress(t, e) {
    const i = this.pendingRequests[t];
    i && i.onProgress?.(e);
  }
  onStateChange(t, e) {
    const i = this.pendingRequests[t];
    if (!i) return;
    const s = i.xhr;
    if (
      (s.readyState >= 2 &&
        i.onHeadersReceived &&
        (i.onHeadersReceived(), delete i.onHeadersReceived),
      4 !== s.readyState)
    )
      return;
    if (!(t in this.pendingRequests)) return;
    if ((delete this.pendingRequests[t], 0 === s.status && this.isHttp))
      return void i.onError?.(s.status);
    const n = s.status || 200;
    if (!(200 === n && 206 === i.expectedStatus) && n !== i.expectedStatus)
      return void i.onError?.(s.status);
    const a = (function (t) {
      const e = t.response;
      return "string" != typeof e ? e : Be(e).buffer;
    })(s);
    if (206 === n) {
      const t = s.getResponseHeader("Content-Range"),
        e = /bytes (\d+)-(\d+)\/(\d+)/.exec(t);
      i.onDone({ begin: parseInt(e[1], 10), chunk: a });
    } else a ? i.onDone({ begin: 0, chunk: a }) : i.onError?.(s.status);
  }
  getRequestXhr(t) {
    return this.pendingRequests[t].xhr;
  }
  isPendingRequest(t) {
    return t in this.pendingRequests;
  }
  abortRequest(t) {
    const e = this.pendingRequests[t].xhr;
    (delete this.pendingRequests[t], e.abort());
  }
}
class an {
  constructor(t) {
    ((this._source = t),
      (this._manager = new nn(t)),
      (this._rangeChunkSize = t.rangeChunkSize),
      (this._fullRequestReader = null),
      (this._rangeRequestReaders = []));
  }
  _onRangeRequestReaderClosed(t) {
    const e = this._rangeRequestReaders.indexOf(t);
    e >= 0 && this._rangeRequestReaders.splice(e, 1);
  }
  getFullReader() {
    return (
      Se(
        !this._fullRequestReader,
        "PDFNetworkStream.getFullReader can only be called once.",
      ),
      (this._fullRequestReader = new rn(this._manager, this._source)),
      this._fullRequestReader
    );
  }
  getRangeReader(t, e) {
    const i = new on(this._manager, t, e);
    return (
      (i.onClosed = this._onRangeRequestReaderClosed.bind(this)),
      this._rangeRequestReaders.push(i),
      i
    );
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
  }
}
class rn {
  constructor(t, e) {
    this._manager = t;
    const i = {
      onHeadersReceived: this._onHeadersReceived.bind(this),
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    };
    ((this._url = e.url),
      (this._fullRequestId = t.requestFull(i)),
      (this._headersCapability = Promise.withResolvers()),
      (this._disableRange = e.disableRange || !1),
      (this._contentLength = e.length),
      (this._rangeChunkSize = e.rangeChunkSize),
      this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
      (this._isStreamingSupported = !1),
      (this._isRangeSupported = !1),
      (this._cachedChunks = []),
      (this._requests = []),
      (this._done = !1),
      (this._storedError = void 0),
      (this._filename = null),
      (this.onProgress = null));
  }
  _onHeadersReceived() {
    const t = this._fullRequestId,
      e = this._manager.getRequestXhr(t),
      i = new Headers(
        e
          .getAllResponseHeaders()
          .trim()
          .split(/[\r\n]+/)
          .map((t) => {
            const [e, ...i] = t.split(": ");
            return [e, i.join(": ")];
          }),
      ),
      { allowRangeRequests: s, suggestedLength: n } = Ys({
        responseHeaders: i,
        isHttp: this._manager.isHttp,
        rangeChunkSize: this._rangeChunkSize,
        disableRange: this._disableRange,
      });
    (s && (this._isRangeSupported = !0),
      (this._contentLength = n || this._contentLength),
      (this._filename = Xs(i)),
      this._isRangeSupported && this._manager.abortRequest(t),
      this._headersCapability.resolve());
  }
  _onDone(t) {
    if (t)
      if (this._requests.length > 0) {
        this._requests.shift().resolve({ value: t.chunk, done: !1 });
      } else this._cachedChunks.push(t.chunk);
    if (((this._done = !0), !(this._cachedChunks.length > 0))) {
      for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
      this._requests.length = 0;
    }
  }
  _onError(t) {
    ((this._storedError = Ks(t, this._url)),
      this._headersCapability.reject(this._storedError));
    for (const t of this._requests) t.reject(this._storedError);
    ((this._requests.length = 0), (this._cachedChunks.length = 0));
  }
  _onProgress(t) {
    this.onProgress?.({
      loaded: t.loaded,
      total: t.lengthComputable ? t.total : this._contentLength,
    });
  }
  get filename() {
    return this._filename;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  get contentLength() {
    return this._contentLength;
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  async read() {
    if (this._storedError) throw this._storedError;
    if (this._cachedChunks.length > 0) {
      return { value: this._cachedChunks.shift(), done: !1 };
    }
    if (this._done) return { value: void 0, done: !0 };
    const t = Promise.withResolvers();
    return (this._requests.push(t), t.promise);
  }
  cancel(t) {
    ((this._done = !0), this._headersCapability.reject(t));
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    ((this._requests.length = 0),
      this._manager.isPendingRequest(this._fullRequestId) &&
        this._manager.abortRequest(this._fullRequestId),
      (this._fullRequestReader = null));
  }
}
class on {
  constructor(t, e, i) {
    this._manager = t;
    const s = {
      onDone: this._onDone.bind(this),
      onError: this._onError.bind(this),
      onProgress: this._onProgress.bind(this),
    };
    ((this._url = t.url),
      (this._requestId = t.requestRange(e, i, s)),
      (this._requests = []),
      (this._queuedChunk = null),
      (this._done = !1),
      (this._storedError = void 0),
      (this.onProgress = null),
      (this.onClosed = null));
  }
  _close() {
    this.onClosed?.(this);
  }
  _onDone(t) {
    const e = t.chunk;
    if (this._requests.length > 0) {
      this._requests.shift().resolve({ value: e, done: !1 });
    } else this._queuedChunk = e;
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    ((this._requests.length = 0), this._close());
  }
  _onError(t) {
    this._storedError = Ks(t, this._url);
    for (const t of this._requests) t.reject(this._storedError);
    ((this._requests.length = 0), (this._queuedChunk = null));
  }
  _onProgress(t) {
    this.isStreamingSupported || this.onProgress?.({ loaded: t.loaded });
  }
  get isStreamingSupported() {
    return !1;
  }
  async read() {
    if (this._storedError) throw this._storedError;
    if (null !== this._queuedChunk) {
      const t = this._queuedChunk;
      return ((this._queuedChunk = null), { value: t, done: !1 });
    }
    if (this._done) return { value: void 0, done: !0 };
    const t = Promise.withResolvers();
    return (this._requests.push(t), t.promise);
  }
  cancel(t) {
    this._done = !0;
    for (const t of this._requests) t.resolve({ value: void 0, done: !0 });
    ((this._requests.length = 0),
      this._manager.isPendingRequest(this._requestId) &&
        this._manager.abortRequest(this._requestId),
      this._close());
  }
}
const hn = /^[a-z][a-z0-9\-+.]+:/i;
function ln(t, e, i) {
  if ("http:" === t.protocol) {
    return Qi.get("http").request(t, { headers: e }, i);
  }
  return Qi.get("https").request(t, { headers: e }, i);
}
class cn {
  constructor(t) {
    ((this.source = t),
      (this.url = (function (t) {
        if (hn.test(t)) return new URL(t);
        const e = Qi.get("url");
        return new URL(e.pathToFileURL(t));
      })(t.url)),
      (this.isHttp =
        "http:" === this.url.protocol || "https:" === this.url.protocol),
      (this.isFsUrl = "file:" === this.url.protocol),
      (this.headers = qs(this.isHttp, t.httpHeaders)),
      (this._fullRequestReader = null),
      (this._rangeRequestReaders = []));
  }
  get _progressiveDataLength() {
    return this._fullRequestReader?._loaded ?? 0;
  }
  getFullReader() {
    return (
      Se(
        !this._fullRequestReader,
        "PDFNodeStream.getFullReader can only be called once.",
      ),
      (this._fullRequestReader = this.isFsUrl ? new fn(this) : new pn(this)),
      this._fullRequestReader
    );
  }
  getRangeReader(t, e) {
    if (e <= this._progressiveDataLength) return null;
    const i = this.isFsUrl ? new mn(this, t, e) : new gn(this, t, e);
    return (this._rangeRequestReaders.push(i), i);
  }
  cancelAllRequests(t) {
    this._fullRequestReader?.cancel(t);
    for (const e of this._rangeRequestReaders.slice(0)) e.cancel(t);
  }
}
class dn {
  constructor(t) {
    ((this._url = t.url),
      (this._done = !1),
      (this._storedError = null),
      (this.onProgress = null));
    const e = t.source;
    ((this._contentLength = e.length),
      (this._loaded = 0),
      (this._filename = null),
      (this._disableRange = e.disableRange || !1),
      (this._rangeChunkSize = e.rangeChunkSize),
      this._rangeChunkSize || this._disableRange || (this._disableRange = !0),
      (this._isStreamingSupported = !e.disableStream),
      (this._isRangeSupported = !e.disableRange),
      (this._readableStream = null),
      (this._readCapability = Promise.withResolvers()),
      (this._headersCapability = Promise.withResolvers()));
  }
  get headersReady() {
    return this._headersCapability.promise;
  }
  get filename() {
    return this._filename;
  }
  get contentLength() {
    return this._contentLength;
  }
  get isRangeSupported() {
    return this._isRangeSupported;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    if ((await this._readCapability.promise, this._done))
      return { value: void 0, done: !0 };
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    if (null === t)
      return ((this._readCapability = Promise.withResolvers()), this.read());
    ((this._loaded += t.length),
      this.onProgress?.({ loaded: this._loaded, total: this._contentLength }));
    return { value: new Uint8Array(t).buffer, done: !1 };
  }
  cancel(t) {
    this._readableStream ? this._readableStream.destroy(t) : this._error(t);
  }
  _error(t) {
    ((this._storedError = t), this._readCapability.resolve());
  }
  _setReadableStream(t) {
    ((this._readableStream = t),
      t.on("readable", () => {
        this._readCapability.resolve();
      }),
      t.on("end", () => {
        (t.destroy(), (this._done = !0), this._readCapability.resolve());
      }),
      t.on("error", (t) => {
        this._error(t);
      }),
      !this._isStreamingSupported &&
        this._isRangeSupported &&
        this._error(new Ne("streaming is disabled")),
      this._storedError && this._readableStream.destroy(this._storedError));
  }
}
class un {
  constructor(t) {
    ((this._url = t.url),
      (this._done = !1),
      (this._storedError = null),
      (this.onProgress = null),
      (this._loaded = 0),
      (this._readableStream = null),
      (this._readCapability = Promise.withResolvers()));
    const e = t.source;
    this._isStreamingSupported = !e.disableStream;
  }
  get isStreamingSupported() {
    return this._isStreamingSupported;
  }
  async read() {
    if ((await this._readCapability.promise, this._done))
      return { value: void 0, done: !0 };
    if (this._storedError) throw this._storedError;
    const t = this._readableStream.read();
    if (null === t)
      return ((this._readCapability = Promise.withResolvers()), this.read());
    ((this._loaded += t.length), this.onProgress?.({ loaded: this._loaded }));
    return { value: new Uint8Array(t).buffer, done: !1 };
  }
  cancel(t) {
    this._readableStream ? this._readableStream.destroy(t) : this._error(t);
  }
  _error(t) {
    ((this._storedError = t), this._readCapability.resolve());
  }
  _setReadableStream(t) {
    ((this._readableStream = t),
      t.on("readable", () => {
        this._readCapability.resolve();
      }),
      t.on("end", () => {
        (t.destroy(), (this._done = !0), this._readCapability.resolve());
      }),
      t.on("error", (t) => {
        this._error(t);
      }),
      this._storedError && this._readableStream.destroy(this._storedError));
  }
}
class pn extends dn {
  constructor(t) {
    super(t);
    const e = Object.fromEntries(t.headers);
    ((this._request = ln(this._url, e, (e) => {
      if (404 === e.statusCode) {
        const t = new De(`Missing PDF "${this._url}".`);
        return (
          (this._storedError = t),
          void this._headersCapability.reject(t)
        );
      }
      (this._headersCapability.resolve(), this._setReadableStream(e));
      const i = new Headers(this._readableStream.headers),
        { allowRangeRequests: s, suggestedLength: n } = Ys({
          responseHeaders: i,
          isHttp: t.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      ((this._isRangeSupported = s),
        (this._contentLength = n || this._contentLength),
        (this._filename = Xs(i)));
    })),
      this._request.on("error", (t) => {
        ((this._storedError = t), this._headersCapability.reject(t));
      }),
      this._request.end());
  }
}
class gn extends un {
  constructor(t, e, i) {
    super(t);
    const s = Object.fromEntries(t.headers);
    s.Range = `bytes=${e}-${i - 1}`;
    ((this._request = ln(this._url, s, (t) => {
      if (404 !== t.statusCode) this._setReadableStream(t);
      else {
        const t = new De(`Missing PDF "${this._url}".`);
        this._storedError = t;
      }
    })),
      this._request.on("error", (t) => {
        this._storedError = t;
      }),
      this._request.end());
  }
}
class fn extends dn {
  constructor(t) {
    super(t);
    const e = Qi.get("fs");
    e.promises.lstat(this._url).then(
      (t) => {
        ((this._contentLength = t.size),
          this._setReadableStream(e.createReadStream(this._url)),
          this._headersCapability.resolve());
      },
      (t) => {
        ("ENOENT" === t.code && (t = new De(`Missing PDF "${this._url}".`)),
          (this._storedError = t),
          this._headersCapability.reject(t));
      },
    );
  }
}
class mn extends un {
  constructor(t, e, i) {
    super(t);
    const s = Qi.get("fs");
    this._setReadableStream(
      s.createReadStream(this._url, { start: e, end: i - 1 }),
    );
  }
}
const bn = 30;
class vn {
  #ii = Promise.withResolvers();
  #ut = null;
  #si = !1;
  #ni = !!globalThis.FontInspector?.enabled;
  #ai = null;
  #ri = null;
  #oi = 0;
  #hi = 0;
  #li = null;
  #ci = null;
  #di = 0;
  #ui = 0;
  #pi = Object.create(null);
  #gi = [];
  #fi = null;
  #mi = [];
  #bi = new WeakMap();
  #vi = null;
  static #Ai = new Map();
  static #yi = new Map();
  static #wi = new WeakMap();
  static #_i = null;
  static #xi = new Set();
  constructor({ textContentSource: t, container: e, viewport: i }) {
    if (t instanceof ReadableStream) this.#fi = t;
    else {
      if ("object" != typeof t)
        throw new Error('No "textContentSource" parameter specified.');
      this.#fi = new ReadableStream({
        start(e) {
          (e.enqueue(t), e.close());
        },
      });
    }
    ((this.#ut = this.#ci = e),
      (this.#ui = i.scale * (globalThis.devicePixelRatio || 1)),
      (this.#di = i.rotation),
      (this.#ri = { div: null, properties: null, ctx: null }));
    const { pageWidth: s, pageHeight: n, pageX: a, pageY: r } = i.rawDims;
    ((this.#vi = [1, 0, 0, -1, -a, r + n]),
      (this.#hi = s),
      (this.#oi = n),
      vn.#Ci(),
      yi(e, i),
      this.#ii.promise
        .finally(() => {
          (vn.#xi.delete(this), (this.#ri = null), (this.#pi = null));
        })
        .catch(() => {}));
  }
  static get fontFamilyMap() {
    const { isWindows: t, isFirefox: e } = He.platform;
    return Me(
      this,
      "fontFamilyMap",
      new Map([
        ["sans-serif", (t && e ? "Calibri, " : "") + "sans-serif"],
        ["monospace", (t && e ? "Lucida Console, " : "") + "monospace"],
      ]),
    );
  }
  render() {
    const t = () => {
      this.#li.read().then(({ value: e, done: i }) => {
        i
          ? this.#ii.resolve()
          : ((this.#ai ??= e.lang),
            Object.assign(this.#pi, e.styles),
            this.#Ei(e.items),
            t());
      }, this.#ii.reject);
    };
    return (
      (this.#li = this.#fi.getReader()),
      vn.#xi.add(this),
      t(),
      this.#ii.promise
    );
  }
  update({ viewport: t, onBefore: e = null }) {
    const i = t.scale * (globalThis.devicePixelRatio || 1),
      s = t.rotation;
    if (
      (s !== this.#di && (e?.(), (this.#di = s), yi(this.#ci, { rotation: s })),
      i !== this.#ui)
    ) {
      (e?.(), (this.#ui = i));
      const t = { div: null, properties: null, ctx: vn.#Si(this.#ai) };
      for (const e of this.#mi)
        ((t.properties = this.#bi.get(e)), (t.div = e), this.#Ti(t));
    }
  }
  cancel() {
    const t = new Ne("TextLayer task cancelled.");
    (this.#li?.cancel(t).catch(() => {}),
      (this.#li = null),
      this.#ii.reject(t));
  }
  get textDivs() {
    return this.#mi;
  }
  get textContentItemsStr() {
    return this.#gi;
  }
  #Ei(t) {
    if (this.#si) return;
    this.#ri.ctx ??= vn.#Si(this.#ai);
    const e = this.#mi,
      i = this.#gi;
    for (const s of t) {
      if (e.length > 1e5)
        return (
          Ce("Ignoring additional textDivs for performance reasons."),
          void (this.#si = !0)
        );
      if (void 0 !== s.str) (i.push(s.str), this.#Mi(s));
      else if (
        "beginMarkedContentProps" === s.type ||
        "beginMarkedContent" === s.type
      ) {
        const t = this.#ut;
        ((this.#ut = document.createElement("span")),
          this.#ut.classList.add("markedContent"),
          null !== s.id && this.#ut.setAttribute("id", `${s.id}`),
          t.append(this.#ut));
      } else "endMarkedContent" === s.type && (this.#ut = this.#ut.parentNode);
    }
  }
  #Mi(t) {
    const e = document.createElement("span"),
      i = {
        angle: 0,
        canvasWidth: 0,
        hasText: "" !== t.str,
        hasEOL: t.hasEOL,
        fontSize: 0,
      };
    this.#mi.push(e);
    const s = je.transform(this.#vi, t.transform);
    let n = Math.atan2(s[1], s[0]);
    const a = this.#pi[t.fontName];
    a.vertical && (n += Math.PI / 2);
    let r = (this.#ni && a.fontSubstitution) || a.fontFamily;
    r = vn.fontFamilyMap.get(r) || r;
    const o = Math.hypot(s[2], s[3]),
      h = o * vn.#ki(r, this.#ai);
    let l, c;
    0 === n
      ? ((l = s[4]), (c = s[5] - h))
      : ((l = s[4] + h * Math.sin(n)), (c = s[5] - h * Math.cos(n)));
    const d = "calc(var(--scale-factor)*",
      u = e.style;
    (this.#ut === this.#ci
      ? ((u.left = `${((100 * l) / this.#hi).toFixed(2)}%`),
        (u.top = `${((100 * c) / this.#oi).toFixed(2)}%`))
      : ((u.left = `${d}${l.toFixed(2)}px)`),
        (u.top = `${d}${c.toFixed(2)}px)`)),
      (u.fontSize = `${d}${(vn.#_i * o).toFixed(2)}px)`),
      (u.fontFamily = r),
      (i.fontSize = o),
      e.setAttribute("role", "presentation"),
      (e.textContent = t.str),
      (e.dir = t.dir),
      this.#ni &&
        (e.dataset.fontName = a.fontSubstitutionLoadedName || t.fontName),
      0 !== n && (i.angle = n * (180 / Math.PI)));
    let p = !1;
    if (t.str.length > 1) p = !0;
    else if (" " !== t.str && t.transform[0] !== t.transform[3]) {
      const e = Math.abs(t.transform[0]),
        i = Math.abs(t.transform[3]);
      e !== i && Math.max(e, i) / Math.min(e, i) > 1.5 && (p = !0);
    }
    if (
      (p && (i.canvasWidth = a.vertical ? t.height : t.width),
      this.#bi.set(e, i),
      (this.#ri.div = e),
      (this.#ri.properties = i),
      this.#Ti(this.#ri),
      i.hasText && this.#ut.append(e),
      i.hasEOL)
    ) {
      const t = document.createElement("br");
      (t.setAttribute("role", "presentation"), this.#ut.append(t));
    }
  }
  #Ti(t) {
    const { div: e, properties: i, ctx: s } = t,
      { style: n } = e;
    let a = "";
    if (
      (vn.#_i > 1 && (a = `scale(${1 / vn.#_i})`),
      0 !== i.canvasWidth && i.hasText)
    ) {
      const { fontFamily: t } = n,
        { canvasWidth: r, fontSize: o } = i;
      vn.#Pi(s, o * this.#ui, t);
      const { width: h } = s.measureText(e.textContent);
      h > 0 && (a = `scaleX(${(r * this.#ui) / h}) ${a}`);
    }
    (0 !== i.angle && (a = `rotate(${i.angle}deg) ${a}`),
      a.length > 0 && (n.transform = a));
  }
  static cleanup() {
    if (!(this.#xi.size > 0)) {
      this.#Ai.clear();
      for (const { canvas: t } of this.#yi.values()) t.remove();
      this.#yi.clear();
    }
  }
  static #Si(t = null) {
    let e = this.#yi.get((t ||= ""));
    if (!e) {
      const i = document.createElement("canvas");
      ((i.className = "hiddenCanvasElement"),
        (i.lang = t),
        document.body.append(i),
        (e = i.getContext("2d", { alpha: !1, willReadFrequently: !0 })),
        this.#yi.set(t, e),
        this.#wi.set(e, { size: 0, family: "" }));
    }
    return e;
  }
  static #Pi(t, e, i) {
    const s = this.#wi.get(t);
    (e === s.size && i === s.family) ||
      ((t.font = `${e}px ${i}`), (s.size = e), (s.family = i));
  }
  static #Ci() {
    if (null !== this.#_i) return;
    const t = document.createElement("div");
    ((t.style.opacity = 0),
      (t.style.lineHeight = 1),
      (t.style.fontSize = "1px"),
      (t.style.position = "absolute"),
      (t.textContent = "X"),
      document.body.append(t),
      (this.#_i = t.getBoundingClientRect().height),
      t.remove());
  }
  static #ki(t, e) {
    const i = this.#Ai.get(t);
    if (i) return i;
    const s = this.#Si(e);
    ((s.canvas.width = s.canvas.height = bn), this.#Pi(s, bn, t));
    const n = s.measureText("");
    let a = n.fontBoundingBoxAscent,
      r = Math.abs(n.fontBoundingBoxDescent);
    if (a) {
      const e = a / (a + r);
      return (this.#Ai.set(t, e), (s.canvas.width = s.canvas.height = 0), e);
    }
    ((s.strokeStyle = "red"),
      s.clearRect(0, 0, bn, bn),
      s.strokeText("g", 0, 0));
    let o = s.getImageData(0, 0, bn, bn).data;
    r = 0;
    for (let t = o.length - 1 - 3; t >= 0; t -= 4)
      if (o[t] > 0) {
        r = Math.ceil(t / 4 / bn);
        break;
      }
    (s.clearRect(0, 0, bn, bn),
      s.strokeText("A", 0, bn),
      (o = s.getImageData(0, 0, bn, bn).data),
      (a = 0));
    for (let t = 0, e = o.length; t < e; t += 4)
      if (o[t] > 0) {
        a = bn - Math.floor(t / 4 / bn);
        break;
      }
    s.canvas.width = s.canvas.height = 0;
    const h = a ? a / (a + r) : 0.8;
    return (this.#Ai.set(t, h), h);
  }
}
class An {
  static textContent(t) {
    const e = [],
      i = { items: e, styles: Object.create(null) };
    return (
      (function t(i) {
        if (!i) return;
        let s = null;
        const n = i.name;
        if ("#text" === n) s = i.value;
        else {
          if (!An.shouldBuildText(n)) return;
          i?.attributes?.textContent
            ? (s = i.attributes.textContent)
            : i.value && (s = i.value);
        }
        if ((null !== s && e.push({ str: s }), i.children))
          for (const e of i.children) t(e);
      })(t),
      i
    );
  }
  static shouldBuildText(t) {
    return !(
      "textarea" === t ||
      "input" === t ||
      "option" === t ||
      "select" === t
    );
  }
}
const yn = 65536,
  wn = Et
    ? class extends $i {
        _createCanvas(t, e) {
          return Qi.get("canvas").createCanvas(t, e);
        }
      }
    : class extends $i {
        constructor({
          ownerDocument: t = globalThis.document,
          enableHWA: e = !1,
        }) {
          (super({ enableHWA: e }), (this._document = t));
        }
        _createCanvas(t, e) {
          const i = this._document.createElement("canvas");
          return ((i.width = t), (i.height = e), i);
        }
      },
  _n = Et
    ? class extends Gi {
        async _fetch(t) {
          return Ji(t);
        }
      }
    : Vi,
  xn = Et
    ? class extends Wi {}
    : class extends Wi {
        #Ri;
        #Ii;
        #Di;
        #Li;
        #Fi;
        #Ni;
        #A = 0;
        constructor({ docId: t, ownerDocument: e = globalThis.document }) {
          (super(), (this.#Li = t), (this.#Fi = e));
        }
        get #w() {
          return (this.#Ii ||= new Map());
        }
        get #Oi() {
          return (this.#Ni ||= new Map());
        }
        get #Bi() {
          if (!this.#Di) {
            const t = this.#Fi.createElement("div"),
              { style: e } = t;
            ((e.visibility = "hidden"),
              (e.contain = "strict"),
              (e.width = e.height = 0),
              (e.position = "absolute"),
              (e.top = e.left = 0),
              (e.zIndex = -1));
            const i = this.#Fi.createElementNS(ii, "svg");
            (i.setAttribute("width", 0),
              i.setAttribute("height", 0),
              (this.#Di = this.#Fi.createElementNS(ii, "defs")),
              t.append(i),
              i.append(this.#Di),
              this.#Fi.body.append(t));
          }
          return this.#Di;
        }
        #zi(t) {
          if (1 === t.length) {
            const e = t[0],
              i = new Array(256);
            for (let t = 0; t < 256; t++) i[t] = e[t] / 255;
            const s = i.join(",");
            return [s, s, s];
          }
          const [e, i, s] = t,
            n = new Array(256),
            a = new Array(256),
            r = new Array(256);
          for (let t = 0; t < 256; t++)
            ((n[t] = e[t] / 255), (a[t] = i[t] / 255), (r[t] = s[t] / 255));
          return [n.join(","), a.join(","), r.join(",")];
        }
        #Hi(t) {
          if (void 0 === this.#Ri) {
            this.#Ri = "";
            const t = this.#Fi.URL;
            t !== this.#Fi.baseURI &&
              (oi(t)
                ? Ce('#createUrl: ignore "data:"-URL for performance reasons.')
                : (this.#Ri = t.split("#", 1)[0]));
          }
          return `url(${this.#Ri}#${t})`;
        }
        addFilter(t) {
          if (!t) return "none";
          let e = this.#w.get(t);
          if (e) return e;
          const [i, s, n] = this.#zi(t),
            a = 1 === t.length ? i : `${i}${s}${n}`;
          if (((e = this.#w.get(a)), e)) return (this.#w.set(t, e), e);
          const r = `g_${this.#Li}_transfer_map_${this.#A++}`,
            o = this.#Hi(r);
          (this.#w.set(t, o), this.#w.set(a, o));
          const h = this.#Ui(r);
          return (this.#ji(i, s, n, h), o);
        }
        addHCMFilter(t, e) {
          const i = `${t}-${e}`,
            s = "base";
          let n = this.#Oi.get(s);
          if (n?.key === i) return n.url;
          if (
            (n
              ? (n.filter?.remove(),
                (n.key = i),
                (n.url = "none"),
                (n.filter = null))
              : ((n = { key: i, url: "none", filter: null }),
                this.#Oi.set(s, n)),
            !t || !e)
          )
            return n.url;
          const a = this.#$i(t);
          t = je.makeHexColor(...a);
          const r = this.#$i(e);
          if (
            ((e = je.makeHexColor(...r)),
            (this.#Bi.style.color = ""),
            ("#000000" === t && "#ffffff" === e) || t === e)
          )
            return n.url;
          const o = new Array(256);
          for (let t = 0; t <= 255; t++) {
            const e = t / 255;
            o[t] = e <= 0.03928 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4;
          }
          const h = o.join(","),
            l = `g_${this.#Li}_hcm_filter`,
            c = (n.filter = this.#Ui(l));
          (this.#ji(h, h, h, c), this.#Gi(c));
          const d = (t, e) => {
            const i = a[t] / 255,
              s = r[t] / 255,
              n = new Array(e + 1);
            for (let t = 0; t <= e; t++) n[t] = i + (t / e) * (s - i);
            return n.join(",");
          };
          return (
            this.#ji(d(0, 5), d(1, 5), d(2, 5), c),
            (n.url = this.#Hi(l)),
            n.url
          );
        }
        addAlphaFilter(t) {
          let e = this.#w.get(t);
          if (e) return e;
          const [i] = this.#zi([t]),
            s = `alpha_${i}`;
          if (((e = this.#w.get(s)), e)) return (this.#w.set(t, e), e);
          const n = `g_${this.#Li}_alpha_map_${this.#A++}`,
            a = this.#Hi(n);
          (this.#w.set(t, a), this.#w.set(s, a));
          const r = this.#Ui(n);
          return (this.#Vi(i, r), a);
        }
        addLuminosityFilter(t) {
          let e,
            i,
            s = this.#w.get(t || "luminosity");
          if (s) return s;
          if (
            (t
              ? (([e] = this.#zi([t])), (i = `luminosity_${e}`))
              : (i = "luminosity"),
            (s = this.#w.get(i)),
            s)
          )
            return (this.#w.set(t, s), s);
          const n = `g_${this.#Li}_luminosity_map_${this.#A++}`,
            a = this.#Hi(n);
          (this.#w.set(t, a), this.#w.set(i, a));
          const r = this.#Ui(n);
          return (this.#Wi(r), t && this.#Vi(e, r), a);
        }
        addHighlightHCMFilter(t, e, i, s, n) {
          const a = `${e}-${i}-${s}-${n}`;
          let r = this.#Oi.get(t);
          if (r?.key === a) return r.url;
          if (
            (r
              ? (r.filter?.remove(),
                (r.key = a),
                (r.url = "none"),
                (r.filter = null))
              : ((r = { key: a, url: "none", filter: null }),
                this.#Oi.set(t, r)),
            !e || !i)
          )
            return r.url;
          const [o, h] = [e, i].map(this.#$i.bind(this));
          let l = Math.round(0.2126 * o[0] + 0.7152 * o[1] + 0.0722 * o[2]),
            c = Math.round(0.2126 * h[0] + 0.7152 * h[1] + 0.0722 * h[2]),
            [d, u] = [s, n].map(this.#$i.bind(this));
          (c < l && ([l, c, d, u] = [c, l, u, d]), (this.#Bi.style.color = ""));
          const p = (t, e, i) => {
              const s = new Array(256),
                n = (c - l) / i,
                a = t / 255,
                r = (e - t) / (255 * i);
              let o = 0;
              for (let t = 0; t <= i; t++) {
                const e = Math.round(l + t * n),
                  i = a + t * r;
                for (let t = o; t <= e; t++) s[t] = i;
                o = e + 1;
              }
              for (let t = o; t < 256; t++) s[t] = s[o - 1];
              return s.join(",");
            },
            g = `g_${this.#Li}_hcm_${t}_filter`,
            f = (r.filter = this.#Ui(g));
          return (
            this.#Gi(f),
            this.#ji(p(d[0], u[0], 5), p(d[1], u[1], 5), p(d[2], u[2], 5), f),
            (r.url = this.#Hi(g)),
            r.url
          );
        }
        destroy(t = !1) {
          (t && 0 !== this.#Oi.size) ||
            (this.#Di &&
              (this.#Di.parentNode.parentNode.remove(), (this.#Di = null)),
            this.#Ii && (this.#Ii.clear(), (this.#Ii = null)),
            (this.#A = 0));
        }
        #Wi(t) {
          const e = this.#Fi.createElementNS(ii, "feColorMatrix");
          (e.setAttribute("type", "matrix"),
            e.setAttribute(
              "values",
              "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0",
            ),
            t.append(e));
        }
        #Gi(t) {
          const e = this.#Fi.createElementNS(ii, "feColorMatrix");
          (e.setAttribute("type", "matrix"),
            e.setAttribute(
              "values",
              "0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0",
            ),
            t.append(e));
        }
        #Ui(t) {
          const e = this.#Fi.createElementNS(ii, "filter");
          return (
            e.setAttribute("color-interpolation-filters", "sRGB"),
            e.setAttribute("id", t),
            this.#Bi.append(e),
            e
          );
        }
        #qi(t, e, i) {
          const s = this.#Fi.createElementNS(ii, e);
          (s.setAttribute("type", "discrete"),
            s.setAttribute("tableValues", i),
            t.append(s));
        }
        #ji(t, e, i, s) {
          const n = this.#Fi.createElementNS(ii, "feComponentTransfer");
          (s.append(n),
            this.#qi(n, "feFuncR", t),
            this.#qi(n, "feFuncG", e),
            this.#qi(n, "feFuncB", i));
        }
        #Vi(t, e) {
          const i = this.#Fi.createElementNS(ii, "feComponentTransfer");
          (e.append(i), this.#qi(i, "feFuncA", t));
        }
        #$i(t) {
          return (
            (this.#Bi.style.color = t),
            bi(getComputedStyle(this.#Bi).getPropertyValue("color"))
          );
        }
      },
  Cn = Et
    ? class extends qi {
        async _fetch(t) {
          return Ji(t);
        }
      }
    : Yi;
function En(t = {}) {
  "string" == typeof t || t instanceof URL
    ? (t = { url: t })
    : (t instanceof ArrayBuffer || ArrayBuffer.isView(t)) && (t = { data: t });
  const e = new Tn(),
    { docId: i } = e,
    s = t.url
      ? (function (t) {
          if (t instanceof URL) return t.href;
          try {
            return new URL(t, window.location).href;
          } catch {
            if (Et && "string" == typeof t) return t;
          }
          throw new Error(
            "Invalid PDF url data: either string or URL-object is expected in the url property.",
          );
        })(t.url)
      : null,
    n = t.data
      ? (function (t) {
          if (Et && void 0 !== z && t instanceof z)
            throw new Error(
              "Please provide binary data as `Uint8Array`, rather than `Buffer`.",
            );
          if (t instanceof Uint8Array && t.byteLength === t.buffer.byteLength)
            return t;
          if ("string" == typeof t) return Be(t);
          if (
            t instanceof ArrayBuffer ||
            ArrayBuffer.isView(t) ||
            ("object" == typeof t && !isNaN(t?.length))
          )
            return new Uint8Array(t);
          throw new Error(
            "Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.",
          );
        })(t.data)
      : null,
    a = t.httpHeaders || null,
    r = !0 === t.withCredentials,
    o = t.password ?? null,
    h = t.range instanceof Mn ? t.range : null,
    l =
      Number.isInteger(t.rangeChunkSize) && t.rangeChunkSize > 0
        ? t.rangeChunkSize
        : yn;
  let c = t.worker instanceof In ? t.worker : null;
  const d = t.verbosity,
    u =
      "string" != typeof t.docBaseUrl || oi(t.docBaseUrl) ? null : t.docBaseUrl,
    p = "string" == typeof t.cMapUrl ? t.cMapUrl : null,
    g = !1 !== t.cMapPacked,
    f = t.CMapReaderFactory || _n,
    m = "string" == typeof t.standardFontDataUrl ? t.standardFontDataUrl : null,
    b = t.StandardFontDataFactory || Cn,
    v = !0 !== t.stopAtErrors,
    A =
      Number.isInteger(t.maxImageSize) && t.maxImageSize > -1
        ? t.maxImageSize
        : -1,
    y = !1 !== t.isEvalSupported,
    w =
      "boolean" == typeof t.isOffscreenCanvasSupported
        ? t.isOffscreenCanvasSupported
        : !Et,
    _ =
      "boolean" == typeof t.isChrome
        ? t.isChrome
        : !He.platform.isFirefox &&
          "undefined" != typeof window &&
          !!window?.chrome,
    x = Number.isInteger(t.canvasMaxAreaInBytes) ? t.canvasMaxAreaInBytes : -1,
    C = "boolean" == typeof t.disableFontFace ? t.disableFontFace : Et,
    E = !0 === t.fontExtraProperties,
    S = !0 === t.enableXfa,
    T = t.ownerDocument || globalThis.document,
    M = !0 === t.disableRange,
    k = !0 === t.disableStream,
    P = !0 === t.disableAutoFetch,
    R = !0 === t.pdfBug,
    I = t.CanvasFactory || wn,
    D = t.FilterFactory || xn,
    L = !0 === t.enableHWA,
    F = h ? h.length : (t.length ?? NaN),
    N = "boolean" == typeof t.useSystemFonts ? t.useSystemFonts : !Et && !C,
    O =
      "boolean" == typeof t.useWorkerFetch
        ? t.useWorkerFetch
        : f === Vi &&
          b === Yi &&
          p &&
          m &&
          ui(p, document.baseURI) &&
          ui(m, document.baseURI);
  (t.canvasFactory &&
    gi("`canvasFactory`-instance option, please use `CanvasFactory` instead."),
    t.filterFactory &&
      gi(
        "`filterFactory`-instance option, please use `FilterFactory` instead.",
      ));
  we(d);
  const B = {
    canvasFactory: new I({ ownerDocument: T, enableHWA: L }),
    filterFactory: new D({ docId: i, ownerDocument: T }),
    cMapReaderFactory: O ? null : new f({ baseUrl: p, isCompressed: g }),
    standardFontDataFactory: O ? null : new b({ baseUrl: m }),
  };
  if (!c) {
    const t = { verbosity: d, port: Ts.workerPort };
    ((c = t.port ? In.fromPort(t) : new In(t)), (e._worker = c));
  }
  const H = {
      docId: i,
      apiVersion: "4.8.69",
      data: n,
      password: o,
      disableAutoFetch: P,
      rangeChunkSize: l,
      length: F,
      docBaseUrl: u,
      enableXfa: S,
      evaluatorOptions: {
        maxImageSize: A,
        disableFontFace: C,
        ignoreErrors: v,
        isEvalSupported: y,
        isOffscreenCanvasSupported: w,
        isChrome: _,
        canvasMaxAreaInBytes: x,
        fontExtraProperties: E,
        useSystemFonts: N,
        cMapUrl: O ? p : null,
        standardFontDataUrl: O ? m : null,
      },
    },
    U = {
      disableFontFace: C,
      fontExtraProperties: E,
      ownerDocument: T,
      pdfBug: R,
      styleElement: null,
      loadingParams: { disableAutoFetch: P, enableXfa: S },
    };
  return (
    c.promise
      .then(function () {
        if (e.destroyed) throw new Error("Loading aborted");
        if (c.destroyed) throw new Error("Worker was destroyed");
        const t = c.messageHandler.sendWithPromise(
          "GetDocRequest",
          H,
          n ? [n.buffer] : null,
        );
        let o;
        if (h) o = new Gs(h, { disableRange: M, disableStream: k });
        else if (!n) {
          if (!s) throw new Error("getDocument - no `url` parameter provided.");
          let t;
          if (Et) {
            t =
              "undefined" != typeof fetch &&
              "undefined" != typeof Response &&
              "body" in Response.prototype &&
              ui(s)
                ? tn
                : cn;
          } else t = ui(s) ? tn : an;
          o = new t({
            url: s,
            length: F,
            httpHeaders: a,
            withCredentials: r,
            rangeChunkSize: l,
            disableRange: M,
            disableStream: k,
          });
        }
        return t.then((t) => {
          if (e.destroyed) throw new Error("Loading aborted");
          if (c.destroyed) throw new Error("Worker was destroyed");
          const s = new zs(i, t, c.port),
            n = new Dn(s, e, o, U, B);
          ((e._transport = n), s.send("Ready", null));
        });
      })
      .catch(e._capability.reject),
    e
  );
}
function Sn(t) {
  return (
    "object" == typeof t &&
    Number.isInteger(t?.num) &&
    t.num >= 0 &&
    Number.isInteger(t?.gen) &&
    t.gen >= 0
  );
}
class Tn {
  static #Li = 0;
  constructor() {
    ((this._capability = Promise.withResolvers()),
      (this._transport = null),
      (this._worker = null),
      (this.docId = "d" + Tn.#Li++),
      (this.destroyed = !1),
      (this.onPassword = null),
      (this.onProgress = null));
  }
  get promise() {
    return this._capability.promise;
  }
  async destroy() {
    this.destroyed = !0;
    try {
      (this._worker?.port && (this._worker._pendingDestroy = !0),
        await this._transport?.destroy());
    } catch (t) {
      throw (this._worker?.port && delete this._worker._pendingDestroy, t);
    }
    ((this._transport = null),
      this._worker && (this._worker.destroy(), (this._worker = null)));
  }
}
class Mn {
  constructor(t, e, i = !1, s = null) {
    ((this.length = t),
      (this.initialData = e),
      (this.progressiveDone = i),
      (this.contentDispositionFilename = s),
      (this._rangeListeners = []),
      (this._progressListeners = []),
      (this._progressiveReadListeners = []),
      (this._progressiveDoneListeners = []),
      (this._readyCapability = Promise.withResolvers()));
  }
  addRangeListener(t) {
    this._rangeListeners.push(t);
  }
  addProgressListener(t) {
    this._progressListeners.push(t);
  }
  addProgressiveReadListener(t) {
    this._progressiveReadListeners.push(t);
  }
  addProgressiveDoneListener(t) {
    this._progressiveDoneListeners.push(t);
  }
  onDataRange(t, e) {
    for (const i of this._rangeListeners) i(t, e);
  }
  onDataProgress(t, e) {
    this._readyCapability.promise.then(() => {
      for (const i of this._progressListeners) i(t, e);
    });
  }
  onDataProgressiveRead(t) {
    this._readyCapability.promise.then(() => {
      for (const e of this._progressiveReadListeners) e(t);
    });
  }
  onDataProgressiveDone() {
    this._readyCapability.promise.then(() => {
      for (const t of this._progressiveDoneListeners) t();
    });
  }
  transportReady() {
    this._readyCapability.resolve();
  }
  requestDataRange(t, e) {
    Ee("Abstract method PDFDataRangeTransport.requestDataRange");
  }
  abort() {}
}
class kn {
  constructor(t, e) {
    ((this._pdfInfo = t), (this._transport = e));
  }
  get annotationStorage() {
    return this._transport.annotationStorage;
  }
  get canvasFactory() {
    return this._transport.canvasFactory;
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get numPages() {
    return this._pdfInfo.numPages;
  }
  get fingerprints() {
    return this._pdfInfo.fingerprints;
  }
  get isPureXfa() {
    return Me(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  get allXfaHtml() {
    return this._transport._htmlForXfa;
  }
  getPage(t) {
    return this._transport.getPage(t);
  }
  getPageIndex(t) {
    return this._transport.getPageIndex(t);
  }
  getDestinations() {
    return this._transport.getDestinations();
  }
  getDestination(t) {
    return this._transport.getDestination(t);
  }
  getPageLabels() {
    return this._transport.getPageLabels();
  }
  getPageLayout() {
    return this._transport.getPageLayout();
  }
  getPageMode() {
    return this._transport.getPageMode();
  }
  getViewerPreferences() {
    return this._transport.getViewerPreferences();
  }
  getOpenAction() {
    return this._transport.getOpenAction();
  }
  getAttachments() {
    return this._transport.getAttachments();
  }
  getJSActions() {
    return this._transport.getDocJSActions();
  }
  getOutline() {
    return this._transport.getOutline();
  }
  getOptionalContentConfig({ intent: t = "display" } = {}) {
    const { renderingIntent: e } = this._transport.getRenderingIntent(t);
    return this._transport.getOptionalContentConfig(e);
  }
  getPermissions() {
    return this._transport.getPermissions();
  }
  getMetadata() {
    return this._transport.getMetadata();
  }
  getMarkInfo() {
    return this._transport.getMarkInfo();
  }
  getData() {
    return this._transport.getData();
  }
  saveDocument() {
    return this._transport.saveDocument();
  }
  getDownloadInfo() {
    return this._transport.downloadInfoCapability.promise;
  }
  cleanup(t = !1) {
    return this._transport.startCleanup(t || this.isPureXfa);
  }
  destroy() {
    return this.loadingTask.destroy();
  }
  cachedPageNumber(t) {
    return this._transport.cachedPageNumber(t);
  }
  get loadingParams() {
    return this._transport.loadingParams;
  }
  get loadingTask() {
    return this._transport.loadingTask;
  }
  getFieldObjects() {
    return this._transport.getFieldObjects();
  }
  hasJSActions() {
    return this._transport.hasJSActions();
  }
  getCalculationOrderIds() {
    return this._transport.getCalculationOrderIds();
  }
}
class Pn {
  #Yi = null;
  #Xi = !1;
  constructor(t, e, i, s = !1) {
    ((this._pageIndex = t),
      (this._pageInfo = e),
      (this._transport = i),
      (this._stats = s ? new di() : null),
      (this._pdfBug = s),
      (this.commonObjs = i.commonObjs),
      (this.objs = new Fn()),
      (this._maybeCleanupAfterRender = !1),
      (this._intentStates = new Map()),
      (this.destroyed = !1));
  }
  get pageNumber() {
    return this._pageIndex + 1;
  }
  get rotate() {
    return this._pageInfo.rotate;
  }
  get ref() {
    return this._pageInfo.ref;
  }
  get userUnit() {
    return this._pageInfo.userUnit;
  }
  get view() {
    return this._pageInfo.view;
  }
  getViewport({
    scale: t,
    rotation: e = this.rotate,
    offsetX: i = 0,
    offsetY: s = 0,
    dontFlip: n = !1,
  } = {}) {
    return new ai({
      viewBox: this.view,
      scale: t,
      rotation: e,
      offsetX: i,
      offsetY: s,
      dontFlip: n,
    });
  }
  getAnnotations({ intent: t = "display" } = {}) {
    const { renderingIntent: e } = this._transport.getRenderingIntent(t);
    return this._transport.getAnnotations(this._pageIndex, e);
  }
  getJSActions() {
    return this._transport.getPageJSActions(this._pageIndex);
  }
  get filterFactory() {
    return this._transport.filterFactory;
  }
  get isPureXfa() {
    return Me(this, "isPureXfa", !!this._transport._htmlForXfa);
  }
  async getXfa() {
    return this._transport._htmlForXfa?.children[this._pageIndex] || null;
  }
  render({
    canvasContext: t,
    viewport: e,
    intent: i = "display",
    annotationMode: s = Ot.ENABLE,
    transform: n = null,
    background: a = null,
    optionalContentConfigPromise: r = null,
    annotationCanvasMap: o = null,
    pageColors: h = null,
    printAnnotationStorage: l = null,
    isEditing: c = !1,
  }) {
    this._stats?.time("Overall");
    const d = this._transport.getRenderingIntent(i, s, l, c),
      { renderingIntent: u, cacheKey: p } = d;
    ((this.#Xi = !1),
      this.#Ki(),
      (r ||= this._transport.getOptionalContentConfig(u)));
    let g = this._intentStates.get(p);
    (g || ((g = Object.create(null)), this._intentStates.set(p, g)),
      g.streamReaderCancelTimeout &&
        (clearTimeout(g.streamReaderCancelTimeout),
        (g.streamReaderCancelTimeout = null)));
    const f = !!(u & Rt);
    g.displayReadyCapability ||
      ((g.displayReadyCapability = Promise.withResolvers()),
      (g.operatorList = {
        fnArray: [],
        argsArray: [],
        lastChunk: !1,
        separateAnnots: null,
      }),
      this._stats?.time("Page Request"),
      this._pumpOperatorList(d));
    const m = (t) => {
        (g.renderTasks.delete(b),
          (this._maybeCleanupAfterRender || f) && (this.#Xi = !0),
          this.#Qi(!f),
          t
            ? (b.capability.reject(t),
              this._abortOperatorList({
                intentState: g,
                reason: t instanceof Error ? t : new Error(t),
              }))
            : b.capability.resolve(),
          this._stats &&
            (this._stats.timeEnd("Rendering"),
            this._stats.timeEnd("Overall"),
            globalThis.Stats?.enabled &&
              globalThis.Stats.add(this.pageNumber, this._stats)));
      },
      b = new On({
        callback: m,
        params: { canvasContext: t, viewport: e, transform: n, background: a },
        objs: this.objs,
        commonObjs: this.commonObjs,
        annotationCanvasMap: o,
        operatorList: g.operatorList,
        pageIndex: this._pageIndex,
        canvasFactory: this._transport.canvasFactory,
        filterFactory: this._transport.filterFactory,
        useRequestAnimationFrame: !f,
        pdfBug: this._pdfBug,
        pageColors: h,
      });
    (g.renderTasks ||= new Set()).add(b);
    const v = b.task;
    return (
      Promise.all([g.displayReadyCapability.promise, r])
        .then(([t, e]) => {
          if (this.destroyed) m();
          else {
            if ((this._stats?.time("Rendering"), !(e.renderingIntent & u)))
              throw new Error(
                "Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.",
              );
            (b.initializeGraphics({
              transparency: t,
              optionalContentConfig: e,
            }),
              b.operatorListChanged());
          }
        })
        .catch(m),
      v
    );
  }
  getOperatorList({
    intent: t = "display",
    annotationMode: e = Ot.ENABLE,
    printAnnotationStorage: i = null,
    isEditing: s = !1,
  } = {}) {
    const n = this._transport.getRenderingIntent(t, e, i, s, !0);
    let a,
      r = this._intentStates.get(n.cacheKey);
    return (
      r || ((r = Object.create(null)), this._intentStates.set(n.cacheKey, r)),
      r.opListReadCapability ||
        ((a = Object.create(null)),
        (a.operatorListChanged = function () {
          r.operatorList.lastChunk &&
            (r.opListReadCapability.resolve(r.operatorList),
            r.renderTasks.delete(a));
        }),
        (r.opListReadCapability = Promise.withResolvers()),
        (r.renderTasks ||= new Set()).add(a),
        (r.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: !1,
          separateAnnots: null,
        }),
        this._stats?.time("Page Request"),
        this._pumpOperatorList(n)),
      r.opListReadCapability.promise
    );
  }
  streamTextContent({
    includeMarkedContent: t = !1,
    disableNormalization: e = !1,
  } = {}) {
    return this._transport.messageHandler.sendWithStream(
      "GetTextContent",
      {
        pageIndex: this._pageIndex,
        includeMarkedContent: !0 === t,
        disableNormalization: !0 === e,
      },
      { highWaterMark: 100, size: (t) => t.items.length },
    );
  }
  getTextContent(t = {}) {
    if (this._transport._htmlForXfa)
      return this.getXfa().then((t) => An.textContent(t));
    const e = this.streamTextContent(t);
    return new Promise(function (t, i) {
      const s = e.getReader(),
        n = { items: [], styles: Object.create(null), lang: null };
      !(function e() {
        s.read().then(function ({ value: i, done: s }) {
          s
            ? t(n)
            : ((n.lang ??= i.lang),
              Object.assign(n.styles, i.styles),
              n.items.push(...i.items),
              e());
        }, i);
      })();
    });
  }
  getStructTree() {
    return this._transport.getStructTree(this._pageIndex);
  }
  _destroy() {
    this.destroyed = !0;
    const t = [];
    for (const e of this._intentStates.values())
      if (
        (this._abortOperatorList({
          intentState: e,
          reason: new Error("Page was destroyed."),
          force: !0,
        }),
        !e.opListReadCapability)
      )
        for (const i of e.renderTasks) (t.push(i.completed), i.cancel());
    return (this.objs.clear(), (this.#Xi = !1), this.#Ki(), Promise.all(t));
  }
  cleanup(t = !1) {
    this.#Xi = !0;
    const e = this.#Qi(!1);
    return (t && e && (this._stats &&= new di()), e);
  }
  #Qi(t = !1) {
    if ((this.#Ki(), !this.#Xi || this.destroyed)) return !1;
    if (t)
      return (
        (this.#Yi = setTimeout(() => {
          ((this.#Yi = null), this.#Qi(!1));
        }, 5e3)),
        !1
      );
    for (const {
      renderTasks: t,
      operatorList: e,
    } of this._intentStates.values())
      if (t.size > 0 || !e.lastChunk) return !1;
    return (this._intentStates.clear(), this.objs.clear(), (this.#Xi = !1), !0);
  }
  #Ki() {
    this.#Yi && (clearTimeout(this.#Yi), (this.#Yi = null));
  }
  _startRenderPage(t, e) {
    const i = this._intentStates.get(e);
    i &&
      (this._stats?.timeEnd("Page Request"),
      i.displayReadyCapability?.resolve(t));
  }
  _renderPageChunk(t, e) {
    for (let i = 0, s = t.length; i < s; i++)
      (e.operatorList.fnArray.push(t.fnArray[i]),
        e.operatorList.argsArray.push(t.argsArray[i]));
    ((e.operatorList.lastChunk = t.lastChunk),
      (e.operatorList.separateAnnots = t.separateAnnots));
    for (const t of e.renderTasks) t.operatorListChanged();
    t.lastChunk && this.#Qi(!0);
  }
  _pumpOperatorList({
    renderingIntent: t,
    cacheKey: e,
    annotationStorageSerializable: i,
    modifiedIds: s,
  }) {
    const { map: n, transfer: a } = i,
      r = this._transport.messageHandler
        .sendWithStream(
          "GetOperatorList",
          {
            pageIndex: this._pageIndex,
            intent: t,
            cacheKey: e,
            annotationStorage: n,
            modifiedIds: s,
          },
          a,
        )
        .getReader(),
      o = this._intentStates.get(e);
    o.streamReader = r;
    const h = () => {
      r.read().then(
        ({ value: t, done: e }) => {
          e
            ? (o.streamReader = null)
            : this._transport.destroyed || (this._renderPageChunk(t, o), h());
        },
        (t) => {
          if (((o.streamReader = null), !this._transport.destroyed)) {
            if (o.operatorList) {
              o.operatorList.lastChunk = !0;
              for (const t of o.renderTasks) t.operatorListChanged();
              this.#Qi(!0);
            }
            if (o.displayReadyCapability) o.displayReadyCapability.reject(t);
            else {
              if (!o.opListReadCapability) throw t;
              o.opListReadCapability.reject(t);
            }
          }
        },
      );
    };
    h();
  }
  _abortOperatorList({ intentState: t, reason: e, force: i = !1 }) {
    if (t.streamReader) {
      if (
        (t.streamReaderCancelTimeout &&
          (clearTimeout(t.streamReaderCancelTimeout),
          (t.streamReaderCancelTimeout = null)),
        !i)
      ) {
        if (t.renderTasks.size > 0) return;
        if (e instanceof ri) {
          let i = 100;
          return (
            e.extraDelay > 0 && e.extraDelay < 1e3 && (i += e.extraDelay),
            void (t.streamReaderCancelTimeout = setTimeout(() => {
              ((t.streamReaderCancelTimeout = null),
                this._abortOperatorList({
                  intentState: t,
                  reason: e,
                  force: !0,
                }));
            }, i))
          );
        }
      }
      if (
        (t.streamReader.cancel(new Ne(e.message)).catch(() => {}),
        (t.streamReader = null),
        !this._transport.destroyed)
      ) {
        for (const [e, i] of this._intentStates)
          if (i === t) {
            this._intentStates.delete(e);
            break;
          }
        this.cleanup();
      }
    }
  }
  get stats() {
    return this._stats;
  }
}
class Rn {
  #Ji = new Map();
  #Zi = Promise.resolve();
  postMessage(t, e) {
    const i = { data: structuredClone(t, e ? { transfer: e } : null) };
    this.#Zi.then(() => {
      for (const [t] of this.#Ji) t.call(this, i);
    });
  }
  addEventListener(t, e, i = null) {
    let s = null;
    if (i?.signal instanceof AbortSignal) {
      const { signal: n } = i;
      if (n.aborted)
        return void Ce("LoopbackPort - cannot use an `aborted` signal.");
      const a = () => this.removeEventListener(t, e);
      ((s = () => n.removeEventListener("abort", a)),
        n.addEventListener("abort", a));
    }
    this.#Ji.set(e, s);
  }
  removeEventListener(t, e) {
    const i = this.#Ji.get(e);
    (i?.(), this.#Ji.delete(e));
  }
  terminate() {
    for (const [, t] of this.#Ji) t?.();
    this.#Ji.clear();
  }
}
class In {
  static #ts = 0;
  static #es = !1;
  static #is;
  static {
    (Et && ((this.#es = !0), (Ts.workerSrc ||= "./pdf.worker.mjs")),
      (this._isSameOrigin = (t, e) => {
        let i;
        try {
          if (((i = new URL(t)), !i.origin || "null" === i.origin)) return !1;
        } catch {
          return !1;
        }
        const s = new URL(e, i);
        return i.origin === s.origin;
      }),
      (this._createCDNWrapper = (t) => {
        const e = `await import("${t}");`;
        return URL.createObjectURL(new Blob([e], { type: "text/javascript" }));
      }));
  }
  constructor({ name: t = null, port: e = null, verbosity: i = _e() } = {}) {
    if (
      ((this.name = t),
      (this.destroyed = !1),
      (this.verbosity = i),
      (this._readyCapability = Promise.withResolvers()),
      (this._port = null),
      (this._webWorker = null),
      (this._messageHandler = null),
      e)
    ) {
      if (In.#is?.has(e))
        throw new Error("Cannot use more than one PDFWorker per port.");
      return (
        (In.#is ||= new WeakMap()).set(e, this),
        void this._initializeFromPort(e)
      );
    }
    this._initialize();
  }
  get promise() {
    return Et
      ? Promise.all([Qi.promise, this._readyCapability.promise])
      : this._readyCapability.promise;
  }
  #ss() {
    (this._readyCapability.resolve(),
      this._messageHandler.send("configure", { verbosity: this.verbosity }));
  }
  get port() {
    return this._port;
  }
  get messageHandler() {
    return this._messageHandler;
  }
  _initializeFromPort(t) {
    ((this._port = t),
      (this._messageHandler = new zs("main", "worker", t)),
      this._messageHandler.on("ready", function () {}),
      this.#ss());
  }
  _initialize() {
    if (In.#es || In.#ns) return void this._setupFakeWorker();
    let { workerSrc: t } = In;
    try {
      In._isSameOrigin(window.location.href, t) ||
        (t = In._createCDNWrapper(new URL(t, window.location).href));
      const e = new Worker(t, { type: "module" }),
        i = new zs("main", "worker", e),
        s = () => {
          (n.abort(),
            i.destroy(),
            e.terminate(),
            this.destroyed
              ? this._readyCapability.reject(new Error("Worker was destroyed"))
              : this._setupFakeWorker());
        },
        n = new AbortController();
      (e.addEventListener(
        "error",
        () => {
          this._webWorker || s();
        },
        { signal: n.signal },
      ),
        i.on("test", (t) => {
          (n.abort(),
            !this.destroyed && t
              ? ((this._messageHandler = i),
                (this._port = e),
                (this._webWorker = e),
                this.#ss())
              : s());
        }),
        i.on("ready", (t) => {
          if ((n.abort(), this.destroyed)) s();
          else
            try {
              a();
            } catch {
              this._setupFakeWorker();
            }
        }));
      const a = () => {
        const t = new Uint8Array();
        i.send("test", t, [t.buffer]);
      };
      return void a();
    } catch {
      xe("The worker has been disabled.");
    }
    this._setupFakeWorker();
  }
  _setupFakeWorker() {
    (In.#es || (Ce("Setting up fake worker."), (In.#es = !0)),
      In._setupFakeWorkerGlobal
        .then((t) => {
          if (this.destroyed)
            return void this._readyCapability.reject(
              new Error("Worker was destroyed"),
            );
          const e = new Rn();
          this._port = e;
          const i = "fake" + In.#ts++,
            s = new zs(i + "_worker", i, e);
          (t.setup(s, e),
            (this._messageHandler = new zs(i, i + "_worker", e)),
            this.#ss());
        })
        .catch((t) => {
          this._readyCapability.reject(
            new Error(`Setting up fake worker failed: "${t.message}".`),
          );
        }));
  }
  destroy() {
    ((this.destroyed = !0),
      this._webWorker &&
        (this._webWorker.terminate(), (this._webWorker = null)),
      In.#is?.delete(this._port),
      (this._port = null),
      this._messageHandler &&
        (this._messageHandler.destroy(), (this._messageHandler = null)));
  }
  static fromPort(t) {
    if (!t?.port)
      throw new Error("PDFWorker.fromPort - invalid method signature.");
    const e = this.#is?.get(t.port);
    if (e) {
      if (e._pendingDestroy)
        throw new Error(
          "PDFWorker.fromPort - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.",
        );
      return e;
    }
    return new In(t);
  }
  static get workerSrc() {
    if (Ts.workerSrc) return Ts.workerSrc;
    throw new Error('No "GlobalWorkerOptions.workerSrc" specified.');
  }
  static get #ns() {
    try {
      return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
    } catch {
      return null;
    }
  }
  static get _setupFakeWorkerGlobal() {
    return Me(
      this,
      "_setupFakeWorkerGlobal",
      (async () => {
        if (this.#ns) return this.#ns;
        return (await import(this.workerSrc)).WorkerMessageHandler;
      })(),
    );
  }
}
class Dn {
  #as = new Map();
  #rs = new Map();
  #os = new Map();
  #hs = new Map();
  #ls = null;
  constructor(t, e, i, s, n) {
    ((this.messageHandler = t),
      (this.loadingTask = e),
      (this.commonObjs = new Fn()),
      (this.fontLoader = new Ui({
        ownerDocument: s.ownerDocument,
        styleElement: s.styleElement,
      })),
      (this.loadingParams = s.loadingParams),
      (this._params = s),
      (this.canvasFactory = n.canvasFactory),
      (this.filterFactory = n.filterFactory),
      (this.cMapReaderFactory = n.cMapReaderFactory),
      (this.standardFontDataFactory = n.standardFontDataFactory),
      (this.destroyed = !1),
      (this.destroyCapability = null),
      (this._networkStream = i),
      (this._fullReader = null),
      (this._lastProgress = null),
      (this.downloadInfoCapability = Promise.withResolvers()),
      this.setupMessageHandler());
  }
  #cs(t, e = null) {
    const i = this.#as.get(t);
    if (i) return i;
    const s = this.messageHandler.sendWithPromise(t, e);
    return (this.#as.set(t, s), s);
  }
  get annotationStorage() {
    return Me(this, "annotationStorage", new zi());
  }
  getRenderingIntent(t, e = Ot.ENABLE, i = null, s = !1, n = !1) {
    let a = Pt,
      r = Bi;
    switch (t) {
      case "any":
        a = kt;
        break;
      case "display":
        break;
      case "print":
        a = Rt;
        break;
      default:
        Ce(`getRenderingIntent - invalid intent: ${t}`);
    }
    const o = a & Rt && i instanceof Hi ? i : this.annotationStorage;
    switch (e) {
      case Ot.DISABLE:
        a += Lt;
        break;
      case Ot.ENABLE:
        break;
      case Ot.ENABLE_FORMS:
        a += It;
        break;
      case Ot.ENABLE_STORAGE:
        ((a += Dt), (r = o.serializable));
        break;
      default:
        Ce(`getRenderingIntent - invalid annotationMode: ${e}`);
    }
    (s && (a += Ft), n && (a += Nt));
    const { ids: h, hash: l } = o.modifiedIds;
    return {
      renderingIntent: a,
      cacheKey: [a, r.hash, l].join("_"),
      annotationStorageSerializable: r,
      modifiedIds: h,
    };
  }
  destroy() {
    if (this.destroyCapability) return this.destroyCapability.promise;
    ((this.destroyed = !0),
      (this.destroyCapability = Promise.withResolvers()),
      this.#ls?.reject(
        new Error("Worker was destroyed during onPassword callback"),
      ));
    const t = [];
    for (const e of this.#rs.values()) t.push(e._destroy());
    (this.#rs.clear(),
      this.#os.clear(),
      this.#hs.clear(),
      this.hasOwnProperty("annotationStorage") &&
        this.annotationStorage.resetModified());
    const e = this.messageHandler.sendWithPromise("Terminate", null);
    return (
      t.push(e),
      Promise.all(t).then(() => {
        (this.commonObjs.clear(),
          this.fontLoader.clear(),
          this.#as.clear(),
          this.filterFactory.destroy(),
          vn.cleanup(),
          this._networkStream?.cancelAllRequests(
            new Ne("Worker was terminated."),
          ),
          this.messageHandler &&
            (this.messageHandler.destroy(), (this.messageHandler = null)),
          this.destroyCapability.resolve());
      }, this.destroyCapability.reject),
      this.destroyCapability.promise
    );
  }
  setupMessageHandler() {
    const { messageHandler: t, loadingTask: e } = this;
    (t.on("GetReader", (t, e) => {
      (Se(
        this._networkStream,
        "GetReader - no `IPDFStream` instance available.",
      ),
        (this._fullReader = this._networkStream.getFullReader()),
        (this._fullReader.onProgress = (t) => {
          this._lastProgress = { loaded: t.loaded, total: t.total };
        }),
        (e.onPull = () => {
          this._fullReader
            .read()
            .then(function ({ value: t, done: i }) {
              i
                ? e.close()
                : (Se(
                    t instanceof ArrayBuffer,
                    "GetReader - expected an ArrayBuffer.",
                  ),
                  e.enqueue(new Uint8Array(t), 1, [t]));
            })
            .catch((t) => {
              e.error(t);
            });
        }),
        (e.onCancel = (t) => {
          (this._fullReader.cancel(t),
            e.ready.catch((t) => {
              if (!this.destroyed) throw t;
            }));
        }));
    }),
      t.on("ReaderHeadersReady", async (t) => {
        await this._fullReader.headersReady;
        const {
          isStreamingSupported: i,
          isRangeSupported: s,
          contentLength: n,
        } = this._fullReader;
        return (
          (i && s) ||
            (this._lastProgress && e.onProgress?.(this._lastProgress),
            (this._fullReader.onProgress = (t) => {
              e.onProgress?.({ loaded: t.loaded, total: t.total });
            })),
          { isStreamingSupported: i, isRangeSupported: s, contentLength: n }
        );
      }),
      t.on("GetRangeReader", (t, e) => {
        Se(
          this._networkStream,
          "GetRangeReader - no `IPDFStream` instance available.",
        );
        const i = this._networkStream.getRangeReader(t.begin, t.end);
        i
          ? ((e.onPull = () => {
              i.read()
                .then(function ({ value: t, done: i }) {
                  i
                    ? e.close()
                    : (Se(
                        t instanceof ArrayBuffer,
                        "GetRangeReader - expected an ArrayBuffer.",
                      ),
                      e.enqueue(new Uint8Array(t), 1, [t]));
                })
                .catch((t) => {
                  e.error(t);
                });
            }),
            (e.onCancel = (t) => {
              (i.cancel(t),
                e.ready.catch((t) => {
                  if (!this.destroyed) throw t;
                }));
            }))
          : e.close();
      }),
      t.on("GetDoc", ({ pdfInfo: t }) => {
        ((this._numPages = t.numPages),
          (this._htmlForXfa = t.htmlForXfa),
          delete t.htmlForXfa,
          e._capability.resolve(new kn(t, this)));
      }),
      t.on("DocException", function (t) {
        let i;
        switch (t.name) {
          case "PasswordException":
            i = new Pe(t.message, t.code);
            break;
          case "InvalidPDFException":
            i = new Ie(t.message);
            break;
          case "MissingPDFException":
            i = new De(t.message);
            break;
          case "UnexpectedResponseException":
            i = new Le(t.message, t.status);
            break;
          case "UnknownErrorException":
            i = new Re(t.message, t.details);
            break;
          default:
            Ee("DocException - expected a valid Error.");
        }
        e._capability.reject(i);
      }),
      t.on("PasswordRequest", (t) => {
        if (((this.#ls = Promise.withResolvers()), e.onPassword)) {
          const i = (t) => {
            t instanceof Error
              ? this.#ls.reject(t)
              : this.#ls.resolve({ password: t });
          };
          try {
            e.onPassword(i, t.code);
          } catch (t) {
            this.#ls.reject(t);
          }
        } else this.#ls.reject(new Pe(t.message, t.code));
        return this.#ls.promise;
      }),
      t.on("DataLoaded", (t) => {
        (e.onProgress?.({ loaded: t.length, total: t.length }),
          this.downloadInfoCapability.resolve(t));
      }),
      t.on("StartRenderPage", (t) => {
        if (this.destroyed) return;
        this.#rs.get(t.pageIndex)._startRenderPage(t.transparency, t.cacheKey);
      }),
      t.on("commonobj", ([e, i, s]) => {
        if (this.destroyed) return null;
        if (this.commonObjs.has(e)) return null;
        switch (i) {
          case "Font":
            const {
              disableFontFace: n,
              fontExtraProperties: a,
              pdfBug: r,
            } = this._params;
            if ("error" in s) {
              const t = s.error;
              (Ce(`Error during font loading: ${t}`),
                this.commonObjs.resolve(e, t));
              break;
            }
            const o =
                r && globalThis.FontInspector?.enabled
                  ? (t, e) => globalThis.FontInspector.fontAdded(t, e)
                  : null,
              h = new ji(s, { disableFontFace: n, inspectFont: o });
            this.fontLoader
              .bind(h)
              .catch(() => t.sendWithPromise("FontFallback", { id: e }))
              .finally(() => {
                (!a && h.data && (h.data = null),
                  this.commonObjs.resolve(e, h));
              });
            break;
          case "CopyLocalImage":
            const { imageRef: l } = s;
            Se(l, "The imageRef must be defined.");
            for (const t of this.#rs.values())
              for (const [, i] of t.objs)
                if (i?.ref === l)
                  return i.dataLen
                    ? (this.commonObjs.resolve(e, structuredClone(i)),
                      i.dataLen)
                    : null;
            break;
          case "FontPath":
          case "Image":
          case "Pattern":
            this.commonObjs.resolve(e, s);
            break;
          default:
            throw new Error(`Got unknown common object type ${i}`);
        }
        return null;
      }),
      t.on("obj", ([t, e, i, s]) => {
        if (this.destroyed) return;
        const n = this.#rs.get(e);
        if (!n.objs.has(t))
          if (0 !== n._intentStates.size)
            switch (i) {
              case "Image":
                (n.objs.resolve(t, s),
                  s?.dataLen > 1e7 && (n._maybeCleanupAfterRender = !0));
                break;
              case "Pattern":
                n.objs.resolve(t, s);
                break;
              default:
                throw new Error(`Got unknown object type ${i}`);
            }
          else s?.bitmap?.close();
      }),
      t.on("DocProgress", (t) => {
        this.destroyed || e.onProgress?.({ loaded: t.loaded, total: t.total });
      }),
      t.on("FetchBuiltInCMap", async (t) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.cMapReaderFactory)
          throw new Error(
            "CMapReaderFactory not initialized, see the `useWorkerFetch` parameter.",
          );
        return this.cMapReaderFactory.fetch(t);
      }),
      t.on("FetchStandardFontData", async (t) => {
        if (this.destroyed) throw new Error("Worker was destroyed.");
        if (!this.standardFontDataFactory)
          throw new Error(
            "StandardFontDataFactory not initialized, see the `useWorkerFetch` parameter.",
          );
        return this.standardFontDataFactory.fetch(t);
      }));
  }
  getData() {
    return this.messageHandler.sendWithPromise("GetData", null);
  }
  saveDocument() {
    this.annotationStorage.size <= 0 &&
      Ce(
        "saveDocument called while `annotationStorage` is empty, please use the getData-method instead.",
      );
    const { map: t, transfer: e } = this.annotationStorage.serializable;
    return this.messageHandler
      .sendWithPromise(
        "SaveDocument",
        {
          isPureXfa: !!this._htmlForXfa,
          numPages: this._numPages,
          annotationStorage: t,
          filename: this._fullReader?.filename ?? null,
        },
        e,
      )
      .finally(() => {
        this.annotationStorage.resetModified();
      });
  }
  getPage(t) {
    if (!Number.isInteger(t) || t <= 0 || t > this._numPages)
      return Promise.reject(new Error("Invalid page request."));
    const e = t - 1,
      i = this.#os.get(e);
    if (i) return i;
    const s = this.messageHandler
      .sendWithPromise("GetPage", { pageIndex: e })
      .then((i) => {
        if (this.destroyed) throw new Error("Transport destroyed");
        i.refStr && this.#hs.set(i.refStr, t);
        const s = new Pn(e, i, this, this._params.pdfBug);
        return (this.#rs.set(e, s), s);
      });
    return (this.#os.set(e, s), s);
  }
  getPageIndex(t) {
    return Sn(t)
      ? this.messageHandler.sendWithPromise("GetPageIndex", {
          num: t.num,
          gen: t.gen,
        })
      : Promise.reject(new Error("Invalid pageIndex request."));
  }
  getAnnotations(t, e) {
    return this.messageHandler.sendWithPromise("GetAnnotations", {
      pageIndex: t,
      intent: e,
    });
  }
  getFieldObjects() {
    return this.#cs("GetFieldObjects");
  }
  hasJSActions() {
    return this.#cs("HasJSActions");
  }
  getCalculationOrderIds() {
    return this.messageHandler.sendWithPromise("GetCalculationOrderIds", null);
  }
  getDestinations() {
    return this.messageHandler.sendWithPromise("GetDestinations", null);
  }
  getDestination(t) {
    return "string" != typeof t
      ? Promise.reject(new Error("Invalid destination request."))
      : this.messageHandler.sendWithPromise("GetDestination", { id: t });
  }
  getPageLabels() {
    return this.messageHandler.sendWithPromise("GetPageLabels", null);
  }
  getPageLayout() {
    return this.messageHandler.sendWithPromise("GetPageLayout", null);
  }
  getPageMode() {
    return this.messageHandler.sendWithPromise("GetPageMode", null);
  }
  getViewerPreferences() {
    return this.messageHandler.sendWithPromise("GetViewerPreferences", null);
  }
  getOpenAction() {
    return this.messageHandler.sendWithPromise("GetOpenAction", null);
  }
  getAttachments() {
    return this.messageHandler.sendWithPromise("GetAttachments", null);
  }
  getDocJSActions() {
    return this.#cs("GetDocJSActions");
  }
  getPageJSActions(t) {
    return this.messageHandler.sendWithPromise("GetPageJSActions", {
      pageIndex: t,
    });
  }
  getStructTree(t) {
    return this.messageHandler.sendWithPromise("GetStructTree", {
      pageIndex: t,
    });
  }
  getOutline() {
    return this.messageHandler.sendWithPromise("GetOutline", null);
  }
  getOptionalContentConfig(t) {
    return this.#cs("GetOptionalContentConfig").then((e) => new $s(e, t));
  }
  getPermissions() {
    return this.messageHandler.sendWithPromise("GetPermissions", null);
  }
  getMetadata() {
    const t = "GetMetadata",
      e = this.#as.get(t);
    if (e) return e;
    const i = this.messageHandler
      .sendWithPromise(t, null)
      .then((t) => ({
        info: t[0],
        metadata: t[1] ? new Hs(t[1]) : null,
        contentDispositionFilename: this._fullReader?.filename ?? null,
        contentLength: this._fullReader?.contentLength ?? null,
      }));
    return (this.#as.set(t, i), i);
  }
  getMarkInfo() {
    return this.messageHandler.sendWithPromise("GetMarkInfo", null);
  }
  async startCleanup(t = !1) {
    if (!this.destroyed) {
      await this.messageHandler.sendWithPromise("Cleanup", null);
      for (const t of this.#rs.values()) {
        if (!t.cleanup())
          throw new Error(
            `startCleanup: Page ${t.pageNumber} is currently rendering.`,
          );
      }
      (this.commonObjs.clear(),
        t || this.fontLoader.clear(),
        this.#as.clear(),
        this.filterFactory.destroy(!0),
        vn.cleanup());
    }
  }
  cachedPageNumber(t) {
    if (!Sn(t)) return null;
    const e = 0 === t.gen ? `${t.num}R` : `${t.num}R${t.gen}`;
    return this.#hs.get(e) ?? null;
  }
}
const Ln = Symbol("INITIAL_DATA");
class Fn {
  #ds = Object.create(null);
  #us(t) {
    return (this.#ds[t] ||= { ...Promise.withResolvers(), data: Ln });
  }
  get(t, e = null) {
    if (e) {
      const i = this.#us(t);
      return (i.promise.then(() => e(i.data)), null);
    }
    const i = this.#ds[t];
    if (!i || i.data === Ln)
      throw new Error(`Requesting object that isn't resolved yet ${t}.`);
    return i.data;
  }
  has(t) {
    const e = this.#ds[t];
    return !!e && e.data !== Ln;
  }
  resolve(t, e = null) {
    const i = this.#us(t);
    ((i.data = e), i.resolve());
  }
  clear() {
    for (const t in this.#ds) {
      const { data: e } = this.#ds[t];
      e?.bitmap?.close();
    }
    this.#ds = Object.create(null);
  }
  *[Symbol.iterator]() {
    for (const t in this.#ds) {
      const { data: e } = this.#ds[t];
      e !== Ln && (yield [t, e]);
    }
  }
}
class Nn {
  #ps = null;
  constructor(t) {
    ((this.#ps = t), (this.onContinue = null));
  }
  get promise() {
    return this.#ps.capability.promise;
  }
  cancel(t = 0) {
    this.#ps.cancel(null, t);
  }
  get separateAnnots() {
    const { separateAnnots: t } = this.#ps.operatorList;
    if (!t) return !1;
    const { annotationCanvasMap: e } = this.#ps;
    return t.form || (t.canvas && e?.size > 0);
  }
}
class On {
  #gs = null;
  static #fs = new WeakSet();
  constructor({
    callback: t,
    params: e,
    objs: i,
    commonObjs: s,
    annotationCanvasMap: n,
    operatorList: a,
    pageIndex: r,
    canvasFactory: o,
    filterFactory: h,
    useRequestAnimationFrame: l = !1,
    pdfBug: c = !1,
    pageColors: d = null,
  }) {
    ((this.callback = t),
      (this.params = e),
      (this.objs = i),
      (this.commonObjs = s),
      (this.annotationCanvasMap = n),
      (this.operatorListIdx = null),
      (this.operatorList = a),
      (this._pageIndex = r),
      (this.canvasFactory = o),
      (this.filterFactory = h),
      (this._pdfBug = c),
      (this.pageColors = d),
      (this.running = !1),
      (this.graphicsReadyCallback = null),
      (this.graphicsReady = !1),
      (this._useRequestAnimationFrame =
        !0 === l && "undefined" != typeof window),
      (this.cancelled = !1),
      (this.capability = Promise.withResolvers()),
      (this.task = new Nn(this)),
      (this._cancelBound = this.cancel.bind(this)),
      (this._continueBound = this._continue.bind(this)),
      (this._scheduleNextBound = this._scheduleNext.bind(this)),
      (this._nextBound = this._next.bind(this)),
      (this._canvas = e.canvasContext.canvas));
  }
  get completed() {
    return this.capability.promise.catch(function () {});
  }
  initializeGraphics({ transparency: t = !1, optionalContentConfig: e }) {
    if (this.cancelled) return;
    if (this._canvas) {
      if (On.#fs.has(this._canvas))
        throw new Error(
          "Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.",
        );
      On.#fs.add(this._canvas);
    }
    this._pdfBug &&
      globalThis.StepperManager?.enabled &&
      ((this.stepper = globalThis.StepperManager.create(this._pageIndex)),
      this.stepper.init(this.operatorList),
      (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
    const {
      canvasContext: i,
      viewport: s,
      transform: n,
      background: a,
    } = this.params;
    ((this.gfx = new Ss(
      i,
      this.commonObjs,
      this.objs,
      this.canvasFactory,
      this.filterFactory,
      { optionalContentConfig: e },
      this.annotationCanvasMap,
      this.pageColors,
    )),
      this.gfx.beginDrawing({
        transform: n,
        viewport: s,
        transparency: t,
        background: a,
      }),
      (this.operatorListIdx = 0),
      (this.graphicsReady = !0),
      this.graphicsReadyCallback?.());
  }
  cancel(t = null, e = 0) {
    ((this.running = !1),
      (this.cancelled = !0),
      this.gfx?.endDrawing(),
      this.#gs && (window.cancelAnimationFrame(this.#gs), (this.#gs = null)),
      On.#fs.delete(this._canvas),
      this.callback(
        t || new ri(`Rendering cancelled, page ${this._pageIndex + 1}`, e),
      ));
  }
  operatorListChanged() {
    this.graphicsReady
      ? (this.stepper?.updateOperatorList(this.operatorList),
        this.running || this._continue())
      : (this.graphicsReadyCallback ||= this._continueBound);
  }
  _continue() {
    ((this.running = !0),
      this.cancelled ||
        (this.task.onContinue
          ? this.task.onContinue(this._scheduleNextBound)
          : this._scheduleNext()));
  }
  _scheduleNext() {
    this._useRequestAnimationFrame
      ? (this.#gs = window.requestAnimationFrame(() => {
          ((this.#gs = null), this._nextBound().catch(this._cancelBound));
        }))
      : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
  }
  async _next() {
    this.cancelled ||
      ((this.operatorListIdx = this.gfx.executeOperatorList(
        this.operatorList,
        this.operatorListIdx,
        this._continueBound,
        this.stepper,
      )),
      this.operatorListIdx === this.operatorList.argsArray.length &&
        ((this.running = !1),
        this.operatorList.lastChunk &&
          (this.gfx.endDrawing(),
          On.#fs.delete(this._canvas),
          this.callback())));
  }
}
const Bn = "4.8.69",
  zn = "3634dab10";
function Hn(t) {
  return Math.floor(255 * Math.max(0, Math.min(1, t)))
    .toString(16)
    .padStart(2, "0");
}
function Un(t) {
  return Math.max(0, Math.min(255, 255 * t));
}
class jn {
  static CMYK_G([t, e, i, s]) {
    return ["G", 1 - Math.min(1, 0.3 * t + 0.59 * i + 0.11 * e + s)];
  }
  static G_CMYK([t]) {
    return ["CMYK", 0, 0, 0, 1 - t];
  }
  static G_RGB([t]) {
    return ["RGB", t, t, t];
  }
  static G_rgb([t]) {
    return [(t = Un(t)), t, t];
  }
  static G_HTML([t]) {
    const e = Hn(t);
    return `#${e}${e}${e}`;
  }
  static RGB_G([t, e, i]) {
    return ["G", 0.3 * t + 0.59 * e + 0.11 * i];
  }
  static RGB_rgb(t) {
    return t.map(Un);
  }
  static RGB_HTML(t) {
    return `#${t.map(Hn).join("")}`;
  }
  static T_HTML() {
    return "#00000000";
  }
  static T_rgb() {
    return [null];
  }
  static CMYK_RGB([t, e, i, s]) {
    return [
      "RGB",
      1 - Math.min(1, t + s),
      1 - Math.min(1, i + s),
      1 - Math.min(1, e + s),
    ];
  }
  static CMYK_rgb([t, e, i, s]) {
    return [
      Un(1 - Math.min(1, t + s)),
      Un(1 - Math.min(1, i + s)),
      Un(1 - Math.min(1, e + s)),
    ];
  }
  static CMYK_HTML(t) {
    const e = this.CMYK_RGB(t).slice(1);
    return this.RGB_HTML(e);
  }
  static RGB_CMYK([t, e, i]) {
    const s = 1 - t,
      n = 1 - e,
      a = 1 - i;
    return ["CMYK", s, n, a, Math.min(s, n, a)];
  }
}
class $n {
  create(t, e, i = !1) {
    if (t <= 0 || e <= 0) throw new Error("Invalid SVG dimensions");
    const s = this._createSVG("svg:svg");
    return (
      s.setAttribute("version", "1.1"),
      i ||
        (s.setAttribute("width", `${t}px`), s.setAttribute("height", `${e}px`)),
      s.setAttribute("preserveAspectRatio", "none"),
      s.setAttribute("viewBox", `0 0 ${t} ${e}`),
      s
    );
  }
  createElement(t) {
    if ("string" != typeof t) throw new Error("Invalid SVG element type");
    return this._createSVG(t);
  }
  _createSVG(t) {
    Ee("Abstract method `_createSVG` called.");
  }
}
class Gn extends $n {
  _createSVG(t) {
    return document.createElementNS(ii, t);
  }
}
class Vn {
  static setupStorage(t, e, i, s, n) {
    const a = s.getValue(e, { value: null });
    switch (i.name) {
      case "textarea":
        if ((null !== a.value && (t.textContent = a.value), "print" === n))
          break;
        t.addEventListener("input", (t) => {
          s.setValue(e, { value: t.target.value });
        });
        break;
      case "input":
        if ("radio" === i.attributes.type || "checkbox" === i.attributes.type) {
          if (
            (a.value === i.attributes.xfaOn
              ? t.setAttribute("checked", !0)
              : a.value === i.attributes.xfaOff && t.removeAttribute("checked"),
            "print" === n)
          )
            break;
          t.addEventListener("change", (t) => {
            s.setValue(e, {
              value: t.target.checked
                ? t.target.getAttribute("xfaOn")
                : t.target.getAttribute("xfaOff"),
            });
          });
        } else {
          if (
            (null !== a.value && t.setAttribute("value", a.value),
            "print" === n)
          )
            break;
          t.addEventListener("input", (t) => {
            s.setValue(e, { value: t.target.value });
          });
        }
        break;
      case "select":
        if (null !== a.value) {
          t.setAttribute("value", a.value);
          for (const t of i.children)
            t.attributes.value === a.value
              ? (t.attributes.selected = !0)
              : t.attributes.hasOwnProperty("selected") &&
                delete t.attributes.selected;
        }
        t.addEventListener("input", (t) => {
          const i = t.target.options,
            n = -1 === i.selectedIndex ? "" : i[i.selectedIndex].value;
          s.setValue(e, { value: n });
        });
    }
  }
  static setAttributes({
    html: t,
    element: e,
    storage: i = null,
    intent: s,
    linkService: n,
  }) {
    const { attributes: a } = e,
      r = t instanceof HTMLAnchorElement;
    "radio" === a.type && (a.name = `${a.name}-${s}`);
    for (const [e, i] of Object.entries(a))
      if (null != i)
        switch (e) {
          case "class":
            i.length && t.setAttribute(e, i.join(" "));
            break;
          case "dataId":
            break;
          case "id":
            t.setAttribute("data-element-id", i);
            break;
          case "style":
            Object.assign(t.style, i);
            break;
          case "textContent":
            t.textContent = i;
            break;
          default:
            (!r || ("href" !== e && "newWindow" !== e)) && t.setAttribute(e, i);
        }
    (r && n.addLinkAttributes(t, a.href, a.newWindow),
      i && a.dataId && this.setupStorage(t, a.dataId, e, i));
  }
  static render(t) {
    const e = t.annotationStorage,
      i = t.linkService,
      s = t.xfaHtml,
      n = t.intent || "display",
      a = document.createElement(s.name);
    s.attributes &&
      this.setAttributes({ html: a, element: s, intent: n, linkService: i });
    const r = "richText" !== n,
      o = t.div;
    if ((o.append(a), t.viewport)) {
      const e = `matrix(${t.viewport.transform.join(",")})`;
      o.style.transform = e;
    }
    r && o.setAttribute("class", "xfaLayer xfaFont");
    const h = [];
    if (0 === s.children.length) {
      if (s.value) {
        const t = document.createTextNode(s.value);
        (a.append(t), r && An.shouldBuildText(s.name) && h.push(t));
      }
      return { textDivs: h };
    }
    const l = [[s, -1, a]];
    for (; l.length > 0; ) {
      const [t, s, a] = l.at(-1);
      if (s + 1 === t.children.length) {
        l.pop();
        continue;
      }
      const o = t.children[++l.at(-1)[1]];
      if (null === o) continue;
      const { name: c } = o;
      if ("#text" === c) {
        const t = document.createTextNode(o.value);
        (h.push(t), a.append(t));
        continue;
      }
      const d = o?.attributes?.xmlns
        ? document.createElementNS(o.attributes.xmlns, c)
        : document.createElement(c);
      if (
        (a.append(d),
        o.attributes &&
          this.setAttributes({
            html: d,
            element: o,
            storage: e,
            intent: n,
            linkService: i,
          }),
        o.children?.length > 0)
      )
        l.push([o, -1, d]);
      else if (o.value) {
        const t = document.createTextNode(o.value);
        (r && An.shouldBuildText(c) && h.push(t), d.append(t));
      }
    }
    for (const t of o.querySelectorAll(
      ".xfaNonInteractive input, .xfaNonInteractive textarea",
    ))
      t.setAttribute("readOnly", !0);
    return { textDivs: h };
  }
  static update(t) {
    const e = `matrix(${t.viewport.transform.join(",")})`;
    ((t.div.style.transform = e), (t.div.hidden = !1));
  }
}
const Wn = 1e3,
  qn = new WeakSet();
function Yn(t) {
  return { width: t[2] - t[0], height: t[3] - t[1] };
}
class Xn {
  static create(t) {
    switch (t.data.annotationType) {
      case Xt:
        return new Qn(t);
      case Yt:
        return new Jn(t);
      case de:
        switch (t.data.fieldType) {
          case "Tx":
            return new ta(t);
          case "Btn":
            return t.data.radioButton
              ? new sa(t)
              : t.data.checkBox
                ? new ia(t)
                : new na(t);
          case "Ch":
            return new aa(t);
          case "Sig":
            return new ea(t);
        }
        return new Zn(t);
      case le:
        return new ra(t);
      case Kt:
        return new ha(t);
      case Qt:
        return new la(t);
      case Jt:
        return new ca(t);
      case Zt:
        return new da(t);
      case ee:
        return new ua(t);
      case oe:
        return new ga(t);
      case he:
        return new fa(t);
      case te:
        return new pa(t);
      case ie:
        return new ma(t);
      case se:
        return new ba(t);
      case ne:
        return new va(t);
      case ae:
        return new Aa(t);
      case re:
        return new ya(t);
      case ce:
        return new wa(t);
      default:
        return new Kn(t);
    }
  }
}
class Kn {
  #ms = null;
  #bs = !1;
  #vs = null;
  constructor(
    t,
    {
      isRenderable: e = !1,
      ignoreBorder: i = !1,
      createQuadrilaterals: s = !1,
    } = {},
  ) {
    ((this.isRenderable = e),
      (this.data = t.data),
      (this.layer = t.layer),
      (this.linkService = t.linkService),
      (this.downloadManager = t.downloadManager),
      (this.imageResourcesPath = t.imageResourcesPath),
      (this.renderForms = t.renderForms),
      (this.svgFactory = t.svgFactory),
      (this.annotationStorage = t.annotationStorage),
      (this.enableScripting = t.enableScripting),
      (this.hasJSActions = t.hasJSActions),
      (this._fieldObjects = t.fieldObjects),
      (this.parent = t.parent),
      e && (this.container = this._createContainer(i)),
      s && this._createQuadrilaterals());
  }
  static _hasPopupData({ titleObj: t, contentsObj: e, richText: i }) {
    return !!(t?.str || e?.str || i?.str);
  }
  get _isEditable() {
    return this.data.isEditable;
  }
  get hasPopupData() {
    return Kn._hasPopupData(this.data);
  }
  updateEdited(t) {
    if (!this.container) return;
    this.#ms ||= { rect: this.data.rect.slice(0) };
    const { rect: e } = t;
    (e && this.#As(e), this.#vs?.popup.updateEdited(t));
  }
  resetEdited() {
    this.#ms &&
      (this.#As(this.#ms.rect),
      this.#vs?.popup.resetEdited(),
      (this.#ms = null));
  }
  #As(t) {
    const {
      container: { style: e },
      data: { rect: i, rotation: s },
      parent: {
        viewport: {
          rawDims: { pageWidth: n, pageHeight: a, pageX: r, pageY: o },
        },
      },
    } = this;
    i?.splice(0, 4, ...t);
    const { width: h, height: l } = Yn(t);
    ((e.left = (100 * (t[0] - r)) / n + "%"),
      (e.top = (100 * (a - t[3] + o)) / a + "%"),
      0 === s
        ? ((e.width = (100 * h) / n + "%"), (e.height = (100 * l) / a + "%"))
        : this.setRotation(s));
  }
  _createContainer(t) {
    const {
        data: e,
        parent: { page: i, viewport: s },
      } = this,
      n = document.createElement("section");
    (n.setAttribute("data-annotation-id", e.id),
      this instanceof Zn || (n.tabIndex = Wn));
    const { style: a } = n;
    if (
      ((a.zIndex = this.parent.zIndex++),
      e.alternativeText && (n.title = e.alternativeText),
      e.noRotate && n.classList.add("norotate"),
      !e.rect || this instanceof ra)
    ) {
      const { rotation: t } = e;
      return (e.hasOwnCanvas || 0 === t || this.setRotation(t, n), n);
    }
    const { width: r, height: o } = Yn(e.rect);
    if (!t && e.borderStyle.width > 0) {
      a.borderWidth = `${e.borderStyle.width}px`;
      const t = e.borderStyle.horizontalCornerRadius,
        i = e.borderStyle.verticalCornerRadius;
      if (t > 0 || i > 0) {
        const e = `calc(${t}px * var(--scale-factor)) / calc(${i}px * var(--scale-factor))`;
        a.borderRadius = e;
      } else if (this instanceof sa) {
        const t = `calc(${r}px * var(--scale-factor)) / calc(${o}px * var(--scale-factor))`;
        a.borderRadius = t;
      }
      switch (e.borderStyle.style) {
        case ue:
          a.borderStyle = "solid";
          break;
        case pe:
          a.borderStyle = "dashed";
          break;
        case ge:
          Ce("Unimplemented border style: beveled");
          break;
        case fe:
          Ce("Unimplemented border style: inset");
          break;
        case me:
          a.borderBottomStyle = "solid";
      }
      const s = e.borderColor || null;
      s
        ? ((this.#bs = !0),
          (a.borderColor = je.makeHexColor(0 | s[0], 0 | s[1], 0 | s[2])))
        : (a.borderWidth = 0);
    }
    const h = je.normalizeRect([
        e.rect[0],
        i.view[3] - e.rect[1] + i.view[1],
        e.rect[2],
        i.view[3] - e.rect[3] + i.view[1],
      ]),
      { pageWidth: l, pageHeight: c, pageX: d, pageY: u } = s.rawDims;
    ((a.left = (100 * (h[0] - d)) / l + "%"),
      (a.top = (100 * (h[1] - u)) / c + "%"));
    const { rotation: p } = e;
    return (
      e.hasOwnCanvas || 0 === p
        ? ((a.width = (100 * r) / l + "%"), (a.height = (100 * o) / c + "%"))
        : this.setRotation(p, n),
      n
    );
  }
  setRotation(t, e = this.container) {
    if (!this.data.rect) return;
    const { pageWidth: i, pageHeight: s } = this.parent.viewport.rawDims,
      { width: n, height: a } = Yn(this.data.rect);
    let r, o;
    (t % 180 == 0
      ? ((r = (100 * n) / i), (o = (100 * a) / s))
      : ((r = (100 * a) / i), (o = (100 * n) / s)),
      (e.style.width = `${r}%`),
      (e.style.height = `${o}%`),
      e.setAttribute("data-main-rotation", (360 - t) % 360));
  }
  get _commonActions() {
    const t = (t, e, i) => {
      const s = i.detail[t],
        n = s[0],
        a = s.slice(1);
      ((i.target.style[e] = jn[`${n}_HTML`](a)),
        this.annotationStorage.setValue(this.data.id, {
          [e]: jn[`${n}_rgb`](a),
        }));
    };
    return Me(this, "_commonActions", {
      display: (t) => {
        const { display: e } = t.detail,
          i = e % 2 == 1;
        ((this.container.style.visibility = i ? "hidden" : "visible"),
          this.annotationStorage.setValue(this.data.id, {
            noView: i,
            noPrint: 1 === e || 2 === e,
          }));
      },
      print: (t) => {
        this.annotationStorage.setValue(this.data.id, {
          noPrint: !t.detail.print,
        });
      },
      hidden: (t) => {
        const { hidden: e } = t.detail;
        ((this.container.style.visibility = e ? "hidden" : "visible"),
          this.annotationStorage.setValue(this.data.id, {
            noPrint: e,
            noView: e,
          }));
      },
      focus: (t) => {
        setTimeout(() => t.target.focus({ preventScroll: !1 }), 0);
      },
      userName: (t) => {
        t.target.title = t.detail.userName;
      },
      readonly: (t) => {
        t.target.disabled = t.detail.readonly;
      },
      required: (t) => {
        this._setRequired(t.target, t.detail.required);
      },
      bgColor: (e) => {
        t("bgColor", "backgroundColor", e);
      },
      fillColor: (e) => {
        t("fillColor", "backgroundColor", e);
      },
      fgColor: (e) => {
        t("fgColor", "color", e);
      },
      textColor: (e) => {
        t("textColor", "color", e);
      },
      borderColor: (e) => {
        t("borderColor", "borderColor", e);
      },
      strokeColor: (e) => {
        t("strokeColor", "borderColor", e);
      },
      rotation: (t) => {
        const e = t.detail.rotation;
        (this.setRotation(e),
          this.annotationStorage.setValue(this.data.id, { rotation: e }));
      },
    });
  }
  _dispatchEventFromSandbox(t, e) {
    const i = this._commonActions;
    for (const s of Object.keys(e.detail)) {
      const n = t[s] || i[s];
      n?.(e);
    }
  }
  _setDefaultPropertiesFromJS(t) {
    if (!this.enableScripting) return;
    const e = this.annotationStorage.getRawValue(this.data.id);
    if (!e) return;
    const i = this._commonActions;
    for (const [s, n] of Object.entries(e)) {
      const a = i[s];
      if (a) {
        (a({ detail: { [s]: n }, target: t }), delete e[s]);
      }
    }
  }
  _createQuadrilaterals() {
    if (!this.container) return;
    const { quadPoints: t } = this.data;
    if (!t) return;
    const [e, i, s, n] = this.data.rect.map((t) => Math.fround(t));
    if (8 === t.length) {
      const [a, r, o, h] = t.subarray(2, 6);
      if (s === a && n === r && e === o && i === h) return;
    }
    const { style: a } = this.container;
    let r;
    if (this.#bs) {
      const { borderColor: t, borderWidth: e } = a;
      ((a.borderWidth = 0),
        (r = [
          "url('data:image/svg+xml;utf8,",
          '<svg xmlns="http://www.w3.org/2000/svg"',
          ' preserveAspectRatio="none" viewBox="0 0 1 1">',
          `<g fill="transparent" stroke="${t}" stroke-width="${e}">`,
        ]),
        this.container.classList.add("hasBorder"));
    }
    const o = s - e,
      h = n - i,
      { svgFactory: l } = this,
      c = l.createElement("svg");
    (c.classList.add("quadrilateralsContainer"),
      c.setAttribute("width", 0),
      c.setAttribute("height", 0));
    const d = l.createElement("defs");
    c.append(d);
    const u = l.createElement("clipPath"),
      p = `clippath_${this.data.id}`;
    (u.setAttribute("id", p),
      u.setAttribute("clipPathUnits", "objectBoundingBox"),
      d.append(u));
    for (let i = 2, s = t.length; i < s; i += 8) {
      const s = t[i],
        a = t[i + 1],
        c = t[i + 2],
        d = t[i + 3],
        p = l.createElement("rect"),
        g = (c - e) / o,
        f = (n - a) / h,
        m = (s - c) / o,
        b = (a - d) / h;
      (p.setAttribute("x", g),
        p.setAttribute("y", f),
        p.setAttribute("width", m),
        p.setAttribute("height", b),
        u.append(p),
        r?.push(
          `<rect vector-effect="non-scaling-stroke" x="${g}" y="${f}" width="${m}" height="${b}"/>`,
        ));
    }
    (this.#bs && (r.push("</g></svg>')"), (a.backgroundImage = r.join(""))),
      this.container.append(c),
      (this.container.style.clipPath = `url(#${p})`));
  }
  _createPopup() {
    const { data: t } = this,
      e = (this.#vs = new ra({
        data: {
          color: t.color,
          titleObj: t.titleObj,
          modificationDate: t.modificationDate,
          contentsObj: t.contentsObj,
          richText: t.richText,
          parentRect: t.rect,
          borderStyle: 0,
          id: `popup_${t.id}`,
          rotation: t.rotation,
        },
        parent: this.parent,
        elements: [this],
      }));
    this.parent.div.append(e.render());
  }
  render() {
    Ee("Abstract method `AnnotationElement.render` called");
  }
  _getElementsByName(t, e = null) {
    const i = [];
    if (this._fieldObjects) {
      const s = this._fieldObjects[t];
      if (s)
        for (const { page: t, id: n, exportValues: a } of s) {
          if (-1 === t) continue;
          if (n === e) continue;
          const s = "string" == typeof a ? a : null,
            r = document.querySelector(`[data-element-id="${n}"]`);
          !r || qn.has(r)
            ? i.push({ id: n, exportValue: s, domElement: r })
            : Ce(`_getElementsByName - element not allowed: ${n}`);
        }
      return i;
    }
    for (const s of document.getElementsByName(t)) {
      const { exportValue: t } = s,
        n = s.getAttribute("data-element-id");
      n !== e && qn.has(s) && i.push({ id: n, exportValue: t, domElement: s });
    }
    return i;
  }
  show() {
    (this.container && (this.container.hidden = !1), this.popup?.maybeShow());
  }
  hide() {
    (this.container && (this.container.hidden = !0), this.popup?.forceHide());
  }
  getElementsToTriggerPopup() {
    return this.container;
  }
  addHighlightArea() {
    const t = this.getElementsToTriggerPopup();
    if (Array.isArray(t)) for (const e of t) e.classList.add("highlightArea");
    else t.classList.add("highlightArea");
  }
  _editOnDoubleClick() {
    if (!this._isEditable) return;
    const {
      annotationEditorType: t,
      data: { id: e },
    } = this;
    this.container.addEventListener("dblclick", () => {
      this.linkService.eventBus?.dispatch("switchannotationeditormode", {
        source: this,
        mode: t,
        editId: e,
      });
    });
  }
}
class Qn extends Kn {
  constructor(t, e = null) {
    (super(t, {
      isRenderable: !0,
      ignoreBorder: !!e?.ignoreBorder,
      createQuadrilaterals: !0,
    }),
      (this.isTooltipOnly = t.data.isTooltipOnly));
  }
  render() {
    const { data: t, linkService: e } = this,
      i = document.createElement("a");
    i.setAttribute("data-element-id", t.id);
    let s = !1;
    return (
      t.url
        ? (e.addLinkAttributes(i, t.url, t.newWindow), (s = !0))
        : t.action
          ? (this._bindNamedAction(i, t.action), (s = !0))
          : t.attachment
            ? (this.#ys(i, t.attachment, t.attachmentDest), (s = !0))
            : t.setOCGState
              ? (this.#ws(i, t.setOCGState), (s = !0))
              : t.dest
                ? (this._bindLink(i, t.dest), (s = !0))
                : (t.actions &&
                    (t.actions.Action ||
                      t.actions["Mouse Up"] ||
                      t.actions["Mouse Down"]) &&
                    this.enableScripting &&
                    this.hasJSActions &&
                    (this._bindJSAction(i, t), (s = !0)),
                  t.resetForm
                    ? (this._bindResetFormAction(i, t.resetForm), (s = !0))
                    : this.isTooltipOnly &&
                      !s &&
                      (this._bindLink(i, ""), (s = !0))),
      this.container.classList.add("linkAnnotation"),
      s && this.container.append(i),
      this.container
    );
  }
  #_s() {
    this.container.setAttribute("data-internal-link", "");
  }
  _bindLink(t, e) {
    ((t.href = this.linkService.getDestinationHash(e)),
      (t.onclick = () => (e && this.linkService.goToDestination(e), !1)),
      (e || "" === e) && this.#_s());
  }
  _bindNamedAction(t, e) {
    ((t.href = this.linkService.getAnchorUrl("")),
      (t.onclick = () => (this.linkService.executeNamedAction(e), !1)),
      this.#_s());
  }
  #ys(t, e, i = null) {
    ((t.href = this.linkService.getAnchorUrl("")),
      e.description && (t.title = e.description),
      (t.onclick = () => (
        this.downloadManager?.openOrDownloadData(e.content, e.filename, i),
        !1
      )),
      this.#_s());
  }
  #ws(t, e) {
    ((t.href = this.linkService.getAnchorUrl("")),
      (t.onclick = () => (this.linkService.executeSetOCGState(e), !1)),
      this.#_s());
  }
  _bindJSAction(t, e) {
    t.href = this.linkService.getAnchorUrl("");
    const i = new Map([
      ["Action", "onclick"],
      ["Mouse Up", "onmouseup"],
      ["Mouse Down", "onmousedown"],
    ]);
    for (const s of Object.keys(e.actions)) {
      const n = i.get(s);
      n &&
        (t[n] = () => (
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: { id: e.id, name: s },
          }),
          !1
        ));
    }
    (t.onclick || (t.onclick = () => !1), this.#_s());
  }
  _bindResetFormAction(t, e) {
    const i = t.onclick;
    if (
      (i || (t.href = this.linkService.getAnchorUrl("")),
      this.#_s(),
      !this._fieldObjects)
    )
      return (
        Ce(
          '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.',
        ),
        void (i || (t.onclick = () => !1))
      );
    t.onclick = () => {
      i?.();
      const { fields: t, refs: s, include: n } = e,
        a = [];
      if (0 !== t.length || 0 !== s.length) {
        const e = new Set(s);
        for (const i of t) {
          const t = this._fieldObjects[i] || [];
          for (const { id: i } of t) e.add(i);
        }
        for (const t of Object.values(this._fieldObjects))
          for (const i of t) e.has(i.id) === n && a.push(i);
      } else for (const t of Object.values(this._fieldObjects)) a.push(...t);
      const r = this.annotationStorage,
        o = [];
      for (const t of a) {
        const { id: e } = t;
        switch ((o.push(e), t.type)) {
          case "text": {
            const i = t.defaultValue || "";
            r.setValue(e, { value: i });
            break;
          }
          case "checkbox":
          case "radiobutton": {
            const i = t.defaultValue === t.exportValues;
            r.setValue(e, { value: i });
            break;
          }
          case "combobox":
          case "listbox": {
            const i = t.defaultValue || "";
            r.setValue(e, { value: i });
            break;
          }
          default:
            continue;
        }
        const i = document.querySelector(`[data-element-id="${e}"]`);
        i &&
          (qn.has(i)
            ? i.dispatchEvent(new Event("resetform"))
            : Ce(`_bindResetFormAction - element not allowed: ${e}`));
      }
      return (
        this.enableScripting &&
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: { id: "app", ids: o, name: "ResetForm" },
          }),
        !1
      );
    };
  }
}
class Jn extends Kn {
  constructor(t) {
    super(t, { isRenderable: !0 });
  }
  render() {
    this.container.classList.add("textAnnotation");
    const t = document.createElement("img");
    return (
      (t.src =
        this.imageResourcesPath +
        "annotation-" +
        this.data.name.toLowerCase() +
        ".svg"),
      t.setAttribute("data-l10n-id", "pdfjs-text-annotation-type"),
      t.setAttribute(
        "data-l10n-args",
        JSON.stringify({ type: this.data.name }),
      ),
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this.container.append(t),
      this.container
    );
  }
}
class Zn extends Kn {
  render() {
    return this.container;
  }
  showElementAndHideCanvas(t) {
    this.data.hasOwnCanvas &&
      ("CANVAS" === t.previousSibling?.nodeName &&
        (t.previousSibling.hidden = !0),
      (t.hidden = !1));
  }
  _getKeyModifier(t) {
    return He.platform.isMac ? t.metaKey : t.ctrlKey;
  }
  _setEventListener(t, e, i, s, n) {
    i.includes("mouse")
      ? t.addEventListener(i, (t) => {
          this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
            source: this,
            detail: {
              id: this.data.id,
              name: s,
              value: n(t),
              shift: t.shiftKey,
              modifier: this._getKeyModifier(t),
            },
          });
        })
      : t.addEventListener(i, (t) => {
          if ("blur" === i) {
            if (!e.focused || !t.relatedTarget) return;
            e.focused = !1;
          } else if ("focus" === i) {
            if (e.focused) return;
            e.focused = !0;
          }
          n &&
            this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
              source: this,
              detail: { id: this.data.id, name: s, value: n(t) },
            });
        });
  }
  _setEventListeners(t, e, i, s) {
    for (const [n, a] of i)
      ("Action" === a || this.data.actions?.[a]) &&
        (("Focus" !== a && "Blur" !== a) || (e ||= { focused: !1 }),
        this._setEventListener(t, e, n, a, s),
        "Focus" !== a || this.data.actions?.Blur
          ? "Blur" !== a ||
            this.data.actions?.Focus ||
            this._setEventListener(t, e, "focus", "Focus", null)
          : this._setEventListener(t, e, "blur", "Blur", null));
  }
  _setBackgroundColor(t) {
    const e = this.data.backgroundColor || null;
    t.style.backgroundColor =
      null === e ? "transparent" : je.makeHexColor(e[0], e[1], e[2]);
  }
  _setTextStyle(t) {
    const e = ["left", "center", "right"],
      { fontColor: i } = this.data.defaultAppearanceData,
      s = this.data.defaultAppearanceData.fontSize || 9,
      n = t.style;
    let a;
    const r = (t) => Math.round(10 * t) / 10;
    if (this.data.multiLine) {
      const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2),
        e = t / (Math.round(t / (Mt * s)) || 1);
      a = Math.min(s, r(e / Mt));
    } else {
      const t = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
      a = Math.min(s, r(t / Mt));
    }
    ((n.fontSize = `calc(${a}px * var(--scale-factor))`),
      (n.color = je.makeHexColor(i[0], i[1], i[2])),
      null !== this.data.textAlignment &&
        (n.textAlign = e[this.data.textAlignment]));
  }
  _setRequired(t, e) {
    (e ? t.setAttribute("required", !0) : t.removeAttribute("required"),
      t.setAttribute("aria-required", e));
  }
}
class ta extends Zn {
  constructor(t) {
    super(t, {
      isRenderable:
        t.renderForms ||
        t.data.hasOwnCanvas ||
        (!t.data.hasAppearance && !!t.data.fieldValue),
    });
  }
  setPropertyOnSiblings(t, e, i, s) {
    const n = this.annotationStorage;
    for (const a of this._getElementsByName(t.name, t.id))
      (a.domElement && (a.domElement[e] = i), n.setValue(a.id, { [s]: i }));
  }
  render() {
    const t = this.annotationStorage,
      e = this.data.id;
    this.container.classList.add("textWidgetAnnotation");
    let i = null;
    if (this.renderForms) {
      const s = t.getValue(e, { value: this.data.fieldValue });
      let n = s.value || "";
      const a = t.getValue(e, { charLimit: this.data.maxLen }).charLimit;
      a && n.length > a && (n = n.slice(0, a));
      let r = s.formattedValue || this.data.textContent?.join("\n") || null;
      r && this.data.comb && (r = r.replaceAll(/\s+/g, ""));
      const o = {
        userValue: n,
        formattedValue: r,
        lastCommittedValue: null,
        commitKey: 1,
        focused: !1,
      };
      (this.data.multiLine
        ? ((i = document.createElement("textarea")),
          (i.textContent = r ?? n),
          this.data.doNotScroll && (i.style.overflowY = "hidden"))
        : ((i = document.createElement("input")),
          (i.type = "text"),
          i.setAttribute("value", r ?? n),
          this.data.doNotScroll && (i.style.overflowX = "hidden")),
        this.data.hasOwnCanvas && (i.hidden = !0),
        qn.add(i),
        i.setAttribute("data-element-id", e),
        (i.disabled = this.data.readOnly),
        (i.name = this.data.fieldName),
        (i.tabIndex = Wn),
        this._setRequired(i, this.data.required),
        a && (i.maxLength = a),
        i.addEventListener("input", (s) => {
          (t.setValue(e, { value: s.target.value }),
            this.setPropertyOnSiblings(i, "value", s.target.value, "value"),
            (o.formattedValue = null));
        }),
        i.addEventListener("resetform", (t) => {
          const e = this.data.defaultFieldValue ?? "";
          ((i.value = o.userValue = e), (o.formattedValue = null));
        }));
      let h = (t) => {
        const { formattedValue: e } = o;
        (null != e && (t.target.value = e), (t.target.scrollLeft = 0));
      };
      if (this.enableScripting && this.hasJSActions) {
        (i.addEventListener("focus", (t) => {
          if (o.focused) return;
          const { target: e } = t;
          (o.userValue && (e.value = o.userValue),
            (o.lastCommittedValue = e.value),
            (o.commitKey = 1),
            this.data.actions?.Focus || (o.focused = !0));
        }),
          i.addEventListener("updatefromsandbox", (i) => {
            this.showElementAndHideCanvas(i.target);
            const s = {
              value(i) {
                ((o.userValue = i.detail.value ?? ""),
                  t.setValue(e, { value: o.userValue.toString() }),
                  (i.target.value = o.userValue));
              },
              formattedValue(i) {
                const { formattedValue: s } = i.detail;
                ((o.formattedValue = s),
                  null != s &&
                    i.target !== document.activeElement &&
                    (i.target.value = s),
                  t.setValue(e, { formattedValue: s }));
              },
              selRange(t) {
                t.target.setSelectionRange(...t.detail.selRange);
              },
              charLimit: (i) => {
                const { charLimit: s } = i.detail,
                  { target: n } = i;
                if (0 === s) return void n.removeAttribute("maxLength");
                n.setAttribute("maxLength", s);
                let a = o.userValue;
                !a ||
                  a.length <= s ||
                  ((a = a.slice(0, s)),
                  (n.value = o.userValue = a),
                  t.setValue(e, { value: a }),
                  this.linkService.eventBus?.dispatch(
                    "dispatcheventinsandbox",
                    {
                      source: this,
                      detail: {
                        id: e,
                        name: "Keystroke",
                        value: a,
                        willCommit: !0,
                        commitKey: 1,
                        selStart: n.selectionStart,
                        selEnd: n.selectionEnd,
                      },
                    },
                  ));
              },
            };
            this._dispatchEventFromSandbox(s, i);
          }),
          i.addEventListener("keydown", (t) => {
            o.commitKey = 1;
            let i = -1;
            if (
              ("Escape" === t.key
                ? (i = 0)
                : "Enter" !== t.key || this.data.multiLine
                  ? "Tab" === t.key && (o.commitKey = 3)
                  : (i = 2),
              -1 === i)
            )
              return;
            const { value: s } = t.target;
            o.lastCommittedValue !== s &&
              ((o.lastCommittedValue = s),
              (o.userValue = s),
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: s,
                  willCommit: !0,
                  commitKey: i,
                  selStart: t.target.selectionStart,
                  selEnd: t.target.selectionEnd,
                },
              }));
          }));
        const s = h;
        ((h = null),
          i.addEventListener("blur", (t) => {
            if (!o.focused || !t.relatedTarget) return;
            this.data.actions?.Blur || (o.focused = !1);
            const { value: i } = t.target;
            ((o.userValue = i),
              o.lastCommittedValue !== i &&
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e,
                    name: "Keystroke",
                    value: i,
                    willCommit: !0,
                    commitKey: o.commitKey,
                    selStart: t.target.selectionStart,
                    selEnd: t.target.selectionEnd,
                  },
                }),
              s(t));
          }),
          this.data.actions?.Keystroke &&
            i.addEventListener("beforeinput", (t) => {
              o.lastCommittedValue = null;
              const { data: i, target: s } = t,
                { value: n, selectionStart: a, selectionEnd: r } = s;
              let h = a,
                l = r;
              switch (t.inputType) {
                case "deleteWordBackward": {
                  const t = n.substring(0, a).match(/\w*[^\w]*$/);
                  t && (h -= t[0].length);
                  break;
                }
                case "deleteWordForward": {
                  const t = n.substring(a).match(/^[^\w]*\w*/);
                  t && (l += t[0].length);
                  break;
                }
                case "deleteContentBackward":
                  a === r && (h -= 1);
                  break;
                case "deleteContentForward":
                  a === r && (l += 1);
              }
              (t.preventDefault(),
                this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                  source: this,
                  detail: {
                    id: e,
                    name: "Keystroke",
                    value: n,
                    change: i || "",
                    willCommit: !1,
                    selStart: h,
                    selEnd: l,
                  },
                }));
            }),
          this._setEventListeners(
            i,
            o,
            [
              ["focus", "Focus"],
              ["blur", "Blur"],
              ["mousedown", "Mouse Down"],
              ["mouseenter", "Mouse Enter"],
              ["mouseleave", "Mouse Exit"],
              ["mouseup", "Mouse Up"],
            ],
            (t) => t.target.value,
          ));
      }
      if ((h && i.addEventListener("blur", h), this.data.comb)) {
        const t = (this.data.rect[2] - this.data.rect[0]) / a;
        (i.classList.add("comb"),
          (i.style.letterSpacing = `calc(${t}px * var(--scale-factor) - 1ch)`));
      }
    } else
      ((i = document.createElement("div")),
        (i.textContent = this.data.fieldValue),
        (i.style.verticalAlign = "middle"),
        (i.style.display = "table-cell"),
        this.data.hasOwnCanvas && (i.hidden = !0));
    return (
      this._setTextStyle(i),
      this._setBackgroundColor(i),
      this._setDefaultPropertiesFromJS(i),
      this.container.append(i),
      this.container
    );
  }
}
class ea extends Zn {
  constructor(t) {
    super(t, { isRenderable: !!t.data.hasOwnCanvas });
  }
}
class ia extends Zn {
  constructor(t) {
    super(t, { isRenderable: t.renderForms });
  }
  render() {
    const t = this.annotationStorage,
      e = this.data,
      i = e.id;
    let s = t.getValue(i, { value: e.exportValue === e.fieldValue }).value;
    ("string" == typeof s && ((s = "Off" !== s), t.setValue(i, { value: s })),
      this.container.classList.add("buttonWidgetAnnotation", "checkBox"));
    const n = document.createElement("input");
    return (
      qn.add(n),
      n.setAttribute("data-element-id", i),
      (n.disabled = e.readOnly),
      this._setRequired(n, this.data.required),
      (n.type = "checkbox"),
      (n.name = e.fieldName),
      s && n.setAttribute("checked", !0),
      n.setAttribute("exportValue", e.exportValue),
      (n.tabIndex = Wn),
      n.addEventListener("change", (s) => {
        const { name: n, checked: a } = s.target;
        for (const s of this._getElementsByName(n, i)) {
          const i = a && s.exportValue === e.exportValue;
          (s.domElement && (s.domElement.checked = i),
            t.setValue(s.id, { value: i }));
        }
        t.setValue(i, { value: a });
      }),
      n.addEventListener("resetform", (t) => {
        const i = e.defaultFieldValue || "Off";
        t.target.checked = i === e.exportValue;
      }),
      this.enableScripting &&
        this.hasJSActions &&
        (n.addEventListener("updatefromsandbox", (e) => {
          const s = {
            value(e) {
              ((e.target.checked = "Off" !== e.detail.value),
                t.setValue(i, { value: e.target.checked }));
            },
          };
          this._dispatchEventFromSandbox(s, e);
        }),
        this._setEventListeners(
          n,
          null,
          [
            ["change", "Validate"],
            ["change", "Action"],
            ["focus", "Focus"],
            ["blur", "Blur"],
            ["mousedown", "Mouse Down"],
            ["mouseenter", "Mouse Enter"],
            ["mouseleave", "Mouse Exit"],
            ["mouseup", "Mouse Up"],
          ],
          (t) => t.target.checked,
        )),
      this._setBackgroundColor(n),
      this._setDefaultPropertiesFromJS(n),
      this.container.append(n),
      this.container
    );
  }
}
class sa extends Zn {
  constructor(t) {
    super(t, { isRenderable: t.renderForms });
  }
  render() {
    this.container.classList.add("buttonWidgetAnnotation", "radioButton");
    const t = this.annotationStorage,
      e = this.data,
      i = e.id;
    let s = t.getValue(i, { value: e.fieldValue === e.buttonValue }).value;
    if (
      ("string" == typeof s &&
        ((s = s !== e.buttonValue), t.setValue(i, { value: s })),
      s)
    )
      for (const s of this._getElementsByName(e.fieldName, i))
        t.setValue(s.id, { value: !1 });
    const n = document.createElement("input");
    if (
      (qn.add(n),
      n.setAttribute("data-element-id", i),
      (n.disabled = e.readOnly),
      this._setRequired(n, this.data.required),
      (n.type = "radio"),
      (n.name = e.fieldName),
      s && n.setAttribute("checked", !0),
      (n.tabIndex = Wn),
      n.addEventListener("change", (e) => {
        const { name: s, checked: n } = e.target;
        for (const e of this._getElementsByName(s, i))
          t.setValue(e.id, { value: !1 });
        t.setValue(i, { value: n });
      }),
      n.addEventListener("resetform", (t) => {
        const i = e.defaultFieldValue;
        t.target.checked = null != i && i === e.buttonValue;
      }),
      this.enableScripting && this.hasJSActions)
    ) {
      const s = e.buttonValue;
      (n.addEventListener("updatefromsandbox", (e) => {
        const n = {
          value: (e) => {
            const n = s === e.detail.value;
            for (const s of this._getElementsByName(e.target.name)) {
              const e = n && s.id === i;
              (s.domElement && (s.domElement.checked = e),
                t.setValue(s.id, { value: e }));
            }
          },
        };
        this._dispatchEventFromSandbox(n, e);
      }),
        this._setEventListeners(
          n,
          null,
          [
            ["change", "Validate"],
            ["change", "Action"],
            ["focus", "Focus"],
            ["blur", "Blur"],
            ["mousedown", "Mouse Down"],
            ["mouseenter", "Mouse Enter"],
            ["mouseleave", "Mouse Exit"],
            ["mouseup", "Mouse Up"],
          ],
          (t) => t.target.checked,
        ));
    }
    return (
      this._setBackgroundColor(n),
      this._setDefaultPropertiesFromJS(n),
      this.container.append(n),
      this.container
    );
  }
}
class na extends Qn {
  constructor(t) {
    super(t, { ignoreBorder: t.data.hasAppearance });
  }
  render() {
    const t = super.render();
    t.classList.add("buttonWidgetAnnotation", "pushButton");
    const e = t.lastChild;
    return (
      this.enableScripting &&
        this.hasJSActions &&
        e &&
        (this._setDefaultPropertiesFromJS(e),
        e.addEventListener("updatefromsandbox", (t) => {
          this._dispatchEventFromSandbox({}, t);
        })),
      t
    );
  }
}
class aa extends Zn {
  constructor(t) {
    super(t, { isRenderable: t.renderForms });
  }
  render() {
    this.container.classList.add("choiceWidgetAnnotation");
    const t = this.annotationStorage,
      e = this.data.id,
      i = t.getValue(e, { value: this.data.fieldValue }),
      s = document.createElement("select");
    (qn.add(s),
      s.setAttribute("data-element-id", e),
      (s.disabled = this.data.readOnly),
      this._setRequired(s, this.data.required),
      (s.name = this.data.fieldName),
      (s.tabIndex = Wn));
    let n = this.data.combo && this.data.options.length > 0;
    (this.data.combo ||
      ((s.size = this.data.options.length),
      this.data.multiSelect && (s.multiple = !0)),
      s.addEventListener("resetform", (t) => {
        const e = this.data.defaultFieldValue;
        for (const t of s.options) t.selected = t.value === e;
      }));
    for (const t of this.data.options) {
      const e = document.createElement("option");
      ((e.textContent = t.displayValue),
        (e.value = t.exportValue),
        i.value.includes(t.exportValue) &&
          (e.setAttribute("selected", !0), (n = !1)),
        s.append(e));
    }
    let a = null;
    if (n) {
      const t = document.createElement("option");
      ((t.value = " "),
        t.setAttribute("hidden", !0),
        t.setAttribute("selected", !0),
        s.prepend(t),
        (a = () => {
          (t.remove(), s.removeEventListener("input", a), (a = null));
        }),
        s.addEventListener("input", a));
    }
    const r = (t) => {
      const e = t ? "value" : "textContent",
        { options: i, multiple: n } = s;
      return n
        ? Array.prototype.filter.call(i, (t) => t.selected).map((t) => t[e])
        : -1 === i.selectedIndex
          ? null
          : i[i.selectedIndex][e];
    };
    let o = r(!1);
    const h = (t) => {
      const e = t.target.options;
      return Array.prototype.map.call(e, (t) => ({
        displayValue: t.textContent,
        exportValue: t.value,
      }));
    };
    return (
      this.enableScripting && this.hasJSActions
        ? (s.addEventListener("updatefromsandbox", (i) => {
            const n = {
              value(i) {
                a?.();
                const n = i.detail.value,
                  h = new Set(Array.isArray(n) ? n : [n]);
                for (const t of s.options) t.selected = h.has(t.value);
                (t.setValue(e, { value: r(!0) }), (o = r(!1)));
              },
              multipleSelection(t) {
                s.multiple = !0;
              },
              remove(i) {
                const n = s.options,
                  a = i.detail.remove;
                if (((n[a].selected = !1), s.remove(a), n.length > 0)) {
                  -1 === Array.prototype.findIndex.call(n, (t) => t.selected) &&
                    (n[0].selected = !0);
                }
                (t.setValue(e, { value: r(!0), items: h(i) }), (o = r(!1)));
              },
              clear(i) {
                for (; 0 !== s.length; ) s.remove(0);
                (t.setValue(e, { value: null, items: [] }), (o = r(!1)));
              },
              insert(i) {
                const {
                    index: n,
                    displayValue: a,
                    exportValue: l,
                  } = i.detail.insert,
                  c = s.children[n],
                  d = document.createElement("option");
                ((d.textContent = a),
                  (d.value = l),
                  c ? c.before(d) : s.append(d),
                  t.setValue(e, { value: r(!0), items: h(i) }),
                  (o = r(!1)));
              },
              items(i) {
                const { items: n } = i.detail;
                for (; 0 !== s.length; ) s.remove(0);
                for (const t of n) {
                  const { displayValue: e, exportValue: i } = t,
                    n = document.createElement("option");
                  ((n.textContent = e), (n.value = i), s.append(n));
                }
                (s.options.length > 0 && (s.options[0].selected = !0),
                  t.setValue(e, { value: r(!0), items: h(i) }),
                  (o = r(!1)));
              },
              indices(i) {
                const s = new Set(i.detail.indices);
                for (const t of i.target.options) t.selected = s.has(t.index);
                (t.setValue(e, { value: r(!0) }), (o = r(!1)));
              },
              editable(t) {
                t.target.disabled = !t.detail.editable;
              },
            };
            this._dispatchEventFromSandbox(n, i);
          }),
          s.addEventListener("input", (i) => {
            const s = r(!0),
              n = r(!1);
            (t.setValue(e, { value: s }),
              i.preventDefault(),
              this.linkService.eventBus?.dispatch("dispatcheventinsandbox", {
                source: this,
                detail: {
                  id: e,
                  name: "Keystroke",
                  value: o,
                  change: n,
                  changeEx: s,
                  willCommit: !1,
                  commitKey: 1,
                  keyDown: !1,
                },
              }));
          }),
          this._setEventListeners(
            s,
            null,
            [
              ["focus", "Focus"],
              ["blur", "Blur"],
              ["mousedown", "Mouse Down"],
              ["mouseenter", "Mouse Enter"],
              ["mouseleave", "Mouse Exit"],
              ["mouseup", "Mouse Up"],
              ["input", "Action"],
              ["input", "Validate"],
            ],
            (t) => t.target.value,
          ))
        : s.addEventListener("input", function (i) {
            t.setValue(e, { value: r(!0) });
          }),
      this.data.combo && this._setTextStyle(s),
      this._setBackgroundColor(s),
      this._setDefaultPropertiesFromJS(s),
      this.container.append(s),
      this.container
    );
  }
}
class ra extends Kn {
  constructor(t) {
    const { data: e, elements: i } = t;
    (super(t, { isRenderable: Kn._hasPopupData(e) }),
      (this.elements = i),
      (this.popup = null));
  }
  render() {
    this.container.classList.add("popupAnnotation");
    const t = (this.popup = new oa({
        container: this.container,
        color: this.data.color,
        titleObj: this.data.titleObj,
        modificationDate: this.data.modificationDate,
        contentsObj: this.data.contentsObj,
        richText: this.data.richText,
        rect: this.data.rect,
        parentRect: this.data.parentRect || null,
        parent: this.parent,
        elements: this.elements,
        open: this.data.open,
      })),
      e = [];
    for (const i of this.elements)
      ((i.popup = t),
        (i.container.ariaHasPopup = "dialog"),
        e.push(i.data.id),
        i.addHighlightArea());
    return (
      this.container.setAttribute(
        "aria-controls",
        e.map((t) => `${We}${t}`).join(","),
      ),
      this.container
    );
  }
}
class oa {
  #xs = this.#Cs.bind(this);
  #Es = this.#Ss.bind(this);
  #Ts = this.#Ms.bind(this);
  #ks = this.#Ps.bind(this);
  #Rs = null;
  #ut = null;
  #Is = null;
  #Ds = null;
  #Ls = null;
  #Fs = null;
  #Ns = null;
  #Os = !1;
  #Bs = null;
  #S = null;
  #zs = null;
  #Hs = null;
  #Us = null;
  #ms = null;
  #js = !1;
  constructor({
    container: t,
    color: e,
    elements: i,
    titleObj: s,
    modificationDate: n,
    contentsObj: a,
    richText: r,
    parent: o,
    rect: h,
    parentRect: l,
    open: c,
  }) {
    ((this.#ut = t),
      (this.#Us = s),
      (this.#Is = a),
      (this.#Hs = r),
      (this.#Fs = o),
      (this.#Rs = e),
      (this.#zs = h),
      (this.#Ns = l),
      (this.#Ls = i),
      (this.#Ds = fi.toDateObject(n)),
      (this.trigger = i.flatMap((t) => t.getElementsToTriggerPopup())));
    for (const t of this.trigger)
      (t.addEventListener("click", this.#ks),
        t.addEventListener("mouseenter", this.#Ts),
        t.addEventListener("mouseleave", this.#Es),
        t.classList.add("popupTriggerArea"));
    for (const t of i) t.container?.addEventListener("keydown", this.#xs);
    ((this.#ut.hidden = !0), c && this.#Ps());
  }
  render() {
    if (this.#Bs) return;
    const t = (this.#Bs = document.createElement("div"));
    if (((t.className = "popup"), this.#Rs)) {
      const e = (t.style.outlineColor = je.makeHexColor(...this.#Rs));
      if (
        CSS.supports("background-color", "color-mix(in srgb, red 30%, white)")
      )
        t.style.backgroundColor = `color-mix(in srgb, ${e} 30%, white)`;
      else {
        const e = 0.7;
        t.style.backgroundColor = je.makeHexColor(
          ...this.#Rs.map((t) => Math.floor(e * (255 - t) + t)),
        );
      }
    }
    const e = document.createElement("span");
    e.className = "header";
    const i = document.createElement("h1");
    if (
      (e.append(i),
      ({ dir: i.dir, str: i.textContent } = this.#Us),
      t.append(e),
      this.#Ds)
    ) {
      const t = document.createElement("span");
      (t.classList.add("popupDate"),
        t.setAttribute("data-l10n-id", "pdfjs-annotation-date-time-string"),
        t.setAttribute(
          "data-l10n-args",
          JSON.stringify({ dateObj: this.#Ds.valueOf() }),
        ),
        e.append(t));
    }
    const s = this.#$s;
    if (s)
      (Vn.render({ xfaHtml: s, intent: "richText", div: t }),
        t.lastChild.classList.add("richText", "popupContent"));
    else {
      const e = this._formatContents(this.#Is);
      t.append(e);
    }
    this.#ut.append(t);
  }
  get #$s() {
    const t = this.#Hs,
      e = this.#Is;
    return !t?.str || (e?.str && e.str !== t.str)
      ? null
      : this.#Hs.html || null;
  }
  get #Gs() {
    return this.#$s?.attributes?.style?.fontSize || 0;
  }
  get #Vs() {
    return this.#$s?.attributes?.style?.color || null;
  }
  #Ws(t) {
    const e = [],
      i = {
        str: t,
        html: {
          name: "div",
          attributes: { dir: "auto" },
          children: [{ name: "p", children: e }],
        },
      },
      s = {
        style: {
          color: this.#Vs,
          fontSize: this.#Gs ? `calc(${this.#Gs}px * var(--scale-factor))` : "",
        },
      };
    for (const i of t.split("\n"))
      e.push({ name: "span", value: i, attributes: s });
    return i;
  }
  _formatContents({ str: t, dir: e }) {
    const i = document.createElement("p");
    (i.classList.add("popupContent"), (i.dir = e));
    const s = t.split(/(?:\r\n?|\n)/);
    for (let t = 0, e = s.length; t < e; ++t) {
      const n = s[t];
      (i.append(document.createTextNode(n)),
        t < e - 1 && i.append(document.createElement("br")));
    }
    return i;
  }
  #Cs(t) {
    t.altKey ||
      t.shiftKey ||
      t.ctrlKey ||
      t.metaKey ||
      (("Enter" === t.key || ("Escape" === t.key && this.#Os)) && this.#Ps());
  }
  updateEdited({ rect: t, popupContent: e }) {
    ((this.#ms ||= { contentsObj: this.#Is, richText: this.#Hs }),
      t && (this.#S = null),
      e && ((this.#Hs = this.#Ws(e)), (this.#Is = null)),
      this.#Bs?.remove(),
      (this.#Bs = null));
  }
  resetEdited() {
    this.#ms &&
      (({ contentsObj: this.#Is, richText: this.#Hs } = this.#ms),
      (this.#ms = null),
      this.#Bs?.remove(),
      (this.#Bs = null),
      (this.#S = null));
  }
  #qs() {
    if (null !== this.#S) return;
    const {
      page: { view: t },
      viewport: {
        rawDims: { pageWidth: e, pageHeight: i, pageX: s, pageY: n },
      },
    } = this.#Fs;
    let a = !!this.#Ns,
      r = a ? this.#Ns : this.#zs;
    for (const t of this.#Ls)
      if (!r || null !== je.intersect(t.data.rect, r)) {
        ((r = t.data.rect), (a = !0));
        break;
      }
    const o = je.normalizeRect([
        r[0],
        t[3] - r[1] + t[1],
        r[2],
        t[3] - r[3] + t[1],
      ]),
      h = a ? r[2] - r[0] + 5 : 0,
      l = o[0] + h,
      c = o[1];
    this.#S = [(100 * (l - s)) / e, (100 * (c - n)) / i];
    const { style: d } = this.#ut;
    ((d.left = `${this.#S[0]}%`), (d.top = `${this.#S[1]}%`));
  }
  #Ps() {
    ((this.#Os = !this.#Os),
      this.#Os
        ? (this.#Ms(),
          this.#ut.addEventListener("click", this.#ks),
          this.#ut.addEventListener("keydown", this.#xs))
        : (this.#Ss(),
          this.#ut.removeEventListener("click", this.#ks),
          this.#ut.removeEventListener("keydown", this.#xs)));
  }
  #Ms() {
    (this.#Bs || this.render(),
      this.isVisible
        ? this.#Os && this.#ut.classList.add("focused")
        : (this.#qs(),
          (this.#ut.hidden = !1),
          (this.#ut.style.zIndex = parseInt(this.#ut.style.zIndex) + 1e3)));
  }
  #Ss() {
    (this.#ut.classList.remove("focused"),
      !this.#Os &&
        this.isVisible &&
        ((this.#ut.hidden = !0),
        (this.#ut.style.zIndex = parseInt(this.#ut.style.zIndex) - 1e3)));
  }
  forceHide() {
    ((this.#js = this.isVisible), this.#js && (this.#ut.hidden = !0));
  }
  maybeShow() {
    this.#js &&
      (this.#Bs || this.#Ms(), (this.#js = !1), (this.#ut.hidden = !1));
  }
  get isVisible() {
    return !1 === this.#ut.hidden;
  }
}
class ha extends Kn {
  constructor(t) {
    (super(t, { isRenderable: !0, ignoreBorder: !0 }),
      (this.textContent = t.data.textContent),
      (this.textPosition = t.data.textPosition),
      (this.annotationEditorType = Bt.FREETEXT));
  }
  render() {
    if (
      (this.container.classList.add("freeTextAnnotation"), this.textContent)
    ) {
      const t = document.createElement("div");
      (t.classList.add("annotationTextContent"),
        t.setAttribute("role", "comment"));
      for (const e of this.textContent) {
        const i = document.createElement("span");
        ((i.textContent = e), t.append(i));
      }
      this.container.append(t);
    }
    return (
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this._editOnDoubleClick(),
      this.container
    );
  }
}
class la extends Kn {
  #Ys = null;
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
  }
  render() {
    this.container.classList.add("lineAnnotation");
    const t = this.data,
      { width: e, height: i } = Yn(t.rect),
      s = this.svgFactory.create(e, i, !0),
      n = (this.#Ys = this.svgFactory.createElement("svg:line"));
    return (
      n.setAttribute("x1", t.rect[2] - t.lineCoordinates[0]),
      n.setAttribute("y1", t.rect[3] - t.lineCoordinates[1]),
      n.setAttribute("x2", t.rect[2] - t.lineCoordinates[2]),
      n.setAttribute("y2", t.rect[3] - t.lineCoordinates[3]),
      n.setAttribute("stroke-width", t.borderStyle.width || 1),
      n.setAttribute("stroke", "transparent"),
      n.setAttribute("fill", "transparent"),
      s.append(n),
      this.container.append(s),
      !t.popupRef && this.hasPopupData && this._createPopup(),
      this.container
    );
  }
  getElementsToTriggerPopup() {
    return this.#Ys;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ca extends Kn {
  #Xs = null;
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
  }
  render() {
    this.container.classList.add("squareAnnotation");
    const t = this.data,
      { width: e, height: i } = Yn(t.rect),
      s = this.svgFactory.create(e, i, !0),
      n = t.borderStyle.width,
      a = (this.#Xs = this.svgFactory.createElement("svg:rect"));
    return (
      a.setAttribute("x", n / 2),
      a.setAttribute("y", n / 2),
      a.setAttribute("width", e - n),
      a.setAttribute("height", i - n),
      a.setAttribute("stroke-width", n || 1),
      a.setAttribute("stroke", "transparent"),
      a.setAttribute("fill", "transparent"),
      s.append(a),
      this.container.append(s),
      !t.popupRef && this.hasPopupData && this._createPopup(),
      this.container
    );
  }
  getElementsToTriggerPopup() {
    return this.#Xs;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class da extends Kn {
  #Ks = null;
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
  }
  render() {
    this.container.classList.add("circleAnnotation");
    const t = this.data,
      { width: e, height: i } = Yn(t.rect),
      s = this.svgFactory.create(e, i, !0),
      n = t.borderStyle.width,
      a = (this.#Ks = this.svgFactory.createElement("svg:ellipse"));
    return (
      a.setAttribute("cx", e / 2),
      a.setAttribute("cy", i / 2),
      a.setAttribute("rx", e / 2 - n / 2),
      a.setAttribute("ry", i / 2 - n / 2),
      a.setAttribute("stroke-width", n || 1),
      a.setAttribute("stroke", "transparent"),
      a.setAttribute("fill", "transparent"),
      s.append(a),
      this.container.append(s),
      !t.popupRef && this.hasPopupData && this._createPopup(),
      this.container
    );
  }
  getElementsToTriggerPopup() {
    return this.#Ks;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ua extends Kn {
  #Qs = null;
  constructor(t) {
    (super(t, { isRenderable: !0, ignoreBorder: !0 }),
      (this.containerClassName = "polylineAnnotation"),
      (this.svgElementName = "svg:polyline"));
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
      data: { rect: t, vertices: e, borderStyle: i, popupRef: s },
    } = this;
    if (!e) return this.container;
    const { width: n, height: a } = Yn(t),
      r = this.svgFactory.create(n, a, !0);
    let o = [];
    for (let i = 0, s = e.length; i < s; i += 2) {
      const s = e[i] - t[0],
        n = t[3] - e[i + 1];
      o.push(`${s},${n}`);
    }
    o = o.join(" ");
    const h = (this.#Qs = this.svgFactory.createElement(this.svgElementName));
    return (
      h.setAttribute("points", o),
      h.setAttribute("stroke-width", i.width || 1),
      h.setAttribute("stroke", "transparent"),
      h.setAttribute("fill", "transparent"),
      r.append(h),
      this.container.append(r),
      !s && this.hasPopupData && this._createPopup(),
      this.container
    );
  }
  getElementsToTriggerPopup() {
    return this.#Qs;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class pa extends ua {
  constructor(t) {
    (super(t),
      (this.containerClassName = "polygonAnnotation"),
      (this.svgElementName = "svg:polygon"));
  }
}
class ga extends Kn {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0 });
  }
  render() {
    return (
      this.container.classList.add("caretAnnotation"),
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this.container
    );
  }
}
class fa extends Kn {
  #Js = [];
  constructor(t) {
    (super(t, { isRenderable: !0, ignoreBorder: !0 }),
      (this.containerClassName = "inkAnnotation"),
      (this.svgElementName = "svg:polyline"),
      (this.annotationEditorType =
        "InkHighlight" === this.data.it ? Bt.HIGHLIGHT : Bt.INK));
  }
  render() {
    this.container.classList.add(this.containerClassName);
    const {
        data: { rect: t, inkLists: e, borderStyle: i, popupRef: s },
      } = this,
      { width: n, height: a } = Yn(t),
      r = this.svgFactory.create(n, a, !0);
    for (const s of e) {
      let e = [];
      for (let i = 0, n = s.length; i < n; i += 2) {
        const n = s[i] - t[0],
          a = t[3] - s[i + 1];
        e.push(`${n},${a}`);
      }
      e = e.join(" ");
      const n = this.svgFactory.createElement(this.svgElementName);
      (this.#Js.push(n),
        n.setAttribute("points", e),
        n.setAttribute("stroke-width", i.width || 1),
        n.setAttribute("stroke", "transparent"),
        n.setAttribute("fill", "transparent"),
        r.append(n));
    }
    return (
      !s && this.hasPopupData && this._createPopup(),
      this.container.append(r),
      this._editOnDoubleClick(),
      this.container
    );
  }
  getElementsToTriggerPopup() {
    return this.#Js;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
}
class ma extends Kn {
  constructor(t) {
    (super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 }),
      (this.annotationEditorType = Bt.HIGHLIGHT));
  }
  render() {
    return (
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this.container.classList.add("highlightAnnotation"),
      this._editOnDoubleClick(),
      this.container
    );
  }
}
class ba extends Kn {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return (
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this.container.classList.add("underlineAnnotation"),
      this.container
    );
  }
}
class va extends Kn {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return (
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this.container.classList.add("squigglyAnnotation"),
      this.container
    );
  }
}
class Aa extends Kn {
  constructor(t) {
    super(t, { isRenderable: !0, ignoreBorder: !0, createQuadrilaterals: !0 });
  }
  render() {
    return (
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this.container.classList.add("strikeoutAnnotation"),
      this.container
    );
  }
}
class ya extends Kn {
  constructor(t) {
    (super(t, { isRenderable: !0, ignoreBorder: !0 }),
      (this.annotationEditorType = Bt.STAMP));
  }
  render() {
    return (
      this.container.classList.add("stampAnnotation"),
      this.container.setAttribute("role", "img"),
      !this.data.popupRef && this.hasPopupData && this._createPopup(),
      this._editOnDoubleClick(),
      this.container
    );
  }
}
class wa extends Kn {
  #Zs = null;
  constructor(t) {
    super(t, { isRenderable: !0 });
    const { file: e } = this.data;
    ((this.filename = e.filename),
      (this.content = e.content),
      this.linkService.eventBus?.dispatch("fileattachmentannotation", {
        source: this,
        ...e,
      }));
  }
  render() {
    this.container.classList.add("fileAttachmentAnnotation");
    const { container: t, data: e } = this;
    let i;
    (e.hasAppearance || 0 === e.fillAlpha
      ? (i = document.createElement("div"))
      : ((i = document.createElement("img")),
        (i.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(e.name) ? "paperclip" : "pushpin"}.svg`),
        e.fillAlpha &&
          e.fillAlpha < 1 &&
          (i.style = `filter: opacity(${Math.round(100 * e.fillAlpha)}%);`)),
      i.addEventListener("dblclick", this.#tn.bind(this)),
      (this.#Zs = i));
    const { isMac: s } = He.platform;
    return (
      t.addEventListener("keydown", (t) => {
        "Enter" === t.key && (s ? t.metaKey : t.ctrlKey) && this.#tn();
      }),
      !e.popupRef && this.hasPopupData
        ? this._createPopup()
        : i.classList.add("popupTriggerArea"),
      t.append(i),
      t
    );
  }
  getElementsToTriggerPopup() {
    return this.#Zs;
  }
  addHighlightArea() {
    this.container.classList.add("highlightArea");
  }
  #tn() {
    this.downloadManager?.openOrDownloadData(this.content, this.filename);
  }
}
class _a {
  #en = null;
  #in = null;
  #sn = new Map();
  #nn = null;
  constructor({
    div: t,
    accessibilityManager: e,
    annotationCanvasMap: i,
    annotationEditorUIManager: s,
    page: n,
    viewport: a,
    structTreeLayer: r,
  }) {
    ((this.div = t),
      (this.#en = e),
      (this.#in = i),
      (this.#nn = r || null),
      (this.page = n),
      (this.viewport = a),
      (this.zIndex = 0),
      (this._annotationEditorUIManager = s));
  }
  hasEditableAnnotations() {
    return this.#sn.size > 0;
  }
  async #an(t, e) {
    const i = t.firstChild || t,
      s = (i.id = `${We}${e}`),
      n = await this.#nn?.getAriaAttributes(s);
    if (n) for (const [t, e] of n) i.setAttribute(t, e);
    (this.div.append(t), this.#en?.moveElementInDOM(this.div, t, i, !1));
  }
  async render(t) {
    const { annotations: e } = t,
      i = this.div;
    yi(i, this.viewport);
    const s = new Map(),
      n = {
        data: null,
        layer: i,
        linkService: t.linkService,
        downloadManager: t.downloadManager,
        imageResourcesPath: t.imageResourcesPath || "",
        renderForms: !1 !== t.renderForms,
        svgFactory: new Gn(),
        annotationStorage: t.annotationStorage || new zi(),
        enableScripting: !0 === t.enableScripting,
        hasJSActions: t.hasJSActions,
        fieldObjects: t.fieldObjects,
        parent: this,
        elements: null,
      };
    for (const t of e) {
      if (t.noHTML) continue;
      const e = t.annotationType === le;
      if (e) {
        const e = s.get(t.id);
        if (!e) continue;
        n.elements = e;
      } else {
        const { width: e, height: i } = Yn(t.rect);
        if (e <= 0 || i <= 0) continue;
      }
      n.data = t;
      const i = Xn.create(n);
      if (!i.isRenderable) continue;
      if (!e && t.popupRef) {
        const e = s.get(t.popupRef);
        e ? e.push(i) : s.set(t.popupRef, [i]);
      }
      const a = i.render();
      (t.hidden && (a.style.visibility = "hidden"),
        await this.#an(a, t.id),
        i._isEditable &&
          (this.#sn.set(i.data.id, i),
          this._annotationEditorUIManager?.renderAnnotationElement(i)));
    }
    this.#rn();
  }
  update({ viewport: t }) {
    const e = this.div;
    ((this.viewport = t),
      yi(e, { rotation: t.rotation }),
      this.#rn(),
      (e.hidden = !1));
  }
  #rn() {
    if (!this.#in) return;
    const t = this.div;
    for (const [e, i] of this.#in) {
      const s = t.querySelector(`[data-annotation-id="${e}"]`);
      if (!s) continue;
      i.className = "annotationContent";
      const { firstChild: n } = s;
      n
        ? "CANVAS" === n.nodeName
          ? n.replaceWith(i)
          : n.classList.contains("annotationContent")
            ? n.after(i)
            : n.before(i)
        : s.append(i);
    }
    this.#in.clear();
  }
  getEditableAnnotations() {
    return Array.from(this.#sn.values());
  }
  getEditableAnnotation(t) {
    return this.#sn.get(t);
  }
}
const xa = /\r\n?|\n/g;
class Ca extends Ii {
  #Rs;
  #on = "";
  #hn = `${this.id}-editor`;
  #ln = null;
  #Gs;
  static _freeTextDefaultContent = "";
  static _internalPadding = 0;
  static _defaultColor = null;
  static _defaultFontSize = 10;
  static get _keyboardManager() {
    const t = Ca.prototype,
      e = (t) => t.isEmpty(),
      i = Pi.TRANSLATE_SMALL,
      s = Pi.TRANSLATE_BIG;
    return Me(
      this,
      "_keyboardManager",
      new Mi([
        [
          ["ctrl+s", "mac+meta+s", "ctrl+p", "mac+meta+p"],
          t.commitOrRemove,
          { bubbles: !0 },
        ],
        [
          ["ctrl+Enter", "mac+meta+Enter", "Escape", "mac+Escape"],
          t.commitOrRemove,
        ],
        [
          ["ArrowLeft", "mac+ArrowLeft"],
          t._translateEmpty,
          { args: [-i, 0], checker: e },
        ],
        [
          ["ctrl+ArrowLeft", "mac+shift+ArrowLeft"],
          t._translateEmpty,
          { args: [-s, 0], checker: e },
        ],
        [
          ["ArrowRight", "mac+ArrowRight"],
          t._translateEmpty,
          { args: [i, 0], checker: e },
        ],
        [
          ["ctrl+ArrowRight", "mac+shift+ArrowRight"],
          t._translateEmpty,
          { args: [s, 0], checker: e },
        ],
        [
          ["ArrowUp", "mac+ArrowUp"],
          t._translateEmpty,
          { args: [0, -i], checker: e },
        ],
        [
          ["ctrl+ArrowUp", "mac+shift+ArrowUp"],
          t._translateEmpty,
          { args: [0, -s], checker: e },
        ],
        [
          ["ArrowDown", "mac+ArrowDown"],
          t._translateEmpty,
          { args: [0, i], checker: e },
        ],
        [
          ["ctrl+ArrowDown", "mac+shift+ArrowDown"],
          t._translateEmpty,
          { args: [0, s], checker: e },
        ],
      ]),
    );
  }
  static _type = "freetext";
  static _editorType = Bt.FREETEXT;
  constructor(t) {
    (super({ ...t, name: "freeTextEditor" }),
      (this.#Rs = t.color || Ca._defaultColor || Ii._defaultLineColor),
      (this.#Gs = t.fontSize || Ca._defaultFontSize));
  }
  static initialize(t, e) {
    Ii.initialize(t, e);
    const i = getComputedStyle(document.documentElement);
    this._internalPadding = parseFloat(
      i.getPropertyValue("--freetext-padding"),
    );
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case zt.FREETEXT_SIZE:
        Ca._defaultFontSize = e;
        break;
      case zt.FREETEXT_COLOR:
        Ca._defaultColor = e;
    }
  }
  updateParams(t, e) {
    switch (t) {
      case zt.FREETEXT_SIZE:
        this.#cn(e);
        break;
      case zt.FREETEXT_COLOR:
        this.#dn(e);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [
      [zt.FREETEXT_SIZE, Ca._defaultFontSize],
      [zt.FREETEXT_COLOR, Ca._defaultColor || Ii._defaultLineColor],
    ];
  }
  get propertiesToUpdate() {
    return [
      [zt.FREETEXT_SIZE, this.#Gs],
      [zt.FREETEXT_COLOR, this.#Rs],
    ];
  }
  #cn(t) {
    const e = (t) => {
        ((this.editorDiv.style.fontSize = `calc(${t}px * var(--scale-factor))`),
          this.translate(0, -(t - this.#Gs) * this.parentScale),
          (this.#Gs = t),
          this.#un());
      },
      i = this.#Gs;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.FREETEXT_SIZE,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }
  #dn(t) {
    const e = (t) => {
        this.#Rs = this.editorDiv.style.color = t;
      },
      i = this.#Rs;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.FREETEXT_COLOR,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }
  _translateEmpty(t, e) {
    this._uiManager.translateSelectedEditors(t, e, !0);
  }
  getInitialTranslation() {
    const t = this.parentScale;
    return [-Ca._internalPadding * t, -(Ca._internalPadding + this.#Gs) * t];
  }
  rebuild() {
    this.parent &&
      (super.rebuild(),
      null !== this.div && (this.isAttachedToDOM || this.parent.add(this)));
  }
  enableEditMode() {
    if (this.isInEditMode()) return;
    (this.parent.setEditingState(!1),
      this.parent.updateToolbar(Bt.FREETEXT),
      super.enableEditMode(),
      this.overlayDiv.classList.remove("enabled"),
      (this.editorDiv.contentEditable = !0),
      (this._isDraggable = !1),
      this.div.removeAttribute("aria-activedescendant"),
      (this.#ln = new AbortController()));
    const t = this._uiManager.combinedSignal(this.#ln);
    (this.editorDiv.addEventListener(
      "keydown",
      this.editorDivKeydown.bind(this),
      { signal: t },
    ),
      this.editorDiv.addEventListener("focus", this.editorDivFocus.bind(this), {
        signal: t,
      }),
      this.editorDiv.addEventListener("blur", this.editorDivBlur.bind(this), {
        signal: t,
      }),
      this.editorDiv.addEventListener("input", this.editorDivInput.bind(this), {
        signal: t,
      }),
      this.editorDiv.addEventListener("paste", this.editorDivPaste.bind(this), {
        signal: t,
      }));
  }
  disableEditMode() {
    this.isInEditMode() &&
      (this.parent.setEditingState(!0),
      super.disableEditMode(),
      this.overlayDiv.classList.add("enabled"),
      (this.editorDiv.contentEditable = !1),
      this.div.setAttribute("aria-activedescendant", this.#hn),
      (this._isDraggable = !0),
      this.#ln?.abort(),
      (this.#ln = null),
      this.div.focus({ preventScroll: !0 }),
      (this.isEditing = !1),
      this.parent.div.classList.add("freetextEditing"));
  }
  focusin(t) {
    this._focusEventsAllowed &&
      (super.focusin(t), t.target !== this.editorDiv && this.editorDiv.focus());
  }
  onceAdded() {
    this.width ||
      (this.enableEditMode(),
      this.editorDiv.focus(),
      this._initialOptions?.isCentered && this.center(),
      (this._initialOptions = null));
  }
  isEmpty() {
    return !this.editorDiv || "" === this.editorDiv.innerText.trim();
  }
  remove() {
    ((this.isEditing = !1),
      this.parent &&
        (this.parent.setEditingState(!0),
        this.parent.div.classList.add("freetextEditing")),
      super.remove());
  }
  #pn() {
    const t = [];
    this.editorDiv.normalize();
    let e = null;
    for (const i of this.editorDiv.childNodes)
      (e?.nodeType === Node.TEXT_NODE && "BR" === i.nodeName) ||
        (t.push(Ca.#gn(i)), (e = i));
    return t.join("\n");
  }
  #un() {
    const [t, e] = this.parentDimensions;
    let i;
    if (this.isAttachedToDOM) i = this.div.getBoundingClientRect();
    else {
      const { currentLayer: t, div: e } = this,
        s = e.style.display,
        n = e.classList.contains("hidden");
      (e.classList.remove("hidden"),
        (e.style.display = "hidden"),
        t.div.append(this.div),
        (i = e.getBoundingClientRect()),
        e.remove(),
        (e.style.display = s),
        e.classList.toggle("hidden", n));
    }
    (this.rotation % 180 == this.parentRotation % 180
      ? ((this.width = i.width / t), (this.height = i.height / e))
      : ((this.width = i.height / t), (this.height = i.width / e)),
      this.fixAndSetPosition());
  }
  commit() {
    if (!this.isInEditMode()) return;
    (super.commit(), this.disableEditMode());
    const t = this.#on,
      e = (this.#on = this.#pn().trimEnd());
    if (t === e) return;
    const i = (t) => {
      ((this.#on = t),
        t
          ? (this.#fn(), this._uiManager.rebuild(this), this.#un())
          : this.remove());
    };
    (this.addCommands({
      cmd: () => {
        i(e);
      },
      undo: () => {
        i(t);
      },
      mustExec: !1,
    }),
      this.#un());
  }
  shouldGetKeyboardEvents() {
    return this.isInEditMode();
  }
  enterInEditMode() {
    (this.enableEditMode(), this.editorDiv.focus());
  }
  dblclick(t) {
    this.enterInEditMode();
  }
  keydown(t) {
    t.target === this.div &&
      "Enter" === t.key &&
      (this.enterInEditMode(), t.preventDefault());
  }
  editorDivKeydown(t) {
    Ca._keyboardManager.exec(this, t);
  }
  editorDivFocus(t) {
    this.isEditing = !0;
  }
  editorDivBlur(t) {
    this.isEditing = !1;
  }
  editorDivInput(t) {
    this.parent.div.classList.toggle("freetextEditing", this.isEmpty());
  }
  disableEditing() {
    (this.editorDiv.setAttribute("role", "comment"),
      this.editorDiv.removeAttribute("aria-multiline"));
  }
  enableEditing() {
    (this.editorDiv.setAttribute("role", "textbox"),
      this.editorDiv.setAttribute("aria-multiline", !0));
  }
  render() {
    if (this.div) return this.div;
    let t, e;
    (this.width && ((t = this.x), (e = this.y)),
      super.render(),
      (this.editorDiv = document.createElement("div")),
      (this.editorDiv.className = "internal"),
      this.editorDiv.setAttribute("id", this.#hn),
      this.editorDiv.setAttribute("data-l10n-id", "pdfjs-free-text2"),
      this.editorDiv.setAttribute("data-l10n-attrs", "default-content"),
      this.enableEditing(),
      (this.editorDiv.contentEditable = !0));
    const { style: i } = this.editorDiv;
    if (
      ((i.fontSize = `calc(${this.#Gs}px * var(--scale-factor))`),
      (i.color = this.#Rs),
      this.div.append(this.editorDiv),
      (this.overlayDiv = document.createElement("div")),
      this.overlayDiv.classList.add("overlay", "enabled"),
      this.div.append(this.overlayDiv),
      Ci(this, this.div, ["dblclick", "keydown"]),
      this.width)
    ) {
      const [i, s] = this.parentDimensions;
      if (this.annotationElementId) {
        const { position: n } = this._initialData;
        let [a, r] = this.getInitialTranslation();
        [a, r] = this.pageTranslationToScreen(a, r);
        const [o, h] = this.pageDimensions,
          [l, c] = this.pageTranslation;
        let d, u;
        switch (this.rotation) {
          case 0:
            ((d = t + (n[0] - l) / o), (u = e + this.height - (n[1] - c) / h));
            break;
          case 90:
            ((d = t + (n[0] - l) / o),
              (u = e - (n[1] - c) / h),
              ([a, r] = [r, -a]));
            break;
          case 180:
            ((d = t - this.width + (n[0] - l) / o),
              (u = e - (n[1] - c) / h),
              ([a, r] = [-a, -r]));
            break;
          case 270:
            ((d = t + (n[0] - l - this.height * h) / o),
              (u = e + (n[1] - c - this.width * o) / h),
              ([a, r] = [-r, a]));
        }
        this.setAt(d * i, u * s, a, r);
      } else this.setAt(t * i, e * s, this.width * i, this.height * s);
      (this.#fn(),
        (this._isDraggable = !0),
        (this.editorDiv.contentEditable = !1));
    } else ((this._isDraggable = !1), (this.editorDiv.contentEditable = !0));
    return this.div;
  }
  static #gn(t) {
    return (
      t.nodeType === Node.TEXT_NODE ? t.nodeValue : t.innerText
    ).replaceAll(xa, "");
  }
  editorDivPaste(t) {
    const e = t.clipboardData || window.clipboardData,
      { types: i } = e;
    if (1 === i.length && "text/plain" === i[0]) return;
    t.preventDefault();
    const s = Ca.#mn(e.getData("text") || "").replaceAll(xa, "\n");
    if (!s) return;
    const n = window.getSelection();
    if (!n.rangeCount) return;
    (this.editorDiv.normalize(), n.deleteFromDocument());
    const a = n.getRangeAt(0);
    if (!s.includes("\n"))
      return (
        a.insertNode(document.createTextNode(s)),
        this.editorDiv.normalize(),
        void n.collapseToStart()
      );
    const { startContainer: r, startOffset: o } = a,
      h = [],
      l = [];
    if (r.nodeType === Node.TEXT_NODE) {
      const t = r.parentElement;
      if (
        (l.push(r.nodeValue.slice(o).replaceAll(xa, "")), t !== this.editorDiv)
      ) {
        let e = h;
        for (const i of this.editorDiv.childNodes)
          i !== t ? e.push(Ca.#gn(i)) : (e = l);
      }
      h.push(r.nodeValue.slice(0, o).replaceAll(xa, ""));
    } else if (r === this.editorDiv) {
      let t = h,
        e = 0;
      for (const i of this.editorDiv.childNodes)
        (e++ === o && (t = l), t.push(Ca.#gn(i)));
    }
    ((this.#on = `${h.join("\n")}${s}${l.join("\n")}`), this.#fn());
    const c = new Range();
    let d = h.reduce((t, e) => t + e.length, 0);
    for (const { firstChild: t } of this.editorDiv.childNodes)
      if (t.nodeType === Node.TEXT_NODE) {
        const e = t.nodeValue.length;
        if (d <= e) {
          (c.setStart(t, d), c.setEnd(t, d));
          break;
        }
        d -= e;
      }
    (n.removeAllRanges(), n.addRange(c));
  }
  #fn() {
    if ((this.editorDiv.replaceChildren(), this.#on))
      for (const t of this.#on.split("\n")) {
        const e = document.createElement("div");
        (e.append(
          t ? document.createTextNode(t) : document.createElement("br"),
        ),
          this.editorDiv.append(e));
      }
  }
  #bn() {
    return this.#on.replaceAll(" ", " ");
  }
  static #mn(t) {
    return t.replaceAll(" ", " ");
  }
  get contentDiv() {
    return this.editorDiv;
  }
  static async deserialize(t, e, i) {
    let s = null;
    if (t instanceof ha) {
      const {
        data: {
          defaultAppearanceData: { fontSize: e, fontColor: i },
          rect: n,
          rotation: a,
          id: r,
          popupRef: o,
        },
        textContent: h,
        textPosition: l,
        parent: {
          page: { pageNumber: c },
        },
      } = t;
      if (!h || 0 === h.length) return null;
      s = t = {
        annotationType: Bt.FREETEXT,
        color: Array.from(i),
        fontSize: e,
        value: h.join("\n"),
        position: l,
        pageIndex: c - 1,
        rect: n.slice(0),
        rotation: a,
        id: r,
        deleted: !1,
        popupRef: o,
      };
    }
    const n = await super.deserialize(t, e, i);
    return (
      (n.#Gs = t.fontSize),
      (n.#Rs = je.makeHexColor(...t.color)),
      (n.#on = Ca.#mn(t.value)),
      (n.annotationElementId = t.id || null),
      (n._initialData = s),
      n
    );
  }
  serialize(t = !1) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const e = Ca._internalPadding * this.parentScale,
      i = this.getRect(e, e),
      s = Ii._colorManager.convert(
        this.isAttachedToDOM
          ? getComputedStyle(this.editorDiv).color
          : this.#Rs,
      ),
      n = {
        annotationType: Bt.FREETEXT,
        color: s,
        fontSize: this.#Gs,
        value: this.#bn(),
        pageIndex: this.pageIndex,
        rect: i,
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId,
      };
    return t
      ? n
      : this.annotationElementId && !this.#vn(n)
        ? null
        : ((n.id = this.annotationElementId), n);
  }
  #vn(t) {
    const { value: e, fontSize: i, color: s, pageIndex: n } = this._initialData;
    return (
      this._hasBeenMoved ||
      t.value !== e ||
      t.fontSize !== i ||
      t.color.some((t, e) => t !== s[e]) ||
      t.pageIndex !== n
    );
  }
  renderAnnotationElement(t) {
    const e = super.renderAnnotationElement(t);
    if (this.deleted) return e;
    const { style: i } = e;
    ((i.fontSize = `calc(${this.#Gs}px * var(--scale-factor))`),
      (i.color = this.#Rs),
      e.replaceChildren());
    for (const t of this.#on.split("\n")) {
      const i = document.createElement("div");
      (i.append(t ? document.createTextNode(t) : document.createElement("br")),
        e.append(i));
    }
    const s = Ca._internalPadding * this.parentScale;
    return (
      t.updateEdited({ rect: this.getRect(s, s), popupContent: this.#on }),
      e
    );
  }
  resetAnnotationElement(t) {
    (super.resetAnnotationElement(t), t.resetEdited());
  }
}
class Ea {
  toSVGPath() {
    Ee("Abstract method `toSVGPath` must be implemented.");
  }
  get box() {
    Ee("Abstract getter `box` must be implemented.");
  }
  serialize(t, e) {
    Ee("Abstract method `serialize` must be implemented.");
  }
  get classNamesForDrawing() {
    Ee("Abstract getter `classNamesForDrawing` must be implemented.");
  }
  get classNamesForOutlining() {
    Ee("Abstract getter `classNamesForOutlining` must be implemented.");
  }
  get mustRemoveSelfIntersections() {
    return !1;
  }
}
class Sa {
  #An;
  #yn = [];
  #wn;
  #_n;
  #xn = [];
  #Cn = new Float64Array(18);
  #En;
  #Sn;
  #Tn;
  #Mn;
  #kn;
  #Pn;
  #Rn = [];
  static #In = 8;
  static #Dn = 2;
  static #Ln = Sa.#In + Sa.#Dn;
  constructor({ x: t, y: e }, i, s, n, a, r = 0) {
    ((this.#An = i),
      (this.#Pn = n * s),
      (this.#_n = a),
      this.#Cn.set([NaN, NaN, NaN, NaN, t, e], 6),
      (this.#wn = r),
      (this.#Mn = Sa.#In * s),
      (this.#Tn = Sa.#Ln * s),
      (this.#kn = s),
      this.#Rn.push(t, e));
  }
  isEmpty() {
    return isNaN(this.#Cn[8]);
  }
  #Fn() {
    const t = this.#Cn.subarray(4, 6),
      e = this.#Cn.subarray(16, 18),
      [i, s, n, a] = this.#An;
    return [
      (this.#En + (t[0] - e[0]) / 2 - i) / n,
      (this.#Sn + (t[1] - e[1]) / 2 - s) / a,
      (this.#En + (e[0] - t[0]) / 2 - i) / n,
      (this.#Sn + (e[1] - t[1]) / 2 - s) / a,
    ];
  }
  add({ x: t, y: e }) {
    ((this.#En = t), (this.#Sn = e));
    const [i, s, n, a] = this.#An;
    let [r, o, h, l] = this.#Cn.subarray(8, 12);
    const c = t - h,
      d = e - l,
      u = Math.hypot(c, d);
    if (u < this.#Tn) return !1;
    const p = u - this.#Mn,
      g = p / u,
      f = g * c,
      m = g * d;
    let b = r,
      v = o;
    ((r = h), (o = l), (h += f), (l += m), this.#Rn?.push(t, e));
    const A = f / p,
      y = (-m / p) * this.#Pn,
      w = A * this.#Pn;
    if (
      (this.#Cn.set(this.#Cn.subarray(2, 8), 0),
      this.#Cn.set([h + y, l + w], 4),
      this.#Cn.set(this.#Cn.subarray(14, 18), 12),
      this.#Cn.set([h - y, l - w], 16),
      isNaN(this.#Cn[6]))
    )
      return (
        0 === this.#xn.length &&
          (this.#Cn.set([r + y, o + w], 2),
          this.#xn.push(NaN, NaN, NaN, NaN, (r + y - i) / n, (o + w - s) / a),
          this.#Cn.set([r - y, o - w], 14),
          this.#yn.push(NaN, NaN, NaN, NaN, (r - y - i) / n, (o - w - s) / a)),
        this.#Cn.set([b, v, r, o, h, l], 6),
        !this.isEmpty()
      );
    this.#Cn.set([b, v, r, o, h, l], 6);
    return Math.abs(Math.atan2(v - o, b - r) - Math.atan2(m, f)) < Math.PI / 2
      ? (([r, o, h, l] = this.#Cn.subarray(2, 6)),
        this.#xn.push(
          NaN,
          NaN,
          NaN,
          NaN,
          ((r + h) / 2 - i) / n,
          ((o + l) / 2 - s) / a,
        ),
        ([r, o, b, v] = this.#Cn.subarray(14, 18)),
        this.#yn.push(
          NaN,
          NaN,
          NaN,
          NaN,
          ((b + r) / 2 - i) / n,
          ((v + o) / 2 - s) / a,
        ),
        !0)
      : (([b, v, r, o, h, l] = this.#Cn.subarray(0, 6)),
        this.#xn.push(
          ((b + 5 * r) / 6 - i) / n,
          ((v + 5 * o) / 6 - s) / a,
          ((5 * r + h) / 6 - i) / n,
          ((5 * o + l) / 6 - s) / a,
          ((r + h) / 2 - i) / n,
          ((o + l) / 2 - s) / a,
        ),
        ([h, l, r, o, b, v] = this.#Cn.subarray(12, 18)),
        this.#yn.push(
          ((b + 5 * r) / 6 - i) / n,
          ((v + 5 * o) / 6 - s) / a,
          ((5 * r + h) / 6 - i) / n,
          ((5 * o + l) / 6 - s) / a,
          ((r + h) / 2 - i) / n,
          ((o + l) / 2 - s) / a,
        ),
        !0);
  }
  toSVGPath() {
    if (this.isEmpty()) return "";
    const t = this.#xn,
      e = this.#yn;
    if (isNaN(this.#Cn[6]) && !this.isEmpty()) return this.#Nn();
    const i = [];
    i.push(`M${t[4]} ${t[5]}`);
    for (let e = 6; e < t.length; e += 6)
      isNaN(t[e])
        ? i.push(`L${t[e + 4]} ${t[e + 5]}`)
        : i.push(
            `C${t[e]} ${t[e + 1]} ${t[e + 2]} ${t[e + 3]} ${t[e + 4]} ${t[e + 5]}`,
          );
    this.#On(i);
    for (let t = e.length - 6; t >= 6; t -= 6)
      isNaN(e[t])
        ? i.push(`L${e[t + 4]} ${e[t + 5]}`)
        : i.push(
            `C${e[t]} ${e[t + 1]} ${e[t + 2]} ${e[t + 3]} ${e[t + 4]} ${e[t + 5]}`,
          );
    return (this.#Bn(i), i.join(" "));
  }
  #Nn() {
    const [t, e, i, s] = this.#An,
      [n, a, r, o] = this.#Fn();
    return `M${(this.#Cn[2] - t) / i} ${(this.#Cn[3] - e) / s} L${(this.#Cn[4] - t) / i} ${(this.#Cn[5] - e) / s} L${n} ${a} L${r} ${o} L${(this.#Cn[16] - t) / i} ${(this.#Cn[17] - e) / s} L${(this.#Cn[14] - t) / i} ${(this.#Cn[15] - e) / s} Z`;
  }
  #Bn(t) {
    const e = this.#yn;
    t.push(`L${e[4]} ${e[5]} Z`);
  }
  #On(t) {
    const [e, i, s, n] = this.#An,
      a = this.#Cn.subarray(4, 6),
      r = this.#Cn.subarray(16, 18),
      [o, h, l, c] = this.#Fn();
    t.push(
      `L${(a[0] - e) / s} ${(a[1] - i) / n} L${o} ${h} L${l} ${c} L${(r[0] - e) / s} ${(r[1] - i) / n}`,
    );
  }
  newFreeDrawOutline(t, e, i, s, n, a) {
    return new Ta(t, e, i, s, n, a);
  }
  getOutlines() {
    const t = this.#xn,
      e = this.#yn,
      i = this.#Cn,
      [s, n, a, r] = this.#An,
      o = new Float64Array((this.#Rn?.length ?? 0) + 2);
    for (let t = 0, e = o.length - 2; t < e; t += 2)
      ((o[t] = (this.#Rn[t] - s) / a), (o[t + 1] = (this.#Rn[t + 1] - n) / r));
    if (
      ((o[o.length - 2] = (this.#En - s) / a),
      (o[o.length - 1] = (this.#Sn - n) / r),
      isNaN(i[6]) && !this.isEmpty())
    )
      return this.#zn(o);
    const h = new Float64Array(this.#xn.length + 24 + this.#yn.length);
    let l = t.length;
    for (let e = 0; e < l; e += 2)
      isNaN(t[e])
        ? (h[e] = h[e + 1] = NaN)
        : ((h[e] = t[e]), (h[e + 1] = t[e + 1]));
    l = this.#Hn(h, l);
    for (let t = e.length - 6; t >= 6; t -= 6)
      for (let i = 0; i < 6; i += 2)
        isNaN(e[t + i])
          ? ((h[l] = h[l + 1] = NaN), (l += 2))
          : ((h[l] = e[t + i]), (h[l + 1] = e[t + i + 1]), (l += 2));
    return (
      this.#Un(h, l),
      this.newFreeDrawOutline(h, o, this.#An, this.#kn, this.#wn, this.#_n)
    );
  }
  #zn(t) {
    const e = this.#Cn,
      [i, s, n, a] = this.#An,
      [r, o, h, l] = this.#Fn(),
      c = new Float64Array(36);
    return (
      c.set(
        [
          NaN,
          NaN,
          NaN,
          NaN,
          (e[2] - i) / n,
          (e[3] - s) / a,
          NaN,
          NaN,
          NaN,
          NaN,
          (e[4] - i) / n,
          (e[5] - s) / a,
          NaN,
          NaN,
          NaN,
          NaN,
          r,
          o,
          NaN,
          NaN,
          NaN,
          NaN,
          h,
          l,
          NaN,
          NaN,
          NaN,
          NaN,
          (e[16] - i) / n,
          (e[17] - s) / a,
          NaN,
          NaN,
          NaN,
          NaN,
          (e[14] - i) / n,
          (e[15] - s) / a,
        ],
        0,
      ),
      this.newFreeDrawOutline(c, t, this.#An, this.#kn, this.#wn, this.#_n)
    );
  }
  #Un(t, e) {
    const i = this.#yn;
    return (t.set([NaN, NaN, NaN, NaN, i[4], i[5]], e), e + 6);
  }
  #Hn(t, e) {
    const i = this.#Cn.subarray(4, 6),
      s = this.#Cn.subarray(16, 18),
      [n, a, r, o] = this.#An,
      [h, l, c, d] = this.#Fn();
    return (
      t.set(
        [
          NaN,
          NaN,
          NaN,
          NaN,
          (i[0] - n) / r,
          (i[1] - a) / o,
          NaN,
          NaN,
          NaN,
          NaN,
          h,
          l,
          NaN,
          NaN,
          NaN,
          NaN,
          c,
          d,
          NaN,
          NaN,
          NaN,
          NaN,
          (s[0] - n) / r,
          (s[1] - a) / o,
        ],
        e,
      ),
      e + 24
    );
  }
}
class Ta extends Ea {
  #An;
  #jn = null;
  #wn;
  #_n;
  #Rn;
  #kn;
  #$n;
  constructor(t, e, i, s, n, a) {
    (super(),
      (this.#$n = t),
      (this.#Rn = e),
      (this.#An = i),
      (this.#kn = s),
      (this.#wn = n),
      (this.#_n = a),
      this.#Gn(a));
    const { x: r, y: o, width: h, height: l } = this.#jn;
    for (let e = 0, i = t.length; e < i; e += 2)
      ((t[e] = (t[e] - r) / h), (t[e + 1] = (t[e + 1] - o) / l));
    for (let t = 0, i = e.length; t < i; t += 2)
      ((e[t] = (e[t] - r) / h), (e[t + 1] = (e[t + 1] - o) / l));
  }
  toSVGPath() {
    const t = [`M${this.#$n[4]} ${this.#$n[5]}`];
    for (let e = 6, i = this.#$n.length; e < i; e += 6)
      isNaN(this.#$n[e])
        ? t.push(`L${this.#$n[e + 4]} ${this.#$n[e + 5]}`)
        : t.push(
            `C${this.#$n[e]} ${this.#$n[e + 1]} ${this.#$n[e + 2]} ${this.#$n[e + 3]} ${this.#$n[e + 4]} ${this.#$n[e + 5]}`,
          );
    return (t.push("Z"), t.join(" "));
  }
  serialize([t, e, i, s], n) {
    const a = i - t,
      r = s - e;
    let o, h;
    switch (n) {
      case 0:
        ((o = this.#Vn(this.#$n, t, s, a, -r)),
          (h = this.#Vn(this.#Rn, t, s, a, -r)));
        break;
      case 90:
        ((o = this.#Wn(this.#$n, t, e, a, r)),
          (h = this.#Wn(this.#Rn, t, e, a, r)));
        break;
      case 180:
        ((o = this.#Vn(this.#$n, i, e, -a, r)),
          (h = this.#Vn(this.#Rn, i, e, -a, r)));
        break;
      case 270:
        ((o = this.#Wn(this.#$n, i, s, -a, -r)),
          (h = this.#Wn(this.#Rn, i, s, -a, -r)));
    }
    return { outline: Array.from(o), points: [Array.from(h)] };
  }
  #Vn(t, e, i, s, n) {
    const a = new Float64Array(t.length);
    for (let r = 0, o = t.length; r < o; r += 2)
      ((a[r] = e + t[r] * s), (a[r + 1] = i + t[r + 1] * n));
    return a;
  }
  #Wn(t, e, i, s, n) {
    const a = new Float64Array(t.length);
    for (let r = 0, o = t.length; r < o; r += 2)
      ((a[r] = e + t[r + 1] * s), (a[r + 1] = i + t[r] * n));
    return a;
  }
  #Gn(t) {
    const e = this.#$n;
    let i = e[4],
      s = e[5],
      n = i,
      a = s,
      r = i,
      o = s,
      h = i,
      l = s;
    const c = t ? Math.max : Math.min;
    for (let t = 6, d = e.length; t < d; t += 6) {
      if (isNaN(e[t]))
        ((n = Math.min(n, e[t + 4])),
          (a = Math.min(a, e[t + 5])),
          (r = Math.max(r, e[t + 4])),
          (o = Math.max(o, e[t + 5])),
          l < e[t + 5]
            ? ((h = e[t + 4]), (l = e[t + 5]))
            : l === e[t + 5] && (h = c(h, e[t + 4])));
      else {
        const d = je.bezierBoundingBox(i, s, ...e.slice(t, t + 6));
        ((n = Math.min(n, d[0])),
          (a = Math.min(a, d[1])),
          (r = Math.max(r, d[2])),
          (o = Math.max(o, d[3])),
          l < d[3] ? ((h = d[2]), (l = d[3])) : l === d[3] && (h = c(h, d[2])));
      }
      ((i = e[t + 4]), (s = e[t + 5]));
    }
    const d = n - this.#wn,
      u = a - this.#wn,
      p = r - n + 2 * this.#wn,
      g = o - a + 2 * this.#wn;
    this.#jn = { x: d, y: u, width: p, height: g, lastPoint: [h, l] };
  }
  get box() {
    return this.#jn;
  }
  newOutliner(t, e, i, s, n, a = 0) {
    return new Sa(t, e, i, s, n, a);
  }
  getNewOutline(t, e) {
    const { x: i, y: s, width: n, height: a } = this.#jn,
      [r, o, h, l] = this.#An,
      c = n * h,
      d = a * l,
      u = i * h + r,
      p = s * l + o,
      g = this.newOutliner(
        { x: this.#Rn[0] * c + u, y: this.#Rn[1] * d + p },
        this.#An,
        this.#kn,
        t,
        this.#_n,
        e ?? this.#wn,
      );
    for (let t = 2; t < this.#Rn.length; t += 2)
      g.add({ x: this.#Rn[t] * c + u, y: this.#Rn[t + 1] * d + p });
    return g.getOutlines();
  }
  get mustRemoveSelfIntersections() {
    return !0;
  }
}
class Ma {
  #An;
  #qn = [];
  #Yn = [];
  constructor(t, e = 0, i = 0, s = !0) {
    let n = 1 / 0,
      a = -1 / 0,
      r = 1 / 0,
      o = -1 / 0;
    const h = 10 ** -4;
    for (const { x: i, y: s, width: l, height: c } of t) {
      const t = Math.floor((i - e) / h) * h,
        d = Math.ceil((i + l + e) / h) * h,
        u = Math.floor((s - e) / h) * h,
        p = Math.ceil((s + c + e) / h) * h,
        g = [t, u, p, !0],
        f = [d, u, p, !1];
      (this.#qn.push(g, f),
        (n = Math.min(n, t)),
        (a = Math.max(a, d)),
        (r = Math.min(r, u)),
        (o = Math.max(o, p)));
    }
    const l = a - n + 2 * i,
      c = o - r + 2 * i,
      d = n - i,
      u = r - i,
      p = this.#qn.at(s ? -1 : -2),
      g = [p[0], p[2]];
    for (const t of this.#qn) {
      const [e, i, s] = t;
      ((t[0] = (e - d) / l), (t[1] = (i - u) / c), (t[2] = (s - u) / c));
    }
    this.#An = { x: d, y: u, width: l, height: c, lastPoint: g };
  }
  getOutlines() {
    this.#qn.sort((t, e) => t[0] - e[0] || t[1] - e[1] || t[2] - e[2]);
    const t = [];
    for (const e of this.#qn)
      e[3]
        ? (t.push(...this.#Xn(e)), this.#Kn(e))
        : (this.#Qn(e), t.push(...this.#Xn(e)));
    return this.#Jn(t);
  }
  #Jn(t) {
    const e = [],
      i = new Set();
    for (const i of t) {
      const [t, s, n] = i;
      e.push([t, s, i], [t, n, i]);
    }
    e.sort((t, e) => t[1] - e[1] || t[0] - e[0]);
    for (let t = 0, s = e.length; t < s; t += 2) {
      const s = e[t][2],
        n = e[t + 1][2];
      (s.push(n), n.push(s), i.add(s), i.add(n));
    }
    const s = [];
    let n;
    for (; i.size > 0; ) {
      const t = i.values().next().value;
      let [e, a, r, o, h] = t;
      i.delete(t);
      let l = e,
        c = a;
      for (n = [e, r], s.push(n); ; ) {
        let t;
        if (i.has(o)) t = o;
        else {
          if (!i.has(h)) break;
          t = h;
        }
        (i.delete(t),
          ([e, a, r, o, h] = t),
          l !== e && (n.push(l, c, e, c === a ? a : r), (l = e)),
          (c = c === a ? r : a));
      }
      n.push(l, c);
    }
    return new ka(s, this.#An);
  }
  #Zn(t) {
    const e = this.#Yn;
    let i = 0,
      s = e.length - 1;
    for (; i <= s; ) {
      const n = (i + s) >> 1,
        a = e[n][0];
      if (a === t) return n;
      a < t ? (i = n + 1) : (s = n - 1);
    }
    return s + 1;
  }
  #Kn([, t, e]) {
    const i = this.#Zn(t);
    this.#Yn.splice(i, 0, [t, e]);
  }
  #Qn([, t, e]) {
    const i = this.#Zn(t);
    for (let s = i; s < this.#Yn.length; s++) {
      const [i, n] = this.#Yn[s];
      if (i !== t) break;
      if (i === t && n === e) return void this.#Yn.splice(s, 1);
    }
    for (let s = i - 1; s >= 0; s--) {
      const [i, n] = this.#Yn[s];
      if (i !== t) break;
      if (i === t && n === e) return void this.#Yn.splice(s, 1);
    }
  }
  #Xn(t) {
    const [e, i, s] = t,
      n = [[e, i, s]],
      a = this.#Zn(s);
    for (let t = 0; t < a; t++) {
      const [i, s] = this.#Yn[t];
      for (let t = 0, a = n.length; t < a; t++) {
        const [, r, o] = n[t];
        if (!(s <= r || o <= i))
          if (r >= i)
            if (o > s) n[t][1] = s;
            else {
              if (1 === a) return [];
              (n.splice(t, 1), t--, a--);
            }
          else ((n[t][2] = i), o > s && n.push([e, s, o]));
      }
    }
    return n;
  }
}
class ka extends Ea {
  #An;
  #ta;
  constructor(t, e) {
    (super(), (this.#ta = t), (this.#An = e));
  }
  toSVGPath() {
    const t = [];
    for (const e of this.#ta) {
      let [i, s] = e;
      t.push(`M${i} ${s}`);
      for (let n = 2; n < e.length; n += 2) {
        const a = e[n],
          r = e[n + 1];
        a === i
          ? (t.push(`V${r}`), (s = r))
          : r === s && (t.push(`H${a}`), (i = a));
      }
      t.push("Z");
    }
    return t.join(" ");
  }
  serialize([t, e, i, s], n) {
    const a = [],
      r = i - t,
      o = s - e;
    for (const e of this.#ta) {
      const i = new Array(e.length);
      for (let n = 0; n < e.length; n += 2)
        ((i[n] = t + e[n] * r), (i[n + 1] = s - e[n + 1] * o));
      a.push(i);
    }
    return a;
  }
  get box() {
    return this.#An;
  }
  get classNamesForDrawing() {
    return ["highlight"];
  }
  get classNamesForOutlining() {
    return ["highlightOutline"];
  }
}
class Pa extends Sa {
  newFreeDrawOutline(t, e, i, s, n, a) {
    return new Ra(t, e, i, s, n, a);
  }
  get classNamesForDrawing() {
    return ["highlight", "free"];
  }
}
class Ra extends Ta {
  get classNamesForDrawing() {
    return ["highlight", "free"];
  }
  get classNamesForOutlining() {
    return ["highlightOutline", "free"];
  }
  newOutliner(t, e, i, s, n, a = 0) {
    return new Pa(t, e, i, s, n, a);
  }
}
class Ia {
  #ea = null;
  #ia = null;
  #sa;
  #na = null;
  #aa = !1;
  #ra = !1;
  #a = null;
  #oa;
  #ha = null;
  #f = null;
  #la;
  static #ca = null;
  static get _keyboardManager() {
    return Me(
      this,
      "_keyboardManager",
      new Mi([
        [["Escape", "mac+Escape"], Ia.prototype._hideDropdownFromKeyboard],
        [[" ", "mac+ "], Ia.prototype._colorSelectFromKeyboard],
        [
          ["ArrowDown", "ArrowRight", "mac+ArrowDown", "mac+ArrowRight"],
          Ia.prototype._moveToNext,
        ],
        [
          ["ArrowUp", "ArrowLeft", "mac+ArrowUp", "mac+ArrowLeft"],
          Ia.prototype._moveToPrevious,
        ],
        [["Home", "mac+Home"], Ia.prototype._moveToBeginning],
        [["End", "mac+End"], Ia.prototype._moveToEnd],
      ]),
    );
  }
  constructor({ editor: t = null, uiManager: e = null }) {
    (t
      ? ((this.#ra = !1), (this.#la = zt.HIGHLIGHT_COLOR), (this.#a = t))
      : ((this.#ra = !0), (this.#la = zt.HIGHLIGHT_DEFAULT_COLOR)),
      (this.#f = t?._uiManager || e),
      (this.#oa = this.#f._eventBus),
      (this.#sa =
        t?.color ||
        this.#f?.highlightColors.values().next().value ||
        "#FFFF98"),
      (Ia.#ca ||= Object.freeze({
        blue: "pdfjs-editor-colorpicker-blue",
        green: "pdfjs-editor-colorpicker-green",
        pink: "pdfjs-editor-colorpicker-pink",
        red: "pdfjs-editor-colorpicker-red",
        yellow: "pdfjs-editor-colorpicker-yellow",
      })));
  }
  renderButton() {
    const t = (this.#ea = document.createElement("button"));
    ((t.className = "colorPicker"),
      (t.tabIndex = "0"),
      t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-button"),
      t.setAttribute("aria-haspopup", !0));
    const e = this.#f._signal;
    (t.addEventListener("click", this.#da.bind(this), { signal: e }),
      t.addEventListener("keydown", this.#Cs.bind(this), { signal: e }));
    const i = (this.#ia = document.createElement("span"));
    return (
      (i.className = "swatch"),
      i.setAttribute("aria-hidden", !0),
      (i.style.backgroundColor = this.#sa),
      t.append(i),
      t
    );
  }
  renderMainDropdown() {
    const t = (this.#na = this.#ua());
    return (
      t.setAttribute("aria-orientation", "horizontal"),
      t.setAttribute("aria-labelledby", "highlightColorPickerLabel"),
      t
    );
  }
  #ua() {
    const t = document.createElement("div"),
      e = this.#f._signal;
    (t.addEventListener("contextmenu", pi, { signal: e }),
      (t.className = "dropdown"),
      (t.role = "listbox"),
      t.setAttribute("aria-multiselectable", !1),
      t.setAttribute("aria-orientation", "vertical"),
      t.setAttribute("data-l10n-id", "pdfjs-editor-colorpicker-dropdown"));
    for (const [i, s] of this.#f.highlightColors) {
      const n = document.createElement("button");
      ((n.tabIndex = "0"),
        (n.role = "option"),
        n.setAttribute("data-color", s),
        (n.title = i),
        n.setAttribute("data-l10n-id", Ia.#ca[i]));
      const a = document.createElement("span");
      (n.append(a),
        (a.className = "swatch"),
        (a.style.backgroundColor = s),
        n.setAttribute("aria-selected", s === this.#sa),
        n.addEventListener("click", this.#pa.bind(this, s), { signal: e }),
        t.append(n));
    }
    return (
      t.addEventListener("keydown", this.#Cs.bind(this), { signal: e }),
      t
    );
  }
  #pa(t, e) {
    (e.stopPropagation(),
      this.#oa.dispatch("switchannotationeditorparams", {
        source: this,
        type: this.#la,
        value: t,
      }));
  }
  _colorSelectFromKeyboard(t) {
    if (t.target === this.#ea) return void this.#da(t);
    const e = t.target.getAttribute("data-color");
    e && this.#pa(e, t);
  }
  _moveToNext(t) {
    this.#ga
      ? t.target !== this.#ea
        ? t.target.nextSibling?.focus()
        : this.#na.firstChild?.focus()
      : this.#da(t);
  }
  _moveToPrevious(t) {
    t.target !== this.#na?.firstChild && t.target !== this.#ea
      ? (this.#ga || this.#da(t), t.target.previousSibling?.focus())
      : this.#ga && this._hideDropdownFromKeyboard();
  }
  _moveToBeginning(t) {
    this.#ga ? this.#na.firstChild?.focus() : this.#da(t);
  }
  _moveToEnd(t) {
    this.#ga ? this.#na.lastChild?.focus() : this.#da(t);
  }
  #Cs(t) {
    Ia._keyboardManager.exec(this, t);
  }
  #da(t) {
    if (this.#ga) return void this.hideDropdown();
    if (
      ((this.#aa = 0 === t.detail),
      this.#ha ||
        ((this.#ha = new AbortController()),
        window.addEventListener("pointerdown", this.#l.bind(this), {
          signal: this.#f.combinedSignal(this.#ha),
        })),
      this.#na)
    )
      return void this.#na.classList.remove("hidden");
    const e = (this.#na = this.#ua());
    this.#ea.append(e);
  }
  #l(t) {
    this.#na?.contains(t.target) || this.hideDropdown();
  }
  hideDropdown() {
    (this.#na?.classList.add("hidden"), this.#ha?.abort(), (this.#ha = null));
  }
  get #ga() {
    return this.#na && !this.#na.classList.contains("hidden");
  }
  _hideDropdownFromKeyboard() {
    this.#ra ||
      (this.#ga
        ? (this.hideDropdown(),
          this.#ea.focus({ preventScroll: !0, focusVisible: this.#aa }))
        : this.#a?.unselect());
  }
  updateColor(t) {
    if ((this.#ia && (this.#ia.style.backgroundColor = t), !this.#na)) return;
    const e = this.#f.highlightColors.values();
    for (const i of this.#na.children)
      i.setAttribute("aria-selected", e.next().value === t);
  }
  destroy() {
    (this.#ea?.remove(),
      (this.#ea = null),
      (this.#ia = null),
      this.#na?.remove(),
      (this.#na = null));
  }
}
class Da extends Ii {
  #fa = null;
  #ma = 0;
  #ba;
  #va = null;
  #n = null;
  #Aa = null;
  #ya = null;
  #wa = 0;
  #_a = null;
  #xa = null;
  #A = null;
  #Ca = !1;
  #Ea = null;
  #Sa;
  #Ta = null;
  #Ma = "";
  #Pn;
  #ka = "";
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 12;
  static _type = "highlight";
  static _editorType = Bt.HIGHLIGHT;
  static _freeHighlightId = -1;
  static _freeHighlight = null;
  static _freeHighlightClipId = "";
  static get _keyboardManager() {
    const t = Da.prototype;
    return Me(
      this,
      "_keyboardManager",
      new Mi([
        [["ArrowLeft", "mac+ArrowLeft"], t._moveCaret, { args: [0] }],
        [["ArrowRight", "mac+ArrowRight"], t._moveCaret, { args: [1] }],
        [["ArrowUp", "mac+ArrowUp"], t._moveCaret, { args: [2] }],
        [["ArrowDown", "mac+ArrowDown"], t._moveCaret, { args: [3] }],
      ]),
    );
  }
  constructor(t) {
    (super({ ...t, name: "highlightEditor" }),
      (this.color = t.color || Da._defaultColor),
      (this.#Pn = t.thickness || Da._defaultThickness),
      (this.#Sa = t.opacity || Da._defaultOpacity),
      (this.#ba = t.boxes || null),
      (this.#ka = t.methodOfCreation || ""),
      (this.#Ma = t.text || ""),
      (this._isDraggable = !1),
      t.highlightId > -1
        ? ((this.#Ca = !0), this.#Pa(t), this.#Ra())
        : this.#ba &&
          ((this.#fa = t.anchorNode),
          (this.#ma = t.anchorOffset),
          (this.#ya = t.focusNode),
          (this.#wa = t.focusOffset),
          this.#Ia(),
          this.#Ra(),
          this.rotate(this.rotation)));
  }
  get telemetryInitialData() {
    return {
      action: "added",
      type: this.#Ca ? "free_highlight" : "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
      thickness: this.#Pn,
      methodOfCreation: this.#ka,
    };
  }
  get telemetryFinalData() {
    return {
      type: "highlight",
      color: this._uiManager.highlightColorNames.get(this.color),
    };
  }
  static computeTelemetryFinalData(t) {
    return { numberOfColors: t.get("color").size };
  }
  #Ia() {
    const t = new Ma(this.#ba, 0.001);
    ((this.#xa = t.getOutlines()),
      ({
        x: this.x,
        y: this.y,
        width: this.width,
        height: this.height,
      } = this.#xa.box));
    const e = new Ma(
      this.#ba,
      0.0025,
      0.001,
      "ltr" === this._uiManager.direction,
    );
    this.#Aa = e.getOutlines();
    const { lastPoint: i } = this.#Aa.box;
    this.#Ea = [(i[0] - this.x) / this.width, (i[1] - this.y) / this.height];
  }
  #Pa({ highlightOutlines: t, highlightId: e, clipPathId: i }) {
    this.#xa = t;
    if (((this.#Aa = t.getNewOutline(this.#Pn / 2 + 1.5, 0.0025)), e >= 0))
      ((this.#A = e),
        (this.#va = i),
        this.parent.drawLayer.finalizeLine(e, t),
        (this.#Ta = this.parent.drawLayer.drawOutline(this.#Aa)));
    else if (this.parent) {
      const e = this.parent.viewport.rotation;
      (this.parent.drawLayer.updateLine(this.#A, t),
        this.parent.drawLayer.updateBox(
          this.#A,
          Da.#Da(this.#xa.box, (e - this.rotation + 360) % 360),
        ),
        this.parent.drawLayer.updateLine(this.#Ta, this.#Aa),
        this.parent.drawLayer.updateBox(this.#Ta, Da.#Da(this.#Aa.box, e)));
    }
    const { x: s, y: n, width: a, height: r } = t.box;
    switch (this.rotation) {
      case 0:
        ((this.x = s), (this.y = n), (this.width = a), (this.height = r));
        break;
      case 90: {
        const [t, e] = this.parentDimensions;
        ((this.x = n),
          (this.y = 1 - s),
          (this.width = (a * e) / t),
          (this.height = (r * t) / e));
        break;
      }
      case 180:
        ((this.x = 1 - s),
          (this.y = 1 - n),
          (this.width = a),
          (this.height = r));
        break;
      case 270: {
        const [t, e] = this.parentDimensions;
        ((this.x = 1 - n),
          (this.y = s),
          (this.width = (a * e) / t),
          (this.height = (r * t) / e));
        break;
      }
    }
    const { lastPoint: o } = this.#Aa.box;
    this.#Ea = [(o[0] - s) / a, (o[1] - n) / r];
  }
  static initialize(t, e) {
    (Ii.initialize(t, e),
      (Da._defaultColor ||=
        e.highlightColors?.values().next().value || "#fff066"));
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case zt.HIGHLIGHT_DEFAULT_COLOR:
        Da._defaultColor = e;
        break;
      case zt.HIGHLIGHT_THICKNESS:
        Da._defaultThickness = e;
    }
  }
  translateInPage(t, e) {}
  get toolbarPosition() {
    return this.#Ea;
  }
  updateParams(t, e) {
    switch (t) {
      case zt.HIGHLIGHT_COLOR:
        this.#dn(e);
        break;
      case zt.HIGHLIGHT_THICKNESS:
        this.#La(e);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [
      [zt.HIGHLIGHT_DEFAULT_COLOR, Da._defaultColor],
      [zt.HIGHLIGHT_THICKNESS, Da._defaultThickness],
    ];
  }
  get propertiesToUpdate() {
    return [
      [zt.HIGHLIGHT_COLOR, this.color || Da._defaultColor],
      [zt.HIGHLIGHT_THICKNESS, this.#Pn || Da._defaultThickness],
      [zt.HIGHLIGHT_FREE, this.#Ca],
    ];
  }
  #dn(t) {
    const e = (t, e) => {
        ((this.color = t),
          this.parent?.drawLayer.changeColor(this.#A, t),
          this.#n?.updateColor(t),
          (this.#Sa = e),
          this.parent?.drawLayer.changeOpacity(this.#A, e));
      },
      i = this.color,
      s = this.#Sa;
    (this.addCommands({
      cmd: e.bind(this, t, Da._defaultOpacity),
      undo: e.bind(this, i, s),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.HIGHLIGHT_COLOR,
      overwriteIfSameType: !0,
      keepUndo: !0,
    }),
      this._reportTelemetry(
        {
          action: "color_changed",
          color: this._uiManager.highlightColorNames.get(t),
        },
        !0,
      ));
  }
  #La(t) {
    const e = this.#Pn,
      i = (t) => {
        ((this.#Pn = t), this.#Fa(t));
      };
    (this.addCommands({
      cmd: i.bind(this, t),
      undo: i.bind(this, e),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.INK_THICKNESS,
      overwriteIfSameType: !0,
      keepUndo: !0,
    }),
      this._reportTelemetry({ action: "thickness_changed", thickness: t }, !0));
  }
  async addEditToolbar() {
    const t = await super.addEditToolbar();
    return t
      ? (this._uiManager.highlightColors &&
          ((this.#n = new Ia({ editor: this })), t.addColorPicker(this.#n)),
        t)
      : null;
  }
  disableEditing() {
    (super.disableEditing(), this.div.classList.toggle("disabled", !0));
  }
  enableEditing() {
    (super.enableEditing(), this.div.classList.toggle("disabled", !1));
  }
  fixAndSetPosition() {
    return super.fixAndSetPosition(this.#Na());
  }
  getBaseTranslation() {
    return [0, 0];
  }
  getRect(t, e) {
    return super.getRect(t, e, this.#Na());
  }
  onceAdded() {
    (this.annotationElementId || this.parent.addUndoableEditor(this),
      this.div.focus());
  }
  remove() {
    (this.#Oa(), this._reportTelemetry({ action: "deleted" }), super.remove());
  }
  rebuild() {
    this.parent &&
      (super.rebuild(),
      null !== this.div &&
        (this.#Ra(), this.isAttachedToDOM || this.parent.add(this)));
  }
  setParent(t) {
    let e = !1;
    (this.parent && !t
      ? this.#Oa()
      : t &&
        (this.#Ra(t),
        (e = !this.parent && this.div?.classList.contains("selectedEditor"))),
      super.setParent(t),
      this.show(this._isVisible),
      e && this.select());
  }
  #Fa(t) {
    if (!this.#Ca) return;
    (this.#Pa({ highlightOutlines: this.#xa.getNewOutline(t / 2) }),
      this.fixAndSetPosition());
    const [e, i] = this.parentDimensions;
    this.setDims(this.width * e, this.height * i);
  }
  #Oa() {
    null !== this.#A &&
      this.parent &&
      (this.parent.drawLayer.remove(this.#A),
      (this.#A = null),
      this.parent.drawLayer.remove(this.#Ta),
      (this.#Ta = null));
  }
  #Ra(t = this.parent) {
    null === this.#A &&
      (({ id: this.#A, clipPathId: this.#va } = t.drawLayer.draw(
        this.#xa,
        this.color,
        this.#Sa,
      )),
      (this.#Ta = t.drawLayer.drawOutline(this.#Aa)),
      this.#_a && (this.#_a.style.clipPath = this.#va));
  }
  static #Da({ x: t, y: e, width: i, height: s }, n) {
    switch (n) {
      case 90:
        return { x: 1 - e - s, y: t, width: s, height: i };
      case 180:
        return { x: 1 - t - i, y: 1 - e - s, width: i, height: s };
      case 270:
        return { x: e, y: 1 - t - i, width: s, height: i };
    }
    return { x: t, y: e, width: i, height: s };
  }
  rotate(t) {
    const { drawLayer: e } = this.parent;
    let i;
    (this.#Ca
      ? ((t = (t - this.rotation + 360) % 360), (i = Da.#Da(this.#xa.box, t)))
      : (i = Da.#Da(this, t)),
      e.rotate(this.#A, t),
      e.rotate(this.#Ta, t),
      e.updateBox(this.#A, i),
      e.updateBox(this.#Ta, Da.#Da(this.#Aa.box, t)));
  }
  render() {
    if (this.div) return this.div;
    const t = super.render();
    (this.#Ma &&
      (t.setAttribute("aria-label", this.#Ma), t.setAttribute("role", "mark")),
      this.#Ca
        ? t.classList.add("free")
        : this.div.addEventListener("keydown", this.#Ba.bind(this), {
            signal: this._uiManager._signal,
          }));
    const e = (this.#_a = document.createElement("div"));
    (t.append(e),
      e.setAttribute("aria-hidden", "true"),
      (e.className = "internal"),
      (e.style.clipPath = this.#va));
    const [i, s] = this.parentDimensions;
    return (
      this.setDims(this.width * i, this.height * s),
      Ci(this, this.#_a, ["pointerover", "pointerleave"]),
      this.enableEditing(),
      t
    );
  }
  pointerover() {
    this.isSelected || this.parent.drawLayer.addClass(this.#Ta, "hovered");
  }
  pointerleave() {
    this.isSelected || this.parent.drawLayer.removeClass(this.#Ta, "hovered");
  }
  #Ba(t) {
    Da._keyboardManager.exec(this, t);
  }
  _moveCaret(t) {
    switch ((this.parent.unselect(this), t)) {
      case 0:
      case 2:
        this.#za(!0);
        break;
      case 1:
      case 3:
        this.#za(!1);
    }
  }
  #za(t) {
    if (!this.#fa) return;
    const e = window.getSelection();
    t ? e.setPosition(this.#fa, this.#ma) : e.setPosition(this.#ya, this.#wa);
  }
  select() {
    (super.select(),
      this.#Ta &&
        (this.parent?.drawLayer.removeClass(this.#Ta, "hovered"),
        this.parent?.drawLayer.addClass(this.#Ta, "selected")));
  }
  unselect() {
    (super.unselect(),
      this.#Ta &&
        (this.parent?.drawLayer.removeClass(this.#Ta, "selected"),
        this.#Ca || this.#za(!1)));
  }
  get _mustFixPosition() {
    return !this.#Ca;
  }
  show(t = this._isVisible) {
    (super.show(t),
      this.parent &&
        (this.parent.drawLayer.show(this.#A, t),
        this.parent.drawLayer.show(this.#Ta, t)));
  }
  #Na() {
    return this.#Ca ? this.rotation : 0;
  }
  #Ha() {
    if (this.#Ca) return null;
    const [t, e] = this.pageDimensions,
      [i, s] = this.pageTranslation,
      n = this.#ba,
      a = new Float32Array(8 * n.length);
    let r = 0;
    for (const { x: o, y: h, width: l, height: c } of n) {
      const n = o * t + i,
        d = (1 - h - c) * e + s;
      ((a[r] = a[r + 4] = n),
        (a[r + 1] = a[r + 3] = d),
        (a[r + 2] = a[r + 6] = n + l * t),
        (a[r + 5] = a[r + 7] = d + c * e),
        (r += 8));
    }
    return a;
  }
  #Ua(t) {
    return this.#xa.serialize(t, this.#Na());
  }
  static startHighlighting(t, e, { target: i, x: s, y: n }) {
    const { x: a, y: r, width: o, height: h } = i.getBoundingClientRect(),
      l = new AbortController(),
      c = t.combinedSignal(l),
      d = (e) => {
        (l.abort(), this.#ja(t, e));
      };
    (window.addEventListener("blur", d, { signal: c }),
      window.addEventListener("pointerup", d, { signal: c }),
      window.addEventListener(
        "pointerdown",
        (t) => {
          (t.preventDefault(), t.stopPropagation());
        },
        { capture: !0, passive: !1, signal: c },
      ),
      window.addEventListener("contextmenu", pi, { signal: c }),
      i.addEventListener("pointermove", this.#$a.bind(this, t), { signal: c }),
      (this._freeHighlight = new Pa(
        { x: s, y: n },
        [a, r, o, h],
        t.scale,
        this._defaultThickness / 2,
        e,
        0.001,
      )),
      ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } =
        t.drawLayer.draw(
          this._freeHighlight,
          this._defaultColor,
          this._defaultOpacity,
          !0,
        )));
  }
  static #$a(t, e) {
    this._freeHighlight.add(e) &&
      t.drawLayer.updatePath(this._freeHighlightId, this._freeHighlight);
  }
  static #ja(t, e) {
    (this._freeHighlight.isEmpty()
      ? t.drawLayer.remove(this._freeHighlightId)
      : t.createAndAddNewEditor(e, !1, {
          highlightId: this._freeHighlightId,
          highlightOutlines: this._freeHighlight.getOutlines(),
          clipPathId: this._freeHighlightClipId,
          methodOfCreation: "main_toolbar",
        }),
      (this._freeHighlightId = -1),
      (this._freeHighlight = null),
      (this._freeHighlightClipId = ""));
  }
  static async deserialize(t, e, i) {
    let s = null;
    if (t instanceof ma) {
      const {
        data: {
          quadPoints: e,
          rect: i,
          rotation: n,
          id: a,
          color: r,
          opacity: o,
          popupRef: h,
        },
        parent: {
          page: { pageNumber: l },
        },
      } = t;
      s = t = {
        annotationType: Bt.HIGHLIGHT,
        color: Array.from(r),
        opacity: o,
        quadPoints: e,
        boxes: null,
        pageIndex: l - 1,
        rect: i.slice(0),
        rotation: n,
        id: a,
        deleted: !1,
        popupRef: h,
      };
    } else if (t instanceof fa) {
      const {
        data: {
          inkLists: e,
          rect: i,
          rotation: n,
          id: a,
          color: r,
          borderStyle: { rawWidth: o },
          popupRef: h,
        },
        parent: {
          page: { pageNumber: l },
        },
      } = t;
      s = t = {
        annotationType: Bt.HIGHLIGHT,
        color: Array.from(r),
        thickness: o,
        inkLists: e,
        boxes: null,
        pageIndex: l - 1,
        rect: i.slice(0),
        rotation: n,
        id: a,
        deleted: !1,
        popupRef: h,
      };
    }
    const { color: n, quadPoints: a, inkLists: r, opacity: o } = t,
      h = await super.deserialize(t, e, i);
    ((h.color = je.makeHexColor(...n)),
      (h.#Sa = o || 1),
      r && (h.#Pn = t.thickness),
      (h.annotationElementId = t.id || null),
      (h._initialData = s));
    const [l, c] = h.pageDimensions,
      [d, u] = h.pageTranslation;
    if (a) {
      const t = (h.#ba = []);
      for (let e = 0; e < a.length; e += 8)
        t.push({
          x: (a[e] - d) / l,
          y: 1 - (a[e + 1] - u) / c,
          width: (a[e + 2] - a[e]) / l,
          height: (a[e + 1] - a[e + 5]) / c,
        });
      (h.#Ia(), h.#Ra(), h.rotate(h.rotation));
    } else if (r) {
      h.#Ca = !0;
      const t = r[0],
        i = { x: t[0] - d, y: c - (t[1] - u) },
        s = new Pa(i, [0, 0, l, c], 1, h.#Pn / 2, !0, 0.001);
      for (let e = 0, n = t.length; e < n; e += 2)
        ((i.x = t[e] - d), (i.y = c - (t[e + 1] - u)), s.add(i));
      const { id: n, clipPathId: a } = e.drawLayer.draw(
        s,
        h.color,
        h._defaultOpacity,
        !0,
      );
      (h.#Pa({
        highlightOutlines: s.getOutlines(),
        highlightId: n,
        clipPathId: a,
      }),
        h.#Ra());
    }
    return h;
  }
  serialize(t = !1) {
    if (this.isEmpty() || t) return null;
    if (this.deleted) return this.serializeDeleted();
    const e = this.getRect(0, 0),
      i = Ii._colorManager.convert(this.color),
      s = {
        annotationType: Bt.HIGHLIGHT,
        color: i,
        opacity: this.#Sa,
        thickness: this.#Pn,
        quadPoints: this.#Ha(),
        outlines: this.#Ua(e),
        pageIndex: this.pageIndex,
        rect: e,
        rotation: this.#Na(),
        structTreeParentId: this._structTreeParentId,
      };
    return this.annotationElementId && !this.#vn(s)
      ? null
      : ((s.id = this.annotationElementId), s);
  }
  #vn(t) {
    const { color: e } = this._initialData;
    return t.color.some((t, i) => t !== e[i]);
  }
  renderAnnotationElement(t) {
    return (t.updateEdited({ rect: this.getRect(0, 0) }), null);
  }
  static canCreateNewEmptyEditor() {
    return !1;
  }
}
class La extends Ii {
  #Ga = 0;
  #Va = 0;
  #Wa = null;
  #qa = new Path2D();
  #Ya = !1;
  #Xa = null;
  #Ka = !1;
  #Qa = !1;
  #Ja = null;
  #Za = null;
  #tr = 0;
  #er = 0;
  #ir = null;
  static _defaultColor = null;
  static _defaultOpacity = 1;
  static _defaultThickness = 1;
  static _type = "ink";
  static _editorType = Bt.INK;
  constructor(t) {
    (super({ ...t, name: "inkEditor" }),
      (this.color = t.color || null),
      (this.thickness = t.thickness || null),
      (this.opacity = t.opacity || null),
      (this.paths = []),
      (this.bezierPath2D = []),
      (this.allRawPaths = []),
      (this.currentPath = []),
      (this.scaleFactor = 1),
      (this.translationX = this.translationY = 0),
      (this.x = 0),
      (this.y = 0),
      (this._willKeepAspectRatio = !0));
  }
  static initialize(t, e) {
    Ii.initialize(t, e);
  }
  static updateDefaultParams(t, e) {
    switch (t) {
      case zt.INK_THICKNESS:
        La._defaultThickness = e;
        break;
      case zt.INK_COLOR:
        La._defaultColor = e;
        break;
      case zt.INK_OPACITY:
        La._defaultOpacity = e / 100;
    }
  }
  updateParams(t, e) {
    switch (t) {
      case zt.INK_THICKNESS:
        this.#La(e);
        break;
      case zt.INK_COLOR:
        this.#dn(e);
        break;
      case zt.INK_OPACITY:
        this.#sr(e);
    }
  }
  static get defaultPropertiesToUpdate() {
    return [
      [zt.INK_THICKNESS, La._defaultThickness],
      [zt.INK_COLOR, La._defaultColor || Ii._defaultLineColor],
      [zt.INK_OPACITY, Math.round(100 * La._defaultOpacity)],
    ];
  }
  get propertiesToUpdate() {
    return [
      [zt.INK_THICKNESS, this.thickness || La._defaultThickness],
      [zt.INK_COLOR, this.color || La._defaultColor || Ii._defaultLineColor],
      [zt.INK_OPACITY, Math.round(100 * (this.opacity ?? La._defaultOpacity))],
    ];
  }
  #La(t) {
    const e = (t) => {
        ((this.thickness = t), this.#nr());
      },
      i = this.thickness;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.INK_THICKNESS,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }
  #dn(t) {
    const e = (t) => {
        ((this.color = t), this.#ar());
      },
      i = this.color;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.INK_COLOR,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }
  #sr(t) {
    const e = (t) => {
      ((this.opacity = t), this.#ar());
    };
    t /= 100;
    const i = this.opacity;
    this.addCommands({
      cmd: e.bind(this, t),
      undo: e.bind(this, i),
      post: this._uiManager.updateUI.bind(this._uiManager, this),
      mustExec: !0,
      type: zt.INK_OPACITY,
      overwriteIfSameType: !0,
      keepUndo: !0,
    });
  }
  rebuild() {
    this.parent &&
      (super.rebuild(),
      null !== this.div &&
        (this.canvas || (this.#rr(), this.#or()),
        this.isAttachedToDOM || (this.parent.add(this), this.#hr()),
        this.#nr()));
  }
  remove() {
    null !== this.canvas &&
      (this.isEmpty() || this.commit(),
      (this.canvas.width = this.canvas.height = 0),
      this.canvas.remove(),
      (this.canvas = null),
      this.#Wa && (clearTimeout(this.#Wa), (this.#Wa = null)),
      this.#Ja?.disconnect(),
      (this.#Ja = null),
      super.remove());
  }
  setParent(t) {
    (!this.parent && t
      ? this._uiManager.removeShouldRescale(this)
      : this.parent && null === t && this._uiManager.addShouldRescale(this),
      super.setParent(t));
  }
  onScaleChanging() {
    const [t, e] = this.parentDimensions,
      i = this.width * t,
      s = this.height * e;
    this.setDimensions(i, s);
  }
  enableEditMode() {
    this.#Ya ||
      null === this.canvas ||
      (super.enableEditMode(), (this._isDraggable = !1), this.#lr());
  }
  disableEditMode() {
    this.isInEditMode() &&
      null !== this.canvas &&
      (super.disableEditMode(),
      (this._isDraggable = !this.isEmpty()),
      this.div.classList.remove("editing"),
      this.#cr());
  }
  onceAdded() {
    this._isDraggable = !this.isEmpty();
  }
  isEmpty() {
    return (
      0 === this.paths.length ||
      (1 === this.paths.length && 0 === this.paths[0].length)
    );
  }
  #dr() {
    const {
      parentRotation: t,
      parentDimensions: [e, i],
    } = this;
    switch (t) {
      case 90:
        return [0, i, i, e];
      case 180:
        return [e, i, e, i];
      case 270:
        return [e, 0, i, e];
      default:
        return [0, 0, e, i];
    }
  }
  #ur() {
    const {
      ctx: t,
      color: e,
      opacity: i,
      thickness: s,
      parentScale: n,
      scaleFactor: a,
    } = this;
    ((t.lineWidth = (s * n) / a),
      (t.lineCap = "round"),
      (t.lineJoin = "round"),
      (t.miterLimit = 10),
      (t.strokeStyle = `${e}${(function (t) {
        return Math.round(Math.min(255, Math.max(1, 255 * t)))
          .toString(16)
          .padStart(2, "0");
      })(i)}`));
  }
  #pr(t, e) {
    (this.canvas.addEventListener("contextmenu", pi, {
      signal: this._uiManager._signal,
    }),
      this.#cr(),
      (this.#Xa = new AbortController()));
    const i = this._uiManager.combinedSignal(this.#Xa);
    (this.canvas.addEventListener(
      "pointerleave",
      this.canvasPointerleave.bind(this),
      { signal: i },
    ),
      this.canvas.addEventListener(
        "pointermove",
        this.canvasPointermove.bind(this),
        { signal: i },
      ),
      this.canvas.addEventListener(
        "pointerup",
        this.canvasPointerup.bind(this),
        { signal: i },
      ),
      (this.isEditing = !0),
      this.#Qa ||
        ((this.#Qa = !0),
        this.#hr(),
        (this.thickness ||= La._defaultThickness),
        (this.color ||= La._defaultColor || Ii._defaultLineColor),
        (this.opacity ??= La._defaultOpacity)),
      this.currentPath.push([t, e]),
      (this.#Ka = !1),
      this.#ur(),
      (this.#ir = () => {
        (this.#gr(), this.#ir && window.requestAnimationFrame(this.#ir));
      }),
      window.requestAnimationFrame(this.#ir));
  }
  #fr(t, e) {
    const [i, s] = this.currentPath.at(-1);
    if (this.currentPath.length > 1 && t === i && e === s) return;
    const n = this.currentPath;
    let a = this.#qa;
    if ((n.push([t, e]), (this.#Ka = !0), n.length <= 2))
      return (a.moveTo(...n[0]), void a.lineTo(t, e));
    (3 === n.length && ((this.#qa = a = new Path2D()), a.moveTo(...n[0])),
      this.#mr(a, ...n.at(-3), ...n.at(-2), t, e));
  }
  #br() {
    if (0 === this.currentPath.length) return;
    const t = this.currentPath.at(-1);
    this.#qa.lineTo(...t);
  }
  #vr(t, e) {
    let i;
    if (
      ((this.#ir = null),
      (t = Math.min(Math.max(t, 0), this.canvas.width)),
      (e = Math.min(Math.max(e, 0), this.canvas.height)),
      this.#fr(t, e),
      this.#br(),
      1 !== this.currentPath.length)
    )
      i = this.#Ar();
    else {
      const s = [t, e];
      i = [[s, s.slice(), s.slice(), s]];
    }
    const s = this.#qa,
      n = this.currentPath;
    ((this.currentPath = []), (this.#qa = new Path2D()));
    this.addCommands({
      cmd: () => {
        (this.allRawPaths.push(n),
          this.paths.push(i),
          this.bezierPath2D.push(s),
          this._uiManager.rebuild(this));
      },
      undo: () => {
        (this.allRawPaths.pop(),
          this.paths.pop(),
          this.bezierPath2D.pop(),
          0 === this.paths.length
            ? this.remove()
            : (this.canvas || (this.#rr(), this.#or()), this.#nr()));
      },
      mustExec: !0,
    });
  }
  #gr() {
    if (!this.#Ka) return;
    this.#Ka = !1;
    Math.ceil(this.thickness * this.parentScale);
    const t = this.currentPath.slice(-3),
      e = t.map((t) => t[0]),
      i = t.map((t) => t[1]);
    (Math.min(...e), Math.max(...e), Math.min(...i), Math.max(...i));
    const { ctx: s } = this;
    (s.save(), s.clearRect(0, 0, this.canvas.width, this.canvas.height));
    for (const t of this.bezierPath2D) s.stroke(t);
    (s.stroke(this.#qa), s.restore());
  }
  #mr(t, e, i, s, n, a, r) {
    const o = (e + s) / 2,
      h = (i + n) / 2,
      l = (s + a) / 2,
      c = (n + r) / 2;
    t.bezierCurveTo(
      o + (2 * (s - o)) / 3,
      h + (2 * (n - h)) / 3,
      l + (2 * (s - l)) / 3,
      c + (2 * (n - c)) / 3,
      l,
      c,
    );
  }
  #Ar() {
    const t = this.currentPath;
    if (t.length <= 2) return [[t[0], t[0], t.at(-1), t.at(-1)]];
    const e = [];
    let i,
      [s, n] = t[0];
    for (i = 1; i < t.length - 2; i++) {
      const [a, r] = t[i],
        [o, h] = t[i + 1],
        l = (a + o) / 2,
        c = (r + h) / 2,
        d = [s + (2 * (a - s)) / 3, n + (2 * (r - n)) / 3],
        u = [l + (2 * (a - l)) / 3, c + (2 * (r - c)) / 3];
      (e.push([[s, n], d, u, [l, c]]), ([s, n] = [l, c]));
    }
    const [a, r] = t[i],
      [o, h] = t[i + 1],
      l = [s + (2 * (a - s)) / 3, n + (2 * (r - n)) / 3],
      c = [o + (2 * (a - o)) / 3, h + (2 * (r - h)) / 3];
    return (e.push([[s, n], l, c, [o, h]]), e);
  }
  #ar() {
    if (this.isEmpty()) return void this.#yr();
    this.#ur();
    const { canvas: t, ctx: e } = this;
    (e.setTransform(1, 0, 0, 1, 0, 0),
      e.clearRect(0, 0, t.width, t.height),
      this.#yr());
    for (const t of this.bezierPath2D) e.stroke(t);
  }
  commit() {
    this.#Ya ||
      (super.commit(),
      (this.isEditing = !1),
      this.disableEditMode(),
      this.setInForeground(),
      (this.#Ya = !0),
      this.div.classList.add("disabled"),
      this.#nr(!0),
      this.select(),
      this.parent.addInkEditorIfNeeded(!0),
      this.moveInDOM(),
      this.div.focus({ preventScroll: !0 }));
  }
  focusin(t) {
    this._focusEventsAllowed && (super.focusin(t), this.enableEditMode());
  }
  #lr() {
    if (this.#Za) return;
    this.#Za = new AbortController();
    const t = this._uiManager.combinedSignal(this.#Za);
    this.canvas.addEventListener(
      "pointerdown",
      this.canvasPointerdown.bind(this),
      { signal: t },
    );
  }
  #cr() {
    (this.pointerdownAC?.abort(), (this.pointerdownAC = null));
  }
  canvasPointerdown(t) {
    0 === t.button &&
      this.isInEditMode() &&
      !this.#Ya &&
      (this.setInForeground(),
      t.preventDefault(),
      this.div.contains(document.activeElement) ||
        this.div.focus({ preventScroll: !0 }),
      this.#pr(t.offsetX, t.offsetY));
  }
  canvasPointermove(t) {
    (t.preventDefault(), this.#fr(t.offsetX, t.offsetY));
  }
  canvasPointerup(t) {
    (t.preventDefault(), this.#wr(t));
  }
  canvasPointerleave(t) {
    this.#wr(t);
  }
  #wr(t) {
    (this.#Xa?.abort(),
      (this.#Xa = null),
      this.#lr(),
      this.#Wa && clearTimeout(this.#Wa),
      (this.#Wa = setTimeout(() => {
        ((this.#Wa = null), this.canvas.removeEventListener("contextmenu", pi));
      }, 10)),
      this.#vr(t.offsetX, t.offsetY),
      this.addToAnnotationStorage(),
      this.setInBackground());
  }
  #rr() {
    ((this.canvas = document.createElement("canvas")),
      (this.canvas.width = this.canvas.height = 0),
      (this.canvas.className = "inkEditorCanvas"),
      this.canvas.setAttribute("data-l10n-id", "pdfjs-ink-canvas"),
      this.div.append(this.canvas),
      (this.ctx = this.canvas.getContext("2d")));
  }
  #or() {
    ((this.#Ja = new ResizeObserver((t) => {
      const e = t[0].contentRect;
      e.width && e.height && this.setDimensions(e.width, e.height);
    })),
      this.#Ja.observe(this.div),
      this._uiManager._signal.addEventListener(
        "abort",
        () => {
          (this.#Ja?.disconnect(), (this.#Ja = null));
        },
        { once: !0 },
      ));
  }
  get isResizable() {
    return !this.isEmpty() && this.#Ya;
  }
  render() {
    if (this.div) return this.div;
    let t, e;
    (this.width && ((t = this.x), (e = this.y)),
      super.render(),
      this.div.setAttribute("data-l10n-id", "pdfjs-ink"));
    const [i, s, n, a] = this.#dr();
    if ((this.setAt(i, s, 0, 0), this.setDims(n, a), this.#rr(), this.width)) {
      const [i, s] = this.parentDimensions;
      (this.setAspectRatio(this.width * i, this.height * s),
        this.setAt(t * i, e * s, this.width * i, this.height * s),
        (this.#Qa = !0),
        this.#hr(),
        this.setDims(this.width * i, this.height * s),
        this.#ar(),
        this.div.classList.add("disabled"));
    } else (this.div.classList.add("editing"), this.enableEditMode());
    return (this.#or(), this.div);
  }
  #hr() {
    if (!this.#Qa) return;
    const [t, e] = this.parentDimensions;
    ((this.canvas.width = Math.ceil(this.width * t)),
      (this.canvas.height = Math.ceil(this.height * e)),
      this.#yr());
  }
  setDimensions(t, e) {
    const i = Math.round(t),
      s = Math.round(e);
    if (this.#tr === i && this.#er === s) return;
    ((this.#tr = i), (this.#er = s), (this.canvas.style.visibility = "hidden"));
    const [n, a] = this.parentDimensions;
    ((this.width = t / n),
      (this.height = e / a),
      this.fixAndSetPosition(),
      this.#Ya && this.#_r(t, e),
      this.#hr(),
      this.#ar(),
      (this.canvas.style.visibility = "visible"),
      this.fixDims());
  }
  #_r(t, e) {
    const i = this.#xr(),
      s = (t - i) / this.#Va,
      n = (e - i) / this.#Ga;
    this.scaleFactor = Math.min(s, n);
  }
  #yr() {
    const t = this.#xr() / 2;
    this.ctx.setTransform(
      this.scaleFactor,
      0,
      0,
      this.scaleFactor,
      this.translationX * this.scaleFactor + t,
      this.translationY * this.scaleFactor + t,
    );
  }
  static #Cr(t) {
    const e = new Path2D();
    for (let i = 0, s = t.length; i < s; i++) {
      const [s, n, a, r] = t[i];
      (0 === i && e.moveTo(...s),
        e.bezierCurveTo(n[0], n[1], a[0], a[1], r[0], r[1]));
    }
    return e;
  }
  static #Er(t, e, i) {
    const [s, n, a, r] = e;
    switch (i) {
      case 0:
        for (let e = 0, i = t.length; e < i; e += 2)
          ((t[e] += s), (t[e + 1] = r - t[e + 1]));
        break;
      case 90:
        for (let e = 0, i = t.length; e < i; e += 2) {
          const i = t[e];
          ((t[e] = t[e + 1] + s), (t[e + 1] = i + n));
        }
        break;
      case 180:
        for (let e = 0, i = t.length; e < i; e += 2)
          ((t[e] = a - t[e]), (t[e + 1] += n));
        break;
      case 270:
        for (let e = 0, i = t.length; e < i; e += 2) {
          const i = t[e];
          ((t[e] = a - t[e + 1]), (t[e + 1] = r - i));
        }
        break;
      default:
        throw new Error("Invalid rotation");
    }
    return t;
  }
  static #Sr(t, e, i) {
    const [s, n, a, r] = e;
    switch (i) {
      case 0:
        for (let e = 0, i = t.length; e < i; e += 2)
          ((t[e] -= s), (t[e + 1] = r - t[e + 1]));
        break;
      case 90:
        for (let e = 0, i = t.length; e < i; e += 2) {
          const i = t[e];
          ((t[e] = t[e + 1] - n), (t[e + 1] = i - s));
        }
        break;
      case 180:
        for (let e = 0, i = t.length; e < i; e += 2)
          ((t[e] = a - t[e]), (t[e + 1] -= n));
        break;
      case 270:
        for (let e = 0, i = t.length; e < i; e += 2) {
          const i = t[e];
          ((t[e] = r - t[e + 1]), (t[e + 1] = a - i));
        }
        break;
      default:
        throw new Error("Invalid rotation");
    }
    return t;
  }
  #Tr(t, e, i, s) {
    const n = [],
      a = this.thickness / 2,
      r = t * e + a,
      o = t * i + a;
    for (const e of this.paths) {
      const i = [],
        a = [];
      for (let s = 0, n = e.length; s < n; s++) {
        const [h, l, c, d] = e[s];
        if (h[0] === d[0] && h[1] === d[1] && 1 === n) {
          const e = t * h[0] + r,
            s = t * h[1] + o;
          (i.push(e, s), a.push(e, s));
          break;
        }
        const u = t * h[0] + r,
          p = t * h[1] + o,
          g = t * l[0] + r,
          f = t * l[1] + o,
          m = t * c[0] + r,
          b = t * c[1] + o,
          v = t * d[0] + r,
          A = t * d[1] + o;
        (0 === s && (i.push(u, p), a.push(u, p)),
          i.push(g, f, m, b, v, A),
          a.push(g, f),
          s === n - 1 && a.push(v, A));
      }
      n.push({
        bezier: La.#Er(i, s, this.rotation),
        points: La.#Er(a, s, this.rotation),
      });
    }
    return n;
  }
  #Mr() {
    let t = 1 / 0,
      e = -1 / 0,
      i = 1 / 0,
      s = -1 / 0;
    for (const n of this.paths)
      for (const [a, r, o, h] of n) {
        const n = je.bezierBoundingBox(...a, ...r, ...o, ...h);
        ((t = Math.min(t, n[0])),
          (i = Math.min(i, n[1])),
          (e = Math.max(e, n[2])),
          (s = Math.max(s, n[3])));
      }
    return [t, i, e, s];
  }
  #xr() {
    return this.#Ya ? Math.ceil(this.thickness * this.parentScale) : 0;
  }
  #nr(t = !1) {
    if (this.isEmpty()) return;
    if (!this.#Ya) return void this.#ar();
    const e = this.#Mr(),
      i = this.#xr();
    ((this.#Va = Math.max(Ii.MIN_SIZE, e[2] - e[0])),
      (this.#Ga = Math.max(Ii.MIN_SIZE, e[3] - e[1])));
    const s = Math.ceil(i + this.#Va * this.scaleFactor),
      n = Math.ceil(i + this.#Ga * this.scaleFactor),
      [a, r] = this.parentDimensions;
    ((this.width = s / a), (this.height = n / r), this.setAspectRatio(s, n));
    const o = this.translationX,
      h = this.translationY;
    ((this.translationX = -e[0]),
      (this.translationY = -e[1]),
      this.#hr(),
      this.#ar(),
      (this.#tr = s),
      (this.#er = n),
      this.setDims(s, n));
    const l = t ? i / this.scaleFactor / 2 : 0;
    this.translate(o - this.translationX - l, h - this.translationY - l);
  }
  static async deserialize(t, e, i) {
    if (t instanceof fa) return null;
    const s = await super.deserialize(t, e, i);
    ((s.thickness = t.thickness),
      (s.color = je.makeHexColor(...t.color)),
      (s.opacity = t.opacity));
    const [n, a] = s.pageDimensions,
      r = s.width * n,
      o = s.height * a,
      h = s.parentScale,
      l = t.thickness / 2;
    ((s.#Ya = !0), (s.#tr = Math.round(r)), (s.#er = Math.round(o)));
    const { paths: c, rect: d, rotation: u } = t;
    for (let { bezier: t } of c) {
      t = La.#Sr(t, d, u);
      const e = [];
      s.paths.push(e);
      let i = h * (t[0] - l),
        n = h * (t[1] - l);
      for (let s = 2, a = t.length; s < a; s += 6) {
        const a = h * (t[s] - l),
          r = h * (t[s + 1] - l),
          o = h * (t[s + 2] - l),
          c = h * (t[s + 3] - l),
          d = h * (t[s + 4] - l),
          u = h * (t[s + 5] - l);
        (e.push([
          [i, n],
          [a, r],
          [o, c],
          [d, u],
        ]),
          (i = d),
          (n = u));
      }
      const a = this.#Cr(e);
      s.bezierPath2D.push(a);
    }
    const p = s.#Mr();
    return (
      (s.#Va = Math.max(Ii.MIN_SIZE, p[2] - p[0])),
      (s.#Ga = Math.max(Ii.MIN_SIZE, p[3] - p[1])),
      s.#_r(r, o),
      s
    );
  }
  serialize() {
    if (this.isEmpty()) return null;
    const t = this.getRect(0, 0),
      e = Ii._colorManager.convert(this.ctx.strokeStyle);
    return {
      annotationType: Bt.INK,
      color: e,
      thickness: this.thickness,
      opacity: this.opacity,
      paths: this.#Tr(
        this.scaleFactor / this.parentScale,
        this.translationX,
        this.translationY,
        t,
      ),
      pageIndex: this.pageIndex,
      rect: t,
      rotation: this.rotation,
      structTreeParentId: this._structTreeParentId,
    };
  }
}
class Fa extends Ii {
  #kr = null;
  #Pr = null;
  #Rr = null;
  #Ir = null;
  #Dr = null;
  #Lr = "";
  #Fr = null;
  #Ja = null;
  #Nr = null;
  #Or = !1;
  #Br = !1;
  static _type = "stamp";
  static _editorType = Bt.STAMP;
  constructor(t) {
    (super({ ...t, name: "stampEditor" }),
      (this.#Ir = t.bitmapUrl),
      (this.#Dr = t.bitmapFile));
  }
  static initialize(t, e) {
    Ii.initialize(t, e);
  }
  static get supportedTypes() {
    return Me(
      this,
      "supportedTypes",
      [
        "apng",
        "avif",
        "bmp",
        "gif",
        "jpeg",
        "png",
        "svg+xml",
        "webp",
        "x-icon",
      ].map((t) => `image/${t}`),
    );
  }
  static get supportedTypesStr() {
    return Me(this, "supportedTypesStr", this.supportedTypes.join(","));
  }
  static isHandlingMimeForPasting(t) {
    return this.supportedTypes.includes(t);
  }
  static paste(t, e) {
    e.pasteEditor(Bt.STAMP, { bitmapFile: t.getAsFile() });
  }
  altTextFinish() {
    (this._uiManager.useNewAltTextFlow && (this.div.hidden = !1),
      super.altTextFinish());
  }
  get telemetryFinalData() {
    return { type: "stamp", hasAltText: !!this.altTextData?.altText };
  }
  static computeTelemetryFinalData(t) {
    const e = t.get("hasAltText");
    return { hasAltText: e.get(!0) ?? 0, hasNoAltText: e.get(!1) ?? 0 };
  }
  #zr(t, e = !1) {
    t
      ? ((this.#kr = t.bitmap),
        e || ((this.#Pr = t.id), (this.#Or = t.isSvg)),
        t.file && (this.#Lr = t.file.name),
        this.#rr())
      : this.remove();
  }
  #Hr() {
    if (((this.#Rr = null), this._uiManager.enableWaiting(!1), this.#Fr)) {
      if (
        this._uiManager.useNewAltTextWhenAddingImage &&
        this._uiManager.useNewAltTextFlow &&
        this.#kr
      )
        return (
          this._editToolbar.hide(),
          void this._uiManager.editAltText(this, !0)
        );
      if (
        !this._uiManager.useNewAltTextWhenAddingImage &&
        this._uiManager.useNewAltTextFlow &&
        this.#kr
      ) {
        this._reportTelemetry({
          action: "pdfjs.image.image_added",
          data: { alt_text_modal: !1, alt_text_type: "empty" },
        });
        try {
          this.mlGuessAltText();
        } catch {}
      }
      this.div.focus();
    }
  }
  async mlGuessAltText(t = null, e = !0) {
    if (this.hasAltTextData()) return null;
    const { mlManager: i } = this._uiManager;
    if (!i) throw new Error("No ML.");
    if (!(await i.isEnabledFor("altText")))
      throw new Error("ML isn't enabled for alt text.");
    const {
        data: s,
        width: n,
        height: a,
      } = t || this.copyCanvas(null, null, !0).imageData,
      r = await i.guess({
        name: "altText",
        request: { data: s, width: n, height: a, channels: s.length / (n * a) },
      });
    if (!r) throw new Error("No response from the AI service.");
    if (r.error) throw new Error("Error from the AI service.");
    if (r.cancel) return null;
    if (!r.output) throw new Error("No valid response from the AI service.");
    const o = r.output;
    return (
      await this.setGuessedAltText(o),
      e &&
        !this.hasAltTextData() &&
        (this.altTextData = { alt: o, decorative: !1 }),
      o
    );
  }
  #Ur() {
    if (this.#Pr)
      return (
        this._uiManager.enableWaiting(!0),
        void this._uiManager.imageManager
          .getFromId(this.#Pr)
          .then((t) => this.#zr(t, !0))
          .finally(() => this.#Hr())
      );
    if (this.#Ir) {
      const t = this.#Ir;
      return (
        (this.#Ir = null),
        this._uiManager.enableWaiting(!0),
        void (this.#Rr = this._uiManager.imageManager
          .getFromUrl(t)
          .then((t) => this.#zr(t))
          .finally(() => this.#Hr()))
      );
    }
    if (this.#Dr) {
      const t = this.#Dr;
      return (
        (this.#Dr = null),
        this._uiManager.enableWaiting(!0),
        void (this.#Rr = this._uiManager.imageManager
          .getFromFile(t)
          .then((t) => this.#zr(t))
          .finally(() => this.#Hr()))
      );
    }
    const t = document.createElement("input");
    ((t.type = "file"), (t.accept = Fa.supportedTypesStr));
    const e = this._uiManager._signal;
    ((this.#Rr = new Promise((i) => {
      (t.addEventListener(
        "change",
        async () => {
          if (t.files && 0 !== t.files.length) {
            this._uiManager.enableWaiting(!0);
            const e = await this._uiManager.imageManager.getFromFile(
              t.files[0],
            );
            (this._reportTelemetry({
              action: "pdfjs.image.image_selected",
              data: { alt_text_modal: this._uiManager.useNewAltTextFlow },
            }),
              this.#zr(e));
          } else this.remove();
          i();
        },
        { signal: e },
      ),
        t.addEventListener(
          "cancel",
          () => {
            (this.remove(), i());
          },
          { signal: e },
        ));
    }).finally(() => this.#Hr())),
      t.click());
  }
  remove() {
    (this.#Pr &&
      ((this.#kr = null),
      this._uiManager.imageManager.deleteId(this.#Pr),
      this.#Fr?.remove(),
      (this.#Fr = null),
      this.#Ja?.disconnect(),
      (this.#Ja = null),
      this.#Nr && (clearTimeout(this.#Nr), (this.#Nr = null))),
      super.remove());
  }
  rebuild() {
    this.parent
      ? (super.rebuild(),
        null !== this.div &&
          (this.#Pr && null === this.#Fr && this.#Ur(),
          this.isAttachedToDOM || this.parent.add(this)))
      : this.#Pr && this.#Ur();
  }
  onceAdded() {
    ((this._isDraggable = !0), this.div.focus());
  }
  isEmpty() {
    return !(this.#Rr || this.#kr || this.#Ir || this.#Dr || this.#Pr);
  }
  get isResizable() {
    return !0;
  }
  render() {
    if (this.div) return this.div;
    let t, e;
    if (
      (this.width && ((t = this.x), (e = this.y)),
      super.render(),
      (this.div.hidden = !0),
      this.div.setAttribute("role", "figure"),
      this.addAltTextButton(),
      this.#kr ? this.#rr() : this.#Ur(),
      this.width && !this.annotationElementId)
    ) {
      const [i, s] = this.parentDimensions;
      this.setAt(t * i, e * s, this.width * i, this.height * s);
    }
    return this.div;
  }
  #rr() {
    const { div: t } = this;
    let { width: e, height: i } = this.#kr;
    const [s, n] = this.pageDimensions,
      a = 0.75;
    if (this.width) ((e = this.width * s), (i = this.height * n));
    else if (e > a * s || i > a * n) {
      const t = Math.min((a * s) / e, (a * n) / i);
      ((e *= t), (i *= t));
    }
    const [r, o] = this.parentDimensions;
    (this.setDims((e * r) / s, (i * o) / n), this._uiManager.enableWaiting(!1));
    const h = (this.#Fr = document.createElement("canvas"));
    (h.setAttribute("role", "img"),
      this.addContainer(h),
      (this._uiManager.useNewAltTextWhenAddingImage &&
        this._uiManager.useNewAltTextFlow &&
        !this.annotationElementId) ||
        (t.hidden = !1),
      this.#jr(e, i),
      this.#or(),
      this.#Br || (this.parent.addUndoableEditor(this), (this.#Br = !0)),
      this._reportTelemetry({ action: "inserted_image" }),
      this.#Lr && h.setAttribute("aria-label", this.#Lr));
  }
  copyCanvas(t, e, i = !1) {
    t || (t = 224);
    const { width: s, height: n } = this.#kr,
      a = new wi();
    let r = this.#kr,
      o = s,
      h = n,
      l = null;
    if (e) {
      if (s > e || n > e) {
        const t = Math.min(e / s, e / n);
        ((o = Math.floor(s * t)), (h = Math.floor(n * t)));
      }
      l = document.createElement("canvas");
      const t = (l.width = Math.ceil(o * a.sx)),
        i = (l.height = Math.ceil(h * a.sy));
      this.#Or || (r = this.#$r(t, i));
      const c = l.getContext("2d");
      c.filter = this._uiManager.hcmFilter;
      let d = "white",
        u = "#cfcfd8";
      "none" !== this._uiManager.hcmFilter
        ? (u = "black")
        : window.matchMedia?.("(prefers-color-scheme: dark)").matches &&
          ((d = "#8f8f9d"), (u = "#42414d"));
      const p = 15,
        g = p * a.sx,
        f = p * a.sy,
        m = new OffscreenCanvas(2 * g, 2 * f),
        b = m.getContext("2d");
      ((b.fillStyle = d),
        b.fillRect(0, 0, 2 * g, 2 * f),
        (b.fillStyle = u),
        b.fillRect(0, 0, g, f),
        b.fillRect(g, f, g, f),
        (c.fillStyle = c.createPattern(m, "repeat")),
        c.fillRect(0, 0, t, i),
        c.drawImage(r, 0, 0, r.width, r.height, 0, 0, t, i));
    }
    let c = null;
    if (i) {
      let e, i;
      if (a.symmetric && r.width < t && r.height < t)
        ((e = r.width), (i = r.height));
      else if (((r = this.#kr), s > t || n > t)) {
        const a = Math.min(t / s, t / n);
        ((e = Math.floor(s * a)),
          (i = Math.floor(n * a)),
          this.#Or || (r = this.#$r(e, i)));
      }
      const o = new OffscreenCanvas(e, i).getContext("2d", {
        willReadFrequently: !0,
      });
      (o.drawImage(r, 0, 0, r.width, r.height, 0, 0, e, i),
        (c = { width: e, height: i, data: o.getImageData(0, 0, e, i).data }));
    }
    return { canvas: l, width: o, height: h, imageData: c };
  }
  #Gr(t, e) {
    const [i, s] = this.parentDimensions;
    ((this.width = t / i),
      (this.height = e / s),
      this._initialOptions?.isCentered
        ? this.center()
        : this.fixAndSetPosition(),
      (this._initialOptions = null),
      null !== this.#Nr && clearTimeout(this.#Nr));
    this.#Nr = setTimeout(() => {
      ((this.#Nr = null), this.#jr(t, e));
    }, 200);
  }
  #$r(t, e) {
    const { width: i, height: s } = this.#kr;
    let n = i,
      a = s,
      r = this.#kr;
    for (; n > 2 * t || a > 2 * e; ) {
      const i = n,
        s = a;
      (n > 2 * t && (n = n >= 16384 ? Math.floor(n / 2) - 1 : Math.ceil(n / 2)),
        a > 2 * e &&
          (a = a >= 16384 ? Math.floor(a / 2) - 1 : Math.ceil(a / 2)));
      const o = new OffscreenCanvas(n, a);
      (o.getContext("2d").drawImage(r, 0, 0, i, s, 0, 0, n, a),
        (r = o.transferToImageBitmap()));
    }
    return r;
  }
  #jr(t, e) {
    const i = new wi(),
      s = Math.ceil(t * i.sx),
      n = Math.ceil(e * i.sy),
      a = this.#Fr;
    if (!a || (a.width === s && a.height === n)) return;
    ((a.width = s), (a.height = n));
    const r = this.#Or ? this.#kr : this.#$r(s, n),
      o = a.getContext("2d");
    ((o.filter = this._uiManager.hcmFilter),
      o.drawImage(r, 0, 0, r.width, r.height, 0, 0, s, n));
  }
  getImageForAltText() {
    return this.#Fr;
  }
  #Vr(t) {
    if (t) {
      if (this.#Or) {
        const t = this._uiManager.imageManager.getSvgUrl(this.#Pr);
        if (t) return t;
      }
      const t = document.createElement("canvas");
      ({ width: t.width, height: t.height } = this.#kr);
      return (t.getContext("2d").drawImage(this.#kr, 0, 0), t.toDataURL());
    }
    if (this.#Or) {
      const [t, e] = this.pageDimensions,
        i = Math.round(this.width * t * si.PDF_TO_CSS_UNITS),
        s = Math.round(this.height * e * si.PDF_TO_CSS_UNITS),
        n = new OffscreenCanvas(i, s);
      return (
        n
          .getContext("2d")
          .drawImage(
            this.#kr,
            0,
            0,
            this.#kr.width,
            this.#kr.height,
            0,
            0,
            i,
            s,
          ),
        n.transferToImageBitmap()
      );
    }
    return structuredClone(this.#kr);
  }
  #or() {
    this._uiManager._signal &&
      ((this.#Ja = new ResizeObserver((t) => {
        const e = t[0].contentRect;
        e.width && e.height && this.#Gr(e.width, e.height);
      })),
      this.#Ja.observe(this.div),
      this._uiManager._signal.addEventListener(
        "abort",
        () => {
          (this.#Ja?.disconnect(), (this.#Ja = null));
        },
        { once: !0 },
      ));
  }
  static async deserialize(t, e, i) {
    let s = null;
    if (t instanceof ya) {
      const {
          data: { rect: n, rotation: a, id: r, structParent: o, popupRef: h },
          container: l,
          parent: {
            page: { pageNumber: c },
          },
        } = t,
        d = l.querySelector("canvas"),
        u = i.imageManager.getFromCanvas(l.id, d);
      d.remove();
      const p =
        (await e._structTree.getAriaAttributes(`${We}${r}`))?.get(
          "aria-label",
        ) || "";
      s = t = {
        annotationType: Bt.STAMP,
        bitmapId: u.id,
        bitmap: u.bitmap,
        pageIndex: c - 1,
        rect: n.slice(0),
        rotation: a,
        id: r,
        deleted: !1,
        accessibilityData: { decorative: !1, altText: p },
        isSvg: !1,
        structParent: o,
        popupRef: h,
      };
    }
    const n = await super.deserialize(t, e, i),
      {
        rect: a,
        bitmap: r,
        bitmapUrl: o,
        bitmapId: h,
        isSvg: l,
        accessibilityData: c,
      } = t;
    (h && i.imageManager.isValidId(h)
      ? ((n.#Pr = h), r && (n.#kr = r))
      : (n.#Ir = o),
      (n.#Or = l));
    const [d, u] = n.pageDimensions;
    return (
      (n.width = (a[2] - a[0]) / d),
      (n.height = (a[3] - a[1]) / u),
      (n.annotationElementId = t.id || null),
      c && (n.altTextData = c),
      (n._initialData = s),
      (n.#Br = !!s),
      n
    );
  }
  serialize(t = !1, e = null) {
    if (this.isEmpty()) return null;
    if (this.deleted) return this.serializeDeleted();
    const i = {
      annotationType: Bt.STAMP,
      bitmapId: this.#Pr,
      pageIndex: this.pageIndex,
      rect: this.getRect(0, 0),
      rotation: this.rotation,
      isSvg: this.#Or,
      structTreeParentId: this._structTreeParentId,
    };
    if (t)
      return (
        (i.bitmapUrl = this.#Vr(!0)),
        (i.accessibilityData = this.serializeAltText(!0)),
        i
      );
    const { decorative: s, altText: n } = this.serializeAltText(!1);
    if (
      (!s && n && (i.accessibilityData = { type: "Figure", alt: n }),
      this.annotationElementId)
    ) {
      const t = this.#vn(i);
      if (t.isSame) return null;
      t.isSameAltText
        ? delete i.accessibilityData
        : (i.accessibilityData.structParent =
            this._initialData.structParent ?? -1);
    }
    if (((i.id = this.annotationElementId), null === e)) return i;
    e.stamps ||= new Map();
    const a = this.#Or
      ? (i.rect[2] - i.rect[0]) * (i.rect[3] - i.rect[1])
      : null;
    if (e.stamps.has(this.#Pr)) {
      if (this.#Or) {
        const t = e.stamps.get(this.#Pr);
        a > t.area &&
          ((t.area = a),
          t.serialized.bitmap.close(),
          (t.serialized.bitmap = this.#Vr(!1)));
      }
    } else
      (e.stamps.set(this.#Pr, { area: a, serialized: i }),
        (i.bitmap = this.#Vr(!1)));
    return i;
  }
  #vn(t) {
    const {
        rect: e,
        pageIndex: i,
        accessibilityData: { altText: s },
      } = this._initialData,
      n = t.rect.every((t, i) => Math.abs(t - e[i]) < 1),
      a = t.pageIndex === i,
      r = (t.accessibilityData?.alt || "") === s;
    return { isSame: n && a && r, isSameAltText: r };
  }
  renderAnnotationElement(t) {
    return (t.updateEdited({ rect: this.getRect(0, 0) }), null);
  }
}
class Na {
  #en;
  #Wr = !1;
  #qr = null;
  #Yr = null;
  #Xr = null;
  #Kr = new Map();
  #Qr = !1;
  #Jr = !1;
  #Zr = !1;
  #to = null;
  #eo = null;
  #f;
  static _initialized = !1;
  static #H = new Map([Ca, La, Fa, Da].map((t) => [t._editorType, t]));
  constructor({
    uiManager: t,
    pageIndex: e,
    div: i,
    structTreeLayer: s,
    accessibilityManager: n,
    annotationLayer: a,
    drawLayer: r,
    textLayer: o,
    viewport: h,
    l10n: l,
  }) {
    const c = [...Na.#H.values()];
    if (!Na._initialized) {
      Na._initialized = !0;
      for (const e of c) e.initialize(l, t);
    }
    (t.registerEditorTypes(c),
      (this.#f = t),
      (this.pageIndex = e),
      (this.div = i),
      (this.#en = n),
      (this.#qr = a),
      (this.viewport = h),
      (this.#to = o),
      (this.drawLayer = r),
      (this._structTree = s),
      this.#f.addLayer(this));
  }
  get isEmpty() {
    return 0 === this.#Kr.size;
  }
  get isInvisible() {
    return this.isEmpty && this.#f.getMode() === Bt.NONE;
  }
  updateToolbar(t) {
    this.#f.updateToolbar(t);
  }
  updateMode(t = this.#f.getMode()) {
    switch ((this.#io(), t)) {
      case Bt.NONE:
        return (
          this.disableTextSelection(),
          this.togglePointerEvents(!1),
          this.toggleAnnotationLayerPointerEvents(!0),
          void this.disableClick()
        );
      case Bt.INK:
        (this.addInkEditorIfNeeded(!1),
          this.disableTextSelection(),
          this.togglePointerEvents(!0),
          this.disableClick());
        break;
      case Bt.HIGHLIGHT:
        (this.enableTextSelection(),
          this.togglePointerEvents(!1),
          this.disableClick());
        break;
      default:
        (this.disableTextSelection(),
          this.togglePointerEvents(!0),
          this.enableClick());
    }
    this.toggleAnnotationLayerPointerEvents(!1);
    const { classList: e } = this.div;
    for (const i of Na.#H.values())
      e.toggle(`${i._type}Editing`, t === i._editorType);
    this.div.hidden = !1;
  }
  hasTextLayer(t) {
    return t === this.#to?.div;
  }
  addInkEditorIfNeeded(t) {
    if (this.#f.getMode() !== Bt.INK) return;
    if (!t)
      for (const t of this.#Kr.values())
        if (t.isEmpty()) return void t.setInBackground();
    this.createAndAddNewEditor(
      { offsetX: 0, offsetY: 0 },
      !1,
    ).setInBackground();
  }
  setEditingState(t) {
    this.#f.setEditingState(t);
  }
  addCommands(t) {
    this.#f.addCommands(t);
  }
  toggleDrawing(t = !1) {
    this.div.classList.toggle("drawing", !t);
  }
  togglePointerEvents(t = !1) {
    this.div.classList.toggle("disabled", !t);
  }
  toggleAnnotationLayerPointerEvents(t = !1) {
    this.#qr?.div.classList.toggle("disabled", !t);
  }
  async enable() {
    ((this.div.tabIndex = 0), this.togglePointerEvents(!0));
    const t = new Set();
    for (const e of this.#Kr.values())
      (e.enableEditing(),
        e.show(!0),
        e.annotationElementId &&
          (this.#f.removeChangedExistingAnnotation(e),
          t.add(e.annotationElementId)));
    if (!this.#qr) return;
    const e = this.#qr.getEditableAnnotations();
    for (const i of e) {
      if ((i.hide(), this.#f.isDeletedAnnotationElement(i.data.id))) continue;
      if (t.has(i.data.id)) continue;
      const e = await this.deserialize(i);
      e && (this.addOrRebuild(e), e.enableEditing());
    }
  }
  disable() {
    ((this.#Zr = !0), (this.div.tabIndex = -1), this.togglePointerEvents(!1));
    const t = new Map(),
      e = new Map();
    for (const i of this.#Kr.values())
      (i.disableEditing(),
        i.annotationElementId &&
          (null === i.serialize()
            ? (e.set(i.annotationElementId, i),
              this.getEditableAnnotation(i.annotationElementId)?.show(),
              i.remove())
            : t.set(i.annotationElementId, i)));
    if (this.#qr) {
      const i = this.#qr.getEditableAnnotations();
      for (const s of i) {
        const { id: i } = s.data;
        if (this.#f.isDeletedAnnotationElement(i)) continue;
        let n = e.get(i);
        n
          ? (n.resetAnnotationElement(s), n.show(!1), s.show())
          : ((n = t.get(i)),
            n &&
              (this.#f.addChangedExistingAnnotation(n),
              n.renderAnnotationElement(s) && n.show(!1)),
            s.show());
      }
    }
    (this.#io(), this.isEmpty && (this.div.hidden = !0));
    const { classList: i } = this.div;
    for (const t of Na.#H.values()) i.remove(`${t._type}Editing`);
    (this.disableTextSelection(),
      this.toggleAnnotationLayerPointerEvents(!0),
      (this.#Zr = !1));
  }
  getEditableAnnotation(t) {
    return this.#qr?.getEditableAnnotation(t) || null;
  }
  setActiveEditor(t) {
    this.#f.getActive() !== t && this.#f.setActiveEditor(t);
  }
  enableTextSelection() {
    if (((this.div.tabIndex = -1), this.#to?.div && !this.#eo)) {
      this.#eo = new AbortController();
      const t = this.#f.combinedSignal(this.#eo);
      (this.#to.div.addEventListener("pointerdown", this.#so.bind(this), {
        signal: t,
      }),
        this.#to.div.classList.add("highlighting"));
    }
  }
  disableTextSelection() {
    ((this.div.tabIndex = 0),
      this.#to?.div &&
        this.#eo &&
        (this.#eo.abort(),
        (this.#eo = null),
        this.#to.div.classList.remove("highlighting")));
  }
  #so(t) {
    this.#f.unselectAll();
    const { target: e } = t;
    if (
      e === this.#to.div ||
      (("img" === e.getAttribute("role") ||
        e.classList.contains("endOfContent")) &&
        this.#to.div.contains(e))
    ) {
      const { isMac: e } = He.platform;
      if (0 !== t.button || (t.ctrlKey && e)) return;
      (this.#f.showAllEditors("highlight", !0, !0),
        this.#to.div.classList.add("free"),
        this.toggleDrawing(),
        Da.startHighlighting(this, "ltr" === this.#f.direction, {
          target: this.#to.div,
          x: t.x,
          y: t.y,
        }),
        this.#to.div.addEventListener(
          "pointerup",
          () => {
            (this.#to.div.classList.remove("free"), this.toggleDrawing(!0));
          },
          { once: !0, signal: this.#f._signal },
        ),
        t.preventDefault());
    }
  }
  enableClick() {
    if (this.#Yr) return;
    this.#Yr = new AbortController();
    const t = this.#f.combinedSignal(this.#Yr);
    (this.div.addEventListener("pointerdown", this.pointerdown.bind(this), {
      signal: t,
    }),
      this.div.addEventListener("pointerup", this.pointerup.bind(this), {
        signal: t,
      }));
  }
  disableClick() {
    (this.#Yr?.abort(), (this.#Yr = null));
  }
  attach(t) {
    this.#Kr.set(t.id, t);
    const { annotationElementId: e } = t;
    e &&
      this.#f.isDeletedAnnotationElement(e) &&
      this.#f.removeDeletedAnnotationElement(t);
  }
  detach(t) {
    (this.#Kr.delete(t.id),
      this.#en?.removePointerInTextLayer(t.contentDiv),
      !this.#Zr &&
        t.annotationElementId &&
        this.#f.addDeletedAnnotationElement(t));
  }
  remove(t) {
    (this.detach(t),
      this.#f.removeEditor(t),
      t.div.remove(),
      (t.isAttachedToDOM = !1),
      this.#Jr || this.addInkEditorIfNeeded(!1));
  }
  changeParent(t) {
    t.parent !== this &&
      (t.parent &&
        t.annotationElementId &&
        (this.#f.addDeletedAnnotationElement(t.annotationElementId),
        Ii.deleteAnnotationElement(t),
        (t.annotationElementId = null)),
      this.attach(t),
      t.parent?.detach(t),
      t.setParent(this),
      t.div && t.isAttachedToDOM && (t.div.remove(), this.div.append(t.div)));
  }
  add(t) {
    if (t.parent !== this || !t.isAttachedToDOM) {
      if (
        (this.changeParent(t),
        this.#f.addEditor(t),
        this.attach(t),
        !t.isAttachedToDOM)
      ) {
        const e = t.render();
        (this.div.append(e), (t.isAttachedToDOM = !0));
      }
      (t.fixAndSetPosition(),
        t.onceAdded(),
        this.#f.addToAnnotationStorage(t),
        t._reportTelemetry(t.telemetryInitialData));
    }
  }
  moveEditorInDOM(t) {
    if (!t.isAttachedToDOM) return;
    const { activeElement: e } = document;
    (t.div.contains(e) &&
      !this.#Xr &&
      ((t._focusEventsAllowed = !1),
      (this.#Xr = setTimeout(() => {
        ((this.#Xr = null),
          t.div.contains(document.activeElement)
            ? (t._focusEventsAllowed = !0)
            : (t.div.addEventListener(
                "focusin",
                () => {
                  t._focusEventsAllowed = !0;
                },
                { once: !0, signal: this.#f._signal },
              ),
              e.focus()));
      }, 0))),
      (t._structTreeParentId = this.#en?.moveElementInDOM(
        this.div,
        t.div,
        t.contentDiv,
        !0,
      )));
  }
  addOrRebuild(t) {
    t.needsToBeRebuilt()
      ? ((t.parent ||= this), t.rebuild(), t.show())
      : this.add(t);
  }
  addUndoableEditor(t) {
    this.addCommands({
      cmd: () => t._uiManager.rebuild(t),
      undo: () => {
        t.remove();
      },
      mustExec: !1,
    });
  }
  getNextId() {
    return this.#f.getId();
  }
  get #no() {
    return Na.#H.get(this.#f.getMode());
  }
  combinedSignal(t) {
    return this.#f.combinedSignal(t);
  }
  #ao(t) {
    const e = this.#no;
    return e ? new e.prototype.constructor(t) : null;
  }
  canCreateNewEmptyEditor() {
    return this.#no?.canCreateNewEmptyEditor();
  }
  pasteEditor(t, e) {
    (this.#f.updateToolbar(t), this.#f.updateMode(t));
    const { offsetX: i, offsetY: s } = this.#ro(),
      n = this.getNextId(),
      a = this.#ao({
        parent: this,
        id: n,
        x: i,
        y: s,
        uiManager: this.#f,
        isCentered: !0,
        ...e,
      });
    a && this.add(a);
  }
  async deserialize(t) {
    return (
      (await Na.#H
        .get(t.annotationType ?? t.annotationEditorType)
        ?.deserialize(t, this, this.#f)) || null
    );
  }
  createAndAddNewEditor(t, e, i = {}) {
    const s = this.getNextId(),
      n = this.#ao({
        parent: this,
        id: s,
        x: t.offsetX,
        y: t.offsetY,
        uiManager: this.#f,
        isCentered: e,
        ...i,
      });
    return (n && this.add(n), n);
  }
  #ro() {
    const {
        x: t,
        y: e,
        width: i,
        height: s,
      } = this.div.getBoundingClientRect(),
      n = Math.max(0, t),
      a = Math.max(0, e),
      r = (n + Math.min(window.innerWidth, t + i)) / 2 - t,
      o = (a + Math.min(window.innerHeight, e + s)) / 2 - e,
      [h, l] = this.viewport.rotation % 180 == 0 ? [r, o] : [o, r];
    return { offsetX: h, offsetY: l };
  }
  addNewEditor() {
    this.createAndAddNewEditor(this.#ro(), !0);
  }
  setSelected(t) {
    this.#f.setSelected(t);
  }
  toggleSelected(t) {
    this.#f.toggleSelected(t);
  }
  unselect(t) {
    this.#f.unselect(t);
  }
  pointerup(t) {
    const { isMac: e } = He.platform;
    0 !== t.button ||
      (t.ctrlKey && e) ||
      (t.target === this.div &&
        this.#Qr &&
        ((this.#Qr = !1),
        this.#Wr
          ? this.#f.getMode() !== Bt.STAMP
            ? this.createAndAddNewEditor(t, !1)
            : this.#f.unselectAll()
          : (this.#Wr = !0)));
  }
  pointerdown(t) {
    if (
      (this.#f.getMode() === Bt.HIGHLIGHT && this.enableTextSelection(),
      this.#Qr)
    )
      return void (this.#Qr = !1);
    const { isMac: e } = He.platform;
    if (0 !== t.button || (t.ctrlKey && e)) return;
    if (t.target !== this.div) return;
    this.#Qr = !0;
    const i = this.#f.getActive();
    this.#Wr = !i || i.isEmpty();
  }
  findNewParent(t, e, i) {
    const s = this.#f.findParent(e, i);
    return null !== s && s !== this && (s.changeParent(t), !0);
  }
  destroy() {
    (this.#f.getActive()?.parent === this &&
      (this.#f.commitOrRemove(), this.#f.setActiveEditor(null)),
      this.#Xr && (clearTimeout(this.#Xr), (this.#Xr = null)));
    for (const t of this.#Kr.values())
      (this.#en?.removePointerInTextLayer(t.contentDiv),
        t.setParent(null),
        (t.isAttachedToDOM = !1),
        t.div.remove());
    ((this.div = null), this.#Kr.clear(), this.#f.removeLayer(this));
  }
  #io() {
    this.#Jr = !0;
    for (const t of this.#Kr.values()) t.isEmpty() && t.remove();
    this.#Jr = !1;
  }
  render({ viewport: t }) {
    ((this.viewport = t), yi(this.div, t));
    for (const t of this.#f.getEditors(this.pageIndex))
      (this.add(t), t.rebuild());
    this.updateMode();
  }
  update({ viewport: t }) {
    (this.#f.commitOrRemove(), this.#io());
    const e = this.viewport.rotation,
      i = t.rotation;
    if (((this.viewport = t), yi(this.div, { rotation: i }), e !== i))
      for (const t of this.#Kr.values()) t.rotate(i);
    this.addInkEditorIfNeeded(!1);
  }
  get pageDimensions() {
    const { pageWidth: t, pageHeight: e } = this.viewport.rawDims;
    return [t, e];
  }
  get scale() {
    return this.#f.viewParameters.realScale;
  }
}
class Oa {
  #Fs = null;
  #A = 0;
  #oo = new Map();
  #ho = new Map();
  constructor({ pageIndex: t }) {
    this.pageIndex = t;
  }
  setParent(t) {
    if (this.#Fs) {
      if (this.#Fs !== t) {
        if (this.#oo.size > 0)
          for (const e of this.#oo.values()) (e.remove(), t.append(e));
        this.#Fs = t;
      }
    } else this.#Fs = t;
  }
  static get _svgFactory() {
    return Me(this, "_svgFactory", new Gn());
  }
  static #lo(t, { x: e = 0, y: i = 0, width: s = 1, height: n = 1 } = {}) {
    const { style: a } = t;
    ((a.top = 100 * i + "%"),
      (a.left = 100 * e + "%"),
      (a.width = 100 * s + "%"),
      (a.height = 100 * n + "%"));
  }
  #co(t) {
    const e = Oa._svgFactory.create(1, 1, !0);
    return (
      this.#Fs.append(e),
      e.setAttribute("aria-hidden", !0),
      Oa.#lo(e, t),
      e
    );
  }
  #do(t, e) {
    const i = Oa._svgFactory.createElement("clipPath");
    t.append(i);
    const s = `clip_${e}`;
    (i.setAttribute("id", s),
      i.setAttribute("clipPathUnits", "objectBoundingBox"));
    const n = Oa._svgFactory.createElement("use");
    return (
      i.append(n),
      n.setAttribute("href", `#${e}`),
      n.classList.add("clip"),
      s
    );
  }
  draw(t, e, i, s = !1) {
    const n = this.#A++,
      a = this.#co(t.box);
    a.classList.add(...t.classNamesForDrawing);
    const r = Oa._svgFactory.createElement("defs");
    a.append(r);
    const o = Oa._svgFactory.createElement("path");
    r.append(o);
    const h = `path_p${this.pageIndex}_${n}`;
    (o.setAttribute("id", h),
      o.setAttribute("d", t.toSVGPath()),
      s && this.#ho.set(n, o));
    const l = this.#do(r, h),
      c = Oa._svgFactory.createElement("use");
    return (
      a.append(c),
      a.setAttribute("fill", e),
      a.setAttribute("fill-opacity", i),
      c.setAttribute("href", `#${h}`),
      this.#oo.set(n, a),
      { id: n, clipPathId: `url(#${l})` }
    );
  }
  drawOutline(t) {
    const e = this.#A++,
      i = this.#co(t.box);
    i.classList.add(...t.classNamesForOutlining);
    const s = Oa._svgFactory.createElement("defs");
    i.append(s);
    const n = Oa._svgFactory.createElement("path");
    s.append(n);
    const a = `path_p${this.pageIndex}_${e}`;
    let r;
    if (
      (n.setAttribute("id", a),
      n.setAttribute("d", t.toSVGPath()),
      n.setAttribute("vector-effect", "non-scaling-stroke"),
      t.mustRemoveSelfIntersections)
    ) {
      const t = Oa._svgFactory.createElement("mask");
      (s.append(t),
        (r = `mask_p${this.pageIndex}_${e}`),
        t.setAttribute("id", r),
        t.setAttribute("maskUnits", "objectBoundingBox"));
      const i = Oa._svgFactory.createElement("rect");
      (t.append(i),
        i.setAttribute("width", "1"),
        i.setAttribute("height", "1"),
        i.setAttribute("fill", "white"));
      const n = Oa._svgFactory.createElement("use");
      (t.append(n),
        n.setAttribute("href", `#${a}`),
        n.setAttribute("stroke", "none"),
        n.setAttribute("fill", "black"),
        n.setAttribute("fill-rule", "nonzero"),
        n.classList.add("mask"));
    }
    const o = Oa._svgFactory.createElement("use");
    (i.append(o),
      o.setAttribute("href", `#${a}`),
      r && o.setAttribute("mask", `url(#${r})`));
    const h = o.cloneNode();
    return (
      i.append(h),
      o.classList.add("mainOutline"),
      h.classList.add("secondaryOutline"),
      this.#oo.set(e, i),
      e
    );
  }
  finalizeLine(t, e) {
    const i = this.#ho.get(t);
    (this.#ho.delete(t),
      this.updateBox(t, e.box),
      i.setAttribute("d", e.toSVGPath()));
  }
  updateLine(t, e) {
    this.#oo.get(t).firstChild.firstChild.setAttribute("d", e.toSVGPath());
  }
  updatePath(t, e) {
    this.#ho.get(t).setAttribute("d", e.toSVGPath());
  }
  updateBox(t, e) {
    Oa.#lo(this.#oo.get(t), e);
  }
  show(t, e) {
    this.#oo.get(t).classList.toggle("hidden", !e);
  }
  rotate(t, e) {
    this.#oo.get(t).setAttribute("data-main-rotation", e);
  }
  changeColor(t, e) {
    this.#oo.get(t).setAttribute("fill", e);
  }
  changeOpacity(t, e) {
    this.#oo.get(t).setAttribute("fill-opacity", e);
  }
  addClass(t, e) {
    this.#oo.get(t).classList.add(e);
  }
  removeClass(t, e) {
    this.#oo.get(t).classList.remove(e);
  }
  getSVGRoot(t) {
    return this.#oo.get(t);
  }
  remove(t) {
    (this.#ho.delete(t),
      null !== this.#Fs && (this.#oo.get(t).remove(), this.#oo.delete(t)));
  }
  destroy() {
    this.#Fs = null;
    for (const t of this.#oo.values()) t.remove();
    (this.#oo.clear(), this.#ho.clear());
  }
}
var Ba = Ct.AbortException,
  za = Ct.AnnotationEditorLayer,
  Ha = Ct.AnnotationEditorParamsType,
  Ua = Ct.AnnotationEditorType,
  ja = Ct.AnnotationEditorUIManager,
  $a = Ct.AnnotationLayer,
  Ga = Ct.AnnotationMode,
  Va = Ct.ColorPicker,
  Wa = Ct.DOMSVGFactory,
  qa = Ct.DrawLayer,
  Ya = Ct.FeatureTest,
  Xa = Ct.GlobalWorkerOptions,
  Ka = Ct.ImageKind,
  Qa = Ct.InvalidPDFException,
  Ja = Ct.MissingPDFException,
  Za = Ct.OPS,
  tr = Ct.OutputScale,
  er = Ct.PDFDataRangeTransport,
  ir = Ct.PDFDateString,
  sr = Ct.PDFWorker,
  nr = Ct.PasswordResponses,
  ar = Ct.PermissionFlag,
  rr = Ct.PixelsPerInch,
  or = Ct.RenderingCancelledException,
  hr = Ct.TextLayer,
  lr = Ct.UnexpectedResponseException,
  cr = Ct.Util,
  dr = Ct.VerbosityLevel,
  ur = Ct.XfaLayer,
  pr = Ct.build,
  gr = Ct.createValidAbsoluteUrl,
  fr = Ct.fetchData,
  mr = Ct.getDocument,
  br = Ct.getFilenameFromUrl,
  vr = Ct.getPdfFilenameFromUrl,
  Ar = Ct.getXfaPageViewport,
  yr = Ct.isDataScheme,
  wr = Ct.isPdfFile,
  _r = Ct.noContextMenu,
  xr = Ct.normalizeUnicode,
  Cr = Ct.setLayerDimensions,
  Er = Ct.shadow,
  Sr = Ct.version,
  Tr = {},
  Mr = t({ __proto__: null, default: Tr }, [Tr]);
export {
  Ba as AbortException,
  za as AnnotationEditorLayer,
  Ha as AnnotationEditorParamsType,
  Ua as AnnotationEditorType,
  ja as AnnotationEditorUIManager,
  $a as AnnotationLayer,
  Ga as AnnotationMode,
  Va as ColorPicker,
  Wa as DOMSVGFactory,
  qa as DrawLayer,
  Ya as FeatureTest,
  Xa as GlobalWorkerOptions,
  Ka as ImageKind,
  Qa as InvalidPDFException,
  Ja as MissingPDFException,
  Za as OPS,
  tr as OutputScale,
  er as PDFDataRangeTransport,
  ir as PDFDateString,
  sr as PDFWorker,
  nr as PasswordResponses,
  ar as PermissionFlag,
  rr as PixelsPerInch,
  or as RenderingCancelledException,
  hr as TextLayer,
  lr as UnexpectedResponseException,
  cr as Util,
  dr as VerbosityLevel,
  ur as XfaLayer,
  pr as build,
  gr as createValidAbsoluteUrl,
  fr as fetchData,
  mr as getDocument,
  br as getFilenameFromUrl,
  vr as getPdfFilenameFromUrl,
  Ar as getXfaPageViewport,
  yr as isDataScheme,
  wr as isPdfFile,
  _r as noContextMenu,
  xr as normalizeUnicode,
  Cr as setLayerDimensions,
  Er as shadow,
  Sr as version,
};
export default null;
//# sourceMappingURL=/sm/ef79f7c6d493ccbc3006b995e3ec3be9a31ee3240659d31765fb4517160bfe7a.map
