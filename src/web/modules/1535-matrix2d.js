window.__webModules[1535] = function (e, t, i) {
      i.d(t, {
        A: () => a
      });
      var n = i(6050);
      class a {
        constructor(e = 1, t = 0, i = 0, n = 1, o = 0, s = 0) {
          this.a = e;
          this.b = t;
          this.c = i;
          this.d = n;
          this.e = o;
          this.f = s;
          this.reset = () => {
            this.a = this.d = 1;
            this.b = this.c = this.e = this.f = 0;
          };
          this.translate = e => {
            this.transform(1, 0, 0, 1, e.x, e.y);
          };
          this.rotate = e => {
            let t = Math.cos(e);
            let i = Math.sin(e);
            this.transform(t, i, -i, t, 0, 0);
          };
          this.rotateDegree = function (e) {
            this.rotate(e * 0.017453292519943295);
          };
          this.transform = (e, t, i, n, a, o) => {
            const s = this.a;
            const r = this.b;
            const c = this.c;
            const l = this.d;
            const d = this.e;
            const p = this.f;
            this.a = s * e + c * t;
            this.b = r * e + l * t;
            this.c = s * i + c * n;
            this.d = r * i + l * n;
            this.e = s * a + c * o + d;
            this.f = r * a + l * o + p;
          };
          this.invert = () => {
            let e = this.a;
            let t = this.b;
            let i = this.c;
            let n = this.d;
            let o = this.e;
            let s = this.f;
            new a();
            let r = e * n - t * i;
            this.a = n / r;
            this.b = -t / r;
            this.c = -i / r;
            this.d = e / r;
            this.e = (i * s - n * o) / r;
            this.f = -(e * s - t * o) / r;
          };
        }
        transformPoint(e) {
          return new n.A(e.x * this.a + e.y * this.c + this.e, e.x * this.b + e.y * this.d + this.f);
        }
      }
    }
