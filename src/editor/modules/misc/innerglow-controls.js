window.__editorModules[4397] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(5699);
      var o = s(7135);
      var r = s(3517);
      var h = s(5259);
      var l = s(6957);
      var c = s(833);
      var d = s(9310);
      class u extends d.A {
        constructor(t) {
          super(t, (0, i.A)("titleInnerGlow"));
          this.load = async () => {
            const t = Promise.resolve().then(s.bind(s, 2355));
            const e = n.D9();
            await e;
            const {
              distanceTransformInv: i
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
            (0, a.Ay)("innerglow-loading").style.display = "none";
            (0, a.Ay)("innerglow-controls").style.visibility = "visible";
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
            this.change("inner-glow", t.size ? t : null);
          };
          this.disableApply();
          this.kind = "innerGlow";
          this.shaders = new l.A();
          this.setContent((0, a.T)("div", {
            className: "dialog-loading"
          }, (0, a.T)("div", {
            id: "innerglow-controls",
            className: "controls"
          }, (0, a.T)("label", {
            className: "split"
          }, (0, i.A)("color"), (0, a.T)("div", {
            id: "glow-color",
            className: "colod-pod"
          })), (0, a.T)("div", {
            id: "glow-size",
            className: "range-box top-15"
          }), (0, a.T)("div", {
            id: "glow-feather",
            className: "range-box top-10"
          }), (0, a.T)("div", {
            id: "glow-opacity",
            className: "range-box top-10"
          })), (0, a.T)("div", {
            id: "innerglow-loading",
            className: "message"
          }, (0, a.T)("label", {
            className: "working"
          }, (0, i.A)("loading")))));
          this.color = new c.A("glow-color", h.A.fromHEX("#ffffff"), this.update, this.update);
          this.opacity = new r.A("glow-opacity", {
            label: (0, i.A)("opacity"),
            range: [0, 1],
            defaultValue: 1,
            step: 0.01,
            labelFormat: t => `${Math.round(t * 100)}%`,
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.update()
          });
          this.size = new r.A("glow-size", {
            label: (0, i.A)("size"),
            range: [0, 150],
            defaultValue: 10,
            step: 1,
            labelFormat: t => `${t}px`,
            onChange: () => this.update()
          });
          this.feather = new r.A("glow-feather", {
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
