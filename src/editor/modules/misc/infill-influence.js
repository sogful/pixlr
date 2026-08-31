window.__editorModules[5417] = function (t, e, s) {
      s.d(e, {
        A: () => v
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(4947);
      var o = s(5699);
      var r = s(3244);
      var h = s(3517);
      var l = s(5432);
      var c = s(6939);
      var d = s(1168);
      var u = s(9754);
      var p = s(7732);
      var g = s(2443);
      var m = s(98);
      const y = 1024;
      class v extends c.A {
        constructor(t) {
          super((0, i.A)("titleAiInfill"), false);
          this.dirtyMask = true;
          this.working = false;
          this.renderCreditAmount = () => {
            if (l.Ny) {
              (0, a.Ay)("generative-fill-credit-count").innerHTML = l.Ny.credits.toString();
            } else {
              (0, a.Ay)("generative-fill-execute").innerText = (0, i.A)("commonSignUpLogIn");
              (0, a.Ay)("generative-fill-credit-count").style.display = "none";
            }
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.apply = () => {
            const t = (0, a.Ay)("infill-newlayer").checked;
            const e = o.tm(this.result, this.imageRect.width, this.imageRect.height);
            if (t) {
              const t = new p.A(o.Os(), this.prompt.value.substring(0, 25) + "..", e, this.maskRect.clone());
              this.stage.fresco.addLayer(t);
              this.stage.history.add({
                type: "addLayer",
                kind: "aiinfill",
                layer: t
              });
            } else {
              const t = this.selected;
              let s = o.ON(t.canvas, this.imageRect.rebase(t.rect.x, t.rect.y));
              const i = o.$z(this.selected.mask);
              const a = t.rect.clone();
              t.extendCanvas(this.imageRect);
              t.canvas.getContext("2d").drawImage(e, 0, 0, this.imageRect.width, this.imageRect.height, this.imageRect.x, this.imageRect.y, this.imageRect.width, this.imageRect.height);
              this.stage.history.add({
                type: "bitmapChange",
                kind: "aiinfill",
                layer: this.selected,
                patchRect: this.imageRect.rebase(this.selected.rect.x, this.selected.rect.y),
                patch: s,
                rect: a,
                mask: i
              });
            }
            document.dispatchEvent(new CustomEvent("layer-select"));
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            this.cleanUp();
          };
          this.execute = async () => {
            if (l.Ny) {
              if (l.Ny.credits) {
                try {
                  this.working = true;
                  this.updateButtonStatus();
                  (0, a.Ay)("infill-working").style.display = "flex";
                  let t = this.renderMask();
                  const e = new FormData();
                  e.set("prompt", this.prompt.value);
                  e.set("image", await o.PG(this.baseImage));
                  e.set("mask", await o.PG(t));
                  let s = "/api/ai/inpaint";
                  if (m.Ay?.token) {
                    s += `?token=${m.Ay.token}`;
                  }
                  const i = await fetch(s, {
                    method: "post",
                    body: e
                  });
                  const r = await i.json();
                  if (r.status == 0) {
                    return;
                  }
                  const h = await o.$e("data:image/jpg;base64," + r.data);
                  const l = h.getContext("2d");
                  l.globalCompositeOperation = "destination-in";
                  l.drawImage(this.baseImage, 0, 0);
                  l.globalCompositeOperation = "source-over";
                  this.result = h;
                  this.renderPreview(this.result);
                  n.W2().then(() => {
                    this.renderCreditAmount();
                  });
                } finally {
                  (0, a.Ay)("infill-working").style.display = "none";
                  (0, a.Ay)("generative-fill-execute").classList.remove("disabled");
                  this.working = false;
                  this.updateButtonStatus();
                }
              } else if (l.Ny.subscription) {
                new u.A("credits");
              } else {
                new g.default("generative-fill", "credit");
              }
            } else {
              new d.A();
            }
          };
          this.updateButtonStatus = () => {
            if (this.working || !this.result) {
              this.disableApply();
            } else {
              this.enableApply();
            }
            if (this.working || this.prompt.value.length === 0) {
              (0, a.Ay)("generative-fill-execute").classList.add("disabled");
            } else {
              (0, a.Ay)("generative-fill-execute").classList.remove("disabled");
            }
          };
          this.dialog.style.width = "auto";
          this.dialog.style.maxWidth = "unset";
          this.stage = t;
          this.selected = this.stage.fresco.getSelected();
          this.bounds = this.stage.fresco.selection.bounds;
          const e = Math.max(this.bounds.width, this.bounds.height);
          this.maskRect = new r.A(0, 0, e, e).pad(50);
          this.maskRect.setCenter(this.bounds.center());
          this.imageRect = this.maskRect.rebase(this.selected.rect.x, this.selected.rect.y);
          this.baseImage = o.VI(y, y);
          this.mask = o.VI(y, y);
          this.baseImage.getContext("2d").drawImage(this.selected.canvas, this.imageRect.x, this.imageRect.y, this.imageRect.width, this.imageRect.height, 0, 0, this.baseImage.width, this.baseImage.height);
          this.preview = o.VI(y, y);
          this.preview.style.width = "356px";
          this.preview.style.height = "356px";
          this.previewContext = this.preview.getContext("2d");
          this.prompt = (0, a.T)("textarea", {
            rows: 3,
            placeholder: (0, i.A)("aiInfillPrompt"),
            style: {
              width: "100%"
            }
          });
          this.setContent((0, a.T)("div", {
            style: "display:flex; gap: 10px"
          }, (0, a.T)("div", {
            style: "width: 250px"
          }, this.prompt, (0, a.T)("div", {
            id: "infill-influence",
            className: "range-box top-15"
          }), (0, a.T)("input", {
            type: "checkbox",
            id: "infill-newlayer",
            checked: true
          }), (0, a.T)("label", {
            className: "top-10 switch",
            htmlFor: "infill-newlayer"
          }, (0, i.A)("aiInfillNewLayer"), (0, a.T)("span")), (0, a.T)("div", {
            className: "top-35",
            style: "display:flex;flex-direction:column; padding-top: 35px"
          }, (0, a.T)("a", {
            id: "generative-fill-execute",
            className: "button positive",
            onclick: () => this.execute()
          }, (0, i.A)("aiInfillGenerate") + " (1c)"))), (0, a.T)("div", (0, a.T)("div", {
            className: "dialog-loading",
            style: {
              border: "2px solid var(--component-highlight)",
              borderRadius: "4px",
              overflow: "hidden",
              position: "relative"
            }
          }, this.preview, (0, a.T)("div", {
            id: "infill-working",
            className: "message",
            style: "background-color: #424549e3; display: none"
          }, (0, a.T)("label", {
            className: "working"
          }, (0, i.A)("working")))))));
          (0, a.Ay)("dialog-buttons" + this.mid).prepend((0, a.T)("div", {
            id: "generative-fill-credit-count",
            className: "credit-meter",
            onclick: () => {
              new u.A("credits");
            }
          }));
          this.influence = new h.A("infill-influence", {
            defaultValue: 1,
            onChange: () => {
              this.dirtyMask = true;
            },
            label: (0, i.A)("aiInfillInfluence"),
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 100) / 100
          });
          this.prompt.addEventListener("keyup", this.updateButtonStatus);
          this.updateButtonStatus();
          this.renderPreview(this.baseImage);
          this.position();
          this.renderCreditAmount();
        }
        renderMask() {
          if (!this.dirtyMask) {
            return this.mask;
          }
          const t = this.mask.getContext("2d");
          t.clearRect(0, 0, y, y);
          t.fillStyle = "white";
          t.fillRect(0, 0, y, y);
          t.globalAlpha = this.influence.getValue();
          t.drawImage(this.stage.fresco.selection.mask, this.maskRect.x, this.maskRect.y, this.maskRect.width, this.maskRect.height, 0, 0, y, y);
          return this.mask;
        }
        renderPreview(t) {
          this.previewContext.globalAlpha = 1;
          this.previewContext.clearRect(0, 0, y, y);
          this.previewContext.drawImage(this.stage.fresco.selection.mask, this.maskRect.x, this.maskRect.y, this.maskRect.width, this.maskRect.height, 0, 0, y, y);
          this.previewContext.globalCompositeOperation = "xor";
          this.previewContext.fillRect(0, 0, y, y);
          this.previewContext.globalAlpha = 0.3;
          this.previewContext.globalCompositeOperation = "copy";
          this.previewContext.drawImage(this.preview, 0, 0);
          this.previewContext.globalAlpha = 1;
          this.previewContext.globalCompositeOperation = "destination-over";
          this.previewContext.drawImage(t, 0, 0);
        }
      }
    }
