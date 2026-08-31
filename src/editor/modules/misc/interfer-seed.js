window.__editorModules[2706] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleInterference"));
          this.update = () => {
            this.change("interference", {
              seed: this.seed.getValue(),
              amount: this.amount.getValue(),
              direction: (0, n.Ay)("interfer-direction").checked
            });
          };
          this.kind = "interference";
          this.setContent((0, n.T)("div", {
            id: "interfer-seed"
          }), (0, n.T)("div", {
            id: "interfer-amount",
            className: "range-box top-16"
          }), (0, n.T)("input", {
            type: "checkbox",
            id: "interfer-direction"
          }), (0, n.T)("label", {
            className: "top-20 switch",
            htmlFor: "interfer-direction"
          }, (0, o.A)("vertical"), (0, n.T)("span")));
          this.seed = new a.A("interfer-seed", {
            label: (0, o.A)("seed"),
            range: [0, 100],
            step: 1,
            defaultValue: 23,
            labelFormat: t => String(t),
            onChange: t => this.update()
          });
          this.amount = new a.A("interfer-amount", {
            label: (0, o.A)("amount"),
            step: 0.01,
            range: [-1, 1],
            defaultValue: 0.2,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          (0, n.Ay)("interfer-direction").addEventListener("click", () => {
            this.update();
          });
          this.update();
        }
      }
    }
