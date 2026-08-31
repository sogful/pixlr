window.__editorModules[8098] = function (t, e, s) {
      s.d(e, {
        J: () => h
      });
      var i = s(5699);
      var a = s(4947);
      var n = s(6361);
      var o = s(6494);
      const r = [{
        r: 1,
        s: "1:1"
      }, {
        r: 16 / 9,
        s: "16:9"
      }, {
        r: 9 / 16,
        s: "9:16"
      }, {
        r: 4 / 3,
        s: "4:3"
      }, {
        r: 3 / 4,
        s: "3:4"
      }, {
        r: 21 / 9,
        s: "21:9"
      }, {
        r: 9 / 21,
        s: "9:21"
      }];
      async function h(t, e, s, h = 1) {
        let l = t;
        if (l.width > 4096) {
          const t = Math.round(l.height / l.width * 4096);
          l = i.H5(l, 4096, t);
        }
        const c = await i.PG(l, {
          type: "image/jpeg",
          quality: 0.95
        });
        const d = function (t) {
          let e = r[0];
          let s = Math.abs(t - e.r);
          for (const i of r) {
            const a = Math.abs(t - i.r);
            if (a < s) {
              e = i;
              s = a;
            }
          }
          return e.s;
        }(e.width / e.height);
        const u = await (0, n.cM)({
          model: "luma-reframe",
          capability: o.$8.OUTPAINTING,
          image: c,
          amount: h,
          width: e.width,
          height: e.height,
          aspect_ratio: d,
          x_start: s.x,
          x_end: s.x + t.width,
          y_start: s.y,
          y_end: s.y + t.height
        });
        a.W2();
        const p = [];
        for (const a of u.outputs) {
          const t = await i.wJ(`data:image/jpeg;base64,${a}`);
          p.push(t);
        }
        return p;
      }
    }
