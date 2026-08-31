window.__webModules[6361] = function (e, t, i) {
      i.d(t, {
        $U: () => n,
        Vr: () => o,
        Xr: () => r,
        _0: () => s,
        mi: () => a
      });
      i(98);
      class n {
        constructor(e) {
          const o = e.resources || [];
          const s = o.find(e => e.type === "image" || e.type === "video" || e.type === "audio") || o.find(e => e.type !== "thumbnail") || o[0];
          const r = o.find(e => e.type === "thumbnail");
          this.url = (s == null ? undefined : s.url) || e.resource?.url || "";
          this.thumb = (r == null ? undefined : r.url) || (s == null ? undefined : s.url) || e.resource?.thumb || e.resource?.url || "";
          this.type = (s == null ? undefined : s.type) || e.resource?.type || e.type || "image";
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
      async function a(e) {
        const t = await fetch(`/api/aif/generation/${e}`, {
          method: "DELETE"
        });
        if (!t.ok) {
          throw new Error(`Delete generation failed: ${t.status}`);
        }
      }
      function o(e, t) {
        fetch(`/api/aif/generation/${e}/thumb`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            waveform: t
          })
        }).catch(() => {});
      }
      function s(e, t, i) {
        const n = e.getContext("2d");
        if (!n) {
          return;
        }
        const a = e.width;
        const o = e.height;
        n.fillStyle = i;
        const s = t.length / a;
        for (let r = 0; r < a; r++) {
          const e = t[Math.floor(r * s)] / 100;
          const i = Math.max(1, e * o);
          n.fillRect(r, (o - i) / 2, 1, i);
        }
      }
      async function r(e, t = 200) {
        const i = await fetch(e);
        const n = await i.arrayBuffer();
        const a = new AudioContext();
        const o = (await a.decodeAudioData(n)).getChannelData(0);
        const s = Math.ceil(o.length / t);
        const r = [];
        let c = 0;
        for (let d = 0; d < t; d++) {
          let e = 0;
          let t = 0;
          for (let n = 0; n < s; n++) {
            const i = d * s + n;
            if (i >= o.length) {
              break;
            }
            e += o[i] * o[i];
            t++;
          }
          const i = Math.sqrt(e / (t || 1));
          r.push(i);
          if (i > c) {
            c = i;
          }
        }
        const l = r.map(e => Math.round(Math.pow(e / (c || 1), 1.8) * 70));
        a.close();
        return l;
      }
    }
