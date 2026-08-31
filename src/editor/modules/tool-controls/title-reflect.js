window.__editorModules[4089] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(7775);
      var a = s(3517);
      var n = s(9310);
      class o extends n.A {
        constructor(t) {
          super(t, (0, i.A)("titleReflect"));
          this.changeX = () => {
            const t = Number(document.querySelector("input[name=\"reflect-type\"]:checked").value);
            if (t == 10 || t == 11) {
              this.y.setValue(1 - this.x.getValue());
            }
            if (t == 9 || t == 12) {
              this.y.setValue(this.x.getValue());
            }
            this.update();
          };
          this.changeY = () => {
            const t = Number(document.querySelector("input[name=\"reflect-type\"]:checked").value);
            if (t == 9 || t == 12) {
              this.x.setValue(this.y.getValue());
            }
            if (t == 10 || t == 11) {
              this.x.setValue(1 - this.y.getValue());
            }
            this.update();
          };
          this.changeType = () => {
            const t = Number(document.querySelector("input[name=\"reflect-type\"]:checked").value);
            if (t == 1 || t == 3) {
              this.x.enable();
              this.xo.enable();
              this.y.disable();
              this.yo.disable();
              this.y.reset();
              this.yo.reset();
            } else if (t == 2 || t == 4) {
              this.x.disable();
              this.xo.disable();
              this.y.enable();
              this.yo.enable();
              this.x.reset();
              this.xo.reset();
            } else {
              this.x.enable();
              this.y.enable();
              this.xo.enable();
              this.yo.enable();
            }
            this.update();
          };
          this.update = () => {
            const t = Number(document.querySelector("input[name=\"reflect-type\"]:checked").value);
            this.change("reflect", {
              type: t,
              x: this.x.getValue(),
              y: this.y.getValue(),
              xo: this.xo.getValue(),
              yo: this.yo.getValue()
            });
          };
          this.setContent(`\n                <label>${(0, i.A)("type")}</label>\n                <div class="switch-icon-field" style="display:flex">\n                    <input type="radio" id="reflect-type-minus-x" name="reflect-type" value="1" checked="true" /><label for="reflect-type-minus-x"><img src="assets/images/icon/reflect-t1.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-plus-y" name="reflect-type" value="4" /><label for="reflect-type-plus-y"><img src="assets/images/icon/reflect-t2.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-plus-x" name="reflect-type" value="3" /><label for="reflect-type-plus-x"><img src="assets/images/icon/reflect-t3.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-minus-y" name="reflect-type" value="2" /><label for="reflect-type-minus-y"><img src="assets/images/icon/reflect-t4.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-minus-x-minus-y" name="reflect-type" value="5" /><label for="reflect-type-minus-x-minus-y"><img src="assets/images/icon/reflect-t5.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-minus-x-plus-y" name="reflect-type" value="6" /><label for="reflect-type-minus-x-plus-y"><img src="assets/images/icon/reflect-t6.svg" class="ic" width="20" height="20"/></label>\n                </div>\n                <div class="switch-icon-field" style="display:flex;margin-top:4px">\n                    <input type="radio" id="reflect-type-plus-x-plus-y" name="reflect-type" value="7" /><label for="reflect-type-plus-x-plus-y"><img src="assets/images/icon/reflect-t7.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-plus-x-minus-y" name="reflect-type" value="8" /><label for="reflect-type-plus-x-minus-y"><img src="assets/images/icon/reflect-t8.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-above-x-equalto-y" name="reflect-type" value="9" /><label for="reflect-type-above-x-equalto-y"><img src="assets/images/icon/reflect-t9.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-below-x-equalto-minus-y" name="reflect-type" value="10" /><label for="reflect-type-below-x-equalto-minus-y"><img src="assets/images/icon/reflect-t10.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-above-x-equalto-minus-y" name="reflect-type" value="11" /><label for="reflect-type-above-x-equalto-minus-y"><img src="assets/images/icon/reflect-t11.svg" class="ic" width="20" height="20"/></label>\n                    <input type="radio" id="reflect-type-below-x-equalto-y" name="reflect-type" value="12" /><label for="reflect-type-below-x-equalto-y"><img src="assets/images/icon/reflect-t12.svg" class="ic" width="20" height="20"/></label>\n                </div>\n                <div id="reflect-x" class="top-20"></div>\n                <div id="reflect-offset-x" class="top-10"></div>\n                <div id="reflect-y" class="top-20"></div>\n                <div id="reflect-offset-y" class="top-10"></div>\n            `);
          this.x = new a.A("reflect-x", {
            label: (0, i.A)("horizontal"),
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.changeX()
          });
          this.xo = new a.A("reflect-offset-x", {
            label: (0, i.A)("offset"),
            range: [-0.5, 0.5],
            defaultValue: 0,
            step: 0.001,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.changeX()
          });
          this.y = new a.A("reflect-y", {
            label: (0, i.A)("vertical"),
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.changeY()
          });
          this.yo = new a.A("reflect-offset-y", {
            label: (0, i.A)("offset"),
            range: [-0.5, 0.5],
            defaultValue: 0,
            step: 0.001,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.changeY()
          });
          document.querySelectorAll("input[name=\"reflect-type\"]").forEach(t => t.addEventListener("change", this.changeType));
          this.changeType();
        }
      }
    }
