window.__editorModules[6473] = function (t, e, s) {
      s.d(e, {
        A: () => a
      });
      var i = s(2948);
      class a extends i.A {
        constructor(t) {
          super(t, "bw");
          this.shaders.addShader("saturation", -1);
          this.shaders.addShader("contrast", 0.2);
          this.shaders.addShader("exposure", 0.1);
          this.shaders.addShader("clarity", 0.1);
          this.apply();
        }
      }
    }
