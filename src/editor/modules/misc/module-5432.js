window.__editorModules[5432] = function (t, e, s) {
      s.d(e, {
        $4: () => r,
        Ny: () => a,
        zl: () => o
      });
      var i = s(5283);
      let a = function () {
        let t;
        const e = (0, i.Ay)("current_user");
        if (e && e.innerText !== "null") {
          try {
            t = JSON.parse(e.innerText);
          } catch (a) {
            console.error("Could not read user data json");
          }
        }
        const s = new URL(location.href);
        if (t && s.hostname !== "pixlr.com" && s.searchParams.get("premium") === "true") {
          t.subscription = true;
          t.subscriptionAccess = "premium";
        }
        return t;
      }();
      const n = ["free", "plus", "premium", "ultra"];
      function o(t) {
        const e = (a == null ? undefined : a.subscriptionAccess) || "free";
        return n.indexOf(e) >= n.indexOf(t);
      }
      async function r() {
        try {
          const t = await fetch("/api/auth/me");
          const e = await t.json();
          if (e.status && e.data) {
            a = e.data;
            const t = (0, i.Ay)("current_user");
            if (t) {
              t.innerText = JSON.stringify(e.data);
            }
            return a;
          }
        } catch (t) {
          console.error("Failed to refresh user", t);
        }
        return null;
      }
      s.d(e, ["dV", 0, {
        firstName: "",
        lastName: "",
        companyName: "",
        vatNumber: "",
        address: "",
        city: "",
        state: "",
        stateCode: "",
        zipCode: "",
        country: "",
        countryCode: "",
        isVATNumberValid: false
      }]);
    }
