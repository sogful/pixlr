window.__editorModules[3632] = function (t, e, s) {
      s.d(e, {
        A: () => v
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5699);
      var o = s(3244);
      var r = s(5259);
      var h = s(5527);
      var l = s(3517);
      var c = s(6050);
      var d = s(2037);
      var u = s(2543);
      var p = s(3328);
      var g = s(3848);
      class m extends g.A {
        constructor(t, e, s) {
          super(t, (0, a.A)("options"));
          this.checkIt = () => {
            this.options.shrink = (0, i.Ay)("disperse-shrink").checked;
            this.options.hollow = (0, i.Ay)("disperse-hollow").checked;
            this.callback(this.options);
          };
          this.cleanUp = () => {
            (0, i.Ay)("disperse-shrink").removeEventListener("click", this.checkIt, false);
            (0, i.Ay)("disperse-hollow").removeEventListener("click", this.checkIt, false);
            this.direction.cleanUp();
            this.stretch.cleanUp();
            this.amount.cleanUp();
            this.spread.cleanUp();
            this.scale.cleanUp();
            this.superCleanUp();
          };
          this.options = e;
          this.callback = s;
          this.setContent(`\n            <section>\n                <div id="disperse-scale"></div>\n                <div id="disperse-amount"></div>\n                <div id="disperse-stretch"></div>\n                <div id="disperse-direction"></div>\n                <div id="disperse-spread"></div>\n                <input type="checkbox" checked id="disperse-shrink" />\n                <label class="top-16 switch" for="disperse-shrink">${(0, a.A)("shrink")}<span></span></label>\n                <input type="checkbox" id="disperse-hollow" />\n                <label class="top-10 switch" for="disperse-hollow">${(0, a.A)("hollow")}<span></span></label>\n            </section>\n        `);
          this.scale = new l.A("disperse-scale", {
            label: (0, a.A)("scale") + ":",
            range: [0.02, 1],
            step: 0.02,
            defaultValue: e.scale,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.scale = t;
              s(this.options);
            }
          });
          this.amount = new l.A("disperse-amount", {
            label: (0, a.A)("amount") + ":",
            range: [0.01, 1],
            step: 0.01,
            defaultValue: e.amount,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.amount = t;
              s(this.options);
            }
          });
          this.stretch = new l.A("disperse-stretch", {
            label: (0, a.A)("stretch") + ":",
            range: [0, 1],
            step: 0.01,
            defaultValue: e.stretch,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.stretch = t;
              s(this.options);
            }
          });
          this.direction = new l.A("disperse-direction", {
            label: (0, a.A)("direction") + ":",
            range: [-180, 180],
            defaultValue: e.direction,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10),
            onEnd: t => {
              this.options.direction = t;
              s(this.options);
            }
          });
          this.spread = new l.A("disperse-spread", {
            label: (0, a.A)("spread") + ":",
            range: [-1, 1],
            step: 0.02,
            defaultValue: e.spread,
            labelFormat: t => `${Math.round(t * 100)}`,
            labelParse: t => parseInt(t, 10) / 100,
            onEnd: t => {
              this.options.spread = t;
              s(this.options);
            }
          });
          (0, i.Ay)("disperse-shrink").addEventListener("click", this.checkIt, false);
          (0, i.Ay)("disperse-hollow").addEventListener("click", this.checkIt, false);
          (0, i.Ay)("disperse-shrink").checked = this.options.shrink;
          (0, i.Ay)("disperse-hollow").checked = this.options.hollow;
        }
      }
      class y {
        constructor(t, e, s, i, a, n, o, r, h) {
          this.sx = t;
          this.sy = e;
          this.tx = s;
          this.ty = i;
          this.background = a;
          this.color = n;
          this.radius = o;
          this.rotation = r;
          this.factor = h;
        }
      }
      class v extends h.A {
        constructor(t) {
          super("disperse", t);
          this.mode = "mask";
          this.layerSelect = async () => {
            if (this.selected !== this.stage.fresco.getSelected() && this.maskRect) {
              if (await new u.A((0, a.A)("apply"), (0, a.A)("viewDisperseApply")).init()) {
                this.apply();
              }
            }
            if (!this.stage.fresco.isSelectedImageWithCanvas()) {
              (0, i.Ay)("disperse-no-layer").style.display = "flex";
              (0, i.Ay)("disperse-settings").style.display = "none";
              this.selected = null;
              this.updateBrush();
              return;
            }
            (0, i.Ay)("disperse-settings").style.display = "flex";
            (0, i.Ay)("disperse-no-layer").style.display = "none";
            this.selected = this.stage.fresco.getSelected();
            this.scratch = this.stage.fresco.addScratch();
            this.scratch.setTarget(this.selected.id, this.selected.rect, "over");
            this.maskRect = undefined;
            window.requestAnimationFrame(() => this.stage.render());
            this.setMode("mask");
          };
          this.updateBrush = () => {
            this.brush.generate();
            if (this.selected && this.mode === "mask") {
              this.stage.coating.setCursorImage(this.brush.getCursorImage(this.stage.zoom));
            } else {
              this.stage.coating.removeCursorImage();
            }
            if (this.scratch) {
              this.scratch.settings.opacity = this.mode === "mask" ? 0.4 : 1;
            }
          };
          this.selectMode = t => {
            this.setMode(t.currentTarget === (0, i.Ay)("disperse-mode-mask") ? "mask" : "effect");
          };
          this.setMode = t => {
            if (t === "effect" && !this.maskRect) {
              t = "mask";
              this.stage.notify("viewDisperseMaskFirst");
            }
            this.mode = t;
            (0, i.Ay)("disperse-mode-mask").checked = this.mode === "mask";
            (0, i.Ay)("disperse-mode-effect").checked = this.mode === "effect";
            (0, i.Ay)("disperse-mask-settings").style.display = this.mode === "mask" ? "flex" : "none";
            (0, i.Ay)("disperse-effect-settings").style.display = this.mode === "effect" ? "flex" : "none";
            this.updateBrush();
            this.disperse();
          };
          this.rand = (t, e) => Math.random() * (e - t) + t;
          this.showOptions = () => {
            new m((0, i.Ay)("disperse-options"), this.options, this.updateOptions);
          };
          this.updateOptions = t => {
            this.options = t;
            this.disperse();
          };
          this.disperse = () => {
            this.scratch.clear();
            if (this.mode !== "effect" || !this.maskRect) {
              return;
            }
            const e = this.maskRect;
            const s = e.center();
            const i = this.scratch.ctx;
            const a = this.selected.canvas.getContext("2d");
            const n = new Array();
            const o = this.options.amount * 10;
            const h = Math.round(this.options.scale * 100);
            const l = Math.round(h * 0.5);
            const d = Math.round(e.width / h) * Math.round(e.height / h) * o;
            const u = this.options.direction * Math.PI / 180;
            const p = this.options.spread;
            const g = Math.sqrt(e.width * e.width + e.height * e.height);
            const m = Math.round(this.options.stretch * g);
            const v = this.options.shrink;
            const f = this.options.hollow;
            let w;
            let x = 0;
            let b = 0;
            while (x < d && b < 50000) {
              let o = new c.A(Math.round(this.rand(e.x, e.x + e.width)), Math.round(this.rand(e.y, e.y + e.height)));
              b++;
              if (this.maskData.data[(o.y * i.canvas.width + o.x) * 4] > 0) {
                x++;
                let e = g * Math.cos(u);
                let i = g * Math.sin(u);
                let c = this.getBound(o.x, o.y, o.x - e, o.y - i);
                let d = this.getBound(o.x, o.y, o.x + e, o.y + i);
                let f = o.distanceTo(c) / d.distanceTo(c) ?? 0;
                let w = 1 - f;
                let b = l + this.rand(-l * 0.2, l * 0.2);
                if (v) {
                  b = b * 0.5 + Math.round(b * 0.5 * w);
                }
                let A = a.getImageData(d.x, d.y, 1, 1).data;
                const k = new r.A(A[0], A[1], A[2]);
                let S = a.getImageData(o.x, o.y, 1, 1).data;
                const E = new r.A(S[0], S[1], S[2]);
                let C = f * f * m;
                let T = Math.cos(u) * C;
                let L = Math.sin(u) * C;
                if (p !== 0) {
                  let t = s.rotateAround(o, u);
                  let e = (o.y - t.y) * p * f;
                  T += Math.sin(u) * e;
                  L += Math.cos(u) * e;
                }
                n.push(new y(o.x, o.y, o.x + T, o.y + L, k, E, b, Math.random() * 6.283185308, w));
                if (v && Math.random() > w) {
                  let t = h * 2 * f;
                  let e = this.rand(-t, t);
                  let s = this.rand(-t, t);
                  n.push(new y(o.x + e, o.y + s, o.x + T + e, o.y + L + s, k, E, b, Math.random() * 6.283185308, w));
                }
              }
            }
            switch (document.querySelector("input[name=\"disperse-type\"]:checked").value) {
              case "circle":
                w = this.circle;
                break;
              case "square":
                w = this.square;
                break;
              case "hexagon":
                w = this.hexagon;
                break;
              case "cross":
                w = this.cross;
                break;
              case "triangle":
                w = this.triangle;
                break;
              case "heart":
                w = this.heart;
                break;
              case "star":
                w = this.star;
                break;
              case "glimmer":
                w = this.glimmer;
            }
            i.imageSmoothingEnabled = true;
            i.imageSmoothingQuality = "high";
            n.forEach(t => {
              i.save();
              i.translate(t.sx, t.sy);
              i.rotate(t.rotation);
              i.beginPath();
              i.shadowBlur = 2;
              i.fillStyle = i.shadowColor = t.background.toRGBA(245);
              w(i, l);
              i.closePath();
              i.fill();
              i.restore();
            });
            n.forEach(t => {
              if (Math.random() < 0.5) {
                i.save();
                i.translate(t.tx, t.ty);
                i.rotate(t.rotation);
                i.beginPath();
                w(i, t.radius);
                i.closePath();
                i.fillStyle = f ? t.background.toRGBA() : t.color.toRGBA();
                i.fill();
                if (f) {
                  i.lineWidth = t.radius * 0.25;
                  i.strokeStyle = t.color.toRGBA();
                  i.stroke();
                }
                i.restore();
              }
            });
            window.requestAnimationFrame(() => this.stage.render());
          };
          this.getBound = (t, e, s, i) => {
            let a = t;
            let n = e;
            let o = s - t;
            let r = i - e;
            let h = o > 0 ? 1 : -1;
            let l = r > 0 ? 1 : -1;
            o = o < 0 ? -o : o;
            r = r < 0 ? -r : r;
            if (o > r) {
              let t = o * 0.5;
              for (let e = 1; e <= o && (a += h, t += r, t >= o && (t -= o, n += l), this.maskData.data[(n * this.scratch.canvas.width + a) * 4] !== 0); e++);
            } else {
              let t = r * 0.5;
              for (let e = 1; e <= r && (n += l, t += o, t >= r && (t -= r, a += h), this.maskData.data[(n * this.scratch.canvas.width + a) * 4] !== 0); e++);
            }
            return new c.A(a, n);
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
          this.down = t => {
            if (this.selected && this.mode === "mask") {
              this.x = this.y = -1;
              this.move(t);
              this.addMoveListeners();
            }
          };
          this.x = -1;
          this.y = -1;
          this.move = t => {
            let e = this.brush.getStep();
            let s = false;
            t = this.stage.translateRasterToFresco(t, this.selected.rect);
            if (this.x == -1) {
              this.lx = t.x;
              this.ly = t.y;
              this.x = t.x;
              this.y = t.y;
              this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
              s = true;
            }
            if (t.x !== this.x || t.y !== this.y) {
              let i = t.x - this.x;
              let a = t.y - this.y;
              let n = i > 0 ? 1 : -1;
              let o = a > 0 ? 1 : -1;
              i = i < 0 ? -i : i;
              a = a < 0 ? -a : a;
              if (i > a) {
                let t = i * 0.5;
                for (let r = 1; r <= i; r++) {
                  this.x += n;
                  t += a;
                  if (t >= i) {
                    t -= i;
                    this.y += o;
                  }
                  if (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) {
                    this.lx = this.x;
                    this.ly = this.y;
                    this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    s = true;
                  }
                }
              } else {
                let t = a * 0.5;
                for (let r = 1; r <= a; r++) {
                  this.y += o;
                  t += i;
                  if (t >= a) {
                    t -= a;
                    this.x += n;
                  }
                  if (this.x > this.lx + e || this.x < this.lx - e || this.y > this.ly + e || this.y < this.ly - e) {
                    this.lx = this.x;
                    this.ly = this.y;
                    this.scratch.ctx.drawImage(this.brush.canvas, this.x - ~~(this.brush.canvas.width / 2), this.y - ~~(this.brush.canvas.height / 2));
                    s = true;
                  }
                }
              }
            }
            if (s) {
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.up = t => {
            this.removeMoveListeners();
            this.maskRect = n.TL(this.scratch.canvas);
            this.maskData = this.maskRect ? this.scratch.ctx.getImageData(0, 0, this.scratch.canvas.width, this.scratch.canvas.height) : undefined;
            if (this.maskData) {
              this.setMode("effect");
            }
          };
          this.reset = () => {
            var t;
            this.maskRect = undefined;
            if ((t = this.scratch) !== null && t !== undefined) {
              t.clear();
            }
            this.layerSelect();
            window.requestAnimationFrame(() => this.stage.render());
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, a.A)("reset")
            }));
          };
          this.applyClick = () => {
            this.apply();
          };
          this.apply = () => {
            var t;
            if (!this.selected || !this.stage.fresco.hasLayer(this.selected)) {
              return;
            }
            if (!this.maskRect) {
              return;
            }
            const e = new o.A(0, 0, this.selected.rect.width, this.selected.rect.height);
            const s = n.ON(this.selected.canvas);
            this.scratch.drawToLayer(this.selected);
            this.scratch.clear();
            this.selected.render();
            this.stage.history.add({
              type: "bitmapChange",
              kind: "disperse",
              layer: this.selected,
              patchRect: e,
              patch: s,
              rect: this.selected.rect.clone()
            });
            this.maskRect = undefined;
            if ((t = this.scratch) !== null && t !== undefined) {
              t.clear();
            }
            this.layerSelect();
          };
          this.cleanUp = () => {
            if (this.maskRect) {
              this.apply();
            }
            this.stage.fresco.removeScratch();
            this.removeDownListeners();
            window.requestAnimationFrame(() => this.stage.render());
            (0, i.Ay)("disperse-apply").removeEventListener("click", this.applyClick, false);
            (0, i.Ay)("disperse-reset").removeEventListener("click", this.reset, false);
            (0, i.Ay)("disperse-options").removeEventListener("click", this.showOptions, true);
            document.removeEventListener("layer-select", this.layerSelect, false);
            document.removeEventListener("zoom-change", this.updateBrush, false);
            (0, i.Ay)("disperse-mode-mask").removeEventListener("change", this.selectMode, true);
            (0, i.Ay)("disperse-mode-effect").removeEventListener("change", this.selectMode, true);
            document.querySelectorAll("input[name=\"disperse-type\"]").forEach(t => t.removeEventListener("change", this.disperse));
            this.brushSize.cleanUp();
            this.selected = null;
            this.scratch = null;
          };
          (0, i.Ay)("disperse-apply").addEventListener("click", this.applyClick, false);
          (0, i.Ay)("disperse-reset").addEventListener("click", this.reset, false);
          document.addEventListener("layer-select", this.layerSelect, false);
          document.addEventListener("zoom-change", this.updateBrush, false);
          (0, i.Ay)("disperse-mode-mask").addEventListener("change", this.selectMode, true);
          (0, i.Ay)("disperse-mode-effect").addEventListener("change", this.selectMode, true);
          (0, i.Ay)("disperse-options").addEventListener("click", this.showOptions, true);
          this.brush = new d.A(new p.A("circle", 50, 0));
          this.brushSize = new l.A("disperse-brush-size", {
            label: (0, a.A)("size") + ":",
            step: 2,
            compact: true,
            range: [5, 200],
            defaultValue: this.brush.settings.size,
            labelFormat: t => t.toFixed(0) + "px",
            onEnd: t => {
              this.brush.settings.size = t;
              this.updateBrush();
            }
          });
          document.querySelectorAll("input[name=\"disperse-type\"]").forEach(t => t.addEventListener("change", this.disperse));
          this.options = {
            scale: 0.2,
            amount: 0.2,
            stretch: 0.5,
            direction: 0,
            spread: 0.2,
            shrink: true,
            hollow: false
          };
          this.addDownListeners();
          this.layerSelect();
        }
      }
    }
