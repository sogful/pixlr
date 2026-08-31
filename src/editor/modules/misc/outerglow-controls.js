window.__editorModules[1618] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(5283);
      var o = s(7135);
      var r = s(9310);
      var h = s(3517);
      var l = s(5259);
      var c = s(833);
      var d = s(3244);
      class u extends r.A {
        constructor(t) {
          const e = t.fresco.getSelected();
          const r = new d.A(0, 0, t.fresco.width, t.fresco.height);
          const u = e.settings.locked && e.rect.equalTo(r) ? 0 : 150;
          super(t, (0, i.A)("titleOuterGlow"), false, false, u);
          this.load = async () => {
            const t = Promise.resolve().then(s.bind(s, 2355));
            const e = a.D9();
            await e;
            const {
              distanceTransform: i
            } = await t;
            const r = this.shaders.ctx;
            const h = this.cache.getContext("2d").getImageData(0, 0, this.cache.width, this.cache.height);
            const l = i(this.cache.width, this.cache.height, h.data);
            if (!r.getSupportedExtensions().includes("OES_texture_float")) {
              alert("sorry, this filter requires float textures");
              (0, o.A)("OES_texture_float");
              return;
            }
            r.getExtension("OES_texture_float");
            const c = r.createTexture();
            r.bindTexture(r.TEXTURE_2D, c);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.NEAREST);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.NEAREST);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE);
            r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE);
            r.texImage2D(r.TEXTURE_2D, 0, r.ALPHA, this.cache.width, this.cache.height, 0, r.ALPHA, r.FLOAT, l);
            r.bindTexture(r.TEXTURE_2D, null);
            this.map = c;
            (0, n.Ay)("outerglow-loading").style.display = "none";
            (0, n.Ay)("outerglow-controls").style.visibility = "visible";
            this.enableApply();
            this.update();
          };
          this.update = () => {
            const t = {
              size: this.size.getValue(),
              feather: this.feather.getValue(),
              opacity: this.opacity.getValue(),
              color: this.color.getColor(),
              distanceMap: this.map
            };
            this.shaders.addShader("outer-glow", t.size ? t : null);
            window.requestAnimationFrame(() => {
              this.scratch.canvas = this.shaders.apply(this.cache);
              this.stage.render();
            });
          };
          this.apply = () => {
            const t = this.stage.fresco.getSelected();
            const e = a.TL(a.oM(this.scratch.canvas)).rebase(-this.scratch.rect.x, -this.scratch.rect.y);
            const s = a.ON(t.canvas, e.rebase(t.rect.x, t.rect.y));
            const i = a.$z(t.mask);
            const n = t.rect.clone();
            t.extendCanvas(e);
            this.scratch.drawToLayer(t);
            t.render();
            this.stage.fresco.removeScratch();
            this.stage.history.add({
              type: "bitmapChange",
              kind: "outerGlow",
              layer: t,
              rect: n,
              patchRect: e.rebase(t.rect.x, t.rect.y),
              patch: s,
              mask: i
            });
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            this.cleanUp();
          };
          this.cancel = () => {
            this.stage.fresco.removeScratch();
            document.dispatchEvent(new CustomEvent("viewport-render"));
            document.dispatchEvent(new CustomEvent("layer-select"));
            this.cleanUp();
          };
          this.disableApply();
          this.setContent((0, n.T)("div", {
            className: "dialog-loading"
          }, (0, n.T)("div", {
            id: "outerglow-controls",
            className: "controls"
          }, (0, n.T)("label", {
            className: "split"
          }, (0, i.A)("color"), (0, n.T)("div", {
            id: "glow-color"
          })), (0, n.T)("div", {
            id: "glow-size",
            className: "range-box top-15"
          }), (0, n.T)("div", {
            id: "glow-feather",
            className: "range-box top-10"
          }), (0, n.T)("div", {
            id: "glow-opacity",
            className: "range-box top-10"
          })), (0, n.T)("div", {
            id: "outerglow-loading",
            className: "message"
          }, (0, n.T)("label", {
            className: "working"
          }, (0, i.A)("loading")))));
          this.color = new c.A("glow-color", l.A.fromHEX("#ffffff"), this.update, this.update);
          this.opacity = new h.A("glow-opacity", {
            label: (0, i.A)("opacity"),
            range: [0, 1],
            defaultValue: 1,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.size = new h.A("glow-size", {
            label: (0, i.A)("size"),
            range: [0, 150],
            defaultValue: 15,
            step: 1,
            labelFormat: t => `${t}px`,
            onChange: () => this.update()
          });
          this.feather = new h.A("glow-feather", {
            label: (0, i.A)("feather"),
            range: [0, 1],
            defaultValue: 0.5,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.position();
          this.load();
        }
      }
    }
