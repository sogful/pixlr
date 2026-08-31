window.__editorModules[5642] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5699);
      var a = s(2948);
      class n extends a.A {
        constructor(t) {
          super(t, "auto");
          let e = i.tn(this.selected.canvas);
          this.shaders.addShader("bwpoint", {
            black: e.x,
            white: e.y
          });
          let s = i.T6(this.selected.canvas);
          if (s < 0.7) {
            this.shaders.addShader("vibrance", 0.7 - s);
          }
          this.apply();
        }
      }
    }
