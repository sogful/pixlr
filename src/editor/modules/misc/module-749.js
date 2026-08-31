window.__editorModules[749] = function (t, e, s) {
      var i = s(5699);
      var a = s(6279);
      class n {
        constructor(t) {
          this.settings = {
            opacity: 1,
            blendmode: "",
            locked: false,
            visible: true,
            name: "",
            link: ""
          };
          this.hasLink = () => this.settings.link && this.settings.link !== "";
          this.rotate = t => {
            if (!this.canvas) {
              return;
            }
            const e = t ? -90 : 90;
            const s = this.canvas;
            const n = this.mask;
            this.canvas = i.SE(s, e);
            a.mM.release(s);
            if (n) {
              this.mask = i.SE(n, e);
              a.mM.release(n);
            }
            this.rect = this.rect.flipWidthAndHeight();
          };
          this.flip = t => {
            if (!this.canvas) {
              return;
            }
            const e = this.canvas;
            const s = this.mask;
            this.canvas = i.yz(e, t);
            a.mM.release(e);
            if (s) {
              this.mask = i.yz(s, t);
              a.mM.release(s);
            }
          };
          this.setWidth = (t, e) => {
            if (this.rect) {
              if (t < 1) {
                t = 1;
              }
              this.rect.width = t;
              if (e !== 0) {
                this.rect.height = Math.round(this.rect.width / e);
                if (this.rect.height < 1) {
                  this.rect.height = 1;
                }
              }
            }
          };
          this.setHeight = (t, e) => {
            if (this.rect) {
              if (t < 1) {
                t = 1;
              }
              this.rect.height = t;
              if (e !== 0) {
                this.rect.width = Math.round(this.rect.height * e);
                if (this.rect.width < 1) {
                  this.rect.width = 1;
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
            }
          };
          this.scale = (t, e, s) => {
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
            }
          };
          this.setRect = t => {
            if (this.bect) {
              this.bect = t;
            } else {
              this.rect = t;
            }
          };
          this.getRect = () => this.bect ? this.bect : this.rect;
          this.getCanvas = () => this.transient ? this.transient : this.baked ? this.baked : this.canvas;
          this.setAltCanvas = () => {
            this.transient = i.oM(this.canvas);
          };
          this.replaceCanvas = t => {
            if (this.canvas) {
              if (this.canvas.width !== t.width || this.canvas.height !== t.height) {
                this.canvas.width = t.width;
                this.canvas.height = t.height;
              }
            } else {
              this.canvas = i.Nw(this.rect.width, this.rect.height);
            }
            const e = this.canvas.getContext("2d");
            e.save();
            e.imageSmoothingEnabled = false;
            e.globalCompositeOperation = "copy";
            e.drawImage(t, 0, 0);
            e.restore();
          };
          this.extendCanvas = t => {};
          this.switchCanvas = (t, e) => {};
          this.render = (t = false) => {};
          this.calculate = (t, e, s) => {};
          this.rasterize = () => {};
          this.clone = (t = false) => {};
          this.id = i.Os();
          this.type = t;
        }
      }
      n.TYPE_GROUP = "group";
      n.TYPE_SCRATCH = "scratch";
      n.TYPE_ELEMENT = "element";
      n.TYPE_IMAGE = "image";
      n.TYPE_SHAPE = "shape";
      n.TYPE_FRAME = "frame";
      n.TYPE_TEXT = "text";
      const o = n;
      s.d(e, ["A", 0, o]);
    }
