window.__editorModules[7775] = function (t, e, s) {
      function i(t, ...e) {
        if (!I18N_STRINGS) {
          return t;
        }
        let s = I18N_STRINGS[t];
        if (!s) {
          console.log("No translation for key", t);
          s = t;
        }
        if (!e || e.length === 0) {
          return s;
        }
        let i = 0;
        return s.replace(/%(\d+\$)?(s|d|f){1}/gm, (t, ...s) => {
          const [a, n] = s;
          const o = a ? parseInt(a.slice(0, -1), 10) : i++;
          switch (n) {
            case "d":
              const s = e[o];
              if (typeof s != "number") {
                return "NaN";
              } else {
                return s.toFixed(0);
              }
            case "s":
              const i = e[o];
              if (i) {
                return i.toString();
              } else {
                return t;
              }
            default:
              return t;
          }
        });
      }
      s.d(e, {
        A: () => i
      });
    }
