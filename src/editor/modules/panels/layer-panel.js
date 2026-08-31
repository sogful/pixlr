window.__editorModules[8848] = function (t, e, s) {
      s.d(e, {
        A: () => y
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(3244);
      var o = s(3517);
      var r = s(6050);
      var h = s(5283);
      var l = s(5328);
      var c = s(6238);
      var d = s(7732);
      var u = s(6939);
      var p = s(98);
      var g = s(2128);
      class m extends u.A {
        constructor(t) {
          super((0, i.A)("dialogAddLayerTitle"), true);
          this.rotation = 0;
          this.maxSize = 1920;
          this.addLayerChoice = async t => {
            t.stopPropagation();
            let e = p.Ay.product === "express";
            switch (t.currentTarget.getAttribute("data")) {
              case "text":
                this.stage.addText();
                document.dispatchEvent(new CustomEvent("select-tool", {
                  detail: e ? "arrange" : "text"
                }));
                if (this.stage.reform) {
                  this.stage.reform.dblClick();
                }
                break;
              case "image":
                await (0, g.XN)(true, false, "image/*").then(async t => {
                  document.dispatchEvent(new CustomEvent("loading", {
                    detail: "start"
                  }));
                  for (let e = 0; e < t.length; e++) {
                    await (0, g.Tq)(t[e], this.stage, false);
                  }
                  document.dispatchEvent(new CustomEvent("loading", {
                    detail: "stop"
                  }));
                  document.dispatchEvent(new CustomEvent("select-tool", {
                    detail: "arrange"
                  }));
                });
                break;
              case "shape":
                this.stage.addShape();
                document.dispatchEvent(new CustomEvent("select-tool", {
                  detail: e ? "arrange" : "shape"
                }));
                break;
              case "frame":
                this.stage.addFrame();
                document.dispatchEvent(new CustomEvent("select-tool", {
                  detail: e ? "arrange" : "frame"
                }));
                break;
              case "empty":
                this.stage.addEmpty();
                this.stage.notify("layerAdded");
            }
            this.cleanUp();
          };
          this.stage = t;
          this.dialog.style.width = "500px";
          this.dialog.style.maxWidth = "500px";
          this.setContent(`\n            <label class="top-0">${(0, i.A)("dialogAddLayerHL")}</label>\n\n            <ul id="add-layer-type" class="push-buttons small top-20">\n                <li id="add-layer-empty" data="empty"><img src="assets/images/tool/empty.svg" class="ic"><span>${(0, i.A)("empty")}</span></li>\n                <li id="add-layer-image" data="image"><img src="assets/images/tool/image.svg" class="ic"><span>${(0, i.A)("image")}</span></li>\n                <li id="add-layer-frame" data="frame"><img src="assets/images/tool/frame.svg" class="ic"><span>${(0, i.A)("frame")}</span></li>\n                <li id="add-layer-text" data="text"><img src="assets/images/tool/text.svg" class="ic"><span>${(0, i.A)("text")}</span></li>\n                <li id="add-layer-shape" data="shape"><img src="assets/images/tool/shape.svg" class="ic"><span>${(0, i.A)("shape")}</span></li>\n            </ul>\n        `);
          (0, h.Ay)("add-layer-empty").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("add-layer-image").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("add-layer-text").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("add-layer-frame").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("add-layer-shape").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("dialog-apply" + this.mid).style.display = "none";
        }
      }
      class y {
        constructor(t, e) {
          this.stage = t;
          this.active = e;
          this.isDown = false;
          this.isRight = false;
          this.stamp = new Date().getTime();
          this.dragStart = t => {
            this.p = t;
            this.d = new r.A(this.panel.offsetLeft, this.panel.offsetTop);
          };
          this.dragMove = t => {
            this.panel.style.left = Math.round(this.d.x + (t.x - this.p.x)) + "px";
            this.panel.style.top = Math.round(this.d.y + (t.y - this.p.y)) + "px";
          };
          this.dragEnd = t => {
            let e = Math.round(this.d.y + (t.y - this.p.y));
            let s = Math.round(this.d.x + (t.x - this.p.x));
            if (e < 76) {
              e = 76;
            }
            if (s < 0) {
              s = 0;
            }
            if (s + 120 > (0, h.Ay)("workspace").offsetWidth) {
              s = (0, h.Ay)("workspace").offsetWidth - 240;
            }
            this.panel.style.left = s + "px";
            this.panel.style.top = e + "px";
          };
          this.resizeStart = t => {
            this.d = new r.A(this.panel.clientHeight, t.y);
          };
          this.resizeMove = t => {
            const e = this.d.x + (t.y - this.d.y);
            this.panel.style.height = (e < 120 ? 120 : e) + "px";
          };
          this.activate = t => {
            this.panel.classList.toggle("active", t);
            if (t) {
              this.panel.classList.remove("collapse");
            }
            this.active = t;
            this.render();
          };
          this.delay = false;
          this.addLayerChoice = async t => {
            t.stopPropagation();
            if (!this.delay) {
              this.delay = true;
              try {
                switch (t.currentTarget.getAttribute("data")) {
                  case "text":
                    this.stage.addText();
                    document.dispatchEvent(new CustomEvent("select-tool", {
                      detail: "text"
                    }));
                    if (this.stage.reform) {
                      this.stage.reform.dblClick();
                    }
                    break;
                  case "image":
                    this.delay = false;
                    await (0, g.XN)(true, false, "image/*").then(async t => {
                      document.dispatchEvent(new CustomEvent("loading", {
                        detail: "start"
                      }));
                      for (let e = 0; e < t.length; e++) {
                        await (0, g.Tq)(t[e], this.stage, false);
                      }
                      document.dispatchEvent(new CustomEvent("loading", {
                        detail: "stop"
                      }));
                      document.dispatchEvent(new CustomEvent("select-tool", {
                        detail: "arrange"
                      }));
                    });
                    break;
                  case "shape":
                    this.stage.addShape();
                    document.dispatchEvent(new CustomEvent("select-tool", {
                      detail: "shape"
                    }));
                    break;
                  case "frame":
                    this.stage.addFrame();
                    document.dispatchEvent(new CustomEvent("select-tool", {
                      detail: "frame"
                    }));
                    break;
                  case "empty":
                    this.stage.addEmpty();
                    this.stage.notify("layerAdded");
                }
              } catch (e) {}
              a.sg("add-layer", 500, () => {
                this.delay = false;
              });
            }
          };
          this.changeName = () => {
            this.stamp = new Date().getTime();
            let t = this.stage.fresco.getLayerById(this.settingsId);
            let e = Object.assign({}, t.settings);
            const s = (0, h.Ay)("layer-settings-name").value;
            if (t.settings.name !== s) {
              t.settings.name = s;
              this.stage.history.add({
                type: "layerSettings",
                kind: "name",
                layer: t,
                settings: e
              });
              if ((0, h.Ay)(t.id + "-name")) {
                (0, h.Ay)(t.id + "-name").innerHTML = t.settings.name + "<span>" + (0, i.A)(t.type) + "</span>";
              }
            }
          };
          this.changeBlendMode = () => {
            this.stamp = new Date().getTime();
            let t = this.stage.fresco.getLayerById(this.settingsId);
            let e = Object.assign({}, t.settings);
            t.settings.blendmode = (0, h.Ay)("layer-settings-blend-mode").value;
            this.stage.history.add({
              type: "layerSettings",
              kind: "blendMode",
              layer: t,
              settings: e
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeLocked = t => {
            this.stamp = new Date().getTime();
            const e = (0, h.Ay)("layer-settings-locked-true").checked;
            this.stage.changeLocked(undefined, e);
          };
          this.changeVisible = t => {
            this.stamp = new Date().getTime();
            let e = this.stage.fresco.getLayerById(this.settingsId);
            const s = (0, h.Ay)("layer-settings-visible-true").checked;
            this.stage.changeVisible(e, s);
          };
          this.render = t => {
            if (!this.active || !this.stage || this.stage.supressRender) {
              return;
            }
            if (this.isDown && !this.stage.layerDrag) {
              return;
            }
            const e = (0, h.Ay)("layer-list");
            while (e.lastChild) {
              e.removeChild(e.lastChild);
            }
            if (this.stage.fresco) {
              const t = n.A.bestFit(this.stage.fresco.width, this.stage.fresco.height, 32, 32);
              const o = t.width / this.stage.fresco.width;
              const r = this.stage.fresco.width;
              const l = this.stage.fresco.height;
              let u = 0;
              for (var s = this.stage.fresco.layers.length - 1; s >= 0; s--) {
                const p = this.stage.fresco.layers[s];
                let g = (0, h.T)("div", {
                  id: p.id,
                  className: "layer"
                });
                if (!p.settings.visible) {
                  g.classList.add("hidden");
                }
                g.addEventListener("mousedown", this.mouseDown, false);
                g.addEventListener("touchstart", this.touchStart, {
                  passive: false
                });
                if (u > 0) {
                  g.classList.add("member");
                  u--;
                }
                e.appendChild(g);
                if (p instanceof c.A) {
                  if (p.groupSettings.collapsed) {
                    s -= 3;
                    g.classList.add("collapsed");
                  } else {
                    u = 3;
                  }
                  g.classList.add("group");
                  let t = (0, h.T)("div", {
                    className: "arrow"
                  });
                  t.addEventListener("mousedown", t => {
                    t.stopPropagation();
                    t.preventDefault();
                  }, true);
                  t.addEventListener("click", t => {
                    t.stopPropagation();
                    t.preventDefault();
                    this.stage.changeCollapsed(p);
                  }, false);
                  g.append(t, (0, h.T)("div", {
                    id: p.id + "-name",
                    className: "name"
                  }, p.settings.name));
                } else {
                  let e = a.VI(t.width, t.height);
                  if (p.canvas) {
                    let s = e.getContext("2d");
                    if (p.rect.width / r > 0.5 || p.rect.height / l > 0.5) {
                      s.scale(o, o);
                      this.stage.renderLayer(s, p, true);
                    } else {
                      s.translate(t.width / 2, t.height / 2);
                      s.imageSmoothingEnabled = true;
                      s.imageSmoothingQuality = "high";
                      s.rotate(p.rect.rotation * Math.PI / 180);
                      const e = n.A.bestFit(p.rect.width, p.rect.height, t.width - 8, t.height - 8);
                      s.drawImage(p.baked ? p.baked : p.canvas, -e.width / 2, -e.height / 2, Math.max(e.width, 1), Math.max(e.height, 1));
                    }
                  }
                  g.appendChild((0, h.T)("div", {
                    className: "vertical-align thumb"
                  }, e));
                  g.appendChild((0, h.T)("div", {
                    id: p.id + "-name",
                    className: "name"
                  }, p.settings.name, (0, h.T)("span", (0, i.A)(p.type))));
                }
                if (p.settings.locked && !p.settings.visible || !p.settings.locked) {
                  const t = (0, h.T)("img", {
                    className: "visibility ic",
                    title: p.settings.visible ? (0, i.A)("visible") : (0, i.A)("hidden"),
                    src: p.settings.visible ? "assets/images/icon/visible.svg" : "assets/images/icon/hidden.svg"
                  });
                  t.addEventListener("mousedown", t => {
                    t.stopPropagation();
                    t.preventDefault();
                  }, true);
                  t.addEventListener("click", t => {
                    t.stopPropagation();
                    t.preventDefault();
                    this.stage.changeVisible(p, !p.settings.visible);
                  }, false);
                  g.appendChild((0, h.T)("div", {
                    className: "right"
                  }, t));
                } else {
                  let t = (0, h.T)("img", {
                    src: "assets/images/icon/locked.svg",
                    className: "locked ic",
                    title: (0, i.A)("locked")
                  });
                  t.addEventListener("mousedown", t => {
                    t.stopPropagation();
                    t.preventDefault();
                  }, true);
                  t.addEventListener("click", t => {
                    t.stopPropagation();
                    t.preventDefault();
                    this.stage.changeLocked(p, false);
                  }, false);
                  g.appendChild((0, h.T)("div", {
                    className: "right"
                  }, t));
                }
                let m = (0, h.T)("div", {
                  className: "icons"
                });
                g.appendChild(m);
                if (p instanceof d.A && p.hasMask()) {
                  const t = (0, h.T)("img", {
                    src: "assets/images/icon/mask.svg",
                    title: (0, i.A)("hasCutout"),
                    className: "cutout ic"
                  });
                  t.addEventListener("mousedown", () => {
                    document.dispatchEvent(new CustomEvent("select-tool", {
                      detail: "cutout"
                    }));
                  });
                  t.addEventListener("dblclick", () => {
                    this.stage.maskApply();
                  });
                  m.appendChild(t);
                }
                if (p.settings.link && p.settings.link !== "") {
                  m.appendChild((0, h.T)("img", {
                    src: "assets/images/icon/linked.svg",
                    title: (0, i.A)("linked"),
                    className: "linked ic"
                  }));
                  g.classList.add(p.settings.link);
                }
              }
              this.markSelected(false);
            }
          };
          this.markSelected = (t = true) => {
            var e;
            if ((0, h.Ay)("layer-settings").style.display === "block") {
              const sel = this.stage && this.stage.fresco && this.stage.fresco.getSelected();
              if (!sel || sel.id !== this.settingsId) {
                this.hideSettings();
              }
            }
            if (this.stage && this.stage.fresco && (0, h.Ay)("layer-panel")) {
              if (t) {
                const t = (0, h.Ay)("layer-list").getElementsByClassName("layer");
                for (let e = 0; e < t.length; e++) {
                  t[e].classList.remove("haslink", "selected");
                }
              }
              const s = this.stage.fresco.getSelectedStack();
              for (let t of s) {
                if ((e = (0, h.Ay)(t.id)) !== null && e !== undefined) {
                  e.classList.add("selected");
                }
                if (t.hasLink()) {
                  const e = (0, h.Ay)("layer-list").getElementsByClassName(t.settings.link);
                  for (let t = 0; t < e.length; t++) {
                    e[t].classList.add("haslink");
                  }
                }
              }
              let i = this.stage.fresco.numSelected() > 1;
              if (this.stage.fresco.numSelected() === 1 && this.stage.fresco.getSelected().hasLink()) {
                i = true;
              }
              (0, h.Ay)("layer-panel-link").style.display = i ? "block" : "none";
              (0, h.Ay)("layer-panel-more").style.display = s.length === 1 ? "block" : "none";
            }
          };
          this.settingsId = "";
          this.showSettings = t => {
            let e = this.stage.fresco.getSelected();
            if (e && e.id !== this.settingsId) {
              (0, h.Ay)("layer-settings").style.display = "block";
              this.settingsId = e.id;
              this.opacity.setValue(e.settings.opacity);
              (0, h.Ay)("layer-settings-name").value = e.settings.name;
              (0, h.Ay)("layer-settings-blend-mode").value = e.settings.blendmode;
              (0, h.Ay)("layer-settings-visible-true").checked = e.settings.visible;
              (0, h.Ay)("layer-settings-visible-false").checked = !e.settings.visible;
              (0, h.Ay)("layer-settings-locked-true").checked = e.settings.locked;
              (0, h.Ay)("layer-settings-locked-false").checked = !e.settings.locked;
              window.requestAnimationFrame(() => {
                if (t) {
                  const t = 32;
                  const s = (0, h.Ay)("layer-settings").getBoundingClientRect();
                  const i = a.oR(this.panel).y;
                  const n = a.oR((0, h.Ay)(e.id)).y;
                  const o = (0, h.Ay)("layer-panel-content-ss-content").scrollTop;
                  let r = n - i + (0, h.Ay)("panel-bar").clientTop - o;
                  if (i + r + s.height > (0, h.Ay)("workspace").clientHeight) {
                    r = (0, h.Ay)("workspace").clientHeight - i - s.height - 4;
                  }
                  (0, h.Ay)("layer-settings").style.top = r - t + "px";
                } else {
                  (0, h.Ay)("layer-settings").style.top = "-12px";
                }
              });
            } else {
              this.hideSettings(true);
            }
          };
          this.hideSettings = (t = false) => {
            if (!!t || !(new Date().getTime() - this.stamp < 300)) {
              this.settingsId = "";
              (0, h.Ay)("layer-settings").style.display = "none";
              document.dispatchEvent(new CustomEvent("layer-arrange"));
            }
          };
          this.touchStart = t => {
            if (t.touches.length !== 1) {
              t.preventDefault();
              t.stopPropagation();
              this.down(t.touches[0].clientX, t.touches[0].clientY, t.currentTarget, t.shiftKey || t.ctrlKey);
              if (this.stage.fresco.getSelected()) {
                document.addEventListener("touchmove", this.touchMove, {
                  passive: false
                });
                document.addEventListener("touchend", this.touchEnd, {
                  passive: false
                });
              }
            }
          };
          this.touchMove = t => {
            if (t.touches.length !== 1) {
              t.preventDefault();
              t.stopPropagation();
              this.move(t.touches[0].clientX, t.touches[0].clientY);
            }
          };
          this.touchEnd = t => {
            t.preventDefault();
            t.stopPropagation();
            this.up(t.touches[0].clientX, t.touches[0].clientY);
            document.removeEventListener("touchmove", this.touchMove);
            document.removeEventListener("touchend", this.touchEnd);
          };
          this.mouseDown = t => {
            if (document.activeElement.nodeName !== "INPUT" && document.activeElement.nodeName !== "SELECT") {
              t.stopPropagation();
              this.down(t.clientX, t.clientY, t.currentTarget, t.shiftKey || t.ctrlKey);
              if (t.button > 0) {
                this.stamp = new Date().getTime();
                this.showSettings(t);
                return;
              }
              if (this.stage.fresco.getSelected()) {
                document.addEventListener("mousemove", this.mouseMove, true);
                document.addEventListener("mouseup", this.mouseUp, true);
                (0, h.Ay)("layer-panel").classList.add("down");
                this.isDown = true;
              }
            }
          };
          this.mouseMove = t => {
            if (!(t.button > 0)) {
              t.stopPropagation();
              this.move(t.clientX, t.clientY);
            }
          };
          this.mouseUp = t => {
            t.stopPropagation();
            this.up(t.clientX, t.clientY);
            document.removeEventListener("mousemove", this.mouseMove, true);
            document.removeEventListener("mouseup", this.mouseUp, true);
          };
          this.down = (t, e, s, i) => {
            this.downY = e;
            this.heightY = (0, h.Ay)("layer-panel-content-ss-content").scrollHeight;
            if (i || this.stage.fresco.isSelectedStack() || !this.stage.fresco.isSelectedById(s.id)) {
              if (i && this.stage.fresco.isSelectedById(s.id)) {
                this.stage.unselectLayerById(s.id);
              } else {
                this.stage.selectLayerById(s.id, i, true);
              }
            }
          };
          this.pointInLayerPanel = (t, e) => {
            const s = (0, h.Ay)("layer-list").getBoundingClientRect();
            return t >= s.x && t <= s.x + s.width && e >= s.y && e <= s.y + s.height;
          };
          this.move = (t, e) => {
            const s = (0, h.Ay)("layer-list");
            if (!this.pointInLayerPanel(t, e)) {
              if (this.ghost) {
                this.ghost.classList.remove("ghost");
                this.ghost.style.left = "unset";
                this.ghost.style.top = "unset";
                this.ghostFill.remove();
                const t = this.stage.fresco.layers.length - this.stage.fresco.selectedLayerNr() - 1;
                s.children[t].before(this.ghost);
                this.ghost = null;
                this.ghostFill = null;
              }
              if (!this.stage.layerDrag) {
                const s = this.stage.fresco.getSelected();
                const i = (0, h.Ay)(s.id);
                this.stage.layerDrag = {
                  fresco: this.stage.fresco.id,
                  layer: s,
                  node: (0, h.T)("div", {
                    className: "grabbed-layer"
                  }, (0, h.T)("div", {
                    className: "thumb"
                  }, a.oM(i.querySelector("canvas"))), (0, h.T)("div", s.settings.name)),
                  position: new r.A(t, e)
                };
                this.stage.workspace.append(this.stage.layerDrag.node);
                document.body.style.cursor = "move";
              }
              const i = this.stage.layerDrag.node.getBoundingClientRect();
              this.stage.layerDrag.node.style.left = t - i.width / 2 + "px";
              this.stage.layerDrag.node.style.top = e - i.height / 2 + "px";
              this.stage.layerDrag.position = new r.A(t, e);
              document.dispatchEvent(new CustomEvent("layer-drag-move"));
              return;
            }
            if (this.stage.layerDrag) {
              this.stage.coating.clear();
              document.body.style.cursor = "unset";
              if (this.stage.layerDrag.fresco !== this.stage.fresco.id) {
                const s = this.stage.layerDrag.node.getBoundingClientRect();
                this.stage.layerDrag.node.style.left = t - s.width / 2 + "px";
                this.stage.layerDrag.node.style.top = e - s.height / 2 + "px";
                this.stage.layerDrag.position = new r.A(t, e);
                return;
              }
              this.stage.layerDrag.node.remove();
              this.stage.layerDrag = null;
            }
            if (!this.ghost) {
              this.ghost = (0, h.Ay)(this.stage.fresco.getSelected().id);
              this.startY = this.ghost.offsetTop - 1;
              this.ghost.style.left = this.ghost.offsetLeft + "px";
              this.ghostFill = document.createElement("div");
              this.ghostFill.id = "ghost-fill";
              this.ghost.before(this.ghostFill);
              this.ghost.classList.add("ghost");
              s.appendChild(this.ghost);
            }
            if (this.startY === -1) {
              this.startY = this.ghost.offsetTop - 4;
              this.downY = e;
            }
            this.ghost.style.top = this.startY - (this.downY - e) + "px";
            this.moveGhostFill();
            window.clearTimeout(this.auto);
            let i = (0, h.Ay)("layer-panel-content-ss-content");
            if (this.ghost.offsetTop < i.scrollTop - 5) {
              this.autoScroll(-20);
            } else if (this.ghost.offsetTop + this.ghost.offsetHeight > i.scrollTop + i.offsetHeight + 5) {
              this.autoScroll(20);
            }
          };
          this.moveGhostFill = () => {
            if (this.ghost.offsetTop > this.ghostFill.offsetTop + this.ghostFill.offsetHeight / 2 + 2) {
              if (!this.ghostFill.nextElementSibling.classList.contains("selected")) {
                this.ghostFill.nextElementSibling.after(this.ghostFill);
              }
            } else if (this.ghost.offsetTop < this.ghostFill.offsetTop - this.ghostFill.offsetHeight / 2 - 2 && this.ghostFill.previousElementSibling) {
              this.ghostFill.previousElementSibling.before(this.ghostFill);
            }
          };
          this.autoScroll = t => {
            window.clearTimeout(this.auto);
            const e = (0, h.Ay)("layer-panel-content-ss-content");
            const s = () => {
              if (this.ghost && (t < 0 && e.scrollTop > 10 || t > 0 && e.scrollTop + 10 < this.heightY - e.clientHeight)) {
                this.startY = -1;
                e.scrollTop += t;
                this.ghost.style.top = this.ghost.offsetTop - 1 + t + "px";
                this.moveGhostFill();
                this.auto = window.setTimeout(s, 80);
              }
            };
            this.auto = window.setTimeout(s, 80);
          };
          this.up = (t, e) => {
            this.isDown = false;
            (0, h.Ay)("layer-panel").classList.remove("down");
            document.body.style.cursor = "unset";
            if (this.stage.layerDrag) {
              if (!this.pointInLayerPanel(t, e)) {
                document.dispatchEvent(new CustomEvent("layer-drag-drop"));
              }
              this.stage.layerDrag.node.remove();
              this.stage.layerDrag = undefined;
            }
            if (this.ghost) {
              this.ghost.classList.remove("ghost");
              this.ghost.style.left = "0px";
              this.ghost.style.top = "0px";
              this.ghostFill.before(this.ghost);
              this.ghostFill.remove();
              this.ghost = undefined;
              this.ghostFill = undefined;
            }
            let s = this.stage.fresco.selectedLayerNr();
            let i = (0, h.Ay)("layer-list").getElementsByClassName("layer");
            const a = this.stage.fresco.getSelected();
            for (var n = 0; n < i.length; n++) {
              if (i[n].id === a.id) {
                let t = i.length - n - 1;
                if (t != s) {
                  this.stage.changeOrder(s, t);
                }
                break;
              }
            }
          };
          this.panel = (0, h.Ay)("layer-panel");
          this.panel.classList.toggle("active", e);
          document.addEventListener("layerlist-update", () => this.render(), true);
          document.addEventListener("layer-select", () => this.markSelected(), false);
          (0, h.Ay)("layer-panel-add").addEventListener("click", () => new m(this.stage), false);
          (0, h.Ay)("layer-panel-link").addEventListener("click", () => this.stage.linkLayer(), false);
          (0, h.Ay)("layer-panel-group").addEventListener("click", () => this.stage.addGroup(), false);
          (0, h.Ay)("layer-panel-copy").addEventListener("click", () => this.stage.duplicateLayer(), false);
          (0, h.Ay)("layer-panel-delete").addEventListener("click", () => this.stage.deleteLayer(), false);
          (0, h.Ay)("layer-panel-more").addEventListener("click", t => this.showSettings(), true);
          (0, h.Ay)("layer-panel-more").addEventListener("pointerdown", t => {
            t.preventDefault();
            t.stopPropagation();
          }, true);
          (0, h.Ay)("layer-settings-name").addEventListener("blur", this.changeName, false);
          (0, h.Ay)("layer-settings-name").addEventListener("keydown", t => {
            if (t.key === "Enter") {
              t.currentTarget.blur();
              this.hideSettings(true);
            }
          }, true);
          (0, h.Ay)("layer-settings-close").addEventListener("click", () => this.hideSettings(true), false);
          (0, h.Ay)("layer-settings-blend-mode").addEventListener("change", this.changeBlendMode, false);
          (0, h.Ay)("layer-settings-visible-false").addEventListener("click", this.changeVisible, false);
          (0, h.Ay)("layer-settings-visible-true").addEventListener("click", this.changeVisible, false);
          (0, h.Ay)("layer-settings-locked-false").addEventListener("click", this.changeLocked, false);
          (0, h.Ay)("layer-settings-locked-true").addEventListener("click", this.changeLocked, false);
          (0, h.Ay)("layer-settings-merge-down").addEventListener("click", () => this.stage.mergeDown(), false);
          (0, h.Ay)("layer-settings-merge-visible").addEventListener("click", () => this.stage.mergeVisible(), false);
          (0, h.Ay)("layer-settings-merge-flatten").addEventListener("click", () => this.stage.mergeFlatten(), false);
          (0, h.Ay)("layer-panel-add-frame").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("layer-panel-add-text").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("layer-panel-add-image").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("layer-panel-add-shape").addEventListener("click", this.addLayerChoice, true);
          (0, h.Ay)("layer-panel-add-empty").addEventListener("click", this.addLayerChoice, true);
          this.opacity = new o.A("layer-settings-opacity", {
            defaultValue: 1,
            label: (0, i.A)("opacity"),
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => {
              this.stage.fresco.getLayerById(this.settingsId).settings.opacity = t;
              document.dispatchEvent(new CustomEvent("viewport-render"));
            },
            onEnd: (t, e) => {
              this.stamp = new Date().getTime();
              let s = this.stage.fresco.getLayerById(this.settingsId);
              this.stage.history.add({
                type: "layerSettings",
                kind: "opacity",
                layer: s,
                settings: Object.assign(Object.assign({}, s.settings), {
                  opacity: e
                })
              });
            }
          });
          new l.A((0, h.Ay)("layer-panel-content"));
          (0, h.Ay)("layer-panel-content").oncontextmenu = t => {
            t.preventDefault();
            t.stopPropagation();
            return false;
          };
          (0, h.Ay)("layer-minimize").addEventListener("pointerdown", t => {
            t.stopPropagation();
            (0, h.Ay)("layer-panel").classList.toggle("collapse");
          }, true);
          (0, h.Ay)("layer-close").addEventListener("pointerdown", t => {
            t.stopPropagation();
            document.dispatchEvent(new CustomEvent("panel-state", {
              detail: "layer-panel"
            }));
          }, true);
          const s = (0, h.T)("img", {
            id: "layer-panel-resize",
            src: "assets/images/icon/three-dot.svg",
            className: "resize ic"
          });
          (0, h.Bb)(s, this.resizeStart, this.resizeMove);
          this.panel.append(s);
          (0, h.Bb)((0, h.Ay)("layer-panel-title"), this.dragStart, this.dragMove, this.dragEnd);
        }
      }
    }
