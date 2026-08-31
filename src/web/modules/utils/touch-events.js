window.__webModules[3673] = function (e, t, i) {
      function n(e, t) {
        let i = 0;
        let n = 0;
        let a = false;
        let o = 0;
        e.addEventListener("touchstart", t => {
          const s = t.touches[0];
          const r = e.getBoundingClientRect();
          if (s.clientY - r.top > 60) {
            return;
          }
          if (!t.target.closest(".sheet-nav")) {
            i = s.clientY;
            n = i;
            o = r.height;
            a = true;
            e.style.transition = "none";
          }
        });
        e.addEventListener("touchmove", t => {
          if (!a) {
            return;
          }
          t.preventDefault();
          n = t.touches[0].clientY;
          const s = n - i;
          if (s > 0) {
            e.style.transform = `translateY(${s}px)`;
          } else {
            const t = window.innerHeight * 0.95;
            const i = Math.min(t, o - s);
            e.style.maxHeight = i + "px";
          }
        }, {
          passive: false
        });
        e.addEventListener("touchend", () => {
          if (!a) {
            return;
          }
          a = false;
          const o = n - i;
          if (o > 100) {
            e.style.transition = "transform 200ms ease-out";
            e.style.transform = "translateY(100%)";
            setTimeout(t, 200);
          } else if (o < -30) {
            e.style.transition = "max-height 200ms ease";
            e.style.maxHeight = "95dvh";
            setTimeout(() => {
              e.style.transition = "";
            }, 200);
          } else {
            e.style.transition = "transform 150ms ease, max-height 150ms ease";
            e.style.transform = "";
            setTimeout(() => {
              e.style.transition = "";
            }, 150);
          }
        });
      }
      i.d(t, {
        a: () => n
      });
    }
