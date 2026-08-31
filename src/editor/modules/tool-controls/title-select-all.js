window.__editorModules[709] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(7775);
      var a = s(5527);
      var n = s(5699);
      var o = s(6050);
      var r = s(98);
      var h = s(7578);
      class l extends a.A {
        constructor(t, e) {
          super(t, e);
          this.moveLock = "none";
          this.contextMenu = t => {
            t.preventDefault();
            t.stopPropagation();
            if (!this.stage.coating.frozen) {
              new h.Ay(new o.A(t.clientX, t.clientY), [new h.kt((0, i.A)("titleSelectAll"), () => this.stage.selectionAll(), "Ctrl + A"), new h.kt((0, i.A)("titleSelectPixels"), () => this.stage.selectionPixels()), new h.kt((0, i.A)("titleSelectDeselect"), this.stage.fresco.hasSelection() ? () => this.stage.selectionDeselect() : undefined, "Ctrl + D"), new h.kt((0, i.A)("titleSelectInvert"), this.stage.fresco.hasSelection() ? () => this.stage.selectionInvert() : undefined, "Ctrl + I"), new h.kt(), new h.kt((0, i.A)("titleCut"), this.stage.fresco.hasSelection() ? () => document.dispatchEvent(new CustomEvent("cut-menu")) : undefined, "Ctrl + X"), new h.kt((0, i.A)("titleCopy"), this.stage.fresco.hasSelection() ? () => () => document.dispatchEvent(new CustomEvent("copy-menu")) : undefined, "Ctrl + C"), new h.kt((0, i.A)("titlePaste"), () => document.dispatchEvent(new CustomEvent("paste-menu")), "Ctrl + V"), new h.kt((0, i.A)("titleClear"), this.stage.fresco.hasSelection() ? () => document.dispatchEvent(new CustomEvent("clear-menu")) : undefined, "DEL")]);
            }
          };
          this.pointerDown = t => {
            t.stopPropagation();
            if (this.stage.coating.override || t.button > 0) {
              return;
            }
            this.isDown = true;
            this.addPointer(t.pointerId);
            const e = r.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length === 1) {
              this.preDown(new o.A(t.offsetX * e, t.offsetY * e), t.pointerType, t.pressure);
            }
          };
          this.pointerMove = t => {
            t.stopPropagation();
            const e = r.Ay.isHDPI ? 2 : 1;
            let s = new o.A(t.offsetX * e, t.offsetY * e);
            if (t.buttons || !this.isDown || this.noGoZone) {
              if (this.isDown) {
                this.preMove(s);
              } else {
                if (this.stage.fresco.hasSelection()) {
                  let t = this.stage.translateRasterToFresco(s);
                  if (this.mode === "new" && this.stage.fresco.selection.isSelected(t)) {
                    this.stage.raster.style.cursor = "move";
                    return;
                  }
                }
                this.stage.raster.style.cursor = "crosshair";
              }
            } else {
              this.pointerUp(t);
            }
          };
          this.pointerUp = t => {
            t.stopPropagation();
            const e = r.Ay.isHDPI ? 2 : 1;
            this.preUp(new o.A(t.offsetX * e, t.offsetY * e));
          };
          this.setHistory = () => {
            this.snapshot = n.$z(this.stage?.fresco?.selection?.mask);
          };
          this.addHistory = (t = this.name) => {
            this.stage.history.add({
              type: "selectionChange",
              kind: t,
              selection: this.snapshot
            });
            this.snapshot = undefined;
          };
          this.addMoveListeners = () => {
            this.stage.raster.addEventListener("pointerup", this.pointerUp, false);
          };
          this.removeMoveListeners = () => {
            this.stage.raster.removeEventListener("pointerup", this.pointerUp, false);
          };
          this.superClean = () => {
            this.removeDownListeners();
            this.stage.raster.removeEventListener("pointermove", this.pointerMove, false);
            this.stage.raster.removeEventListener("contextmenu", this.contextMenu, true);
          };
          this.addDownListeners();
          this.stage.raster.addEventListener("pointermove", this.pointerMove, false);
          this.stage.raster.addEventListener("contextmenu", this.contextMenu, true);
          this.stage.raster.style.cursor = "crosshair";
        }
        preDown(t, e, s) {
          this.isDown = true;
          this.isMoving = false;
          this.downPoint = t;
          if (this.stage.fresco.hasSelection()) {
            let e = this.stage.translateRasterToFresco(t);
            this.isMoving = this.mode === "new" && this.stage.fresco.selection.isSelected(e);
          }
          if (this.isMoving) {
            this.setHistory();
            this.stage.coating.freeze(true);
            this.addMoveListeners();
          } else {
            this.down(t, e, s);
          }
        }
        preMove(t, e, s) {
          if (this.isMoving) {
            if (this.isShiftDown && this.moveLock === "none") {
              const e = Math.abs(this.downPoint.x - t.x);
              const s = Math.abs(this.downPoint.y - t.y);
              if (e > 4 || s > 4) {
                if (e < s) {
                  t.x = this.downPoint.x;
                  this.moveLock = "vertical";
                } else {
                  t.y = this.downPoint.y;
                  this.moveLock = "horizontal";
                }
              }
            }
            if (!this.isShiftDown) {
              this.moveLock = "none";
            }
            if (this.moveLock !== "vertical") {
              this.stage.fresco.selection.offset.x = Math.round((t.x - this.downPoint.x) / this.stage.zoom);
            }
            if (this.moveLock !== "horizontal") {
              this.stage.fresco.selection.offset.y = Math.round((t.y - this.downPoint.y) / this.stage.zoom);
            }
            window.requestAnimationFrame(() => this.stage.coating.render());
          } else {
            this.move(t, e, s);
          }
        }
        preUp(t) {
          if (this.isMoving) {
            this.isDown = false;
            this.isMoving = false;
            this.moveLock = "none";
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            if (this.stage.fresco.selection.offset.x !== 0 || this.stage.fresco.selection.offset.y !== 0) {
              this.stage.fresco.selection.applyOffset();
              this.addHistory("move");
            }
          } else {
            this.up(t);
          }
        }
      }
    }
