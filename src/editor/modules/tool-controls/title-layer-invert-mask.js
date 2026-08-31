window.__editorModules[1924] = function (t, e, s) {
      s.d(e, {
        A: () => x
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(6722);
      var r = s(6);
      var h = s(5527);
      var l = s(3517);
      var c = s(5259);
      var d = s(6050);
      var u = s(2037);
      var p = s(9661);
      var g = s(6957);
      var m = s(7572);
      var y = s(3566);
      var f = s(3328);
      var w = s(7578);
      class x extends h.A {
        constructor(t) {
          super("cutout", t);
          this.type = "";
          this.mode = "remove";
          this.isShiftDown = false;
          this.more = t => {
            t.preventDefault();
            t.stopPropagation();
            this.showContextMenu(new d.A(t.clientX, t.clientY), true);
          };
          this.contextMenu = t => {
            t.preventDefault();
            t.stopPropagation();
            this.showContextMenu(new d.A(t.clientX, t.clientY), false);
          };
          this.showContextMenu = (t, e) => {
            if (!this.selected) {
              return;
            }
            const s = this.selected.hasMask();
            new w.Ay(t, [new w.kt((0, a.A)("titleLayerInvertMask"), s ? () => this.stage.maskInvert() : undefined), new w.kt((0, a.A)("titleLayerExtractMask"), s ? () => this.stage.maskExtract() : undefined), new w.kt((0, a.A)("titleLayerConvertMask"), s ? () => this.stage.maskConvert() : undefined), new w.kt(), new w.kt((0, a.A)("titleLayerApplyMask"), s ? () => this.stage.maskApply() : undefined), new w.kt((0, a.A)("titleLayerResetMask"), s ? () => this.stage.maskDelete() : undefined)], e);
          };
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("cutout-no-layer").style.display = "flex";
              (0, i.Ay)("cutout-sub-tools").style.display = "none";
              this.selected = null;
              return;
            }
            (0, i.Ay)("cutout-sub-tools").style.display = "flex";
            (0, i.Ay)("cutout-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            if (this.type === "draw") {
              this.updateBrush();
            }
            this.renderMask();
          };
          this.selectType = t => {
            this.setType(t.currentTarget.value);
          };
          this.setType = t => {
            if (t !== this.type) {
              if (this.type !== "") {
                (0, i.Ay)("cutout-" + this.type + "-settings").style.display = "none";
              }
              (0, i.Ay)("cutout-" + t + "-settings").style.display = "inline-flex";
              this.type = t;
              if (this.selected && !this.selected.hasMask()) {
                if (this.type === "shape") {
                  this.setMode("keep");
                } else {
                  this.setMode("remove");
                }
              }
              if (this.selected) {
                if (this.type === "draw") {
                  this.updateBrush();
                } else {
                  this.stage.coating.removeCursorImage();
                  this.stage.raster.style.cursor = "crosshair";
                }
              } else {
                this.stage.raster.style.cursor = "auto";
              }
            }
          };
          this.toggleMode = () => {
            this.setMode(this.mode === "keep" ? "remove" : "keep");
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget === (0, i.Ay)("cutout-mode-remove") ? "remove" : "keep");
          };
          this.setMode = t => {
            this.mode = t;
            (0, i.Ay)("cutout-mode-remove").checked = this.mode === "remove";
            (0, i.Ay)("cutout-mode-keep").checked = this.mode === "keep";
            if (this.type === "draw") {
              this.updateBrush();
            }
          };
          this.zoomChange = () => {
            if (this.type === "draw") {
              this.updateBrush();
            }
          };
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              this.toggleMode();
            }
            switch (t.key) {
              case ",":
                if (t.shiftKey) {
                  this.brushPod.stepSoftness(0.1);
                } else {
                  this.brushPod.stepSize(-10);
                }
                break;
              case ".":
                if (t.shiftKey) {
                  this.brushPod.stepSoftness(-0.1);
                } else {
                  this.brushPod.stepSize(10);
                }
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift") {
              this.isShiftDown = false;
              this.toggleMode();
            }
          };
          this.down = t => {
            if (this.selected) {
              this.downPoint = t;
              if (this.type !== "magic") {
                switch (this.type) {
                  case "draw":
                    this.downDraw(t);
                    break;
                  case "lasso":
                    this.downLasso(t);
                    break;
                  case "shape":
                    this.downShape(t);
                    break;
                  case "gradient":
                    this.downGradient(t);
                }
                this.addMoveListeners();
              } else {
                this.applyMagic(t);
              }
            }
          };
          this.move = t => {
            switch (this.type) {
              case "shape":
                this.moveShape(t);
                break;
              case "draw":
                this.moveDraw(t);
                break;
              case "lasso":
                this.moveLasso(t);
                break;
              case "gradient":
                this.moveGradient(t);
            }
          };
          this.up = t => {
            this.removeMoveListeners();
            switch (this.type) {
              case "shape":
                this.applyShape(this.stage.translateRasterToFresco(this.downPoint, this.selected.rect), this.stage.translateRasterToFresco(t, this.selected.rect));
                break;
              case "draw":
                this.applyDraw();
                break;
              case "lasso":
                this.applyLasso();
                break;
              case "gradient":
                this.applyGradient(this.stage.translateRasterToFresco(this.downPoint, this.selected.rect), this.stage.translateRasterToFresco(t, this.selected.rect));
            }
          };
          this.applyMagic = t => {
            if ((t = this.stage.translateRasterToFresco(t, this.selected.rect)).x < 0 || t.y < 0 || t.x > this.selected.canvas.width || t.y > this.selected.canvas.height) {
              return;
            }
            const e = this.prepareMask();
            let s = this.magicFeather.getValue();
            let a = this.selected.canvas.getContext("2d").getImageData(t.x, t.y, 1, 1).data;
            let n = new c.A(a[0], a[1], a[2], a[3]);
            if (n.a === 0 && this.mode === "remove" && s === 0) {
              return;
            }
            let o = this.magicTolerance.getValue() * 100;
            let r = (this.selected.baked && this.mode === "remove" ? this.selected.baked : this.selected.canvas).getContext("2d").getImageData(0, 0, this.selected.canvas.width, this.selected.canvas.height);
            this.cpx = new Uint32Array(r.data.buffer);
            let h = this.scratch.ctx.getImageData(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
            this.mpx = new Uint32Array(h.data.buffer);
            if ((0, i.Ay)("cutout-magic-contiguous").checked) {
              this.floodFill(t, n, o, s !== 0);
            } else {
              this.allFill(n, o);
            }
            this.scratch.ctx.putImageData(h, 0, 0);
            h = null;
            r = null;
            this.cpx = null;
            this.mpx = null;
            this.drawToMask(e, this.magicFeather.getValue());
          };
          this.updateBrush = () => {
            this.brush.generate(this.mode === "keep" ? new c.A(0, 255, 0, 255) : new c.A(255, 0, 0, 255));
            if (this.selected) {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom));
            } else {
              this.stage.coating.removeCursorImage();
            }
          };
          this.downDraw = t => {
            this.x = this.y = -1;
            this.scratch.settings.opacity = 0.4;
            this.moveDraw(t);
          };
          this.x = -1;
          this.y = -1;
          this.moveDraw = t => {
            let e = this.brush.getStep();
            let s = false;
            t = this.stage.translateRasterToFresco(t, this.selected.rect);
            if (this.x === -1) {
              this.lx = t.x;
              this.ly = t.y;
              this.x = t.x;
              this.y = t.y;
              this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
              s = true;
            }
            if (t.x !== this.x || t.y !== this.y) {
              let i = t.x - this.x;
              let a = t.y - this.y;
              let n = i > 0 ? 1 : -1;
              let o = a > 0 ? 1 : -1;
              i = i < 0 ? -i : i;
              a = a < 0 ? -a : a;
              if (i > a) {
                let t = i * 0.5;
                for (let r = 1; r <= i; r++) {
                  this.x += n;
                  t += a;
                  if (t >= i) {
                    t -= i;
                    this.y += o;
                  }
                  if (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) {
                    this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    this.lx = this.x;
                    this.ly = this.y;
                    s = true;
                  }
                }
              } else {
                let t = a * 0.5;
                for (let r = 1; r <= a; r++) {
                  this.y += o;
                  t += i;
                  if (t >= a) {
                    t -= a;
                    this.x += n;
                  }
                  if (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) {
                    this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    this.lx = this.x;
                    this.ly = this.y;
                    s = true;
                  }
                }
              }
            }
            if (s) {
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.applyDraw = () => {
            const t = this.prepareMask();
            this.drawToMask(t, 0, this.drawOpacity.getValue());
          };
          this.downLasso = t => {
            this.points = [];
          };
          this.moveLasso = t => {
            this.rasterctx.save();
            this.points.push(t);
            this.stage.raster.style.opacity = "0.6";
            this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            this.rasterctx.strokeStyle = this.mode === "keep" ? "#00ff00" : "#ff0000";
            this.rasterctx.lineWidth = 2;
            this.rasterctx.lineCap = "round";
            this.rasterctx.setLineDash([6]);
            this.rasterctx.beginPath();
            this.rasterctx.moveTo(this.points[0].x, this.points[0].y);
            this.points.forEach(t => {
              this.rasterctx.lineTo(t.x, t.y);
            });
            this.rasterctx.stroke();
            this.rasterctx.restore();
          };
          this.applyLasso = () => {
            this.stage.raster.style.opacity = "1";
            this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            if (this.points.length < 2) {
              return;
            }
            const t = this.points.map(t => this.stage.translateRasterToFresco(t, this.selected.rect));
            const e = this.prepareMask();
            this.scratch.ctx.beginPath();
            this.scratch.ctx.moveTo(t[0].x, t[0].y);
            t.forEach(t => this.scratch.ctx.lineTo(t.x, t.y));
            this.scratch.ctx.fill();
            this.drawToMask(e, this.lassoFeather.getValue());
          };
          this.downShape = t => {
            this.shapeType = document.querySelector("input[name=\"cutout-shape-type\"]:checked").value;
          };
          this.moveShape = t => {
            this.rasterctx.save();
            this.stage.raster.style.opacity = "0.6";
            this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            this.rasterctx.strokeStyle = this.mode === "keep" ? "#00ff00" : "#ff0000";
            this.rasterctx.lineWidth = 2;
            switch (this.shapeType) {
              case "rectangle":
                this.rasterctx.setLineDash([6]);
                this.rasterctx.strokeRect(this.downPoint.x, this.downPoint.y, t.x - this.downPoint.x, t.y - this.downPoint.y);
                break;
              case "ellipse":
                this.rasterctx.setLineDash([6]);
                m.A.ellipse(this.rasterctx, this.downPoint, t);
                this.rasterctx.stroke();
                break;
              case "line":
                this.rasterctx.lineWidth = 4;
                m.A.line(this.rasterctx, this.downPoint, t);
                this.rasterctx.stroke();
            }
            this.rasterctx.restore();
          };
          this.applyShape = (t, e) => {
            if (t.x === e.x && t.y === e.y) {
              return;
            }
            this.stage.raster.style.opacity = "1";
            this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            const s = this.prepareMask();
            switch (this.shapeType) {
              case "rectangle":
                this.scratch.ctx.fillRect(t.x, t.y, e.x - t.x, e.y - t.y);
                break;
              case "ellipse":
                m.A.ellipse(this.scratch.ctx, t, e);
                this.scratch.ctx.fill();
                break;
              case "line":
                this.scratch.ctx.lineWidth = 4 / this.stage.zoom;
                m.A.line(this.scratch.ctx, t, e);
                this.scratch.ctx.stroke();
            }
            this.drawToMask(s, this.shapeFeather.getValue());
          };
          this.downGradient = t => {
            this.stage.coating.ctx.strokeStyle = n.q5;
            this.stage.coating.ctx.fillStyle = n.bi;
          };
          this.moveGradient = t => {
            window.requestAnimationFrame(() => {
              if (this.downPoint) {
                this.stage.coating.clear(true);
                this.stage.coating.ctx.lineWidth = 2;
                m.A.line(this.stage.coating.ctx, this.downPoint, t);
                this.stage.coating.ctx.stroke();
                m.A.arc(this.stage.coating.ctx, this.downPoint, 6);
                this.stage.coating.ctx.fill();
                this.stage.coating.ctx.stroke();
                m.A.arc(this.stage.coating.ctx, t, 6);
                this.stage.coating.ctx.fill();
                this.stage.coating.ctx.stroke();
                this.stage.coating.ctx.lineWidth = 1;
                this.stage.coating.render();
              }
            });
          };
          this.applyGradient = (t, e) => {
            this.rasterctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            this.stage.coating.ctx.clearRect(0, 0, this.stage.raster.width, this.stage.raster.height);
            if (t.x === e.x && t.y === e.y) {
              return;
            }
            let s;
            let i = document.querySelector("input[name=\"cutout-gradient-type\"]:checked").value;
            this.scratch.clear();
            this.scratch.ctx.save();
            if (i === "radial") {
              const i = t.x - e.x;
              const a = t.y - e.y;
              s = this.scratch.ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, Math.sqrt(i * i + a * a));
            } else {
              s = this.scratch.ctx.createLinearGradient(t.x, t.y, e.x, e.y);
            }
            this.gradPod.grad.addStopToCanvasGradient(s, this.mode === "remove");
            this.scratch.ctx.fillStyle = s;
            this.scratch.ctx.fillRect(0, 0, this.scratch.canvas.width, this.scratch.canvas.height);
            this.scratch.ctx.restore();
            const a = this.prepareMask();
            this.drawToMask(a, 0);
          };
          this.prepareMask = () => {
            let t = false;
            if (!this.selected.hasMask() && (this.selected.addMask(), t = true, this.mode === "remove")) {
              this.selected.mask.getContext("2d").fillRect(0, 0, this.selected.mask.width, this.selected.mask.height);
            }
            return t;
          };
          this.renderMask = () => {
            if (this.selected.hasMask()) {
              this.selected.render();
              if ((0, i.Ay)("cutout-show-ghost").checked) {
                this.renderGhost();
              }
              this.stage.render();
            }
          };
          this.renderGhost = () => {
            if (this.selected.hasMask()) {
              var t = this.selected.baked.getContext("2d");
              t.save();
              t.globalAlpha = 0.33;
              t.drawImage(this.selected.canvas, 0, 0);
              t.restore();
              t = null;
            }
          };
          this.cleanUp = () => {
            var t;
            this.stage.coating.freeze(false);
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.removeDownListeners();
            if ((0, i.Ay)("cutout-show-ghost").checked) {
              this.selected.render();
              this.stage.render();
            }
            this.brushPod.cleanUp();
            this.drawOpacity.cleanUp();
            this.magicFeather.cleanUp();
            this.shapeFeather.cleanUp();
            this.lassoFeather.cleanUp();
            this.magicTolerance.cleanUp();
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            document.removeEventListener("zoom-change", this.zoomChange, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            (0, i.Ay)("cutout-show-ghost").removeEventListener("change", this.renderMask, false);
            (0, i.Ay)("cutout-type-magic").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("cutout-type-draw").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("cutout-type-lasso").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("cutout-type-shape").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("cutout-type-gradient").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("cutout-mode-keep").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("cutout-mode-remove").removeEventListener("click", this.selectMode, false);
            (0, i.Ay)("cutout-tool-more").removeEventListener("click", this.more, false);
            this.stage.raster.removeEventListener("contextmenu", this.contextMenu, true);
            this.rasterctx = null;
            this.selected = null;
            this.brush = null;
          };
          this.allFill = (t, e) => {
            for (var s = 0; s < this.mpx.length; ++s) {
              if (this.tolerate(s, t, e)) {
                this.mpx[s] = 4294967295;
              }
            }
          };
          this.floodFill = (t, e, s, i) => {
            let a = this.selected.canvas.width;
            let n = this.selected.canvas.height;
            let o = new Array();
            let r = new Array(a * n);
            for (this.linearFill(t.x, t.y, e, s, i, o, r); o.length > 0;) {
              for (var h = o.shift(), l = h.start; l <= h.stop; ++l) {
                if (h.row > 0 && !r[(h.row - 1) * a + l]) {
                  this.linearFill(l, h.row - 1, e, s, i, o, r);
                }
                if (h.row < n - 1 && !r[(h.row + 1) * a + l]) {
                  this.linearFill(l, h.row + 1, e, s, i, o, r);
                }
              }
            }
          };
          this.linearFill = (t, e, s, i, a, n, r) => {
            var h = this.selected.canvas.width;
            r[h * e + t] = true;
            if (this.tolerate(h * e + t, s, i)) {
              this.mpx[h * e + t] = 4294967295;
              for (var l = t - 1, c = t + 1; l >= 0 && !r[h * e + l];) {
                r[h * e + l] = true;
                if (!this.tolerate(h * e + l, s, i)) {
                  if (a) {
                    this.mpx[h * e + l] = 4294967295;
                  }
                  break;
                }
                this.mpx[h * e + l] = 4294967295;
                --l;
              }
              while (c < h && !r[h * e + c]) {
                r[h * e + c] = true;
                if (!this.tolerate(h * e + c, s, i)) {
                  if (a) {
                    this.mpx[h * e + c] = 4294967295;
                  }
                  break;
                }
                this.mpx[h * e + c] = 4294967295;
                ++c;
              }
              n.push(new o.A(l + 1, c - 1, e));
            } else if (a) {
              this.mpx[h * e + l] = 4294967295;
            }
          };
          this.tolerate = (t, e, s) => {
            let i;
            let a;
            let n;
            let o;
            let r;
            let h;
            let l;
            a = 0;
            n = this.cpx[t];
            o = n >> 24 & 255;
            o = e.a - o;
            i = o < 0 ? -o : o;
            if (i > a) {
              a = i;
            }
            if (e.a > 0) {
              l = n >> 16 & 255;
              h = n >> 8 & 255;
              r = n & 255;
              r = e.r - r;
              i = r < 0 ? -r : r;
              if (i > a) {
                a = i;
              }
              h = e.g - h;
              i = h < 0 ? -h : h;
              if (i > a) {
                a = i;
              }
              l = e.b - l;
              i = l < 0 ? -l : l;
              if (i > a) {
                a = i;
              }
            }
            return a < s;
          };
          this.stage.coating.freeze(true);
          this.stage.coating.clear();
          this.rasterctx = this.stage.coating.ctx;
          (0, i.Ay)("cutout-tool-more").addEventListener("click", this.more, false);
          (0, i.Ay)("cutout-type-magic").addEventListener("change", this.selectType, false);
          (0, i.Ay)("cutout-type-draw").addEventListener("change", this.selectType, false);
          (0, i.Ay)("cutout-type-lasso").addEventListener("change", this.selectType, false);
          (0, i.Ay)("cutout-type-shape").addEventListener("change", this.selectType, false);
          (0, i.Ay)("cutout-type-gradient").addEventListener("change", this.selectType, false);
          (0, i.Ay)("cutout-mode-keep").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("cutout-mode-remove").addEventListener("click", this.selectMode, false);
          (0, i.Ay)("cutout-show-ghost").addEventListener("change", this.renderMask, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.zoomChange, false);
          this.stage.raster.addEventListener("contextmenu", this.contextMenu, true);
          this.brush = new u.A(new f.A());
          this.brushPod = new y.A(t, "cutout-draw-brush", this.brush, this.updateBrush);
          this.drawOpacity = new l.A("cutout-draw-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          let e = new r.Ay();
          e.addStop(new c.A(0, 255, 0, 255), 0);
          e.addStop(new c.A(0, 255, 0, 0), 1);
          this.gradPod = new p.A("cutout-gradient-grad", e, true);
          this.magicTolerance = new l.A("cutout-magic-tolerance", {
            compact: true,
            defaultValue: 0.32,
            label: (0, a.A)("tolerance") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          this.magicFeather = new l.A("cutout-magic-feather", {
            compact: true,
            defaultValue: 0,
            label: (0, a.A)("feather") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          this.shapeFeather = new l.A("cutout-shape-feather", {
            compact: true,
            defaultValue: 0,
            label: (0, a.A)("feather") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          this.lassoFeather = new l.A("cutout-lasso-feather", {
            compact: true,
            defaultValue: 0,
            label: (0, a.A)("feather") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          (0, i.Ay)("cutout-magic-settings").style.display = "none";
          (0, i.Ay)("cutout-draw-settings").style.display = "none";
          (0, i.Ay)("cutout-shape-settings").style.display = "none";
          (0, i.Ay)("cutout-lasso-settings").style.display = "none";
          (0, i.Ay)("cutout-gradient-settings").style.display = "none";
          this.addDownListeners();
          this.layerSelect();
          const s = document.querySelector("input[name=\"cutout-type\"]:checked").value;
          this.setType(s);
          const h = document.querySelector("input[name=\"cutout-mode\"]:checked").value;
          this.setMode(h);
        }
        drawToMask(t, e, s = 1) {
          if (e !== 0) {
            let t = new g.A();
            t.addShader("blur", e);
            this.scratch.replaceCanvas(t.apply(this.scratch.canvas));
          }
          const i = n.TL(this.scratch.canvas);
          if (!i) {
            return;
          }
          let a;
          if (!t) {
            a = n.ON(this.selected.mask, i);
          }
          const o = this.selected.mask.getContext("2d");
          o.save();
          o.globalAlpha = s;
          if (this.mode === "remove") {
            o.globalCompositeOperation = "destination-out";
          }
          o.drawImage(this.scratch.canvas, 0, 0);
          o.restore();
          this.scratch.clear();
          this.renderMask();
          this.stage.history.add({
            type: "mask",
            layer: this.selected,
            rect: i,
            patch: a
          });
        }
      }
    }
