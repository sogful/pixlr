window.__editorModules[1205] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(5699);
      var a = s(4947);
      var n = s(6361);
      var o = s(6494);
      async function r(t, e) {
        if (!(e == null ? undefined : e.canvas)) {
          throw new Error("No layer selected");
        }
        let r = e.canvas;
        if (r.width > 1920) {
          const t = Math.round(r.height / r.width * 1920);
          r = i.H5(r, 1920, t);
        }
        const h = await i.PG(r, {
          type: "image/jpeg",
          quality: 0.95
        });
        const l = (await (0, n.cM)({
          model: "qwen-image-layered",
          capability: o.$8.IMAGE_TO_LAYERED,
          image: h,
          width: r.width,
          height: r.height,
          personal: true
        })).generations?.[0];
        if (!l) {
          throw new Error("Extract layers failed");
        }
        try {
          const e = await (0, n.Ar)(l);
          if (e.status === "failed") {
            throw new Error(e.error || "Extract layers failed");
          }
          const s = (e.resources || []).filter(t => t.url);
          if (!s.length) {
            throw new Error("No layers returned");
          }
          for (let a = 0; a < s.length; a++) {
            const e = await fetch(s[a].url);
            if (!e.ok) {
              throw new Error("Failed to download layer " + a);
            }
            const n = await e.blob();
            const o = await i.lz(n);
            const r = t.addImage(o, "Extracted " + a, "extract-layers");
            if (r != null) {
              r.shrinkWrap();
            }
          }
          document.dispatchEvent(new CustomEvent("viewport-render"));
          document.dispatchEvent(new CustomEvent("layer-select"));
          document.dispatchEvent(new CustomEvent("layerlist-update"));
          a.W2();
        } finally {
          await (0, n.mi)(l);
        }
      }
    }
