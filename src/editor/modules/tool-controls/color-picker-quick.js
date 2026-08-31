window.__editorModules[7113] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(5699);
      var a = s(5283);
      var n = s(6050);
      var o = s(5259);
      var r = s(1535);
      var h = s(98);
      class l {
        constructor(t) {
          this.zoomor = false;
          this.hypo = undefined;
          this.cursorPos = new n.A(-999, -999);
          this.lastPos = new n.A(-999, -999);
          this.ants = Array(true, true, true, true, false, false, false, false, true, true, true, false, false, false, false, true, true, true, false, false, false, false, true, true, true, false, false, false, false, true, true, true, false, false, false, false, true, true, true, true, false, false, false, true, true, true, true, false, false, false, true, true, true, true, false, false, false, true, true, true, true, false, false, false);
          this.hide = () => {
            this.raster.style.display = "none";
          };
          this.show = () => {
            this.raster.style.display = "block";
          };
          this.drawDropPreviewRect = (t, e) => {
            this.ctx.save();
            this.ctx.strokeStyle = i.YD;
            this.clear();
            const s = this.stage.rasterRect;
            const a = this.stage.zoom;
            const n = e.rect.width * a;
            const o = e.rect.height * a;
            this.ctx.strokeRect(t.x - s.x - n / 2, t.y - s.y - o / 2, n, o);
            this.dirty = true;
            this.ctx.restore();
          };
          this.setPan = (t = this.raster, e = false) => {
            if (!this.override) {
              this.byMouse = e;
              this.override = true;
              t.addEventListener("mousedown", this.panDown, false);
              t.classList.add("grab");
              this.stage.resetAnchor();
              if (this.cursorImage && (0, a.Ay)("cursor-image")) {
                this.cursorImage.remove();
              }
            }
          };
          this.removePan = (t = this.raster) => {
            if (!(0, a.Ay)("color-picker-quick")) {
              this.override = false;
              t.classList.remove("grab");
              t.removeEventListener("mousedown", this.panDown, false);
              if (this.cursorImage) {
                (0, a.Ay)("workspace").appendChild(this.cursorImage);
                this.positionCursorImage();
              }
            }
          };
          this.panDown = t => {
            t.stopPropagation();
            this.stage.resetAnchor();
            this.downPoint = new n.A(t.clientX, t.clientY);
            this.downAnchor = this.stage.anchor.clone();
            document.addEventListener("mousemove", this.panMove, true);
            document.addEventListener("mouseup", this.panUp, true);
          };
          this.panMove = t => {
            let e = ~~((t.clientX - this.downPoint.x) / this.stage.zoom);
            let s = ~~((t.clientY - this.downPoint.y) / this.stage.zoom);
            this.stage.setAnchor(new n.A(this.downAnchor.x - e, this.downAnchor.y - s));
            this.stage.updateViewport();
          };
          this.panUp = t => {
            document.removeEventListener("mousemove", this.panMove, true);
            document.removeEventListener("mouseup", this.panUp, true);
            if (this.byMouse) {
              this.removePan();
            }
          };
          this.setPicker = (t = this.raster) => {
            if (this.override) {
              return;
            }
            this.override = true;
            t.addEventListener("mousedown", this.pickerDown, false);
            t.addEventListener("mousemove", this.pickerMove, false);
            t.classList.add("crosshair");
            const s = this.lastPos.clone();
            const l = new r.A();
            let c = (0, a.Ay)("color-picker-quick") ?? (0, a.T)("div", {
              id: "color-picker-quick"
            });
            for (let i = 0; i < h.Ay.oldColor.length; i++) {
              l.reset();
              l.rotateDegree(-i * 14);
              let t = l.transformPoint(new n.A(-100, 0));
              t.x += s.x + 20;
              t.y += s.y - 46;
              let e = (0, a.T)("div", {
                className: "color-pod small floater"
              });
              e.style.backgroundColor = h.Ay.oldColor[i];
              e.style.left = t.x + "px";
              e.style.top = t.y + "px";
              e.addEventListener("mousemove", t => {
                this.lastPos.x = t.clientX;
                this.lastPos.y = t.clientY;
                this.pickerPreview(this.lastPos.clone());
                this.preview.style.backgroundColor = t.currentTarget.style.backgroundColor;
              });
              e.addEventListener("click", t => {
                let e = o.A.fromRGB(t.currentTarget.style.backgroundColor);
                this.preview.style.backgroundColor = e.toHEX();
                document.dispatchEvent(new CustomEvent("set-color", {
                  detail: e
                }));
              });
              c.append(e);
            }
            (0, a.Ay)("workspace").appendChild(c);
            this.pickerCanvas = i.oM(document.getElementsByClassName("canvas")[0]);
            this.pickerCanvasCTX = this.pickerCanvas.getContext("2d", {
              willReadFrequently: true
            });
            this.preview = document.createElement("div");
            this.preview.id = "color-picker-preview";
            this.preview.style.display = "none";
            (0, a.Ay)("workspace").appendChild(this.preview);
            if (this.cursorImage && (0, a.Ay)("cursor-image")) {
              this.cursorImage.remove();
            }
            this.pickerPreview(s);
          };
          this.updateHistoryPods = () => {
            var t = (0, a.Ay)("color-picker-quick").children;
            for (let e = 0; e < t.length; e++) {
              t[e].style.backgroundColor = h.Ay.oldColor[e];
            }
          };
          this.pickerMove = t => {
            this.lastPos.x = t.clientX;
            this.lastPos.y = t.clientY;
            this.pickerPreview(this.lastPos.clone());
          };
          this.pickerPreview = t => {
            this.preview.style.top = t.y - 50 + "px";
            this.preview.style.left = t.x + 10 + "px";
            this.preview.style.display = "block";
            t.x -= this.stage.canvas.offsetLeft;
            t.y -= this.stage.canvas.offsetTop;
            if (t.x < 0 || t.y < 0 || t.x > this.stage.canvas.width || t.y > this.stage.canvas.height) {
              this.preview.style.display = "none";
              return;
            }
            let e = this.pickerCanvasCTX.getImageData(t.x, t.y, 1, 1).data;
            this.preview.style.backgroundColor = new o.A(e[0], e[1], e[2]).toHEX();
          };
          this.pickerDown = t => {
            let e = new n.A(t.clientX - this.stage.canvas.offsetLeft, t.clientY - this.stage.canvas.offsetTop);
            if (e.x < 0 || e.y < 0 || e.x > this.stage.canvas.width || e.y > this.stage.canvas.height) {
              return;
            }
            let s = this.pickerCanvasCTX.getImageData(e.x, e.y, 1, 1).data;
            const i = new o.A(s[0], s[1], s[2]);
            this.updateColorHistory(i);
            this.updateHistoryPods();
            document.dispatchEvent(new CustomEvent("set-color", {
              detail: i
            }));
          };
          this.updateColorHistory = t => {
            let e = t.toHEX();
            let s = h.Ay.oldColor.findIndex(t => t === e);
            if (s > -1) {
              h.Ay.oldColor.splice(0, 0, h.Ay.oldColor.splice(s, 1)[0]);
            } else {
              h.Ay.oldColor.pop();
              h.Ay.oldColor.unshift(e);
            }
            (0, h.ZC)("oldColor", h.Ay.oldColor);
          };
          this.removePicker = (t = this.raster) => {
            var e;
            if (this.override) {
              this.override = false;
              t.classList.remove("crosshair");
              t.removeEventListener("mousedown", this.pickerDown, false);
              t.removeEventListener("mousemove", this.pickerMove, false);
              this.preview.remove();
              if ((e = (0, a.Ay)("color-picker-quick")) !== null && e !== undefined) {
                e.remove();
              }
              if (this.cursorImage) {
                this.stage.workspace.appendChild(this.cursorImage);
                this.positionCursorImage();
              }
              this.pickerCanvasCTX = undefined;
              this.pickerCanvas = undefined;
            }
          };
          this.setCursorImage = t => {
            if (this.cursorImage && (0, a.Ay)("cursor-image")) {
              this.cursorImage.remove();
              this.cursorImage = undefined;
            }
            this.raster.style.cursor = t ? "none" : "crosshair";
            if (t) {
              this.cursorImage = t;
              this.cursorImage.id = "cursor-image";
              if (h.Ay.isHDPI) {
                this.cursorImage.style.width = ~~(this.cursorImage.width / 2) + "px";
                this.cursorImage.style.height = ~~(this.cursorImage.height / 2) + "px";
              }
              this.cursorImage.style.transform = "translate(-50%, -50%)";
              this.stage.workspace.appendChild(this.cursorImage);
              this.positionCursorImage();
            }
          };
          this.positionCursorImage = () => {
            if (this.cursorImage) {
              this.cursorImage.style.left = this.cursorPos.x + this.raster.offsetLeft + "px";
              this.cursorImage.style.top = this.cursorPos.y + this.raster.offsetTop + "px";
            }
          };
          this.removeCursorImage = () => {
            this.raster.style.cursor = "unset";
            if (this.cursorImage) {
              this.cursorImage.remove();
              this.cursorImage = undefined;
              this.cursorPos.x = this.cursorPos.y = -999;
            }
          };
          this.animateCursorTap = () => {
            if (h.Ay.performanceMode) {
              return;
            }
            const t = (0, a.T)("div", {
              className: "click-effect"
            });
            t.style.top = this.cursorPos.y + this.stage.rasterRect.y + "px";
            t.style.left = this.cursorPos.x + this.stage.rasterRect.x + "px";
            t.addEventListener("animationend", () => t.remove());
            this.stage.workspace.appendChild(t);
          };
          this.throttle = 0;
          this.mouseWheel = t => {
            if (h.Ay.scrollMode !== "none" && (t.preventDefault(), t.stopPropagation(), this.throttle + 20 < Date.now())) {
              this.throttle = Date.now();
              this.stage.supressRender = true;
              if (h.Ay.scrollMode === "zoom" && !t.shiftKey || h.Ay.scrollMode === "move" && t.shiftKey) {
                const e = this.stage.getViewPort().center();
                const s = new n.A(t.clientX - this.stage.rasterRect.x, t.clientY - this.stage.rasterRect.y);
                const i = this.stage.translateRasterToFresco(s);
                this.stage.setFluidZoom(t.deltaY < 0);
                const a = this.stage.translateRasterToFresco(s);
                this.stage.setAnchor(new n.A(e.x + (i.x - a.x), e.y + (i.y - a.y)));
              } else {
                const e = this.stage.anchor.add(new n.A(t.deltaX, t.deltaY));
                this.stage.setAnchor(e);
              }
              this.stage.supressRender = false;
              this.stage.updateViewport();
            }
          };
          this.mouseMove = t => {
            this.lastPos.x = t.clientX;
            this.lastPos.y = t.clientY;
            this.cursorPos.x = t.clientX - this.stage.rasterRect.x;
            this.cursorPos.y = t.clientY - this.stage.rasterRect.y;
            if (this.cursorImage) {
              this.positionCursorImage();
            }
            document.dispatchEvent(new CustomEvent("mouse-cord", {
              detail: this.stage.translateRasterToFresco(this.cursorPos)
            }));
          };
          this.mouseLeave = t => {
            this.cursorPos.x = this.cursorPos.y = -999;
            this.positionCursorImage();
            document.dispatchEvent(new CustomEvent("mouse-cord", {
              detail: undefined
            }));
          };
          this.touchMove = t => {
            if (t.targetTouches.length > 1) {
              t.preventDefault();
              t.stopPropagation();
              t.stopImmediatePropagation();
              let e = Math.hypot(t.targetTouches[0].pageX - t.targetTouches[1].pageX, t.targetTouches[0].pageY - t.targetTouches[1].pageY);
              if (this.hypo === undefined) {
                this.hypo = e;
                this.downPoint = new n.A((t.targetTouches[0].pageX + t.targetTouches[1].pageX) / 2, (t.targetTouches[0].pageY + t.targetTouches[1].pageY) / 2);
                this.stage.resetAnchor();
                this.downAnchor = this.stage.anchor.clone();
                return;
              }
              if (this.hypo - e < -20 || this.hypo - e > 20) {
                this.stage.setFluidZoom(Boolean(e > this.hypo));
                this.hypo = e;
              } else {
                const e = new n.A((t.targetTouches[0].pageX + t.targetTouches[1].pageX) / 2, (t.targetTouches[0].pageY + t.targetTouches[1].pageY) / 2);
                const s = h.Ay.isHDPI ? this.stage.zoom * 0.5 : this.stage.zoom;
                const i = Math.round(e.x - this.downPoint.x) / s;
                const a = Math.round(e.y - this.downPoint.y) / s;
                this.stage.setAnchor(new n.A(this.downAnchor.x - i, this.downAnchor.y - a));
                this.stage.updateViewport();
              }
            } else {
              this.lastPos.x = t.targetTouches[0].pageX;
              this.lastPos.y = t.targetTouches[0].pageY;
              this.cursorPos.x = t.targetTouches[0].pageX - this.stage.rasterRect.x;
              this.cursorPos.y = t.targetTouches[0].pageY - this.stage.rasterRect.y;
              if (this.cursorImage) {
                this.positionCursorImage();
              }
              document.dispatchEvent(new CustomEvent("mouse-cord", {
                detail: this.stage.translateRasterToFresco(this.cursorPos)
              }));
            }
          };
          this.touchEnd = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            this.hypo = undefined;
            this.downPoint = undefined;
            this.downAnchor = undefined;
            this.cursorPos.x = this.cursorPos.y = -999;
            this.positionCursorImage();
            document.dispatchEvent(new CustomEvent("mouse-cord", {
              detail: undefined
            }));
          };
          this.freeze = (t = true) => {
            this.frozen = t;
            if (!t) {
              this.render();
            }
          };
          this.sleep = () => {
            this.sleeping = true;
            this.clear(true);
          };
          this.wake = () => {
            this.sleeping = false;
            this.render();
          };
          this.so = 7;
          this.render = (t, e = true) => {
            if (e) {
              this.clear();
            }
            if (this.sleeping) {
              return;
            }
            window.clearTimeout(this.timer);
            if (!this.stage || !this.stage.fresco || this.stage.supressRender) {
              return;
            }
            if (!this.stage.fresco.hasSelection()) {
              if (t) {
                this.ctx.putImageData(t, 0, 0);
              }
              return;
            }
            let s;
            let i;
            let a;
            let n;
            let o;
            let r = this.stage.zoom;
            let h = this.stage.fresco.selection;
            let l = this.stage.getViewPort();
            let c = this.stage.offset.x > 0 ? this.stage.offset.x : 0;
            let d = this.stage.offset.y > 0 ? this.stage.offset.y : 0;
            t ||= this.getImageData();
            if (r > 1) {
              var u = Math.ceil(r) - 1;
              for (let e = 0, r = 0, c = h.outline.length; e < c; e += 3) {
                a = h.outline[e];
                n = h.outline[e + 1];
                o = h.outline[e + 2];
                if (a + h.offset.x >= l.x && a + h.offset.x < l.x + l.width && n + h.offset.y >= l.y && n + h.offset.y < l.y + l.height) {
                  s = Math.round((a + h.offset.x) * this.stage.zoom) + this.stage.offset.x;
                  i = Math.round((n + h.offset.y) * this.stage.zoom) + this.stage.offset.y;
                  switch (o) {
                    case 0:
                      this.drawAnt(s, i, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                        this.drawAnt(s, i + r, t);
                      }
                      break;
                    case 1:
                      for (r = 0; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                      }
                      break;
                    case 2:
                      s += u;
                      this.drawAnt(s, i, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s - r, i, t);
                        this.drawAnt(s, i + r, t);
                      }
                      break;
                    case 3:
                      for (r = 0; r <= u; ++r) {
                        this.drawAnt(s, i + r, t);
                      }
                      break;
                    case 4:
                      s += u;
                      r = 0;
                      for (; r <= u; ++r) {
                        this.drawAnt(s, i + r, t);
                      }
                      break;
                    case 5:
                      i += u;
                      this.drawAnt(s, i, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s, i - r, t);
                        this.drawAnt(s + r, i, t);
                      }
                      break;
                    case 6:
                      i += u;
                      r = 0;
                      for (; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                      }
                      break;
                    case 7:
                      s += u;
                      i += u;
                      this.drawAnt(s, i, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s, i - r, t);
                        this.drawAnt(s - r, i, t);
                      }
                      break;
                    case 8:
                      this.drawAnt(s, i, t);
                      this.drawAnt(s + u, i + u, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                        this.drawAnt(s, i + r, t);
                        this.drawAnt(s + u, i - r + u, t);
                        this.drawAnt(s - r + u, i + u, t);
                      }
                      break;
                    case 9:
                      this.drawAnt(s, i, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                        this.drawAnt(s, i + r, t);
                        this.drawAnt(s + r, i + u, t);
                      }
                      break;
                    case 10:
                      s += u;
                      i += u;
                      this.drawAnt(s, i, t);
                      r = 1;
                      for (; r <= u; ++r) {
                        this.drawAnt(s + r - u, i - u, t);
                        this.drawAnt(s, i - r, t);
                        this.drawAnt(s - r, i, t);
                      }
                      break;
                    case 11:
                      for (r = 0; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                        this.drawAnt(s, i + r, t);
                        this.drawAnt(s + u, i + r, t);
                      }
                      break;
                    case 12:
                      for (r = 0; r <= u; ++r) {
                        this.drawAnt(s + r, i + u, t);
                        this.drawAnt(s, i + r, t);
                        this.drawAnt(s + u, i + r, t);
                      }
                      break;
                    case 13:
                      for (r = 0; r <= u; ++r) {
                        this.drawAnt(s, i + r, t);
                        this.drawAnt(s + u, i + r, t);
                      }
                      break;
                    case 14:
                      for (r = 0; r <= u; ++r) {
                        this.drawAnt(s + r, i, t);
                        this.drawAnt(s + r, i + u, t);
                      }
                  }
                }
              }
            } else {
              for (let p = 0, g = h.outline.length; p < g; p += 3) {
                a = h.outline[p];
                n = h.outline[p + 1];
                o = h.outline[p + 2];
                s = Math.round((a + h.offset.x - l.x) * r) + c;
                i = Math.round((n + h.offset.y - l.y) * r) + d;
                this.drawAnt(s, i, t);
              }
            }
            this.ctx.putImageData(t, 0, 0);
            this.dirty = true;
            if (!this.frozen) {
              this.timer = window.setTimeout(() => {
                if (--this.so < 0) {
                  this.so = 7;
                }
                if (!this.frozen) {
                  this.render();
                }
              }, 400);
            }
          };
          this.drawAnt = (t, e, s) => {
            e = ~~e;
            if ((t = ~~t) >= 0 && e >= 0 && t < this.raster.width && e < this.raster.height) {
              let i = (e * this.raster.width + t) * 4;
              if (this.ants[(t + this.so) % 8 * 8 + e % 8]) {
                s.data[i] = 0;
                s.data[i + 1] = 0;
                s.data[i + 2] = 0;
                s.data[i + 3] = 255;
              } else {
                s.data[i] = 255;
                s.data[i + 1] = 255;
                s.data[i + 2] = 255;
                s.data[i + 3] = 255;
              }
            }
          };
          this.clear = (t = false) => {
            if (t || this.dirty) {
              if (this.ctx) {
                this.ctx.clearRect(0, 0, this.raster.width, this.raster.height);
              }
              this.dirty = false;
            }
          };
          this.stage = t;
          this.raster = t.raster;
          this.ctx = this.raster.getContext("2d", {
            willReadFrequently: true
          });
          this.ctx.imageSmoothingEnabled = false;
          this.raster.addEventListener("mousemove", this.mouseMove, true);
          this.raster.addEventListener("mouseout", this.mouseLeave, true);
          this.raster.addEventListener("touchmove", this.touchMove, {
            passive: false
          });
          this.raster.addEventListener("touchend", this.touchEnd, {
            passive: false
          });
          this.raster.addEventListener("wheel", this.mouseWheel, {
            passive: false
          });
          this.raster.addEventListener("contextmenu", t => {
            t.preventDefault();
          }, false);
          if (h.Ay.product === "editor") {
            document.addEventListener("viewport-render", () => this.render(), false);
          }
        }
        getImageData() {
          return this.ctx.getImageData(0, 0, this.raster.width, this.raster.height);
        }
        drawAntPolygon(t) {
          this.clear();
          if (t.length > 0) {
            this.ctx.save();
            this.ctx.lineWidth = 1;
            this.ctx.translate(0.5, 0.5);
            this.ctx.strokeStyle = "#ffffff";
            this.ctx.beginPath();
            this.ctx.moveTo(t[0].x, t[0].y);
            t.forEach(t => {
              this.ctx.lineTo(t.x, t.y);
            });
            this.ctx.stroke();
            this.ctx.strokeStyle = "#000000";
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(t[0].x, t[0].y);
            t.forEach(t => {
              this.ctx.lineTo(t.x, t.y);
            });
            this.ctx.stroke();
            this.ctx.restore();
            this.dirty = true;
          }
          this.render(undefined, false);
        }
        drawAntBezier(t) {
          this.clear();
          if (t.length > 0) {
            this.ctx.save();
            this.ctx.lineWidth = 1;
            this.ctx.translate(0.5, 0.5);
            this.ctx.strokeStyle = "#ffffff";
            this.ctx.beginPath();
            this.ctx.moveTo(t[0].x, t[0].y);
            for (let e = 1; e < t.length; e += 2) {
              if (e + 1 === t.length) {
                this.ctx.lineTo(t[e].x, t[e].y);
              } else {
                this.ctx.quadraticCurveTo(t[e + 1].x, t[e + 1].y, t[e].x, t[e].y);
              }
            }
            this.ctx.stroke();
            this.ctx.strokeStyle = "#000000";
            this.ctx.setLineDash([5, 5]);
            this.ctx.beginPath();
            this.ctx.moveTo(t[0].x, t[0].y);
            for (let e = 1; e < t.length; e += 2) {
              if (e + 1 === t.length) {
                this.ctx.lineTo(t[e].x, t[e].y);
              } else {
                this.ctx.quadraticCurveTo(t[e + 1].x, t[e + 1].y, t[e].x, t[e].y);
              }
            }
            this.ctx.stroke();
            this.ctx.restore();
            this.dirty = true;
          }
          this.render(undefined, false);
        }
        drawAntRectangle(t) {
          this.clear();
          let e = this.getImageData();
          for (var s = 0; s < t.height; ++s) {
            this.drawAnt(t.x, t.y + s, e);
            this.drawAnt(t.right() - 1, t.y + s, e);
          }
          for (var i = 0; i < t.width; ++i) {
            this.drawAnt(t.x + i, t.y, e);
            this.drawAnt(t.x + i, t.bottom() - 1, e);
          }
          this.dirty = true;
          this.render(e, false);
        }
        drawAntEllipse(t) {
          this.clear();
          let e = this.getImageData();
          var s;
          var i;
          var a;
          var n;
          var o;
          var r;
          var h;
          var l;
          var c;
          var d;
          var u;
          var p;
          var g;
          var m;
          var y;
          var v;
          var f = t.width % 2 == 0 ? 1 : 0;
          var w = t.height % 2 == 0 ? 1 : 0;
          s = t.width * 0.5;
          h = 0;
          l = i = t.height * 0.5;
          u = (c = s * s) * (1 - (i << 1)) + (m = (d = i * i) << 1);
          p = d - (g = c << 1) * ((i << 1) - 1);
          a = m * 3;
          n = v = d << 2;
          o = (y = c << 2) * (i - 1);
          r = g * ((i << 1) - 3);
          this.drawAnt(t.x + h + s - f, t.y + l + i - w, e);
          this.drawAnt(t.x - h + s, t.y + l + i - w, e);
          this.drawAnt(t.x - h + s, t.y - l + i, e);
          this.drawAnt(t.x + h + s - f, t.y - l + i, e);
          do {
            if (u < 0) {
              u += a;
              p += n;
              a += v;
              n += v;
              h++;
            } else if (p < 0) {
              u += a - o;
              a += v;
              o -= y;
              p += n - r;
              n += v;
              r -= y;
              h++;
              l--;
            } else {
              u -= o;
              o -= y;
              p -= r;
              r -= y;
              l--;
            }
            this.drawAnt(t.x + h + s - f, t.y + l + i - w, e);
            this.drawAnt(t.x - h + s, t.y + l + i - w, e);
            this.drawAnt(t.x - h + s, t.y - l + i, e);
            this.drawAnt(t.x + h + s - f, t.y - l + i, e);
          } while (l > 0);
          this.dirty = true;
          this.render(e, false);
        }
        cleanUp() {
          window.clearTimeout(this.timer);
        }
      }
    }
