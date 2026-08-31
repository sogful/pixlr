window.__editorModules[8870] = function (t, e, s) {
      s.d(e, {
        P: () => n,
        o: () => o
      });
      var i = s(4947);
      var a = s(5699);
      async function n(t) {
        const e = await a.PG(t);
        const s = new FormData();
        s.append("image", e);
        const n = await fetch("/api/ai/super-sharp", {
          method: "POST",
          body: s
        });
        const o = await n.json();
        if (o.status == 0) {
          throw new Error(o.message);
        }
        if (n.status >= 200 && n.status < 300) {
          await i.W2();
        }
        return await a.$e("data:image/jpg;base64," + o.data);
      }
      async function o(t) {
        const e = await a.PG(t);
        const s = new FormData();
        s.append("image", e);
        const n = await fetch("/api/ai/denoise", {
          method: "POST",
          body: s
        });
        const o = await n.json();
        if (o.status == 0) {
          throw new Error(o.message);
        }
        if (n.status >= 200 && n.status < 300) {
          await i.W2();
        }
        return await a.$e("data:image/jpg;base64," + o.data);
      }
    }
