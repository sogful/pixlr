window.__editorModules[4587] = function (t, e, s) {
      var i;
      var a = s(5259);
      var n = s(6);
      var o = s(5138);
      class r {
        constructor(t) {
          this.value = t;
          this.getType = () => this.value instanceof a.A ? "color" : this.value instanceof n.Ay ? "gradient" : this.value instanceof o.A ? "pattern" : undefined;
          this.getStringValue = () => this.value instanceof a.A ? this.value.toHEX() : this.value instanceof n.Ay || this.value instanceof o.A ? this.value.toJSON() : undefined;
          this.getCssValue = () => this.value instanceof a.A ? this.value.toHEX() : this.value instanceof n.Ay || this.value instanceof o.A ? this.value.toCSS() : undefined;
          this.addToCanvasFillStyle = (t, e = 0, s = 0) => {
            if (this.value instanceof a.A) {
              t.fillStyle = this.value.toHEX();
            } else if (this.value instanceof n.Ay) {
              t.fillStyle = this.value.createCanvasGradient(t, e, s);
            } else if (this.value instanceof o.A) {
              t.fillStyle = this.value.createCanvasPattern(t);
            }
          };
          this.addToCanvasStrokeStyle = (t, e = 0, s = 0) => {
            if (this.value instanceof a.A) {
              t.strokeStyle = this.value.toHEX();
            } else if (this.value instanceof n.Ay) {
              t.strokeStyle = this.value.createCanvasGradient(t, e, s);
            } else if (this.value instanceof o.A) {
              t.strokeStyle = this.value.createCanvasPattern(t);
            }
          };
        }
      }
      i = r;
      r.fromString = async (t, e) => {
        let s;
        if (t === "color" && /^#[0-9A-F]{6}$/i.test(e)) {
          s = new i(a.A.fromHEX(e));
        } else if (t === "gradient") {
          s = new i(n.Ay.fromJSON(e));
        } else if (t === "pattern") {
          s = new i(await o.A.fromJSON(e));
        }
        return s;
      };
      const h = r;
      s.d(e, ["A", 0, h]);
    }
