window.__editorModules[1248] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      var r = s(5699);
      class h extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleRadialBlur"));
          this.update = r.eD(50, () => {
            const t = Number(document.querySelector("input[name=\"direction\"]:checked").value);
            const e = {
              amount: this.amount.getValue(),
              x: this.x.getValue(),
              y: this.y.getValue(),
              direction: t,
              symmetry: (0, n.Ay)("radial-symmetry").checked
            };
            this.change("radial", e.amount ? e : undefined);
          });
          this.setContent(`\n             <label>Direction</label>\n             <div class="switch-field top-5">\n                 <input type="radio" id="direction-cw" name="direction" value="0" checked/><label for="direction-cw">${(0, o.A)("right")}</label>\n                 <input type="radio" id="direction-ccw" name="direction" value="1"/><label for="direction-ccw">${(0, o.A)("left")}</label>\n                 <input type="radio" id="direction-bi" name="direction" value="2"/><label for="direction-bi">${(0, o.A)("both")}</label>\n             </div>\n             <div id="radial-amount" class="top-20"></div>\n             <div id="radial-x" class="top-16"></div>\n             <div id="radial-y" class="top-16"></div>\n             <input type="checkbox" id="radial-symmetry">\n             <label class="top-20 switch" for="radial-symmetry">${(0, o.A)("symmetry")}<span></span></label>\n             `);
          this.amount = new a.A("radial-amount", {
            label: (0, o.A)("amount"),
            range: [0, 1],
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.x = new a.A("radial-x", {
            label: "X",
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.y = new a.A("radial-y", {
            label: "Y",
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          (0, n.Ay)("direction-cw").addEventListener("change", this.update, false);
          (0, n.Ay)("direction-ccw").addEventListener("change", this.update, false);
          (0, n.Ay)("direction-bi").addEventListener("change", this.update, false);
          (0, n.Ay)("radial-symmetry").addEventListener("click", () => {
            this.update();
          });
          this.update();
        }
      }
    }
