window.__editorModules[3508] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5699);
      var a = s(6050);
      var n = s(98);
      var o = s(5259);
      var r = s(5283);
      class h {
        constructor(t, e, s, h = false, l = true, c = false, d) {
          var u;
          this.activeColorPick = async t => {
            if ((0, r.Ay)("modal-color-select")) {
              return;
            }
            this.colorPreview = (0, r.T)("div", {
              className: "color-selector-preview",
              style: "display:none;"
            });
            const e = (0, r.T)("div", {
              id: "modal-color-select",
              style: "cursor:crosshair;",
              className: "modal"
            }, this.colorPreview);
            e.addEventListener("click", this.removeColorPicker, true);
            e.addEventListener("mousemove", this.pickerPreviewColor, true);
            document.body.appendChild(e);
            const s = document.getElementsByClassName("canvas");
            for (var a = 0; a < s.length; a++) {
              if (await (0, r.J9)(s[a])) {
                this.stageCRect = s[a].getBoundingClientRect();
                this.stageCanvas = i.oM(s[a]);
                break;
              }
            }
            if (!this.stageCanvas) {
              let t = document.getElementsByClassName("canvas")[0];
              this.stageCRect = t.getBoundingClientRect();
              this.stageCanvas = i.oM(t);
            }
            this.stageCanvasCTX = this.stageCanvas.getContext("2d");
          };
          this.pickerPreviewColor = t => {
            if (!this.stageCanvas) {
              return;
            }
            let e = new a.A(t.clientX, t.clientY);
            this.colorPreview.style.top = e.y - 60 + "px";
            this.colorPreview.style.left = e.x + 10 + "px";
            this.colorPreview.style.display = "block";
            const s = n.Ay.isHDPI ? 2 : 1;
            e.x = (e.x - this.stageCRect.left) * s;
            e.y = (e.y - this.stageCRect.top) * s;
            if (e.x < 0 || e.y < 0 || e.x > this.stageCRect.width * s || e.y > this.stageCRect.height * s) {
              this.colorPreview.style.display = "none";
              return;
            }
            let i = this.stageCanvasCTX.getImageData(e.x, e.y, 1, 1).data;
            this.colorPreview.style.backgroundColor = new o.A(i[0], i[1], i[2]).toHEX();
          };
          this.removeColorPicker = t => {
            (0, r.Ay)("modal-color-select").remove();
            this.colorPreview = null;
            let e = new a.A(t.clientX, t.clientY);
            const s = n.Ay.isHDPI ? 2 : 1;
            e.x = (e.x - this.stageCRect.left) * s;
            e.y = (e.y - this.stageCRect.top) * s;
            if (e.x < 0 || e.y < 0 || e.x > this.stageCRect.width * s || e.y > this.stageCRect.height * s) {
              return;
            }
            let i = this.stageCanvasCTX.getImageData(e.x, e.y, 1, 1).data;
            let h = new o.A(i[0], i[1], i[2]);
            this.setHex(h.toHEX(), true);
            this.updateColor(true);
          };
          this.satMouseDown = t => {
            t.stopPropagation();
            document.addEventListener("mousemove", this.satMouseMove, true);
            document.addEventListener("mouseup", this.satMouseUp, true);
            var e = this.satSlide.getBoundingClientRect();
            var s = t.clientX - e.left;
            var i = t.clientY - e.top;
            this.selectSat(s, i);
          };
          this.satMouseMove = t => {
            t.stopPropagation();
            var e = this.satSlide.getBoundingClientRect();
            var s = t.clientX - e.left;
            var i = t.clientY - e.top;
            this.selectSat(s, i);
          };
          this.satMouseUp = t => {
            t.stopPropagation();
            document.removeEventListener("mousemove", this.satMouseMove, true);
            document.removeEventListener("mouseup", this.satMouseUp, true);
          };
          this.satTouchStart = t => {
            t.stopPropagation();
            document.addEventListener("touchmove", this.satTouchMove, {
              passive: false
            });
            document.addEventListener("touchend", this.satTouchEnd, {
              passive: false
            });
            var e = this.satSlide.getBoundingClientRect();
            var s = t.targetTouches[0].clientX - e.left;
            var i = t.targetTouches[0].clientY - e.top;
            this.selectSat(s, i);
          };
          this.satTouchMove = t => {
            t.stopPropagation();
            var e = this.satSlide.getBoundingClientRect();
            var s = t.targetTouches[0].clientX - e.left;
            var i = t.targetTouches[0].clientY - e.top;
            this.selectSat(s, i);
          };
          this.satTouchEnd = t => {
            t.stopPropagation();
            document.removeEventListener("touchmove", this.satTouchMove);
            document.removeEventListener("touchend", this.satTouchEnd);
          };
          this.selectSat = (t, e) => {
            t = i.qE(t, 0, this.width);
            e = i.qE(e, 0, this.height);
            this.hsb.s = t / this.width;
            this.hsb.b = 1 - e / this.height;
            this.setSat();
            this.updateColor();
          };
          this.setSat = () => {
            this.satKnob.style.left = this.hsb.s * this.width - 9 + "px";
            this.satKnob.style.top = (1 - this.hsb.b) * this.height - 9 + "px";
          };
          this.hueMouseDown = t => {
            t.stopPropagation();
            document.addEventListener("mousemove", this.hueMouseMove, true);
            document.addEventListener("mouseup", this.hueMouseUp, true);
            var e = this.hueSlide.getBoundingClientRect();
            var s = t.clientX - e.left;
            this.selectHue(s);
          };
          this.hueMouseMove = t => {
            t.stopPropagation();
            var e = this.hueSlide.getBoundingClientRect();
            var s = t.clientX - e.left;
            this.selectHue(s);
          };
          this.hueMouseUp = t => {
            t.stopPropagation();
            document.removeEventListener("mousemove", this.hueMouseMove, true);
            document.removeEventListener("mouseup", this.hueMouseUp, true);
          };
          this.hueTouchStart = t => {
            t.stopPropagation();
            this.hueSlide.addEventListener("touchmove", this.hueTouchMove, {
              passive: false
            });
            document.addEventListener("touchend", this.hueTouchEnd, {
              passive: false
            });
            var e = t.target.getBoundingClientRect();
            var s = t.targetTouches[0].clientX - e.left;
            this.selectHue(s);
          };
          this.hueTouchMove = t => {
            t.stopPropagation();
            var e = t.target.getBoundingClientRect();
            var s = t.targetTouches[0].clientX - e.left;
            this.selectHue(s);
          };
          this.hueTouchEnd = t => {
            t.stopPropagation();
            this.hueSlide.removeEventListener("touchmove", this.hueTouchMove);
            document.removeEventListener("touchend", this.hueTouchEnd);
          };
          this.selectHue = t => {
            t = i.qE(t, 0, this.width);
            this.hsb.h = Math.round(t / this.width * 360);
            this.setHue();
            this.updateColor();
          };
          this.setHue = () => {
            this.hueKnob.style.left = this.hsb.h / 360 * this.width - 2 + "px";
            let t = this.satSlide.getContext("2d");
            t.fillStyle = o.A.fromHSB(this.hsb.h, 1, 1).toHEX();
            t.fillRect(0, 0, this.satSlide.width, this.satSlide.height);
            var e = t.createLinearGradient(0, 0, this.satSlide.width, 0);
            e.addColorStop(0, "rgba(255,255,255,1)");
            e.addColorStop(1, "rgba(255,255,255,0)");
            t.fillStyle = e;
            t.fillRect(0, 0, this.satSlide.width, this.satSlide.height);
            var s = t.createLinearGradient(0, 0, 0, this.satSlide.height);
            s.addColorStop(0, "rgba(0,0,0,0)");
            s.addColorStop(1, "rgba(0,0,0,1)");
            t.fillStyle = s;
            t.fillRect(0, 0, this.satSlide.width, this.satSlide.height);
          };
          this.selectPod = t => {
            var e;
            let s = t.currentTarget;
            if (s.classList.contains("selected") && !this.extended) {
              if (this.selector.style.display == "block") {
                this.selector.style.display = "none";
              } else {
                this.selector.style.display = "block";
                this.setHex(s.getAttribute("data"));
              }
            } else {
              if ((e = this.selected) !== null && e !== undefined) {
                e.classList.remove("selected");
              }
              this.selected = s;
              this.selected.classList.add("selected");
              this.selector.style.display = "block";
              if (s.getAttribute("data") === "empty") {
                this.color = undefined;
                if (this.callback) {
                  this.callback(undefined);
                }
                return;
              }
              this.setHex(s.getAttribute("data"), true);
            }
          };
          this.updateColor = (t = true, e = true) => {
            clearTimeout(this.setTimer);
            this.color = o.A.fromHSB(this.hsb.h, this.hsb.s, this.hsb.b);
            const s = this.color.toHEX();
            this.hexInput.value = s;
            if (e && this.selected) {
              if (this.selected.classList.contains("empty")) {
                this.selected.classList.remove("selected");
                this.selected = this.selected.nextElementSibling;
                this.selected.classList.add("selected");
              }
              this.selected.setAttribute("data", s);
              this.selected.style.backgroundColor = s;
            }
            this.setTimer = setTimeout(() => {
              if (this.callback && t) {
                this.callback(this.color);
              }
            }, 50);
          };
          this.hexInputInput = t => {
            if (/^#[0-9A-F]{6}$/i.test(this.hexInput.value)) {
              this.setHex(this.hexInput.value, false);
            }
          };
          this.hexInputBlur = t => {
            if (/^#[0-9A-F]{6}$/i.test(this.hexInput.value)) {
              this.setHex(this.hexInput.value, true);
            } else {
              this.hexInput.value = this.getHex();
            }
          };
          this.setColor = (t, e = false) => {
            this.hsb = t.toHSB();
            this.setHue();
            this.setSat();
            this.updateColor(e, true);
          };
          this.setHex = (t, e = false) => this.setColor(o.A.fromHEX(t), e);
          this.getHex = () => this.color.toHEX();
          this.getColor = () => this.color;
          this.color = e;
          this.holder = t;
          this.callback = s;
          this.height = 120;
          this.extended = c;
          this.holder.innerHTML = "";
          this.width = d || this.holder.getBoundingClientRect().width;
          this.selector = (0, r.T)("div", {
            className: "color-selector"
          });
          if (c) {
            this.presets = (0, r.T)("div", {
              className: "color-selector-presets"
            });
            if (h) {
              let t = (0, r.T)("div", {
                className: "color-pod square empty"
              });
              t.addEventListener("click", this.selectPod, false);
              t.setAttribute("data", "empty");
              if (!this.color) {
                t.classList.add("selected");
                this.selected = t;
              }
              this.presets.appendChild(t);
            }
            let t = [...n.Ay.oldColor.slice(), "#ffffff", "#888888", "#000000"];
            for (let e = 0; e < t.length; ++e) {
              let s = (0, r.T)("div", {
                className: "color-pod square"
              });
              s.addEventListener("click", this.selectPod, false);
              s.style.backgroundColor = t[e];
              s.setAttribute("data", t[e]);
              this.presets.appendChild(s);
              if (e === 0 && !c) {
                this.selected = s;
                s.classList.add("selected");
              }
            }
            this.presets.classList.add("top-10");
            this.holder.append(this.selector, (0, r.T)("div", {
              className: "splitter top-10"
            }), this.presets);
          } else {
            this.holder.append(this.selector);
          }
          let g = (0, r.T)("div", {
            className: "color-selector-sat",
            style: "width:" + this.width + "px; height:" + this.height + "px;"
          });
          this.selector.appendChild(g);
          this.satSlide = i.VI(this.width, this.height);
          this.satSlide.addEventListener("mousedown", this.satMouseDown, false);
          this.satSlide.addEventListener("touchstart", this.satTouchStart, {
            passive: false
          });
          this.satSlide.classList.add("color-selector-sat-slide");
          g.appendChild(this.satSlide);
          this.satKnob = document.createElement("div");
          this.satKnob.classList.add("color-selector-sat-knob", "ic");
          g.appendChild(this.satKnob);
          let m = document.createElement("div");
          m.classList.add("color-selector-hue");
          m.style.width = this.width + "px";
          this.selector.appendChild(m);
          this.hueSlide = document.createElement("div");
          this.hueSlide.style.width = this.width + "px";
          this.hueSlide.addEventListener("mousedown", this.hueMouseDown, false);
          this.hueSlide.addEventListener("touchstart", this.hueTouchStart, {
            passive: false
          });
          this.hueSlide.classList.add("color-selector-hue-slide");
          m.appendChild(this.hueSlide);
          this.hueKnob = document.createElement("div");
          this.hueKnob.classList.add("color-selector-hue-knob", "ic");
          m.appendChild(this.hueKnob);
          let y = (0, r.T)("div", {
            className: "color-selector-bar"
          });
          if (!c) {
            if (h) {
              let t = (0, r.T)("div", {
                className: "color-pod empty"
              });
              t.addEventListener("click", this.selectPod, false);
              t.setAttribute("data", "empty");
              if (!this.color) {
                this.selected = t;
              }
              y.appendChild(t);
            }
            let t = (0, r.T)("div", {
              className: "color-pod"
            });
            t.addEventListener("click", this.selectPod, false);
            y.appendChild(t);
            if (!h || !!this.color) {
              this.selected = t;
            }
          }
          this.hexInput = (0, r.T)("input", {
            type: "text",
            spellcheck: false,
            maxLength: 7,
            style: "width:90px;text-transform:uppercase;"
          });
          this.hexInput.addEventListener("input", this.hexInputInput, false);
          this.hexInput.addEventListener("blur", this.hexInputBlur, false);
          y.appendChild(this.hexInput);
          if (l) {
            let t = (0, r.T)("div", {
              className: "icon-button",
              style: "margin-left:auto;"
            }, (0, r.T)("img", {
              src: "assets/images/tool/picker.svg",
              className: "ic"
            }));
            t.addEventListener("click", this.activeColorPick, false);
            y.appendChild(t);
          }
          this.selector.appendChild(y);
          this.hsb = o.A.fromHEX(((u = this.color) === null || u === undefined ? undefined : u.toHEX()) ?? "#ffffff").toHSB();
          this.setHue();
          this.setSat();
          this.updateColor(false, !!this.color);
          this.color = e;
        }
      }
    }
