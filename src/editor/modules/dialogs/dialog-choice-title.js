window.__editorModules[5907] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(6939);
      class o extends n.A {
        constructor() {
          super((0, a.A)("dialogChoiceTitle"), true);
          this.init = () => new Promise((t, e) => {
            const s = this.content.querySelector("#open-as-new");
            const i = this.content.querySelector("#open-in-current");
            this.cancel = () => {
              this.cleanUp();
              t("close");
            };
            s.onclick = () => {
              this.cleanUp();
              t("create");
            };
            i.onclick = () => {
              this.cleanUp();
              t("layer");
            };
          });
          this.setContent(`    \n            ${(0, a.A)("dialogChoiceHeadline")}\n            <ul class="push-buttons top-20" style="text-align: center">\n                <li id="open-as-new">\n                    <img src="assets/images/icon/document-new.svg" class="ic" />\n                    <span>${(0, a.A)("createNew")}</span>\n                </li>\n                <li id="open-in-current">\n                    <img src="assets/images/icon/document-add.svg" class="ic" />\n                    <span>${(0, a.A)("addCurrent")}</span>\n                </li>\n            </ul>\n        `);
          (0, i.Ay)("dialog-buttons" + this.mid).style.display = "none";
        }
      }
    }
