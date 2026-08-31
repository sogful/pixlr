window.__webModules[1168] = function (e, t, i) {
      i.d(t, {
        A: () => c
      });
      var n = i(5283);
      var a = i(7775);
      var o = i(5833);
      var s = i(9266);
      var r = i(5432);
      class c extends o.A {
        constructor(e = {}) {
          super(true);
          this.setContent(`\n            <div id="entry-pop-right" class="half">\n                ${e.content || `\n                    <h1 class="large center top-20"><strong>${(0, a.A)("entryHi")}</strong></h1>\n                    <h3 class="center top-10">${(0, a.A)("entryWelcome")}</h3>\n                `}\n                <div id="entry-auth-holder" class="top-20"></div>\n            </div>\n        `);
          let t = (0, n.T)("div", {
            id: "entry-pop-left",
            className: "hero",
            style: "background-color:#E87C5C"
          });
          t.innerHTML = "<video src=\"/videos/register.mp4\" autoplay loop muted playsinline preload=\"auto\" fetchpriority=\"high\" style=\"width:100%;height:100%;object-fit:cover\"></video>";
          this.dialog.insertBefore(t, this.content);
          this.auth = new s.Ay(Object.assign({
            view: "chooser",
            holder: (0, n.Ay)("entry-auth-holder")
          }, e));
          this.messageHandler = async e => {
            if (e.data?.type === "auth-success") {
              const e = await (0, r.$4)();
              if (e) {
                this.cleanUp();
                document.dispatchEvent(new CustomEvent("user-login", {
                  detail: e
                }));
              }
            }
          };
          window.addEventListener("message", this.messageHandler);
          const i = this.cleanUp;
          this.cleanUp = () => {
            window.removeEventListener("message", this.messageHandler);
            i();
          };
        }
      }
    }
