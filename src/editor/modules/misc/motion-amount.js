window.__editorModules[205] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(5699);
      var r = s(7775);
      class h extends i.A {
        constructor(t) {
          super(t, (0, r.A)("titleMotionBlur"));
          this.update = () => {
            o.sg("motion-blur", 50, () => {
              const t = {
                amount: this.amount.getValue(),
                angle: this.angle.getValue() * (Math.PI / 1.8)
              };
              this.change("motion", t.amount ? t : undefined);
            });
          };
          this.setContent((0, n.T)("div", {
            id: "motion-amount"
          }), (0, n.T)("div", {
            id: "motion-angle"
          }));
          this.amount = new a.A("motion-amount", {
            label: (0, r.A)("amount"),
            range: [0, 1],
            step: 0.05,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.angle = new a.A("motion-angle", {
            label: (0, r.A)("angle"),
            step: 0.01,
            range: [0, 3.6],
            defaultValue: 0,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          this.update();
        }
      }
    }
