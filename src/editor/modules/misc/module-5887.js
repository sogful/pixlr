window.__editorModules[5887] = function (t, e, s) {
      var i = s(749);
      var a = s(5699);
      var n = s(3244);
      var o = s(6050);
      var r = s(7732);
      class h extends i.A {
        constructor(t = a.Os(), e, s, l, c, d = "", u = h.SCALE_METHOD_NONE) {
          super(i.A.TYPE_ELEMENT);
          this.id = t;
          this.rotateAndFit = (t, e) => {
            if (this.settings.locked && this.variant === h.VARIANT_OVERLAY) {
              this.rotate(t);
              this.calculate(new o.A(0, 0), new o.A(e.width, e.height), 0);
            } else {
              this.rect.rotation += t ? -90 : 90;
            }
          };
          this.calculate = (t, e, s) => {
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
          };
          this.rasterize = () => {
            const t = new r.A(a.Os(), this.settings.name, a.oM(this.canvas), this.rect.clone(), this.settings.locked);
            t.settings = Object.assign({}, this.settings);
            t.applyTransform();
            return t;
          };
          this.clone = (t = false) => {
            let e = new h(t ? this.id : a.Os(), this.settings.name, a.oM(this.canvas), this.url, this.variant, this.settings.blendmode, this.scalemethod);
            e.settings = Object.assign({}, this.settings);
            e.rect = this.rect.clone();
            if (t) {
              e.id = this.id;
              e.settings.name = this.settings.name;
            }
            return e;
          };
          this.url = l;
          this.canvas = s;
          this.variant = c;
          this.scalemethod = u;
          this.settings.name = e;
          this.settings.blendmode = d;
          this.rect = new n.A(0, 0, s.width, s.height);
        }
      }
      h.VARIANT_OVERLAY = "overlay";
      h.VARIANT_STICKER = "sticker";
      h.SCALE_METHOD_STRETCH = "stretch";
      h.SCALE_METHOD_FILL = "fill";
      h.SCALE_METHOD_NONE = "none";
      const l = h;
      s.d(e, ["A", 0, l]);
    }
