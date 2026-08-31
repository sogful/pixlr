window.__editorModules[9632] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(5699);
      var a = s(749);
      var n = s(4587);
      var o = s(3244);
      var r = s(5259);
      var h = s(6050);
      var l = s(7572);
      var c = s(7732);
      var d = s(5056);
      class u extends a.A {
        constructor(t = i.Os(), e, s, p) {
          super(a.A.TYPE_SHAPE);
          this.id = t;
          this.prepare = async () => {
            if (this.shapeSettings.variant === "svg" && !this.image) {
              let t = new Blob([this.shapeSettings.content], {
                type: "image/svg+xml"
              });
              this.image = await (0, d.Ep)(t);
              this.rect ||= new o.A(0, 0, this.image.width, this.image.height);
            }
            if (this.shapeSettings.variant === "path") {
              this.path2D = new Path2D(this.shapeSettings.content);
            }
            if (this.shapeSettings.fillType) {
              this.fill = await n.A.fromString(this.shapeSettings.fillType, this.shapeSettings.fillValue);
              document.dispatchEvent(new CustomEvent("layer-select"));
            }
            if (this.shapeSettings.variant === "line" && this.shapeSettings.outlineSize !== this.rect.height) {
              this.rect.height = this.shapeSettings.outlineSize;
            }
            this.canvas ||= i.Nw(this.rect.width, this.rect.height);
            this.render();
          };
          this.setVariant = t => {
            switch (t) {
              case "rounded":
                this.shapeSettings.variant = "rounded";
                break;
              case "rectangle":
                this.shapeSettings.variant = "rectangle";
                break;
              case "ellipse":
                this.shapeSettings.variant = "ellipse";
                break;
              case "line":
                this.shapeSettings.variant = "line";
            }
            this.render();
          };
          this.setPath = (t, e = false) => {
            if (!e) {
              this.shapeSettings.content = t;
            }
            this.shapeSettings.variant = "path";
            this.path2D = new Path2D(t);
            this.render();
          };
          this.setFill = (t, e = false) => {
            this.fill = t;
            if (!e) {
              this.shapeSettings.fillType = this.fill ? t.getType() : undefined;
              this.shapeSettings.fillValue = this.fill ? t.getStringValue() : undefined;
            }
            this.render();
          };
          this.setOutline = (t, e) => {
            this.shapeSettings.outlineSize = t;
            this.shapeSettings.outlineColor = e;
            if (this.shapeSettings.variant === "line") {
              this.rect.height = t === 0 ? 1 : t;
            }
            this.render();
          };
          this.setShadow = (t, e, s, i, a, n) => {
            this.shapeSettings.shadow = t;
            this.shapeSettings.shadowBlur = e;
            this.shapeSettings.shadowOpacity = s;
            this.shapeSettings.shadowColor = i;
            this.shapeSettings.shadowDistance = a;
            this.shapeSettings.shadowDirection = n;
            this.render();
          };
          this.setRadii = t => {
            this.shapeSettings.radii = t;
            this.render();
          };
          this.render = (t = false) => {
            if (!this.canvas) {
              return;
            }
            const e = this.canvas.getContext("2d");
            if (this.canvas.width !== this.rect.width || this.canvas.height !== this.rect.height) {
              this.canvas.height = this.rect.height;
              this.canvas.width = this.rect.width;
            } else {
              e.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
            if (this.shapeSettings.variant === "svg") {
              e.imageSmoothingEnabled = true;
              e.imageSmoothingQuality = "high";
              e.drawImage(this.image, 0, 0, this.rect.width, this.rect.height);
              return;
            }
            if (this.shapeSettings.variant === "line") {
              e.fillStyle = this.shapeSettings.outlineColor;
              e.fillRect(0, 0, this.rect.width, this.rect.height);
            } else {
              e.save();
              let t;
              let s = this.shapeSettings.outlineSize * 2;
              let i = this.shapeSettings.outlineSize;
              let a = this.rect.width - s;
              let n = this.rect.height - s;
              let o = i > 0;
              let r = !!this.fill && !!this.fill.value;
              e.lineWidth = s;
              e.strokeStyle = this.shapeSettings.outlineColor;
              switch (this.shapeSettings.variant) {
                case "path":
                  t = new Path2D();
                  t.addPath(this.path2D, new DOMMatrix().scale(a / 100, n / 100));
                  e.translate(i, i);
                  break;
                case "rounded":
                  l.A.roundRect(e, i, i, a, n, this.shapeSettings.radii);
                  break;
                case "rectangle":
                  l.A.rectangle(e, i, i, a, n);
                  break;
                case "ellipse":
                  l.A.ellipse(e, new h.A(i, i), new h.A(i + a, i + n));
              }
              if (o && t) {
                e.stroke(t);
              } else if (o) {
                e.stroke();
              }
              if (r) {
                this.fill.addToCanvasFillStyle(e);
              } else {
                e.fillStyle = "#ffffff";
                e.globalCompositeOperation = "destination-out";
              }
              if (t) {
                e.fill(t);
              } else {
                e.fill();
              }
              e.restore();
            }
            if (this.shapeSettings.shadow) {
              this.baked ||= i.Nw(100, 100);
              var s = this.shapeSettings.shadowBlur * 100;
              s += Math.abs(this.shapeSettings.shadowDistance * 100);
              this.bect = new o.A(this.rect.x - s, this.rect.y - s, this.rect.width + s * 2, this.rect.height + s * 2, this.rect.rotation);
              this.baked.width = this.bect.width;
              this.baked.height = this.bect.height;
              let t = this.baked.getContext("2d");
              var a = (this.shapeSettings.shadowDirection - 90) * Math.PI / 180;
              var n = Math.cos(a) * this.shapeSettings.shadowDistance;
              var c = Math.sin(a) * this.shapeSettings.shadowDistance;
              t.save();
              t.shadowColor = r.A.fromHEX(this.shapeSettings.shadowColor, Math.round(this.shapeSettings.shadowOpacity * 255)).toRGBA();
              t.shadowBlur = this.shapeSettings.shadowBlur * 100;
              t.shadowOffsetX = n * 100;
              t.shadowOffsetY = c * 100;
              t.drawImage(this.canvas, s, s);
              t.restore();
            } else {
              this.baked = undefined;
              this.bect = undefined;
            }
          };
          this.calculate = (t, e, s) => {
            if (this.shapeSettings.variant === "line") {
              this.rect.x = Math.round(t.x);
              this.rect.width = Math.round(e.x - t.x);
            } else {
              this.rect.x = Math.round(t.x);
              this.rect.y = Math.round(t.y);
              this.rect.width = Math.round(e.x - t.x);
              if (this.rect.width < 2) {
                this.rect.width = 2;
              }
              if (s !== 0) {
                this.rect.height = Math.round(this.rect.width / s);
              } else {
                this.rect.height = Math.round(e.y - t.y);
                if (this.rect.height < 2) {
                  this.rect.height = 2;
                }
              }
            }
          };
          this.position = (t, e) => {
            if (this.rect) {
              if (t !== undefined) {
                this.rect.x = t;
              }
              if (e !== undefined) {
                this.rect.y = e;
              }
              if (this.bect) {
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
              if (this.rect.width < 0) {
                this.rect.width = 1;
              }
              if (this.rect.height < 0) {
                this.rect.height = 1;
              }
              if (this.shapeSettings.outlineSize > 0) {
                this.shapeSettings.outlineSize = Math.round(this.shapeSettings.outlineSize * t);
              }
              if (this.shapeSettings.shadow) {
                this.shapeSettings.shadowDistance = Math.round(this.shapeSettings.shadowDistance * 100 * t) / 100;
                this.shapeSettings.shadowBlur = Math.round(this.shapeSettings.shadowBlur * 100 * t) / 100;
              }
              this.render();
            }
          };
          this.rotate = t => {
            this.rect.rotation += t ? -90 : 90;
          };
          this.rasterize = () => {
            let t = this.baked ? this.baked : this.canvas;
            let e = this.bect ? this.bect.clone() : this.rect.clone();
            const s = new c.A(i.Os(), this.settings.name, t, e, this.settings.locked);
            s.settings = Object.assign({}, this.settings);
            s.applyTransform();
            return s;
          };
          this.clone = (t = false) => {
            let e = new u(t ? this.id : i.Os(), this.settings.name, this.rect.clone(), this.shapeSettings.clone());
            e.settings = Object.assign({}, this.settings);
            e.prepare();
            return e;
          };
          this.rect = s;
          this.settings.name = e;
          this.shapeSettings = p;
        }
      }
    }
