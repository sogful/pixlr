window.__editorModules[9075] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(6939);
      var o = s(651);
      var r = s(5432);
      class h extends n.A {
        constructor(t) {
          super((0, a.A)("dialogCanvasResizeTitle"));
          this.anchorChange = t => {
            let e = t.currentTarget;
            let s = (0, i.Ay)("anchor-grid").getElementsByClassName("box");
            for (var a = 0; a < s.length; a++) {
              s[a].classList.remove("selected");
            }
            e.classList.add("selected");
            this.anchor = e.getAttribute("data");
          };
          this.changecanvasRelative = () => {
            let t = (0, i.Ay)("canvas-size-width");
            let e = (0, i.Ay)("canvas-size-height");
            if ((0, i.Ay)("canvas-size-relative").checked) {
              t.value = "0";
              e.value = "0";
            } else {
              t.value = this.stage.fresco.width.toString();
              e.value = this.stage.fresco.height.toString();
            }
          };
          this.apply = () => {
            let t = Number((0, i.Ay)("canvas-size-width").value);
            let e = Number((0, i.Ay)("canvas-size-height").value);
            let s = (0, i.Ay)("canvas-size-relative").checked;
            const a = new o.A(this.stage.fresco.width, this.stage.fresco.height);
            this.stage.fresco.size(t, e, s, this.anchor);
            this.stage.history.add({
              type: "pageSize",
              anchor: this.anchor,
              size: a
            });
            this.stage.updateViewport();
            document.dispatchEvent(new CustomEvent("layer-arrange"));
            this.cleanUp();
          };
          this.stage = t;
          this.maxSize = r.Ny?.subscription ? 8192 : 4096;
          this.setContent(`\n            <label class="split">${(0, a.A)("width")} <input type="number" id="canvas-size-width"/></label>\n            <label class="split top-10">${(0, a.A)("height")} <input type="number" id="canvas-size-height"/></label>\n        \n            <input type="checkbox" id="canvas-size-relative" />\n            <label class="switch top-20" for="canvas-size-relative">${(0, a.A)("dialogResizeRelative")}<span></span></label>\n        \n            <label class="split top-20">${(0, a.A)("anchor")}\n                <div id="anchor-grid" class="anchor-grid">\n                    <div class="row">\n                        <div data="TL" class="box"></div>\n                        <div data="TC" class="box"></div>\n                        <div data="TR" class="box"></div>\n                    </div>\n                    <div class="row">\n                        <div data="CL" class="box"></div>\n                        <div data="CC" class="box selected"></div>\n                        <div data="CR" class="box"></div>\n                    </div>\n                    <div class="row">\n                        <div data="BL" class="box"></div>\n                        <div data="BC" class="box"></div>\n                        <div data="BR" class="box"></div>\n                    </div>\n                </div>\n            </label>\n            <div class="top-20"></div>\n        `);
          (0, i.Ay)("canvas-size-width").value = this.stage.fresco.width.toString();
          (0, i.Ay)("canvas-size-height").value = this.stage.fresco.height.toString();
          (0, i.Ay)("canvas-size-relative").addEventListener("input", this.changecanvasRelative, false);
          let e = (0, i.Ay)("anchor-grid").getElementsByClassName("box");
          for (var s = 0; s < e.length; s++) {
            e[s].addEventListener("click", this.anchorChange, false);
          }
          this.anchor = "CC";
        }
      }
    }
