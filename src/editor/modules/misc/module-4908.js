window.__editorModules[4908] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor(t, e, s) {
          this.framebuffer = t;
          this.renderbuffer = e;
          this.texture = s;
        }
        destroy(t) {
          t.deleteFramebuffer(this.framebuffer);
          t.deleteRenderbuffer(this.renderbuffer);
          t.deleteTexture(this.texture);
        }
      }
    }
