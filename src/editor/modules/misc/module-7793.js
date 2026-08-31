window.__editorModules[7793] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(5699);
      var a = s(749);
      var n = s(6050);
      class o extends a.A {
        constructor() {
          super(a.A.TYPE_SCRATCH);
          this.renderMode = "none";
          this.setRenderMode = t => {
            this.renderMode = t;
          };
          this.calculate = (t, e, s) => {
            if (this.canvas) {
              this.rect.x = Math.round(t.x);
              this.rect.y = Math.round(t.y);
              this.rect.width = Math.round(e.x - t.x);
              if (this.rect.width < 10) {
                this.rect.width = 10;
              }
              if (s !== 0) {
                this.rect.height = Math.round(this.rect.width / s);
              } else {
                this.rect.height = Math.round(e.y - t.y);
                if (this.rect.height < 10) {
                  this.rect.height = 10;
                }
              }
            }
          };
          this.clear = t => {
            if (t) {
              i.tN(this.canvas, t, new n.A(0, 0));
            } else {
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
            if (this.baked) {
              this.btx.clearRect(0, 0, this.baked.width, this.baked.height);
            }
          };
          this.addBake = () => {
            this.baked = i.oM(this.canvas);
            this.btx = this.baked.getContext("2d");
            this.btx.imageSmoothingEnabled = false;
          };
          this.getCanvas = () => this.baked ? this.baked : this.canvas;
          this.applySelection = t => {
            if (t.fresco.hasSelection()) {
              let e = this.baked ? this.btx : this.ctx;
              e.save();
              if (this.baked) {
                e.globalCompositeOperation = "copy";
                e.drawImage(this.canvas, 0, 0);
              }
              e.globalCompositeOperation = "destination-in";
              e.drawImage(t.fresco.selection.mask, -this.rect.x, -this.rect.y);
              e.restore();
            }
          };
          this.drawCanvas = (t, e = "source-over", s = 1) => {
            if (t) {
              this.ctx.save();
              this.ctx.save();
              this.ctx.globalAlpha = s;
              this.ctx.globalCompositeOperation = e;
              this.ctx.drawImage(t, 0, 0, t.width, t.height);
              this.ctx.restore();
            }
          };
          this.drawToLayer = (t, e = "source-over", s = 1) => {
            if (t && t.canvas && t.rect) {
              if (t.type === a.A.TYPE_FRAME) {
                if (this.canvas.width !== t.canvas.width || this.canvas.height !== t.canvas.height) {
                  t.canvas.width = this.canvas.width;
                  t.canvas.height = this.canvas.height;
                }
                const e = t.canvas.getContext("2d");
                e.imageSmoothingEnabled = false;
                e.clearRect(0, 0, t.canvas.width, t.canvas.height);
                e.drawImage(this.canvas, 0, 0);
              } else {
                const i = t.canvas.getContext("2d");
                i.save();
                i.globalAlpha = s;
                i.imageSmoothingEnabled = false;
                i.globalCompositeOperation = e;
                if (this.rect.rotation) {
                  i.imageSmoothingQuality = "high";
                  i.imageSmoothingEnabled = true;
                  let t = this.rect.x + this.rect.width * 0.5;
                  let e = this.rect.y + this.rect.height * 0.5;
                  i.save();
                  i.translate(t, e);
                  i.rotate(this.rect.rotation * Math.PI / 180);
                  i.drawImage(this.baked ? this.baked : this.canvas, this.rect.width * -0.5, this.rect.height * -0.5, this.rect.width, this.rect.height);
                  i.restore();
                } else {
                  i.drawImage(this.baked ? this.baked : this.canvas, Math.round(this.rect.x - t.rect.x), Math.round(this.rect.y - t.rect.y), this.rect.width, this.rect.height);
                }
                i.restore();
              }
            }
          };
        }
        setTarget(t, e, s, a) {
          this.id = t;
          this.rect = e.clone();
          this.renderMode = s;
          this.canvas = a ? i.oM(a) : i.Nw(e.width, e.height);
          this.ctx = this.canvas.getContext("2d");
          this.ctx.imageSmoothingEnabled = false;
          this.baked = undefined;
          this.btx = undefined;
        }
      }
    }
