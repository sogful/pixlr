window.__webModules[5432] = function (e, t, i) {
      i.d(t, {
        $4: () => r,
        Ny: () => a,
        zl: () => s
      });
      var n = i(5283);
      let a = function () {
        let e;
        const t = (0, n.Ay)("current_user");
        if (t && t.innerText !== "null") {
          try {
            e = JSON.parse(t.innerText);
          } catch (a) {
            console.error("Could not read user data json");
          }
        }
        const i = new URL(location.href);
        if (e && i.hostname !== "pixlr.com" && i.searchParams.get("premium") === "true") {
          e.subscription = true;
          e.subscriptionAccess = "premium";
        }
        return e;
      }();
      const o = ["free", "plus", "premium", "ultra"];
      function s(e) {
        const t = (a == null ? undefined : a.subscriptionAccess) || "free";
        return o.indexOf(t) >= o.indexOf(e);
      }
      async function r() {
        try {
          const e = await fetch("/api/auth/me");
          const t = await e.json();
          if (t.status && t.data) {
            a = t.data;
            const e = (0, n.Ay)("current_user");
            if (e) {
              e.innerText = JSON.stringify(t.data);
            }
            return a;
          }
        } catch (e) {
          console.error("Failed to refresh user", e);
        }
        return null;
      }
      i.d(t, ["dV", 0, {
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
