window.__editorModules[2334] = function (t, e, s) {
      s.d(e, {
        DocumentMeta: () => w,
        z: () => x
      });
      var i = s(9973);
      var a = s(5699);
      var n = s(5056);
      var o = s(3244);
      var r = s(2216);
      var h = s(7732);
      var l = s(4932);
      var c = s(9632);
      var d = s(5887);
      var u = s(749);
      var p = s(8464);
      var g = s(7516);
      var m = s(1736);
      var y = s(4182);
      var v = s(4358);
      var f = s(6238);
      class w {
        constructor(t, e, s, i, a) {
          this.name = e;
          this.width = s;
          this.height = i;
          this.color = a;
          this.id = t;
          this.lastModified = new Date();
          this.pinned = false;
          this.timeoutId = null;
        }
        async restore(t) {
          const e = await (0, i.P2)();
          try {
            const [s, i] = e.transaction("readonly", "layer-meta", "document-selection");
            const [n, r] = await Promise.all([s.index("document").getAll(this.id), i.get(this.id)]);
            this.order ||= n.sort((t, e) => t.order - e.order).map(t => t.id);
            let h = [];
            this.order.forEach(t => {
              const e = n.find(e => e.id === t);
              if (e) {
                if (e.type === "bitmap") {
                  e.type = u.A.TYPE_IMAGE;
                }
                if (e.settings.rotation && e.rect && e.rect.rotation === undefined) {
                  e.rect.rotation = e.settings.rotation;
                }
                if (e.rect && e.rect.rotation === undefined) {
                  e.rect = new o.A(e.rect.x, e.rect.y, e.rect.width, e.rect.height, 0);
                }
                h.push(e);
              }
            });
            if (h.length !== n.length) {
              console.warn("Had layers that could not be sorted, this is a problem");
              const t = n.filter(t => !this.order.includes(t.id));
              h = h.concat(t);
            }
            if (r) {
              t.addSelection();
              const e = t.selection;
              e.mask = await a.lz(r);
              e.ctx = e.mask.getContext("2d");
              e.createOutline();
            }
            const l = await Promise.all(h.map(async t => {
              const s = a.bD(x, t);
              const [i, n] = e.transaction("readonly", "layer-bitmap", "layer-mask");
              const [o, r] = await Promise.all([i.get(s.id), n.get(s.id)]);
              return s.toLayer(o, r);
            }));
            l.forEach(e => t.layers.push(e));
          } catch (s) {
            console.error("Restore", s);
            throw s;
          }
        }
        async save() {
          const t = await (0, i.P2)();
          const [e] = t.transaction("readwrite", "document-meta");
          await e.put(this);
        }
        async remove() {
          const t = await (0, i.P2)();
          const [e, s, a, n, o, r] = t.transaction("readwrite", "document-meta", "document-thumbnail", "document-selection", "layer-meta", "layer-mask", "layer-bitmap");
          const h = [e.delete(this.id), s.delete(this.id), a.delete(this.id)];
          const l = await n.index("document").getAll(this.id);
          for (let i = 0; i < l.length; i++) {
            const t = l[i];
            h.push(n.delete(t.id));
            h.push(r.delete(t.id));
            h.push(o.delete(t.id));
          }
          await Promise.all(h);
        }
        async pendingRemove(t) {
          const e = setTimeout(async () => {
            await this.remove();
            t(null, this);
          }, 5000);
          this.timeoutId = e;
        }
        async undoRemove() {
          clearTimeout(this.timeoutId);
        }
        static async saveOrder(t) {
          const e = t.layers.map(t => t.id);
          const s = await (0, i.P2)();
          const [a] = s.transaction("readwrite", "document-meta");
          const n = await a.get(t.id);
          n.order = e;
          await a.put(n);
        }
        static async duplicate(t) {
          const e = await (0, i.P2)();
          const [s, n, o, r, h, l] = e.transaction("readwrite", "document-meta", "document-thumbnail", "document-selection", "layer-meta", "layer-mask", "layer-bitmap");
          const c = a.Os();
          const d = [(async () => {
            const e = await n.get(t);
            if (e) {
              await n.add(e, c);
            }
          })(), (async () => {
            const e = await o.get(t);
            if (e) {
              await o.add(e, c);
            }
          })()];
          const u = await r.index("document").getAll(t);
          const p = {};
          for (let i = 0; i < u.length; i++) {
            const t = u[i];
            const e = t.id;
            const s = a.Os();
            p[e] = s;
            d.push((async () => {
              t.id = s;
              t.document = c;
              await r.add(t);
            })(), (async () => {
              const t = await l.get(e);
              if (t) {
                await l.add(t, s);
              }
            })(), (async () => {
              const t = await h.get(e);
              if (t) {
                await h.add(t, s);
              }
            })());
          }
          d.push((async () => {
            const e = await s.get(t);
            e.id = c;
            e.pinned = false;
            e.order = e.order.map(t => p[t]);
            e.lastModified = new Date();
            await s.add(e);
          })());
          await Promise.all(d);
        }
        static async deleteAll() {
          const t = await (0, i.P2)();
          const [e] = t.transaction("readwrite", "document-meta");
          const s = await e.getAll();
          for (let i = 0; i < s.length; i++) {
            const t = a.bD(w, s[i]);
            if (!t.pinned) {
              await t.remove();
            }
          }
        }
        async getThumbnail() {
          const t = await (0, i.P2)();
          const [e] = t.transaction("readonly", "document-thumbnail");
          const s = await e.get(this.id);
          if (s) {
            if (typeof s == "string") {
              return (0, n.kw)(s);
            } else {
              return (0, n.Ep)(s);
            }
          } else {
            return Promise.resolve(undefined);
          }
        }
        static async getAll() {
          const t = await (0, i.P2)();
          const [e] = t.transaction("readonly", "document-meta");
          return (await e.getAll()).map(t => a.bD(w, t));
        }
        static async history() {
          return w.getAll().then(t => t.sort((t, e) => t.lastModified === e.lastModified ? 0 : t.lastModified < e.lastModified ? 1 : -1));
        }
        static async getByID(t) {
          const e = await (0, i.P2)();
          const [s] = e.transaction("readonly", "document-meta");
          const n = await s.get(t);
          return a.bD(w, n);
        }
        async pin() {
          this.pinned = true;
          await this.save();
        }
        async unpin() {
          this.pinned = false;
          await this.save();
        }
      }
      class x {
        constructor(t, e) {
          this.order = 0;
          this.id = t.id;
          this.type = t.type;
          this.document = e;
          this.settings = t.settings;
          this.rect = t.rect;
          this.trim = t.trim;
          if (t instanceof r.A) {
            this.textSettings = t.textSettings;
            this.text = t.text;
          }
          if (t instanceof d.A) {
            this.url = t.url;
            this.variant = t.variant;
            this.scalemethod = t.scalemethod;
          }
          if (t instanceof c.A) {
            this.shapeSettings = t.shapeSettings;
          }
          if (t instanceof l.A) {
            this.frameSettings = t.frameSettings;
          }
          if (t instanceof f.A) {
            this.groupSettings = t.groupSettings;
          }
        }
        async toLayer(t, e) {
          const s = typeof t == "string" ? await a.$e(t) : await a.lz(t);
          const i = typeof e == "string" ? await a.$e(e) : await a.lz(e);
          switch (this.type) {
            case u.A.TYPE_IMAGE:
              {
                const t = new h.A(this.id, this.settings.name, s, a.bD(o.A, this.rect), this.settings.locked);
                if (i) {
                  t.mask = i;
                  t.render();
                }
                t.settings = this.settings;
                return t;
              }
            case u.A.TYPE_ELEMENT:
              {
                const t = new d.A(this.id, this.settings.name, s, this.url, this.variant, this.settings.blendmode, this.scalemethod);
                t.settings = this.settings;
                t.rect = a.bD(o.A, this.rect);
                return t;
              }
            case u.A.TYPE_TEXT:
              {
                const t = new r.A(this.id, this.text, a.bD(o.A, this.rect), a.bD(p.A, this.textSettings));
                t.settings = this.settings;
                await y.A.loadFont(this.textSettings.font);
                t.textSettings.measureText();
                await t.prepare();
                return t;
              }
            case u.A.TYPE_SHAPE:
              {
                const t = new c.A(this.id, this.settings.name, a.bD(o.A, this.rect), a.bD(m.A, this.shapeSettings));
                t.settings = this.settings;
                await t.prepare();
                return t;
              }
            case u.A.TYPE_FRAME:
              {
                const t = new l.A(this.id, this.settings.name, a.bD(o.A, this.rect), a.bD(g.A, this.frameSettings));
                t.canvas = s;
                t.settings = this.settings;
                t.trim = a.bD(o.A, this.trim);
                if (t.canvas) {
                  t.render();
                }
                return t;
              }
            case u.A.TYPE_GROUP:
              {
                const t = new f.A(this.id, this.settings.name, a.bD(v.A, this.groupSettings));
                t.settings = this.settings;
                return t;
              }
          }
        }
        static async delete(t) {
          const e = await (0, i.P2)();
          let [s, a, n] = e.transaction("readwrite", "layer-bitmap", "layer-meta", "layer-mask");
          await Promise.all([s.delete(t), a.delete(t), n.delete(t)]);
        }
        static async sync(t, e) {
          const started = t.syncRequested || new Date();
          if (!e.hasLayer(t)) {
            throw new Error("This is probably a bug, cant create layermeta from layer not in the fresco");
          }
          const s = new x(t, e.id);
          let n = false;
          if (t.type === u.A.TYPE_IMAGE || t.type === u.A.TYPE_ELEMENT) {
            n = t.rect && t.rect.isSet() && !!t.canvas || !t.rect && !t.canvas;
          } else if (t.type === u.A.TYPE_FRAME) {
            n = t.trim && t.trim.isSet() && !!t.canvas || !t.trim && !t.canvas;
          }
          const encoded = !t.syncRequested && t.encoded;
          if (n || encoded) {
            const [e, n] = encoded ? [encoded.bitmap, encoded.mask] : await Promise.all([a.PG(t.canvas), a.PG(t.mask)]);
            const o = await (0, i.P2)();
            let [r, h, l] = o.transaction("readwrite", "layer-bitmap", "layer-meta", "layer-mask");
            await Promise.all([h.put(s), e ? r.put(e, s.id) : r.delete(s.id), n ? l.put(n, s.id) : l.delete(s.id)]);
          } else {
            const t = await (0, i.P2)();
            let [e] = t.transaction("readwrite", "layer-meta");
            await e.put(s);
          }
          t.syncLatest = t.syncRequested && t.syncRequested !== started ? undefined : started;
          delete t.encoded;
        }
      }
    }
