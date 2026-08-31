window.__webModules[2443] = function (e, t, i) {
      i.r(t);
      i.d(t, {
        default: () => f,
        prefetchProducts: () => y
      });
      var n = i(5283);
      var a = i(7775);
      var o = i(1168);
      var s = i(7135);
      var r = i(98);
      var c = i(5432);
      var l = i(9754);
      var d = i(3673);
      var p = i(4947);
      function h(e) {
        if (e) {
          try {
            const t = new URL(e, window.location.origin);
            t.searchParams.set("settings", "subscription");
            return t.toString();
          } catch (t) {
            return e;
          }
        }
      }
      let u = null;
      function m() {
        u ||= (0, p.dL)().then(e => e.status ? e.data : []).catch(() => []);
        return u;
      }
      function y() {
        m();
      }
      const g = {
        save: {
          title: "bounceSnap",
          pitch: "bounceLowPrice"
        },
        credit: {
          title: "bounceCreditTitle",
          pitch: "bounceCreditPitch"
        },
        premium: {
          title: "bounceTitle",
          pitch: "bounceFeaturePitch"
        },
        concurrent: {
          title: "bounceConcurrentTitle",
          pitch: "bounceConcurrentPitch"
        },
        private: {
          title: "bouncePrivateTitle",
          pitch: "bouncePrivatePitch"
        },
        mature: {
          title: "bounceMatureTitle",
          pitch: "bounceMaturePitch"
        },
        welcome: {
          title: "bounceWelcomeTitle",
          pitch: "bounceWelcomePitch"
        }
      };
      const v = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#f56123\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.2611 1.29711C14.5548 1.40637 14.7496 1.68669 14.7496 2.00004V10.2502H19.5004C19.7938 10.2502 20.0603 10.4213 20.1824 10.6881 20.3045 10.9549 20.2598 11.2684 20.068 11.4904L10.568 22.4902C10.3632 22.7274 10.0326 22.8122 9.73888 22.7029 9.4452 22.5937 9.2504 22.3134 9.2504 22V13.7499H4.4996C4.20619 13.7499 3.93973 13.5788 3.81763 13.312 3.69553 13.0452 3.74021 12.7317 3.93199 12.5096L13.432 1.50982C13.6368 1.27267 13.9674 1.18785 14.2611 1.29711Z\" fill=\"currentColor\" /></svg>";
      class f {
        constructor(e, t, i = {}) {
          var u;
          var y;
          var f;
          var b;
          var w;
          this.options = Object.assign(Object.assign({}, i), {
            redirectUrl: h(i.redirectUrl)
          });
          if ((0, n.lR)("RequestFrom", "")) {
            return;
          }
          (0, s.A)("bounce", e);
          const x = t === "welcome";
          const A = c.Ny?.subscriptionAccess || "free";
          const T = A === "plus";
          const k = A === "premium";
          const C = t === "mature";
          const S = c.Ny?.restrictMatureContent ?? (0, n.lR)("country", "") === "MY";
          const N = T || k || C;
          const P = k || C;
          const L = g[t] || g.premium;
          const M = (0, a.A)(L.title);
          const E = t === "save" ? (0, a.A)(L.pitch, "") : (0, a.A)(L.pitch);
          this.backdrop = (0, n.T)("div", {
            className: "modal"
          });
          this.sheet = (0, n.T)("div", {
            className: "sheet bounce-sheet"
          });
          if (!x) {
            const e = (0, n.T)("div", {
              className: "sheet-close",
              onclick: () => this.close()
            });
            e.innerHTML = "<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>";
            this.sheet.append(e);
          }
          const I = (0, n.T)("div", {
            className: "bounce-header"
          });
          I.innerHTML = `\n            <h1>${M}</h1>\n            <p id="bounce-pitch">${E}</p>\n            ${t !== "save" || c.Ny ? "" : `<p id="do-login" class="top-10">${(0, a.A)("commonAlreadyMember")} <a id="login-link">${(0, a.A)("commonLoginHere")}</a></p>`}\n        `;
          this.sheet.append(I);
          const U = (0, n.T)("div", {
            className: "bounce-plans"
          });
          if (!C) {
            const t = this.buildCard({
              id: "subscribe-plus",
              name: "Plus",
              icon: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#9cc42b\" fill=\"none\"><path d=\"M13.5771 3.25586L13.501 3.25195L10.5029 3.25C10.3039 3.24987 10.1124 3.32906 9.97168 3.46973 9.8663 3.5751 9.79548 3.70855 9.7666 3.85254L9.75195 4V9.75195H4C3.61183 9.75195 3.29253 10.0468 3.25391 10.4248L3.25 10.502V13.5C3.25 13.9142 3.58579 14.25 4 14.25H9.75195V20.002C9.75195 20.4162 10.0877 20.752 10.502 20.752H13.5C13.9142 20.752 14.25 20.4162 14.25 20.002V14.25H20C20.4139 14.25 20.7495 13.9148 20.75 13.501L20.752 10.5029C20.7521 10.3039 20.6729 10.1124 20.5322 9.97168 20.3916 9.83103 20.2009 9.75195 20.002 9.75195H14.25V4.00195C14.25 3.61381 13.9551 3.29449 13.5771 3.25586Z\" fill=\"currentColor\" /></svg>",
              description: (0, a.A)("pricingPlusDesc"),
              features: [(0, a.A)("pricingAdFree"), (0, a.A)("pricingUnlimitedSaves"), (0, a.A)("pricingCreditsIncluded").replace("{number}", "80"), (0, a.A)("pricingConcurrent").replace("{number}", "1")],
              priceKey: "plus",
              disabled: N,
              isCurrent: T,
              buttonLabel: T ? (0, a.A)("currentPlan") : (0, a.A)("subscribeNow")
            });
            t.addEventListener("click", () => {
              if (!N) {
                this.close();
                if (c.Ny) {
                  new l.A("subscription", {
                    platform: r.Ay.product,
                    plan: "plus-yearly",
                    bounceSource: e,
                    checkoutMode: c.Ny.subscription ? "upgrade" : "checkout",
                    redirectUrl: this.options.redirectUrl
                  });
                } else {
                  new o.A();
                }
              }
            });
            U.append(t);
          }
          if (!C) {
            const t = this.buildCard({
              id: "subscribe-premium",
              name: "Premium",
              icon: "<svg width=\"24\" height=\"24\" color=\"#ecc800\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.5c-.578 0-1.116.33-1.408.877l-3.35 7.373L3.96 8.457c-.692-.49-1.604-.392-2.194.235a1.98 1.98 0 0 0-.425 1.932l2.951 9.148c.106.325.39.544.708.544h14c.319 0 .603-.218.708-.544l2.949-9.139.002-.008a1.98 1.98 0 0 0-.425-1.931c-.59-.628-1.502-.726-2.194-.237l-.003.002-3.278 3.291-3.348-7.368-.003-.005C13.116 3.834 12.58 3.5 12 3.5\" clip-rule=\"evenodd\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>",
              description: (0, a.A)("pricingPremiumDesc"),
              features: [(0, a.A)("pricingAdFree"), (0, a.A)("pricingUnlimitedSaves"), (0, a.A)("pricingCreditsIncluded").replace("{number}", "1,000"), (0, a.A)("pricingConcurrent").replace("{number}", "4"), (0, a.A)("pricingPrivateMode"), (0, a.A)("pricingBigLibrary")],
              priceKey: "premium",
              popular: true,
              disabled: P,
              isCurrent: k,
              buttonLabel: k ? (0, a.A)("currentPlan") : T ? (0, a.A)("upgradeNow") : (0, a.A)("subscribeNow")
            });
            t.addEventListener("click", () => {
              if (!P) {
                this.close();
                if (c.Ny) {
                  new l.A("subscription", {
                    platform: r.Ay.product,
                    plan: "premium-yearly",
                    bounceSource: e,
                    checkoutMode: c.Ny.subscription ? "upgrade" : "checkout",
                    redirectUrl: this.options.redirectUrl
                  });
                } else {
                  new o.A();
                }
              }
            });
            U.append(t);
          }
          const $ = this.buildCard({
            id: "subscribe-ultra",
            name: "Ultra",
            icon: v,
            description: (0, a.A)("pricingUltraDesc"),
            features: [`<a href="/pricing/" style="color:inherit">${(0, a.A)("pricingUnlimitedFast")}*</a>`, (0, a.A)("pricingCreditsIncluded").replace("{number}", "5,000-10,000"), (0, a.A)("pricingConcurrent").replace("{number}", "8"), (0, a.A)("pricingPrivateMode"), ...(S ? [] : [(0, a.A)("pricingMatureContent")]), (0, a.A)("pricingPriorityQueue"), (0, a.A)("pricingEverythingPremium")],
            priceKey: "ultra",
            popular: C,
            badgeText: (0, a.A)("pricingMostValue"),
            badgeStyle: "pink",
            disabled: false,
            isCurrent: false,
            buttonLabel: (0, a.A)("subscribeNow")
          });
          $.innerHTML = `<div class="pcard-view pcard-view-front">${$.innerHTML}</div>`;
          const R = (0, n.T)("div", {
            className: "pcard-view pcard-view-back"
          });
          R.innerHTML = `\n            <div class="pcard-back-close"><svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></div>\n            <div class="ultra-max-icons">${v}${v}${v}</div>\n            <div class="pname">${(0, a.A)("pricingMakeUltraMax")}</div>\n            <div class="pprice"><span class="amt" data-price-key="ultra-max"></span><span class="pmo">${(0, a.A)("pricingEachMonth")}</span></div>\n            <div class="ptag">${(0, a.A)("pricingUltraMaxDesc")}</div>\n            <div class="ultra-choice">\n                <div id="bounce-ultra-max" class="button large positive w-100">${(0, a.A)("pricingYesUltraMax")}</div>\n                <div class="ultra-choice-or"><span>${(0, a.A)("pricingOr")}</span></div>\n                <div id="bounce-ultra-regular" class="button large outline w-100">${(0, a.A)("pricingUltraRegular")}</div>\n            </div>\n        `;
          $.appendChild(R);
          $.addEventListener("click", e => {
            if (!$.classList.contains("show-back")) {
              if (!c.Ny) {
                this.close();
                new o.A();
                return;
              }
              e.stopPropagation();
              $.classList.add("show-back");
            }
          });
          if ((u = R.querySelector(".pcard-back-close")) !== null && u !== undefined) {
            u.addEventListener("click", e => {
              e.stopPropagation();
              $.classList.remove("show-back");
            });
          }
          if ((y = R.querySelector("#bounce-ultra-max")) !== null && y !== undefined) {
            y.addEventListener("click", t => {
              t.stopPropagation();
              this.close();
              new l.A("subscription", {
                platform: r.Ay.product,
                plan: "ultra-max-yearly",
                bounceSource: e,
                checkoutMode: c.Ny.subscription ? "upgrade" : "checkout",
                redirectUrl: this.options.redirectUrl
              });
            });
          }
          if ((f = R.querySelector("#bounce-ultra-regular")) !== null && f !== undefined) {
            f.addEventListener("click", t => {
              t.stopPropagation();
              this.close();
              new l.A("subscription", {
                platform: r.Ay.product,
                plan: "ultra-yearly",
                bounceSource: e,
                checkoutMode: c.Ny.subscription ? "upgrade" : "checkout",
                redirectUrl: this.options.redirectUrl
              });
            });
          }
          U.append($);
          this.sheet.append(U);
          const O = (0, n.T)("div", {
            className: "bounce-footer"
          });
          O.innerHTML = x ? `<span id="bounce-skip" class="bounce-skip">${(0, a.A)("bounceNoThanks")}</span>` : `${(0, a.A)("unsureWhichSubscriptionToGet", `<a href="/pricing" target="_blank">${(0, a.A)("pricingPage")}</a>`)} ${(0, a.A)("freeForEducation", `<a href="/learn/education/" class="anchor" target="_blank">${(0, a.A)("education")}</a>`)}`;
          this.sheet.append(O);
          this.backdrop.append(this.sheet);
          document.body.append(this.backdrop);
          document.documentElement.classList.add("overcast");
          requestAnimationFrame(() => {
            this.sheet.classList.add("ani");
            this.backdrop.classList.add("dim");
          });
          (0, d.a)(this.sheet, () => this.close());
          m().then(e => {
            const i = {};
            e.forEach(e => {
              i[e.productKey] = e;
            });
            this.sheet.querySelectorAll("[data-price-key]").forEach(e => {
              const t = i[e.dataset.priceKey || ""];
              if (t) {
                e.textContent = `${t.currencySymbol}${t.yearlyPrice}`;
              }
            });
            if (t === "save") {
              const e = i.plus;
              const t = this.sheet.querySelector("#bounce-pitch");
              if (e && t) {
                t.textContent = (0, a.A)(L.pitch, `${e.currencySymbol}${e.yearlyPrice}`);
              }
            }
          });
          if (t === "save" && !c.Ny && (b = document.getElementById("login-link")) !== null && b !== undefined) {
            b.addEventListener("click", () => {
              this.close();
              new o.A();
            });
          }
          if (x) {
            if ((w = document.getElementById("bounce-skip")) !== null && w !== undefined) {
              w.addEventListener("click", () => this.close());
            }
          }
          if (!x) {
            this.backdrop.addEventListener("click", e => {
              if (e.target === this.backdrop) {
                this.close();
              }
            });
          }
          const D = e => {
            if (e.key === "Escape") {
              if (x) {
                return;
              }
              this.close();
              document.removeEventListener("keydown", D);
            }
          };
          document.addEventListener("keydown", D);
        }
        buildCard(e) {
          const t = (0, n.T)("div", {
            id: e.id,
            className: "pcard" + (e.popular ? " pop" : "") + (e.disabled ? " disabled" : "")
          });
          let i = "";
          if (e.badgeText) {
            i += `<div class="pbadge${e.badgeStyle ? " " + e.badgeStyle : ""}">${e.badgeText}</div>`;
          } else if (e.popular) {
            i += `<div class="pbadge">${(0, a.A)("mostPopular")}</div>`;
          }
          i += `<div class="pname">${e.icon} ${e.name}</div>`;
          i += `<div class="ptag">${e.description}</div>`;
          i += `<div class="pprice"><span class="amt" data-price-key="${e.priceKey}"></span><span class="pmo">${(0, a.A)("pricingEachMonth")}</span></div>`;
          const o = e.isCurrent ? "button large black w-100 disabled" : "button large black w-100";
          i += `<div class="pcta"><div class="${o}">${e.buttonLabel}</div></div>`;
          i += "<hr class=\"pdiv\">";
          i += "<ul class=\"flist\">";
          e.features.forEach(e => {
            i += `<li>${e}</li>`;
          });
          i += "</ul>";
          t.innerHTML = i;
          return t;
        }
        close() {
          this.sheet.classList.remove("ani");
          this.backdrop.classList.remove("dim");
          document.documentElement.classList.remove("overcast");
          setTimeout(() => {
            this.backdrop.remove();
          }, 200);
        }
      }
    }
