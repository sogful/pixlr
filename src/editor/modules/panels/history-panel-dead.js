window.__editorModules[7430] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(7775);
      var a = s(6050);
      var n = s(5283);
      var o = s(5328);
      class r {
        constructor(t, e) {
          this.stage = t;
          this.active = e;
          this.dragStart = t => {
            this.p = t;
            this.d = new a.A(this.panel.offsetLeft, this.panel.offsetTop);
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
            if (s + 120 > (0, n.Ay)("workspace").offsetWidth) {
              s = (0, n.Ay)("workspace").offsetWidth - 240;
            }
            this.panel.style.left = s + "px";
            this.panel.style.top = e + "px";
          };
          this.resizeStart = t => {
            this.d = new a.A(this.panel.clientHeight, t.y);
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
          this.render = () => {
            if (!this.active || !this.stage.fresco || !this.stage.history) {
              this.list.innerHTML = "";
              return;
            }
            const t = this.stage.history.undos(false);
            const e = this.stage.history.undos(true);
            const s = t.length + e.length;
            const a = t => () => this.stage.history.jump(t - s);
            const o = t => () => this.stage.history.jump(t);
            const r = t.map((t, e) => {
              const s = h(t, false);
              return (0, n.T)("li", (0, n.T)("div", {
                className: "history-item",
                onclick: a(e + 1)
              }, (0, n.T)("div", s.title), (0, n.T)("img", {
                src: `/img/tool/${s.icon}.svg`,
                className: "ic"
              })));
            });
            if (e.length === 0 && r.length > 0) {
              const t = r[r.length - 1].querySelector(".history-item");
              t.classList.add("selected");
              t.children[1].classList.remove("ic");
              t.onclick = undefined;
            }
            const l = this.stage.history.redos(false);
            r.push(...l.map((t, e) => {
              const s = h(t, false);
              return (0, n.T)("li", (0, n.T)("div", {
                className: "history-item redo",
                onclick: o(e + 1)
              }, (0, n.T)("div", s.title), (0, n.T)("img", {
                src: `/img/tool/${s.icon}.svg`,
                className: "ic"
              })));
            }));
            const c = this.stage.history.getActiveTransaction();
            if (c) {
              const s = e.map((s, i) => {
                const o = h(s, true);
                if (i === e.length - 1) {
                  return (0, n.T)("li", {
                    className: "selected"
                  }, o.title, (0, n.T)("img", {
                    src: `/img/tool/${o.icon}.svg`
                  }));
                } else {
                  return (0, n.T)("li", {
                    onclick: a(t.length + i + 1)
                  }, o.title, (0, n.T)("img", {
                    src: `/img/tool/${o.icon}.svg`,
                    className: "ic"
                  }));
                }
              });
              const d = this.stage.history.redos(true);
              s.push(...d.map((t, e) => {
                const s = h(t, true);
                return (0, n.T)("li", {
                  className: "redo",
                  onclick: o(l.length + e + 1)
                }, s.title, (0, n.T)("img", {
                  src: `/img/tool/${s.icon}.svg`,
                  className: "ic"
                }));
              }));
              const u = function (t) {
                switch (t) {
                  case "arrange":
                  case "arrangeStack":
                    return {
                      title: (0, i.A)("historyArrange"),
                      icon: "arrange"
                    };
                  case "textSettings":
                    return {
                      title: (0, i.A)("historyText"),
                      icon: "text"
                    };
                  case "frameSettings":
                    return {
                      title: (0, i.A)("historyFrame"),
                      icon: "frame"
                    };
                  case "shapeSettings":
                    return {
                      title: (0, i.A)("historyShape"),
                      icon: "shape"
                    };
                  default:
                    return {
                      title: t,
                      icon: t
                    };
                }
              }(c.type);
              r.push((0, n.T)("li", (0, n.T)("div", {
                className: "history-item local " + (e.length === 0 ? "redo" : "")
              }, (0, n.T)("div", u.title), (0, n.T)("img", {
                src: `/img/tool/${u.icon}.svg`,
                className: "ic"
              })), (0, n.T)("ol", {
                className: "history-local"
              }, ...s)));
            }
            this.list.innerHTML = "";
            this.list.append(...r);
            let d = this.list.querySelector(".selected");
            if (d) {
              d.scrollIntoView({
                behavior: "auto",
                block: "nearest",
                inline: "nearest"
              });
            }
          };
          this.panel = (0, n.Ay)("history-panel");
          this.panel.classList.toggle("active", e);
          this.list = (0, n.Ay)("history-list");
          new o.A((0, n.Ay)("history-panel-content"));
          document.addEventListener("history-update", this.render, false);
          (0, n.Ay)("history-minimize").addEventListener("pointerdown", t => {
            t.stopPropagation();
            (0, n.Ay)("history-panel").classList.toggle("collapse");
          }, true);
          (0, n.Ay)("history-close").addEventListener("pointerdown", t => {
            t.stopPropagation();
            document.dispatchEvent(new CustomEvent("panel-state", {
              detail: "history-panel"
            }));
          }, true);
          const s = (0, n.T)("img", {
            id: "layer-panel-resize",
            src: "assets/images/icon/three-dot.svg",
            className: "resize ic"
          });
          (0, n.Bb)(s, this.resizeStart, this.resizeMove);
          this.panel.append(s);
          (0, n.Bb)((0, n.Ay)("history-panel-title"), this.dragStart, this.dragMove, this.dragEnd);
        }
      }
      function h(t, e) {
        switch (t.type) {
          case "addLayer":
            {
              let e = "empty";
              let s = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              switch (t.kind) {
                case "addimage":
                case "pasteimage":
                case "duplicateimage":
                  e = "image";
                  break;
                case "feedimage":
                  e = "image";
                  s = "Addimage";
                  break;
                case "addtext":
                case "pastetext":
                case "duplicatetext":
                  e = "text";
                  break;
                case "addframe":
                case "pasteframe":
                case "duplicateframe":
                  e = "frame";
                  break;
                case "addshape":
                case "pasteshape":
                case "duplicateshape":
                  e = "shape";
                  break;
                case "addelement":
                case "pasteelement":
                case "duplicateelement":
                  e = "element";
              }
              return {
                title: (0, i.A)(`history${s}`),
                icon: e
              };
            }
          case "order":
            return {
              title: (0, i.A)("historyOrder"),
              icon: "menu"
            };
          case "textSettings":
            {
              let e = "menu";
              let s = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)("historyText" + s),
                icon: e
              };
            }
          case "textChange":
            return {
              title: (0, i.A)("historyTextChange"),
              icon: "menu"
            };
          case "bitmapSwitch":
          case "bitmapChange":
            {
              if (!t.kind) {
                return {
                  title: (0, i.A)("bitmapChange"),
                  icon: "image"
                };
              }
              if (t.kind.substr(0, 3) === "eff") {
                const e = t.kind.split(" - ")[1];
                return {
                  title: (0, i.A)("historyEffect", e),
                  icon: "effect"
                };
              }
              let e = "menu";
              let s = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              switch (t.kind) {
                case "adjust":
                  e = "adjust";
                  break;
                case "transform":
                  e = "transform";
                  break;
                case "distort":
                  e = "distort";
                  break;
                case "shadow":
                case "shape":
                  e = "shape";
                  break;
                case "draw":
                  e = "draw";
                  break;
                case "fill":
                  e = "fill";
                  break;
                case "gradient":
                case "lookup":
                  e = "gradient";
                  break;
                case "pen":
                  e = "pen";
                  break;
                case "temper":
                  e = "temper";
                  break;
                case "detail":
                  e = "detail";
                  break;
                case "toning":
                  e = "toning";
                  break;
                case "eraser":
                  e = "eraser";
                  break;
                case "clone":
                  e = "clone";
                  break;
                case "liquify":
                  e = "liquify";
                  break;
                case "healPatch":
                case "healInfill":
                  e = "heal";
                  break;
                case "glitch":
                  e = "glitch";
                  break;
                case "focus":
                  e = "focus";
                  break;
                case "disperse":
                  e = "disperse";
                  break;
                case "dispersion":
                  e = "dispersion";
                  break;
                case "auto":
                  e = "auto";
                  break;
                case "brightnessContrast":
                  e = "contrast";
                  break;
                case "temperatureTint":
                  e = "temperature";
                  break;
                case "hueSaturation":
                case "desaturate":
                  e = "saturation";
                  break;
                case "vibrance":
                  e = "vibrance";
                  break;
                case "mimicHDR":
                  e = "hdr";
                  break;
                case "highlightsShadows":
                  e = "highlights";
                  break;
                case "exposure":
                  e = "exposure";
                  break;
                case "curves":
                case "levels":
                case "rgbSplit":
                  e = "hue";
                  break;
                case "posterize":
                  e = "posterize";
                  break;
                case "monochrome":
                  e = "monochrome";
                  break;
                case "sharpen":
                  e = "sharpen";
                  break;
                case "clarity":
                  e = "clarity";
                  break;
                case "blur":
                case "gaussian":
                case "motionblur":
                case "zoom":
                  e = "blur";
                  break;
                case "smooth":
                  e = "smooth";
                  break;
                case "grain":
                case "noise":
                case "denoise":
                  e = "grain";
                  break;
                case "fringe":
                  e = "fringe";
                  break;
                case "vignette":
                  e = "vignette";
                  break;
                case "bloom":
                  e = "bloom";
                  break;
                case "glamour":
                  e = "glamour";
                  break;
                case "dehaze":
                  e = "dehaze";
                  break;
                case "pixelate":
                  e = "pixelate";
                  break;
                case "mosaic":
                  e = "mosaic";
                  break;
                case "halftone":
                  e = "halftone";
                  break;
                case "removeBackground":
                case "extractLayers":
                  e = "cutout";
              }
              return {
                title: (0, i.A)(`history${s}`),
                icon: e
              };
            }
          case "crop":
            return {
              title: (0, i.A)("historyCrop"),
              icon: "crop"
            };
          case "straighten":
            return {
              title: (0, i.A)("historyStraighten"),
              icon: "crop"
            };
          case "deleteLayer":
            return {
              title: (0, i.A)(`historyDelete${t.layer.type}`),
              icon: "delete"
            };
          case "arrange":
            {
              let e = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)(`history${e}`),
                icon: "arrange"
              };
            }
          case "arrangeStack":
            {
              let e = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)(`historyStack${e}`),
                icon: "arrange"
              };
            }
          case "link":
            return {
              title: (0, i.A)("historyLink" + (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1)),
              icon: "link"
            };
          case "flipLayer":
          case "flip":
            return {
              title: (0, i.A)("historyFlip"),
              icon: "menu"
            };
          case "rotateLayer":
          case "rotate":
            return {
              title: (0, i.A)("historyRotate"),
              icon: "menu"
            };
          case "layerSettings":
            return {
              title: (0, i.A)(`historyLayer${t.kind.charAt(0).toUpperCase() + t.kind.substring(1)}`),
              icon: "menu"
            };
          case "background":
            return {
              title: (0, i.A)("historyBackground"),
              icon: "picker"
            };
          case "pageSize":
            return {
              title: (0, i.A)("historyPageSize"),
              icon: "menu"
            };
          case "pageResize":
            return {
              title: (0, i.A)("historyPageResize"),
              icon: "menu"
            };
          case "mask":
            return {
              title: (0, i.A)("historyMask"),
              icon: "cutout"
            };
          case "maskInvert":
            return {
              title: (0, i.A)("historyMaskInvert"),
              icon: "cutout"
            };
          case "merge":
            return {
              title: (0, i.A)("historyMerge"),
              icon: "menu"
            };
          case "adjust":
            return {
              title: (0, i.A)("history" + t.kind.charAt(0).toUpperCase() + t.kind.substring(1)),
              icon: t.kind
            };
          case "glitch":
            return {
              title: (0, i.A)("historyGlitch" + t.kind.charAt(0).toUpperCase() + t.kind.substring(1)),
              icon: t.kind
            };
          case "effect":
            return {
              title: t.kind.charAt(0).toUpperCase() + t.kind.substring(1),
              icon: "effect"
            };
          case "selectionAndBitmapSwitch":
          case "selectionChange":
            {
              let e = "marquee";
              let s = t.kind;
              switch (t.kind) {
                case "lasso":
                  s = "Lasso";
                  e = "lasso";
                  break;
                case "wand":
                  s = "Wand";
                  e = "wand";
                  break;
                case "marquee":
                  s = "Marquee";
                  e = "marquee";
                  break;
                case "move":
                  s = "SelectionMove";
                  break;
                case "invert":
                  s = "SelectionInvert";
                  break;
                case "pixels":
                  s = "SelectionPixels";
                  break;
                case "subject":
                  s = "SelectionSubject";
                  break;
                case "all":
                  s = "SelectionAll";
                  break;
                case "restore":
                  s = "SelectionRestore";
                  break;
                case "deselect":
                  s = "Deselect";
                  break;
                case "cut":
                  s = "SelectionCut";
                  break;
                case "copy":
                  s = "SelectionCopy";
              }
              return {
                title: (0, i.A)(`history${s}`),
                icon: e
              };
            }
          case "open":
            return {
              title: (0, i.A)("historyOpen"),
              icon: "menu"
            };
          case "rasterize":
            return {
              title: (0, i.A)("historyRasterize" + t.kind),
              icon: "menu"
            };
          case "convertSelectionToMask":
            return {
              title: (0, i.A)("historyConvertSelectionToMask"),
              icon: "cutout"
            };
          case "convertMaskToSelection":
            return {
              title: (0, i.A)("historyConvertMaskToSelection"),
              icon: "marquee"
            };
          case "applyMask":
            return {
              title: (0, i.A)("historyApplyMask"),
              icon: "menu"
            };
          case "frameContent":
            {
              let e = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)("historyFrameContent" + e),
                icon: "image"
              };
            }
          case "frameSettings":
            {
              let e = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)("historyFrame" + e),
                icon: "frame"
              };
            }
          case "shapeSettings":
            {
              let e = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)("historyShape" + e),
                icon: "shape"
              };
            }
          case "groupSettings":
            {
              let e = (t.kind || "").charAt(0).toUpperCase() + (t.kind || "").substring(1);
              return {
                title: (0, i.A)("historyGroup" + e),
                icon: "group"
              };
            }
        }
      }
    }
