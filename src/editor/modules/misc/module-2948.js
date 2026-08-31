window.__editorModules[2948] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(749);
      var o = s(6957);
      class r {
        constructor(t, e) {
          this.apply = () => {
            setTimeout(() => {
              const t = this.selected.trim ? this.selected.trim.clone() : this.selected.rect.clone();
              const e = a.$z(this.selected.canvas);
              if (this.selected.type !== n.A.TYPE_FRAME && this.stage.fresco.hasSelection()) {
                let t = a.Nw(e.width, e.height);
                let i = t.getContext("2d");
                i.drawImage(this.shaders.apply(this.selected.canvas), 0, 0);
                i.globalCompositeOperation = "destination-in";
                i.drawImage(this.stage.fresco.selection.mask, -this.selected.rect.x, -this.selected.rect.y);
                var s = this.selected.canvas.getContext("2d");
                s.drawImage(t, 0, 0);
                s = undefined;
                i = undefined;
                t = undefined;
              } else {
                this.selected.replaceCanvas(this.shaders.apply(this.selected.canvas));
              }
              this.selected.render();
              this.stage.history.add({
                type: "bitmapSwitch",
                kind: this.kind,
                layer: this.selected,
                rect: t,
                canvas: e
              });
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)(this.kind)
              }));
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
            });
          };
          this.kind = e;
          this.stage = t;
          this.shaders = new o.A();
          this.selected = this.stage.fresco.getSelected();
        }
      }
    }
