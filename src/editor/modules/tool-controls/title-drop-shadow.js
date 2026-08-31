window.__editorModules[7555] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(3244);
      var o = s(5259);
      var r = s(3517);
      var h = s(749);
      var l = s(833);
      var c = s(6939);
      var d = s(4932);
      class u extends c.A {
        constructor(t) {
          super((0, i.A)("titleDropShadow"), false);
          this.stage = t;
          this.apply = () => {
            const t = this.stage.fresco.getSelected();
            const e = a.TL(this.scratch.canvas).rebase(-this.scratch.rect.x, -this.scratch.rect.y);
            const s = a.ON(t.canvas, e.rebase(t.rect.x, t.rect.y));
            const i = a.$z(t.mask);
            const n = t.rect.clone();
            t.extendCanvas(e);
            this.scratch.drawToLayer(t);
            t.render();
            this.stage.fresco.removeScratch();
            this.stage.history.add({
              type: "bitmapChange",
              kind: "DropShadow",
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
          this.change = () => {
            const t = this.stage.fresco.getSelected();
            const e = this.scratch.ctx;
            if (t.canvas) {
              this.scratch.clear();
              e.save();
              try {
                const t = this.color.getColor();
                e.shadowColor = t.toRGBA(this.opacitySlider.getValue() * 255);
                e.shadowOffsetX = this.offsetXSlider.getValue();
                e.shadowOffsetY = this.offsetYSlider.getValue();
                e.shadowBlur = this.blurSlider.getValue();
                e.drawImage(this.cache, 0, 0);
                window.requestAnimationFrame(() => this.stage.render());
              } finally {
                e.restore();
              }
            }
          };
          this.createCombinationMask = t => {
            if (this.selected.type === h.A.TYPE_FRAME || !this.stage.fresco.hasSelection() && !t) {
              return;
            }
            let e = this.selected;
            if (!this.stage.fresco.hasSelection() && !e.hasMask()) {
              return;
            }
            let s = a.Nw(e.canvas.width, e.canvas.height);
            let i = s.getContext("2d");
            if (this.stage.fresco.hasSelection()) {
              i.drawImage(this.stage.fresco.selection.mask, -e.rect.x, -e.rect.y);
            }
            if (t && e.hasMask()) {
              i.save();
              if (this.stage.fresco.hasSelection()) {
                i.globalCompositeOperation = "destination-in";
              }
              i.drawImage(this.selected.mask, 0, 0);
              i.restore();
            }
            i = undefined;
            return s;
          };
          this.setContent("\n            <label class=\"split\">Color<div id=\"drop-shadow-color\"></div></label>\n            <div id=\"drop-shadow-opacity\" class=\"range-box top-15\"></div>\n            <div id=\"drop-shadow-blur\" class=\"range-box top-10\"></div>\n            <div id=\"drop-shadow-offset-x\" class=\"range-box top-10\"></div>\n            <div id=\"drop-shadow-offset-y\" class=\"range-box top-10\"></div>\n        ");
          this.color = new l.A("drop-shadow-color", o.A.fromHEX("#000000"), this.change, this.change);
          this.opacitySlider = new r.A("drop-shadow-opacity", {
            label: (0, i.A)("opacity"),
            defaultValue: 0.5,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100,
            onChange: () => this.change()
          });
          this.blurSlider = new r.A("drop-shadow-blur", {
            label: (0, i.A)("blur"),
            defaultValue: 5,
            range: [0, 150],
            step: 1,
            labelFormat: t => `${t}px`,
            onChange: () => this.change()
          });
          this.offsetXSlider = new r.A("drop-shadow-offset-x", {
            label: (0, i.A)("offsetX"),
            defaultValue: 20,
            range: [-100, 100],
            step: 1,
            labelFormat: t => `${t}px`,
            onChange: () => this.change()
          });
          this.offsetYSlider = new r.A("drop-shadow-offset-y", {
            label: (0, i.A)("offsetY"),
            defaultValue: 20,
            range: [-100, 100],
            step: 1,
            labelFormat: t => `${t}px`,
            onChange: () => this.change()
          });
          this.selected = t.fresco.getSelected();
          const e = new n.A(0, 0, t.fresco.width, t.fresco.height);
          const s = this.selected.settings.locked && this.selected.rect.equalTo(e) ? 0 : 150;
          let c = this.createCombinationMask(false);
          let u = false;
          if (c) {
            this.cache = a.oM(this.selected.canvas);
            var p = this.cache.getContext("2d");
            p.save();
            p.globalCompositeOperation = "destination-in";
            p.drawImage(c, 0, 0);
            p.restore();
            p = null;
            u = true;
          } else {
            this.cache = this.selected.canvas;
          }
          const g = (this.selected.trim && this.selected instanceof d.A ? this.selected.getGlobalTrim() : this.selected.rect).pad(s);
          if (s > 0) {
            const t = a.Nw(g.width, g.height);
            t.getContext("2d").drawImage(this.cache, s, s);
            this.cache = t;
          }
          this.scratch = this.stage.fresco.addScratch();
          this.scratch.setTarget(this.selected.id, g, u ? "over" : "replace");
          this.scratch.settings.blendmode = this.selected.settings.blendmode;
          this.scratch.settings.opacity = this.selected.settings.opacity;
          this.position();
          this.change();
        }
      }
    }
