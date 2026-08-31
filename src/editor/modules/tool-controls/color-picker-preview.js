window.__editorModules[5294] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(5527);
      var n = s(6050);
      var o = s(5259);
      var r = s(98);
      class h extends a.A {
        constructor(t, e) {
          super("picker", t);
          this.stage = t;
          this.target = "main";
          this.toggleTarget = () => {
            this.setTarget(this.target === "main" ? "alt" : "main");
          };
          this.selectTarget = t => {
            this.setTarget(t.currentTarget === (0, i.Ay)("picker-target-main") ? "main" : "alt");
          };
          this.setTarget = t => {
            this.target = t;
            (0, i.Ay)("picker-target-main").checked = this.target === "main";
            (0, i.Ay)("picker-target-alt").checked = this.target === "alt";
          };
          this.setPreset = t => {
            let e = o.A.fromRGB(t.currentTarget.style.backgroundColor);
            this.callback(e, !this.isShiftDown, true);
          };
          this.shiftDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              this.toggleTarget();
            }
          };
          this.shiftUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
              this.toggleTarget();
            }
          };
          this.layerSelect = () => {
            this.output = this.stage.getOutputCanvas();
            this.ctx = this.output.getContext("2d");
          };
          this.down = t => {
            this.stage.coating.freeze(true);
            t = this.stage.translateRasterToFresco(t, undefined, false);
            let e = this.ctx.getImageData(t.x, t.y, 1, 1).data;
            this.callback(new o.A(e[0], e[1], e[2]), this.target === "main");
            this.addMoveListeners();
          };
          this.move = t => {
            t = this.stage.translateRasterToFresco(t, undefined, false);
            let e = this.ctx.getImageData(t.x, t.y, 1, 1).data;
            this.callback(new o.A(e[0], e[1], e[2]), this.target === "main", false);
          };
          this.pickerPreviewColor = t => {
            let e = new n.A(t.clientX, t.clientY);
            this.preview.style.top = e.y - 50 + "px";
            this.preview.style.left = e.x + 10 + "px";
            this.preview.style.display = "block";
            const s = this.stage.canvas.getBoundingClientRect();
            e.x -= s.left;
            e.y -= s.top;
            if (r.Ay.isHDPI) {
              e.x *= 2;
              e.y *= 2;
            }
            if (e.x < 0 || e.y < 0 || e.x > this.stage.canvas.width || e.y > this.stage.canvas.height) {
              this.preview.style.display = "none";
              return;
            }
            let i = this.stage.canvas.getContext("2d").getImageData(e.x, e.y, 1, 1).data;
            this.preview.style.backgroundColor = new o.A(i[0], i[1], i[2]).toHEX();
          };
          this.pickerPreviewLeave = () => {
            this.preview.style.display = "none";
          };
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            t = this.stage.translateRasterToFresco(t, undefined, false);
            let e = this.ctx.getImageData(t.x, t.y, 1, 1).data;
            this.callback(new o.A(e[0], e[1], e[2]), this.target === "main", true);
            this.setShades();
          };
          this.setShades = () => {
            let t = o.A.fromHEX(this.target === "main" ? r.Ay.mainColor : r.Ay.altColor);
            (0, i.Ay)("picker-shade-1").style.backgroundColor = new o.A(t.r - 50, t.g - 50, t.b - 50).toHEX();
            (0, i.Ay)("picker-shade-2").style.backgroundColor = new o.A(t.r - 25, t.g - 25, t.b - 25).toHEX();
            (0, i.Ay)("picker-shade-3").style.backgroundColor = t.toHEX();
            (0, i.Ay)("picker-shade-4").style.backgroundColor = new o.A(t.r + 25, t.g + 25, t.b + 25).toHEX();
            (0, i.Ay)("picker-shade-5").style.backgroundColor = new o.A(t.r + 50, t.g + 50, t.b + 50).toHEX();
            (0, i.Ay)("picker-triad-1").style.backgroundColor = t.toHEX();
            (0, i.Ay)("picker-triad-2").style.backgroundColor = t.rotateHue(90).toHEX();
            (0, i.Ay)("picker-triad-3").style.backgroundColor = t.rotateHue(180).toHEX();
            (0, i.Ay)("picker-tetra-1").style.backgroundColor = t.toHEX();
            (0, i.Ay)("picker-tetra-2").style.backgroundColor = t.rotateHue(60).toHEX();
            (0, i.Ay)("picker-tetra-3").style.backgroundColor = t.rotateHue(120).toHEX();
            (0, i.Ay)("picker-tetra-4").style.backgroundColor = t.rotateHue(180).toHEX();
            (0, i.Ay)("picker-analo-1").style.backgroundColor = t.rotateHue(-30).toHEX();
            (0, i.Ay)("picker-analo-2").style.backgroundColor = t.toHEX();
            (0, i.Ay)("picker-analo-3").style.backgroundColor = t.rotateHue(30).toHEX();
            (0, i.Ay)("picker-comp-1").style.backgroundColor = t.toHEX();
            (0, i.Ay)("picker-comp-2").style.backgroundColor = t.rotateHue(180).toHEX();
          };
          this.cleanUp = () => {
            this.removeDownListeners();
            this.ctx = undefined;
            this.output = undefined;
            this.preview.remove();
            this.preview = undefined;
            (0, i.Ay)("picker").querySelectorAll(".color-pod").forEach(t => t.removeEventListener("click", this.setPreset));
            (0, i.Ay)("picker-target-main").removeEventListener("click", this.selectTarget, false);
            (0, i.Ay)("picker-target-alt").removeEventListener("click", this.selectTarget, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("keydown", this.shiftDown, false);
            document.removeEventListener("keyup", this.shiftUp, false);
            this.stage.raster.removeEventListener("mousemove", this.pickerPreviewColor, true);
            this.stage.raster.removeEventListener("mouseleave", this.pickerPreviewLeave, true);
          };
          this.callback = e;
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("keydown", this.shiftDown, false);
          document.addEventListener("keyup", this.shiftUp, false);
          this.stage.raster.addEventListener("mousemove", this.pickerPreviewColor, true);
          this.stage.raster.addEventListener("mouseleave", this.pickerPreviewLeave, true);
          (0, i.Ay)("picker-target-main").addEventListener("click", this.selectTarget, false);
          (0, i.Ay)("picker-target-alt").addEventListener("click", this.selectTarget, false);
          this.stage.raster.style.cursor = "crosshair";
          (0, i.Ay)("picker").querySelectorAll(".color-pod").forEach(t => t.addEventListener("click", this.setPreset));
          this.addDownListeners();
          this.layerSelect();
          this.setShades();
          this.preview = (0, i.T)("div", {
            id: "color-picker-preview",
            style: "display:none"
          });
          (0, i.Ay)("workspace").appendChild(this.preview);
          const s = document.querySelector("input[name=\"picker-target\"]:checked").value;
          this.setTarget(s);
        }
      }
    }
