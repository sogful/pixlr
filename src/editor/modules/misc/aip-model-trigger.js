window.__editorModules[3461] = function (t, e, s) {
      s.d(e, {
        A: () => x
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(5699);
      var o = s(4947);
      var r = s(3244);
      var h = s(6050);
      var l = s(1168);
      var c = s(9754);
      var d = s(2443);
      var u = s(5432);
      var p = s(98);
      var g = s(7578);
      var m = s(6361);
      var y = s(7014);
      var v = s(6494);
      var f = s(7135);
      const w = ["1:1", "16:9", "9:16", "4:3", "3:4"];
      class x {
        constructor(t, e = {}) {
          this.quickStep = null;
          this.modelDropdownOpen = false;
          this.back = null;
          this.aspectTrigger = null;
          this.aspectDropdown = null;
          this.aspectDropdownOpen = false;
          this.currentMode = "instruct";
          this.selectedTier = "ultra";
          this.selectedAspect = "1:1";
          this.availableModels = [];
          this.results = [];
          this.selectedResultIndex = 0;
          this.working = false;
          this.isOpen = false;
          this.previewOriginal = null;
          this.moved = false;
          this.dragged = false;
          this.dragOrigin = {
            x: 0,
            y: 0
          };
          this.closedCenterX = 0;
          this.build = () => {
            var t;
            this.modelTrigger = (0, a.T)("div", {
              className: "aip-model-trigger",
              onclick: () => this.toggleModelDropdown()
            });
            this.modelDropdown = (0, a.T)("div", {
              className: "aip-model-dropdown"
            });
            document.addEventListener("click", t => {
              if (!!this.modelDropdownOpen && !this.widget.contains(t.target) && !this.modelDropdown.contains(t.target)) {
                this.closeModelDropdown();
              }
              if (!!this.aspectDropdownOpen && !this.widget.contains(t.target) && !this.aspectDropdown.contains(t.target)) {
                this.closeAspectDropdown();
              }
            }, true);
            this.creditMeter = (0, a.T)("div", {
              className: "credit-meter",
              onclick: () => new c.A("credits")
            });
            this.promptInput = (0, a.T)("textarea", {
              className: "aip-textarea",
              placeholder: (0, i.A)("commonPromptDescribeEdit"),
              rows: 2
            });
            this.promptInput.addEventListener("keydown", t => {
              if (t.key === "Enter" && !t.shiftKey) {
                t.preventDefault();
                this.generate();
              }
            });
            this.generateBtn = (0, a.T)("a", {
              className: "button positive small",
              onclick: () => this.generate()
            }, (0, i.A)("commonGenerate"));
            const e = (0, a.T)("div", {
              className: "aip-model-picker",
              style: "margin-right:auto;"
            }, this.modelTrigger);
            if (this.quickActions.length > 0) {
              this.back = (0, a.T)("div", {
                className: "aip-back",
                onclick: () => this.showQuickStep()
              });
              this.back.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><path d=\"M9 2L4 7l5 5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\"/></svg>";
            }
            const s = (0, a.T)("div", {
              className: "aip-row"
            });
            s.appendChild(this.promptInput);
            this.aspectTrigger = (0, a.T)("div", {
              className: "aip-aspect-trigger",
              style: {
                display: "none"
              },
              onclick: () => this.toggleAspectDropdown()
            }, (0, a.T)("span", {}, this.selectedAspect), (0, a.T)("span", {
              className: "aip-chevron"
            }, "▾"));
            this.aspectDropdown = (0, a.T)("div", {
              className: "aip-aspect-dropdown"
            });
            for (const i of w) {
              this.aspectDropdown.appendChild((0, a.T)("div", {
                className: "aip-aspect-option" + (i === this.selectedAspect ? " selected" : ""),
                onclick: () => this.selectAspect(i)
              }, i));
            }
            this.promptStep = (0, a.T)("div", {
              className: "aip-content",
              style: {
                display: this.quickActions.length > 0 ? "none" : ""
              }
            }, s, (0, a.T)("div", {
              className: "aip-row"
            }, this.aspectTrigger, e, this.creditMeter, this.generateBtn));
            this.carousel = (0, a.T)("div", {
              className: "pe-carousel"
            });
            this.acceptBtn = (0, a.T)("a", {
              className: "button positive",
              onclick: () => this.keep()
            }, (0, i.A)("commonAccept"));
            const n = (0, a.T)("a", {
              className: "button negative",
              onclick: () => this.discard()
            }, (0, i.A)("cancel"));
            this.resultsStep = (0, a.T)("div", {
              className: "aip-content",
              style: {
                display: "none"
              }
            }, (0, a.T)("div", {
              className: "aip-row"
            }, this.carousel, (0, a.T)("div", {
              className: "aip-actions"
            }, this.acceptBtn, n)));
            if (this.quickActions.length > 0) {
              this.quickStep = (0, a.T)("div", {
                className: "aip-quick-step"
              });
              for (const s of this.quickActions) {
                const t = (0, a.T)("div", {
                  className: "aip-quick-action",
                  onclick: () => this.handleQuickAction(s)
                }, (0, a.T)("img", {
                  src: s.icon,
                  width: 14,
                  height: 14,
                  className: "ic"
                }), (0, a.T)("span", {}, s.label));
                this.quickStep.appendChild(t);
              }
              const t = (0, a.T)("div", {
                className: "aip-quick-action aip-quick-close",
                onclick: () => this.close()
              });
              t.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><path d=\"M9 2L4 7l5 5\" stroke=\"currentColor\" stroke-width=\"1.5\" fill=\"none\" stroke-linecap=\"round\"/></svg>";
              this.quickStep.appendChild(t);
              const e = (0, a.T)("div", {
                className: "aip-quick-action aip-quick-more",
                onclick: t => {
                  t.stopPropagation();
                  const s = e.getBoundingClientRect();
                  new g.Ay(new h.A(s.right, s.top), [new g.kt((0, i.A)("commonMinimize"), () => this.close()), new g.kt((0, i.A)("commonHide"), () => (0, p.ZC)("hideAiPrompt", true)), new g.kt((0, i.A)("buyAddOns"), () => new c.A("credits"))], true);
                }
              });
              e.innerHTML = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\"><circle cx=\"3\" cy=\"7\" r=\"1.3\" fill=\"currentColor\"/><circle cx=\"7\" cy=\"7\" r=\"1.3\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"7\" r=\"1.3\" fill=\"currentColor\"/></svg>";
              this.quickStep.appendChild(e);
            }
            this.content = (0, a.T)("div", {
              className: "aip-panel"
            }, ...(this.quickStep ? [this.quickStep] : []), this.promptStep, this.resultsStep);
            const o = (0, a.T)("div", {
              className: "aip-icon",
              tooltip: (0, i.A)("commonTapToActivate"),
              flow: "up"
            }, (0, a.T)("div", {
              className: "aip-ring"
            }, (0, a.T)("img", {
              src: "assets/images/tool/ai.svg",
              className: "ic",
              alt: "Ai assitent"
            })));
            (0, a.Bb)(o, t => {
              this.dragged = false;
              const e = this.widget.getBoundingClientRect();
              const s = this.container.getBoundingClientRect();
              this.dragOrigin = {
                x: t.x - (e.left - s.left),
                y: t.y - (e.top - s.top)
              };
            }, t => {
              this.dragged = true;
              this.moved = true;
              const e = this.container.offsetWidth;
              const s = this.container.offsetHeight;
              const i = this.widget.offsetWidth;
              const a = this.widget.offsetHeight;
              const n = Math.max(0, Math.min(t.x - this.dragOrigin.x, e - i));
              const o = Math.max(0, Math.min(t.y - this.dragOrigin.y, s - a));
              this.widget.style.left = n + "px";
              this.widget.style.top = o + "px";
            }, t => {
              if (!this.dragged) {
                if (this.isOpen) {
                  this.close();
                } else {
                  this.open();
                }
              }
            });
            this.widget = (0, a.T)("div", {
              className: "aip"
            }, o, ...(this.back ? [this.back] : []), this.content);
            this.container.appendChild(this.widget);
            const r = document.getElementById("workspace") || document.body;
            r.appendChild(this.modelDropdown);
            r.appendChild(this.aspectDropdown);
            requestAnimationFrame(() => this.centerWidget());
            this.renderCreditAmount();
            this.loadModels();
            window.addEventListener("resize", () => this.clampToContainer());
            if (p.Ay.hideAiPrompt || ((t = p.Ay.disabledTools) === null || t === undefined ? undefined : t.includes("ai"))) {
              this.widget.style.display = "none";
            }
            document.addEventListener("user-setting-updated", t => {
              if (t.detail === "hideAiPrompt") {
                this.widget.style.display = p.Ay.hideAiPrompt ? "none" : "";
              }
            });
          };
          this.handleQuickAction = async t => {
            if (u.Ny) {
              this.stage.history.commitTransaction();
              if (t.mode) {
                (0, f.A)("aip-mode", t.mode);
                this.setMode(t.mode);
                this.showPromptStep();
                requestAnimationFrame(() => this.promptInput.focus());
              } else if (t.run) {
                if (this.working) {
                  return;
                }
                (0, f.A)("aip-action", t.label);
                this.working = true;
                const s = (0, a.T)("div", {
                  className: "modal"
                });
                if (!t.deferLoading) {
                  document.body.appendChild(s);
                  document.dispatchEvent(new CustomEvent("loading", {
                    detail: "Processing..."
                  }));
                }
                try {
                  await t.run(this);
                } catch (e) {
                  console.error(e);
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: "Action failed. Please try again."
                  }));
                } finally {
                  this.working = false;
                  document.dispatchEvent(new CustomEvent("loading", {
                    detail: "stop"
                  }));
                  s.remove();
                }
              }
            } else {
              new l.A({
                callback: window.location.href
              });
            }
          };
          this.setMode = t => {
            if (this.currentMode !== t) {
              this.currentMode = t;
              if (t === "generate") {
                this.promptInput.placeholder = (0, i.A)("commonPromptDescribeGenerate");
                if (this.aspectTrigger) {
                  this.aspectTrigger.style.display = "";
                }
              } else {
                this.promptInput.placeholder = (0, i.A)("commonPromptDescribeEdit");
                if (this.aspectTrigger) {
                  this.aspectTrigger.style.display = "none";
                }
              }
              this.loadModels();
              this.updateState();
            }
          };
          this.selectAspect = t => {
            var e;
            this.selectedAspect = t;
            if (this.aspectTrigger) {
              this.aspectTrigger.querySelector("span").textContent = t;
            }
            if ((e = this.aspectDropdown) !== null && e !== undefined) {
              e.querySelectorAll(".aip-aspect-option").forEach(e => {
                e.classList.toggle("selected", e.textContent === t);
              });
            }
            this.closeAspectDropdown();
          };
          this.toggleAspectDropdown = () => this.aspectDropdownOpen ? this.closeAspectDropdown() : this.openAspectDropdown();
          this.openAspectDropdown = () => {
            this.aspectDropdownOpen = true;
            const t = this.aspectTrigger.getBoundingClientRect();
            this.aspectDropdown.style.left = t.left + "px";
            this.aspectDropdown.style.bottom = window.innerHeight - t.top + 6 + "px";
            this.aspectDropdown.style.top = "";
            this.aspectDropdown.classList.add("open");
          };
          this.closeAspectDropdown = () => {
            var t;
            this.aspectDropdownOpen = false;
            if ((t = this.aspectDropdown) !== null && t !== undefined) {
              t.classList.remove("open");
            }
          };
          this.centerWidget = t => {
            const e = this.container.getBoundingClientRect();
            const s = e.width || window.innerWidth;
            const i = e.height || window.innerHeight;
            const a = t ?? this.widget.offsetWidth;
            this.widget.style.left = Math.max(8, (s - a) / 2) + "px";
            this.widget.style.top = Math.max(8, i - 56 - 100) + "px";
          };
          this.clampToContainer = () => {
            const t = this.container.getBoundingClientRect();
            const e = this.widget.getBoundingClientRect();
            const s = t.width || window.innerWidth;
            const i = t.height || window.innerHeight;
            let a = e.left - t.left;
            let n = e.top - t.top;
            a = Math.max(0, Math.min(a, s - e.width));
            n = Math.max(0, Math.min(n, i - e.height));
            this.widget.style.left = a + "px";
            this.widget.style.top = n + "px";
          };
          this.open = () => {
            this.isOpen = true;
            this.closedCenterX = (parseFloat(this.widget.style.left) || 0) + 28;
            const t = this.container.offsetWidth;
            const e = this.closedCenterX / t;
            this.widget.classList.add("open");
            if (this.quickActions.length > 0) {
              this.showQuickStep();
            }
            requestAnimationFrame(() => {
              const s = this.widget.offsetWidth;
              this.widget.style.left = e <= 0.25 ? Math.max(0, this.closedCenterX - 28) + "px" : e >= 0.75 ? Math.max(0, this.closedCenterX + 28 - s) + "px" : Math.max(0, Math.min(this.closedCenterX - s / 2, t - s)) + "px";
              this.clampToContainer();
              if (!this.quickActions.length) {
                this.promptInput.focus();
              }
            });
          };
          this.close = () => {
            this.isOpen = false;
            this.widget.classList.remove("open", "quick", "results");
            this.widget.style.left = this.closedCenterX - 28 + "px";
          };
          this.showQuickStep = () => {
            if (this.quickStep) {
              this.quickStep.style.display = "";
              this.promptStep.style.display = "none";
              this.resultsStep.style.display = "none";
              this.widget.classList.add("quick");
              this.widget.classList.remove("results");
            }
          };
          this.showPromptStep = () => {
            if (this.quickStep) {
              this.quickStep.style.display = "none";
            }
            this.promptStep.style.display = "";
            this.resultsStep.style.display = "none";
            this.widget.classList.remove("quick", "results");
          };
          this.showResultStep = t => {
            const e = this.stage.fresco.getSelected();
            if (this.currentMode === "instruct" && (e == null ? undefined : e.canvas)) {
              const t = e.canvas.getContext("2d");
              this.previewOriginal = t.getImageData(0, 0, e.canvas.width, e.canvas.height);
            }
            this.results = t;
            this.selectedResultIndex = 0;
            this.carousel.innerHTML = "";
            if (this.currentMode === "instruct" && (e == null ? undefined : e.canvas)) {
              const t = (0, a.T)("img", {
                className: "pe-thumb pe-thumb-original",
                src: e.canvas.toDataURL("image/jpeg", 0.6),
                onclick: () => this.previewOriginalImage()
              });
              this.carousel.appendChild(t);
            }
            t.forEach((t, e) => {
              const s = (0, a.T)("img", {
                className: "pe-thumb" + (e === 0 ? " selected" : ""),
                src: t,
                onclick: () => this.selectResult(e)
              });
              this.carousel.appendChild(s);
            });
            const s = (0, a.T)("div", {
              className: "pe-more",
              onclick: () => this.generateMore()
            }, "+");
            this.carousel.appendChild(s);
            if (this.quickStep) {
              this.quickStep.style.display = "none";
            }
            this.promptStep.style.display = "none";
            this.resultsStep.style.display = "flex";
            this.widget.classList.remove("quick");
            this.widget.classList.add("results");
            if (this.currentMode === "instruct") {
              this.previewResult(0);
            }
          };
          this.updateState = () => {
            var t;
            const e = !!((t = this.stage.fresco) === null || t === undefined ? undefined : t.isSelectedImageWithCanvas());
            this.generateBtn.classList.toggle("disabled", this.currentMode === "instruct" && !e);
          };
          this.loadModels = async () => {
            const t = this.currentMode === "generate" ? v.$8.TEXT_TO_IMAGE : v.$8.INSTRUCT_TO_IMAGE;
            try {
              const {
                models: e,
                defaults: s
              } = await (0, y.ZC)(t);
              const i = new Set(s.map(t => t.modelSlug));
              this.availableModels = e.filter(t => i.has(t.slug)).sort((t, e) => (0, y.mH)(t) - (0, y.mH)(e));
              const a = s.find(e => e.tier === this.selectedTier && (!e.capability || e.capability === t || e.capability === ""));
              if (a) {
                const t = this.availableModels.find(t => t.slug === a.modelSlug);
                if (t) {
                  this.selectedTier = t.tier;
                }
              }
            } catch (s) {
              this.availableModels = [];
            }
            this.refreshModelDropdown();
          };
          this.getSelectedModel = () => {
            return this.availableModels.find(t => t.tier === this.selectedTier) ?? this.availableModels[0] ?? null;
          };
          this.buildModelCard = t => {
            const e = t.tier === this.selectedTier;
            return (0, a.T)("div", {
              className: "aip-model-card " + t.tier + (e ? " selected" : ""),
              dataset: {
                tier: t.tier
              },
              onclick: () => {
                this.selectModel(t.tier);
                this.closeModelDropdown();
              }
            }, (0, a.T)("div", {
              className: "aip-model-icon " + t.tier
            }, (0, a.T)("img", {
              src: "assets/images/icon/model.svg",
              width: 14,
              height: 14
            })), (0, a.T)("div", {
              className: "aip-model-details"
            }, (0, a.T)("strong", {}, t.name), (0, a.T)("span", {}, t.tier.charAt(0).toUpperCase() + t.tier.slice(1))), (0, a.T)("div", {
              className: "aip-model-cost"
            }, (0, a.T)("strong", {}, String((0, y.mH)(t))), (0, a.T)("img", {
              src: "assets/images/icon/credit.svg",
              width: 12,
              height: 12,
              className: "ic"
            })));
          };
          this.selectModel = t => {
            this.selectedTier = t;
            this.updateModelTrigger();
            this.modelDropdown.querySelectorAll(".aip-model-card").forEach(e => {
              e.classList.toggle("selected", e.dataset.tier === t);
            });
          };
          this.updateModelTrigger = () => {
            const s = this.getSelectedModel();
            const i = (s == null ? undefined : s.tier) ?? this.selectedTier;
            const n = (s == null ? undefined : s.name) ?? i.charAt(0).toUpperCase() + i.slice(1);
            this.modelTrigger.className = "aip-model-trigger " + i;
            this.modelTrigger.innerHTML = "";
            this.modelTrigger.appendChild((0, a.T)("div", {
              className: "aip-model-icon " + i
            }, (0, a.T)("img", {
              src: "assets/images/icon/model.svg",
              width: 12,
              height: 12
            })));
            this.modelTrigger.appendChild((0, a.T)("span", {}, n));
            this.modelTrigger.appendChild((0, a.T)("span", {
              className: "aip-chevron"
            }, "▾"));
          };
          this.toggleModelDropdown = () => this.modelDropdownOpen ? this.closeModelDropdown() : this.openModelDropdown();
          this.openModelDropdown = () => {
            this.modelDropdownOpen = true;
            const t = this.modelTrigger.getBoundingClientRect();
            this.modelDropdown.style.left = t.left + "px";
            this.modelDropdown.style.bottom = window.innerHeight - t.top + 6 + "px";
            this.modelDropdown.style.top = "";
            this.modelDropdown.classList.add("open");
          };
          this.closeModelDropdown = () => {
            this.modelDropdownOpen = false;
            this.modelDropdown.classList.remove("open");
          };
          this.refreshModelDropdown = () => {
            if (!this.availableModels.find(t => t.tier === this.selectedTier)) {
              this.selectedTier = this.availableModels[0]?.tier ?? "fast";
            }
            this.modelDropdown.innerHTML = "";
            this.availableModels.forEach(t => this.modelDropdown.appendChild(this.buildModelCard(t)));
            this.updateModelTrigger();
          };
          this.selectResult = t => {
            this.selectedResultIndex = t;
            this.carousel.querySelectorAll(".pe-thumb").forEach(t => {
              t.classList.remove("selected");
            });
            this.carousel.querySelectorAll(".pe-thumb:not(.pe-thumb-original)").forEach((e, s) => {
              e.classList.toggle("selected", s === t);
            });
            if (this.currentMode === "instruct") {
              this.previewResult(t);
            }
          };
          this.previewOriginalImage = () => {
            this.selectedResultIndex = -1;
            this.carousel.querySelectorAll(".pe-thumb").forEach(t => {
              t.classList.toggle("selected", t.classList.contains("pe-thumb-original"));
            });
            this.stage.fresco.removeScratch();
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.previewResult = async t => {
            const e = this.results[t];
            if (!e) {
              return;
            }
            const s = await fetch(e);
            const i = await s.blob();
            const a = await n.lz(i);
            if (!this.results.length) {
              return;
            }
            const o = this.stage.fresco.getSelected();
            if (!(o == null ? undefined : o.canvas)) {
              return;
            }
            const h = o.canvas.width;
            const l = o.canvas.height;
            const c = r.A.bestFit(a.width, a.height, h, l, true);
            const d = n.Nw(h, l);
            const u = d.getContext("2d");
            u.imageSmoothingEnabled = true;
            u.imageSmoothingQuality = "high";
            u.drawImage(a, c.x, c.y, c.width, c.height);
            this.stage.fresco.addScratch().setTarget(o.id, o.rect.clone(), "replace", d);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.discard = () => {
            if (this.currentMode === "instruct") {
              this.stage.fresco.removeScratch();
            }
            this.previewOriginal = null;
            this.results = [];
            if (this.quickActions.length > 0) {
              this.showQuickStep();
            } else {
              this.showPromptStep();
            }
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.showError = t => {
            (0, a.y8)("danger", t, 5);
          };
          this.renderCreditAmount = () => {
            if (u.Ny) {
              this.generateBtn.textContent = (0, i.A)("commonGenerate");
              this.creditMeter.style.display = "flex";
              this.creditMeter.textContent = u.Ny.credits.toString();
            } else {
              this.generateBtn.textContent = (0, i.A)("commonSignIn");
              this.creditMeter.style.display = "none";
            }
          };
          this.getInputCanvas = () => {
            const e = this.stage.fresco.getSelected();
            return (e == null ? undefined : e.canvas) ?? null;
          };
          this.callAifactory = async t => {
            const i = this.getSelectedModel();
            if (!i) {
              return null;
            }
            if (this.currentMode === "generate") {
              const s = await (0, m.cM)({
                model: i.slug,
                capability: v.$8.TEXT_TO_IMAGE,
                prompt: t,
                amount: 1,
                quality: "1K",
                aspect: this.selectedAspect,
                aspect_ratio: this.selectedAspect,
                personal: true
              });
              if ((s == null ? undefined : s.generations)?.length) {
                return this.pollForUrl(s.generations[0]);
              } else {
                return null;
              }
            }
            const a = this.getInputCanvas();
            if (!a) {
              return null;
            }
            let o = a;
            if (o.width > 1920) {
              const t = Math.round(o.height / o.width * 1920);
              o = n.H5(o, 1920, t);
            }
            const r = await n.PG(o, {
              type: "image/jpeg",
              quality: 0.95
            });
            const h = await (0, m.cM)({
              model: i.slug,
              capability: v.$8.INSTRUCT_TO_IMAGE,
              prompt: t,
              amount: 1,
              image: r,
              width: o.width,
              height: o.height,
              personal: true
            });
            if ((h == null ? undefined : h.generations)?.length) {
              return this.pollForUrl(h.generations[0]);
            } else {
              return null;
            }
          };
          this.pollForUrl = t => new Promise(e => {
            const s = async () => {
              const i = await (0, m.qN)(t);
              const a = new m.$U(i);
              if (i.status === "completed" && a.exists) {
                e(a.url);
              } else if (i.status === "failed") {
                e(null);
              } else {
                setTimeout(s, 3000);
              }
            };
            setTimeout(s, 2000);
          });
          this.generate = async () => {
            if (!u.Ny) {
              new l.A({
                callback: window.location.href
              });
              return;
            }
            if (!u.Ny.credits) {
              if (u.Ny.subscription) {
                new c.A("credits");
              } else {
                new d.default("prompt-editor", "credit");
              }
              return;
            }
            if (this.working) {
              return;
            }
            const t = this.promptInput.value.trim();
            if (!(t.length < 2) && (this.currentMode !== "instruct" || this.getInputCanvas())) {
              this.stage.history.commitTransaction();
              this.working = true;
              this.generateBtn.classList.add("working");
              this.widget.classList.add("generating");
              (0, f.A)("aip-generate", this.currentMode);
              try {
                const e = await this.callAifactory(t);
                if (!e) {
                  this.showError("Generation failed. Please try again.");
                  return;
                }
                this.showResultStep([e]);
                o.W2().then(() => this.renderCreditAmount());
              } catch (s) {
                this.showError("Generation failed. Please try again.");
              } finally {
                this.working = false;
                this.generateBtn.classList.remove("working");
                this.widget.classList.remove("generating");
              }
            }
          };
          this.generateMore = async () => {
            const t = this.promptInput.value.trim();
            if (t.length < 2) {
              return;
            }
            if (this.currentMode === "instruct" && !this.getInputCanvas()) {
              return;
            }
            const e = (0, a.T)("div", {
              className: "pe-thumb working"
            });
            this.carousel.querySelector(".pe-more").before(e);
            this.carousel.scrollLeft = this.carousel.scrollWidth;
            try {
              const s = await this.callAifactory(t);
              if (s) {
                const t = this.results.length;
                this.results.push(s);
                const i = (0, a.T)("img", {
                  className: "pe-thumb",
                  src: s,
                  onclick: () => this.selectResult(t)
                });
                e.replaceWith(i);
                this.selectResult(t);
                o.W2().then(() => this.renderCreditAmount());
              } else {
                e.remove();
              }
            } catch (s) {
              e.remove();
            }
          };
          this.keep = async () => {
            this.acceptBtn.classList.add("working");
            try {
              const t = this.results[this.selectedResultIndex];
              if (!t) {
                this.discard();
                return;
              }
              if (this.currentMode === "generate") {
                const e = await fetch(t);
                const s = await e.blob();
                const i = await n.lz(s);
                this.stage.addImage(i, "Generated", "ai-generate");
                this.previewOriginal = null;
                this.results = [];
                if (this.quickActions.length > 0) {
                  this.showQuickStep();
                } else {
                  this.showPromptStep();
                }
                return;
              }
              const e = this.stage.fresco.getSelected();
              const s = this.stage.fresco.scratch;
              if (!(e == null ? undefined : e.canvas) || !this.previewOriginal || !s) {
                return;
              }
              const i = new r.A(0, 0, e.canvas.width, e.canvas.height);
              e.canvas.getContext("2d").clearRect(0, 0, e.canvas.width, e.canvas.height);
              s.drawToLayer(e, "source-over", 1);
              s.clear();
              e.render();
              this.stage.fresco.removeScratch();
              this.stage.history.add({
                type: "bitmapChange",
                kind: "prompt-editor",
                layer: e,
                patchRect: i,
                patch: this.previewOriginal,
                rect: e.rect.clone(),
                mask: n.$z(e.mask)
              });
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("layer-select"));
              document.dispatchEvent(new CustomEvent("layerlist-update"));
              this.previewOriginal = null;
              this.results = [];
              if (this.quickActions.length > 0) {
                this.showQuickStep();
              } else {
                this.showPromptStep();
              }
            } finally {
              this.acceptBtn.classList.remove("working");
            }
          };
          this.destroy = () => {
            var t;
            document.removeEventListener("layer-select", this.updateState, false);
            this.modelDropdown.remove();
            if ((t = this.aspectDropdown) !== null && t !== undefined) {
              t.remove();
            }
            this.widget.remove();
          };
          this.stage = t;
          this.container = e.container ?? document.body;
          this.quickActions = e.quickActions ?? [];
          this.build();
          document.addEventListener("layer-select", this.updateState, false);
          document.addEventListener("user-login", () => this.renderCreditAmount(), false);
          document.addEventListener("navigate", t => {
            if (t.detail === "editor") {
              this.centerWidget();
            }
          }, {
            once: true
          });
          this.updateState();
        }
      }
    }
