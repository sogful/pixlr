window.__editorModules[3171] = function (t, e, s) {
      var i = s(5283);
      var a = s(7775);
      var n = s(6939);
      var o = s(7135);
      var r = s(5056);
      class h extends n.A {
        constructor(t = {}) {
          super((0, a.A)("dialogLoadTitle"));
          this.load = async t => {
            (0, o.A)("load-url");
            const e = (0, i.Ay)("load-message");
            try {
              this.cancel = () => {
                throw h.CANCEL;
              };
              const s = this.settings.title || (0, a.A)("image");
              const n = this.settings.referrer || (0, a.A)("source");
              e.innerText = (0, a.A)("dialogLoadLoadingFrom", s.toLowerCase(), n.toLowerCase());
              const o = await (0, r.yP)(t, t => {
                const e = (0, i.Ay)("load-progress");
                if (t == -1) {
                  e.removeAttribute("value");
                } else {
                  e.value = t;
                }
              });
              const l = new File([o], this.settings.title || t.substring(t.lastIndexOf("/") + 1), {
                type: o.type
              });
              this.cleanUp();
              return l;
            } catch (s) {
              if (s === h.CANCEL) {
                this.cleanUp();
                return;
              }
              if ((0, i.Ay)("load-progress")) {
                e.innerText = (0, a.A)("dialogLoadError");
                (0, i.Ay)("load-progress").style.display = "none";
                this.cancel = () => {
                  this.cleanUp();
                };
              }
            }
          };
          this.settings = t;
          this.setContent("\n            <p id=\"load-message\"></p><br />\n\n            <progress id=\"load-progress\" value=\"0\" max=\"100\" style=\"width: 100%;\"></progress>\n            <br><br>\n        ");
          (0, i.Ay)("dialog-apply" + this.mid).style.display = "none";
          (0, i.Ay)("load-message").innerText = (0, a.A)("dialogLoadPrepare");
        }
      }
      h.CANCEL = new Error("CANCEL");
      const l = h;
      s.d(e, ["A", 0, l]);
    }
