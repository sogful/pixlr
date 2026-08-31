window.__editorModules[1168] = function (t, e, s) {
      s.d(e, {
        A: () => h
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(5833);
      var o = s(9266);
      var r = s(5432);
      class h extends n.A {
        constructor(t = {}) {
          super(true);
          this.setContent(`\n            <div id="entry-pop-right" class="half">\n                ${t.content || `\n                    <h1 class="large center top-20"><strong>${(0, a.A)("entryHi")}</strong></h1>\n                    <h3 class="center top-10">${(0, a.A)("entryWelcome")}</h3>\n                `}\n                <div id="entry-auth-holder" class="top-20"></div>\n            </div>\n        `);
          let e = (0, i.T)("div", {
            id: "entry-pop-left",
            className: "hero",
            style: "background-color:#E87C5C"
          });
          e.innerHTML = "<video src=\"/videos/register.mp4\" autoplay loop muted playsinline preload=\"auto\" fetchpriority=\"high\" style=\"width:100%;height:100%;object-fit:cover\"></video>";
          this.dialog.insertBefore(e, this.content);
          this.auth = new o.Ay(Object.assign({
            view: "chooser",
            holder: (0, i.Ay)("entry-auth-holder")
          }, t));
          this.messageHandler = async t => {
            if (t.data?.type === "auth-success") {
              const t = await (0, r.$4)();
              if (t) {
                this.cleanUp();
                document.dispatchEvent(new CustomEvent("user-login", {
                  detail: t
                }));
              }
            }
          };
          window.addEventListener("message", this.messageHandler);
          const s = this.cleanUp;
          this.cleanUp = () => {
            window.removeEventListener("message", this.messageHandler);
            s();
          };
        }
      }
    }
