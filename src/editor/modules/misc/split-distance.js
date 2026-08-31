window.__editorModules[5243] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleRGBSplit"));
          this.type = "red-blue";
          this.selectSwatch = t => {
            (0, n.Ay)("split-" + this.type).classList.remove("active");
            let e = t.currentTarget;
            this.type = e.getAttribute("data");
            e.classList.add("active");
            this.update();
          };
          this.update = () => {
            this.change("rgb-split", {
              distance: this.distance.getValue() / 20,
              amount: this.amount.getValue(),
              direction: this.direction.getValue(),
              type: this.type
            });
          };
          this.kind = "rgbSplit";
          this.setContent((0, n.T)("div", {
            id: "split-distance"
          }), (0, n.T)("div", {
            id: "split-direction",
            className: "range-box top-16"
          }), (0, n.T)("div", {
            id: "split-amount",
            className: "range-box top-16"
          }));
          this.setContent(`\n            <label class="top-16">${(0, o.A)("color")}</label>\n            <div id="split-swatches" class="swatches top-4">\n                <div data="red-blue" id="split-red-blue" class="twin active"><span style="background-color: #d1480e;"></span><span style="background-color: #3a6e9a;"></span></div>\n                <div data="green-red" id="split-green-red" class="twin"><span style="background-color: #929C1F;"></span><span style="background-color: #d1480e;"></span></div>\n                <div data="blue-green" id="split-blue-green" class="twin"><span style="background-color: #3a6e9a;"></span><span style="background-color: #929C1F;"></span></div>\n\n                <div data="red" id="split-red"><span style="background-color: #d1480e;"></span></div>\n                <div data="green" id="split-green"><span style="background-color:#929C1F;"></span></div>\n                <div data="blue" id="split-blue"><span style="background-color: #3a6e9a"></span></div>\n            </div>\n        `);
          this.distance = new a.A("split-distance", {
            label: (0, o.A)("distance"),
            step: 0.01,
            range: [0, 1],
            defaultValue: 0.2,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          this.direction = new a.A("split-direction", {
            label: (0, o.A)("direction"),
            step: 1,
            range: [0, 360],
            defaultValue: 180,
            labelFormat: t => `${Math.round(t)}`,
            labelParse: t => parseInt(t, 10),
            onChange: t => this.update()
          });
          this.amount = new a.A("split-amount", {
            label: (0, o.A)("amount"),
            step: 0.01,
            range: [0, 1],
            defaultValue: 1,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.update()
          });
          document.querySelector("#split-swatches").querySelectorAll("div").forEach(t => t.addEventListener("click", this.selectSwatch));
          this.update();
        }
      }
    }
