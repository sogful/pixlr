window.__editorModules[5138] = function (t, e, s) {
      var i;
      var a = s(5699);
      var n = s(5056);
      class o {
        constructor(t, e = 1, s = 0) {
          this.svg = t;
          this.scale = e;
          this.direction = s;
          this.createCanvasPattern = t => {
            let e;
            if (this.scale !== 1) {
              let s = a.Nw(Math.round(this.image.width * this.scale), Math.round(this.image.height * this.scale));
              s.getContext("2d").drawImage(this.image, 0, 0, s.width, s.height);
              e = t.createPattern(s, "repeat");
            } else {
              e = t.createPattern(this.image, "repeat");
            }
            if (this.direction !== 0) {
              e.setTransform(new DOMMatrix().rotate(this.direction));
            }
            return e;
          };
          this.toCSS = () => "url(data:image/svg+xml;base64," + btoa(this.svg) + ")";
          this.toJSON = () => JSON.stringify(this.toIPattern());
        }
        toIPattern(t = this.svg) {
          return {
            svg: t,
            scale: this.scale,
            direction: this.direction
          };
        }
      }
      i = o;
      o.fromIPattern = async t => {
        let e = new i(t.svg, t.scale, t.direction);
        let s = new Blob([e.svg], {
          type: "image/svg+xml"
        });
        e.image = await (0, n.Ep)(s);
        return e;
      };
      o.fromJSON = async t => {
        let e = JSON.parse(t);
        return i.fromIPattern(e);
      };
      const r = o;
      s.d(e, ["A", 0, r]);
    }
