window.__editorModules[5288] = function (t, e, s) {
      s.d(e, {
        J: () => o
      });
      var i = s(5283);
      var a = s(6361);
      let n = null;
      async function o(t, e) {
        t.innerHTML = "";
        t.appendChild((0, i.T)("i", {
          className: "loader"
        }));
        try {
          if (!n) {
            const t = await fetch("/api/aif/generations?type=image");
            const e = await t.json();
            n = e.status && e.data?.length ? e.data : [];
          }
          t.innerHTML = "";
          const o = n.filter(t => t.status === "completed" && new a.$U(t).exists);
          if (!o.length) {
            t.append((0, i.T)("p", {
              className: "text-dim"
            }, "No recent generations"));
            return;
          }
          const r = (0, i.T)("div", {
            className: "picker-grid"
          });
          for (const t of o) {
            const s = new a.$U(t);
            const n = (0, i.T)("div", {
              className: "picker-grid-item"
            }, (0, i.T)("img", {
              src: s.thumb,
              loading: "lazy"
            }));
            n.onclick = async () => {
              if (!n.classList.contains("working")) {
                n.classList.add("working");
                try {
                  const i = await fetch(s.url);
                  const a = await i.blob();
                  const n = t.prompt ? t.prompt.slice(0, 30).replace(/[^a-zA-Z0-9]/g, "_") : "generation";
                  await e(a, n);
                } finally {
                  n.classList.remove("working");
                }
              }
            };
            r.append(n);
          }
          t.append(r);
        } catch (o) {
          t.innerHTML = "";
          t.append((0, i.T)("p", {
            className: "text-dim"
          }, "Failed to load generations"));
        }
      }
    }
