window.__editorModules[5283] = function (t, e, s) {
      s.d(e, {
        Ay: () => n,
        Bb: () => l,
        J9: () => h,
        T: () => o,
        TT: () => c,
        lR: () => r
      });
      var i = s(7775);
      var a = s(6050);
      function n(t) {
        return document.getElementById(t);
      }
      function o(t, ...e) {
        const s = document.createElement(t);
        if (e.length === 0) {
          return s;
        }
        const i = e[0];
        const a = typeof i != "string" && !(i instanceof HTMLElement);
        const n = a ? e.slice(1) : e;
        if (a && i) {
          if (i.style) {
            const t = i.style;
            delete i.style;
            if (typeof t == "string") {
              s.setAttribute("style", t);
            } else {
              Object.assign(s.style, t);
            }
          }
          if (i.dataset) {
            const t = i.dataset;
            delete i.dataset;
            if (typeof t == "object") {
              Object.entries(t).map(([t, e]) => s.setAttribute(`data-${t}`, e));
            }
          }
          if (i.tooltip) {
            s.setAttribute("tooltip", i.tooltip);
          }
          if (i.flow) {
            s.setAttribute("flow", i.flow);
          }
          Object.assign(s, i);
        }
        s.append(...n.filter(t => t != null));
        return s;
      }
      function r(t, e) {
        const s = document.cookie.split(";").map(t => t.trim().split("=")).find(([e, s]) => e === t);
        if (s) {
          return s[1];
        } else {
          return e;
        }
      }
      function h(t) {
        return new Promise(e => {
          const s = new IntersectionObserver(([t]) => {
            e(t.intersectionRatio === 1);
            s.disconnect();
          });
          s.observe(t);
        });
      }
      function l(t, e, s, i) {
        t.style.touchAction = "none";
        const n = t => {
          t.stopPropagation();
          t.preventDefault();
          if (s) {
            s(new a.A(t.clientX, t.clientY));
          }
        };
        const o = e => {
          e.stopPropagation();
          e.preventDefault();
          if (i) {
            i(new a.A(e.clientX, e.clientY));
          }
          t.removeEventListener("pointermove", n, true);
          t.removeEventListener("pointerup", o, true);
          t.releasePointerCapture(e.pointerId);
        };
        t.addEventListener("pointerdown", s => {
          s.preventDefault();
          if (!(s.button > 0)) {
            t.addEventListener("pointermove", n, true);
            t.addEventListener("pointerup", o, true);
            t.setPointerCapture(s.pointerId);
            if (e) {
              e(new a.A(s.clientX, s.clientY));
            }
          }
        }, true);
      }
      function c(t, e, s, a = false) {
        let n = false;
        e ||= t.value;
        if (s === "email") {
          if ((e = e.trim()).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || a && e === "") {
            t.classList.remove("invalid");
            t.nextElementSibling.style.display = "none";
          } else {
            n = true;
            t.classList.add("invalid");
            t.nextElementSibling.style.display = "block";
          }
        } else if (s === "password") {
          const s = t.nextElementSibling;
          if (e.length < 8 || e.length > 50) {
            n = true;
            t.classList.add("invalid");
            s.style.display = "block";
            if (e.length < 8) {
              s.innerHTML = (0, i.A)("commonMinPassword");
            } else if (e.length > 50) {
              s.innerHTML = (0, i.A)("commonMaxPassword");
            }
          } else if (e.indexOf("'") > -1 || e.indexOf("\"") > -1) {
            n = true;
            t.classList.add("invalid");
            s.style.display = "block";
            s.innerHTML = (0, i.A)("commonInvalidSpecialChar");
          } else if (t.getAttribute("data-login") || /^(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(e)) {
            t.classList.remove("invalid");
            s.style.display = "none";
          } else {
            n = true;
            t.classList.add("invalid");
            s.style.display = "block";
            s.innerHTML = (0, i.A)("commonInvalidPasswordCombination");
          }
        } else if (s === "code") {
          const s = t.nextElementSibling;
          if (e.length !== 6) {
            t.classList.add("invalid");
            s.style.display = "block";
            n = true;
          } else {
            t.classList.remove("invalid");
            s.style.display = "none";
          }
          setTimeout(() => {
            t.classList.remove("invalid");
            s.style.display = "none";
          }, 3000);
        }
        return !n;
      }
      s.d(e, ["y8", 0, (t = "success", e = "commonServerError", s = 3, a) => {
        var r;
        if ((r = n("toast-box")) !== null && r !== undefined) {
          r.remove();
        }
        let h = e ? (0, i.A)(e) : t == "danger" ? (0, i.A)("commonServerError") : (0, i.A)("commonSuccess");
        if (a) {
          h = h.replace("{email}", a);
        }
        const l = {
          success: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/></svg>",
          warning: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>",
          danger: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/></svg>"
        };
        const c = o("div", {
          className: "toast-icon"
        });
        c.innerHTML = l[t] || l.success;
        const d = o("div", {
          className: "toast-close",
          onclick: () => {
            var t;
            if ((t = n("toast-box")) === null || t === undefined) {
              return undefined;
            } else {
              return t.remove();
            }
          }
        });
        d.innerHTML = "<svg viewBox=\"0 0 24 24\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>";
        document.body.append(o("div", {
          id: "toast-box",
          className: `toast ${t}`
        }, c, o("span", {
          className: "toast-text"
        }, h), d));
        setTimeout(() => {
          var t;
          if ((t = n("toast-box")) === null || t === undefined) {
            return undefined;
          } else {
            return t.remove();
          }
        }, s * 1000);
      }]);
    }
