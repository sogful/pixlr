window.__editorModules[481] = function (t, e, s) {
  s.a(t, async (t, i) => {
    try {
      s.d(e, {
        A: () => SplashScreen
      });
      var a = s(7775);
      var n = s(5283);
      var o = s(5699);
      var r = s(651);
      var h = s(3244);
      var l = s(7135);
      var c = s(6050);
      var d = s(3350);
      var u = s(2128);
      var p = s(3171);
      var g = s(3641);
      var m = s(5432);
      var y = s(4182);
      var v = s(8464);
      var f = s(5620);
      var w = s(2621);
      var x = s(5096);
      var b = s(6931);
      var A = s(6522);
      var k = s(2334);
      var S = s(2543);
      var E = s(7578);
      var C = s(2443);
      var T = s(98);
      var L = s(3641);
      var M = s(2355);
      var P = s(5288);
      var D = t([M]);
      var z = D.then ? (await D)() : D;
      M = z[0];
      function I(t) {
        if (!Symbol.asyncIterator) {
          throw new TypeError("Symbol.asyncIterator is not defined.");
        }
        var e;
        var s = t[Symbol.asyncIterator];
        if (s) {
          return s.call(t);
        } else {
          t = typeof __values == "function" ? __values(t) : t[Symbol.iterator]();
          e = {};
          i("next");
          i("throw");
          i("return");
          e[Symbol.asyncIterator] = function () {
            return this;
          };
          return e;
        }
        function i(s) {
          e[s] = t[s] && function (e) {
            return new Promise(function (i, a) {
              (function (t, e, s, i) {
                Promise.resolve(i).then(function (e) {
                  t({
                    value: e,
                    done: s
                  });
                }, e);
              })(i, a, (e = t[s](e)).done, e.value);
            });
          };
        }
      }
      class SplashScreen {
        constructor() {
          var t;
          var e;
          var s;
          this.navigate = t => {
            if (t === "editor") {
              this.hideSplash();
            } else if (t === "home") {
              this.showSplash();
            }
          };
          this.showSplash = () => {
            (0, n.Ay)("workspace").style.display = "none";
            document.documentElement.classList.remove("workcast");
            this.setHistory();
          };
          this.hideSplash = () => {
            var t;
            (0, n.Ay)("workspace").style.display = "block";
            if ((t = (0, n.Ay)("modal-deeplink")) !== null && t !== undefined) {
              t.remove();
            }
            document.documentElement.classList.add("workcast");
            document.dispatchEvent(new CustomEvent("resize"));
          };
          this.setUpSplash = () => {
            var t;
            var e;
            var s;
            var i;
            var a;
            var o;
            var r;
            var h;
            if ((t = (0, n.Ay)("splash")) !== null && t !== undefined) {
              t.addEventListener("click", t => {
                if (this.stage.tabs.length > 0 && t.target === (0, n.Ay)("splash")) {
                  this.hideSplash();
                }
              });
            }
            if ((e = (0, n.Ay)("splash-close")) !== null && e !== undefined) {
              e.addEventListener("mousedown", this.hideSplash, true);
            }
            if ((s = (0, n.Ay)("splash-drop-icon")) !== null && s !== undefined) {
              s.addEventListener("mousedown", this.openClick, true);
            }
            if ((i = (0, n.Ay)("splash-open-image")) !== null && i !== undefined) {
              i.addEventListener("mousedown", this.openClick, true);
            }
            if ((a = (0, n.Ay)("splash-open-new")) !== null && a !== undefined) {
              a.addEventListener("mousedown", this.newClick, true);
            }
            if (m.Ny) {
              const t = (0, n.Ay)("feed-show-all");
              if (t && m.Ny.id) {
                t.href = "/community/@" + (m.Ny.nickname || m.Ny.id);
              }
              if ((r = (0, n.Ay)("splash-tab-history")) !== null && r !== undefined) {
                r.addEventListener("click", () => {
                  (0, n.Ay)("splash-tab-history").classList.add("active");
                  (0, n.Ay)("splash-tab-feed").classList.remove("active");
                  (0, n.Ay)("history-content").style.display = "";
                  (0, n.Ay)("feed-content").style.display = "none";
                  (0, n.Ay)("splash-history-header").style.display = "";
                  (0, n.Ay)("splash-feed-header").style.display = "none";
                  (0, n.Ay)("feed-show-all").style.display = "none";
                  (0, n.Ay)("history-backup").style.display = "";
                });
              }
              if ((h = (0, n.Ay)("splash-tab-feed")) !== null && h !== undefined) {
                h.addEventListener("click", () => {
                  (0, n.Ay)("splash-tab-feed").classList.add("active");
                  (0, n.Ay)("splash-tab-history").classList.remove("active");
                  (0, n.Ay)("feed-content").style.display = "";
                  (0, n.Ay)("history-content").style.display = "none";
                  (0, n.Ay)("splash-history-header").style.display = "none";
                  (0, n.Ay)("splash-feed-header").style.display = "";
                  (0, n.Ay)("feed-show-all").style.display = "";
                  (0, n.Ay)("history-backup").style.display = "none";
                  this.loadFeed();
                });
              }
            } else if ((o = (0, n.Ay)("splash-tab-toggle")) !== null && o !== undefined) {
              o.remove();
            }
          };
          this.feedLoaded = false;
          this.loadFeed = () => {
            if (this.feedLoaded) {
              return;
            }
            this.feedLoaded = true;
            const t = (0, n.Ay)("feed-content");
            if (t) {
              (0, P.J)(t, async (t, e) => {
                const s = new File([t], e + ".jpg", {
                  type: "image/jpeg"
                });
                await u.Tq(s, this.stage, false, "feed");
              });
            }
          };
          this.setUpDeepLink = () => {
            const t = (0, n.T)("div", {
              className: "button large positive rounded top-50",
              style: "min-width:250px"
            }, (0, a.A)("openImage"));
            const e = (0, n.T)("div", {
              className: "link"
            }, (0, a.A)("close"));
            const s = (0, n.T)("div", {
              id: "modal-deeplink",
              className: "modal dim",
              style: "flex-direction:column;gap:20px;align-items:center;"
            });
            s.innerHTML = "<svg id=\"icon-deeplink\" style=\"opacity:0.6;cursor:pointer\" width=\"200\" height=\"200\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 32\" class=\"ic\">\n                <path fill=\"#fff\" d=\"m2.4181 18.932-.88153-2.6572c-.15261-.47904-.11194-.99876.11334-1.4482.22542-.44773.61956-.78751 1.0956-.9445l10.376-3.6535c1.0084-.31165 2.0787.2517 2.3927 1.2593l2.5187 7.6819-3.3372-1.2593c-.30284-.11333-.64271.01615-.79338.30224l-2.8713 5.6922-2.6194-1.2593c-.25747-.12309-.56528-.061529-.7556.15112l-3.0217 2.8349-1.3349-4.1054zm13.599-11.504 2.2046-4.1762c.48035-.90871 1.5959-1.2713 2.5187-.81856l8.9412 4.6343c.44898.23275.785.63688.9319 1.1208.15189.4749.11119.99045-.11334 1.4356l-3.778 7.1908-1.3979-3.2994c-.12273-.30199-.45918-.45643-.76819-.35261l-6.5233 2.0779-1.423-4.2565c-.26042-.79413-.82707-1.4514-1.5742-1.826-.74599-.37996-1.6147-.43909-2.4053-.16371l-10.275 3.6283c-.79626.25664-1.4549.82441-1.826 1.5742-.39061.74691-.45443 1.6222-.17631 2.4179l.86894 2.7201.89412 2.5942 2.6068 7.8204c.26042.79413.82707 1.4514 1.5742 1.826.43924.21468.92155.32664 1.4104.32743.33841.001.67464-.05428.99487-.16371l10.364-3.6409c.79626-.25664 1.4549-.82441 1.826-1.5742.39061-.74691.45443-1.6222.17631-2.4179l-.10074-.30224h.06297c1.544.79997 3.4442.19665 4.2439-1.3475l6.3722-12.291c.79997-1.544.19665-3.4442-1.3475-4.2439l-8.9412-4.6343c-1.544-.79997-3.4442-.19665-4.2439 1.3475l-2.2046 4.2139m9.5717 7.6741 1.5742 3.778-1.889 3.6395c-.48035.90871-1.5959 1.2713-2.5187.81856l-1.2593-.62966-1.889-5.6796zm-4.7099 11.435c-.22542.44773-.61956.78751-1.0956.9445l-10.376 3.6535c-.97969.33024-2.0446-.17712-2.4053-1.146l-.7556-2.4053 3.1477-3.0994 2.7453 1.3727c.1533.06298.32524.06298.47854 0 .16013-.04975.29241-.16378.3652-.31483l2.9342-5.8559 3.778 1.4734.71782 2.1409.60448 1.7882c.14485.4823.09513 1.0021-.13853 1.4482zM8.4285 2.461h.61539v.61539a.61539.61539 0 0 0 1.2308 0V2.461h.61539a.61539.61539 0 0 0 0-1.2308h-.61539V.61481a.61539.61539 0 0 0-1.2308 0v.61539H8.4285a.61539.61539 0 0 0 0 1.2308zM24.429 29.538h-.61539v-.61539a.61539.61539 0 0 0-1.2308 0v.61539h-.61539a.61539.61539 0 0 0 0 1.2308h.61539v.61539a.61539.61539 0 0 0 1.2308 0v-.61539h.61539a.61539.61539 0 0 0 0-1.2308zM3.6591 7.6918a2 2 0 1 0-2-2 2 2 0 0 0 2 2zm0-3a1 1 0 1 1-1 1 1 1 0 0 1 1-1zM29 23a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1 1 0 0 1-1 1z\"></path>\n                <circle cx=\"6.0883\" cy=\"17.303\" r=\"1.875\" fill=\"#fff\"></circle>\n                <circle cx=\"20.641\" cy=\"8.0821\" r=\"1.875\" fill=\"#fff\"></circle>\n            </svg>";
            s.append(t, e);
            document.body.append(s);
            t.addEventListener("click", () => {
              this.openClick();
            });
            e.addEventListener("click", () => {
              this.showSplash();
              s.remove();
            });
            (0, n.Ay)("icon-deeplink").addEventListener("click", () => {
              this.openClick();
            });
          };
          this.setHistory = async () => {
            const t = (0, n.Ay)("splash-open-quick");
            t.innerHTML = "";
            const e = (0, n.Ay)("history-content");
            e.innerHTML = "";
            const s = await k.DocumentMeta.history();
            (0, n.Ay)("splash-content-history").style.display = s.length > 0 ? "block" : "none";
            if (s.length > 0) {
              for (var i = 0; i < s.length && i < 3; i++) {
                const e = s[i];
                const a = (0, n.T)("div");
                if (this.stage && this.stage.tabs.some(t => t.fresco.id === e.id)) {
                  a.className = "active";
                }
                e.getThumbnail().then(t => {
                  if (t) {
                    t.onclick = () => {
                      if (this.stage && this.stage.tabs.some(t => t.fresco.id === e.id)) {
                        this.tabSelect(e.id);
                      } else {
                        this.stage.openFromHistory(e, t);
                      }
                    };
                    t.alt = e.name;
                    t.width = Math.round(t.width * (60 / t.height));
                    t.height = 60;
                    a.appendChild(t);
                  }
                });
                t.append(a);
              }
              t.appendChild((0, n.T)("a", {
                id: "quick-all",
                href: "#myhistory"
              }, (0, a.A)("all")));
              for (i = 0; i < s.length && i < 100; i++) {
                e.appendChild(this.createHistoryBox(s[i]));
              }
              if (s.length > 100) {
                (0, n.Ay)("history-all").style.display = "flex";
                (0, n.Ay)("history-all").onclick = this.showAllHistory;
              }
              (0, n.Ay)("history-backup").onclick = async () => {
                if (await new S.A("Confirm", (0, a.A)("historyBackupConfirm"), (0, a.A)("backup")).init()) {
                  this.backupHistory();
                }
              };
            }
          };
          this.backupHistory = async () => {
            const t = (0, n.T)("div", {
              id: "modal-backup",
              className: "modal"
            });
            document.body.appendChild(t);
            const e = await k.DocumentMeta.history();
            let o = new M.ZipWriter();
            for (var i = 0; i < e.length; i++) {
              document.dispatchEvent(new CustomEvent("loading", {
                detail: "Creating " + (i + 1) + " of " + e.length
              }));
              const c = e[i];
              const a = new x.A(c.id, c.name, c.width, c.height, c.transparent ? undefined : c.color, c.templateMeta);
              await c.restore(a);
              const blob = await (0, L.Ab)(this.stage, {
                id: a.id,
                name: a.name,
                quality: 1,
                nonDestructive: false,
                type: "document",
                unit: "pixel"
              }, a);
              const bytes = new Uint8Array(await blob.arrayBuffer());
              o.writeFile(a.name + ".pxz", bytes, false);
            }
            document.dispatchEvent(new CustomEvent("loading", {
              detail: "Creating zip"
            }));
            const r = o.finish();
            const h = new File([new Blob([r.buffer])], "pixlr-backup(" + new Date().toDateString() + ").zip", {
              type: "application/zip"
            });
            (0, L.gr)(h, "pixlr-backup-(" + new Date().toLocaleDateString() + ")", "zip");
            document.dispatchEvent(new CustomEvent("loading", {
              detail: "stop"
            }));
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, a.A)("fileSaved")
            }));
            t.remove();
          };
          this.autoBackupToCache = async () => {
            if (!("caches" in window) || this.__autoBackupRunning) {
              return;
            }
            this.__autoBackupRunning = true;
            try {
              const e = await k.DocumentMeta.history();
              if (!e.length) {
                return;
              }
              let o = new M.ZipWriter();
              for (var i = 0; i < e.length; i++) {
                const c = e[i];
                const a = new x.A(c.id, c.name, c.width, c.height, c.transparent ? undefined : c.color, c.templateMeta);
                await c.restore(a);
                const blob = await (0, L.Ab)(this.stage, {
                  id: a.id,
                  name: a.name,
                  quality: 1,
                  nonDestructive: false,
                  type: "document",
                  unit: "pixel"
                }, a);
                const bytes = new Uint8Array(await blob.arrayBuffer());
                o.writeFile(a.name + ".pxz", bytes, false);
              }
              const r = o.finish();
              const cache = await caches.open("pixlr-backup");
              await cache.put("/backup.zip", new Response(new Blob([r.buffer]), {
                headers: {
                  "Content-Type": "application/zip"
                }
              }));
            } catch (err) {
              console.log(err);
            } finally {
              this.__autoBackupRunning = false;
            }
          };
          this.showAllHistory = async () => {
            (0, n.Ay)("history-all").style.display = "none";
            const t = await k.DocumentMeta.history();
            const e = (0, n.Ay)("history-content");
            for (var s = 100; s < t.length; s++) {
              e.appendChild(this.createHistoryBox(t[s]));
            }
          };
          this.showUndoToast = onUndo => {
            var e;
            if ((e = (0, n.Ay)("history-undo-toast")) !== null && e !== undefined) {
              e.remove();
            }
            let t = (0, n.T)("div", {
              id: "history-undo-toast",
              className: "history-undo-toast"
            });
            let c = (0, n.T)("span", {}, (0, a.A)("historyPendingDelete"));
            let d = (0, n.T)("a", {}, `↺ ${(0, a.A)("historyUndo")}`);
            d.addEventListener("click", async e => {
              if (e != null) {
                e.preventDefault();
              }
              if (e != null) {
                e.stopPropagation();
              }
              t.remove();
              await onUndo();
            });
            t.append(c, d);
            document.body.appendChild(t);
            setTimeout(() => {
              if (t.isConnected) {
                t.remove();
              }
            }, 5000);
          };
          this.createHistoryBox = t => {
            const e = this.stage && this.stage.tabs.some(e => e.fresco.id === t.id);
            const s = e && t.id === this.stage.fresco.id;
            let i = (0, n.T)("div", {
              id: t.id,
              className: "image-box"
            });
            let r = (0, n.T)("div", {
              className: "holder"
            });
            i.appendChild(r);
            if (e) {
              i.classList.add("selected");
              i.appendChild((0, n.T)("div", {
                id: t.id + "-active",
                className: "active"
              }, s ? "active" : "open"));
            }
            let d;
            const loadThumb = () => {
              t.getThumbnail().then(e => {
                if (e) {
                  d = e;
                  e.alt = t.name;
                  r.appendChild(e);
                }
              });
            };
            if ("IntersectionObserver" in window) {
              const thumbObserver = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                  thumbObserver.disconnect();
                  loadThumb();
                }
              }, {
                rootMargin: "200px"
              });
              thumbObserver.observe(r);
            } else {
              loadThumb();
            }
            const u = async e => {
              if (e != null) {
                e.preventDefault();
              }
              if (e != null) {
                e.stopPropagation();
              }
              const s = (0, n.T)("div", {
                className: "modal dim"
              });
              (0, n.Ay)("splash").append(s);
              document.dispatchEvent(new CustomEvent("loading", {
                detail: "start"
              }));
              const i = "pxz";
              const o = t.name || "Untitled";
              let r;
              if (!T.Ay.useLegacySave && !!(0, L.zu)() && (r = await (0, L.D0)(o, i, "Pixlr document", "application/pxz"), r === false)) {
                document.dispatchEvent(new CustomEvent("loading", {
                  detail: "stop"
                }));
                s.remove();
                return;
              }
              const h = new x.A(t.id, t.name, t.width, t.height, t.transparent ? undefined : t.color, t.templateMeta);
              await t.restore(h);
              const c = await (0, L.Ab)(this.stage, {
                id: h.id,
                name: o,
                quality: 1,
                nonDestructive: false,
                type: "document",
                unit: "pixel"
              }, h);
              if (c) {
                if (r) {
                  if (!(await (0, L.IF)(r, new File([c], o + "." + i)))) {
                    (0, L.gr)(new File([c], o + "." + i), o, i);
                  }
                } else {
                  (0, L.gr)(new File([c], o + "." + i), o, i);
                }
              }
              s.remove();
              document.dispatchEvent(new CustomEvent("loading", {
                detail: "stop"
              }));
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("fileSaved")
              }));
              (0, l.A)("save-file", "pxz-home");
            };
            const p = async e => {
              if (e != null) {
                e.preventDefault();
              }
              if (e != null) {
                e.stopPropagation();
              }
              await k.DocumentMeta.duplicate(t.id);
              this.setHistory();
            };
            const g = async i => {
              var o;
              var r;
              if (i != null) {
                i.preventDefault();
              }
              if (i != null) {
                i.stopPropagation();
              }
              if (!(await new S.A("Confirm", (0, a.A)("historyDeleteConfirm"), (0, a.A)("historyDelete")).init())) {
                return;
              }
              if (e) {
                this.tabClose(t.id, true);
              }
              if (s) {
                (0, n.Ay)(t.id).classList.remove("selected");
                if ((o = (0, n.Ay)(t.id + "-active")) !== null && o !== undefined) {
                  o.remove();
                }
              }
              if ((r = (0, n.Ay)(t.id)) !== null && r !== undefined) {
                r.remove();
              }
              this.showUndoToast(async () => {
                await t.undoRemove();
                this.setHistory();
              });
              await t.pendingRemove(i => {
                if (i) {
                  console.log(i);
                }
              });
            };
            const m = (0, n.T)("div", {
              className: "settings"
            });
            i.appendChild(m);
            const y = (0, n.T)("img", {
              className: "close",
              src: "assets/images/icon/close.svg",
              alt: `${(0, a.A)("historyDelete")} ${t.name}`
            });
            y.addEventListener("click", g);
            m.appendChild(y);
            const v = (0, n.T)("img", {
              className: "more",
              src: "assets/images/icon/three-dot.svg",
              alt: (0, a.A)("documentActions")
            });
            v.addEventListener("click", t => {
              t.preventDefault();
              t.stopPropagation();
              const e = t.currentTarget.getBoundingClientRect();
              new E.Ay(new c.A(e.x + window.scrollX + 10, e.y + window.scrollY + 10), [new E.kt((0, a.A)("historyDownloadPXZ"), u), new E.kt(), new E.kt((0, a.A)("historyDuplicate"), p), new E.kt((0, a.A)("historyDelete"), g)]);
            });
            m.appendChild(v);
            let f = document.createElement("input");
            f.value = t.name ? t.name.toLowerCase() : "Untitled";
            f.className = "name";
            f.addEventListener("click", t => {
              t.stopPropagation();
              return false;
            });
            f.addEventListener("keyup", o.eD(500, () => {
              t.name = f.value;
              t.save();
            }));
            i.appendChild(f);
            let w = document.createElement("span");
            w.innerText = o.XP(t.lastModified);
            w.className = "since";
            i.appendChild(w);
            i.addEventListener("click", () => {
              if (!i.classList.contains("pending")) {
                if (this.stage && this.stage.tabs.some(e => e.fresco.id === t.id)) {
                  this.tabSelect(t.id);
                } else {
                  this.stage.openFromHistory(t, d).catch(t => {
                    alert("Error restoring document");
                    console.error(t);
                  });
                }
              }
            }, false);
            return i;
          };
          this.selectTool = t => {};
          this.isSplash = () => (0, n.Ay)("workspace").style.display === "none";
          this.isModal = () => document.getElementsByClassName("modal").length > 0;
          this.tabSelect = t => {
            this.stage.select(t);
            this.hideSplash();
          };
          this.tabClose = (t, e = false) => {
            this.stage.close(t);
            if (!e && this.stage.tabs.length === 0) {
              this.showSplash();
            }
          };
          this.tabCloseAll = (t = false) => {
            this.stage.tabs.map(t => t.fresco.id).forEach(t => this.stage.close(t));
            if (!t) {
              this.showSplash();
            }
          };
          this.tabCloseOthers = t => {
            this.stage.select(t);
            this.stage.tabs.map(t => t.fresco.id).filter(e => e !== t).forEach(t => this.stage.close(t));
          };
          this.tabDuplicate = t => {
            this.stage.duplicate(t);
          };
          this.tabQuickExport = t => {
            this.stage.select(t);
            this.quickExport();
          };
          this.tabSave = (t, e) => {
            this.stage.select(t);
            this.downloadFormat(e || "png");
          };
          this.dragOver = t => {
            if (t.dataTransfer && t.dataTransfer.types.includes("Files") && (t.preventDefault(), t.stopPropagation(), (!this.isModal() || !this.stage.fresco) && !(0, n.Ay)("modal-drop"))) {
              const t = document.createElement("div");
              t.id = "modal-drop";
              t.classList.add("modal", "dim");
              t.innerHTML = `<div id="dim-message">${(0, a.A)("dropFile")}</div>`;
              document.body.appendChild(t);
            }
          };
          this.dragOut = t => {
            t.preventDefault();
            t.stopPropagation();
            if (t.clientX <= 0 && (0, n.Ay)("modal-drop")) {
              (0, n.Ay)("modal-drop").remove();
            }
          };
          this.drop = async t => {
            if (!t.dataTransfer || !t.dataTransfer.types.includes("Files")) {
              return;
            }
            t.stopPropagation();
            t.preventDefault();
            if ((0, n.Ay)("modal-drop")) {
              (0, n.Ay)("modal-drop").remove();
            }
            document.body.style.pointerEvents = "auto";
            if (this.isModal() && this.stage.fresco) {
              return;
            }
            const e = t.dataTransfer.files;
            for (var s, i = 0; s = e[i]; i++) {
              await u.Tq(s, this.stage, true, "drop");
            }
          };
          this.cut = async t => {
            if (o.Jn(document.activeElement)) {
              return;
            }
            if (this.isModal()) {
              return;
            }
            t.stopPropagation();
            t.preventDefault();
            let e = this.stage.cut();
            if (e instanceof HTMLCanvasElement) {
              this.writeClipboard(t, e);
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("cut")
              }));
            } else {
              navigator.clipboard.writeText("");
            }
          };
          this.copy = async t => {
            if (o.Jn(document.activeElement)) {
              return;
            }
            if (this.isModal()) {
              return;
            }
            t.stopPropagation();
            t.preventDefault();
            let e = this.stage.copy();
            if (e instanceof HTMLCanvasElement) {
              this.writeClipboard(t, e);
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("copy")
              }));
            } else {
              navigator.clipboard.writeText("");
            }
          };
          this.clear = async () => {
            if (this.stage.clear()) {
              document.dispatchEvent(new CustomEvent("notification", {
                detail: "clear"
              }));
            }
          };
          this.writeClipboard = async (t, e) => {
            const s = await o.PG(e);
            if (s) {
              this.stage.clipboard = e;
              this.stage.clipboardSize = new r.A(e.width, e.height);
              try {
                const t = {
                  name: "clipboard-write"
                };
                await navigator.permissions.query(t);
              } catch (i) {
                console.log(i);
              }
              try {
                const t = new ClipboardItem({
                  "image/png": s
                });
                await navigator.clipboard.write([t]);
                this.stage.clipboard = undefined;
              } catch (i) {
                console.log(i);
              }
            }
          };
          this.pasteActivatedFromMenu = async () => {
            try {
              const t = {
                name: "clipboard-read"
              };
              await navigator.permissions.query(t);
            } catch (t) {
              console.log(t);
            }
            try {
              const t = await navigator.clipboard.read();
              const e = await t[0].getType("image/png");
              if (e) {
                u.Tq(new File([e], "clipboard"), this.stage, false, "paste");
                this.stage.selectionDeselect();
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, a.A)("paste")
                }));
              } else {
                if (this.stage.clipboard) {
                  this.pasteLocal();
                  return;
                }
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, a.A)("noPaste")
                }));
              }
            } catch (t) {
              console.log(t);
              if (this.stage.clipboard) {
                this.pasteLocal();
                return;
              }
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("emptyPaste")
              }));
            }
          };
          this.paste = async t => {
            if (!this.isModal() && !o.Jn(document.activeElement)) {
              if (t.clipboardData && t.clipboardData.items.length > 0) {
                const i = t.clipboardData.items;
                let n;
                for (var e, s = 0; e = i[s]; s++) {
                  if (e.kind === "file") {
                    n = e;
                    break;
                  }
                }
                n ||= i[0];
                if (n.kind === "string") {
                  n.getAsString(async e => {
                    t.preventDefault();
                    t.stopPropagation();
                    let s = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/gi.exec(e);
                    if (s && s.length > 1) {
                      let t = await new p.A().load(s[1]);
                      u.Tq(t, this.stage, this.isSplash());
                      this.hideSplash();
                      document.dispatchEvent(new CustomEvent("notification", {
                        detail: (0, a.A)("paste")
                      }));
                      return;
                    }
                    if (this.stage.fresco) {
                      if (e.length > 200) {
                        e = e.substring(0, 200);
                      }
                      let t = Math.max(16, Math.round(this.stage.fresco.height / 20));
                      let s = Math.round(this.stage.fresco.width / 1.5);
                      let i = Math.round(this.stage.fresco.height / 2.5);
                      let n = Math.round((this.stage.fresco.width - s) / 2);
                      let o = new v.A("verdana", t);
                      this.stage.addText(e, new h.A(n, i, s, t), o, "paste");
                      this.hideSplash();
                      this.stage.selectionDeselect();
                      document.dispatchEvent(new CustomEvent("notification", {
                        detail: (0, a.A)("paste")
                      }));
                    }
                  });
                  return;
                }
                if (n.kind === "file") {
                  if (n.type.indexOf("image") == -1) {
                    return;
                  }
                  t.preventDefault();
                  t.stopPropagation();
                  const e = n.getAsFile();
                  u.Tq(e, this.stage, this.isSplash(), "paste");
                  this.stage.selectionDeselect();
                  this.hideSplash();
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: (0, a.A)("paste")
                  }));
                  return;
                }
              } else if (this.stage.clipboard) {
                this.pasteLocal();
                return;
              }
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("emptyPasteGlobal")
              }));
            }
          };
          this.pasteLocal = () => {
            if (Array.isArray(this.stage.clipboard)) {
              this.stage.pasteLayer();
            } else if (this.stage.clipboard instanceof HTMLCanvasElement) {
              this.stage.addImage(o.oM(this.stage.clipboard), (this.stage.fresco, this.stage.fresco.nextAddedLayerNumber()), "paste");
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("paste")
              }));
              this.stage.selectionDeselect();
            }
          };
          this.quickExport = async (t = false, e = "png") => {
            var s;
            var n;
            var r;
            if (!m.Ny?.subscription && (0, T.P2)()) {
              new C.default("quick-export", "save");
              return false;
            }
            let h;
            let c;
            let d;
            if (t) {
              c = ((s = this.stage.fresco) === null || s === undefined ? undefined : s.getSelected())?.canvas;
              if (!c) {
                return false;
              }
              h = ((r = (n = this.stage.fresco) === null || n === undefined ? undefined : n.getSelected()) === null || r === undefined ? undefined : r.settings.name) || "untitled";
            } else {
              c = this.stage.getOutputCanvas();
              h = this.stage.fresco.name || "untitled";
              if (this.stage.fresco.savedTimesCounterForUserEase > 0) {
                h += "(" + this.stage.fresco.savedTimesCounterForUserEase + ")";
              }
              this.stage.fresco.savedTimesCounterForUserEase++;
            }
            h = h.replace(".png", "").replace(".jpg", "");
            if (!T.Ay.useLegacySave && !!(0, L.zu)() && (d = await (0, L.D0)(h, e, e.toUpperCase() + " image", "image/" + e.replace("jpg", "jpeg")), d === false)) {
              return false;
            }
            const u = await o.PG(c, {
              type: "image/" + e.replace("jpg", "jpeg"),
              quality: 1
            });
            const p = new File([u], h + "." + e, {
              type: "image/" + e.replace("jpg", "jpeg")
            });
            if (d) {
              await (0, L.IF)(d, p);
              document.dispatchEvent(new CustomEvent("notification", {
                detail: (0, a.A)("fileSaved")
              }));
            } else {
              (0, L.gr)(p, h, e);
            }
            (0, T.pp)();
            (0, l.A)("quick-export", t ? "layer" : "image");
            return true;
          };
          this.urlClick = t => {
            (0, l.A)("open-url");
            new A.A(this.stage);
          };
          this.newClick = t => {
            (0, l.A)("open-new");
            new b.A(this.stage);
          };
          this.openClick = async t => {
            (0, l.A)("open-browse");
            await u.XN(true).then(async t => {
              for (let e = 0; e < t.length; e++) {
                await u.Tq(t[e], this.stage);
              }
            });
          };
          this.closeClick = () => {
            (0, l.A)("close");
            this.selectTool();
            this.tabClose();
          };
          this.saveClick = () => {
            (0, l.A)("save");
            this.selectTool();
            if (T.Ay.api && T.Ay.exportFormats && T.Ay.exportFormats.length > 0) {
              this.setSaving();
              (0, L.s5)(this.stage).finally(() => {
                this.setSaving(false);
              });
              return;
            }
            this.downloadFormat("png");
          };
          this.downloadFormat = async fmt => {
            if (!this.stage?.fresco || this.downloading) {
              return;
            }
            this.downloading = true;
            this.setSaving();
            try {
              document.dispatchEvent(new CustomEvent("select-tool"));
              this.stage.history.commitTransaction();
              await g.download(this.stage, fmt);
            } catch (error) {
              console.error("Download failed", error);
              document.dispatchEvent(new CustomEvent("notification", {
                detail: "Download failed. Please try again."
              }));
            } finally {
              this.downloading = false;
              this.setSaving(false);
            }
          };
          this.setSaving = (t = true) => {
            (0, n.Ay)("save")?.classList.toggle("working", t);
          };
          new w.A();
          if (window.matchMedia("(display-mode: standalone)").matches || document.referrer.includes("android-app://")) {
            document.title = "Pixlr Editor";
            document.documentElement.classList.add("standalone");
          }
          if (T.Ay.performanceMode) {
            if ((t = (0, n.Ay)("splash-reels")) !== null && t !== undefined) {
              t.remove();
            }
          }
          document.addEventListener("cut", this.cut, true);
          document.addEventListener("copy", this.copy, true);
          document.addEventListener("paste", this.paste, true);
          document.addEventListener("cut-menu", () => document.execCommand("cut"), true);
          document.addEventListener("copy-menu", () => document.execCommand("copy"), true);
          document.addEventListener("paste-menu", this.pasteActivatedFromMenu, true);
          document.addEventListener("clear-menu", () => this.clear(), true);
          document.addEventListener("dragstart", t => t.preventDefault(), true);
          document.addEventListener("dragover", this.dragOver, true);
          document.addEventListener("dragleave", this.dragOut, true);
          document.addEventListener("drop", this.drop, true);
          document.addEventListener("navigate", t => this.navigate(t.detail));
          this.stage = new d.A((0, n.Ay)("workspace"));
          if ((e = (0, n.Ay)("head-menu-settings")) !== null && e !== undefined) {
            e.replaceWith((0, n.Ay)("head-menu-settings").cloneNode(true));
          }
          if ((s = (0, n.Ay)("head-menu-settings")) !== null && s !== undefined) {
            s.addEventListener("click", () => {
              var t;
              if ((t = (0, n.Ay)("head-settings")) !== null && t !== undefined) {
                t.click();
              }
            });
          }
          if (T.Ay.tabLimit) {
            this.stage.tabLimit = T.Ay.tabLimit;
          }
          if (T.Ay.file) {
            new p.A({
              title: T.Ay.name || T.Ay.file.substring(T.Ay.file.lastIndexOf("/") + 1),
              referrer: T.Ay.referrer
            }).load("/proxy/?url=" + encodeURIComponent(T.Ay.file)).then(async t => {
              await u.Tq(t, this.stage, undefined, "api");
              if (T.Ay.api === "http" && T.Ay.target) {
                this.stage.fresco.saveMethod = new URL(T.Ay.target);
              }
            });
          }
          if (T.Ay.api === "embedded") {
            (0, f.E)(this.stage);
          }
          if (T.Ay.api) {
            (0, n.Ay)("toggle-home").style.display = "none";
            document.documentElement.classList.add("api-embed");
          }
          if (!T.Ay.file && !T.Ay.api) {
            const t = sessionStorage.getItem("open-history-doc");
            if (t) {
              sessionStorage.removeItem("open-history-doc");
              k.DocumentMeta.getByID(t).then(t => {
                if (t) {
                  this.stage.openFromHistory(t);
                }
              });
            }
          }
          if (!T.Ay.file && !T.Ay.api && (!!T.Ay.tool || !!T.Ay.task)) {
            this.setUpDeepLink();
          }
          (async function () {
            var t;
            var e;
            var s;
            var i;
            const a = await y.A.loadSaved();
            try {
              for (var n, o = true, r = I(a); !(t = (n = await r.next()).done); o = true) {
                i = n.value;
                o = false;
                const t = i;
                y.A.fontList.unshift(t);
              }
            } catch (h) {
              e = {
                error: h
              };
            } finally {
              try {
                if (!o && !t && !!(s = r.return)) {
                  await s.call(r);
                }
              } finally {
                if (e) {
                  throw e.error;
                }
              }
            }
          })();
          if (!T.Ay.api) {
            this.setUpSplash();
            this.setHistory();
            setTimeout(() => this.autoBackupToCache(), 5000);
            setInterval(() => this.autoBackupToCache(), 300000);
            document.addEventListener("visibilitychange", () => {
              if (document.visibilityState === "hidden") {
                this.autoBackupToCache();
              }
            });
          }
          document.dispatchEvent(new CustomEvent("resize"));
        }
      }
      i();
    } catch (F) {
      i(F);
    }
  });
}
