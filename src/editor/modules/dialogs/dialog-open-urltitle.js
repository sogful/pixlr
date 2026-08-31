window.__editorModules[6522] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(3171);
      var o = s(6939);
      var r = s(2128);
      class h extends o.A {
        constructor(t, e = true) {
          super((0, a.A)("dialogOpenURLTitle"));
          this.apply = async () => {
            let t = (0, i.Ay)("image-url").value;
            this.cleanUp();
            if (t !== "") {
              const e = t.substring(t.lastIndexOf("/") + 1);
              t = "https://pixlr.com/proxy/?url=" + encodeURIComponent(t);
              const s = new n.A({
                title: e
              });
              let i = await s.load(t);
              r.Tq(i, this.stage, this.askToAdd);
            }
          };
          this.stage = t;
          this.askToAdd = e;
          this.setContent(`\n            <label>${(0, a.A)("dialogOpenURLHeadline")}</label>\n            <input type="url" id="image-url" style="width: 100%" placeholder='https://example.com/this-image.jpg' />\n        `);
          (0, i.Ay)("dialog-apply" + this.mid).innerText = (0, a.A)("load");
          setTimeout(() => {
            (0, i.Ay)("image-url").focus();
          }, 300);
        }
      }
    }
