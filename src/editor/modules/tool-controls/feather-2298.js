window.__editorModules[2298] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(709);
      var a = s(3517);
      var n = s(3244);
      var o = s(5283);
      var r = s(7775);
      class h extends i.A {
        constructor(t) {
          super("marquee", t);
          this.selectMode = () => {
            this.mode = document.querySelector("input[name=\"marquee-mode\"]:checked").value;
          };
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              if (!this.isDown) {
                (0, o.Ay)("marquee-mode-add").checked = true;
                this.selectMode();
              }
            }
            if (t.key === "Control" && !this.isCtrlDown) {
              this.isCtrlDown = true;
              if (!this.isDown) {
                (0, o.Ay)("marquee-mode-remove").checked = true;
                this.selectMode();
              }
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift" && this.isShiftDown) {
              this.isShiftDown = false;
              if (!this.isCtrlDown && !this.isDown) {
                (0, o.Ay)("marquee-mode-new").checked = true;
                this.selectMode();
              }
            }
            if (t.key === "Control" && this.isCtrlDown) {
              this.isCtrlDown = false;
              if (!this.isDown) {
                (0, o.Ay)("marquee-mode-new").checked = true;
                this.selectMode();
              }
            }
          };
          this.down = t => {
            this.setHistory();
            this.stage.coating.freeze(true);
            this.addMoveListeners();
            this.type = document.querySelector("input[name=\"marquee-type\"]:checked").value;
            if (this.mode === "new" && this.stage.fresco.selection) {
              this.stage.fresco.selection.clear();
              window.requestAnimationFrame(() => this.stage.coating.render());
            }
          };
          this.move = t => {
            if (this.isDown) {
              let e = this.stage.translateToRect(this.downPoint, t, !this.stage.fresco.hasSelection() && this.isShiftDown, true);
              window.requestAnimationFrame(() => {
                if (this.type === "rectangle") {
                  this.stage.coating.drawAntRectangle(e);
                } else {
                  this.stage.coating.drawAntEllipse(e);
                }
              });
              document.dispatchEvent(new CustomEvent("legend", {
                detail: "W: " + Math.round(e.width / this.stage.zoom) + "  H: " + Math.round(e.height / this.stage.zoom)
              }));
            }
          };
          this.up = t => {
            this.isDown = false;
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            document.dispatchEvent(new CustomEvent("legend", {
              detail: "stop"
            }));
            let e = this.stage.translateToRect(this.downPoint, t, !this.stage.fresco.hasSelection() && this.isShiftDown, false);
            if (this.downPoint.x === t.x && this.downPoint.y === t.y || !e.intersect(new n.A(0, 0, this.stage.fresco.width, this.stage.fresco.height))) {
              if (this.stage.fresco.selection && this.stage.fresco.selection.bounds && this.stage.fresco.selection.bounds.width > 0) {
                this.stage.fresco.selection.reset();
                this.addHistory("deselect");
                window.requestAnimationFrame(() => this.stage.coating.render());
              }
            } else {
              this.stage.fresco.addSelection();
              if (this.type === "rectangle") {
                this.stage.fresco.selection.editRectangle(e, this.feather.getValue(), this.mode === "remove");
              } else {
                this.stage.fresco.selection.editEllipse(e, this.feather.getValue(), !(0, o.Ay)("marquee-anti-alias").checked, this.mode === "remove");
              }
              window.requestAnimationFrame(() => this.stage.coating.render());
              this.addHistory();
            }
          };
          this.cleanUp = () => {
            if (this.isShiftDown || this.isCtrlDown) {
              (0, o.Ay)("marquee-mode-new").checked = true;
            }
            this.superClean();
            if (this.stage.fresco && this.stage.fresco.selection && this.stage.fresco.selection.outline?.length === 0) {
              this.stage.fresco.removeSelection();
            }
            this.feather.cleanUp();
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            (0, o.Ay)("marquee-mode-new").removeEventListener("change", this.selectMode, false);
            (0, o.Ay)("marquee-mode-add").removeEventListener("change", this.selectMode, false);
            (0, o.Ay)("marquee-mode-remove").removeEventListener("change", this.selectMode, false);
          };
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          this.feather = new a.A("marquee-feather", {
            compact: true,
            defaultValue: 0,
            label: (0, r.A)("feather") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          (0, o.Ay)("marquee-mode-new").addEventListener("change", this.selectMode, false);
          (0, o.Ay)("marquee-mode-add").addEventListener("change", this.selectMode, false);
          (0, o.Ay)("marquee-mode-remove").addEventListener("change", this.selectMode, false);
          this.selectMode();
        }
      }
    }
