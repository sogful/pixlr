window.__editorModules[4328] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleScanlines"));
          this.update = () => {
            this.change("scanlines", {
              size: this.size.getValue() / 4,
              amount: this.amount.getValue() / 4,
              colorize: (0, n.Ay)("scanline-colorize").checked,
              direction: (0, n.Ay)("scanline-direction").checked
            });
          };
          this.kind = "scanlines";
          this.setContent((0, n.T)("div", {
            id: "scanline-size"
          }), (0, n.T)("div", {
            id: "scanline-amount",
            className: "range-box top-16"
          }), (0, n.T)("input", {
            type: "checkbox",
            checked: true,
            id: "scanline-colorize"
          }), (0, n.T)("label", {
            className: "top-20 switch",
            htmlFor: "scanline-colorize"
          }, (0, o.A)("colorize"), (0, n.T)("span")), (0, n.T)("input", {
            type: "checkbox",
            id: "scanline-direction"
          }), (0, n.T)("label", {
            className: "top-20 switch",
            htmlFor: "scanline-direction"
          }, (0, o.A)("vertical"), (0, n.T)("span")));
          this.size = new a.A("scanline-size", {
            label: (0, o.A)("size"),
            range: [1, 10],
            step: 1,
            defaultValue: 2,
            labelFormat: t => String(t),
            onChange: t => this.update()
          });
          this.amount = new a.A("scanline-amount", {
            label: (0, o.A)("amount"),
            step: 0.01,
            range: [0, 1],
            defaultValue: 0.2,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          (0, n.Ay)("scanline-colorize").addEventListener("click", () => {
            this.update();
          });
          (0, n.Ay)("scanline-direction").addEventListener("click", () => {
            this.update();
          });
          this.update();
        }
      }
    }
