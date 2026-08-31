window.__editorModules[5833] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5283);
      var a = s(5699);
      class n {
        constructor(t = true, e) {
          this.scopedId = t => `${this.mid}-${t}`;
          this.setContent = (...t) => {
            if (t[0] instanceof HTMLElement) {
              this.content.append(...t);
            } else {
              this.content.innerHTML += t[0];
            }
          };
          this.keyDown = t => {
            if (t.key === "Escape" || t.key === "Esc") {
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
          this.redirectUrl = e;
          this.mid = a.r0();
          this.modal = (0, i.T)("div", {
            id: "modal-" + this.mid,
            className: "modal"
          });
          document.body.appendChild(this.modal);
          this.dialog = (0, i.T)("div", {
            className: "announce"
          });
          this.modal.appendChild(this.dialog);
          this.content = (0, i.T)("div", {
            className: "content"
          });
          this.dialog.append((0, i.T)("div", {
            id: "announce-close" + this.mid,
            className: "announce-close",
            onclick: () => this.cleanUp()
          }, (0, i.T)("img", {
            src: "assets/images/icon/close.svg"
          })), this.content);
          document.addEventListener("keydown", this.keyDown, false);
          setTimeout(() => this.dialog.classList.add("ani"), 5);
          if (t) {
            setTimeout(() => this.modal.classList.add("dim"), 5);
          }
        }
      }
    }
