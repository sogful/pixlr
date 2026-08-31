window.__editorModules[2621] = function (t, e, s) {
      s.d(e, {
        A: () => n
      });
      var i = s(5283);
      var a = s(7775);
      class n {
        constructor() {
          this.notification = t => {
            const s = (0, i.Ay)("notification") ?? this.addNotif();
            if (this.notiId) {
              clearTimeout(this.notiId);
              s.innerHTML = "";
              s.style.display = "none";
            }
            requestAnimationFrame(() => {
              s.style.display = "block";
              s.innerHTML = "<div class=\"message\">" + t.detail + "</div>";
              this.position(s);
            });
            this.notiId = setTimeout(function () {
              s.innerHTML = "";
              s.style.top = "-999px";
              s.style.left = "-999px";
              s.style.display = "none";
            }, 1500);
          };
          this.legend = t => {
            const s = (0, i.Ay)("notification") ?? this.addNotif();
            if (t.detail === "stop") {
              s.innerHTML = "";
              s.style.top = "-999px";
              s.style.left = "-999px";
              s.style.display = "none";
              return;
            }
            s.style.display = "block";
            if (s.innerHTML === "") {
              s.innerHTML = "<div id=\"legend\" class=\"legend\">" + t.detail + "</div>";
            } else if ((0, i.Ay)("legend")) {
              (0, i.Ay)("legend").innerText = t.detail;
            }
            this.position(s);
          };
          this.loading = t => {
            const s = (0, i.Ay)("notification") ?? this.addNotif();
            if (t.detail !== "stop") {
              if (this.notiId) {
                clearTimeout(this.notiId);
                s.innerHTML = "";
                s.style.display = "none";
              }
              this.notiId = setTimeout(() => {
                if (this.keepLoading) {
                  this.keepLoading = false;
                } else {
                  s.innerHTML = "";
                  s.style.top = "-999px";
                  s.style.left = "-999px";
                  s.style.display = "none";
                }
              }, 400);
              s.style.display = "block";
              s.innerHTML = `\n            <div class="spinner">\n                <label class="working">${t.detail === "start" ? (0, a.A)("commonLoading") : t.detail}</label>\n            </div>\n        `;
              this.keepLoading = true;
              this.position(s);
            } else if (this.keepLoading) {
              this.keepLoading = false;
            } else {
              s.innerHTML = "";
              s.style.display = "none";
            }
          };
          this.addNotif = () => {
            const t = (0, i.T)("div", {
              id: "notification"
            });
            document.body.append(t);
            return t;
          };
          this.position = t => {
            let e = document.getElementsByClassName("modal").length !== 0;
            let s = (0, i.Ay)("splash") && (0, i.Ay)("splash").style.display !== "none";
            let a = document.getElementsByClassName("canvas").length !== 0;
            if (e || s || !a) {
              t.style.top = Math.round(document.documentElement.scrollTop + window.innerHeight / 2 - t.clientHeight / 2) + "px";
              t.style.left = Math.round(document.body.clientWidth / 2 - t.clientWidth / 2) + "px";
            } else {
              const e = document.querySelector(".canvas").getBoundingClientRect();
              t.style.top = Math.round(e.height / 2 + e.top - t.clientHeight / 2) / 1.5 + "px";
              t.style.left = Math.round(e.width / 2 + e.left - t.clientWidth / 2) + "px";
            }
          };
          document.addEventListener("legend", t => this.legend(t), true);
          document.addEventListener("loading", t => this.loading(t), true);
          document.addEventListener("notification", t => this.notification(t), true);
        }
      }
    }
