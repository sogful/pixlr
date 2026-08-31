window.__webModules[9671] = function (e, t, i) {
      async function n(e, t = 5000, i = 30000) {
        const n = new Date().getTime() + i;
        const a = (i, o) => {
          Promise.resolve(e()).then(e => {
            console.log(e);
            const s = new Date().getTime();
            if (e.status === "success") {
              i(e);
            } else if (s < n && e.status === "pending") {
              setTimeout(a, t, i, o);
            } else {
              o(new Error("AsyncPoller: reached timeout"));
            }
          }).catch(e => {
            o(e);
          });
        };
        return new Promise(a);
      }
      i.d(t, {
        Q: () => n
      });
    }
