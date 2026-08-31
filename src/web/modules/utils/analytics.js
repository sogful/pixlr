window.__webModules[7135] = function (e, t, i) {
      i.d(t, {
        A: () => o
      });
      var n = i(98);
      var a = i(5432);
      const o = (e, t) => {
        if (typeof gtag != "undefined" && !((window.dataLayer?.length ?? 0) > 1000)) {
          gtag("event", e, {
            product: n.Ay.product,
            user_type: a.Ny?.type ?? "guest",
            label: t
          });
        }
      };
    }
