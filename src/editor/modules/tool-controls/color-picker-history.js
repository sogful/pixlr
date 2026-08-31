window.__editorModules[8854] = function (t, e, s) {
      s.d(e, {
        A: () => c
      });
      var i = s(7775);
      var a = s(6939);
      var n = s(5283);
      var o = s(5699);
      var r = s(5259);
      var h = s(6050);
      var l = s(98);
      class c extends a.A {
        constructor(t, e, s) {
          super((0, i.A)("titleColorPicker"), false);
          this.hue = 0;
          this.sat = 0;
          this.bri = 1;
          this.setHistory = t => {
            let e = r.A.fromRGB(t.currentTarget.style.backgroundColor);
            this.setColor(e);
          };
          this.pickerPreviewColor = t => {
            let e = new h.A(t.clientX, t.clientY);
            this.colorPreview.style.top = e.y - 50 + "px";
            this.colorPreview.style.left = e.x + 10 + "px";
            this.colorPreview.style.display = "block";
            const s = l.Ay.isHDPI ? 2 : 1;
            e = new h.A((t.clientX - this.stageC.offsetLeft) * s, (t.clientY - this.stageC.offsetTop) * s);
            if (t.target !== this.modal || e.x < 0 || e.y < 0 || e.x > this.stageC.width || e.y > this.stageC.height) {
              this.colorPreview.style.display = "none";
              return;
            }
            let i = this.stageCanvasCTX.getImageData(e.x, e.y, 1, 1).data;
            this.colorPreview.style.backgroundColor = new r.A(i[0], i[1], i[2]).toHEX();
          };
          this.pickerPreviewLeave = () => {
            this.colorPreview.style.display = "none";
          };
          this.pickerSetColor = t => {
            const e = l.Ay.isHDPI ? 2 : 1;
            let s = new h.A((t.clientX - this.stageC.offsetLeft) * e, (t.clientY - this.stageC.offsetTop) * e);
            if (t.target !== this.modal || s.x < 0 || s.y < 0 || s.x > this.stageC.width || s.y > this.stageC.height) {
              return;
            }
            let i = this.stageCanvasCTX.getImageData(s.x, s.y, 1, 1).data;
            this.setColor(new r.A(i[0], i[1], i[2]));
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
            document.addEventListener("touchmove", this.satTouchMove, true);
            document.addEventListener("touchend", this.satTouchEnd, true);
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
            document.removeEventListener("touchmove", this.satTouchMove, true);
            document.removeEventListener("touchend", this.satTouchEnd, true);
          };
          this.selectSat = (t, e) => {
            t = o.qE(t, 0, 256);
            e = o.qE(e, 0, 256);
            this.sat = t / 256;
            this.bri = 1 - e / 256;
            this.setSatKnob();
            this.calculateColor();
          };
          this.setSatKnob = () => {
            this.satKnob.style.left = this.sat * 256 - 9 + "px";
            this.satKnob.style.top = (1 - this.bri) * 256 - 9 + "px";
          };
          this.hueMouseDown = t => {
            t.stopPropagation();
            document.addEventListener("mousemove", this.hueMouseMove, true);
            document.addEventListener("mouseup", this.hueMouseUp, true);
            var e = this.hueSlide.getBoundingClientRect();
            this.selectHue(t.clientY - e.top);
          };
          this.hueMouseMove = t => {
            t.stopPropagation();
            var e = this.hueSlide.getBoundingClientRect();
            this.selectHue(t.clientY - e.top);
          };
          this.hueMouseUp = t => {
            t.stopPropagation();
            document.removeEventListener("mousemove", this.hueMouseMove, true);
            document.removeEventListener("mouseup", this.hueMouseUp, true);
          };
          this.hueTouchStart = t => {
            t.stopPropagation();
            this.hueSlide.addEventListener("touchmove", this.hueTouchMove, true);
            document.addEventListener("touchend", this.hueTouchEnd, true);
            var e = t.target.getBoundingClientRect();
            this.selectHue(t.targetTouches[0].clientY - e.top);
          };
          this.hueTouchMove = t => {
            t.stopPropagation();
            var e = t.target.getBoundingClientRect();
            this.selectHue(t.targetTouches[0].clientY - e.top);
          };
          this.hueTouchEnd = t => {
            t.stopPropagation();
            this.hueSlide.removeEventListener("touchmove", this.hueTouchMove, true);
            document.removeEventListener("touchend", this.hueTouchEnd, true);
          };
          this.selectHue = t => {
            t = o.qE(t, 0, 256);
            this.hue = Math.round(359 - t / 256 * 359);
            this.setHueKnob();
            this.calculateColor();
          };
          this.setHueKnob = () => {
            this.hueKnob.style.top = 252 - this.hue / 359 * 254 + "px";
            let t = this.satSlide.getContext("2d");
            t.fillStyle = r.A.fromHSB(this.hue, 1, 1).toHEX();
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
          this.calculateColor = () => {
            this.color = r.A.fromHSB(this.hue, this.sat, this.bri);
            var t = document.activeElement;
            this.hexInput.value = this.color.toHEX();
            if (t !== this.hueInput) {
              this.hueInput.value = Math.round(this.hue).toString();
            }
            if (t !== this.satInput) {
              this.satInput.value = Math.round(this.sat * 100).toString();
            }
            if (t !== this.briInput) {
              this.briInput.value = Math.round(this.bri * 100).toString();
            }
            if (t !== this.redInput) {
              this.redInput.value = this.color.r.toString();
            }
            if (t !== this.greenInput) {
              this.greenInput.value = this.color.g.toString();
            }
            if (t !== this.blueInput) {
              this.blueInput.value = this.color.b.toString();
            }
            this.selected.style.backgroundColor = this.color.toRGBA();
            if (this.preview) {
              o.sg("preview", 50, () => {
                this.preview(this.color);
              });
            }
          };
          this.hexInputChange = t => {
            if (/^#[0-9A-F]{6}$/i.test(this.hexInput.value)) {
              this.setColor(r.A.fromHEX(this.hexInput.value));
            }
          };
          this.hueInputChange = t => {
            this.hue = o.qE(parseInt(this.hueInput.value), 0, 359);
            this.setHueKnob();
            this.calculateColor();
          };
          this.satInputChange = t => {
            this.sat = o.qE(parseInt(this.satInput.value), 0, 100) / 100;
            this.setSatKnob();
            this.calculateColor();
          };
          this.briInputChange = t => {
            this.bri = o.qE(parseInt(this.briInput.value), 0, 100) / 100;
            this.setSatKnob();
            this.calculateColor();
          };
          this.redInputChange = t => {
            this.color.r = o.qE(parseInt(this.redInput.value), 0, 255);
            this.setColor(this.color);
          };
          this.greenInputChange = t => {
            this.color.g = o.qE(parseInt(this.greenInput.value), 0, 255);
            this.setColor(this.color);
          };
          this.blueInputChange = t => {
            this.color.b = o.qE(parseInt(this.blueInput.value), 0, 255);
            this.setColor(this.color);
          };
          this.setColor = t => {
            this.color = t ?? new r.A();
            let e = Math.min(this.color.r, this.color.g, this.color.b);
            let s = Math.max(this.color.r, this.color.g, this.color.b);
            this.bri = s / 255;
            var i = s - e;
            if (i) {
              this.sat = i / s;
              if (this.color.r == s) {
                this.hue = (this.color.g - this.color.b) / i * 60;
              } else if (this.color.g == s) {
                this.hue = (2 + (this.color.b - this.color.r) / i) * 60;
              } else {
                this.hue = (4 + (this.color.r - this.color.g) / i) * 60;
              }
              if (this.hue > 360) {
                this.hue -= 360;
              } else if (this.hue < 0) {
                this.hue += 360;
              }
              if (this.hue === 360) {
                this.hue = 0;
              }
            } else {
              this.hue = this.sat = 0;
            }
            this.setHueKnob();
            this.setSatKnob();
            this.calculateColor();
          };
          this.getColor = () => this.color;
          this.getHex = () => this.color.toHEX();
          this.cancel = () => {
            if (this.preview) {
              this.preview(this.current);
            }
            this.cleanUp();
          };
          this.apply = () => {
            if (this.callback) {
              if (this.preview) {
                this.preview(this.current);
              }
              (0, l.oY)(this.color);
              this.callback(this.color);
            }
            this.cleanUp();
          };
          this.cleanUp = () => {
            document.dispatchEvent(new CustomEvent("viewport-render"));
            (0, n.Ay)("color-picker-history").querySelectorAll(".color-pod").forEach(t => t.removeEventListener("click", this.setHistory));
            this.satSlide.removeEventListener("mousedown", this.satMouseDown, false);
            this.satSlide.removeEventListener("touchstart", this.satTouchStart);
            this.hueSlide.removeEventListener("mousedown", this.hueMouseDown, false);
            this.hueSlide.removeEventListener("touchstart", this.hueTouchStart);
            this.hexInput.removeEventListener("input", this.hexInputChange, false);
            this.hueInput.removeEventListener("input", this.hueInputChange, false);
            this.satInput.removeEventListener("input", this.satInputChange, false);
            this.briInput.removeEventListener("input", this.briInputChange, false);
            this.redInput.removeEventListener("input", this.redInputChange, false);
            this.greenInput.removeEventListener("input", this.greenInputChange, false);
            this.blueInput.removeEventListener("input", this.blueInputChange, false);
            this.modal.removeEventListener("mousedown", this.pickerSetColor, true);
            this.modal.removeEventListener("mousemove", this.pickerPreviewColor, true);
            this.modal.removeEventListener("mouseleave", this.pickerPreviewLeave, true);
            document.removeEventListener("keydown", this.keyDown, false);
            this.stageCanvasCTX = undefined;
            this.stageCanvas = undefined;
            this.stageC = undefined;
            this.dialog.remove();
            this.dialog = null;
            this.modal.remove();
            this.modal = null;
          };
          this.preview = s;
          this.callback = e;
          this.dialog.style.width = "500px";
          this.dialog.style.minWidth = "500px";
          this.content.style.paddingBottom = "10px";
          (0, n.Ay)("dialog-apply" + this.mid).innerText = (0, i.A)("ok");
          this.setContent("\n            <div id=\"color-picker-selector\">\n                <div id=\"color-picker-sat\">\n                    <canvas id=\"color-picker-sat-slide\"></canvas>\n                    <div id=\"color-picker-sat-knob\" class=\"ic\"></div>\n                </div>\n                <div id=\"color-picker-hue\">\n                    <div id=\"color-picker-hue-slide\"></div>\n                    <div id=\"color-picker-hue-knob\" class=\"ic\"></div>\n                </div>\n                <div id=\"color-picker-etc\">\n                    <div id=\"color-picker-new\"></div>\n                    <div id=\"color-picker-current\"></div>\n\n                    <div id=\"color-picker-inputs\">\n                        <div>\n                            <div>H:<input type=\"number\"id=\"picker-input-hue\"></div>\n                            <div>S:<input type=\"number\"id=\"picker-input-sat\"></div>\n                            <div>B:<input type=\"number\"id=\"picker-input-bri\"></div>\n                        </div>\n                        <div>\n                            <div>R:<input type=\"number\"id=\"picker-input-red\"></div>\n                            <div>G:<input type=\"number\"id=\"picker-input-green\"></div>\n                            <div>B:<input type=\"number\"id=\"picker-input-blue\"></div>\n                        </div>\n                    </div>\n                    <div id=\"color-picker-hex\">\n                        HEX:<input type=\"text\" spellcheck=\"false\" maxlength=\"7\" id=\"picker-input-hex\">\n                    </div>\n                 </div>\n            </div>\n        ");
          let a = (0, n.T)("div", {
            id: "color-picker-history",
            className: "color-pod-list"
          });
          (0, n.Ay)("dialog-buttons" + this.mid).prepend(a);
          l.Ay.oldColor.forEach(t => {
            let e = (0, n.T)("div", {
              className: "color-pod small"
            });
            e.style.backgroundColor = t;
            a.append(e);
          });
          (0, n.Ay)("color-picker-history").querySelectorAll(".color-pod").forEach(t => t.addEventListener("click", this.setHistory));
          this.selected = (0, n.Ay)("color-picker-new");
          this.selector = (0, n.Ay)("color-picker-selector");
          this.satSlide = (0, n.Ay)("color-picker-sat-slide");
          this.satKnob = (0, n.Ay)("color-picker-sat-knob");
          this.hueSlide = (0, n.Ay)("color-picker-hue-slide");
          this.hueKnob = (0, n.Ay)("color-picker-hue-knob");
          this.satSlide.addEventListener("mousedown", this.satMouseDown, false);
          this.satSlide.addEventListener("touchstart", this.satTouchStart, {
            passive: false
          });
          this.hueSlide.addEventListener("mousedown", this.hueMouseDown, false);
          this.hueSlide.addEventListener("touchstart", this.hueTouchStart, {
            passive: false
          });
          this.hexInput = (0, n.Ay)("picker-input-hex");
          this.hexInput.addEventListener("input", this.hexInputChange, false);
          this.hueInput = (0, n.Ay)("picker-input-hue");
          this.hueInput.addEventListener("input", this.hueInputChange, false);
          this.satInput = (0, n.Ay)("picker-input-sat");
          this.satInput.addEventListener("input", this.satInputChange, false);
          this.briInput = (0, n.Ay)("picker-input-bri");
          this.briInput.addEventListener("input", this.briInputChange, false);
          this.redInput = (0, n.Ay)("picker-input-red");
          this.redInput.addEventListener("input", this.redInputChange, false);
          this.greenInput = (0, n.Ay)("picker-input-green");
          this.greenInput.addEventListener("input", this.greenInputChange, false);
          this.blueInput = (0, n.Ay)("picker-input-blue");
          this.blueInput.addEventListener("input", this.blueInputChange, false);
          this.modal.style.cursor = "crosshair";
          this.colorPreview = (0, n.T)("div", {
            id: "color-picker-preview",
            style: "display:none"
          });
          this.modal.appendChild(this.colorPreview);
          this.modal.addEventListener("mousedown", this.pickerSetColor, true);
          this.modal.addEventListener("mousemove", this.pickerPreviewColor, true);
          this.modal.addEventListener("mouseleave", this.pickerPreviewLeave, true);
          this.stageC = document.getElementsByClassName("canvas")[0];
          this.stageCanvas = o.oM(this.stageC);
          this.stageCanvasCTX = this.stageCanvas.getContext("2d", {
            willReadFrequently: true
          });
          (0, n.Ay)("color-picker-current").style.backgroundColor = t ? t.toHEX() : "#ffffff";
          this.current = t;
          this.setColor(t);
        }
      }
    }
