window.__editorModules[4295] = function (t, e, s) {
      s.d(e, {
        A: () => a
      });
      var i = s(4776);
      class a {
        constructor(t, e, s) {
          this.uniform = {};
          this.attribute = {};
          this.texture = new Map();
          this.program = t.createProgram();
          t.attachShader(this.program, this.compile(t, e, t.VERTEX_SHADER));
          t.attachShader(this.program, this.compile(t, s, t.FRAGMENT_SHADER));
          t.linkProgram(this.program);
          t.useProgram(this.program);
          if (!t.getProgramParameter(this.program, t.LINK_STATUS)) {
            console.log(t.getProgramInfoLog(this.program));
          }
          const a = this.collect(e, "attribute");
          for (const [i, l] of a) {
            this.attribute[i] = t.getAttribLocation(this.program, i);
          }
          let n = [];
          const o = this.collect(e, "uniform");
          for (const [i, l] of o) {
            this.uniform[i] = t.getUniformLocation(this.program, i);
          }
          const r = this.collect(s, "uniform");
          for (const [i, l] of r) {
            this.uniform[i] = t.getUniformLocation(this.program, i);
            if (l === "sampler2D") {
              n.push(i);
            }
          }
          for (var h in n) {
            let e = n[h];
            let s = t.getUniformLocation(this.program, e);
            if (e === "texture") {
              t.uniform1i(s, 0);
              this.texture.set(0, new i.A(e));
            } else {
              t.uniform1i(s, 1);
              this.texture.set(1, new i.A(e));
            }
          }
        }
        collect(t, e) {
          const s = [];
          const i = new RegExp("\\b" + e + " (\\w+) (\\w+)", "ig");
          t.replace(i, function (t, e, i) {
            s.push([i, e]);
            return t;
          });
          return s;
        }
        compile(t, e, s) {
          var i = t.createShader(s);
          t.shaderSource(i, e);
          t.compileShader(i);
          if (t.getShaderParameter(i, t.COMPILE_STATUS)) {
            return i;
          } else {
            console.log(t.getShaderInfoLog(i));
            console.log(e);
            return null;
          }
        }
        getTextureById(t) {
          let e = null;
          this.texture.forEach(function (s) {
            if (s.id === t) {
              e = s;
            }
          });
          return e || (console.error("Having no texture that is named `%s`.", t), null);
        }
        destroy(t) {
          t.deleteProgram(this.program);
          this.texture.forEach(function (e) {
            e.destroy(t);
          });
          this.texture.clear();
        }
      }
    }
