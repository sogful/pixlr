window.__webModules[3244] = function (e, t, i) {
      i.d(t, {
        A: () => s
      });
      var n = i(1535);
      var a = i(6050);
      var o = i(651);
      class s {
        constructor(e = 0, t = 0, i = 0, n = 0, a = 0) {
          this.x = e;
          this.y = t;
          this.width = i;
          this.height = n;
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
          return new o.A(this.width, this.height);
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
        setTop(e) {
          this.height = this.y + this.height - e;
          this.y = e;
        }
        setLeft(e) {
          this.width = this.x + this.width - e;
          this.x = e;
        }
        setRight(e) {
          this.width = Math.round(e - this.x);
        }
        setBottom(e) {
          this.height = Math.round(e - this.y);
        }
        setCenter(e) {
          this.x = e.x - this.width * 0.5;
          this.y = e.y - this.height * 0.5;
        }
        setCenterX(e) {
          this.x = e - this.width * 0.5;
        }
        setCenterY(e) {
          this.y = e - this.height * 0.5;
        }
        moveRight(e) {
          this.x = Math.round(e - this.width);
        }
        moveBottom(e) {
          this.y = Math.round(e - this.height);
        }
        isSet() {
          return this.x > 0 || this.y > 0 || this.width > 0 || this.height > 0 || this.rotation > 0;
        }
        isInside(e) {
          return e.x >= this.x && e.x < this.x + this.width && e.y >= this.y && e.y < this.y + this.height;
        }
        contains(e) {
          return !!e && !!(e.x >= this.x) && !!(e.y >= this.y) && !!(e.bottom() <= this.bottom()) && !!(e.right() <= this.right());
        }
        equalTo(e) {
          return !!e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height && this.rotation === e.rotation;
        }
        clone() {
          return new s(this.x, this.y, this.width, this.height, this.rotation);
        }
        scale(e) {
          return new s(Math.round(this.x * e), Math.round(this.y * e), Math.round(this.width * e), Math.round(this.height * e), this.rotation);
        }
        flipWidthAndHeight() {
          return new s(this.y, this.x, this.height, this.width);
        }
        union(e) {
          if (!e) {
            return this;
          }
          const t = Math.min(this.x, e.x);
          const i = Math.min(this.y, e.y);
          const n = Math.max(this.x + this.width, e.x + e.width);
          const a = Math.max(this.y + this.height, e.y + e.height);
          return new s(t, i, n - t, a - i);
        }
        intersect(e) {
          let t = Math.max(this.x, e.x);
          let i = Math.min(this.x + this.width, e.x + e.width);
          if (i <= t) {
            return;
          }
          let n = Math.max(this.y, e.y);
          let a = Math.min(this.y + this.height, e.y + e.height);
          if (a <= n) {
            return undefined;
          } else {
            return new s(t, n, i - t, a - n);
          }
        }
        rebase(e, t) {
          return new s(Math.round(this.x - e), Math.round(this.y - t), Math.round(this.width), Math.round(this.height));
        }
        gridAlign() {
          return new s(Math.floor(this.x), Math.floor(this.y), Math.ceil(this.width), Math.ceil(this.height));
        }
        getRotatedBounds() {
          if (this.rotation === 0) {
            return this;
          }
          let e = new n.A();
          let t = this.center();
          e.translate(t);
          e.rotate(this.rotation * Math.PI / 180);
          e.invert();
          const i = e.transformPoint(this.topLeft());
          const a = e.transformPoint(this.topRight());
          const o = e.transformPoint(this.bottomLeft());
          const r = e.transformPoint(this.bottomRight());
          let c = s.fromPoints([i, a, o, r]);
          c.x = Math.round(c.x + t.x);
          c.y = Math.round(c.y + t.y);
          c.rotation = this.rotation;
          return c;
        }
        rotatedSize(e) {
          const t = this.width;
          const i = this.height;
          const n = (e, t) => {
            var i = e[0].x;
            var n = e[0].y;
            var o = e[1].x;
            var s = e[1].y;
            var r = t[0].x;
            var c = t[0].y;
            var l = t[1].x;
            var d = t[1].y;
            return new a.A(((i * s - n * o) * (r - l) - (i - o) * (r * d - c * l)) / ((i - o) * (c - d) - (n - s) * (r - l)), ((i * s - n * o) * (c - d) - (n - s) * (r * d - c * l)) / ((i - o) * (c - d) - (n - s) * (r - l)));
          };
          let s;
          let r;
          let c;
          let l;
          let d;
          let p;
          let h;
          var u = e * (Math.PI / 180);
          var m = [new a.A(0, 0), new a.A(t, 0), new a.A(t, i), new a.A(0, i)];
          var y = ((e, t) => {
            var i = new Array();
            for (var n = 0; n < e.length; ++n) {
              i.push(new a.A(e[n].x * Math.cos(t) - e[n].y * Math.sin(t), e[n].x * Math.sin(t) + e[n].y * Math.cos(t)));
            }
            return i;
          })(m = ((e, t, i) => {
            var n = new Array();
            for (var o = 0; o < e.length; ++o) {
              n.push(new a.A(e[o].x + t, e[o].y + i));
            }
            return n;
          })(m, -t / 2, -i / 2), u);
          if (e >= 0) {
            s = [new a.A(0, 0), new a.A(-t / 2, -i / 2)];
            c = [y[0], y[3]];
            p = n(s, c);
            r = [new a.A(0, 0), new a.A(t / 2, -i / 2)];
            l = [y[0], y[1]];
            h = n(r, l);
          } else {
            s = [new a.A(0, 0), new a.A(t / 2, -i / 2)];
            c = [y[1], y[2]];
            h = n(s, c);
            r = [new a.A(0, 0), new a.A(-t / 2, -i / 2)];
            l = [y[0], y[1]];
            p = n(r, l);
          }
          d = new a.A(Math.max(p.x, -h.x), Math.max(p.y, h.y));
          return new o.A(Math.round(-d.x - d.x), Math.round(-d.y - d.y));
        }
        pad(e) {
          return new s(this.x - e, this.y - e, this.width + e * 2, this.height + e * 2);
        }
        getAspect() {
          return this.width / this.height;
        }
        getComparedScale(e) {
          if (e) {
            return new o.A(this.width / e.width, this.height / e.height);
          }
        }
        static calculate(e, t, i = 0) {
          if (!e || !t) {
            return;
          }
          let n = new s();
          n.x = Math.round(e.x < t.x ? e.x : t.x);
          n.y = Math.round(e.y < t.y ? e.y : t.y);
          n.width = Math.round(e.x < t.x ? t.x - n.x : e.x - n.x);
          n.height = i !== 0 ? Math.round(n.width / i) : Math.round(e.y < t.y ? t.y - n.y : e.y - n.y);
          return n;
        }
        static merge(e, t) {
          if (!e && !t) {
            return;
          }
          if (e && !t) {
            return e;
          }
          if (!e && t) {
            return t;
          }
          const i = Math.round(Math.min(e.x, t.x));
          const n = Math.round(Math.min(e.y, t.y));
          const a = Math.round(Math.max(e.x + e.width, t.x + t.width));
          const o = Math.round(Math.max(e.y + e.height, t.y + t.height));
          return new s(i, n, a - i, o - n);
        }
        static fillFit(e, t, i, n, a = false) {
          let o = 1;
          o = e / t < i / n ? i / e : n / t;
          if (a && o > 1) {
            o = 1;
          }
          return new s(Math.round((i - e * o) / 2), Math.round((n - t * o) / 2), Math.round(e * o), Math.round(t * o));
        }
        static bestFit(e, t, i, n, a = false) {
          let o = 1;
          o = e / t > i / n ? i / e : n / t;
          if (o > 1 && !a) {
            o = 1;
          }
          return new s(Math.round((i - e * o) / 2), Math.round((n - t * o) / 2), Math.round(e * o), Math.round(t * o));
        }
        static fromPoints(e) {
          let t = e[0].x;
          let i = e[0].x;
          let n = e[0].y;
          let a = e[0].y;
          e.forEach(e => {
            t = Math.min(e.x, t);
            i = Math.max(e.x, i);
            n = Math.min(e.y, n);
            a = Math.max(e.y, a);
          });
          return new s(Math.round(t), Math.round(n), Math.round(i - t), Math.round(a - n));
        }
        static fromPointRects(e, t, i) {
          let n = e[0].x;
          let a = e[0].x + t;
          let o = e[0].y;
          let r = e[0].y + i;
          e.forEach(e => {
            n = Math.min(e.x, n);
            a = Math.max(e.x + t, a);
            o = Math.min(e.y, o);
            r = Math.max(e.y + i, r);
          });
          return new s(n, o, a - n, r - o);
        }
      }
    }
