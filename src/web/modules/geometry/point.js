window.__webModules[6050] = function (e, t, i) {
      i.d(t, {
        A: () => n
      });
      class n {
        constructor(e = 0, t = 0) {
          this.x = e;
          this.y = t;
        }
        distanceTo(e) {
          return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
        }
        angleTo(e) {
          let t = -(this.x - e.x);
          let i = this.y - e.y;
          let n = 360 - Math.atan2(i, t) * (180 / Math.PI);
          if (n < 0) {
            n += 360;
          }
          if (n > 360) {
            n -= 360;
          }
          return n;
        }
        dot(e) {
          return this.x * e.x + this.y * e.y;
        }
        lengthSQ() {
          return this.dot(this);
        }
        length() {
          return Math.sqrt(this.lengthSQ());
        }
        hypot2() {
          return this.dot(this);
        }
        hypot() {
          return Math.hypot(this.x, this.y);
        }
        add(e) {
          if (e) {
            if (e instanceof n) {
              return new n(this.x + e.x, this.y + e.y);
            } else {
              return new n(this.x + e, this.y + e);
            }
          } else {
            return this;
          }
        }
        neg(e) {
          if (e instanceof n) {
            return new n(this.x - e.x, this.y - e.y);
          } else {
            return new n(this.x - e, this.y - e);
          }
        }
        mul(e) {
          if (e instanceof n) {
            return new n(this.x * e.x, this.y * e.y);
          } else {
            return new n(this.x * e, this.y * e);
          }
        }
        rotateAround(e, t) {
          let i = Math.sin(t);
          let a = Math.cos(t);
          let o = this.x - e.x;
          let s = this.y - e.y;
          let r = o * i + s * a;
          return new n(o * a - s * i + e.x, r + e.y);
        }
        equalTo(e) {
          return this.x === e.x && this.y === e.y;
        }
        clone() {
          return new n(this.x, this.y);
        }
      }
    }
