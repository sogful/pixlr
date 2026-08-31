window.__editorModules[8527] = function (t, e, s) {
      s.d(e, {
        A: () => a
      });
      var i = s(5283);
      class a {
        constructor(t, e = 60000) {
          this.fill = (0, i.T)("div", {
            className: "modal-loader-fill"
          });
          this.label = (0, i.T)("div", {
            className: "modal-loader-label"
          }, "0%");
          const s = (0, i.T)("div", {
            className: "modal-loader-bar"
          }, this.fill);
          const a = (0, i.T)("div", {
            className: "modal-loader-spinner working large"
          });
          const n = (0, i.T)("div", {
            className: "modal-loader-title"
          }, t);
          const o = (0, i.T)("div", {
            className: "modal-loader-box"
          }, a, n, s, this.label);
          this.overlay = (0, i.T)("div", {
            className: "modal modal-loader"
          }, o);
          document.body.appendChild(this.overlay);
          const r = Date.now();
          requestAnimationFrame(() => {
            this.fill.style.transition = `width ${e}ms linear`;
            this.fill.style.width = "95%";
          });
          this.timer = setInterval(() => {
            const t = Math.min(95, Math.round((Date.now() - r) / e * 95));
            this.label.textContent = t + "%";
          }, 2000);
        }
        done() {
          clearInterval(this.timer);
          this.fill.style.transition = "width 0.3s ease";
          this.fill.style.width = "100%";
          this.label.textContent = "100%";
          setTimeout(() => this.overlay.remove(), 400);
        }
      }
    }
