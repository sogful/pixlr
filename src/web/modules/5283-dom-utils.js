window.__webModules[5283] = function (e, t, i) {
      i.d(t, {
        Ay: () => o,
        Bb: () => l,
        T: () => s,
        TT: () => d,
        TV: () => c,
        lR: () => r
      });
      var n = i(7775);
      var a = i(6050);
      function o(e) {
        return document.getElementById(e);
      }
      function s(e, ...t) {
        const i = document.createElement(e);
        if (t.length === 0) {
          return i;
        }
        const n = t[0];
        const a = typeof n != "string" && !(n instanceof HTMLElement);
        const o = a ? t.slice(1) : t;
        if (a && n) {
          if (n.style) {
            const e = n.style;
            delete n.style;
            if (typeof e == "string") {
              i.setAttribute("style", e);
            } else {
              Object.assign(i.style, e);
            }
          }
          if (n.dataset) {
            const e = n.dataset;
            delete n.dataset;
            if (typeof e == "object") {
              Object.entries(e).map(([e, t]) => i.setAttribute(`data-${e}`, t));
            }
          }
          if (n.tooltip) {
            i.setAttribute("tooltip", n.tooltip);
          }
          if (n.flow) {
            i.setAttribute("flow", n.flow);
          }
          Object.assign(i, n);
        }
        i.append(...o.filter(e => e != null));
        return i;
      }
      function r(e, t) {
        const i = document.cookie.split(";").map(e => e.trim().split("=")).find(([t, i]) => t === e);
        if (i) {
          return i[1];
        } else {
          return t;
        }
      }
      function c(e, t, i) {
        let n = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
        if (i.path) {
          n += `; path=${i.path}`;
        }
        if (i.domain) {
          n += `; domain=${i.domain}`;
        }
        if (i.expires) {
          n += `; expires=${i.expires.toUTCString()}`;
        }
        if (i.sameSite) {
          n += `; samesite=${i.sameSite}`;
        }
        document.cookie = n;
      }
      function l(e, t, i, n) {
        e.style.touchAction = "none";
        const o = e => {
          e.stopPropagation();
          e.preventDefault();
          if (i) {
            i(new a.A(e.clientX, e.clientY));
          }
        };
        const s = t => {
          t.stopPropagation();
          t.preventDefault();
          if (n) {
            n(new a.A(t.clientX, t.clientY));
          }
          e.removeEventListener("pointermove", o, true);
          e.removeEventListener("pointerup", s, true);
          e.releasePointerCapture(t.pointerId);
        };
        e.addEventListener("pointerdown", i => {
          i.preventDefault();
          if (!(i.button > 0)) {
            e.addEventListener("pointermove", o, true);
            e.addEventListener("pointerup", s, true);
            e.setPointerCapture(i.pointerId);
            if (t) {
              t(new a.A(i.clientX, i.clientY));
            }
          }
        }, true);
      }
      function d(e, t, i, a = false) {
        let o = false;
        t ||= e.value;
        if (i === "email") {
          if ((t = t.trim()).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || a && t === "") {
            e.classList.remove("invalid");
            e.nextElementSibling.style.display = "none";
          } else {
            o = true;
            e.classList.add("invalid");
            e.nextElementSibling.style.display = "block";
          }
        } else if (i === "password") {
          const i = e.nextElementSibling;
          if (t.length < 8 || t.length > 50) {
            o = true;
            e.classList.add("invalid");
            i.style.display = "block";
            if (t.length < 8) {
              i.innerHTML = (0, n.A)("commonMinPassword");
            } else if (t.length > 50) {
              i.innerHTML = (0, n.A)("commonMaxPassword");
            }
          } else if (t.indexOf("'") > -1 || t.indexOf("\"") > -1) {
            o = true;
            e.classList.add("invalid");
            i.style.display = "block";
            i.innerHTML = (0, n.A)("commonInvalidSpecialChar");
          } else if (e.getAttribute("data-login") || /^(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(t)) {
            e.classList.remove("invalid");
            i.style.display = "none";
          } else {
            o = true;
            e.classList.add("invalid");
            i.style.display = "block";
            i.innerHTML = (0, n.A)("commonInvalidPasswordCombination");
          }
        } else if (i === "code") {
          const i = e.nextElementSibling;
          if (t.length !== 6) {
            e.classList.add("invalid");
            i.style.display = "block";
            o = true;
          } else {
            e.classList.remove("invalid");
            i.style.display = "none";
          }
          setTimeout(() => {
            e.classList.remove("invalid");
            i.style.display = "none";
          }, 3000);
        }
        return !o;
      }
      i.d(t, ["y8", 0, (e = "success", t = "commonServerError", i = 3, a) => {
        var r;
        if ((r = o("toast-box")) !== null && r !== undefined) {
          r.remove();
        }
        let c = t ? (0, n.A)(t) : e == "danger" ? (0, n.A)("commonServerError") : (0, n.A)("commonSuccess");
        if (a) {
          c = c.replace("{email}", a);
        }
        const l = {
          success: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/></svg>",
          warning: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>",
          danger: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/></svg>"
        };
        const d = s("div", {
          className: "toast-icon"
        });
        d.innerHTML = l[e] || l.success;
        const p = s("div", {
          className: "toast-close",
          onclick: () => {
            var e;
            if ((e = o("toast-box")) === null || e === undefined) {
              return undefined;
            } else {
              return e.remove();
            }
          }
        });
        p.innerHTML = "<svg viewBox=\"0 0 24 24\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>";
        document.body.append(s("div", {
          id: "toast-box",
          className: `toast ${e}`
        }, d, s("span", {
          className: "toast-text"
        }, c), p));
        setTimeout(() => {
          var e;
          if ((e = o("toast-box")) === null || e === undefined) {
            return undefined;
          } else {
            return e.remove();
          }
        }, i * 1000);
      }]);
    }
