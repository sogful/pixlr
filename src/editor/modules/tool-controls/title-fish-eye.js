window.__editorModules[5727] = function (t, e, s) {
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
          super(t, (0, o.A)("titleFishEye"));
          this.update = r.eD(50, () => {
            const t = Number(document.querySelector("input[name=\"edge-fill\"]:checked").value);
            const e = {
              amount: this.amount.getValue(),
              aperture: this.aperture.getValue() * (Math.PI / 1.8),
              x: this.x.getValue(),
              y: this.y.getValue(),
              edgeFill: t
            };
            this.change("fisheye", e);
          });
          this.setContent(`\n             <div id="fish-eye-aperture"></div>\n             <div id="fish-eye-x" class="top-16"></div>\n             <div id="fish-eye-y" class="top-16"></div>\n             <div id="fish-eye-amount" class="top-10"></div>\n             <label class="split top-35">${(0, o.A)("edgeFill")}</label>\n             <div class="switch-field top-5" id="fish-eye-edge-fill">\n                 <input type="radio" id="edge-fill-none" name="edge-fill" value="0" checked/><label for="edge-fill-none">${(0, o.A)("none")}</label>\n                 <input type="radio" id="edge-fill-reflect" name="edge-fill" value="1"/><label for="edge-fill-reflect">${(0, o.A)("reflect")}</label>\n                 <input type="radio" id="edge-fill-repeat" name="edge-fill" value="2"/><label for="edge-fill-repeat">${(0, o.A)("repeat")}</label>\n             </div>\n            `);
          this.amount = new a.A("fish-eye-amount", {
            label: (0, o.A)("stretch"),
            range: [0, 1],
            defaultValue: 0,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.aperture = new a.A("fish-eye-aperture", {
            label: (0, o.A)("buldge"),
            step: 0.01,
            range: [-Math.PI / 2, Math.PI / 2],
            defaultValue: 0,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          this.x = new a.A("fish-eye-x", {
            label: "X",
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.y = new a.A("fish-eye-y", {
            label: "Y",
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          (0, n.Ay)("edge-fill-none").addEventListener("change", this.update, false);
          (0, n.Ay)("edge-fill-reflect").addEventListener("change", this.update, false);
          (0, n.Ay)("edge-fill-repeat").addEventListener("change", this.update, false);
          this.update();
        }
      }
    }
