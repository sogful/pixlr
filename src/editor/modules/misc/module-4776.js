window.__editorModules[4776] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor(t) {
          this.id = t;
          this.texture = null;
        }
        createTexture(t, e, s) {
          this.texture = t.createTexture();
          this.width = e;
          this.height = s;
        }
        uploadData(t, e, s = t.NEAREST) {
          t.bindTexture(t.TEXTURE_2D, this.texture);
          t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, 4);
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE);
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE);
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, s);
          t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, s);
          t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
        }
        setTexture(t) {
          this.texture = t;
        }
        destroy(t) {
          t.deleteTexture(this.texture);
        }
      }
    }
