window.__editorModules[8245] = function (t, e, s) {
      s.d(e, {
        A: () => v
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(651);
      var h = s(7135);
      var l = s(6050);
      var c = s(5432);
      var d = s(5328);
      var u = s(6939);
      var p = s(1168);
      var g = s(9754);
      var m = s(7611);
      var y = s(2443);
      class v extends u.A {
        constructor(t) {
          super((0, a.A)("titleSuperScale"), false);
          this.messy = false;
          this.working = false;
          this.layerSelect = () => {
            this.reset();
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("super-scale-no-layer").style.display = "block";
              (0, i.Ay)("super-scale-too-large").style.display = "none";
              (0, i.Ay)("super-scale-settings").style.display = "none";
              (0, i.Ay)("super-scale-desc").style.display = "none";
              return;
            }
            this.selected = this.stage.fresco.getSelected();
            this.size = new r.A(this.selected.rect.width, this.selected.rect.height);
            this.pos = new l.A(0, 0);
            if (this.selected.canvas.width * 2 > 5000 || this.selected.canvas.height * 2 > 5000) {
              (0, i.Ay)("super-scale-settings").style.display = "none";
              (0, i.Ay)("super-scale-too-large").style.display = "block";
              (0, i.Ay)("super-scale-no-layer").style.display = "none";
              (0, i.Ay)("super-scale-desc").style.display = "none";
              return;
            }
            (0, i.Ay)("super-scale-2-label").innerText = (0, a.A)("scale") + " 2x - (" + this.selected.canvas.width * 2 + " x " + this.selected.canvas.height * 2 + " px)";
            (0, i.Ay)("super-scale-4-label").innerText = (0, a.A)("scale") + " 4x - (" + this.selected.canvas.width * 4 + " x " + this.selected.canvas.height * 4 + " px)";
            (0, i.Ay)("super-scale-8-label").innerText = (0, a.A)("scale") + " 8x - (" + this.selected.canvas.width * 8 + " x " + this.selected.canvas.height * 8 + " px)";
            let t = 25000000;
            (0, i.Ay)("super-scale-2-label").classList.toggle("disabled", this.selected.canvas.width * 2 * (this.selected.canvas.height * 2) > t);
            (0, i.Ay)("super-scale-4-label").classList.toggle("disabled", this.selected.canvas.width * 4 * (this.selected.canvas.height * 4) > t);
            (0, i.Ay)("super-scale-8-label").classList.toggle("disabled", this.selected.canvas.width * 8 * (this.selected.canvas.height * 8) > t);
          };
          this.showCreditPop = () => {
            new g.A("credits");
          };
          this.renderCreditAmount = () => {
            if (!c.Ny) {
              (0, i.Ay)("super-scale-credit-count").style.display = "none";
              return (0, a.A)("commonSignUpLogIn");
            }
            (0, i.Ay)("super-scale-credit-count").innerHTML = `${c.Ny.credits.toString()}`;
          };
          this.onClickPreset = t => {
            var e;
            if ((e = this.selectedPreset) !== null && e !== undefined) {
              e.classList.remove("selected");
            }
            let s = t.currentTarget;
            let i = s.getAttribute("value");
            s.classList.add("selected");
            this.setPreset(i);
            this.selectedPreset = s;
          };
          this.setPreset = t => {
            var e;
            if (t !== ((e = this.selectedPreset) === null || e === undefined ? undefined : e.getAttribute("value"))) {
              this.reset();
            }
            (0, i.Ay)(`dialog-apply${this.mid}`).classList.remove("disabled");
            const s = +t;
            this.size.width = this.selected.rect.width * s;
            this.size.height = this.selected.rect.height * s;
            this.pos.x = Math.round((this.size.width - this.selected.rect.width) * 0.5);
            this.pos.y = Math.round((this.size.height - this.selected.rect.height) * 0.5);
          };
          this.execute = async () => {
            if (c.Ny) {
              if (c.Ny.credits) {
                if (!this.working) {
                  (0, h.A)("super-scale");
                  this.working = true;
                  (0, i.Ay)(`dialog-apply${this.mid}`).classList.add("working");
                  (0, i.Ay)("super-scale-content").classList.add("disabled");
                  try {
                    let t = this.selected;
                    const e = Number(document.querySelector("input[name=\"super-scale-size\"]:checked").value);
                    let s = await (0, m.i)(t.canvas, e);
                    this.result = s;
                    if (this.stage.fresco.layers[0] === t && t.canvas.width === this.stage.fresco.width && t.canvas.height === this.stage.fresco.height) {
                      const e = new r.A(this.stage.fresco.width, this.stage.fresco.height);
                      if (e.width !== s.width || s.width !== s.height) {
                        const t = this.stage.fresco.layers.map(t => {
                          t.syncRequested = new Date();
                          return t.clone(true);
                        });
                        this.stage.fresco.resize(s.width, s.height, true);
                        this.stage.history.add({
                          type: "pageResize",
                          size: e,
                          layers: t
                        });
                      }
                      t.canvas = s;
                      t.rect = new o.A(t.rect.x, t.rect.y, s.width, s.height);
                    } else {
                      const e = t.rect.clone();
                      const i = n.$z(t.canvas);
                      this.stage.history.add({
                        type: "bitmapSwitch",
                        kind: "super-scale",
                        layer: t,
                        rect: e,
                        canvas: i
                      });
                      t.canvas = s;
                      t.rect = new o.A(t.rect.x, t.rect.y, s.width, s.height);
                    }
                    document.dispatchEvent(new CustomEvent("reset-viewport"));
                    document.dispatchEvent(new CustomEvent("layerlist-update"));
                    document.dispatchEvent(new CustomEvent("notification", {
                      detail: (0, a.A)("done")
                    }));
                    this.stage.render();
                  } catch (t) {
                    document.dispatchEvent(new CustomEvent("notification", {
                      detail: (0, a.A)("genericError")
                    }));
                    console.error(t);
                  } finally {
                    this.working = false;
                    (0, i.Ay)(`dialog-apply${this.mid}`).classList.remove("working");
                    (0, i.Ay)("super-scale-content").classList.remove("disabled");
                    this.cancel();
                  }
                }
              } else if (c.Ny.subscription) {
                new g.A("credits");
              } else {
                new y.default("super-scale", "credit");
              }
            } else {
              new p.A();
            }
          };
          this.apply = () => {
            this.execute();
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.reset = () => {
            (0, i.Ay)("super-scale-no-layer").style.display = "none";
            (0, i.Ay)("super-scale-too-large").style.display = "none";
            (0, i.Ay)("super-scale-settings").style.display = "block";
            (0, i.Ay)("super-scale-desc").style.display = "block";
            (0, i.Ay)(`dialog-apply${this.mid}`).classList.add("disabled");
            this.result = undefined;
          };
          this.cleanUp = () => {
            document.removeEventListener("layer-select", this.layerSelect, false);
            (0, i.Ay)("super-scale-credit-count").removeEventListener("click", this.showCreditPop, false);
            (0, i.Ay)("super-scale-preset-list").childNodes.forEach(t => {
              t.removeEventListener("click", this.onClickPreset, false);
            });
            this.selected = undefined;
            this.selectedPreset = undefined;
            super.cleanUp();
          };
          this.stage = t;
          this.dialog.style.maxWidth = "380px";
          this.setContent(`\n            <div id="super-scale-content" style="flex:0 0 auto;width:100%;position:relative;overflow: hidden;">\n                <div style="padding:10px 10px 0 10px;overflow: hidden;">\n\n                    <section id="super-scale-no-layer">\n                        <span class="tip top-20"><img src="assets/images/icon/tip-lock.svg" width="16" height="16" loading="lazy" class="tip-icon ic"/>${(0, a.A)("genericNoImageMessage")}</span>\n                    </section>\n\n                    <section id="super-scale-too-large">\n                        <span class="tip top-20"><img src="assets/images/icon/tip-lock.svg" width="16" height="16" loading="lazy" class="tip-icon ic"/>${(0, a.A)("imageTooLargeToScale")}</span>\n                    </section>\n\n                    <div id="super-scale-desc" class="tip flex" style="gap: 2px;"><img src="assets/images/icon/tip-bulb.svg" width="16" height="16" loading="lazy" class="tip-icon ic"/>\n                        <span>${(0, a.A)("scaleUpDescription")}</span>\n                    </div>\n\n                    <div id="super-scale-settings" class="top-20">\n                        <label>${(0, a.A)("method")}</label>\n                        <div id="super-scale-preset-list" class="switch-field column upscale top-5">\n                            <input type="radio" id="super-scale-2" name="super-scale-size" value="2" /><label id="super-scale-2-label" for="super-scale-2">2x</label>\n                            // <input type="radio" id="super-scale-3" name="super-scale-size" value="3" /><label id="super-scale-3-label" for="super-scale-3">3x</label>\n                            <input type="radio" id="super-scale-4" name="super-scale-size" value="4" /><label id="super-scale-4-label" for="super-scale-4">4x</label>\n                            <input type="radio" id="super-scale-8" name="super-scale-size" value="6" /><label id="super-scale-8-label" for="super-scale-8">6x</label>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div> \n        `);
          (0, i.Ay)(`dialog-buttons${this.mid}`).insertBefore((0, i.T)("div", {
            id: "super-scale-credit-count",
            className: "credit-meter",
            onclick: this.showCreditPop
          }, ""), (0, i.Ay)(`dialog-cancel${this.mid}`));
          (0, i.Ay)(`dialog-apply${this.mid}`).innerHTML = `${(0, a.A)("upscale")} (1c)`;
          document.addEventListener("layer-select", this.layerSelect, false);
          (0, i.Ay)("super-scale-preset-list").childNodes.forEach(t => {
            t.addEventListener("click", this.onClickPreset);
          });
          new d.A((0, i.Ay)("super-scale-content"));
          this.layerSelect();
          this.renderCreditAmount();
        }
      }
    }
