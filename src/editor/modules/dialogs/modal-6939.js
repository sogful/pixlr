window.__editorModules[6939] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(6050);
      var o = s(98);
      var r = s(5283);
      class h {
        constructor(t, e = true, s = false) {
          this.setContent = (...t) => {
            if (t[0] instanceof HTMLElement) {
              this.content.append(...t);
            } else {
              this.content.innerHTML += t[0];
            }
            this.position();
          };
          this.disableApply = () => {
            const t = (0, r.Ay)("dialog-apply" + this.mid);
            t.classList.add("disabled");
            t.onclick = undefined;
          };
          this.enableApply = () => {
            const t = (0, r.Ay)("dialog-apply" + this.mid);
            t.classList.remove("disabled");
            t.onclick = () => this.apply();
          };
          this.disableCancel = () => {
            const t = (0, r.Ay)("dialog-cancel" + this.mid);
            t.classList.add("disabled");
            t.onclick = undefined;
          };
          this.enableCancel = () => {
            const t = (0, r.Ay)("dialog-cancel" + this.mid);
            t.classList.remove("disabled");
            t.onclick = () => this.cancel();
          };
          this.position = () => {
            this.dialog.style.left = Math.round((this.modal.offsetWidth - this.dialog.offsetWidth) / 2 + o.Ay.dialogPos.x) + "px";
            this.dialog.style.top = Math.round((this.modal.offsetHeight - this.dialog.offsetHeight) / 2 + o.Ay.dialogPos.y) + "px";
            let t = this.dialog.getBoundingClientRect();
            let e = this.modal.getBoundingClientRect();
            if (t.bottom > e.bottom) {
              this.dialog.style.top = e.height - t.height < 0 ? "0px" : e.height - t.height + "px";
            }
            if (t.right > e.right) {
              this.dialog.style.left = e.width - t.width < 0 ? "0px" : e.width - t.width + "px";
            }
            if (this.dialog.offsetTop < 0) {
              this.dialog.style.top = "0px";
            }
            if (this.dialog.offsetLeft < 0) {
              this.dialog.style.left = "0px";
            }
          };
          this.dragStart = t => {
            this.p = t;
            this.d = new n.A(this.dialog.offsetLeft, this.dialog.offsetTop);
          };
          this.dragMove = t => {
            this.dialog.style.left = Math.round(this.d.x + (t.x - this.p.x)) + "px";
            this.dialog.style.top = Math.round(this.d.y + (t.y - this.p.y)) + "px";
          };
          this.dragEnd = t => {
            o.Ay.dialogPos.x = Math.round(this.dialog.offsetLeft - (this.modal.offsetWidth - this.dialog.offsetWidth) / 2);
            o.Ay.dialogPos.y = Math.round(this.dialog.offsetTop - (this.modal.offsetHeight - this.dialog.offsetHeight) / 2);
          };
          this.resizeStart = t => {
            this.d = new n.A(this.dialog.clientHeight, t.y);
          };
          this.resizeMove = t => {
            const e = this.d.x + (t.y - this.d.y);
            this.dialog.style.height = (e < 320 ? 320 : e) + "px";
          };
          this.keyDown = t => {
            if (t.keyCode != 27 || (0, r.Ay)("dialog-cancel" + this.mid).style.display === "none") {
              if (t.keyCode == 13 && (0, r.Ay)("dialog-apply" + this.mid).style.display !== "none" && !t.shiftKey && !(0, r.Ay)("dialog-apply" + this.mid).classList.contains("disabled")) {
                this.apply();
              }
            } else {
              this.cancel();
            }
          };
          this.condition = () => {
            this.cleanUp();
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.apply = () => {
            this.cleanUp();
          };
          this.mid = a.r0();
          this.modal = (0, r.T)("div", {
            id: "modal-" + this.mid,
            className: "modal"
          });
          if (e) {
            this.modal.classList.add("dim");
          }
          document.body.appendChild(this.modal);
          this.dialog = (0, r.T)("div", {
            className: "dialog"
          });
          this.modal.appendChild(this.dialog);
          this.content = (0, r.T)("div", {
            className: "content"
          });
          const h = (0, r.T)("div", {
            id: "dialog-title" + this.mid,
            className: "title"
          }, t);
          if (document.body.clientWidth >= 650) {
            (0, r.Bb)(h, this.dragStart, this.dragMove, this.dragEnd);
          }
          this.dialog.append(h, (0, r.T)("img", {
            id: "dialog-close" + this.mid,
            className: "close ic",
            src: "assets/images/icon/close.svg",
            onclick: () => this.cancel()
          }), this.content, (0, r.T)("div", {
            className: "buttons",
            id: "dialog-buttons" + this.mid
          }, (0, r.T)("a", {
            id: "dialog-cancel" + this.mid,
            className: "button negative",
            onclick: () => this.cancel()
          }, (0, i.A)("cancel")), (0, r.T)("a", {
            id: "dialog-apply" + this.mid,
            className: "button positive",
            onclick: () => this.apply()
          }, (0, i.A)("apply"))));
          if (s) {
            const t = (0, r.T)("img", {
              id: "resize-" + this.mid,
              src: "assets/images/icon/three-dot.svg",
              className: "resize ic"
            });
            (0, r.Bb)(t, this.resizeStart, this.resizeMove);
            this.dialog.append(t);
          }
          document.addEventListener("keydown", this.keyDown, false);
        }
        cleanUp() {
          document.removeEventListener("keydown", this.keyDown, false);
          this.dialog.remove();
          this.dialog = null;
          this.modal.remove();
          this.modal = null;
        }
      }
    }
