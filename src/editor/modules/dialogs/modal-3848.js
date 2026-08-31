window.__editorModules[3848] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(5699);
      var a = s(6050);
      var n = s(98);
      var o = s(5283);
      class r {
        constructor(t, e, s = false) {
          this.docked = false;
          this.setTitle = (t, e = 40) => {
            t = t.length > e ? `${t.substring(0, 5)}...` : t;
            (0, o.Ay)("float-title-" + this.mid).innerHTML = t;
          };
          this.position = () => {
            if (this.parent) {
              if (n.Ay.product === "express") {
                this.float.style.left = "400px";
                this.float.style.top = Math.round(((0, o.Ay)("workspace").clientHeight - this.float.clientHeight) / 3) + "px";
              } else {
                let t = this.parent.getBoundingClientRect();
                this.float.style.left = ~~(t.right - this.float.clientWidth / 2 - t.width / 2) + "px";
                this.float.style.top = t.top + 30 + "px";
              }
            } else {
              const t = (0, o.Ay)("workspace").getBoundingClientRect();
              if (this.docked) {
                this.float.style.left = "unset";
                this.float.style.right = "0";
                this.float.style.top = "77px";
                this.float.style.height = t.height - 77 + "px";
              } else {
                this.float.style.left = t.width - ~~(this.float.offsetWidth / 2) - 400 + "px";
                this.float.style.height = "600px";
                this.float.style.top = "120px";
              }
              this.float.classList.toggle("docked", this.docked);
            }
          };
          this.setContent = (...t) => {
            if (t[0] instanceof HTMLElement) {
              this.content.append(...t);
            } else {
              this.content.innerHTML += t[0];
            }
            this.position();
          };
          this.dragStart = t => {
            if (!this.docked) {
              this.p = t;
              this.d = new a.A(this.float.offsetLeft, this.float.offsetTop);
            }
          };
          this.dragMove = t => {
            if (!this.docked) {
              this.float.style.left = Math.round(this.d.x + (t.x - this.p.x)) + "px";
              this.float.style.top = Math.round(this.d.y + (t.y - this.p.y)) + "px";
            }
          };
          this.dragEnd = t => {
            if (this.docked) {
              return;
            }
            let e = Math.round(this.d.y + (t.y - this.p.y));
            let s = Math.round(this.d.x + (t.x - this.p.x));
            let i = this.float.offsetWidth;
            if (e < 20) {
              e = 20;
            }
            if (s < -i / 2) {
              s = 0;
            }
            if (s + i / 2 > (0, o.Ay)("workspace").offsetWidth) {
              s = (0, o.Ay)("workspace").offsetWidth - i;
            }
            this.float.style.left = s + "px";
            this.float.style.top = e + "px";
          };
          this.resizeStart = t => {
            this.d = new a.A(this.float.clientHeight, t.y);
          };
          this.resizeMove = t => {
            const e = this.d.x + (t.y - this.d.y);
            this.float.style.height = (e < 320 ? 320 : e) + "px";
          };
          this.keyDown = t => {
            if (t.key === "Enter" || t.key === "Escape") {
              this.cleanUp();
            }
          };
          this.superCleanUp = () => {
            var t;
            document.removeEventListener("keydown", this.keyDown, false);
            this.float.remove();
            this.float = null;
            if ((t = this.modal) !== null && t !== undefined) {
              t.remove();
            }
            this.modal = null;
          };
          this.cleanUp = () => {
            this.superCleanUp();
          };
          this.parent = t;
          this.mid = i.r0();
          if (this.parent) {
            let t;
            document.addEventListener("keydown", this.keyDown, false);
            this.modal = (0, o.T)("div", {
              id: "modal-" + this.mid,
              className: "modal"
            });
            this.modal.addEventListener("mousedown", e => {
              t = e.target;
            });
            this.modal.addEventListener("mouseup", e => {
              if (e.target === t && e.target === this.modal) {
                this.cleanUp();
              }
            });
            document.body.appendChild(this.modal);
          }
          this.float = (0, o.T)("div", {
            className: "float"
          });
          if (this.modal) {
            this.modal.appendChild(this.float);
          } else {
            (0, o.Ay)("workspace").append(this.float);
          }
          this.content = (0, o.T)("div", {
            className: "content"
          });
          const r = (0, o.T)("div", {
            id: "float-title-" + this.mid,
            className: "title"
          }, e);
          (0, o.Bb)(r, this.dragStart, this.dragMove, this.dragEnd);
          this.float.append(r, (0, o.T)("img", {
            id: "float-close" + this.mid,
            className: "close ic",
            src: "assets/images/icon/close.svg",
            onclick: () => this.cleanUp()
          }), (0, o.T)("div", {
            className: "splitter small"
          }), this.content);
          if (s) {
            const t = (0, o.T)("img", {
              id: "resize-" + this.mid,
              src: "assets/images/icon/three-dot.svg",
              className: "resize ic"
            });
            (0, o.Bb)(t, this.resizeStart, this.resizeMove);
            this.float.append(t);
          }
          this.position();
        }
      }
    }
