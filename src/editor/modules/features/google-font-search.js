window.__editorModules[5992] = function (t, e, s) {
      s.d(e, {
        A: () => _
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(4587);
      var r = s(3244);
      var h = s(5527);
      var l = s(3517);
      var c = s(5259);
      var d = s(749);
      var u = s(98);
      var p = s(1450);
      var g = s(3438);
      var m = s(6050);
      var y = s(5328);
      var v = s(5432);
      var f = s(4182);
      var w = s(2128);
      var x = s(2443);
      var b = s(6939);
      let A = null;
      const k = ["all", "sans-serif", "serif", "display", "handwriting", "monospace"];
      const S = {
        all: "All",
        "sans-serif": "Sans Serif",
        serif: "Serif",
        display: "Display",
        handwriting: "Handwriting",
        monospace: "Monospace"
      };
      const E = [["all", "All languages"], ["arabic", "Arabic"], ["bengali", "Bengali"], ["chinese-simplified", "Chinese Simplified"], ["chinese-traditional", "Chinese Traditional"], ["cyrillic", "Cyrillic"], ["devanagari", "Devanagari"], ["greek", "Greek"], ["gujarati", "Gujarati"], ["hebrew", "Hebrew"], ["japanese", "Japanese"], ["kannada", "Kannada"], ["khmer", "Khmer"], ["korean", "Korean"], ["latin", "Latin"], ["latin-ext", "Latin Extended"], ["malayalam", "Malayalam"], ["myanmar", "Myanmar"], ["oriya", "Oriya"], ["sinhala", "Sinhala"], ["tamil", "Tamil"], ["telugu", "Telugu"], ["thai", "Thai"], ["tibetan", "Tibetan"], ["vietnamese", "Vietnamese"]];
      class C extends b.A {
        constructor(t, e) {
          super((0, a.A)("googleFonts"), true, true);
          this.allFonts = [];
          this.filteredFonts = [];
          this.activeCategory = "all";
          this.activeLanguage = "all";
          this.rendered = 0;
          this.injectedLinks = [];
          this.loadFonts = async () => {
            this.scrollContent.innerHTML = "";
            this.listHolder.classList.add("working", "large");
            try {
              if (!A) {
                const t = await fetch("/api/font/google");
                const e = await t.json();
                if (!e.status || !e.data) {
                  this.listHolder.classList.remove("working", "large");
                  this.scrollContent.innerHTML = "";
                  this.scrollContent.appendChild((0, i.T)("p", {
                    className: "text-dim",
                    style: "padding:20px"
                  }, (0, a.A)("commonFailedLoadGoogleFonts")));
                  return;
                }
                A = e.data;
              }
              this.listHolder.classList.remove("working", "large");
              this.allFonts = A;
              this.filterFonts();
            } catch (t) {
              this.listHolder.classList.remove("working", "large");
              this.scrollContent.innerHTML = "";
              this.scrollContent.appendChild((0, i.T)("p", {
                className: "text-dim",
                style: "padding:20px"
              }, (0, a.A)("commonFailedLoadGoogleFonts")));
            }
          };
          this.filterFonts = () => {
            const s = ((0, i.Ay)("google-font-search" + this.mid)?.value || "").toLowerCase();
            this.activeLanguage = (0, i.Ay)("google-font-lang" + this.mid)?.value || "all";
            this.filteredFonts = this.allFonts.filter(t => (this.activeCategory === "all" || t.category === this.activeCategory) && (this.activeLanguage === "all" || !!t.subsets && !!t.subsets.includes(this.activeLanguage)) && (!s || !!t.family.toLowerCase().includes(s)));
            this.rendered = 0;
            this.scrollContent.innerHTML = "";
            this.renderBatch();
          };
          this.selectCategory = t => {
            k.forEach(e => {
              const s = (0, i.Ay)("gf-cat-" + e + this.mid);
              if (s) {
                s.classList.toggle("active", e === t);
              }
            });
            this.activeCategory = t;
            this.filterFonts();
          };
          this.renderBatch = () => {
            if (this.rendered >= this.filteredFonts.length) {
              return;
            }
            this.sentinel.remove();
            const t = Math.min(this.rendered + 50, this.filteredFonts.length);
            const e = [];
            for (let s = this.rendered; s < t; s++) {
              const t = this.filteredFonts[s];
              const n = !!f.A.fontList.find(e => e.name === t.family);
              const o = (0, i.T)("a", {
                className: n ? "button small outline disabled" : "button small positive",
                onclick: n ? undefined : e => this.installFont(t, e.currentTarget)
              }, n ? (0, a.A)("commonAdded") : (0, a.A)("commonAdd"));
              const r = (0, i.T)("div", {
                className: "google-font-preview",
                style: `font-family: '${t.family}', ${t.category}`
              }, t.family);
              const h = (0, i.T)("div", {
                className: "google-font-item"
              }, (0, i.T)("div", {
                className: "google-font-item-info"
              }, r, (0, i.T)("div", {
                className: "google-font-name"
              }, t.category)), o);
              this.scrollContent.appendChild(h);
              e.push(t.family);
            }
            this.rendered = t;
            if (e.length > 0) {
              const t = e.map(t => "family=" + encodeURIComponent(t)).join("&");
              const s = document.createElement("link");
              s.rel = "stylesheet";
              s.href = `https://fonts.googleapis.com/css2?${t}&display=swap`;
              document.head.appendChild(s);
              this.injectedLinks.push(s);
            }
            if (this.rendered < this.filteredFonts.length) {
              this.scrollContent.appendChild(this.sentinel);
              this.observer.observe(this.sentinel);
            }
          };
          this.installFont = async (t, e) => {
            if (!e.classList.contains("disabled") && !e.classList.contains("working")) {
              e.classList.add("working");
              e.textContent = (0, a.A)("commonAdding");
              try {
                const {
                  blob: s,
                  type: i
                } = await async function (t) {
                  const e = await fetch(t);
                  if (!e.ok) {
                    throw new Error("Failed to download font");
                  }
                  return {
                    blob: await e.blob(),
                    type: "ttf"
                  };
                }(t.file);
                const n = t.family.substring(0, 20).replace(/\s/g, "").toLowerCase();
                if (await f.A.createLocalFontDesc(s, t.family, n, i)) {
                  e.classList.remove("working", "positive");
                  e.classList.add("outline", "disabled");
                  e.textContent = (0, a.A)("commonAdded");
                  e.onclick = undefined;
                  this.onInstall(t.family);
                } else {
                  e.classList.remove("working");
                  e.textContent = (0, a.A)("commonAdd");
                }
              } catch (s) {
                e.classList.remove("working");
                e.textContent = (0, a.A)("commonAdd");
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, a.A)("commonFailedInstallFont")
                }));
              }
            }
          };
          this.apply = () => {
            this.cleanUp();
          };
          this.cancel = () => {
            this.cleanUp();
          };
          this.onInstall = t;
          this.onClose = e;
          (0, i.Ay)("dialog-apply" + this.mid).style.display = "none";
          (0, i.Ay)("dialog-cancel" + this.mid).innerText = (0, a.A)("close");
          (0, i.Ay)("dialog-buttons" + this.mid).style.marginTop = "0px";
          this.dialog.style.width = "90%";
          this.dialog.style.maxWidth = "700px";
          this.dialog.style.height = window.innerHeight - 200 + "px";
          this.dialog.classList.add("google-font-dialog");
          this.content.style.padding = "0";
          this.content.style.height = "1vh";
          this.content.style.display = "flex";
          this.content.style.flexDirection = "column";
          const s = (0, i.T)("input", {
            id: "google-font-search" + this.mid,
            type: "text",
            style: "flex:1",
            placeholder: (0, a.A)("googleFontsSearch")
          });
          s.addEventListener("input", () => {
            n.sg("gf-search", 200, () => this.filterFonts());
          });
          const o = (0, i.T)("div", {
            className: "google-font-categories"
          });
          k.forEach(t => {
            const e = (0, i.T)("a", {
              id: "gf-cat-" + t + this.mid,
              className: "google-font-category" + (t === "all" ? " active" : ""),
              onclick: () => this.selectCategory(t)
            }, S[t]);
            o.appendChild(e);
          });
          const r = (0, i.T)("select", {
            id: "google-font-lang" + this.mid,
            onchange: () => this.filterFonts()
          });
          E.forEach(([t, e]) => {
            r.appendChild((0, i.T)("option", {
              value: t
            }, e));
          });
          const h = (0, i.T)("div", {
            className: "google-font-filters"
          }, (0, i.T)("div", {
            className: "google-font-search-row"
          }, s, (0, i.T)("div", {
            className: "select"
          }, r)), o);
          this.listHolder = (0, i.T)("div", {
            id: "google-font-list" + this.mid,
            className: "google-font-list"
          });
          this.setContent(h, this.listHolder);
          new y.A(this.listHolder);
          this.scrollContent = (0, i.Ay)("google-font-list" + this.mid + "-ss-content");
          this.sentinel = (0, i.T)("div", {
            className: "google-font-sentinel"
          });
          this.observer = new IntersectionObserver(t => {
            if (t[0].isIntersecting) {
              this.renderBatch();
            }
          }, {
            root: this.scrollContent
          });
          this.loadFonts();
          this.position();
        }
        cleanUp() {
          var t;
          var e;
          if ((t = this.observer) !== null && t !== undefined) {
            t.disconnect();
          }
          this.injectedLinks.forEach(t => t.remove());
          this.injectedLinks = [];
          if ((e = this.onClose) !== null && e !== undefined) {
            e.call(this);
          }
          super.cleanUp();
        }
      }
      class T {
        constructor(t, e, s, o) {
          this.addLocalFont = () => {
            (0, w.XN)(true).then(async t => {
              for (var e, s = 0; e = t[s]; s++) {
                await (0, w.Tq)(e, this.stage);
              }
              this.removeEventHandlers();
              this.showFontList();
            });
          };
          this.showFontList = () => {
            (0, i.Ay)("font-wrap").classList.add("show");
            (0, i.Ay)("font-wrap").classList.add("modal");
            this.populateFonts();
            this.setEventHandlers();
            if (this.selected) {
              this.setFont(this.selected);
            }
          };
          this.hideFontList = (t = true) => {
            (0, i.Ay)("font-wrap").classList.remove("show");
            (0, i.Ay)("font-wrap").classList.remove("modal");
            if (t && this.inFocus && this.inFocus.getAttribute("data") !== this.selected) {
              this.loadFont(this.selected, true);
            }
            if (this.selected && (0, i.Ay)("font:" + this.selected)) {
              (0, i.Ay)("font:" + this.selected).classList.remove("selected");
            }
            this.removeEventHandlers();
          };
          this.systemFontShorts = ["arial", "courier", "georgia", "trebuchet", "verdana"];
          this.activeTab = "imported";
          this.selectTab = t => {
            this.activeTab = t;
            const e = (0, i.Ay)("font-tab-imported");
            const s = (0, i.Ay)("font-tab-presets");
            if (e && s) {
              e.classList.toggle("active", t === "imported");
              s.classList.toggle("active", t === "presets");
            }
            this.populateFonts(true);
            const pods = document.querySelectorAll("#font-list-holder div.font-pod");
            for (let i = 0; i < pods.length; i++) {
              pods[i].addEventListener("click", this.selectFont, false);
              pods[i].addEventListener("mouseenter", this.enterFont, false);
            }
          };
          this.populateFonts = (force = false) => {
            const holder = (0, i.Ay)("font-list-holder-ss-content");
            const list = f.A.fontList.filter(t => this.activeTab === "imported" ? t.local || this.systemFontShorts.includes(t.short) : !t.local && !this.systemFontShorts.includes(t.short));
            if (force || holder.childElementCount !== list.length) {
              holder.innerHTML = "";
              list.forEach(e => {
                let s = document.createElement("div");
                if (e.local) {
                  s.append((0, i.T)("img", {
                    src: URL.createObjectURL(e.thumb),
                    title: e.name,
                    className: "thumb ic",
                    loading: "lazy",
                    width: 200,
                    height: 40
                  }), (0, i.T)("img", {
                    src: "assets/images/icon/close.svg",
                    title: "Remove font",
                    className: "close ic",
                    onclick: t => this.removeFont(t, "font:" + e.name)
                  }));
                } else {
                  s.append((0, i.T)("img", {
                    src: "assets/fonts/" + e.short + ".png",
                    title: e.name,
                    className: "thumb ic",
                    loading: "lazy",
                    width: 200,
                    height: 40
                  }));
                }
                s.setAttribute("data", e.name);
                s.setAttribute("id", "font:" + e.name);
                s.classList.add("font-pod");
                holder.appendChild(s);
              });
            }
          };
          this.setEventHandlers = () => {
            document.addEventListener("keydown", this.keyPress, true);
            const t = document.querySelectorAll("#font-list-holder div.font-pod");
            for (let e = 0; e < t.length; e++) {
              t[e].addEventListener("click", this.selectFont, false);
              t[e].addEventListener("mouseenter", this.enterFont, false);
            }
          };
          this.removeEventHandlers = () => {
            document.removeEventListener("keydown", this.keyPress, true);
            const t = document.querySelectorAll("#font-list-holder div.font-pod");
            for (let e = 0; e < t.length; e++) {
              t[e].removeEventListener("click", this.selectFont, false);
              t[e].removeEventListener("mouseenter", this.enterFont, false);
            }
          };
          this.dragStart = t => {
            t.stopPropagation();
            this.p = new m.A(t.clientX, t.clientY);
            this.d = new m.A(this.fontList.offsetLeft, this.fontList.offsetTop);
            document.addEventListener("mousemove", this.dragMove, true);
            document.addEventListener("mouseup", this.dragEnd, true);
          };
          this.dragMove = t => {
            t.stopPropagation();
            this.fontList.style.left = Math.round(this.d.x + (t.clientX - this.p.x)) + "px";
            this.fontList.style.top = Math.round(this.d.y + (t.clientY - this.p.y)) + "px";
          };
          this.dragEnd = t => {
            t.stopPropagation();
            this.p = undefined;
            document.removeEventListener("mousemove", this.dragMove, true);
            document.removeEventListener("mouseup", this.dragEnd, true);
          };
          this.keyPress = t => {
            var e;
            const s = () => {
              const t = document.querySelectorAll("#font-list-holder div.font-pod");
              const e = (0, i.Ay)("font-search").value;
              this.inFocus = undefined;
              for (let s = 0; s < t.length; s++) {
                if (t[s].getAttribute("data").toLowerCase().startsWith(e)) {
                  t[s].style.display = "block";
                  this.inFocus ||= t[s];
                } else {
                  t[s].style.display = "none";
                }
              }
            };
            if (t.ctrlKey || t.key === "Backspace" || t.key === "Delete") {
              n.sg("preview", 200, s);
            } else {
              t.preventDefault();
              t.stopPropagation();
              if ((e = this.inFocus) !== null && e !== undefined) {
                e.classList.remove("focus");
              }
              if (!this.inFocus) {
                const t = document.querySelectorAll("#font-list-holder div.font-pod");
                this.inFocus = t[0];
              }
              if (t.key === "ArrowUp") {
                for (this.inFocus = this.inFocus.previousElementSibling; this.inFocus && this.inFocus.style.display === "none";) {
                  this.inFocus = this.inFocus.previousElementSibling;
                }
                if (!this.inFocus) {
                  const t = document.querySelectorAll("#font-list-holder div.font-pod");
                  this.inFocus = t[t.length - 1];
                }
              } else if (t.key === "ArrowDown") {
                for (this.inFocus = this.inFocus.nextElementSibling; this.inFocus && this.inFocus.style.display === "none";) {
                  this.inFocus = this.inFocus.nextElementSibling;
                }
                if (!this.inFocus) {
                  const t = document.querySelectorAll("#font-list-holder div.font-pod");
                  this.inFocus = t[0];
                }
              } else {
                if (t.key === "Escape") {
                  this.hideFontList();
                  return;
                }
                if (t.key === "Enter") {
                  if (this.inFocus && this.inFocus.getAttribute("data") !== this.selected) {
                    if (!this.inFocus.classList.contains("premium") || !!(0, v.zl)("premium")) {
                      this.loadFont(this.inFocus.getAttribute("data"));
                      this.hideFontList(false);
                    }
                    this.hideFontList(true);
                  }
                } else {
                  let e = (0, i.Ay)("font-search").value;
                  if (t.key.length > 1) {
                    return;
                  }
                  e += t.key;
                  (0, i.Ay)("font-search").value = e;
                  s();
                }
              }
              if (this.inFocus) {
                this.inFocus.classList.add("focus");
                const t = this.inFocus.getAttribute("data");
                this.inFocus.scrollIntoView({
                  behavior: "auto",
                  block: "nearest",
                  inline: "nearest"
                });
                n.sg("preview", 200, () => {
                  this.loadFont(t, true);
                });
              }
            }
          };
          this.lx = 0;
          this.ly = 0;
          this.enterFont = t => {
            var e;
            if (t.clientX === this.lx && t.clientY === this.ly) {
              return;
            }
            this.lx = t.clientX;
            this.ly = t.clientY;
            if ((e = this.inFocus) !== null && e !== undefined) {
              e.classList.remove("focus");
            }
            this.inFocus = t.currentTarget;
            this.inFocus.classList.add("focus");
            const s = this.inFocus.getAttribute("data");
            n.sg("preview", 200, () => {
              this.loadFont(s, true);
            });
          };
          this.selectFont = t => {
            let e = t.currentTarget;
            let i = e.getAttribute("data");
            this.loadFont(i);
            this.hideFontList(false);
          };
          this.removeFont = (t, e) => {
            t.preventDefault();
            t.stopPropagation();
            let s = (0, i.Ay)(e);
            f.A.removeLocalFontDesc(s.getAttribute("data"));
            s.remove();
          };
          this.loadFont = async (t, e = false) => {
            try {
              await f.A.loadFont(t);
              if (e) {
                this.preview(t);
              } else {
                const e = this.selected;
                if (e !== t) {
                  this.setFont(t);
                  this.callback(t, e);
                }
              }
            } catch (s) {
              console.error("Could not load font", t, s);
            }
          };
          this.cleanUp = () => {
            this.hideFontList();
            (0, i.Ay)("font-search").blur();
            this.removeEventHandlers();
            this.holder.removeEventListener("click", this.showFontList, false);
          };
          this.stage = t;
          this.holder = e;
          this.preview = o;
          this.callback = s;
          this.holder.addEventListener("click", this.showFontList, false);
          this.selected = f.A.fontList[0].name;
          if (!(0, i.Ay)("font-list")) {
            let t = (0, i.T)("div", {
              id: "font-wrap",
              onmousedown: t => {
                if (t.target === (0, i.Ay)("font-wrap")) {
                  this.hideFontList();
                }
              }
            }, (0, i.T)("div", {
              id: "font-list"
            }, (0, i.T)("img", {
              id: "font-close",
              className: "close ic",
              src: "assets/images/icon/close.svg",
              onclick: () => this.hideFontList()
            }), (0, i.T)("div", {
              id: "font-list-title",
              className: "title",
              onmousedown: t => this.dragStart(t)
            }, (0, a.A)("font")), (0, i.T)("div", {
              className: "splitter"
            }), (0, i.T)("div", {
              className: "pill-toggle",
              style: "margin: 10px 15px;"
            }, (0, i.T)("div", {
              id: "font-tab-imported",
              className: "pill-toggle-item active",
              onclick: () => this.selectTab("imported")
            }, "Imported"), (0, i.T)("div", {
              id: "font-tab-presets",
              className: "pill-toggle-item",
              onclick: () => this.selectTab("presets")
            }, "Presets")), (0, i.T)("div", {
              style: "position:relative;margin: 0 15px 10px 15px;"
            }, (0, i.T)("input", {
              id: "font-search",
              className: "font-search",
              type: "text",
              placeholder: (0, a.A)("search")
            }), (0, i.T)("img", {
              id: "font-search-icon",
              className: "search-icon ic",
              src: "assets/images/tool/zoom.svg"
            })), (0, i.T)("div", {
              id: "font-list-holder"
            }), (0, i.T)("div", {
              id: "font-list-add"
            }, (0, i.T)("div", {
              className: "button positive w-100",
              onclick: this.addLocalFont
            }, (0, i.T)("img", {
              src: "assets/images/icon/plus.svg",
              width: 20,
              height: 20
            }), (0, a.A)("addLocalFont")))));
            document.body.appendChild(t);
            new y.A((0, i.Ay)("font-list-holder"));
          }
          this.fontList = (0, i.Ay)("font-list");
        }
        setFont(t) {
          if (this.selected && (0, i.Ay)("font:" + this.selected)) {
            (0, i.Ay)("font:" + this.selected).classList.remove("selected");
          }
          let e = (0, i.Ay)("font:" + t);
          if (e) {
            e.classList.add("selected");
            let t = e.childNodes[0];
            this.holder.innerHTML = "<img src=\"" + t.src + "\" class=\"ic\" title=\"" + t.title + "\" />";
          } else {
            let e = f.A.getFontDesc(t);
            if (e) {
              if (e.local) {
                this.holder.innerHTML = "<img src=\"" + URL.createObjectURL(e.thumb) + "\" class=\"ic\" title=\"" + e.name + "\" />";
              } else {
                this.holder.innerHTML = "<img src=\"assets/fonts/" + e.short + ".png\" class=\"ic\" title=\"" + e.name + "\" />";
              }
            }
          }
          this.selected = t;
        }
      }
      var L = s(8464);
      var M = s(2543);
      var P = s(3848);
      class D extends P.A {
        constructor(t, e) {
          super(e, (0, a.A)("format"));
          this.changeUppercase = () => {
            const t = this.selected.textSettings.clone();
            this.selected.setTextUpperCase(!this.selected.textSettings.uppercase);
            (0, i.Ay)("text-uppercase").classList.toggle("selected", this.selected.textSettings.uppercase);
            this.stage.history.add({
              type: "textSettings",
              kind: "uppercase",
              layer: this.selected,
              settings: t
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeItalic = () => {
            const t = this.selected.textSettings.clone();
            this.selected.setTextItalic(!this.selected.textSettings.italic);
            (0, i.Ay)("text-italic").classList.toggle("selected", this.selected.textSettings.italic);
            this.stage.history.add({
              type: "textSettings",
              kind: "italic",
              layer: this.selected,
              settings: t
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeBold = () => {
            const t = this.selected.textSettings.clone();
            this.selected.setTextBold(!this.selected.textSettings.bold);
            (0, i.Ay)("text-bold").classList.toggle("selected", this.selected.textSettings.bold);
            this.stage.history.add({
              type: "textSettings",
              kind: "bold",
              layer: this.selected,
              settings: t
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeUnderline = () => {
            const t = this.selected.textSettings.clone();
            this.selected.setTextUnderline(!this.selected.textSettings.underline);
            (0, i.Ay)("text-underline").classList.toggle("selected", this.selected.textSettings.underline);
            this.stage.history.add({
              type: "textSettings",
              kind: "underline",
              layer: this.selected,
              settings: t
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeLineSpace = t => {
            this.selected.textSettings.lineSpace = t;
            n.sg("text-change", 50, () => {
              this.selected.setLineSpace(t);
              document.dispatchEvent(new CustomEvent("viewport-render"));
            });
          };
          this.changeLetterSpace = t => {
            this.selected.textSettings.letterSpace = t;
            n.sg("text-change", 50, () => {
              this.selected.setLetterSpace(t);
              document.dispatchEvent(new CustomEvent("viewport-render"));
            });
          };
          this.changeAlign = t => {
            const e = this.selected.textSettings.clone();
            const s = document.querySelector("input[name=\"text-align\"]:checked").value;
            this.selected.setTextAlign(s);
            if (e.align !== this.selected.textSettings.align) {
              this.stage.history.add({
                type: "textSettings",
                kind: "align",
                layer: this.selected,
                settings: e
              });
            }
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.cleanUp = () => {
            this.lineSpacing.cleanUp();
            this.letterSpacing.cleanUp();
            (0, i.Ay)("text-align-left").removeEventListener("click", this.changeAlign, false);
            (0, i.Ay)("text-align-center").removeEventListener("click", this.changeAlign, false);
            (0, i.Ay)("text-align-right").removeEventListener("click", this.changeAlign, false);
            (0, i.Ay)("text-align-justify").removeEventListener("click", this.changeAlign, false);
            (0, i.Ay)("text-uppercase").removeEventListener("click", this.changeUppercase, false);
            (0, i.Ay)("text-italic").removeEventListener("click", this.changeItalic, false);
            (0, i.Ay)("text-bold").removeEventListener("click", this.changeBold, false);
            (0, i.Ay)("text-underline").removeEventListener("click", this.changeUnderline, false);
            this.superCleanUp();
          };
          this.stage = t;
          this.setContent(`\n            <section>\n                <div id="line-space" class="range-box top-5"></div>\n                <div id="letter-space" class="range-box top-10"></div>\n                <label class="top-10">${(0, a.A)("align")}</label>\n                <div class="switch-icon-field stretch top-5">\n                    <input type="radio" id="text-align-left" name="text-align" value="left"><label for="text-align-left" tooltip="${(0, a.A)("alignLeft")}" flow="up-right"><img src="assets/images/icon/align-left.svg" class="ic"></label>\n                    <input type="radio" id="text-align-center" name="text-align" value="center"><label for="text-align-center" tooltip="${(0, a.A)("alignCenter")}" flow="up"><img src="assets/images/icon/align-center.svg" class="ic"></label>\n                    <input type="radio" id="text-align-right" name="text-align" value="right"><label for="text-align-right" tooltip="${(0, a.A)("alignRight")}" flow="up"><img src="assets/images/icon/align-right.svg" class="ic"></label>\n                    <input type="radio" id="text-align-justify" name="text-align" value="justify"><label for="text-align-justify" tooltip="${(0, a.A)("alignJustify")}" flow="up"><img src="assets/images/icon/align-justify.svg" class="ic"></label>\n                </div>\n                <label class="top-16">${(0, a.A)("style")}</label>\n                <ul class="icon-button-set stretch top-5">\n                    <li id="text-uppercase" tooltip="${(0, a.A)("uppercase")}" flow="up"><img class="ic" src="assets/images/icon/uppercase.svg" /><div class="mark"></div></li>\n                    <li id="text-italic" tooltip="${(0, a.A)("italic")}" flow="up"><img class="ic" src="assets/images/icon/italic.svg" /><div class="mark"></div></li>\n                    <li id="text-bold" tooltip="${(0, a.A)("bold")}" flow="up"><img class="ic" src="assets/images/icon/bold.svg" /><div class="mark"></div></li>\n                    <li id="text-underline" tooltip="${(0, a.A)("underline")}" flow="up"><img class="ic" src="assets/images/icon/underline.svg" /><div class="mark"></div></li>\n                </ul>\n            </section>\n        `);
          this.selected = this.stage.fresco.getSelected();
          let s = this.selected.textSettings;
          const o = {
            onStart: () => {
              s = this.selected.textSettings.clone();
            },
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          };
          this.lineSpacing = new l.A("line-space", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("lineSpace"),
            range: [-1, 1],
            onChange: this.changeLineSpace,
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "linespace",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.lineSpacing.setValue(s.lineSpace);
          this.letterSpacing = new l.A("letter-space", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("letterSpace"),
            range: [-0.2, 1],
            onChange: this.changeLetterSpace,
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "letterspace",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.letterSpacing.setValue(s.letterSpace);
          (0, i.Ay)("text-uppercase").classList.toggle("selected", this.selected.textSettings.uppercase);
          (0, i.Ay)("text-italic").classList.toggle("selected", this.selected.textSettings.italic);
          (0, i.Ay)("text-bold").classList.toggle("selected", this.selected.textSettings.bold);
          (0, i.Ay)("text-underline").classList.toggle("selected", this.selected.textSettings.underline);
          (0, i.Ay)("text-align-left").checked = this.selected.textSettings.align === "left";
          (0, i.Ay)("text-align-center").checked = this.selected.textSettings.align === "center";
          (0, i.Ay)("text-align-right").checked = this.selected.textSettings.align === "right";
          (0, i.Ay)("text-align-justify").checked = this.selected.textSettings.align === "justify";
          (0, i.Ay)("text-align-left").addEventListener("click", this.changeAlign, false);
          (0, i.Ay)("text-align-center").addEventListener("click", this.changeAlign, false);
          (0, i.Ay)("text-align-right").addEventListener("click", this.changeAlign, false);
          (0, i.Ay)("text-align-justify").addEventListener("click", this.changeAlign, false);
          (0, i.Ay)("text-uppercase").addEventListener("click", this.changeUppercase, false);
          (0, i.Ay)("text-italic").addEventListener("click", this.changeItalic, false);
          (0, i.Ay)("text-bold").addEventListener("click", this.changeBold, false);
          (0, i.Ay)("text-underline").addEventListener("click", this.changeUnderline, false);
        }
      }
      var z = s(833);
      class I extends P.A {
        constructor(t, e) {
          super(e, (0, a.A)("styles"), true);
          this.updateInputs = () => {
            (0, i.Ay)("text-background").checked = this.selected.textSettings.background;
            (0, i.Ay)("text-background-punch").checked = this.selected.textSettings.backgroundPunch;
            this.backgroundColor.setColor(this.selected.textSettings.backgroundColor);
            this.backgroundOffset.setValue(this.selected.textSettings.backgroundOffset);
            (0, i.Ay)("text-background-type-full").checked = this.selected.textSettings.backgroundType == L.A.BACKGROUND_FULL;
            (0, i.Ay)("text-background-type-line").checked = this.selected.textSettings.backgroundType == L.A.BACKGROUND_LINE;
            (0, i.Ay)("text-background-type-word").checked = this.selected.textSettings.backgroundType == L.A.BACKGROUND_WORD;
            (0, i.Ay)("text-outline").checked = this.selected.textSettings.outline;
            (0, i.Ay)("text-outline-punch").checked = this.selected.textSettings.outlinePunch;
            this.outlineColor.setColor(this.selected.textSettings.outlineColor);
            this.outlineSize.setValue(this.selected.textSettings.outlineSize);
            this.outlineDistance.setValue(this.selected.textSettings.outlineDistance);
            this.outlineDirection.setValue(this.selected.textSettings.outlineDirection);
            (0, i.Ay)("text-shadow").checked = this.selected.textSettings.shadow;
            this.shadowColor.setColor(this.selected.textSettings.shadowColor);
            this.shadowBlur.setValue(this.selected.textSettings.shadowBlur);
            this.shadowAlpha.setValue(this.selected.textSettings.shadowAlpha);
            this.shadowDirection.setValue(this.selected.textSettings.shadowDirection);
            this.shadowDistance.setValue(this.selected.textSettings.shadowDistance);
            (0, i.Ay)("text-curve").checked = this.selected.textSettings.curve;
            this.curveAmount.setValue(this.selected.textSettings.curveAmount);
            (0, i.Ay)("text-curve-flip").checked = this.selected.textSettings.curveFlip;
            (0, i.Ay)("text-curve-spread").checked = this.selected.textSettings.curveSpread;
            (0, i.Ay)("text-curve-type-arc").checked = this.selected.textSettings.curveType === "arc";
            (0, i.Ay)("text-curve-type-circle").checked = this.selected.textSettings.curveType === "circle";
            (0, i.Ay)("text-curve-type-half").checked = this.selected.textSettings.curveType === "half";
            (0, i.Ay)("text-curve-amount").style.display = this.selected.textSettings.curveType !== "arc" ? "none" : "block";
            (0, i.Ay)("text-curve-flip-label").style.display = this.selected.textSettings.curveType !== "arc" ? "block" : "none";
            (0, i.Ay)("text-curve-spread-label").style.display = this.selected.textSettings.curveType !== "arc" ? "block" : "none";
            (0, i.Ay)("text-warp").checked = this.selected.textSettings.warp;
            (0, i.Ay)("text-warp-type-circular").checked = this.selected.textSettings.warpType === L.A.WARP_CIRCULAR;
            (0, i.Ay)("text-warp-type-angular").checked = this.selected.textSettings.warpType === L.A.WARP_ANGULAR;
            (0, i.Ay)("text-warp-mode-upper").checked = this.selected.textSettings.warpMode === L.A.WARP_UPPER;
            (0, i.Ay)("text-warp-mode-middle").checked = this.selected.textSettings.warpMode === L.A.WARP_MIDDLE;
            (0, i.Ay)("text-warp-mode-lower").checked = this.selected.textSettings.warpMode === L.A.WARP_LOWER;
            this.warpEdgeSize.setValue(this.selected.textSettings.warpEdgeSize);
            this.warpCenterSize.setValue(this.selected.textSettings.warpCenterSize);
            this.warpHorizontalOffset.setValue(this.selected.textSettings.warpHorizontalOffset);
            this.warpVerticalOffset.setValue(this.selected.textSettings.warpVerticalOffset);
          };
          this.changeBackground = t => {
            const e = this.selected.textSettings.clone();
            let s = (0, i.Ay)("text-background").checked;
            let a = (0, i.Ay)("text-background-punch").checked;
            let n = this.backgroundOffset.getValue();
            let o = this.backgroundColor.getColor().toHEX();
            let r = "";
            r = (0, i.Ay)("text-background-type-full").checked ? L.A.BACKGROUND_FULL : (0, i.Ay)("text-background-type-line").checked ? L.A.BACKGROUND_LINE : L.A.BACKGROUND_WORD;
            this.selected.setBackground(s, r, o, a, n);
            this.stage.history.add({
              type: "textSettings",
              kind: "background",
              layer: this.selected,
              settings: e
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeCurveState = () => {
            const t = this.selected.textSettings.clone();
            this.changeCurve();
            this.stage.history.add({
              type: "textSettings",
              kind: "curve",
              layer: this.selected,
              settings: t
            });
          };
          this.changeCurve = () => {
            let t = this.curveAmount.getValue();
            let e = (0, i.Ay)("text-curve").checked;
            let s = (0, i.Ay)("text-curve-flip").checked;
            let a = (0, i.Ay)("text-curve-spread").checked;
            let n = document.querySelector("input[name=\"curve-type\"]:checked").value;
            (0, i.Ay)("text-curve-amount").style.display = n !== "arc" ? "none" : "block";
            (0, i.Ay)("text-curve-flip-label").style.display = n !== "arc" ? "block" : "none";
            (0, i.Ay)("text-curve-spread-label").style.display = n !== "arc" ? "block" : "none";
            this.selected.setCurve(e, n, t, a, s);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeWarpState = () => {
            const t = this.selected.textSettings.clone();
            this.changeWarp();
            this.stage.history.add({
              type: "textSettings",
              kind: "warp",
              layer: this.selected,
              settings: t
            });
          };
          this.changeWarp = () => {
            let t = (0, i.Ay)("text-warp").checked;
            let e = this.warpEdgeSize.getValue();
            let s = this.warpCenterSize.getValue();
            let a = this.warpHorizontalOffset.getValue();
            let n = this.warpVerticalOffset.getValue();
            let o = document.querySelector("input[name=\"warp-type\"]:checked").value;
            let r = document.querySelector("input[name=\"warp-mode\"]:checked").value;
            this.selected.setWarp(t, o, r, e, s, a, n);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeOutlineState = () => {
            const t = this.selected.textSettings.clone();
            this.changeOutline();
            this.stage.history.add({
              type: "textSettings",
              kind: "outline",
              layer: this.selected,
              settings: t
            });
          };
          this.changeOutline = () => {
            let t = (0, i.Ay)("text-outline").checked;
            let e = (0, i.Ay)("text-outline-punch").checked;
            let s = this.outlineColor.getColor().toHEX();
            let a = this.outlineSize.getValue();
            let n = this.outlineDistance.getValue();
            let o = this.outlineDirection.getValue();
            this.selected.setOutline(t, a, s, e, n, o);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeOutlineColor = t => {
            const e = this.selected.textSettings.clone();
            this.changeOutline();
            this.stage.history.add({
              type: "textSettings",
              kind: "outline",
              layer: this.selected,
              settings: e
            });
          };
          this.changeShadowState = () => {
            const t = this.selected.textSettings.clone();
            this.changeShadow();
            this.stage.history.add({
              type: "textSettings",
              kind: "shadow",
              layer: this.selected,
              settings: t
            });
          };
          this.changeShadow = () => {
            this.selected.setShadow((0, i.Ay)("text-shadow").checked, this.shadowBlur.getValue(), this.shadowAlpha.getValue(), this.shadowColor.getColor().toHEX(), this.shadowDistance.getValue(), this.shadowDirection.getValue());
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeShadowColor = t => {
            const e = this.selected.textSettings.clone();
            this.changeShadow();
            this.stage.history.add({
              type: "textSettings",
              kind: "shadow",
              layer: this.selected,
              settings: e
            });
          };
          this.cleanUp = () => {
            this.selected = undefined;
            this.backgroundColor.cleanUp();
            this.backgroundColor = undefined;
            this.outlineColor.cleanUp();
            this.outlineColor = undefined;
            this.shadowColor.cleanUp();
            this.shadowColor = undefined;
            this.curveAmount.cleanUp();
            this.outlineSize.cleanUp();
            this.outlineDistance.cleanUp();
            this.outlineDirection.cleanUp();
            this.warpEdgeSize.cleanUp();
            this.warpCenterSize.cleanUp();
            this.warpVerticalOffset.cleanUp();
            this.warpHorizontalOffset.cleanUp();
            this.shadowBlur.cleanUp();
            this.shadowAlpha.cleanUp();
            this.shadowDistance.cleanUp();
            this.shadowDirection.cleanUp();
            (0, i.Ay)("text-background").removeEventListener("change", this.changeBackground, false);
            (0, i.Ay)("text-background-punch").removeEventListener("change", this.changeBackground, false);
            (0, i.Ay)("text-background-type-full").removeEventListener("change", this.changeBackground, false);
            (0, i.Ay)("text-background-type-line").removeEventListener("change", this.changeBackground, false);
            (0, i.Ay)("text-background-type-word").removeEventListener("change", this.changeBackground, false);
            (0, i.Ay)("text-outline").removeEventListener("change", this.changeOutlineState, false);
            (0, i.Ay)("text-outline-punch").removeEventListener("change", this.changeOutlineState, false);
            (0, i.Ay)("text-shadow").removeEventListener("change", this.changeShadowState, false);
            (0, i.Ay)("text-curve").removeEventListener("change", this.changeCurveState, false);
            (0, i.Ay)("text-curve-flip").removeEventListener("change", this.changeCurveState, false);
            (0, i.Ay)("text-curve-spread").removeEventListener("change", this.changeCurveState, false);
            (0, i.Ay)("text-curve-type-arc").removeEventListener("change", this.changeCurveState, false);
            (0, i.Ay)("text-curve-type-circle").removeEventListener("change", this.changeCurveState, false);
            (0, i.Ay)("text-curve-type-half").removeEventListener("change", this.changeCurveState, false);
            (0, i.Ay)("text-warp").removeEventListener("change", this.changeWarpState, false);
            (0, i.Ay)("text-warp-type-circular").removeEventListener("change", this.changeWarpState, false);
            (0, i.Ay)("text-warp-type-angular").removeEventListener("change", this.changeWarpState, false);
            (0, i.Ay)("text-warp-mode-upper").removeEventListener("change", this.changeWarpState, false);
            (0, i.Ay)("text-warp-mode-middle").removeEventListener("change", this.changeWarpState, false);
            (0, i.Ay)("text-warp-mode-lower").removeEventListener("change", this.changeWarpState, false);
            this.superCleanUp();
          };
          this.stage = t;
          this.selected = this.stage.fresco.getSelected();
          this.content.id = "text-style-content";
          this.content.style.height = "333px";
          this.setContent(`\n            <section>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="text-curve" />\n                    <label class="switch subline top-4" for="text-curve">${(0, a.A)("curve")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <div id="text-curve-type" class="switch-field stretch top-4">\n                            <input type="radio" id="text-curve-type-arc" name="curve-type" value="arc" checked/><label for="text-curve-type-arc">${(0, a.A)("arc")}</label>\n                            <input type="radio" id="text-curve-type-circle" name="curve-type" value="circle" /><label for="text-curve-type-circle">${(0, a.A)("circle")}</label>\n                            <input type="radio" id="text-curve-type-half" name="curve-type" value="half" /><label for="text-curve-type-half">${(0, a.A)("half")}</label>\n                        </div>\n                        <div id="text-curve-amount" class="top-16"></div>\n                        <input type="checkbox" id="text-curve-spread" />\n                        <label class="top-16 switch" id="text-curve-spread-label" for="text-curve-spread">${(0, a.A)("spread")}<span></span></label>\n                        <input type="checkbox" id="text-curve-flip" />\n                        <label class="top-16 switch" id="text-curve-flip-label" for="text-curve-flip">${(0, a.A)("flip")}<span></span></label>\n                    </div>\n                </div>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="text-warp" />\n                    <label class="switch subline top-10" for="text-warp">${(0, a.A)("warp")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n        \n                        <div id="text-warp-mode" class="switch-icon-field stretch">\n                            <input type="radio" id="text-warp-mode-upper" name="warp-mode" value="upper" checked /><label for="text-warp-mode-upper" tooltip="Upper" flow="up-left"><img src="assets/images/icon/warp-upper.svg" class="ic" width="18" height="18"></label>\n                            <input type="radio" id="text-warp-mode-middle" name="warp-mode" value="middle" /><label for="text-warp-mode-middle" tooltip="Middle" flow="up"><img src="assets/images/icon/warp-middle.svg" class="ic" width="18" height="18"></label>\n                            <input type="radio" id="text-warp-mode-lower" name="warp-mode" value="lower" /><label for="text-warp-mode-lower" tooltip="Lower" flow="up-right"><img src="assets/images/icon/warp-lower.svg" class="ic" width="18" height="18"></label>\n                        </div>\n                        <div id="text-warp-type" class="switch-field stretch top-16">\n                            <input type="radio" id="text-warp-type-circular" name="warp-type" value="circular" checked/><label for="text-warp-type-circular">${(0, a.A)("circular")}</label>\n                            <input type="radio" id="text-warp-type-angular" name="warp-type" value="angular" /><label for="text-warp-type-angular">${(0, a.A)("angular")}</label>\n                        </div>\n                        <div id="text-warp-edge-size" class="top-16"></div>\n                        <div id="text-warp-center-size"></div>\n                        <div id="text-warp-horizontal-offset"></div>\n                        <div id="text-warp-vertical-offset"></div>\n                    </div>\n                </div>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="text-background" />\n                    <label class="switch subline top-10" for="text-background">${(0, a.A)("background")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <label class="split">${(0, a.A)("color")}<div id="text-background-color"></div></label>\n                        <input type="checkbox" id="text-background-punch" />\n                        <label class="top-15 switch" for="text-background-punch">${(0, a.A)("punchout")}<span></span></label>\n                        <div id="text-background-offset" class="top-15"></div>\n                        <div id="text-background-type" class="switch-field stretch top-16">\n                            <input type="radio" id="text-background-type-full" name="background-type" value="full" checked/><label for="text-background-type-full">${(0, a.A)("full")}</label>\n                            <input type="radio" id="text-background-type-line" name="background-type" value="line" /><label for="text-background-type-line">${(0, a.A)("line")}</label>\n                            <input type="radio" id="text-background-type-word" name="background-type" value="word" /><label for="text-background-type-word">${(0, a.A)("word")}</label>\n                        </div>\n                    </div>\n                </div>\n                <div>\n                    <input type="checkbox" class="toggle-check" id="text-outline" />\n                    <label class="switch subline top-10" for="text-outline">${(0, a.A)("outline")}<span></span><span class="arrow"></span></label>\n                    <div class="toggle">\n                        <label class="split">${(0, a.A)("color")}<div id="text-outline-color"></div></label>\n                        <input type="checkbox" id="text-outline-punch" />\n                        <label class="top-15 switch" for="text-outline-punch">${(0, a.A)("punchout")}<span></span></label>\n                        <div id="text-outline-size" class="top-15"></div>\n                        <div id="text-outline-distance"></div>\n                        <div id="text-outline-direction"></div>\n                    </div>\n                </div>\n                <div>\n                <input type="checkbox" class="toggle-check" id="text-shadow" />\n                <label class="switch subline top-10" for="text-shadow">${(0, a.A)("shadow")}<span></span><span class="arrow"></span></label>\n                <div class="toggle">\n                        <label class="split">${(0, a.A)("color")}<div id="text-shadow-color"></div></label>\n                        <div id="text-shadow-blur" class="top-10"></div>\n                        <div id="text-shadow-distance"></div>\n                        <div id="text-shadow-direction"></div>\n                        <div id="text-shadow-alpha"></div>\n                    </div>\n                </div>\n            <section>\n        `);
          let s = this.selected.textSettings;
          this.backgroundColor = new z.A("text-background-color", c.A.fromHEX(u.Ay.altColor), this.changeBackground);
          this.outlineColor = new z.A("text-outline-color", c.A.fromHEX(u.Ay.altColor), this.changeOutlineColor);
          this.shadowColor = new z.A("text-shadow-color", c.A.fromHEX(u.Ay.altColor), this.changeShadowColor);
          const n = {
            onStart: () => {
              s = this.selected.textSettings.clone();
            },
            labelFormat: t => (t * 100).toFixed(0),
            labelParse: t => parseInt(t, 10) / 100
          };
          this.outlineSize = new l.A("text-outline-size", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("size"),
            range: [0.01, 1],
            defaultValue: 0.3,
            onChange: () => this.changeOutline(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "outline",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.outlineDistance = new l.A("text-outline-distance", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("distance"),
            range: [0, 1],
            onChange: () => this.changeOutline(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "outline",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.outlineDirection = new l.A("text-outline-direction", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("direction"),
            range: [0, 360],
            defaultValue: 180,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10),
            onChange: () => this.changeOutline(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "outline",
                layer: this.selected,
                settings: s
              });
            }
          }));
          const o = Object.assign(Object.assign({}, n), {
            range: [0, 1],
            onChange: () => this.changeShadow(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "shadow",
                layer: this.selected,
                settings: s
              });
            }
          });
          this.backgroundOffset = new l.A("text-background-offset", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("offset"),
            range: [-1, 1],
            onEnd: () => {
              this.changeBackground();
            }
          }));
          this.shadowBlur = new l.A("text-shadow-blur", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("blur")
          }));
          this.shadowAlpha = new l.A("text-shadow-alpha", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("opacity"),
            defaultValue: 1
          }));
          this.shadowDistance = new l.A("text-shadow-distance", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("distance"),
            range: [0, 1]
          }));
          this.shadowDirection = new l.A("text-shadow-direction", Object.assign(Object.assign({}, o), {
            label: (0, a.A)("direction"),
            range: [0, 360],
            defaultValue: 180,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10)
          }));
          this.curveAmount = new l.A("text-curve-amount", {
            label: (0, a.A)("amount"),
            step: 0.01,
            range: [-1, 1],
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.changeCurve(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "curve",
                layer: this.selected,
                settings: s
              });
            }
          });
          this.warpEdgeSize = new l.A("text-warp-edge-size", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("edgeSize"),
            range: [-1, 1],
            onChange: () => this.changeWarp(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "warp",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.warpCenterSize = new l.A("text-warp-center-size", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("centerSize"),
            range: [-1, 1],
            onChange: () => this.changeWarp(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "warp",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.warpHorizontalOffset = new l.A("text-warp-horizontal-offset", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("horizontalOffset"),
            range: [-1, 1],
            onChange: () => this.changeWarp(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "warp",
                layer: this.selected,
                settings: s
              });
            }
          }));
          this.warpVerticalOffset = new l.A("text-warp-vertical-offset", Object.assign(Object.assign({}, n), {
            label: (0, a.A)("verticalOffset"),
            range: [-1, 1],
            onChange: () => this.changeWarp(),
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "warp",
                layer: this.selected,
                settings: s
              });
            }
          }));
          (0, i.Ay)("text-background").addEventListener("change", this.changeBackground, false);
          (0, i.Ay)("text-background-punch").addEventListener("change", this.changeBackground, false);
          (0, i.Ay)("text-background-type-full").addEventListener("change", this.changeBackground, false);
          (0, i.Ay)("text-background-type-line").addEventListener("change", this.changeBackground, false);
          (0, i.Ay)("text-background-type-word").addEventListener("change", this.changeBackground, false);
          (0, i.Ay)("text-curve").addEventListener("change", this.changeCurveState, false);
          (0, i.Ay)("text-curve-flip").addEventListener("change", this.changeCurveState, false);
          (0, i.Ay)("text-curve-spread").addEventListener("change", this.changeCurveState, false);
          (0, i.Ay)("text-curve-type-arc").addEventListener("change", this.changeCurveState, false);
          (0, i.Ay)("text-curve-type-circle").addEventListener("change", this.changeCurveState, false);
          (0, i.Ay)("text-curve-type-half").addEventListener("change", this.changeCurveState, false);
          (0, i.Ay)("text-warp").addEventListener("change", this.changeWarpState, false);
          (0, i.Ay)("text-warp-type-circular").addEventListener("change", this.changeWarpState, false);
          (0, i.Ay)("text-warp-type-angular").addEventListener("change", this.changeWarpState, false);
          (0, i.Ay)("text-warp-mode-upper").addEventListener("change", this.changeWarpState, false);
          (0, i.Ay)("text-warp-mode-middle").addEventListener("change", this.changeWarpState, false);
          (0, i.Ay)("text-warp-mode-lower").addEventListener("change", this.changeWarpState, false);
          (0, i.Ay)("text-outline").addEventListener("change", this.changeOutlineState, false);
          (0, i.Ay)("text-outline-punch").addEventListener("change", this.changeOutlineState, false);
          (0, i.Ay)("text-shadow").addEventListener("change", this.changeShadowState, false);
          this.updateInputs();
          new y.A(this.content);
        }
      }
      var F = s(7135);
      class R extends P.A {
        constructor(t, e) {
          super(e, (0, a.A)("preset"), true);
          this.SERVER_URL = "/";
          this.populatePresets = async () => {
            const t = await fetch("assets/static/text/index.json");
            const e = await t.json();
            const s = (0, i.Ay)("text-preset-content-ss-content");
            s.classList.add("text-holder");
            s.innerHTML = "";
            e.presets.forEach(t => {
              const e = "assets/static/text/" + t.id + "/thumbnail.webp";
              const a = (0, i.T)("div", {
                id: t.id,
                className: "text-box"
              });
              a.setAttribute("loading", "lazy");
              if (t.premium) {
                a.classList.add("premium");
              }
              a.addEventListener("click", this.selectPreset, true);
              a.style.backgroundImage = "url(" + e + ")";
              s.append(a);
            });
          };
          this.selectPreset = async t => {
            if (this.working) {
              return;
            }
            if (t.currentTarget.classList.contains("premium") && !(0, v.zl)("premium")) {
              this.cleanUp();
              new x.default("font", "premium");
              return;
            }
            this.working = true;
            const e = t.currentTarget.getAttribute("id");
            await (0, w.h6)(this.stage, "assets/static/text/" + e + "/manifest.json");
            this.working = false;
            (0, F.A)("text-preset", e);
          };
          this.stage = t;
          this.float.style.height = "70%";
          this.float.style.width = "265px";
          this.content.id = "text-preset-content";
          new y.A(this.content);
          this.populatePresets();
        }
      }
      class _ extends h.A {
        constructor(t) {
          let e;
          super("text", t);
          this.showTextFormat = () => {
            new D(this.stage, (0, i.Ay)("text-format"));
          };
          this.showTextStyles = () => {
            new I(this.stage, (0, i.Ay)("text-styles"));
          };
          this.showTextPresets = () => {
            new R(this.stage, (0, i.Ay)("text-presets"));
          };
          this.layerSelect = () => {
            if (this.stage.fresco.getSelected() !== this.selected) {
              this.stage.history.commitTransaction();
            }
            if (!this.stage.fresco.isSelectedType(d.A.TYPE_TEXT)) {
              (0, i.Ay)("text-settings").style.display = "none";
              (0, i.Ay)("text-no-layer").style.display = "flex";
              this.selected = undefined;
              return;
            }
            (0, i.Ay)("text-settings").style.display = "flex";
            (0, i.Ay)("text-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.fill.setFill(this.selected.fill);
            this.font.setFont(this.selected.textSettings.font);
            this.textSize.setValue(this.selected.textSettings.size);
          };
          this.layerArrange = () => {
            if (this.selected) {
              this.textSize.setValue(this.selected.textSettings.size);
            }
          };
          this.changeSize = t => {
            this.selected.textSettings.size = t;
            n.sg("text-change", 50, () => {
              this.selected.setTextSize(t);
              document.dispatchEvent(new CustomEvent("viewport-render"));
            });
          };
          this.previewFill = t => {
            this.selected.setTextFill(t, true);
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.changeFill = t => {
            const e = this.selected.textSettings.clone();
            this.selected.setTextFill(t);
            this.stage.history.add({
              type: "textSettings",
              kind: "fill",
              layer: this.selected,
              settings: e
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.previewFont = t => {
            if (this.selected) {
              this.selected.setTextFont(t, true);
              document.dispatchEvent(new CustomEvent("viewport-render"));
            }
          };
          this.changeFont = (t, e) => {
            if (!this.selected) {
              return;
            }
            const s = this.selected.textSettings.clone();
            s.font = e;
            this.selected.setTextFont(t);
            this.stage.history.add({
              type: "textSettings",
              kind: "font",
              layer: this.selected,
              settings: s
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
          };
          this.reformDown = (t, e) => {
            this.isDown = true;
            this.downPoint = t;
            this.usedtobe = e;
            this.stage.coating.freeze(true);
            this.addMoveListeners();
          };
          this.move = t => {
            const e = this.stage.translateToRect(this.downPoint, t, false, true);
            if (e.width > 0 && e.height > 0) {
              this.drawframe(e.topLeft(), e.bottomRight());
            }
            document.dispatchEvent(new CustomEvent("legend", {
              detail: "W: " + Math.round(e.width / this.stage.zoom) + "  H: " + Math.round(e.height / this.stage.zoom)
            }));
          };
          this.drawframe = (t, e) => {
            const s = this.stage.coating.ctx;
            s.lineWidth = u.Ay.isHDPI ? 4 : 2;
            s.strokeStyle = n.bi;
            s.clearRect(0, 0, s.canvas.width, s.canvas.height);
            s.strokeRect(t.x, t.y, e.x - t.x, e.y - t.y);
          };
          this.up = async t => {
            this.stage.coating.clear(true);
            this.stage.coating.freeze(false);
            this.removeMoveListeners();
            document.dispatchEvent(new CustomEvent("legend", {
              detail: "stop"
            }));
            if (this.downPoint.distanceTo(t) > 10) {
              const e = this.stage.translateToRect(this.downPoint, t, false, false);
              e.height = Math.round(e.height / 3);
              if (e.height < 20) {
                e.height = 20;
              }
              this.addText(e);
            } else if (!this.usedtobe) {
              if (await new M.A((0, a.A)("addText"), (0, a.A)("doYouWantToAddANewTextLayer"), (0, a.A)("add")).init()) {
                this.addTextEvent();
              }
            }
          };
          this.addTextEvent = () => {
            let t = this.stage.getViewPort();
            this.addText(new r.A(Math.round(t.x + (t.width - Math.round(t.width / 1.2)) / 2), Math.round(t.y + t.height / 2.5), Math.round(t.width / 1.2), this.textSize.getValue()));
          };
          this.addText = async t => {
            let e = new L.A(this.font.selected, t.height);
            await this.font.loadFont(this.font.selected);
            this.fill.setFill(new o.A(c.A.fromHEX(u.Ay.mainColor)));
            e.fillType = this.fill.getFill().getType();
            e.fillValue = this.fill.getFill().getStringValue();
            await this.stage.addText((0, a.A)("loremIpsum"), t, e, "add");
            this.editMode();
          };
          this.editMode = () => {
            this.reform.dblClick();
          };
          this.deleteLayer = () => {
            this.stage.deleteLayer();
          };
          this.duplicateLayer = () => {
            this.stage.duplicateLayer();
          };
          this.cleanUp = () => {
            this.isDown = false;
            this.removeMoveListeners();
            this.stage.coating.clear(true);
            this.stage.coating.freeze(false);
            this.stage.history.commitTransaction();
            this.reform.cleanUp();
            this.reform = undefined;
            this.stage.coating.wake();
            this.font.cleanUp();
            this.font = null;
            this.fill.cleanUp();
            this.fill = null;
            this.textSize.cleanUp();
            (0, i.Ay)("text-edit").removeEventListener("click", this.editMode, true);
            (0, i.Ay)("add-text-button").removeEventListener("click", this.addTextEvent, true);
            (0, i.Ay)("text-format").removeEventListener("click", this.showTextFormat, false);
            (0, i.Ay)("text-styles").removeEventListener("click", this.showTextStyles, false);
            (0, i.Ay)("text-presets").removeEventListener("click", this.showTextPresets, false);
            (0, i.Ay)("text-add").removeEventListener("click", this.addTextEvent, false);
            (0, i.Ay)("text-delete").removeEventListener("click", this.deleteLayer, false);
            (0, i.Ay)("text-duplicate").removeEventListener("click", this.duplicateLayer, false);
            document.removeEventListener("add-text", this.addTextEvent, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("layer-arrange", this.layerArrange, false);
          };
          this.stage = t;
          this.stage.coating.sleep();
          this.fill = new p.A("text-fill", new o.A(c.A.fromHEX(u.Ay.mainColor)), this.changeFill, this.previewFill);
          this.font = new T(this.stage, (0, i.Ay)("text-font-picker"), this.changeFont, this.previewFont);
          (0, i.Ay)("add-text-button").addEventListener("click", this.addTextEvent, true);
          (0, i.Ay)("text-edit").addEventListener("click", this.editMode, true);
          this.textSize = new l.A("text-size", {
            compact: true,
            label: (0, a.A)("size") + ":",
            range: [4, 100, 1000],
            defaultValue: 60,
            step: [2, 5],
            stops: [0, 0.4, 1],
            labelFormat: t => t.toString(),
            labelParse: t => parseInt(t),
            onStart: () => {
              e = this.selected.textSettings.clone();
            },
            onEnd: () => {
              this.stage.history.add({
                type: "textSettings",
                kind: "size",
                layer: this.selected,
                settings: e
              });
            },
            onChange: this.changeSize
          });
          (0, i.Ay)("text-add").addEventListener("click", this.addTextEvent, false);
          (0, i.Ay)("text-delete").addEventListener("click", this.deleteLayer, false);
          (0, i.Ay)("text-duplicate").addEventListener("click", this.duplicateLayer, false);
          (0, i.Ay)("text-format").addEventListener("click", this.showTextFormat, false);
          (0, i.Ay)("text-styles").addEventListener("click", this.showTextStyles, false);
          (0, i.Ay)("text-presets").addEventListener("click", this.showTextPresets, false);
          document.addEventListener("add-text", this.addTextEvent, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("layer-arrange", this.layerArrange, false);
          this.reform = new g.A(t, "TEXT");
          this.reform.proxy = this.reformDown;
          this.layerSelect();
        }
      }
    }
