window.__webModules[9266] = function (e, t, i) {
      i.d(t, {
        Ay: () => p,
        FS: () => c
      });
      var n = i(7775);
      var a = i(7135);
      var o = i(4947);
      var s = i(5283);
      var r = i(1122);
      const c = window.__pixlrCountries;;
      const l = window.location.href.includes("localhost") ? "10000000-ffff-ffff-ffff-000000000001" : "550ad708-3266-4d24-8566-69208120dbe6";
      class d {
        static injectStyles() {
          if (d.stylesInjected) {
            return;
          }
          d.stylesInjected = true;
          const e = document.createElement("style");
          e.textContent = "\n            .entry { flex:1; width:100%; display:flex; max-width:320px; flex-direction:column; justify-content:center; }\n            .entry .entry-content { width:100%; max-width:320px; }\n            .entry.agreements { width:1000px; }\n            .entry .back { cursor:pointer; }\n            .entry .no-margin { margin:0; }\n            .entry p { font-size:13px; margin:0; }\n            .entry .column { display:flex; }\n            .entry .justify-center { justify-content:center; }\n            .entry .space-between { justify-content:space-between; }\n            .entry .separator { display:flex; align-items:center; text-align:center; font-size:12px; padding-top:25px; }\n            .entry .separator::before, .entry .separator::after { content:' '; flex:1; border-bottom:1px solid var(--component-dim); }\n            .entry .separator::before { margin-right:15px; }\n            .entry .separator::after { margin-left:15px; }\n            .entry .button.transparent { background:transparent; color:inherit; border:none; }\n            .entry .button.transparent:hover { box-shadow:none; border:none; }\n            .entry .inline { display:flex; flex-direction:row; align-items:center; }\n            @media (max-width:425px) { .entry .inline { flex-direction:column; } }\n            .entry .input-group .input-icon { position:absolute; top:33px; right:12px; cursor:pointer; width:18px; height:18px; opacity:0.5; }\n            .entry .checkbox-group { margin:7px 0; }\n            .entry .checkbox-group input { height:unset; }\n            .entry .input-group .error-msg { width:100%; display:none; color:#E71D36; margin:4px 0 0 0; font-size:13px; }\n            .entry #recaptcha { margin:25px 0; }\n            .entry #recaptcha div { margin:0 auto; }\n        ";
          document.head.appendChild(e);
        }
        constructor(e = {}) {
          this.setContent = async (e, t) => {
            var i;
            switch (e) {
              case "chooser":
                this.content.innerHTML = this.form.chooser();
                document.querySelectorAll(".social-button").forEach(e => {
                  e.addEventListener("click", () => this.loadSocialLogin(e.dataset.social));
                });
                if ((i = (0, s.Ay)("choose-email")) !== null && i !== undefined) {
                  i.addEventListener("click", () => this.loadForm("login"));
                }
                break;
              case "login":
                this.loadHCaptcha();
                this.content.innerHTML = this.form.login();
                (0, s.Ay)("load-signup").onclick = () => this.loadForm("register");
                if (this.options.email) {
                  (0, s.Ay)("entry-email").value = this.options.email;
                }
                break;
              case "register":
                this.loadHCaptcha();
                this.content.innerHTML = await this.form.register();
                break;
              case "forgotPassword":
                this.loadHCaptcha();
                this.content.innerHTML = this.form.forgotPassword();
                break;
              case "setPassword":
                this.loadHCaptcha();
                this.content.innerHTML = this.form.resetPassword(true);
                break;
              case "resetPassword":
                this.loadHCaptcha();
                this.content.innerHTML = this.form.resetPassword();
                break;
              case "policyReset":
                this.content.innerHTML = this.form.policyReset(t.reason);
                break;
              case "verification":
                this.content.innerHTML = this.form.verification(t.verify ?? "verification");
                break;
              case "changePassword":
                this.content.innerHTML = this.form.changePassword();
                break;
              case "changeEmail":
                this.content.innerHTML = this.form.changeEmail();
                break;
              case "changeUsername":
                this.content.innerHTML = this.form.changeUsername((0, s.Ay)("change-name").dataset.name);
                break;
              case "deleteAccount":
                const e = (0, s.Ay)("delete-account").dataset.name || "User";
                this.content.innerHTML = this.form.deleteAccount(e);
                break;
              case "deleteAccountConfirmation":
                this.content.innerHTML = this.form.deleteAccountConfirmation(t.reason);
                break;
              case "additionalVerification":
                this.passwordVerification = "pending";
                this.content.innerHTML = this.form.additionalVerification();
            }
          };
          this.setFooter = e => {
            this.footer.style.display = "block";
            switch (e) {
              case "login":
                this.footer.innerHTML = `${(0, n.A)("commonNotMember")} &nbsp; <a id="load-chooser">${(0, n.A)("commonSignUpNow")}</a>`;
                (0, s.Ay)("load-chooser").onclick = () => this.loadForm("chooser");
                break;
              case "register":
                this.footer.innerHTML = `${(0, n.A)("commonAlreadyMember")} &nbsp; <a id="load-login">${(0, n.A)("commonLoginHere")}</a>`;
                (0, s.Ay)("load-login").onclick = () => this.loadForm("login");
                break;
              case "forgotPassword":
                this.footer.innerHTML = `<a class="back" id="entry-back">&#10094; &nbsp; ${(0, n.A)("commonBack")}</a>`;
                (0, s.Ay)("entry-back").onclick = () => this.loadForm("login");
                break;
              case "resetPassword":
                this.footer.innerHTML = `<a class="back" id="entry-back">&#10094; &nbsp; ${(0, n.A)("commonBack")}</a>`;
                (0, s.Ay)("entry-back").onclick = () => this.loadForm("forgotPassword");
                break;
              default:
                this.footer.innerHTML = "";
                this.footer.style.display = "none";
                return;
            }
          };
          this.loadForm = async (e, t = {}) => {
            var i;
            var n;
            var a;
            var o;
            var r;
            var c;
            var l;
            this.options.view = e;
            await this.setContent(this.options.view, t);
            if (this.options.view === "setPassword" || this.options.view === "resetPassword" || this.options.view === "register" || this.options.view === "forgotPassword") {
              this.renderHCaptcha(true);
            }
            if ((i = (0, s.Ay)("entry-form")) !== null && i !== undefined) {
              i.addEventListener("submit", e => {
                this.submitForm((0, s.Ay)("entry-form").dataset.entry, e);
              });
            }
            if (this.options.view === "setPassword") {
              t.email = (0, s.Ay)("set-password").dataset.email;
            }
            if (this.options.view === "resetPassword" || this.options.view === "setPassword") {
              (0, s.Ay)("entry-email").value = t.email;
              if (t.code) {
                (0, s.Ay)("entry-code").value = t.code;
              }
            }
            if (this.options.view === "policyReset") {
              if (t.email) {
                (0, s.Ay)("entry-email").value = t.email;
              }
              if (t.token) {
                (0, s.Ay)("entry-token").value = t.token;
              }
            }
            if ((0, s.Ay)("entry-to-email")) {
              const e = (0, s.Ay)("entry-to-email").dataset.text.replace("[EMAIL]", t.email);
              (0, s.Ay)("entry-to-email").innerHTML = e;
            }
            if ((0, s.Ay)("verification-email")) {
              (0, s.Ay)("verification-email").value = t.email;
            }
            if ((0, s.Ay)("entry-resend")) {
              clearTimeout(this.resendCodeTimeouts);
              this.resendCodeTimeouts = setTimeout(() => {
                (0, s.Ay)("entry-resend").classList.remove("hide");
              }, 30000);
              if ((n = (0, s.Ay)("entry-resend")) !== null && n !== undefined) {
                n.addEventListener("click", () => this.resendCode(t.email));
              }
            }
            if ((a = (0, s.Ay)("entry-email")) !== null && a !== undefined) {
              a.addEventListener("keyup", () => {
                this.validateInputTimer("email");
              });
            }
            if ((o = (0, s.Ay)("entry-email")) !== null && o !== undefined) {
              o.addEventListener("blur", () => {
                (0, s.TT)((0, s.Ay)("entry-email"), "", "email");
              });
            }
            if ((r = (0, s.Ay)("load-forgotPassword")) !== null && r !== undefined) {
              r.addEventListener("click", () => this.loadForm("forgotPassword"));
            }
            if ((c = (0, s.Ay)("toggle-password")) !== null && c !== undefined) {
              c.addEventListener("click", () => this.togglePassword());
            }
            if ((l = (0, s.Ay)("toggle-password-2")) !== null && l !== undefined) {
              l.addEventListener("click", () => this.togglePassword("toggle-password-2", "entry-password-new"));
            }
          };
          this.loadSocialLogin = async e => {
            (0, a.A)("login", e);
            if (e === "apple") {
              const e = await new Promise((e, t) => {
                let i = document.createElement("script");
                i.type = "text/javascript";
                i.crossOrigin = "anonymous";
                i.src = "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js";
                document.body.appendChild(i);
                i.onload = function () {
                  e(AppleID ? AppleID.auth : null);
                };
                i.onerror = function () {
                  t("Failed to load apple auth script");
                };
              });
              if (e) {
                e.init({
                  clientId: "com.pixlr.web",
                  scope: "name email",
                  redirectURI: new URL(location.href).origin + "/auth/apple/callback",
                  state: location.href,
                  nonce: "",
                  usePopup: false
                });
                e.signIn();
              }
            } else if (e === "google" && this.options.holder) {
              const e = 500;
              const t = 600;
              const i = (screen.width - e) / 2;
              const n = (screen.height - t) / 2;
              const a = window.open("about:blank", "pixlr-auth", `width=${e},height=${t},left=${i},top=${n},toolbar=no,menubar=no`);
              if (a) {
                a.location.href = `${window.location.origin}/auth/google?callbackUrl=${encodeURIComponent(window.location.href + (window.location.href.includes("?") ? "&" : "?") + "silent=true")}`;
              } else {
                const e = this.options.callback ? decodeURIComponent(this.options.callback).split("#")[0] : encodeURIComponent(window.location.href);
                window.location.href = `${window.location.origin}/auth/google?callbackUrl=${e}`;
              }
            } else {
              const t = window.location.origin;
              let i = this.options.callback ? decodeURIComponent(this.options.callback).split("#")[0] : encodeURIComponent(window.location.href);
              window.location.href = `${t}/auth/${e}?callbackUrl=${i}`;
            }
          };
          this.togglePassword = (e = "toggle-password", t = "entry-password") => {
            const i = (0, s.Ay)(e);
            const n = (0, s.Ay)(t);
            if (n.type === "text") {
              n.type = "password";
              i.src = "assets/images/icon/eye-hide.svg";
            } else {
              n.type = "text";
              i.src = "assets/images/icon/eye-show.svg";
            }
          };
          this.validateInputTimer = e => {
            if (this.validationTimer[e]) {
              clearTimeout(this.validationTimer[e]);
            }
            this.validationTimer[e] = setTimeout(() => (0, s.TT)((0, s.Ay)(`entry-${e}`), "", e), 1000);
          };
          this.loadHCaptcha = () => {
            let e = document.createElement("script");
            e.id = "hcaptcha-js-api";
            e.defer = true;
            e.src = "https://js.hcaptcha.com/1/api.js";
            document.getElementsByTagName("head")[0].appendChild(e);
          };
          this.renderHCaptcha = (e = false) => {
            this.captcha = undefined;
            setTimeout(() => {
              try {
                this.captcha = hcaptcha.render("h-captcha", {
                  sitekey: l,
                  size: e ? "invisible" : "normal"
                });
              } catch (t) {
                console.error("Failed to load Captcha, please check your network connection!");
              }
            }, 2500);
          };
          this.getHCaptchaToken = async () => {
            try {
              const e = await hcaptcha.execute(this.captcha, {
                async: true
              });
              if (e.response) {
                return e.response;
              } else {
                hcaptcha.reset(this.captcha);
                return (0, s.y8)("danger", "Please complete the CAPTCHA!", 3);
              }
            } catch (e) {
              console.error("Failed to get Captcha Token!", e);
              return (0, s.y8)("danger", "An unexpected error occurred!", 3);
            }
          };
          this.getFormInput = () => {
            const e = {};
            const t = (0, s.Ay)("entry-form");
            t.querySelectorAll("input").forEach(t => {
              if (t.type == "checkbox") {
                e[t.name] = t.checked;
              } else {
                e[t.name] = t.value;
              }
            });
            t.querySelectorAll("select").forEach(t => {
              e[t.name] = t.value;
            });
            return e;
          };
          this.submitForm = async (e, t) => {
            t.preventDefault();
            switch (e) {
              case "login":
                this.loginHandler();
                break;
              case "register":
                this.registerHandler();
                break;
              case "verification":
                this.verificationHandler();
                break;
              case "forgotPassword":
                this.forgotPasswordHandler();
                break;
              case "setPassword":
                this.passwordResetHandler(true);
                break;
              case "resetPassword":
                this.passwordResetHandler();
                break;
              case "policyReset":
                this.policyResetHandler();
                break;
              case "changeEmail":
                this.changeEmailHandler();
                break;
              case "changeEmailVerification":
                this.changeEmailVerificationHandler();
                break;
              case "changePassword":
                this.changePasswordHandler();
                break;
              case "changeUsername":
                this.changeUsernameHandler();
                break;
              case "deleteAccount":
                this.deleteAccountHandler();
                break;
              case "deleteAccountConfirmation":
                this.deleteAccountConfirmationHandler();
            }
          };
          this.loginHandler = async () => {
            var e;
            const t = this.getFormInput();
            t.email = t.email.trim();
            const i = (0, s.TT)((0, s.Ay)("entry-email"), t.email, "email");
            const n = (0, s.TT)((0, s.Ay)("entry-password"), t.password, "password");
            if (!i || !n) {
              return;
            }
            (0, s.Ay)("entry-submit").classList.add("working");
            const r = await (0, o.In)("/auth/login", "POST", t);
            if (r.status) {
              (0, a.A)("login", "password");
              if (this.options.holder && !this.options.callback) {
                window.postMessage({
                  type: "auth-success"
                }, "*");
              } else if (this.options.callback) {
                window.location.href = decodeURIComponent(this.options.callback).split("#")[0];
              } else {
                window.location.reload();
              }
            } else if (r.verify) {
              this.loadForm("verification", {
                email: t.email
              });
              (0, s.y8)("danger", r.message, 5);
            } else {
              (0, s.Ay)("entry-submit").innerText = "Login";
              (0, s.y8)("danger", r.message, 5);
            }
            if ((e = (0, s.Ay)("entry-submit")) !== null && e !== undefined) {
              e.classList.remove("working");
            }
          };
          this.registerHandler = async () => {
            this.registerData = this.getFormInput();
            const e = (0, s.TT)((0, s.Ay)("entry-email"), this.registerData.email, "email");
            const t = (0, s.TT)((0, s.Ay)("entry-password"), this.registerData.password, "password");
            if (!e || !t) {
              return;
            }
            const i = this.getFormInput();
            Object.assign(i, this.registerData);
            let n = await this.getHCaptchaToken();
            i.token = n;
            const a = await (0, o.In)("/auth/register", "POST", i);
            if (!a.status) {
              (0, s.y8)("danger", a.message, 5);
              this.loadForm("register");
              return;
            }
            this.loadForm("verification", {
              email: i.email
            });
          };
          this.verificationHandler = async () => {
            const e = this.getFormInput();
            const t = await (0, o.In)("/auth/verify", "POST", e);
            if (!t.status) {
              return (0, s.y8)("danger", t.message, 5);
            }
            (0, s.y8)("success", t.message, 5);
            setTimeout(() => {
              const e = this.options.callback ? decodeURIComponent(this.options.callback).split("#")[0] : location.href;
              window.location.href = e;
            }, 1000);
          };
          this.forgotPasswordHandler = async () => {
            const e = this.getFormInput();
            if (!(0, s.TT)((0, s.Ay)("entry-email"), e.email, "email")) {
              return;
            }
            let t = await this.getHCaptchaToken();
            e.token = t;
            e.resend = false;
            const i = await (0, o.In)("/auth/request/code/", "POST", e);
            if (!i.status) {
              return (0, s.y8)("danger", i.message, 5);
            }
            (0, s.y8)("success", i.message, 5, e.email);
            this.loadForm("resetPassword", {
              email: e.email
            });
          };
          this.passwordResetHandler = async (e = false) => {
            const t = this.getFormInput();
            let i = await this.getHCaptchaToken();
            t.token = i;
            const n = (0, s.TT)((0, s.Ay)("entry-email"), t.email, "email");
            const a = (0, s.TT)((0, s.Ay)("entry-password"), t.password, "password");
            const r = (0, s.TT)((0, s.Ay)("entry-code"), t.code, "code");
            if (!n || !a || !r) {
              return;
            }
            const c = await (0, o.In)("/auth/reset", "POST", t);
            if (!c.status) {
              return (0, s.y8)("danger", c.message, 5);
            }
            (0, s.y8)("success", c.message, 5);
            setTimeout(() => {
              if (e) {
                window.location.href = "/logout";
              } else if (this.options.callback) {
                window.location.href = decodeURIComponent(this.options.callback).split("#")[0];
              } else {
                window.location.reload();
              }
            }, 1000);
          };
          this.policyResetHandler = async () => {
            const e = this.getFormInput();
            if (!(0, s.TT)((0, s.Ay)("entry-password"), e.password, "password")) {
              return;
            }
            const t = await (0, o.In)("/api/auth/policy-reset/consume", "POST", {
              token: e.token,
              password: e.password
            });
            if (!t.status) {
              return (0, s.y8)("danger", t.message, 5);
            }
            (0, s.y8)("success", t.message, 5);
            setTimeout(() => {
              window.location.href = this.options.callback ? decodeURIComponent(this.options.callback).split("#")[0] : "/";
            }, 1500);
          };
          this.resendCode = async e => {
            (0, s.Ay)("entry-resend").classList.add("hide");
            this.resendCodeTimeouts = setTimeout(() => {
              (0, s.Ay)("entry-resend").classList.remove("hide");
            }, 30000);
            const t = await (0, o.In)("/auth/request/code/", "POST", {
              email: e,
              resend: true
            });
            if (!t.status) {
              return (0, s.y8)("danger", t.message, 5);
            }
            (0, s.y8)("success", t.message, 5, e);
          };
          this.changeEmailHandler = async () => {
            const e = this.getFormInput();
            if (!(0, s.TT)((0, s.Ay)("entry-email"), e.email, "email")) {
              return;
            }
            const t = await (0, o.In)("/auth/changeemail/request", "POST", {
              newEmail: e.email
            });
            if (!t.status) {
              return (0, s.y8)("danger", t.message);
            }
            this.loadForm("verification", {
              email: e.email,
              verify: "changeEmailVerification"
            });
            (0, s.y8)("success", t.message, 5, e.email);
          };
          this.changeEmailVerificationHandler = async () => {
            const e = this.getFormInput();
            e.newEmail = e.email;
            if (!(0, s.TT)((0, s.Ay)("entry-code"), e.code, "code")) {
              return;
            }
            const t = await (0, o.In)("/auth/changeemail/verify", "POST", e);
            if (!t.status) {
              return (0, s.y8)("danger", t.message, 5);
            }
            (0, s.y8)("success", t.message, 5);
            setTimeout(() => {
              window.location.replace("/logout?callbackUrl=/");
            }, 1000);
          };
          this.changePasswordHandler = async () => {
            const e = this.getFormInput();
            const t = (0, s.TT)((0, s.Ay)("entry-password"), e.password, "password");
            const i = (0, s.TT)((0, s.Ay)("entry-password-new"), e["new-password"], "password");
            if (!t || !i) {
              return;
            }
            const n = await (0, o.In)("/auth/changepassword", "PUT", {
              oldPassword: e.password,
              newPassword: e["new-password"]
            });
            if (!n.status) {
              return (0, s.y8)("danger", n.message, 5);
            }
            (0, s.y8)("success", n.message, 5);
            setTimeout(() => {
              window.location.replace("/");
            }, 2000);
          };
          this.changeUsernameHandler = async () => {
            const e = this.getFormInput();
            const t = await (0, o.In)("/myaccount/api/profile", "PUT", e, true);
            if (!t.status) {
              return (0, s.y8)("danger", t.message);
            }
            (0, s.y8)("success", t.message);
            setTimeout(() => window.location.reload(), 500);
          };
          this.deleteAccountHandler = async () => {
            const e = this.getFormInput();
            if (e.reason !== "leavingReasonDefault") {
              this.loadForm("deleteAccountConfirmation", {
                reason: e.reason
              });
            }
          };
          this.deleteAccountConfirmationHandler = async () => {
            const e = this.getFormInput();
            if (!(0, s.TT)((0, s.Ay)("entry-password"), e.password, "password")) {
              return;
            }
            (0, s.Ay)("entry-cancel").style.display = "none";
            (0, s.Ay)("delete-confirm").innerText = (0, n.A)("commonDeleteInProgress");
            const t = await (0, o.In)("/api/myaccount/profile", "DELETE", e, true);
            if (!t.status) {
              (0, s.Ay)("entry-cancel").style.display = "block";
              (0, s.Ay)("delete-confirm").innerText = (0, n.A)("deleteMyAccount");
              return (0, s.y8)("danger", t.message);
            }
            window.location.href = "/logout/";
          };
          this.getAdditionalVerificationstatus = () => (0, s.Ay)("entry-form");
          this.additionalVerificationHandler = async () => {
            const e = this.getFormInput();
            if (!(0, s.TT)((0, s.Ay)("entry-password"), e.password, "password")) {
              return false;
            }
            const t = await (0, o.In)("/api/myaccount/verification", "POST", e, true);
            return !!t.status || ((0, s.y8)("danger", t.message), false);
          };
          d.injectStyles();
          this.options = Object.assign({}, e);
          this.form = new r.A();
          this.registerData = {};
          this.validationTimer = {};
          this.captcha = {};
          this.dialog = this.options.holder;
          this.dialog.classList.add("entry");
          this.content = (0, s.T)("div", {
            className: "entry-content"
          });
          this.footer = (0, s.T)("div", {
            id: "entry-footer",
            className: "center"
          });
          this.dialog.append(this.content, this.footer);
          this.loadForm(this.options.view ?? "chooser");
        }
      }
      d.stylesInjected = false;
      const p = d;
    }
