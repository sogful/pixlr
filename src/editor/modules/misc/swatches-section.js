window.__editorModules[4238] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(3517);
      var n = s(5283);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleHueSaturation"));
          this.range = "main";
          this.selectRange = t => {
            let a = t.currentTarget;
            let o = (0, n.Ay)("hue-swatches").getElementsByTagName("div");
            for (var r = 0; r < o.length; r++) {
              o[r].classList.remove("active");
            }
            a.classList.add("active");
            this.range = a.getAttribute("data-name");
            let h = this.shaders.getShaderValue("hue" + (this.range !== "main" ? "-" + this.range : "")) ?? 0;
            let l = this.shaders.getShaderValue("saturation" + (this.range !== "main" ? "-" + this.range : "")) ?? 0;
            let c = this.shaders.getShaderValue("lightness" + (this.range !== "main" ? "-" + this.range : "")) ?? 0;
            this.hue.setValue(h);
            this.sat.setValue(l);
            this.lig.setValue(c);
          };
          this.kind = "hueSaturation";
          this.setContent((0, n.T)("div", {
            id: "swatches-section"
          }, (0, n.T)("label", {}, (0, o.A)("range")), (0, n.T)("div", {
            id: "hue-swatches",
            className: "swatches top-4",
            style: "width:100%"
          })), (0, n.T)("div", {
            id: "hue"
          }), (0, n.T)("div", {
            id: "saturation",
            className: "top-16"
          }), (0, n.T)("div", {
            id: "lightness",
            className: "top-16"
          }), (0, n.T)("input", {
            type: "checkbox",
            id: "colorize"
          }), (0, n.T)("label", {
            className: "top-20 switch",
            htmlFor: "colorize"
          }, (0, o.A)("colorize"), (0, n.T)("span")));
          (0, n.Ay)("hue-swatches").innerHTML = `\n            <div class="active" data-name="main" flow="up" tooltip="${(0, o.A)("main")}" style="margin-right:15px;"><span class="ic" style="background-color: #ccc;"></span></div>\n            <div data-name="red" flow="up" tooltip="${(0, o.A)("red")}"><span style="background-color: #D1320E"></span></div>\n            <div data-name="yellow" flow="up" tooltip="${(0, o.A)("yellow")}"><span style="background-color: #bbb215"></span></div>\n            <div data-name="green" flow="up" tooltip="${(0, o.A)("green")}"><span style="background-color: #64ab24"></span></div>\n            <div data-name="cyan" flow="up" tooltip="${(0, o.A)("cyan")}"><span style="background-color: #3EB4BF"></span></div>\n            <div data-name="blue" flow="up" tooltip="${(0, o.A)("blue")}"><span style="background-color: #2F4DE6"></span></div>\n            <div data-name="magenta" flow="up" tooltip="${(0, o.A)("magenta")}"><span style="background-color: #BF3E8A"></span></div>\n        `;
          let e = (0, n.Ay)("hue-swatches").getElementsByTagName("div");
          for (let s = 0; s < e.length; s++) {
            e[s].addEventListener("click", this.selectRange, false);
          }
          this.hue = new a.A("hue", {
            label: (0, o.A)("hue"),
            range: [-180, 180],
            step: 1,
            labelFormat: t => String(t),
            labelParse: t => parseInt(t, 10),
            onChange: t => {
              if (this.isColorize) {
                this.change("colorize", t + 181);
              } else if (this.range === "main") {
                this.change("hue", t);
              } else {
                this.change("hue-" + this.range, t);
              }
            }
          });
          this.sat = new a.A("saturation", {
            label: (0, o.A)("saturation"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => {
              if (this.range === "main") {
                this.change("saturation", t);
              } else {
                this.change("saturation-" + this.range, t);
              }
            }
          });
          this.lig = new a.A("lightness", {
            label: (0, o.A)("lightness"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => {
              if (this.range === "main") {
                this.change("lightness", t);
              } else {
                this.change("lightness-" + this.range, t);
              }
            }
          });
          (0, n.Ay)("colorize").addEventListener("click", () => {
            this.shaders.chain = [];
            this.isColorize = (0, n.Ay)("colorize").checked;
            (0, n.Ay)("swatches-section").style.display = this.isColorize ? "none" : "block";
            this.hue.setValue(0);
            this.sat.setValue(0);
            this.lig.setValue(0);
            this.change("colorize", this.isColorize ? 181 : 0);
          });
        }
      }
    }
