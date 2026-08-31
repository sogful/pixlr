window.__editorModules[8158] = function (t, e, s) {
      s.d(e, {
        P: () => o
      });
      var i = s(5699);
      s(6957);
      var a = s(5056);
      var n = s(98);
      async function o(t) {
        const e = new AbortController();
        const {
          signal: s
        } = e;
        let o = "/api/ai/remove-background/";
        if (n.Ay?.token) {
          o += `?token=${n.Ay.token}`;
        }
        const r = i.H5(t, 640, 640);
        const h = await i.PG(r, {
          type: "image/jpeg",
          quality: 0.8
        });
        const l = new FormData();
        l.append("image_file", new File([h], "file.jpg"));
        const c = await fetch(o, {
          method: "POST",
          headers: {
            Accept: "application/json"
          },
          body: l,
          signal: s
        });
        const d = await c.json();
        if (!d.status) {
          throw new Error(d.error);
        }
        return await (0, a.kw)("data:image/jpeg;base64," + d.data);
      }
    }
