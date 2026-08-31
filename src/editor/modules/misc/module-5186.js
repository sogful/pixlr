window.__editorModules[5186] = function (t, e, s) {
      s.d(e, {
        A: () => a
      });
      var i = s(2948);
      class a extends i.A {
        constructor(t) {
          super(t, "pop");
          this.shaders.addShader("highlights", 0.5);
          this.shaders.addShader("shadows", -0.5);
          this.shaders.addShader("vibrance", 0.5);
          this.shaders.addShader("saturation", 0.2);
          this.shaders.addShader("exposure", 0.2);
          this.shaders.addShader("clarity", 0.2);
          this.apply();
        }
      }
    }
