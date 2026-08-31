window.__editorModules[576] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5283);
      var a = s(4314);
      class n {
        constructor(t, e, s) {
          this.path = "M 0,0 H 100 V 100 H 0 Z";
          this.previewPath = t => {
            this.setPath(t);
            if (this.preview) {
              this.preview(this.path);
            }
          };
          this.callbackPath = t => {
            this.setPath(t);
            if (this.callback) {
              this.callback(this.path);
            }
          };
          this.setPath = t => {
            this.path = t;
            let e = this.thumbnail.getContext("2d");
            e.clearRect(0, 0, e.canvas.width, e.canvas.height);
            const s = new Path2D();
            s.addPath(new Path2D(this.path), new DOMMatrix().scale((e.canvas.width - 2) / 100, (e.canvas.height - 2) / 100));
            e.save();
            e.lineWidth = 1;
            e.translate(1, 1);
            e.strokeStyle = "rgba(255, 255, 255, 0.4)";
            e.fillStyle = "rgba(0, 0, 0, 0.3)";
            e.fill(s);
            e.stroke(s);
            e.restore();
          };
          this.getPath = () => this.path;
          this.toggle = () => {
            new a.A(this.container, this.path, this.callbackPath, this.previewPath);
          };
          this.cleanUp = () => {
            this.container.setAttribute("data", this.path);
            this.container.removeEventListener("click", this.toggle, false);
          };
          this.preview = s;
          this.callback = e;
          this.container = (0, i.Ay)(t);
          if (this.container.hasChildNodes()) {
            this.thumbnail = (0, i.Ay)(t + "-canvas");
            if (this.container.hasAttribute("data")) {
              this.path = this.container.getAttribute("data");
            }
          } else {
            this.container.classList.add("shape-pod");
            this.thumbnail = (0, i.T)("canvas", {
              id: t + "-canvas",
              width: 30,
              height: 30
            });
            this.container.append(this.thumbnail);
          }
          this.container.addEventListener("click", this.toggle, false);
          this.setPath(this.path);
        }
      }
    }
