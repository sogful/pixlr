window.__editorModules[9973] = function (t, e, s) {
      s.d(e, {
        P2: () => n
      });
      var i;
      var a = s(5699);
      async function n() {
        try {
          return await h.open();
        } catch (t) {
          return Promise.resolve(new d());
        }
      }
      class o {
        constructor(t) {
          this.next = () => this.queue.pop();
          this.queue = [new a.wc()];
          let e = this.queue[0];
          t.onsuccess = () => {
            const s = t.result;
            if (s) {
              e.resolve({
                done: false,
                value: s.value
              });
              e = new a.wc();
              this.queue.unshift(e);
              s.continue();
            } else {
              e.resolve({
                done: true,
                value: undefined
              });
            }
          };
          t.onerror = () => {
            e.reject(t.error);
          };
        }
        [Symbol.asyncIterator]() {
          return this;
        }
      }
      class r {
        constructor(t) {
          this.inner = t;
        }
        static bound(t, e, s = false, i = false) {
          return new r(IDBKeyRange.bound(t, e, s, i));
        }
        static lowerBound(t, e) {
          return new r(IDBKeyRange.lowerBound(t, e));
        }
        static upperBound(t, e) {
          return new r(IDBKeyRange.upperBound(t, e));
        }
        static only(t) {
          return new r(IDBKeyRange.only(t));
        }
        static unwrap(t) {
          if (t instanceof r) {
            return t.inner;
          } else {
            return t;
          }
        }
      }
      class h {
        constructor(t) {
          this.underlying = t;
        }
        static availiable() {
          return !navigator.userAgent.includes("Edge") && !!window.indexedDB;
        }
        transaction(t, ...e) {
          const s = this.underlying.transaction(e, t);
          return e.map(t => new l(s.objectStore(t)));
        }
      }
      i = h;
      h.open = async () => i.availiable() ? new Promise((t, e) => {
        const s = window.indexedDB.open("pixlr", 2);
        s.onupgradeneeded = t => {
          const e = s.result;
          if (t.oldVersion === 0) {
            e.createObjectStore("blobs");
            e.createObjectStore("fonts");
            e.createObjectStore("document-meta", {
              keyPath: "id"
            });
            e.createObjectStore("document-selection");
            e.createObjectStore("document-thumbnail");
            e.createObjectStore("layer-meta", {
              keyPath: "id"
            }).createIndex("document", "document");
            e.createObjectStore("layer-mask");
            e.createObjectStore("layer-bitmap");
          } else {
            e.deleteObjectStore("history");
          }
        };
        s.onerror = t => e(s.error);
        s.onsuccess = () => t(new i(s.result));
      }) : Promise.reject(new Error("Browser does not support indexedDB"));
      class l {
        constructor(t) {
          this.underlying = t;
        }
        get(t) {
          return new Promise((e, s) => {
            const i = this.underlying.get(t);
            i.onsuccess = () => e(i.result);
            i.onerror = () => s(i.error);
          });
        }
        getAll(t, e) {
          return new Promise((s, i) => {
            const a = this.underlying.getAll(r.unwrap(t), e);
            a.onsuccess = () => s(a.result);
            a.onerror = () => i(a.error);
          });
        }
        iterate(t, e) {
          const s = this.underlying.openCursor(r.unwrap(t), e);
          return new o(s);
        }
        index(t) {
          const e = this.underlying.index(t);
          return new c(e);
        }
        cursor(t, e, s) {
          return new Promise((i, a) => {
            const n = this.underlying.openCursor(r.unwrap(e), s);
            n.onsuccess = () => {
              const e = n.result;
              if (e) {
                const s = t(e.value, e);
                if (typeof s == "number") {
                  e.advance(s);
                } else if (s !== false) {
                  e.continue();
                } else {
                  i();
                }
              } else {
                i();
              }
            };
            n.onerror = () => a(n.error);
          });
        }
        put(t, e) {
          return new Promise((s, i) => {
            const a = this.underlying.put(t, e);
            a.onsuccess = () => {
              s();
            };
            a.onerror = () => {
              i(a.error);
            };
          });
        }
        add(t, e) {
          return new Promise((s, i) => {
            const a = this.underlying.add(t, e);
            a.onsuccess = () => {
              s();
            };
            a.onerror = () => {
              i(a.error);
            };
          });
        }
        clear() {
          return new Promise((t, e) => {
            let s = this.underlying.clear();
            s.onsuccess = () => t();
            s.onerror = () => e(s.error);
          });
        }
        count(t) {
          return new Promise((e, s) => {
            let i;
            i = t === undefined ? this.underlying.count() : this.underlying.count(r.unwrap(t));
            i.onsuccess = () => e(i.result);
            i.onerror = () => s(i.error);
          });
        }
        delete(t) {
          return new Promise((e, s) => {
            const i = this.underlying.delete(r.unwrap(t));
            i.onsuccess = () => e();
            i.onerror = () => s(i.error);
          });
        }
      }
      class c {
        constructor(t) {
          this.underlying = t;
          this.name = t.name;
          this.keyPath = t.keyPath;
          this.multiEntry = t.multiEntry;
          this.unique = t.unique;
        }
        get(t) {
          return new Promise((e, s) => {
            const i = this.underlying.get(t);
            i.onsuccess = () => e(i.result);
            i.onerror = () => s(i.error);
          });
        }
        getAll(t, e) {
          return new Promise((s, i) => {
            const a = this.underlying.getAll(r.unwrap(t), e);
            a.onsuccess = () => s(a.result);
            a.onerror = () => i(a.error);
          });
        }
        count(t) {
          return new Promise((e, s) => {
            let i;
            i = t === undefined ? this.underlying.count() : this.underlying.count(r.unwrap(t));
            i.onsuccess = () => e(i.result);
            i.onerror = () => s(i.error);
          });
        }
        cursor(t, e, s) {
          return new Promise((i, a) => {
            const n = this.underlying.openCursor(r.unwrap(e), s);
            n.onsuccess = () => {
              const e = n.result;
              if (e) {
                t(e.value, e);
                e.continue();
              } else {
                i();
              }
            };
            n.onerror = () => a(n.error);
          });
        }
        iterate(t, e) {
          const s = this.underlying.openCursor(r.unwrap(t), e);
          return new o(s);
        }
        getAllKeys(t, e) {
          return new Promise((s, i) => {
            const a = this.underlying.getAllKeys(r.unwrap(t), e);
            a.onsuccess = () => s(a.result);
            a.onerror = () => i(a.error);
          });
        }
      }
      class d {
        transaction(t, ...e) {
          return e.map(t => new u(t));
        }
      }
      class u {
        constructor(t) {
          this.name = t;
        }
        index(t) {
          return this;
        }
        put(t, e) {}
        add(t, e) {}
        clear() {}
        delete(t) {}
        async get(t) {}
        async getAll(t, e) {
          return [];
        }
        async count(t) {
          return 0;
        }
        async cursor(t, e, s) {}
        iterate(t, e) {
          return {
            next: () => Promise.resolve({
              done: true,
              value: undefined
            }),
            [Symbol.asyncIterator]() {
              return this;
            }
          };
        }
      }
    }
