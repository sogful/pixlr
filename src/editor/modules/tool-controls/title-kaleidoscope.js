window.__editorModules[755] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(3517);
      var o = s(9310);
      class r extends o.A {
        constructor(t) {
          super(t, (0, i.A)("titleKaleidoscope"));
          this.update = () => {
            a.sg("kaleidoscope", 50, () => {
              const t = {
                amount: this.amount.getValue(),
                stretch: this.stretch.getValue(),
                position: this.pos.getValue()
              };
              this.change("kaleidoscope", t);
            });
          };
          this.setContent("\n             <div id=\"kaleidoscope-amount\"></div>\n             <div id=\"kaleidoscope-stretch\" class=\"top-16\"></div>\n             <div id=\"kaleidoscope-position\" class=\"top-16\"></div>\n            ");
          this.amount = new n.A("kaleidoscope-amount", {
            label: (0, i.A)("amount"),
            range: [2, 20],
            defaultValue: 5,
            step: 1,
            onChange: () => this.update()
          });
          this.stretch = new n.A("kaleidoscope-stretch", {
            label: "Stretch",
            range: [0, 1],
            defaultValue: 0,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.pos = new n.A("kaleidoscope-position", {
            label: "Position",
            range: [0, 1],
            defaultValue: 0,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.update();
        }
      }
    }
