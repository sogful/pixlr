window.__editorModules[9661] = function (t, e, s) {
      s.d(e, {
        A: () => c
      });
      var i = s(5283);
      var a = s(7817);
      var n = s(7775);
      var o = s(5699);
      var r = s(3517);
      var h = s(5259);
      class l {
        constructor(t) {
          this.updatePreview = () => {
            this.preview.style.backgroundImage = this.grad.toCSS();
            if (this.callback) {
              this.callback(this.grad);
            }
          };
          this.populateStops = () => {
            this.stoplist.innerHTML = "";
            for (let t = 0; t < this.grad.stops.length; ++t) {
              const e = Math.round(this.grad.stops[t].position * 300);
              this.stoplist.append((0, i.T)("div", {
                id: this.grad.stops[t].id,
                className: "knob",
                style: "left:" + e + "px"
              }, (0, i.T)("div", {
                id: this.grad.stops[t].id + "-color",
                style: "background:" + this.grad.stops[t].color.toHEX()
              })));
            }
            this.setHandlers();
          };
          this.addStop = t => {
            t.stopPropagation();
            t.preventDefault();
            const e = this.grad.addStop(new h.A(0, 255, 0), Math.round(t.clientX - this.container.offsetLeft - 14) / 300);
            const s = Math.round(e.position * 300);
            const a = (0, i.T)("div", {
              id: e.id,
              className: "knob",
              style: "left:" + s + "px"
            }, (0, i.T)("div", {
              id: e.id + "-color",
              style: "background:" + e.color.toHEX()
            }));
            a.addEventListener("mousedown", this.mouseDown, true);
            a.addEventListener("touchstart", this.touchStart, {
              passive: true
            });
            this.stoplist.append(a);
            this.selectStop(e.id);
            this.updatePreview();
          };
          this.removeStop = () => {
            if (this.grad.stops.length > 2) {
              if ((0, i.Ay)(this.selected.id)) {
                (0, i.Ay)(this.selected.id).remove();
              }
              const t = this.grad.removeStop(this.selected.id);
              this.selected = undefined;
              this.selectStop(t);
              this.updatePreview();
            }
          };
          this.selectStop = t => {
            if (!this.selected || this.selected.id !== t) {
              if (this.selected && (0, i.Ay)(this.selected.id)) {
                (0, i.Ay)(this.selected.id).classList.remove("selected");
              }
              this.selected = this.grad.getStop(t);
              (0, i.Ay)(this.selected.id).classList.add("selected");
              this.opacity.setValue(this.selected.color.a / 255);
              (0, i.Ay)("grad-editor-remove").classList.toggle("disabled", this.grad.stops.length < 3);
            }
          };
          this.down = (t, e, s) => {
            this.selectStop(s.id);
            this.downX = t;
            this.target = s;
            this.start = s.offsetLeft + 6;
          };
          this.move = (t, e) => {
            let s = o.qE(this.start + (t - this.downX), 0, 300);
            this.target.style.left = s + "px";
            this.selected.position = s / 300;
            this.grad.sort();
            this.updatePreview();
          };
          this.setHandlers = () => {
            const t = document.querySelectorAll("#grad-editor-stoplist > .knob");
            for (let e = 0; e < t.length; e++) {
              t[e].addEventListener("mousedown", this.mouseDown, true);
              t[e].addEventListener("touchstart", this.touchStart, {
                passive: true
              });
              if (e === 0) {
                this.selectStop(t[e].id);
              }
            }
          };
          this.removeHandlers = () => {
            const t = document.querySelectorAll("#grad-editor-stoplist > .knob");
            for (let e = 0; e < t.length; e++) {
              t[e].removeEventListener("mousedown", this.mouseDown, true);
              t[e].removeEventListener("touchstart", this.touchStart);
            }
          };
          this.touchStart = t => {
            t.preventDefault();
            t.stopPropagation();
            this.down(t.changedTouches[0].clientX, t.changedTouches[0].clientY, t.currentTarget);
            document.addEventListener("touchmove", this.touchMove, {
              passive: true
            });
            document.addEventListener("touchend", this.touchEnd, {
              passive: true
            });
          };
          this.touchMove = t => {
            t.preventDefault();
            t.stopPropagation();
            this.move(t.changedTouches[0].clientX, t.changedTouches[0].clientY);
          };
          this.touchEnd = t => {
            t.preventDefault();
            t.stopPropagation();
            document.removeEventListener("touchmove", this.touchMove);
            document.removeEventListener("touchend", this.touchEnd);
          };
          this.mouseDown = t => {
            t.preventDefault();
            t.stopPropagation();
            this.down(t.clientX, t.clientY, t.currentTarget);
            document.addEventListener("mousemove", this.mouseMove, true);
            document.addEventListener("mouseup", this.mouseUp, true);
          };
          this.mouseMove = t => {
            t.stopPropagation();
            this.move(t.clientX, t.clientY);
          };
          this.mouseUp = t => {
            t.stopPropagation();
            t.preventDefault();
            document.removeEventListener("mousemove", this.mouseMove, true);
            document.removeEventListener("mouseup", this.mouseUp, true);
          };
          this.cleanUp = () => {
            var t;
            this.removeHandlers();
            this.addlist.removeEventListener("click", this.addStop, true);
            (0, i.Ay)("grad-editor-remove").removeEventListener("click", this.removeStop, true);
            this.gradpod.update(this.grad);
            this.container.remove();
            if ((t = this.modal) !== null && t !== undefined) {
              t.remove();
            }
          };
          this.gradpod = t;
          this.grad = t.grad;
          this.modal = (0, i.Ay)("workspace").appendChild((0, i.T)("div", {
            id: "grad-editor-modal",
            className: "modal"
          }));
          let e = (0, i.T)("div", {
            style: "position:relative"
          });
          let s = (0, i.T)("div", {
            className: "option",
            style: "display:flex;position:relative"
          });
          this.container = (0, i.T)("div", {
            id: "grad-editor"
          }, e, s);
          this.container.classList.add("grad-editor-float");
          (0, i.Ay)("workspace").appendChild(this.container);
          this.preview = (0, i.T)("div", {
            id: "grad-editor-preview"
          });
          this.stoplist = (0, i.T)("div", {
            id: "grad-editor-stoplist"
          });
          this.addlist = (0, i.T)("div", {
            id: "grad-editor-addlist"
          });
          e.append((0, i.T)("div", {
            id: "grad-editor-preview-holder"
          }, this.preview), this.stoplist, this.addlist);
          s.append((0, i.T)("div", {
            id: "grad-editor-opacity"
          }), (0, i.T)("ul", {
            className: "icon-button-set",
            style: "margin-left:auto"
          }, (0, i.T)("li", {
            id: "grad-editor-remove"
          }, (0, i.T)("img", {
            src: "assets/images/icon/delete.svg",
            className: "ic"
          }))));
          const a = (0, i.Ay)("grad-editor-remove");
          a.setAttribute("tooltip", (0, n.A)("removeStop"));
          a.setAttribute("flow", "down");
          a.addEventListener("click", this.removeStop, true);
          let l = this.gradpod.container.getBoundingClientRect();
          this.modal.addEventListener("click", t => {
            t.stopPropagation();
            t.preventDefault();
            if (t.target === t.currentTarget) {
              this.cleanUp();
            }
          }, false);
          this.container.style.top = l.bottom + 5 + "px";
          this.container.style.left = l.left - 5 + "px";
          this.container.style.display = "flex";
          this.preview = (0, i.Ay)("grad-editor-preview");
          this.opacity = new r.A("grad-editor-opacity", {
            label: (0, n.A)("opacity") + ":",
            compact: true,
            defaultValue: 1,
            labelFormat: t => (t * 100).toFixed(0) + "%",
            labelParse: t => parseInt(t, 10) / 100,
            onChange: t => {
              this.selected.color.a = Math.round(t * 255);
              this.updatePreview();
            }
          });
          this.addlist.addEventListener("click", this.addStop, false);
          this.populateStops();
          this.setHandlers();
          this.updatePreview();
        }
      }
      class c {
        constructor(t, e, s = false) {
          this.update = t => {
            this.grad = t;
            this.container.style.backgroundImage = this.grad.toCSS();
          };
          this.picker = () => {
            if (this.mini) {
              new l(this);
            } else {
              new a.A(undefined, this, this.update);
            }
          };
          this.cleanUp = () => {
            this.container.removeEventListener("click", this.picker, false);
          };
          this.grad = e;
          this.mini = s;
          this.container = (0, i.Ay)(t);
          this.container.classList.add("grad-pod");
          this.container.style.backgroundImage = this.grad.toCSS();
          this.container.addEventListener("click", this.picker, false);
        }
      }
    }
