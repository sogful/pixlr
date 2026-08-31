window.__editorModules[98] = function (t, e, s) {
      s.d(e, {
        Ay: () => p,
        Lr: () => l,
        P2: () => c,
        ZC: () => o,
        oY: () => r,
        pp: () => h
      });
      var i = s(5283);
      var a = s(7135);
      var n = s(6050);
      function o(t, e) {
        (0, a.A)("setting-" + t, e.toString());
        const s = window.localStorage.getItem("user-settings");
        const i = JSON.parse(s || "{}");
        u[t] = i[t] = e;
        window.localStorage.setItem("user-settings", JSON.stringify(i));
        if (t === "workspace" || t === "accent") {
          document.cookie = `${t}=${e};path=/;max-age=31536000`;
          document.documentElement.className = `${u.workspace} ${u.accent}`;
        }
        document.dispatchEvent(new CustomEvent("user-setting-updated", {
          detail: t
        }));
      }
      function r(t) {
        let e = t.toHEX();
        let s = u.oldColor.findIndex(t => t === e);
        if (s > -1) {
          u.oldColor.splice(0, 0, u.oldColor.splice(s, 1)[0]);
        } else {
          u.oldColor.pop();
          u.oldColor.unshift(e);
        }
        o("oldColor", u.oldColor);
      }
      function h() {
        let t = 1;
        let e = d();
        if (u.ddid && u.ddid !== "" && u.ddid.indexOf(":") !== -1 && Number(u.ddid.split(":")[0]) === e) {
          t = Number(u.ddid.split(":")[1]) + 1;
        }
        o("ddid", e + ":" + t);
        (0, a.A)("daily-saves", t.toString());
      }
      function l() {
        if (u.ddid && u.ddid !== "" && u.ddid.indexOf(":") !== -1 && Number(u.ddid.split(":")[0]) === d()) {
          let t = Number(u.ddid.split(":")[1]);
          if (t <= 0) {
            t = 666;
          }
          return t;
        }
        return 0;
      }
      function c() {
        return l() >= 3;
      }
      function d() {
        let t = new Date();
        return (Date.UTC(t.getFullYear(), t.getMonth(), t.getDate()) - Date.UTC(t.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
      }
      const u = function () {
        const t = {
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
          dialogPos: new n.A(0, 0),
          hideAiPrompt: false,
          lastModel: {},
          lastNewsCheck: "1970-01-01T00:00:00Z",
          ddid: ""
        };
        Object.assign(t, (() => {
          const t = window.localStorage.getItem("user-settings");
          return JSON.parse(t || "{}");
        })());
        Object.assign(t, (() => {
          const t = new URL(window.location.href);
          const e = {};
          t.searchParams.forEach((t, s) => {
            e[s] = t;
          });
          return e;
        })());
        Object.assign(t, (() => {
          const t = (0, i.Ay)("config_data");
          if (t && t.innerText) {
            let t = JSON.parse((0, i.Ay)("config_data").innerText);
            (0, i.Ay)("config_data").remove();
            return t;
          }
          return {};
        })());
        return t;
      }();
      const p = u;
    }
