window.__editorModules[7014] = function (t, e, s) {
      s.d(e, {
        ZC: () => n,
        mH: () => o
      });
      const i = new Map();
      let a = 1;
      async function n(t) {
        const e = i.get(t);
        if (e && Date.now() - e.fetchedAt < 300000) {
          return {
            models: e.models,
            defaults: e.defaults
          };
        }
        if (!e) {
          const e = function (t) {
            if (typeof document == "undefined") {
              return null;
            }
            const e = document.getElementById("models-data");
            if (!e || !e.textContent || !e.textContent.trim()) {
              return null;
            }
            try {
              const s = JSON.parse(e.textContent);
              const i = s == null ? undefined : s[t];
              if (i && Array.isArray(i.models)) {
                return i;
              }
            } catch (s) {}
            return null;
          }(t);
          if (e) {
            const s = {
              models: e.models,
              defaults: e.defaults || [],
              fetchedAt: Date.now()
            };
            i.set(t, s);
            if (e.maxConcurrent) {
              a = e.maxConcurrent;
            }
            return {
              models: s.models,
              defaults: s.defaults
            };
          }
        }
        const s = await fetch(`/api/aif/models?capability=${t}`);
        const n = await s.json();
        if (n.status) {
          const e = {
            models: n.data.models,
            defaults: n.data.defaults,
            fetchedAt: Date.now()
          };
          i.set(t, e);
          if (n.data.maxConcurrent) {
            a = n.data.maxConcurrent;
          }
          return {
            models: e.models,
            defaults: e.defaults
          };
        }
        if (e) {
          return {
            models: e.models,
            defaults: e.defaults
          };
        } else {
          return {
            models: [],
            defaults: []
          };
        }
      }
      function o(t, e, s) {
        var i;
        var a;
        if (!t) {
          return 0;
        }
        const n = (i = t.options) === null || i === undefined ? undefined : i.find(t => t.key === "size");
        const o = (a = t.options) === null || a === undefined ? undefined : a.find(t => t.key === "duration");
        const r = {};
        if (n && n.values.length > 0) {
          const t = s == null ? undefined : s.quality;
          const e = s == null ? undefined : s.aspect;
          let i = t && e ? n.values.find(s => s.quality === t && s.aspect === e) : t ? n.values.find(e => e.quality === t) : undefined;
          i ||= n.values[0];
          if (i.quality) {
            r.quality = i.quality;
          }
          if (i.aspect) {
            r.aspect = i.aspect;
          }
        }
        if (o && o.values.length > 0) {
          const t = s == null ? undefined : s.duration;
          const e = t !== undefined && o.values.find(e => String(e.value) === String(t)) || o.values[0];
          r.duration = e.value;
        }
        if (s == null ? undefined : s.inputs) {
          r.inputs = s.inputs;
        }
        return function (t, e, s) {
          let a = t.cost;
          const n = s && t.capabilityConfig?.[s];
          const o = n == null ? undefined : n.options;
          let r;
          for (const h of t.options) {
            if (o && !o.includes(h.key) && h.key !== "size") {
              continue;
            }
            if (h.key === "size") {
              const t = e.quality;
              const s = e.aspect;
              if (t) {
                const e = s ? h.values.find(e => e.quality === t && e.aspect === s) : h.values.find(e => e.quality === t);
                if (e) {
                  r = e.quality;
                  a += e.cost || 0;
                }
              }
              continue;
            }
            const t = e[h.key];
            if (t !== undefined) {
              const e = h.values.find(e => String(e.value) === String(t));
              if (e) {
                a += e.cost || 0;
              }
            }
          }
          if ((n == null ? undefined : n.cost) !== undefined) {
            const t = n.cost;
            a += typeof t == "number" ? t : r && t[r] || 0;
          }
          if (t.billingUnit === "second") {
            a *= Number(e.duration) || 1;
          }
          if (t.inputSlots && Array.isArray(t.inputSlots) && (e == null ? undefined : e.inputs) && Array.isArray(e.inputs)) {
            for (const h of e.inputs) {
              const e = t.inputSlots.find(t => {
                var e;
                var s;
                var i;
                return h.type === "video" && !!((e = t.accept) === null || e === undefined ? undefined : e.includes("video")) || h.type === "audio" && !!((s = t.accept) === null || s === undefined ? undefined : s.includes("audio")) || h.type === "image" && !!((i = t.accept) === null || i === undefined ? undefined : i.includes("image"));
              });
              if (e && e.additionalCost) {
                if (e.billingUnit === "generation" || e.billingUnit === "media") {
                  a += e.additionalCost;
                } else if (e.billingUnit === "second") {
                  const t = Number(h.duration) || 0;
                  if (t > 0) {
                    a += e.additionalCost * t;
                  }
                }
              }
            }
          }
          return Math.ceil(a);
        }(t, r, e);
      }
    }
