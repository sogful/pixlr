window.__editorModules[4759] = function (t, e, s) {
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
          super(t, (0, r.A)("titleMimicHDR"));
          this.createBlurMap = () => {
            this.shaders.addShader("blur", 1);
            this.shaders.addShader("invert", 1);
            this.shaders.addShader("desaturate", 1);
            this.blurmap = o.oM(this.shaders.apply(this.cache));
            this.shaders.reset();
          };
          this.update = o.eD(10, () => {
            this.change("mimichdr", this.amount.getValue() === 0 ? 0 : {
              amount: this.amount.getValue(),
              contra: this.contra.getValue(),
              blurMap: this.blurmap
            });
          });
          this.kind = "mimicHDR";
          this.setContent((0, n.T)("div", {
            id: "mimichdr-amount"
          }), (0, n.T)("div", {
            id: "mimichdr-contra"
          }));
          this.amount = new a.A("mimichdr-amount", {
            label: (0, r.A)("amount"),
            range: [0, 1],
            step: 0.01,
            defaultValue: 0.5,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          this.contra = new a.A("mimichdr-contra", {
            label: (0, r.A)("contrast"),
            range: [0, 1],
            step: 0.01,
            defaultValue: 0.2,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          this.createBlurMap();
          this.update();
        }
      }
    }
