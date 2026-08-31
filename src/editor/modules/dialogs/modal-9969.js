window.__editorModules[9969] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5699);
      var a = s(5283);
      class n {
        constructor(t, e = "right") {
          let s;
          this.position = (t = this.flow) => {
            let e = this.parent.getBoundingClientRect();
            const s = document.documentElement.clientWidth;
            const a = document.documentElement.clientHeight;
            const n = this.drop.offsetWidth;
            const o = this.drop.offsetHeight;
            this.drop.classList.remove("up", "down", "left", "right");
            if (t === "up" || s < 650) {
              let t = i.qE(e.right - n + 15, 30, s - n - 30);
              let a = e.top - o;
              if (a < 30) {
                a = e.bottom + 5;
              }
              this.drop.style.left = t + "px";
              this.drop.style.top = a + "px";
              this.drop.classList.add("up");
            } else {
              let r;
              let h;
              switch (t) {
                case "right":
                  r = e.right - 5;
                  h = e.top - 24;
                  break;
                case "left":
                  r = e.left - n + this.parent.offsetWidth / 2 + 38;
                  h = e.top - o;
                  break;
                default:
                  r = e.left + this.parent.offsetWidth / 2 - 36;
                  h = e.bottom + 5;
              }
              r = i.qE(r, 30, s - n - 30);
              h = i.qE(h, 30, a - o - 30);
              this.drop.style.left = r + "px";
              this.drop.style.top = h + "px";
              this.drop.classList.add(t);
            }
          };
          this.setContent = (...t) => {
            if (t[0] instanceof HTMLElement) {
              this.content.append(...t);
            } else {
              this.content.innerHTML += t[0];
            }
            this.position();
            requestAnimationFrame(() => {
              if (this.drop) {
                this.position();
              }
            });
          };
          this.keyDown = t => {
            if (t.key === "Enter" || t.key === "Escape") {
              this.cleanUp();
            }
          };
          this.superClean = () => {
            var t;
            document.removeEventListener("keydown", this.keyDown, false);
            this.drop.remove();
            this.drop = null;
            if ((t = this.modal) !== null && t !== undefined) {
              t.remove();
            }
            this.modal = null;
          };
          this.cleanUp = () => {
            this.superClean();
          };
          this.flow = e;
          this.parent = t;
          this.mid = i.r0();
          this.content = (0, a.T)("div", {
            className: "content"
          });
          this.drop = (0, a.T)("div", {
            className: "drop"
          }, this.content);
          this.modal = (0, a.T)("div", {
            id: "modal-" + this.mid,
            className: "modal"
          }, this.drop);
          this.modal.addEventListener("mousedown", t => {
            s = t.target;
          });
          this.modal.addEventListener("mouseup", t => {
            if (t.target === s && t.target === this.modal) {
              this.cleanUp();
            }
          });
          document.body.appendChild(this.modal);
          document.addEventListener("keydown", this.keyDown, false);
          this.position(e);
        }
      }
    }
