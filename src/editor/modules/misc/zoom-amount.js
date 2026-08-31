window.__editorModules[7588] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(3517);
      var o = s(9310);
      var r = s(5699);
      class h extends o.A {
        constructor(t) {
          super(t, (0, i.A)("titleZoomBlur"));
          this.update = r.eD(50, () => {
            const t = {
              x: this.x.getValue(),
              y: 1 - this.y.getValue(),
              amount: this.amount.getValue()
            };
            this.change("zoom", t.amount ? t : undefined);
          });
          this.kind = "zoom";
          this.setContent((0, a.T)("div", {
            id: "zoom-amount"
          }), (0, a.T)("div", {
            id: "zoom-x",
            className: "top-10"
          }), (0, a.T)("div", {
            id: "zoom-y",
            className: "top-10"
          }));
          this.amount = new n.A("zoom-amount", {
            label: (0, i.A)("amount"),
            range: [0, 1],
            defaultValue: 0.2,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.x = new n.A("zoom-x", {
            label: "X",
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.y = new n.A("zoom-y", {
            label: "Y",
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.update();
        }
      }
    }
