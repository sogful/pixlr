window.__editorModules[4932] = function (t, e, s) {
      s.d(e, {
        A: () => c
      });
      var i = s(749);
      var a = s(5699);
      var n = s(3244);
      var o = s(5259);
      var r = s(6050);
      var h = s(7732);
      var l = s(7516);
      class c extends i.A {
        constructor(t = a.Os(), e, s, d = new l.A()) {
          super(i.A.TYPE_FRAME);
          this.id = t;
          this.prepare = () => {
            this.setPath();
          };
          this.calculate = (t, e, s) => {
            if (this.editMode && this.trim) {
              this.trim.x = Math.round(t.x);
              this.trim.y = Math.round(t.y);
              this.trim.width = Math.round(e.x - t.x);
              this.trim.height = s === 0 ? Math.round(e.y - t.y) : Math.round(this.trim.width / (this.canvas.width / this.canvas.height));
              if (this.trim.width < 10) {
                this.trim.width = 10;
              }
              if (this.trim.height < 10) {
                this.trim.height = 10;
              }
            } else {
              this.rect.x = Math.round(t.x);
              this.rect.y = Math.round(t.y);
              this.rect.width = Math.round(e.x - t.x);
              this.rect.height = s !== 0 ? Math.round(this.rect.width / s) : Math.round(e.y - t.y);
              if (this.rect.width < 10) {
                this.rect.width = 10;
              }
              if (this.rect.height < 10) {
                this.rect.height = 10;
              }
            }
          };
          this.setWidth = (t, e) => {
            if (this.rect) {
              if (t < 1) {
                t = 1;
              }
              if (this.editMode && this.trim) {
                this.trim.width = t;
                if (e !== 0) {
                  this.trim.height = Math.round(this.trim.width / (this.canvas.width / this.canvas.height));
                }
              } else {
                this.rect.width = t;
                if (e !== 0) {
                  this.rect.height = this.rect.width * e;
                }
              }
              this.render();
            }
          };
          this.setHeight = (t, e) => {
            if (this.rect) {
              if (t < 1) {
                t = 1;
              }
              if (this.editMode && this.trim) {
                this.trim.height = t;
                if (e !== 0) {
                  this.trim.height = Math.round(this.trim.height / (this.canvas.height / this.canvas.width));
                }
              } else {
                this.rect.height = t;
                if (e !== 0) {
                  this.rect.width = this.rect.height / e;
                }
              }
              this.render();
            }
          };
          this.position = (t, e) => {
            if (this.rect) {
              if (this.editMode) {
                if (this.trim) {
                  if (t !== undefined) {
                    this.trim.x = t;
                  }
                  if (e !== undefined) {
                    this.trim.y = e;
                  }
                }
                this.render();
              } else {
                if (t !== undefined) {
                  this.rect.x = t;
                }
                if (e !== undefined) {
                  this.rect.y = e;
                }
                this.bect.x = this.rect.x - (this.bect.width - this.rect.width) / 2;
                this.bect.y = this.rect.y - (this.bect.height - this.rect.height) / 2;
              }
            }
          };
          this.scale = (t, e) => {
            if (this.rect) {
              this.rect.x = Math.round(this.rect.x * t);
              this.rect.y = Math.round(this.rect.y * e);
              this.rect.width = Math.round(this.rect.width * t);
              this.rect.height = Math.round(this.rect.height * e);
              if (this.trim) {
                this.trim.x = Math.round(this.trim.x * t);
                this.trim.y = Math.round(this.trim.y * e);
                this.trim.width = Math.round(this.trim.width * t);
                this.trim.height = Math.round(this.trim.height * e);
              }
              if (this.frameSettings.outlineSize > 0) {
                this.frameSettings.outlineSize = Math.round(this.frameSettings.outlineSize * t);
              }
              if (this.frameSettings.shadow) {
                this.frameSettings.shadowDistance = Math.round(this.frameSettings.shadowDistance * 100 * t) / 100;
                this.frameSettings.shadowBlur = Math.round(this.frameSettings.shadowBlur * 100 * t) / 100;
              }
              this.render();
            }
          };
          this.rotate = t => {
            this.rect.rotation += t ? -90 : 90;
          };
          this.flip = t => {
            if (this.canvas) {
              this.canvas = a.yz(this.canvas, t);
              this.render();
            }
          };
          this.setPath = (t = this.frameSettings.clip, e = false) => {
            if (!e) {
              this.frameSettings.clip = t;
            }
            this.path2D = new Path2D(t);
            this.render();
          };
          this.setOutline = (t, e, s) => {
            this.frameSettings.outline = t;
            this.frameSettings.outlineSize = e;
            this.frameSettings.outlineColor = s;
            this.render();
          };
          this.setShadow = (t, e, s, i, a, n) => {
            this.frameSettings.shadow = t;
            this.frameSettings.shadowBlur = e;
            this.frameSettings.shadowOpacity = s;
            this.frameSettings.shadowColor = i;
            this.frameSettings.shadowDistance = a;
            this.frameSettings.shadowDirection = n;
            this.render();
          };
          this.setFrameSettings = t => {
            this.frameSettings = t;
            this.render();
          };
          this.setContent = t => {
            this.canvas = t;
            this.fitContent();
          };
          this.trimOnResize = t => {
            if (!this.trim) {
              return;
            }
            let e = this.rect.getComparedScale(t);
            this.trim.x = Math.round(this.trim.x * e.width);
            this.trim.y = Math.round(this.trim.y * e.height);
            this.trim.width = Math.round(this.trim.width * e.width);
            this.trim.height = Math.round(this.trim.height * e.height);
          };
          this.fitContent = () => {
            if (this.canvas) {
              this.trim = n.A.fillFit(this.canvas.width, this.canvas.height, this.rect.width, this.rect.height);
            } else {
              this.trim = undefined;
            }
            this.render();
          };
          this.getGlobalTrim = () => {
            if (this.trim) {
              return new n.A(this.rect.x + this.trim.x, this.rect.y + this.trim.y, this.trim.width, this.trim.height, this.rect.rotation);
            }
          };
          this.scaleTrim = (t, e) => {
            if (this.trim) {
              let s = this.trim.clone();
              this.trim.x = Math.round(this.trim.x * t);
              this.trim.y = Math.round(this.trim.y * e);
              this.trim.width = Math.round(this.trim.width * t);
              this.trim.height = Math.round(this.trim.height * e);
              if (this.trim.width < 1) {
                this.trim.width = 1;
              }
              if (this.trim.height < 1) {
                this.trim.height = 1;
              }
              this.trim = s;
            }
            this.render();
          };
          this.render = () => {
            this.frameSettings.clip;
            this.bect = this.rect.clone();
            if (this.frameSettings.shadow) {
              let t = this.frameSettings.shadowBlur * 100;
              t += Math.abs(this.frameSettings.shadowDistance * 100);
              this.bect.width += t * 2;
              this.bect.height += t * 2;
              this.bect.x -= t;
              this.bect.y -= t;
            }
            const t = this.baked.getContext("2d");
            if (this.baked.width !== this.bect.width || this.baked.height !== this.bect.height) {
              this.baked.height = this.bect.height;
              this.baked.width = this.bect.width;
            } else {
              t.clearRect(0, 0, this.baked.width, this.baked.height);
            }
            const e = new Path2D();
            let s = t.lineWidth = this.frameSettings.outline ? Math.round(this.frameSettings.outlineSize * 100) : this.canvas ? 0 : 2;
            if (this.path2D) {
              e.addPath(this.path2D, new DOMMatrix().scale((this.rect.width - s) / 100, (this.rect.height - s) / 100));
            }
            t.save();
            t.translate(this.rect.x - this.bect.x + s / 2, this.rect.y - this.bect.y + s / 2);
            if (this.canvas) {
              if (this.frameSettings.outline) {
                t.strokeStyle = this.frameSettings.outlineColor;
                t.lineWidth = s;
                if (this.frameSettings.shadow) {
                  this.shadowContext(t);
                }
                t.fill(e);
                t.stroke(e);
              } else if (this.frameSettings.shadow) {
                this.shadowContext(t);
                t.fill(e);
              }
              t.shadowBlur = t.shadowOffsetX = t.shadowOffsetY = 0;
              t.clip(e);
              t.imageSmoothingEnabled = true;
              t.imageSmoothingQuality = "high";
              t.drawImage(this.canvas, this.trim.x - s / 2, this.trim.y - s / 2, this.trim.width, this.trim.height);
            } else {
              t.save();
              if (this.frameSettings.outline) {
                t.strokeStyle = this.frameSettings.outlineColor;
              } else {
                t.strokeStyle = "#ccc";
              }
              t.fillStyle = "rgba(0, 0, 0, 0.3)";
              if (this.frameSettings.shadow) {
                this.shadowContext(t);
              }
              t.fill(e);
              t.stroke(e);
              t.restore();
              const s = new r.A(Math.round(this.bect.width / 2), Math.round(this.bect.height / 2));
              let i = 20;
              t.lineWidth = 8;
              if (this.rect.width > 500 && this.rect.height > 500) {
                t.lineWidth = 16;
                i = 40;
              }
              t.strokeStyle = "rgba(255, 255, 255, 0.5)";
              t.beginPath();
              t.moveTo(s.x - i, s.y);
              t.lineTo(s.x + i, s.y);
              t.moveTo(s.x, s.y - i);
              t.lineTo(s.x, s.y + i);
              t.closePath();
              t.stroke();
            }
            t.restore();
          };
          this.shadowContext = t => {
            const e = o.A.fromHEX(this.frameSettings.shadowColor, Math.round(this.frameSettings.shadowOpacity * 255)).toRGBA();
            var s = (this.frameSettings.shadowDirection - 90) * Math.PI / 180;
            var i = Math.cos(s) * this.frameSettings.shadowDistance;
            var a = Math.sin(s) * this.frameSettings.shadowDistance;
            t.fillStyle = e;
            t.shadowColor = e;
            t.shadowBlur = this.frameSettings.shadowBlur * 100;
            t.shadowOffsetX = i * 100;
            t.shadowOffsetY = a * 100;
          };
          this.replaceCanvas = t => {
            const e = this.canvas.getContext("2d");
            e.save();
            e.globalCompositeOperation = "copy";
            e.drawImage(t, 0, 0);
            e.restore();
          };
          this.switchCanvas = (t, e) => {
            this.canvas = t;
            this.trim = e.clone();
            this.render();
          };
          this.rasterize = () => {
            let t = this.baked ? this.baked : this.canvas;
            let e = this.bect ? this.bect.clone() : this.rect.clone();
            const s = new h.A(a.Os(), this.settings.name, t, e, this.settings.locked);
            s.settings = Object.assign({}, this.settings);
            s.applyTransform();
            return s;
          };
          this.clone = (t = false) => {
            var e;
            let s = new c(t ? this.id : a.Os(), this.settings.name, this.rect.clone(), this.frameSettings.clone());
            s.settings = Object.assign({}, this.settings);
            s.trim = (e = this.trim) === null || e === undefined ? undefined : e.clone();
            s.canvas = a.oM(this.canvas);
            s.render();
            if (t) {
              s.id = this.id;
              s.settings.name = this.settings.name;
            }
            return s;
          };
          this.rect = s;
          this.settings.name = e;
          this.frameSettings = d;
          this.baked = a.Nw(s.width, s.height);
          this.prepare();
        }
      }
    }
