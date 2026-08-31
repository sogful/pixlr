window.__editorModules[1190] = function (t, e, s) {
      s.d(e, {
        A: () => v
      });
      var i = s(7775);
      var a = s(6939);
      var n = s(5283);
      var o = s(3244);
      var r = s(651);
      var h = s(5699);
      var l = s(6050);
      var c = s(749);
      var d = s(5328);
      var u = s(2216);
      var p = s(4932);
      var g = s(7732);
      var m = s(9632);
      var y = s(5887);
      class v extends a.A {
        constructor(t) {
          super((0, i.A)("dialogResizeTitle"), true, true);
          this.rotate = false;
          this.constrain = true;
          this.messy = false;
          this.saving = false;
          this.method = "fill";
          this.selectPreset = t => {
            if (this.saving) {
              return;
            }
            let e = t.currentTarget.getAttribute("data");
            if (e.indexOf(":") !== -1) {
              const t = Number(e.split(":")[0]);
              const s = Number(e.split(":")[1]);
              let i = this.source.width;
              let a = this.source.height;
              i = a = i > a ? i : a;
              if (t / s > 1) {
                a = Math.floor(a / (t / s));
              } else {
                i = Math.floor(i / (s / t));
              }
              this.setSize(i, a);
            } else {
              const t = e.split("x");
              this.setSize(Number(t[0]), Number(t[1]));
            }
          };
          this.changeContraint = t => {
            if (!this.saving) {
              this.constrain = !this.constrain;
              (0, n.Ay)("resize-size-lock").style.display = this.constrain ? "block" : "none";
              (0, n.Ay)("resize-size-vs").style.display = this.constrain ? "none" : "block";
              (0, n.Ay)("toggle-resize-constraint").checked = this.constrain;
            }
          };
          this.changeRotate = t => {
            if (!this.saving) {
              this.rotate = !this.rotate;
              this.calculateResize();
            }
          };
          this.changeMethod = () => {
            this.method = (0, n.Ay)("resize-method-fill").checked ? "fill" : "fit";
            this.calculateResize();
          };
          this.setSize = (t, e) => {
            this.target.width = t;
            this.target.height = e;
            (0, n.Ay)("resize-width").value = t.toString();
            (0, n.Ay)("resize-height").value = e.toString();
            this.calculateResize();
          };
          this.sizeInputChange = t => {
            if (this.saving) {
              return;
            }
            let e = t == null ? undefined : t.currentTarget;
            if (e.id == "resize-width") {
              this.target.width = h.qE(Number(e.value), 1, this.maxSize);
              if (this.constrain) {
                let t = this.target.width / this.source.width;
                this.target.height = Math.round(t * this.source.height);
                (0, n.Ay)("resize-height").value = this.target.height.toString();
              }
            } else {
              this.target.height = h.qE(Number(e.value), 1, this.maxSize);
              if (this.constrain) {
                let t = this.target.height / this.source.height;
                this.target.width = Math.round(t * this.source.width);
                (0, n.Ay)("resize-width").value = this.target.width.toString();
              }
            }
            if (e != document.activeElement) {
              (0, n.Ay)("resize-width").value = this.target.width.toString();
              (0, n.Ay)("resize-height").value = this.target.height.toString();
            }
            h.sg("resize", 250, this.calculateResize);
          };
          this.calculateResize = (t = false) => {
            console.log(this.method);
            if (!this.saving || t) {
              this.reset();
              if (this.target.width !== this.source.width || this.target.height !== this.source.height) {
                if (Math.round(this.target.width / this.source.width * 1000) === Math.round(this.target.height / this.source.height * 1000)) {
                  this.calculateScaleResize();
                } else {
                  this.calculateSmartResize();
                }
                this.messy = true;
              }
              this.preview.width = this.target.width;
              this.preview.height = this.target.height;
              (0, n.Ay)("preview-scale-label").innerText = (this.preview.offsetWidth / this.target.width * 100).toFixed(1) + "%";
              this.stage.renderOutputFrame(this.ctx, false, this.stage.fresco.color === undefined);
            }
          };
          this.calculateScaleResize = () => {
            let t = new l.A(this.target.width / this.source.width, this.target.height / this.source.height);
            for (const e of this.stage.fresco.layers) {
              if (e.rect) {
                let s = t.x;
                let i = t.y;
                if (e.rect.rotation) {
                  let a = e.rect.rotation > 180 ? e.rect.rotation - 180 : e.rect.rotation;
                  let n = Math.abs(90 - a) / 90;
                  s = t.x * n + t.y * (1 - n);
                  i = t.y * n + t.x * (1 - n);
                }
                e.rect.x = 0 + Math.round(e.rect.x * t.x);
                e.rect.y = 0 + Math.round(e.rect.y * t.y);
                if (s !== i && e instanceof u.A) {
                  e.rect.x += Math.round(e.rect.width * s - e.rect.width * i) * 0.5;
                  e.rect.width = Math.round(e.rect.width * i);
                  e.rect.height = Math.round(e.rect.height * i);
                } else {
                  e.rect.width = Math.round(e.rect.width * s);
                  e.rect.height = Math.round(e.rect.height * i);
                }
                if (e.rect.width < 1) {
                  e.rect.width = 1;
                }
                if (e.rect.height < 1) {
                  e.rect.height = 1;
                }
                if (e instanceof u.A) {
                  e.scaleBect(i);
                } else if (e instanceof p.A) {
                  e.scaleTrim(s, i);
                } else {
                  e.render();
                }
              }
            }
          };
          this.calculateSmartResize = () => {
            const t = this.target.width === this.target.height ? "square" : this.target.width > this.target.height ? "landscape" : "portrait";
            const e = this.source.width === this.source.height ? "square" : this.source.width > this.source.height ? "landscape" : "portrait";
            if (e === t || e === "square" || t === "square") {
              const t = new l.A(this.target.width / this.source.width, this.target.height / this.source.height);
              for (const e of this.stage.fresco.layers) {
                if (e.rect) {
                  if (e.rect.width >= this.source.width && e.rect.height >= this.source.height && (e.type === c.A.TYPE_SHAPE || e.type === c.A.TYPE_IMAGE || e.type === c.A.TYPE_FRAME)) {
                    if (e instanceof p.A) {
                      e.rect.x = e.rect.y = 0;
                      e.rect.width = this.target.width;
                      e.rect.height = this.target.height;
                      e.fitContent();
                    } else {
                      if (this.method === "fill") {
                        e.rect = o.A.fillFit(e.rect.width, e.rect.height, this.target.width, this.target.height);
                      } else {
                        e.rect = o.A.bestFit(e.rect.width, e.rect.height, this.target.width, this.target.height, true);
                      }
                      e.render();
                    }
                  } else {
                    const s = this.source.width > this.source.height ? this.source.width * 0.2 : this.source.height * 0.2;
                    this.positionAndScaleLayer(e, t, s);
                  }
                }
              }
            } else {
              const e = new Array();
              const s = new Array();
              const i = new Array();
              for (const r of this.stage.fresco.layers) {
                if (r.rect) {
                  if (r.rect.width >= this.source.width * 0.65 && r.rect.height >= this.source.height * 0.65 && (r.type === c.A.TYPE_SHAPE || r.type === c.A.TYPE_IMAGE || r.type === c.A.TYPE_ELEMENT || r.type === c.A.TYPE_FRAME)) {
                    if (this.rotate) {
                      let t = new l.A(this.target.width / this.source.height, this.target.height / this.source.width);
                      if (r instanceof g.A || r instanceof y.A) {
                        let e = t.x < t.y ? t.y : t.x;
                        if (r.rect.width >= this.source.width && r.rect.height >= this.source.height) {
                          e = t.x > t.y ? t.y : t.x;
                        }
                        let s = r.rect.center();
                        r.rect.width = Math.round(r.rect.width * e);
                        r.rect.height = Math.round(r.rect.height * e);
                        r.rect.setCenter(new l.A(Math.round(s.y * t.x), Math.round(s.x * t.y)));
                        r.rect.rotation += 90;
                      } else {
                        r.rect = r.rect.flipWidthAndHeight();
                        r.rect.x = Math.floor(r.rect.x * t.x);
                        r.rect.y = Math.floor(r.rect.y * t.y);
                        r.rect.width = Math.round(r.rect.width * t.x);
                        r.rect.height = Math.round(r.rect.height * t.y);
                        if (r instanceof p.A) {
                          r.fitContent();
                        } else {
                          r.render();
                        }
                      }
                    } else {
                      if (this.method === "fill") {
                        r.rect = o.A.fillFit(r.rect.width, r.rect.height, this.target.width, this.target.height);
                      } else {
                        r.rect = o.A.bestFit(r.rect.width, r.rect.height, this.target.width, this.target.height, true);
                      }
                      if (r instanceof p.A) {
                        r.fitContent();
                      } else {
                        r.render();
                      }
                    }
                  } else {
                    let a = r.rect.center();
                    if (t === "portrait") {
                      if (a.x > this.source.width * 0.45 && a.x < this.source.width * 0.55) {
                        i.push(r);
                      } else if (a.x >= this.source.width * 0.5) {
                        r.rect.x -= this.source.width * 0.5;
                        s.push(r);
                      } else {
                        e.push(r);
                      }
                    } else if (a.y >= this.source.height * 0.5) {
                      r.rect.y -= this.source.height * 0.5;
                      s.push(r);
                    } else {
                      e.push(r);
                    }
                  }
                }
              }
              const a = this.stage.fresco.getStackBounds(e);
              const n = this.stage.fresco.getStackBounds(s);
              const h = this.stage.fresco.getStackBounds(i);
              if (t === "portrait") {
                const t = this.source.height * 0.2;
                let o = new r.A(this.source.width * 0.5, this.source.height);
                let c = new r.A(this.target.width, this.target.height * 0.5);
                if (a) {
                  let s = new l.A(c.width / o.width, c.height / o.height);
                  if (a.x > 0 && a.width < o.width * 1.5) {
                    s.x = c.width / (a.width + a.x * 2);
                  } else if (a.x <= 0 && a.width > o.width * 0.5) {
                    s.x = s.x = c.width / a.width;
                  }
                  for (const i of e) {
                    this.positionAndScaleLayer(i, s, t);
                  }
                }
                if (n) {
                  let e = 0;
                  let i = new l.A(c.width / o.width, c.height / o.height);
                  if (n.x >= 0 && n.right() <= o.width && n.width < o.width * 1.5) {
                    e = o.width - n.right() - n.x;
                    i.x = c.width / (n.width + (o.width - n.right()) * 2);
                  } else if (n.x <= 0 && n.width > o.width * 0.5) {
                    e = Math.abs(n.x);
                    i.x = c.width / (n.width - (n.right() - o.width));
                  }
                  for (const a of s) {
                    a.rect.x += e;
                    this.positionAndScaleLayer(a, i, t);
                    a.rect.y += this.target.height * 0.5;
                    if (a.bect) {
                      a.bect.y += this.target.height * 0.5;
                    }
                  }
                }
                if (h) {
                  let t = h.width / this.source.width > 0.5 ? this.target.width * 0.95 / h.width : this.target.width / (this.source.width * 0.5);
                  for (const e of i) {
                    let s = e.rect.center();
                    e.rect.width = Math.round(e.rect.width * t);
                    e.rect.height = Math.round(e.rect.height * t);
                    if (e.rect.width < 1) {
                      e.rect.width = 1;
                    }
                    if (e.rect.height < 1) {
                      e.rect.height = 1;
                    }
                    e.rect.setCenter(new l.A(this.target.width * (s.x / this.source.width), this.target.height * 0.25 + this.target.height * 0.5 * (s.y / this.source.height)));
                    if (e instanceof u.A) {
                      e.scaleBect(t);
                    } else if (e instanceof p.A) {
                      e.scaleTrim(t, t);
                    } else {
                      e.render();
                    }
                  }
                }
              } else {
                let t = 0;
                const i = this.source.width * 0.2;
                let o = new r.A(this.source.width, this.source.height * 0.5);
                let h = new r.A(this.target.width * 0.5, this.target.height);
                if (a && !n || !a && n) {
                  t = a ? o.width * 0.5 : o.width * -0.5;
                }
                if (a) {
                  let s = 0;
                  let n = new l.A(h.width / o.width, h.height / o.height);
                  if (a.y > 0 && a.height < o.height * 1.5) {
                    n.y = h.height / (a.height + a.y * 2);
                  } else if (a.y > 0 && a.height > o.height * 1.5) {
                    s = a.y * -1;
                  } else if (a.y <= 0 && a.height > o.height * 0.5) {
                    n.y = n.y = h.height / a.height;
                  }
                  for (const a of e) {
                    a.rect.y += s;
                    a.rect.x += t;
                    this.positionAndScaleLayer(a, n, i, true);
                  }
                }
                if (n) {
                  let e = 0;
                  let a = new l.A(h.width / o.width, h.height / o.height);
                  if (n.y < 0) {
                    e = Math.abs(n.y);
                    n.y += e;
                  }
                  if (n.height - e > o.height) {
                    n.height = o.height + e;
                  }
                  if (n.height >= o.height) {
                    a.y = h.height / n.height;
                  } else {
                    e += (o.height - n.height) * 0.5;
                  }
                  for (const n of s) {
                    n.rect.y += e;
                    n.rect.x += t;
                    this.positionAndScaleLayer(n, a, i, true);
                    n.rect.x += this.target.width * 0.5;
                    if (n.bect) {
                      n.bect.x += this.target.width * 0.5;
                    }
                  }
                }
              }
            }
          };
          this.positionAndScaleLayer = (t, e, s, i = false) => {
            const a = e.x > e.y ? e.y : e.x;
            if (this.willScaleUniform(t, s)) {
              t.rect.x = Math.floor(t.rect.x * e.x);
              t.rect.y = Math.floor(t.rect.y * e.y);
              t.rect.width = Math.round(t.rect.width * e.x);
              t.rect.height = Math.round(t.rect.height * e.y);
              if (t.rect.width < 1) {
                t.rect.width = 1;
              }
              if (t.rect.height < 1) {
                t.rect.height = 1;
              }
              if (t instanceof p.A) {
                t.fitContent();
              } else {
                t.render();
              }
            } else {
              const s = t.rect.center();
              t.rect.width = Math.round(t.rect.width * a);
              t.rect.height = Math.round(t.rect.height * a);
              if (t.rect.width < 1) {
                t.rect.width = 1;
              }
              if (t.rect.height < 1) {
                t.rect.height = 1;
              }
              if (i) {
                t.rect.y = Math.floor(t.rect.y * e.y);
                t.rect.setCenterX(Math.round(s.x * e.x));
              } else {
                t.rect.setCenter(new l.A(Math.round(s.x * e.x), Math.round(s.y * e.y)));
              }
              if (t instanceof u.A) {
                t.scaleBect(a);
              } else if (t instanceof p.A) {
                t.scaleTrim(a, a);
              } else {
                t.render();
              }
            }
          };
          this.willScaleUniform = (t, e) => (t instanceof p.A || t instanceof m.A) && (t.rect.width > e || t.rect.height > e) && (!(t instanceof m.A) || t.shapeSettings.variant !== "svg" && t.shapeSettings.variant !== "ellipse");
          this.reset = () => {
            if (this.messy) {
              for (let t = 0; t < this.stage.fresco.layers.length; ++t) {
                if (this.stage.fresco.layers[t].rect) {
                  this.stage.fresco.layers[t].rect = this.rOrg[t].clone();
                  this.stage.fresco.layers[t].trim &&= this.tOrg[t].clone();
                  this.stage.fresco.layers[t].render();
                }
              }
              this.messy = false;
            }
          };
          this.cancel = () => {
            this.reset();
            this.cleanUp();
          };
          this.apply = () => {
            if (this.saving) {
              return;
            }
            this.saving = true;
            this.reset();
            const t = new r.A(this.source.width, this.source.height);
            this.stage.fresco.setSize(this.target.width, this.target.height);
            if (this.stage.fresco.selection) {
              this.stage.fresco.selection.size(this.target.width, this.target.height);
            }
            const e = this.stage.fresco.layers.map(t => {
              t.syncRequested = new Date();
              return t.clone(true);
            });
            this.calculateResize(true);
            for (const s of this.stage.fresco.layers) {
              if (s instanceof g.A) {
                s.applyTransform(true);
              }
            }
            this.stage.history.add({
              type: "pageResize",
              size: t,
              layers: e
            });
            this.stage.updateViewport();
            document.dispatchEvent(new CustomEvent("layerlist-update"));
            document.dispatchEvent(new CustomEvent("layer-arrange"));
            this.cleanUp();
          };
          this.stage = t;
          this.maxSize = 8192;
          this.rOrg = new Array();
          this.tOrg = new Array();
          for (let i of this.stage.fresco.layers) {
            this.rOrg.push(i.rect ? i.rect.clone() : undefined);
            this.tOrg.push(i.trim ? i.trim.clone() : undefined);
          }
          this.source = new r.A(this.stage.fresco.width, this.stage.fresco.height);
          this.target = new r.A(this.stage.fresco.width, this.stage.fresco.height);
          this.dialog.style.width = "90%";
          this.dialog.style.height = "80%";
          this.dialog.style.maxWidth = "1200px";
          this.content.style.flex = "1";
          this.content.style.height = "1px";
          this.content.style.padding = "0px";
          this.content.style.display = "flex";
          this.content.style.position = "relative";
          this.setContent(`\n            <div id="resize-settings" style="flex:0 0 auto;width:320px;position:relative;overflow: hidden;">\n\n                <div id="resize-settings-inner" style="padding:20px;overflow: hidden;">\n\n                    <div style="display: flex; line-height: 28px;">\n                        <div style="flex-grow:1">\n                            <label class="split" style="height: 36px!important;">${(0, i.A)("width")} <input type="number" id="resize-width"/></label>\n                            <label class="split" style="height: 36px!important;">${(0, i.A)("height")} <input type="number" id="resize-height"/></label>\n                        </div>\n                        <div style="width:30px">\n                            <div id="resize-constraint" class="constraint">\n                                <div class="constraint-lock" flow="left" tooltip="${(0, i.A)("toggleConstraint")}">\n                                    <img src="assets/images/icon/locked.svg" id="resize-size-lock" width="16" height="16" loading="lazy" class="ic tiny-icon">\n                                    <img src="assets/images/icon/x.svg" id="resize-size-vs" width="16" height="16" loading="lazy" style="display:none" class="ic tiny-icon">\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <input type="checkbox" checked id="toggle-resize-constraint" />\n                    <label class="switch top-10" for="toggle-resize-constraint">${(0, i.A)("dialogResizeLock")}<span></span></label>\n            \n                    <div class="splitter small top-20"></div>\n\n                    <div class="split top-20">\n                        <label>${(0, i.A)("method")}</label>\n                        <div class="switch-field">\n                            <input type="radio" id="resize-method-fill" name="resize-method" value="fill" checked="true" /><label for="resize-method-fill">${(0, i.A)("fill")}</label>\n                            <input type="radio" id="resize-method-fit" name="resize-method" value="fit" /><label for="resize-method-fit">${(0, i.A)("fit")}</label>\n                        </div>\n                    </div>\n\n                    <input type="checkbox" id="toggle-resize-rotate" />\n                    <label class="switch top-10" for="toggle-resize-rotate">${(0, i.A)("dialogResizeRotate")}<span></span></label>\n\n                    <div class="splitter top-20"></div>\n\n                    <ul id="resize-presets" class="size-list top-20">\n\n                        <li data="" id="resize-reset"><img src="assets/images/icon/reset.svg" width="18" height="18" loading="lazy" title="reset">${(0, i.A)("reset")} <span id="resize-reset-span"></span></span></li>\n\n                        <li data="1:1"><img src="assets/images/icon/category/landscape.svg" width="18" height="18" loading="lazy" title="Square">Square <span>1:1 aspect</span></span></li>\n                        <li data="16:9"><img src="assets/images/icon/category/landscape.svg" width="18" height="18" loading="lazy" title="Wide">Wide <span>16:9 aspect</span></span></li>\n                        <li data="9:16"><img src="assets/images/icon/category/portrait.svg" width="18" height="18" loading="lazy" title="Tall">Tall <span>9:16 aspect</span></span></li>\n                        <li data="4:3"><img src="assets/images/icon/category/landscape.svg" width="18" height="18" loading="lazy" title="Landscape">Landscape <span>4:3 aspect</span></span></li>\n                        <li data="3:4"><img src="assets/images/icon/category/portrait.svg" width="18" height="18" loading="lazy" title="Portrait">Portrait <span>3:4 aspect</span></span></li>\n\n                        <li data="1080x1920"><img src="assets/images/icon/category/tiktok.svg" width="18" height="18" loading="lazy" title="Tiktok video">Tiktok video<span>1080x1920px</span></li>\n\n                        <li data="1080x1080"><img src="assets/images/icon/category/instagram.svg" width="18" height="18" loading="lazy" title="Instagram square">Instagram square <span>1080x1080px</span></li>\n                        <li data="1080x1350"><img src="assets/images/icon/category/instagram.svg" width="18" height="18" loading="lazy" title="Instagram post">Instagram post <span>1080x1350px</span></li>\n                        <li data="1080x1920"><img src="assets/images/icon/category/instagram.svg" width="18" height="18" loading="lazy" title="Instagram story">Instagram story <span>1080x1920px</span></li>\n                        <li data="1080x1920"><img src="assets/images/icon/category/instagram.svg" width="18" height="18" loading="lazy" title="Instagram reelse">Instagram reels <span>1080x1920px</span></li>\n\n                        <li data="1200x630"><img src="assets/images/icon/category/facebook.svg" width="18" height="18" loading="lazy" title="Facebook post">Facebook post <span>1200x630px</span></li>\n                        <li data="1080x1920"><img src="assets/images/icon/category/facebook.svg" width="18" height="18" loading="lazy" title="Facebook story">Facebook story <span>1080x1920px</span></li>\n                        <li data="1080x1920"><img src="assets/images/icon/category/facebook.svg" width="18" height="18" loading="lazy" title="Facebook reelse">Facebook reels <span>1080x1920px</span></li>\n                        <li data="850x850"><img src="assets/images/icon/category/facebook.svg" width="18" height="18" loading="lazy" title="Facebook profile">Facebook profile <span>850x850px</span></li>\n                        <li data="1920x1005"><img src="assets/images/icon/category/facebook.svg" width="18" height="18" loading="lazy" title="Facebook event">Facebook event <span>1920x1005px</span></li>\n                        \n                        <li data="1600x900"><img src="assets/images/icon/category/x.svg" width="18" height="18" loading="lazy" title="X post">X post <span>1600x900px</span></li>\n                        <li data="1500x500"><img src="assets/images/icon/category/x.svg" width="18" height="18" loading="lazy" title="X cover">X cover <span>1500x500px</span></li>\n                        <li data="400x400"><img src="assets/images/icon/category/x.svg" width="18" height="18" loading="lazy" title="X profile">X profile <span>400x400px</span></li>\n\n                        <li data="1080x1920"><img src="assets/images/icon/category/youtube.svg" width="18" height="18" loading="lazy" title="Youtube shorts">Youtube shorts <span>1080x1920px</span></li>\n                        <li data="800x800"><img src="assets/images/icon/category/youtube.svg" width="18" height="18" loading="lazy" title="Youtube profile">Youtube profile <span>800x800px</span></li>\n                        <li data="1280x720"><img src="assets/images/icon/category/youtube.svg" width="18" height="18" loading="lazy" title="Youtube thumbnail">Youtube thumbnail <span>1280x720px</span></li>\n                        <li data="2048x1152"><img src="assets/images/icon/category/youtube.svg" width="18" height="18" loading="lazy" title="Youtube channel art">Youtube channel art <span>2048x1152px</span></li>\n\n                        <li data="1000x1500"><img src="assets/images/icon/category/pinterest.svg" width="18" height="18" loading="lazy" title="Pinterest pin">Pinterest pin <span>1000x1500px</span></li>\n                        <li data="1000x1000"><img src="assets/images/icon/category/pinterest.svg" width="18" height="18" loading="lazy" title="Pinterest square pin">Pinterest square pin <span>1000x1000px</span></li>\n                        <li data="1000x2100"><img src="assets/images/icon/category/pinterest.svg" width="18" height="18" loading="lazy" title="Pinterest long pin">Pinterest long pin <span>1000x2100px</span></li>\n\n                        <li data="1240x1748"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO A6">A6 105 x 148 mm <span>1240x1748px</span></li>\n                        <li data="1748x2480"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO A5">A5 148 x 210 mm <span>1748x2480px</span></li>\n                        <li data="2480x3508"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO A4">A4 210 x 297 mm <span>2480x3508px</span></li>\n                        <li data="3508x4960"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO A3">A3 297 x 420 mm <span>3508x4960px</span></li>\n\n                        <li data="2079x2953"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO B5">B5 185 x 275 mm <span>2079x2953px</span></li>\n                        <li data="2953x4169"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO B4">B4 257 x 364 mm <span>2953x4169px</span></li>\n                        <li data="4169x5906"><img src="assets/images/icon/category/paper.svg" width="18" height="18" loading="lazy" title="ISO B4">B3 382 x 546 mm <span>4169x5906px</span></li>\n\n                        <li data="1275x1650"><img src="assets/images/icon/category/flyer.svg" width="18" height="18" loading="lazy" title="Flyer 4.25 x 5.5 in">Flyer 4.25 x 5.5 in<span>1275x1650px</span></li>\n                        <li data="1650x2550"><img src="assets/images/icon/category/flyer.svg" width="18" height="18" loading="lazy" title="Flyer 5.5 x 8.5 in">Flyer 5.5 x 8.5 in<span>1650x2550px</span></li>\n                        <li data="1650x2550"><img src="assets/images/icon/category/flyer.svg" width="18" height="18" loading="lazy" title="Flyer 8.5 x 11 in">Flyer 8.5 x 11 in<span>2550x3300px</span></li>\n                    </ul>\n\n                </div>\n            </div>\n\n            <div id="resize-preview" style="display:flex;flex-grow:1;background: linear-gradient(43deg, #ffffff00 0%, #ffffff11 100%);padding:20px;align-items:center;justify-content:center;">\n                <canvas id="resize-preview-canvas" style="max-height:100%; max-width:100%; box-shadow: 6px 6px 12px rgb(0 0 0 / 30%);background-image: var(--square-bg);background-size: 20px 20px;background-position: 50% 50%;"/>\n            </div>\n        `);
          this.content.append((0, n.T)("div", {
            id: "preview-scale",
            style: "display:flex;position:absolute;z-index:99;height:28px;top:20px;right:20px;padding:0 15px 0 10px;gap:8px;border-radius:50vh;background-color:#00000088;color:#fff;opacity:0.7;align-items:center;"
          }, (0, n.T)("img", {
            src: "assets/images/tool/zoom.svg",
            width: 16,
            height: 16
          }), (0, n.T)("span", {
            id: "preview-scale-label",
            style: "font-size:14px;"
          })));
          (0, n.Ay)("resize-reset").setAttribute("data", this.source.width + "x" + this.source.height);
          (0, n.Ay)("resize-reset-span").innerText = this.source.width + "x" + this.source.height + "px";
          (0, n.Ay)("resize-constraint").addEventListener("click", this.changeContraint, false);
          (0, n.Ay)("toggle-resize-constraint").addEventListener("click", this.changeContraint, false);
          (0, n.Ay)("toggle-resize-rotate").addEventListener("click", this.changeRotate, false);
          let e = (0, n.Ay)("resize-width");
          e.addEventListener("input", this.sizeInputChange, false);
          e.addEventListener("change", this.sizeInputChange, false);
          e.value = this.source.width.toString();
          let s = (0, n.Ay)("resize-height");
          s.addEventListener("change", this.sizeInputChange, false);
          s.addEventListener("input", this.sizeInputChange, false);
          s.value = this.source.height.toString();
          (0, n.Ay)("resize-method-fill").addEventListener("change", this.changeMethod, true);
          (0, n.Ay)("resize-method-fit").addEventListener("change", this.changeMethod, true);
          let a = (0, n.Ay)("resize-presets").getElementsByTagName("li");
          for (var v = 0; v < a.length; v++) {
            a[v].addEventListener("click", this.selectPreset, false);
          }
          new d.A((0, n.Ay)("resize-settings"));
          this.preview = (0, n.Ay)("resize-preview-canvas");
          this.ctx = this.preview.getContext("2d");
          this.calculateResize();
        }
      }
    }
