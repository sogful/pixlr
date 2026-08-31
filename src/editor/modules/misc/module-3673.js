window.__editorModules[3673] = function (t, e, s) {
      function i(t, e) {
        let s = 0;
        let i = 0;
        let a = false;
        let n = 0;
        t.addEventListener("touchstart", e => {
          const o = e.touches[0];
          const r = t.getBoundingClientRect();
          if (o.clientY - r.top > 60) {
            return;
          }
          if (!e.target.closest(".sheet-nav")) {
            s = o.clientY;
            i = s;
            n = r.height;
            a = true;
            t.style.transition = "none";
          }
        });
        t.addEventListener("touchmove", e => {
          if (!a) {
            return;
          }
          e.preventDefault();
          i = e.touches[0].clientY;
          const o = i - s;
          if (o > 0) {
            t.style.transform = `translateY(${o}px)`;
          } else {
            const e = window.innerHeight * 0.95;
            const s = Math.min(e, n - o);
            t.style.maxHeight = s + "px";
          }
        }, {
          passive: false
        });
        t.addEventListener("touchend", () => {
          if (!a) {
            return;
          }
          a = false;
          const n = i - s;
          if (n > 100) {
            t.style.transition = "transform 200ms ease-out";
            t.style.transform = "translateY(100%)";
            setTimeout(e, 200);
          } else if (n < -30) {
            t.style.transition = "max-height 200ms ease";
            t.style.maxHeight = "95dvh";
            setTimeout(() => {
              t.style.transition = "";
            }, 200);
          } else {
            t.style.transition = "transform 150ms ease, max-height 150ms ease";
            t.style.transform = "";
            setTimeout(() => {
              t.style.transition = "";
            }, 150);
          }
        });
      }
      s.d(e, {
        a: () => i
      });
    }
