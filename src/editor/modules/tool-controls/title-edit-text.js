window.__editorModules[3438] = function (t, e, s) {
      s.d(e, {
        A: () => v
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(651);
      var r = s(3244);
      var h = s(4976);
      var l = s(6050);
      var c = s(98);
      var d = s(749);
      var u = s(1535);
      var p = s(2216);
      var g = s(4932);
      var m = s(7732);
      var y = s(7578);
      class v {
        constructor(t, e) {
          this.addPointer = t => {
            this.pointers.push(t);
            this.stage.raster.setPointerCapture(t);
          };
          this.removePointer = t => {
            for (let e = 0; e < this.pointers.length; e++) {
              if (this.pointers[e] === t) {
                this.pointers.splice(e, 1);
                break;
              }
            }
            if (this.stage.raster.hasPointerCapture(t)) {
              this.stage.raster.releasePointerCapture(t);
            }
          };
          this.addListener = () => {
            this.stage.raster.addEventListener("pointerdown", this.pointerDown, false);
            this.stage.raster.addEventListener("pointermove", this.pointerMove, false);
            this.stage.raster.addEventListener("pointerup", this.pointerUp, false);
            this.stage.raster.addEventListener("pointercancel", this.pointerCancel, false);
            this.stage.raster.addEventListener("lostpointercapture", this.pointerCancel, false);
            this.raster.addEventListener("dblclick", this.dblClick, false);
            this.raster.addEventListener("contextmenu", this.contextMenu, true);
            document.addEventListener("viewport-render", this.render, false);
            document.addEventListener("keydown", this.keyDown, false);
            document.addEventListener("keyup", this.keyUp, false);
          };
          this.removeListener = () => {
            this.ctx.clearRect(0, 0, this.raster.width, this.raster.width);
            this.stage.raster.removeEventListener("pointerdown", this.pointerDown, false);
            this.stage.raster.removeEventListener("pointermove", this.pointerMove, false);
            this.stage.raster.removeEventListener("pointerup", this.pointerUp, false);
            this.stage.raster.removeEventListener("pointercancel", this.pointerCancel, false);
            this.stage.raster.removeEventListener("lostpointercapture", this.pointerCancel, false);
            this.raster.removeEventListener("dblclick", this.dblClick, false);
            this.raster.removeEventListener("contextmenu", this.contextMenu, true);
            document.removeEventListener("viewport-render", this.render, false);
            document.removeEventListener("keydown", this.keyDown, false);
            document.removeEventListener("keyup", this.keyUp, false);
          };
          this.pointerDown = t => {
            t.stopPropagation();
            if (!this.stage.coating.override && t.button === 1) {
              this.stage.coating.setPan(this.stage.coating.raster, true);
              this.stage.coating.panDown(t);
              return false;
            }
            if (this.stage.coating.override || t.button > 0) {
              return;
            }
            this.isShiftDown = t.shiftKey;
            this.addPointer(t.pointerId);
            const e = c.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length === 1) {
              this.down(new l.A(t.offsetX * e, t.offsetY * e), t.shiftKey || t.ctrlKey, t.altKey, t.ctrlKey, t.pointerType);
            }
          };
          this.pointerMove = t => {
            t.stopPropagation();
            this.isShiftDown = t.shiftKey;
            const e = c.Ay.isHDPI ? 2 : 1;
            if (this.pointers.length < 2) {
              this.move(new l.A(t.offsetX * e, t.offsetY * e), t.pointerType);
            }
          };
          this.pointerUp = t => {
            t.stopPropagation();
            this.removePointer(t.pointerId);
            const e = c.Ay.isHDPI ? 2 : 1;
            this.up(new l.A(t.offsetX * e, t.offsetY * e), t.pointerType);
          };
          this.pointerCancel = t => {
            if (this.pointers.includes(t.pointerId)) {
              this.pointerUp(t);
            }
          };
          this.supress = t => {
            if (t && !this.supressed) {
              this.raster.style.cursor = "unset";
              this.supressed = true;
              this.removeListener();
            } else if (!t && this.supressed) {
              this.supressed = false;
              this.addListener();
            }
          };
          this.keyDown = t => {
            if (!(document.getElementsByClassName("modal").length > 0) && document.activeElement.nodeName !== "INPUT" && document.activeElement.nodeName !== "TEXTAREA" && document.activeElement.nodeName !== "SELECT" && (t.key === "ArrowUp" || t.key === "ArrowDown" || t.key === "ArrowLeft" || t.key === "ArrowRight")) {
              let e = t.shiftKey ? 10 : 1;
              let s = t.key === "ArrowLeft" || t.key === "ArrowRight" ? t.key === "ArrowLeft" ? -e : e : 0;
              let i = t.key === "ArrowUp" || t.key === "ArrowDown" ? t.key === "ArrowUp" ? -e : e : 0;
              this.step(s, i);
            }
          };
          this.keyUp = t => {};
          this.contextMenu = t => {
            if (c.Ay.canTouch && this.stage.canvas.clientWidth < 420) {
              return;
            }
            t.preventDefault();
            t.stopPropagation();
            if (this.mode === "SIMPLE") {
              return;
            }
            const e = this.raster.getBoundingClientRect();
            const s = new l.A(t.clientX - e.left, t.clientY - e.top);
            const i = this.stage.fresco.getSelectedStack();
            if (i.length === 0) {
              return;
            }
            const n = new Array();
            if (i.length === 1) {
              const t = i[0];
              if (t.type === d.A.TYPE_TEXT) {
                n.push(new y.kt((0, a.A)("titleEditText"), () => this.dblClick()), new y.kt((0, a.A)("titleRasterizeLayer"), () => this.stage.rasterize()), new y.kt());
              }
              if (t.type === d.A.TYPE_SHAPE || t.type === d.A.TYPE_ELEMENT) {
                n.push(new y.kt((0, a.A)("titleRasterizeLayer"), () => this.stage.rasterize()), new y.kt());
              }
              if (t.type === d.A.TYPE_FRAME) {
                n.push(new y.kt(t.canvas ? (0, a.A)("titleChangeImage") : (0, a.A)("titleAddImage"), () => this.stage.browseFrameImage()), new y.kt(t.editMode ? (0, a.A)("titlePositionFrame") : (0, a.A)("titlePositionContent"), t.canvas ? this.dblClick : undefined), new y.kt((0, a.A)("titleAutoFitContent"), t.canvas ? () => this.stage.fitFrameContent() : undefined), new y.kt((0, a.A)("titleRasterizeLayer"), t.canvas ? () => this.stage.rasterize() : undefined), new y.kt((0, a.A)("titleRemoveFrameImage"), t.canvas ? () => this.stage.deleteLayer(true) : undefined), new y.kt());
              }
              n.push(new y.kt((0, a.A)("titleHideLayer"), () => this.stage.changeVisible(t, false)), new y.kt((0, a.A)("titleLockLayer"), () => this.stage.changeLocked(t, true)));
              if (t.hasLink()) {
                n.push(new y.kt((0, a.A)("titleUnlinkLayer"), () => this.stage.linkLayer()));
              }
              n.push(new y.kt(), new y.kt((0, a.A)("titleCutLayer"), () => this.stage.cutLayer(), "Ctrl + X"), new y.kt((0, a.A)("titleCopyLayer"), () => this.stage.copyLayer(), "Ctrl + C"), new y.kt((0, a.A)("titlePasteLayer"), () => document.dispatchEvent(new CustomEvent("paste-menu")), "Ctrl + V"), new y.kt((0, a.A)("titleDuplicateLayer"), () => this.stage.duplicateLayer(), "Ctrl + D"), new y.kt((0, a.A)("titleDeleteLayer"), () => this.stage.deleteLayer(), "DEL"));
              if (t instanceof m.A && t.hasMask()) {
                n.push(new y.kt(), new y.kt((0, a.A)("titleLayerApplyMask"), () => this.stage.maskApply()), new y.kt((0, a.A)("titleLayerDeleteMask"), () => this.stage.maskDelete()));
              }
            } else {
              n.push(new y.kt(this.stage.fresco.isSelectedLinked() ? (0, a.A)("titleUnlinkLayers") : (0, a.A)("titleLinkLayers"), () => this.stage.linkLayer()), new y.kt(), new y.kt((0, a.A)("titleCutLayers"), () => this.stage.cutLayer(), "Ctrl + X"), new y.kt((0, a.A)("titleCopyLayers"), () => this.stage.copyLayer(), "Ctrl + C"), new y.kt((0, a.A)("titlePasteLayers"), Array.isArray(this.stage.clipboard) ? () => this.stage.pasteLayer() : undefined, "Ctrl + V"), new y.kt((0, a.A)("titleDuplicateLayers"), () => this.stage.duplicateLayer(), "Ctrl + D"), new y.kt((0, a.A)("titleDeleteLayers"), () => this.stage.deleteLayer(), "DEL"));
            }
            const o = this.getLayersAt(s);
            if (o.length > 1) {
              const t = new Array();
              o.forEach(e => {
                t.push(new y.kt(e.settings.name, () => this.stage.selectLayerById(e.id)));
              });
              n.push(new y.kt(), new y.kt((0, a.A)("titleSelectLayer"), undefined, undefined, undefined, t));
            }
            new y.Ay(new l.A(t.clientX, t.clientY), n);
          };
          this.setMode = t => {
            this.mode = t;
            if (this.mode === "ARRANGE" || this.mode === "SIMPLE") {
              this.defaultCursor = "unset";
            } else if (this.mode === "TEXT") {
              this.defaultCursor = "text";
            } else {
              this.defaultCursor = "crosshair";
            }
            this.render();
          };
          this.down = async (t, e, s, i, a) => {
            if (document.activeElement.nodeName === "INPUT" && document.activeElement.getAttribute("type") !== "radio" || document.activeElement.nodeName === "SELECT") {
              return;
            }
            if (a !== "mouse") {
              this.move(t, a);
            }
            this.isDown = true;
            this.layerOver = undefined;
            this.downPoint = this.stage.translateRasterToFresco(t, undefined, false);
            let n = this.stage.fresco.getSelectedLinkedStack();
            const o = n.length > 1 || n.length === 1 && (this.mode === "TEXT" && n[0].type === d.A.TYPE_TEXT || this.mode === "FRAME" && n[0].type === d.A.TYPE_FRAME || this.mode === "SHAPE" && n[0].type === d.A.TYPE_SHAPE);
            if (!this.isControl(n, t) && c.Ay.autoSelect) {
              let s = this.getLayerAt(t);
              if (!this.stage.fresco.isSelectedById(s == null ? undefined : s.id) || i) {
                this.stage.selectLayer(s, e, i, true);
                n = this.stage.fresco.getSelectedLinkedStack();
                this.method = "move";
              } else {
                window.requestAnimationFrame(this.render);
              }
            }
            if (n.length > 0) {
              if (s) {
                await this.stage.duplicateLayer(false);
                n = this.stage.fresco.getSelectedLinkedStack();
              }
              let t = n.length === 1;
              if (!t || this.shouldReformLayer(n[0])) {
                let e;
                let s;
                if (t && n[0].editMode && n[0] instanceof g.A) {
                  this.anchorAlt = this.getAnchor(n[0].trim, n[0].trim.center(), 0);
                  this.downRect = [n[0].trim.clone()];
                } else {
                  this.downRect = this.stage.fresco.getStackRect(n);
                }
                if (t) {
                  s = n[0].rect.center();
                  e = n[0].editMode ? n[0].trim : n[0].rect;
                  e.rotation = n[0].rect.rotation;
                } else {
                  for (let t of n) {
                    if (t.rect) {
                      e = r.A.merge(e, t.rect.getRotatedBounds());
                    }
                  }
                  s = e ? e.center() : undefined;
                }
                if (this.method === "rotate") {
                  this.raster.style.cursor = "grabbing";
                  this.downRotation = 180 / Math.PI * Math.atan2(this.downPoint.y - s.y, this.downPoint.x - s.x) - e.rotation;
                } else if (this.method !== "move") {
                  let t;
                  let i;
                  switch (this.method) {
                    case "nw-resize":
                      i = e.topLeft();
                      t = e.bottomRight();
                      break;
                    case "n-resize":
                      i = new l.A(s.x, e.y);
                      t = new l.A(s.x, e.bottom());
                      break;
                    case "ne-resize":
                      i = e.topRight();
                      t = e.bottomLeft();
                      break;
                    case "e-resize":
                      i = new l.A(e.right(), s.y);
                      t = new l.A(e.x, s.y);
                      break;
                    case "se-resize":
                      i = e.bottomRight();
                      t = e.topLeft();
                      break;
                    case "s-resize":
                    case "t-resize":
                      i = new l.A(s.x, e.bottom());
                      t = new l.A(s.x, e.y);
                      break;
                    case "sw-resize":
                      i = e.bottomLeft();
                      t = e.topRight();
                      break;
                    case "w-resize":
                      i = new l.A(e.x, s.y);
                      t = new l.A(e.right(), s.y);
                  }
                  this.downControl = this.rotatePoint(i, s, 360 - e.rotation);
                  this.downAnchor = this.rotatePoint(t, s, 360 - e.rotation);
                } else {
                  this.downControl = e.topLeft();
                }
              }
            }
            if (this.proxy && (n.length === 0 || n.length === 1 && !this.shouldReformLayer(n[0]))) {
              this.proxy(t, o);
            } else if (n.length === 0 || n.length === 1 && n[0].settings.locked) {
              this.downPoint = t;
              this.method = "select";
            }
          };
          this.move = (t, e) => {
            if (this.stage.fresco) {
              if (this.isDown) {
                if (this.stage.fresco.isSelectedLinkedStack() && this.downRect.length > 0) {
                  this.moveStack(t);
                } else if (this.stage.fresco.hasSelected() && this.downRect.length > 0) {
                  this.moveSingle(t);
                } else if (this.method === "select") {
                  this.stage.coating.ctx.lineWidth = 2;
                  this.stage.coating.ctx.strokeStyle = n.bi;
                  this.stage.coating.ctx.clearRect(0, 0, this.stage.coating.ctx.canvas.width, this.stage.coating.ctx.canvas.height);
                  this.stage.coating.ctx.strokeRect(this.downPoint.x, this.downPoint.y, t.x - this.downPoint.x, t.y - this.downPoint.y);
                }
              } else {
                if (document.activeElement.nodeName === "INPUT" || document.activeElement.nodeName === "TEXTAREA" || document.activeElement.nodeName === "SELECT") {
                  this.raster.style.cursor = "unset";
                  return;
                }
                let e = this.stage.fresco.getSelectedLinkedStack();
                if (this.isControl(e, t)) {
                  if (this.layerOver) {
                    this.layerOver = undefined;
                    window.requestAnimationFrame(this.render);
                  }
                } else if (c.Ay.autoSelect) {
                  let e = this.getLayerAt(t);
                  if (this.layerOver && this.layerOver === e) {
                    return;
                  }
                  this.raster.style.cursor = this.method = e ? "move" : this.mode === "ARRANGE" || this.mode === "SIMPLE" ? "unset" : this.defaultCursor;
                  if (e && !this.stage.fresco.isSelectedLinkedById(e.id)) {
                    this.layerOver = e;
                    window.requestAnimationFrame(this.render);
                  } else if (this.layerOver) {
                    this.layerOver = undefined;
                    window.requestAnimationFrame(this.render);
                  }
                } else if (e.length !== 1 || e[0].settings.locked) {
                  this.raster.style.cursor = this.method = this.defaultCursor;
                } else {
                  this.raster.style.cursor = this.method = "move";
                }
              }
            }
          };
          this.moveSingle = t => {
            const e = this.stage.translateRasterToFresco(t, undefined, false);
            const s = this.stage.fresco.getSelected();
            if (this.shouldReformLayer(s)) {
              if (this.method === "move") {
                if (s instanceof g.A) {
                  if (s.editMode && s.trim) {
                    const t = this.rotatePoint(e, s.rect.center(), s.rect.rotation);
                    const i = this.rotatePoint(this.downPoint, s.rect.center(), s.rect.rotation);
                    s.position(Math.round(this.downControl.x + (t.x - i.x)), Math.round(this.downControl.y + (t.y - i.y)));
                  } else {
                    s.position(Math.round(this.downControl.x + (e.x - this.downPoint.x)), Math.round(this.downControl.y + (e.y - this.downPoint.y)));
                  }
                } else {
                  if (this.isShiftDown) {
                    const t = Math.abs(this.downPoint.x - e.x);
                    const s = Math.abs(this.downPoint.y - e.y);
                    if (t > 4 || s > 4) {
                      if (t < s) {
                        e.x = this.downPoint.x;
                        this.method = "vertical";
                      } else {
                        e.y = this.downPoint.y;
                        this.method = "horizontal";
                      }
                    }
                  }
                  s.position(Math.round(this.downControl.x + (e.x - this.downPoint.x)), Math.round(this.downControl.y + (e.y - this.downPoint.y)));
                }
                this.checkMoveGuides();
              } else if (this.method === "vertical") {
                if (!this.isShiftDown) {
                  this.method = "move";
                }
                s.position(undefined, Math.round(this.downControl.y + (e.y - this.downPoint.y)));
                this.checkMoveGuides();
              } else if (this.method === "horizontal") {
                if (!this.isShiftDown) {
                  this.method = "move";
                }
                s.position(Math.round(this.downControl.x + (e.x - this.downPoint.x)), undefined);
                this.checkMoveGuides();
              } else if (this.method === "rotate") {
                const t = s.rect.center();
                let i = 180 / Math.PI * Math.atan2(e.y - t.y, e.x - t.x) - this.downRotation;
                if (this.isShiftDown) {
                  i = Math.round(i / 11.25) * 11.25;
                }
                if (i < 0) {
                  i += 360;
                } else if (i >= 360) {
                  i -= 360;
                }
                s.rect.rotation = i;
              } else {
                let t = e.neg(this.downPoint);
                let i = this.downAnchor;
                let a = this.downControl.add(t);
                a = this.checkReformGuides(a);
                if (s.rect.rotation !== 0) {
                  const t = new l.A((i.x + a.x) / 2, (i.y + a.y) / 2);
                  a = this.rotatePoint(a, t, s.rect.rotation);
                  i = this.rotatePoint(i, t, s.rect.rotation);
                }
                let n = (this.constrain !== undefined ? this.constrain : !this.isShiftDown) ? this.downRect[0].getAspect() : 0;
                switch (this.method) {
                  case "nw-resize":
                  case "w-resize":
                    s.calculate(a, i, n);
                    break;
                  case "ne-resize":
                    s.calculate(new l.A(i.x, a.y), new l.A(a.x, i.y), n);
                    break;
                  case "sw-resize":
                    s.calculate(new l.A(a.x, i.y), new l.A(i.x, a.y), n);
                    break;
                  case "se-resize":
                  case "e-resize":
                    s.calculate(i, a, n);
                    break;
                  case "t-resize":
                    let t = a.y - i.y;
                    if (t < 10) {
                      t = 10;
                    }
                    s.rect.height = Math.round(t);
                    s.rect.width = Math.round(this.downRect[0].width * (t / this.downRect[0].height));
                }
                if (s.editMode && s instanceof g.A) {
                  let t = this.anchorAlt.neg(this.getAnchor(s.trim, s.trim.center(), 0));
                  s.trim.x = Math.round(s.trim.x + t.x);
                  s.trim.y = Math.round(s.trim.y + t.y);
                } else {
                  let t = this.downAnchor.neg(this.getAnchor(s.rect, s.rect.center(), s.rect.rotation));
                  s.rect.x = Math.round(s.rect.x + t.x);
                  s.rect.y = Math.round(s.rect.y + t.y);
                }
                if (this.method === "t-resize" && s instanceof p.A) {
                  s.scaleBect(s.rect.height / this.downRect[0].height);
                } else if (!s.editMode && s instanceof g.A) {
                  s.scaleTrim(s.rect.width / this.downRect[0].width, s.rect.height / this.downRect[0].height);
                } else {
                  s.render();
                }
              }
              window.requestAnimationFrame(() => {
                this.stage.render();
                this.render();
              });
              document.dispatchEvent(new CustomEvent("layer-arrange"));
            }
          };
          this.moveStack = t => {
            const e = this.stage.translateRasterToFresco(t, undefined, false);
            const s = this.stage.fresco.getSelectedLinkedStack();
            if (this.method === "move") {
              if (this.isShiftDown) {
                const t = Math.abs(this.downPoint.x - e.x);
                const s = Math.abs(this.downPoint.y - e.y);
                if (t > 4 || s > 4) {
                  if (t < s) {
                    e.x = this.downPoint.x;
                    this.method = "vertical";
                  } else {
                    e.y = this.downPoint.y;
                    this.method = "horizontal";
                  }
                }
              }
              for (let t = 0; t < s.length; t++) {
                if (this.downRect[t]) {
                  s[t].position(Math.round(this.downRect[t].x + (e.x - this.downPoint.x)), Math.round(this.downRect[t].y + (e.y - this.downPoint.y)));
                }
              }
              this.checkMoveGuides();
            } else if (this.method === "vertical") {
              if (!this.isShiftDown) {
                this.method = "move";
              }
              for (let t = 0; t < s.length; t++) {
                if (this.downRect[t]) {
                  s[t].position(undefined, Math.round(this.downRect[t].y + (e.y - this.downPoint.y)));
                }
              }
              this.checkMoveGuides();
            } else if (this.method === "horizontal") {
              if (!this.isShiftDown) {
                this.method = "move";
              }
              for (let t = 0; t < s.length; t++) {
                if (this.downRect[t]) {
                  s[t].position(Math.round(this.downRect[t].x + (e.x - this.downPoint.x)), undefined);
                }
              }
              this.checkMoveGuides();
            } else {
              let t = e.neg(this.downPoint);
              let i = this.downControl.add(t);
              i = this.checkReformGuides(i);
              let a = r.A.calculate(this.downAnchor, this.downControl);
              let n = r.A.calculate(this.downAnchor, i, a.getAspect());
              if (n.width < 4) {
                n.width = 4;
              }
              let o = n.getComparedScale(a);
              let h = this.downAnchor.neg(this.getAnchor(n, n.center(), 0));
              n.x += h.x;
              n.y += h.y;
              for (let e = 0; e < s.length; e++) {
                let t = this.downRect[e];
                if (t) {
                  let i = s[e];
                  i.rect.x = Math.round(n.x + (t.x - a.x) * o.width);
                  i.rect.y = Math.round(n.y + (t.y - a.y) * o.height);
                  i.rect.width = Math.round(t.width * o.width);
                  i.rect.height = Math.round(t.height * o.height);
                  if (i.rect.width < 1) {
                    i.rect.width = 1;
                  }
                  if (i.rect.height < 1) {
                    i.rect.height = 1;
                  }
                  if (i instanceof p.A) {
                    i.scaleBect(o.width);
                  } else if (i instanceof g.A) {
                    i.scaleTrim(o.width, o.height);
                  } else {
                    i.render();
                  }
                }
              }
            }
            window.requestAnimationFrame(() => {
              this.stage.render();
              this.render();
            });
            document.dispatchEvent(new CustomEvent("layer-arrange"));
          };
          this.getAnchor = (t, e, s) => {
            let i;
            switch (this.method) {
              case "nw-resize":
                i = t.bottomRight();
                break;
              case "n-resize":
                i = new l.A(e.x, t.bottom());
                break;
              case "ne-resize":
                i = t.bottomLeft();
                break;
              case "e-resize":
                i = new l.A(t.x, e.y);
                break;
              case "se-resize":
              default:
                i = t.topLeft();
                break;
              case "s-resize":
              case "t-resize":
                i = new l.A(e.x, t.y);
                break;
              case "sw-resize":
                i = t.topRight();
                break;
              case "w-resize":
                i = new l.A(t.right(), e.y);
            }
            return this.rotatePoint(i, e, 360 - s);
          };
          this.rotatePoint = (t, e, s) => s !== 0 && s !== 360 && e ? (this.matrix.reset(), this.matrix.translate(e), this.matrix.rotateDegree(s), this.matrix.invert(), this.matrix.transformPoint(t).add(e)) : t;
          this.up = (t, e) => {
            if (this.isDown) {
              if (this.downRect.length > 0) {
                if (!this.downPoint.equalTo(this.stage.translateRasterToFresco(t, undefined, false))) {
                  this.commitHistory();
                }
              } else if (this.method === "select") {
                const e = this.stage.translateToRect(this.downPoint, t, false, true);
                const s = this.getLayersInside(e);
                if (s.length > 0) {
                  this.stage.selectLayerStack(s, this.isShiftDown, true);
                }
              }
            }
            if (this.method === "rotate") {
              this.raster.style.cursor = "grab";
            }
            this.isDown = false;
            this.layerOver = undefined;
            this.downPoint = undefined;
            this.downControl = undefined;
            this.downAnchor = undefined;
            this.downRect = [];
            this.guides = [];
            window.requestAnimationFrame(() => {
              this.stage.render();
              this.render();
            });
          };
          this.commitHistory = (t = this.method) => {
            const e = this.stage.fresco.getSelectedStack();
            if (this.historyRect) {
              let t;
              if (e.length === 1) {
                t = e[0].editMode && e[0] instanceof g.A ? e[0].trim : e[0].rect;
              } else {
                e.forEach(e => {
                  if (e.rect) {
                    t = r.A.merge(t, e.rect.getRotatedBounds());
                  }
                });
              }
              const s = t.equalTo(this.historyRect);
              this.historyRect = undefined;
              if (s) {
                return;
              }
            }
            for (let s = 0; s < e.length; s++) {
              let i = e[s];
              if (i instanceof p.A && this.downRect[s]) {
                let t = i.rect.height / this.downRect[s].height;
                this.downRect[s].height = i.textSettings.size;
                if (this.method !== "w-resize" && this.method !== "e-resize" && t !== 1) {
                  i.setHeightScale(t);
                }
              } else if (t !== "move" && i instanceof g.A && !i.editMode) {
                i.trimOnResize(this.downRect[s]);
              }
            }
            if (e.length > 0) {
              if (e.length === 1) {
                this.stage.history.add({
                  type: "arrange",
                  kind: t === "rotate" ? "rotate" : t === "move" || t === "vertical" || t === "horizontal" ? "move" : "resize",
                  layer: e[0],
                  action: {
                    type: e[0].editMode ? "trim" : "rect",
                    rect: this.downRect[0]
                  }
                });
              } else {
                this.stage.history.add({
                  type: "arrangeStack",
                  id: this.stage.fresco.getStackHashId(),
                  kind: t === "rotate" ? "rotate" : t === "move" || t === "vertical" || t === "horizontal" ? "move" : "resize",
                  stack: Array.from(e),
                  rects: this.downRect
                });
              }
            }
            if (t !== "move") {
              this.stage.fresco.getSelectedStack().forEach(t => {
                t.render();
              });
            }
            document.dispatchEvent(new CustomEvent("layer-arrange"));
          };
          this.beginHistory = () => {
            let t = this.stage.fresco.getSelectedLinkedStack();
            if (t.length === 1) {
              this.downRect = [t[0].editMode && t[0] instanceof g.A ? t[0].trim.clone() : t[0].rect.clone()];
              this.historyRect = this.downRect[0];
            } else {
              this.downRect = this.stage.fresco.getStackRect(t);
              for (let e of t) {
                if (e.rect) {
                  this.historyRect = r.A.merge(this.historyRect, e.rect.getRotatedBounds());
                }
              }
            }
          };
          this.inputRotation = t => {
            const e = this.stage.fresco.getSelected();
            if (e && e.rect) {
              e.rect.rotation = t;
              window.requestAnimationFrame(() => {
                this.stage.render();
                this.render();
              });
            }
          };
          this.inputSize = (t, e) => {
            let s = new o.A();
            if (!this.historyRect) {
              return s;
            }
            t &&= Math.min(t, 9999);
            e &&= Math.min(e, 9999);
            let i = this.stage.fresco.getSelectedLinkedStack();
            if (i.length === 1) {
              let a = i[0];
              if (t) {
                a.setWidth(t, this.constrain ? this.historyRect.getAspect() : 0);
              }
              if (e) {
                a.setHeight(e, this.constrain ? this.historyRect.getAspect() : 0);
              }
              s = a.editMode ? a.trim.size() : a.rect.size();
              let n = new o.A(a.rect.width / this.historyRect.width, a.rect.height / this.historyRect.height);
              if (e && a instanceof p.A) {
                a.scaleBect(n.height);
              } else if (a instanceof g.A && !a.editMode) {
                a.scaleTrim(n.width, n.height);
              } else {
                a.render();
              }
            } else {
              let a = this.historyRect;
              let n = this.historyRect.clone();
              if (t) {
                n.width = t;
                n.height = Math.round(n.width / a.getAspect());
              }
              if (e) {
                n.height = e;
                n.width = Math.round(n.height * a.getAspect());
              }
              let o = n.getComparedScale(a);
              for (let t = 0; t < i.length; t++) {
                let e = this.downRect[t];
                if (e) {
                  let s = i[t];
                  s.rect.x = Math.round(n.x + (e.x - a.x) * o.width);
                  s.rect.y = Math.round(n.y + (e.y - a.y) * o.height);
                  s.rect.width = Math.round(e.width * o.width);
                  s.rect.height = Math.round(e.height * o.height);
                  if (s.rect.width < 1) {
                    s.rect.width = 1;
                  }
                  if (s.rect.height < 1) {
                    s.rect.height = 1;
                  }
                  if (s instanceof p.A) {
                    s.scaleBect(o.width);
                  } else if (s instanceof g.A) {
                    s.scaleTrim(o.width, o.height);
                  } else {
                    s.render();
                  }
                }
              }
              s.width = n.width;
              s.height = n.height;
            }
            window.requestAnimationFrame(() => {
              this.stage.render();
              this.render();
            });
            return s;
          };
          this.inputPosition = (t, e) => {
            let s = this.stage.fresco.getSelectedLinkedStack();
            if (s.length === 1) {
              s[0].position(t, e);
            } else {
              t -= this.historyRect.x;
              e -= this.historyRect.y;
              for (let i = 0; i < s.length; i++) {
                let a = this.downRect[i];
                s[i].position(a.x + t, a.y + e);
              }
            }
            window.requestAnimationFrame(() => {
              this.stage.render();
              this.render();
            });
          };
          this.step = (t, e) => {
            const s = this.stage.fresco.getSelectedLinkedStack();
            if (s.length !== 0 && !this.historyRect && !this.isDown) {
              if (s.length === 1) {
                const i = s[0].editMode ? s[0].trim.clone() : s[0].rect.clone();
                s[0].position(i.x + t, i.y + e);
                this.stage.history.add({
                  type: "arrange",
                  kind: "move",
                  layer: s[0],
                  action: {
                    type: s[0].editMode ? "trim" : "rect",
                    rect: i
                  }
                });
              } else {
                let i = this.stage.fresco.getStackRect(s);
                for (let a of s) {
                  if (this.shouldReformLayer(a)) {
                    a.position(a.rect.x + t, a.rect.y + e);
                  }
                }
                this.stage.history.add({
                  type: "arrangeStack",
                  id: this.stage.fresco.getStackHashId(s),
                  kind: "move",
                  stack: Array.from(s),
                  rects: i
                });
              }
              document.dispatchEvent(new CustomEvent("layer-arrange"));
              window.requestAnimationFrame(() => {
                this.stage.render();
                this.render();
              });
            }
          };
          this.render = () => {
            if (!this.stage || !this.stage.fresco || this.stage.supressRender) {
              return;
            }
            let t;
            let e;
            this.ctx.clearRect(0, 0, this.raster.width, this.raster.height);
            let s = c.Ay.isHDPI ? 4 : 2;
            let i = c.Ay.isHDPI ? 4 : 2;
            let a = c.Ay.isHDPI ? 2 : 1;
            let o = c.Ay.isHDPI ? 20 : 10;
            let h = c.Ay.isHDPI ? 10 : 5;
            this.ctx.lineWidth = i;
            if (this.layerOver) {
              this.ctx.strokeStyle = n.YD;
              t = this.stage.getLayerLocationRect(this.layerOver);
              if (t.rotation !== 0) {
                let e = t.center();
                this.ctx.translate(e.x, e.y);
                this.ctx.rotate(t.rotation * Math.PI / 180);
                t.x -= e.x;
                t.y -= e.y;
              }
              if (c.Ay.isHDPI) {
                this.ctx.strokeRect(t.x, t.y, t.width, t.height);
              } else {
                this.ctx.strokeRect(t.x - 1, t.y - 1, t.width + 2, t.height + 2);
              }
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            let l = this.stage.fresco.getSelectedLinkedStack();
            if (l.length > 0) {
              let t = l.length === 1;
              if (t && !this.shouldReformLayer(l[0])) {
                return;
              }
              let u;
              let p;
              let m = true;
              let y = n.bi;
              let v = n.q5;
              if (t) {
                if (l[0].editMode && l[0] instanceof g.A) {
                  u = this.stage.getLayerLocationTrim(l[0]);
                  e = this.stage.getLayerLocationRect(l[0]);
                  p = e.center();
                  y = n.Sg;
                  m = false;
                } else {
                  u = this.stage.getLayerLocationRect(l[0]);
                  p = u.center();
                }
              } else {
                l.forEach(t => {
                  let e = this.stage.getLayerLocationRect(t);
                  if (e) {
                    u = r.A.merge(u, e.getRotatedBounds());
                  }
                });
                p = u.center();
                m = false;
              }
              if (!u) {
                return;
              }
              if (u.width < 20 || u.height < 20) {
                o = 6;
                h = 3;
              } else if (u.width < 40 || u.height < 40) {
                o = 8;
                h = 4;
              }
              if (u.rotation !== 0) {
                this.ctx.translate(p.x, p.y);
                this.ctx.rotate(u.rotation * Math.PI / 180);
                u.x -= p.x;
                u.y -= p.y;
                if (e) {
                  e.x -= p.x;
                  e.y -= p.y;
                }
                p.x = 0;
                p.y = 0;
              }
              if (e) {
                this.ctx.lineWidth = 2;
                this.ctx.strokeStyle = n.KP;
                this.ctx.strokeRect(e.x - 2, e.y - 2, e.width + 2, e.height + 2);
                this.ctx.lineWidth = i;
              }
              this.ctx.strokeStyle = y;
              this.ctx.fillStyle = v;
              if (c.Ay.isHDPI) {
                this.ctx.strokeRect(u.x, u.y, u.width, u.height);
              } else {
                this.ctx.strokeRect(u.x - 1, u.y - 1, u.width + 2, u.height + 2);
              }
              if (!this.isDown || this.method === "unset") {
                if (m) {
                  this.ctx.fillStyle = y;
                  this.ctx.fillRect(u.x + u.width / 2 - a, u.y - o - h, i, o + h);
                  this.ctx.beginPath();
                  this.ctx.arc(u.x + u.width / 2, u.y - o * 2, h + s, 0, Math.PI * 2, false);
                  this.ctx.fill();
                  this.ctx.closePath();
                  this.ctx.fillStyle = v;
                  this.ctx.beginPath();
                  this.ctx.arc(u.x + u.width / 2, u.y - o * 2, h, 0, Math.PI * 2, false);
                  this.ctx.fill();
                  this.ctx.closePath();
                }
                if (t && l[0].type === d.A.TYPE_TEXT) {
                  let t = Math.round(u.height * 0.5);
                  this.ctx.fillStyle = v;
                  this.ctx.strokeStyle = y;
                  if (c.Ay.isHDPI) {
                    this.drawHandle(this.ctx, u.x - 5, u.y + (u.height - t) / 2, 10, t, 5);
                    this.drawHandle(this.ctx, u.x + u.width - 5, u.y + (u.height - t) / 2, 10, t, 5);
                    if (u.width > 80) {
                      this.drawHandle(this.ctx, p.x - 40, u.y + u.height - 5, 80, 10, 5);
                    }
                  } else {
                    this.drawHandle(this.ctx, u.x - 4, u.y + (u.height - t) / 2, 6, t, 3);
                    this.drawHandle(this.ctx, u.x + u.width - 2, u.y + (u.height - t) / 2, 6, t, 3);
                    if (u.width > 40) {
                      this.drawHandle(this.ctx, p.x - 20, u.y + u.height - 2, 40, 6, 3);
                    }
                  }
                } else {
                  this.ctx.fillStyle = y;
                  if (u.height > 10) {
                    this.ctx.fillRect(u.x - h, u.y + u.height - h, o, o);
                    this.ctx.fillRect(u.x + u.width - h, u.y - h, o, o);
                  }
                  this.ctx.fillRect(u.x - h, u.y - h, o, o);
                  this.ctx.fillRect(u.x + u.width - h, u.y + u.height - h, o, o);
                  this.ctx.fillStyle = v;
                  if (u.height > 10) {
                    this.ctx.fillRect(u.x - h + s, u.y + u.height - h + s, o - s * 2, o - s * 2);
                    this.ctx.fillRect(u.x + u.width - h + s, u.y - h + s, o - s * 2, o - s * 2);
                  }
                  this.ctx.fillRect(u.x - h + s, u.y - h + s, o - s * 2, o - s * 2);
                  this.ctx.fillRect(u.x + u.width - h + s, u.y + u.height - h + s, o - s * 2, o - s * 2);
                }
              }
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            if (this.guides && this.guides.length > 0) {
              this.ctx.lineWidth = c.Ay.isHDPI ? 2 : 1;
              if (!c.Ay.isHDPI) {
                this.ctx.translate(0.5, 0.5);
              }
              this.guides.forEach(t => {
                if (t.soft) {
                  this.ctx.strokeStyle = n.RZ;
                } else {
                  this.ctx.strokeStyle = n.Al;
                }
                this.ctx.beginPath();
                this.ctx.moveTo(t.start.x, t.start.y);
                this.ctx.lineTo(t.end.x, t.end.y);
                this.ctx.stroke();
              });
              this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
          };
          this.drawHandle = (t, e, s, i, a, n = 0) => {
            t.beginPath();
            t.moveTo(e + n, s);
            t.lineTo(e + i - n, s);
            t.quadraticCurveTo(e + i, s, e + i, s + n);
            t.lineTo(e + i, s + a - n);
            t.quadraticCurveTo(e + i, s + a, e + i - n, s + a);
            t.lineTo(e + n, s + a);
            t.quadraticCurveTo(e, s + a, e, s + a - n);
            t.lineTo(e, s + n);
            t.quadraticCurveTo(e, s, e + n, s);
            t.closePath();
            t.fill();
            t.stroke();
          };
          this.isControl = (t, e) => {
            if (t.length === 0) {
              return false;
            }
            let s;
            let i;
            let a = t.length === 1;
            let o = c.Ay.isHDPI ? c.Ay.canTouch ? 44 : 32 : 16;
            let h = o * 0.5;
            if (a && t[0].editMode && t[0] instanceof g.A) {
              s = this.stage.getLayerLocationTrim(t[0]);
              i = this.stage.getLayerLocationRect(t[0]).center();
            } else {
              if (a) {
                s = this.stage.getLayerLocationRect(t[0]);
              } else {
                t.forEach(t => {
                  let e = this.stage.getLayerLocationRect(t);
                  if (e) {
                    s = r.A.merge(s, e.getRotatedBounds());
                  }
                });
              }
              i = s ? s.center() : undefined;
            }
            if (s) {
              if (s.width < 40 || s.height < 40) {
                h /= 2;
                o /= 2;
              }
              e = this.rotatePoint(e, i, s.rotation);
              if (a && t[0].type === d.A.TYPE_TEXT) {
                if (n.HO(s.x - h, s.y, o, s.height, e.x, e.y)) {
                  this.raster.style.cursor = this.getRotatedCursor(90, s.rotation);
                  this.method = "w-resize";
                  return true;
                }
                if (n.HO(s.x + s.width - h, s.y, o, s.height, e.x, e.y)) {
                  this.raster.style.cursor = this.getRotatedCursor(270, s.rotation);
                  this.method = "e-resize";
                  return true;
                }
                const t = c.Ay.isHDPI ? 80 : 40;
                if (s.width > t && n.HO(i.x - t * 0.5, s.y + s.height - h, t, o, e.x, e.y)) {
                  this.raster.style.cursor = this.getRotatedCursor(0, s.rotation);
                  this.method = "t-resize";
                  return true;
                }
              } else {
                if (s.height > 10) {
                  if (n.HO(s.x + s.width - h, s.y - h, o, o, e.x, e.y)) {
                    this.raster.style.cursor = this.getRotatedCursor(45, s.rotation);
                    this.method = "ne-resize";
                    return true;
                  }
                  if (n.HO(s.x - h, s.y + s.height - h, o, o, e.x, e.y)) {
                    this.raster.style.cursor = this.getRotatedCursor(225, s.rotation);
                    this.method = "sw-resize";
                    return true;
                  }
                }
                if (n.HO(s.x - h, s.y - h, o, o, e.x, e.y)) {
                  this.raster.style.cursor = this.getRotatedCursor(315, s.rotation);
                  this.method = "nw-resize";
                  return true;
                }
                if (n.HO(s.x + s.width - h, s.y + s.height - h, o, o, e.x, e.y)) {
                  this.raster.style.cursor = this.getRotatedCursor(135, s.rotation);
                  this.method = "se-resize";
                  return true;
                }
              }
              return !!a && !t[0].editMode && !!n.HO(s.x + s.width / 2 - h, s.y - (c.Ay.isHDPI ? 40 : 20) - h, o, o, e.x, e.y) && (this.raster.style.cursor = "grab", this.method = "rotate", true);
            }
          };
          this.getRotatedCursor = (t, e) => {
            let s = t + e;
            if (s < 0) {
              s += 360;
            }
            if (s > 360) {
              s -= 360;
            }
            s += 22.5;
            let i = 7;
            while (i > 0 && (!(s > i * 45) || !(s < 360))) {
              i--;
            }
            return ["n", "ne", "e", "se", "s", "sw", "w", "nw"][i] + "-resize";
          };
          this.checkReformGuides = t => {
            this.guides = [];
            if (c.Ay.showGuides || c.Ay.snapToGuides) {
              const i = this.stage.fresco.getSelectedLinkedStack();
              const a = 5 / this.stage.zoom;
              const n = c.Ay.snapToGuides;
              const o = c.Ay.showGuides;
              let h = i.length === 1 && i[0].editMode && i[0].trim;
              const d = h ? i[0].rect : new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height);
              const u = h ? 360 - i[0].rect.rotation : 0;
              const p = d.center();
              const g = h ? this.rotatePoint(t, p, i.length === 1 ? i[0].rect.rotation : 0) : t;
              if (!h) {
                const s = this.stage.fresco.getNotSelectedStack(i);
                for (let i = 0; i < s.length; i++) {
                  const r = s[i].rect;
                  if (r && r.rotation === 0 && s[i].settings.visible) {
                    if (this.willSnap(g.x, r.x, a) && (n && (t.x = r.x), o)) {
                      const t = this.method === "ne-resize" || this.method === "se-resize" || this.method === "e-resize";
                      this.addGuide(new l.A(r.x, r.y), new l.A(r.x, r.bottom()), undefined, 0, true, new l.A(t ? 0 : -1, -1), new l.A(t ? 0 : -1, 0));
                    }
                    if (this.willSnap(g.x, r.right(), a) && (n && (t.x = r.right()), o)) {
                      const t = this.method === "nw-resize" || this.method === "sw-resize" || this.method === "w-resize";
                      this.addGuide(new l.A(r.right(), r.y), new l.A(r.right(), r.bottom()), undefined, 0, true, new l.A(t ? -1 : 0, -1), new l.A(t ? -1 : 0, 0));
                    }
                    if (!this.constrain ?? this.isShiftDown) {
                      if (this.willSnap(g.y, r.y, a) && (n && (t.y = r.y), o)) {
                        const t = this.method === "sw-resize" || this.method === "se-resize";
                        this.addGuide(new l.A(r.x, r.y), new l.A(r.right(), r.y), undefined, 0, true, new l.A(-1, t ? 0 : -1), new l.A(0, t ? 0 : -1));
                      }
                      if (this.willSnap(g.y, r.bottom(), a) && (n && (t.y = r.bottom()), o)) {
                        const t = this.method === "ne-resize" || this.method === "nw-resize";
                        this.addGuide(new l.A(r.x, r.bottom()), new l.A(r.right(), r.bottom()), undefined, 0, true, new l.A(-1, t ? -1 : 0), new l.A(0, t ? -1 : 0));
                      }
                    }
                  }
                }
              }
              if (this.willSnap(g.x, d.x, a)) {
                if (n) {
                  t.x = h ? this.rotatePoint(new l.A(d.x, g.y), p, u).x : d.x;
                }
                if (o) {
                  this.addGuide(new l.A(d.x, d.y), new l.A(d.x, d.bottom()), p, u, false, new l.A(-1, -1), new l.A(-1, 0));
                }
              }
              if (this.willSnap(g.x, d.right(), a)) {
                if (n) {
                  t.x = h ? this.rotatePoint(new l.A(d.right(), g.y), p, u).x : d.right();
                }
                if (o) {
                  this.addGuide(new l.A(d.right(), d.y), new l.A(d.right(), d.bottom()), p, u, false, new l.A(0, -1));
                }
              }
              if (!this.constrain ?? this.isShiftDown) {
                if (this.willSnap(g.y, d.top(), a)) {
                  if (n) {
                    t.y = h ? this.rotatePoint(new l.A(g.x, d.top()), p, u).y : d.top();
                  }
                  if (o) {
                    this.addGuide(new l.A(d.x, d.y), new l.A(d.right(), d.y), p, u, false, new l.A(-1, -1), new l.A(0, -1));
                  }
                }
                if (this.willSnap(g.y, d.bottom(), a)) {
                  if (n) {
                    t.y = h ? this.rotatePoint(new l.A(g.x, d.bottom()), p, u).y : d.bottom();
                  }
                  if (o) {
                    this.addGuide(new l.A(d.x, d.bottom()), new l.A(d.right(), d.bottom()), p, u, false, new l.A(-1));
                  }
                }
              }
            }
            return t;
          };
          this.checkMoveGuides = () => {
            this.guides = [];
            if (c.Ay.showGuides || c.Ay.snapToGuides) {
              const t = this.stage.fresco.getSelectedLinkedStack();
              const e = this.stage.fresco.getNotSelectedStack(t);
              const s = 5 / this.stage.zoom;
              const i = c.Ay.snapToGuides;
              const a = c.Ay.showGuides;
              let n;
              let o;
              let h;
              if (t.length === 1 && t[0].editMode) {
                n = t[0].getGlobalTrim();
                o = t[0].rect;
                h = 360 - o.rotation;
              } else {
                o = new r.A(0, 0, this.stage.fresco.width, this.stage.fresco.height);
                t.forEach(t => {
                  if (t.rect) {
                    n = r.A.merge(n, t.rect.getRotatedBounds());
                  }
                });
              }
              if (!n) {
                return;
              }
              let d = new l.A(0, 0);
              const u = n.center();
              const p = 20 / this.stage.zoom;
              for (let r = 0; r < e.length; r++) {
                const t = e[r].rect;
                if (t && t.rotation === 0 && e[r].settings.visible) {
                  const e = t.center();
                  if (this.willSnap(n.x, t.x, s) && (d.x = n.x - t.x, a)) {
                    const s = (t.y < n.y ? t.y : n.y) - p;
                    const i = (t.y + t.height > n.y + n.height ? t.y + t.height : n.y + n.height) + p;
                    this.addGuide(new l.A(t.x, s), new l.A(t.x, i), e, h, true, new l.A(-1), new l.A(-1));
                  }
                  if (this.willSnap(n.x, t.x + t.width, s) && (d.x = n.x - (t.x + t.width), a)) {
                    const s = (t.y < n.y ? t.y : n.y) - p;
                    const i = (t.y + t.height > n.y + n.height ? t.y + t.height : n.y + n.height) + p;
                    this.addGuide(new l.A(t.x + t.width, s), new l.A(t.x + t.width, i), e, h, true, new l.A(-1), new l.A(-1));
                  }
                  if (this.willSnap(n.x + n.width, t.x, s) && (d.x = n.x + n.width - t.x, a)) {
                    const s = (t.y < n.y ? t.y : n.y) - p;
                    const i = (t.y + t.height > n.y + n.height ? t.y + t.height : n.y + n.height) + p;
                    this.addGuide(new l.A(t.x, s), new l.A(t.x, i), e, h, true);
                  }
                  if (this.willSnap(n.x + n.width, t.x + t.width, s) && (d.x = n.x + n.width - (t.x + t.width), a)) {
                    const s = (t.y < n.y ? t.y : n.y) - p;
                    const i = (t.y + t.height > n.y + n.height ? t.y + t.height : n.y + n.height) + p;
                    this.addGuide(new l.A(t.x + t.width, s), new l.A(t.x + t.width, i), e, h, true);
                  }
                  if (this.willSnap(n.y, t.y, s) && (d.y = n.y - t.y, a)) {
                    const s = (t.x < n.x ? t.x : n.x) - p;
                    const i = (t.x + t.width > n.x + n.width ? t.x + t.width : n.x + n.width) + p;
                    this.addGuide(new l.A(s, t.y), new l.A(i, t.y), e, h, true, new l.A(0, -1), new l.A(0, -1));
                  }
                  if (this.willSnap(n.y, t.y + t.height, s) && (d.y = n.y - (t.y + t.height), a)) {
                    const s = (t.x < n.x ? t.x : n.x) - p;
                    const i = (t.x + t.width > n.x + n.width ? t.x + t.width : n.x + n.width) + p;
                    this.addGuide(new l.A(s, t.y + t.height), new l.A(i, t.y + t.height), e, h, true, new l.A(0, -1), new l.A(0, -1));
                  }
                  if (this.willSnap(n.y + n.height, t.y, s) && (d.y = n.y + n.height - t.y, a)) {
                    const s = (t.x < n.x ? t.x : n.x) - p;
                    const i = (t.x + t.width > n.x + n.width ? t.x + t.width : n.x + n.width) + p;
                    this.addGuide(new l.A(s, t.y), new l.A(i, t.y), e, h, true);
                  }
                  if (this.willSnap(n.y + n.height, t.y + t.height, s) && (d.y = n.y + n.height - (t.y + t.height), a)) {
                    const s = (t.x < n.x ? t.x : n.x) - p;
                    const i = (t.x + t.width > n.x + n.width ? t.x + t.width : n.x + n.width) + p;
                    this.addGuide(new l.A(s, t.y + t.height), new l.A(i, t.y + t.height), e, h, true);
                  }
                  if (this.willSnap(u.x, e.x, s) && (d.x = n.x - Math.round(e.x - n.width / 2), a)) {
                    const s = (t.y < n.y ? t.y : n.y) - p;
                    const i = (t.y + t.height > n.y + n.height ? t.y + t.height : n.y + n.height) + p;
                    this.addGuide(new l.A(Math.floor(e.x), s), new l.A(Math.floor(e.x), i), e, h, true);
                  }
                  if (this.willSnap(u.y, e.y, s) && (d.y = n.y - Math.round(e.y - n.height / 2), a)) {
                    const s = (t.x < n.x ? t.x : n.x) - p;
                    const i = (t.x + t.width > n.x + n.width ? t.x + t.width : n.x + n.width) + p;
                    this.addGuide(new l.A(s, Math.floor(e.y)), new l.A(i, Math.floor(e.y)), e, h, true);
                  }
                }
              }
              const g = o.center();
              if (this.willSnap(u.x, g.x, s)) {
                d.x = n.x - Math.round(g.x - n.width / 2);
                if (a) {
                  this.addGuide(new l.A(Math.floor(g.x), o.y), new l.A(Math.floor(g.x), o.bottom()), g, h);
                }
              }
              if (this.willSnap(u.y, g.y, s)) {
                d.y = n.y - Math.round(g.y - n.height / 2);
                if (a) {
                  this.addGuide(new l.A(o.x, Math.floor(g.y)), new l.A(o.right(), Math.floor(g.y)), g, h);
                }
              }
              if (this.willSnap(n.x, o.x, s)) {
                d.x = n.x - o.x;
                if (a) {
                  this.addGuide(new l.A(o.x, o.y), new l.A(o.x, o.bottom()), g, h, false, new l.A(-1, -1), new l.A(-1, 0));
                }
              }
              if (this.willSnap(n.right(), o.right(), s)) {
                d.x = n.x - (o.right() - n.width);
                if (a) {
                  this.addGuide(new l.A(o.right(), o.y), new l.A(o.right(), o.bottom()), g, h, false, new l.A(0, -1));
                }
              }
              if (this.willSnap(n.y, o.y, s)) {
                d.y = n.y - o.y;
                if (a) {
                  this.addGuide(new l.A(o.x, o.y), new l.A(o.right(), o.y), g, h, false, new l.A(-1, -1), new l.A(0, -1));
                }
              }
              if (this.willSnap(n.bottom(), o.bottom(), s)) {
                d.y = n.y - (o.bottom() - n.height);
                if (a) {
                  this.addGuide(new l.A(o.x, o.bottom()), new l.A(o.right(), o.bottom()), g, h, false, new l.A(-1));
                }
              }
              if (!!i && (d.x !== 0 || d.y !== 0)) {
                if (t.length === 1 && t[0].editMode) {
                  t[0].position(t[0].trim.x - d.x, t[0].trim.y - d.y);
                } else {
                  t.forEach(t => {
                    if (this.shouldReformLayer(t)) {
                      t.position(t.rect.x - d.x, t.rect.y - d.y);
                    }
                  });
                }
              }
            }
          };
          this.addGuide = (t, e, s, i = 0, a = false, n, o) => {
            if (i !== 0) {
              t = this.rotatePoint(t, s, i);
              e = this.rotatePoint(e, s, i);
            }
            t = this.stage.translateFrescoToRaster(t).add(n);
            e = this.stage.translateFrescoToRaster(e).add(o);
            this.guides.push(new h.A(t, e, a));
          };
          this.willSnap = (t, e, s) => t < e + s && t > e - s;
          this.shouldReformLayer = t => {
            if (t && t.settings.visible && !t.settings.locked && t.rect) {
              if (this.mode !== "ARRANGE" && this.mode !== "SIMPLE") {
                if (this.mode === "TEXT" && t.type !== d.A.TYPE_TEXT) {
                  return;
                }
                if (this.mode === "FRAME" && t.type !== d.A.TYPE_FRAME) {
                  return;
                }
                if (this.mode === "SHAPE" && t.type !== d.A.TYPE_SHAPE) {
                  return;
                }
              }
              return true;
            }
          };
          this.getLayerAt = t => {
            if (this.stage.fresco && this.stage.fresco.layers.length > 0) {
              for (let e = this.stage.fresco.layers.length - 1; e >= 0; e--) {
                if (!this.shouldReformLayer(this.stage.fresco.layers[e])) {
                  continue;
                }
                let s;
                let i;
                if (this.stage.fresco.layers[e].editMode && this.stage.fresco.layers[e] instanceof g.A) {
                  s = this.stage.getLayerLocationTrim(this.stage.fresco.layers[e]);
                  i = this.stage.getLayerLocationRect(this.stage.fresco.layers[e]).center();
                } else {
                  s = this.stage.getLayerLocationRect(this.stage.fresco.layers[e]);
                  i = s ? s.center() : undefined;
                }
                if (s && s.isInside(this.rotatePoint(t, i, s.rotation))) {
                  return this.stage.fresco.layers[e];
                }
              }
            }
          };
          this.getLayersAt = t => {
            const e = new Array();
            if (this.stage.fresco && this.stage.fresco.layers.length > 0) {
              for (let s = this.stage.fresco.layers.length - 1; s >= 0; s--) {
                if (this.mode === "TEXT" && this.stage.fresco.layers[s].type !== d.A.TYPE_TEXT) {
                  continue;
                }
                if (this.mode === "FRAME" && this.stage.fresco.layers[s].type !== d.A.TYPE_FRAME) {
                  continue;
                }
                if (this.mode === "SHAPE" && this.stage.fresco.layers[s].type !== d.A.TYPE_SHAPE) {
                  continue;
                }
                let i;
                let a;
                if (this.stage.fresco.layers[s].editMode && this.stage.fresco.layers[s] instanceof g.A) {
                  i = this.stage.getLayerLocationTrim(this.stage.fresco.layers[s]);
                  a = this.stage.getLayerLocationRect(this.stage.fresco.layers[s]).center();
                } else {
                  i = this.stage.getLayerLocationRect(this.stage.fresco.layers[s]);
                  a = i ? i.center() : undefined;
                }
                if (i && i.isInside(this.rotatePoint(t, a, i.rotation))) {
                  e.push(this.stage.fresco.layers[s]);
                }
                if (e.length > 5) {
                  break;
                }
              }
            }
            return e;
          };
          this.getLayersInside = t => {
            const e = new Array();
            if (this.stage.fresco && this.stage.fresco.layers.length > 0) {
              for (let s = this.stage.fresco.layers.length - 1; s >= 0; s--) {
                const i = this.stage.getLayerLocationRect(this.stage.fresco.layers[s]);
                if (i && t.contains(i)) {
                  e.push(this.stage.fresco.layers[s]);
                }
              }
            }
            return e;
          };
          this.dblClick = () => {
            let t = this.stage.fresco.getSelected();
            if (t instanceof p.A) {
              if ((0, i.Ay)("floating-text-input")) {
                return;
              }
              t.settings.visible = false;
              this.removeListener();
              this.stage.render();
              this.render();
              this.stage.supressRender = true;
              let e = this.stage.getLayerLocationRect(t);
              if (c.Ay.isHDPI) {
                e = e.scale(0.5);
              }
              if (e.y + e.height > this.raster.offsetHeight) {
                e.y = this.raster.offsetHeight - e.height - 20;
              }
              if (e.y < 20) {
                e.y = 20;
              }
              if (e.width > this.raster.offsetWidth) {
                e.width = this.raster.offsetWidth - 40;
              }
              if (e.x + e.width > this.raster.offsetWidth) {
                e.x = this.raster.offsetWidth - e.width - 20;
              }
              if (e.x < 20) {
                e.x = 20;
              }
              let s = document.createElement("textarea");
              s.id = "floating-text-input";
              const a = this.raster.getBoundingClientRect();
              s.style.top = e.y + a.top + "px";
              s.style.left = e.x + a.left + "px";
              s.style.width = e.width + "px";
              s.style.color = "#111";
              let o = t.textSettings;
              let r = n.qE(Math.round(o.size * this.stage.zoom), 12, 100);
              if (c.Ay.isHDPI) {
                r *= 0.5;
              }
              s.style.font = o.getCssFont(r);
              s.style.letterSpacing = Math.floor(o.letterSpace * (r / 2.2)) + "px";
              s.style.textAlign = o.align;
              s.value = t.text;
              const h = () => window.setTimeout(() => {
                if (!s.isConnected) {
                  return;
                }
                let t = s.cloneNode();
                t.style.visibility = "false";
                s.parentNode.insertBefore(t, s);
                t.style.height = "auto";
                t.value = s.value;
                let e = t.scrollTop + t.scrollHeight + 16;
                if (s.offsetTop + e > document.body.offsetHeight - 20) {
                  e = document.body.offsetHeight - 20 - s.offsetTop;
                  s.style.overflowY = "auto";
                }
                s.style.height = e + "px";
                s.parentNode.removeChild(t);
              }, 0);
              s.addEventListener("input", () => {
                h();
              }, true);
              document.body.appendChild(s);
              window.setTimeout(() => {
                if (!s.isConnected) {
                  return;
                }
                h();
                s.focus();
                s.select();
              }, 10);
              document.addEventListener("mousedown", this.outsideTextClick, true);
            } else if (t instanceof g.A && !t.settings.locked) {
              if (t.canvas && t.trim) {
                t.editMode = !t.editMode;
                window.requestAnimationFrame(this.render);
                document.dispatchEvent(new CustomEvent("layer-select"));
              } else {
                this.stage.browseFrameImage();
              }
            }
          };
          this.outsideTextClick = t => {
            let e = (0, i.Ay)("floating-text-input");
            if (e && t.target !== e) {
              t.stopImmediatePropagation();
              t.stopPropagation();
              t.preventDefault();
              this.stage.supressRender = false;
              let s = this.stage.fresco.getSelected();
              if (s instanceof p.A) {
                s.settings.visible = true;
                let t = s.text;
                s.setText(e.value);
                this.stage.history.add({
                  type: "textChange",
                  layer: s,
                  text: t
                });
              }
              this.addListener();
              document.removeEventListener("mousedown", this.outsideTextClick, true);
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
              document.dispatchEvent(new CustomEvent("text-change"));
              e.remove();
            }
          };
          this.cleanUp = () => {
            this.outsideTextClick(new Event("text-cleanup"));
            document.removeEventListener("mousedown", this.outsideTextClick, true);
            this.proxy = undefined;
            this.removeListener();
            this.isDown = false;
            for (const pointer of [...this.pointers]) {
              this.removePointer(pointer);
            }
            this.raster.style.cursor = "unset";
            this.matrix = undefined;
            this.raster = undefined;
            this.stage = undefined;
            this.ctx = undefined;
          };
          this.stage = t;
          this.ctx = t.coating.ctx;
          this.raster = t.coating.raster;
          this.pointers = new Array();
          this.matrix = new u.A();
          this.downRect = [];
          this.guides = [];
          this.addListener();
          this.setMode(e);
        }
      }
    }
