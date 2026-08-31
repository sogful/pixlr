window.__editorModules[6546] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleMosaic"));
          this.setContent((0, n.T)("div", {
            id: "mosaic-slider"
          }));
          new a.A("mosaic-slider", {
            label: (0, o.A)("amount"),
            range: [0, 1],
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("mosaic", t)
          });
        }
      }
    }
