window.__editorModules[5978] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(3517);
      var o = s(9310);
      class r extends o.A {
        constructor(t) {
          super(t, (0, i.A)("titleSlice"));
          this.update = () => {
            this.change("slice", {
              seed: this.seed.getValue(),
              amount: this.amount.getValue(),
              distance: this.distance.getValue(),
              line: (0, a.Ay)("slice-line").checked
            });
          };
          this.setContent((0, a.T)("div", {
            id: "slice-seed"
          }), (0, a.T)("div", {
            id: "slice-amount",
            className: "top-16"
          }), (0, a.T)("div", {
            id: "slice-distance",
            className: "top-16"
          }), (0, a.T)("input", {
            type: "checkbox",
            id: "slice-line"
          }), (0, a.T)("label", {
            className: "top-20 switch",
            htmlFor: "slice-line"
          }, (0, i.A)("line"), (0, a.T)("span")));
          this.seed = new n.A("slice-seed", {
            label: (0, i.A)("seed"),
            range: [0, 200],
            step: 1,
            defaultValue: 100,
            labelFormat: t => String(t),
            onChange: t => this.update()
          });
          this.amount = new n.A("slice-amount", {
            label: (0, i.A)("amount"),
            step: 1,
            range: [0, 25],
            defaultValue: 4,
            labelFormat: t => `${Math.round(t)}`,
            labelParse: t => parseInt(t, 10),
            onChange: t => this.update()
          });
          this.distance = new n.A("slice-distance", {
            label: (0, i.A)("distance"),
            step: 0.01,
            range: [-1, 1],
            defaultValue: 0.2,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          (0, a.Ay)("slice-line").addEventListener("click", this.update);
          this.update();
        }
      }
    }
