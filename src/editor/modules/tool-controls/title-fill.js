window.__editorModules[7828] = function (t, e, s) {
      s.d(e, {
        A: () => g
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(4587);
      var r = s(3244);
      var h = s(3517);
      var l = s(6939);
      var c = s(5259);
      var d = s(98);
      var u = s(1450);
      var p = s(4932);
      class g extends l.A {
        constructor(t) {
          super((0, a.A)("titleFill"), false);
          this.cancel = () => {
            this.cleanUp();
          };
          this.updatePreserve = () => {
            if ((0, i.Ay)("filler-preserve").checked && this.selected.rect && this.selected.canvas) {
              this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            } else {
              this.scratch.setTarget(this.selected.id, new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
            }
            this.update();
          };
          this.update = () => {
            var t;
            var e;
            if (!(this.selected instanceof p.A)) {
              if (!this.scratch) {
                this.scratch = this.stage.fresco.addScratch();
                if ((0, i.Ay)("filler-preserve").checked && this.selected.rect && this.selected.canvas) {
                  this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
                } else {
                  this.scratch.setTarget(this.selected.id, new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
                }
              }
              this.scratch.clear();
              this.scratch.settings.blendmode = (0, i.Ay)("filler-blend-mode").value;
              if (this.selected.rect && this.selected.canvas && (0, i.Ay)("filler-preserve").checked) {
                this.scratch.ctx.save();
                if ((e = this.fillPod.getFill()) !== null && e !== undefined) {
                  e.addToCanvasFillStyle(this.scratch.ctx);
                }
                this.scratch.ctx.fillRect(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
                this.scratch.ctx.globalCompositeOperation = "destination-in";
                this.scratch.ctx.drawImage(this.selected.canvas, 0, 0);
                this.scratch.ctx.restore();
              } else {
                if ((t = this.fillPod.getFill()) !== null && t !== undefined) {
                  t.addToCanvasFillStyle(this.scratch.ctx);
                }
                this.scratch.ctx.fillRect(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
              }
              this.scratch.applySelection(this.stage);
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.apply = () => {
            var t;
            if (this.selected instanceof p.A) {
              const e = this.selected.trim.clone();
              const s = n.$z(this.selected.canvas);
              let a = this.selected.canvas.getContext("2d");
              a.save();
              a.globalAlpha = this.opacity.getValue();
              a.globalCompositeOperation = (0, i.Ay)("filler-blend-mode").value;
              if ((t = this.fillPod.getFill()) !== null && t !== undefined) {
                t.addToCanvasFillStyle(this.scratch.ctx);
              }
              a.fillRect(0, 0, this.selected.canvas.width, this.selected.canvas.height);
              a.restore();
              this.stage.history.add({
                type: "bitmapSwitch",
                kind: "fill",
                layer: this.selected,
                rect: e,
                canvas: s
              });
              this.selected.render();
            } else {
              let t = n.TL(this.scratch.getCanvas());
              if (t && t.width > 0 && t.height > 0) {
                const e = this.selected.rect.clone();
                const s = n.$z(this.selected.canvas);
                this.selected.extendCanvas(t);
                this.scratch.drawToLayer(this.selected, (0, i.Ay)("filler-blend-mode").value, this.opacity.getValue());
                this.scratch.clear();
                this.selected.render();
                this.stage.history.add({
                  type: "bitmapSwitch",
                  kind: "fill",
                  layer: this.selected,
                  rect: e,
                  canvas: s
                });
              }
            }
            window.requestAnimationFrame(() => this.stage.render());
            this.cleanUp();
          };
          this.cleanUp = () => {
            this.fillPod.cleanUp();
            this.stage.coating.freeze(false);
            this.stage.fresco.removeScratch();
            (0, i.Ay)("filler-preserve").removeEventListener("change", this.updatePreserve);
            (0, i.Ay)("filler-blend-mode").removeEventListener("change", this.update);
            document.removeEventListener("keydown", this.keyDown, false);
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            this.selected = undefined;
            this.dialog.remove();
            this.dialog = null;
            this.modal.remove();
            this.modal = null;
          };
          this.stage = t;
          this.stage.coating.freeze(true);
          this.selected = this.stage.fresco.getSelected();
          this.setContent(`\n\n            <label class="split">${(0, a.A)("fill")}\n                <div id="filler-fill"></div>\n            </label>\n            <label id="filler-blend-mode-holder" class="split top-10">${(0, a.A)("blendMode")}\n                <div class="select top-0" style="width:auto">\n                    <select id="filler-blend-mode">\n                        <option value="source-over" selected>${(0, a.A)("blendModeNone")}</option>\n                        <option value="multiply">${(0, a.A)("blendModeMultiply")}</option>\n                        <option value="screen">${(0, a.A)("blendModeScreen")}</option>\n                        <option value="overlay">${(0, a.A)("blendModeOverlay")}</option>\n                        <option value="darken">${(0, a.A)("blendModeDarken")}</option>\n                        <option value="lighten">${(0, a.A)("blendModeLighten")}</option>\n                        <option value="color-dodge">${(0, a.A)("blendModeColorDodge")}</option>\n                        <option value="color-burn">${(0, a.A)("blendModeColorBurn")}</option>\n                        <option value="hard-light">${(0, a.A)("blendModeHardLight")}</option>\n                        <option value="soft-light">${(0, a.A)("blendModeSoftLight")}</option>\n                        <option value="difference">${(0, a.A)("blendModeDifference")}</option>\n                        <option value="exclusion">${(0, a.A)("blendModeExclusion")}</option>\n                        <option value="hue">${(0, a.A)("blendModeHue")}</option>\n                        <option value="saturation">${(0, a.A)("blendModeSaturation")}</option>\n                        <option value="color">${(0, a.A)("blendModeColor")}</option>\n                        <option value="luminosity">${(0, a.A)("blendModeLuminosity")}</option>\n                    </select>\n                </div>\n            </label>\n\n            <div id="filler-opacity" class="range-box top-20"></div>\n\n            <div id="filler-preserve-holder">\n                <input type="checkbox" checked id="filler-preserve" />\n                <label class="switch top-16" for="filler-preserve">${(0, a.A)("preserveTransparency")}<span></span></label>\n            </div>\n        `);
          this.fillPod = new u.A("filler-fill", new o.A(c.A.fromHEX(d.Ay.mainColor)), this.update, this.update);
          (0, i.Ay)("filler-preserve").addEventListener("change", this.updatePreserve);
          (0, i.Ay)("filler-blend-mode").addEventListener("change", this.update);
          this.opacity = new h.A("filler-opacity", {
            label: (0, a.A)("opacity"),
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => {
              this.scratch.settings.opacity = t;
              window.requestAnimationFrame(() => this.stage.render());
            }
          });
          if (!this.selected.rect || !this.selected.canvas) {
            (0, i.Ay)("filler-blend-mode-holder").style.display = "none";
            (0, i.Ay)("filler-preserve-holder").style.display = "none";
          }
          this.update();
        }
      }
    }
