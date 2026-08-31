window.__editorModules[9727] = function (t, e, s) {
      s.d(e, {
        A: () => g
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(6939);
      var o = s(4587);
      var r = s(6);
      var h = s(5259);
      var l = s(5138);
      var c = s(7817);
      var d = s(3508);
      var u = s(7497);
      var p = s(98);
      class g extends n.A {
        constructor(t, e, s) {
          super((0, i.A)("fill"), false);
          this.setSectionEvent = t => {
            let e = t.target;
            this.setSection(e.value);
          };
          this.setSection = (t = "color") => {
            this.holder.innerHTML = "";
            this.patternselector = undefined;
            this.colorselector = undefined;
            this.gradselector = undefined;
            (0, a.Ay)("fill-type-" + t).checked = true;
            switch (t) {
              case "color":
                this.colorselector = new d.A(this.holder, undefined, this.setFill, true, true, true);
                break;
              case "gradient":
                this.gradselector = new c.A(this.holder, undefined, this.setFill, true);
                break;
              case "pattern":
                this.patternselector = new u.A(this.holder, this.setFill);
            }
            if (this.fill) {
              if (this.patternselector && this.fill.value instanceof l.A) {
                this.patternselector.setPattern(this.fill.value);
              }
              if (this.colorselector && this.fill.value instanceof h.A) {
                this.colorselector.setColor(this.fill.value);
              }
              if (this.gradselector && this.fill.value instanceof r.Ay) {
                this.gradselector.setGrad(this.fill.value);
              }
            }
          };
          this.setFill = t => {
            this.fill = new o.A(t);
            if (this.preview) {
              this.preview(this.fill);
            }
          };
          this.cancel = () => {
            if (this.callback) {
              this.callback(this.initial);
            }
            this.cleanUp();
          };
          this.apply = () => {
            if (this.callback) {
              if (this.fill && this.fill.value instanceof h.A) {
                (0, p.oY)(this.fill.value);
              }
              this.callback(this.fill);
            }
            this.cleanUp();
          };
          this.fill = t;
          this.initial = t;
          this.preview = s;
          this.callback = e;
          this.dialog.style.width = "340px";
          this.content.style.paddingBottom = "0px";
          (0, a.Ay)("dialog-apply" + this.mid).innerText = (0, i.A)("ok");
          let n = (0, a.T)("div", {
            style: "position:relative"
          });
          this.holder = (0, a.T)("div", {
            id: "fill-selector-presets",
            className: "top-10"
          });
          this.setContent(n, (0, a.T)("div", {
            className: "splitter top-10"
          }), this.holder);
          n.innerHTML += `\n        <div id="fill-type" class="switch-field stretch">\n            <input type="radio" id="fill-type-color" name="fill-type" value="color"/><label for="fill-type-color">${(0, i.A)("color")}</label>\n            <input type="radio" id="fill-type-gradient" name="fill-type" value="gradient" /><label for="fill-type-gradient">${(0, i.A)("gradient")}</label>\n            <input type="radio" id="fill-type-pattern" name="fill-type" value="pattern" /><label for="fill-type-pattern">${(0, i.A)("pattern")}</label>\n        </div>\n        `;
          (0, a.Ay)("fill-type-color").addEventListener("change", this.setSectionEvent, true);
          (0, a.Ay)("fill-type-gradient").addEventListener("change", this.setSectionEvent, true);
          (0, a.Ay)("fill-type-pattern").addEventListener("change", this.setSectionEvent, true);
          this.setSection(t == null ? undefined : t.getType());
          this.position();
        }
      }
    }
