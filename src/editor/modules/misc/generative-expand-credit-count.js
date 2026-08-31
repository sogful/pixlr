window.__editorModules[3512] = function (t, e, s) {
      s.d(e, {
        A: () => f
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(3244);
      var o = s(651);
      var r = s(5699);
      var h = s(6050);
      var l = s(5432);
      var c = s(5328);
      var d = s(6939);
      var u = s(1168);
      var p = s(8098);
      var g = s(9754);
      var m = s(7611);
      var y = s(2443);
      var v = s(7135);
      class f extends d.A {
        constructor(t) {
          super((0, i.A)("titleAIGenerativeExpand"), true, true);
          this.constrain = true;
          this.saving = false;
          this.messy = false;
          this.working = false;
          this.setPreview = async () => {
            (0, a.Ay)("generative-expand-preview-holder").innerHTML = "";
            const t = n.A.bestFit(this.selected.canvas.width, this.selected.canvas.height, this.dialog.offsetWidth - 360, this.dialog.offsetHeight - 192);
            const e = r.H5(this.selected.canvas, t.width, t.height, true);
            e.id = "generative-expand-preview-canvas";
            e.classList.add("expand-preview");
            (0, a.Ay)("generative-expand-preview-holder").append(e);
            this.updatePreview();
          };
          this.updatePreview = () => {
            const t = (0, a.Ay)("generative-expand-preview-holder");
            const e = (0, a.Ay)("generative-expand-preview-canvas");
            const s = n.A.bestFit(this.size.width, this.size.height, this.dialog.offsetWidth - 360, this.dialog.offsetHeight - 192);
            let i = this.selected.rect.width / this.size.width;
            let o = this.selected.rect.height / this.size.height;
            t.style.width = s.width + 2 + "px";
            t.style.height = s.height + 2 + "px";
            e.style.width = s.width * i + "px";
            e.style.height = s.height * o + "px";
            let r = t.clientWidth / this.size.width;
            e.style.top = Math.round(this.pos.y * r) + "px";
            e.style.left = Math.round(this.pos.x * r) + "px";
            this.messy = i !== 1 || o !== 1;
            if (this.messy) {
              (0, a.Ay)("generative-expand-execute").classList.remove("disabled");
            } else {
              (0, a.Ay)("generative-expand-execute").classList.add("disabled");
            }
          };
          this.previewDown = t => {
            t.stopPropagation();
          };
          this.previewMove = t => {
            t.stopPropagation();
            const e = (0, a.Ay)("generative-expand-preview-canvas");
            const s = (0, a.Ay)("generative-expand-preview-holder");
            let i = this.downPosition.x + (t.clientX - this.downPoint.x);
            let n = this.downPosition.y + (t.clientY - this.downPoint.y);
            i = r.qE(i, 0, s.clientWidth - e.clientWidth);
            n = r.qE(n, 0, s.clientHeight - e.clientHeight);
            e.style.top = n + "px";
            e.style.left = i + "px";
            let o = this.size.width / s.clientWidth;
            this.pos.x = Math.round(i * o);
            this.pos.y = Math.round(n * o);
          };
          this.previewUp = t => {
            t.stopPropagation();
            document.removeEventListener("pointermove", this.previewMove, true);
            document.removeEventListener("pointerup", this.previewUp, true);
          };
          this.showCreditPop = () => {
            new g.A("credits");
          };
          this.setPreset = t => {
            var e;
            if (t !== ((e = this.selectedPreset) === null || e === undefined ? undefined : e.getAttribute("data"))) {
              this.reset();
            }
            if (t.indexOf(":") !== -1) {
              const [e, s] = t.split(":").map(Number);
              let i = this.selected.rect.width;
              let a = this.selected.rect.height;
              if (e === s) {
                let t = Math.max(i, a);
                this.size = new o.A(t, t);
              } else {
                let t = i;
                let n = a;
                if (e > s) {
                  n = i / e * s;
                  if (n < a) {
                    t = a / s * e;
                    n = a;
                  }
                } else {
                  t = a / s * e;
                  if (t < i) {
                    n = i / e * s;
                    t = i;
                  }
                }
                this.size = new o.A(Math.round(t), Math.round(n));
              }
            } else {
              if (t === "1.5x") {
                this.size.width = Math.round(this.selected.rect.width * 1.5);
                this.size.height = Math.round(this.selected.rect.height * 1.5);
              }
              if (t === "2x") {
                this.size.width = this.selected.rect.width * 2;
                this.size.height = this.selected.rect.height * 2;
              }
              if (t === "1.5w") {
                this.size.height = this.selected.rect.height;
                this.size.width = Math.round(this.selected.rect.width * 1.5);
              }
              if (t === "1.5h") {
                this.size.width = this.selected.rect.width;
                this.size.height = Math.round(this.selected.rect.height * 1.5);
              }
            }
            this.pos.x = Math.round((this.size.width - this.selected.rect.width) * 0.5);
            this.pos.y = Math.round((this.size.height - this.selected.rect.height) * 0.5);
            this.updateSizeInput();
            this.updatePreview();
          };
          this.changeContraint = t => {
            if (!this.saving) {
              this.constrain = !this.constrain;
              (0, a.Ay)("generative-expand-lock").style.display = this.constrain ? "block" : "none";
              (0, a.Ay)("generative-expand-vs").style.display = this.constrain ? "none" : "block";
              (0, a.Ay)("toggle-generative-expand-constraint").checked = this.constrain;
            }
          };
          this.widthHeightInputChange = t => {
            if (this.saving || this.working) {
              return;
            }
            let e = t == null ? undefined : t.currentTarget;
            let s = (0, a.Ay)("generative-expand-width").value;
            let i = (0, a.Ay)("generative-expand-height").value;
            this.size.width = Number.isNaN(Number(s)) ? this.selected.rect.width : r.qE(Number(s), this.selected.rect.width, 4096);
            this.size.height = Number.isNaN(Number(i)) ? this.selected.rect.height : r.qE(Number(i), this.selected.rect.height, 4096);
            if (this.constrain && e.id == "generative-expand-width") {
              let t = this.size.width / this.selected.rect.width;
              this.size.height = Number.isNaN(Number(s)) ? this.selected.rect.height : Math.round(t * this.selected.rect.height);
            } else if (this.constrain && e.id == "generative-expand-height") {
              let t = this.size.height / this.selected.rect.height;
              this.size.width = Number.isNaN(Number(s)) ? this.selected.rect.width : Math.round(t * this.selected.rect.width);
            }
            this.pos.x = Math.round((this.size.width - this.selected.rect.width) * 0.5);
            this.pos.y = Math.round((this.size.height - this.selected.rect.height) * 0.5);
            r.sg("size", 200, () => this.updatePreview());
          };
          this.updateSizeInput = () => {
            (0, a.Ay)("generative-expand-width").value = this.size.width.toString();
            (0, a.Ay)("generative-expand-height").value = this.size.height.toString();
          };
          this.renderCreditAmount = () => {
            if (l.Ny) {
              (0, a.Ay)("generative-expand-credit-count").innerHTML = l.Ny.credits.toString();
            } else {
              (0, a.Ay)("generative-expand-execute").innerText = (0, i.A)("commonSignUpLogIn");
              (0, a.Ay)("generative-expand-credit-count").style.display = "none";
            }
          };
          this.reset = () => {
            (0, a.Ay)("generative-expand-result").style.display = "none";
            (0, a.Ay)("generative-expand-preview").style.display = "block";
            (0, a.Ay)("generative-expand-execute").style.display = "inline-flex";
            (0, a.Ay)("generative-expand-repeat").style.display = "none";
            (0, a.Ay)(`dialog-apply${this.mid}`).classList.add("disabled");
            this.result = undefined;
          };
          this.execute = async () => {
            var t;
            var e;
            var s;
            if (l.Ny) {
              if (l.Ny.credits) {
                if (!this.working && (this.size.width !== this.selected.rect.width || this.size.height !== this.selected.rect.height)) {
                  (0, v.A)("generative-expand");
                  this.working = true;
                  (0, a.Ay)("generative-expand-execute").classList.add("working");
                  if ((t = (0, a.Ay)("generative-expand-repeat")) !== null && t !== undefined) {
                    t.classList.add("working");
                  }
                  (0, a.Ay)("generative-expand-settings").classList.add("disabled");
                  (0, a.Ay)("generative-expand-preview").classList.add("disabled");
                  try {
                    let t = (0, a.Ay)("generative-expand-result-list").getElementsByTagName("canvas");
                    for (let i = 0; i < t.length; i++) {
                      t[i].classList.add("disabled");
                    }
                    if (r.P1(this.selected.canvas)) {
                      alert((0, i.A)("generativeExpandTransparentWarning"));
                      return;
                    }
                    this.result = await (0, p.J)(this.selected.canvas, this.size, this.pos, 1);
                    (0, a.Ay)("generative-expand-result").style.display = "block";
                    (0, a.Ay)("generative-expand-preview").style.display = "none";
                    (0, a.Ay)("generative-expand-execute").style.display = "none";
                    (0, a.Ay)("generative-expand-repeat").style.display = "inline-flex";
                    (0, a.Ay)(`dialog-apply${this.mid}`).classList.remove("disabled");
                    (0, a.Ay)("generative-expand-result-list").innerHTML = "";
                    (0, a.Ay)("generative-expand-repeat").addEventListener("click", this.execute, false);
                    const [e] = this.result;
                    e.id = r.r0();
                    let s = n.A.bestFit(e.width, e.height, this.dialog.offsetWidth - 360, this.dialog.offsetHeight - 192);
                    let o = r.H5(e, s.width, s.height, true);
                    o.className = "flow-down";
                    o.style.boxShadow = "6px 6px 12px rgb(0 0 0 / 30%)";
                    o.id = "generative-expand-result-canvas";
                    (0, a.Ay)("generative-expand-result-list").append(o);
                    this.renderCreditAmount();
                  } catch (o) {
                    console.error(o);
                    document.dispatchEvent(new CustomEvent("notification", {
                      detail: `${(0, i.A)("genericError")} ${o.message ? `: ${o.message}` : ""}`
                    }));
                  } finally {
                    this.working = false;
                    if ((e = (0, a.Ay)("generative-expand-execute")) !== null && e !== undefined) {
                      e.classList.remove("working");
                    }
                    if ((s = (0, a.Ay)("generative-expand-repeat")) !== null && s !== undefined) {
                      s.classList.remove("working");
                    }
                    (0, a.Ay)("generative-expand-settings").classList.remove("disabled");
                    (0, a.Ay)("generative-expand-preview").classList.remove("disabled");
                  }
                }
              } else if (l.Ny.subscription) {
                new g.A("credits");
              } else {
                new y.default("generative-expand", "credit");
              }
            } else {
              new u.A();
            }
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.scaleAndApply = async t => {
            this.working = true;
            (0, a.Ay)("generative-expand-result").classList.add("working");
            (0, a.Ay)(`dialog-apply${this.mid}`).classList.add("working");
            (0, a.Ay)("generative-expand-settings").classList.add("disabled");
            (0, a.Ay)("generative-expand-result").classList.add("disabled");
            try {
              let e = this.result.find(e => e.id === t);
              let s = r.k8(e, this.maxSize);
              let i = await (0, m.i)(s, this.size, true);
              if (this.stage.fresco.layers[0] === this.selected && this.selected.canvas.width === this.stage.fresco.width && this.selected.canvas.height === this.stage.fresco.height) {
                const t = new o.A(this.stage.fresco.width, this.stage.fresco.height);
                if (t.width !== i.width || i.width !== i.height) {
                  const e = this.stage.fresco.layers.map(t => {
                    t.syncRequested = new Date();
                    return t.clone(true);
                  });
                  this.stage.fresco.resize(i.width, i.height, true);
                  this.selected.canvas = i;
                  this.selected.rect = new n.A(this.selected.rect.x, this.selected.rect.y, i.width, i.height);
                  this.stage.history.add({
                    type: "pageResize",
                    size: t,
                    layers: e
                  });
                }
              } else {
                const t = this.selected.rect.clone();
                const e = r.$z(this.selected.canvas);
                this.selected.canvas = i;
                this.selected.rect = new n.A(this.selected.rect.x, this.selected.rect.y, i.width, i.height);
                this.stage.history.add({
                  type: "bitmapSwitch",
                  kind: "generative-expand",
                  layer: this.selected,
                  rect: t,
                  canvas: e
                });
              }
            } catch (e) {
              console.error(e);
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, i.A)("genericError")
              }));
            }
            this.working = false;
            (0, a.Ay)("generative-expand-result").classList.remove("working");
            (0, a.Ay)(`dialog-apply${this.mid}`).classList.remove("working");
            (0, a.Ay)("generative-expand-settings").classList.remove("disabled");
            (0, a.Ay)("generative-expand-result").classList.remove("disabled");
            document.dispatchEvent(new CustomEvent("reset-viewport"));
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            this.updatePreview();
            this.cleanUp();
          };
          this.applyLayer = () => {
            if (this.saving) {
              return;
            }
            this.saving = true;
            const t = r.$z(this.selected.canvas);
            const e = this.selected.rect.clone();
            this.stage.history.add({
              type: "bitmapSwitch",
              kind: "generative-expand",
              layer: this.selected,
              canvas: t,
              rect: e
            });
          };
          this.apply = () => {
            const [t] = this.result;
            this.scaleAndApply(t.id);
          };
          this.cleanUp = () => {
            var t;
            var e;
            var s;
            var i;
            var n;
            var o;
            var r;
            var h;
            if ((t = (0, a.Ay)("generative-expand-preview-holder")) !== null && t !== undefined) {
              t.removeEventListener("pointerdown", this.previewDown, false);
            }
            if ((e = (0, a.Ay)("generative-expand-credit-count")) !== null && e !== undefined) {
              e.removeEventListener("click", this.showCreditPop, false);
            }
            if ((s = (0, a.Ay)("generative-expand-width")) !== null && s !== undefined) {
              s.removeEventListener("input", this.widthHeightInputChange, false);
            }
            if ((i = (0, a.Ay)("generative-expand-width")) !== null && i !== undefined) {
              i.removeEventListener("blur", this.updateSizeInput, false);
            }
            if ((n = (0, a.Ay)("generative-expand-height")) !== null && n !== undefined) {
              n.removeEventListener("input", this.widthHeightInputChange, false);
            }
            if ((o = (0, a.Ay)("generative-expand-height")) !== null && o !== undefined) {
              o.removeEventListener("blur", this.updateSizeInput, false);
            }
            if ((r = (0, a.Ay)("generative-expand-execute")) !== null && r !== undefined) {
              r.removeEventListener("click", this.execute, false);
            }
            if ((h = (0, a.Ay)("generative-expand-repeat")) !== null && h !== undefined) {
              h.removeEventListener("click", this.execute, false);
            }
            this.selected = undefined;
            this.selectedPreset = undefined;
            super.cleanUp();
          };
          this.stage = t;
          this.maxSize = 8192;
          this.dialog.style.width = "90%";
          this.dialog.style.height = "80%";
          this.dialog.style.maxWidth = "1200px";
          this.content.style.flex = "1";
          this.content.style.height = "1px";
          this.content.style.padding = "0px";
          this.content.style.display = "flex";
          this.content.style.position = "relative";
          this.setContent(`\n            <div id="generative-expand-settings" style="flex:0 0 auto;width:300px;position:relative;overflow: hidden;">\n\n                <div id="generative-expand-base" style="padding:20px;overflow: hidden;">\n\n                    <section id="generative-expand-no-layer" style="display:none">\n                        <span class="tip top-20">\n                            <img src="assets/images/icon/tip-lock.svg" width="16" height="16" loading="lazy" class="tip-icon ic" />\n                            ${(0, i.A)("genericNoImageMessage")}\n                        </span>\n                    </section>\n                    \n                    <label class="split">${(0, i.A)("generativeExpandPreset")}</label>\n                    <ul class="push-buttons small top-5" id="generative-expand-preset-list">\n                        <li data="1.5h"><img src="assets/images/icon/aspect-15h.svg" width="18" height="18"><span>1.5x High</span></li>\n                        <li data="1.5w"><img src="assets/images/icon/aspect-15w.svg" width="18" height="18"><span>1.5x Wide</span></li>\n                        <li data="1.5x"><img src="assets/images/icon/aspect-2x.svg" width="18" height="18"><span>1.5x Size</span></li>\n                        <li data="2x"><img src="assets/images/icon/aspect-2x.svg" width="18" height="18"><span>2x Size</span></li>\n                        <li data="1:1"><img src="assets/images/icon/aspect-1-1.svg" width="18" height="18"><span>Square</span></li>\n                        <li data="3:4"><img src="assets/images/icon/aspect-3-4.svg" width="18" height="18"><span>Portrait</span></li>\n                        <li data="4:3"><img src="assets/images/icon/aspect-4-3.svg" width="18" height="18"><span>Post</span></li>\n                        <li data="9:16"><img src="assets/images/icon/aspect-9-16.svg" width="18" height="18"><span>Story</span></li>\n                        <li data="16:9"><img src="assets/images/icon/aspect-16-9.svg" width="18" height="18"><span>Wide</span></li>\n                    </ul>\n\n                    <div style="display: flex; line-height: 28px;" class="top-30">\n                        <div style="flex-grow:1">\n                            <label class="split" style="height: 36px!important;">${(0, i.A)("width")} <input type="number" id="generative-expand-width"/></label>\n                            <label class="split" style="height: 36px!important;">${(0, i.A)("height")} <input type="number" id="generative-expand-height"/></label>\n                        </div>\n                        <div style="width:30px">\n                            <div id="generative-expand-constraint" class="constraint">\n                                <div class="constraint-lock" flow="left" tooltip="${(0, i.A)("toggleConstraint")}">\n                                    <img src="assets/images/icon/locked.svg" id="generative-expand-lock" width="16" height="16" loading="lazy" class="ic tiny-icon">\n                                    <img src="assets/images/icon/x.svg" id="generative-expand-vs" width="16" height="16" loading="lazy" style="display:none" class="ic tiny-icon">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <input type="checkbox" checked id="toggle-generative-expand-constraint" />\n                    <label class="switch top-10" for="toggle-generative-expand-constraint">${(0, i.A)("dialogResizeLock")}<span></span></label>\n\n                    <div id="generative-expand-execute" class="button positive top-30" style="width: 100%; height: 34px;">${(0, i.A)("aiInfillGenerate")} (2c)</div>\n                    <div id="generative-expand-repeat" class="button outline top-30" style="width: 100%; height: 34px; display:none">\n                        <img src="assets/images/icon/reset.svg" width="16" height="16" loading="lazy" class="ic"/>\n                        ${(0, i.A)("repeat")} (2c)\n                    </div>\n                </div>\n            </div>\n            \n            <div id="generative-expand-preview" style="display: flex; flex-direction: column; flex-grow: 1; align-items: center; padding: 20px;background: linear-gradient(43deg, #ffffff00 0%, #ffffff11 100%)">\n                <label>${(0, i.A)("generativeExpandPosition")} <span class="tab-10" style="color:var(--text-dim);font-style: italic;">${(0, i.A)("generativeExpandDrag")}</span></label>\n                <div id="generative-expand-preview-holder" class="expand-preview-holder top-20"></div>\n            </div>\n\n            <div id="generative-expand-result" style="display:none;flex-direction:column;flex-grow:1;align-items:center;padding:20px;background:linear-gradient(43deg, #ffffff00 0%, #ffffff11 100%);">\n                <label class="split" style="width: 100%; margin-bottom: 15px;">${(0, i.A)("generativeExpandPosition")} <span style="color:var(--text-dim);font-style: italic;">${(0, i.A)("generativeExpandDrag")}</span></label>\n                <div id="generative-expand-result-list" style="display:flex;align-items:center;justify-content:center;"></div>\n            </div>\n        `);
          if (!this.stage.fresco.isSelectedImageWithCanvas()) {
            console.error("No image layer selected");
            (0, a.Ay)("generative-expand-base").querySelectorAll(":scope > *").forEach(t => t.style.display = "none");
            (0, a.Ay)("generative-expand-no-layer").style.display = "block";
            this.disableApply();
            return;
          }
          (0, a.Ay)(`dialog-buttons${this.mid}`).insertBefore((0, a.T)("div", {
            id: "generative-expand-credit-count",
            className: "credit-meter",
            onclick: this.showCreditPop
          }, ""), (0, a.Ay)(`dialog-cancel${this.mid}`));
          (0, a.Ay)("generative-expand-preview-holder").addEventListener("pointerdown", this.previewDown, false);
          (0, a.Ay)("generative-expand-preset-list").childNodes.forEach(t => {
            t.addEventListener("click", t => {
              var e;
              if ((e = this.selectedPreset) !== null && e !== undefined) {
                e.classList.remove("selected");
              }
              let s = t.currentTarget;
              let i = s.getAttribute("data");
              s.classList.add("selected");
              this.setPreset(i);
              this.selectedPreset = s;
            });
          });
          (0, a.Ay)("generative-expand-constraint").addEventListener("click", this.changeContraint, false);
          (0, a.Ay)("toggle-generative-expand-constraint").addEventListener("click", this.changeContraint, false);
          (0, a.Ay)("generative-expand-execute").addEventListener("click", this.execute, false);
          this.selected = this.stage.fresco.getSelected();
          this.size = new o.A(this.selected.rect.width, this.selected.rect.height);
          this.pos = new h.A(0, 0);
          let e = (0, a.Ay)("generative-expand-width");
          e.addEventListener("input", this.widthHeightInputChange, false);
          e.addEventListener("change", this.widthHeightInputChange, false);
          e.addEventListener("blur", this.updateSizeInput, false);
          e.value = this.size.width.toString();
          let s = (0, a.Ay)("generative-expand-height");
          s.addEventListener("change", this.widthHeightInputChange, false);
          s.addEventListener("input", this.widthHeightInputChange, false);
          s.addEventListener("blur", this.updateSizeInput, false);
          s.value = this.size.height.toString();
          new c.A((0, a.Ay)("generative-expand-settings"));
          new c.A((0, a.Ay)("generative-expand-preview"));
          new c.A((0, a.Ay)("generative-expand-result"));
          this.renderCreditAmount();
          this.setPreview();
        }
      }
    }
