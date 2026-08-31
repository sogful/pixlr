window.__editorModules[3517] = function (t, e, s) {
      s.d(e, {
        A: () => r
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(5283);
      const o = {
        step: [0.01],
        range: [0, 1],
        stops: [0, 1],
        compact: false,
        force: false,
        defaultValue: 0,
        labelFormat: t => String(t),
        labelParse: t => parseInt(t, 10)
      };
      class r {
        constructor(t, e = {}) {
          this.findElements = () => {
            this.outlet = this.container.querySelector("input");
            this.slider = this.container.querySelector(".slider");
            this.diff = this.container.querySelector(".slider .diff");
            this.label = this.container.querySelector(".info label");
            this.hold = this.container.querySelector(".slider-holder");
            this.bound = this.container.querySelector(".slider-holder .bound");
            this.knob = this.container.querySelector(".slider-holder .bound .knob");
          };
          this.buildElements = () => {
            this.container.classList.add("range-box");
            this.label = document.createElement("label");
            this.label.innerText = (this.options.label || this.name) + " ";
            this.outlet = document.createElement("input");
            this.outlet.type = "text";
            this.outlet.autocomplete = "off";
            this.outlet.value = this.options.labelFormat(this.options.defaultValue);
            const t = document.createElement("div");
            t.className = "info";
            t.appendChild(this.label);
            t.appendChild(this.outlet);
            this.knob = document.createElement("div");
            this.knob.innerHTML = "<div></div>";
            this.knob.className = "knob";
            this.bound = (0, n.T)("div", {
              className: "bound"
            }, this.knob);
            this.diff = (0, n.T)("div", {
              className: "diff"
            });
            this.slider = (0, n.T)("div", {
              className: "slider"
            }, this.diff);
            this.hold = (0, n.T)("div", {
              className: "slider-holder"
            }, this.slider, this.bound);
            this.container.appendChild(t);
            this.container.appendChild(this.hold);
          };
          this.labelOver = () => {
            if (this.value !== this.options.defaultValue) {
              this.label.innerText = (0, i.A)("reset") + " ";
            }
          };
          this.labelOut = () => {
            this.label.innerText = (this.options.label || this.name) + " ";
          };
          this.labelClick = () => {
            if (this.value === this.options.defaultValue) {
              return;
            }
            const t = this.value;
            if (this.options.onStart) {
              this.options.onStart(this.value, this.name);
            }
            this.reset();
            if (this.options.onChange) {
              this.options.onChange(this.value, this.name);
            }
            if (this.options.onEnd) {
              this.options.onEnd(this.value, t, this.name);
            }
          };
          this.sliderMouseDown = t => {
            t.preventDefault();
            t.stopPropagation();
            this.knobDown(t);
            this.move(t.clientX);
          };
          this.knobDown = t => {
            document.addEventListener("mousemove", this.knobMouseMove, false);
            document.addEventListener("touchmove", this.knobTouchMove, {
              passive: false
            });
            document.addEventListener("mouseup", this.knobUp, true);
            document.addEventListener("touchend", this.knobUp, {
              passive: false
            });
            this.knob.classList.add("grabbed");
            t.preventDefault();
            t.stopPropagation();
            this.downValue = this.value;
            if (this.options.onStart) {
              setTimeout(() => this.options.onStart(this.downValue, this.name), 0);
            }
          };
          this.move = t => {
            const e = this.bound.getBoundingClientRect();
            if (t <= e.left) {
              this.setAmount(0);
              return;
            }
            if (t >= e.right) {
              this.setAmount(1);
              return;
            }
            const s = (t - e.left) / e.width;
            this.setAmount(s);
          };
          this.knobMouseMove = t => {
            t.preventDefault();
            t.stopPropagation();
            this.move(t.clientX);
          };
          this.knobTouchMove = t => {
            t.preventDefault();
            t.stopPropagation();
            this.move(t.touches[0].clientX);
          };
          this.knobUp = () => {
            document.removeEventListener("mousemove", this.knobMouseMove, false);
            document.removeEventListener("touchmove", this.knobTouchMove);
            document.removeEventListener("mouseup", this.knobUp, true);
            document.removeEventListener("touchend", this.knobUp);
            this.knob.classList.remove("grabbed");
            if (this.options.onEnd && (this.options.force || this.downValue !== this.value)) {
              const t = this.downValue;
              this.downValue = this.value;
              setTimeout(() => this.options.onEnd(this.value, t, this.name), 0);
            }
          };
          this.outletKeyUp = t => {
            const e = this.options.labelParse(this.outlet.value);
            if (isNaN(e)) {
              return;
            }
            const s = this.options.range[0];
            const i = this.options.range[this.options.range.length - 1];
            const a = Math.max(Math.min(e, i), s);
            this.value = a;
            this.hold.classList.toggle("changed", this.isChanged());
            this.diff.style.backgroundImage = this.generateDiff(this.options.defaultValue, this.value);
            const n = this.calculateAmount(this.value);
            this.setKnob(n * 100);
            if (this.options.onChange && t !== undefined) {
              setTimeout(() => this.options.onChange(this.value, this.name), 0);
            }
          };
          this.outletFocus = t => {
            if (this.options.onStart) {
              this.downValue = this.value;
              this.options.onStart(this.value, this.name);
            }
            if (this.options.compact) {
              this.hold.style.display = "flex";
              const t = a.oR(this.container);
              this.hold.style.left = t.x + this.container.offsetWidth - this.hold.offsetWidth + 10 + "px";
              this.hold.style.top = t.y + 34 + "px";
            }
          };
          this.outletBlur = t => {
            if (this.options.compact) {
              this.hold.style.display = "none";
            }
            const e = this.options.labelParse(this.outlet.value);
            if (!isNaN(e)) {
              this.outlet.value = this.options.labelFormat(this.value);
              if (this.options.onEnd && (this.options.force || this.downValue !== this.value) && t !== undefined) {
                this.options.onEnd(this.value, this.downValue, this.name);
              }
            }
          };
          this.calculateAmount = t => {
            for (let e = 1; e < this.options.range.length; e++) {
              const s = this.options.range[e - 1];
              const i = this.options.range[e];
              if (t >= s && t <= i) {
                const a = this.options.stops[e - 1];
                return a + (t - s) / (i - s) * (this.options.stops[e] - a);
              }
            }
            if (t == this.options.defaultValue) {
              throw new Error("Cant recurse on default value with calculateAmount, this is a bug");
            }
            return this.calculateAmount(this.options.defaultValue);
          };
          this.setKnob = t => {
            const e = this.calculateAmount(this.options.defaultValue) * 100;
            const s = this.generateDiff(e, t);
            requestAnimationFrame(() => {
              this.knob.style.marginLeft = `${t}%`;
              this.diff.style.backgroundImage = s;
            });
          };
          this.roundToStep = (t, e, s, i) => {
            const a = t % e;
            if (a === 0 || t === s || t === i) {
              return t;
            } else {
              return t - a;
            }
          };
          this.generateDiff = (t, e) => {
            if (t === e) {
              return "none";
            }
            const s = "var(--accent-color)";
            this.knob.clientWidth;
            if (e > t) {
              return `linear-gradient(to right, transparent 0%, transparent ${t}%, ${s} ${t}%, ${s} calc(${e}%), transparent calc(${e}%), transparent 100%)`;
            } else {
              return `linear-gradient(to right, transparent 0%, transparent calc(${e}% ), ${s} calc(${e}%), ${s} ${t}%, transparent ${t}%, transparent 100%)`;
            }
          };
          this.setAmount = (t, e = false) => {
            const [s, i] = this.bucket(t);
            const a = this.options.range[s];
            const n = this.options.range[s + 1];
            const o = this.options.step[s];
            this.setKnob(t * 100);
            this.value = this.roundToStep(i * (n - a) + a, o, a, n);
            this.hold.classList.toggle("changed", this.value !== this.options.defaultValue);
            this.outlet.value = this.options.labelFormat(this.value);
            if (this.options.onChange && !e) {
              setTimeout(() => this.options.onChange(this.value, this.name), 0);
            }
          };
          this.bucket = t => {
            for (let e = 1; e < this.options.stops.length; e++) {
              const s = this.options.stops[e - 1];
              const i = this.options.stops[e];
              if (t >= s && t <= i) {
                return [e - 1, (t - s) / (i - s)];
              }
            }
            throw new Error(`Could not assign ${t} to a bucket, this is a bug`);
          };
          this.setValue = (t, e = false) => {
            const s = this.value;
            if (t === undefined) {
              t = this.options.defaultValue;
            }
            const i = this.options.range[0];
            const a = this.options.range[this.options.range.length - 1];
            this.value = Math.max(Math.min(t, a), i);
            this.hold.classList.toggle("changed", this.isChanged());
            this.outlet.value = this.options.labelFormat(this.value);
            const n = this.calculateAmount(this.value);
            this.setKnob(n * 100);
            if ((this.options.onChange || this.options.onEnd) && e) {
              setTimeout(() => {
                if (this.options.onChange) {
                  this.options.onChange(this.value, this.name);
                }
                if (this.options.onEnd) {
                  this.options.onEnd(this.value, s, this.name);
                }
              }, 0);
            }
          };
          this.isChanged = () => this.value !== this.options.defaultValue;
          this.getValue = () => {
            return this.value ?? 0;
          };
          this.reset = () => {
            this.value = this.options.defaultValue;
            this.setKnob(this.calculateAmount(this.value) * 100);
            this.hold.classList.remove("changed");
            this.outlet.value = this.options.labelFormat(this.value);
            this.label.innerText = (this.options.label || this.name) + " ";
          };
          this.cleanUp = () => {
            document.removeEventListener("mousemove", this.knobMouseMove, false);
            document.removeEventListener("touchmove", this.knobTouchMove);
            document.removeEventListener("mouseup", this.knobUp, true);
            document.removeEventListener("touchend", this.knobUp);
            this.knob.removeEventListener("mousedown", this.knobDown, false);
            this.knob.removeEventListener("touchstart", this.knobDown);
            this.hold.removeEventListener("mousedown", this.sliderMouseDown, false);
            this.outlet.removeEventListener("focus", this.outletFocus, false);
            this.outlet.removeEventListener("keyup", this.outletKeyUp, false);
            this.outlet.removeEventListener("blur", this.outletBlur, false);
            if (!this.options.compact) {
              this.label.removeEventListener("mouseover", this.labelOver, false);
              this.label.removeEventListener("mouseleave", this.labelOut, false);
              this.label.removeEventListener("click", this.labelClick, false);
            }
          };
          this.hide = () => {
            this.container.style.display = "none";
          };
          this.show = () => {
            this.container.style.display = "block";
          };
          this.disable = () => {
            this.container.classList.add("disabled");
          };
          this.enable = () => {
            this.container.classList.remove("disabled");
          };
          this.name = t;
          this.container = (0, n.Ay)(t);
          this.options = Object.assign(Object.assign({}, o), e);
          this.value = this.options.defaultValue;
          if (!Array.isArray(this.options.step)) {
            this.options = Object.assign(Object.assign({}, this.options), {
              step: [this.options.step]
            });
          }
          if (this.options.stops.length < 2) {
            throw new Error("Slider need to have atleast two stops, default is [0,1]");
          }
          if (this.options.range.length != this.options.stops.length) {
            throw new Error("Slider range option and slide stops option, needs to be the same length");
          }
          if (this.options.step.length != this.options.stops.length - 1) {
            throw new Error("Step array must be the same length as the number of ranges (slider options range - 1)");
          }
          if (this.options.compact) {
            this.container.classList.add("compact");
          }
          if (this.container.querySelector(".slider")) {
            this.findElements();
          } else {
            this.buildElements();
          }
          this.knob.addEventListener("mousedown", this.knobDown, false);
          this.knob.addEventListener("touchstart", this.knobDown, {
            passive: false
          });
          this.hold.addEventListener("mousedown", this.sliderMouseDown, false);
          this.outlet.addEventListener("focus", this.outletFocus, false);
          this.outlet.addEventListener("keyup", this.outletKeyUp, false);
          this.outlet.addEventListener("blur", this.outletBlur, false);
          if (!this.options.compact) {
            this.label.addEventListener("mouseover", this.labelOver, false);
            this.label.addEventListener("mouseleave", this.labelOut, false);
            this.label.addEventListener("click", this.labelClick, false);
          }
          if (this.outlet.value !== this.options.labelFormat(this.options.defaultValue)) {
            this.outletKeyUp(undefined);
            this.outletBlur(undefined);
          } else {
            this.reset();
          }
        }
      }
    }
