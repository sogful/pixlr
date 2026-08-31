window.__editorModules[6457] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5166);
      var o = s(9310);
      class r extends o.A {
        constructor(t) {
          super(t, (0, a.A)("titleLevels"));
          this.selectChannelEvent = t => {
            this.selectChannel(t.currentTarget.getAttribute("data-name"));
          };
          this.channel = "";
          this.selectChannel = t => {
            if (this.channel) {
              (0, i.Ay)("channel-" + this.channel).classList.remove("active");
              (0, i.Ay)("levels-graph-" + this.channel).classList.remove("active");
            }
            this.channel = t;
            (0, i.Ay)("channel-" + this.channel).classList.add("active");
            (0, i.Ay)("levels-graph-" + this.channel).classList.add("active");
            switch (this.channel) {
              case "all":
                this.aCM = this.all;
                break;
              case "red":
                this.aCM = this.red;
                break;
              case "green":
                this.aCM = this.green;
                break;
              case "blue":
                this.aCM = this.blue;
            }
            this.setKnobs();
            this.setInputs();
          };
          this.setKnobs = () => {
            this.ikMin.style.left = this.aCM.minin + "px";
            this.ikMax.style.left = this.aCM.maxin + "px";
            this.ikMid.style.left = Math.floor((this.aCM.maxin - this.aCM.minin) * this.aCM.mid) + this.aCM.minin + "px";
            this.okMin.style.left = this.aCM.minout + "px";
            this.okMax.style.left = this.aCM.maxout + "px";
          };
          this.setInputs = () => {
            this.ivMin.value = this.aCM.minin.toString();
            this.ivMid.value = this.aCM.midin.toFixed(1);
            this.ivMax.value = this.aCM.maxin.toString();
            this.ovMin.value = this.aCM.minout.toString();
            this.ovMax.value = this.aCM.maxout.toString();
          };
          this.inputInput = t => {
            let e = t.currentTarget.getAttribute("id");
            let s = Number(t.currentTarget.value);
            if (!isNaN(s)) {
              switch (e) {
                case "input-value-min":
                  this.aCM.minin = Math.min(Math.max(s, 0), this.aCM.maxin - 10);
                  break;
                case "input-value-mid":
                  break;
                case "input-value-max":
                  this.aCM.maxin = Math.min(Math.max(s, this.aCM.minin + 10), 255);
                  break;
                case "output-value-min":
                  this.aCM.minout = Math.min(Math.max(s, 0), this.aCM.maxout - 10);
                  break;
                case "output-value-max":
                  this.aCM.maxout = Math.min(Math.max(s, this.aCM.minout + 10), 255);
              }
              this.setKnobs();
              this.levelChange();
            }
          };
          this.analyzeImage = () => {
            let t;
            let e;
            let s;
            let a = this.cache.width;
            let n = this.cache.height;
            let o = this.cache.getContext("2d").getImageData(0, 0, a, n).data;
            let r = new Uint32Array(256);
            let h = new Uint32Array(256);
            let l = new Uint32Array(256);
            let c = new Uint32Array(256);
            for (let i = 0, d = o.length; i < d; i += 4) {
              if (o[i + 3] > 0) {
                t = o[i];
                e = o[i + 1];
                s = o[i + 2];
                c[t] += 1;
                c[e] += 1;
                c[s] += 1;
                r[t] += 1;
                h[e] += 1;
                l[s] += 1;
              }
            }
            this.drawChannel(c, (0, i.Ay)("levels-graph-all"), "rgba(180, 180, 180, 1)");
            this.drawChannel(r, (0, i.Ay)("levels-graph-red"), "rgba(209, 72, 14, 1)");
            this.drawChannel(h, (0, i.Ay)("levels-graph-green"), "rgba(146, 156, 31, 1)");
            this.drawChannel(l, (0, i.Ay)("levels-graph-blue"), "rgba(58, 110, 154, 1)");
          };
          this.drawChannel = (t, e, s) => {
            var i = new Array(0, 0, 0, 0);
            for (var a = 0; a < t.length; ++a) {
              if (i[0] < t[a]) {
                i[0] = t[a];
              } else if (i[1] < t[a]) {
                i[1] = t[a];
              } else if (i[2] < t[a]) {
                i[2] = t[a];
              } else if (i[3] < t[a]) {
                i[3] = t[a];
              }
            }
            let n = i.sort(function (t, e) {
              return t - e;
            })[0];
            let o = e.getContext("2d");
            o.save();
            o.lineWidth = 2;
            o.strokeStyle = s;
            o.fillStyle = s;
            o.beginPath();
            o.moveTo(0, 128);
            o.lineTo(0, 128);
            for (var r = 0; r < 256; ++r) {
              let e = Math.min(Math.round(t[r] / n * 128), 128);
              o.lineTo(r, 128 - e);
            }
            o.lineTo(256, 128);
            o.closePath();
            o.stroke();
            o.globalAlpha = 0.7;
            o.fill();
            o.restore();
          };
          this.touchStart = t => {
            t.preventDefault();
            t.stopPropagation();
            this.down(t.changedTouches[0].clientX, t.changedTouches[0].clientY, t.currentTarget);
            document.addEventListener("touchmove", this.touchMove, {
              passive: true
            });
            document.addEventListener("touchend", this.touchEnd, {
              passive: true
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
            document.removeEventListener("touchmove", this.touchMove);
            document.removeEventListener("touchend", this.touchEnd);
          };
          this.mouseDown = t => {
            t.stopPropagation();
            this.down(t.clientX, t.clientY, t.currentTarget);
            document.addEventListener("mousemove", this.mouseMove, true);
            document.addEventListener("mouseup", this.mouseUp, true);
          };
          this.mouseMove = t => {
            t.stopPropagation();
            this.move(t.clientX, t.clientY);
          };
          this.mouseUp = t => {
            t.stopPropagation();
            document.removeEventListener("mousemove", this.mouseMove, true);
            document.removeEventListener("mouseup", this.mouseUp, true);
          };
          this.down = (t, e, s) => {
            this.downX = t;
            this.target = s.getAttribute("id");
            switch (this.target) {
              case "input-knob-min":
                this.start = this.aCM.minin;
                break;
              case "input-knob-mid":
                this.start = s.offsetLeft;
                break;
              case "input-knob-max":
                this.start = this.aCM.maxin;
                break;
              case "output-knob-min":
                this.start = this.aCM.minout;
                break;
              case "output-knob-max":
                this.start = this.aCM.maxout;
            }
          };
          this.move = (t, e) => {
            let s = this.start + (t - this.downX);
            switch (this.target) {
              case "input-knob-min":
                this.aCM.minin = Math.min(Math.max(s, 0), this.aCM.maxin - 10);
                break;
              case "input-knob-mid":
                this.aCM.setMid(Math.min(Math.max(s, this.aCM.minin + 5), this.aCM.maxin - 5));
                break;
              case "input-knob-max":
                this.aCM.maxin = Math.min(Math.max(s, this.aCM.minin + 10), 255);
                break;
              case "output-knob-min":
                this.aCM.minout = Math.min(Math.max(s, 0), this.aCM.maxout - 10);
                break;
              case "output-knob-max":
                this.aCM.maxout = Math.min(Math.max(s, this.aCM.minout + 10), 255);
            }
            this.setKnobs();
            this.setInputs();
            this.levelChange();
          };
          this.levelChange = () => {
            this.shaders.addShader("levels", this.all);
            this.shaders.addShader("multilevels", this.red.isFlat() && this.green.isFlat() && this.blue.isFlat() ? null : [this.red, this.green, this.blue]);
            setTimeout(() => {
              this.scratch.canvas = this.shaders.apply(this.cache);
              window.requestAnimationFrame(() => this.stage.render());
            }, 0);
          };
          this.cleanUp = () => {
            (0, i.Ay)("levels-swatches").querySelectorAll("div").forEach(t => {
              t.removeEventListener("click", this.selectChannelEvent, false);
            });
            (0, i.Ay)("levels-overlay").querySelectorAll("input").forEach(t => {
              t.removeEventListener("input", this.inputInput, false);
              t.removeEventListener("blur", this.setInputs, false);
            });
            this.stage.fresco.removeScratch();
            document.removeEventListener("keydown", this.keyDown, false);
            this.stage.coating.freeze(false);
            this.stage.render();
            this.shaders.cleanUp();
            this.dialog.remove();
            this.dialog = null;
            this.modal.remove();
            this.modal = null;
          };
          this.kind = "levels";
          this.dialog.style.width = "380px";
          this.dialog.style.maxWidth = "380px";
          this.content.style.paddingBottom = "4px";
          this.setContent(`\n            <div id="levels-holder">      \n                <div id="levels-swatches" class="swatches">\n                    <div data-name="all" id="channel-all" flow="left" tooltip="${(0, a.A)("main")}"><span class="ic" style="background-color: #ccc"></span></div>\n                    <div data-name="red" id="channel-red" flow="left" tooltip="${(0, a.A)("red")}"><span style="background-color: #d1480e;"></span></div>\n                    <div data-name="green" id="channel-green" flow="left" tooltip="${(0, a.A)("green")}"><span style="background-color:#929C1F;"></span></div>\n                    <div data-name="blue" id="channel-blue" flow="left" tooltip="${(0, a.A)("blue")}"><span style="background-color: #3a6e9a"></span></div>\n                </div>\n                <div id="levels-overlay">\n                    <div id="levels-input">\n                        <canvas class="levels-graph" width="256" height="128" unselectable="on" id="levels-graph-all"></canvas>\n                        <canvas class="levels-graph" width="256" height="128" unselectable="on" id="levels-graph-red"></canvas>\n                        <canvas class="levels-graph" width="256" height="128" unselectable="on" id="levels-graph-green"></canvas>\n                        <canvas class="levels-graph" width="256" height="128" unselectable="on" id="levels-graph-blue"></canvas>\n                        <div class="knob" id="input-knob-min"><div class="bg ic"></div></div>\n                        <div class="knob" id="input-knob-mid"><div class="bg ic"></div></div>\n                        <div class="knob" id="input-knob-max"><div class="bg ic"></div></div>\n                    </div>\n                    <div id="levels-input-values">\n                        <input type="number" id="input-value-min" value="0">\n                        <input type="number" id="input-value-mid" value="1.0">\n                        <input type="number" id="input-value-max" value="255">\n                    </div>\n                    <div id="levels-output" class="top-10">\n                        <div id="slide"></div>\n                        <div class="knob" id="output-knob-min"><div class="bg ic"></div></div>\n                        <div class="knob" id="output-knob-max"><div class="bg ic"></div></div>\n                    </div>\n                    <div id="levels-output-values">\n                        <input type="number" id="output-value-min" value="0">\n                        <input type="number" id="output-value-max" value="255">\n                    </div>\n                </div>\n            </div>\n        `);
          (0, i.Ay)("levels-swatches").querySelectorAll("div").forEach(t => {
            t.addEventListener("click", this.selectChannelEvent, false);
          });
          (0, i.Ay)("levels-overlay").querySelectorAll("input").forEach(t => {
            t.addEventListener("input", this.inputInput, false);
            t.addEventListener("blur", this.setInputs, false);
          });
          this.ivMin = (0, i.Ay)("input-value-min");
          this.ivMid = (0, i.Ay)("input-value-mid");
          this.ivMax = (0, i.Ay)("input-value-max");
          this.ovMin = (0, i.Ay)("output-value-min");
          this.ovMax = (0, i.Ay)("output-value-max");
          this.ikMin = (0, i.Ay)("input-knob-min");
          this.ikMid = (0, i.Ay)("input-knob-mid");
          this.ikMax = (0, i.Ay)("input-knob-max");
          this.okMin = (0, i.Ay)("output-knob-min");
          this.okMax = (0, i.Ay)("output-knob-max");
          this.ikMin.addEventListener("mousedown", this.mouseDown, true);
          this.ikMid.addEventListener("mousedown", this.mouseDown, true);
          this.ikMax.addEventListener("mousedown", this.mouseDown, true);
          this.okMin.addEventListener("mousedown", this.mouseDown, true);
          this.okMax.addEventListener("mousedown", this.mouseDown, true);
          this.ikMin.addEventListener("touchstart", this.touchStart, {
            passive: true
          });
          this.ikMid.addEventListener("touchstart", this.touchStart, {
            passive: true
          });
          this.ikMax.addEventListener("touchstart", this.touchStart, {
            passive: true
          });
          this.okMin.addEventListener("touchstart", this.touchStart, {
            passive: true
          });
          this.okMax.addEventListener("touchstart", this.touchStart, {
            passive: true
          });
          this.all = new n.A();
          this.red = new n.A();
          this.green = new n.A();
          this.blue = new n.A();
          this.analyzeImage();
          this.selectChannel("all");
        }
      }
    }
