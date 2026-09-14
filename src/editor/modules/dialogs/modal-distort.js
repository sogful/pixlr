window.__editorModules[1255] = function (t, e, s) {
      s.d(e, {
        A: () => S
      });
      var i = s(5283);
      var a = s(5527);
      var n = s(749);
      var o = s(3438);
      var r = s(7775);
      var h = s(5699);
      var l = s(3244);
      var c = s(6050);
      var d = s(98);
      class u {
        constructor(t, e, s, i, a, n) {
          this.p0 = t;
          this.p1 = e;
          this.p2 = s;
          this.t0 = i;
          this.t1 = a;
          this.t2 = n;
        }
      }
      var p = s(2543);
      class g {
        constructor(t, e) {
          this.addPointer = t => {
            this.pointers.push(t);
            this.modal.setPointerCapture(t);
          };
          this.removePointer = t => {
            for (let e = 0; e < this.pointers.length; e++) {
              if (this.pointers[e] === t) {
                this.pointers.splice(e, 1);
                break;
              }
            }
            this.modal.releasePointerCapture(t);
          };
          this.pointerDown = t => {
            t.stopPropagation();
            if (this.stage.coating.override || t.button > 0) {
              return;
            }
            this.addPointer(t.pointerId);
            const e = d.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length === 1) {
              this.down(new c.A((t.offsetX - this.stage.canvas.offsetLeft) * e, (t.offsetY - this.stage.canvas.offsetTop) * e));
            }
          };
          this.pointerMove = t => {
            t.stopPropagation();
            const e = d.Ay.isHDPI ? 2 : 1;
            this.move(new c.A((t.offsetX - this.stage.canvas.offsetLeft) * e, (t.offsetY - this.stage.canvas.offsetTop) * e));
          };
          this.pointerUp = t => {
            t.stopPropagation();
            this.removePointer(t.pointerId);
            const e = d.Ay.isHDPI ? 2 : 1;
            this.up(new c.A((t.offsetX - this.stage.canvas.offsetLeft) * e, (t.offsetY - this.stage.canvas.offsetTop) * e));
          };
          this.keyDown = t => {
            if (t.keyCode !== 27) {
              if (t.keyCode !== 13) {
                if (t.keyCode === 32) {
                  this.stage.coating.setPan(this.modal);
                  t.preventDefault();
                  return;
                } else {
                  return undefined;
                }
              }
              this.apply();
            } else {
              this.cancel();
            }
          };
          this.keyUp = t => {
            if (t.keyCode === 32) {
              this.stage.coating.removePan(this.modal);
              this.split = 28;
              this.render();
              return;
            }
          };
          this.inputPosition = t => {
            this.TL.x = Number((0, i.Ay)("distort-x1").value);
            this.TL.y = Number((0, i.Ay)("distort-y1").value);
            this.TR.x = Number((0, i.Ay)("distort-x2").value);
            this.TR.y = Number((0, i.Ay)("distort-y2").value);
            this.BL.x = Number((0, i.Ay)("distort-x3").value);
            this.BL.y = Number((0, i.Ay)("distort-y3").value);
            this.BR.x = Number((0, i.Ay)("distort-x4").value);
            this.BR.y = Number((0, i.Ay)("distort-y4").value);
            this.requestRender();
          };
          this.updateInputs = () => {
            (0, i.Ay)("distort-x1").value = Math.round(this.TL.x).toString();
            (0, i.Ay)("distort-y1").value = Math.round(this.TL.y).toString();
            (0, i.Ay)("distort-x2").value = Math.round(this.TR.x).toString();
            (0, i.Ay)("distort-y2").value = Math.round(this.TR.y).toString();
            (0, i.Ay)("distort-x3").value = Math.round(this.BL.x).toString();
            (0, i.Ay)("distort-y3").value = Math.round(this.BL.y).toString();
            (0, i.Ay)("distort-x4").value = Math.round(this.BR.x).toString();
            (0, i.Ay)("distort-y4").value = Math.round(this.BR.y).toString();
          };
          this.down = async t => {
            this.downPoint = this.stage.translateRasterToFresco(t);
            if (this.isControl(this.downPoint)) {
              this.split = 8;
              this.isDown = true;
              this.downPosition = this.ss.clone();
              this.requestRender();
            } else if (this.isInside(this.downPoint)) {
              this.split = 5;
              this.isMove = true;
              this.isDown = true;
              this.offset = new c.A();
              this.requestRender();
            } else {
              this.choice();
            }
          };
          this.move = t => {
            t = this.stage.translateRasterToFresco(t);
            if (this.isDown) {
              if (this.isMove) {
                this.offset.x = this.downPoint.x - t.x;
                this.offset.y = this.downPoint.y - t.y;
              } else {
                this.ss.x = this.downPosition.x + (t.x - this.downPoint.x);
                this.ss.y = this.downPosition.y + (t.y - this.downPoint.y);
                this.updateInputs();
              }
              this.requestRender();
            } else if (this.isControl(t)) {
              this.modal.style.cursor = "pointer";
            } else if (this.isInside(t)) {
              this.modal.style.cursor = "move";
            } else {
              this.modal.style.cursor = "unset";
            }
          };
          this.up = t => {
            if (this.isDown) {
              if (this.isMove) {
                this.TL = this.TL.neg(this.offset);
                this.TR = this.TR.neg(this.offset);
                this.BL = this.BL.neg(this.offset);
                this.BR = this.BR.neg(this.offset);
              }
              this.split = 28;
              this.ss = undefined;
              this.isDown = false;
              this.isMove = false;
              this.offset = undefined;
              this.downPoint = undefined;
              this.downPosition = undefined;
              this.requestRender();
              this.updateInputs();
            }
          };
          this.requestRender = () => {
            if (this.renderFrame) {
              return;
            }
            this.renderFrame = window.requestAnimationFrame(() => {
              this.renderFrame = undefined;
              this.render();
            });
          };
          this.renderLow = () => {
            this.split = 5;
            this.renderControls();
            this.renderPreview();
          };
          this.render = () => {
            this.renderControls();
            this.renderPreview();
            this.stage.render();
          };
          this.renderPreview = () => {
            let t = this.scratch.ctx;
            t.clearRect(0, 0, t.canvas.width, t.canvas.height);
            t.imageSmoothingEnabled = true;
            t.imageSmoothingQuality = "high";
            const e = this.calculateGeometry();
            e.forEach(e => {
              this.drawTriangle(t, e.p0.x, e.p0.y, e.p1.x, e.p1.y, e.p2.x, e.p2.y, e.t0.x, e.t0.y, e.t1.x, e.t1.y, e.t2.x, e.t2.y);
            });
            if (this.split >= 20) {
              e.forEach(e => {
                this.drawTriangle(t, e.p0.x, e.p0.y, e.p1.x, e.p1.y, e.p2.x, e.p2.y, e.t0.x, e.t0.y, e.t1.x, e.t1.y, e.t2.x, e.t2.y);
              });
              e.forEach(e => {
                this.drawTriangle(t, e.p0.x, e.p0.y, e.p1.x, e.p1.y, e.p2.x, e.p2.y, e.t0.x, e.t0.y, e.t1.x, e.t1.y, e.t2.x, e.t2.y);
              });
              t.imageSmoothingEnabled = true;
              e.forEach(e => {
                this.drawTriangle(t, e.p0.x, e.p0.y, e.p1.x, e.p1.y, e.p2.x, e.p2.y, e.t0.x, e.t0.y, e.t1.x, e.t1.y, e.t2.x, e.t2.y);
              });
            }
          };
          this.calculateGeometry = () => {
            let t = [];
            for (var e = this.split, s = this.split, i = this.offset ? this.TL.neg(this.offset) : this.TL, a = this.offset ? this.TR.neg(this.offset) : this.TR, n = this.offset ? this.BR.neg(this.offset) : this.BR, o = this.offset ? this.BL.neg(this.offset) : this.BL, r = o.x - i.x, h = o.y - i.y, l = n.x - a.x, d = n.y - a.y, p = this.patch.width, g = this.patch.height, m = 0; m < e; ++m) {
              var y = m / e;
              var v = (m + 1) / e;
              var f = i.x + r * y;
              var w = i.y + h * y;
              var x = a.x + l * y;
              var b = a.y + d * y;
              var A = i.x + r * v;
              var k = i.y + h * v;
              var S = a.x + l * v;
              var E = a.y + d * v;
              for (var C = 0; C < s; ++C) {
                var T = C / s;
                var L = (C + 1) / s;
                var M = S - A;
                var P = E - k;
                var D = f + (x - f) * T;
                var z = w + (b - w) * T;
                var I = f + (x - f) * L;
                var F = w + (b - w) * L;
                var R = A + M * L;
                var _ = k + P * L;
                var N = A + M * T;
                var B = k + P * T;
                var O = T * p;
                var U = L * p;
                var H = y * g;
                var q = v * g;
                t.push(new u(new c.A(D, z), new c.A(R, _), new c.A(N, B), new c.A(O, H), new c.A(U, q), new c.A(O, q)));
                t.push(new u(new c.A(D, z), new c.A(I, F), new c.A(R, _), new c.A(O, H), new c.A(U, H), new c.A(U, q)));
              }
            }
            return t;
          };
          this.drawTriangle = (t, e, s, i, a, n, o, r, h, l, c, d, u) => {
            t.save();
            t.beginPath();
            t.moveTo(e, s);
            t.lineTo(i, a);
            t.lineTo(n, o);
            t.closePath();
            t.clip();
            var p = r * (u - c) - l * u + d * c + (l - d) * h;
            if (p !== 0) {
              var g = -(h * (n - i) - c * n + u * i + (c - u) * e) / p;
              var m = (c * o + h * (a - o) - u * a + (u - c) * s) / p;
              var y = (r * (n - i) - l * n + d * i + (l - d) * e) / p;
              var v = -(l * o + r * (a - o) - d * a + (d - l) * s) / p;
              var f = (r * (u * i - c * n) + h * (l * n - d * i) + (d * c - l * u) * e) / p;
              var w = (r * (u * a - c * o) + h * (l * o - d * a) + (d * c - l * u) * s) / p;
              t.transform(g, m, y, v, f, w);
              t.drawImage(this.patch, 0, 0);
              t.restore();
            }
          };
          this.renderControls = () => {
            if (!this.stage || !this.stage.fresco || this.stage.supressRender) {
              return;
            }
            this.ctx.clearRect(0, 0, this.raster.width, this.raster.height);
            if (d.Ay.isHDPI) {
              this.ctx.lineWidth = 2;
            } else {
              this.ctx.lineWidth = 1;
              this.ctx.translate(0.5, 0.5);
            }
            this.ctx.strokeStyle = h.q5;
            this.ctx.fillStyle = h.q5;
            const t = this.stage.translateFrescoToRaster(this.offset ? this.TL.neg(this.offset) : this.TL);
            const e = this.stage.translateFrescoToRaster(this.offset ? this.TR.neg(this.offset) : this.TR);
            const s = this.stage.translateFrescoToRaster(this.offset ? this.BL.neg(this.offset) : this.BL);
            const i = this.stage.translateFrescoToRaster(this.offset ? this.BR.neg(this.offset) : this.BR);
            this.ctx.beginPath();
            this.ctx.moveTo(t.x, t.y);
            this.ctx.lineTo(e.x - 1, e.y);
            this.ctx.lineTo(i.x - 1, i.y - 1);
            this.ctx.lineTo(s.x, s.y - 1);
            this.ctx.lineTo(t.x, t.y);
            this.ctx.closePath();
            this.ctx.stroke();
            this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            this.ctx.fillStyle = h.bi;
            let a = 8;
            if (d.Ay.isHDPI) {
              a = 16;
              this.ctx.lineWidth = 3;
            } else {
              this.ctx.lineWidth = 1.5;
            }
            if (!this.isDown || !this.ss || this.ss === this.TL) {
              this.ctx.beginPath();
              this.ctx.arc(t.x, t.y, 16, 0, Math.PI * 2, false);
              this.ctx.closePath();
              this.ctx.fill();
              this.ctx.stroke();
            }
            if (!this.isDown || !this.ss || this.ss === this.BL) {
              this.ctx.beginPath();
              this.ctx.arc(s.x, s.y, 16, 0, Math.PI * 2, false);
              this.ctx.closePath();
              this.ctx.fill();
              this.ctx.stroke();
            }
            if (!this.isDown || !this.ss || this.ss === this.TR) {
              this.ctx.beginPath();
              this.ctx.arc(e.x, e.y, 16, 0, Math.PI * 2, false);
              this.ctx.closePath();
              this.ctx.fill();
              this.ctx.stroke();
            }
            if (!this.isDown || !this.ss || this.ss === this.BR) {
              this.ctx.beginPath();
              this.ctx.arc(i.x, i.y, 16, 0, Math.PI * 2, false);
              this.ctx.closePath();
              this.ctx.fill();
              this.ctx.stroke();
            }
          };
          this.isControl = t => {
            let e = 32 / this.stage.zoom;
            let s = e / 2;
            if (h.HO(this.TL.x - s, this.TL.y - s, e, e, t.x, t.y)) {
              this.ss = this.TL;
              return true;
            } else if (h.HO(this.TR.x - s, this.TR.y - s, e, e, t.x, t.y)) {
              this.ss = this.TR;
              return true;
            } else if (h.HO(this.BL.x - s, this.BL.y - s, e, e, t.x, t.y)) {
              this.ss = this.BL;
              return true;
            } else if (h.HO(this.BR.x - s, this.BR.y - s, e, e, t.x, t.y)) {
              this.ss = this.BR;
              return true;
            } else {
              this.ss = undefined;
              return false;
            }
          };
          this.isInside = t => this.scratch.ctx.getImageData(t.x, t.y, 1, 1).data[3] > 0;
          this.choice = async () => {
            const t = await new p.A("Apply", "Do you want to apply the distort?", "Yes", "No", "Cancel").init();
            if (t !== undefined) {
              if (t) {
                this.apply();
              } else {
                this.cancel();
              }
            }
          };
          this.apply = async () => {
            if (!this.oTL.equalTo(this.TL) || !this.oTR.equalTo(this.TR) || !this.oBL.equalTo(this.BL) || !this.oBR.equalTo(this.BR)) {
              let t = l.A.fromPoints([this.TL, this.TR, this.BL, this.BR]);
              this.split = 64;
              this.offset = t.topLeft();
              this.scratch.setTarget(this.selected.id, this.clone ? t : new l.A(0, 0, t.width, t.height), this.clone ? "over" : "replace");
              this.renderPreview();
              const e = this.selected.rect.clone();
              const s = h.$z(this.clone ? this.clone : this.selected.canvas);
              if (this.clone) {
                this.selected.extendCanvas(t);
                this.scratch.drawToLayer(this.selected);
              } else {
                this.selected.switchCanvas(this.scratch.canvas, t);
              }
              this.selected.render();
              this.stage.history.add({
                type: "bitmapSwitch",
                kind: "distort",
                layer: this.selected,
                rect: e,
                canvas: s
              });
              this.callback(!!this.clone);
              return;
            }
            this.cancel();
          };
          this.cancel = () => {
            if (this.clone) {
              this.selected.canvas = this.clone;
            }
            this.callback();
          };
          this.cleanUp = () => {
            var t;
            var e;
            if (this.modal) {
              this.ctx.clearRect(0, 0, this.raster.width, this.raster.width);
              if (this.stage && this.stage.fresco) {
                this.stage.fresco.removeScratch();
                window.requestAnimationFrame(this.stage.render);
              }
              this.stage.coating.wake();
              this.modal.removeEventListener("pointerdown", this.pointerDown, false);
              this.modal.removeEventListener("pointermove", this.pointerMove, false);
              this.modal.removeEventListener("pointerup", this.pointerUp, false);
              this.modal.removeEventListener("dblclick", this.choice, false);
              this.modal.removeEventListener("wheel", this.stage.coating.mouseWheel);
              this.modal.removeEventListener("contextmenu", t => {
                t.preventDefault();
              }, false);
              document.removeEventListener("keydown", this.keyDown, false);
              document.removeEventListener("keyup", this.keyUp, false);
              document.removeEventListener("viewport-render", this.renderLow);
              if (this.renderFrame) {
                window.cancelAnimationFrame(this.renderFrame);
                this.renderFrame = undefined;
              }
              (0, i.Ay)("distort-apply").removeEventListener("click", this.apply, false);
              (0, i.Ay)("distort-cancel").removeEventListener("click", this.cancel, false);
              (0, i.Ay)("distort-x1").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-y1").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-x2").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-y2").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-x3").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-y3").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-x4").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("distort-y4").removeEventListener("input", this.inputPosition, false);
              if ((t = this.modal) !== null && t !== undefined) {
                t.remove();
              }
              this.modal = undefined;
              if ((e = this.options) !== null && e !== undefined) {
                e.remove();
              }
              this.options = undefined;
              this.scratch = undefined;
              this.raster = undefined;
              this.stage = undefined;
              this.ctx = undefined;
            }
          };
          this.stage = t;
          this.callback = e;
          this.ctx = t.coating.ctx;
          this.raster = t.coating.raster;
          if (this.stage.fresco && this.stage.fresco.isSelectedImageWithCanvas()) {
            this.pointers = new Array();
            this.selected = this.stage.fresco.getSelected();
            if (this.stage.fresco.hasSelection()) {
              this.clone = h.oM(this.selected.canvas);
              const [t, e] = this.stage.primeCut();
              if (!t) {
                this.callback();
                return;
              }
              this.patch = t;
              this.oTL = e.topLeft();
              this.oTR = e.topRight();
              this.oBL = e.bottomLeft();
              this.oBR = e.bottomRight();
            } else {
              this.patch = this.selected.canvas;
              this.oTL = this.selected.rect.topLeft();
              this.oTR = this.selected.rect.topRight();
              this.oBL = this.selected.rect.bottomLeft();
              this.oBR = this.selected.rect.bottomRight();
            }
            this.stage.coating.sleep();
            this.offset = new c.A();
            this.TL = this.oTL.clone();
            this.TR = this.oTR.clone();
            this.BL = this.oBL.clone();
            this.BR = this.oBR.clone();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, new l.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), this.clone ? "over" : "replace");
            this.modal = (0, i.T)("div", {
              id: "modal-distort",
              className: "modal"
            });
            (0, i.Ay)("workspace").appendChild(this.modal);
            this.options = (0, i.T)("div", {
              id: "distort",
              className: "option-float option active"
            }, (0, i.T)("div", {
              className: "option-icon"
            }, (0, i.T)("img", {
              src: "assets/images/tool/distort.svg",
              className: "ic"
            })), (0, i.T)("div", {
              id: "distort-settings"
            }, (0, i.T)("label", {
              className: "tab-10"
            }, "Left top:"), (0, i.T)("input", {
              type: "number",
              id: "distort-x1"
            }), (0, i.T)("label", {
              className: "tab-5"
            }, "x"), (0, i.T)("input", {
              type: "number",
              id: "distort-y1"
            }), (0, i.T)("label", {
              className: "tab-20"
            }, "Right top:"), (0, i.T)("input", {
              type: "number",
              id: "distort-x2"
            }), (0, i.T)("label", {
              className: "tab-5"
            }, "x"), (0, i.T)("input", {
              type: "number",
              id: "distort-y2"
            }), (0, i.T)("label", {
              className: "tab-20"
            }, "Left bottom:"), (0, i.T)("input", {
              type: "number",
              id: "distort-x3"
            }), (0, i.T)("label", {
              className: "tab-5"
            }, "x"), (0, i.T)("input", {
              type: "number",
              id: "distort-y3"
            }), (0, i.T)("label", {
              className: "tab-20"
            }, "Right bottom:"), (0, i.T)("input", {
              type: "number",
              id: "distort-x4"
            }), (0, i.T)("label", {
              className: "tab-5"
            }, "x"), (0, i.T)("input", {
              type: "number",
              id: "distort-y4"
            }), (0, i.T)("a", {
              className: "button outline tab-30",
              id: "distort-cancel"
            }, (0, i.T)("img", {
              src: "assets/images/icon/close.svg",
              width: 10,
              height: 10,
              className: "ic"
            }), (0, r.A)("cancel")), (0, i.T)("a", {
              className: "button outline tab-10",
              id: "distort-apply"
            }, (0, i.T)("img", {
              src: "assets/images/icon/check.svg",
              width: 16,
              height: 16,
              className: "ic"
            }), (0, r.A)("apply"))));
            (0, i.Ay)("workspace").appendChild(this.options);
            (0, i.Ay)("distort-apply").addEventListener("click", this.apply, false);
            (0, i.Ay)("distort-cancel").addEventListener("click", this.cancel, false);
            (0, i.Ay)("distort-x1").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-y1").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-x2").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-y2").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-x3").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-y3").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-x4").addEventListener("input", this.inputPosition, false);
            (0, i.Ay)("distort-y4").addEventListener("input", this.inputPosition, false);
            this.split = 28;
            this.modal.addEventListener("pointerdown", this.pointerDown, false);
            this.modal.addEventListener("pointermove", this.pointerMove, false);
            this.modal.addEventListener("pointerup", this.pointerUp, false);
            this.modal.addEventListener("dblclick", this.choice, false);
            this.modal.addEventListener("wheel", this.stage.coating.mouseWheel, {
              passive: false
            });
            this.modal.addEventListener("contextmenu", t => {
              t.preventDefault();
            }, false);
            document.addEventListener("keydown", this.keyDown, false);
            document.addEventListener("keyup", this.keyUp, false);
            document.addEventListener("viewport-render", this.renderLow);
            this.requestRender();
            this.updateInputs();
          } else {
            this.callback();
          }
        }
      }
      var m = s(3517);
      var y = s(4976);
      var v = s(1535);
      class f {
        constructor(t, e) {
          this.addPointer = t => {
            this.pointers.push(t);
            this.modal.setPointerCapture(t);
          };
          this.removePointer = t => {
            for (let e = 0; e < this.pointers.length; e++) {
              if (this.pointers[e] === t) {
                this.pointers.splice(e, 1);
                break;
              }
            }
            this.modal.releasePointerCapture(t);
          };
          this.pointerDown = t => {
            t.stopPropagation();
            if (this.stage.coating.override || t.button > 0) {
              return;
            }
            this.isDown = true;
            this.addPointer(t.pointerId);
            let e = new c.A(t.offsetX - this.stage.canvas.offsetLeft, t.offsetY - this.stage.canvas.offsetTop);
            if (!h.HO(0, 0, this.raster.offsetWidth, this.raster.offsetHeight, e.x, e.y)) {
              this.choice();
              return;
            }
            const s = d.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length === 1) {
              this.down(new c.A(e.x * s, e.y * s));
            }
          };
          this.pointerMove = t => {
            t.stopPropagation();
            const e = d.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length < 2) {
              this.move(new c.A((t.offsetX - this.stage.canvas.offsetLeft) * e, (t.offsetY - this.stage.canvas.offsetTop) * e));
            }
          };
          this.pointerUp = t => {
            t.stopPropagation();
            this.isDown = false;
            this.removePointer(t.pointerId);
            const e = d.Ay.isHDPI ? 2 : 1;
            this.up(new c.A((t.offsetX - this.stage.canvas.offsetLeft) * e, (t.offsetY - this.stage.canvas.offsetTop) * e));
          };
          this.inputPosition = t => {
            let e = (0, i.Ay)("transform-top").value;
            let s = (0, i.Ay)("transform-left").value;
            let a = new c.A(Math.round(Number(s)), Math.round(Number(e)));
            this.layer.rect.x = a.x;
            this.layer.rect.y = a.y;
            this.renderAll();
          };
          this.inputSize = t => {
            if (t.currentTarget.id == "transform-width") {
              let t = (0, i.Ay)("transform-width").value;
              let e = Number.isNaN(Number(t)) ? 50 : Math.round(Number(t));
              this.layer.setWidth(e, this.orgRect.getAspect());
              (0, i.Ay)("transform-height").value = Math.round(this.layer.rect.height).toString();
            } else {
              let t = (0, i.Ay)("transform-height").value;
              let e = Number.isNaN(Number(t)) ? 50 : Math.round(Number(t));
              this.layer.setHeight(e, this.orgRect.getAspect());
              (0, i.Ay)("transform-width").value = Math.round(this.layer.rect.width).toString();
            }
            this.renderAll();
          };
          this.updateInputs = () => {
            (0, i.Ay)("transform-width").value = Math.round(this.layer.rect.width).toString();
            (0, i.Ay)("transform-height").value = Math.round(this.layer.rect.height).toString();
            (0, i.Ay)("transform-top").value = Math.round(this.layer.rect.y).toString();
            (0, i.Ay)("transform-left").value = Math.round(this.layer.rect.x).toString();
            this.rotation.setValue(this.layer.rect.rotation);
          };
          this.keyDown = t => {
            if (t.key === "ArrowUp" || t.key === "ArrowDown" || t.key === "ArrowLeft" || t.key === "ArrowRight") {
              let e = t.shiftKey ? 10 : 1;
              let s = t.key === "ArrowLeft" || t.key === "ArrowRight" ? t.key === "ArrowLeft" ? -e : e : 0;
              let i = t.key === "ArrowUp" || t.key === "ArrowDown" ? t.key === "ArrowUp" ? -e : e : 0;
              this.step(s, i);
            }
            if (t.key !== "Escape") {
              if (t.key !== "Enter") {
                if (t.key !== "Shift") {
                  if (t.key === " ") {
                    this.stage.coating.setPan(this.modal);
                    t.preventDefault();
                    return;
                  } else {
                    return undefined;
                  }
                }
                this.isShiftDown = true;
              } else {
                this.apply();
              }
            } else {
              this.cancel();
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
            }
            if (t.key === " ") {
              this.stage.coating.removePan(this.modal);
            }
          };
          this.down = t => {
            if (this.isControl(t)) {
              this.isDown = true;
              this.downControl = this.layer.rect.topLeft();
              this.downPoint = this.stage.translateRasterToFresco(t);
              if (this.method === "rotate") {
                let t = this.layer.rect.center();
                this.downRotation = 180 / Math.PI * Math.atan2(this.downPoint.y - t.y, this.downPoint.x - t.x) - this.layer.rect.rotation;
              } else if (this.method !== "move") {
                const t = this.layer.rect;
                const e = t.center();
                let s;
                let i;
                this.matrix.reset();
                this.matrix.translate(e);
                this.matrix.rotateDegree(360 - this.layer.rect.rotation);
                this.matrix.invert();
                switch (this.method) {
                  case "nw-resize":
                    i = t.topLeft();
                    s = t.bottomRight();
                    break;
                  case "n-resize":
                    i = new c.A(e.x, t.y);
                    s = new c.A(e.x, t.bottom());
                    break;
                  case "ne-resize":
                    i = t.topRight();
                    s = t.bottomLeft();
                    break;
                  case "e-resize":
                    i = new c.A(t.right(), e.y);
                    s = new c.A(t.x, e.y);
                    break;
                  case "se-resize":
                    i = t.bottomRight();
                    s = t.topLeft();
                    break;
                  case "s-resize":
                    i = new c.A(e.x, t.bottom());
                    s = new c.A(e.x, t.y);
                    break;
                  case "sw-resize":
                    i = t.bottomLeft();
                    s = t.topRight();
                    break;
                  case "w-resize":
                    i = new c.A(t.x, e.y);
                    s = new c.A(t.right(), e.y);
                }
                this.downControl = this.matrix.transformPoint(i).add(e);
                this.downAnchor = this.matrix.transformPoint(s).add(e);
              }
            } else {
              this.choice();
            }
          };
          this.getAnchor = () => {
            const t = this.layer.rect;
            const e = t.center();
            let s;
            this.matrix.reset();
            this.matrix.translate(e);
            this.matrix.rotateDegree(360 - this.layer.rect.rotation);
            this.matrix.invert();
            switch (this.method) {
              case "nw-resize":
                s = t.bottomRight();
                break;
              case "n-resize":
                s = new c.A(e.x, t.bottom());
                break;
              case "ne-resize":
                s = t.bottomLeft();
                break;
              case "e-resize":
                s = new c.A(t.x, e.y);
                break;
              case "se-resize":
                s = t.topLeft();
                break;
              case "s-resize":
                s = new c.A(e.x, t.y);
                break;
              case "sw-resize":
                s = t.topRight();
                break;
              case "w-resize":
                s = new c.A(t.right(), e.y);
            }
            return this.matrix.transformPoint(s).add(e);
          };
          this.move = t => {
            if (!this.isDown) {
              this.isControl(t);
              return;
            }
            let e = this.stage.translateRasterToFresco(t);
            if (this.method === "move") {
              if (this.isShiftDown) {
                const t = Math.abs(this.downPoint.x - e.x);
                const s = Math.abs(this.downPoint.y - e.y);
                if (t > 4 || s > 4) {
                  if (t < s) {
                    e.x = this.downPoint.x;
                    this.method = "vertical";
                  } else {
                    e.y = this.downPoint.y;
                    this.method = "horizontal";
                  }
                }
              }
              this.layer.rect.x = Math.round(this.downControl.x + (e.x - this.downPoint.x));
              this.layer.rect.y = Math.round(this.downControl.y + (e.y - this.downPoint.y));
              this.checkGuides(this.layer);
            } else if (this.method === "vertical") {
              if (!this.isShiftDown) {
                this.method = "move";
              }
              this.layer.rect.y = Math.round(this.downControl.y + (e.y - this.downPoint.y));
              this.checkGuides(this.layer);
            } else if (this.method === "horizontal") {
              if (!this.isShiftDown) {
                this.method = "move";
              }
              this.layer.rect.x = Math.round(this.downControl.x + (e.x - this.downPoint.x));
              this.checkGuides(this.layer);
            } else if (this.method === "rotate") {
              const s = this.layer.rect.center();
              let i = 180 / Math.PI * Math.atan2(e.y - s.y, e.x - s.x) - this.downRotation;
              if (this.isShiftDown) {
                i = Math.round(i / 11.25) * 11.25;
              }
              if (i < 0) {
                i += 360;
              } else if (i >= 360) {
                i -= 360;
              }
              this.layer.rect.rotation = i;
              this.updateRotatingCursor(t);
            } else {
              let t = e.neg(this.downPoint);
              let s = this.downAnchor;
              let i = this.downControl.add(t);
              if (this.layer.rect.rotation !== 0) {
                const t = new c.A((s.x + i.x) / 2, (s.y + i.y) / 2);
                this.matrix.reset();
                this.matrix.translate(t);
                this.matrix.rotateDegree(this.layer.rect.rotation);
                this.matrix.invert();
                i = this.matrix.transformPoint(i).add(t);
                s = this.matrix.transformPoint(s).add(t);
              }
              switch (this.method) {
                case "nw-resize":
                  this.layer.calculate(i, s, this.isShiftDown ? 0 : this.orgRect.getAspect());
                  break;
                case "ne-resize":
                  this.layer.calculate(new c.A(s.x, i.y), new c.A(i.x, s.y), this.isShiftDown ? 0 : this.orgRect.getAspect());
                  break;
                case "sw-resize":
                  this.layer.calculate(new c.A(i.x, s.y), new c.A(s.x, i.y), this.isShiftDown ? 0 : this.orgRect.getAspect());
                  break;
                case "se-resize":
                  this.layer.calculate(s, i, this.isShiftDown ? 0 : this.orgRect.getAspect());
                  break;
                case "n-resize":
                  this.layer.rect.y = i.y;
                  this.layer.rect.height = s.y - i.y;
                  if (this.layer.rect.height < 10) {
                    this.layer.rect.height = 10;
                  }
                  break;
                case "s-resize":
                  this.layer.rect.y = s.y;
                  this.layer.rect.height = i.y - s.y;
                  if (this.layer.rect.height < 10) {
                    this.layer.rect.height = 10;
                  }
                  break;
                case "w-resize":
                  this.layer.rect.x = i.x;
                  this.layer.rect.width = s.x - i.x;
                  if (this.layer.rect.width < 10) {
                    this.layer.rect.width = 10;
                  }
                  break;
                case "e-resize":
                  this.layer.rect.x = s.x;
                  this.layer.rect.width = i.x - s.x;
                  if (this.layer.rect.width < 10) {
                    this.layer.rect.width = 10;
                  }
              }
              let a = this.downAnchor.neg(this.getAnchor());
              this.layer.rect.x += a.x;
              this.layer.rect.y += a.y;
            }
            this.updateInputs();
            this.renderAll();
          };
          this.up = t => {
            this.guides = undefined;
            this.isDown = false;
            this.renderAll();
          };
          this.step = (t, e) => {
            this.layer.rect.x += t;
            this.layer.rect.y += e;
            this.updateInputs();
            this.renderAll();
          };
          this.renderAll = () => {
            window.requestAnimationFrame(() => {
              this.stage.render();
              this.render();
            });
          };
          this.render = () => {
            if (!this.ctx) {
              return;
            }
            this.ctx.clearRect(0, 0, this.raster.width, this.raster.height);
            if (d.Ay.isHDPI) {
              this.ctx.lineWidth = 2;
            } else {
              this.ctx.lineWidth = 1;
              this.ctx.translate(0.5, 0.5);
            }
            this.ctx.strokeStyle = h.q5;
            this.ctx.fillStyle = h.q5;
            let t = this.stage.getLayerLocationRect(this.layer);
            if (t) {
              if (this.layer.rect.rotation !== 0) {
                let e = t.center();
                this.ctx.translate(e.x, e.y);
                this.ctx.rotate(this.layer.rect.rotation * Math.PI / 180);
                t.x -= e.x;
                t.y -= e.y;
              }
              this.ctx.beginPath();
              this.ctx.moveTo(t.x, t.y);
              this.ctx.lineTo(t.right() - 1, t.y);
              this.ctx.lineTo(t.right() - 1, t.bottom() - 1);
              this.ctx.lineTo(t.x, t.bottom() - 1);
              this.ctx.lineTo(t.x, t.y);
              this.ctx.closePath();
              this.ctx.stroke();
              if (!this.isDown) {
                if (this.layer.rect.rotation === 0) {
                  this.ctx.setTransform(1, 0, 0, 1, 0, 0);
                }
                var e = t.center();
                e.x = Math.round(e.x);
                e.y = Math.round(e.y);
                this.ctx.fillRect(t.x - 6, t.y - 6, 12, 12);
                this.ctx.fillRect(t.x - 6, t.y + t.height - 6, 12, 12);
                this.ctx.fillRect(t.x + t.width - 6, t.y - 6, 12, 12);
                this.ctx.fillRect(t.x + t.width - 6, t.y + t.height - 6, 12, 12);
                if (t.width > 100) {
                  this.ctx.fillRect(e.x - 12, t.y - 5, 24, 8);
                  this.ctx.fillRect(e.x - 12, t.y + t.height - 3, 24, 8);
                }
                if (t.height > 100) {
                  this.ctx.fillRect(t.x - 5, e.y - 12, 8, 24);
                  this.ctx.fillRect(t.x + t.width - 3, e.y - 12, 8, 24);
                }
                this.ctx.fillStyle = h.bi;
                this.ctx.fillRect(t.x - 5, t.y - 5, 10, 10);
                this.ctx.fillRect(t.x - 5, t.y + t.height - 5, 10, 10);
                this.ctx.fillRect(t.x + t.width - 5, t.y - 5, 10, 10);
                this.ctx.fillRect(t.x + t.width - 5, t.y + t.height - 5, 10, 10);
                if (t.width > 100) {
                  this.ctx.fillRect(e.x - 11, t.y - 4, 22, 6);
                  this.ctx.fillRect(e.x - 11, t.y + t.height - 2, 22, 6);
                }
                if (t.height > 100) {
                  this.ctx.fillRect(t.x - 4, e.y - 11, 6, 22);
                  this.ctx.fillRect(t.x + t.width - 2, e.y - 11, 6, 22);
                }
              }
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              if (d.Ay.showGuides && this.guides && this.guides.length > 0) {
                if (!d.Ay.isHDPI) {
                  this.ctx.translate(0.5, 0.5);
                }
                this.ctx.strokeStyle = h.Al;
                this.guides.forEach(t => {
                  this.ctx.beginPath();
                  this.ctx.moveTo(t.start.x, t.start.y);
                  this.ctx.lineTo(t.end.x, t.end.y);
                  this.ctx.closePath();
                  this.ctx.stroke();
                });
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              }
            }
          };
          this.isControl = t => {
            const e = this.hitSize * 2;
            const s = this.stage.getLayerLocationRect(this.layer);
            if (!s) {
              return;
            }
            if (this.layer.rect.rotation !== 0) {
              let e = s.center();
              this.matrix.reset();
              this.matrix.translate(e);
              this.matrix.rotateDegree(this.layer.rect.rotation);
              this.matrix.invert();
              t = this.matrix.transformPoint(t).add(e);
            }
            if (h.HO(s.x - this.hitSize, s.y - this.hitSize, e, e, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(315);
              this.method = "nw-resize";
              return true;
            }
            if (h.HO(s.x + s.width - this.hitSize, s.y - this.hitSize, e, e, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(45);
              this.method = "ne-resize";
              return true;
            }
            if (h.HO(s.x - this.hitSize, s.y + s.height - this.hitSize, e, e, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(225);
              this.method = "sw-resize";
              return true;
            }
            if (h.HO(s.x + s.width - this.hitSize, s.y + s.height - this.hitSize, e, e, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(135);
              this.method = "se-resize";
              return true;
            }
            const i = s.width / 2;
            const a = s.height / 2;
            if (h.HO(s.x + i - 30, s.y - this.hitSize, 60, e, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(0);
              this.method = "n-resize";
              return true;
            } else if (h.HO(s.x + i - 30, s.y + s.height - this.hitSize, 60, e, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(180);
              this.method = "s-resize";
              return true;
            } else if (h.HO(s.x - this.hitSize, s.y + a - 30, e, 60, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(90);
              this.method = "w-resize";
              return true;
            } else if (h.HO(s.x + s.width - this.hitSize, s.y + a - 30, e, 60, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(270);
              this.method = "e-resize";
              return true;
            } else if (h.HO(s.x, s.y, s.width, s.height, t.x, t.y)) {
              this.modal.style.cursor = "move";
              this.method = "move";
              return true;
            } else if (h.HO(s.x + s.width - 100, s.y - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(45, false);
              this.method = "rotate";
              return true;
            } else if (h.HO(s.x + s.width - 100, s.y + s.height - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(135, false);
              this.method = "rotate";
              return true;
            } else if (h.HO(s.x - 100, s.y + s.height - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(225, false);
              this.method = "rotate";
              return true;
            } else if (h.HO(s.x - 100, s.y - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(315, false);
              this.method = "rotate";
              return true;
            } else {
              this.modal.style.cursor = this.method = "unset";
              return false;
            }
          };
          this.updateRotatingCursor = t => {
            const e = this.stage.getLayerLocationRect(this.layer);
            if (!e) {
              return;
            }
            let s = e.center();
            this.matrix.reset();
            this.matrix.translate(s);
            this.matrix.rotate(this.layer.rect.rotation * Math.PI / 180);
            this.matrix.invert();
            t = this.matrix.transformPoint(t).add(s);
            if (h.HO(e.x + e.width - 100, e.y - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(45, false);
            } else if (h.HO(e.x + e.width - 100, e.y + e.height - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(135, false);
            } else if (h.HO(e.x - 100, e.y + e.height - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(225, false);
            } else if (h.HO(e.x - 100, e.y - 100, 200, 200, t.x, t.y)) {
              this.modal.style.cursor = this.getRotatedCursor(315, false);
            }
          };
          this.getRotatedCursor = (t, e = true) => {
            const s = ["n", "ne", "e", "se", "s", "sw", "w", "nw"];
            let i = t + this.layer.rect.rotation;
            if (i < 0) {
              i += 360;
            }
            if (i > 360) {
              i -= 360;
            }
            i += 22.5;
            let a = 7;
            while (a > 0 && (!(i > a * 45) || !(i < 360))) {
              a--;
            }
            if (e) {
              return s[a] + "-resize";
            } else {
              return "url('/img/cursor/rotate-" + s[a] + ".svg') 16 16, auto";
            }
          };
          this.checkGuides = t => {
            if (d.Ay.showGuides || d.Ay.snapToGuides) {
              this.guides = [];
              let e = d.Ay.snapToGuides;
              let s = 5 / this.stage.zoom;
              let i = this.stage.fresco.width / 2;
              let a = this.stage.fresco.height / 2;
              let n = t.rect;
              let o = n.center();
              let r = new l.A(this.stage.offset.x, this.stage.offset.y, Math.round(this.stage.fresco.width * this.stage.zoom), Math.round(this.stage.fresco.height * this.stage.zoom));
              if (o.x < i + s && o.x > i - s) {
                if (e) {
                  n.x = Math.round(i - n.width / 2);
                }
                this.guides.push(new y.A(new c.A(Math.round(r.center().x), r.y), new c.A(Math.round(r.center().x), r.bottom() - 1)));
              }
              if (o.y < a + s && o.y > a - s) {
                if (e) {
                  n.y = Math.round(a - n.height / 2);
                }
                this.guides.push(new y.A(new c.A(r.x, Math.round(r.center().y)), new c.A(r.right() - 1, Math.round(r.center().y))));
              }
              if (n.x < 0 + s && n.x > 0 - s) {
                if (e) {
                  n.x = 0;
                }
                this.guides.push(new y.A(new c.A(r.x, r.y), new c.A(r.x, r.bottom() - 1)));
              }
              if (n.right() < this.stage.fresco.width + s && n.right() > this.stage.fresco.width - s) {
                if (e) {
                  n.moveRight(this.stage.fresco.width);
                }
                this.guides.push(new y.A(new c.A(r.right() - 1, r.y), new c.A(r.right() - 1, r.bottom() - 1)));
              }
              if (n.y < 0 + s && n.y > 0 - s) {
                if (e) {
                  n.y = 0;
                }
                this.guides.push(new y.A(new c.A(r.x, r.y), new c.A(r.right() - 1, r.y)));
              }
              if (n.bottom() < this.stage.fresco.height + s && n.bottom() > this.stage.fresco.height - s) {
                if (e) {
                  n.moveBottom(this.stage.fresco.height);
                }
                this.guides.push(new y.A(new c.A(r.x, r.bottom() - 1), new c.A(r.right() - 1, r.bottom() - 1)));
              }
            }
          };
          this.choice = async () => {
            const t = await new p.A("Apply", "Do you want to apply the transform?", "Yes", "No", "Cancel").init();
            if (t !== undefined) {
              if (t) {
                this.apply();
              } else {
                this.cancel();
              }
            }
          };
          this.apply = () => {
            if (this.clone) {
              if (!this.orgRect.equalTo(this.layer.rect)) {
                const t = this.stage.fresco.getSelected();
                const e = h.$z(this.clone);
                const s = t.rect.clone();
                if (this.layer.rect.rotation !== 0) {
                  this.layer.rect = this.layer.rect.getRotatedBounds();
                  this.layer.canvas = h.oc(this.layer.canvas, this.layer.rect.rotation, this.layer.rect);
                  this.layer.rect.rotation = 0;
                }
                t.extendCanvas(this.layer.rect);
                this.layer.drawToLayer(t);
                this.stage.history.add({
                  type: "bitmapSwitch",
                  kind: "transform",
                  layer: t,
                  rect: s,
                  canvas: e
                });
                this.layer.render();
                this.callback(true);
                return;
              }
              this.stage.fresco.getSelected().canvas = this.clone;
            } else if (this.layer.wouldApplyTransform()) {
              const t = h.$z(this.layer.canvas);
              const e = h.$z(this.layer.mask);
              this.layer.applyTransform();
              this.stage.history.add({
                type: "arrange",
                kind: "transform",
                layer: this.layer,
                action: {
                  type: "trans",
                  data: t,
                  mask: e,
                  rect: this.orgRect
                }
              });
            } else if (this.layer.rect.x !== this.orgRect.x || this.layer.rect.y !== this.orgRect.y) {
              this.stage.history.add({
                type: "arrange",
                kind: "arrange",
                layer: this.layer,
                action: {
                  type: "rect",
                  rect: this.orgRect
                }
              });
            }
            this.callback();
          };
          this.cancel = () => {
            if (this.clone) {
              this.stage.fresco.getSelected().canvas = this.clone;
            }
            this.layer.rect = this.orgRect;
            this.callback();
          };
          this.cleanUp = () => {
            if (this.modal) {
              this.ctx.clearRect(0, 0, this.raster.width, this.raster.width);
              if (this.stage && this.stage.fresco) {
                this.stage.fresco.removeScratch();
                window.requestAnimationFrame(this.stage.render);
              }
              this.stage.coating.wake();
              for (let t = 0; t < this.pointers.length; t++) {
                this.modal.releasePointerCapture(this.pointers[t]);
              }
              this.modal.removeEventListener("pointerdown", this.pointerDown, false);
              this.modal.removeEventListener("pointermove", this.pointerMove, false);
              this.modal.removeEventListener("pointerup", this.pointerUp, false);
              this.modal.removeEventListener("dblclick", this.choice, false);
              this.modal.removeEventListener("wheel", this.stage.coating.mouseWheel);
              this.modal.removeEventListener("contextmenu", t => {
                t.preventDefault();
              }, false);
              document.removeEventListener("keydown", this.keyDown, false);
              document.removeEventListener("keyup", this.keyUp, false);
              document.removeEventListener("viewport-render", this.render);
              (0, i.Ay)("transform-apply").removeEventListener("click", this.apply, false);
              (0, i.Ay)("transform-cancel").removeEventListener("click", this.cancel, false);
              (0, i.Ay)("transform-width").removeEventListener("input", this.inputSize, false);
              (0, i.Ay)("transform-height").removeEventListener("input", this.inputSize, false);
              (0, i.Ay)("transform-top").removeEventListener("input", this.inputPosition, false);
              (0, i.Ay)("transform-left").removeEventListener("input", this.inputPosition, false);
              this.rotation.cleanUp();
              this.rotation = undefined;
              if (this.modal) {
                this.modal.remove();
                this.modal = undefined;
              }
              if (this.options) {
                this.options.remove();
                this.options = undefined;
              }
              this.layer = undefined;
              this.raster = undefined;
              this.stage = undefined;
              this.clone = undefined;
              this.ctx = undefined;
            }
          };
          this.stage = t;
          this.callback = e;
          this.ctx = t.coating.ctx;
          this.raster = t.coating.raster;
          if (!this.stage.fresco.isSelectedImageWithCanvas()) {
            this.callback();
            return;
          }
          this.pointers = new Array();
          const s = this.stage.fresco.getSelected();
          if (this.stage.fresco.hasSelection()) {
            this.clone = h.oM(s.canvas);
            const [t, e] = this.stage.primeCut();
            if (!t) {
              this.callback();
              return;
            }
            this.stage.coating.sleep();
            this.layer = this.stage.fresco.addScratch();
            this.layer.setTarget(s.id, e, "over", t);
            this.orgRect = e.clone();
          } else {
            this.layer = s;
            this.orgRect = this.layer.rect.clone();
          }
          this.modal = (0, i.T)("div", {
            id: "modal-transform",
            className: "modal"
          });
          (0, i.Ay)("workspace").appendChild(this.modal);
          this.options = (0, i.T)("div", {
            id: "transform",
            className: "option-float option active"
          }, (0, i.T)("div", {
            className: "option-icon"
          }, (0, i.T)("img", {
            src: "assets/images/tool/transform.svg",
            className: "ic"
          })), (0, i.T)("div", {
            id: "transform-settings"
          }, (0, i.T)("label", {
            className: "tab-10"
          }, "Left:"), (0, i.T)("input", {
            type: "number",
            id: "transform-left"
          }), (0, i.T)("label", {
            className: "tab-10"
          }, "Top:"), (0, i.T)("input", {
            type: "number",
            id: "transform-top"
          }), (0, i.T)("label", {
            className: "tab-10"
          }, "Width:"), (0, i.T)("input", {
            type: "number",
            id: "transform-width"
          }), (0, i.T)("label", {
            className: "tab-10"
          }, "Height:"), (0, i.T)("input", {
            type: "number",
            id: "transform-height"
          }), (0, i.T)("div", {
            className: "tab-20 range-box",
            id: "transform-rotation"
          }), (0, i.T)("a", {
            className: "button outline tab-30",
            id: "transform-cancel"
          }, (0, i.T)("img", {
            src: "assets/images/icon/close.svg",
            width: 10,
            height: 10,
            className: "ic"
          }), (0, r.A)("cancel")), (0, i.T)("a", {
            className: "button outline tab-10",
            id: "transform-apply"
          }, (0, i.T)("img", {
            src: "assets/images/icon/check.svg",
            width: 16,
            height: 16,
            className: "ic"
          }), (0, r.A)("apply"))));
          (0, i.Ay)("workspace").appendChild(this.options);
          this.rotation = new m.A("transform-rotation", {
            compact: true,
            label: "Rotation:",
            step: 0.1,
            range: [-180, 180],
            labelFormat: t => t.toFixed(1) + "°",
            labelParse: t => parseFloat(t),
            onChange: t => {
              this.layer.rect.rotation = t;
              this.renderAll();
            },
            onEnd: t => {
              this.updateInputs();
            }
          });
          (0, i.Ay)("transform-apply").addEventListener("click", this.apply, false);
          (0, i.Ay)("transform-cancel").addEventListener("click", this.cancel, false);
          (0, i.Ay)("transform-width").addEventListener("input", this.inputSize, false);
          (0, i.Ay)("transform-height").addEventListener("input", this.inputSize, false);
          (0, i.Ay)("transform-top").addEventListener("input", this.inputPosition, false);
          (0, i.Ay)("transform-left").addEventListener("input", this.inputPosition, false);
          this.matrix = new v.A();
          this.hitSize = d.Ay.isHDPI ? d.Ay.canTouch ? 44 : 32 : 16;
          this.modal.addEventListener("pointerdown", this.pointerDown, false);
          this.modal.addEventListener("pointermove", this.pointerMove, false);
          this.modal.addEventListener("pointerup", this.pointerUp, false);
          this.modal.addEventListener("dblclick", this.choice, false);
          this.modal.addEventListener("wheel", this.stage.coating.mouseWheel, {
            passive: false
          });
          this.modal.addEventListener("contextmenu", t => {
            t.preventDefault();
          }, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          document.addEventListener("viewport-render", this.render);
          window.requestAnimationFrame(this.render);
          this.updateInputs();
        }
      }
      var w = s(7578);
      class x extends a.A {
        constructor(t) {
          super("selectron", t);
          this.mode = undefined;
          this.moveLock = "none";
          this.proxy = t => {
            if (this.mode === "cut" && t.target !== this.stage.raster) {
              t.preventDefault();
              t.stopPropagation();
              t.stopImmediatePropagation();
              this.cleanCut();
              return;
            }
          };
          this.contextMenu = t => {
            t.preventDefault();
            t.stopPropagation();
            new w.Ay(new c.A(t.clientX, t.clientY), [new w.kt((0, r.A)("titleSelectAll"), () => {
              this.cleanCut();
              this.stage.selectionAll();
            }, "Ctrl + A"), new w.kt((0, r.A)("titleSelectPixels"), () => {
              this.cleanCut();
              this.stage.selectionPixels();
            }), new w.kt((0, r.A)("titleSelectDeselect"), () => {
              this.cleanCut();
              this.stage.selectionDeselect();
            }, "Ctrl + D"), new w.kt((0, r.A)("titleSelectInvert"), () => {
              this.cleanCut();
              this.stage.selectionInvert();
            }, "Ctrl + I"), new w.kt()]);
          };
          this.keyDown = t => {
            if (!this.isDown) {
              if (this.mode === "cut") {
                if (t.key === "Escape") {
                  this.stage.fresco.selection.offset = new c.A();
                  this.stage.fresco.getSelected().canvas = this.clone;
                  this.stage.fresco.removeScratch();
                  this.mode = undefined;
                  window.requestAnimationFrame(() => {
                    this.stage.coating.render();
                    this.stage.render();
                  });
                  return;
                }
                if (t.key === "Enter") {
                  this.cleanCut();
                  return;
                }
              }
              if (t.keyCode >= 37 && t.keyCode <= 40) {
                if (this.mode !== "cut") {
                  this.mode = t.ctrlKey ? "copy" : "cut";
                  this.clone = this.mode === "cut" ? h.oM(this.stage.fresco.getSelected().canvas) : undefined;
                  let [e, s] = this.stage.primeCut(this.mode === "cut");
                  if (!e || !s) {
                    this.mode = undefined;
                    return;
                  }
                  this.scratch = this.stage.fresco.addScratch();
                  this.scratch.setTarget(this.stage.fresco.getSelected().id, s, "over", e);
                }
                if (!this.scratch) {
                  return;
                }
                if (t.key === "ArrowUp" || t.key === "ArrowDown" || t.key === "ArrowLeft" || t.key === "ArrowRight") {
                  let e = t.shiftKey ? 10 : 1;
                  let s = t.key === "ArrowLeft" || t.key === "ArrowRight" ? t.key === "ArrowLeft" ? -e : e : 0;
                  let i = t.key === "ArrowUp" || t.key === "ArrowDown" ? t.key === "ArrowUp" ? -e : e : 0;
                  this.stage.fresco.selection.offset.x += s;
                  this.scratch.rect.x += s;
                  this.stage.fresco.selection.offset.y += i;
                  this.scratch.rect.y += i;
                }
                this.up();
              } else if (t.key !== "Shift") {
                if (t.key === "Control" && !this.isCtrlDown) {
                  this.isCtrlDown = true;
                  if (this.stage.raster.style.cursor !== "move") {
                    this.stage.raster.style.cursor = "url(\"assets/images/cursor/move-copy.svg\") 2 2, auto";
                  }
                }
              } else {
                this.isShiftDown = true;
              }
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
            }
            if (t.key === "Control" && this.isCtrlDown) {
              this.isCtrlDown = false;
              if (this.stage.raster.style.cursor === "url(\"assets/images/cursor/move-copy.svg\") 2 2, auto") {
                this.stage.raster.style.cursor = "url('/img/cursor/move-cut.svg') 2 2, auto";
              } else {
                this.stage.raster.style.cursor = "move";
              }
            }
          };
          this.down = t => {
            if (!this.stage.fresco || !this.stage.fresco.selection) {
              return;
            }
            this.isDown = true;
            let e = this.stage.translateRasterToFresco(t);
            if (this.mode !== "cut") {
              if (this.stage.fresco.isSelectedImageWithCanvas() && this.stage.fresco.selection.isSelected(e)) {
                this.mode = this.isCtrlDown ? "copy" : "cut";
                this.clone = this.mode === "cut" ? h.oM(this.stage.fresco.getSelected().canvas) : undefined;
                let [t, e] = this.stage.primeCut(this.mode === "cut");
                if (t && e) {
                  this.scratch = this.stage.fresco.addScratch();
                  this.scratch.setTarget(this.stage.fresco.getSelected().id, e, "over", t);
                } else {
                  this.mode = "move";
                }
              } else {
                this.mode = "move";
              }
            } else if (!this.stage.fresco.selection.isSelected(e.neg(this.stage.fresco.selection.offset)) || this.isCtrlDown) {
              this.cleanCut();
              this.down(t);
              return;
            }
            this.downPoint = e;
            this.downOffset = this.stage.fresco.selection.offset.clone();
            if (this.scratch) {
              this.downPos = this.scratch.rect.topLeft();
            }
            this.stage.coating.freeze(true);
          };
          this.move = (t, e) => {
            if (!this.isDown) {
              let e = this.stage.translateRasterToFresco(t).neg(this.stage.fresco.selection.offset);
              if (this.stage.fresco.selection.isSelected(e)) {
                if (this.isCtrlDown) {
                  this.stage.raster.style.cursor = "url('/img/cursor/move-copy.svg') 2 2, auto";
                } else {
                  this.stage.raster.style.cursor = "url('/img/cursor/move-cut.svg') 2 2, auto";
                }
                return;
              } else {
                this.stage.raster.style.cursor = "move";
                return;
              }
            }
            t = this.stage.translateRasterToFresco(t);
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
              this.stage.fresco.selection.offset.x = this.downOffset.x + Math.round(t.x - this.downPoint.x);
              if (this.scratch) {
                this.scratch.rect.x = this.downPos.x + Math.round(t.x - this.downPoint.x);
              }
            }
            if (this.moveLock !== "horizontal") {
              this.stage.fresco.selection.offset.y = this.downOffset.y + Math.round(t.y - this.downPoint.y);
              if (this.scratch) {
                this.scratch.rect.y = this.downPos.y + Math.round(t.y - this.downPoint.y);
              }
            }
            window.requestAnimationFrame(() => {
              this.stage.coating.render();
              this.stage.render();
            });
          };
          this.up = t => {
            this.isDown = false;
            this.moveLock = "none";
            this.stage.coating.freeze(false);
            if (this.mode === "copy") {
              const t = this.stage.fresco.getSelected();
              const a = t.rect.clone();
              const n = h.$z(this.clone || t.canvas);
              if ((this.stage.fresco.selection.offset.x !== 0 || this.stage.fresco.selection.offset.y !== 0 || this.clone) && (t.extendCanvas(this.scratch.rect), this.scratch.drawToLayer(t), this.stage.fresco.selection.offset.x !== 0 || this.stage.fresco.selection.offset.y !== 0)) {
                let o = h.$z(this.stage?.fresco?.selection?.mask);
                this.stage.fresco.selection.applyOffset();
                this.stage.history.add({
                  type: "selectionAndBitmapSwitch",
                  kind: this.clone ? "cut" : "copy",
                  selection: o,
                  layer: t,
                  canvas: n,
                  rect: a
                });
                if (!this.stage.fresco.selection.bounds) {
                  this.stage.fresco.removeSelection();
                  document.dispatchEvent(new CustomEvent("select-tool", {
                    detail: "arrange"
                  }));
                }
              }
              t.render();
              this.scratch.clear();
              this.clone = undefined;
              this.mode = undefined;
            } else if (this.mode === "move") {
              if (this.stage.fresco.selection.offset.x !== 0 || this.stage.fresco.selection.offset.y !== 0) {
                let t = h.$z(this.stage?.fresco?.selection?.mask);
                this.stage.fresco.selection.applyOffset();
                if (this.stage.fresco.selection.bounds) {
                  this.stage.history.add({
                    type: "selectionChange",
                    kind: "move",
                    selection: t
                  });
                } else {
                  this.stage.history.add({
                    type: "selectionChange",
                    kind: "deselect",
                    selection: t
                  });
                  this.stage.fresco.removeSelection();
                  document.dispatchEvent(new CustomEvent("select-tool", {
                    detail: "arrange"
                  }));
                }
              }
              this.mode = undefined;
            }
            window.requestAnimationFrame(() => {
              this.stage.coating.render();
              this.stage.render();
            });
          };
          this.cleanCut = () => {
            if (this.mode === "cut") {
              this.mode = "copy";
              this.up();
            }
          };
          this.cleanUp = () => {
            var t;
            this.cleanCut();
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.stage.raster.style.cursor = "unset";
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            document.removeEventListener("mousedown", this.proxy, true);
            this.removeDownListeners();
            this.removeMoveListeners();
            this.stage.raster.removeEventListener("contextmenu", this.contextMenu, true);
          };
          this.addDownListeners();
          this.addMoveListeners();
          this.stage.raster.style.cursor = "move";
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          document.addEventListener("mousedown", this.proxy, true);
          this.stage.raster.addEventListener("contextmenu", this.contextMenu, true);
        }
      }
      var b = s(7732);
      var A = s(3848);
      class k extends A.A {
        constructor(t) {
          super(t, (0, r.A)("titleToolSettings"));
          this.setContent(`\n            <section>\n                <input type="checkbox" id="arrange-setting-auto-select" checked />\n                <label class="top-10 switch" for="arrange-setting-auto-select">${(0, r.A)("autoSelectLayer")}<span></span></label>\n                <input type="checkbox" id="arrange-setting-guides" checked />\n                <label class="top-30 switch" for="arrange-setting-guides">${(0, r.A)("showGuides")}<span></span></label>\n                <input type="checkbox" id="arrange-settings-snap-to" checked />\n                <label class="top-10 switch" for="arrange-settings-snap-to">${(0, r.A)("snapToGuides")}<span></span></label>\n                <input type="checkbox" id="settings-smooth" checked />\n                <label class="top-10 switch" for="settings-smooth">${(0, r.A)("viewOBarSmooth")}<span></span></label>\n            </section>\n        `);
          const e = (0, i.Ay)("arrange-setting-auto-select");
          e.checked = d.Ay.autoSelect;
          e.onchange = () => (0, d.ZC)("autoSelect", e.checked);
          const s = (0, i.Ay)("arrange-setting-guides");
          s.checked = d.Ay.showGuides;
          s.onchange = () => (0, d.ZC)("showGuides", s.checked);
          const a = (0, i.Ay)("arrange-settings-snap-to");
          a.checked = d.Ay.snapToGuides;
          a.onchange = () => (0, d.ZC)("snapToGuides", a.checked);
          const n = (0, i.Ay)("settings-smooth");
          n.checked = d.Ay.smoothScaling;
          n.onchange = () => (0, d.ZC)("smoothScaling", n.checked);
        }
      }
      class S extends a.A {
        constructor(t, e) {
          super("arrange", t);
          this.isShiftDown = false;
          this.rasterize = () => {
            this.stage.rasterize();
          };
          this.selectionTransform = () => {
            this.mode = "TRANSFORM";
            this.layerSelect();
          };
          this.selectionDistort = () => {
            this.mode = "DISTORT";
            this.layerSelect();
          };
          this.transformChange = t => {
            var e;
            this.mode = "ARRANGE";
            if ((e = this.transform) !== null && e !== undefined) {
              e.cleanUp();
            }
            this.transform = undefined;
            if (t) {
              this.stage.selectionDeselect();
            } else {
              this.layerSelect();
            }
          };
          this.distortChange = t => {
            var e;
            this.mode = "ARRANGE";
            if ((e = this.distort) !== null && e !== undefined) {
              e.cleanUp();
            }
            this.distort = undefined;
            if (t) {
              this.stage.selectionDeselect();
            } else {
              this.layerSelect();
            }
          };
          this.showSettings = () => {
            new k((0, i.Ay)("arrange-tool-settings"));
          };
          this.toggleAspectMode = () => {
            if (this.stage.fresco.getSelectedStack().length === 1) {
              this.setAspectMode(!(0, i.Ay)("arrange-aspect-fixed").checked);
            }
          };
          this.selectAspectMode = t => {
            if (t !== undefined) {
              t.currentTarget.blur();
            }
            this.setAspectMode((0, i.Ay)("arrange-aspect-fixed").checked);
          };
          this.setAspectMode = t => {
            if (this.reform) {
              this.reform.constrain = t;
            }
            (0, i.Ay)("arrange-aspect-fixed").checked = t;
            (0, i.Ay)("arrange-aspect-free").checked = !t;
            (0, i.Ay)("arrange-size-lock").style.display = t ? "block" : "none";
            (0, i.Ay)("arrange-size-vs").style.display = t ? "none" : "block";
          };
          this.shiftDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              this.toggleAspectMode();
            }
          };
          this.shiftUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
              this.toggleAspectMode();
            }
          };
          this.layerSelect = () => {
            var t;
            var e;
            if (!this.stage || !this.stage.fresco) {
              return;
            }
            let s = this.stage.fresco.getStackHashId();
            if (s !== this.currentId) {
              this.stage.history.commitTransaction();
            }
            this.currentId = s;
            if ((t = this.selectron) !== null && t !== undefined) {
              t.cleanUp();
            }
            this.selectron = undefined;
            if (this.stage.fresco.hasSelection() && this.mode === "ARRANGE") {
              (0, i.Ay)("arrange-selection-locked").style.display = "none";
              (0, i.Ay)("arrange-no-layer").style.display = "none";
              (0, i.Ay)("arrange-selection").style.display = "none";
              (0, i.Ay)("arrange-settings").style.display = "none";
              (0, i.Ay)("arrange-no-layer").style.display = "none";
              if ((e = this.reform) !== null && e !== undefined) {
                e.cleanUp();
              }
              this.reform = undefined;
              if (this.stage.fresco.isSelectedType(n.A.TYPE_IMAGE)) {
                (0, i.Ay)("arrange-selection").style.display = "flex";
                this.selectron = new x(this.stage);
              } else {
                (0, i.Ay)("arrange-selection-locked").style.display = "flex";
              }
              return;
            }
            if (this.mode === "DISTORT") {
              this.distort = new g(this.stage, this.distortChange);
              return;
            }
            if (this.mode === "TRANSFORM") {
              this.transform = new f(this.stage, this.transformChange);
              return;
            }
            this.reform ||= new o.A(this.stage, "ARRANGE");
            let a = this.stage.fresco.getSelectedStack();
            (0, i.Ay)("arrange-settings").style.display = "none";
            (0, i.Ay)("arrange-no-layer").style.display = "none";
            (0, i.Ay)("arrange-no-layer").style.display = "none";
            (0, i.Ay)("arrange-selection").style.display = "none";
            (0, i.Ay)("arrange-selection-locked").style.display = "none";
            (0, i.Ay)("arrange-rotate-left").style.display = "flex";
            (0, i.Ay)("arrange-rotate-right").style.display = "flex";
            (0, i.Ay)("arrange-flip-horizontal").style.display = "flex";
            (0, i.Ay)("arrange-flip-vertical").style.display = "flex";
            if (a.length === 1 && a[0].rect && a[0].rect.isSet()) {
              if (a[0].settings.locked) {
                (0, i.Ay)("arrange-no-layer").style.display = "flex";
              } else {
                (0, i.Ay)("arrange-settings").style.display = "flex";
              }
              if (a[0].type === n.A.TYPE_TEXT) {
                (0, i.Ay)("arrange-flip-horizontal").style.display = "none";
                (0, i.Ay)("arrange-flip-vertical").style.display = "none";
              } else if (a[0].type === n.A.TYPE_FRAME) {
                (0, i.Ay)("arrange-rotate-left").style.display = a[0].editMode ? "none" : "flex";
                (0, i.Ay)("arrange-rotate-right").style.display = a[0].editMode ? "none" : "flex";
                (0, i.Ay)("arrange-flip-horizontal").style.display = a[0].editMode ? "flex" : "none";
                (0, i.Ay)("arrange-flip-vertical").style.display = a[0].editMode ? "flex" : "none";
              } else if (a[0].type === n.A.TYPE_SHAPE) {
                (0, i.Ay)("arrange-flip-horizontal").style.display = "none";
                (0, i.Ay)("arrange-flip-vertical").style.display = "none";
              }
              (0, i.Ay)("arrange-apect-holder").style.display = a[0].type === n.A.TYPE_TEXT || a[0].editMode ? "none" : "flex";
              this.updateInputs();
            } else if (a.length > 1) {
              (0, i.Ay)("arrange-settings").style.display = "flex";
              (0, i.Ay)("arrange-no-layer").style.display = "none";
              (0, i.Ay)("arrange-apect-holder").style.display = "none";
              (0, i.Ay)("arrange-rotate-left").style.display = "none";
              (0, i.Ay)("arrange-rotate-right").style.display = "none";
              (0, i.Ay)("arrange-flip-vertical").style.display = "none";
              (0, i.Ay)("arrange-flip-horizontal").style.display = "none";
              this.setAspectMode(true);
              this.updateInputs();
            } else {
              (0, i.Ay)("arrange-no-layer").style.display = "none";
              (0, i.Ay)("arrange-settings").style.display = "none";
              (0, i.Ay)("arrange-no-layer").style.display = "flex";
            }
            if (this.reform) {
              this.reform.constrain = (0, i.Ay)("arrange-aspect-fixed").checked;
            }
          };
          this.unlock = () => this.stage.changeLocked(undefined, false);
          this.deleteLayer = () => this.stage.deleteLayer();
          this.duplicateLayer = () => this.stage.duplicateLayer();
          this.inputBegin = () => {
            this.reform.beginHistory();
          };
          this.inputEnd = t => {
            let e = t.target.id;
            let s = e === "arrange-width" || e === "arrange-height" ? "resize" : "move";
            if (this.stage.fresco.isSelectedType(n.A.TYPE_TEXT)) {
              s = e === "arrange-height" ? "w-resize" : "t-resize";
            }
            this.reform.commitHistory(s);
          };
          this.inputPosition = t => {
            let e = Math.round(Number((0, i.Ay)("arrange-top").value));
            let s = Math.round(Number((0, i.Ay)("arrange-left").value));
            this.reform.inputPosition(s, e);
          };
          this.inputSize = t => {
            if (t.currentTarget.id == "arrange-width") {
              let t = (0, i.Ay)("arrange-width").value;
              let e = Number.isNaN(Number(t)) ? 50 : Math.round(Number(t));
              let s = this.reform.inputSize(e, undefined);
              (0, i.Ay)("arrange-height").value = Math.round(s.height).toString();
            } else {
              let t = (0, i.Ay)("arrange-height").value;
              let e = Number.isNaN(Number(t)) ? 50 : Math.round(Number(t));
              let s = this.reform.inputSize(undefined, e);
              (0, i.Ay)("arrange-width").value = Math.round(s.width).toString();
            }
          };
          this.updateInputs = () => {
            let t = this.stage.fresco.getStackBounds();
            if (t) {
              (0, i.Ay)("arrange-width").value = Math.round(t.width).toString();
              (0, i.Ay)("arrange-height").value = Math.round(t.height).toString();
              (0, i.Ay)("arrange-top").value = Math.round(t.y).toString();
              (0, i.Ay)("arrange-left").value = Math.round(t.x).toString();
            }
          };
          this.rotateOrFlip = t => {
            let e = this.stage.fresco.getSelected();
            if (!e) {
              return;
            }
            switch (t.currentTarget.getAttribute("id")) {
              case "arrange-flip-vertical":
                this.stage.flipSelected(true);
                break;
              case "arrange-flip-horizontal":
                this.stage.flipSelected(false);
                break;
              case "arrange-rotate-left":
                if (e instanceof b.A) {
                  this.stage.rotateSelected(true);
                } else {
                  let t = e.rect.clone();
                  e.rect.rotation += -90;
                  this.stage.history.add({
                    type: "arrange",
                    kind: "rotate",
                    layer: e,
                    action: {
                      type: "rect",
                      rect: t
                    }
                  });
                }
                break;
              case "arrange-rotate-right":
                if (e instanceof b.A) {
                  this.stage.rotateSelected(true);
                } else {
                  let t = e.rect.clone();
                  e.rect.rotation += 90;
                  this.stage.history.add({
                    type: "arrange",
                    kind: "rotate",
                    layer: e,
                    action: {
                      type: "rect",
                      rect: t
                    }
                  });
                }
            }
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.cleanUp = () => {
            var t;
            var e;
            var s;
            if (this.distort) {
              this.distort.apply();
            }
            if (this.transform) {
              this.transform.apply();
            }
            this.stage.history.commitTransaction();
            if ((t = this.reform) !== null && t !== undefined) {
              t.cleanUp();
            }
            this.reform = undefined;
            if ((e = this.selectron) !== null && e !== undefined) {
              e.cleanUp();
            }
            this.selectron = undefined;
            if ((s = this.stage) !== null && s !== undefined) {
              s.coating.wake();
            }
            document.removeEventListener("keydown", this.shiftDown, false);
            document.removeEventListener("keyup", this.shiftUp, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("layer-arrange", this.updateInputs, false);
            (0, i.Ay)("arrange-tool-settings").removeEventListener("click", this.showSettings, false);
            (0, i.Ay)("arrange-selection-transform").removeEventListener("click", this.selectionTransform, false);
            (0, i.Ay)("arrange-selection-distort").removeEventListener("click", this.selectionDistort, false);
            (0, i.Ay)("arrange-rasterize").removeEventListener("click", this.rasterize, false);
            (0, i.Ay)("arrange-delete").removeEventListener("click", this.deleteLayer, false);
            (0, i.Ay)("arrange-duplicate").removeEventListener("click", this.duplicateLayer, false);
            (0, i.Ay)("arrange-duplicate-button").removeEventListener("click", this.duplicateLayer, false);
            (0, i.Ay)("arrange-convert").removeEventListener("click", this.unlock, false);
            (0, i.Ay)("arrange-width").removeEventListener("input", this.inputSize, false);
            (0, i.Ay)("arrange-height").removeEventListener("input", this.inputSize, false);
            (0, i.Ay)("arrange-top").removeEventListener("input", this.inputPosition, false);
            (0, i.Ay)("arrange-left").removeEventListener("input", this.inputPosition, false);
            (0, i.Ay)("arrange-width").removeEventListener("focus", this.inputBegin, false);
            (0, i.Ay)("arrange-height").removeEventListener("focus", this.inputBegin, false);
            (0, i.Ay)("arrange-top").removeEventListener("focus", this.inputBegin, false);
            (0, i.Ay)("arrange-left").removeEventListener("focus", this.inputBegin, false);
            (0, i.Ay)("arrange-width").removeEventListener("blur", this.inputEnd, false);
            (0, i.Ay)("arrange-height").removeEventListener("blur", this.inputEnd, false);
            (0, i.Ay)("arrange-top").removeEventListener("blur", this.inputEnd, false);
            (0, i.Ay)("arrange-left").removeEventListener("blur", this.inputEnd, false);
            (0, i.Ay)("arrange-aspect-fixed").removeEventListener("click", this.selectAspectMode, false);
            (0, i.Ay)("arrange-aspect-free").removeEventListener("click", this.selectAspectMode, false);
            (0, i.Ay)("arrange-aspect-icon").removeEventListener("click", this.toggleAspectMode, false);
            let a = (0, i.Ay)("arrange-rotate").getElementsByTagName("li");
            for (var n = 0; n < a.length; n++) {
              a[n].removeEventListener("click", this.rotateOrFlip, false);
            }
          };
          this.mode = e;
          document.addEventListener("keydown", this.shiftDown, false);
          document.addEventListener("keyup", this.shiftUp, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("layer-arrange", this.updateInputs, false);
          (0, i.Ay)("arrange-convert").addEventListener("click", this.unlock, false);
          (0, i.Ay)("arrange-width").addEventListener("input", this.inputSize, false);
          (0, i.Ay)("arrange-height").addEventListener("input", this.inputSize, false);
          (0, i.Ay)("arrange-top").addEventListener("input", this.inputPosition, false);
          (0, i.Ay)("arrange-left").addEventListener("input", this.inputPosition, false);
          (0, i.Ay)("arrange-width").addEventListener("focus", this.inputBegin, false);
          (0, i.Ay)("arrange-height").addEventListener("focus", this.inputBegin, false);
          (0, i.Ay)("arrange-top").addEventListener("focus", this.inputBegin, false);
          (0, i.Ay)("arrange-left").addEventListener("focus", this.inputBegin, false);
          (0, i.Ay)("arrange-width").addEventListener("blur", this.inputEnd, false);
          (0, i.Ay)("arrange-height").addEventListener("blur", this.inputEnd, false);
          (0, i.Ay)("arrange-top").addEventListener("blur", this.inputEnd, false);
          (0, i.Ay)("arrange-left").addEventListener("blur", this.inputEnd, false);
          (0, i.Ay)("arrange-delete").addEventListener("click", this.deleteLayer, false);
          (0, i.Ay)("arrange-duplicate").addEventListener("click", this.duplicateLayer, false);
          (0, i.Ay)("arrange-duplicate-button").addEventListener("click", this.duplicateLayer, false);
          (0, i.Ay)("arrange-tool-settings").addEventListener("click", this.showSettings, false);
          (0, i.Ay)("arrange-selection-transform").addEventListener("click", this.selectionTransform, false);
          (0, i.Ay)("arrange-selection-distort").addEventListener("click", this.selectionDistort, false);
          (0, i.Ay)("arrange-rasterize").addEventListener("click", this.rasterize, false);
          (0, i.Ay)("arrange-aspect-fixed").addEventListener("click", this.selectAspectMode, false);
          (0, i.Ay)("arrange-aspect-free").addEventListener("click", this.selectAspectMode, false);
          (0, i.Ay)("arrange-aspect-icon").addEventListener("click", this.toggleAspectMode, false);
          let s = (0, i.Ay)("arrange-rotate").getElementsByTagName("li");
          for (var a = 0; a < s.length; a++) {
            s[a].addEventListener("click", this.rotateOrFlip, false);
          }
          this.layerSelect();
          this.selectAspectMode();
        }
      }
    }
