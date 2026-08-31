window.__editorModules[2921] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(6939);
      var o = s(5699);
      var r = s(3244);
      var h = s(7135);
      var l = s(6957);
      var c = s(8158);
      class d extends n.A {
        constructor(t) {
          super((0, a.A)("dialogAiCutoutTitle"));
          this.interupt = false;
          this.run = async () => {
            try {
              let t = this.stage.fresco.getSelected();
              const e = o.ON(t.mask);
              const s = await (0, c.P)(t.canvas);
              if (this.interupt) {
                return;
              }
              const i = o.k8(s, 1080);
              t.addMask();
              const a = new l.A();
              a.addShader("alpha-shift-mask", true);
              t.mask.getContext("2d").drawImage(a.apply(i), 0, 0, t.mask.width, t.mask.height);
              t.render();
              this.stage.render();
              this.stage.history.add({
                type: "mask",
                layer: t,
                rect: new r.A(0, 0, t.mask.width, t.mask.height),
                patch: e
              });
              this.cleanUp();
            } catch (t) {
              console.error(t);
              (0, i.Ay)("ai-icon").src = "assets/images/icon/ai-err.svg";
              (0, i.Ay)("dialog-cancel" + this.mid).innerText = (0, a.A)("close");
              (0, i.Ay)("ai-load").style.display = "none";
              (0, i.Ay)("ai-message").innerText = window.navigator.onLine ? (0, a.A)("genericError") : (0, a.A)("genericOffline");
            }
          };
          this.cancel = () => {
            this.interupt = true;
            this.cleanUp();
          };
          this.stage = t;
          this.dialog.style.width = "300px";
          this.dialog.style.maxWidth = "300px";
          this.setContent("\n            <img src=\"assets/images/icon/ai.svg\" id=\"ai-icon\" class=\"ic\">\n            <div id=\"ai-load\" class=\"ai-load\"><div class=\"dot-floating\"></div></div> \n            <div id=\"ai-message\" class=\"top-20\">Machines are doing their thing, please wait ..</div>\n        ");
          (0, i.Ay)("dialog-apply" + this.mid).style.display = "none";
          (0, h.A)("run-ai-cutout");
          this.run();
        }
      }
    }
