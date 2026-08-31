window.__editorModules[7177] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5283);
      var a = s(5527);
      class n extends a.A {
        constructor(t) {
          super("hand", t);
          this.stage = t;
          this.z1x = () => {
            this.stage.setZoom("1");
          };
          this.fit = () => {
            this.stage.setZoom("fit");
          };
          this.fill = () => {
            this.stage.setZoom("fill");
          };
          this.cleanUp = () => {
            this.stage.coating.removePan();
            (0, i.Ay)("hand-1x").removeEventListener("click", this.z1x, false);
            (0, i.Ay)("hand-fit").removeEventListener("click", this.fit, false);
            (0, i.Ay)("hand-fill").removeEventListener("click", this.fill, false);
          };
          (0, i.Ay)("hand-1x").addEventListener("click", this.z1x, false);
          (0, i.Ay)("hand-fit").addEventListener("click", this.fit, false);
          (0, i.Ay)("hand-fill").addEventListener("click", this.fill, false);
          this.stage.coating.setPan();
        }
      }
    }
