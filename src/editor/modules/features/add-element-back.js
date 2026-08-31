window.__editorModules[7023] = function (t, e, s) {
      s.d(e, {
        A: () => m
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(651);
      var o = s(5699);
      var r = s(749);
      var h = s(5328);
      var l = s(6939);
      var c = s(5887);
      var d = s(2443);
      var u = s(5432);
      var p = s(5056);
      async function g(t) {
        const e = await fetch(`https://pixlr.com/api/assets/${t}/download/`);
        const s = await e.json();
        if (!s.status) {
          throw new Error(s.message);
        }
        return s.data.url;
      }
      class m extends l.A {
        constructor(t) {
          super((0, i.A)("titleAddElement"), false, true);
          this.cache = new Map();
          this.SERVER_URL = "https://pixlr.com/api/assets/collections/keyword/";
          this.layerSelect = () => {
            let t = true;
            if (this.stage.fresco.isSelectedType(r.A.TYPE_ELEMENT)) {
              this.layer = this.stage.fresco.getSelected();
              t = this.layer.settings.name !== this.selected;
              this.selected = this.layer.settings.name;
              (0, a.Ay)("add-element-list").classList.add("element-layer-selected");
            } else {
              this.layer = null;
              this.selected = "";
              (0, a.Ay)("add-element-list").classList.remove("element-layer-selected");
            }
            if (this.subcategory && t) {
              (0, a.Ay)("element-settings").style.display = "none";
              const t = (0, a.Ay)("add-element-list").querySelectorAll(".element-box");
              for (let e = 0; e < t.length; e++) {
                const s = t[e];
                if (this.layer && this.layer.settings.name === s.id) {
                  s.classList.add("selected");
                  setTimeout(() => {
                    this.positionSettings(s, true);
                  }, 200);
                } else {
                  s.classList.remove("selected");
                }
              }
            }
          };
          this.back = () => {
            if (this.subcategory) {
              this.fetchCategory();
            } else {
              this.showCategoryList();
            }
          };
          this.showCategoryList = () => {
            (0, a.Ay)("add-element-back").style.display = "none";
            (0, a.Ay)("add-element-category-list").style.display = "block";
            (0, a.Ay)("add-element-category").style.display = "none";
            (0, a.Ay)("element-settings").style.display = "none";
          };
          this.selectCategory = t => {
            (0, a.Ay)("add-element-category-list").style.display = "none";
            (0, a.Ay)("add-element-category").style.display = "block";
            (0, a.Ay)("add-element-loading").style.display = "block";
            (0, a.Ay)("element-settings").style.display = "none";
            (0, a.Ay)("add-element-back").style.display = "flex";
            (0, a.Ay)("add-element-list").innerHTML = "";
            this.category = t.currentTarget.getAttribute("data");
            this.fetchCategory();
          };
          this.fetchCategory = async () => {
            (0, a.Ay)("add-element-list").innerHTML = "";
            (0, a.Ay)("add-element-loading").style.display = "block";
            (0, a.Ay)("element-settings").style.display = "none";
            if (this.cache.has(this.category)) {
              this.renderCategory(this.category, this.cache.get(this.category));
            } else {
              try {
                const t = await fetch(this.SERVER_URL + this.category + "?platform=web");
                const e = await t.json();
                if (!e.status) {
                  throw new Error("server_error");
                }
                let s = e.data;
                this.cache.set(this.category, s);
                this.renderCategory(this.category, s);
              } catch (t) {
                console.log(t);
                (0, a.Ay)("add-element-loading").style.display = "none";
                if (window.navigator.onLine) {
                  (0, a.Ay)("add-element-error").style.display = "block";
                } else {
                  (0, a.Ay)("add-element-offline").style.display = "block";
                }
              }
            }
          };
          this.renderCategory = (t, e) => {
            (0, a.Ay)("add-element-loading").style.display = "none";
            let s = (0, a.Ay)("add-element-list");
            this.subcategory = "";
            e.forEach(e => {
              let n = document.createElement("div");
              n.classList.add("element-group");
              n.addEventListener("click", () => {
                this.renderSubCategory(this.category, e.name, e.assets);
              }, false);
              let o = document.createElement("div");
              o.classList.add("wrap", t);
              n.appendChild(o);
              let r = document.createElement("img");
              if (e.assets.length > 0) {
                r.src = e.assets[0].thumbnailSmall;
                r.style.objectFit = "cover";
                r.style.overflow = "hidden";
              }
              o.appendChild(r);
              if (e.type === "premium") {
                let t = (0, a.T)("div", {
                  className: "premium-tag"
                }, (0, a.T)("img", {
                  src: "assets/images/icon/premium.svg"
                }));
                t.setAttribute("tooltip", (0, i.A)("premium"));
                t.setAttribute("flow", "up-right");
                o.append(t);
              }
              let h = document.createElement("span");
              h.innerText = e.name.replace("_", " ");
              n.appendChild(h);
              s.appendChild(n);
            });
            (0, a.Ay)("add-element-content").getElementsByClassName("ss-content")[0].scrollTo(0, 0);
          };
          this.renderSubCategory = (t, e, s) => {
            let n = (0, a.Ay)("add-element-list");
            n.innerHTML = "";
            this.subcategory = e;
            let o = t == c.A.VARIANT_OVERLAY;
            s.forEach(e => {
              let s = document.createElement("div");
              s.classList.add("element-box");
              s.id = e.id;
              if (o) {
                let a = document.createElement("a");
                a.classList.add("add", "button", "negative");
                a.innerHTML = "<img src='/img/icon/duplicate.svg'/> " + (0, i.A)("add");
                a.addEventListener("click", i => {
                  if (e.type !== "premium" || (0, u.zl)("premium")) {
                    this.addElement(s.id, false, t, e.id, g(e.id), (e == null ? undefined : e.metaData)?.blendmode, (e == null ? undefined : e.metaData)?.opacity, (e == null ? undefined : e.metaData)?.scalemode);
                  } else {
                    new d.default("element", "premium");
                  }
                }, false);
                s.appendChild(a);
              }
              s.addEventListener("click", i => {
                if (e.type !== "premium" || (0, u.zl)("premium")) {
                  this.addElement(s.id, o, t, e.id, g(e.id), (e == null ? undefined : e.metaData)?.blendmode, (e == null ? undefined : e.metaData)?.opacity, (e == null ? undefined : e.metaData)?.scalemode);
                } else {
                  new d.default("element", "premium");
                }
              }, false);
              let r = document.createElement("div");
              r.classList.add("wrap", t);
              s.appendChild(r);
              let h = document.createElement("img");
              h.src = e.thumbnailSmall;
              r.appendChild(h);
              if (e.type === "premium") {
                let t = (0, a.T)("div", {
                  className: "premium-tag"
                }, (0, a.T)("img", {
                  src: "assets/images/icon/premium.svg"
                }));
                t.setAttribute("tooltip", (0, i.A)("premium"));
                t.setAttribute("flow", "right");
                r.append(t);
              }
              let l = document.createElement("span");
              s.appendChild(l);
              if (this.layer && this.layer.settings.name == s.id) {
                setTimeout(() => {
                  s.classList.add("selected");
                  this.positionSettings(s, true);
                }, 200);
              }
              n.appendChild(s);
            });
            (0, a.Ay)("add-element-content").getElementsByClassName("ss-content")[0].scrollTo(0, 0);
          };
          this.select = t => {
            (0, a.Ay)("element-settings").style.display = "none";
            let e = (0, a.Ay)(t);
            let s = (0, a.Ay)("add-element-list").getElementsByTagName("div");
            for (var i = 0; i < s.length; i++) {
              s[i].classList.remove("selected");
            }
            e.classList.add("selected");
            this.selected = e.id;
            setTimeout(() => {
              this.positionSettings(e);
            }, 200);
          };
          this.positionSettings = (t, e = false) => {
            (0, a.Ay)("element-opacity").value = (0, a.Ay)("element_opacity_out").innerHTML = this.layer ? Math.round(this.layer.settings.opacity * 100).toString() : "100";
            if (e) {
              (0, a.Ay)("element-progress").style.display = "none";
            }
            (0, a.Ay)("element-rotate-flip").style.display = this.category === "overlay" || this.category === "border" ? "block" : "none";
            let s = (0, a.Ay)("element-settings");
            s.style.display = "block";
            s.style.top = t.offsetTop + "px";
            s.style.left = t.offsetLeft + "px";
          };
          this.addElement = async (t, e, s, i, n, r = "", h = 1, l = c.A.SCALE_METHOD_NONE) => {
            e = e && this.layer && this.layer.variant === s;
            this.select(t);
            this.canceled = false;
            this.loading = true;
            const d = (0, a.Ay)("element-progress");
            d.style.display = "block";
            d.value = 0;
            try {
              const t = await n;
              const e = await (0, p.yP)(t, t => {
                if (!this.canceled) {
                  if (t == -1) {
                    d.removeAttribute("value");
                  } else {
                    d.value = t;
                  }
                }
              });
              d.style.display = "none";
              if (this.canceled) {
                return;
              }
              const s = await (0, p.Ep)(e);
              if (this.canceled) {
                return;
              }
              this.loading = false;
              let a = o.k8(s, 4096);
              this.layer = this.stage.addElement(a, i, t, r, l);
            } catch (u) {
              console.log("Error", u);
              d.style.display = "none";
            }
          };
          this.delete = () => {
            if (this.loading) {
              this.loading = false;
              this.canceled = true;
              this.layerSelect();
            } else {
              this.layer = null;
              this.selected = "";
              this.stage.deleteLayer();
            }
          };
          this.opacityDown = t => {
            if (this.layer) {
              this.opacityStart = this.layer.settings.opacity;
            }
          };
          this.opacityUp = t => {
            if (this.layer) {
              this.stage.history.add({
                type: "layerSettings",
                kind: "opacity",
                layer: this.layer,
                settings: Object.assign(Object.assign({}, this.layer.settings), {
                  opacity: this.opacityStart
                })
              });
            }
          };
          this.opacity = t => {
            if (this.layer) {
              this.layer.settings.opacity = Number((0, a.Ay)("element-opacity").value) / 100;
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          };
          this.rotateOrFlip = t => {
            let e = this.stage.fresco.getSelected();
            if (!e || !e.rect) {
              return;
            }
            switch (t.currentTarget.getAttribute("id")) {
              case "element-flip-vertical":
                e.flip(true);
                break;
              case "element-flip-horizontal":
                e.flip(false);
                break;
              case "element-rotate-left":
                e.rotateAndFit(true, new n.A(this.stage.fresco.width, this.stage.fresco.width));
                break;
              case "element-rotate-right":
                e.rotateAndFit(false, new n.A(this.stage.fresco.width, this.stage.fresco.width));
            }
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.cleanUp = () => {
            (0, a.Ay)("add-element-list").innerHTML = "";
            document.removeEventListener("layer-select", this.layerSelect, false);
            (0, a.Ay)("element-rotate-left").removeEventListener("click", this.rotateOrFlip, false);
            (0, a.Ay)("element-rotate-right").removeEventListener("click", this.rotateOrFlip, false);
            (0, a.Ay)("element-flip-horizontal").removeEventListener("click", this.rotateOrFlip, false);
            (0, a.Ay)("element-flip-vertical").removeEventListener("click", this.rotateOrFlip, false);
            (0, a.Ay)("add-element-back").removeEventListener("click", this.back, false);
            (0, a.Ay)("element-delete").removeEventListener("click", this.delete, false);
            const t = (0, a.Ay)("element-opacity");
            t.removeEventListener("input", this.opacity, false);
            t.removeEventListener("mousedown", this.opacityDown, false);
            t.removeEventListener("mouseup", this.opacityUp, false);
            t.removeEventListener("touchstart", this.opacityDown, false);
            t.removeEventListener("touchend", this.opacityUp, false);
            let e = (0, a.Ay)("add-element-category-list").getElementsByTagName("li");
            for (var s = 0; s < e.length; s++) {
              e[s].removeEventListener("click", this.selectCategory, false);
            }
            document.removeEventListener("keydown", this.keyDown, false);
            this.dialog.remove();
            this.dialog = null;
            this.modal.remove();
            this.modal = null;
          };
          this.stage = t;
          this.dialog.style.width = "500px";
          this.dialog.style.height = "400px";
          this.dialog.style.maxWidth = "500px";
          this.content.style.padding = "0px 0px 0px 20px";
          this.content.id = "add-element-content";
          document.addEventListener("layer-select", this.layerSelect, false);
          this.setContent(`\n            <div id="element-settings">\n                <progress id="element-progress" value="0" max="100"></progress>\n                <img class="close" id="element-delete" src="assets/images/icon/close.svg" title="Delete">\n                <div class="range-white" id="element-settings-amount">\n                    <label>${(0, i.A)("transparency")}</label>\n                    <input type="range" value="100" min="0" max="100" step="1" id="element-opacity" name="element_opacity" oninput="element_opacity_out.value=this.value" />\n                    <output name="element_opacity_out" id="element_opacity_out" for="element_opacity">100</output>\n                </div>\n                <ul id="element-rotate-flip" class="small-icon-button-set">\n                    <li id="element-rotate-left"><img src="assets/images/icon/rotate-left.svg" alt="Rotate Left"></li>\n                    <li id="element-rotate-right"><img src="assets/images/icon/rotate-right.svg"  alt="Rotate Right"></li>\n                    <li id="element-flip-horizontal"><img src="assets/images/icon/flip-horizontal.svg"  alt="Flip Horizontal"></li>\n                    <li id="element-flip-vertical"><img src="assets/images/icon/flip-vertical.svg"  alt="Flip Vertical"></li>\n                </ul>\n            </div>\n\n            <ul id="add-element-category-list" class="section-list top-20">\n                <li data="overlay" id="add-element-overlay"><span>${(0, i.A)("overlay")}</span>\n                </li><li data="border" id="add-element-border"><span>${(0, i.A)("border")}</span>\n                </li><li data="shape" id="add-element-shape"><span>${(0, i.A)("shape")}</span>\n                </li><li data="sticker" id="add-element-sticker"><span>${(0, i.A)("sticker")}</span></li>\n            </ul>\n\n            <div id="add-element-category" style="display:none;" >\n                \n                <div id="add-element-loading" class="top-20" style="display:none;">${(0, i.A)("loading")} .. </div>\n                <div id="add-element-list" class="top-20">\n\n                </div>\n                <div id="add-element-error" class="top-20" style="display: none">\n                    <h3>${(0, i.A)("error")}</h3>\n                    <p>\n                        ${(0, i.A)("genericError")}\n                    </p>\n                </div>\n                <div id="add-element-offline" class="top-20" style="display: none">\n                    <h3>${(0, i.A)("offline")}</h3>\n                    <p>\n                        ${(0, i.A)("genericOffline")}\n                    </p>\n                </div>\n            </div>\n        `);
          (0, a.Ay)("dialog-buttons" + this.mid).insertBefore((0, a.T)("a", {
            className: "button negative",
            id: "add-element-back",
            style: "margin-right:auto"
          }, (0, a.T)("img", {
            src: "assets/images/icon/back-small.svg",
            width: 14,
            height: 14
          }), (0, i.A)("back")), (0, a.Ay)("dialog-cancel" + this.mid));
          (0, a.Ay)("dialog-apply" + this.mid).style.display = "none";
          (0, a.Ay)("dialog-cancel" + this.mid).innerText = (0, i.A)("close");
          (0, a.Ay)("add-element-back").addEventListener("click", this.back, false);
          (0, a.Ay)("element-delete").addEventListener("click", this.delete, false);
          const e = (0, a.Ay)("element-opacity");
          e.addEventListener("input", this.opacity, false);
          e.addEventListener("mousedown", this.opacityDown, false);
          e.addEventListener("mouseup", this.opacityUp, false);
          e.addEventListener("touchstart", this.opacityDown, {
            passive: true
          });
          e.addEventListener("touchend", this.opacityUp, {
            passive: true
          });
          (0, a.Ay)("element-rotate-left").addEventListener("click", this.rotateOrFlip, false);
          (0, a.Ay)("element-rotate-right").addEventListener("click", this.rotateOrFlip, false);
          (0, a.Ay)("element-flip-horizontal").addEventListener("click", this.rotateOrFlip, false);
          (0, a.Ay)("element-flip-vertical").addEventListener("click", this.rotateOrFlip, false);
          let s = (0, a.Ay)("add-element-category-list").getElementsByTagName("li");
          for (var l = 0; l < s.length; l++) {
            s[l].addEventListener("click", this.selectCategory, false);
          }
          this.showCategoryList();
          this.layerSelect();
          new h.A(this.content);
        }
      }
    }
