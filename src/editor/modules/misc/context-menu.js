window.__editorModules[7578] = function (t, e, s) {
      s.d(e, {
        Ay: () => o,
        K5: () => n,
        kt: () => a
      });
      var i = s(5283);
      class a {
        constructor(t, e, s, i, a) {
          this.name = t;
          this.callback = e;
          this.short = s;
          this.icon = i;
          this.sub = a;
        }
      }
      class n extends a {
        constructor() {
          super();
        }
      }
      class o {
        constructor(t, e, s = false) {
          this.addItem = (t, e) => {
            if (t.name) {
              if (t.sub) {
                const s = (0, i.T)("ul");
                const a = (0, i.T)("li", {
                  className: "more"
                }, t.icon ? (0, i.T)("img", {
                  src: t.icon
                }) : "", t.name, s);
                for (const e of t.sub) {
                  this.addItem(e, s);
                }
                e.append(a);
              } else if (t.callback) {
                e.appendChild((0, i.T)("li", {
                  onclick: () => {
                    t.callback();
                    this.cleanUp();
                  }
                }, t.icon ? (0, i.T)("img", {
                  src: t.icon
                }) : "", t.name, t.short ? (0, i.T)("span", {}, t.short) : ""));
              } else {
                e.appendChild((0, i.T)("li", {
                  className: "disabled"
                }, t.icon ? (0, i.T)("img", {
                  src: t.icon
                }) : "", t.name, t.short ? (0, i.T)("span", {}, t.short) : ""));
              }
            } else {
              e.appendChild((0, i.T)("li", {
                className: "split"
              }));
            }
          };
          this.cleanUp = () => {
            this.holder.removeEventListener("mouseleave", this.cleanUp);
            this.holder.remove();
            this.holder = undefined;
            this.id = undefined;
          };
          this.id = Math.round(Math.random() * 99999999999999).toString();
          this.holder = (0, i.T)("div", {
            id: this.id,
            className: "overflow-menu-holder"
          });
          this.holder.addEventListener("contextmenu", t => {
            t.stopPropagation();
            t.preventDefault();
            return false;
          });
          this.holder.style.display = "block";
          this.holder.style.left = s ? t.x - 235 + "px" : t.x - 5 + "px";
          this.list = (0, i.T)("ul", {
            className: "overflow-menu"
          });
          this.holder.appendChild(this.list);
          for (const i of e) {
            this.addItem(i, this.list);
          }
          this.holder.addEventListener("mouseleave", this.cleanUp);
          const a = (0, i.Ay)("workspace");
          const n = a && window.getComputedStyle(a).display !== "none" ? a : (0, i.Ay)("splash");
          n.appendChild(this.holder);
          if (t.y + this.holder.clientHeight > n.clientHeight) {
            this.holder.style.top = t.y + 5 - this.holder.clientHeight + "px";
          } else {
            this.holder.style.top = t.y - 5 + "px";
          }
        }
      }
    }
