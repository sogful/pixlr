window.__editorModules[1535] = function (t, e, s) {
      s.d(e, {
        A: () => a
      });
      var i = s(6050);
      class a {
        constructor(t = 1, e = 0, s = 0, i = 1, n = 0, o = 0) {
          this.a = t;
          this.b = e;
          this.c = s;
          this.d = i;
          this.e = n;
          this.f = o;
          this.reset = () => {
            this.a = this.d = 1;
            this.b = this.c = this.e = this.f = 0;
          };
          this.translate = t => {
            this.transform(1, 0, 0, 1, t.x, t.y);
          };
          this.rotate = t => {
            let e = Math.cos(t);
            let s = Math.sin(t);
            this.transform(e, s, -s, e, 0, 0);
          };
          this.rotateDegree = function (t) {
            this.rotate(t * 0.017453292519943295);
          };
          this.transform = (t, e, s, i, a, n) => {
            const o = this.a;
            const r = this.b;
            const h = this.c;
            const l = this.d;
            const c = this.e;
            const d = this.f;
            this.a = o * t + h * e;
            this.b = r * t + l * e;
            this.c = o * s + h * i;
            this.d = r * s + l * i;
            this.e = o * a + h * n + c;
            this.f = r * a + l * n + d;
          };
          this.invert = () => {
            let t = this.a;
            let e = this.b;
            let s = this.c;
            let i = this.d;
            let n = this.e;
            let o = this.f;
            new a();
            let r = t * i - e * s;
            this.a = i / r;
            this.b = -e / r;
            this.c = -s / r;
            this.d = t / r;
            this.e = (s * o - i * n) / r;
            this.f = -(t * o - e * n) / r;
          };
        }
        transformPoint(t) {
          return new i.A(t.x * this.a + t.y * this.c + this.e, t.x * this.b + t.y * this.d + this.f);
        }
      }
    }
