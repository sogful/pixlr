window.__editorModules[2813] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titlePolarCoordinates"));
          this.update = () => {
            this.change("polarcoordinates", {
              rotate: this.rotate.getValue() * (Math.PI / 1.8),
              overlap: this.overlap.getValue() * (Math.PI / 2),
              flip: (0, n.Ay)("polarcoordinates-flip").checked,
              symmetry: (0, n.Ay)("polarcoordinates-symmetry").checked
            });
          };
          this.setContent((0, n.T)("div", {
            id: "polarcoordinates-rotate"
          }), (0, n.T)("div", {
            id: "polarcoordinates-overlap",
            className: "range-box top-16"
          }), (0, n.T)("input", {
            type: "checkbox",
            id: "polarcoordinates-flip"
          }), (0, n.T)("label", {
            className: "top-20 switch",
            htmlFor: "polarcoordinates-flip"
          }, (0, o.A)("flip"), (0, n.T)("span")), (0, n.T)("input", {
            type: "checkbox",
            id: "polarcoordinates-symmetry"
          }), (0, n.T)("label", {
            className: "top-20 switch",
            htmlFor: "polarcoordinates-symmetry"
          }, (0, o.A)("symmetry"), (0, n.T)("span")));
          this.rotate = new a.A("polarcoordinates-rotate", {
            label: (0, o.A)("rotate"),
            step: 0.01,
            range: [0, 3.6],
            defaultValue: 0,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          this.overlap = new a.A("polarcoordinates-overlap", {
            label: (0, o.A)("overlap"),
            step: 0.01,
            range: [0, 1],
            defaultValue: 0,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          (0, n.Ay)("polarcoordinates-flip").addEventListener("click", () => {
            this.update();
          });
          (0, n.Ay)("polarcoordinates-symmetry").addEventListener("click", () => {
            this.update();
          });
          this.update();
        }
      }
    }
