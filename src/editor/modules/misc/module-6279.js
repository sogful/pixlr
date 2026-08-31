window.__editorModules[6279] = function (t, e, s) {
      function i(t) {
        if (!t || t.width === 0 || t.height === 0) {
          return null;
        }
        const e = t.getContext("2d", {
          willReadFrequently: true
        });
        if (e) {
          return {
            data: e.getImageData(0, 0, t.width, t.height),
            width: t.width,
            height: t.height
          };
        } else {
          return null;
        }
      }
      function a(t) {
        if (!t) {
          return null;
        }
        const e = document.createElement("canvas");
        e.width = t.width;
        e.height = t.height;
        e.getContext("2d", {
          willReadFrequently: true
        }).putImageData(t.data, 0, 0);
        return e;
      }
      s.d(e, {
        $z: () => i,
        Mo: () => a
      });
      const n = new class {
        constructor() {
          this.pool = [];
          this.backingStore = new WeakMap();
          this.registry = new Set();
          this.recycleEvents = 0;
        }
        acquire(t, e) {
          if (t < 1) {
            t = 1;
          }
          if (e < 1) {
            e = 1;
          }
          const i = this.pool.pop() ?? document.createElement("canvas");
          i.width = t;
          i.height = e;
          return i;
        }
        release(t) {
          if (t) {
            this.backingStore.delete(t);
            this.registry.delete(t);
            if (this.pool.length < 20) {
              t.width = 1;
              t.height = 1;
              this.pool.push(t);
            }
          }
        }
        backup(t) {
          if (!t || t.width === 0 || t.height === 0) {
            return;
          }
          const e = t.getContext("2d", {
            willReadFrequently: true
          });
          if (e) {
            this.backingStore.set(t, e.getImageData(0, 0, t.width, t.height));
            this.registry.add(t);
          }
        }
        unregister(t) {
          if (t) {
            this.backingStore.delete(t);
            this.registry.delete(t);
          }
        }
        isRecycled(t) {
          const e = this.backingStore.get(t);
          if (!e) {
            return false;
          }
          const s = t.getContext("2d");
          if (!s) {
            return false;
          }
          const i = t.width;
          const a = t.height;
          if (i !== e.width || a !== e.height) {
            return false;
          }
          const n = s.getImageData(0, 0, i, a).data;
          const o = [[0, 0], [i - 1, 0], [0, a - 1], [i - 1, a - 1], [i >> 1, a >> 1]];
          for (const [r, h] of o) {
            const t = (h * i + r) * 4;
            if (e.data[t + 3] !== 0 && (n[t] !== e.data[t] || n[t + 1] !== e.data[t + 1] || n[t + 2] !== e.data[t + 2] || n[t + 3] !== e.data[t + 3])) {
              return true;
            }
          }
          return false;
        }
        restore(t) {
          const e = this.backingStore.get(t);
          if (!e) {
            return false;
          }
          const s = t.getContext("2d", {
            willReadFrequently: true
          });
          return !!s && (t.width === e.width && t.height === e.height || (t.width = e.width, t.height = e.height), s.putImageData(e, 0, 0), this.recycleEvents++, true);
        }
        ensure(t) {
          return !!t && !!this.isRecycled(t) && this.restore(t);
        }
        backupAll(t) {
          for (const e of t) {
            if (e) {
              this.backup(e);
            }
          }
        }
        ensureAll(t) {
          let e = false;
          for (const s of t) {
            if (s && this.ensure(s)) {
              e = true;
            }
          }
          return e;
        }
        get diagnostics() {
          return {
            poolSize: this.pool.length,
            registeredBackups: this.registry.size,
            recycleEvents: this.recycleEvents
          };
        }
      }();
      s.d(e, ["mM", 0, n]);
    }
