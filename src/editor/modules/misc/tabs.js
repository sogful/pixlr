window.__editorModules[712] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(5283);
      var a = s(6050);
      var n = s(7578);
      var o = s(7775);
      class r {
        constructor(t) {
          this.web = t;
          this.resize = () => {
            this.bar.style.left = this.web.stage.raster.offsetLeft + "px";
            this.bar.style.width = this.web.stage.raster.offsetWidth + "px";
          };
          this.handleTabContextMenu = (t, e) => {
            t.preventDefault();
            t.stopPropagation();
            new n.Ay(new a.A(t.clientX, t.clientY), [new n.kt((0, o.A)("close"), () => {
              this.web.tabClose(e);
            }), new n.kt((0, o.A)("closeAll"), () => {
              this.web.tabCloseAll();
            }), new n.kt((0, o.A)("closeOthers"), () => {
              this.web.tabCloseOthers(e);
            }), new n.K5(), new n.kt((0, o.A)("duplicate"), () => {
              this.web.tabDuplicate(e);
            }), new n.K5(), new n.kt((0, o.A)("save"), () => {
              this.web.tabSave(e);
            }), new n.kt((0, o.A)("saveAsPZX"), () => {
              this.web.tabSave(e, "pxz");
            }), new n.kt((0, o.A)("quickExportPNG"), () => {
              this.web.tabQuickExport(e);
            })]);
          };
          this.render = () => {
            this.tabs.innerHTML = "";
            if (this.web.stage.showTabs) {
              this.bar.style.display = "block";
              this.resize();
              for (let t = 0; t < this.web.stage.tabs.length; t++) {
                const e = this.web.stage.tabs[t].fresco;
                if (this.web.stage.fresco && e.id === this.web.stage.fresco.id) {
                  const t = (0, i.T)("li", {
                    id: e.id,
                    title: e.name,
                    className: "active",
                    oncontextmenu: t => this.handleTabContextMenu(t, e.id)
                  }, e.name, (0, i.T)("img", {
                    className: "close ic",
                    width: 10,
                    height: 10,
                    src: "assets/images/icon/close.svg",
                    onclick: () => {
                      this.web.tabClose(e.id);
                    }
                  }));
                  this.tabs.appendChild(t);
                } else {
                  let t;
                  const s = (0, i.T)("li", {
                    id: e.id,
                    title: e.name,
                    onclick: () => this.web.tabSelect(e.id),
                    onmouseenter: () => {
                      if (this.web.stage.layerDrag) {
                        s.classList.add("countup");
                        t = window.setTimeout(() => this.web.tabSelect(e.id), 300);
                      }
                    },
                    onmouseleave: () => {
                      window.clearTimeout(t);
                      t = undefined;
                      s.classList.remove("countup");
                    },
                    oncontextmenu: t => this.handleTabContextMenu(t, e.id)
                  }, e.name, (0, i.T)("img", {
                    className: "close ic",
                    src: "assets/images/icon/close.svg",
                    width: 10,
                    height: 10,
                    onclick: () => this.web.tabClose(e.id)
                  }));
                  this.tabs.appendChild(s);
                }
              }
            } else {
              this.bar.style.display = "none";
            }
          };
          this.tabs = (0, i.T)("ul", {
            id: "tabs"
          });
          this.bar = (0, i.T)("div", {
            id: "tab-bar"
          }, this.tabs, (0, i.T)("div", {
            id: "tabs-drop"
          }, (0, i.T)("img", {
            src: "assets/images/icon/tabs.svg",
            className: "ic",
            width: 18,
            height: 18,
            loading: "lazy"
          })));
          (0, i.Ay)("workspace").appendChild(this.bar);
          this.bar.style.display = "none";
          (0, i.Ay)("tabs-drop").addEventListener("click", t => {
            t.preventDefault();
            t.stopPropagation();
            const e = t.currentTarget.getBoundingClientRect();
            const s = new Array();
            for (let i = 0; i < this.web.stage.tabs.length; i++) {
              const t = this.web.stage.tabs[i].fresco;
              s.push(new n.kt(t.name, () => this.web.tabSelect(t.id)));
            }
            new n.Ay(new a.A(e.x + 25, e.y + 16), s, true);
          });
          document.addEventListener("fresco-select", this.render);
          document.addEventListener("resize", this.resize);
        }
      }
    }
