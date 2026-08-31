window.__editorModules[3165] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(9310);
      var a = s(7817);
      var n = s(5699);
      var o = s(7775);
      class r extends i.A {
        constructor(t) {
          super(t, (0, o.A)("titleColorLookup"));
          this.update = n.eD(50, t => {
            let e = this.mctx.createLinearGradient(0, 0, 255, 0);
            t.addStopToCanvasGradient(e);
            this.mctx.fillStyle = e;
            this.mctx.fillRect(0, 0, this.map.width, this.map.height);
            this.change("lookup", this.mctx.getImageData(0, 0, 255, 1));
          });
          this.content.style.paddingBottom = "0px";
          this.dialog.style.width = "340px";
          this.dialog.style.maxWidth = "340px";
          this.map = n.Nw(255, 1);
          this.mctx = this.map.getContext("2d");
          this.editor = new a.A(this.content, undefined, this.update);
          this.position();
        }
      }
    }
