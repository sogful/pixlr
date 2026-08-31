window.__editorModules[2543] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(6939);
      var a = s(5283);
      class n extends i.A {
        constructor(t, e, s, i, n) {
          super(t, true);
          this.init = () => new Promise((t, e) => {
            this.cancel = () => {
              this.cleanUp();
              t(false);
            };
            this.condition = () => {
              this.cleanUp();
              t(undefined);
            };
            this.apply = () => {
              this.cleanUp();
              t(true);
            };
          });
          this.setContent((0, a.T)("p", e));
          if (s) {
            (0, a.Ay)("dialog-apply" + this.mid).innerText = s;
          }
          if (i) {
            (0, a.Ay)("dialog-cancel" + this.mid).innerText = i;
          }
          if (n) {
            (0, a.Ay)("dialog-cancel" + this.mid).before((0, a.T)("a", {
              id: "dialog-condition" + this.mid,
              className: "button negative",
              style: "margin-right:auto",
              onclick: () => this.condition()
            }, n));
          }
        }
      }
    }
