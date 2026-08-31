window.__editorModules[2598] = function (t, e, s) {
      s.d(e, {
        A: () => y
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(5527);
      var h = s(6050);
      var l = s(3517);
      var c = s(6957);
      var d = s(1535);
      var u = s(2543);
      var p = s(3848);
      var g = s(5328);
      class m extends p.A {
        constructor(t, e, s) {
          super(t, (0, a.A)("options"), true);
          this.checkBlur = () => {
            this.options.bokehBlur = (0, i.Ay)("bokeh-blur").checked;
            this.options.bokehBlurType = document.querySelector("input[name=\"bokeh-blur-type\"]:checked").value;
            this.callback(this.options, "blur");
          };
          this.checkShape = () => {
            this.options.bokehShape = (0, i.Ay)("bokeh-shape").checked;
            this.options.bokehShapeDual = (0, i.Ay)("bokeh-shape-dual").checked;
            this.options.bokehShapeType = document.querySelector("input[name=\"bokeh-shape-type\"]:checked").value;
            this.callback(this.options, "shape");
          };
          this.cleanUp = () => {
            (0, i.Ay)("bokeh-blur").removeEventListener("change", this.checkBlur, false);
            (0, i.Ay)("bokeh-shape").removeEventListener("change", this.checkShape, false);
            (0, i.Ay)("bokeh-shape-dual").removeEventListener("change", this.checkShape, false);
            document.querySelectorAll("input[name=\"bokeh-blur-type\"]").forEach(t => t.removeEventListener("change", this.checkBlur));
            document.querySelectorAll("input[name=\"bokeh-shape-type\"]").forEach(t => t.removeEventListener("change", this.checkShape));
            this.bokehBlurSize.cleanUp();
            this.bokehBlurIntensity.cleanUp();
            this.bokehShapeHue.cleanUp();
            this.bokehShapeSize.cleanUp();
            this.bokehShapeQuantity.cleanUp();
            this.bokehShapeIntensity.cleanUp();
            this.superCleanUp();
          };
          this.options = e;
          this.callback = s;
          this.content.id = "focus-options-content";
          this.content.style.height = "400px";
          this.content.style.overflow = "hidden";
          this.content.style.paddingBottom = "4px";
          this.setContent(`\n            <section>\n\n            <div>\n                <input type="checkbox" class="toggle-check" id="bokeh-blur" />\n                <label class="switch subline top-16" for="bokeh-blur">${(0, a.A)("bokehBlur")}<span></span><span class="arrow"></span></label>\n        \n                <div class="toggle">\n                    <div class="switch-icon-field stretch">\n                        <input type="radio" id="bokeh-blur-type-circle" name="bokeh-blur-type" value="circle" checked /><label for="bokeh-blur-type-circle" tooltip="${(0, a.A)("circle")}" flow="up"><img src="assets/images/icon/shape-ellipse.svg" width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-blur-type-square" name="bokeh-blur-type" value="square" /><label for="bokeh-blur-type-square" tooltip="${(0, a.A)("square")}" flow="up"><img src="assets/images/icon/shape-rectangle.svg" width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-blur-type-hexagon" name="bokeh-blur-type" value="hexagon" /><label for="bokeh-blur-type-hexagon" tooltip="${(0, a.A)("hexagon")}" flow="up"><img src="assets/images/icon/shape-hexagon.svg"  width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-blur-type-cross" name="bokeh-blur-type" value="cross" /><label for="bokeh-blur-type-cross" tooltip="${(0, a.A)("cross")}" flow="up"><img src="assets/images/icon/shape-cross.svg" width="20" height="20" loading="lazy"/></label>\n                    </div>\n                    <div id="bokeh-blur-size" class="top-16"></div>\n                    <div id="bokeh-blur-intensity"></div>\n                </div>\n            </div>\n        \n            <div class="top-16">\n                <input type="checkbox" class="toggle-check" id="bokeh-shape" />\n                <label class="switch subline top-16" for="bokeh-shape">${(0, a.A)("bokehShape")}<span></span><span class="arrow"></span></label>\n        \n                <div class="toggle">\n                    <div class="switch-icon-field stretch">\n                        <input type="radio" id="bokeh-shape-type-circle" name="bokeh-shape-type" value="circle" checked /><label for="bokeh-shape-type-circle" tooltip="${(0, a.A)("circle")}" flow="up"><img src="assets/images/icon/shape-ellipse.svg" width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-shape-type-hexagon" name="bokeh-shape-type" value="hexagon" /><label for="bokeh-shape-type-hexagon" tooltip="${(0, a.A)("hexagon")}" flow="up"><img src="assets/images/icon/shape-hexagon.svg"  width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-shape-type-square" name="bokeh-shape-type" value="square" /><label for="bokeh-shape-type-square" tooltip="${(0, a.A)("square")}" flow="up"><img src="assets/images/icon/shape-rectangle.svg" width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-shape-type-triangle" name="bokeh-shape-type" value="triangle" /><label for="bokeh-shape-type-triangle" tooltip="${(0, a.A)("triangle")}" flow="up"><img src="assets/images/icon/shape-triangle.svg" width="20" height="20" loading="lazy"/></label>\n                    </div>\n                    <div class="switch-icon-field stretch top-4">\n                        <input type="radio" id="bokeh-shape-type-heart" name="bokeh-shape-type" value="heart" /><label for="bokeh-shape-type-heart" tooltip="${(0, a.A)("heart")}" flow="up"><img src="assets/images/icon/shape-heart.svg" width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-shape-type-cross" name="bokeh-shape-type" value="cross" /><label for="bokeh-shape-type-cross" tooltip="${(0, a.A)("cross")}" flow="up"><img src="assets/images/icon/shape-cross.svg" width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-shape-type-star" name="bokeh-shape-type" value="star" /><label for="bokeh-shape-type-star" tooltip="${(0, a.A)("star")}" flow="up"><img src="assets/images/icon/shape-star.svg"  width="20" height="20" loading="lazy"/></label>\n                        <input type="radio" id="bokeh-shape-type-glimmer" name="bokeh-shape-type" value="glimmer" /><label for="bokeh-shape-type-glimmer" tooltip="${(0, a.A)("glimmer")}" flow="up"><img src="assets/images/icon/shape-glimmer.svg" width="20" height="20" loading="lazy"/></label>\n                    </div>\n                    <div id="bokeh-shape-hue" class="top-16"></div>\n                    <div id="bokeh-shape-size" ></div>\n                    <div id="bokeh-shape-quantity"></div>\n                    <div id="bokeh-shape-intensity"></div>\n                    <input type="checkbox" id="bokeh-shape-dual" />\n                    <label class="top-16 switch" for="bokeh-shape-dual">${(0, a.A)("dualTone")}<span></span></label>\n                </div>\n            </div>\n            </section>\n        `);
          this.bokehBlurSize = new l.A("bokeh-blur-size", {
            label: (0, a.A)("size"),
            range: [0, 1],
            step: 0.01,
            defaultValue: this.options.bokehBlurSize,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.bokehBlurSize = t;
              s(this.options, "blur");
            }
          });
          this.bokehBlurIntensity = new l.A("bokeh-blur-intensity", {
            label: (0, a.A)("intensity"),
            range: [0, 1],
            step: 0.01,
            defaultValue: this.options.bokehBlurIntensity,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.bokehBlurIntensity = t;
              s(this.options, "blur");
            }
          });
          this.bokehShapeHue = new l.A("bokeh-shape-hue", {
            label: (0, a.A)("color"),
            range: [-180, 180],
            step: 1,
            defaultValue: this.options.bokehShapeHue,
            labelFormat: t => String(t),
            labelParse: t => parseInt(t, 10),
            onEnd: t => {
              this.options.bokehShapeHue = t;
              s(this.options, "shape");
            }
          });
          this.bokehShapeSize = new l.A("bokeh-shape-size", {
            label: (0, a.A)("size"),
            range: [0, 1],
            step: 0.01,
            defaultValue: this.options.bokehShapeSize,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.bokehShapeSize = t;
              s(this.options, "shape");
            }
          });
          this.bokehShapeQuantity = new l.A("bokeh-shape-quantity", {
            label: (0, a.A)("quantity"),
            range: [0, 1],
            step: 0.01,
            defaultValue: this.options.bokehShapeQuantity,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.bokehShapeQuantity = t;
              s(this.options, "shape");
            }
          });
          this.bokehShapeIntensity = new l.A("bokeh-shape-intensity", {
            label: (0, a.A)("intensity"),
            range: [0, 1],
            step: 0.01,
            defaultValue: this.options.bokehShapeIntensity,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.bokehShapeIntensity = t;
              s(this.options, "shape");
            }
          });
          (0, i.Ay)("bokeh-blur").addEventListener("change", this.checkBlur, false);
          (0, i.Ay)("bokeh-shape").addEventListener("change", this.checkShape, false);
          (0, i.Ay)("bokeh-shape-dual").addEventListener("change", this.checkShape, false);
          document.querySelectorAll("input[name=\"bokeh-blur-type\"]").forEach(t => t.addEventListener("change", this.checkBlur));
          document.querySelectorAll("input[name=\"bokeh-shape-type\"]").forEach(t => t.addEventListener("change", this.checkShape));
          (0, i.Ay)("bokeh-blur").checked = this.options.bokehBlur;
          (0, i.Ay)("bokeh-blur-type-" + this.options.bokehBlurType).checked = true;
          (0, i.Ay)("bokeh-shape").checked = this.options.bokehShape;
          (0, i.Ay)("bokeh-shape-dual").checked = this.options.bokehShapeDual;
          (0, i.Ay)("bokeh-shape-type-" + this.options.bokehShapeType).checked = true;
          new g.A((0, i.Ay)("focus-options-content"));
        }
      }
      class y extends r.A {
        constructor(t) {
          super("focus", t);
          this.mode = "symmetric";
          this.PI2 = Math.PI * 2;
          this.selectMode = t => {
            this.mode = t.currentTarget.value;
            this.rotation = 0;
            window.requestAnimationFrame(() => {
              this.renderControls();
              this.renderFocus();
            });
          };
          this.layerSelect = async () => {
            if (this.selected !== this.stage.fresco.getSelected() && (this.blurAmount.getValue() !== 0 || this.options.bokehShape || this.options.bokehBlur)) {
              if (await new u.A((0, a.A)("apply"), (0, a.A)("viewFocusApply")).init()) {
                this.apply();
              }
            }
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("focus-no-layer").style.display = "flex";
              (0, i.Ay)("focus-settings").style.display = "none";
              this.selected = undefined;
              this.cached = undefined;
              this.shape = undefined;
              this.blur = undefined;
              window.requestAnimationFrame(() => {
                this.renderControls();
              });
              return;
            }
            (0, i.Ay)("focus-no-layer").style.display = "none";
            (0, i.Ay)("focus-settings").style.display = "flex";
            this.selected = this.stage.fresco.getSelected();
            this.cached = this.selected.baked ? this.selected.baked : this.selected.canvas;
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over", this.cached);
            this.scratch.settings.blendmode = this.selected.settings.blendmode;
            this.scratch.settings.opacity = this.selected.settings.opacity;
            this.center = new h.A(Math.round(this.stage.fresco.width / 2), Math.round(this.stage.fresco.height / 2));
            this.distance = Math.round(this.stage.fresco.height / 2 * 0.75);
            this.falloff = Math.round(this.distance * 0.5);
            this.rotation = 0;
            this.addDownListeners();
            this.addMoveListeners();
            this.renderControls();
            this.renderBlur();
            this.renderShape();
          };
          this.showOptions = () => {
            new m((0, i.Ay)("focus-options"), this.options, this.updateOptions);
          };
          this.updateOptions = (t, e) => {
            this.options = t;
            if (e === "shape") {
              this.renderShape();
            } else {
              this.renderBlur();
            }
          };
          this.down = t => {
            if (!this.selected) {
              return;
            }
            this.downPoint = this.stage.translateRasterToFresco(t);
            let e = this.downPoint.clone();
            if (this.rotation !== 0) {
              this.matrix.reset();
              this.matrix.translate(this.center);
              this.matrix.rotate(this.rotation);
              this.matrix.invert();
              e = this.matrix.transformPoint(e).add(this.center);
            }
            this.checkControl(e);
            if (this.control) {
              switch (this.control) {
                case "center":
                  this.downPosition = this.center.clone();
                  break;
                case "falloff":
                  this.downPosition = new h.A(this.center.y, this.falloff);
                  this.downPoint = e;
                  break;
                case "distance":
                  this.downPosition = new h.A(this.center.y, this.distance);
                  this.downPoint = e;
                  break;
                case "rotation":
                  this.downRotation = Math.atan2(this.downPoint.y - this.center.y, this.downPoint.x - this.center.x) - this.rotation;
              }
              this.raster.addEventListener("pointerup", this.pointerUp, false);
            } else if (n.HO(0, 0, this.stage.fresco.width, this.stage.fresco.height, this.downPoint.x, this.downPoint.y)) {
              this.renderControls();
            } else {
              this.rctx.clearRect(0, 0, this.raster.width, this.raster.height);
            }
          };
          this.move = t => {
            if (!this.selected) {
              return;
            }
            let e = this.stage.translateRasterToFresco(t);
            let s = e.clone();
            if (this.rotation !== 0) {
              this.matrix.reset();
              this.matrix.translate(this.center);
              this.matrix.rotate(this.rotation);
              this.matrix.invert();
              s = this.matrix.transformPoint(s).add(this.center);
            }
            if (this.isDown) {
              if (this.control) {
                switch (this.control) {
                  case "center":
                    this.center.x = this.downPosition.x + (e.x - this.downPoint.x);
                    this.center.y = this.downPosition.y + (e.y - this.downPoint.y);
                    break;
                  case "falloff":
                    this.falloff = n.qE(this.downPosition.y + (s.y - this.downPoint.y), 20, this.distance - 20);
                    break;
                  case "distance":
                    this.distance = n.qE(this.downPosition.y + (s.y - this.downPoint.y), this.falloff + 20, Math.round(this.cached.height));
                    break;
                  case "rotation":
                    this.rotation = Math.atan2(e.y - this.center.y, e.x - this.center.x) - this.downRotation;
                    if (this.rotation < 0) {
                      this.rotation += this.PI2;
                    } else if (this.rotation >= this.PI2) {
                      this.rotation -= this.PI2;
                    }
                }
                window.requestAnimationFrame(() => {
                  this.renderControls();
                  this.renderFocus();
                });
              }
            } else {
              this.checkControl(s);
            }
          };
          this.checkControl = t => {
            let e = 28 / this.stage.zoom;
            let s = e / 2;
            let i = 50 / this.stage.zoom;
            let a = false;
            let o = false;
            if (n.HO(this.center.x - s, this.center.y + this.falloff - s, e, e, t.x, t.y)) {
              o = this.control === "falloff";
              this.control = "falloff";
              a = true;
            }
            if (n.HO(this.center.x - s, this.center.y + this.distance - s, e, e, t.x, t.y)) {
              o = this.control === "distance";
              this.control = "distance";
              a = true;
            }
            if (n.HO(this.center.x - s, this.center.y - s, e, e, t.x, t.y)) {
              o = this.control === "center";
              this.control = "center";
              a = true;
            }
            if (this.mode !== "radial" && n.HO(this.center.x + i - s, this.center.y - i - s, e, e, t.x, t.y)) {
              o = this.control === "rotation";
              this.control = "rotation";
              a = true;
            }
            if (a && !o) {
              window.requestAnimationFrame(this.renderControls);
              this.raster.style.cursor = "pointer";
            } else if (!a && this.control) {
              this.control = undefined;
              window.requestAnimationFrame(this.renderControls);
              this.raster.style.cursor = "unset";
            }
          };
          this.up = t => {
            this.isDown = false;
          };
          this.renderBlurEvent = () => {
            window.requestAnimationFrame(this.renderBlur);
          };
          this.renderBlur = () => {
            if (this.options.bokehBlur) {
              this.shaders.addShader("bokeh", {
                size: this.options.bokehBlurSize,
                amount: this.options.bokehBlurIntensity,
                type: this.options.bokehBlurType
              });
            } else {
              this.shaders.addShader("bokeh", undefined);
            }
            this.shaders.addShader("blur", this.blurAmount.getValue());
            this.blur = this.shaders.apply(this.cached);
            this.renderFocus();
          };
          this.rand = (t, e) => Math.random() * (e - t) + t;
          this.hsla = (t, e, s, i) => "hsla(" + t + "," + e + "%," + s + "%," + i + ")";
          this.renderShape = () => {
            if (!this.options.bokehShape) {
              this.shape = undefined;
              this.renderFocus();
              return;
            }
            this.shape ||= n.Nw(this.cached.width, this.cached.height);
            const t = this.shape.getContext("2d");
            t.clearRect(0, 0, this.shape.width, this.shape.height);
            t.save();
            t.globalCompositeOperation = "lighter";
            const e = this.shape.width;
            const s = this.shape.height;
            const i = e + s;
            const a = this.options.bokehShapeHue + 180;
            const o = i * 0.1 * this.options.bokehShapeSize;
            const r = i * 0.03;
            let h;
            let l = Math.floor(i * 0.1 * this.options.bokehShapeQuantity);
            switch (this.options.bokehShapeType) {
              case "circle":
                h = this.circle;
                break;
              case "square":
                h = this.square;
                break;
              case "hexagon":
                h = this.hexagon;
                break;
              case "cross":
                h = this.cross;
                break;
              case "triangle":
                h = this.triangle;
                break;
              case "heart":
                h = this.heart;
                break;
              case "star":
                h = this.star;
                break;
              case "glimmer":
                h = this.glimmer;
            }
            const c = this.options.bokehShapeDual;
            while (l--) {
              const i = this.rand(0, e);
              const n = this.rand(0, s);
              const d = this.rand(1, o);
              let u = this.rand(a - 30, a + 30);
              if (c && l % 2 == 0) {
                u += 120;
              }
              t.shadowColor = this.hsla(u, this.rand(10, 80), this.rand(30, 60), this.rand(0.2, 0.8));
              t.shadowBlur = this.rand(10, r);
              t.beginPath();
              t.save();
              t.translate(i, n);
              t.rotate(Math.random() * this.PI2);
              h(t, d);
              t.restore();
              t.closePath();
              t.fill();
            }
            l = Math.floor(i * 0.03 * this.options.bokehShapeQuantity);
            t.shadowBlur = 15;
            t.shadowColor = "#fff";
            while (l--) {
              const i = this.rand(0, e);
              const a = this.rand(0, s);
              const n = this.rand(0.5, o * 0.75);
              t.fillStyle = this.hsla(0, 0, 100, this.rand(0.03, 0.1));
              t.beginPath();
              t.save();
              t.translate(i, a);
              t.rotate(Math.random() * this.PI2);
              h(t, n);
              t.restore();
              t.closePath();
              t.fill();
            }
            t.restore();
            this.renderFocus();
          };
          this.circle = (t, e) => {
            t.arc(0, 0, e, 0, Math.PI * 2);
          };
          this.square = (t, e) => {
            t.moveTo(0, e);
            for (let s = 0; s < 4; s++) {
              t.rotate(Math.PI * 2 / 4);
              t.lineTo(0, e);
            }
          };
          this.triangle = (t, e) => {
            t.moveTo(0, 0 - e);
            for (let s = 0; s < 3; s++) {
              t.rotate(Math.PI / 3);
              t.lineTo(0, 0 - e * 0.5);
              t.rotate(Math.PI / 3);
              t.lineTo(0, 0 - e);
            }
          };
          this.hexagon = (t, e) => {
            t.moveTo(0, e);
            for (let s = 0; s < 6; s++) {
              t.rotate(Math.PI * 2 / 6);
              t.lineTo(0, e);
            }
          };
          this.heart = (t, e) => {
            let s = e * 0.8;
            t.translate(0, -e / 2);
            t.rotate(Math.PI * 45 / 180);
            t.beginPath();
            t.moveTo(0, 0);
            t.bezierCurveTo(-s, 0, -s, e, 0, e);
            t.lineTo(e, e);
            t.lineTo(e, 0);
            t.bezierCurveTo(e, -s, 0, -s, 0, 0);
          };
          this.cross = (t, e) => {
            let s = e * 0.35;
            t.moveTo(-s, -s);
            for (let i = 0; i < 4; i++) {
              t.lineTo(-s, -e);
              t.lineTo(s, -e);
              t.lineTo(s, -s);
              t.rotate(Math.PI / 2);
            }
          };
          this.star = (t, e) => {
            t.moveTo(0, 0 - e);
            for (let s = 0; s < 5; s++) {
              t.rotate(Math.PI / 5);
              t.lineTo(0, 0 - e * 0.5);
              t.rotate(Math.PI / 5);
              t.lineTo(0, 0 - e);
            }
          };
          this.glimmer = (t, e) => {
            t.moveTo(0, 0 - e);
            for (let s = 0; s < 4; s++) {
              t.rotate(Math.PI / 4);
              t.lineTo(0, 0 - e * 0.2);
              t.rotate(Math.PI / 4);
              t.lineTo(0, 0 - e);
            }
          };
          this.renderFocus = () => {
            this.scratch.replaceCanvas(this.blur);
            this.scratch.drawCanvas(this.shape, "screen", this.options.bokehShapeIntensity);
            if (this.mode === "none") {
              window.requestAnimationFrame(this.stage.render);
              return;
            }
            let t;
            const e = (0, i.Ay)("focus-invert").checked;
            const s = e ? "#00000000" : "#000000FF";
            const a = e ? "#000000FF" : "#00000000";
            let n = this.center.neg(this.selected.rect.topLeft());
            if (this.mode === "radial") {
              const e = this.falloff / this.distance;
              t = this.scratch.ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, this.distance);
              t.addColorStop(0, s);
              t.addColorStop(e, s);
              t.addColorStop(1, a);
            } else if (this.mode === "symmetric") {
              const e = this.falloff / this.distance * 0.5;
              const i = new h.A(n.x, n.y - this.distance).rotateAround(n, this.rotation);
              const o = new h.A(n.x, n.y + this.distance).rotateAround(n, this.rotation);
              t = this.scratch.ctx.createLinearGradient(i.x, i.y, o.x, o.y);
              t.addColorStop(0, a);
              t.addColorStop(0.5 - e, s);
              t.addColorStop(0.5, s);
              t.addColorStop(0.5 + e, s);
              t.addColorStop(1, a);
            } else {
              const e = this.falloff / this.distance;
              const i = new h.A(n.x, n.y + this.distance).rotateAround(n, this.rotation);
              t = this.scratch.ctx.createLinearGradient(n.x, n.y, i.x, i.y);
              t.addColorStop(0, s);
              t.addColorStop(e, s);
              t.addColorStop(1, a);
            }
            this.scratch.ctx.save();
            this.scratch.ctx.fillStyle = t;
            this.scratch.ctx.globalCompositeOperation = "destination-out";
            this.scratch.ctx.fillRect(0, 0, this.cached.width, this.cached.height);
            this.scratch.ctx.restore();
            window.requestAnimationFrame(this.stage.render);
          };
          this.renderControls = () => {
            this.rctx.clearRect(0, 0, this.raster.width, this.raster.height);
            if (!this.selected || this.mode === "none") {
              return;
            }
            const t = this.stage.translateFrescoToRaster(this.center);
            const e = Math.round(this.falloff * this.stage.zoom);
            const s = Math.round(this.distance * this.stage.zoom);
            const i = this.mode !== "radial";
            this.rctx.save();
            this.rctx.lineWidth = 2;
            this.rctx.shadowBlur = 6;
            this.rctx.shadowColor = "rgba(0,0,0,0.5)";
            this.rctx.strokeStyle = n.z;
            this.rctx.translate(t.x, t.y);
            this.rctx.rotate(this.rotation);
            if (this.mode === "symmetric") {
              this.rctx.beginPath();
              this.rctx.moveTo(-this.raster.width, -s);
              this.rctx.lineTo(this.raster.width, -s);
              this.rctx.closePath();
              this.rctx.stroke();
              this.rctx.beginPath();
              this.rctx.moveTo(-this.raster.width, s);
              this.rctx.lineTo(this.raster.width, s);
              this.rctx.closePath();
              this.rctx.stroke();
              this.rctx.setLineDash([5, 8]);
              this.rctx.beginPath();
              this.rctx.moveTo(-this.raster.width, -e);
              this.rctx.lineTo(this.raster.width, -e);
              this.rctx.closePath();
              this.rctx.stroke();
              this.rctx.beginPath();
              this.rctx.moveTo(-this.raster.width, e);
              this.rctx.lineTo(this.raster.width, +e);
              this.rctx.closePath();
              this.rctx.stroke();
            } else if (this.mode === "linear") {
              this.rctx.beginPath();
              this.rctx.moveTo(-this.raster.width, s);
              this.rctx.lineTo(this.raster.width, s);
              this.rctx.closePath();
              this.rctx.stroke();
              this.rctx.setLineDash([5, 8]);
              this.rctx.beginPath();
              this.rctx.moveTo(-this.raster.width, e);
              this.rctx.lineTo(this.raster.width, e);
              this.rctx.closePath();
              this.rctx.stroke();
            } else {
              this.rctx.beginPath();
              this.rctx.arc(0, 0, s, 0, Math.PI * 2, false);
              this.rctx.closePath();
              this.rctx.stroke();
              this.rctx.setLineDash([5, 5]);
              this.rctx.beginPath();
              this.rctx.arc(0, 0, e, 0, Math.PI * 2, false);
              this.rctx.closePath();
              this.rctx.stroke();
            }
            this.rctx.setLineDash([]);
            this.rctx.fillStyle = n.q5;
            this.rctx.beginPath();
            this.rctx.arc(0, e, this.control === "falloff" ? 12 : 8, 0, Math.PI * 2, false);
            this.rctx.closePath();
            this.rctx.fill();
            this.rctx.fillStyle = this.control === "falloff" ? n.bi : n.fu;
            this.rctx.beginPath();
            this.rctx.arc(0, e, this.control === "falloff" ? 10 : 6, 0, Math.PI * 2, false);
            this.rctx.closePath();
            this.rctx.fill();
            this.rctx.fillStyle = n.q5;
            this.rctx.beginPath();
            this.rctx.arc(0, s, this.control === "distance" ? 12 : 8, 0, Math.PI * 2, false);
            this.rctx.closePath();
            this.rctx.fill();
            this.rctx.fillStyle = this.control === "distance" ? n.bi : n.fu;
            this.rctx.beginPath();
            this.rctx.arc(0, s, this.control === "distance" ? 10 : 6, 0, Math.PI * 2, false);
            this.rctx.closePath();
            this.rctx.fill();
            if (i) {
              this.rctx.fillStyle = n.q5;
              this.rctx.beginPath();
              this.rctx.arc(50, -50, this.control === "rotation" ? 12 : 8, 0, Math.PI * 2, false);
              this.rctx.closePath();
              this.rctx.fill();
              this.rctx.fillStyle = this.control === "rotation" ? n.bi : n.fu;
              this.rctx.beginPath();
              this.rctx.arc(50, -50, this.control === "rotation" ? 10 : 6, 0, Math.PI * 2, false);
              this.rctx.closePath();
              this.rctx.fill();
            }
            this.rctx.fillStyle = n.q5;
            this.rctx.beginPath();
            this.rctx.arc(0, 0, this.control === "center" ? 12 : 10, 0, Math.PI * 2, false);
            this.rctx.closePath();
            this.rctx.fill();
            this.rctx.fillStyle = this.control === "center" ? n.bi : n.KP;
            this.rctx.beginPath();
            this.rctx.arc(0, 0, this.control === "center" ? 10 : 8, 0, Math.PI * 2, false);
            this.rctx.closePath();
            this.rctx.fill();
            this.rctx.restore();
          };
          this.reset = () => {
            this.options = {
              bokehBlur: false,
              bokehBlurType: "circle",
              bokehBlurSize: 0.3,
              bokehBlurIntensity: 0.5,
              bokehShape: false,
              bokehShapeDual: false,
              bokehShapeType: "circle",
              bokehShapeHue: 0,
              bokehShapeSize: 0.4,
              bokehShapeQuantity: 0.4,
              bokehShapeIntensity: 0.6
            };
            this.blurAmount.setValue(0);
            this.selected = undefined;
            this.cached = undefined;
            this.shape = undefined;
            this.blur = undefined;
            window.requestAnimationFrame(() => {
              this.renderControls();
            });
            this.layerSelect();
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, a.A)("reset")
            }));
          };
          this.applyClick = () => {
            this.apply();
          };
          this.apply = () => {
            if (!this.selected || !this.stage.fresco.hasLayer(this.selected)) {
              return;
            }
            if (this.blurAmount.getValue() === 0 && !this.options.bokehShape && !this.options.bokehBlur) {
              return;
            }
            const t = new o.A(0, 0, this.selected.rect.width, this.selected.rect.height);
            const e = n.ON(this.selected.canvas);
            this.scratch.drawToLayer(this.selected);
            this.scratch.clear();
            this.selected.render();
            this.shaders.reset();
            this.options.bokehBlur = false;
            this.options.bokehShape = false;
            this.blurAmount.setValue(0);
            this.stage.history.add({
              type: "bitmapChange",
              kind: "focus",
              layer: this.selected,
              patchRect: t,
              patch: e,
              rect: this.selected.rect.clone()
            });
            this.layerSelect();
            this.rctx.clearRect(0, 0, this.raster.width, this.raster.height);
          };
          this.cleanUp = async () => {
            var t;
            if (this.blurAmount.getValue() !== 0 || this.options.bokehShape || this.options.bokehBlur) {
              this.apply();
            }
            this.removeMoveListeners();
            this.removeDownListeners();
            this.rctx.clearRect(0, 0, this.raster.width, this.raster.height);
            this.stage.fresco.removeScratch();
            if ((t = this.shaders) !== null && t !== undefined) {
              t.cleanUp();
            }
            this.shaders = undefined;
            this.blurAmount.cleanUp();
            (0, i.Ay)("focus-invert").removeEventListener("click", this.renderFocus, true);
            (0, i.Ay)("focus-options").removeEventListener("click", this.showOptions, true);
            (0, i.Ay)("focus-mode-symmetric").removeEventListener("change", this.selectMode, false);
            (0, i.Ay)("focus-mode-linear").removeEventListener("change", this.selectMode, false);
            (0, i.Ay)("focus-mode-radial").removeEventListener("change", this.selectMode, false);
            (0, i.Ay)("focus-mode-none").removeEventListener("change", this.selectMode, false);
            (0, i.Ay)("focus-apply").removeEventListener("click", this.applyClick, false);
            (0, i.Ay)("focus-reset").removeEventListener("click", this.reset, false);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("viewport-render", this.renderControls, false);
            window.requestAnimationFrame(() => this.stage.render());
            this.cached = undefined;
            this.shape = undefined;
            this.blur = undefined;
            this.raster = undefined;
            this.rctx = undefined;
          };
          this.matrix = new d.A();
          this.shaders = new c.A();
          this.raster = t.raster;
          this.rctx = this.raster.getContext("2d");
          (0, i.Ay)("focus-mode-symmetric").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("focus-mode-linear").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("focus-mode-radial").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("focus-mode-none").addEventListener("change", this.selectMode, false);
          (0, i.Ay)("focus-invert").addEventListener("click", this.renderFocus, true);
          (0, i.Ay)("focus-options").addEventListener("click", this.showOptions, true);
          this.blurAmount = new l.A("focus-blur-amount", {
            label: (0, a.A)("blur") + ":",
            range: [0, 1],
            step: 0.01,
            compact: true,
            defaultValue: 0,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => this.renderBlurEvent()
          });
          (0, i.Ay)("focus-apply").addEventListener("click", this.applyClick, false);
          (0, i.Ay)("focus-reset").addEventListener("click", this.reset, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("viewport-render", this.renderControls, false);
          this.mode = document.querySelector("input[name=\"focus-mode\"]:checked").value;
          this.options = {
            bokehBlur: false,
            bokehBlurType: "circle",
            bokehBlurSize: 0.3,
            bokehBlurIntensity: 0.5,
            bokehShape: false,
            bokehShapeDual: false,
            bokehShapeType: "circle",
            bokehShapeHue: 0,
            bokehShapeSize: 0.4,
            bokehShapeQuantity: 0.4,
            bokehShapeIntensity: 0.6
          };
          this.addDownListeners();
          this.addMoveListeners();
          this.layerSelect();
        }
      }
    }
