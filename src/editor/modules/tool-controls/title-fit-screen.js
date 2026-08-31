window.__editorModules[435] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5527);
      var o = s(6050);
      var r = s(7578);
      class h extends n.A {
        constructor(t) {
          super("zoom", t);
          this.stage = t;
          this.mode = "plus";
          this.contextMenu = t => {
            t.preventDefault();
            t.stopPropagation();
            new r.Ay(new o.A(t.clientX, t.clientY), [new r.kt((0, a.A)("titleFitScreen"), () => this.stage.setZoom("fit"), "Ctrl + 0"), new r.kt((0, a.A)("titleFillScreen"), () => this.stage.setZoom("fill"), "Ctrl + 2"), new r.kt("100%", () => this.stage.setZoom("1"), "Ctrl + 1"), new r.kt("200%", () => this.stage.setZoom("2")), new r.kt("300%", () => this.stage.setZoom("3"), "Ctrl + 3"), new r.kt(), new r.kt((0, a.A)("titleZoomIn"), () => this.stage.setZoomStep(true), "Ctrl + +"), new r.kt((0, a.A)("titleZoomOut"), () => this.stage.setZoomStep(false), "Ctrl + -")]);
          };
          this.z1x = () => {
            this.stage.setZoom("1");
          };
          this.fit = () => {
            this.stage.setZoom("fit");
          };
          this.fill = () => {
            this.stage.setZoom("fill");
          };
          this.toggleMode = () => {
            this.setMode(this.mode === "plus" ? "minus" : "plus");
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget === (0, i.Ay)("zoom-mode-plus") ? "plus" : "minus");
          };
          this.setMode = t => {
            this.mode = t;
            (0, i.Ay)("zoom-mode-plus").checked = this.mode === "plus";
            (0, i.Ay)("zoom-mode-minus").checked = this.mode === "minus";
            this.stage.raster.style.cursor = this.mode === "plus" ? "zoom-in" : "zoom-out";
          };
          this.shiftDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              this.toggleMode();
            }
          };
          this.shiftUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
              this.toggleMode();
            }
          };
          this.down = t => {
            this.stage.supressRender = true;
            const e = this.stage.getViewPort().center();
            const s = this.stage.translateRasterToFresco(t, undefined, false);
            this.stage.setZoomStep(this.mode === "plus", 2);
            const i = this.stage.translateRasterToFresco(t, undefined, false);
            this.stage.supressRender = false;
            this.stage.setAnchor(new o.A(e.x + (s.x - i.x), e.y + (s.y - i.y)));
            this.stage.updateViewport();
          };
          this.cleanUp = () => {
            this.removeDownListeners();
            document.removeEventListener("keydown", this.shiftDown, false);
            document.removeEventListener("keyup", this.shiftUp, false);
            (0, i.Ay)("zoom-1x").removeEventListener("click", this.z1x, false);
            (0, i.Ay)("zoom-fit").removeEventListener("click", this.fit, false);
            (0, i.Ay)("zoom-fill").removeEventListener("click", this.fill, false);
            (0, i.Ay)("zoom-mode-plus").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("zoom-mode-minus").removeEventListener("click", this.selectMode, false);
            this.stage.raster.removeEventListener("contextmenu", this.contextMenu, true);
          };
          document.addEventListener("keydown", this.shiftDown, false);
          document.addEventListener("keyup", this.shiftUp, false);
          (0, i.Ay)("zoom-1x").addEventListener("click", this.z1x, false);
          (0, i.Ay)("zoom-fit").addEventListener("click", this.fit, false);
          (0, i.Ay)("zoom-fill").addEventListener("click", this.fill, false);
          this.stage.raster.addEventListener("contextmenu", this.contextMenu, true);
          (0, i.Ay)("zoom-mode-plus").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("zoom-mode-minus").addEventListener("click", this.selectMode, false);
          const e = document.querySelector("input[name=\"zoom-mode\"]:checked").value;
          this.setMode(e);
          this.addDownListeners();
        }
      }
    }
