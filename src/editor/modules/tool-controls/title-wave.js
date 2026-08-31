window.__editorModules[1283] = function (t, e, s) {
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
          super(t, (0, o.A)("titleWave"));
          this.update = () => {
            r.sg("wave", 50, () => {
              const t = Number(document.querySelector("input[name=\"type\"]:checked").value);
              const e = Number(document.querySelector("input[name=\"edge-approx\"]:checked").value);
              const s = {
                type: t,
                amplitude: this.amplitude.getValue(),
                scale: Math.max(0.01, this.scale.getValue()),
                rotate: this.rotate.getValue() * (Math.PI / 1.8),
                edgeApprox: e
              };
              this.change("wave", s.amplitude ? s : undefined);
            });
          };
          this.setContent(`\n            <label>${(0, o.A)("type")}</label>\n            <div class="switch-field top-5">\n                <input type="radio" id="type-sine" name="type" value="0" checked/><label for="type-sine">${(0, o.A)("round")}</label>\n                <input type="radio" id="type-triangle" name="type" value="1"/><label for="type-triangle">${(0, o.A)("triangle")}</label>\n                <input type="radio" id="type-square" name="type" value="2"/><label for="type-square">${(0, o.A)("square")}</label>\n            </div>\n\n            <div id="wave-amplitude" class="range-box top-20"></div>\n            <div id="wave-scale" class="range-box"></div>\n            <div id="wave-rotate" class="range-box"></div>\n\n            <label class="split top-35">${(0, o.A)("edgeFill")}</label>\n            <div class="switch-field top-5" id="wave-edge-approx">\n                <input type="radio" id="edge-approx-none" name="edge-approx" value="0" checked/><label for="edge-approx-none">${(0, o.A)("none")}</label>\n                <input type="radio" id="edge-approx-reflect" name="edge-approx" value="1"/><label for="edge-approx-reflect">${(0, o.A)("reflect")}</label>\n                <input type="radio" id="edge-approx-repeat" name="edge-approx" value="2"/><label for="edge-approx-repeat">${(0, o.A)("repeat")}</label>\n            </div>\n        `);
          this.amplitude = new a.A("wave-amplitude", {
            label: (0, o.A)("amplitude"),
            range: [-0.5, 0.5],
            step: 0.01,
            defaultValue: 0.05,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.scale = new a.A("wave-scale", {
            label: (0, o.A)("scale"),
            range: [1, 30],
            step: 1,
            defaultValue: 1,
            labelFormat: t => String(t),
            onChange: t => this.update()
          });
          this.rotate = new a.A("wave-rotate", {
            label: (0, o.A)("rotate"),
            step: 0.01,
            range: [-0.9, 0.9],
            defaultValue: 0,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          (0, n.Ay)("type-sine").addEventListener("change", this.update, false);
          (0, n.Ay)("type-triangle").addEventListener("change", this.update, false);
          (0, n.Ay)("type-square").addEventListener("change", this.update, false);
          (0, n.Ay)("edge-approx-none").addEventListener("change", this.update, false);
          (0, n.Ay)("edge-approx-reflect").addEventListener("change", this.update, false);
          (0, n.Ay)("edge-approx-repeat").addEventListener("change", this.update, false);
          this.update();
        }
      }
    }
