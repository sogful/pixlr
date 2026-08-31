window.__editorModules[1450] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(6);
      var n = s(5259);
      var o = s(5138);
      var r = s(9727);
      class h {
        constructor(t, e, s, h) {
          this.previewFill = t => {
            this.setFill(t);
            if (this.preview) {
              this.preview(this.fill);
            }
          };
          this.callbackFill = t => {
            this.setFill(t);
            if (this.callback) {
              this.callback(this.fill);
            }
          };
          this.setFill = t => {
            this.fill = t;
            this.holder.classList.remove("empty");
            this.holder.style.backgroundColor = "unset";
            this.holder.style.backgroundImage = "unset";
            if (this.fill && this.fill.value) {
              if (this.fill.value instanceof n.A) {
                this.holder.style.backgroundColor = this.fill.value.toHEX();
              } else if (this.fill.value instanceof a.Ay || this.fill.value instanceof o.A) {
                this.holder.style.backgroundImage = this.fill.value.toCSS();
              }
            } else {
              this.holder.classList.add("empty");
            }
          };
          this.getFill = () => this.fill;
          this.picker = () => {
            new r.A(this.fill, this.callbackFill, this.previewFill);
          };
          this.cleanUp = () => {
            this.container.removeEventListener("click", this.picker, false);
          };
          this.fill = e;
          this.preview = h;
          this.callback = s;
          this.container = (0, i.Ay)(t);
          this.container.classList.add("fill-pod");
          this.container.addEventListener("click", this.picker, false);
          if (this.container.hasChildNodes()) {
            this.holder = (0, i.Ay)(t + "-holder");
          } else {
            this.holder = (0, i.T)("div", {
              id: t + "-holder"
            });
            this.container.appendChild(this.holder);
          }
          this.setFill(e);
        }
      }
    }
