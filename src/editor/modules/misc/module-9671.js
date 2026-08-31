window.__editorModules[9671] = function (t, e, s) {
      async function i(t, e = 5000, s = 30000) {
        const i = new Date().getTime() + s;
        const a = (s, n) => {
          Promise.resolve(t()).then(t => {
            console.log(t);
            const o = new Date().getTime();
            if (t.status === "success") {
              s(t);
            } else if (o < i && t.status === "pending") {
              setTimeout(a, e, s, n);
            } else {
              n(new Error("AsyncPoller: reached timeout"));
            }
          }).catch(t => {
            n(t);
          });
        };
        return new Promise(a);
      }
      s.d(e, {
        Q: () => i
      });
    }
