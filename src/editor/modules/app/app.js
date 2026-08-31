window.__editorModules[8382] = function (t, e, s) {
  s.a(t, async (t, i) => {
    try {
      s.d(e, {
        A: () => App
      });
      var a = s(5283);
      var n = s(3244);
      var o = s(7135);
      var r = s(6050);
      var h = s(749);
      var l = s(1059);
      var c = s(3343);
      var d = s(5699);
      var u = s(5259);
      var g = s(6522);
      var m = s(6797);
      var y = s(4646);
      var v = s(9075);
      var f = s(1190);
      var k = s(7732);
      var S = s(8854);
      var E = s(2128);
      var C = s(98);
      var T = s(481);
      var L = s(712);
      var M = s(8848);
      var z = s(2875);
      var I = s(9910);
      var F = s(2195);
      var R = s(4238);
      var _ = s(8439);
      var N = s(3448);
      var B = s(9571);
      var O = s(3347);
      var U = s(1178);
      var H = s(6457);
      var q = s(3703);
      var V = s(1575);
      var $ = s(4312);
      var G = s(8975);
      var j = s(7588);
      var X = s(5468);
      var W = s(205);
      var Y = s(1248);
      var Z = s(2057);
      var J = s(4272);
      var Q = s(4755);
      var tt = s(9923);
      var et = s(4061);
      var st = s(339);
      var it = s(9758);
      var at = s(323);
      var nt = s(4708);
      var ot = s(7253);
      var rt = s(1034);
      var ht = s(6546);
      var lt = s(2279);
      var ct = s(8762);
      var dt = s(7828);
      var ut = s(5279);
      var pt = s(4865);
      var gt = s(3165);
      var mt = s(7555);
      var yt = s(1618);
      var vt = s(4397);
      var ft = s(511);
      var wt = s(9421);
      var xt = s(5978);
      var bt = s(1283);
      var At = s(5727);
      var kt = s(4759);
      var St = s(4089);
      var Et = s(5243);
      var Ct = s(4328);
      var Tt = s(2706);
      var Lt = s(755);
      var Mt = s(2813);
      var It = s(6957);
      var Rt = s(2543);
      var Nt = s(6494);
      var Bt = s(4947);
      var Ot = s(5293);
      var Ut = s(5992);
      var Ht = s(1558);
      var qt = s(7646);
      var Vt = s(435);
      var $t = s(7177);
      var Gt = s(8833);
      var jt = s(5477);
      var Xt = s(5698);
      var Wt = s(1608);
      var Yt = s(9043);
      var Kt = s(4789);
      var Zt = s(5448);
      var Jt = s(2598);
      var Qt = s(1924);
      var te = s(8823);
      var ee = s(6291);
      var se = s(3381);
      var ie = s(5236);
      var ae = s(5294);
      var ne = s(1255);
      var oe = s(4939);
      var re = s(2298);
      var he = s(290);
      var le = s(7236);
      var ce = s(3632);
      var de = s(6473);
      var ue = s(5186);
      var pe = s(5642);
      var ge = s(3369);
      var me = s(2372);
      var ye = s(5188);
      var ve = s(5367);
      var fe = t([T]);
      var we = fe.then ? (await fe)() : fe;
      T = we[0];
      class App extends T.A {
        constructor() {
          super();
          this.hasDock = false;
          this.isKeyDown = false;
          this.isPreviewMode = false;
          this.initial = true;
          this.resize = () => {
            if (this.stage && (0, a.Ay)("menu-bar")) {
              if (this.isPreviewMode) {
                this.stage.resize(0, 0, this.stage.workspace.offsetWidth, this.stage.workspace.offsetHeight - 1);
              } else {
                let t = C.Ay.barQuicklink ? (0, a.Ay)("right-bar").offsetWidth + 1 : 0;
                let e = C.Ay.panelFloating ? 0 : (0, a.Ay)("menu-bar").offsetWidth + 1;
                let s = C.Ay.panelFloating ? 46 : (0, a.Ay)("panel-bar").offsetWidth + 1;
                let i = (0, a.Ay)("tab-bar").style.display === "none" ? 0 : 33;
                this.stage.resize(e, 77 + i, this.stage.workspace.offsetWidth - e - s - t, this.stage.workspace.offsetHeight - 77 - i);
                (0, a.Ay)("panel-bar").style.right = t + "px";
              }
              if (this.tabBar) {
                this.tabBar.resize();
              }
              if (this.scrollbar) {
                this.scrollbar.resize();
              }
              if (this.tool && this.tool.name === "crop") {
                this.tool.refit();
              }
              if (this.initial) {
                this.positionFloatingPanels();
                this.initial = false;
              }
            }
          };
          this.togglePreviewMode = () => {
            var t;
            var e;
            if (!this.isSplash() && !this.isModal()) {
              this.isPreviewMode = !this.isPreviewMode;
              if (this.isPreviewMode) {
                (0, a.Ay)("top-bar").style.display = "none";
                (0, a.Ay)("panel-bar").style.display = "none";
                (0, a.Ay)("right-bar").style.display = "none";
                (0, a.Ay)("menu-bar").style.display = "none";
                (0, a.Ay)("tab-bar").style.display = "none";
                if (this.tool instanceof ne.A) {
                  if ((t = this.tool.reform) !== null && t !== undefined) {
                    t.supress(true);
                  }
                }
              } else {
                (0, a.Ay)("panel-bar").style.display = "flex";
                (0, a.Ay)("top-bar").style.display = "block";
                (0, a.Ay)("menu-bar").style.display = "block";
                if (C.Ay.barQuicklink) {
                  (0, a.Ay)("right-bar").style.display = "flex";
                }
                this.tabBar.render();
                if (this.tool instanceof ne.A) {
                  if ((e = this.tool.reform) !== null && e !== undefined) {
                    e.supress(false);
                  }
                }
              }
              this.resize();
            }
          };
          this.keyDown = async t => {
            var e;
            const s = document.activeElement;
            if (d.Jn(s)) {
              if (t.key === "Enter" && s.nodeName !== "TEXTAREA") {
                document.activeElement.blur();
              }
            } else if (this.isSplash()) {
              if (t.key === "Escape" && this.stage.fresco) {
                this.hideSplash();
              }
            } else {
              if (t.key !== "Control" && t.key !== "Shift" && t.key !== " " && this.tool instanceof ne.A) {
                if ((e = this.tool.selectron) !== null && e !== undefined) {
                  e.cleanCut();
                }
              }
              if (!this.isModal()) {
                if (t.ctrlKey || t.metaKey) {
                  switch (t.key.toLowerCase()) {
                    case "a":
                      t.preventDefault();
                      this.stage.selectionAll();
                      return;
                    case "b":
                      t.preventDefault();
                      new K.A(this.stage);
                      return;
                    case "d":
                      t.preventDefault();
                      if (this.stage.fresco.hasSelection()) {
                        this.stage.selectionDeselect();
                      } else {
                        await this.stage.duplicateLayer();
                      }
                      return;
                    case "e":
                      t.preventDefault();
                      this.newClick();
                      return;
                    case "i":
                      t.preventDefault();
                      this.stage.selectionInvert();
                      return;
                    case "j":
                      t.preventDefault();
                      this.stage.pasteFromSelection();
                      return;
                    case "m":
                      t.preventDefault();
                      if (this.stage.fresco && this.stage.fresco.isSelectedShaderbleWithCanvas()) {
                        new U.A(this.stage);
                      }
                      return;
                    case "l":
                      t.preventDefault();
                      if (this.stage.fresco && this.stage.fresco.isSelectedShaderbleWithCanvas()) {
                        new H.A(this.stage);
                      }
                      return;
                    case "o":
                      t.preventDefault();
                      this.openClick();
                      return;
                    case "s":
                      t.preventDefault();
                      this.saveClick();
                      return;
                    case "p":
                      t.preventDefault();
                      this.print();
                      return;
                    case "u":
                      t.preventDefault();
                      if (this.stage.fresco && this.stage.fresco.isSelectedShaderbleWithCanvas()) {
                        new R.A(this.stage);
                      }
                      return;
                    case "w":
                    case "q":
                      t.preventDefault();
                      this.closeClick();
                      return;
                    case "r":
                      t.preventDefault();
                      this.setTool("arrange", true, "TRANSFORM");
                      return;
                    case "k":
                      t.preventDefault();
                      this.setTool("arrange", true, "DISTORT");
                      return;
                    case "z":
                      t.preventDefault();
                      if (t.shiftKey) {
                        this.stage.history.redo();
                      } else {
                        this.stage.history.undo();
                      }
                      return;
                    case "y":
                      t.preventDefault();
                      this.stage.history.redo();
                      return;
                    case "0":
                      t.preventDefault();
                      this.stage.setZoom("fit");
                      return;
                    case "1":
                      t.preventDefault();
                      this.stage.setZoom("1");
                      return;
                    case "2":
                      t.preventDefault();
                      this.stage.setZoom("fill");
                      return;
                    case "3":
                      t.preventDefault();
                      this.stage.setZoom("3");
                      return;
                    case "6":
                      t.preventDefault();
                      this.stage.mergeDown();
                      return;
                    case "7":
                      t.preventDefault();
                      this.stage.mergeVisible();
                      return;
                    case "8":
                      t.preventDefault();
                      this.stage.mergeFlatten();
                      return;
                    case "4":
                      t.preventDefault();
                      this.stage.moveUp();
                      return;
                    case "5":
                      t.preventDefault();
                      this.stage.moveDown();
                      return;
                    case "-":
                      t.preventDefault();
                      this.stage.setZoomStep(false);
                      return;
                    case "+":
                    case "=":
                      t.preventDefault();
                      this.stage.setZoomStep(true);
                      return;
                    case "enter":
                      return;
                  }
                } else {
                  if (t.key === " " && (!this.tool || this.tool.name !== "hand")) {
                    this.stage.coating.setPan();
                    t.preventDefault();
                    return;
                  }
                  if (t.key === "Tab") {
                    t.preventDefault();
                    this.togglePreviewMode();
                    return;
                  }
                  if (t.key === "Escape") {
                    if (this.isPreviewMode) {
                      this.togglePreviewMode();
                    }
                    if (this.tool) {
                      this.tool.cancel();
                    }
                    return;
                  }
                  if (t.key !== "Enter") {
                    if (t.key !== "Delete" && t.key !== "Backspace") {
                      switch (t.key.toLowerCase()) {
                        case "a":
                          this.setTool("replace");
                          break;
                        case "b":
                          this.setTool("draw");
                          break;
                        case "c":
                          this.setTool("crop");
                          break;
                        case "d":
                          this.setTool("detail");
                          break;
                        case "e":
                          this.setTool("eraser");
                          break;
                        case "f":
                          this.setTool("fill");
                          break;
                        case "g":
                          this.setTool("gradient");
                          break;
                        case "h":
                          this.setTool("heal");
                          break;
                        case "i":
                          this.setTool("picker");
                          break;
                        case "j":
                          this.setTool("focus");
                          break;
                        case "k":
                          this.setTool("cutout");
                          break;
                        case "l":
                          this.setTool("lasso");
                          break;
                        case "m":
                          this.setTool("marquee");
                          break;
                        case "n":
                          this.setTool("frame");
                          break;
                        case "o":
                          this.setTool("toning");
                          break;
                        case "p":
                          this.setTool("pen");
                          break;
                        case "q":
                          this.setTool("liquify");
                          break;
                        case "r":
                          this.setTool("temper");
                          break;
                        case "s":
                          this.setTool("clone");
                          break;
                        case "t":
                          this.setTool("text");
                          break;
                        case "u":
                          this.setTool("shape");
                          break;
                        case "v":
                          this.setTool("arrange");
                          break;
                        case "w":
                          this.setTool("wand");
                          break;
                        case "x":
                          this.switchColor();
                          break;
                        case "y":
                          this.setTool("disperse");
                          break;
                        case "z":
                          this.setTool("zoom");
                      }
                    } else if (this.stage.fresco) {
                      if (this.stage.fresco.hasSelection()) {
                        this.clear();
                      } else {
                        this.stage.deleteLayer();
                      }
                      t.preventDefault();
                    }
                  } else if (this.tool) {
                    this.tool.apply();
                  }
                }
              }
            }
          };
          this.keyUp = t => {
            if (this.isModal()) {
              t.preventDefault();
            } else if (t.key === " " && (!this.tool || this.tool.name !== "hand")) {
              this.stage.coating.removePan();
            }
          };
          this.setUpTopBar = () => {
            var t;
            if ((t = (0, a.Ay)("toggle-home")) !== null && t !== undefined) {
              t.addEventListener("click", () => {
                var t;
                if ((t = this.tool) !== null && t !== undefined) {
                  t.apply();
                }
                this.showSplash();
              }, false);
            }
            let e = (0, a.Ay)("menu").querySelectorAll("#menu>li>label");
            for (var s = 0; s < e.length; s++) {
              e[s].addEventListener("click", t => {
                t.stopPropagation();
                t.preventDefault();
                (0, a.Ay)("menu").classList.toggle("active");
                const e = t => {
                  if (!t.target.classList.contains("more")) {
                    (0, a.Ay)("menu").classList.remove("active");
                    document.removeEventListener("click", e, false);
                  }
                };
                document.addEventListener("click", e, false);
              }, true);
            }
            const i = (t, e) => {
              (0, a.Ay)(t).addEventListener("click", () => {
                if (t !== "edit-undo" && t !== "edit-redo" && this.tool) {
                  this.stage.history.commitTransaction();
                  this.tool.apply();
                }
                if ((t => !(0, a.Ay)(t).classList.contains("disabled"))(t)) {
                  e();
                }
              }, true);
            };
            const r = () => {
              var t;
              var e;
              let s = (t = this.stage.fresco) === null || t === undefined ? undefined : t.getSelected();
              let i = this.stage.isSelectedLayerShaderble();
              let n = i && s.type === h.A.TYPE_FRAME;
              const o = (e = this.stage.fresco) === null || e === undefined ? undefined : e.hasSelection();
              const r = s && s instanceof k.A && s.hasMask();
              (0, a.Ay)("menu").querySelectorAll(".image").forEach(t => {
                t.classList.toggle("disabled", !i);
                if (n && t.classList.contains("noframe")) {
                  t.classList.add("disabled");
                }
              });
              (0, a.Ay)("menu").querySelectorAll(".selection").forEach(t => {
                t.classList.toggle("disabled", !o);
              });
              (0, a.Ay)("menu").querySelectorAll(".mask").forEach(t => {
                t.classList.toggle("disabled", !r);
              });
              (0, a.Ay)("layer-merge-down").classList.toggle("disabled", !s);
            };
            document.addEventListener("layer-select", r);
            document.addEventListener("history-update", async t => {
              (0, a.Ay)("edit-undo").classList.toggle("disabled", t.detail && t.detail.atStart);
              (0, a.Ay)("edit-redo").classList.toggle("disabled", t.detail && t.detail.atEnd);
              r();
            });
            i("file-new", this.newClick);
            i("file-save", this.saveClick);
            i("file-print", () => this.print());
            i("file-close", this.closeClick);
            i("file-open", this.openClick);
            i("file-open-url", () => new g.A(this.stage));
            i("export-image", () => this.quickExport());
            i("export-layer", () => this.quickExport(true));
            i("edit-undo", () => this.stage.history.undo());
            i("edit-redo", () => this.stage.history.redo());
            i("edit-cut", () => document.execCommand("cut"));
            i("edit-copy", () => document.execCommand("copy"));
            i("edit-paste", () => this.pasteActivatedFromMenu());
            i("edit-clear", () => this.clear());
            i("edit-stroke", () => new ct.A(this.stage));
            i("edit-fill", () => new dt.A(this.stage));
            i("edit-free-transform", () => this.setTool("arrange", true, "TRANSFORM"));
            i("edit-free-distort", () => this.setTool("arrange", true, "DISTORT"));
            i("edit-rotate-left", () => this.stage.rotateSelected(true));
            i("edit-rotate-right", () => this.stage.rotateSelected(false));
            i("edit-flip-horizontal", () => this.stage.flipSelected(false));
            i("edit-flip-vertical", () => this.stage.flipSelected(true));
            i("selection-all", () => this.stage.selectionAll());
            i("selection-deselect", () => this.stage.selectionDeselect());
            i("selection-invert", () => this.stage.selectionInvert());
            i("selection-pixels", () => this.stage.selectionPixels());
            i("selection-save", () => this.stage.selectionSave());
            i("selection-restore", () => this.stage.selectionRestore());
            i("selection-convert", () => {
              this.stage.selectionConvert();
              this.setTool("cutout");
            });
            i("image-canvas-resize", () => new v.A(this.stage));
            i("image-resize", () => new y.A(this.stage));
            i("image-smart-resize", () => new f.A(this.stage));
            i("image-canvas-color", () => new m.A(this.stage));
            i("image-flip-vertical", () => this.stage.flip(true));
            i("image-flip-horizontal", () => this.stage.flip(false));
            i("image-rotate-left", () => this.stage.rotate(true));
            i("image-rotate-right", () => this.stage.rotate(false));
            i("image-crop", () => {
              if (this.stage.fresco.hasSelection()) {
                const t = new n.A(this.stage.fresco.selection.bounds.x, this.stage.fresco.selection.bounds.y, this.stage.fresco.selection.bounds.width, this.stage.fresco.selection.bounds.height);
                this.stage.selectionDeselect();
                this.stage.crop(t);
              }
            });
            i("image-trim", () => {
              let t = this.stage.getOutputCanvas(this.stage.fresco, 1);
              let e = d.TL(t);
              if (e.width > 0 && e.height > 0) {
                this.stage.crop(e);
              }
            });
            i("layer-new", () => this.stage.addEmpty());
            i("layer-open", async () => {
              (0, o.A)("open-browse");
              await (0, E.XN)(true).then(async t => {
                document.dispatchEvent(new CustomEvent("loading", {
                  detail: "start"
                }));
                for (let e = 0; e < t.length; e++) {
                  await (0, E.Tq)(t[e], this.stage, false);
                }
                document.dispatchEvent(new CustomEvent("loading", {
                  detail: "stop"
                }));
              });
            });
            i("layer-url", () => new g.A(this.stage, false));
            i("layer-duplicate", async () => await this.stage.duplicateLayer());
            i("layer-delete", () => this.stage.deleteLayer());
            i("layer-merge-down", () => this.stage.mergeDown());
            i("layer-merge-visible", () => this.stage.mergeVisible());
            i("layer-merge-flatten", () => this.stage.mergeFlatten());
            i("layer-move-up", () => this.stage.moveUp());
            i("layer-move-down", () => this.stage.moveDown());
            i("layer-rasterize", () => this.stage.rasterize());
            i("layer-add-mask", () => {
              this.stage.maskAdd();
              this.setTool("cutout");
            });
            i("layer-convert-mask", () => {
              this.stage.maskConvert();
              this.setTool("arrange");
            });
            i("layer-extract-mask", () => this.stage.maskExtract());
            i("layer-invert-mask", () => this.stage.maskInvert());
            i("layer-delete-mask", () => this.stage.maskDelete());
            i("layer-apply-mask", () => this.stage.maskApply());
            i("adjust-auto", () => new pe.A(this.stage));
            i("adjust-pop", () => new ue.A(this.stage));
            i("adjust-bw", () => new de.A(this.stage));
            i("adjust-brightness-contrast", () => new z.A(this.stage));
            i("adjust-temperature-tint", () => new F.A(this.stage));
            i("adjust-hue-saturation", () => new R.A(this.stage));
            i("adjust-vibrance", () => new N.A(this.stage));
            i("adjust-balance", () => new O.A(this.stage));
            i("adjust-highlights-shadows", () => new I.A(this.stage));
            i("adjust-exposure", () => new B.A(this.stage));
            i("adjust-monochrome", () => new _.A(this.stage));
            i("adjust-curves", () => new U.A(this.stage));
            i("adjust-levels", () => new H.A(this.stage));
            i("adjust-threshold", () => new ut.A(this.stage));
            i("adjust-alphaThreshold", () => new pt.A(this.stage));
            i("adjust-posterize", () => new Z.A(this.stage));
            i("adjust-desaturate", () => new ve.A(this.stage));
            i("adjust-invert", () => new ge.A(this.stage));
            i("adjust-solarize", () => new ye.A(this.stage));
            i("adjust-mimichdr", () => new kt.A(this.stage));
            i("adjust-lookup", () => new gt.A(this.stage));
            i("filter-effect", () => new q.A(this.stage));
            i("filter-drop-shadow", () => new mt.A(this.stage));
            i("filter-outline", () => new ct.A(this.stage));
            i("filter-outer-glow", () => new yt.A(this.stage));
            i("filter-inner-glow", () => new vt.A(this.stage));
            i("filter-bevel", () => new wt.A(this.stage));
            i("filter-sharpen", () => new V.A(this.stage));
            i("filter-clarity", () => new $.A(this.stage));
            i("filter-blur", () => new G.A(this.stage));
            i("filter-zoom-blur", () => new j.A(this.stage));
            i("filter-gaussian-blur", () => new X.A(this.stage));
            i("filter-motion-blur", () => new W.A(this.stage));
            i("filter-radial-blur", () => new Y.A(this.stage));
            i("filter-smooth", () => new J.A(this.stage));
            i("filter-denoise", () => new Q.A(this.stage));
            i("filter-bloom", () => new tt.A(this.stage));
            i("filter-glamour", () => new et.A(this.stage));
            i("filter-fringe", () => new ot.A(this.stage));
            i("filter-rgb-split", () => new Et.A(this.stage));
            i("filter-scanlines", () => new Ct.A(this.stage));
            i("filter-interference", () => new Tt.A(this.stage));
            i("filter-slice", () => new xt.A(this.stage));
            i("filter-grain", () => new st.A(this.stage));
            i("filter-noise", () => new it.A(this.stage));
            i("filter-dehaze", () => new at.A(this.stage));
            i("filter-vignette", () => new nt.A(this.stage));
            i("filter-pixelate", () => new rt.A(this.stage));
            i("filter-mosaic", () => new ht.A(this.stage));
            i("filter-halftone", () => new ft.A(this.stage));
            i("filter-sobel", () => new me.A(this.stage));
            i("filter-polarcoordinates", () => new Mt.A(this.stage));
            i("filter-fish-eye", () => new At.A(this.stage));
            i("filter-reflect", () => new St.A(this.stage));
            i("filter-wave", () => new bt.A(this.stage));
            i("filter-kaleidoscope", () => new Lt.A(this.stage));
            i("view-restore", () => this.restorePanel());
            i("view-floating", () => this.toggleFloatingPanel());
            i("view-layer", () => this.togglePanel("layer-panel"));
            i("view-quicklink", () => this.toggleQuicklink());
            i("view-zoom-in", () => this.stage.setZoomStep(true));
            i("view-zoom-out", () => this.stage.setZoomStep(false));
            i("view-zoom-fit", () => this.stage.setZoom("fit"));
            i("view-zoom-fill", () => this.stage.setZoom("fill"));
            i("view-zoom-1x", () => this.stage.setZoom("1"));
            i("view-zoom-2x", () => this.stage.setZoom("2"));
            i("view-zoom-3x", () => this.stage.setZoom("3"));
            i("view-preview", () => this.togglePreviewMode());
            i("view-full-screen", () => document.documentElement.requestFullscreen());
            i("view-theme", () => {
              var t;
              if ((t = (0, a.Ay)("head-settings")) === null || t === undefined) {
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: "preferences aren't available in this offline mirror"
                }));
                return undefined;
              } else {
                return t.click();
              }
            });
          };
          this.setUpMenuBar = () => {
            const t = (0, a.Ay)("tool-menu").getElementsByTagName("li");
            for (var e = 0; e < t.length; e++) {
              t[e].addEventListener("click", t => this.setTool(t.currentTarget.getAttribute("data")), false);
              t[e].addEventListener("pointerenter", t => this.showToolTip(t.currentTarget.getAttribute("data"), t), false);
              t[e].addEventListener("pointerleave", t => this.hideToolTip(t.currentTarget.getAttribute("data"), t), false);
            }
            (0, a.Ay)("color-main").style.backgroundColor = C.Ay.mainColor;
            (0, a.Ay)("color-main").addEventListener("click", () => new S.A(u.A.fromHEX(C.Ay.mainColor), t => {
              this.setColor(t, true);
            }), false);
            (0, a.Ay)("color-alt").style.backgroundColor = C.Ay.altColor;
            (0, a.Ay)("color-alt").addEventListener("click", () => new S.A(u.A.fromHEX(C.Ay.altColor), t => {
              this.setColor(t, false);
            }), false);
            (0, a.Ay)("color-switch").addEventListener("click", this.switchColor, false);
            (0, a.Ay)("tool-zoom").addEventListener("dblclick", () => this.stage.setZoom("1"), false);
            (0, a.Ay)("menu-bar").classList.toggle("floating", C.Ay.panelFloating);
            (0, a.Bb)((0, a.Ay)("menu-handle"), this.dragMenuStart, this.dragMenuMove, this.dragMenuUp);
            this.setTool("arrange");
          };
          this.setUpToolList = () => {
            if (C.Ay.disabledTools.length > 0) {
              const e = (0, a.Ay)("tool-menu").getElementsByTagName("li");
              for (var t = 0; t < e.length; t++) {
                if (C.Ay.disabledTools.includes(e[t].getAttribute("data"))) {
                  e[t].style.display = "none";
                }
              }
            }
          };
          this.hideNoneAPIControls = () => {
            (0, a.Ay)("toggle-home").style.display = "none";
            (0, a.Ay)("file-close").style.display = "none";
          };
          this.dragMenuStart = t => {
            this.p = t;
            this.d = new r.A((0, a.Ay)("menu-bar").offsetLeft, (0, a.Ay)("menu-bar").offsetTop);
          };
          this.dragMenuMove = t => {
            (0, a.Ay)("menu-bar").style.left = Math.round(this.d.x + (t.x - this.p.x)) + "px";
            (0, a.Ay)("menu-bar").style.top = Math.round(this.d.y + (t.y - this.p.y)) + "px";
          };
          this.dragMenuUp = t => {
            let e = Math.round(this.d.y + (t.y - this.p.y));
            let s = Math.round(this.d.x + (t.x - this.p.x));
            if (e < 76) {
              e = 76;
            }
            if (s < 0) {
              s = 0;
            }
            if (s + 72 > (0, a.Ay)("workspace").offsetWidth) {
              s = (0, a.Ay)("workspace").offsetWidth - 72;
            }
            (0, a.Ay)("menu-bar").style.left = s + "px";
            (0, a.Ay)("menu-bar").style.top = e + "px";
          };
          this.setColorEvent = t => {
            const e = t.detail;
            (0, C.oY)(e);
            this.setColor(e, true);
          };
          this.setColor = (t, e) => {
            let s = t.toHEX();
            if (e) {
              (0, C.ZC)("mainColor", s);
              (0, a.Ay)("color-main").style.backgroundColor = s;
            } else {
              (0, C.ZC)("altColor", s);
              (0, a.Ay)("color-alt").style.backgroundColor = s;
            }
          };
          this.switchColor = () => {
            let t = C.Ay.mainColor;
            let e = C.Ay.altColor;
            (0, C.ZC)("altColor", t);
            (0, C.ZC)("mainColor", e);
            (0, a.Ay)("color-main").style.backgroundColor = e;
            (0, a.Ay)("color-alt").style.backgroundColor = t;
          };
          this.resetColor = () => {
            (0, C.ZC)("altColor", "#FFFFFF");
            (0, C.ZC)("mainColor", "#000000");
            (0, a.Ay)("color-main").style.backgroundColor = "#000000";
            (0, a.Ay)("color-alt").style.backgroundColor = "#FFFFFF";
          };
          this.setUpRightBar = () => {
            if (!C.Ay.barQuicklink) {
              (0, a.Ay)("right-bar").style.display = "none";
            }
            (0, a.Ay)("shortcut-save-png").addEventListener("click", () => this.downloadFormat("png"));
            (0, a.Ay)("shortcut-save-jpg").addEventListener("click", () => this.downloadFormat("jpg"));
            (0, a.Ay)("shortcut-save-webp").addEventListener("click", () => this.downloadFormat("webp"));
            (0, a.Ay)("shortcut-save-pdf").addEventListener("click", () => this.downloadFormat("pdf"));
            (0, a.Ay)("shortcut-save-pxz").addEventListener("click", () => this.downloadFormat("pxz"));
            (0, a.Ay)("shortcut-layers").addEventListener("click", () => this.togglePanel("layer-panel"));
          };
          this.setUpPanelBar = () => {
            this.tabBar = new L.A(this);
            this.layerPanel = new M.A(this.stage, C.Ay.panelLayer);
            this.scrollbar = new l.A(this.stage);
            if (C.Ay.panelLayer) {
              (0, a.Ay)("panel-bar").classList.add("active");
            }
            (0, a.Ay)("panel-bar").classList.toggle("floating", C.Ay.panelFloating);
          };
          this.togglePanel = t => {
            const e = !(0, a.Ay)(t).classList.contains("active");
            switch (t) {
              case "layer-panel":
                (0, C.ZC)("panelLayer", e);
                this.layerPanel.activate(e);
            }
            let s = false;
            const i = (0, a.Ay)("panel-bar").getElementsByClassName("panel");
            for (let a = 0; a < i.length; a++) {
              if (i[a].classList.contains("active")) {
                s = true;
                break;
              }
            }
            (0, a.Ay)("panel-bar").classList.toggle("active", s);
            if (C.Ay.panelFloating) {
              if (e) {
                (0, a.Ay)(t).style.left = ~~(((0, a.Ay)("workspace").clientWidth - 240) / 2) + "px";
                (0, a.Ay)(t).style.top = ~~(((0, a.Ay)("workspace").clientHeight - 70) / 2) + "px";
              }
            } else {
              this.resize();
            }
          };
          this.toggleQuicklink = () => {
            const t = (0, a.Ay)("right-bar").style.display === "none";
            (0, C.ZC)("barQuicklink", t);
            (0, a.Ay)("right-bar").style.display = t ? "flex" : "none";
            this.resize();
          };
          this.restorePanel = () => {
            (0, a.Ay)("panel-bar").classList.remove("floating");
            (0, a.Ay)("menu-bar").classList.remove("floating");
            (0, a.Ay)("panel-bar").classList.add("active");
            this.layerPanel.activate(true);
            (0, C.ZC)("panelLayer", true);
            (0, C.ZC)("panelFloating", false);
            this.positionFloatingPanels();
            this.resize();
          };
          this.toggleFloatingPanel = () => {
            const t = !C.Ay.panelFloating;
            (0, C.ZC)("panelFloating", t);
            (0, a.Ay)("panel-bar").classList.toggle("floating");
            (0, a.Ay)("menu-bar").classList.toggle("floating");
            this.resize();
          };
          this.positionFloatingPanels = () => {
            const t = (0, a.Ay)("menu-bar");
            t.style.top = "100px";
            t.style.left = "20px";
            const e = (0, a.Ay)("workspace").offsetWidth - 51;
            const s = (0, a.Ay)("workspace").offsetHeight;
            let i = 100;
            let n = Math.min(~~(s - i) / 2 - 20, 300);
            if (!this.layerPanel.active) {
              n *= 2;
            }
            if (this.layerPanel.active) {
              const t = (0, a.Ay)("layer-panel");
              t.style.top = i + "px";
              t.style.left = e - 260 + "px";
              t.style.height = n + "px";
              i += n + 20;
            }
          };
          this.hovering = false;
          this.selectToolEvent = t => {
            window.clearTimeout(this.onit);
            window.clearTimeout(this.offit);
            if (t && t.detail) {
              this.setTool(t.detail, true);
            } else {
              this.setTool("arrange");
            }
          };
          this.setTool = async (t, e = false, s) => {
            if (!C.Ay.disabledTools.includes(t) && (e || !this.tool || this.tool.name !== t)) {
              if (this.tool) {
                (0, a.Ay)("tool-" + this.tool.name).classList.remove("active");
                (0, a.Ay)(this.tool.name).classList.remove("active");
                this.tool.cleanUp();
                this.tool = undefined;
                this.stage.coating.removeCursorImage();
              }
              switch (t) {
                case "crop":
                  this.tool = new Ht.A(this.stage);
                  break;
                case "cutout":
                  this.tool = new Qt.A(this.stage);
                  break;
                case "frame":
                  this.tool = new Wt.A(this.stage);
                  break;
                case "arrange":
                  this.tool = new ne.A(this.stage, s || "ARRANGE");
                  break;
                case "marquee":
                  this.tool = new re.A(this.stage);
                  break;
                case "lasso":
                  this.tool = new Zt.A(this.stage);
                  break;
                case "wand":
                  this.tool = new qt.A(this.stage);
                  break;
                case "clone":
                  this.tool = new Yt.A(this.stage);
                  break;
                case "heal":
                  this.tool = new jt.A(this.stage);
                  break;
                case "detail":
                  this.tool = new te.A(this.stage);
                  break;
                case "toning":
                  this.tool = new ee.A(this.stage);
                  break;
                case "temper":
                  this.tool = new se.A(this.stage);
                  break;
                case "focus":
                  this.tool = new Jt.A(this.stage);
                  break;
                case "disperse":
                  this.tool = new ce.A(this.stage);
                  break;
                case "liquify":
                  this.tool = new oe.A(this.stage);
                  break;
                case "pen":
                  this.tool = new Ot.A(this.stage);
                  break;
                case "fill":
                  this.tool = new Gt.A(this.stage);
                  break;
                case "draw":
                  this.tool = new Xt.A(this.stage);
                  break;
                case "shape":
                  this.tool = new Kt.A(this.stage);
                  break;
                case "eraser":
                  this.tool = new ie.A(this.stage);
                  break;
                case "replace":
                  this.tool = new he.A(this.stage);
                  break;
                case "gradient":
                  this.tool = new le.A(this.stage);
                  break;
                case "text":
                  this.tool = new Ut.A(this.stage);
                  break;
                case "zoom":
                  this.tool = new Vt.A(this.stage);
                  break;
                case "hand":
                  this.tool = new $t.A(this.stage);
                  break;
                case "picker":
                  this.tool = new ae.A(this.stage, (t, e) => {
                    (0, C.oY)(t);
                    this.setColor(t, e);
                  });
              }
              if (this.tool) {
                (0, a.Ay)("tooltip-" + this.tool.name).classList.remove("active");
                (0, a.Ay)("tool-" + this.tool.name).classList.add("active");
                (0, a.Ay)(this.tool.name).classList.add("active");
              }
            }
          };
          this.print = async () => {
            let t = this.stage.getOutputCanvas(this.stage.fresco, 1).toDataURL();
            var e = window.open("about:blank", "_new");
            e.document.open();
            e.document.write("<html><head><script>function step1(){\nsetTimeout('step2()', 10);}\nfunction step2(){window.print();window.close()}\n</script></head><body onload='step1()'>\n<img src='" + t + "' /></body></html>");
            e.document.close();
          };
          window.onresize = () => this.resize();
          document.body.onkeydown = t => this.keyDown(t);
          document.body.onkeyup = t => this.keyUp(t);
          document.addEventListener("resize", () => this.resize());
          document.addEventListener("select-tool", this.selectToolEvent, true);
          document.addEventListener("set-color", this.setColorEvent, true);
          document.addEventListener("preferences", () => {
            var t;
            if ((t = (0, a.Ay)("head-settings")) === null || t === undefined) {
              document.dispatchEvent(new CustomEvent("notification", {
                detail: "preferences aren't available in this offline mirror"
              }));
              return undefined;
            } else {
              return t.click();
            }
          }, true);
          document.addEventListener("panel-state", t => this.togglePanel(t.detail));
          this.setUpTopBar();
          this.setUpMenuBar();
          this.setUpPanelBar();
          this.setUpRightBar();
          this.setUpToolList();
          if (C.Ay.api) {
            this.hideNoneAPIControls();
          }
        }
        showToolTip(t, e) {
          if (e.pointerType === "mouse") {
            window.clearTimeout(this.offit);
            this.onit = window.setTimeout(() => {
              let e = (0, a.Ay)("tooltip-" + t);
              e.style.top = (0, a.Ay)("tool-" + t).offsetTop - 10 + "px";
              e.style.left = (0, a.Ay)("tool-" + t).offsetLeft + 40 + "px";
              if (e.offsetTop + e.offsetHeight > (0, a.Ay)("menu-bar").offsetHeight - 10) {
                e.style.top = (0, a.Ay)("menu-bar").offsetHeight - e.offsetHeight - 10 + "px";
              }
              e.classList.add("active");
              this.hovering = true;
            }, this.hovering ? 0 : 666);
          }
        }
        hideToolTip(t, e) {
          if (e.pointerType === "mouse") {
            window.clearTimeout(this.onit);
            window.clearTimeout(this.offit);
            (0, a.Ay)("tooltip-" + t).classList.remove("active");
            this.offit = window.setTimeout(() => {
              this.hovering = false;
            }, 1000);
          }
        }
      }
      i();
    } catch (xe) {
      i(xe);
    }
  });
}
