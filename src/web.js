var web;
(() => {
  "use strict";

  var e = window.__webModules;
  const t = {};
  function i(n) {
    const a = t[n];
    if (a !== undefined) {
      return a.exports;
    }
    const o = t[n] = {
      id: n,
      loaded: false,
      exports: {}
    };
    e[n](o, o.exports, i);
    o.loaded = true;
    return o.exports;
  }
  i.m = e;
  (() => {
    const e = Symbol("webpack queues");
    const t = Symbol("webpack exports");
    const n = Symbol("webpack error");
    const a = e => {
      if (e?.d < 1) {
        e.d = 1;
        e.forEach(e => e.r--);
        e.forEach(e => e.r-- ? e.r++ : e());
      }
    };
    i.a = (i, o, s) => {
      let r;
      if (s) {
        (r = []).d = -1;
      }
      const c = new Set();
      const l = i.exports;
      let d;
      let p;
      let h;
      const u = new Promise((e, t) => {
        h = t;
        p = e;
      });
      u[t] = l;
      u[e] = e => {
        if (r) {
          e(r);
        }
        c.forEach(e);
        return u.catch(e => {});
      };
      i.exports = u;
      o(i => {
        let o;
        d = (i => i.map(i => {
          if (i !== null && typeof i == "object") {
            if (i[e]) {
              return i;
            }
            if (i.then) {
              const o = [];
              o.d = 0;
              i.then(e => {
                s[t] = e;
                a(o);
              }, e => {
                s[n] = e;
                a(o);
              });
              const s = {};
              s[e] = e => e(o);
              return s;
            }
          }
          const o = {
            [e]: e => {},
            [t]: i
          };
          return o;
        }))(i);
        const s = () => d.map(e => {
          if (e[n]) {
            throw e[n];
          }
          return e[t];
        });
        const l = new Promise(t => {
          o = () => t(s);
          o.r = 0;
          const i = e => e !== r && !c.has(e) && (c.add(e), e && !e.d && (o.r++, e.push(o)));
          d.forEach(t => t[e](i));
        });
        if (o.r) {
          return l;
        } else {
          return s();
        }
      }, e => {
        if (e) {
          h(u[n] = e);
        } else {
          p(l);
        }
        return a(r);
      });
      if (r?.d < 0) {
        r.d = 0;
      }
    };
  })();
  i.n = e => {
    const t = e && e.__esModule ? () => e.default : () => e;
    i.d(t, {
      a: t
    });
    return t;
  };
  (() => {
    const e = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
    let t;
    i.t = function (n, a) {
      if (a & 1) {
        n = this(n);
      }
      if (a & 8) {
        return n;
      }
      if (typeof n == "object" && n) {
        if (a & 4 && n.__esModule) {
          return n;
        }
        if (a & 16 && typeof n.then == "function") {
          return n;
        }
      }
      const o = Object.create(null);
      i.r(o);
      const s = {};
      t = t || [null, e({}), e([]), e(e)];
      for (var r = a & 2 && n; (typeof r == "object" || typeof r == "function") && !~t.indexOf(r); r = e(r)) {
        Object.getOwnPropertyNames(r).forEach(e => s[e] = () => n[e]);
      }
      s.default = () => n;
      i.d(o, s);
      return o;
    };
  })();
  i.d = (e, t) => {
    if (Array.isArray(t)) {
      for (var n = 0; n < t.length;) {
        var a = t[n++];
        var o = t[n++];
        if (i.o(e, a)) {
          if (o === 0) {
            n++;
          }
        } else if (o === 0) {
          Object.defineProperty(e, a, {
            enumerable: true,
            value: t[n++]
          });
        } else {
          Object.defineProperty(e, a, {
            enumerable: true,
            get: o
          });
        }
      }
    } else {
      for (var a in t) {
        if (i.o(t, a) && !i.o(e, a)) {
          Object.defineProperty(e, a, {
            enumerable: true,
            get: t[a]
          });
        }
      }
    }
  };
  i.f = {};
  i.e = e => Promise.all(Object.keys(i.f).reduce((t, n) => {
    i.f[n](e, t);
    return t;
  }, []));
  i.u = e => ({
    262: "native",
    273: "license.style",
    596: "preferences",
    946: "news",
    990: "tiff"
  }[e] || e) + ".js";
  i.miniCssF = e => {};
  i.hmd = e => {
    if (!(e = Object.create(e)).children) {
      e.children = [];
    }
    Object.defineProperty(e, "exports", {
      enumerable: true,
      set() {
        throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
      }
    });
    return e;
  };
  i.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t);
  (() => {
    const e = {};
    const t = "pixlr:";
    i.l = (n, a, o, s) => {
      if (e[n]) {
        e[n].push(a);
        return;
      }
      let r;
      let c;
      if (o !== undefined) {
        const e = document.getElementsByTagName("script");
        for (var l = 0; l < e.length; l++) {
          const i = e[l];
          if (i.getAttribute("src") == n || i.getAttribute("data-webpack") == t + o) {
            r = i;
            break;
          }
        }
      }
      if (!r) {
        c = true;
        r = document.createElement("script");
        r.charset = "utf-8";
        if (i.nc) {
          r.setAttribute("nonce", i.nc);
        }
        r.setAttribute("data-webpack", t + o);
        r.src = n;
      }
      e[n] = [a];
      const d = (t, i) => {
        r.onerror = r.onload = null;
        clearTimeout(p);
        const a = e[n];
        delete e[n];
        r.parentNode?.removeChild(r);
        a?.forEach(e => e(i));
        if (t) {
          return t(i);
        }
      };
      const p = setTimeout(d.bind(null, undefined, {
        type: "timeout",
        target: r
      }), 120000);
      r.onerror = d.bind(null, r.onerror);
      r.onload = d.bind(null, r.onload);
      if (c) {
        document.head.appendChild(r);
      }
    };
  })();
  i.r = e => {
    if (Symbol.toStringTag) {
      Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      });
    }
    Object.defineProperty(e, "__esModule", {
      value: true
    });
  };
  i.v = (e, t, n, a) => {
    var o = fetch(i.p + "" + n + ".module.wasm");
    var s = () => o.then(e => e.arrayBuffer()).then(e => WebAssembly.instantiate(e, a)).then(t => Object.assign(e, t.instance.exports));
    return o.then(t => typeof WebAssembly.instantiateStreaming == "function" ? WebAssembly.instantiateStreaming(t, a).then(t => Object.assign(e, t.instance.exports), e => {
      if (t.headers.get("Content-Type") !== "application/wasm") {
        console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);
        return s();
      }
      throw e;
    }) : s());
  };
  i.p = "assets/static/";
  (() => {
    const e = {
      651: 0
    };
    i.f.j = (t, n) => {
      let a = i.o(e, t) ? e[t] : undefined;
      if (a !== 0) {
        if (a) {
          n.push(a[2]);
        } else {
          const o = new Promise((i, n) => a = e[t] = [i, n]);
          n.push(a[2] = o);
          const s = i.p + i.u(t);
          const r = new Error();
          const c = n => {
            if (i.o(e, t) && (a = e[t], a !== 0 && (e[t] = undefined), a)) {
              const e = n && (n.type === "load" ? "missing" : n.type);
              const i = n && n.target && n.target.src;
              r.message = "Loading chunk " + t + " failed.\n(" + e + ": " + i + ")";
              r.name = "ChunkLoadError";
              r.type = e;
              r.request = i;
              r.event = n;
              a[1](r);
            }
          };
          i.l(s, c, "chunk-" + t, t);
        }
      }
    };
    const t = (t, n) => {
      let [a, o, s] = n;
      var r;
      var c;
      var l = 0;
      if (a.some(t => e[t] !== 0)) {
        for (r in o) {
          if (i.o(o, r)) {
            i.m[r] = o[r];
          }
        }
        if (s) {
          s(i);
        }
      }
      for (t && t(n); l < a.length; l++) {
        c = a[l];
        if (i.o(e, c) && e[c]) {
          e[c][0]();
        }
        e[c] = 0;
      }
    };
    const n = self.webpackChunkpixlr = self.webpackChunkpixlr || [];
    n.forEach(t.bind(null, 0));
    n.push = t.bind(null, n.push.bind(n));
  })();
  i.nc = undefined;
  let n = {};
  i.r(n);
  i.d(n, {
    CelcomDigi: () => y,
    Index: () => M,
    License: () => l,
    Maxis: () => g,
    Pricing: () => u,
    TelcoPricing: () => m
  });
  const a = "generation";
  function o(e, t) {
    (function (e) {
      try {
        sessionStorage.setItem(a, JSON.stringify(e));
      } catch (t) {}
    })(t);
    window.location.href = e;
  }
  var s = i(5283);
  var r = i(7775);
  var c = i(5833);
  class l {
    constructor() {
      i.e(273).then(i.bind(i, 4076));
      this.initializeIfFormExists();
      document.addEventListener("user-login", this.handleLogin.bind(this));
    }
    initializeIfFormExists() {
      if ((0, s.Ay)("redeem-input")) {
        this.setupRedeemForm();
      }
    }
    handleLogin(e) {
      console.log("user-login event received in license.ts", e.detail);
      if (e.detail) {
        this.createRedeemForm();
      }
    }
    createRedeemForm() {
      const e = document.getElementById("license-redeem");
      if (e) {
        e.replaceChildren((0, s.T)("div", {
          className: "redeem-form top-20"
        }, (0, s.T)("div", {
          className: "input-group"
        }, (0, s.T)("label", {
          htmlFor: "redeem-input"
        }, (0, r.A)("enterYourLicenseKeyHere")), (0, s.T)("input", {
          type: "text",
          id: "redeem-input",
          placeholder: (0, r.A)("enterYourLicenseKeyHere"),
          maxLength: 29,
          autocomplete: "off"
        })), (0, s.T)("button", {
          className: "button med solid top-16",
          id: "redeem-submit"
        }, (0, r.A)("licenseRedeem"))));
        this.setupRedeemForm();
      }
    }
    setupRedeemForm() {
      const e = (0, s.Ay)("redeem-input");
      const t = (0, s.Ay)("redeem-submit");
      if (e && t) {
        e.addEventListener("input", () => {
          if (e.value.length > 29) {
            e.value = e.value.substring(0, 29);
          }
          e.setCustomValidity("");
        });
        e.addEventListener("keydown", e => {
          if (e.key === "Enter") {
            t.click();
          }
        });
        t.addEventListener("click", async () => {
          if (t.classList.contains("working")) {
            return;
          }
          const i = e.value.trim();
          if (!i) {
            e.setCustomValidity((0, r.A)("commonCannotLeaveEmpty"));
            e.reportValidity();
            return;
          }
          e.setCustomValidity("");
          t.classList.add("working");
          const n = await fetch("/api/license/claim", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify({
              key: i
            })
          });
          const a = await n.json();
          t.classList.remove("working");
          if (!a.status) {
            (0, s.y8)("danger", a.message || (0, r.A)("invalidPromoCode"), 4);
            return;
          }
          new c.A(true, a.type === "subscription" ? "/?settings=subscription" : "/redeem").setContent(function (e) {
            const t = Number(e.credit) || 0;
            const i = e.type === "subscription";
            const n = i ? (0, r.A)("congratsYouNowHaveFullAccess") : (0, r.A)("congratsYouHaveAICredit");
            const a = t > 0 ? `<li>${(0, r.A)("pricingCreditsIncluded").replace("{number}", t.toLocaleString())}</li>` : "";
            const o = i ? `\n            <li>${(0, r.A)("pricingAdFree")}</li>\n            <li>${(0, r.A)("pricingUnlimitedSaves")}</li>\n            ${a}\n            <li>${(0, r.A)("pricingPrivateMode")}</li>\n            <li>${(0, r.A)("pricingBigLibrary")}</li>\n        ` : a;
            return `\n        <div id="redeemed-success">\n            <div class="redeem-detail">\n                <h2>${(0, r.A)("successfullyRedeemedWelcomeProductName").replace("{product}", e.product || "")}</h2>\n                <p class="top-10"><b>${n}</b></p>\n                ${o ? `<p class="top-20"><b>${(0, r.A)("whatYouGet")}</b></p><ul class="redeem-benefits">${o}</ul>` : ""}\n\n                <h5 class="heavy top-20">${(0, r.A)("pixlrMobileApps")}</h5>\n                <div class="redeem-apps">\n                    <div class="mobile-app-item"><img src="assets/images/general/mobile-x-icon.png" width="32" height="32" alt="Pixlr Express">Pixlr Express</div>\n                    <div class="mobile-app-item"><img src="assets/images/general/mobile-remove-bg-icon.png" width="32" height="32" alt="Remove Background by Pixlr">Remove Background by Pixlr</div>\n                    <div class="mobile-app-item"><img src="assets/images/general/mobile-stories-icon.png" width="32" height="32" alt="Stories by Pixlr">Stories by Pixlr</div>\n                    <div class="mobile-app-item"><img src="assets/images/general/mobile-img-gen-icon.png" width="32" height="32" alt="AI Image Generator">AI Image Generator</div>\n                    <div class="mobile-app-item"><img src="assets/images/general/mobile-face-flip-icon.png" width="32" height="32" alt="FaceFlip">FaceFlip</div>\n                </div>\n\n                <a class="button top-20" href="/editor/">${(0, r.A)("startEditing")}</a>\n            </div>\n            <div class="redeem-card">\n                <img src="assets/images/license/pixlr-redeem-success.png" alt="pixlr redeem license success">\n            </div>\n        </div>\n    `;
          }(a));
        });
      }
    }
  }
  var d = i(5432);
  var p = i(1168);
  var h = i(9754);
  class u {
    constructor() {
      var e;
      this.PRICING = (0, s.Ay)("config_pricing") && (0, s.Ay)("config_pricing").innerHTML !== "" ? JSON.parse((0, s.Ay)("config_pricing").innerHTML) : "";
      this.toggleInterval = () => {
        const e = (0, s.Ay)("payment-interval");
        if (!e) {
          return;
        }
        const t = e.checked;
        (0, s.Ay)("pricing-plans").classList.toggle("monthley", t);
        (0, s.Ay)("pricing-plans").classList.toggle("yearly", !t);
      };
      this.showCheckout = e => {
        const i = e.currentTarget;
        const n = i.dataset.plan;
        const a = (0, s.Ay)("payment-interval").checked;
        const o = i.dataset.promocode ?? "";
        const r = i.dataset.mode === "upgrade";
        const c = (n ?? "premium") + "-" + (a ? "monthly" : "yearly");
        if (d.Ny) {
          new h.A("subscription", {
            platform: "web",
            checkoutMode: r ? "upgrade" : "checkout",
            plan: c,
            code: o
          });
        } else {
          new p.A();
        }
      };
      document.addEventListener("user-login", () => location.reload());
      if ((e = (0, s.Ay)("payment-interval")) !== null && e !== undefined) {
        e.addEventListener("change", () => this.toggleInterval());
      }
      document.querySelectorAll("[data-toggle='checkout']").forEach(e => e.addEventListener("click", this.showCheckout, false));
      (0, s.Ay)("pricing-checkout-credits").addEventListener("click", () => {
        if (d.Ny) {
          new h.A("credits", {
            platform: "web"
          });
        } else {
          new p.A();
        }
      });
      if (d.Ny?.subscription) {
        const e = (0, s.Ay)("payment-interval");
        const t = d.Ny.subscriptionCode.includes("yearly");
        if (e) {
          e.checked = !t;
        }
        this.toggleInterval();
        if (t && e) {
          e.disabled = true;
        }
      }
    }
  }
  class m {
    constructor(e) {
      this.PRICING = (0, s.Ay)("config_pricing") && (0, s.Ay)("config_pricing").innerHTML !== "" ? JSON.parse((0, s.Ay)("config_pricing").innerHTML) : "";
      this.eligibleForTrail = d.Ny === undefined || d.Ny.eligibleForTrail;
      this.requestForMobileNumber = true;
      this.requestPayment = async () => {};
      this.showRequestMobileNumberPage = async () => {
        var e;
        if (!this.requestForMobileNumber) {
          return await this.requestPayment();
        }
        const t = (0, s.T)("div", {
          className: "wrap center"
        }, (0, s.T)("p", {}, (0, s.T)("strong", {}, this.planSelected.name), (0, s.T)("br"), (0, s.T)("strong", {}, `RM ${this.planSelected.price} ${(0, r.A)("CelcomDigiPerMonth")}`), (0, s.T)("br"), (0, s.T)("span", {
          className: "text-dim"
        }, (0, r.A)("CelcomDigiToContinuePleaseEnterYour"))), (0, s.T)("div", {
          className: "input-group"
        }, (0, s.T)("input", {
          type: "tel",
          id: `${this.telco}-msisdn`
        }), (0, s.T)("span", {
          className: "text-dim top-10"
        }, (0, r.A)("CelcomDigiPleaseKindlyTakeNoteThat"))), (0, s.T)("button", {
          id: `${this.telco}-confirm`,
          className: "button large positive w-50 top-20",
          disabled: true
        }, (0, r.A)("CelcomDigiConfirm")));
        (0, s.Ay)("telco-checkout-pricing").style.display = "none";
        if ((e = (0, s.Ay)("telco-checkout-msisdn")) !== null && e !== undefined) {
          e.appendChild(t);
        }
        const i = (0, s.Ay)(`${this.telco}-msisdn`);
        const n = (0, s.Ay)(`${this.telco}-confirm`);
        i.addEventListener("input", e => {
          if (e.target.value.trim().length > 0) {
            n.disabled = false;
          } else {
            n.disabled = true;
          }
        });
        n.addEventListener("click", async () => {
          const e = i.value.trim();
          if (i) {
            this.msisdn = e;
            n.classList.add("working");
            await this.requestPayment();
            n.classList.remove("working");
          } else {
            (0, s.y8)("danger", "Please enter your CelcomDigi Mobile Number.", 5);
          }
        });
      };
      this.telco = e;
      document.querySelectorAll("[data-toggle='checkout']").forEach(e => e.addEventListener("click", e => this.selectPlan(e), false));
      this.initCapabilities();
    }
    selectPlan(e) {
      this.showRequestMobileNumberPage();
    }
    initCapabilities() {
      const e = document.querySelector(".capabilities-nav");
      if (!e) {
        return;
      }
      const t = e.querySelectorAll("button[data-tab]");
      const i = document.querySelectorAll(".capabilities-panel[data-panel]");
      t.forEach(e => {
        e.addEventListener("click", () => {
          t.forEach(e => e.classList.remove("active"));
          i.forEach(e => e.classList.remove("active"));
          e.classList.add("active");
          const n = e.getAttribute("data-tab");
          const a = document.querySelector(`.capabilities-panel[data-panel="${n}"]`);
          if (a) {
            a.classList.add("active");
          }
        });
      });
    }
  }
  class y extends m {
    constructor(e = null) {
      super("celcomdigi");
      this.requestPayment = async () => {
        const e = await fetch("/api/checkout/celcomdigi/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            planId: this.planSelected.id,
            planType: this.planSelected.type,
            msisdn: this.msisdn,
            token: this.planSelected.token
          })
        });
        const {
          data: t,
          status: i,
          message: n
        } = await e.json();
        if (i) {
          window.location.href = t.paymentUrl;
        } else {
          (0, s.y8)("danger", n ?? "Failed to initiate payment. Please try again later.", 5);
        }
      };
      this.requestForMobileNumber = true;
    }
    async selectPlan(e) {
      const t = e.currentTarget.dataset.plan;
      const i = await fetch(`/api/checkout/celcomdigi/?code=${t}`);
      const {
        status: n,
        plan: a
      } = await i.json();
      if (!n) {
        return (0, s.y8)("danger", "Error getting the plan. Please try again.", 10);
      }
      if (a) {
        this.planSelected = a;
        if (d.Ny) {
          if (d.Ny.subscription && a.type === "subscription") {
            window.location.replace("/?settings=subscription");
            return;
          }
          super.selectPlan(e);
        } else {
          new p.A({
            callback: encodeURIComponent(encodeURIComponent(window.location.href))
          });
        }
      } else {
        (0, s.y8)("danger", "No plan selected. Please go back to the checkout page to select a plan.", 10);
      }
    }
  }
  class g extends m {
    constructor(e = null) {
      super("maxis");
      this.requestPayment = async () => {
        const e = await fetch("/api/checkout/maxis/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            planId: this.planSelected.id,
            planType: this.planSelected.type,
            token: this.planSelected.token
          })
        });
        const {
          data: t,
          status: i,
          message: n
        } = await e.json();
        if (i) {
          if (typeof gtag != "undefined") {
            gtag("event", "maxis_payment_redirect", {
              provider: "maxis",
              plan_name: this.planSelected.name,
              plan_type: this.planSelected.type,
              utm_source: localStorage.getItem("utm_source") || "maxis_direct",
              utm_medium: localStorage.getItem("utm_medium") || "",
              utm_campaign: localStorage.getItem("utm_campaign") || ""
            });
          }
          window.location.href = t.paymentUrl;
        } else {
          (0, s.y8)("danger", n ?? "Failed to initiate payment. Please try again later.", 5);
        }
      };
      this.requestForMobileNumber = false;
    }
    async selectPlan(e) {
      const t = e.currentTarget.dataset.plan;
      const i = await fetch(`/api/checkout/maxis/?code=${t}`);
      const {
        status: n,
        plan: a
      } = await i.json();
      if (!n) {
        return (0, s.y8)("danger", "Error getting the plan. Please try again.", 10);
      }
      if (a) {
        this.planSelected = a;
        if (d.Ny) {
          if (d.Ny.subscription && a.type === "subscription") {
            window.location.replace("/?settings=subscription");
            return;
          }
          super.selectPlan(e);
        } else {
          new p.A({
            callback: encodeURIComponent(encodeURIComponent(window.location.href))
          });
        }
      } else {
        (0, s.y8)("danger", "No plan selected. Please go back to the checkout page to select a plan.", 10);
      }
    }
  }
  var v = i(2443);
  var f = i(4947);
  var b = i(6361);
  var w = i(5699);
  var x = i(7135);
  class A {
    constructor(e, t = "right") {
      let i;
      this.position = (e = this.flow) => {
        let t = this.parent.getBoundingClientRect();
        const i = document.documentElement.clientWidth;
        const n = document.documentElement.clientHeight;
        const a = this.drop.offsetWidth;
        const o = this.drop.offsetHeight;
        this.drop.classList.remove("up", "down", "left", "right");
        if (e === "up" || i < 650) {
          let e = w.qE(t.right - a + 15, 30, i - a - 30);
          let n = t.top - o;
          if (n < 30) {
            n = t.bottom + 5;
          }
          this.drop.style.left = e + "px";
          this.drop.style.top = n + "px";
          this.drop.classList.add("up");
        } else {
          let s;
          let r;
          switch (e) {
            case "right":
              s = t.right - 5;
              r = t.top - 24;
              break;
            case "left":
              s = t.left - a + this.parent.offsetWidth / 2 + 38;
              r = t.top - o;
              break;
            default:
              s = t.left + this.parent.offsetWidth / 2 - 36;
              r = t.bottom + 5;
          }
          s = w.qE(s, 30, i - a - 30);
          r = w.qE(r, 30, n - o - 30);
          this.drop.style.left = s + "px";
          this.drop.style.top = r + "px";
          this.drop.classList.add(e);
        }
      };
      this.setContent = (...e) => {
        if (e[0] instanceof HTMLElement) {
          this.content.append(...e);
        } else {
          this.content.innerHTML += e[0];
        }
        this.position();
        requestAnimationFrame(() => {
          if (this.drop) {
            this.position();
          }
        });
      };
      this.keyDown = e => {
        if (e.key === "Enter" || e.key === "Escape") {
          this.cleanUp();
        }
      };
      this.superClean = () => {
        var e;
        document.removeEventListener("keydown", this.keyDown, false);
        this.drop.remove();
        this.drop = null;
        if ((e = this.modal) !== null && e !== undefined) {
          e.remove();
        }
        this.modal = null;
      };
      this.cleanUp = () => {
        this.superClean();
      };
      this.flow = t;
      this.parent = e;
      this.mid = w.r0();
      this.content = (0, s.T)("div", {
        className: "content"
      });
      this.drop = (0, s.T)("div", {
        className: "drop"
      }, this.content);
      this.modal = (0, s.T)("div", {
        id: "modal-" + this.mid,
        className: "modal"
      }, this.drop);
      this.modal.addEventListener("mousedown", e => {
        i = e.target;
      });
      this.modal.addEventListener("mouseup", e => {
        if (e.target === i && e.target === this.modal) {
          this.cleanUp();
        }
      });
      document.body.appendChild(this.modal);
      document.addEventListener("keydown", this.keyDown, false);
      this.position(t);
    }
  }
  function T(e) {
    const t = Math.floor(e / 60);
    const i = Math.floor(e % 60);
    return t + ":" + (i < 10 ? "0" : "") + i;
  }
  const k = {
    speech: {
      played: "#44a39a",
      dim: "#ffffff44"
    },
    music: {
      played: "#cc6137",
      dim: "#ffffff44"
    }
  };
  function C(e) {
    return "items" in e;
  }
  function S(e) {
    let t;
    let i;
    const n = C(e) && !!e.direct;
    if (C(e)) {
      t = e.items;
      i = e.currentIndex;
    } else {
      t = [{
        type: e.type,
        downloadName: e.downloadName,
        resource: {
          type: e.type,
          url: e.src
        }
      }];
      i = 0;
    }
    if (!t.length) {
      return;
    }
    let a = null;
    let c = false;
    const l = new Set();
    const h = (0, s.T)("div", {
      id: "modal-lightbox",
      className: "modal"
    });
    const u = (0, s.T)("div", {
      id: "lightbox"
    });
    h.appendChild(u);
    const m = (0, s.T)("div", {
      id: "lightbox-close",
      onclick: N
    }, (0, s.T)("img", {
      src: "assets/images/icon/close.svg",
      className: "close"
    }));
    const y = (0, s.T)("div", {
      id: "lightbox-main"
    });
    const g = (0, s.T)("div", {
      id: "lightbox-info"
    });
    function v() {
      var e;
      var h;
      const m = t[i];
      if (!m) {
        return;
      }
      if (m._id) {
        const e = "/community/" + m._id;
        if (n || c) {
          history.replaceState({
            lightbox: true
          }, "", e);
        } else {
          history.pushState({
            lightbox: true
          }, "", e);
          c = true;
        }
        if (!l.has(m._id)) {
          l.add(m._id);
          fetch(`/api/aif/generation/${m._id}/view`, {
            method: "POST",
            keepalive: true
          }).catch(() => {});
        }
      }
      const v = new b.$U(m);
      const C = v.isVideo;
      const S = v.isAudio;
      const P = v.url;
      y.innerHTML = "";
      if (S) {
        const e = m.capability === "text-to-music" ? "music" : "speech";
        a = function (e, t, i = "speech") {
          const n = k[i] || k.speech;
          const a = n.dim;
          const o = n.played;
          const r = (0, s.T)("div", {
            className: "audio-player"
          });
          const c = (0, s.T)("span", {
            className: "audio-player-time"
          }, "0:00 / 0:00");
          const l = (0, s.T)("div", {
            className: "audio-player-wave-wrap"
          });
          const d = (0, s.T)("canvas", {
            className: "audio-player-wave",
            width: 600,
            height: 200
          });
          l.append(c, d);
          const p = (0, s.T)("div", {
            className: `audio-ambient ${i}`
          });
          const h = (0, s.T)("div", {
            className: "audio-player-play"
          });
          h.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"white\"><path d=\"M8 5v14l11-7z\"/></svg>";
          r.append(l, h);
          t.append(p, r);
          const u = new Audio(e);
          u.preload = "auto";
          let m = null;
          let y = false;
          let g = 0;
          function v(e) {
            const t = d.getContext("2d");
            if (!t || !m) {
              return;
            }
            const i = 600;
            const n = Math.ceil(m.length / i);
            const s = Math.floor(e * i);
            t.clearRect(0, 0, i, 200);
            const r = [];
            let c = 0;
            for (let a = 0; a < i; a++) {
              let e = 0;
              let t = 0;
              for (let o = 0; o < n; o++) {
                const i = a * n + o;
                if (i >= m.length) {
                  break;
                }
                e += m[i] * m[i];
                t++;
              }
              const i = Math.sqrt(e / (t || 1));
              r.push(i);
              if (i > c) {
                c = i;
              }
            }
            for (let l = 0; l < i; l++) {
              const e = r[l] / (c || 1);
              const i = Math.pow(e, 1.8);
              const n = Math.max(1, i * 100 * 0.9);
              t.fillStyle = l <= s ? o : a;
              t.fillRect(l, 100 - n, 1, n * 2);
            }
            if (e > 0 && e < 1) {
              t.fillStyle = getComputedStyle(document.documentElement).getPropertyValue("--accent-color").trim() || "#0099cc";
              t.fillRect(s, 0, 2, 200);
            }
          }
          function f() {
            if (y) {
              v(u.duration ? u.currentTime / u.duration : 0);
              c.textContent = T(u.currentTime) + " / " + T(u.duration || 0);
              g = requestAnimationFrame(f);
            }
          }
          fetch(e).then(e => e.arrayBuffer()).then(e => new AudioContext().decodeAudioData(e)).then(e => {
            m = e.getChannelData(0);
            v(0);
          }).catch(() => {});
          h.onclick = () => {
            if (y) {
              u.pause();
              y = false;
              cancelAnimationFrame(g);
              h.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"white\"><path d=\"M8 5v14l11-7z\"/></svg>";
            } else {
              u.play();
              y = true;
              f();
              h.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"white\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"/><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"/></svg>";
            }
          };
          u.addEventListener("ended", () => {
            y = false;
            cancelAnimationFrame(g);
            h.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"white\"><path d=\"M8 5v14l11-7z\"/></svg>";
            v(1);
            c.textContent = T(u.duration) + " / " + T(u.duration);
          });
          u.addEventListener("loadedmetadata", () => {
            c.textContent = "0:00 / " + T(u.duration);
            u.play().then(() => {
              y = true;
              h.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"28\" height=\"28\" fill=\"white\"><rect x=\"6\" y=\"4\" width=\"4\" height=\"16\"/><rect x=\"14\" y=\"4\" width=\"4\" height=\"16\"/></svg>";
              f();
            }).catch(() => {});
          });
          const b = e => {
            const t = d.getBoundingClientRect();
            const i = Math.max(0, Math.min(e.clientX - t.left, t.width)) / t.width;
            if (u.duration) {
              u.currentTime = i * u.duration;
              v(i);
              c.textContent = T(u.currentTime) + " / " + T(u.duration);
            }
          };
          let w = false;
          d.addEventListener("mousedown", e => {
            w = true;
            b(e);
          });
          document.addEventListener("mousemove", e => {
            if (w) {
              b(e);
            }
          });
          document.addEventListener("mouseup", () => {
            w = false;
          });
          d.style.cursor = "pointer";
          return u;
        }(P, y, e);
      } else if (C) {
        const e = (0, s.T)("video", {
          id: "lightbox-video",
          src: P,
          controls: true,
          autoplay: true,
          loop: true,
          muted: true
        });
        e.playsInline = true;
        const t = (0, s.T)("canvas", {
          className: "ambient"
        });
        const i = () => {
          const e = (0, s.T)("video", {
            src: P,
            muted: true,
            crossOrigin: "anonymous"
          });
          e.preload = "auto";
          e.addEventListener("loadeddata", () => {
            e.currentTime = 1;
          });
          e.addEventListener("seeked", () => {
            t.width = e.videoWidth;
            t.height = e.videoHeight;
            t.getContext("2d").drawImage(e, 0, 0);
            e.remove();
          }, {
            once: true
          });
        };
        const n = v.thumb;
        if (n) {
          const e = new Image();
          e.crossOrigin = "anonymous";
          e.onload = () => {
            t.width = e.width;
            t.height = e.height;
            t.getContext("2d").drawImage(e, 0, 0);
          };
          e.onerror = i;
          e.src = n;
        } else {
          i();
        }
        y.append(t, e);
      } else {
        y.append((0, s.T)("img", {
          id: "lightbox-image",
          src: P,
          crossOrigin: "anonymous"
        }), (0, s.T)("img", {
          id: "lightbox-image-ambient",
          src: P,
          className: "ambient",
          crossOrigin: "anonymous"
        }));
      }
      g.innerHTML = "";
      const L = (0, s.T)("div", {
        id: "lightbox-icons",
        className: "buttons"
      });
      if (m._id) {
        const e = (0, s.T)("img", {
          id: "lightbox-like-img",
          src: m.liked ? "assets/images/icon/heart-filled.svg" : "assets/images/icon/heart-outline.svg",
          width: 20,
          height: 20
        });
        const t = (0, s.T)("span", {
          className: "like-burst"
        });
        const i = (0, s.T)("div", {
          id: "lightbox-like",
          className: "icon-button like" + (m.liked ? " liked" : ""),
          tooltip: m.liked ? (0, r.A)("commonUnlike") : (0, r.A)("commonLike"),
          flow: "down",
          onclick: async () => {
            if (!d.Ny) {
              new p.A();
              return;
            }
            const n = m.liked;
            m.liked = !n;
            i.setAttribute("tooltip", m.liked ? (0, r.A)("commonUnlike") : (0, r.A)("commonLike"));
            if (n) {
              e.src = "assets/images/icon/heart-outline.svg";
              if (m.likes > 0) {
                m.likes--;
              }
              window.dispatchEvent(new CustomEvent("pixlr:like-changed", {
                detail: {
                  id: m._id,
                  liked: false
                }
              }));
              await fetch(`/api/aif/generation/${m._id}/unlike`, {
                method: "POST"
              }).catch(() => {});
            } else {
              t.classList.add("run");
              e.src = "assets/images/icon/heart-filled.svg";
              m.likes = (m.likes || 0) + 1;
              window.dispatchEvent(new CustomEvent("pixlr:like-changed", {
                detail: {
                  id: m._id,
                  liked: true
                }
              }));
              await fetch(`/api/aif/generation/${m._id}/like`, {
                method: "POST"
              }).catch(() => {});
              setTimeout(() => t.classList.remove("run"), 1200);
            }
          }
        }, e, t);
        L.append(i);
      }
      if (P) {
        const t = S ? "mp3" : C ? "mp4" : "webp";
        const i = m.downloadName || (m._id ? `pixlr-${m._id}.${t}` : "download");
        L.append((0, s.T)("div", {
          className: "icon-button",
          tooltip: (0, r.A)("commonDownload"),
          flow: "down",
          onpointerdown: async () => {
            (0, x.A)("generator", "download");
            try {
              const e = await fetch(P);
              const t = await e.blob();
              const n = URL.createObjectURL(t);
              const a = document.createElement("a");
              a.download = i;
              a.href = n;
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(n);
            } catch (e) {
              window.open(P, "_blank");
            }
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/download.svg",
          width: 18,
          height: 18,
          style: "width:18px;height:18px"
        })));
      }
      if (m._id && d.Ny && (m.userId === d.Ny.id || d.Ny.isAdmin)) {
        const e = m.personal || false;
        const t = (0, s.T)("img", {
          src: e ? "assets/images/icon/locked.svg" : "assets/images/icon/public.svg",
          width: 18,
          height: 18,
          style: "width:18px;height:18px"
        });
        L.append((0, s.T)("div", {
          className: "icon-button",
          flow: "down",
          tooltip: e ? (0, r.A)("commonMakePublic") : (0, r.A)("commonMakePrivate"),
          onclick: async () => {
            const e = await fetch(`/api/aif/generation/${m._id}/personal`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                personal: !m.personal
              })
            }).catch(e => {
              console.error("Error toggling personal response:", e);
            });
            if (e && e.ok) {
              m.personal = !m.personal;
              t.src = m.personal ? "assets/images/icon/locked.svg" : "assets/images/icon/public.svg";
            }
            if (e && !e.ok) {
              const t = (await e.json().catch(() => ({}))).message || (0, r.A)("commonServerError");
              (0, s.y8)("danger", t);
            }
          }
        }, t));
      }
      if (m._id && d.Ny && (m.userId === d.Ny.id || d.Ny.isAdmin)) {
        L.append((0, s.T)("div", {
          className: "icon-button",
          tooltip: (0, r.A)("commonDelete"),
          flow: "down",
          onclick: async () => {
            await fetch(`/api/aif/generation/${m._id}`, {
              method: "DELETE"
            }).catch(() => {});
            N();
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/trash.svg",
          width: 18,
          height: 18,
          style: "width:18px;height:18px"
        })));
      }
      if (m._id && (!d.Ny || m.userId !== d.Ny.id) && !d.Ny?.isAdmin) {
        const e = (0, s.T)("div", {
          className: "icon-button",
          tooltip: (0, r.A)("commonReport"),
          flow: "down",
          onclick: () => {
            if (!d.Ny) {
              new p.A();
              return;
            }
            const t = [{
              key: "reportNudity",
              label: (0, r.A)("commonReportNudity")
            }, {
              key: "reportViolence",
              label: (0, r.A)("commonReportViolence")
            }, {
              key: "reportSelfHarm",
              label: (0, r.A)("commonReportSelfHarm")
            }, {
              key: "reportHateSpeech",
              label: (0, r.A)("commonReportHateSpeech")
            }, {
              key: "reportDepictsChild",
              label: (0, r.A)("commonReportDepictsChild")
            }, {
              key: "reportOther",
              label: (0, r.A)("commonReportOther")
            }];
            const i = new A(e, "down");
            const n = (0, s.T)("div", {
              className: "drop-label"
            });
            n.textContent = (0, r.A)("commonReportReason");
            const a = (0, s.T)("ul", {
              className: "option-list compact"
            });
            for (const e of t) {
              const t = (0, s.T)("li");
              t.textContent = e.label;
              t.addEventListener("click", async () => {
                i.cleanUp();
                await fetch(`/api/aif/generation/${m._id}/report`, {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    reason: e.key
                  })
                }).catch(() => {});
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, r.A)("reportThankyou")
                }));
              });
              a.append(t);
            }
            i.setContent(n, a);
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/report.svg",
          width: 20,
          height: 20
        }));
        L.append(e);
      }
      g.append(L);
      if (m.userId) {
        const e = (0, s.T)("div", {
          className: "lightbox-creator top-20"
        });
        const t = (0, s.T)("div", {
          className: "lightbox-creator-avatar avatar"
        });
        t.innerHTML = "<svg viewBox=\"0 0 24 24\" width=\"20\" height=\"20\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"><path d=\"M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z\"/><path d=\"M14.75 9.5a2.75 2.75 0 1 1-5.5 0 2.75 2.75 0 0 1 5.5 0ZM5.5 19l.56-.98a5 5 0 0 1 4.342-2.52h3.196a5 5 0 0 1 4.341 2.52l.56.98\"/></svg>";
        const i = (0, s.T)("span", {
          className: "lightbox-creator-name"
        });
        const n = (0, s.T)("span", {
          className: "lightbox-creator-time"
        }, m.createdAt ? w.XP(new Date(m.createdAt)) : "");
        e.append(t, (0, s.T)("div", {
          className: "lightbox-creator-info"
        }, i, n));
        e.style.cursor = "pointer";
        g.append(e);
        const a = (n, a, o) => {
          i.textContent = n;
          if (a) {
            t.innerHTML = "";
            t.append((0, s.T)("img", {
              src: a,
              width: 32,
              height: 32
            }));
          }
          e.onclick = () => {
            location.href = "/community/@" + o;
          };
        };
        if (m.userName) {
          a(m.userName, m.userAvatar || "", m.userHandle || m.userId);
        } else {
          fetch(`/api/community/user/${m.userId}`).then(e => e.json()).then(e => {
            if (e.status && e.data) {
              a(e.data.nickname || e.data.name || "Anonymous", e.data.avatar || "", e.data.nickname || e.data._id);
            }
          }).catch(() => {});
        }
      }
      if (m.prompt) {
        const e = (0, s.T)("p", {
          className: "lightbox-prompt-text"
        }, m.prompt);
        const t = (0, s.T)("div", {
          className: "lightbox-prompt"
        });
        t.append((0, s.T)("h2", {
          style: "margin-top:30px;"
        }, (0, r.A)("imageGeneratorPrompt")), e);
        if (m.prompt.length > 200) {
          e.classList.add("collapsed");
          const i = (0, s.T)("span", {
            className: "lightbox-prompt-toggle"
          }, (0, r.A)("commonViewAll") || "View all");
          i.onclick = () => {
            const t = e.classList.toggle("collapsed");
            i.textContent = t ? (0, r.A)("commonViewAll") || "View all" : (0, r.A)("commonViewLess") || "View less";
          };
          t.append(i);
        }
        g.append(t);
      }
      const M = (0, s.T)("div", {
        className: "tag-list top-50"
      });
      if (m.modelName) {
        M.append((0, s.T)("span", {}, m.modelName));
      }
      if (S) ;else if (C) {
        if (m.aspect_ratio) {
          M.append((0, s.T)("span", {}, m.aspect_ratio));
        }
        if (m.resolution) {
          M.append((0, s.T)("span", {}, m.resolution));
        }
        if (m.duration) {
          M.append((0, s.T)("span", {}, m.duration + "s"));
        }
      } else {
        if (m.width && m.height) {
          M.append((0, s.T)("span", {}, `${m.width} x ${m.height} px`));
          const e = (t, i) => i <= 0 ? t : e(i, t % i);
          const t = e(m.width, m.height);
          if (!m.aspect_ratio) {
            M.append((0, s.T)("span", {}, `${m.width / t}:${m.height / t}`));
          }
        }
        if (m.aspect_ratio) {
          M.append((0, s.T)("span", {}, m.aspect_ratio));
        }
      }
      if (m.style) {
        M.append((0, s.T)("span", {}, m.style.replace(/-/g, " ")));
      }
      if (m.likes > 1) {
        M.append((0, s.T)("span", {}, `${m.likes} ${(0, r.A)("like")}`));
      }
      if (M.children.length) {
        g.append(M);
      }
      const E = (0, s.T)("div", {
        className: "buttons top-30",
        style: "justify-content:flex-start;flex-wrap:wrap;"
      });
      if (m.prompt) {
        const e = S ? "/audio-generator/" : C ? "/video-generator/" : "/image-generator/";
        const t = window.location.pathname.replace(/\/$/, "") === e.replace(/\/$/, "");
        const i = {
          prompt: m.prompt
        };
        if (m.modelName) {
          i.model = m.modelName;
        }
        if (m.style) {
          i.style = m.style;
        }
        if (!C && !S && !!P) {
          E.append((0, s.T)("div", {
            className: "button outline",
            onclick: () => {
              if (t) {
                document.dispatchEvent(new CustomEvent("lightbox-apply", {
                  detail: Object.assign(Object.assign({}, i), {
                    remixImage: P
                  })
                }));
                N();
              } else {
                o(e, Object.assign(Object.assign({}, i), {
                  remixImage: P
                }));
              }
            }
          }, (0, s.T)("img", {
            src: "assets/images/icon/remix.svg",
            width: 18,
            height: 18
          }), ` ${(0, r.A)("imageGeneratorRemix")}`));
        }
        if (C && P) {
          E.append((0, s.T)("div", {
            className: "button outline",
            onclick: () => {
              if (t) {
                document.dispatchEvent(new CustomEvent("lightbox-apply", {
                  detail: Object.assign(Object.assign({}, i), {
                    remixVideo: P
                  })
                }));
                N();
              } else {
                o(e, Object.assign(Object.assign({}, i), {
                  remixVideo: P
                }));
              }
            }
          }, (0, s.T)("img", {
            src: "assets/images/icon/remix.svg",
            width: 18,
            height: 18
          }), ` ${(0, r.A)("videoGeneratorRemix")}`));
        }
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            if (t) {
              document.dispatchEvent(new CustomEvent("lightbox-apply", {
                detail: i
              }));
              N();
            } else {
              o(e, i);
            }
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/prompt.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("imageGeneratorUsePrompt")}`));
      }
      if (d.Ny && m._id && m.userId === d.Ny.id) {
        const e = (0, s.T)("div", {
          className: "button outline",
          onclick: async () => {
            if (!e.classList.contains("disabled")) {
              e.classList.add("disabled");
              try {
                const t = await fetch("/api/aif/templates/from-generation", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                    generationId: m._id
                  })
                }).then(e => e.json());
                if (t.status) {
                  (0, s.y8)("success", "templateSaved");
                  e.innerHTML = "";
                  e.append((0, s.T)("img", {
                    src: "assets/images/icon/check.svg",
                    width: 18,
                    height: 18,
                    onerror: "this.src=\"assets/images/tool/ai.svg\""
                  }), ` ${(0, r.A)("addedAsTemplate")}`);
                } else {
                  (0, s.y8)("danger", t.message || "commonServerError");
                  e.classList.remove("disabled");
                }
              } catch (t) {
                (0, s.y8)("danger", (t == null ? undefined : t.message) || "commonServerError");
                e.classList.remove("disabled");
              }
            }
          }
        });
        e.append((0, s.T)("img", {
          src: "assets/images/tool/ai.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("addAsTemplate")}`);
        E.append(e);
      }
      if (d.Ny?.isAdmin && m._id) {
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            window.open(`/admin/generator-templates/create?from=${m._id}`, "_blank", "noopener");
          }
        }, (0, s.T)("img", {
          src: "assets/images/tool/ai.svg",
          width: 18,
          height: 18
        }), " Admin Template"));
      }
      if (!!P && !C && !S) {
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            location.href = "/express/?file=" + encodeURIComponent(P);
          }
        }, (0, s.T)("img", {
          src: "assets/images/tool/fill.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("imageGeneratorEdit")}`));
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            location.href = "/video-generator/?ref=" + encodeURIComponent(P);
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/play.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("commonCreateVideo")}`));
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            location.href = "/face-swap/?file=" + encodeURIComponent(P);
          }
        }, (0, s.T)("img", {
          src: "assets/images/tool/face-swap.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("imageGeneratorFaceSwap")}`));
      }
      if (P && S) {
        const e = m.capability === "text-to-music" || m.capability === "music-generation";
        const t = e ? "Create Music Video" : "Create UGC Video";
        const i = e ? "music" : "speech";
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            location.href = "/video-generator/?audio=" + encodeURIComponent(P) + "&audioType=" + i;
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/video.svg",
          width: 18,
          height: 18
        }), ` ${t}`));
      }
      if (E.children.length) {
        g.append(E);
      }
      if (t.length > 1) {
        if ((e = u.querySelector(".pop-nav-prev")) !== null && e !== undefined) {
          e.remove();
        }
        if ((h = u.querySelector(".pop-nav-next")) !== null && h !== undefined) {
          h.remove();
        }
        if (S) {
          const e = y.querySelector(".audio-player");
          const n = e == null ? undefined : e.querySelector(".audio-player-play");
          if (e && n) {
            const a = (0, s.T)("div", {
              className: "audio-nav-row"
            });
            if (i > 0) {
              const e = (0, s.T)("div", {
                className: "lightbox-nav prev pop-nav-prev",
                onclick: () => f(-1)
              });
              e.innerHTML = "<svg viewBox=\"0 0 24 24\"><polyline points=\"15 18 9 12 15 6\"/></svg>";
              a.append(e);
            }
            n.remove();
            a.append(n);
            if (i < t.length - 1) {
              const e = (0, s.T)("div", {
                className: "lightbox-nav next pop-nav-next",
                onclick: () => f(1)
              });
              e.innerHTML = "<svg viewBox=\"0 0 24 24\"><polyline points=\"9 6 15 12 9 18\"/></svg>";
              a.append(e);
            }
            e.append(a);
          }
        } else {
          if (i > 0) {
            const e = (0, s.T)("div", {
              className: "lightbox-nav prev pop-nav-prev",
              onclick: () => f(-1)
            });
            e.innerHTML = "<svg viewBox=\"0 0 24 24\"><polyline points=\"15 18 9 12 15 6\"/></svg>";
            y.append(e);
          }
          if (i < t.length - 1) {
            const e = (0, s.T)("div", {
              className: "lightbox-nav next pop-nav-next",
              onclick: () => f(1)
            });
            e.innerHTML = "<svg viewBox=\"0 0 24 24\"><polyline points=\"9 6 15 12 9 18\"/></svg>";
            y.append(e);
          }
        }
      }
    }
    function f(e) {
      const n = i + e;
      if (!(n < 0) && !(n >= t.length)) {
        if (a) {
          a.pause();
          a = null;
        }
        i = n;
        v();
      }
    }
    function S() {
      if (a) {
        a.pause();
        a = null;
      }
      document.removeEventListener("keydown", L);
      window.removeEventListener("popstate", P);
      document.documentElement.classList.remove("overcast");
      h.remove();
    }
    function N() {
      S();
      if (c) {
        history.back();
      } else if (n) {
        if (document.referrer && document.referrer.startsWith(location.origin)) {
          history.back();
        }
      }
    }
    function P() {
      S();
    }
    function L(e) {
      if (e.key === "Escape") {
        N();
      } else if (e.key === "ArrowLeft") {
        f(-1);
      } else if (e.key === "ArrowRight") {
        f(1);
      }
    }
    u.append(m, y, g);
    document.body.appendChild(h);
    document.documentElement.classList.add("overcast");
    document.addEventListener("keydown", L);
    window.addEventListener("popstate", P);
    v();
  }
  function N(e, t, i) {
    const n = (0, s.T)("div", {
      className: "recent-actions"
    });
    if (t === "recent" && e._id) {
      n.append((0, s.T)("div", {
        tooltip: "Delete",
        flow: "down",
        onclick: t => {
          var n;
          t.stopPropagation();
          const a = t.currentTarget.closest(".recent-item");
          if (a) {
            a.remove();
          }
          (0, b.mi)(e._id).catch(() => {});
          if ((n = i == null ? undefined : i.onDelete) !== null && n !== undefined) {
            n.call(i);
          }
        }
      }, (0, s.T)("img", {
        src: "assets/images/icon/trash.svg"
      })));
      const t = new b.$U(e).url;
      if (t) {
        const i = e.type === "audio" ? "mp3" : e.type === "video" ? "mp4" : "png";
        const a = `pixlr-${e.type || "image"}-${e._id}.${i}`;
        n.append((0, s.T)("div", {
          tooltip: "Download",
          flow: "down",
          onclick: async e => {
            e.stopPropagation();
            try {
              const e = await fetch(t);
              const i = await e.blob();
              const n = URL.createObjectURL(i);
              (0, s.T)("a", {
                href: n,
                download: a
              }).click();
              setTimeout(() => URL.revokeObjectURL(n), 1000);
            } catch (i) {
              window.open(t, "_blank");
            }
          }
        }, (0, s.T)("img", {
          src: "assets/images/icon/download.svg"
        })));
      }
    }
    if (e._id) {
      n.append(function (e) {
        let t = !!e.liked;
        const i = (0, s.T)("img", {
          src: t ? "assets/images/icon/heart-filled.svg" : "assets/images/icon/heart-outline.svg"
        });
        const n = (0, s.T)("span", {
          className: "like-burst"
        });
        const a = (a, s) => {
          t = a;
          e.liked = a;
          o.setAttribute("tooltip", a ? (0, r.A)("commonUnlike") : (0, r.A)("commonLike"));
          if (a) {
            i.src = "assets/images/icon/heart-filled.svg";
            if (s) {
              n.classList.add("run");
              setTimeout(() => n.classList.remove("run"), 1200);
            }
          } else {
            i.src = "assets/images/icon/heart-outline.svg";
          }
        };
        const o = (0, s.T)("div", {
          className: "like",
          tooltip: t ? (0, r.A)("commonUnlike") : (0, r.A)("commonLike"),
          flow: "down",
          onclick: i => {
            i.stopPropagation();
            if (d.Ny) {
              a(!t, true);
              fetch(`/api/aif/generation/${e._id}/${t ? "like" : "unlike"}`, {
                method: "POST"
              }).catch(() => {});
              window.dispatchEvent(new CustomEvent("pixlr:like-changed", {
                detail: {
                  id: e._id,
                  liked: t
                }
              }));
            } else {
              new p.A();
            }
          }
        }, i, n);
        window.addEventListener("pixlr:like-changed", i => {
          const n = i.detail;
          if (n && n.id === e._id && !!n.liked !== t) {
            a(!!n.liked, !!n.liked);
          }
        });
        return o;
      }(e));
    }
    return n;
  }
  function P(e, t) {
    const c = new b.$U(e);
    if (!c.exists) {
      return (0, s.T)("div");
    }
    const l = c.isVideo;
    const d = c.isAudio;
    const p = function (e, t) {
      const i = new b.$U(e);
      if (!i.exists) {
        return (0, s.T)("div");
      }
      const n = i.isVideo;
      if (i.isAudio) {
        const n = (0, s.T)("div", {
          className: "audio-community-card"
        });
        const a = (0, s.T)("canvas", {
          className: "audio-waveform-mini",
          width: 200,
          height: t === "recent" ? 60 : 80
        });
        n.appendChild(a);
        const o = (0, s.T)("div", {
          className: "audio-community-play"
        });
        o.innerHTML = "<svg class=\"audio-play-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.5 11.2v1.6c0 1.52 0 2.28.456 2.586s1.079-.032 2.326-.712l1.468-.8C15.25 13.056 16 12.647 16 12s-.75-1.056-2.25-1.874l-1.469-.8c-1.246-.68-1.87-1.02-2.325-.712C9.5 8.92 9.5 9.68 9.5 11.2Z\" fill=\"currentColor\"/></svg><div class=\"sound-bars\"><span></span><span></span><span></span><span></span></div>";
        n.appendChild(o);
        const r = (0, s.T)("p", {
          className: "audio-card-prompt"
        }, e.prompt ? e.prompt.substring(0, 80) : "Audio");
        n.appendChild(r);
        const c = e.capability === "text-to-music" || e.capability === "music-generation" ? "#7c5cfc" : "#4db6ac";
        const l = e.waveform;
        if (l && l.length) {
          (0, b._0)(a, l, c);
        } else {
          (0, b.Xr)(i.url).then(t => {
            (0, b._0)(a, t, c);
            if (e._id) {
              (0, b.Vr)(e._id, t);
            }
          }).catch(() => {});
        }
        return n;
      }
      if (n) {
        const n = {
          src: i.url,
          muted: true,
          loop: true,
          crossOrigin: "anonymous"
        };
        if (e.width) {
          n.width = e.width;
        }
        if (e.height) {
          n.height = e.height;
        }
        const a = (0, s.T)("video", n);
        a.playsInline = true;
        a.preload = t === "community" ? "auto" : "metadata";
        a.addEventListener("mouseenter", () => a.play().catch(() => {}));
        a.addEventListener("mouseleave", () => {
          a.pause();
          a.currentTime = 0;
        });
        const o = (e, t) => {
          if (!e || !t) {
            return;
          }
          const i = a.closest(".recent-item, .card");
          if (i) {
            i.style.aspectRatio = `${e}/${t}`;
            i.dataset.masonryRatio = String(t / e);
          }
        };
        a.addEventListener("loadedmetadata", () => o(a.videoWidth, a.videoHeight), {
          once: true
        });
        if (i.thumb && i.thumb !== i.url) {
          const t = new Image();
          t.onload = () => {
            a.poster = i.thumb;
            o(t.naturalWidth, t.naturalHeight);
          };
          t.onerror = () => {
            if (e._id) {
              a.preload = "auto";
            }
          };
          t.src = i.thumb;
        } else if (e._id) {
          a.preload = "auto";
        }
        return a;
      }
      const a = {
        src: i.thumb,
        alt: e.prompt ? e.prompt.substring(0, 100) : ""
      };
      if (e.width) {
        a.width = e.width;
      }
      if (e.height) {
        a.height = e.height;
      }
      const o = (0, s.T)("img", a);
      o.loading = "lazy";
      o.onerror = () => {
        o.onerror = null;
        if (o.src !== i.url) {
          o.src = i.url;
        }
      };
      return o;
    }(e, t.context);
    const h = t.context === "community" ? "card" : "recent-item";
    const u = t.grid ? `${h} grid` : h;
    let m = "";
    if (!t.grid) {
      let t = e.width || e.config?.width;
      let o = e.height || e.config?.height;
      if (!t || !o) {
        const i = (e.aspect_ratio || e.config?.aspect_ratio || "").split(":").map(Number);
        if (i.length === 2 && i[0] && i[1]) {
          t = i[0];
          o = i[1];
        }
      }
      m = t && o ? `aspect-ratio:${t}/${o}` : "";
    }
    const y = (0, s.T)("div", {
      className: u,
      style: m,
      onclick: () => {
        if (t.linkToCommunity && e._id) {
          location.href = "/community/" + e._id;
        } else if (t.lightboxItems && t.lightboxIndex !== undefined) {
          S({
            items: t.lightboxItems,
            currentIndex: t.lightboxIndex
          });
        } else {
          const t = d ? "mp3" : l ? "mp4" : "webp";
          S({
            items: [Object.assign(Object.assign({}, e), {
              type: e.type || "image",
              downloadName: `pixlr-${e.type || "image"}-${e._id}.${t}`
            })],
            currentIndex: 0
          });
        }
      }
    }, p);
    if (l) {
      y.insertAdjacentHTML("beforeend", "<svg class=\"play-badge\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"32\" height=\"32\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.5 11.2v1.6c0 1.52 0 2.28.456 2.586s1.079-.032 2.326-.712l1.468-.8C15.25 13.056 16 12.647 16 12s-.75-1.056-2.25-1.874l-1.469-.8c-1.246-.68-1.87-1.02-2.325-.712C9.5 8.92 9.5 9.68 9.5 11.2Z\" fill=\"#fff\"/></svg>");
    }
    if (e.personal) {
      y.appendChild((0, s.T)("div", {
        className: "private-badge",
        tooltip: (0, r.A)("commonPrivate"),
        flow: "right"
      }, (0, s.T)("img", {
        src: "assets/images/icon/locked.svg",
        width: 14,
        height: 14
      })));
    }
    const g = N(e, t.context, t.callbacks);
    y.appendChild(g);
    if (!l && !d && t.context === "recent" && !!c.url) {
      y.appendChild((0, s.T)("div", {
        className: "recent-play",
        tooltip: "Create video",
        flow: "right",
        onclick: e => {
          e.stopPropagation();
          window.location.href = "/video-generator/?ref=" + encodeURIComponent(c.url);
        }
      }, (0, s.T)("img", {
        src: "assets/images/icon/play.svg"
      })));
    }
    if (d && t.context === "recent" && c.url) {
      const t = e.capability === "text-to-music" || e.capability === "music-generation" ? "music" : "speech";
      y.appendChild((0, s.T)("div", {
        className: "recent-play",
        tooltip: "Create video",
        flow: "right",
        onclick: e => {
          e.stopPropagation();
          window.location.href = "/video-generator/?audio=" + encodeURIComponent(c.url) + "&audioType=" + t;
        }
      }, (0, s.T)("img", {
        src: "assets/images/icon/play.svg"
      })));
    }
    if (t.callbacks?.extraActions) {
      for (const s of t.callbacks.extraActions) {
        y.appendChild(s);
      }
    }
    return y;
  }
  window.openPreferences = async e => {
    const {
      openPreferences: t
    } = await Promise.all([i.e(21), i.e(334), i.e(596)]).then(i.bind(i, 2733));
    window.openPreferences = t;
    t(e);
  };
  window.openNews = async e => {
    var n;
    var a;
    if (!e) {
      try {
        const i = await fetch("/api/news?target=web");
        const n = await i.json();
        e = (n == null ? undefined : n.data)?.docs || [];
      } catch (o) {
        e = [];
      }
    }
    if (!e || !e.length) {
      return;
    }
    new (0, (await i.e(946).then(i.bind(i, 3013))).default)(e);
    if ((a = (n = document.getElementById("head-news")) === null || n === undefined ? undefined : n.querySelector(".unread-dot")) !== null && a !== undefined) {
      a.remove();
    }
  };
  const L = new URLSearchParams(window.location.search).get("settings");
  if (L) {
    window.openPreferences(L);
    const e = new URL(window.location.href);
    e.searchParams.delete("settings");
    history.replaceState(null, "", e.toString());
  }
  Promise.resolve().then(i.bind(i, 2443)).then(e => {
    var t;
    if ((t = e.prefetchProducts) === null || t === undefined) {
      return undefined;
    } else {
      return t.call(e);
    }
  }).catch(() => {});
  (async () => {
    const a = new URLSearchParams(window.location.search);
    if ((0, s.Ay)("flash-toast")) {
      (0, s.y8)((0, s.Ay)("flash-toast").dataset.type, (0, s.Ay)("flash-toast").dataset.message);
    }
    if (a.get("promo") !== "" && a.get("src") === "GR") {
      const e = new Date();
      (0, s.TV)("promo-code", a.get("promo"), {
        expires: new Date(e.setDate(e.getDate() + 1))
      });
      new v.default("web", "premium");
    }
    document.addEventListener("user-login", e => {
      if (e.detail && e.detail.subscriptionAccess === "free") {
        if (location.pathname.includes("/pricing") || location.pathname.includes("/checkout/maxis") || location.pathname.includes("/checkout/celcomdigi")) {
          return;
        }
        const e = document.referrer || "";
        if (e.includes("/pricing") || e.includes("/checkout/maxis") || e.includes("/checkout/celcomdigi")) {
          return;
        }
        new v.default("post-login", "welcome");
      }
    });
    if (a.get("entry") && a.get("callback_url")) {
      new p.A({
        callback: a.get("callback_url"),
        email: a.get("email") ?? ""
      });
    }
    if (a.get("token") && !d.Ny) {
      const e = await (0, f.In)(`/auth/verify-reset-token/${a.get("token")}/`);
      if (e.status) {
        new p.A({
          callback: encodeURIComponent(window.location.origin),
          view: "resetPassword",
          email: e.data.email
        }).auth.loadForm("resetPassword", {
          email: e.data.email,
          code: e.data.code
        });
      } else {
        (0, s.y8)("danger", e.message, 5);
      }
    }
    if (a.get("policy_reset") === "1" && a.get("policy_reset_token")) {
      const e = a.get("policy_reset_token");
      const i = a.get("email") ?? "";
      const n = await (0, f.In)(`/api/auth/policy-reset/validate/${e}`);
      if (n.status) {
        new p.A({
          callback: encodeURIComponent(window.location.origin),
          view: "policyReset",
          email: n.email || i
        }).auth.loadForm("policyReset", {
          email: n.email || i,
          token: e
        });
      } else {
        (0, s.y8)("danger", n.message || "Invalid or expired link", 5);
      }
    }
    if (a.get("policy_reset_error")) {
      const e = a.get("policy_reset_error");
      const t = {
        invalid_link: "Invalid reset link. Please request a new one.",
        link_expired: "This reset link has expired. Please request a new one.",
        server_error: "An error occurred. Please try again later."
      };
      (0, s.y8)("danger", t[e] || "An error occurred", 5);
    }
    const o = a.get("utm_source");
    const r = a.get("utm_medium");
    const c = a.get("utm_campaign");
    if (o) {
      localStorage.setItem("utm_source", o);
      gtag("set", "campaign_source", o);
    }
    if (r) {
      localStorage.setItem("utm_medium", r);
      gtag("set", "campaign_medium", r);
    }
    if (c) {
      localStorage.setItem("utm_campaign", c);
      gtag("set", "campaign_name", c);
    }
    [...document.getElementsByClassName("show-auth")].forEach(e => {
      e.addEventListener("click", async function (t) {
        t.preventDefault();
        const n = encodeURIComponent(e.href ?? window.location.href);
        new p.A({
          callback: n
        });
      });
    });
    if (a.get("ckt")) {
      if (d.Ny) {
        if (d.Ny.subscription) {
          return window.location.replace("/");
        }
        const e = a.get("ckt-plan") ?? "premium-yearly";
        new h.A("subscription", {
          plan: e,
          platform: "web",
          code: a.get("ckt-promo") ?? ""
        });
      } else {
        new p.A({
          callback: encodeURIComponent(window.location.href)
        });
      }
    }
  })();
  class M {
    constructor() {
      this.generationMode = "image";
      this.initFileDropper();
      this.initPromptInput();
      this.initGenerationToggle();
      this.initCapabilities();
      this.initDashboard();
    }
    initFileDropper() {
      const e = document.getElementById("hero-file-dropper");
      if (e) {
        e.addEventListener("click", () => {
          const e = document.createElement("input");
          e.type = "file";
          e.accept = "image/*";
          e.onchange = () => {
            if (e.files?.[0]) {
              this.openInExpress(e.files[0]);
            }
          };
          e.click();
        });
        e.addEventListener("dragover", t => {
          t.preventDefault();
          e.classList.add("dragover");
        });
        e.addEventListener("dragleave", () => {
          e.classList.remove("dragover");
        });
        e.addEventListener("drop", t => {
          t.preventDefault();
          e.classList.remove("dragover");
          const a = t.dataTransfer?.files?.[0];
          if (a) {
            this.openInExpress(a);
          }
        });
      }
    }
    openInExpress(e) {
      const t = new FileReader();
      t.onload = () => {
        try {
          sessionStorage.setItem("express-open-file", t.result);
          sessionStorage.setItem("express-open-name", e.name);
        } catch (i) {}
        window.location.href = "/express/";
      };
      t.readAsDataURL(e);
    }
    initPromptInput() {
      const e = document.getElementById("hero-prompt-input");
      const t = document.getElementById("hero-generate-button");
      if (!e || !t) {
        return;
      }
      const i = () => {
        const t = e.value.trim();
        if (!t) {
          return;
        }
        o({
          image: "/image-generator/",
          video: "/video-generator/",
          audio: "/audio-generator/"
        }[this.generationMode] || "/image-generator/", {
          prompt: t
        });
      };
      t.addEventListener("click", i);
      e.addEventListener("keydown", e => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          i();
        }
      });
    }
    initGenerationToggle() {
      const e = document.querySelectorAll("#hero-generation-toggle .switch-option");
      e.forEach(t => {
        t.addEventListener("click", () => {
          e.forEach(e => e.classList.remove("active"));
          t.classList.add("active");
          this.generationMode = t.dataset.mode || "image";
        });
      });
    }
    initCapabilities() {
      const e = document.querySelector(".capabilities-nav");
      if (!e) {
        return;
      }
      const t = e.querySelectorAll("button[data-tab]");
      const i = document.querySelectorAll(".capabilities-panel[data-panel]");
      t.forEach(e => {
        e.addEventListener("click", () => {
          t.forEach(e => e.classList.remove("active"));
          i.forEach(e => e.classList.remove("active"));
          e.classList.add("active");
          const n = e.getAttribute("data-tab");
          const a = document.querySelector(`.capabilities-panel[data-panel="${n}"]`);
          if (a) {
            a.classList.add("active");
          }
        });
      });
    }
    initDashboard() {
      if (document.getElementById("dashboard-section")) {
        this.loadRecentEdits();
        this.loadRecentGenerations();
      }
    }
    async loadRecentEdits() {
      const e = document.getElementById("recent-edits-grid");
      if (e) {
        try {
          const {
            DocumentMeta: t
          } = await i.e(334).then(i.bind(i, 2334));
          const n = (await t.history()).slice(0, 12);
          if (n.length === 0) {
            e.innerHTML = "<div class=\"dashboard-empty\">No recent edits yet. Open the editor to get started.</div>";
            return;
          }
          for (const i of n) {
            const t = document.createElement("div");
            t.className = "dashboard-thumb";
            t.addEventListener("click", () => this.showAppSheet(i.id));
            const n = document.createElement("span");
            n.textContent = i.name || "Untitled";
            i.getThumbnail().then(e => {
              if (e) {
                e.alt = i.name || "Recent edit";
                t.prepend(e);
              }
            });
            t.appendChild(n);
            e.appendChild(t);
          }
        } catch (t) {
          e.innerHTML = "<div class=\"dashboard-empty\">No recent edits yet.</div>";
        }
      }
    }
    async loadRecentGenerations() {
      const t = document.getElementById("recent-generations-grid");
      if (t) {
        try {
          const i = await (0, f.In)("/api/aif/generations?excludeCapability=instruct-to-image");
          if (!(i == null ? undefined : i.status) || !i.data?.length) {
            t.innerHTML = "<div class=\"dashboard-empty\">No recent generations yet. Try the AI Image Generator.</div>";
            return;
          }
          const n = i.data.filter(e => new b.$U(e).exists).slice(0, 12);
          if (n.length === 0) {
            t.innerHTML = "<div class=\"dashboard-empty\">No recent generations yet.</div>";
            return;
          }
          for (const e of n) {
            const i = P(e, {
              context: "recent",
              grid: true,
              linkToCommunity: true
            });
            t.appendChild(i);
          }
        } catch (i) {
          t.innerHTML = "<div class=\"dashboard-empty\">No recent generations yet.</div>";
        }
      }
    }
    showAppSheet(e) {
      if (window.innerWidth <= 825) {
        sessionStorage.setItem("open-history-doc", e);
        window.location.href = "/express/";
        return;
      }
      const t = (0, s.T)("div", {
        className: "modal"
      });
      const i = (0, s.T)("div", {
        className: "sheet"
      });
      i.style.maxWidth = "320px";
      i.style.minHeight = "auto";
      const n = () => {
        i.classList.remove("ani");
        t.classList.remove("dim");
        setTimeout(() => t.remove(), 200);
      };
      const a = (0, s.T)("div", {
        className: "sheet-close",
        onclick: n
      });
      a.innerHTML = "<svg viewBox=\"0 0 24 24\" stroke=\"currentColor\" fill=\"none\" stroke-width=\"2\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>";
      const o = (0, s.T)("div", {
        className: "sheet-content"
      });
      o.innerHTML = "\n            <h3 style=\"text-align:center;padding:20px 20px 10px\">Open in</h3>\n            <div style=\"display:flex;justify-content:center;gap:20px;padding:10px 20px 30px\">\n                <a href=\"/express/\" class=\"gbox\" style=\"display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px 30px;text-decoration:none;color:var(--text-color);font-weight:600;font-size:0.85rem\">\n                    <img src=\"assets/images/express-icon.svg\" width=\"48\" height=\"48\" alt=\"Pixlr Express\">\n                    Express\n                </a>\n                <a href=\"/editor/\" class=\"gbox\" style=\"display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px 30px;text-decoration:none;color:var(--text-color);font-weight:600;font-size:0.85rem\">\n                    <img src=\"assets/images/editor-icon.svg\" width=\"48\" height=\"48\" alt=\"Pixlr Editor\">\n                    Editor\n                </a>\n            </div>\n        ";
      o.querySelectorAll("a").forEach(t => {
        t.addEventListener("click", () => {
          sessionStorage.setItem("open-history-doc", e);
        });
      });
      i.append(a, o);
      t.append(i);
      t.addEventListener("click", e => {
        if (e.target === t) {
          n();
        }
      });
      document.body.appendChild(t);
      requestAnimationFrame(() => {
        i.classList.add("ani");
        t.classList.add("dim");
      });
    }
  }
  web = n;
})();