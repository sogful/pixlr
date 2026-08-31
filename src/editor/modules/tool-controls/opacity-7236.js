window.__editorModules[7236] = function (t, e, s) {
      s.d(e, {
        A: () => m
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(6);
      var r = s(3244);
      var h = s(5527);
      var l = s(5259);
      var c = s(3517);
      var d = s(749);
      var u = s(98);
      var p = s(9661);
      var g = s(7572);
      class m extends h.A {
        constructor(t) {
          super("gradient", t);
          this.isShiftDown = false;
          this.shiftDown = t => {
            if (t.key === "Shift") {
              this.isShiftDown = true;
            }
          };
          this.shiftUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
            }
          };
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedType(d.A.TYPE_IMAGE)) {
              (0, i.Ay)("gradient-no-layer").style.display = "flex";
              (0, i.Ay)("gradient-settings").style.display = "none";
              this.stage.raster.style.cursor = "auto";
              this.selected = null;
              return;
            }
            (0, i.Ay)("gradient-no-layer").style.display = "none";
            (0, i.Ay)("gradient-settings").style.display = "flex";
            this.stage.raster.style.cursor = "crosshair";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
          };
          this.down = t => {
            if (this.selected) {
              this.stage.coating.freeze(true);
              this.downPoint = t;
              this.stage.coating.ctx.strokeStyle = n.q5;
              this.stage.coating.ctx.fillStyle = n.bi;
              this.addMoveListeners();
            }
          };
          this.move = t => {
            if (this.isShiftDown) {
              const e = this.downPoint.x - t.x;
              const s = this.downPoint.y - t.y;
              if (Math.abs(e) < Math.abs(s)) {
                t.x = this.downPoint.x;
              } else {
                t.y = this.downPoint.y;
              }
            }
            window.requestAnimationFrame(() => {
              if (this.downPoint) {
                this.stage.coating.clear(true);
                this.stage.coating.ctx.lineWidth = 2;
                g.A.line(this.stage.coating.ctx, this.downPoint, t);
                this.stage.coating.ctx.stroke();
                g.A.arc(this.stage.coating.ctx, this.downPoint, 6);
                this.stage.coating.ctx.fill();
                this.stage.coating.ctx.stroke();
                g.A.arc(this.stage.coating.ctx, t, 6);
                this.stage.coating.ctx.fill();
                this.stage.coating.ctx.stroke();
                this.stage.coating.ctx.lineWidth = 1;
                this.stage.coating.render();
              }
            });
          };
          this.up = t => {
            this.stage.coating.ctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            if (this.downPoint.x === t.x && this.downPoint.y === t.y) {
              return;
            }
            this.downPoint = this.stage.translateRasterToFresco(this.downPoint);
            t = this.stage.translateRasterToFresco(t);
            if (this.isShiftDown) {
              const e = this.downPoint.x - t.x;
              const s = this.downPoint.y - t.y;
              if (Math.abs(e) < Math.abs(s)) {
                t.x = this.downPoint.x;
              } else {
                t.y = this.downPoint.y;
              }
            }
            let e;
            let s = document.querySelector("input[name=\"gradient-type\"]:checked").value;
            this.scratch.clear();
            this.scratch.ctx.save();
            if (s === "radial") {
              const s = this.downPoint.x - t.x;
              const i = this.downPoint.y - t.y;
              e = this.scratch.ctx.createRadialGradient(this.downPoint.x, this.downPoint.y, 0, this.downPoint.x, this.downPoint.y, Math.sqrt(s * s + i * i));
            } else {
              e = this.scratch.ctx.createLinearGradient(this.downPoint.x, this.downPoint.y, t.x, t.y);
            }
            this.downPoint = undefined;
            this.gradPod.grad.addStopToCanvasGradient(e);
            this.scratch.ctx.fillStyle = e;
            this.scratch.ctx.fillRect(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
            this.scratch.ctx.restore();
            this.scratch.applySelection(this.stage);
            let a = n.TL(this.scratch.getCanvas());
            if (a && a.width > 0 && a.height > 0) {
              let t = n.ON(this.selected.canvas, this.selected.rect ? a.rebase(this.selected.rect.x, this.selected.rect.y) : a);
              const e = n.$z(this.selected.mask);
              const s = this.selected.rect ? this.selected.rect.clone() : undefined;
              this.selected.extendCanvas(a);
              this.scratch.drawToLayer(this.selected, (0, i.Ay)("gradient-blend").value, this.opacity.getValue());
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "gradient",
                layer: this.selected,
                patchRect: this.selected.rect ? a.rebase(this.selected.rect.x, this.selected.rect.y) : a,
                patch: t,
                rect: s,
                mask: e
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.removeDownListeners();
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.shiftDown, false);
            document.removeEventListener("keyup", this.shiftUp, false);
            this.gradPod.cleanUp();
            this.opacity.cleanUp();
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("keydown", this.shiftDown, false);
          document.addEventListener("keyup", this.shiftUp, false);
          let e = new o.Ay();
          e.addStop(l.A.fromHEX(u.Ay.mainColor), 0);
          e.addStop(l.A.fromHEX(u.Ay.altColor), 1);
          this.gradPod = new p.A("gradient-grad", e);
          this.opacity = new c.A("gradient-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%"
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
