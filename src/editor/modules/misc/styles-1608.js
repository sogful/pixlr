window.__editorModules[1608] = function (t, e, s) {
      s.d(e, {
        A: () => w
      });
      var i = s(5283);
      var a = s(5699);
      var n = s(3244);
      var o = s(5527);
      var r = s(749);
      var h = s(3438);
      var l = s(576);
      var c = s(2543);
      var d = s(7775);
      var u = s(5259);
      var p = s(98);
      var g = s(833);
      var m = s(5328);
      var y = s(3517);
      var v = s(3848);
      class f extends v.A {
        constructor(t, e) {
          super(e, (0, d.A)("styles"), true);
          this.updateInputs = () => {
            (0, i.Ay)("frame-outline").checked = this.selected.frameSettings.outline;
            this.outlineColor.setColor(this.selected.frameSettings.outlineColor ?? "#555555");
            this.outlineSize.setValue(this.selected.frameSettings.outlineSize);
            (0, i.Ay)("frame-shadow").checked = this.selected.frameSettings.shadow;
            this.shadowColor.setColor(this.selected.frameSettings.shadowColor ?? "#000000");
            this.shadowBlur.setValue(this.selected.frameSettings.shadowBlur);
            this.shadowOpacity.setValue(this.selected.frameSettings.shadowOpacity);
            this.shadowDistance.setValue(this.selected.frameSettings.shadowDistance);
            this.shadowDirection.setValue(this.selected.frameSettings.shadowDirection);
          };
          this.changeOutlineState = () => {
            const t = this.selected.frameSettings.clone();
            this.changeOutline();
            this.stage.history.add({
              type: "frameSettings",
              kind: "outline",
              layer: this.selected,
              settings: t
            });
          };
          this.changeOutline = () => {
            let t = (0, i.Ay)("frame-outline").checked;
            let e = this.outlineColor.getColor().toHEX();
            let s = this.outlineSize.getValue();
            this.selected.setOutline(t, s, e);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeOutlineColor = t => {
            const e = this.selected.frameSettings.clone();
            this.changeOutline();
            this.stage.history.add({
              type: "frameSettings",
              kind: "outline",
              layer: this.selected,
              settings: e
            });
          };
          this.changeShadowState = () => {
            const t = this.selected.frameSettings.clone();
            this.changeShadow();
            this.stage.history.add({
              type: "frameSettings",
              kind: "shadow",
              layer: this.selected,
              settings: t
            });
          };
          this.changeShadow = () => {
            this.selected.setShadow((0, i.Ay)("frame-shadow").checked, this.shadowBlur.getValue(), this.shadowOpacity.getValue(), this.shadowColor.getColor().toHEX(), this.shadowDistance.getValue(), this.shadowDirection.getValue());
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeShadowColor = t => {
            const e = this.selected.frameSettings.clone();
            this.changeShadow();
            this.stage.history.add({
              type: "frameSettings",
              kind: "shadow",
              layer: this.selected,
              settings: e
            });
          };
          this.cleanUp = () => {
            this.selected = undefined;
            this.outlineColor.cleanUp();
            this.outlineColor = undefined;
            this.shadowColor.cleanUp();
            this.shadowColor = undefined;
            this.outlineSize.cleanUp();
            this.shadowBlur.cleanUp();
            this.shadowOpacity.cleanUp();
            this.shadowDistance.cleanUp();
            this.shadowDirection.cleanUp();
            (0, i.Ay)("frame-outline").removeEventListener("change", this.changeOutlineState, false);
            (0, i.Ay)("frame-shadow").removeEventListener("change", this.changeShadowState, false);
            this.superCleanUp();
          };
          this.stage = t;
          this.selected = this.stage.fresco.getSelected();
          this.content.id = "frame-style-content";
          this.content.style.height = "333px";
          this.content.style.overflow = "hidden";
          this.content.style.paddingBottom = "4px";
          this.setContent(`\n            <section>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="frame-outline" />\n                    <label class="switch subline top-4" for="frame-outline">${(0, d.A)("outline")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <label class="split">${(0, d.A)("color")}<div id="frame-outline-color"></div></label>\n                        <div id="frame-outline-size" class="top-10"></div>\n                    </div>\n                </div>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="frame-shadow" />\n                    <label class="switch subline top-10" for="frame-shadow">${(0, d.A)("shadow")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <label class="split">${(0, d.A)("color")}<div id="frame-shadow-color"></div></label>\n                        <div id="frame-shadow-blur" class="top-10"></div>\n                        <div id="frame-shadow-distance"></div>\n                        <div id="frame-shadow-direction"></div>\n                        <div id="frame-shadow-opacity"></div>\n                    </div>\n                </div>\n            </section>\n        `);
          this.outlineColor = new g.A("frame-outline-color", u.A.fromHEX(p.Ay.altColor), this.changeOutlineColor);
          this.shadowColor = new g.A("frame-shadow-color", u.A.fromHEX(p.Ay.altColor), this.changeShadowColor);
          let s = this.selected.frameSettings;
          const a = {
            onStart: () => {
              s = this.selected.frameSettings.clone();
            },
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 100) / 100
          };
          this.outlineSize = new y.A("frame-outline-size", Object.assign(Object.assign({}, a), {
            label: (0, d.A)("size"),
            range: [0.01, 1],
            defaultValue: 0.3,
            step: 0.01,
            onChange: () => this.changeOutline(),
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 100) / 100,
            onEnd: () => {
              this.stage.history.add({
                type: "frameSettings",
                kind: "outline",
                layer: this.selected,
                settings: s
              });
            }
          }));
          const n = Object.assign(Object.assign({}, a), {
            range: [0, 1],
            onChange: () => this.changeShadow(),
            onEnd: () => {
              this.stage.history.add({
                type: "frameSettings",
                kind: "shadow",
                layer: this.selected,
                settings: s
              });
            }
          });
          this.shadowBlur = new y.A("frame-shadow-blur", Object.assign(Object.assign({}, n), {
            label: (0, d.A)("blur")
          }));
          this.shadowOpacity = new y.A("frame-shadow-opacity", Object.assign(Object.assign({}, n), {
            label: (0, d.A)("opacity"),
            defaultValue: 1
          }));
          this.shadowDistance = new y.A("frame-shadow-distance", Object.assign(Object.assign({}, n), {
            label: (0, d.A)("distance"),
            range: [0, 1]
          }));
          this.shadowDirection = new y.A("frame-shadow-direction", Object.assign(Object.assign({}, n), {
            label: (0, d.A)("direction"),
            range: [0, 360],
            defaultValue: 180,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10)
          }));
          (0, i.Ay)("frame-outline").addEventListener("change", this.changeOutlineState, false);
          (0, i.Ay)("frame-shadow").addEventListener("change", this.changeShadowState, false);
          this.updateInputs();
          new m.A(this.content);
        }
      }
      class w extends o.A {
        constructor(t) {
          super("frame", t);
          this.stage = t;
          this.showFrameStyles = () => {
            new f(this.stage, (0, i.Ay)("frame-styles"));
          };
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              this.reform.constrain = false;
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift" && this.isShiftDown) {
              this.isShiftDown = false;
              this.reform.constrain = true;
            }
          };
          this.previewShape = t => {
            this.selected.setPath(t, true);
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.selectShape = t => {
            const e = this.selected.frameSettings.clone();
            this.selected.setPath(t);
            this.stage.history.add({
              type: "frameSettings",
              kind: "shape",
              layer: this.selected,
              settings: e
            });
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.layerSelect = () => {
            if (this.selected && this.selected !== this.stage.fresco.getSelected()) {
              this.selected.editMode = false;
              this.stage.history.commitTransaction();
            }
            if (!this.stage.fresco.isSelectedType(r.A.TYPE_FRAME)) {
              (0, i.Ay)("frame-settings").style.display = "none";
              (0, i.Ay)("frame-no-layer").style.display = "flex";
              this.selected = undefined;
              return;
            }
            (0, i.Ay)("frame-settings").style.display = "flex";
            (0, i.Ay)("frame-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.shapePod.setPath(this.selected.frameSettings.clip);
          };
          this.toggle = () => {
            if (this.selected.editMode || this.selected.canvas) {
              this.selected.editMode = !this.selected.editMode;
              document.dispatchEvent(new CustomEvent("layer-select"));
              document.dispatchEvent(new CustomEvent("viewport-render"));
            } else {
              this.stage.notify("frameNoContent");
            }
          };
          this.reformDown = (t, e) => {
            this.downPoint = t;
            this.usedtobe = e;
            this.stage.coating.freeze(true);
            this.addMoveListeners();
          };
          this.move = t => {
            const e = this.stage.translateToRect(this.downPoint, t, this.isShiftDown, true);
            if (e.width > 0 && e.height > 0) {
              this.drawframe(e.topLeft(), e.bottomRight());
            }
            document.dispatchEvent(new CustomEvent("legend", {
              detail: "W: " + Math.round(e.width / this.stage.zoom) + "  H: " + Math.round(e.height / this.stage.zoom)
            }));
          };
          this.drawframe = (t, e) => {
            const s = this.stage.coating.ctx;
            s.save();
            s.lineWidth = 2;
            s.strokeStyle = a.bi;
            s.clearRect(0, 0, s.canvas.width, s.canvas.height);
            s.strokeRect(t.x, t.y, e.x - t.x, e.y - t.y);
            s.lineWidth = 1;
            s.beginPath();
            s.moveTo(t.x, t.y);
            s.lineTo(e.x, e.y);
            s.moveTo(e.x, t.y);
            s.lineTo(t.x, e.y);
            s.closePath();
            s.stroke();
          };
          this.up = async t => {
            this.stage.coating.clear(true);
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            document.dispatchEvent(new CustomEvent("legend", {
              detail: "stop"
            }));
            if (this.downPoint.distanceTo(t) > 10) {
              const e = this.stage.translateToRect(this.downPoint, t, this.isShiftDown, false);
              this.addFrame(e);
            } else if (!this.usedtobe) {
              if (await new c.A("Add Frame", "Do you want to add a new Frame layer?", "Add").init()) {
                this.addFrameEvent();
              }
            }
          };
          this.addFrameEvent = () => {
            let t = this.stage.getViewPort();
            let e = new n.A(Math.round(t.x + t.width / 4), Math.round(t.y + t.height / 4), Math.round(t.width / 2), Math.round(t.width / 2));
            this.addFrame(e);
          };
          this.addFrame = t => {
            this.stage.addFrame(t);
          };
          this.deleteLayer = () => this.stage.deleteLayer();
          this.duplicateLayer = () => this.stage.duplicateLayer();
          this.cleanUp = () => {
            var t;
            var e;
            this.stage.history.commitTransaction();
            if ((t = this.reform) !== null && t !== undefined) {
              t.cleanUp();
            }
            this.reform = undefined;
            this.shapePod.cleanUp();
            this.shapePod = undefined;
            if ((e = this.stage) !== null && e !== undefined) {
              e.coating.wake();
            }
            (0, i.Ay)("frame-toggle").removeEventListener("click", this.toggle, false);
            (0, i.Ay)("frame-add-button").removeEventListener("click", this.addFrameEvent, false);
            (0, i.Ay)("frame-browse").removeEventListener("click", this.stage.browseFrameImage, false);
            (0, i.Ay)("frame-add").removeEventListener("click", this.addFrameEvent, false);
            (0, i.Ay)("frame-delete").removeEventListener("click", this.deleteLayer, false);
            (0, i.Ay)("frame-duplicate").removeEventListener("click", this.duplicateLayer, false);
            (0, i.Ay)("frame-styles").removeEventListener("click", this.showFrameStyles, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
          };
          this.stage.coating.sleep();
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("frame-toggle").addEventListener("click", this.toggle, false);
          (0, i.Ay)("frame-add-button").addEventListener("click", this.addFrameEvent, false);
          (0, i.Ay)("frame-browse").addEventListener("click", this.stage.browseFrameImage, false);
          (0, i.Ay)("frame-add").addEventListener("click", this.addFrameEvent, false);
          (0, i.Ay)("frame-delete").addEventListener("click", this.deleteLayer, false);
          (0, i.Ay)("frame-duplicate").addEventListener("click", this.duplicateLayer, false);
          (0, i.Ay)("frame-styles").addEventListener("click", this.showFrameStyles, false);
          this.reform = new h.A(t, "FRAME");
          this.reform.proxy = this.reformDown;
          this.shapePod = new l.A("frame-shape", this.selectShape, this.previewShape);
          this.layerSelect();
        }
      }
    }
