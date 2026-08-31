window.__editorModules[8762] = function (t, e, s) {
      s.d(e, {
        A: () => g
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(3244);
      var o = s(5699);
      var r = s(7135);
      var h = s(3517);
      var l = s(5259);
      var c = s(98);
      var d = s(6957);
      var u = s(833);
      var p = s(9310);
      class g extends p.A {
        constructor(t) {
          const e = t.fresco.getSelected();
          const p = new n.A(0, 0, t.fresco.width, t.fresco.height);
          const g = e.settings.locked && e.rect.equalTo(p) ? 0 : 150;
          super(t, (0, i.A)("titleStrokeOutline"), false, false, g);
          this.load = async () => {
            const t = Promise.resolve().then(s.bind(s, 2355));
            const e = o.D9();
            await e;
            const {
              distanceTransform: i
            } = await t;
            const n = this.shaders.ctx;
            const h = this.cache.getContext("2d").getImageData(0, 0, this.cache.width, this.cache.height);
            const l = i(this.cache.width, this.cache.height, h.data);
            if (!n.getSupportedExtensions().includes("OES_texture_float")) {
              alert("sorry, this filter requires float textures");
              (0, r.A)("OES_texture_float");
              return;
            }
            n.getExtension("OES_texture_float");
            const c = n.createTexture();
            n.bindTexture(n.TEXTURE_2D, c);
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST);
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST);
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
            n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
            n.texImage2D(n.TEXTURE_2D, 0, n.ALPHA, this.cache.width, this.cache.height, 0, n.ALPHA, n.FLOAT, l);
            n.bindTexture(n.TEXTURE_2D, null);
            this.map = c;
            (0, a.Ay)("stroke-loading").style.display = "none";
            (0, a.Ay)("stroke-controls").style.visibility = "visible";
            this.enableApply();
            this.update();
          };
          this.update = () => {
            const t = {
              size: this.size.getValue(),
              opacity: this.opacity.getValue(),
              color: this.color.getColor(),
              distanceMap: this.map,
              cutout: this.cutout.checked
            };
            this.shaders.addShader("stroke", t.size ? t : null);
            window.requestAnimationFrame(() => {
              this.scratch.canvas = this.shaders.apply(this.cache);
              this.stage.render();
            });
          };
          this.apply = () => {
            const t = this.stage.fresco.getSelected();
            const e = o.TL(o.oM(this.scratch.canvas)).rebase(-this.scratch.rect.x, -this.scratch.rect.y);
            const s = o.ON(t.canvas, e.rebase(t.rect.x, t.rect.y));
            const i = o.$z(t.mask);
            const a = t.rect.clone();
            t.extendCanvas(e);
            this.scratch.drawToLayer(this.selected, this.isMasked ? "source-over" : "copy", 1);
            t.render();
            this.stage.fresco.removeScratch();
            this.stage.history.add({
              type: "bitmapChange",
              kind: "stroke",
              layer: t,
              rect: a,
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
          this.shaders = new d.A();
          this.kind = "stroke";
          this.stage = t;
          this.stage.coating.freeze(true);
          this.setContent((0, a.T)("div", {
            className: "dialog-loading"
          }, (0, a.T)("div", {
            id: "stroke-controls",
            className: "controls"
          }, (0, a.T)("label", {
            className: "split"
          }, (0, i.A)("color"), (0, a.T)("div", {
            id: "stroke-color"
          })), (0, a.T)("div", {
            id: "stroke-size",
            className: "range-box top-15"
          }), (0, a.T)("div", {
            id: "stroke-opacity",
            className: "range-box top-10"
          }), (0, a.T)("input", {
            id: "stroke-cutout",
            type: "checkbox"
          }), (0, a.T)("label", {
            className: "top-20 switch",
            htmlFor: "stroke-cutout"
          }, (0, i.A)("strokeOutlineOnly"), (0, a.T)("span"))), (0, a.T)("div", {
            id: "stroke-loading",
            className: "message"
          }, (0, a.T)("label", {
            className: "working"
          }, (0, i.A)("loading")))));
          this.cutout = (0, a.Ay)("stroke-cutout");
          this.cutout.onchange = this.update;
          this.color = new u.A("stroke-color", l.A.fromHEX(c.Ay.mainColor), this.update, this.update);
          this.size = new h.A("stroke-size", {
            label: (0, i.A)("size"),
            range: [1, 150],
            defaultValue: 10,
            step: 1,
            labelParse: t => parseInt(t, 10),
            onChange: () => this.update()
          });
          this.opacity = new h.A("stroke-opacity", {
            label: (0, i.A)("opacity"),
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.position();
          this.load();
        }
      }
    }
