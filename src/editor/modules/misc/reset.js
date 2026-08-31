window.__editorModules[1558] = function (t, e, s) {
      s.d(e, {
        A: () => x
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(651);
      var r = s(3244);
      var h = s(5527);
      var l = s(3517);
      var c = s(6050);
      var d = s(2543);
      var p = s(8527);
      var g = s(5432);
      var m = s(1168);
      var y = s(9754);
      var v = s(2443);
      var f = s(7135);
      function w() {
        if (g.Ny?.subscription) {
          return 8192;
        } else {
          return 4096;
        }
      }
      class x extends h.A {
        constructor(t) {
          super("crop", t);
          this.aspectX = 0;
          this.aspectY = 0;
          this.panTimer = 0;
          this.inputBlur = t => {
            (0, i.Ay)("crop-width").value = Math.round(this.crop.width).toString();
            (0, i.Ay)("crop-height").value = Math.round(this.crop.height).toString();
          };
          this.updateCrop = t => {
            var e;
            if (!this.applying) {
              this.crop = new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height);
              if (this.stage.fresco.lockedBackground() && this.crop.equalTo(this.stage.fresco.layers[0].rect)) {
                this.stage.fresco.layers[0].rect.rotation = 0;
                (0, i.Ay)("crop-straighten").style.display = "block";
              } else {
                (0, i.Ay)("crop-straighten").style.display = "none";
              }
              (0, i.Ay)("crop-constraint-free").checked = true;
              if ((e = this.straighten) !== null && e !== undefined) {
                e.reset();
              }
              this.setConstraintMode(0, 0);
              this.updateSizeInput();
              this.render();
            }
          };
          this.viewportChange = () => {
            this.render();
          };
          this.reset = t => {
            var e;
            if ((e = this.straighten) !== null && e !== undefined) {
              e.reset();
            }
            this.stage.straighten(0);
            this.setConstraintMode(0, 0);
            this.setAspect(0, 0);
            this.refit();
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, a.A)("reset")
            }));
          };
          this.setConstraintMode = (t, e) => {
            if (t == 0 && e == 0) {
              (0, i.Ay)("crop-constraint-free").checked = true;
              (0, i.Ay)("crop-constraint-settings").style.display = "none";
              return;
            }
            (0, i.Ay)("crop-constraint-ratio").checked = true;
            if (t !== 0) {
              let t = (e, s) => s == 0 ? e : t(s, e % s);
              let e = t(this.crop.width, this.crop.height);
              (0, i.Ay)("crop-constraint-width").value = (this.crop.width / e).toString();
              (0, i.Ay)("crop-constraint-height").value = (this.crop.height / e).toString();
            }
            (0, i.Ay)("crop-constraint-preset").value = "0:0";
          };
          this.constraintModeChange = t => {
            let e = document.querySelector("input[name=\"crop-constraint-mode\"]:checked").value;
            if (e === "free") {
              (0, i.Ay)("crop-constraint-settings").style.display = "none";
              this.setAspect(0, 0);
              return;
            }
            (0, i.Ay)("crop-constraint-settings").style.display = "inline-flex";
            let s = Number((0, i.Ay)("crop-constraint-width").value);
            let a = Number((0, i.Ay)("crop-constraint-height").value);
            if (e === "ratio") {
              (0, i.Ay)("crop-constraint-width").value = "1";
              (0, i.Ay)("crop-constraint-height").value = "1";
            } else {
              (0, i.Ay)("crop-constraint-width").value = (0, i.Ay)("crop-width").value;
              (0, i.Ay)("crop-constraint-height").value = (0, i.Ay)("crop-height").value;
            }
            s = Number((0, i.Ay)("crop-constraint-width").value);
            a = Number((0, i.Ay)("crop-constraint-height").value);
            this.setAspect(s, a);
            (0, i.Ay)("crop-constraint-preset").value = "0:0";
          };
          this.constraintPresetChange = t => {
            let e = (0, i.Ay)("crop-constraint-preset").value.split(":");
            if (e[0] === "0") {
              return;
            }
            if (e[0] === "x" && e[1] === "y") {
              let t = (e, s) => s == 0 ? e : t(s, e % s);
              let s = t(this.stage.fresco.width, this.stage.fresco.height);
              e[0] = (this.stage.fresco.width / s).toString();
              e[1] = (this.stage.fresco.height / s).toString();
            }
            let s = Number(e[0]);
            let a = Number(e[1]);
            this.setAspect(s, a);
            let n = e[0] !== "x" && s > 50;
            (0, i.Ay)("crop-constraint-size").checked = n;
            (0, i.Ay)("crop-constraint-ratio").checked = !n;
            (0, i.Ay)("crop-constraint-width").value = e[0];
            (0, i.Ay)("crop-constraint-height").value = e[1];
          };
          this.constraintWidthHeightInputChange = t => {
            let e = (0, i.Ay)("crop-constraint-width").value;
            let s = (0, i.Ay)("crop-constraint-height").value;
            let a = Number.isNaN(Number(e)) ? 1 : Number(e);
            let n = Number.isNaN(Number(s)) ? 1 : Number(s);
            this.setAspect(a, n);
          };
          this.setAspect = (t, e) => {
            this.aspectX = t;
            this.aspectY = e;
            this.calculate(new c.A(0, 0), new c.A(this.stage.fresco.width, this.stage.fresco.height));
            if (this.crop.width < 30) {
              this.crop.width = 30;
            }
            if (this.crop.height < 30) {
              this.crop.height = 30;
            }
            this.crop.x += Math.round((this.stage.fresco.width - this.crop.width) / 2);
            this.crop.y += Math.round((this.stage.fresco.height - this.crop.height) / 2);
            this.updateSizeInput();
            window.requestAnimationFrame(this.render);
          };
          this.widthHeightInputChange = t => {
            let e = (0, i.Ay)("crop-width").value;
            let s = (0, i.Ay)("crop-height").value;
            let a = Number.isNaN(Number(e)) ? this.stage.fresco.width : Number(e);
            let o = Number.isNaN(Number(s)) ? this.stage.fresco.height : Number(s);
            let r = Math.round(30 / this.stage.zoom);
            if (a < r) {
              a = r;
            } else if (a > w()) {
              a = w();
            }
            if (o < r) {
              o = r;
            } else if (o > w()) {
              o = w();
            }
            this.crop.width = a;
            this.crop.height = o;
            if (this.aspectX != 0) {
              let e = t.currentTarget.getAttribute("id");
              if (e == "crop-width") {
                this.crop.height = w();
              } else {
                this.crop.width = w();
              }
              this.calculate(new c.A(this.crop.x, this.crop.y), new c.A(this.crop.right(), this.crop.bottom()));
              this.updateSizeInput(e == "crop-width", e == "crop-height");
            }
            if (this.crop.width > this.stage.fresco.width || this.crop.height > this.stage.fresco.height) {
              this.crop.x = Math.round((this.stage.fresco.width - this.crop.width) / 2);
              this.crop.y = Math.round((this.stage.fresco.height - this.crop.height) / 2);
            } else {
              this.crop.x = n.qE(this.crop.x, 0, this.stage.fresco.width - this.crop.width);
              this.crop.y = n.qE(this.crop.y, 0, this.stage.fresco.height - this.crop.height);
            }
            window.requestAnimationFrame(this.render);
          };
          this.updateSizeInput = (t, e) => {
            if (!t) {
              (0, i.Ay)("crop-width").value = this.crop.width.toString();
            }
            if (!e) {
              (0, i.Ay)("crop-height").value = this.crop.height.toString();
            }
          };
          this.down = t => {
            this.p = this.stage.translateRasterToFresco(t);
            this.setCursor(this.p);
            this.updateSizeInput();
            this.downTopLeft = this.crop.topLeft();
            this.downBottomRight = this.crop.bottomRight();
            this.raster.addEventListener("pointerup", this.pointerUp, false);
            window.requestAnimationFrame(this.render);
          };
          this.move = t => {
            this.lastPointer = t;
            t = this.stage.translateRasterToFresco(t);
            if (this.isDown) {
              this.reform(this.p.x - t.x, this.p.y - t.y);
              this.startAutoPan();
            } else {
              this.setCursor(t);
            }
          };
          this.up = t => {
            this.stopAutoPan();
            this.raster.removeEventListener("pointerup", this.pointerUp, false);
            window.requestAnimationFrame(this.render);
          };
          this.startAutoPan = () => {
            this.panTimer ||= window.requestAnimationFrame(this.autoPan);
          };
          this.stopAutoPan = () => {
            if (this.panTimer) {
              window.cancelAnimationFrame(this.panTimer);
              this.panTimer = 0;
            }
          };
          this.autoPan = () => {
            this.panTimer = 0;
            if (!this.isDown || !this.lastPointer) {
              return;
            }
            const t = 40;
            const e = 4 / this.stage.zoom;
            const s = this.raster.width;
            const i = this.raster.height;
            let a = 0;
            let o = 0;
            if (this.lastPointer.x < t) {
              a = -(t - this.lastPointer.x) * e / t;
            } else if (this.lastPointer.x > s - t) {
              a = (this.lastPointer.x - (s - t)) * e / t;
            }
            if (this.lastPointer.y < t) {
              o = -(t - this.lastPointer.y) * e / t;
            } else if (this.lastPointer.y > i - t) {
              o = (this.lastPointer.y - (i - t)) * e / t;
            }
            if (a !== 0 || o !== 0) {
              let t = 200 / this.stage.zoom;
              this.stage.anchor.x = n.qE(this.stage.anchor.x + a, -t, this.stage.fresco.width + t);
              this.stage.anchor.y = n.qE(this.stage.anchor.y + o, -t, this.stage.fresco.height + t);
              this.stage.updateViewport();
              const e = this.stage.translateRasterToFresco(this.lastPointer);
              this.reform(this.p.x - e.x, this.p.y - e.y);
              this.panTimer = window.requestAnimationFrame(this.autoPan);
            }
          };
          this.setCursor = t => {
            let e = this.crop.width / 6;
            let s = this.crop.height / 6;
            if (t.x <= this.crop.x + e) {
              if (t.y < this.crop.y + s) {
                this.method = "nw-resize";
              } else if (t.y < this.crop.y + this.crop.height - s) {
                this.method = "w-resize";
              } else {
                this.method = "sw-resize";
              }
            } else if (t.x > this.crop.x + e && t.x < this.crop.x + this.crop.width - e) {
              if (t.y < this.crop.y + s) {
                this.method = "n-resize";
              } else if (t.y < this.crop.y + this.crop.height - s) {
                this.method = "move";
              } else {
                this.method = "s-resize";
              }
            } else if (t.y < this.crop.y + s) {
              this.method = "ne-resize";
            } else if (t.y < this.crop.y + this.crop.height - s) {
              this.method = "e-resize";
            } else {
              this.method = "se-resize";
            }
            this.raster.style.cursor = this.method;
          };
          this.isExpanding = () => this.crop.x < 0 || this.crop.y < 0 || this.crop.right() > this.stage.fresco.width || this.crop.bottom() > this.stage.fresco.height;
          this.refit = () => {
            let t = Math.round(16 / this.stage.zoom);
            let e = new c.A(this.crop.x, this.crop.y);
            let s = new c.A(this.crop.right(), this.crop.bottom());
            if (this.stage.fresco.lockedBackground() && this.stage.fresco.layers[0].rect.rotation !== 0) {
              if (e.x < 0) {
                e.x = 0;
              }
              if (e.y < 0) {
                e.y = 0;
              }
              if (s.x > this.stage.fresco.width) {
                s.x = this.stage.fresco.width;
              }
              if (s.y > this.stage.fresco.height) {
                s.y = this.stage.fresco.height;
              }
            } else {
              if (s.x - e.x > w()) {
                s.x = e.x + w();
              }
              if (s.y - e.y > w()) {
                s.y = e.y + w();
              }
            }
            if (s.x < e.x + t) {
              s.x = e.x + t;
            }
            if (s.y < e.y + t) {
              s.y = e.y + t;
            }
            if (e.x > s.x - t) {
              e.x = s.x - t;
            }
            if (e.y > s.y - t) {
              e.y = s.y - t;
            }
            this.calculate(e, s);
            this.updateSizeInput();
            this.render();
          };
          this.reform = (t, e) => {
            if (this.method == "move") {
              this.crop.x = this.downTopLeft.x - t;
              this.crop.y = this.downTopLeft.y - e;
              let s = Math.round(10 / this.stage.zoom);
              let i = this.stage.fresco.width;
              let a = this.stage.fresco.height;
              if (Math.abs(this.crop.x) < s) {
                this.crop.x = 0;
              } else if (Math.abs(this.crop.right() - i) < s) {
                this.crop.x = i - this.crop.width;
              } else if (Math.abs(this.crop.x - i) < s) {
                this.crop.x = i;
              } else if (Math.abs(this.crop.right()) < s) {
                this.crop.x = -this.crop.width;
              }
              if (Math.abs(this.crop.y) < s) {
                this.crop.y = 0;
              } else if (Math.abs(this.crop.bottom() - a) < s) {
                this.crop.y = a - this.crop.height;
              } else if (Math.abs(this.crop.y - a) < s) {
                this.crop.y = a;
              } else if (Math.abs(this.crop.bottom()) < s) {
                this.crop.y = -this.crop.height;
              }
              let n = Math.round(30 / this.stage.zoom);
              if (this.crop.right() < n) {
                this.crop.x = n - this.crop.width;
              } else if (this.crop.x > this.stage.fresco.width - n) {
                this.crop.x = this.stage.fresco.width - n;
              }
              if (this.crop.bottom() < n) {
                this.crop.y = n - this.crop.height;
              } else if (this.crop.y > this.stage.fresco.height - n) {
                this.crop.y = this.stage.fresco.height - n;
              }
            } else {
              let s = this.downTopLeft.clone();
              let i = this.downBottomRight.clone();
              switch (this.method) {
                case "w-resize":
                  if (this.aspectX !== 0) {
                    i.y = s.y + w();
                  }
                  s.x = this.downTopLeft.x - t;
                  break;
                case "e-resize":
                  if (this.aspectX !== 0) {
                    i.y = s.y + w();
                  }
                  i.x = this.downBottomRight.x - t;
                  break;
                case "n-resize":
                  if (this.aspectX !== 0) {
                    i.x = s.x + w();
                  }
                  s.y = this.downTopLeft.y - e;
                  break;
                case "s-resize":
                  if (this.aspectX !== 0) {
                    i.x = s.x + w();
                  }
                  i.y = this.downBottomRight.y - e;
                  break;
                case "nw-resize":
                  s.x = this.downTopLeft.x - t;
                  s.y = this.downTopLeft.y - e;
                  break;
                case "ne-resize":
                  s.y = this.downTopLeft.y - e;
                  i.x = this.downBottomRight.x - t;
                  break;
                case "sw-resize":
                  s.x = this.downTopLeft.x - t;
                  i.y = this.downBottomRight.y - e;
                  break;
                case "se-resize":
                  i.x = this.downBottomRight.x - t;
                  i.y = this.downBottomRight.y - e;
              }
              let a = Math.round(10 / this.stage.zoom);
              let n = this.stage.fresco.width;
              let o = this.stage.fresco.height;
              if (s.x != this.downTopLeft.x) {
                if (Math.abs(s.x) < a) {
                  s.x = 0;
                } else if (Math.abs(s.x - n) < a) {
                  s.x = n;
                }
              }
              if (s.y != this.downTopLeft.y) {
                if (Math.abs(s.y) < a) {
                  s.y = 0;
                } else if (Math.abs(s.y - o) < a) {
                  s.y = o;
                }
              }
              if (i.x != this.downBottomRight.x) {
                if (Math.abs(i.x) < a) {
                  i.x = 0;
                } else if (Math.abs(i.x - n) < a) {
                  i.x = n;
                }
              }
              if (i.y != this.downBottomRight.y) {
                if (Math.abs(i.y) < a) {
                  i.y = 0;
                } else if (Math.abs(i.y - o) < a) {
                  i.y = o;
                }
              }
              let r = Math.round(30 / this.stage.zoom);
              const h = this.stage.fresco.lockedBackground() && this.stage.fresco.layers[0].rect.rotation !== 0;
              if (s.x != this.downTopLeft.x) {
                if (h && s.x < 0) {
                  s.x = 0;
                } else if (i.x - s.x > w()) {
                  s.x = i.x - w();
                }
                if (s.x > i.x - r) {
                  s.x = i.x - r;
                }
              }
              if (s.y != this.downTopLeft.y) {
                if (h && s.y < 0) {
                  s.y = 0;
                } else if (i.y - s.y > w()) {
                  s.y = i.y - w();
                }
                if (s.y > i.y - r) {
                  s.y = i.y - r;
                }
              }
              if (i.x != this.downBottomRight.x) {
                if (h && i.x > this.stage.fresco.width) {
                  i.x = this.stage.fresco.width;
                } else if (i.x - s.x > w()) {
                  i.x = s.x + w();
                }
                if (i.x < s.x + r) {
                  i.x = s.x + r;
                }
              }
              if (i.y != this.downBottomRight.y) {
                if (h && i.y > this.stage.fresco.height) {
                  i.y = this.stage.fresco.height;
                } else if (i.y - s.y > w()) {
                  i.y = s.y + w();
                }
                if (i.y < s.y + r) {
                  i.y = s.y + r;
                }
              }
              this.calculate(s, i, this.downTopLeft);
              this.updateSizeInput();
              let l = Math.round(30 / this.stage.zoom);
              if (this.crop.right() < l) {
                this.crop.x = l - this.crop.width;
              } else if (this.crop.x > this.stage.fresco.width - l) {
                this.crop.x = this.stage.fresco.width - l;
              }
              if (this.crop.bottom() < l) {
                this.crop.y = l - this.crop.height;
              } else if (this.crop.y > this.stage.fresco.height - l) {
                this.crop.y = this.stage.fresco.height - l;
              }
            }
            window.requestAnimationFrame(this.render);
          };
          this.render = () => {
            let t = this.crop.scale(this.stage.zoom);
            t.x += this.stage.offset.x;
            t.y += this.stage.offset.y;
            let e = t.width < 200 || t.height < 200 ? 15 : 30;
            this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
            if (this.straightenIsDown) {
              this.ctx.lineWidth = 1;
              this.ctx.fillStyle = n.q5;
              this.ctx.translate(0.5, 0.5);
              this.ctx.beginPath();
              let t = new c.A(Math.round(this.raster.width / 2), Math.round(this.raster.height / 2));
              this.ctx.moveTo(this.stage.viewClip.x, t.y);
              this.ctx.lineTo(this.stage.viewClip.right() - 1, t.y);
              this.ctx.moveTo(t.x, this.stage.viewClip.y);
              this.ctx.lineTo(t.x, this.stage.viewClip.bottom() - 1);
              this.ctx.strokeStyle = "rgba(255,255,255,.5)";
              let e = 0;
              let s = t.x;
              while (s > this.stage.viewClip.x) {
                if (e % 5 == 0) {
                  this.ctx.moveTo(s, this.stage.viewClip.y);
                  this.ctx.lineTo(s, this.stage.viewClip.bottom() - 1);
                  this.ctx.moveTo(t.x + t.x - s, this.stage.viewClip.y);
                  this.ctx.lineTo(t.x + t.x - s, this.stage.viewClip.bottom() - 1);
                } else {
                  this.ctx.moveTo(s, t.y - 3);
                  this.ctx.lineTo(s, t.y + 3);
                  this.ctx.moveTo(t.x + t.x - s, t.y - 3);
                  this.ctx.lineTo(t.x + t.x - s, t.y + 3);
                }
                s -= 30;
                e++;
              }
              e = 0;
              let i = t.y;
              while (i > this.stage.viewClip.y) {
                if (e % 5 == 0) {
                  this.ctx.moveTo(this.stage.viewClip.x, i);
                  this.ctx.lineTo(this.stage.viewClip.right() - 1, i);
                  this.ctx.moveTo(this.stage.viewClip.x, t.y + t.y - i);
                  this.ctx.lineTo(this.stage.viewClip.right() - 1, t.y + t.y - i);
                } else {
                  this.ctx.moveTo(t.x - 3, i);
                  this.ctx.lineTo(t.x + 3, i);
                  this.ctx.moveTo(t.x - 3, t.y + t.y - i);
                  this.ctx.lineTo(t.x + 3, t.y + t.y - i);
                }
                i -= 30;
                e++;
              }
              this.ctx.stroke();
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.beginPath();
              this.ctx.arc(t.x, t.y, 50, 0, Math.PI * 2);
              this.ctx.arc(t.x, t.y, 300, 0, Math.PI * 2);
              this.ctx.stroke();
            } else {
              let s = new r.A(this.stage.offset.x, this.stage.offset.y, this.stage.fresco.width * this.stage.zoom, this.stage.fresco.height * this.stage.zoom);
              this.ctx.fillStyle = "rgba(0,0,0,0.5)";
              this.ctx.fillRect(s.x, s.y, s.width, s.height);
              this.ctx.clearRect(t.x, t.y, t.width, t.height);
              if (this.isExpanding()) {
                this.ctx.fillStyle = "rgba(80,120,200,0.15)";
                if (t.y < s.y) {
                  this.ctx.fillRect(t.x, t.y, t.width, s.y - t.y);
                }
                if (t.bottom() > s.bottom()) {
                  this.ctx.fillRect(t.x, s.bottom(), t.width, t.bottom() - s.bottom());
                }
                let e = Math.max(t.y, s.y);
                let i = Math.min(t.bottom(), s.bottom()) - e;
                if (t.x < s.x && i > 0) {
                  this.ctx.fillRect(t.x, e, s.x - t.x, i);
                }
                if (t.right() > s.right() && i > 0) {
                  this.ctx.fillRect(s.right(), e, t.right() - s.right(), i);
                }
              }
              this.ctx.lineWidth = 1;
              this.ctx.fillStyle = n.q5;
              this.ctx.translate(0.5, 0.5);
              this.ctx.strokeStyle = "rgb(0,0,0)";
              this.ctx.strokeRect(t.x, t.y, t.width - 1, t.height - 1);
              this.ctx.strokeStyle = n.q5;
              this.ctx.strokeRect(t.x - 1, t.y - 1, t.width + 1, t.height + 1);
              if (this.isDown) {
                let e = Math.round(t.width / 3);
                let s = Math.round(t.height / 3);
                this.ctx.strokeStyle = "rgba(255,255,255,.5)";
                this.ctx.beginPath();
                this.ctx.moveTo(t.x + e, t.y);
                this.ctx.lineTo(t.x + e, t.bottom());
                this.ctx.moveTo(t.x + e * 2, t.y);
                this.ctx.lineTo(t.x + e * 2, t.bottom());
                this.ctx.moveTo(t.x, t.y + s);
                this.ctx.lineTo(t.right(), t.y + s);
                this.ctx.moveTo(t.x, t.y + s * 2);
                this.ctx.lineTo(t.right(), t.y + s * 2);
                this.ctx.stroke();
              }
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
              this.ctx.fillRect(t.x - 3, t.y - 3, e, 3);
              this.ctx.fillRect(t.x - 3, t.y, 3, e - 3);
              this.ctx.fillRect(t.x - 3, t.y + t.height, e, 3);
              this.ctx.fillRect(t.x - 3, t.y + t.height - e + 3, 3, e - 3);
              this.ctx.fillRect(t.x + t.width - e + 3, t.y - 3, e, 3);
              this.ctx.fillRect(t.x + t.width, t.y, 3, e - 3);
              this.ctx.fillRect(t.x + t.width - e + 3, t.y + t.height, e, 3);
              this.ctx.fillRect(t.x + t.width, t.y + t.height - e + 3, 3, e - 3);
              this.ctx.fillRect(Math.floor(t.x + t.width / 2 - e), t.y - 3, e * 2, 3);
              this.ctx.fillRect(Math.floor(t.x + t.width / 2 - e), t.y + t.height, e * 2, 3);
              this.ctx.fillRect(t.x - 3, t.y + t.height / 2 - e, 3, e * 2);
              this.ctx.fillRect(t.x + t.width, t.y + t.height / 2 - e, 3, e * 2);
            }
          };
          this.dblClick = () => {
            this.setAspect(this.aspectY, this.aspectX);
          };
          this.apply = () => {
            document.dispatchEvent(new CustomEvent("select-tool"));
          };
          this.cleanUp = () => {
            var t;
            this.stopAutoPan();
            this.removeDownListeners();
            this.applying = true;
            const e = this.stage.fresco.lockedBackground() && this.stage.fresco.layers[0].rect.rotation !== 0;
            const s = this.isExpanding();
            const h = s ? new c.A(Math.max(0, -this.crop.x), Math.max(0, -this.crop.y)) : null;
            const l = s ? new o.A(this.crop.width, this.crop.height) : null;
            const w = this.stage;
            if (!this.crop.equalTo(new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height)) || e) {
              let t;
              let s = new o.A(this.stage.fresco.width, this.stage.fresco.height);
              let i = new c.A(-this.crop.x, -this.crop.y);
              if (e) {
                const e = this.stage.fresco.layers[0];
                t = n.$z(e.canvas);
                s = new o.A(e.canvas.width, e.canvas.height);
                i.x += -e.rect.x;
                i.y += -e.rect.y;
                e.applyStraighten(new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height));
              }
              this.stage.fresco.crop(this.crop);
              this.stage.history.add({
                type: "crop",
                offset: i,
                size: s,
                straighten: t
              });
            }
            if (document.querySelector("input[name=\"crop-constraint-mode\"]:checked").value === "size") {
              const t = Number((0, i.Ay)("crop-constraint-width").value);
              const e = Number((0, i.Ay)("crop-constraint-height").value);
              const s = new o.A(this.stage.fresco.width, this.stage.fresco.height);
              if (s.width !== t || s.height !== e) {
                const i = this.stage.fresco.layers.map(t => {
                  t.syncRequested = new Date();
                  return t.clone(true);
                });
                this.stage.fresco.resize(t, e, true);
                this.stage.history.add({
                  type: "pageResize",
                  size: s,
                  layers: i
                });
              }
            }
            document.removeEventListener("history-update", this.updateCrop, false);
            document.removeEventListener("viewport-render", this.viewportChange, false);
            this.raster.removeEventListener("pointermove", this.pointerMove, false);
            this.raster.removeEventListener("dblclick", this.dblClick, false);
            const x = (0, i.Ay)("crop-width");
            x.removeEventListener("input", this.widthHeightInputChange, false);
            x.removeEventListener("blur", this.inputBlur, false);
            const b = (0, i.Ay)("crop-height");
            b.removeEventListener("input", this.widthHeightInputChange, false);
            b.removeEventListener("blur", this.inputBlur, false);
            const A = (0, i.Ay)("crop-constraint-width");
            A.removeEventListener("input", this.constraintWidthHeightInputChange, false);
            A.removeEventListener("blur", this.inputBlur, false);
            const k = (0, i.Ay)("crop-constraint-height");
            k.removeEventListener("input", this.constraintWidthHeightInputChange, false);
            k.removeEventListener("blur", this.inputBlur, false);
            if ((t = this.straighten) !== null && t !== undefined) {
              t.cleanUp();
            }
            (0, i.Ay)("crop-constraint-preset").removeEventListener("change", this.constraintPresetChange, false);
            (0, i.Ay)("crop-constraint-free").removeEventListener("click", this.constraintModeChange, false);
            (0, i.Ay)("crop-constraint-size").removeEventListener("click", this.constraintModeChange, false);
            (0, i.Ay)("crop-constraint-ratio").removeEventListener("click", this.constraintModeChange, false);
            (0, i.Ay)("crop-reset").removeEventListener("click", this.reset, false);
            (0, i.Ay)("crop-apply").removeEventListener("click", this.apply, false);
            this.ctx.clearRect(0, 0, this.raster.width, this.raster.height);
            this.ctx = null;
            this.stage.updateViewport();
            this.stage.coating.wake();
          };
          this.raster = t.raster;
          this.stage.selectionDeselect();
          this.stage.coating.sleep();
          this.ctx = this.raster.getContext("2d");
          this.ctx.imageSmoothingEnabled = false;
          document.addEventListener("history-update", this.updateCrop, false);
          document.addEventListener("viewport-render", this.viewportChange, false);
          this.raster.addEventListener("pointermove", this.pointerMove, false);
          this.raster.addEventListener("dblclick", this.dblClick, false);
          const e = (0, i.Ay)("crop-width");
          e.addEventListener("input", this.widthHeightInputChange, false);
          e.addEventListener("blur", this.inputBlur, false);
          const s = (0, i.Ay)("crop-height");
          s.addEventListener("input", this.widthHeightInputChange, false);
          s.addEventListener("blur", this.inputBlur, false);
          const h = (0, i.Ay)("crop-constraint-width");
          h.addEventListener("input", this.constraintWidthHeightInputChange, false);
          h.addEventListener("blur", this.inputBlur, false);
          const x = (0, i.Ay)("crop-constraint-height");
          x.addEventListener("input", this.constraintWidthHeightInputChange, false);
          x.addEventListener("blur", this.inputBlur, false);
          this.straighten = new l.A("crop-straighten", {
            range: [-25, 25],
            step: 0.25,
            label: (0, a.A)("straighten") + ":",
            compact: true,
            force: true,
            labelFormat: t => t.toFixed(1) + "°",
            labelParse: t => parseFloat(t),
            onChange: t => {
              this.stage.straighten(t);
              this.calculate(new c.A(0, 0), new c.A(this.stage.fresco.width, this.stage.fresco.height));
              this.refit();
            },
            onStart: () => {
              this.straightenIsDown = true;
              this.render();
            },
            onEnd: (t, e) => {
              this.straightenIsDown = false;
              this.refit();
              this.render();
            }
          });
          (0, i.Ay)("crop-constraint-preset").addEventListener("change", this.constraintPresetChange, false);
          (0, i.Ay)("crop-constraint-free").addEventListener("click", this.constraintModeChange, false);
          (0, i.Ay)("crop-constraint-size").addEventListener("click", this.constraintModeChange, false);
          (0, i.Ay)("crop-constraint-ratio").addEventListener("click", this.constraintModeChange, false);
          (0, i.Ay)("crop-reset").addEventListener("click", this.reset, false);
          (0, i.Ay)("crop-apply").addEventListener("click", this.apply, false);
          this.addDownListeners();
          this.updateCrop();
        }
        calculate(t, e, s) {
          this.crop.x = Math.round(t.x < e.x ? t.x : e.x);
          this.crop.y = Math.round(t.y < e.y ? t.y : e.y);
          this.crop.width = Math.round(t.x < e.x ? e.x - this.crop.x : t.x - this.crop.x);
          this.crop.height = Math.round(t.y < e.y ? e.y - this.crop.y : t.y - this.crop.y);
          if (this.aspectX != 0 && this.aspectY != 0) {
            let e = this.crop.height;
            let i = this.crop.width;
            if (this.aspectY / this.aspectX * (this.crop.width / this.crop.height) < this.aspectX / this.aspectY * (this.crop.height / this.crop.width)) {
              this.crop.height = Math.round(this.crop.width * (this.aspectY / this.aspectX));
            } else {
              this.crop.width = Math.round(this.crop.height * (this.aspectX / this.aspectY));
            }
            if (s) {
              if (s.x != t.x) {
                this.crop.x += Math.round(i - this.crop.width);
              }
              if (s.y != t.y) {
                this.crop.y += Math.round(e - this.crop.height);
              }
            }
          }
        }
      }
    }
