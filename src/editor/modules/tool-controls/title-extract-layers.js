window.__editorModules[9555] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5432);
      var o = s(5328);
      var r = s(6939);
      var h = s(1168);
      var l = s(9754);
      var c = s(2443);
      var d = s(1205);
      var u = s(8527);
      class p extends r.A {
        constructor(t) {
          super((0, a.A)("titleExtractLayers"), false);
          this.working = false;
          this.layerSelect = () => {
            this.selected = undefined;
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("extract-layers-no-layer").style.display = "block";
              (0, i.Ay)("extract-layers-desc").style.display = "none";
              (0, i.Ay)("extract-layers-execute").style.display = "none";
              return;
            }
            (0, i.Ay)("extract-layers-no-layer").style.display = "none";
            (0, i.Ay)("extract-layers-desc").style.display = "";
            (0, i.Ay)("extract-layers-execute").style.display = "";
            this.selected = this.stage.fresco.getSelected();
          };
          this.showCreditPop = () => {
            new l.A("credits");
          };
          this.renderCreditAmount = () => {
            if (n.Ny) {
              (0, i.Ay)("extract-layers-credit-count").innerHTML = n.Ny.credits.toString();
            } else {
              (0, i.Ay)("extract-layers-credit-count").style.display = "none";
            }
          };
          this.execute = async () => {
            var e;
            var s;
            if (n.Ny) {
              if (!n.Ny.credits || n.Ny.credits < 40) {
                if (n.Ny.subscription) {
                  new l.A("credits");
                } else {
                  new c.default("extract-layers", "credit");
                }
              } else if (!this.working && this.selected?.canvas) {
                this.working = true;
                (0, i.Ay)("extract-layers-execute").classList.add("working");
                this.loader = new u.A((0, a.A)("titleExtractLayers"), 200000);
                try {
                  await (0, d.A)(this.stage, this.selected);
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: "Layers extracted!"
                  }));
                  this.renderCreditAmount();
                  this.cleanUp();
                } catch (o) {
                  console.error(o);
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: (0, a.A)("genericError")
                  }));
                } finally {
                  if ((e = this.loader) !== null && e !== undefined) {
                    e.done();
                  }
                  this.working = false;
                  if ((s = (0, i.Ay)("extract-layers-execute")) !== null && s !== undefined) {
                    s.classList.remove("working");
                  }
                }
              }
            } else {
              new h.A();
            }
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.cleanUp = () => {
            var t;
            var e;
            var s;
            if ((t = this.loader) !== null && t !== undefined) {
              t.done();
            }
            document.removeEventListener("layer-select", this.layerSelect, false);
            if ((e = (0, i.Ay)("extract-layers-execute")) !== null && e !== undefined) {
              e.removeEventListener("click", this.execute, false);
            }
            if ((s = (0, i.Ay)("extract-layers-credit-count")) !== null && s !== undefined) {
              s.removeEventListener("click", this.showCreditPop);
            }
            this.selected = undefined;
            super.cleanUp();
          };
          this.stage = t;
          this.dialog.style.maxWidth = "380px";
          this.setContent(`\n            <div id="extract-layers-content" style="flex:0 0 auto;width:100%;position:relative;overflow:hidden;">\n                <div style="padding:20px;overflow:hidden;">\n\n                    <section id="extract-layers-no-layer">\n                        <span class="tip top-20"><img src="assets/images/icon/tip-lock.svg" width="16" height="16" loading="lazy" class="tip-icon ic"/>${(0, a.A)("genericNoImageMessage")}</span>\n                    </section>\n\n                    <div id="extract-layers-desc" class="tip" style="gap:2px;"><img src="assets/images/icon/tip-bulb.svg" width="16" height="16" loading="lazy" class="tip-icon ic"/>\n                        <span>${(0, a.A)("extractLayersDesc")} Processing may take up to 3 minutes.</span>\n                    </div>\n\n                    <div id="extract-layers-execute" class="button positive top-20" style="width:100%;height:34px;"><img src="assets/images/tool/wand.svg" width="18" height="18" loading="lazy">${(0, a.A)("titleExtractLayers")} (40c)</div>\n\n                    <div id="extract-layers-progress" class="top-20" style="display:none;">\n                        <div style="height:6px;border-radius:3px;background:var(--component-dim);overflow:hidden;">\n                            <div id="extract-layers-progress-fill" style="height:100%;width:0%;border-radius:3px;background:var(--accent-color);transition:width 5s linear;"></div>\n                        </div>\n                        <div id="extract-layers-progress-label" style="text-align:center;font-size:12px;opacity:0.6;padding-top:6px;">0%</div>\n                    </div>\n\n                </div>\n            </div>\n        `);
          (0, i.Ay)(`dialog-apply${this.mid}`).style.display = "none";
          (0, i.Ay)(`dialog-buttons${this.mid}`).insertBefore(document.createElement("div"), (0, i.Ay)(`dialog-cancel${this.mid}`));
          const e = (0, i.Ay)(`dialog-buttons${this.mid}`).children[0];
          e.id = "extract-layers-credit-count";
          e.className = "credit-meter";
          e.addEventListener("click", this.showCreditPop);
          document.addEventListener("layer-select", this.layerSelect, false);
          (0, i.Ay)("extract-layers-execute").addEventListener("click", this.execute, false);
          new o.A((0, i.Ay)("extract-layers-content"));
          this.layerSelect();
          this.renderCreditAmount();
        }
      }
    }
