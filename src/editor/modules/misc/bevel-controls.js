window.__editorModules[9421] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(5283);
      var o = s(7135);
      var r = s(3517);
      var h = s(5259);
      var l = s(6957);
      var c = s(833);
      class d {
        constructor(t, e, s, i) {
          this.update = i;
          this.maxElevation = Math.PI / 2;
          this.getAngle = () => this.angle;
          this.getElevation = () => this.elevation;
          this.setAngle = t => {
            this.angle = t;
            if (this.angle < 0) {
              this.angle = Math.PI * 2 - Math.abs(this.angle);
            }
            this.render();
          };
          this.setElevation = t => {
            this.elevation = t;
            this.render();
          };
          this.start = t => {
            document.addEventListener("mousemove", this.move);
            document.addEventListener("mouseup", this.end);
            this.handle.classList.add("grabbed");
          };
          this.move = t => {
            t.preventDefault();
            t.stopPropagation();
            const e = this.outerCircle.getBoundingClientRect();
            const s = e.width / 2 - 2;
            const i = e.width / 2 + e.x;
            const a = e.height / 2 + e.y;
            const n = t.clientX - i;
            const o = t.clientY - a;
            const r = Math.sqrt(n * n + o * o);
            this.angle = Math.atan2(o, n);
            if (this.angle < 0) {
              this.angle = Math.PI * 2 - Math.abs(this.angle);
            }
            if (r > s) {
              this.elevation = 0;
              this.render();
            } else {
              const t = r / s;
              this.elevation = (1 - t) * this.maxElevation;
              this.render();
            }
            this.container.dataset.angle = this.angle.toFixed(5);
            this.container.dataset.elevation = this.elevation.toFixed(5);
            if (this.update) {
              this.update(this.angle, this.elevation);
            }
          };
          this.end = t => {
            document.removeEventListener("mousemove", this.move);
            document.removeEventListener("mouseup", this.end);
            this.handle.classList.remove("grabbed");
          };
          this.buildElements = () => {
            this.outerCircle = (0, n.T)("div", {
              className: "outer-circle"
            });
            this.handle = (0, n.T)("div", {
              className: "handle"
            }, (0, n.T)("div"));
            this.container.append(this.outerCircle, this.handle);
          };
          this.rebindElements = () => {
            this.outerCircle = this.container.querySelector(".outer-circle");
            this.handle = this.container.querySelector(".handle");
          };
          this.render = () => {
            const t = this.outerCircle.getBoundingClientRect();
            const e = this.handle.getBoundingClientRect();
            const s = (1 - this.elevation / this.maxElevation) * (t.width / 2 - 2);
            const i = Math.round(s * Math.cos(this.angle));
            const a = Math.round(s * Math.sin(this.angle));
            window.requestAnimationFrame(() => {
              this.handle.style.top = a + (t.height / 2 - e.height / 2) + "px";
              this.handle.style.left = i + (t.width / 2 - e.width / 2) + "px";
            });
          };
          this.cleanUp = () => {};
          this.container = (0, n.Ay)(t);
          if (this.container.querySelector(".outer-circle")) {
            this.rebindElements();
          } else {
            this.buildElements();
          }
          this.angle = parseFloat(this.container.dataset.angle) || e;
          if (this.angle < 0) {
            this.angle = Math.PI * 2 - Math.abs(this.angle);
          }
          this.elevation = parseFloat(this.container.dataset.elevation) || s;
          this.handle.addEventListener("mousedown", this.start);
          this.render();
        }
      }
      var u = s(9310);
      class p extends u.A {
        constructor(t) {
          super(t, (0, i.A)("titleBevel"));
          this.load = async () => {
            const t = Promise.resolve().then(s.bind(s, 2355));
            const e = a.D9();
            await e;
            const {
              distanceTransformInv: i
            } = await t;
            const r = this.shaders.ctx;
            const h = this.cache.getContext("2d").getImageData(0, 0, this.cache.width, this.cache.height);
            const l = i(this.cache.width, this.cache.height, h.data);
            if (!r.getSupportedExtensions().includes("OES_texture_float")) {
              alert("sorry, this filter requires float textures");
              (0, o.A)("OES_texture_float");
              return;
            }
            r.getExtension("OES_texture_float");
            const c = r.createTexture();
            r.bindTexture(r.TEXTURE_2D, c);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
            r.texImage2D(r.TEXTURE_2D, 0, r.ALPHA, this.cache.width, this.cache.height, 0, r.ALPHA, r.FLOAT, l);
            r.bindTexture(r.TEXTURE_2D, null);
            (0, n.Ay)("bevel-loading").style.display = "none";
            (0, n.Ay)("bevel-controls").style.visibility = "visible";
            this.enableApply();
            this.map = c;
            this.update();
          };
          this.update = () => {
            const t = {
              depth: this.depth.getValue(),
              size: this.size.getValue(),
              lightAngle: this.angle.getAngle(),
              lightElevation: this.angle.getElevation(),
              lowLightColor: this.lowLightColor.getColor(),
              highLightColor: this.highLightColor.getColor(),
              lowOpacity: this.lowOpacity.getValue(),
              highOpacity: this.highOpacity.getValue(),
              distanceMap: this.map
            };
            this.change("bevel", t.size ? t : null);
          };
          this.disableApply();
          this.kind = "bevel";
          this.shaders = new l.A();
          this.setContent((0, n.T)("div", {
            className: "dialog-loading"
          }, (0, n.T)("div", {
            id: "bevel-controls",
            className: "controls"
          }, (0, n.T)("div", {
            className: "bevel-angle"
          }, (0, n.T)("div", {
            className: "angle-box-holder"
          }, (0, n.T)("div", {
            id: "bevel-angle",
            className: "angle-box top-10"
          })), (0, n.T)("div", {
            className: "angle-box-sliders"
          }, (0, n.T)("div", {
            id: "bevel-angle-slider",
            className: "top-10"
          }), (0, n.T)("div", {
            id: "bevel-elevation-slider",
            className: "top-10"
          }))), (0, n.T)("div", {
            id: "bevel-size",
            className: "top-20"
          }), (0, n.T)("div", {
            id: "bevel-depth",
            className: "top-10"
          }), (0, n.T)("label", {
            className: "split top-10"
          }, (0, i.A)("dialogBevelHighColor"), (0, n.T)("div", {
            id: "bevel-highlight-color"
          })), (0, n.T)("div", {
            id: "bevel-high-opacity",
            className: "top-15"
          }), (0, n.T)("label", {
            className: "split top-10"
          }, (0, i.A)("dialogBevelShadowColor"), (0, n.T)("div", {
            id: "bevel-lowlight-color"
          })), (0, n.T)("div", {
            id: "bevel-low-opacity",
            className: "top-15"
          })), (0, n.T)("div", {
            id: "bevel-loading",
            className: "message"
          }, (0, n.T)("label", {
            className: "working"
          }, (0, i.A)("loading")))));
          this.highLightColor = new c.A("bevel-highlight-color", h.A.fromHEX("#ffffff"), this.update, this.update);
          this.lowLightColor = new c.A("bevel-lowlight-color", h.A.fromHEX("#000000"), this.update, this.update);
          this.size = new r.A("bevel-size", {
            label: (0, i.A)("size"),
            range: [0, 150],
            defaultValue: 10,
            step: 1,
            labelFormat: t => `${t}px`,
            onChange: () => this.update()
          });
          const e = -Math.PI / 4;
          this.angle = new d("bevel-angle", e, 0, (t, e) => {
            let s = (t * (180 / Math.PI) + 90) % 360;
            this.angleSlider.setValue(s);
            this.elevationSlider.setValue(e * (180 / Math.PI));
            this.update();
          });
          this.angleSlider = new r.A("bevel-angle-slider", {
            label: (0, i.A)("angle"),
            range: [0, 360],
            step: 1,
            defaultValue: 45,
            labelFormat: t => t.toFixed(0) + "°",
            labelParse: t => parseInt(t, 10),
            onChange: t => {
              this.angle.setAngle((t - 90) * (Math.PI / 180));
              this.update();
            }
          });
          this.elevationSlider = new r.A("bevel-elevation-slider", {
            label: (0, i.A)("elevation"),
            range: [0, 90],
            defaultValue: this.angle.getElevation() * 180 / Math.PI,
            step: 1,
            labelFormat: t => t.toFixed(0) + "°",
            labelParse: t => parseInt(t, 10),
            onChange: t => {
              this.angle.setElevation(t * (Math.PI / 180));
              this.update();
            }
          });
          this.depth = new r.A("bevel-depth", {
            label: (0, i.A)("depth"),
            range: [0.001, 1],
            defaultValue: 1,
            step: 0.001,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.highOpacity = new r.A("bevel-high-opacity", {
            label: (0, i.A)("dialogBevelHighOpacity"),
            range: [0, 1],
            defaultValue: 0.9,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.lowOpacity = new r.A("bevel-low-opacity", {
            label: (0, i.A)("dialogBevelShadowOpacity"),
            range: [0, 1],
            defaultValue: 0.75,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.position();
          this.load();
        }
      }
    }
