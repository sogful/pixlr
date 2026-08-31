window.__editorModules[6050] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor(t = 0, e = 0) {
          this.x = t;
          this.y = e;
        }
        distanceTo(t) {
          return Math.sqrt(Math.pow(this.x - t.x, 2) + Math.pow(this.y - t.y, 2));
        }
        angleTo(t) {
          let e = -(this.x - t.x);
          let s = this.y - t.y;
          let i = 360 - Math.atan2(s, e) * (180 / Math.PI);
          if (i < 0) {
            i += 360;
          }
          if (i > 360) {
            i -= 360;
          }
          return i;
        }
        dot(t) {
          return this.x * t.x + this.y * t.y;
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
        add(t) {
          if (t) {
            if (t instanceof i) {
              return new i(this.x + t.x, this.y + t.y);
            } else {
              return new i(this.x + t, this.y + t);
            }
          } else {
            return this;
          }
        }
        neg(t) {
          if (t instanceof i) {
            return new i(this.x - t.x, this.y - t.y);
          } else {
            return new i(this.x - t, this.y - t);
          }
        }
        mul(t) {
          if (t instanceof i) {
            return new i(this.x * t.x, this.y * t.y);
          } else {
            return new i(this.x * t, this.y * t);
          }
        }
        rotateAround(t, e) {
          let s = Math.sin(e);
          let a = Math.cos(e);
          let n = this.x - t.x;
          let o = this.y - t.y;
          let r = n * s + o * a;
          return new i(n * a - o * s + t.x, r + t.y);
        }
        equalTo(t) {
          return this.x === t.x && this.y === t.y;
        }
        clone() {
          return new i(this.x, this.y);
        }
      }
    }
