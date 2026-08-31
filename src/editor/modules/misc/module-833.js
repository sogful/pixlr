window.__editorModules[833] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(5283);
      var a = s(5259);
      var n = s(9969);
      var o = s(3508);
      class r extends n.A {
        constructor(t, e, s, i, a = false, n = true, r = "right") {
          super(t);
          this.cleanUp = () => {
            if (this.callback) {
              this.callback(this.selector.color);
            }
            this.superClean();
          };
          this.color = e;
          this.preview = i;
          this.callback = s;
          this.selector = new o.A(this.content, this.color, this.preview, a, n, true);
          this.position(r);
        }
      }
      var h = s(98);
      class l {
        constructor(t, e, s, n, o = false, l = false, c = true) {
          this.previewColor = t => {
            this.setColor(t);
            if (this.preview) {
              this.preview(this.color);
            }
          };
          this.callbackColor = t => {
            this.setColor(t);
            (0, h.oY)(t);
            if (this.callback) {
              this.callback(this.color);
            }
          };
          this.setColor = t => {
            if (t) {
              if (t instanceof a.A) {
                this.color = t;
              } else {
                this.color = a.A.fromHEX(t);
              }
              (this.holder ?? this.container).classList.remove("empty");
              (this.holder ?? this.container).style.backgroundColor = this.color.toHEX();
            } else {
              this.color = undefined;
              (this.holder ?? this.container).classList.add("empty");
              (this.holder ?? this.container).style.backgroundColor = "unset";
            }
          };
          this.getColor = () => this.color;
          this.picker = () => {
            new r(this.container, this.color, this.callbackColor, this.previewColor, this.canBeEmpty, this.showPick);
          };
          this.cleanUp = () => {
            this.container.removeEventListener("click", this.picker, false);
          };
          this.preview = n;
          this.callback = s;
          this.canBeEmpty = o;
          this.showPick = c;
          this.container = (0, i.Ay)(t);
          this.container.classList.add("color-pod");
          this.container.addEventListener("click", this.picker, false);
          if (l) {
            this.container.classList.add("dodrop");
            if (this.container.hasChildNodes()) {
              this.holder = (0, i.Ay)(t + "-holder");
            } else {
              this.holder = (0, i.T)("div", {
                id: t + "-holder"
              });
              this.container.appendChild(this.holder);
            }
          }
          this.setColor(e);
        }
      }
    }
