window.__editorModules[5293] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(5527);
      function h(t, e) {
        return Math.floor(Math.random() * (e - t + 1)) + t;
      }
      var l = s(3517);
      var c = s(749);
      var d = s(98);
      var u = s(7793);
      class p extends r.A {
        constructor(t) {
          super("pen", t);
          this.stage = t;
          this.pathPoints = [];
          this.layerSelect = () => {
            if (!this.stage.fresco.isSelectedType(c.A.TYPE_IMAGE)) {
              (0, i.Ay)("pen-no-layer").style.display = "flex";
              (0, i.Ay)("pen-settings").style.display = "none";
              this.stage.raster.style.cursor = "auto";
              this.selected = null;
              return;
            }
            (0, i.Ay)("pen-no-layer").style.display = "none";
            (0, i.Ay)("pen-settings").style.display = "flex";
            this.stage.raster.style.cursor = "crosshair";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, new o.A(0, 0, this.stage.fresco.width, this.stage.fresco.height), "over");
            if (this.stage.fresco.hasSelection()) {
              this.scratch.addBake();
            }
          };
          this.keyDown = t => {
            if (t.key !== "Control" || this.stage.coating.override) {
              if (t.key === "," || t.key === ".") {
                switch (t.key) {
                  case ",":
                    this.size.setValue(this.size.getValue() - 1);
                    break;
                  case ".":
                    this.size.setValue(this.size.getValue() + 1);
                }
              }
            } else {
              this.stage.coating.setPicker();
            }
          };
          this.keyUp = t => {
            if (t.key === "Control" && this.stage.coating.override) {
              this.stage.coating.removePicker();
            }
          };
          this.down = t => {
            if (this.selected) {
              this.stage.coating.freeze(true);
              this.mode = (0, i.Ay)("pen-mode").value;
              this.scratch.settings.opacity = this.opacity.getValue();
              this.scratch.ctx.save();
              this.scratch.ctx.lineWidth = this.size.getValue() / 2;
              this.scratch.ctx.lineJoin = this.scratch.ctx.lineCap = "round";
              if (this.mode === "neon") {
                this.scratch.ctx.strokeStyle = "#ffffff";
                this.scratch.ctx.shadowColor = d.Ay.mainColor;
                this.scratch.ctx.shadowBlur = this.amount.getValue() * 0.1;
              } else {
                this.scratch.ctx.strokeStyle = d.Ay.mainColor;
                this.scratch.ctx.fillStyle = d.Ay.mainColor;
              }
              this.pathPoints = [];
              this.pp = this.stage.translateRasterToFresco(t, null);
              this.pathPoints.push(this.pp);
              this.addMoveListeners();
            }
          };
          this.move = t => {
            t = this.stage.translateRasterToFresco(t, null);
            this.pathPoints.push(t);
            if (function (t, e, s, i, a) {
              let n;
              let o;
              let r;
              let l;
              let c;
              const d = a.length;
              if (d < 2) {
                return false;
              }
              let u = a[d - 2];
              let p = a[d - 1];
              const g = Math.sqrt(Math.pow(u.x - p.x, 2) + Math.pow(u.y - p.y, 2));
              switch (e) {
                case "plain":
                case "neon":
                  t.beginPath();
                  t.moveTo(u.x, u.y);
                  t.lineTo(p.x, p.y);
                  t.stroke();
                  break;
                case "parallel":
                  n = p.x - u.x;
                  o = p.y - u.y;
                  if (n * n + o * o < 500) {
                    return false;
                  }
                  s = Math.round(s * i * 5);
                  t.beginPath();
                  t.moveTo(u.x - h(0, s), u.y - h(0, s));
                  t.lineTo(p.x - h(0, s), p.y - h(0, s));
                  t.moveTo(u.x, u.y);
                  t.lineTo(p.x, p.y);
                  t.moveTo(u.x + h(0, s), u.y + h(0, s));
                  t.lineTo(p.x + h(0, s), p.y + h(0, s));
                  t.stroke();
                  break;
                case "sketchy":
                  if (g < s * 0.8) {
                    return false;
                  }
                  t.beginPath();
                  t.moveTo(u.x, u.y);
                  t.lineTo(p.x, p.y);
                  t.stroke();
                  t.beginPath();
                  t.globalAlpha = 0.33;
                  l = 0;
                  for (; l < a.length; ++l) {
                    n = a[l].x - p.x;
                    o = a[l].y - p.y;
                    r = n * n + o * o;
                    if (r < s / 2 * 4000 && Math.random() < i) {
                      t.moveTo(p.x + n * 0.3, p.y + o * 0.3);
                      t.lineTo(a[l].x - n * 0.3, a[l].y - o * 0.3);
                    }
                  }
                  t.stroke();
                  t.globalAlpha = 1;
                  break;
                case "shaded":
                  t.beginPath();
                  t.moveTo(u.x, u.y);
                  t.lineTo(p.x, p.y);
                  t.stroke();
                  t.beginPath();
                  t.globalAlpha = 0.1;
                  l = 0;
                  c = a.length - 2;
                  for (; l < c && !(l > 50); ++l) {
                    n = a[c - l].x - p.x;
                    o = a[c - l].y - p.y;
                    r = n * n + o * o;
                    if (r < s / 2 * 5000 * i) {
                      t.beginPath();
                      t.moveTo(p.x, p.y);
                      t.lineTo(a[c - l].x, a[c - l].y);
                      t.stroke();
                    }
                  }
                  t.globalAlpha = 1;
                  break;
                case "furry":
                  if (g < s * 0.8) {
                    return false;
                  }
                  t.beginPath();
                  t.moveTo(a[a.length - 2].x, a[a.length - 2].y);
                  t.lineTo(a[a.length - 1].x, a[a.length - 1].y);
                  t.stroke();
                  t.globalAlpha = 0.3;
                  t.beginPath();
                  l = 0;
                  c = a.length;
                  for (; l < c; l++) {
                    n = a[l].x - a[a.length - 1].x;
                    o = a[l].y - a[a.length - 1].y;
                    r = n * n + o * o;
                    if (r < s / 2 * 2000 && Math.random() > r / 2000) {
                      t.moveTo(p.x + n * i * 2, p.y + o * i * 2);
                      t.lineTo(p.x - n * i * 2, p.y - o * i * 2);
                    }
                  }
                  t.stroke();
                  t.globalAlpha = 1;
                  break;
                case "trail":
                  if (g < s * 0.8) {
                    return false;
                  }
                  t.globalAlpha = 0.3;
                  t.beginPath();
                  l = a.length - 1;
                  c = a.length - Math.round(i * 25);
                  for (; l > c; --l) {
                    if (l > 0) {
                      t.moveTo(p.x, p.y);
                      t.lineTo(a[l].x, a[l].y);
                    }
                  }
                  t.stroke();
                  t.globalAlpha = 1;
                  break;
                case "crayon":
                  var m = Math.round(Math.sqrt(Math.pow(p.x - u.x, 2) + Math.pow(p.y - u.y, 2)) / (5 / (i * 100)));
                  var y = (p.x - u.x) / m;
                  var v = (p.y - u.y) / m;
                  for (l = 0; l < m; l++) {
                    t.save();
                    t.globalAlpha = 0.4 + Math.random() * 0.2;
                    n = u.x + l * y;
                    o = u.y + l * v;
                    t.fillRect(n + (Math.random() - 0.5) * (s + 5), o + (Math.random() - 0.5) * (s + 5), Math.random() * 2 + 2, Math.random() + 1);
                    t.restore();
                  }
                  break;
                case "ink":
                  t.save();
                  t.lineWidth = h(s, s * 2);
                  t.beginPath();
                  t.moveTo(u.x, u.y);
                  t.lineTo(p.x, p.y);
                  t.stroke();
                  t.restore();
              }
              return true;
            }(this.scratch.ctx, this.mode, this.size.getValue(), this.amount.getValue() / 100, this.pathPoints)) {
              this.scratch.applySelection(this.stage);
              window.requestAnimationFrame(() => this.stage.render());
            } else if (this.pathPoints.length > 1) {
              this.pathPoints.pop();
            }
          };
          this.up = t => {
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            if (this.pathPoints.length > 2 && this.mode === "neon") {
              this.scratch.clear();
              this.scratch.ctx.beginPath();
              this.scratch.ctx.moveTo(this.pathPoints[0].x, this.pathPoints[0].y);
              for (let t = 1; t < this.pathPoints.length; ++t) {
                this.scratch.ctx.lineTo(this.pathPoints[t].x, this.pathPoints[t].y);
              }
              this.scratch.ctx.shadowBlur = this.amount.getValue() * 0.1;
              this.scratch.ctx.stroke();
              this.scratch.ctx.shadowBlur = this.amount.getValue() * 0.2;
              this.scratch.ctx.stroke();
              this.scratch.ctx.shadowBlur = this.amount.getValue() * 0.3;
              this.scratch.ctx.stroke();
              this.scratch.ctx.shadowBlur = this.amount.getValue() * 0.2;
              this.scratch.ctx.stroke();
              this.scratch.ctx.shadowBlur = this.amount.getValue();
              this.scratch.ctx.stroke();
              this.scratch.applySelection(this.stage);
            }
            this.scratch.ctx.restore();
            let e = n.TL(this.scratch.canvas);
            if (e && e.width > 0 && e.height > 0) {
              let t = this.selected.rect ? n.ON(this.selected.canvas, e.rebase(this.selected.rect.x, this.selected.rect.y)) : undefined;
              const s = n.$z(this.selected.mask);
              const i = this.selected.rect ? this.selected.rect.clone() : undefined;
              this.selected.extendCanvas(e);
              this.scratch.drawToLayer(this.selected, "source-over", this.opacity.getValue());
              this.scratch.clear();
              this.selected.render();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "pen",
                layer: this.selected,
                patchRect: this.selected.rect ? e.rebase(this.selected.rect.x, this.selected.rect.y) : e,
                patch: t,
                rect: i,
                mask: s
              });
            }
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.stage.coating.removePicker();
            this.size.cleanUp();
            this.amount.cleanUp();
            this.opacity.cleanUp();
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            this.removeDownListeners();
            document.removeEventListener("keyup", this.keyUp, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
          };
          this.scratch = new u.A();
          document.addEventListener("keyup", this.keyUp, false);
          document.addEventListener("keydown", this.keyDown, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          this.size = new l.A("pen-size", {
            compact: true,
            label: (0, a.A)("size") + ":",
            defaultValue: 3,
            range: [1, 50],
            step: 1
          });
          this.amount = new l.A("pen-amount", {
            compact: true,
            label: (0, a.A)("amount") + ":",
            defaultValue: 30,
            range: [1, 100],
            step: 1
          });
          this.opacity = new l.A("pen-opacity", {
            compact: true,
            label: (0, a.A)("opacity") + ":",
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100
          });
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
