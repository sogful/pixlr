window.__editorModules[9821] = function (t, e, s) {
      s.d(e, {
        Ad: () => I,
        HY: () => j,
        NT: () => D,
        Py: () => q,
        Qj: () => V,
        Qm: () => H,
        Qn: () => W,
        TD: () => L,
        TX: () => P,
        UM: () => M,
        Vx: () => N,
        Wd: () => z,
        Zi: () => $,
        _4: () => O,
        _k: () => B,
        bk: () => G,
        gC: () => T,
        l9: () => F,
        lI: () => n,
        tc: () => R,
        yc: () => X,
        zP: () => U,
        zg: () => _
      });
      var i = s(3244);
      let a;
      function n(t) {
        a = t;
      }
      t = s.hmd(t);
      const o = new Array(128).fill(undefined);
      o.push(undefined, null, true, false);
      let r = o.length;
      function h(t) {
        if (r === o.length) {
          o.push(o.length + 1);
        }
        const e = r;
        r = o[e];
        o[e] = t;
        return e;
      }
      function l(t) {
        return o[t];
      }
      function c(t) {
        const e = l(t);
        (function (t) {
          if (!(t < 132)) {
            o[t] = r;
            r = t;
          }
        })(t);
        return e;
      }
      let d = new (typeof TextDecoder == "undefined" ? (0, t.require)("util").TextDecoder : TextDecoder)("utf-8", {
        ignoreBOM: true,
        fatal: true
      });
      d.decode();
      let u = null;
      function p() {
        if (u === null || u.byteLength === 0) {
          u = new Uint8Array(a.memory.buffer);
        }
        return u;
      }
      function g(t, e) {
        t >>>= 0;
        return d.decode(p().subarray(t, t + e));
      }
      let m = 0;
      function y(t, e) {
        const s = e(t.length * 1, 1) >>> 0;
        p().set(t, s / 1);
        m = t.length;
        return s;
      }
      let v = new (typeof TextEncoder == "undefined" ? (0, t.require)("util").TextEncoder : TextEncoder)("utf-8");
      const f = typeof v.encodeInto == "function" ? function (t, e) {
        return v.encodeInto(t, e);
      } : function (t, e) {
        const s = v.encode(t);
        e.set(s);
        return {
          read: t.length,
          written: s.length
        };
      };
      function w(t, e, s) {
        if (s === undefined) {
          const s = v.encode(t);
          const i = e(s.length, 1) >>> 0;
          p().subarray(i, i + s.length).set(s);
          m = s.length;
          return i;
        }
        let i = t.length;
        let a = e(i, 1) >>> 0;
        const n = p();
        let o = 0;
        for (; o < i; o++) {
          const e = t.charCodeAt(o);
          if (e > 127) {
            break;
          }
          n[a + o] = e;
        }
        if (o !== i) {
          if (o !== 0) {
            t = t.slice(o);
          }
          a = s(a, i, i = o + t.length * 3, 1) >>> 0;
          const e = p().subarray(a + o, a + i);
          o += f(t, e).written;
        }
        m = o;
        return a;
      }
      let x = null;
      function b() {
        if (x === null || x.byteLength === 0) {
          x = new Int32Array(a.memory.buffer);
        }
        return x;
      }
      let A = null;
      function k(t, e) {
        t >>>= 0;
        return (A !== null && A.byteLength !== 0 || (A = new Uint8ClampedArray(a.memory.buffer)), A).subarray(t / 1, t / 1 + e);
      }
      function S(t, e) {
        t >>>= 0;
        return p().subarray(t / 1, t / 1 + e);
      }
      let E = null;
      function C(t, e) {
        t >>>= 0;
        return (E !== null && E.byteLength !== 0 || (E = new Float32Array(a.memory.buffer)), E).subarray(t / 4, t / 4 + e);
      }
      function T(t, e, s) {
        try {
          const r = a.__wbindgen_add_to_stack_pointer(-16);
          const h = y(s, a.__wbindgen_malloc);
          const l = m;
          a.distanceTransform(r, t, e, h, l);
          var i = b()[r / 4 + 0];
          var n = b()[r / 4 + 1];
          var o = C(i, n).slice();
          a.__wbindgen_free(i, n * 4);
          return o;
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }
      function L(t, e, s) {
        try {
          const r = a.__wbindgen_add_to_stack_pointer(-16);
          const h = y(s, a.__wbindgen_malloc);
          const l = m;
          a.distanceTransformInv(r, t, e, h, l);
          var i = b()[r / 4 + 0];
          var n = b()[r / 4 + 1];
          var o = C(i, n).slice();
          a.__wbindgen_free(i, n * 4);
          return o;
        } finally {
          a.__wbindgen_add_to_stack_pointer(16);
        }
      }
      class M {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(M.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_displacement_free(t);
        }
        constructor(t, e, s, i, n, o) {
          const r = y(t, a.__wbindgen_malloc);
          const h = m;
          const l = a.displacement_new(r, h, e, s, i, n, o);
          return M.__wrap(l);
        }
        beginStroke() {
          const t = a.displacement_beginStroke(this.__wbg_ptr);
          return R.__wrap(t);
        }
        setStampSize(t) {
          a.displacement_setStampSize(this.__wbg_ptr, t);
        }
        setDensity(t) {
          a.displacement_setDensity(this.__wbg_ptr, t);
        }
        setStrength(t) {
          a.displacement_setStrength(this.__wbg_ptr, t);
        }
        retarget(t, e, s) {
          const i = y(t, a.__wbindgen_malloc);
          const n = m;
          a.displacement_retarget(this.__wbg_ptr, i, n, e, s);
        }
        setMode(t) {
          const e = w(t, a.__wbindgen_malloc, a.__wbindgen_realloc);
          const s = m;
          a.displacement_setMode(this.__wbg_ptr, e, s);
        }
        applyFast(t) {
          return c(a.displacement_applyFast(this.__wbg_ptr, h(t)));
        }
        applyQuality(t) {
          return c(a.displacement_applyQuality(this.__wbg_ptr, h(t)));
        }
      }
      class P {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(P.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_gif_free(t);
        }
        constructor(t, e, s) {
          try {
            const o = a.__wbindgen_add_to_stack_pointer(-16);
            a.gif_new(o, t, e, s);
            var i = b()[o / 4 + 0];
            var n = b()[o / 4 + 1];
            if (b()[o / 4 + 2]) {
              throw c(n);
            }
            return P.__wrap(i);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        addFrame(t, e, s) {
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            const o = y(t, a.__wbindgen_malloc);
            const r = m;
            a.gif_addFrame(n, this.__wbg_ptr, o, r, e, s);
            var i = b()[n / 4 + 0];
            if (b()[n / 4 + 1]) {
              throw c(i);
            }
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        takeResult() {
          try {
            const i = this.__destroy_into_raw();
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            a.gif_takeResult(n, i);
            var t = b()[n / 4 + 0];
            var e = b()[n / 4 + 1];
            var s = k(t, e).slice();
            a.__wbindgen_free(t, e * 1);
            return s;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
      }
      class D {
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_gifbuffer_free(t);
        }
      }
      class z {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(z.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_layer_free(t);
        }
        get kind() {
          let t;
          let e;
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            a.layer_kind(n, this.__wbg_ptr);
            var s = b()[n / 4 + 0];
            var i = b()[n / 4 + 1];
            t = s;
            e = i;
            return g(s, i);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
            a.__wbindgen_free(t, e, 1);
          }
        }
        get x() {
          return a.layer_x(this.__wbg_ptr);
        }
        get y() {
          return a.layer_y(this.__wbg_ptr);
        }
        get name() {
          let t;
          let e;
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            a.layer_name(n, this.__wbg_ptr);
            var s = b()[n / 4 + 0];
            var i = b()[n / 4 + 1];
            t = s;
            e = i;
            return g(s, i);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
            a.__wbindgen_free(t, e, 1);
          }
        }
        get width() {
          return a.layer_width(this.__wbg_ptr);
        }
        get height() {
          return a.layer_height(this.__wbg_ptr);
        }
        get alpha() {
          return a.layer_alpha(this.__wbg_ptr);
        }
        get blendMode() {
          let t;
          let e;
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            a.layer_blendMode(n, this.__wbg_ptr);
            var s = b()[n / 4 + 0];
            var i = b()[n / 4 + 1];
            t = s;
            e = i;
            return g(s, i);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
            a.__wbindgen_free(t, e, 1);
          }
        }
        get visible() {
          return a.layer_visible(this.__wbg_ptr) !== 0;
        }
        get locked() {
          return a.layer_locked(this.__wbg_ptr) !== 0;
        }
        get rotation() {
          return a.layer_rotation(this.__wbg_ptr);
        }
        takeCanvas() {
          try {
            const i = a.__wbindgen_add_to_stack_pointer(-16);
            a.layer_takeCanvas(i, this.__wbg_ptr);
            var t = b()[i / 4 + 0];
            var e = b()[i / 4 + 1];
            var s = k(t, e).slice();
            a.__wbindgen_free(t, e * 1);
            return s;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        takeMask() {
          try {
            const i = a.__wbindgen_add_to_stack_pointer(-16);
            a.layer_takeMask(i, this.__wbg_ptr);
            var t = b()[i / 4 + 0];
            var e = b()[i / 4 + 1];
            var s = k(t, e).slice();
            a.__wbindgen_free(t, e * 1);
            return s;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        get meta() {
          let t;
          let e;
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            a.layer_meta(n, this.__wbg_ptr);
            var s = b()[n / 4 + 0];
            var i = b()[n / 4 + 1];
            t = s;
            e = i;
            return g(s, i);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
            a.__wbindgen_free(t, e, 1);
          }
        }
      }
      class I {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(I.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_mp4_free(t);
        }
        constructor(t) {
          try {
            const i = a.__wbindgen_add_to_stack_pointer(-16);
            a.mp4_new(i, t);
            var e = b()[i / 4 + 0];
            var s = b()[i / 4 + 1];
            if (b()[i / 4 + 2]) {
              throw c(s);
            }
            return I.__wrap(e);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        addVideoTrack(t, e, s) {
          try {
            const o = a.__wbindgen_add_to_stack_pointer(-16);
            const r = y(s, a.__wbindgen_malloc);
            const h = m;
            a.mp4_addVideoTrack(o, this.__wbg_ptr, t, e, r, h);
            var i = b()[o / 4 + 0];
            var n = b()[o / 4 + 1];
            if (b()[o / 4 + 2]) {
              throw c(n);
            }
            return i >>> 0;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        addFrame(t, e, s, i, n, o) {
          try {
            const h = a.__wbindgen_add_to_stack_pointer(-16);
            const l = y(o, a.__wbindgen_malloc);
            const d = m;
            a.mp4_addFrame(h, this.__wbg_ptr, t, e, s, i, n, l, d);
            var r = b()[h / 4 + 0];
            if (b()[h / 4 + 1]) {
              throw c(r);
            }
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        fetchFile() {
          try {
            const n = this.__destroy_into_raw();
            const o = a.__wbindgen_add_to_stack_pointer(-16);
            a.mp4_fetchFile(o, n);
            var t = b()[o / 4 + 0];
            var e = b()[o / 4 + 1];
            var s = b()[o / 4 + 2];
            if (b()[o / 4 + 3]) {
              throw c(s);
            }
            var i = S(t, e).slice();
            a.__wbindgen_free(t, e * 1);
            return i;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
      }
      class F {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(F.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_pxd_free(t);
        }
        get width() {
          return a.__wbg_get_pxd_width(this.__wbg_ptr);
        }
        set width(t) {
          a.__wbg_set_pxd_width(this.__wbg_ptr, t);
        }
        get height() {
          return a.__wbg_get_pxd_height(this.__wbg_ptr);
        }
        set height(t) {
          a.__wbg_set_pxd_height(this.__wbg_ptr, t);
        }
        get layers() {
          return a.__wbg_get_pxd_layers(this.__wbg_ptr);
        }
        set layers(t) {
          a.__wbg_set_pxd_layers(this.__wbg_ptr, t);
        }
        static decode(t) {
          try {
            const i = a.__wbindgen_add_to_stack_pointer(-16);
            const n = y(t, a.__wbindgen_malloc);
            const o = m;
            a.pxd_decode(i, n, o);
            var e = b()[i / 4 + 0];
            var s = b()[i / 4 + 1];
            if (b()[i / 4 + 2]) {
              throw c(s);
            }
            return F.__wrap(e);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        takeNextLayer() {
          try {
            const s = a.__wbindgen_add_to_stack_pointer(-16);
            a.pxd_takeNextLayer(s, this.__wbg_ptr);
            var t = b()[s / 4 + 0];
            var e = b()[s / 4 + 1];
            if (b()[s / 4 + 2]) {
              throw c(e);
            }
            return z.__wrap(t);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
      }
      class R {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(R.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_stroke_free(t);
        }
        push(t, e, s) {
          return c(a.stroke_push(this.__wbg_ptr, t, e, s));
        }
      }
      class _ {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(_.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_zipreader_free(t);
        }
        constructor(t) {
          try {
            const i = a.__wbindgen_add_to_stack_pointer(-16);
            const n = y(t, a.__wbindgen_malloc);
            const o = m;
            a.zipreader_new(i, n, o);
            var e = b()[i / 4 + 0];
            var s = b()[i / 4 + 1];
            if (b()[i / 4 + 2]) {
              throw c(s);
            }
            return _.__wrap(e);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        readFile(t) {
          try {
            const o = a.__wbindgen_add_to_stack_pointer(-16);
            const r = w(t, a.__wbindgen_malloc, a.__wbindgen_realloc);
            const h = m;
            a.zipreader_readFile(o, this.__wbg_ptr, r, h);
            var e = b()[o / 4 + 0];
            var s = b()[o / 4 + 1];
            var i = b()[o / 4 + 2];
            if (b()[o / 4 + 3]) {
              throw c(i);
            }
            var n = S(e, s).slice();
            a.__wbindgen_free(e, s * 1);
            return n;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        readString(t) {
          let e;
          let s;
          try {
            const d = a.__wbindgen_add_to_stack_pointer(-16);
            const u = w(t, a.__wbindgen_malloc, a.__wbindgen_realloc);
            const p = m;
            a.zipreader_readString(d, this.__wbg_ptr, u, p);
            var i = b()[d / 4 + 0];
            var n = b()[d / 4 + 1];
            var o = b()[d / 4 + 2];
            var r = b()[d / 4 + 3];
            var h = i;
            var l = n;
            if (r) {
              h = 0;
              l = 0;
              throw c(o);
            }
            e = h;
            s = l;
            return g(h, l);
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
            a.__wbindgen_free(e, s, 1);
          }
        }
      }
      class N {
        static __wrap(t) {
          t >>>= 0;
          const e = Object.create(N.prototype);
          e.__wbg_ptr = t;
          return e;
        }
        __destroy_into_raw() {
          const t = this.__wbg_ptr;
          this.__wbg_ptr = 0;
          return t;
        }
        free() {
          const t = this.__destroy_into_raw();
          a.__wbg_zipwriter_free(t);
        }
        constructor() {
          const t = a.zipwriter_new();
          return N.__wrap(t);
        }
        writeFile(t, e, s) {
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            const o = w(t, a.__wbindgen_malloc, a.__wbindgen_realloc);
            const r = m;
            const h = y(e, a.__wbindgen_malloc);
            const l = m;
            a.zipwriter_writeFile(n, this.__wbg_ptr, o, r, h, l, s);
            var i = b()[n / 4 + 0];
            if (b()[n / 4 + 1]) {
              throw c(i);
            }
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        writeString(t, e, s) {
          try {
            const n = a.__wbindgen_add_to_stack_pointer(-16);
            const o = w(t, a.__wbindgen_malloc, a.__wbindgen_realloc);
            const r = m;
            const h = w(e, a.__wbindgen_malloc, a.__wbindgen_realloc);
            const l = m;
            a.zipwriter_writeFile(n, this.__wbg_ptr, o, r, h, l, s);
            var i = b()[n / 4 + 0];
            if (b()[n / 4 + 1]) {
              throw c(i);
            }
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
        finish() {
          try {
            const n = this.__destroy_into_raw();
            const o = a.__wbindgen_add_to_stack_pointer(-16);
            a.zipwriter_finish(o, n);
            var t = b()[o / 4 + 0];
            var e = b()[o / 4 + 1];
            var s = b()[o / 4 + 2];
            if (b()[o / 4 + 3]) {
              throw c(s);
            }
            var i = S(t, e).slice();
            a.__wbindgen_free(t, e * 1);
            return i;
          } finally {
            a.__wbindgen_add_to_stack_pointer(16);
          }
        }
      }
      function B(t) {
        return l(t).x;
      }
      function O(t) {
        return l(t).y;
      }
      function U(t) {
        return l(t).width;
      }
      function H(t) {
        return l(t).height;
      }
      function q() {
        return h(a.memory);
      }
      function V(t) {
        return h(l(t).buffer);
      }
      function $(t, e, s) {
        return h(new Uint8ClampedArray(l(t), e >>> 0, s >>> 0));
      }
      function G(t) {
        c(t);
      }
      function j(t, e, s, a) {
        return h(new i.A(t, e, s, a));
      }
      function X(t, e) {
        return h(g(t, e));
      }
      function W(t, e) {
        throw new Error(g(t, e));
      }
    }
