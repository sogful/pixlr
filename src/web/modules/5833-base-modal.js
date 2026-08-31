window.__webModules[5833] = function (e, t, i) {
      i.d(t, {
        A: () => o
      });
      var n = i(5283);
      var a = i(5699);
      class o {
        constructor(e = true, t) {
          this.scopedId = e => `${this.mid}-${e}`;
          this.setContent = (...e) => {
            if (e[0] instanceof HTMLElement) {
              this.content.append(...e);
            } else {
              this.content.innerHTML += e[0];
            }
          };
          this.keyDown = e => {
            if (e.key === "Escape" || e.key === "Esc") {
              this.cleanUp();
            }
          };
          this.cleanUp = () => {
            document.removeEventListener("keydown", this.keyDown, false);
            this.dialog.classList.remove("ani");
            this.modal.classList.remove("dim");
            setTimeout(() => {
              this.dialog.remove();
              this.dialog = null;
              this.modal.remove();
              this.modal = null;
            }, 200);
            if (this.redirectUrl) {
              window.location.href = this.redirectUrl;
            }
          };
          this.redirectUrl = t;
          this.mid = a.r0();
          this.modal = (0, n.T)("div", {
            id: "modal-" + this.mid,
            className: "modal"
          });
          document.body.appendChild(this.modal);
          this.dialog = (0, n.T)("div", {
            className: "announce"
          });
          this.modal.appendChild(this.dialog);
          this.content = (0, n.T)("div", {
            className: "content"
          });
          this.dialog.append((0, n.T)("div", {
            id: "announce-close" + this.mid,
            className: "announce-close",
            onclick: () => this.cleanUp()
          }, (0, n.T)("img", {
            src: "assets/images/icon/close.svg"
          })), this.content);
          document.addEventListener("keydown", this.keyDown, false);
          setTimeout(() => this.dialog.classList.add("ani"), 5);
          if (e) {
            setTimeout(() => this.modal.classList.add("dim"), 5);
          }
        }
      }
    }
