window.__editorModules[6] = function (t, e, s) {
      s.d(e, {
        Ay: () => r,
        mR: () => n
      });
      var i = s(5699);
      var a = s(5259);
      class n {
        constructor(t, e, s = 135, i = "linear") {
          this.colors = t;
          this.positions = e;
          this.direction = s;
          this.type = i;
          this.toCSS = () => {
            let t = "linear-gradient(" + this.direction + "deg";
            for (let e = 0; e < this.colors.length; ++e) {
              t += ", " + a.A.fromHEXA(this.colors[e]).toRGBA() + " " + (this.positions[e] * 100).toFixed(0) + "%";
            }
            t += ")";
            return t;
          };
        }
      }
      class o {
        constructor(t, e, s) {
          this.id = t;
          this.color = e;
          this.position = s;
        }
      }
      class r {
        constructor() {
          this.direction = 0;
          this.type = "linear";
          this.addStop = (t, e) => {
            e = i.qE(e, 0, 1);
            const s = new o(i.r0(), t, e);
            this.stops.push(s);
            this.sort();
            return s;
          };
          this.removeStop = t => {
            const e = this.stops.findIndex(e => e.id === t);
            if (e !== -1) {
              this.stops.splice(e, 1);
            }
            this.sort();
            return this.stops[0].id;
          };
          this.getStop = t => {
            let e;
            this.stops.forEach(s => {
              if (s.id === t) {
                e = s;
              }
            });
            return e;
          };
          this.sort = () => {
            this.stops.sort((t, e) => t.position - e.position);
          };
          this.toCSS = () => {
            let t = "linear-gradient(to right";
            for (let e = 0; e < this.stops.length; ++e) {
              t += ", " + this.stops[e].color.toRGBA() + " " + (this.stops[e].position * 100).toFixed(0) + "%";
            }
            t += ")";
            return t;
          };
          this.toJSON = () => JSON.stringify(this.toIGradient());
          this.toIGradient = () => {
            let t = new Array();
            this.stops.forEach(e => {
              t.push({
                id: e.id,
                color: e.color.toHEXA(),
                position: e.position
              });
            });
            return {
              type: this.type,
              direction: this.direction,
              stops: t
            };
          };
          this.createCanvasGradient = (t, e = 0, s = 0) => {
            let i;
            if (this.type === "linear") {
              const a = (this.direction - 90) * Math.PI / 180;
              const n = t.canvas.width;
              const o = t.canvas.height;
              if (n < 1 || o < 1) {
                return;
              }
              const r = Math.sqrt(n * n + o * o) / 2;
              const h = Math.asin(o / 2 / r);
              let l = (a % (Math.PI * 2) + Math.PI * 4) % (Math.PI * 2);
              if (l > Math.PI) {
                l -= Math.PI;
              }
              if (l > Math.PI / 2 && l <= Math.PI) {
                l = Math.PI / 2 - (l - Math.PI / 2);
              }
              let c = Math.PI / 2 - h - Math.abs(l);
              let d = Math.abs(h - Math.abs(l));
              let u = Math.max(Math.cos(d) * n, Math.cos(c) * o) / 2;
              let p = Math.cos(a) * u;
              let g = Math.sin(a) * u;
              i = t.createLinearGradient(n / 2 + p + e, o / 2 + g + s, n / 2 - p + e, o / 2 - g + s);
            } else {
              let a = t.canvas.width / 2;
              let n = t.canvas.height / 2;
              let o = Math.max(t.canvas.width, t.canvas.height) / 2;
              i = t.createRadialGradient(a + e, n + s, 0, a + e, n + s, o);
            }
            this.addStopToCanvasGradient(i);
            return i;
          };
          this.addStopToCanvasGradient = (t, e = false) => {
            for (let s = 0; s < this.stops.length; ++s) {
              t.addColorStop(this.stops[s].position, this.stops[s].color.toRGBA(e ? 255 - this.stops[s].color.a : this.stops[s].color.a));
            }
          };
          this.stops = new Array();
        }
        static fromJSON(t) {
          let e = JSON.parse(t);
          return r.fromIGradient(e);
        }
        static fromIGradient(t) {
          const e = new r();
          e.type = t.type && t.type === "radial" ? "radial" : "linear";
          e.direction = t.direction;
          if (t.stops) {
            for (let s = 0; s < t.stops.length; ++s) {
              let i = typeof t.stops[s].color == "string" ? a.A.fromHEXA(t.stops[s].color) : new a.A(t.stops[s].color.r, t.stops[s].color.g, t.stops[s].color.b, t.stops[s].color.a);
              e.addStop(i, t.stops[s].position);
            }
          }
          return e;
        }
        static fromPreset(t) {
          const e = new r();
          for (let s = 0; s < t.colors.length; ++s) {
            e.addStop(a.A.fromHEXA(t.colors[s]), t.positions[s]);
          }
          e.direction = t.direction + 180;
          e.type = t.type;
          return e;
        }
        static fromColors(t, e) {
          const s = new r();
          s.addStop(t, 0);
          s.addStop(e, 1);
          return s;
        }
      }
    }
