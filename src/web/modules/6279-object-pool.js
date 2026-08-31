window.__webModules[6279] = function (e, t, i) {
      const n = new class {
        constructor() {
          this.pool = [];
          this.backingStore = new WeakMap();
          this.registry = new Set();
          this.recycleEvents = 0;
        }
        acquire(e, t) {
          if (e < 1) {
            e = 1;
          }
          if (t < 1) {
            t = 1;
          }
          const n = this.pool.pop() ?? document.createElement("canvas");
          n.width = e;
          n.height = t;
          return n;
        }
        release(e) {
          if (e) {
            this.backingStore.delete(e);
            this.registry.delete(e);
            if (this.pool.length < 20) {
              e.width = 1;
              e.height = 1;
              this.pool.push(e);
            }
          }
        }
        backup(e) {
          if (!e || e.width === 0 || e.height === 0) {
            return;
          }
          const t = e.getContext("2d", {
            willReadFrequently: true
          });
          if (t) {
            this.backingStore.set(e, t.getImageData(0, 0, e.width, e.height));
            this.registry.add(e);
          }
        }
        unregister(e) {
          if (e) {
            this.backingStore.delete(e);
            this.registry.delete(e);
          }
        }
        isRecycled(e) {
          const t = this.backingStore.get(e);
          if (!t) {
            return false;
          }
          const i = e.getContext("2d");
          if (!i) {
            return false;
          }
          const n = e.width;
          const a = e.height;
          if (n !== t.width || a !== t.height) {
            return false;
          }
          const o = i.getImageData(0, 0, n, a).data;
          const s = [[0, 0], [n - 1, 0], [0, a - 1], [n - 1, a - 1], [n >> 1, a >> 1]];
          for (const [r, c] of s) {
            const e = (c * n + r) * 4;
            if (t.data[e + 3] !== 0 && (o[e] !== t.data[e] || o[e + 1] !== t.data[e + 1] || o[e + 2] !== t.data[e + 2] || o[e + 3] !== t.data[e + 3])) {
              return true;
            }
          }
          return false;
        }
        restore(e) {
          const t = this.backingStore.get(e);
          if (!t) {
            return false;
          }
          const i = e.getContext("2d", {
            willReadFrequently: true
          });
          return !!i && (e.width === t.width && e.height === t.height || (e.width = t.width, e.height = t.height), i.putImageData(t, 0, 0), this.recycleEvents++, true);
        }
        ensure(e) {
          return !!e && !!this.isRecycled(e) && this.restore(e);
        }
        backupAll(e) {
          for (const t of e) {
            if (t) {
              this.backup(t);
            }
          }
        }
        ensureAll(e) {
          let t = false;
          for (const i of e) {
            if (i && this.ensure(i)) {
              t = true;
            }
          }
          return t;
        }
        get diagnostics() {
          return {
            poolSize: this.pool.length,
            registeredBackups: this.registry.size,
            recycleEvents: this.recycleEvents
          };
        }
      }();
      i.d(t, ["mM", 0, n]);
    }
