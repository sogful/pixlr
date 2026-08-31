window.__editorModules[5448] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(6957);
      var r = s(6050);
      var h = s(3517);
      var l = s(2037);
      var c = s(3328);
      var d = s(709);
      class u extends d.A {
        constructor(t) {
          super("lasso", t);
          this.points = [];
          this.selectMode = () => {
            this.mode = document.querySelector("input[name=\"lasso-mode\"]:checked").value;
          };
          this.selectType = t => {
            this.type = t.currentTarget.value;
            (0, i.Ay)("lasso-magnet-settings").style.display = this.type === "magnet" ? "block" : "none";
            this.noGoZone = this.type !== "lasso";
            if (this.type === "magnet" && !this.edges) {
              this.generateEdges();
            }
          };
          this.layerSelect = () => {
            if (this.type === "magnet") {
              this.generateEdges();
            }
          };
          this.viewportChange = () => {
            if (this.points && this.points.length > 1) {
              window.requestAnimationFrame(() => {
                if (this.type === "bezier") {
                  this.stage.coating.drawAntBezier(this.points.map(t => this.stage.translateFrescoToRaster(t)));
                } else {
                  this.stage.coating.drawAntPolygon(this.points.map(t => this.stage.translateFrescoToRaster(t)));
                }
              });
            }
          };
          this.generateEdges = () => {
            const t = new o.A([]);
            t.addShader("gaussian", 0.2);
            t.addShader("sobel", 1);
            this.edges = n.oM(t.apply(this.stage.getOutputCanvas(this.stage.fresco, 1)));
            this.edgeData = this.edges.getContext("2d").getImageData(0, 0, this.edges.width, this.edges.height);
          };
          this.keyDown = t => {
            if (t.key === "Shift" && !this.isShiftDown) {
              this.isShiftDown = true;
              if (!this.isDown) {
                (0, i.Ay)("lasso-mode-add").checked = true;
                this.selectMode();
              }
            }
            if (t.key === "Control" && !this.isCtrlDown) {
              this.isCtrlDown = true;
              if (!this.isDown) {
                (0, i.Ay)("lasso-mode-remove").checked = true;
                this.selectMode();
              }
            }
          };
          this.keyUp = t => {
            if (t.key === "Shift" && this.isShiftDown) {
              this.isShiftDown = false;
              if (!this.isCtrlDown && !this.isDown) {
                (0, i.Ay)("lasso-mode-new").checked = true;
                this.selectMode();
              }
            }
            if (t.key === "Control" && this.isCtrlDown) {
              this.isCtrlDown = false;
              if (!this.isDown) {
                (0, i.Ay)("lasso-mode-new").checked = true;
                this.selectMode();
              }
            }
          };
          this.down = t => {
            t = this.stage.translateRasterToFresco(t, undefined, false);
            if (new Date().getTime() - this.stamp < 350 && this.type !== "free" && (this.points.length < 2 || this.points[this.points.length - 1].distanceTo(this.points[this.points.length - 2]) < 10)) {
              if (this.points.length !== 0) {
                this.closeLoop();
              }
              this.removeMoveListeners();
              this.isDown = false;
              return;
            }
            this.stamp = new Date().getTime();
            this.stage.coating.freeze(true);
            if (this.points.length === 0) {
              this.setHistory();
            }
            if (this.points.length === 0 && this.mode === "new" && this.stage.fresco.selection) {
              this.stage.fresco.selection.clear();
              window.requestAnimationFrame(() => this.stage.coating.render());
            }
            if (this.points.length === 0) {
              this.addMoveListeners();
              if (this.type === "magnet") {
                this.stage.coating.setCursorImage(new l.A(new c.A("circle", this.size.getValue(), 0)).getCursorImage(1));
              }
            }
            if (this.points.length > 3 && this.type !== "free") {
              if (this.type === "bezier") {
                if (this.points[0].distanceTo(this.points[this.points.length - 2]) < 10 / this.stage.zoom) {
                  this.closeLoop();
                  return;
                }
              } else if (this.points[0].distanceTo(this.points[this.points.length - 1]) < 10 / this.stage.zoom) {
                this.closeLoop();
                return;
              }
            }
            this.points.push(t);
            if (this.type !== "free" && this.points.length === 1) {
              this.points.push(t.clone());
            }
          };
          this.move = t => {
            t = this.stage.translateRasterToFresco(t, undefined, false);
            switch (this.type) {
              case "free":
                if (!this.isDown) {
                  return;
                }
                this.points.push(t);
                break;
              case "polygon":
              case "bezier":
                this.points[this.points.length - 1] = t;
                break;
              case "magnet":
                this.findAnchor(t);
            }
            window.requestAnimationFrame(() => {
              if (this.type === "bezier") {
                this.stage.coating.drawAntBezier(this.points.map(t => this.stage.translateFrescoToRaster(t)));
              } else {
                this.stage.coating.drawAntPolygon(this.points.map(t => this.stage.translateFrescoToRaster(t)));
              }
            });
          };
          this.up = t => {
            if (this.type === "free") {
              t = this.stage.translateRasterToFresco(t, undefined, false);
              this.isDown = false;
              this.removeMoveListeners();
              this.stage.coating.freeze(false);
              if (this.points.length < 3) {
                if (this.stage.fresco.selection && this.stage.fresco.selection.bounds && this.stage.fresco.selection.bounds.width > 0) {
                  this.stage.fresco.selection.reset();
                  this.addHistory("deselect");
                }
              } else {
                this.stage.fresco.addSelection();
                this.stage.fresco.selection.editPolygon(this.points, this.feather.getValue(), !(0, i.Ay)("lasso-anti-alias").checked, this.mode === "remove");
                this.addHistory();
              }
              window.requestAnimationFrame(() => this.stage.coating.render());
              this.points = [];
            }
          };
          this.closeLoop = () => {
            this.isDown = false;
            this.removeMoveListeners();
            this.stage.coating.freeze(false);
            this.stage.coating.removeCursorImage();
            this.stage.raster.style.cursor = "crosshair";
            if (this.points.length > 2) {
              this.stage.fresco.addSelection();
              if (this.type === "bezier") {
                this.stage.fresco.selection.editBezier(this.points, this.feather.getValue(), !(0, i.Ay)("lasso-anti-alias").checked, this.mode === "remove");
              } else {
                this.stage.fresco.selection.editPolygon(this.points, this.feather.getValue(), !(0, i.Ay)("lasso-anti-alias").checked, this.mode === "remove");
              }
              this.addHistory();
            } else if (this.stage.fresco.hasSelection()) {
              this.stage.fresco.selection.reset();
              this.addHistory("deselect");
            }
            window.requestAnimationFrame(() => this.stage.coating.render());
            this.points = [];
          };
          this.findAnchor = t => {
            let e = this.size.getValue();
            t = new r.A(Math.round(t.x), Math.round(t.y));
            if (this.points.length === 0 || this.points[this.points.length - 1].distanceTo(t) > e / 10) {
              let s;
              let i = this.size.getValue() / 2;
              let a = this.edges.width;
              let n = new r.A();
              let o = e;
              for (let r = t.y - i, h = t.y + i; r < h; ++r) {
                for (let l = t.x - i, c = t.x + i; l < c; ++l) {
                  n.x = l;
                  n.y = r;
                  let i = t.distanceTo(n);
                  if (i > e) {
                    continue;
                  }
                  let h = this.edgeData.data[(r * a + l) * 4];
                  if (h > 18) {
                    h = i * 0.333 + i * (1 - h / 255) * 0.666;
                    if (h < o) {
                      s = n.clone();
                      o = h;
                    }
                  }
                }
              }
              if (s) {
                t = s;
              }
              this.checkAndAdd(t, e / 10);
            }
          };
          this.checkAndAdd = (t, e) => {
            let s = this.points.slice(Math.max(this.points.length - 3, 0));
            let i = false;
            s.forEach(s => {
              if (s.distanceTo(t) < e) {
                i = true;
              }
            });
            if (!i) {
              this.points.push(t);
            }
          };
          this.cancel = () => {
            if (this.type !== "free") {
              if (this.points.length > 2) {
                if (this.type === "polygon" || this.type === "bezier") {
                  this.points.splice(-2, 1);
                } else {
                  this.points.pop();
                }
                window.requestAnimationFrame(() => {
                  if (this.type === "bezier") {
                    this.stage.coating.drawAntBezier(this.points.map(t => this.stage.translateFrescoToRaster(t)));
                  } else {
                    this.stage.coating.drawAntPolygon(this.points.map(t => this.stage.translateFrescoToRaster(t)));
                  }
                });
              } else {
                this.points = [];
                this.isDown = false;
                this.removeMoveListeners();
                this.stage.coating.freeze(false);
                this.stage.coating.removeCursorImage();
                this.stage.raster.style.cursor = "crosshair";
                if (this.stage.fresco.hasSelection()) {
                  this.stage.fresco.selection.reset();
                  this.addHistory("deselect");
                }
                window.requestAnimationFrame(() => this.stage.coating.render());
              }
            }
          };
          this.apply = () => {
            if (this.type !== "free" && this.points.length > 2) {
              this.closeLoop();
            }
          };
          this.cleanUp = () => {
            if (this.isShiftDown || this.isCtrlDown) {
              (0, i.Ay)("lasso-mode-new").checked = true;
            }
            this.superClean();
            if (this.stage.fresco && this.stage.fresco.selection && this.stage.fresco.selection.outline?.length === 0) {
              this.stage.fresco.removeSelection();
            }
            this.removeMoveListeners();
            this.size.cleanUp();
            this.feather.cleanUp();
            this.edges = undefined;
            this.edgeData = undefined;
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("viewport-render", this.viewportChange, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
            (0, i.Ay)("lasso-type-free").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("lasso-type-polygon").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("lasso-type-bezier").removeEventListener("change", this.selectType, false);
            (0, i.Ay)("lasso-type-magnet").removeEventListener("change", this.selectType, false);
          };
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("viewport-render", this.viewportChange, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("keyup", this.keyUp, false);
          (0, i.Ay)("lasso-type-free").addEventListener("change", this.selectType, false);
          (0, i.Ay)("lasso-type-polygon").addEventListener("change", this.selectType, false);
          (0, i.Ay)("lasso-type-bezier").addEventListener("change", this.selectType, false);
          (0, i.Ay)("lasso-type-magnet").addEventListener("change", this.selectType, false);
          this.feather = new h.A("lasso-feather", {
            compact: true,
            defaultValue: 0,
            label: (0, a.A)("feather") + ":",
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          });
          this.size = new h.A("lasso-magnet-size", {
            compact: true,
            label: (0, a.A)("size") + ":",
            step: 2,
            range: [5, 120],
            defaultValue: 50,
            labelFormat: t => t.toFixed(0)
          });
          this.type = document.querySelector("input[name=\"lasso-type\"]:checked").value;
          if (this.type === "magnet") {
            this.generateEdges();
          }
          this.noGoZone = this.type !== "lasso";
          (0, i.Ay)("lasso-mode-new").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("lasso-mode-add").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("lasso-mode-remove").addEventListener("change", this.selectMode, false);
          this.selectMode();
        }
      }
    }
