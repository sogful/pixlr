window.__editorModules[1059] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(5283);
      var a = s(6050);
      var n = s(98);
      class o {
        constructor(t) {
          this.verticalDrag = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            let e = (t.clientY - this.downPoint.y) / this.spaceHeightRatio / this.stage.zoom;
            this.stage.setAnchor(this.downPos.add(new a.A(0, e)));
            this.stage.updateViewport();
          };
          this.verticalStop = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            document.removeEventListener("pointermove", this.verticalDrag, true);
            document.removeEventListener("pointerup", this.verticalStop, true);
          };
          this.horizontalDrag = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            let e = (t.clientX - this.downPoint.x) / this.spaceWidthRatio / this.stage.zoom;
            this.stage.setAnchor(this.downPos.add(new a.A(e, 0)));
            this.stage.updateViewport();
          };
          this.horizontalStop = t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            document.removeEventListener("pointermove", this.horizontalDrag, true);
            document.removeEventListener("pointerup", this.horizontalStop, true);
          };
          this.resize = () => {
            this.verticalHolder.style.top = this.stage.raster.offsetTop + "px";
            this.verticalHolder.style.left = this.stage.raster.offsetLeft + this.stage.raster.offsetWidth - 16 + "px";
            this.verticalHolder.style.height = this.stage.raster.offsetHeight - 16 + "px";
            this.horizontalHolder.style.top = this.stage.raster.offsetTop + this.stage.raster.offsetHeight - 16 + "px";
            this.horizontalHolder.style.left = this.stage.raster.offsetLeft + "px";
            this.horizontalHolder.style.width = this.stage.raster.offsetWidth + "px";
            this.spaceHeight = this.stage.raster.offsetHeight - 20;
            this.spaceWidth = this.stage.raster.offsetWidth - 181;
            this.render();
          };
          this.render = () => {
            if (!this.stage.fresco) {
              return;
            }
            const t = n.Ay.isHDPI ? 500 : 250;
            this.imageInfo.innerText = this.stage.fresco ? this.stage.fresco.width + " x " + this.stage.fresco.height + " px @ " + Math.round(this.stage.zoom * 100) + "%" : "";
            let e = this.stage.fresco.width * this.stage.zoom;
            let s = this.stage.fresco.height * this.stage.zoom;
            this.horizontalSlider.style.display = this.stage.raster.width <= e ? "block" : "none";
            this.verticalSlider.style.display = this.stage.raster.height <= s ? "block" : "none";
            this.spaceHeightRatio = this.spaceHeight / (s + t * 2);
            this.spaceWidthRatio = this.spaceWidth / (e + t * 2);
            const i = Math.round(this.spaceWidth * (this.stage.raster.width / (e + t * 2)));
            const a = Math.round(this.spaceHeight * (this.stage.raster.height / (s + t * 2)));
            const o = (this.stage.offset.x - t) * -1 / (e + t * 2);
            const r = (this.stage.offset.y - t) * -1 / (s + t * 2);
            const h = Math.round((this.spaceWidth - (i < 30 ? 30 - i : 0)) * o);
            const l = Math.round((this.spaceHeight - (a < 30 ? 30 - a : 0)) * r);
            this.horizontalSlider.style.width = Math.max(i, 30) + "px";
            this.horizontalSlider.style.left = 162 + h + "px";
            this.verticalSlider.style.height = Math.max(a, 30) + "px";
            this.verticalSlider.style.top = 2 + l + "px";
          };
          this.stage = t;
          this.verticalSlider = (0, i.T)("div", {
            id: "vertical-scroll-slider"
          });
          this.verticalHolder = (0, i.T)("div", {
            id: "vertical-scroll-holder"
          }, this.verticalSlider);
          (0, i.Ay)("workspace").appendChild(this.verticalHolder);
          this.imageInfo = (0, i.T)("div", {
            id: "horizontal-image-info"
          });
          this.horizontalSlider = (0, i.T)("div", {
            id: "horizontal-scroll-slider"
          });
          this.horizontalHolder = (0, i.T)("div", {
            id: "horizontal-scroll-holder"
          }, this.imageInfo, this.horizontalSlider);
          (0, i.Ay)("workspace").appendChild(this.horizontalHolder);
          document.addEventListener("viewport-update", this.render);
          this.verticalHolder.addEventListener("click", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            const e = n.Ay.isHDPI ? 500 : 250;
            let s = (t.offsetY - 2) / this.spaceHeightRatio / this.stage.zoom;
            let i = this.stage.anchor.clone();
            i.y = s - e / this.stage.zoom;
            this.stage.setAnchor(i);
            this.stage.updateViewport();
          }, false);
          this.verticalSlider.addEventListener("click", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            return false;
          }, true);
          this.verticalSlider.addEventListener("pointerdown", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            this.stage.resetAnchor();
            this.downPoint = new a.A(t.clientX, t.clientY);
            this.downPos = this.stage.anchor.clone();
            document.addEventListener("pointermove", this.verticalDrag, true);
            document.addEventListener("pointerup", this.verticalStop, true);
          }, true);
          this.horizontalHolder.addEventListener("click", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            if (t.offsetX - 160 > this.spaceWidth) {
              this.stage.setZoom("fit");
            } else if (t.offsetX > 160) {
              const e = n.Ay.isHDPI ? 500 : 250;
              let s = (t.offsetX - 160) / this.spaceWidthRatio / this.stage.zoom;
              let i = this.stage.anchor.clone();
              i.x = s - e / this.stage.zoom;
              this.stage.setAnchor(i);
              this.stage.updateViewport();
            }
          }, false);
          this.horizontalSlider.addEventListener("click", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            return false;
          }, true);
          this.horizontalSlider.addEventListener("pointerdown", t => {
            t.preventDefault();
            t.stopPropagation();
            t.stopImmediatePropagation();
            this.stage.resetAnchor();
            this.downPoint = new a.A(t.clientX, t.clientY);
            this.downPos = this.stage.anchor.clone();
            document.addEventListener("pointermove", this.horizontalDrag, true);
            document.addEventListener("pointerup", this.horizontalStop, true);
          }, true);
        }
      }
    }
