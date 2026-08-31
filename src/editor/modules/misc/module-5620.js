window.__editorModules[5620] = function (t, e, s) {
      s.d(e, {
        E: () => o
      });
      var i = s(98);
      var a = s(2128);
      var n = s(3171);
      function o(t) {
        const {
          port1: e,
          port2: s
        } = new MessageChannel();
        e.onmessage = async e => {
          const s = e.ports[0];
          switch (e.data.op) {
            case "open":
              {
                const i = e.data.buffer;
                const n = new File([new Blob([i])], e.data.name);
                await a.Tq(n, t, undefined, "api");
                t.fresco.saveMethod = s;
                break;
              }
            case "open-url":
              {
                const o = e.data.url;
                new n.A({
                  title: o.substring(o.lastIndexOf("/") + 1),
                  referrer: i.Ay.referrer
                }).load("/proxy/?url=" + encodeURIComponent(o)).then(async e => {
                  await a.Tq(e, t, undefined, "api");
                  t.fresco.saveMethod = s;
                });
                break;
              }
            default:
              console.error(`Unknown op ${e.data.op}`);
          }
        };
        window.parent.postMessage({
          op: "ready"
        }, i.Ay.messageOrigin, [s]);
      }
    }
