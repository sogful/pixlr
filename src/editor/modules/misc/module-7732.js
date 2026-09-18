window.__editorModules[7732] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(749);
      var a = s(5699);
      var n = s(3244);
      class o extends i.A {
        constructor(t = a.Os(), e, s, r, h = false) {
          super(i.A.TYPE_IMAGE);
          this.id = t;
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
          this.scale = (t, e, s) => {
            if (this.rect) {
              this.rect.x = Math.round(this.rect.x * t);
              this.rect.y = Math.round(this.rect.y * e);
              this.rect.width = Math.round(this.rect.width * t);
              this.rect.height = Math.round(this.rect.height * e);
              this.applyTransform(s);
            }
          };
          this.wouldApplyTransform = () => !!this.canvas && !!this.rect && (this.rect.rotation !== 0 || this.rect.width !== this.canvas.width || this.rect.height !== this.canvas.height);
          this.applyStraighten = t => {
            this.canvas = a.oc(this.canvas, this.rect.rotation, t);
            this.mask &&= a.oc(this.mask, this.rect.rotation, t);
            this.rect = t;
            this.render();
          };
          this.applyTransform = (t = true) => {
            if (!this.wouldApplyTransform()) {
              return false;
            }
            if (this.rect.width !== this.canvas.width || this.rect.height !== this.canvas.height) {
              this.canvas = t ? a.tm(this.canvas, this.rect.width, this.rect.height) : a.B3(this.canvas, this.rect.width, this.rect.height);
              this.mask &&= t ? a.tm(this.mask, this.rect.width, this.rect.height) : a.B3(this.mask, this.rect.width, this.rect.height);
            }
            if (this.rect.rotation !== 0) {
              this.rect = this.rect.getRotatedBounds();
              this.canvas = a.oc(this.canvas, this.rect.rotation, this.rect);
              this.mask &&= a.oc(this.mask, this.rect.rotation, this.rect);
              let t = a.TL(this.canvas);
              if (!t.equalTo(new n.A(0, 0, this.canvas.width, this.canvas.height))) {
                this.canvas = a.bK(this.canvas, t);
                this.mask &&= a.bK(this.mask, t);
                this.rect.width = t.width;
                this.rect.height = t.height;
                this.rect.x += t.x;
                this.rect.y += t.y;
              }
              this.rect.rotation = 0;
            }
            this.render();
            return true;
          };
          this.switchCanvas = (t, e) => {
            if (this.mask && !this.rect.equalTo(e)) {
              this.mask = a.p(this.mask, this.rect, e);
            }
            this.canvas = t;
            this.rect = e.clone();
          };
          this.extendCanvas = t => {
            if (!this.canvas) {
              this.rect = t;
              this.canvas = a.Nw(t.width, t.height);
              return;
            }
            let e = this.rect.union(t);
            if (!this.rect.equalTo(e)) {
              this.canvas = a.p(this.canvas, this.rect, e);
              this.mask &&= a.p(this.mask, this.rect, e);
              this.rect = e;
            }
          };
          this.hasMask = () => !!this.mask;
          this.addMask = (t = "clear") => {
            this.mask = a.Nw(this.canvas.width, this.canvas.height);
            if (t === "fill") {
              this.mask.getContext("2d").fillRect(0, 0, this.mask.width, this.mask.height);
            }
          };
          this.invertMask = () => {
            if (this.mask) {
              let t = a.Nw(this.mask.width, this.mask.height);
              let e = t.getContext("2d");
              e.save();
              e.fillRect(0, 0, t.width, t.height);
              e.globalCompositeOperation = "xor";
              e.drawImage(this.mask, 0, 0);
              e.restore();
              this.mask = t;
            }
          };
          this.removeMask = () => {
            this.mask = undefined;
            this.baked = undefined;
          };
          this.render = () => {
            if (this.mask) {
              if (!this.canvas) {
                return;
              }
              if (!this.baked || this.baked.width !== this.canvas.width || this.baked.height !== this.canvas.height) {
                this.baked = a.Nw(this.canvas.width, this.canvas.height);
              }
              var t = this.baked.getContext("2d");
              t.save();
              t.globalCompositeOperation = "copy";
              t.drawImage(this.canvas, 0, 0);
              t.globalCompositeOperation = "destination-in";
              t.drawImage(this.mask, 0, 0);
              t.restore();
              t = undefined;
            }
          };
          this.shrinkWrap = () => {
            const t = a.TL(this.canvas);
            if (!t) {
              this.canvas = undefined;
              this.mask = undefined;
              this.baked = undefined;
              this.rect = undefined;
              return true;
            }
            if (!t.equalTo(this.rect)) {
              const e = a.Nw(t.width, t.height);
              e.getContext("2d").drawImage(this.canvas, -t.x, -t.y);
              this.canvas = e;
              this.rect = t.rebase(-this.rect.x, -this.rect.y);
              this.mask &&= a.y2(this.mask, t);
              return true;
            }
            return false;
          };
          this.rasterize = () => this.clone();
          this.clone = (t = false) => {
            var e;
            let s = new o(t ? this.id : a.Os(), this.settings.name, a.oM(this.canvas), (e = this.rect) === null || e === undefined ? undefined : e.clone(), false);
            s.settings = Object.assign({}, this.settings);
            if (!t) {
              s.settings.locked = false;
            }
            if (this.baked) {
              s.baked = a.oM(this.baked);
            }
            if (this.hasMask()) {
              s.mask = a.oM(this.mask);
            }
            return s;
          };
          this.canvas = s;
          this.rect = r;
          this.settings.name = e;
          this.settings.locked = h;
        }
      }
    }
