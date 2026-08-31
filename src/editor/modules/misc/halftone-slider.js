window.__editorModules[511] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(5283);
      var n = s(3517);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleHalftone"));
          this.setContent((0, a.T)("div", {
            id: "halftone-slider"
          }));
          const e = new n.A("halftone-slider", {
            label: (0, o.A)("frequency"),
            range: [0.01, 2],
            step: 0.01,
            defaultValue: 0.4,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("halftone", t)
          });
          setTimeout(() => this.change("halftone", e.getValue()));
        }
      }
    }
