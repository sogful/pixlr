window.__editorModules[3566] = function (t, e, s) {
      s.d(e, {
        A: () => g
      });
      var i = s(5699);
      var a = s(5283);
      var n = s(3244);
      var o = s(7775);
      var r = s(6050);
      var h = s(3517);
      var l = s(2037);
      var c = s(1535);
      var d = s(5328);
      var u = s(3328);
      class p {
        constructor(t, e) {
          this.stage = t;
          this.angleChange = () => {
            let t = Number(this.angle.value.replace("°", ""));
            if (t < 0) {
              t = 0;
            }
            if (t > 360) {
              t = 360;
            }
            this.brush.settings.angle = Math.round(t);
            this.updatePreview(false);
          };
          this.updatePreview = t => {
            this.brush.settings.softness = this.softness.getValue();
            this.brush.settings.distance = this.distance.getValue();
            this.brush.settings.size = this.size.getValue() > 125 && t ? 125 : this.size.getValue();
            this.brush.generate();
            const e = this.preview.getContext("2d");
            e.clearRect(0, 0, e.canvas.width, e.canvas.height);
            const s = n.A.bestFit(this.brush.canvas.width, this.brush.canvas.height, e.canvas.width, e.canvas.height);
            e.drawImage(this.brush.canvas, s.x, s.y, s.width, s.height);
            this.renderStroke();
            this.renderOutline();
          };
          this.renderOutline = () => {
            const t = this.raster.getContext("2d");
            t.clearRect(0, 0, 120, 120);
            t.save();
            t.translate(60, 60);
            t.rotate(-this.brush.settings.angle * Math.PI / 180);
            const e = 45;
            const s = Math.round(this.brush.settings.aspect * 90) / 2;
            t.lineWidth = 2;
            t.fillStyle = "#999";
            t.strokeStyle = "#444";
            t.beginPath();
            t.moveTo(0, s);
            t.lineTo(0, -s);
            t.stroke();
            t.beginPath();
            t.moveTo(e, 0);
            t.lineTo(-45, 0);
            t.stroke();
            t.lineWidth = 2;
            t.strokeStyle = "#999";
            t.beginPath();
            t.ellipse(0, 0, e, s, 0, 0, Math.PI * 2);
            t.stroke();
            t.beginPath();
            t.ellipse(0, s, 6, 6, 0, 0, Math.PI * 2);
            t.fill();
            t.beginPath();
            t.ellipse(0, -s, 6, 6, 0, 0, Math.PI * 2);
            t.fill();
            t.beginPath();
            t.moveTo(50, -6);
            t.lineTo(50, 6);
            t.lineTo(58, 0);
            t.lineTo(50, -6);
            t.fill();
            t.restore();
          };
          this.renderStroke = () => {
            var t = this.stroke.getContext("2d");
            t.imageSmoothingQuality = "high";
            t.imageSmoothingEnabled = true;
            const e = n.A.bestFit(this.brush.canvas.width, this.brush.canvas.height, 30, 30);
            const s = Math.floor(this.brush.getStep() * (e.width / this.brush.canvas.width)) || 1;
            var i = 0;
            var a = Math.PI * 2 / ((t.canvas.width - 40) / s);
            let o = ~~(e.width / 2);
            let r = ~~(e.height / 2);
            t.clearRect(0, 0, t.canvas.width, t.canvas.height);
            for (let n = 20; n <= t.canvas.width - 20; n += s) {
              t.drawImage(this.brush.canvas, n - o, 30 - Math.sin(i) * 12 - r, e.width, e.height);
              i += a;
            }
          };
          this.setUp = () => {
            let t = this.brushpod.container.getBoundingClientRect();
            let e = this.stage.workspace.getBoundingClientRect();
            this.modal.addEventListener("click", t => {
              t.stopPropagation();
              t.preventDefault();
              if (t.target === t.currentTarget) {
                this.cleanUp();
              }
            }, false);
            this.container.style.top = t.bottom - 3 - e.y + "px";
            this.container.style.left = t.x - e.x + "px";
            this.container.style.height = "450px";
            this.container.style.display = "flex";
            this.size = new h.A("brush-size", {
              label: (0, o.A)("size"),
              range: [1, 100, 1000],
              step: [1, 10],
              stops: [0, 0.4, 1],
              defaultValue: this.brush.settings.size,
              labelFormat: t => t + "px",
              onChange: () => {
                this.updatePreview(true);
              },
              onEnd: () => {
                this.updatePreview(false);
              }
            });
            this.softness = new h.A("brush-softness", {
              label: (0, o.A)("softness"),
              defaultValue: this.brush.settings.softness,
              labelFormat: t => (t * 100).toFixed(0) + "%",
              labelParse: t => parseInt(t, 10) / 100,
              onChange: () => {
                this.updatePreview(true);
              },
              onEnd: () => {
                this.updatePreview(false);
              }
            });
            this.distance = new h.A("brush-step", {
              range: [0, 3],
              label: (0, o.A)("step"),
              defaultValue: this.brush.settings.distance,
              labelParse: t => parseInt(t, 1) / 100,
              labelFormat: t => (t * 100).toFixed(0) + "%",
              onChange: () => {
                this.updatePreview(true);
              },
              onEnd: () => {
                this.updatePreview(false);
              }
            });
            this.angle = (0, a.Ay)("brush-angle");
            this.angle.value = this.brush.settings.angle + "°";
            this.angle.addEventListener("input", this.angleChange, true);
            this.raster.addEventListener("mousedown", this.rasterDown, false);
            this.populatePresets();
            this.updatePreview(false);
          };
          this.rasterDown = t => {
            const e = this.raster.getBoundingClientRect();
            const s = new r.A(t.clientX - Math.round(e.x), t.clientY - Math.round(e.y));
            this.matrix = new c.A();
            this.matrix.reset();
            this.matrix.translate(new r.A(60, 60));
            this.matrix.rotate(-this.brush.settings.angle * Math.PI / 180);
            this.matrix.invert();
            this.down = this.matrix.transformPoint(s);
            if (this.down.x > 40 && this.down.y > -10 && this.down.y < 10) {
              this.target = "rotate";
            } else if (this.down.x > -10 && this.down.x < 10) {
              this.target = "size";
              this.down = s;
            }
            if (this.target !== undefined) {
              document.addEventListener("mousemove", this.rasterMove, false);
              document.addEventListener("mouseup", this.rasterUp, false);
            }
          };
          this.rasterMove = t => {
            const e = this.raster.getBoundingClientRect();
            let s = new r.A(t.clientX - Math.round(e.x), t.clientY - Math.round(e.y));
            if (this.target === "size") {
              this.matrix.reset();
              this.matrix.translate(new r.A(60, 60));
              this.matrix.rotate(-this.brush.settings.angle * Math.PI / 180);
              this.matrix.invert();
              s = this.matrix.transformPoint(s);
              this.brush.settings.aspect = i.qE(Math.abs(s.y) / 45, 0.1, 1);
            } else {
              let t = -180 / Math.PI * Math.atan2(s.y - 60, s.x - 60);
              if (t > 360) {
                t -= 360;
              } else if (t < 0) {
                t += 360;
              }
              this.brush.settings.angle = t;
              this.angle.value = Math.round(this.brush.settings.angle) + "°";
            }
            this.updatePreview(false);
          };
          this.rasterUp = t => {
            this.down = undefined;
            this.target = undefined;
            this.matrix = undefined;
            document.removeEventListener("mousemove", this.rasterMove, false);
            document.removeEventListener("mouseup", this.rasterUp, false);
          };
          this.populatePresets = () => {
            this.addPresetCollection("basic-circle", (0, o.A)("basicCircular"), false, [new u.A("circle", 1, 0.02), new u.A("circle", 5, 0.02), new u.A("circle", 10, 0.02), new u.A("circle", 15, 0.02), new u.A("circle", 20, 0.02), new u.A("circle", 30, 0.02), new u.A("circle", 50, 0.02), new u.A("circle", 70, 0.02), new u.A("circle", 100, 0.01), new u.A("circle", 200, 0.01), new u.A("circle", 400, 0.01), new u.A("circle", 500, 0.01), new u.A("circle", 5, 0.25), new u.A("circle", 10, 0.25), new u.A("circle", 20, 0.25), new u.A("circle", 30, 0.25), new u.A("circle", 40, 0.25), new u.A("circle", 50, 0.25), new u.A("circle", 70, 0.25), new u.A("circle", 100, 0.25), new u.A("circle", 150, 0.25), new u.A("circle", 200, 0.25), new u.A("circle", 400, 0.25), new u.A("circle", 500, 0.25), new u.A("circle", 5, 0.5), new u.A("circle", 10, 0.5), new u.A("circle", 20, 0.5), new u.A("circle", 30, 0.5), new u.A("circle", 40, 0.5), new u.A("circle", 50, 0.5), new u.A("circle", 70, 0.5), new u.A("circle", 100, 0.5), new u.A("circle", 150, 0.5), new u.A("circle", 200, 0.5), new u.A("circle", 400, 0.5), new u.A("circle", 500, 0.5)]);
            this.addPresetCollection("basic-shapes", (0, o.A)("basicShapes"), false, [new u.A("square", 4, 0), new u.A("square", 6, 0), new u.A("square", 10, 0), new u.A("square", 20, 0), new u.A("square", 30, 0), new u.A("square", 50, 0), new u.A("square", 70, 0), new u.A("square", 100, 0), new u.A("square", 200, 0), new u.A("square", 300, 0), new u.A("square", 400, 0), new u.A("square", 500, 0), new u.A("diamond", 50, 0.8), new u.A("diamond", 100, 0.8), new u.A("diamond", 100, 0.8, 1, 0, 0.5, 5), new u.A("diamond", 100, 0.8, 1, 0, 0.25, 7), new u.A("diamond", 100, 0.01, 1, 45, 0.25, 4, 1.5), new u.A("diamond", 100, 0.01, 1, 0, 0.25, 5, 1.5), new u.A("diamond", 100, 0.01, 1, 0, 0.25, 6, 1.5), new u.A("diamond", 100, 0.01, 1, 0, 0.25, 7, 1.5), new u.A("circle", 10, 0.1, 1, 60, 0.2, 2, 0.07), new u.A("circle", 20, 0.1, 1, 60, 0.2, 2, 0.07), new u.A("circle", 50, 0.1, 1, 60, 0.2, 2, 0.07), new u.A("circle", 100, 0.1, 1, 60, 0.2, 2, 0.07), new u.A("square", 100, 0.8, 1, 0, 0.5, 5), new u.A("square", 100, 0.8, 1, 0, 0.25, 7), new u.A("square", 100, 0.01, 1, 45, 0.25, 4, 1.5), new u.A("square", 100, 0.01, 1, 0, 0.25, 5, 1.5), new u.A("square", 100, 0.01, 1, 0, 0.25, 6, 1.5), new u.A("square", 100, 0.01, 1, 0, 0.25, 7, 1.5), new u.A("square", 100, 0.01, 1, 0, 1, 5, 1.5), new u.A("square", 100, 0.01, 1, 0, 1, 6, 1.5), new u.A("square", 100, 0.01, 1, 0, 1, 7, 1.5), new u.A("circle", 100, 0.01, 1, 0, 0.25, 5, 1.5), new u.A("circle", 100, 0.01, 1, 0, 0.25, 6, 1.5), new u.A("circle", 100, 0.01, 1, 0, 0.25, 7, 1.5)]);
          };
          this.addPresetCollection = (t, e, s, n) => {
            const o = (0, a.T)("div");
            const r = (0, a.T)("div", {
              className: "toggle"
            });
            const h = (0, a.Ay)("brush-editor-presets-ss-content").hasChildNodes() ? "subline top-10" : "subline";
            o.append((0, a.T)("input", {
              type: "checkbox",
              className: "toggle-check",
              checked: true,
              id: "brush-pack-" + t
            }), (0, a.T)("label", {
              className: h,
              htmlFor: "brush-pack-" + t
            }, e, (0, a.T)("span", {
              className: "arrow"
            })), r);
            const c = new l.A(new u.A());
            n.forEach(t => {
              const e = (0, a.T)("div", {
                className: "brush-setting-pod"
              });
              e.setAttribute("data", JSON.stringify(t));
              e.addEventListener("click", this.selectPreset, true);
              e.appendChild((0, a.T)("span", {}, t.size.toString()));
              if (t.size > 30) {
                t.size = 30;
              }
              c.settings = t;
              c.generate();
              const s = i.oM(c.canvas);
              s.classList.add("ic");
              e.appendChild(s);
              r.append(e);
            });
            (0, a.Ay)("brush-editor-presets-ss-content").append(o);
          };
          this.selectPreset = t => {
            var e;
            if ((e = this.selected) !== null && e !== undefined) {
              e.classList.remove("active");
            }
            this.selected = t.currentTarget;
            this.selected.classList.add("active");
            this.brush.setSettingsString(this.selected.getAttribute("data"));
            this.size.setValue(this.brush.settings.size);
            this.softness.setValue(this.brush.settings.softness);
            this.distance.setValue(this.brush.settings.distance);
            this.angle.value = Math.round(this.brush.settings.angle) + "°";
            this.updatePreview(false);
          };
          this.resizeStart = t => {
            this.down = new r.A(this.container.clientHeight, t.y);
          };
          this.resizeMove = t => {
            const e = this.down.x + (t.y - this.down.y);
            this.container.style.height = (e < 320 ? 320 : e) + "px";
          };
          this.cleanUp = () => {
            this.angle.removeEventListener("input", this.angleChange, true);
            this.raster.removeEventListener("mousedown", this.rasterDown, false);
            this.brushpod.update();
            this.size.cleanUp();
            this.softness.cleanUp();
            this.distance.cleanUp();
            this.container.remove();
            this.modal.remove();
          };
          this.brushpod = e;
          this.brush = e.brush;
          this.modal = this.stage.workspace.appendChild((0, a.T)("div", {
            id: "brush-editor-modal",
            className: "modal"
          }));
          let s = (0, a.T)("div", {
            className: "tab-10"
          });
          let p = (0, a.T)("div", {
            style: "flex-grow:1"
          });
          this.presets = (0, a.T)("div", {
            id: "brush-editor-presets",
            className: "brush-editor-presets"
          });
          this.container = (0, a.T)("div", {
            id: "brush-editor",
            className: "brush-editor"
          }, (0, a.T)("div", {
            id: "brush-editor-top",
            className: "brush-editor-top"
          }, s, p), this.presets);
          this.stage.workspace.appendChild(this.container);
          this.preview = (0, a.T)("canvas", {
            id: "brush-preview",
            className: "brush-preview ic",
            width: 120,
            height: 120
          });
          this.raster = (0, a.T)("canvas", {
            id: "brush-raster",
            className: "brush-raster ic",
            width: 120,
            height: 120
          });
          this.stroke = (0, a.T)("canvas", {
            id: "brush-stroke",
            className: "brush-stroke ic",
            width: 252,
            height: 60
          });
          const g = (0, a.T)("div", {
            className: "switch-icon-field stretch",
            style: "display:none"
          }, (0, a.T)("input", {
            type: "radio",
            id: "brush-shape-circle",
            name: "brush-shape",
            value: "circle"
          }), (0, a.T)("label", {
            htmlFor: "brush-shape-circle"
          }, (0, a.T)("img", {
            src: "assets/images/icon/type-circle.svg",
            className: "ic"
          })), (0, a.T)("input", {
            type: "radio",
            id: "brush-shape-square",
            name: "brush-shape",
            value: "square"
          }), (0, a.T)("label", {
            htmlFor: "brush-shape-square"
          }, (0, a.T)("img", {
            src: "assets/images/icon/type-square.svg",
            className: "ic"
          })), (0, a.T)("input", {
            type: "radio",
            id: "brush-shape-diamond",
            name: "brush-shape",
            value: "diamond"
          }), (0, a.T)("label", {
            htmlFor: "brush-shape-diamond"
          }, (0, a.T)("img", {
            src: "assets/images/icon/type-diamond.svg",
            className: "ic"
          })));
          s.append((0, a.T)("div", {
            style: "display:flex;width:"
          }, (0, a.T)("div", {
            className: "brush-preview-holder"
          }, this.preview), (0, a.T)("div", {
            className: "brush-raster-holder"
          }, this.raster)), (0, a.T)("div", {
            className: "brush-stroke-holder"
          }, this.stroke), g, (0, a.T)("input", {
            id: "brush-angle",
            type: "text",
            style: "padding:0px !important;width:30px !important;height:14px !important;font-size:10px;display:block;position:absolute;top:117px;right:12px;border:none !important;background:none !important;text-align:right;"
          }));
          p.append((0, a.T)("div", {
            style: "height:122px;",
            className: "brush-control-holder"
          }, (0, a.T)("div", {
            id: "brush-size"
          }), (0, a.T)("div", {
            id: "brush-softness",
            className: "top-4"
          })));
          p.append((0, a.T)("div", {
            style: "height:62px;margin-top:10px",
            className: "brush-control-holder"
          }, (0, a.T)("div", {
            id: "brush-step"
          })));
          new d.A(this.presets);
          const m = (0, a.T)("img", {
            id: "brush-resize",
            src: "assets/images/icon/three-dot.svg",
            className: "resize ic"
          });
          (0, a.Bb)(m, this.resizeStart, this.resizeMove);
          this.container.append(m);
          this.setUp();
        }
      }
      class g {
        constructor(t, e, s, o) {
          this.stage = t;
          this.stepSoftness = t => {
            this.brush.settings.softness = i.qE(this.brush.settings.softness + t, 0, 1);
            this.brush.generate();
            this.update();
          };
          this.stepSize = t => {
            this.brush.settings.size = i.qE(this.brush.settings.size + t, 1, 999);
            this.brush.generate();
            this.update();
          };
          this.update = (t = true) => {
            let e = this.preview.getContext("2d");
            e.imageSmoothingQuality = "high";
            e.imageSmoothingEnabled = true;
            e.clearRect(0, 0, e.canvas.width, e.canvas.height);
            const s = n.A.bestFit(this.brush.canvas.width, this.brush.canvas.height, e.canvas.width, e.canvas.height);
            e.drawImage(this.brush.canvas, s.x, s.y, s.width, s.height);
            this.size.innerText = this.brush.settings.size.toString();
            if (t && this.callback) {
              this.callback(this.brush);
            }
          };
          this.toggle = () => {
            new p(this.stage, this);
          };
          this.cleanUp = () => {
            this.container.setAttribute("data", this.brush.getSettingsString());
            this.container.removeEventListener("click", this.toggle, false);
          };
          this.name = e;
          this.brush = s;
          this.callback = o;
          this.container = (0, a.Ay)(e);
          if (this.container.hasChildNodes()) {
            this.preview = (0, a.Ay)(e + "-canvas");
            this.size = (0, a.Ay)(e + "-size");
            if (this.container.hasAttribute("data")) {
              this.brush.setSettingsString(this.container.getAttribute("data"));
            }
          } else {
            this.container.classList.add("brush-pod");
            this.preview = (0, a.T)("canvas", {
              id: e + "-canvas",
              width: 32,
              height: 32,
              className: "ic"
            });
            this.container.append(this.preview);
            this.size = (0, a.T)("div", {
              id: e + "-size"
            });
            this.container.append((0, a.T)("div", {
              id: e + "-hold"
            }, this.size, (0, a.T)("img", {
              id: e + "-more",
              src: "assets/images/icon/more.svg",
              className: "ic"
            })));
          }
          this.container.addEventListener("click", this.toggle, false);
          this.update(false);
        }
      }
    }
