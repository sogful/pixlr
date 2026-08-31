window.__editorModules[6442] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(5432);
      var r = s(8870);
      var h = s(5328);
      var l = s(6939);
      var c = s(1168);
      var d = s(9754);
      var u = s(2443);
      class p extends l.A {
        constructor(t) {
          super((0, a.A)("titleRemoveNoise"), false);
          this.messy = false;
          this.model = "ultra";
          this.working = false;
          this.layerSelect = () => {
            this.reset();
            const t = this.selected === this.stage.fresco.getSelected();
            if (this.selected && !t) {
              this.apply();
            }
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("remove-noise-base").querySelectorAll(":scope > *").forEach(t => t.style.display = "none");
              (0, i.Ay)("remove-noise-no-layer").style.display = "block";
              return;
            }
            (0, i.Ay)("remove-noise-no-layer").style.display = "none";
            (0, i.Ay)("remove-noise-compare").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "replace", this.selected.canvas);
          };
          this.showCreditPop = () => {
            new d.A("credits");
          };
          this.renderCreditAmount = () => {
            if (!o.Ny) {
              (0, i.Ay)("remove-noise-credit-count").style.display = "none";
              return (0, a.A)("commonSignUpLogIn");
            }
            (0, i.Ay)("remove-noise-credit-count").innerHTML = `${o.Ny.credits.toString()}`;
          };
          this.execute = async () => {
            if (o.Ny) {
              if (o.Ny.credits) {
                if (!this.working) {
                  this.working = true;
                  (0, i.Ay)("remove-noise-execute").classList.add("working");
                  try {
                    const t = await (0, r.o)(this.scratch.canvas);
                    this.scratch.replaceCanvas(t);
                    this.stage.render();
                    document.dispatchEvent(new CustomEvent("notification", {
                      detail: "Voilà!"
                    }));
                    (0, i.Ay)("remove-noise-compare").style.display = "flex";
                    (0, i.Ay)(`dialog-apply${this.mid}`).classList.remove("disabled");
                    this.renderCreditAmount();
                  } catch (t) {
                    console.error(t);
                    document.dispatchEvent(new CustomEvent("notification", {
                      detail: (0, a.A)("genericError")
                    }));
                  } finally {
                    this.working = false;
                    (0, i.Ay)("remove-noise-execute").classList.remove("working");
                  }
                }
              } else if (o.Ny.subscription) {
                new d.A("credits");
              } else {
                new u.default("remove-noise", "credit");
              }
            } else {
              new c.A();
            }
          };
          this.compareDown = () => {
            this.scratch.setRenderMode("none");
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.compareUp = () => {
            this.scratch.setRenderMode("replace");
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.cancelClick = () => {
            document.dispatchEvent(new CustomEvent("tool-cancel"));
            document.dispatchEvent(new CustomEvent("select-tool", {
              detail: "ai"
            }));
          };
          this.apply = () => {
            const t = n.$z(this.selected.canvas);
            const e = this.selected.rect.clone();
            this.selected.canvas = this.scratch.canvas;
            this.stage.history.add({
              type: "bitmapSwitch",
              kind: "remove-noise",
              layer: this.selected,
              canvas: t,
              rect: e
            });
            this.cleanUp();
          };
          this.reset = () => {
            (0, i.Ay)("remove-noise-no-layer").style.display = "none";
            (0, i.Ay)(`dialog-apply${this.mid}`).classList.add("disabled");
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.cleanUp = () => {
            var t;
            if ((t = this.stage.fresco) !== null && t !== undefined) {
              t.removeScratch();
            }
            this.stage.render();
            document.removeEventListener("layer-select", this.layerSelect, false);
            (0, i.Ay)("remove-noise-execute").removeEventListener("click", this.execute, false);
            (0, i.Ay)("remove-noise-compare").removeEventListener("mousedown", this.compareDown, false);
            (0, i.Ay)("remove-noise-compare").removeEventListener("touchstart", this.compareDown, false);
            (0, i.Ay)("remove-noise-compare").removeEventListener("mouseup", this.compareUp, false);
            (0, i.Ay)("remove-noise-compare").removeEventListener("touchend", this.compareUp, false);
            (0, i.Ay)("remove-noise-credit-count").removeEventListener("click", this.showCreditPop, false);
            this.selected = undefined;
            this.scratch = undefined;
            super.cleanUp();
          };
          this.stage = t;
          this.dialog.style.maxWidth = "380px";
          this.setContent((0, i.T)("div", {
            id: "remove-noise-content",
            style: "flex:0 0 auto;width:100%;position:relative;overflow: hidden;"
          }, (0, i.T)("div", {
            id: "remove-noise-base",
            style: "padding:20px;overflow: hidden;"
          }, (0, i.T)("section", {
            id: "remove-noise-no-layer"
          }, (0, i.T)("span", {
            className: "tip top-20"
          }, (0, i.T)("img", {
            src: "assets/images/icon/tip-lock.svg",
            width: 16,
            height: 16,
            loading: "lazy",
            className: "tip-icon ic"
          }), (0, a.A)("genericNoImageMessage"))), (0, i.T)("div", {
            id: "remove-noise-desc",
            className: "tip",
            style: "gap: 2px;"
          }, (0, i.T)("img", {
            src: "assets/images/icon/tip-bulb.svg",
            width: 16,
            height: 16,
            loading: "lazy",
            className: "tip-icon ic"
          }), (0, i.T)("span", {}, (0, a.A)("removeNoiseDesc"))), (0, i.T)("div", {
            id: "remove-noise-execute",
            className: "button positive top-30",
            style: "width: 100%; height: 34px;"
          }, (0, i.T)("img", {
            src: "assets/images/tool/wand.svg",
            width: 18,
            height: 18,
            loading: "lazy"
          }), (0, a.A)("removeNoise") + " (1c)"), (0, i.T)("div", {
            id: "remove-noise-compare",
            style: "padding: 30px 40px 10px 40px"
          }, (0, i.T)("a", {
            className: "button outline flow-down w-100",
            tooltip: (0, a.A)("holdDown"),
            flow: "up"
          }, (0, i.T)("img", {
            src: "assets/images/icon/compare-small.svg",
            className: "ic",
            width: 16,
            height: 16,
            loading: "lazy"
          }), (0, a.A)("compare"))))));
          (0, i.Ay)(`dialog-buttons${this.mid}`).insertBefore((0, i.T)("div", {
            id: "remove-noise-credit-count",
            className: "credit-meter",
            onclick: this.showCreditPop
          }, ""), (0, i.Ay)(`dialog-cancel${this.mid}`));
          document.addEventListener("layer-select", this.layerSelect, false);
          (0, i.Ay)("remove-noise-execute").addEventListener("click", this.execute, false);
          (0, i.Ay)("remove-noise-compare").addEventListener("mousedown", this.compareDown, false);
          (0, i.Ay)("remove-noise-compare").addEventListener("touchstart", this.compareDown, false);
          (0, i.Ay)("remove-noise-compare").addEventListener("mouseup", this.compareUp, false);
          (0, i.Ay)("remove-noise-compare").addEventListener("touchend", this.compareUp, false);
          new h.A((0, i.Ay)("remove-noise-content"));
          this.layerSelect();
          this.renderCreditAmount();
        }
      }
    }
