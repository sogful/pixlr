window.__editorModules[7497] = function (t, e, s) {
      s.d(e, {
        A: () => u
      });
      var i = s(7775);
      var a = s(5699);
      var n = s(3517);
      var o = s(5283);
      var r = s(5259);
      var h = s(5328);
      var l = s(5138);
      var c = s(5056);
      var d = s(8854);
      class u {
        constructor(t, e) {
          this.SERVER_URL = "/api/assets/";
          this.populatePresets = async () => {
            const t = await (await fetch(this.SERVER_URL + "?platform=web&category=pattern&sort=name&limit=100")).json();
            const {
              status: e,
              data: {
                assets: s
              }
            } = t;
            if (!e) {
              return;
            }
            if (s.length === 0) {
              return;
            }
            const i = (0, o.Ay)("pattern-selector-presets-ss-content");
            const a = (0, o.T)("div", {
              className: "pattern-pod empty"
            });
            a.setAttribute("data", "empty");
            a.addEventListener("click", this.selectPreset, true);
            i.append(a);
            s.forEach(t => {
              const e = t.thumbnailSmall;
              const s = (0, o.T)("div", {
                className: "pattern-pod"
              });
              s.setAttribute("data", t.path);
              s.addEventListener("click", this.selectPreset, true);
              s.style.backgroundImage = "url(" + e + ")";
              i.append(s);
            });
          };
          this.populatePack = () => {};
          this.selectPreset = async t => {
            if (this.marked) {
              this.marked.classList.remove("selected");
            }
            this.marked = t.currentTarget;
            this.marked.classList.add("selected");
            let e = this.marked.getAttribute("data");
            if (e === "empty") {
              this.pattern = undefined;
            } else {
              if (!this.pattern) {
                let t = this.scale.getValue();
                this.pattern = new l.A(undefined, t < 0 ? 1 + t / 12.5 : 1 + t, this.direction.getValue());
              }
              this.pattern.svg = await fetch(e + "?ref").then(t => t.text());
              let t = new Blob([this.pattern.svg], {
                type: "image/svg+xml"
              });
              this.pattern.image = await (0, c.Ep)(t);
              this.extractColors();
            }
            this.updatePreview();
          };
          this.changeColor = t => {
            this.colorPod = t.currentTarget;
            new d.A(r.A.fromHEX(this.colorPod.title), this.setColor);
          };
          this.extractColors = () => {
            let t = [];
            this.pattern.svg.replace(/fill:?=?"?(#[abcdef0-9]{3,8})/gi, function (e, s) {
              t.push(s);
              return e;
            });
            this.pattern.svg.replace(/stroke:?=?"?(#[abcdef0-9]{3,8})/gi, function (e, s) {
              t.push(s);
              return e;
            });
            t = t.filter((t, e, s) => s.indexOf(t) === e).slice(0, 10);
            let e = (0, o.Ay)("pattern-color-list");
            e.innerHTML = "";
            t.forEach(t => {
              e.appendChild((0, o.T)("div", {
                onclick: this.changeColor,
                className: "color-pod small",
                title: t,
                style: "border:none;border-radius:3px;display:inline-block;margin:5px 5px 5px 0px;background-color:" + t
              }));
            });
          };
          this.setColor = async t => {
            let e = this.colorPod.title;
            let s = t.toHEX();
            this.colorPod.title = s;
            this.colorPod.style.backgroundColor = s;
            var i = new RegExp(e, "g");
            this.pattern.svg = this.pattern.svg.replace(i, s);
            let a = new Blob([this.pattern.svg], {
              type: "image/svg+xml"
            });
            this.pattern.image = await (0, c.Ep)(a);
            this.updatePreview();
          };
          this.setPattern = t => {
            this.pattern = t;
            let e = this.pattern.scale;
            this.scale.setValue(e < 1 ? (1 - e) * -12.5 : e - 1);
            this.direction.setValue(this.pattern.direction);
            this.extractColors();
            this.updatePreview();
          };
          this.scaleChange = t => {
            if (this.pattern) {
              t = t < 0 ? 1 + t / 12.5 : 1 + t;
              this.pattern.scale = t;
              this.updatePreview(false);
            }
          };
          this.directionChange = t => {
            if (this.pattern) {
              this.pattern.direction = t;
              this.updatePreview(false);
            }
          };
          this.updatePreview = (t = true) => {
            if (this.pattern) {
              this.ctx.save();
              this.ctx.fillStyle = this.pattern.createCanvasPattern(this.ctx);
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              this.ctx.restore();
            } else {
              this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
            }
            if (this.callback && t) {
              this.callback(this.pattern);
            }
          };
          this.callback = e;
          this.canvas = a.VI(300, 120);
          this.canvas.classList.add("transparent");
          this.canvas.style.borderRadius = "2px";
          this.ctx = this.canvas.getContext("2d");
          let s = (0, o.T)("div", {
            className: "option top-5",
            style: "display:flex;"
          }, (0, o.T)("div", {
            id: "pattern-scale"
          }), (0, o.T)("div", {
            id: "pattern-direction",
            className: "tab-20"
          }));
          let u = (0, o.T)("div", {
            id: "pattern-color-list",
            style: "display:block;"
          });
          let p = (0, o.T)("div", {
            id: "pattern-selector-top"
          }, this.canvas, u, s);
          let g = (0, o.T)("div", {
            id: "pattern-selector-presets",
            className: "top-10"
          });
          this.container = (0, o.T)("div", {
            id: "pattern-selector"
          }, p, (0, o.T)("div", {
            className: "splitter top-8"
          }), g);
          t.appendChild(this.container);
          new h.A((0, o.Ay)("pattern-selector-presets"));
          this.scale = new n.A("pattern-scale", {
            label: (0, i.A)("scale") + ":",
            compact: true,
            range: [-10, 10],
            defaultValue: 0,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10),
            onChange: this.scaleChange,
            onEnd: () => this.updatePreview()
          });
          this.direction = new n.A("pattern-direction", {
            label: (0, i.A)("direction") + ":",
            compact: true,
            range: [0, 360],
            defaultValue: 0,
            labelFormat: t => t.toFixed(1),
            labelParse: t => parseInt(t, 10),
            onChange: this.directionChange,
            onEnd: () => this.updatePreview()
          });
          this.populatePresets();
        }
      }
    }
