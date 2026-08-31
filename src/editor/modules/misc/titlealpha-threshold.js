window.__editorModules[4865] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titlealphaThreshold"));
          this.setContent((0, n.T)("div", {
            id: "alphaThreshold"
          }));
          new a.A("alphaThreshold", {
            label: (0, o.A)("threshold"),
            step: 0.01,
            defaultValue: 0.5,
            range: [0, 1],
            labelFormat: t => `${Math.round(t * 255)}`,
            labelParse: t => parseInt(t, 10) / 255,
            onChange: t => this.change("alphaThreshold", t + 1e-13)
          });
          this.change("alphaThreshold", 0.5);
        }
      }
    }
