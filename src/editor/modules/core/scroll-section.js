window.__editorModules[5328] = function (t, e, s) {
      s.d(e, {
        A: () => a
      });
      var i = s(5283);
      class a {
        constructor(t) {
          this.scrollTop = () => {
            this.content.scrollTo(0, 0);
          };
          this.moveBar = t => {
            let e = this.content.scrollHeight;
            let s = this.content.clientHeight;
            this.scrollRatio = s / e;
            if (this.scrollRatio >= 1) {
              this.bar.classList.add("ss-hidden");
            } else {
              this.bar.classList.remove("ss-hidden");
              const t = Math.max(this.scrollRatio * s, 20);
              const i = this.content.scrollTop / (e - s) * (s - t);
              this.bar.style.cssText = "height:" + t + "px; top:" + i + "px";
            }
          };
          t.classList.add("ss-wrapper");
          this.content = (0, i.T)("div", {
            id: t.id + "-ss-content",
            className: "ss-content"
          });
          while (t.firstChild) {
            this.content.appendChild(t.firstChild);
          }
          t.appendChild(this.content);
          this.bar = (0, i.T)("div", {
            className: "ss-scroll"
          });
          t.append(this.bar);
          let e = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            var e = t.pageY - this.lastPageY;
            this.lastPageY = t.pageY;
            this.content.scrollTop += e / this.scrollRatio;
          };
          let s = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            document.removeEventListener("mousemove", e, true);
            document.removeEventListener("mouseup", s, true);
          };
          this.bar.addEventListener("mousedown", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            this.lastPageY = t.pageY;
            document.addEventListener("mousemove", e, true);
            document.addEventListener("mouseup", s, true);
          }, true);
          this.moveBar(null);
          window.addEventListener("resize", this.moveBar);
          this.content.addEventListener("click", this.moveBar);
          this.content.addEventListener("scroll", this.moveBar);
          this.content.addEventListener("mouseenter", this.moveBar);
        }
      }
    }
