window.__editorModules[9910] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleHighlightsShadows"));
          this.kind = "highlightsShadows";
          this.setContent((0, n.T)("div", {
            id: "highlight-slider"
          }), (0, n.T)("div", {
            id: "shadows-slider",
            className: "top-16"
          }));
          new a.A("highlight-slider", {
            label: (0, o.A)("highlights"),
            step: 0.01,
            range: [-2, 2],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("highlights", t)
          });
          new a.A("shadows-slider", {
            label: (0, o.A)("shadows"),
            step: 0.01,
            range: [-2, 2],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("shadows", t)
          });
        }
      }
    }
