window.__editorModules[9571] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleExposure"));
          this.setContent((0, n.T)("div", {
            id: "exposure"
          }));
          new a.A("exposure", {
            label: (0, o.A)("amount"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("exposure", t)
          });
        }
      }
    }
