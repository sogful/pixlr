window.__editorModules[133] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(5283);
      var a = s(3244);
      var n = s(6050);
      class o {
        constructor(t, e) {
          this.stage = t;
          this.active = e;
          this.isMouseDown = false;
          this.dragStart = t => {
            this.p = t;
            this.d = new n.A(this.panel.offsetLeft, this.panel.offsetTop);
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
            if (s + 120 > (0, i.Ay)("workspace").offsetWidth) {
              s = (0, i.Ay)("workspace").offsetWidth - 240;
            }
            this.panel.style.left = s + "px";
            this.panel.style.top = e + "px";
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
            if (!this.stage || !this.stage.fresco) {
              this.back.width = 1;
              this.back.height = 1;
              this.navh.innerText = this.navw.innerText = "";
              return;
            }
            if (this.active && !this.isMouseDown && !this.stage.supressRender) {
              this.viewport = a.A.bestFit(this.stage.fresco.width, this.stage.fresco.height, 140, 120);
              this.scale = this.viewport.width / this.stage.fresco.width;
              this.nav.style.width = this.viewport.width + 2 + "px";
              this.nav.style.height = this.viewport.height + 2 + "px";
              this.back.width = this.viewport.width;
              this.back.height = this.viewport.height;
              var t = this.back.getContext("2d");
              t.imageSmoothingEnabled = true;
              t.imageSmoothingQuality = "high";
              this.stage.getOutputCanvas(this.stage.fresco, this.scale, undefined, t);
              t = undefined;
              this.position();
            }
          };
          this.position = () => {
            if (this.active && this.stage && this.stage.fresco) {
              let t = this.viewport.width;
              let e = this.viewport.height;
              let s = 0;
              let i = 0;
              t = Math.round(this.back.width * (this.stage.viewClip.width / (this.stage.fresco.width * this.stage.zoom)));
              e = Math.round(this.back.height * (this.stage.viewClip.height / (this.stage.fresco.height * this.stage.zoom)));
              s = -Math.round((this.stage.offset.x < 0 ? this.stage.offset.x / this.stage.zoom : 0) * this.scale);
              i = -Math.round((this.stage.offset.y < 0 ? this.stage.offset.y / this.stage.zoom : 0) * this.scale);
              this.marker.style.width = t + "px";
              this.marker.style.height = e + "px";
              this.marker.style.left = s + "px";
              this.marker.style.top = i + "px";
              this.setSelectionOrImageSize();
            }
          };
          this.mouseCord = t => {
            if (!this.active || !this.stage.fresco) {
              return;
            }
            let e = t.detail;
            if (e && this.stage && e.x > -1 && e.y > -1 && e.x < this.stage.fresco.width && e.y < this.stage.fresco.height) {
              this.navx.innerText = e.x.toString();
              this.navy.innerText = e.y.toString();
            } else {
              this.navx.innerText = "";
              this.navy.innerText = "";
            }
          };
          this.setSelectionOrImageSize = () => {
            if (this.stage.fresco.hasSelection()) {
              this.navw.innerText = this.stage.fresco.selection.bounds.width.toString();
              this.navh.innerText = this.stage.fresco.selection.bounds.height.toString();
            } else {
              this.navw.innerText = this.stage.fresco.width.toString();
              this.navh.innerText = this.stage.fresco.height.toString();
            }
          };
          this.backDown = t => {
            t.stopPropagation();
            let e = this.back.getBoundingClientRect();
            let s = this.stage.fresco.width / this.back.width;
            this.stage.setAnchor(new n.A(Math.round((t.clientX - e.x) * s), Math.round((t.clientY - e.y) * s)));
            this.stage.updateViewport();
          };
          this.touchStart = t => {
            t.preventDefault();
            t.stopPropagation();
            this.down(t.changedTouches[0].clientX, t.changedTouches[0].clientY);
            document.addEventListener("touchmove", this.touchMove, {
              passive: false
            });
            document.addEventListener("touchend", this.touchEnd, {
              passive: false
            });
          };
          this.touchMove = t => {
            t.preventDefault();
            t.stopPropagation();
            this.move(t.changedTouches[0].clientX, t.changedTouches[0].clientY);
          };
          this.touchEnd = t => {
            t.preventDefault();
            t.stopPropagation();
            this.up(t.changedTouches[0].clientX, t.changedTouches[0].clientY);
            document.removeEventListener("touchmove", this.touchMove);
            document.removeEventListener("touchend", this.touchEnd);
          };
          this.mouseDown = t => {
            t.stopPropagation();
            this.down(t.clientX, t.clientY);
            document.addEventListener("mousemove", this.mouseMove, true);
            document.addEventListener("mouseup", this.mouseUp, true);
          };
          this.mouseMove = t => {
            t.stopPropagation();
            this.move(t.clientX, t.clientY);
          };
          this.mouseUp = t => {
            t.stopPropagation();
            this.up(t.clientX, t.clientY);
            document.removeEventListener("mousemove", this.mouseMove, true);
            document.removeEventListener("mouseup", this.mouseUp, true);
          };
          this.down = (t, e) => {
            this.isMouseDown = true;
            this.downPoint = new n.A(t, e);
            this.downPosition = new n.A(this.marker.offsetLeft, this.marker.offsetTop);
          };
          this.move = (t, e) => {
            let s = this.downPosition.x + (t - this.downPoint.x);
            let i = this.downPosition.y + (e - this.downPoint.y);
            this.stage.setAnchor(new n.A(Math.round((s + this.marker.clientWidth / 2) / this.scale), Math.round((i + this.marker.clientHeight / 2) / this.scale)));
            this.stage.updateViewport();
          };
          this.up = (t, e) => {
            this.isMouseDown = false;
          };
          this.panel = (0, i.Ay)("navigator-panel");
          this.panel.classList.toggle("active", e);
          this.viewport = new a.A();
          this.nav = (0, i.Ay)("zoom-nav");
          this.back = (0, i.Ay)("zoom-nav-back");
          this.marker = (0, i.Ay)("zoom-nav-marker");
          this.navx = (0, i.Ay)("nav-cord-x");
          this.navy = (0, i.Ay)("nav-cord-y");
          this.navw = (0, i.Ay)("nav-size-w");
          this.navh = (0, i.Ay)("nav-size-h");
          this.marker.addEventListener("mousedown", this.mouseDown, false);
          this.marker.addEventListener("touchstart", this.touchStart, {
            passive: false
          });
          this.back.addEventListener("mousedown", this.backDown, false);
          (0, i.Ay)("zoom-out").addEventListener("click", () => this.stage.setZoomStep(false), false);
          (0, i.Ay)("zoom-in").addEventListener("click", () => this.stage.setZoomStep(true), false);
          (0, i.Ay)("zoom-input").addEventListener("input", () => {
            const t = Number.parseFloat((0, i.Ay)("zoom-input").value.replace("%", "")) / 100;
            if (t > 0) {
              this.stage.setZoom(t.toString());
            }
          }, false);
          (0, i.Ay)("zoom-input").addEventListener("blur", () => {
            (0, i.Ay)("zoom-input").value = Math.round(this.stage.zoom * 100) + "%";
          }, false);
          (0, i.Ay)("zoom-slider").addEventListener("input", () => {
            let t = Number.parseFloat((0, i.Ay)("zoom-slider").value);
            let e = 1;
            e = t <= 40 ? 0.1 + t / 40 * 0.9 : t <= 75 ? 1 + (t - 40) / 35 * 4 : 5 + (t - 75) / 25 * 45;
            this.stage.setZoom(e.toString());
          }, false);
          document.addEventListener("zoom-change", () => {
            if ((0, i.Ay)("zoom-input") !== document.activeElement) {
              (0, i.Ay)("zoom-input").value = Math.round(this.stage.zoom * 100) + "%";
            }
            let t = this.stage.zoom;
            let e = (0, i.Ay)("zoom-slider");
            e.value = t <= 1 ? Math.round((t - 0.1) * 40).toString() : t <= 5 ? Math.round(40 + (t - 1) / 4 * 35).toString() : Math.round(75 + (t - 5) / 45 * 25).toString();
          });
          (0, i.Ay)("navigator-minimize").addEventListener("pointerdown", t => {
            t.stopPropagation();
            (0, i.Ay)("navigator-panel").classList.toggle("collapse");
          }, true);
          (0, i.Ay)("navigator-close").addEventListener("pointerdown", t => {
            t.stopPropagation();
            document.dispatchEvent(new CustomEvent("panel-state", {
              detail: "navigator-panel"
            }));
          }, true);
          document.addEventListener("mouse-cord", this.mouseCord);
          document.addEventListener("viewport-update", this.position);
          document.addEventListener("layerlist-update", this.render);
          (0, i.Bb)((0, i.Ay)("navigator-panel-title"), this.dragStart, this.dragMove, this.dragEnd);
        }
      }
    }
