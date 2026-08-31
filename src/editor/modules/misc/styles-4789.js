window.__editorModules[4789] = function (t, e, s) {
      s.d(e, {
        A: () => k
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(4587);
      var h = s(5527);
      var l = s(5259);
      var c = s(3517);
      var d = s(749);
      var u = s(98);
      var p = s(7572);
      var g = s(3438);
      var m = s(1450);
      var y = s(833);
      var v = s(576);
      var f = s(9632);
      var w = s(1736);
      var x = s(5328);
      var b = s(3848);
      class A extends b.A {
        constructor(t, e) {
          super(e, (0, a.A)("styles"), true);
          this.updateInputs = () => {
            (0, i.Ay)("shape-outline-settings").style.display = this.selected.shapeSettings.variant === "line" ? "none" : "block";
            (0, i.Ay)("shape-outline").checked = this.selected.shapeSettings.outlineSize > 0;
            this.outlineColor.setColor(this.selected.shapeSettings.outlineColor ?? "#555555");
            this.outlineSize.setValue(this.selected.shapeSettings.outlineSize);
            (0, i.Ay)("shape-shadow").checked = this.selected.shapeSettings.shadow;
            this.shadowColor.setColor(this.selected.shapeSettings.shadowColor ?? "#000000");
            this.shadowBlur.setValue(this.selected.shapeSettings.shadowBlur);
            this.shadowOpacity.setValue(this.selected.shapeSettings.shadowOpacity);
            this.shadowDistance.setValue(this.selected.shapeSettings.shadowDistance);
            this.shadowDirection.setValue(this.selected.shapeSettings.shadowDirection);
          };
          this.changeOutlineState = () => {
            const t = this.selected.shapeSettings.clone();
            this.changeOutline();
            this.stage.history.add({
              type: "shapeSettings",
              kind: "outline",
              layer: this.selected,
              settings: t
            });
          };
          this.changeOutline = () => {
            let t = (0, i.Ay)("shape-outline").checked;
            let e = this.outlineColor.getColor().toHEX();
            let s = this.outlineSize.getValue();
            this.selected.setOutline(t ? s : 0, e);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeOutlineColor = t => {
            const e = this.selected.shapeSettings.clone();
            this.changeOutline();
            this.stage.history.add({
              type: "shapeSettings",
              kind: "outline",
              layer: this.selected,
              settings: e
            });
          };
          this.changeShadowState = () => {
            const t = this.selected.shapeSettings.clone();
            this.changeShadow();
            this.stage.history.add({
              type: "shapeSettings",
              kind: "shadow",
              layer: this.selected,
              settings: t
            });
          };
          this.changeShadow = () => {
            this.selected.setShadow((0, i.Ay)("shape-shadow").checked, this.shadowBlur.getValue(), this.shadowOpacity.getValue(), this.shadowColor.getColor().toHEX(), this.shadowDistance.getValue(), this.shadowDirection.getValue());
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeShadowColor = t => {
            const e = this.selected.shapeSettings.clone();
            this.changeShadow();
            this.stage.history.add({
              type: "shapeSettings",
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
            (0, i.Ay)("shape-outline").removeEventListener("change", this.changeOutlineState, false);
            (0, i.Ay)("shape-shadow").removeEventListener("change", this.changeShadowState, false);
            this.superCleanUp();
          };
          this.stage = t;
          this.selected = this.stage.fresco.getSelected();
          this.content.id = "shape-style-content";
          this.content.style.height = "400px";
          this.setContent(`\n            <section>\n                <div id="shape-outline-settings">\n                    <input type="checkbox" class="toggle-check" id="shape-outline" />\n                    <label class="switch subline top-4" for="shape-outline">${(0, a.A)("outline")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <label class="split">${(0, a.A)("color")}<div id="shape-outline-color"></div></label>\n                        <div id="shape-outline-size" class="top-10"></div>\n                    </div>\n                </div>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="shape-shadow" />\n                    <label class="switch subline top-10" for="shape-shadow">${(0, a.A)("shadow")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <label class="split">${(0, a.A)("color")}<div id="shape-shadow-color"></div></label>\n                        <div id="shape-shadow-blur" class="top-10"></div>\n                        <div id="shape-shadow-distance"></div>\n                        <div id="shape-shadow-direction"></div>\n                        <div id="shape-shadow-opacity"></div>\n                    </div>\n                </div>\n            </section>\n        `);
          this.outlineColor = new y.A("shape-outline-color", l.A.fromHEX(u.Ay.altColor), this.changeOutlineColor);
          this.shadowColor = new y.A("shape-shadow-color", l.A.fromHEX(u.Ay.altColor), this.changeShadowColor);
          let s = this.selected.shapeSettings;
          const n = {
            onStart: () => {
              s = this.selected.shapeSettings.clone();
            },
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 100) / 100
          };
          this.outlineSize = new c.A("shape-outline-size", {
            label: (0, a.A)("size"),
            defaultValue: 4,
            range: [1, 100],
            step: 1,
            onChange: () => this.changeOutline(),
            onEnd: () => {
              this.stage.history.add({
                type: "shapeSettings",
                kind: "outline",
                layer: this.selected,
                settings: s
              });
            }
          });
          const o = Object.assign(Object.assign({}, n), {
            range: [0, 1],
            onChange: () => this.changeShadow(),
            onEnd: () => {
              this.stage.history.add({
                type: "shapeSettings",
                kind: "shadow",
                layer: this.selected,
                settings: s
              });
            }
          });
          this.shadowBlur = new c.A("shape-shadow-blur", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("blur")
          }));
          this.shadowOpacity = new c.A("shape-shadow-opacity", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("opacity"),
            defaultValue: 1
          }));
          this.shadowDistance = new c.A("shape-shadow-distance", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("distance"),
            range: [0, 1]
          }));
          this.shadowDirection = new c.A("shape-shadow-direction", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("direction"),
            range: [0, 360],
            defaultValue: 180,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10)
          }));
          (0, i.Ay)("shape-outline").addEventListener("change", this.changeOutlineState, false);
          (0, i.Ay)("shape-shadow").addEventListener("change", this.changeShadowState, false);
          this.updateInputs();
          new x.A(this.content);
        }
      }
      class k extends h.A {
        constructor(t) {
          super("shape", t);
          this.stage = t;
          this.isShiftDown = false;
          this.showShapeStyles = () => {
            new A(this.stage, (0, i.Ay)("shape-styles"));
          };
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              if (this.reform) {
                this.reform.constrain = false;
              }
            }
            if (t.key !== "Control" || this.stage.coating.override || this.mode !== "draw") {
              if (t.key === "," || t.key === ".") {
                switch (t.key) {
                  case ",":
                    if (this.mode === "draw") {
                      this.drawStroke.setValue(this.drawStroke.getValue() - 1);
                    } else {
                      this.lineSize.setValue(this.lineSize.getValue() - 1, true);
                    }
                    break;
                  case ".":
                    if (this.mode === "draw") {
                      this.drawStroke.setValue(this.drawStroke.getValue() + 1);
                    } else {
                      this.lineSize.setValue(this.lineSize.getValue() + 1, true);
                    }
                }
              }
            } else {
              this.stage.coating.setPicker();
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift" && this.isShiftDown) {
              this.isShiftDown = false;
              if (this.reform) {
                this.reform.constrain = true;
              }
            }
            if (t.key === "Control" && this.stage.coating.override) {
              this.stage.coating.removePicker();
            }
          };
          this.setMode = () => {
            this.mode = document.querySelector("input[name=\"shape-mode\"]:checked").value;
            if (this.mode === "draw") {
              this.setDrawType();
            } else {
              this.setType();
            }
            this.layerSelect();
          };
          this.setDrawType = () => {
            this.stage.coating.wake();
            if (this.variant === "bezier") {
              this.stage.coating.freeze(false);
              this.removeMoveListeners();
              window.requestAnimationFrame(() => this.stage.render());
            }
            this.variant = document.querySelector("input[name=\"shape-draw-type\"]:checked").value;
            (0, i.Ay)("shape-draw-fill-settings").style.display = this.variant === "line" || this.variant === "bezier" ? "none" : "flex";
            (0, i.Ay)("shape-draw-radii").style.display = this.variant === "rounded" ? "block" : "none";
          };
          this.setType = () => {
            this.stage.coating.sleep();
            this.removeMoveListeners();
            this.variant = document.querySelector("input[name=\"shape-type\"]:checked").value;
            (0, i.Ay)("shape-path").style.display = this.variant === "path" ? "flex" : "none";
            (0, i.Ay)("shape-fill-settings").style.display = this.variant === "line" ? "none" : "flex";
            (0, i.Ay)("shape-line-settings").style.display = this.variant !== "line" ? "none" : "flex";
            (0, i.Ay)("shape-outline-radii").style.display = this.variant === "rounded" ? "block" : "none";
          };
          this.selectType = () => {
            if (this.selected instanceof f.A) {
              this.variant = document.querySelector("input[name=\"shape-type\"]:checked").value;
              const t = this.selected.shapeSettings.clone();
              if (this.variant === "path") {
                this.selected.setPath(this.shape.getPath());
              } else {
                this.selected.setVariant(this.variant);
              }
              this.stage.history.add({
                type: "shapeSettings",
                kind: "type",
                layer: this.selected,
                settings: t
              });
              window.requestAnimationFrame(() => this.stage.render());
            }
            this.setType();
          };
          this.previewShape = t => {
            if (this.selected instanceof f.A) {
              this.selected.setPath(t, true);
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.selectShape = t => {
            if (this.selected instanceof f.A) {
              const e = this.selected.shapeSettings.clone();
              this.selected.setPath(t);
              this.stage.history.add({
                type: "shapeSettings",
                kind: "shape",
                layer: this.selected,
                settings: e
              });
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.previewFill = t => {
            if (this.selected instanceof f.A) {
              this.selected.setFill(t, true);
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.selectFill = t => {
            if (this.selected instanceof f.A) {
              const e = this.selected.shapeSettings.clone();
              this.selected.setFill(t);
              this.stage.history.add({
                type: "shapeSettings",
                kind: "fill",
                layer: this.selected,
                settings: e
              });
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.selectLine = () => {
            if (this.selected instanceof f.A) {
              const t = this.selected.shapeSettings.clone();
              this.selected.setOutline(this.lineSize.getValue(), this.lineColor.getColor().toHEX());
              this.stage.history.add({
                type: "shapeSettings",
                kind: "outline",
                layer: this.selected,
                settings: t
              });
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          };
          this.previewLineColor = t => {
            if (this.selected instanceof f.A) {
              this.selected.setOutline(this.lineSize.getValue(), this.lineColor.getColor().toHEX());
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          };
          this.selectOutlineRadii = () => {
            if (this.selected instanceof f.A) {
              const t = this.selected.shapeSettings.clone();
              this.selected.setRadii(this.outlineRadii.getValue());
              this.stage.history.add({
                type: "shapeSettings",
                kind: "radii",
                layer: this.selected,
                settings: t
              });
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.layerSelect = () => {
            (0, i.Ay)("shape-settings").style.display = "none";
            (0, i.Ay)("shape-draw-settings").style.display = "none";
            (0, i.Ay)("shape-draw-no-layer").style.display = "none";
            if (this.mode === "draw") {
              this.stage.history.commitTransaction();
              if (this.reform) {
                this.reform.cleanUp();
              }
              this.reform = undefined;
              if (!this.stage.fresco.isSelectedType(d.A.TYPE_IMAGE)) {
                (0, i.Ay)("shape-draw-no-layer").style.display = "flex";
                this.stage.raster.style.cursor = "auto";
                this.selected = undefined;
                return;
              }
              (0, i.Ay)("shape-draw-settings").style.display = "flex";
              this.stage.raster.style.cursor = "crosshair";
              this.selected = this.stage.fresco.getSelected();
              this.scratch = this.stage.fresco.addScratch();
              this.scratch.setTarget(this.selected.id, new o.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
            } else {
              if (this.selected !== this.stage.fresco.getSelected()) {
                this.stage.history.commitTransaction();
              }
              (0, i.Ay)("shape-settings").style.display = "flex";
              (0, i.Ay)("shape-action").style.display = "none";
              (0, i.Ay)("shape-styles-settings").style.display = "none";
              if (!this.reform) {
                this.reform = new g.A(this.stage, "SHAPE");
                this.reform.proxy = this.downReform;
              }
              if (this.stage.fresco.isSelectedType(d.A.TYPE_SHAPE)) {
                this.selected = this.stage.fresco.getSelected();
                if (this.selected.shapeSettings.variant === "svg") {
                  this.selected = undefined;
                } else {
                  let t = this.selected.shapeSettings;
                  (0, i.Ay)("shape-type-" + t.variant).checked = true;
                  this.setType();
                  this.outlineRadii.setValue(t.radii);
                  this.lineSize.setValue(t.outlineSize);
                  this.lineColor.setColor(t.outlineColor);
                  this.fill.setFill(this.selected.fill);
                  if (t.variant === "path") {
                    this.shape.setPath(t.content);
                  }
                  (0, i.Ay)("shape-action").style.display = "flex";
                  (0, i.Ay)("shape-styles-settings").style.display = "flex";
                }
              } else {
                this.selected = undefined;
              }
              document.querySelectorAll("input[name=\"shape-type\"]").forEach(t => {
                let e = true;
                if (this.selected instanceof f.A && (this.selected.shapeSettings.variant === "line" && t.value !== "line" || this.selected.shapeSettings.variant !== "line" && t.value === "line")) {
                  e = false;
                }
                (0, i.Ay)(t.id + "-label").style.display = e ? "block" : "none";
              });
            }
          };
          this.down = t => {
            if (!this.reform) {
              this.downDraw(t);
            }
          };
          this.move = t => {
            if (this.mode === "draw") {
              this.moveDraw(t);
            } else {
              this.moveDesign(t);
            }
          };
          this.up = t => {
            if (this.mode === "draw") {
              this.upDraw(t);
            } else {
              this.upDesign(t);
            }
          };
          this.downReform = (t, e) => {
            this.downPoint = t;
            if (this.variant !== "line" || this.lineSize.getValue() !== 0) {
              if (this.variant === "line" || this.fill.getFill() && this.fill.getFill().value) {
                if (this.variant === "path") {
                  this.path2D = new Path2D(this.shape.getPath());
                }
                this.addMoveListeners();
              }
            }
          };
          this.moveDesign = t => {
            if (this.isShiftDown) {
              const e = this.downPoint.x - t.x;
              const s = this.downPoint.y - t.y;
              if (this.variant === "line") {
                if (Math.abs(e) < Math.abs(s)) {
                  t.x = this.downPoint.x;
                } else {
                  t.y = this.downPoint.y;
                }
              } else {
                let i = Math.sqrt(e * e + s * s) / Math.sqrt(2);
                t.x = this.downPoint.x + (e > 0 ? -i : i);
                t.y = this.downPoint.y + (s > 0 ? -i : i);
              }
            }
            const e = this.stage.coating.ctx;
            e.lineWidth = this.variant === "line" ? Math.max(Math.round(this.lineSize.getValue() * this.stage.zoom), 1) : 2;
            e.strokeStyle = n.bi;
            e.clearRect(0, 0, e.canvas.width, e.canvas.height);
            e.save();
            switch (this.variant) {
              case "path":
                const s = this.stage.translateToRect(this.downPoint, t, this.isShiftDown, true);
                if (s.width > 0 && s.height > 0) {
                  const t = new Path2D();
                  t.addPath(this.path2D, new DOMMatrix().scale(s.width / 100, s.height / 100));
                  e.translate(s.x, s.y);
                  e.stroke(t);
                }
                break;
              case "rounded":
                const i = o.A.fromPoints([this.downPoint, t]);
                p.A.roundRect(e, i.x, i.y, i.width, i.height, Math.max(Math.round(this.outlineRadii.getValue() * this.stage.zoom), 1));
                e.stroke();
                break;
              case "rectangle":
                e.strokeRect(this.downPoint.x, this.downPoint.y, t.x - this.downPoint.x, t.y - this.downPoint.y);
                break;
              case "ellipse":
                p.A.ellipse(e, this.downPoint, t);
                e.stroke();
                break;
              case "line":
                p.A.line(e, this.downPoint, t);
                e.stroke();
            }
            e.restore();
          };
          this.upDesign = t => {
            const e = this.stage.coating.ctx;
            e.clearRect(0, 0, e.canvas.width, e.canvas.height);
            this.removeMoveListeners();
            if (this.downPoint.distanceTo(t) < 6) {
              return;
            }
            let s = this.stage.translateToRect(this.downPoint, t, this.variant !== "line" && this.isShiftDown, false);
            let i = new w.A();
            switch (this.variant) {
              case "path":
                i.variant = "path";
                i.content = this.shape.getPath();
                break;
              case "rounded":
                i.variant = "rounded";
                i.radii = this.outlineRadii.getValue();
                break;
              case "rectangle":
                i.variant = "rectangle";
                break;
              case "ellipse":
                i.variant = "ellipse";
                break;
              case "line":
                i.variant = "line";
                if (this.isShiftDown) {
                  const e = this.downPoint.x - t.x;
                  const s = this.downPoint.y - t.y;
                  if (this.variant === "line") {
                    if (Math.abs(e) < Math.abs(s)) {
                      t.x = this.downPoint.x;
                    } else {
                      t.y = this.downPoint.y;
                    }
                  } else {
                    let i = Math.sqrt(e * e + s * s) / Math.sqrt(2);
                    t.x = this.downPoint.x + (e > 0 ? -i : i);
                    t.y = this.downPoint.y + (s > 0 ? -i : i);
                  }
                }
                let e = s.center();
                let a = s.bottomRight().distanceTo(s.topLeft());
                s.x = Math.round(e.x - a / 2);
                s.y = e.y - Math.ceil(this.lineSize.getValue() / 2);
                s.width = Math.round(a);
                s.height = this.lineSize.getValue();
                s.rotation = this.stage.translateRasterToFresco(this.downPoint).angleTo(this.stage.translateRasterToFresco(t));
                i.outlineSize = this.lineSize.getValue();
                i.outlineColor = this.lineColor.getColor().toHEX();
            }
            let a = this.fill.getFill();
            if (a && a.value) {
              i.fillType = this.fill.getFill().getType();
              i.fillValue = this.fill.getFill().getStringValue();
            }
            this.stage.addShape(s, i);
          };
          this.downDraw = t => {
            if (!this.selected) {
              return;
            }
            if ((0, i.Ay)("shape-draw-fill").checked || this.drawStroke.getValue() !== 0) {
              if (this.variant === "bezier" && this.upPoint) {
                this.stage.coating.freeze(false);
                this.addDrawHistory();
                this.downPoint = this.upPoint = undefined;
                this.removeMoveListeners();
                return;
              }
              this.scratch.ctx.fillStyle = u.Ay.altColor;
              this.scratch.ctx.strokeStyle = u.Ay.mainColor;
              this.scratch.ctx.lineWidth = this.drawStroke.getValue();
              this.scratch.settings.opacity = this.drawOpacity.getValue();
              this.downPoint = this.stage.translateRasterToFresco(t);
              this.stage.coating.freeze(true);
              this.addMoveListeners();
            }
          };
          this.moveDraw = t => {
            this.scratch.clear();
            t = this.stage.translateRasterToFresco(t);
            this.scratch.ctx.save();
            const e = (0, i.Ay)("shape-draw-fill").checked;
            if (this.isShiftDown) {
              const e = this.downPoint.x - t.x;
              const s = this.downPoint.y - t.y;
              if (this.variant === "line" || this.variant === "bezier") {
                if (Math.abs(e) < Math.abs(s)) {
                  t.x = this.downPoint.x;
                } else {
                  t.y = this.downPoint.y;
                }
              } else {
                let i = Math.sqrt(e * e + s * s) / Math.sqrt(2);
                t.x = this.downPoint.x + (e > 0 ? -i : i);
                t.y = this.downPoint.y + (s > 0 ? -i : i);
              }
            }
            if (this.isDown || this.variant !== "bezier") {
              if (this.variant === "bezier") {
                p.A.line(this.scratch.ctx, this.downPoint, t);
                this.scratch.ctx.stroke();
              } else if (e || this.variant === "line") {
                p.A.fill(this.scratch.ctx, this.variant, this.downPoint, t, this.drawRadii.getValue());
              }
              if (this.drawStroke.getValue() > 0 && this.variant !== "line" && this.variant !== "bezier") {
                p.A.stroke(this.scratch.ctx, this.variant, this.downPoint, t, this.drawRadii.getValue());
              }
            } else {
              p.A.bezier(this.scratch.ctx, this.downPoint, this.upPoint, t);
              this.scratch.ctx.stroke();
            }
            this.scratch.ctx.restore();
            this.scratch.applySelection(this.stage);
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.upDraw = t => {
            this.upPoint = this.stage.translateRasterToFresco(t);
            const e = this.downPoint.x === this.upPoint.x && this.downPoint.y === this.upPoint.y;
            if (!!e || this.variant !== "bezier" || !this.upPoint) {
              this.upPoint = undefined;
              this.stage.coating.freeze(false);
              this.removeMoveListeners();
              if (!e) {
                this.move(t);
                this.addDrawHistory();
              }
            }
          };
          this.addDrawHistory = () => {
            let t = n.TL(this.scratch.getCanvas());
            if (t && t.width > 0 && t.height > 0) {
              let e = this.selected.rect ? n.ON(this.selected.canvas, t.rebase(this.selected.rect.x, this.selected.rect.y)) : undefined;
              const s = n.$z(this.selected.mask);
              const i = this.selected.rect ? this.selected.rect.clone() : undefined;
              this.selected.extendCanvas(t);
              this.scratch.drawToLayer(this.selected, undefined, this.drawOpacity.getValue());
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "shape",
                layer: this.selected,
                patchRect: this.selected.rect ? t.rebase(this.selected.rect.x, this.selected.rect.y) : t,
                patch: e,
                rect: i,
                mask: s
              });
            }
          };
          this.deleteLayer = () => this.stage.deleteLayer();
          this.duplicateLayer = () => this.stage.duplicateLayer();
          this.cleanUp = () => {
            var t;
            this.stage.history.commitTransaction();
            if (this.reform) {
              this.reform.cleanUp();
              this.reform = undefined;
            }
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.stage.coating.removePicker();
            this.stage.coating.wake();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            this.removeDownListeners();
            window.requestAnimationFrame(() => this.stage.render());
            this.drawRadii.cleanUp();
            this.drawStroke.cleanUp();
            this.drawOpacity.cleanUp();
            this.fill.cleanUp();
            this.shape.cleanUp();
            this.lineColor.cleanUp();
            this.lineSize.cleanUp();
            this.outlineRadii.cleanUp();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keyup", this.keyUp, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.querySelectorAll("input[name=\"shape-draw-type\"]").forEach(t => t.removeEventListener("change", this.setDrawType));
            document.querySelectorAll("input[name=\"shape-type\"]").forEach(t => t.removeEventListener("change", this.selectType));
            (0, i.Ay)("shape-delete").removeEventListener("click", this.deleteLayer, true);
            (0, i.Ay)("shape-duplicate").removeEventListener("click", this.duplicateLayer, true);
            (0, i.Ay)("shape-mode-draw").removeEventListener("change", this.setMode);
            (0, i.Ay)("shape-mode-design").removeEventListener("change", this.setMode);
            (0, i.Ay)("shape-styles").removeEventListener("click", this.showShapeStyles, false);
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("shape-mode-draw").addEventListener("change", this.setMode);
          (0, i.Ay)("shape-mode-design").addEventListener("change", this.setMode);
          (0, i.Ay)("shape-styles").addEventListener("click", this.showShapeStyles, false);
          this.drawStroke = new c.A("shape-draw-size", {
            compact: true,
            label: (0, a.A)("outline") + ":",
            defaultValue: 5,
            range: [0, 50],
            step: 1
          });
          this.drawRadii = new c.A("shape-draw-radii", {
            compact: true,
            label: (0, a.A)("radius") + ":",
            defaultValue: 5,
            range: [0, 100],
            step: 1
          });
          this.drawOpacity = new c.A("shape-draw-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%"
          });
          document.querySelectorAll("input[name=\"shape-draw-type\"]").forEach(t => t.addEventListener("change", this.setDrawType));
          document.querySelectorAll("input[name=\"shape-type\"]").forEach(t => t.addEventListener("change", this.selectType));
          this.shape = new v.A("shape-shape", this.selectShape, this.previewShape);
          this.fill = new m.A("shape-fill", new r.A(l.A.fromHEX(u.Ay.mainColor)), this.selectFill, this.previewFill);
          this.lineColor = new y.A("shape-line-color", l.A.fromHEX(u.Ay.altColor), this.selectLine, this.previewLineColor);
          this.lineSize = new c.A("shape-line-size", {
            compact: true,
            label: (0, a.A)("size") + ":",
            defaultValue: 4,
            range: [1, 100],
            step: 1,
            onEnd: this.selectLine
          });
          this.outlineRadii = new c.A("shape-outline-radii", {
            compact: true,
            label: (0, a.A)("radius") + ":",
            defaultValue: 5,
            range: [0, 100],
            step: 1,
            onEnd: this.selectOutlineRadii
          });
          (0, i.Ay)("shape-delete").addEventListener("click", this.deleteLayer, true);
          (0, i.Ay)("shape-duplicate").addEventListener("click", this.duplicateLayer, true);
          this.addDownListeners();
          this.setMode();
        }
      }
    }
