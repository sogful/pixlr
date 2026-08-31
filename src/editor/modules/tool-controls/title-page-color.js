window.__editorModules[6797] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(6939);
      var o = s(5259);
      var r = s(3508);
      var h = s(98);
      class l extends n.A {
        constructor(t) {
          super((0, i.A)("titlePageColor"), false);
          this.change = t => {
            this.stage.fresco.color = t ? t.toHEX() : undefined;
            window.requestAnimationFrame(() => {
              this.stage.render();
            });
          };
          this.apply = () => {
            this.stage.history.add({
              type: "background",
              color: this.current
            });
            if (this.stage.fresco.color) {
              (0, h.oY)(o.A.fromHEX(this.stage.fresco.color));
            }
            this.cleanUp();
          };
          this.cancel = () => {
            this.stage.fresco.color = this.current;
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            this.cleanUp();
          };
          this.dialog.style.maxWidth = "380px";
          this.stage = t;
          this.current = this.stage.fresco.color;
          const e = (0, a.T)("div", {});
          this.setContent(e);
          this.colorselector = new r.A(e, this.current ? o.A.fromHEX(this.current) : undefined, this.change, true, true, true);
          this.position();
        }
      }
    }
