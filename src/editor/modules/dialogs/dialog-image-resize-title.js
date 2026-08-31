window.__editorModules[4646] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(6939);
      var o = s(651);
      var r = s(5699);
      var h = s(5432);
      class l extends n.A {
        constructor(t) {
          super((0, a.A)("dialogImageResizeTitle"));
          this.imageSizeInputChange = t => {
            let e;
            let s;
            let a;
            let n = t.currentTarget;
            if ((0, i.Ay)("image-resize-constrain").checked) {
              if (n.id == "image-resize-width") {
                e = r.qE(Number(n.value), 1, this.maxSize);
                a = e / this.stage.fresco.width;
                s = Math.round(a * this.stage.fresco.height);
                (0, i.Ay)("image-resize-height").value = s.toString();
              } else {
                s = r.qE(Number(n.value), 1, this.maxSize);
                a = s / this.stage.fresco.height;
                e = Math.round(a * this.stage.fresco.width);
                (0, i.Ay)("image-resize-width").value = e.toString();
              }
              if (n != document.activeElement) {
                (0, i.Ay)("image-resize-width").value = e.toString();
                (0, i.Ay)("image-resize-height").value = s.toString();
              }
            }
          };
          this.apply = () => {
            setTimeout(() => {
              const t = Number((0, i.Ay)("image-resize-width").value);
              const e = Number((0, i.Ay)("image-resize-height").value);
              const s = new o.A(this.stage.fresco.width, this.stage.fresco.height);
              const a = (0, i.Ay)("image-resize-smooth").checked;
              const n = this.stage.fresco.layers.map(t => t.clone(true));
              this.stage.fresco.resize(t, e, a);
              this.stage.history.add({
                type: "pageResize",
                size: s,
                layers: n
              });
              this.stage.updateViewport();
              document.dispatchEvent(new CustomEvent("layer-arrange"));
              this.cleanUp();
            }, 500);
          };
          this.stage = t;
          this.maxSize = h.Ny?.subscription ? 8192 : 4096;
          this.setContent(`\n            <label class="split">${(0, a.A)("width")} <input type="number" id="image-resize-width"/></label>\n            <label class="split top-10">${(0, a.A)("height")} <input type="number" id="image-resize-height"/></label>\n        \n            <input type="checkbox" checked id="image-resize-constrain" />\n            <label class="switch top-30" for="image-resize-constrain">${(0, a.A)("dialogResizeContrain")}<span></span></label>\n            \n            <input type="checkbox" checked id="image-resize-smooth" />\n            <label class="switch top-10" for="image-resize-smooth">${(0, a.A)("dialogResizeSmoothing")}<span></span></label>\n        \n            <div class="top-20"></div>\n        `);
          let e = (0, i.Ay)("image-resize-width");
          e.addEventListener("input", this.imageSizeInputChange, false);
          e.addEventListener("change", this.imageSizeInputChange, false);
          e.value = this.stage.fresco.width.toString();
          let s = (0, i.Ay)("image-resize-height");
          s.addEventListener("change", this.imageSizeInputChange, false);
          s.addEventListener("input", this.imageSizeInputChange, false);
          s.value = this.stage.fresco.height.toString();
        }
      }
    }
