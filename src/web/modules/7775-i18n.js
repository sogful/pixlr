window.__webModules[7775] = function (e, t, i) {
      function n(e, ...t) {
        if (!I18N_STRINGS) {
          return e;
        }
        let i = I18N_STRINGS[e];
        if (!i) {
          console.log("No translation for key", e);
          i = e;
        }
        if (!t || t.length === 0) {
          return i;
        }
        let n = 0;
        return i.replace(/%(\d+\$)?(s|d|f){1}/gm, (e, ...i) => {
          const [a, o] = i;
          const s = a ? parseInt(a.slice(0, -1), 10) : n++;
          switch (o) {
            case "d":
              const i = t[s];
              if (typeof i != "number") {
                return "NaN";
              } else {
                return i.toFixed(0);
              }
            case "s":
              const n = t[s];
              if (n) {
                return n.toString();
              } else {
                return e;
              }
            default:
              return e;
          }
        });
      }
      i.d(t, {
        A: () => n
      });
    }
