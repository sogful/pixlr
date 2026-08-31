window.__editorModules[3347] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(9310);
      class a {
        constructor(t = 0, e = 0, s = 0, i = 0, a = 0, n = 0, o = 0, r = 0, h = 0, l = true) {
          this.shadowRed = t;
          this.shadowGreen = e;
          this.shadowBlue = s;
          this.midtoneRed = i;
          this.midtoneGreen = a;
          this.midtoneBlue = n;
          this.highlightRed = o;
          this.highlightGreen = r;
          this.highlightBlue = h;
          this.preserve = l;
        }
      }
      var n = s(3517);
      var o = s(7775);
      var r = s(5283);
      class h extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleColorBalance"));
          this.colorset = new a();
          this.range = "midtone";
          this.preserveChange = () => {
            this.colorset.preserve = (0, r.Ay)("balance-preserve-luminosity").checked;
            this.change();
          };
          this.rangeChange = () => {
            this.range = document.querySelector("input[name=\"balance-range\"]:checked").value;
            switch (this.range) {
              case "shadow":
                this.red.setValue(this.colorset.shadowRed);
                this.green.setValue(this.colorset.shadowGreen);
                this.blue.setValue(this.colorset.shadowBlue);
                break;
              case "midtone":
                this.red.setValue(this.colorset.midtoneRed);
                this.green.setValue(this.colorset.midtoneGreen);
                this.blue.setValue(this.colorset.midtoneBlue);
                break;
              case "highlight":
                this.red.setValue(this.colorset.highlightRed);
                this.green.setValue(this.colorset.highlightGreen);
                this.blue.setValue(this.colorset.highlightBlue);
            }
          };
          this.change = (t = "", e = 0) => {
            switch (this.range) {
              case "shadow":
                this.colorset.shadowRed = this.red.getValue();
                this.colorset.shadowGreen = this.green.getValue();
                this.colorset.shadowBlue = this.blue.getValue();
                break;
              case "midtone":
                this.colorset.midtoneRed = this.red.getValue();
                this.colorset.midtoneGreen = this.green.getValue();
                this.colorset.midtoneBlue = this.blue.getValue();
                break;
              case "highlight":
                this.colorset.highlightRed = this.red.getValue();
                this.colorset.highlightGreen = this.green.getValue();
                this.colorset.highlightBlue = this.blue.getValue();
            }
            this.shaders.addShader("balance", this.colorset);
            setTimeout(() => {
              this.scratch.canvas = this.shaders.apply(this.cache);
              window.requestAnimationFrame(() => this.stage.render());
            }, 0);
          };
          this.kind = "balance";
          this.setContent(`\n                <label>Range</label>\n                <div class="switch-field stretch top-5">\n                    <input type="radio" id="balance-range-shadow" name="balance-range" value="shadow"/><label for="balance-range-shadow">${(0, o.A)("shadows")}</label>\n                    <input type="radio" id="balance-range-midtone" name="balance-range" value="midtone" checked/><label for="balance-range-midtone">${(0, o.A)("midtones")}</label>\n                    <input type="radio" id="balance-range-highlight" name="balance-range" value="highlight"/><label for="balance-range-highlight">${(0, o.A)("highlights")}</label>\n                </div>\n\n                <div id='balance-red' class='top-20'></div>\n                <div id='balance-green' class='top-5'></div>\n                <div id='balance-blue' class='top-5'></div>\n\n                <input type="checkbox" id="balance-preserve-luminosity" checked>\n                <label class="top-20 switch" for="balance-preserve-luminosity">${(0, o.A)("preserveLuminosity")}<span></span></label>\n                `);
          this.red = new n.A("balance-red", {
            label: (0, o.A)("red"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("balance", t)
          });
          this.green = new n.A("balance-green", {
            label: "Green",
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("balance", t)
          });
          this.blue = new n.A("balance-blue", {
            label: "Blue",
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => this.change("balance", t)
          });
          (0, r.Ay)("balance-range-shadow").addEventListener("click", this.rangeChange, false);
          (0, r.Ay)("balance-range-midtone").addEventListener("click", this.rangeChange, false);
          (0, r.Ay)("balance-range-highlight").addEventListener("click", this.rangeChange, false);
          (0, r.Ay)("balance-preserve-luminosity").addEventListener("change", this.preserveChange, false);
        }
      }
    }
