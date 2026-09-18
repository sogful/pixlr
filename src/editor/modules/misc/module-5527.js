window.__editorModules[5527] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(6050);
      var a = s(98);
      class n {
        constructor(t, e) {
          this.applyClick = () => {
            document.dispatchEvent(new CustomEvent("tool-apply"));
          };
          this.cancelClick = () => {
            document.dispatchEvent(new CustomEvent("tool-cancel"));
          };
          this.addPointer = t => {
            this.pointers.push(t);
            this.stage.raster.setPointerCapture(t);
          };
          this.removePointer = t => {
            for (let e = 0; e < this.pointers.length; e++) {
              if (this.pointers[e] === t.pointerId) {
                this.pointers.splice(e, 1);
                break;
              }
            }
            if (this.stage.raster.hasPointerCapture(t.pointerId)) {
              this.stage.raster.releasePointerCapture(t.pointerId);
            }
          };
          this.pointerDown = t => {
            t.stopPropagation();
            if (this.stage.coating.override || t.button > 0) {
              return;
            }
            this.isDown = true;
            this.addPointer(t.pointerId);
            const e = a.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length === 1) {
              this.down(new i.A(t.offsetX * e, t.offsetY * e), t.pointerType, t.pressure);
            }
          };
          this.pointerMove = t => {
            t.stopPropagation();
            const e = a.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length < 2) {
              this.move(new i.A(t.offsetX * e, t.offsetY * e), t.pointerType, t.pressure);
            }
          };
          this.pointerUp = t => {
            t.stopPropagation();
            if (!this.isDown) {
              return;
            }
            this.isDown = false;
            const e = a.Ay.isHDPI ? 2 : 1;
            this.up(new i.A(t.offsetX * e, t.offsetY * e));
          };
          this.pointerCancel = t => {
            this.pointerUp(t);
            this.removePointer(t);
          };
          this.dblClick = t => {
            t.stopPropagation();
            const e = a.Ay.isHDPI ? 2 : 1;
            this.dbl(new i.A(t.offsetX * e, t.offsetY * e));
          };
          this.addDownListeners = () => {
            this.stage.raster.addEventListener("pointerdown", this.pointerDown, false);
            this.stage.raster.addEventListener("pointerup", this.removePointer, false);
          };
          this.removeDownListeners = () => {
            for (let t = 0; t < this.pointers.length; t++) {
              this.stage.raster.releasePointerCapture(this.pointers[t]);
            }
            this.stage.raster.removeEventListener("pointerdown", this.pointerDown, false);
            this.stage.raster.removeEventListener("pointerup", this.removePointer, false);
          };
          this.addMoveListeners = () => {
            this.stage.raster.addEventListener("pointermove", this.pointerMove, false);
            this.stage.raster.addEventListener("pointerup", this.pointerUp, false);
            this.stage.raster.addEventListener("pointercancel", this.pointerCancel, false);
            this.stage.raster.addEventListener("lostpointercapture", this.pointerCancel, false);
          };
          this.removeMoveListeners = () => {
            this.stage.raster.removeEventListener("pointermove", this.pointerMove, false);
            this.stage.raster.removeEventListener("pointerup", this.pointerUp, false);
            this.stage.raster.removeEventListener("pointercancel", this.pointerCancel, false);
            this.stage.raster.removeEventListener("lostpointercapture", this.pointerCancel, false);
          };
          this.down = (t, e, s) => {};
          this.move = (t, e, s) => {};
          this.dbl = t => {};
          this.up = t => {};
          this.apply = () => {};
          this.cancel = () => {};
          this.cleanUp = () => {};
          this.name = t;
          this.stage = e;
          this.pointers = new Array();
        }
      }
    }
