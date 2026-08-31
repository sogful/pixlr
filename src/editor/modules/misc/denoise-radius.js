window.__editorModules[4755] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(5699);
      var r = s(7775);
      class h extends i.A {
        constructor(t) {
          super(t, (0, r.A)("titleDenoise"));
          this.valueChange = o.eD(50, () => {
            this.shaders.addShader("denoise", this.radius.getValue() < 0.02 ? 0 : [this.radius.getValue(), this.threshold.getValue()]);
            setTimeout(() => {
              this.scratch.canvas = this.shaders.apply(this.cache);
              window.requestAnimationFrame(() => this.stage.render());
            }, 0);
          });
          this.kind = "denoise";
          this.setContent((0, n.T)("div", {
            id: "denoise-radius"
          }), (0, n.T)("div", {
            id: "denoise-threshold",
            className: "top-16"
          }));
          this.radius = new a.A("denoise-radius", {
            label: (0, r.A)("radius"),
            step: 0.01,
            range: [0, 1],
            defaultValue: 0.4,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.valueChange()
          });
          this.threshold = new a.A("denoise-threshold", {
            label: (0, r.A)("threshold"),
            step: 0.01,
            range: [0.01, 1],
            defaultValue: 0.12,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.valueChange()
          });
          this.valueChange();
        }
      }
    }
