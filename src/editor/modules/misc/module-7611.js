window.__editorModules[7611] = function (t, e, s) {
      s.d(e, {
        i: () => o
      });
      var i = s(5699);
      var a = s(651);
      var n = s(98);
      async function o(t, e, s = false) {
        let o;
        const r = (await i.r$(t)).replace("data:image/jpeg;base64,", "");
        o = e instanceof a.A ? {
          image_b64: r,
          target_width: e.width,
          target_height: e.height
        } : {
          image_b64: r,
          scale: e
        };
        let h = "/api/ai/super-scale?allowMature=true";
        if (n.Ay?.token) {
          h += `&token=${n.Ay.token}`;
        }
        if (s) {
          h += "&free=true";
        }
        const l = await fetch(h, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(o)
        });
        const c = await l.json();
        return i.$e(c.data);
      }
    }
