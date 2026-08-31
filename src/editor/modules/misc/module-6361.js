window.__editorModules[6361] = function (t, e, s) {
      s.d(e, {
        $U: () => a,
        Ar: () => r,
        cM: () => n,
        mi: () => h,
        qN: () => o
      });
      var i = s(98);
      class a {
        constructor(t) {
          const n = t.resources || [];
          const o = n.find(t => t.type === "image" || t.type === "video" || t.type === "audio") || n.find(t => t.type !== "thumbnail") || n[0];
          const r = n.find(t => t.type === "thumbnail");
          this.url = (o == null ? undefined : o.url) || t.resource?.url || "";
          this.thumb = (r == null ? undefined : r.url) || (o == null ? undefined : o.url) || t.resource?.thumb || t.resource?.url || "";
          this.type = (o == null ? undefined : o.type) || t.resource?.type || t.type || "image";
          this.isImage = this.type === "image";
          this.isVideo = this.type === "video";
          this.isAudio = this.type === "audio";
        }
        get image() {
          if (this.isImage) {
            return this.url;
          } else {
            return null;
          }
        }
        get video() {
          if (this.isVideo) {
            return this.url;
          } else {
            return null;
          }
        }
        get audio() {
          if (this.isAudio) {
            return this.url;
          } else {
            return null;
          }
        }
        get exists() {
          return !!this.url;
        }
      }
      async function n(t) {
        let e = "/api/aif/generate";
        if (i.Ay?.token) {
          e += `?token=${i.Ay.token}`;
        }
        const a = new FormData();
        a.set("model", t.model);
        a.set("capability", t.capability);
        if (t.amount) {
          a.set("amount", t.amount.toString());
        }
        if (t.prompt) {
          a.set("prompt", t.prompt);
        }
        if (t.negative) {
          a.set("negative", t.negative);
        }
        if (t.style) {
          a.set("style", t.style);
        }
        if (t.width) {
          a.set("width", t.width.toString());
        }
        if (t.height) {
          a.set("height", t.height.toString());
        }
        if (t.personal !== undefined) {
          a.set("personal", t.personal.toString());
        }
        if (t.influence) {
          a.set("influence", t.influence.toString());
        }
        if (t.parentId) {
          a.set("parentId", t.parentId);
        }
        if (t.parentImageId) {
          a.set("parentImageId", t.parentImageId);
        }
        const o = new Set(["model", "capability", "amount", "prompt", "negative", "style", "width", "height", "personal", "influence", "image", "images", "video", "audio", "parentId", "parentImageId"]);
        for (const [s, i] of Object.entries(t)) {
          if (!o.has(s) && i != null) {
            a.set(s, String(i));
          }
        }
        if (t.images && t.images.length > 0) {
          const e = [];
          for (const s of t.images) {
            a.append("image_sources", s.blob);
            e.push(s.label);
          }
          a.set("image_labels", JSON.stringify(e));
        } else if (t.image instanceof Blob) {
          a.set("image_sources", t.image);
        }
        if (t.video instanceof Blob) {
          a.set("video_sources", t.video);
        }
        if (t.audio instanceof Blob) {
          a.set("audio_sources", t.audio);
        }
        const r = await fetch(e, {
          method: "POST",
          body: a
        });
        const h = await r.json();
        if (!h.status) {
          const e = await s.e(497).then(s.bind(s, 5497)).then(t => t.handleMatureContentError(h.message, h.errorType));
          if (e === true) {
            return n(t);
          }
          if (e === false) {
            throw new Error("Mature content agreement not accepted");
          }
          const i = new Error(h.message || "Generation failed");
          i.code = h.message;
          i.errorType = h.errorType;
          i.serverData = h;
          throw i;
        }
        return h.data;
      }
      async function o(t) {
        const e = await fetch(`/api/aif/generation/${t}`);
        const s = await e.json();
        if (!s.status) {
          throw new Error(s.message || "Generation not found");
        }
        return s.data;
      }
      async function r(t, e = 3000, s = 80) {
        return new Promise((i, a) => {
          let n = 0;
          let r = 0;
          const h = async () => {
            n++;
            try {
              const l = await o(t);
              r = 0;
              if (l.status === "completed" || l.status === "failed") {
                i(l);
              } else if (n >= s) {
                a(new Error("Generation timed out"));
              } else {
                setTimeout(h, e);
              }
            } catch (l) {
              r++;
              if (r >= 5) {
                a(l);
              } else {
                setTimeout(h, e);
              }
            }
          };
          setTimeout(h, 2000);
        });
      }
      async function h(t) {
        const e = await fetch(`/api/aif/generation/${t}`, {
          method: "DELETE"
        });
        if (!e.ok) {
          throw new Error(`Delete generation failed: ${e.status}`);
        }
      }
    }
