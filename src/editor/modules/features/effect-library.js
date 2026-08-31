window.__editorModules[3703] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(7775);
      var a = s(5283);
      var n = s(5699);
      var o = s(3244);
      var r = s(6957);
      var h = s(7872);
      var l = s(5328);
      var c = s(8749);
      var d = s(9310);
      class u extends d.A {
        constructor(t) {
          super(t, (0, i.A)("titleEffectLibrary"), true);
          this.setUp = () => {
            let t = o.A.fillFit(this.selected.canvas.width, this.selected.canvas.height, 220, 220);
            this.thumbnail = n.H5(this.selected.canvas, t.width, t.height);
            this.marked = undefined;
            this.renderGroups();
            new l.A((0, a.Ay)("effect-content"));
          };
          this.renderGroups = () => {
            (0, a.Ay)("effect-back").style.display = "none";
            let t = (0, a.Ay)("effect-presets");
            t.innerHTML = "";
            c.A.groups().forEach(e => {
              const s = (0, a.T)("div", {
                className: "effect-group",
                id: e,
                onclick: () => this.renderEffects(e)
              });
              const i = document.createElement("img");
              i.src = "assets/images/preset/" + e + ".jpg";
              s.appendChild(i);
              let n = document.createElement("span");
              n.innerText = e.replace("-", " & ");
              s.appendChild(n);
              t.appendChild(s);
            });
          };
          this.renderEffects = t => {
            (0, a.Ay)("effect-back").style.display = "flex";
            (0, a.Ay)("effect-settings").style.display = "none";
            let e = (0, a.Ay)("effect-presets");
            e.innerHTML = "";
            const s = -(this.thumbnail.width - 220) / 2;
            const i = -(this.thumbnail.height - 120) / 2;
            const n = new r.A([]);
            c.A.names(t).forEach(t => {
              const a = document.createElement("div");
              a.classList.add("effect-preset");
              a.id = t;
              a.addEventListener("click", this.select, false);
              const o = document.createElement("canvas");
              o.width = 220;
              o.height = 120;
              a.appendChild(o);
              const r = o.getContext("2d");
              r.drawImage(this.thumbnail, s, i, this.thumbnail.width, this.thumbnail.height);
              let h = document.createElement("span");
              h.innerText = t;
              a.appendChild(h);
              e.appendChild(a);
              setTimeout(() => {
                n.reset();
                n.addPreset(t);
                r.drawImage(n.apply(this.thumbnail), s, i, this.thumbnail.width, this.thumbnail.height);
                if (this.marked && this.marked.name == t) {
                  setTimeout(() => {
                    a.classList.add("selected");
                    this.positionSettings(a);
                  }, 200);
                }
              }, 10);
            });
          };
          this.amount = t => {
            n.sg("effect-amount", 50, () => {
              this.shaders.reset();
              const t = parseInt((0, a.Ay)("effect-amount").value, 10) / 100;
              this.shaders.addPreset(this.marked.name, t);
              this.scratch.canvas = this.shaders.apply(this.cache);
              window.requestAnimationFrame(() => this.stage.render());
            });
          };
          this.back = () => {
            (0, a.Ay)("effect-settings").style.display = "none";
            this.renderGroups();
          };
          this.select = t => {
            let e = t.currentTarget;
            let s = (0, a.Ay)("effect-presets").getElementsByTagName("div");
            for (var i = 0; i < s.length; i++) {
              s[i].classList.remove("selected");
            }
            e.classList.add("selected");
            this.effect(e.id);
            (0, a.Ay)("effect-settings").style.display = "none";
            setTimeout(() => {
              this.positionSettings(e);
            }, 200);
          };
          this.positionSettings = t => {
            (0, a.Ay)("effect-amount").value = (0, a.Ay)("effect_amount_out").innerHTML = (this.marked.value * 100).toString();
            let e = (0, a.Ay)("effect-settings");
            e.style.display = "block";
            e.style.top = t.offsetTop + "px";
            e.style.left = t.offsetLeft + "px";
          };
          this.effect = t => {
            if (this.selected) {
              this.kind = "effect - " + t;
              this.shaders.reset();
              this.marked = new h.A(t, 1);
              this.shaders.addPreset(t, 1);
              this.scratch.canvas = this.shaders.apply(this.cache);
              window.requestAnimationFrame(() => this.stage.render());
            }
          };
          this.reset = () => {
            if (!this.selected) {
              return;
            }
            let t = (0, a.Ay)("effect-presets").getElementsByTagName("div");
            for (var e = 0; e < t.length; e++) {
              t[e].classList.remove("selected");
            }
            this.marked = null;
            (0, a.Ay)("effect-settings").style.display = "none";
            this.scratch.setTarget(this.selected.id, this.selected.rect, "replace", this.cache);
            this.stage.render();
          };
          this.dialog.style.width = "500px";
          this.dialog.style.height = "400px";
          this.dialog.style.maxWidth = "500px";
          this.content.style.padding = "0px 0px 0px 20px";
          this.content.id = "effect-content";
          this.compare.remove();
          this.setContent("\n            <div id=\"effect-settings\">\n                <img class=\"close\" id=\"effect-remove\" src=\"assets/images/icon/close.svg\" title=\"Remove effect\">\n                <div class=\"range-white\" id=\"effect-settings-amount\">\n                    <input type=\"range\" value=\"100\" min=\"0\" max=\"100\" step=\"1\" id=\"effect-amount\" name=\"effect_amount\" oninput=\"effect_amount_out.value=this.value\" />\n                    <output name=\"effect_amount_out\" id=\"effect_amount_out\" for=\"effect_amount\">100</output>\n                </div>\n            </div>\n        \n            <section id=\"effect-presets\" class=\"top-20\">\n            </section>\n        ");
          (0, a.Ay)("dialog-buttons" + this.mid).insertBefore((0, a.T)("a", {
            className: "button negative",
            id: "effect-back",
            style: "margin-right:auto"
          }, (0, a.T)("img", {
            src: "assets/images/icon/back-small.svg",
            width: 14,
            height: 14
          }), (0, i.A)("back")), (0, a.Ay)("dialog-cancel" + this.mid));
          (0, a.Ay)("effect-back").addEventListener("click", this.back, false);
          (0, a.Ay)("effect-remove").addEventListener("click", this.reset, false);
          (0, a.Ay)("effect-amount").addEventListener("input", this.amount, false);
          (0, a.Ay)("effect-settings").style.display = "none";
          (0, a.Ay)("effect-back").style.display = "none";
          this.setUp();
        }
      }
    }
