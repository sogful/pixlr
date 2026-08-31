window.__webModules[98] = function (e, t, i) {
      i.d(t, {
        Ay: () => c,
        ZC: () => s
      });
      var n = i(5283);
      var a = i(7135);
      var o = i(6050);
      function s(e, t) {
        (0, a.A)("setting-" + e, t.toString());
        const i = window.localStorage.getItem("user-settings");
        const n = JSON.parse(i || "{}");
        r[e] = n[e] = t;
        window.localStorage.setItem("user-settings", JSON.stringify(n));
        if (e === "workspace" || e === "accent") {
          document.cookie = `${e}=${t};path=/;max-age=31536000`;
          document.documentElement.className = `${r.workspace} ${r.accent}`;
        }
        document.dispatchEvent(new CustomEvent("user-setting-updated", {
          detail: e
        }));
      }
      const r = function () {
        const e = {
          product: "web",
          debug: "",
          cdnUrl: "",
          isIOS: false,
          isHDPI: false,
          isSafari: false,
          canTouch: false,
          accent: "default",
          workspace: "default",
          disabledTools: [],
          allTooltip: false,
          autoSelect: true,
          showGuides: true,
          snapToGuides: true,
          smoothScaling: true,
          askToPreResize: true,
          useLegacySave: false,
          performanceMode: false,
          scrollMode: "zoom",
          maxHistoryUndos: 25,
          expressLayerbar: "minimized",
          panelFloating: false,
          panelNavigator: true,
          panelLayer: true,
          panelHistory: true,
          barQuicklink: true,
          mainColor: "#ffffff",
          altColor: "#000000",
          oldColor: ["#A8534B", "#EC9D75", "#F9D697", "#DCE6A7", "#9ADFB0", "#57CBAB", "#38A793", "#5A5E5A"],
          gradients: [],
          dialogPos: new o.A(0, 0),
          hideAiPrompt: false,
          lastModel: {},
          lastNewsCheck: "1970-01-01T00:00:00Z",
          ddid: ""
        };
        Object.assign(e, (() => {
          const e = window.localStorage.getItem("user-settings");
          return JSON.parse(e || "{}");
        })());
        Object.assign(e, (() => {
          const e = new URL(window.location.href);
          const t = {};
          e.searchParams.forEach((e, i) => {
            t[i] = e;
          });
          return t;
        })());
        Object.assign(e, (() => {
          const e = (0, n.Ay)("config_data");
          if (e && e.innerText) {
            let e = JSON.parse((0, n.Ay)("config_data").innerText);
            (0, n.Ay)("config_data").remove();
            return e;
          }
          return {};
        })());
        return e;
      }();
      const c = r;
    }
