window.__editorModules[3244] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(1535);
      var a = s(6050);
      var n = s(651);
      class o {
        constructor(t = 0, e = 0, s = 0, i = 0, a = 0) {
          this.x = t;
          this.y = e;
          this.width = s;
          this.height = i;
          this.rotation = a;
        }
        left() {
          return this.x;
        }
        right() {
          return this.x + this.width;
        }
        top() {
          return this.y;
        }
        bottom() {
          return this.y + this.height;
        }
        size() {
          return new n.A(this.width, this.height);
        }
        center() {
          return new a.A(this.x + this.width / 2, this.y + this.height / 2);
        }
        topLeft() {
          return new a.A(this.x, this.y);
        }
        topRight() {
          return new a.A(this.right(), this.y);
        }
        bottomLeft() {
          return new a.A(this.x, this.bottom());
        }
        bottomRight() {
          return new a.A(this.right(), this.bottom());
        }
        setTop(t) {
          this.height = this.y + this.height - t;
          this.y = t;
        }
        setLeft(t) {
          this.width = this.x + this.width - t;
          this.x = t;
        }
        setRight(t) {
          this.width = Math.round(t - this.x);
        }
        setBottom(t) {
          this.height = Math.round(t - this.y);
        }
        setCenter(t) {
          this.x = t.x - this.width * 0.5;
          this.y = t.y - this.height * 0.5;
        }
        setCenterX(t) {
          this.x = t - this.width * 0.5;
        }
        setCenterY(t) {
          this.y = t - this.height * 0.5;
        }
        moveRight(t) {
          this.x = Math.round(t - this.width);
        }
        moveBottom(t) {
          this.y = Math.round(t - this.height);
        }
        isSet() {
          return this.x > 0 || this.y > 0 || this.width > 0 || this.height > 0 || this.rotation > 0;
        }
        isInside(t) {
          return t.x >= this.x && t.x < this.x + this.width && t.y >= this.y && t.y < this.y + this.height;
        }
        contains(t) {
          return !!t && !!(t.x >= this.x) && !!(t.y >= this.y) && !!(t.bottom() <= this.bottom()) && !!(t.right() <= this.right());
        }
        equalTo(t) {
          return !!t && this.x === t.x && this.y === t.y && this.width === t.width && this.height === t.height && this.rotation === t.rotation;
        }
        clone() {
          return new o(this.x, this.y, this.width, this.height, this.rotation);
        }
        scale(t) {
          return new o(Math.round(this.x * t), Math.round(this.y * t), Math.round(this.width * t), Math.round(this.height * t), this.rotation);
        }
        flipWidthAndHeight() {
          return new o(this.y, this.x, this.height, this.width);
        }
        union(t) {
          if (!t) {
            return this;
          }
          const e = Math.min(this.x, t.x);
          const s = Math.min(this.y, t.y);
          const i = Math.max(this.x + this.width, t.x + t.width);
          const a = Math.max(this.y + this.height, t.y + t.height);
          return new o(e, s, i - e, a - s);
        }
        intersect(t) {
          let e = Math.max(this.x, t.x);
          let s = Math.min(this.x + this.width, t.x + t.width);
          if (s <= e) {
            return;
          }
          let i = Math.max(this.y, t.y);
          let a = Math.min(this.y + this.height, t.y + t.height);
          if (a <= i) {
            return undefined;
          } else {
            return new o(e, i, s - e, a - i);
          }
        }
        rebase(t, e) {
          return new o(Math.round(this.x - t), Math.round(this.y - e), Math.round(this.width), Math.round(this.height));
        }
        gridAlign() {
          return new o(Math.floor(this.x), Math.floor(this.y), Math.ceil(this.width), Math.ceil(this.height));
        }
        getRotatedBounds() {
          if (this.rotation === 0) {
            return this;
          }
          let t = new i.A();
          let e = this.center();
          t.translate(e);
          t.rotate(this.rotation * Math.PI / 180);
          t.invert();
          const s = t.transformPoint(this.topLeft());
          const a = t.transformPoint(this.topRight());
          const n = t.transformPoint(this.bottomLeft());
          const r = t.transformPoint(this.bottomRight());
          let h = o.fromPoints([s, a, n, r]);
          h.x = Math.round(h.x + e.x);
          h.y = Math.round(h.y + e.y);
          h.rotation = this.rotation;
          return h;
        }
        rotatedSize(t) {
          const e = this.width;
          const s = this.height;
          const i = (t, e) => {
            var s = t[0].x;
            var i = t[0].y;
            var n = t[1].x;
            var o = t[1].y;
            var r = e[0].x;
            var h = e[0].y;
            var l = e[1].x;
            var c = e[1].y;
            return new a.A(((s * o - i * n) * (r - l) - (s - n) * (r * c - h * l)) / ((s - n) * (h - c) - (i - o) * (r - l)), ((s * o - i * n) * (h - c) - (i - o) * (r * c - h * l)) / ((s - n) * (h - c) - (i - o) * (r - l)));
          };
          let o;
          let r;
          let h;
          let l;
          let c;
          let d;
          let u;
          var p = t * (Math.PI / 180);
          var g = [new a.A(0, 0), new a.A(e, 0), new a.A(e, s), new a.A(0, s)];
          var m = ((t, e) => {
            var s = new Array();
            for (var i = 0; i < t.length; ++i) {
              s.push(new a.A(t[i].x * Math.cos(e) - t[i].y * Math.sin(e), t[i].x * Math.sin(e) + t[i].y * Math.cos(e)));
            }
            return s;
          })(g = ((t, e, s) => {
            var i = new Array();
            for (var n = 0; n < t.length; ++n) {
              i.push(new a.A(t[n].x + e, t[n].y + s));
            }
            return i;
          })(g, -e / 2, -s / 2), p);
          if (t >= 0) {
            o = [new a.A(0, 0), new a.A(-e / 2, -s / 2)];
            h = [m[0], m[3]];
            d = i(o, h);
            r = [new a.A(0, 0), new a.A(e / 2, -s / 2)];
            l = [m[0], m[1]];
            u = i(r, l);
          } else {
            o = [new a.A(0, 0), new a.A(e / 2, -s / 2)];
            h = [m[1], m[2]];
            u = i(o, h);
            r = [new a.A(0, 0), new a.A(-e / 2, -s / 2)];
            l = [m[0], m[1]];
            d = i(r, l);
          }
          c = new a.A(Math.max(d.x, -u.x), Math.max(d.y, u.y));
          return new n.A(Math.round(-c.x - c.x), Math.round(-c.y - c.y));
        }
        pad(t) {
          return new o(this.x - t, this.y - t, this.width + t * 2, this.height + t * 2);
        }
        getAspect() {
          return this.width / this.height;
        }
        getComparedScale(t) {
          if (t) {
            return new n.A(this.width / t.width, this.height / t.height);
          }
        }
        static calculate(t, e, s = 0) {
          if (!t || !e) {
            return;
          }
          let i = new o();
          i.x = Math.round(t.x < e.x ? t.x : e.x);
          i.y = Math.round(t.y < e.y ? t.y : e.y);
          i.width = Math.round(t.x < e.x ? e.x - i.x : t.x - i.x);
          i.height = s !== 0 ? Math.round(i.width / s) : Math.round(t.y < e.y ? e.y - i.y : t.y - i.y);
          return i;
        }
        static merge(t, e) {
          if (!t && !e) {
            return;
          }
          if (t && !e) {
            return t;
          }
          if (!t && e) {
            return e;
          }
          const s = Math.round(Math.min(t.x, e.x));
          const i = Math.round(Math.min(t.y, e.y));
          const a = Math.round(Math.max(t.x + t.width, e.x + e.width));
          const n = Math.round(Math.max(t.y + t.height, e.y + e.height));
          return new o(s, i, a - s, n - i);
        }
        static fillFit(t, e, s, i, a = false) {
          let n = 1;
          n = t / e < s / i ? s / t : i / e;
          if (a && n > 1) {
            n = 1;
          }
          return new o(Math.round((s - t * n) / 2), Math.round((i - e * n) / 2), Math.round(t * n), Math.round(e * n));
        }
        static bestFit(t, e, s, i, a = false) {
          let n = 1;
          n = t / e > s / i ? s / t : i / e;
          if (n > 1 && !a) {
            n = 1;
          }
          return new o(Math.round((s - t * n) / 2), Math.round((i - e * n) / 2), Math.round(t * n), Math.round(e * n));
        }
        static fromPoints(t) {
          let e = t[0].x;
          let s = t[0].x;
          let i = t[0].y;
          let a = t[0].y;
          t.forEach(t => {
            e = Math.min(t.x, e);
            s = Math.max(t.x, s);
            i = Math.min(t.y, i);
            a = Math.max(t.y, a);
          });
          return new o(Math.round(e), Math.round(i), Math.round(s - e), Math.round(a - i));
        }
        static fromPointRects(t, e, s) {
          let i = t[0].x;
          let a = t[0].x + e;
          let n = t[0].y;
          let r = t[0].y + s;
          t.forEach(t => {
            i = Math.min(t.x, i);
            a = Math.max(t.x + e, a);
            n = Math.min(t.y, n);
            r = Math.max(t.y + s, r);
          });
          return new o(i, n, a - i, r - n);
        }
      }
    }
