window.__editorModules[2875] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleBrightnessContrast"));
          this.kind = "brightnessContrast";
          this.setContent((0, n.T)("div", {
            id: "brightness"
          }), (0, n.T)("div", {
            id: "contrast",
            className: "top-16"
          }));
          new a.A("brightness", {
            label: (0, o.A)("brightness"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("brightness", t)
          });
          new a.A("contrast", {
            label: (0, o.A)("contrast"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("contrast", t)
          });
        }
      }
    }
