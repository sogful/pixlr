window.__editorModules[4939] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5283);
      var a = s(5699);
      var n = s(5527);
      var o = s(3517);
      var r = s(5259);
      var h = s(2037);
      var l = s(3328);
      var c = s(7775);
      class d extends n.A {
        constructor(t) {
          super("liquify", t);
          this.timedStroke = false;
          this.keyDown = t => {
            if (t.key === "," || t.key === ".") {
              switch (t.key) {
                case ",":
                  this.size.setValue(this.size.getValue() - 10);
                  break;
                case ".":
                  this.size.setValue(this.size.getValue() + 10);
              }
              this.updateBrush();
            }
          };
          this.layerSelect = async () => {
            const {
              Displacement: t
            } = await Promise.resolve().then(s.bind(s, 2355));
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("liquify-no-layer").style.display = "flex";
              (0, i.Ay)("liquify-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("liquify-settings").style.display = "flex";
            (0, i.Ay)("liquify-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.settings.blendmode = this.selected.settings.blendmode;
            this.scratch.settings.opacity = this.selected.settings.opacity;
            this.scratch.setTarget(this.selected.id, this.selected.rect, "replace");
            this.scratch.ctx.drawImage(this.selected.canvas, 0, 0);
            const e = this.selected.canvas.getContext("2d").getImageData(0, 0, this.selected.canvas.width, this.selected.canvas.height);
            if (this.displacement) {
              this.displacement.retarget(e.data, e.width, e.height);
            } else {
              this.displacement = new t(e.data, e.width, e.height, this.size.getValue(), this.strength.getValue(), this.density.getValue());
              const s = document.querySelector("input[name=\"liquify-mode\"]:checked").value;
              this.setMode(s);
              this.brush.settings.size = this.size.getValue();
            }
            this.updateBrush();
            this.stage.render();
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget.value);
          };
          this.setMode = t => {
            var e;
            this.timedStroke = t !== "MOVE";
            if ((e = this.displacement) !== null && e !== undefined) {
              e.setMode(t);
            }
          };
          this.updateBrush = () => {
            var t;
            this.brush.settings.size = this.size.getValue();
            if ((t = this.displacement) !== null && t !== undefined) {
              t.setStampSize(this.size.getValue());
            }
            this.brush.generate();
            if (this.selected) {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom, new r.A(255, 255, 255, 255)));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.down = (t, e) => {
            if (this.selected && this.displacement) {
              this.stage.coating.freeze(true);
              this.stroke = this.displacement.beginStroke();
              this.highQualityStroke = (0, i.Ay)("liquify-hq-preview").checked;
              if (e !== "touch") {
                this.move(t);
              }
              this.addMoveListeners();
            }
          };
          this.move = t => {
            const e = this.stage.translateRasterToFresco(t, this.selected.rect);
            const s = this.stroke.push(e.x, e.y, this.timedStroke);
            if (s) {
              this.strokeDamage = s.union(this.strokeDamage);
              const t = this.highQualityStroke ? this.displacement.applyQuality(s) : this.displacement.applyFast(s);
              this.scratch.ctx.putImageData(new ImageData(t, s.width, s.height), s.x, s.y);
              window.requestAnimationFrame(() => this.stage.render());
            }
            if (this.timedStroke) {
              window.clearTimeout(this.strokeTimeout);
              this.strokeTimeout = window.setTimeout(() => this.move(t), 16);
            }
          };
          this.up = t => {
            var e;
            if ((e = this.stroke) !== null && e !== undefined) {
              e.free();
            }
            this.stroke = undefined;
            window.clearTimeout(this.strokeTimeout);
            this.removeMoveListeners();
            if (!this.displacement || !this.strokeDamage) {
              return;
            }
            const s = this.strokeDamage;
            this.strokeDamage = undefined;
            if (!this.highQualityStroke) {
              let t = this.displacement.applyQuality(s);
              this.scratch.ctx.putImageData(new ImageData(t, s.width, s.height), s.x, s.y);
              window.requestAnimationFrame(() => this.stage.render());
            }
            const i = a.ON(this.selected.canvas, s);
            const n = this.selected.rect.clone();
            const o = this.selected.canvas.getContext("2d");
            o.clearRect(s.x, s.y, s.width, s.height);
            o.drawImage(this.scratch.canvas, s.x, s.y, s.width, s.height, s.x, s.y, s.width, s.height);
            this.scratch.clear();
            this.scratch.ctx.drawImage(this.selected.canvas, 0, 0);
            this.selected.render();
            this.stage.render();
            this.stage.history.add({
              type: "bitmapChange",
              kind: "liquify",
              layer: this.selected,
              patchRect: s,
              patch: i,
              rect: n
            });
          };
          this.cleanUp = () => {
            var t;
            var e;
            var s;
            if ((t = this.displacement) !== null && t !== undefined) {
              t.free();
            }
            if ((e = this.stroke) !== null && e !== undefined) {
              e.free();
            }
            if ((s = this.stage.fresco) !== null && s !== undefined) {
              s.removeScratch();
            }
            this.removeDownListeners();
            this.size.cleanUp();
            this.strength.cleanUp();
            this.density.cleanUp();
            document.removeEventListener("zoom-change", this.updateBrush, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.getElementsByName("liquify-mode").forEach(t => {
              t.removeEventListener("click", this.selectMode, false);
            });
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.getElementsByName("liquify-mode").forEach(t => {
            t.addEventListener("click", this.selectMode, false);
          });
          this.brush = new h.A(new l.A("circle", 50, 0));
          this.size = new o.A("liquify-brush-size", {
            compact: true,
            label: (0, c.A)("size") + ":",
            step: 2,
            range: [5, 500],
            defaultValue: 50,
            labelFormat: t => t.toFixed(0),
            onEnd: () => this.updateBrush()
          });
          this.strength = new o.A("liquify-brush-strength", {
            compact: true,
            label: (0, c.A)("strength") + ":",
            range: [0.01, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              var e;
              if ((e = this.displacement) === null || e === undefined) {
                return undefined;
              } else {
                return e.setStrength(t);
              }
            }
          });
          this.density = new o.A("liquify-brush-density", {
            compact: true,
            label: (0, c.A)("density") + ":",
            range: [0, 0.95],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              var e;
              if ((e = this.displacement) === null || e === undefined) {
                return undefined;
              } else {
                return e.setDensity(t);
              }
            }
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
