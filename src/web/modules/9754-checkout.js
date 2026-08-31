window.__webModules[9754] = function (e, t, i) {
      i.d(t, {
        A: () => u
      });
      var n = i(5283);
      var a = i(7775);
      var o = i(8484);
      var s = i(4947);
      var r = i(7135);
      var c = i(9671);
      var l = i(5432);
      var d = i(5833);
      var p = i(2443);
      class h extends d.A {
        constructor(e, t = {}) {
          if ((0, n.lR)("RequestFrom", "")) {
            return;
          }
          super(false);
          this.checkoutOptions = {
            checkoutMode: "checkout",
            showMonthly: true
          };
          this.currency = "USD";
          this.currencySymbol = "$";
          this.paymentData = {
            currency: "USD",
            checkoutMethod: this.checkoutOptions.checkoutMode,
            billingAddress: {},
            tax: {
              isReverseCharge: false
            }
          };
          this.planBalance = 0;
          this.selectedPayment = "paypal";
          this.tax = {
            status: false,
            type: "GST",
            isReverseCharge: false
          };
          this.genCredits = 0;
          this._creditPlans = [];
          this.encryptedCardData = {
            isValid: false,
            paymentMethod: {}
          };
          this.hasUserLocationOverride = false;
          this._forcePaypal = false;
          this.verifiedVATNumbers = [];
          this.loadSeatsUI = () => {
            var e;
            this.optionUI.append(o.m3());
            this.optionUI.append(o.qV());
            this.optionUI.append(o.YA(l.Ny.billingAddress || {}));
            this.summaryUI.append(o.z(this.checkoutType, this.productName));
            if ((0, n.Ay)("paypal-payment-option")) {
              (0, n.Ay)("paypal-payment-option").style.display = "none";
            }
            if ((e = (0, n.Ay)("chckout-loading")) !== null && e !== undefined) {
              e.remove();
            }
            this.loadEventListener();
          };
          this.loadCreditPickerUI = () => {
            if (this.summaryUI) {
              this.summaryUI.style.display = "none";
            }
            if (this.optionUI) {
              this.optionUI.style.width = "100%";
              this.optionUI.style.overflow = "visible";
              this.optionUI.style.padding = "16px";
            }
            this.dialog.style.maxWidth = "420px";
            this.dialog.style.height = "auto";
            this.dialog.style.minHeight = "unset";
            s.kP().then(e => {
              var t;
              var a;
              if ((t = (0, n.Ay)("chckout-loading")) !== null && t !== undefined) {
                t.remove();
              }
              if (!e.status || !e.data?.length) {
                this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #666;\">No credit plans available at the moment.</p>";
                return;
              }
              this._creditPlans = e.data;
              const s = this.currency || "USD";
              this.optionUI.append(o.iZ(e.data, s));
              document.querySelectorAll(".credit-option").forEach(e => {
                e.addEventListener("click", async () => {
                  const t = e.dataset.value;
                  const i = e.dataset.planCode || e.dataset.plancode;
                  if (!i) {
                    return;
                  }
                  const {
                    provider: n
                  } = await this.checkStripeAvailability();
                  if (n === "stripe") {
                    this.dialog.id = "payment-method-picker";
                    this.dialog.style.maxWidth = "420px";
                    this.content.style.flex = "1";
                    this.showStripeVATPrompt(this.checkoutOptions.plan || "premium-yearly", {
                      credits: t,
                      creditPlanCode: i
                    });
                    return;
                  } else if (n === "paypal") {
                    this.genCredits = Number(t);
                    this.splanId = i;
                    this._forcePaypal = true;
                    this.dialog.id = "chckout";
                    this.dialog.style.maxWidth = "";
                    this.content.innerHTML = "";
                    this.initializeTraditionalCheckout();
                    return;
                  } else {
                    this.showPaymentMethodPicker({
                      credits: t,
                      creditPlanCode: i
                    });
                    return;
                  }
                });
              });
              if ((a = this.optionUI.querySelector(".subscribe-link")) !== null && a !== undefined) {
                a.addEventListener("click", () => {
                  this.cleanUp();
                  new p.default("credits-checkout", "credit");
                });
              }
            }).catch(e => {
              var t;
              if ((t = (0, n.Ay)("chckout-loading")) !== null && t !== undefined) {
                t.remove();
              }
              console.error("[Checkout] Failed to load credit plans:", e);
              this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #cc0000;\">Failed to load credit plans. Please try again.</p>";
            });
          };
          this.loadCreditsUI = () => {
            s.kP().then(e => {
              var t;
              var a;
              var s;
              if ((t = (0, n.Ay)("chckout-loading")) !== null && t !== undefined) {
                t.remove();
              }
              if (!e.status || !e.data?.length) {
                this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #666;\">No credit plans available at the moment.</p>";
                return;
              }
              this._creditPlans = e.data;
              const r = this.currency || "USD";
              const c = (0, n.T)("div", {
                id: "wrapper-payment-method",
                className: "kort",
                style: "border-radius: 8px; padding: 16px; display: flex; flex-direction: row; align-items: center; gap: 8px;"
              }, (0, n.T)("img", {
                src: "assets/images/checkout/icon/card.svg",
                width: 24,
                height: 24
              }), (0, n.T)("span", {
                className: "fs-16 fw-7"
              }, "Payment Method: Paypal"));
              this.optionUI.append(c);
              this.selectedPayment = "paypal";
              this.optionUI.append(o.iZ(e.data, r));
              if ((a = this.optionUI.querySelector(".subscribe-link")) !== null && a !== undefined) {
                a.addEventListener("click", () => {
                  this.cleanUp();
                  new p.default("credits-checkout", "credit");
                });
              }
              this.optionUI.append(o.YA(l.Ny.billingAddress || {}));
              this.summaryUI.append(o.z(this.checkoutType, this.productName));
              let d = null;
              if (this.genCredits) {
                d = document.querySelector(`.credit-option[data-value="${this.genCredits}"]`);
              }
              d ||= document.querySelector(".credit-option");
              if (d) {
                this.selectCredit(d, true);
              }
              if ((s = (0, n.Ay)("chckout-loading")) !== null && s !== undefined) {
                s.remove();
              }
              this.loadEventListener();
            }).catch(e => {
              var t;
              if ((t = (0, n.Ay)("chckout-loading")) !== null && t !== undefined) {
                t.remove();
              }
              console.error("[Checkout] Failed to load credit plans:", e);
              this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #cc0000;\">Failed to load credit plans. Please try again.</p>";
            });
          };
          this.loadEventListener = () => {
            var e;
            var t;
            var i;
            var a;
            var o;
            var s;
            var r;
            var c;
            if ((e = (0, n.Ay)("back-chckout")) !== null && e !== undefined) {
              e.addEventListener("click", this.backPreviousPopup);
            }
            document.querySelectorAll("input[name=\"payment\"][type=\"radio\"]").forEach(e => {
              e.addEventListener("change", () => this.setPaymentMethod(e));
            });
            document.querySelectorAll(".plan-options").forEach(e => {
              e.addEventListener("click", () => this.setPlan(e));
            });
            if ((t = (0, n.Ay)("promocode-submit")) !== null && t !== undefined) {
              t.addEventListener("click", () => this.applyPromoCode());
            }
            if ((i = (0, n.Ay)("promocode-input")) !== null && i !== undefined) {
              i.addEventListener("input", this.promoCodeOnInput);
            }
            if ((a = (0, n.Ay)("validate-vat")) !== null && a !== undefined) {
              a.addEventListener("click", () => this.validateVATNumber());
            }
            if ((o = (0, n.Ay)("vat-select")) !== null && o !== undefined) {
              o.addEventListener("change", () => this.handleVATSelect());
            }
            document.querySelectorAll(".seat-option").forEach(e => {
              e.addEventListener("click", () => this.selectSeats(e));
              if (e.querySelector("input")) {
                e.querySelector("input").addEventListener("keyup", () => this.selectSeats(e));
              }
            });
            document.querySelectorAll(".credit-option").forEach(e => {
              e.addEventListener("click", () => this.selectCredit(e));
            });
            document.querySelectorAll("#billing-form input").forEach(e => {
              this.paymentData.billingAddress[e.id] = e.value;
              e.addEventListener("keyup", () => {
                const t = e.id.replace("checkout", "").charAt(0).toLowerCase() + e.id.replace("checkout", "").slice(1);
                this.paymentData.billingAddress[t] = e.value;
                if (e.id === "vatNumber") {
                  const t = (0, n.Ay)("vat-select");
                  if (t && !e.readOnly) {
                    t.value = "__new__";
                  }
                  this.setIsReverseCharge();
                }
                if (e.id === "checkoutState") {
                  this.paymentData.billingAddress.stateOrProvince = e.value;
                }
                this.isReadyToPay();
              });
            });
            this.paymentData.billingAddress = Object.assign({}, l.Ny.billingAddress || {});
            if ((s = (0, n.Ay)("country")) !== null && s !== undefined) {
              s.addEventListener("change", this.handleUserCountryChange);
            }
            if ((r = (0, n.Ay)("state-select")) !== null && r !== undefined) {
              r.addEventListener("change", this.handleUserStateChange);
            }
            this.populateCountry();
            if ((c = (0, n.Ay)("proceed-payment")) !== null && c !== undefined) {
              c.addEventListener("click", () => this.proceedPayment());
            }
          };
          this.selectCredit = (e, t = false) => {
            document.querySelectorAll(".credit-option").forEach(e => {
              e.classList.remove("active");
            });
            e.classList.add("active");
            if (e.dataset.value) {
              this.genCredits = Number(e.dataset.value);
            } else {
              this.genCredits = 0;
            }
            if (e.dataset.planCode || e.dataset.plancode) {
              this.splanId = e.dataset.planCode || e.dataset.plancode;
            }
            this.updatePrice();
          };
          this.selectSeats = e => {
            const t = document.querySelectorAll(".seat-option");
            const i = (0, n.Ay)("proceed-payment");
            this.isReadyToPay();
            t.forEach(t => {
              if (t !== e) {
                t.classList.remove("active");
              }
            });
            e.classList.add("active");
            if (e.classList.contains("active")) {
              if (e.classList.contains("seat-option-custom")) {
                const t = e.getElementsByTagName("input")[0];
                if (t.value === "" || Number(t.value) === 0) {
                  i.disabled = true;
                  this.extraSeats = 0;
                } else {
                  this.extraSeats = Number(t.value);
                }
              } else if (e.dataset.value) {
                this.extraSeats = Number(e.dataset.value);
              } else {
                this.extraSeats = 0;
              }
            } else {
              this.extraSeats = 0;
            }
            this.updatePrice();
          };
          this.getStoredLocation = () => {
            try {
              const e = sessionStorage.getItem(h.CHECKOUT_LOCATION_STORAGE_KEY);
              if (e) {
                return JSON.parse(e);
              } else {
                return null;
              }
            } catch (d) {
              return null;
            }
          };
          this.storeLocation = (e, t) => {
            try {
              sessionStorage.setItem(h.CHECKOUT_LOCATION_STORAGE_KEY, JSON.stringify({
                countryCode: e,
                stateCode: t || ""
              }));
            } catch (d) {}
          };
          this.handleUserCountryChange = () => {
            this.hasUserLocationOverride = true;
            this.updateCountry();
            const e = this.paymentData.billingAddress.countryCode;
            const t = this.paymentData.billingAddress.stateCode;
            if (e) {
              this.storeLocation(e, t);
            }
          };
          this.handleUserStateChange = () => {
            this.hasUserLocationOverride = true;
            this.updateState();
            const e = this.paymentData.billingAddress.countryCode;
            const t = this.paymentData.billingAddress.stateCode;
            if (e) {
              this.storeLocation(e, t);
            }
          };
          this.applyLocation = (e, t) => {
            const i = (0, n.Ay)("country");
            const a = this.countryList.country[e];
            if (a) {
              for (let t = 0; t < i.options.length; t++) {
                if (i.options[t].value === a) {
                  i.selectedIndex = t;
                  this.paymentData.billingAddress.country = a;
                  this.paymentData.billingAddress.countryCode = e;
                  break;
                }
              }
              this.updateCountry();
              if (t && this.countryList.countryStates[e]) {
                const i = this.countryList.countryStates[e][t];
                if (i) {
                  const e = (0, n.Ay)("state-select");
                  for (let t = 0; t < e.options.length; t++) {
                    if (e.options[t].value === i) {
                      e.selectedIndex = t;
                      break;
                    }
                  }
                  this.updateState();
                }
              }
            }
          };
          this.populateCountry = async () => {
            try {
              const i = await s.X6();
              const a = i == null ? undefined : i.data;
              if (a && a.country && Object.keys(a.country).length !== 0) {
                this.countryList = a;
              } else {
                const e = {
                  country: s.FS,
                  countryEU: s.eC,
                  country3Tier: s.ED,
                  tax: {},
                  countryStates: {}
                };
                this.countryList = e;
              }
              const o = (0, n.Ay)("country");
              if (!o) {
                console.error("[Checkout] Country select element not found");
                return;
              }
              const r = l.Ny?.billingAddress?.countryCode;
              const c = l.Ny?.billingAddress?.stateCode;
              const d = r && (!this.countryList.countryStates[r] || c);
              let p = r || l.Ny?.country || "US";
              for (const e in this.countryList.country) {
                const t = (0, n.T)("option", {
                  value: this.countryList.country[e]
                }, this.countryList.country[e]);
                if (p === e) {
                  t.selected = true;
                  this.paymentData.billingAddress.country = this.countryList.country[e];
                }
                o.append(t);
              }
              this.updateCountry();
              const h = s.VM(3000).catch(() => null);
              if (d) {
                if (c && this.countryList.countryStates[r]) {
                  const e = (0, n.Ay)("state-select");
                  const t = this.countryList.countryStates[r][c];
                  if (t && e) {
                    for (let i = 0; i < e.options.length; i++) {
                      if (e.options[i].value === t) {
                        e.selectedIndex = i;
                        break;
                      }
                    }
                    this.updateState();
                  }
                }
                return;
              }
              const u = this.getStoredLocation();
              if (u == null ? undefined : u.countryCode) {
                this.hasUserLocationOverride = true;
                this.applyLocation(u.countryCode, u.stateCode);
                return;
              }
              const m = await h;
              if ((m == null ? undefined : m.status) && m.countryIso && this.countryList.country[m.countryIso]) {
                const e = m.stateIso;
                const t = !!this.countryList.countryStates[m.countryIso] && e && this.countryList.countryStates[m.countryIso][e];
                this.applyLocation(m.countryIso, t ? e : undefined);
              }
            } catch (i) {
              console.error("[Checkout] Failed to populate country dropdown:", i);
              const e = (0, n.Ay)("country");
              if (e) {
                this.countryList = {
                  country: s.FS,
                  countryEU: s.eC,
                  country3Tier: s.ED,
                  tax: {},
                  countryStates: {}
                };
                for (const t in s.FS) {
                  const i = (0, n.T)("option", {
                    value: s.FS[t]
                  }, s.FS[t]);
                  if (t === "US") {
                    i.selected = true;
                  }
                  e.append(i);
                }
                this.paymentData.billingAddress.country = "United States";
                this.paymentData.billingAddress.countryCode = "US";
              }
            }
          };
          this.populateState = e => {
            this.paymentData.billingAddress.stateOrProvince = "";
            this.paymentData.billingAddress.state = "";
            this.paymentData.billingAddress.stateCode = "";
            const i = this.countryList;
            const o = (0, n.Ay)("state-select");
            const s = Object.keys(i.countryStates).includes(e);
            (0, n.Ay)("checkoutState").parentElement.style.display = s ? "none" : "flex";
            o.parentElement.style.display = s ? "flex" : "none";
            if (s) {
              const s = i.countryStates[e];
              const r = l.Ny?.billingAddress?.stateCode || Object.keys(s).find(e => s[e] === (0, n.Ay)("checkoutState").value);
              (0, n.Ay)("wrapper-billing-option").open = true;
              (0, n.Ay)("payment-info-message").classList.add("inc");
              (0, n.Ay)("payment-info-message").innerHTML = `* ${(0, a.A)("stateRequired")}`;
              if (o.dataset.country === e && o.options.length > 1) {
                return;
              }
              o.innerHTML = "";
              const c = (0, n.T)("option", {
                value: ""
              }, (0, a.A)("checkoutPleaseSelectState") || "— Please Select a State —");
              c.selected = true;
              c.disabled = false;
              o.append(c);
              o.setAttribute("data-country", e);
              let d = false;
              Object.entries(s).forEach(([e, t]) => {
                const i = (0, n.T)("option", {
                  value: t
                }, t);
                if (r === e) {
                  i.selected = true;
                  d = true;
                }
                o.append(i);
              });
              if (!d) {
                o.selectedIndex = 0;
              }
              this.updateState();
            } else {
              (0, n.Ay)("payment-info-message").classList.remove("inc");
              (0, n.Ay)("payment-info-message").innerHTML = "";
              o.innerHTML = "";
              o.removeAttribute("data-country");
              this.updateState();
            }
          };
          this.recalculateUpgradeVAT = async () => {
            var i;
            var a;
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              try {
                const e = await s.In("/checkout/upgrade/preview", "POST", {
                  plan: this.splanId,
                  billingAddress: this.paymentData.billingAddress
                });
                if (e.status && e.data) {
                  this.planBalance = e.data.planBalance;
                  if ((this.selectedPayment === "paypal" || !!this._forcePaypal) && this.appliedPromo?.code === "PYPL-25-UPGRADE" && typeof this.appliedPromo.amount == "number") {
                    this.appliedPromo.amount = e.data.planBalance;
                  }
                  const s = (((i = this.paymentData.billingAddress.vatNumber) === null || i === undefined ? undefined : i.trim()) || "") && this.getValidVATNumbers().includes(this.paymentData.billingAddress.vatNumber);
                  const l = (a = this.countryList?.countryEU) === null || a === undefined ? undefined : a.includes(this.paymentData.billingAddress.countryCode);
                  if (s && l) {
                    this.tax.status = true;
                    this.tax.percentage = 0;
                    this.tax.originalVatRate = e.data.tax?.percentage || 0;
                    this.tax.isReverseCharge = true;
                    this.tax.reverseChargeReason = "EU B2B - Article 44, 196";
                    this.tax.type = e.data.tax?.taxType || this.tax.type;
                  } else if (e.data.tax?.status) {
                    this.tax.status = true;
                    this.tax.percentage = e.data.tax.percentage;
                    this.tax.type = e.data.tax.taxType || this.tax.type;
                    this.tax.isReverseCharge = false;
                  } else {
                    this.tax.status = false;
                    this.tax.percentage = 0;
                    this.tax.isReverseCharge = false;
                  }
                  this.updatePrice();
                }
              } catch (l) {
                console.error("Failed to recalculate upgrade VAT:", l);
              }
            }
          };
          this.updateCountry = () => {
            const e = (0, n.Ay)("country").value;
            const t = Object.keys(this.countryList.country).find(t => this.countryList.country[t] === e);
            if (this.paymentData.billingAddress.countryCode && this.paymentData.billingAddress.countryCode !== t) {
              this.paymentData.billingAddress.vatNumber = "";
              this.paymentData.billingAddress.isVATNumberValid = false;
              const e = (0, n.Ay)("vatNumber");
              if (e) {
                e.value = "";
                e.readOnly = false;
              }
            }
            this.paymentData.billingAddress.country = e;
            this.paymentData.billingAddress.countryCode = t;
            this.tax = Object.assign(Object.assign({}, this.tax), this.getTaxFromCountryState(t));
            if (this.countryList.countryEU.some(e => e === t)) {
              this.currency = "EUR";
              this.currencySymbol = "€";
            } else {
              this.currency = "USD";
              this.currencySymbol = "$";
            }
            document.querySelectorAll(".currency").forEach(e => e.innerHTML = this.currency);
            document.querySelectorAll(".currency-symbol").forEach(e => e.innerHTML = this.currencySymbol);
            this.populateState(t);
            const i = (0, n.Ay)("checkout-vat-row");
            if (i) {
              i.style.display = this.countryList.countryEU.includes(t) ? "flex" : "none";
            }
            this.populateVATSelect();
            this.isReadyToPay();
            this.setIsReverseCharge();
            this.recalculateUpgradeVAT();
          };
          this.updateState = () => {
            const e = this.countryList.countryStates[this.paymentData.billingAddress.countryCode];
            const t = (0, n.Ay)("state-select").value;
            const i = (0, n.Ay)("state-select").parentElement.style.display !== "none";
            const o = (0, n.Ay)("checkoutState").value;
            if (i) {
              (0, n.Ay)("checkoutState").value = t;
            }
            if (i && t) {
              (0, n.Ay)("payment-info-message").classList.remove("inc");
              (0, n.Ay)("payment-info-message").innerHTML = "";
            } else if (i) {
              (0, n.Ay)("payment-info-message").classList.add("inc");
              (0, n.Ay)("payment-info-message").innerHTML = `* ${(0, a.A)("stateRequired")}`;
            }
            this.paymentData.billingAddress.stateOrProvince = i ? t : o;
            this.paymentData.billingAddress.state = i ? t : o;
            this.paymentData.billingAddress.stateCode = e ? Object.keys(e).find(i => e[i] === t) : "";
            const s = this.paymentData.billingAddress.countryCode;
            const r = this.paymentData.billingAddress.stateCode;
            this.tax = Object.assign(Object.assign({}, this.tax), this.getTaxFromCountryState(s, r));
            this.isReadyToPay();
            this.setIsReverseCharge();
            this.recalculateUpgradeVAT();
          };
          this.getTaxFromCountryState = (e, t) => {
            const r = this.countryList.tax[e];
            const c = {};
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              c.status = false;
              c.percentage = 0;
            } else if (r) {
              c.status = true;
              c.percentage = t ? r.states?.[t] ?? r.countryRate ?? 0 : r.countryRate;
              c.type = t && r.stateType?.[t] ? r.stateType[t] : r.countryType;
            } else {
              c.status = false;
            }
            return c;
          };
          this.applyPromoCode = async () => {
            const t = (0, n.Ay)("promocode-submit");
            if ((t == null ? undefined : t.dataset.applied) === "true") {
              this.removePromoCode();
              return;
            }
            const i = (0, n.Ay)("promocode-input");
            let a = this.checkoutOptions?.code ? this.checkoutOptions.code : i.value.toUpperCase().trim();
            try {
              const e = await s.Pe(a, this.productName, this.splanId);
              if (!e.status) {
                throw new Error("Invalid promocode!");
              }
              this.appliedPromo = e.promo;
              if (i) {
                i.readOnly = true;
              }
              if (t) {
                t.innerText = "Remove";
                t.dataset.applied = "true";
              }
              this.updatePrice();
            } catch ({
              response: o,
              message: r
            }) {
              this.removePromoCode();
              (0, n.Ay)("promocode-error").style.display = "block";
              setTimeout(() => {
                (0, n.Ay)("promocode-error").style.display = "none";
              }, 1500);
            }
          };
          this.removePromoCode = () => {
            const e = (0, n.Ay)("promocode-submit");
            const t = (0, n.Ay)("promocode-input");
            e.innerText = "Apply";
            delete e.dataset.applied;
            this.appliedPromo = undefined;
            this.updatePrice();
            t.readOnly = false;
            t.value = "";
          };
          this.promoCodeOnInput = e => {
            const t = e.target;
            t.value = t.value.toUpperCase();
          };
          this.updatePrice = () => {
            let s;
            if (this.checkoutType === "subscription" || this.checkoutType === "paid") {
              if (this.selectedPlan.pricing[this.currency]) {
                s = this.selectedPlan.pricing[this.currency].amount;
              } else {
                s = this.selectedPlan.pricing.USD.amount;
                this.currency = "USD";
                this.currencySymbol = "$";
                document.querySelectorAll(".currency").forEach(e => e.innerHTML = this.currency);
                document.querySelectorAll(".currency-symbol").forEach(e => e.innerHTML = this.currencySymbol);
              }
            } else if (this.checkoutType === "seats" || this.checkoutType === "credits") {
              s = 0;
            }
            let r = s;
            let c = 0;
            let l = 0;
            let d = 0;
            if (this.checkoutType === "subscription") {
              (0, n.Ay)("summary-base-value").innerText = s.toFixed(2);
              (0, n.Ay)("summary-base-credits").innerText = (0, a.A)("creditForAIGeneration", this.getCreditsByPlan());
            } else if (this.checkoutType === "credits") {
              const t = this._creditPlans.find(e => e.credits === this.genCredits);
              if (t) {
                const i = t.pricing?.[this.currency] || {
                  amount: t.amount
                };
                r = s = i.amount;
              } else {
                r = s = 0;
              }
              (0, n.Ay)("summary-credits-amount").innerText = (0, a.A)("totalGenerativeCredits", this.genCredits.toFixed());
              (0, n.Ay)("summary-credits-value").innerText = s.toFixed(2);
              (0, n.Ay)("summary-credits").classList.add("inc");
            } else if (this.checkoutType === "paid") {
              (0, n.Ay)("summary-base-value").innerText = s.toFixed(2);
              (0, n.Ay)("summary-base-credits").innerText = (0, a.A)("creditForAIGeneration", this.getCreditsByPlan());
            }
            (0, n.Ay)("summary-subtotal-value").innerText = s.toFixed(2);
            if (this.checkoutType !== "paid" && this.appliedPromo) {
              const {
                productCode: e,
                productName: t,
                percentage: i,
                amount: o
              } = this.appliedPromo;
              (0, n.Ay)("summary-promo-remarks").innerText = i ? (0, a.A)("discountPercentageOffFirstPayingMonth").replace("{discountAmount}", `${i}%`) : (0, a.A)("discountAmountOnlyFirstPayingMonth").replace("{discountAmount}", o.toFixed(2));
              if (t.includes(this.productName) && e.includes(this.splanId)) {
                if (i) {
                  c = s * i / 100;
                } else if (o) {
                  c = o;
                }
                (0, n.Ay)("summary-promo-value").innerText = `- ${c.toFixed(2)}`;
                (0, n.Ay)("summary-promo").classList.add("inc");
              }
            } else {
              (0, n.Ay)("summary-promo").classList.remove("inc");
            }
            if (this.productName !== "Pixlr Team" && this.checkoutType !== "seats" || !this.extraSeats) {
              (0, n.Ay)("summary-seats").classList.remove("inc");
            } else {
              const e = this.getSingleSeatPrice();
              l = this.extraSeats * e;
              (0, n.Ay)("summary-seats-count").innerText = `x${this.extraSeats} seats`;
              (0, n.Ay)("summary-seats-value").innerText = l.toFixed(2);
              (0, n.Ay)("summary-seats").classList.add("inc");
            }
            const p = this.selectedPayment === "paypal" || this._forcePaypal ? 0 : this.planBalance;
            r = s - c - p + l;
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              (0, n.Ay)("summary-subtotal-value").innerText = r.toFixed(2);
            }
            (0, n.Ay)("summary-billing-note").innerHTML = `${(0, a.A)("checkoutBillingCountry")}: ${this.paymentData.billingAddress.country}`;
            if (this.tax.status) {
              d = r * (this.tax.percentage / 100);
              (0, n.Ay)("summary-tax-value").innerHTML = d.toFixed(2);
              (0, n.Ay)("summary-total-tax").style.display = "block";
              (0, n.Ay)("summary-total-tax").innerHTML = this.tax.isReverseCharge ? "Reverse charge applies - You will self-account for VAT" : `(incl. ${this.tax.type ?? "GST"})`;
              if (this.countryList.countryStates.hasOwnProperty(this.paymentData.billingAddress.countryCode) && this.paymentData.billingAddress.stateCode) {
                (0, n.Ay)("summary-tax-label").innerHTML = `${this.tax.type} (${this.tax.percentage}% - ${this.paymentData.billingAddress.stateCode}, ${this.paymentData.billingAddress.country} )`;
                (0, n.Ay)("summary-billing-note").innerHTML = `${(0, a.A)("checkoutBillingCountry")}: ${this.paymentData.billingAddress.state}, ${this.paymentData.billingAddress.country}`;
              } else {
                (0, n.Ay)("summary-tax-label").innerHTML = `${this.tax.type} (${this.tax.percentage}% - ${this.paymentData.billingAddress.country})`;
              }
              (0, n.Ay)("summary-tax").classList.add("inc");
            } else {
              (0, n.Ay)("summary-tax").classList.remove("inc");
              (0, n.Ay)("summary-total-tax").style.display = "none";
            }
            r += d;
            if (this.checkoutType === "paid" && this.appliedPromo?.code) {
              const e = this.appliedPromo.percentage;
              const t = r * (1 - e / 100);
              const i = (r - t).toFixed(2);
              r = +t.toFixed(2);
              (0, n.Ay)("summary-summer-campaign-discount").innerText = `-${i}`;
              (0, n.Ay)("summary-summer-campaign-note").innerText = `${(0, a.A)("limitedTimeDiscountSummerDesc")}`;
              (0, n.Ay)("summary-summer-campaign").classList.add("inc");
            } else {
              (0, n.Ay)("summary-summer-campaign").classList.remove("inc");
            }
            document.querySelectorAll(".total-price").forEach(e => e.innerHTML = r.toFixed(2));
          };
          this.setPaymentMethod = e => {
            let t = e.value;
            e.checked = true;
            if (e.dataset.value === "saved-card") {
              t = "saved-card";
            }
            switch (t) {
              case "paypal":
                this.selectedPayment = "paypal";
                (0, n.Ay)("wrapper-payment-method").open = false;
                (0, n.Ay)("component-container").classList.add("blocked");
                (0, n.Ay)("saved-cards").classList.add("blocked");
                (0, n.Ay)("payment-info-message").classList.remove("inc");
                (0, n.Ay)("payment-info-message").innerHTML = "";
                this.isReadyToPay();
                break;
              case "saved-card":
                this.selectedPayment = "saved-card";
                this.selectedSavedCard = e.id;
                (0, n.Ay)("wrapper-billing-option").style.display = "inline-flex";
                (0, n.Ay)("component-container").classList.add("blocked");
                (0, n.Ay)("saved-cards").classList.remove("blocked");
                if (e.className.includes("selected")) {
                  e.classList.remove("selected");
                  this.setPaymentMethod((0, n.Ay)("cc-radio-option"));
                  return;
                }
                document.querySelectorAll(".saved-card-item").forEach(e => {
                  e.classList.remove("selected");
                  e.classList.add("blocked");
                });
                e.classList.add("selected");
                e.classList.remove("blocked");
                this.isReadyToPay();
                break;
              default:
                this.selectedPayment = "credit";
                (0, n.Ay)("wrapper-billing-option").style.display = "inline-flex";
                (0, n.Ay)("component-container").classList.remove("blocked");
                (0, n.Ay)("saved-cards").classList.remove("blocked");
                this.isReadyToPay();
            }
          };
          this.setPlan = e => {
            this.splanId = e.dataset.plan;
            this.selectedPlan = this.setPlanDetails(this.splanId);
            document.querySelector(".plan-options.selected").classList.remove("selected");
            e.classList.add("selected");
            this.updatePrice();
          };
          this.setPlanDetails = e => this.subscriptionPlans.filter(t => t.code === e)[0];
          this.proceedPayment = async () => {
            const i = (0, n.Ay)("proceed-payment");
            if (i.disabled) {
              return;
            }
            i.disabled = true;
            if (this.selectedPayment === "paypal") {
              return this.loadPaypal();
            }
            i.style.cursor = "wait";
            const a = `/checkout/payments/${this.checkoutType}?platform=${this.checkoutOptions.platform}`;
            const o = this.getCheckoutData();
            o.utm = this.getUtmParams();
            try {
              const i = await s.In(a, "POST", o);
              if (i.status === true) {
                const {
                  paymentResponse: t,
                  affiliate: n
                } = i.data;
                if (n) {
                  this.affiliate(i.data?.affiliate);
                }
                this.paymentResult(i.status, i.data.settings);
                if (this.checkoutOptions.platform === "web") {
                  setTimeout(() => {
                    if (this.checkoutOptions.redirectUrl) {
                      window.location.href = this.checkoutOptions.redirectUrl;
                    } else if (this.checkoutType === "seats") {
                      window.location.href = "/?settings=subscription";
                    } else if (this.checkoutType === "paid") {
                      window.location.href = `${window.location.href}/thank-you`;
                    } else {
                      window.location.href = "/?settings=subscription";
                    }
                  }, 1500);
                } else {
                  setTimeout(() => {
                    if (this != null) {
                      this.cleanUp();
                    }
                  }, 2500);
                }
              } else {
                this.paymentResult(false, {
                  message: i.message ?? ""
                });
              }
            } catch (r) {
              console.error(r);
              this.paymentResult(false, {});
            }
          };
          this.paymentResult = (e, t) => {
            var i;
            var o;
            var s;
            if (this.dialog.id === "payment-method-picker") {
              this.content.innerHTML = "";
              this.dialog.id = "chckout";
              this.dialog.style.maxWidth = "";
            }
            if (this.optionUI) {
              this.optionUI.style.display = "none";
            }
            if (this.summaryUI) {
              this.summaryUI.style.display = "none";
            }
            if ((i = (0, n.Ay)("chckout-loading")) !== null && i !== undefined) {
              i.remove();
            }
            if ((o = (0, n.Ay)("chckout-result")) !== null && o !== undefined) {
              o.remove();
            }
            if (e === false) {
              const e = (((s = t.message) === null || s === undefined ? undefined : s.toLowerCase()) || "").includes("fraud") ? "There was an issue processing your payment. Please contact customer support for assistance." : t.message;
              this.setContent((0, n.T)("div", {
                id: "chckout-result"
              }, (0, n.T)("img", {
                src: "assets/images/icon/red-cross.png",
                width: 100,
                style: "margin-bottom: 20px"
              }), (0, n.T)("h2", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("paymentFailed")), (0, n.T)("p", (0, a.A)("paymentUnsuccessful")), e && (0, n.T)("p", {
                style: "margin-top: 60px; color: #535353; font-style: italic"
              }, e)));
            } else if (e === "processing") {
              this.setContent((0, n.T)("div", {
                id: "chckout-result"
              }, (0, n.T)("img", {
                src: "assets/images/myaccount/black-loading.gif",
                width: 150
              }), (0, n.T)("h2", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("pleaseCompleteYourPaymentAtPaypal")), (0, n.T)("p", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("pleaseDoNotRefreshOrCloseThisPageWhilePaymentIsProcessing")), (0, n.T)("p", (0, a.A)("youWillAutomaticallyBeRedirectedToMyAccount"))));
              if (t) {
                Object.assign(l.Ny, t);
              }
            } else {
              this.setContent((0, n.T)("div", {
                id: "chckout-result"
              }, (0, n.T)("img", {
                src: "assets/images/icon/green-tick.png",
                width: 100,
                style: "margin-bottom: 20px"
              }), (0, n.T)("h2", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("paymentSuccessful")), this.checkoutType !== "paid" ? (0, n.T)("p", (0, a.A)("youWillAutomaticallyBeRedirectedToMyAccount")) : ""));
              if (t) {
                Object.assign(l.Ny, t);
              }
              this.clearUTMParameters();
              (0, l.$4)().then(e => {
                if (e) {
                  document.dispatchEvent(new CustomEvent("user-login", {
                    detail: e
                  }));
                }
              }).catch(() => {});
            }
          };
          this.loadPaypal = async e => {
            const t = "/paypal/" + (this.checkoutType === "subscription" ? "subscriptions" : "purchase");
            const i = this.getCheckoutData();
            console.log(i);
            this.checkoutType;
            let a = null;
            const o = (screen.width - 800) / 2;
            const r = (screen.height - 650) / 4;
            a = window.open("about:blank", "Paypal Checkout", `resizable=yes,width=800,height=650,top=${r},left=${o}`);
            try {
              const o = await fetch(t, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify(i)
              });
              const r = await o.json();
              if (!r.status) {
                if (a != null) {
                  a.close();
                }
                if (e) {
                  return e(r.message);
                } else {
                  return this.paymentResult(false, r);
                }
              }
              if (!a || a.closed) {
                window.location.href = r.redirectUrl;
                return;
              }
              a.location.href = r.redirectUrl;
              if (r.vatBreakdown) {
                const e = r.vatBreakdown;
                const t = (0, n.Ay)("summary-tax");
                const i = (0, n.Ay)("summary-tax-label");
                const a = (0, n.Ay)("summary-tax-value");
                const o = (0, n.Ay)("summary-total-tax");
                if (e.isReverseCharge) {
                  if (t) {
                    t.classList.add("inc");
                  }
                  if (i) {
                    i.innerHTML = `VAT (0% - ${e.countryCode}) — Reverse Charge`;
                  }
                  if (a) {
                    a.innerHTML = "0.00";
                  }
                  if (o) {
                    o.style.display = "block";
                    o.innerHTML = "Reverse charge applies — you will self-account for VAT";
                  }
                } else if (e.vatAmount > 0) {
                  if (t) {
                    t.classList.add("inc");
                  }
                  if (i) {
                    i.innerHTML = `VAT (${e.vatPercentage}% - ${e.countryCode})`;
                  }
                  if (a) {
                    a.innerHTML = e.vatAmount.toFixed(2);
                  }
                  if (o) {
                    o.style.display = "none";
                  }
                }
              }
              this.paymentResult("processing", {});
              let l = false;
              const d = async () => {
                if (!l) {
                  try {
                    const e = await (0, c.Q)(async () => {
                      try {
                        return Promise.resolve(await s.sG(r.id, this.checkoutType));
                      } catch (e) {
                        return Promise.reject(e);
                      }
                    }, 8000, 90000);
                    if (l) {
                      return;
                    }
                    l = true;
                    if ((0, n.Ay)("try-premium")) {
                      (0, n.Ay)("try-premium").style.display = "none";
                    }
                    if (!e.status) {
                      if (a != null) {
                        a.close();
                      }
                      this.paymentResult(false, {});
                      return;
                    }
                    if (a != null) {
                      a.close();
                    }
                    this.paymentResult(true, {});
                    setTimeout(() => {
                      if (this != null) {
                        this.cleanUp();
                      }
                      if (a != null) {
                        a.close();
                      }
                      if (this.checkoutOptions?.platform === "web") {
                        window.location.href = "/?settings=subscription";
                      }
                    }, 2500);
                  } catch (e) {
                    if (l) {
                      return;
                    }
                    console.error("[Checkout] PayPal polling failed:", e);
                    l = true;
                    if (a != null) {
                      a.close();
                    }
                    this.paymentResult(false, {
                      message: "Payment verification timed out. Please check your account."
                    });
                  }
                }
              };
              let p = false;
              const h = e => {
                const i = e.data?.status;
                if (i === "success" || i === "failed") {
                  p = true;
                  window.removeEventListener("message", h);
                  if (i === "success") {
                    d();
                  } else if (i === "failed") {
                    l = true;
                    setTimeout(() => {
                      if (a != null) {
                        a.close();
                      }
                      this.paymentResult(false, {});
                    }, 1500);
                  }
                }
              };
              window.addEventListener("message", h);
              const u = setInterval(() => {
                if (a == null ? undefined : a.closed) {
                  clearInterval(u);
                  if (!p && !l) {
                    l = true;
                    this.paymentResult(false, {});
                  }
                }
              }, 500);
            } catch (l) {
              console.error(l);
              if (a != null) {
                a.close();
              }
              if (e) {
                return e(l == null ? undefined : l.message);
              }
              this.paymentResult(false, {});
            }
          };
          this.handleOnChange = e => {
            const {
              data: t,
              isValid: i
            } = e;
            const {
              browserInfo: n,
              paymentMethod: a
            } = t;
            this.encryptedCardData.isValid = i;
            this.encryptedCardData.paymentMethod = a;
            this.encryptedCardData.cardHolderName = document.getElementsByClassName("adyen-checkout__input--text")[0].value;
            this.browserInfo = n;
            this.isReadyToPay();
          };
          this.requiredBillingInput = ["firstName", "lastName", "address", "city", "zipCode"];
          this.isReadyToPay = () => {
            var e;
            const {
              isValid: t,
              paymentMethod: i
            } = this.encryptedCardData;
            const a = (0, n.Ay)("proceed-payment");
            try {
              if (this.selectedPayment === "credit") {
                if (!t) {
                  throw false;
                }
                if (!this.encryptedCardData.cardHolderName.length) {
                  throw false;
                }
              }
              const i = this.countryList.countryStates.hasOwnProperty(this.paymentData.billingAddress.countryCode);
              const o = Object.keys(this.paymentData.billingAddress).filter(e => this.paymentData.billingAddress[e] !== "");
              if (!o.includes("stateOrProvince") && i) {
                throw false;
              }
              if (this.requiredBillingInput.some(e => o.includes(e))) {
                this.requiredBillingInput.forEach(e => {
                  if (!this.paymentData.billingAddress[e]) {
                    throw false;
                  }
                });
              }
              if (this.paymentData.billingAddress.vatNumber && ((e = (0, n.Ay)("checkout-vat-row")) === null || e === undefined ? undefined : e.style.display) !== "none" && !this.getValidVATNumbers().includes(this.paymentData.billingAddress.vatNumber)) {
                throw false;
              }
              a.disabled = false;
            } catch (o) {
              a.disabled = true;
            }
          };
          this.backPreviousPopup = () => {
            this.cleanUp();
            if (this.checkoutOptions.bounceSource === "premiumbounce") {
              new p.default(this.checkoutOptions.bounceType, "premium");
            }
          };
          this.getCreditsByPrice = e => {
            if (e === 71) {
              return 0.01;
            }
            if (e === 200) {
              return 3.99;
            }
            if (e === 500) {
              return 6.99;
            }
            if (e === 1000) {
              return 9.99;
            }
            if (e === 2000) {
              return 16.99;
            }
            if (e === 5000) {
              return 30.99;
            }
            throw new Error("Invalid amount");
          };
          this.getCreditsByPlan = () => {
            if (this.splanId === "plus-monthly") {
              return 80;
            }
            if (this.splanId === "plus-yearly") {
              return 960;
            }
            if (this.splanId === "premium-monthly") {
              return 1000;
            }
            if (this.splanId === "premium-yearly") {
              return 12000;
            }
            if (this.splanId === "ultra-monthly") {
              return 5000;
            }
            if (this.splanId === "ultra-yearly") {
              return 60000;
            }
            if (this.splanId === "ultra-max-monthly") {
              return 10000;
            }
            if (this.splanId === "ultra-max-yearly") {
              return 120000;
            }
            throw new Error("Invalid plan");
          };
          this.getSingleSeatPrice = () => {
            var e;
            if (this.checkoutType === "seats") {
              if ((e = l.Ny?.subscriptionCode) === null || e === undefined ? undefined : e.includes("monthly")) {
                return 5.99;
              } else {
                return 59.99;
              }
            }
            if (this.checkoutType === "subscription") {
              if (this.splanId.includes("monthly")) {
                return 5.99;
              } else {
                return 59.99;
              }
            }
            throw new Error("Configuration error...");
          };
          this.getCheckoutData = () => {
            const n = {
              checkoutMethod: "checkout",
              billingAddress: this.paymentData?.billingAddress ?? (l.Ny.billingAddress || l.dV),
              currency: this.currency,
              promo: this.appliedPromo ? this.appliedPromo.code : "",
              captchaToken: "!!",
              tax: {
                isReverseCharge: false
              }
            };
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              n.checkoutMethod = "upgrade";
            }
            if (this.browserInfo) {
              n.browserInfo = this.browserInfo;
              n.origin = window.location.origin;
            }
            if (this.checkoutType === "subscription") {
              n.splan = this.splanId;
            } else if (this.checkoutType === "credits") {
              n.credits = this.genCredits;
              if (this.splanId) {
                n.splan = this.splanId;
              }
            }
            if (this.checkoutType === "paid") {
              n.splan = this.splanId;
              n.credits = +this.selectedPlan.credits;
              n.promo = this.appliedPromo.code;
            }
            if (this.selectedPayment === "credit") {
              n.paymentMethod = this.encryptedCardData.paymentMethod;
            } else if (this.selectedPayment === "saved-card" && this.selectedSavedCard) {
              n.paymentCard = this.selectedSavedCard;
            }
            if (this.productName === "Pixlr Team" || this.checkoutType === "seats") {
              n.seatsToAdd = this.extraSeats;
            }
            if (this.tax.isReverseCharge) {
              const e = (this.paymentData.billingAddress.vatNumber || "").replace(/\s+/g, "").toUpperCase();
              const t = (this.paymentData.billingAddress.countryCode || "").toUpperCase();
              const i = t === "GR" ? "EL" : t;
              const a = !!i && e.slice(0, 2) === i;
              n.tax = {
                customerVatNumber: a ? this.paymentData.billingAddress.vatNumber : undefined,
                isReverseCharge: true,
                reverseChargeReason: this.tax.reverseChargeReason
              };
              if (a) {
                n.billingAddress.isVATNumberValid = true;
              }
            }
            return n;
          };
          this.loadAwin = () => {
            this.dialog.append((0, n.T)("script", {
              src: "https://www.dwin1.com/65758.js",
              type: "text/javascript",
              defer: true
            }));
          };
          this.affiliate = e => {
            const {
              awin: t
            } = e;
            if (t) {
              const {
                params: e
              } = t;
              document.body.append((0, n.T)("img", {
                src: `https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=65758&amount=${e.amount}&cr=${e.cr}&ref=${e.ref}&parts=DEFAULT:${e.saleAmount}&vc=${e.vc}&ch=${e.ch}&customeracquisition=${e.customeracquisition}`,
                width: 0,
                height: 0,
                style: {
                  border: "none"
                }
              }));
              if (i !== undefined && i.Tracking !== undefined) {
                var i = {};
                i.Tracking.Sale = {};
                i.Tracking.Sale.amount = e.amount;
                i.Tracking.Sale.orderRef = e.ref;
                i.Tracking.Sale.parts = `DEFAULT:${e.amount}`;
                i.Tracking.Sale.voucher = e.vc;
                i.Tracking.Sale.currency = e.cr;
                i.Tracking.Sale.channel = e.ch;
                i.Tracking.Sale.customerAcquisition = e.customeracquisition;
                i.Tracking.run();
              } else {
                const t = (0, n.T)("script", {
                  type: "text/javascript"
                });
                t.innerHTML = `\n                    //<![CDATA[ /*** Do not change ***/\n                        var AWIN = {};\n                        AWIN.Tracking = {};\n                        AWIN.Tracking.Sale = {};\n                        /*** Set your transaction parameters ***/\n                        AWIN.Tracking.Sale.amount = "${e.amount}";\n                        AWIN.Tracking.Sale.orderRef = "${e.ref}";\n                        AWIN.Tracking.Sale.parts = "DEFAULT:${e.amount}";\n                        AWIN.Tracking.Sale.voucher = "${e.vc}";\n                        AWIN.Tracking.Sale.currency = "${e.cr}";\n                        AWIN.Tracking.Sale.channel = "${e.ch}";\n                        AWIN.Tracking.Sale.customerAcquisition = "${e.customeracquisition}";\n                    //]]>\n                `;
                document.body.append(t);
                this.loadAwin();
              }
            }
          };
          this.trackShareASale = e => {
            const {
              merchantReference: t,
              paidAmount: i,
              currency: n,
              sscid: a,
              newCustomer: o = 0
            } = e;
            if (a) {
              const e = document.createElement("img");
              e.id = "_SHRSL_img_1";
              e.src = `https://www.shareasale.com/sale.cfm?tracking=${t}&amount=${i}&merchantID=94987&transtype=sale&sscidmode=6&sscid=${a}&currency=${n}&newcustomer=${o}`;
              e.style.width = "1";
              e.style.height = "1";
              const s = document.createElement("script");
              s.src = "https://www.dwin1.com/19038.js";
              s.type = "text/javascript";
              s.defer = true;
              this.dialog.appendChild(e);
              this.dialog.appendChild(s);
            }
          };
          this.getUtmParams = () => ({
            utm_source: localStorage.getItem("utm_source"),
            utm_medium: localStorage.getItem("utm_medium"),
            utm_campaign: localStorage.getItem("utm_campaign")
          });
          this.clearUTMParameters = () => {
            localStorage.removeItem("utm_source");
            localStorage.removeItem("utm_medium");
            localStorage.removeItem("utm_campaign");
          };
          this.disablePaymentMethod = e => {
            var t;
            var i;
            var a;
            switch (e) {
              case "paypal":
                const e = (0, n.Ay)("paypal-payment-option");
                if (e) {
                  e.style.display = "none";
                }
                break;
              case "saved-card":
                const o = (0, n.Ay)("wrapper-payment-method");
                if (o) {
                  o.open = false;
                }
                if ((t = (0, n.Ay)("component-container")) !== null && t !== undefined) {
                  t.classList.add("blocked");
                }
                if ((i = (0, n.Ay)("saved-cards")) !== null && i !== undefined) {
                  i.classList.add("blocked");
                }
                break;
              case "cc":
                const s = (0, n.Ay)("cc-payment-option");
                if (s) {
                  s.style.display = "none";
                }
                const r = (0, n.Ay)("component-container");
                if (r) {
                  r.style.display = "none";
                }
                if ((a = (0, n.Ay)("component-3ds-container")) !== null && a !== undefined) {
                  a.remove();
                }
            }
          };
          this.getValidVATNumbers = () => {
            const e = this.paymentData.billingAddress.countryCode || l.Ny.billingAddress.countryCode;
            return this.verifiedVATNumbers.map(t => t.countryCode === e ? t.vatNumber : "");
          };
          this.setIsReverseCharge = () => {
            var e;
            var t;
            var o;
            const s = ((e = this.paymentData.billingAddress.vatNumber) === null || e === undefined ? undefined : e.trim()) || "";
            const r = s && this.getValidVATNumbers().includes(this.paymentData.billingAddress.vatNumber);
            const c = (0, n.Ay)("validate-vat");
            if (c) {
              c.style.display = s && ((t = (0, n.Ay)("checkout-vat-row")) === null || t === undefined ? undefined : t.style.display) !== "none" ? "block" : "none";
              c.disabled = !!r;
              c.innerText = r ? (0, a.A)("verified") : (0, a.A)("verify");
            }
            const {
              countryCode: l,
              stateCode: d
            } = this.paymentData.billingAddress;
            const p = (o = this.countryList?.countryEU) === null || o === undefined ? undefined : o.includes(l);
            const h = this.getTaxFromCountryState(l, d);
            if (r && p) {
              this.tax.status = true;
              this.tax.percentage = 0;
              this.tax.originalVatRate = h.percentage;
              this.tax.isReverseCharge = true;
              this.tax.reverseChargeReason = "EU B2B - Article 44, 196";
            } else {
              this.tax.status = h.status;
              this.tax.percentage = h.percentage || 0;
              this.tax.originalVatRate = h.percentage || 0;
              this.tax.isReverseCharge = false;
              this.tax.reverseChargeReason = "";
            }
            this.updatePrice();
          };
          this.validateVATNumber = async () => {
            const {
              vatNumber: t,
              countryCode: i
            } = this.paymentData.billingAddress;
            if (!t) {
              return (0, n.y8)("danger", (0, a.A)("checkoutEnterVATNumber"), 3);
            }
            if (!i) {
              return (0, n.y8)("danger", (0, a.A)("common-CannotLeaveEmpty") + ": " + (0, a.A)("checkoutBillingCountry"), 3);
            }
            const o = t.trim().toUpperCase();
            const r = (0, n.Ay)("validate-vat");
            const c = r == null ? undefined : r.innerText;
            if (r) {
              r.disabled = true;
              r.innerText = "...";
            }
            try {
              const t = await s.In("/api/myaccount/validateVAT", "POST", {
                vatNumber: o,
                countryCode: i
              }, true);
              if (!t.status || !t.isValid) {
                throw new Error(t.message);
              }
              if (t.isValid) {
                if (t.verifiedVATNumbers?.length) {
                  this.verifiedVATNumbers = t.verifiedVATNumbers.map(e => ({
                    countryCode: e.countryCode,
                    vatNumber: e.vatNumber
                  }));
                } else {
                  const {
                    countryCode: e,
                    stateCode: t
                  } = this.paymentData.billingAddress;
                  this.verifiedVATNumbers.push(Object.assign({
                    countryCode: e,
                    vatNumber: o
                  }, t ? {
                    stateCode: t
                  } : {}));
                }
                this.populateVATSelect();
                const i = (0, n.Ay)("vatNumber");
                if (i) {
                  i.readOnly = true;
                  i.value = o;
                }
                const a = (0, n.Ay)("vat-select");
                if (a) {
                  a.value = o;
                }
              }
              this.paymentData.billingAddress.vatNumber = t.isValid ? o : "";
              this.setIsReverseCharge();
              this.isReadyToPay();
              return (0, n.y8)("success", t.message + " - Reverse charge will apply (no VAT charged)", 3);
            } catch (l) {
              if (r) {
                r.disabled = false;
                r.innerText = c || (0, a.A)("verify");
              }
              this.setIsReverseCharge();
              if (l.message.includes("service temporarily unavailable")) {
                return (0, n.y8)("danger", "Unable to verify VAT number - Standard pricing with VAT will apply", 3);
              } else {
                return (0, n.y8)("danger", "VAT number invalid - Standard pricing with VAT will apply (" + l.message + ")", 3);
              }
            }
          };
          this.fetchVerifiedVATNumbers = async () => {
            try {
              const e = await s.In("/api/myaccount/verifiedVATNumbers", "GET");
              if (e.status && e.data) {
                for (const t of e.data) {
                  if (!this.verifiedVATNumbers.some(e => e.vatNumber === t.vatNumber && e.countryCode === t.countryCode)) {
                    this.verifiedVATNumbers.push({
                      countryCode: t.countryCode,
                      vatNumber: t.vatNumber
                    });
                  }
                }
                this.populateVATSelect();
              }
            } catch (e) {
              console.warn("[Checkout] Failed to fetch verified VAT numbers:", e);
            }
          };
          this.populateVATSelect = () => {
            var t;
            const i = (0, n.Ay)("vat-select");
            if (!i) {
              return;
            }
            const o = this.paymentData.billingAddress.countryCode || l.Ny.billingAddress?.countryCode;
            const s = (o || "").toUpperCase();
            const r = this.verifiedVATNumbers.filter(e => e.countryCode === o && !!e.vatNumber && e.vatNumber.toUpperCase().startsWith(s));
            i.innerHTML = "";
            const c = document.createElement("option");
            c.value = "__new__";
            c.textContent = (0, a.A)("checkoutEnterVATNumber") || "Enter new VAT number...";
            i.append(c);
            for (const n of r) {
              const e = document.createElement("option");
              e.value = n.vatNumber;
              e.textContent = `${n.vatNumber} (${(0, a.A)("verified")})`;
              i.append(e);
            }
            i.style.display = r.length > 0 ? "block" : "none";
            const d = (t = this.paymentData.billingAddress.vatNumber) === null || t === undefined ? undefined : t.trim();
            const p = (0, n.Ay)("vatNumber");
            if (d && r.some(e => e.vatNumber === d)) {
              i.value = d;
              if (p) {
                p.readOnly = true;
              }
            } else {
              i.value = "__new__";
              if (p) {
                p.readOnly = false;
              }
            }
          };
          this.handleVATSelect = () => {
            const e = (0, n.Ay)("vat-select");
            const t = (0, n.Ay)("vatNumber");
            if (e && t) {
              if (e.value === "__new__") {
                t.value = "";
                t.readOnly = false;
                t.focus();
                this.paymentData.billingAddress.vatNumber = "";
              } else {
                t.value = e.value;
                t.readOnly = true;
                this.paymentData.billingAddress.vatNumber = e.value;
              }
              this.setIsReverseCharge();
              this.isReadyToPay();
            }
          };
          (0, r.A)("checkout", e);
          this.checkoutType = e;
          this.checkoutOptions = Object.assign(Object.assign({}, this.checkoutOptions), t);
          const u = l.Ny.billingAddress;
          if ((u == null ? undefined : u.isVATNumberValid) && u.vatNumber && u.countryCode && u.vatNumber.toUpperCase().startsWith(u.countryCode.toUpperCase())) {
            this.verifiedVATNumbers.push(Object.assign({
              countryCode: u.countryCode,
              vatNumber: u.vatNumber
            }, u.stateCode ? {
              stateCode: u.stateCode
            } : {}));
          }
          this.fetchVerifiedVATNumbers();
          if (this.checkoutType === "subscription") {
            this.splanId = this.checkoutOptions.plan ?? "premium-monthly";
            if (this.splanId.includes("plus")) {
              this.productName = "Pixlr Plus";
            } else if (this.splanId.includes("premium")) {
              this.productName = "Pixlr Premium";
            } else if (this.splanId.includes("team")) {
              this.productName = "Pixlr Team";
            } else if (this.splanId.includes("ultra-max")) {
              this.productName = "Pixlr Ultra Max";
            } else if (this.splanId.includes("ultra")) {
              this.productName = "Pixlr Ultra";
            } else {
              const e = this.splanId.split("-")[0];
              this.productName = `Pixlr ${e.charAt(0).toUpperCase() + e.slice(1)}`;
            }
          }
          Promise.resolve().then(i.bind(i, 1413));
          this.dialog.id = "chckout";
          this.dialog.style.display = "none";
          if (this.checkoutType === "credits") {
            this.dialog.style.display = "";
            setTimeout(() => this.dialog.classList.add("ani"), 5);
            setTimeout(() => this.modal.classList.add("dim"), 5);
            this.initializeTraditionalCheckout();
            return;
          }
          this.checkStripeAvailability().then(e => {
            const t = e.available;
            const i = e.provider;
            if (e.dunning && this.checkoutType === "subscription") {
              this.dialog.id = "payment-method-picker";
              this.dialog.style.display = "";
              this.dialog.style.maxWidth = "420px";
              this.content.style.flex = "1";
              setTimeout(() => this.dialog.classList.add("ani"), 5);
              setTimeout(() => this.modal.classList.add("dim"), 5);
              this.showStripeVATPrompt(this.checkoutOptions.plan || "premium-yearly");
              return;
            } else if (this.checkoutOptions.checkoutMode === "upgrade" && i === "paypal") {
              this._forcePaypal = true;
              this.dialog.style.display = "";
              setTimeout(() => this.dialog.classList.add("ani"), 5);
              setTimeout(() => this.modal.classList.add("dim"), 5);
              this.initializeTraditionalCheckout();
              return;
            } else if (this.checkoutOptions.checkoutMode === "upgrade" && i === "stripe") {
              this.dialog.id = "payment-method-picker";
              this.dialog.style.display = "";
              this.dialog.style.maxWidth = "420px";
              this.content.style.flex = "1";
              setTimeout(() => this.dialog.classList.add("ani"), 5);
              setTimeout(() => this.modal.classList.add("dim"), 5);
              this.showStripeVATPrompt(this.checkoutOptions.plan || "premium-yearly");
              return;
            } else {
              if (t && this.checkoutType === "subscription") {
                this.showPaymentMethodPicker();
              } else {
                this.dialog.style.display = "";
                setTimeout(() => this.dialog.classList.add("ani"), 5);
                setTimeout(() => this.modal.classList.add("dim"), 5);
                this.initializeTraditionalCheckout();
              }
              return;
            }
          });
        }
        async checkStripeAvailability() {
          try {
            const n = await s.In("/api/checkout/stripe/available", "GET", {}, true);
            return {
              available: n.status && n.data?.stripeAvailable,
              provider: n.status ? n.data?.activeSubscriptionProvider : null,
              dunning: !!n.status && !!n.data?.stripeDunning
            };
          } catch (n) {
            console.error("[Checkout] Failed to check Stripe availability:", n);
            return {
              available: false,
              provider: null,
              dunning: false
            };
          }
        }
        showPaymentMethodPicker(e) {
          var i;
          var n;
          const o = this.checkoutOptions.plan || "premium-yearly";
          if ((l.Ny.billingAddress?.countryCode || l.Ny.country || "").toUpperCase() === "IN") {
            this.showStripeVATPrompt(o, e);
            return;
          }
          const s = e ? (0, a.A)("checkoutSelectPayForCredits", e.credits) : (0, a.A)("checkoutSelectPay");
          this.content.innerHTML = "";
          this.dialog.id = "payment-method-picker";
          this.dialog.style.display = "";
          this.dialog.style.maxWidth = "420px";
          this.content.style.flex = "1";
          setTimeout(() => this.dialog.classList.add("ani"), 5);
          setTimeout(() => this.modal.classList.add("dim"), 5);
          this.paymentData.billingAddress = Object.assign({}, l.Ny.billingAddress || {});
          this.setContent(`\n            <div style="padding:24px;text-align:center;">\n                <h2 style="margin:0 0 8px;font-size:20px;font-weight:600;">${(0, a.A)("checkoutChoosePaymentMethod")}</h2>\n                <p style="margin:0 0 24px;color:#666;font-size:14px;">${s}</p>\n                <button id="pick-credit-card" style="\n                    display:flex;align-items:center;justify-content:center;gap:10px;\n                    width:100%;padding:14px 20px;margin-bottom:12px;\n                    border:2px solid #e0e0e0;border-radius:10px;background:#fff;\n                    font-size:16px;font-weight:500;cursor:pointer;transition:border-color .2s,box-shadow .2s;\n                " onmouseover="this.style.borderColor='#635bff';this.style.boxShadow='0 0 0 1px #635bff'"\n                   onmouseout="this.style.borderColor='#e0e0e0';this.style.boxShadow='none'">\n                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>\n                    </svg>\n                    ${(0, a.A)("checkoutCreditDebitCard")}\n                </button>\n                <button id="pick-paypal" style="\n                    display:flex;align-items:center;justify-content:center;gap:10px;\n                    width:100%;padding:14px 20px;\n                    border:2px solid #e0e0e0;border-radius:10px;background:#fff;\n                    font-size:16px;font-weight:500;cursor:pointer;transition:border-color .2s,box-shadow .2s;\n                " onmouseover="this.style.borderColor='#0070ba';this.style.boxShadow='0 0 0 1px #0070ba'"\n                   onmouseout="this.style.borderColor='#e0e0e0';this.style.boxShadow='none'">\n                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0070ba">\n                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337z"/>\n                    </svg>\n                    PayPal\n                </button>\n                <div id="pick-loading" style="display:none;padding:20px;text-align:center;">\n                    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">\n                        <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="none" stroke="#e0e0e0" stroke-width="3"/><path d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>\n                        <p style="color:#666;margin:0;">${(0, a.A)("checkoutRedirecting")}</p>\n                    </div>\n                </div>\n            </div>\n        `);
          if ((i = document.getElementById("pick-credit-card")) !== null && i !== undefined) {
            i.addEventListener("click", async () => {
              this.showStripeVATPrompt(o, e);
            });
          }
          if ((n = document.getElementById("pick-paypal")) !== null && n !== undefined) {
            n.addEventListener("click", () => {
              if (e) {
                this.genCredits = Number(e.credits);
                this.splanId = e.creditPlanCode;
              }
              this._forcePaypal = true;
              this.dialog.id = "chckout";
              this.dialog.style.maxWidth = "";
              this.content.innerHTML = "";
              this.initializeTraditionalCheckout();
            });
          }
        }
        initializeTraditionalCheckout() {
          this.setContent(`\n            <div id="chckout-loading">${(0, a.A)("pleaseWaitWhileCheckoutLoading")}</div>\n            <div id="chckout-options"></div>\n            <div id="chckout-summary"></div>\n        `);
          this.optionUI = (0, n.Ay)("chckout-options");
          this.summaryUI = (0, n.Ay)("chckout-summary");
          if (this.checkoutOptions.bounceSource) {
            this.optionUI.append((0, n.T)("img", {
              id: "back-chckout",
              src: "assets/images/icon/arrow-left-black.svg"
            }));
          }
          if ((0, n.lR)("promo-code", "") !== "") {
            this.checkoutOptions.code = (0, n.lR)("promo-code", "");
          }
          if (this.checkoutType === "subscription") {
            this.splanId = this.checkoutOptions.plan ?? "premium-monthly";
            if (this.splanId.includes("plus")) {
              this.productName = "Pixlr Plus";
            } else if (this.splanId.includes("premium")) {
              this.productName = "Pixlr Premium";
            } else if (this.splanId.includes("team")) {
              this.productName = "Pixlr Team";
            } else if (this.splanId.includes("ultra-max")) {
              this.productName = "Pixlr Ultra Max";
            } else if (this.splanId.includes("ultra")) {
              this.productName = "Pixlr Ultra";
            } else {
              const e = this.splanId.split("-")[0];
              this.productName = `Pixlr ${e.charAt(0).toUpperCase() + e.slice(1)}`;
            }
            Promise.all([s.gs(), s.Vi(this.splanId)]).then(([e, t]) => {
              var s;
              var d;
              var p;
              if (!e.status) {
                throw new Error("Failed to get plan details");
              }
              if (this.checkoutOptions.checkoutMode === "upgrade" && t.status && !this._forcePaypal) {
                this.planBalance = t.data.planBalance;
              }
              this.subscriptionPlans = e.data;
              this.selectedPlan = this.setPlanDetails(this.splanId);
              if (this._forcePaypal) {
                const e = (0, n.T)("div", {
                  id: "wrapper-payment-method",
                  className: "kort",
                  style: "border-radius: 8px; padding: 16px; display: flex; flex-direction: row; align-items: center; gap: 8px;"
                }, (0, n.T)("img", {
                  src: "assets/images/checkout/icon/card.svg",
                  width: 24,
                  height: 24
                }), (0, n.T)("span", {
                  className: "fs-16 fw-7"
                }, "Payment Method: Paypal"));
                this.optionUI.append(e);
                this.selectedPayment = "paypal";
              }
              this.optionUI.append(o.ov(this.splanId, this.productName, this.subscriptionPlans));
              if (this.productName === "Pixlr Team") {
                this.optionUI.append(o.m3());
              }
              if (!this._forcePaypal) {
                this.optionUI.append(o.qV());
              }
              this.optionUI.append(o.YA(l.Ny.billingAddress || {}));
              this.optionUI.append(o.bV());
              this.summaryUI.append(o.z(this.checkoutType, this.productName));
              if (!this.checkoutOptions.showMonthly) {
                document.querySelector("#chckout-planSelection .plan-options").style.display = "none";
              }
              if (this.checkoutOptions.checkoutMode === "upgrade" && t.status === false) {
                this.paymentResult(false, {});
                return;
              }
              const h = t.status && this.checkoutOptions.checkoutMode === "upgrade" && (t.data.paymentMethod === "paypal" || this._forcePaypal) && t.data.existingPlan?.monthDuration === 12 && t.data.newPlan?.monthDuration === 12;
              if ((this.checkoutOptions.checkoutMode === "checkout" && this.productName === "Pixlr Plus" || this.checkoutOptions.checkoutMode === "upgrade" && this.splanId !== "premium-yearly") && !h) {
                if ((s = (0, n.Ay)("wrapper-promo-option")) !== null && s !== undefined) {
                  s.remove();
                }
              }
              if (this.checkoutOptions.checkoutMode === "upgrade" && t.status) {
                document.querySelector("#chckout-planSelection .plan-options").style.display = "none";
                if (t.data.planBalance > 0 && !this._forcePaypal) {
                  (0, n.Ay)("summary-balance-value").innerText = `- ${t.data.planBalance.toFixed(2)}`;
                  (0, n.Ay)("summary-balance").classList.add("inc");
                }
                if (t.data.paymentMethod !== "paypal" && !this._forcePaypal && (0, n.Ay)("paypal-payment-option")) {
                  (0, n.Ay)("paypal-payment-option").style.display = "none";
                }
                const e = t.data.existingPlan?.monthDuration === 12 && t.data.newPlan?.monthDuration === 12;
                const i = t.data.planBalance || 0;
                if (t.data.paymentMethod === "paypal" || this._forcePaypal) {
                  this.selectedPayment = "paypal";
                  if (!this._forcePaypal) {
                    this._forcePaypal = true;
                    const e = (0, n.Ay)("wrapper-payment-method");
                    if (e) {
                      e.remove();
                    }
                    const t = (0, n.T)("div", {
                      id: "wrapper-payment-method",
                      style: "border-radius: 8px; padding: 16px; display: flex; flex-direction: row; align-items: center; gap: 8px; background: transparent;"
                    }, (0, n.T)("img", {
                      src: "assets/images/checkout/icon/card.svg",
                      width: 24,
                      height: 24
                    }), (0, n.T)("span", {
                      className: "fs-16 fw-7"
                    }, "Payment Method: Paypal"));
                    this.optionUI.prepend(t);
                  }
                  this.summaryUI.append(o.aJ());
                  if (e && i > 0 && (0, n.Ay)("promocode-input")) {
                    (0, n.Ay)("promocode-input").value = "PYPL-25-UPGRADE";
                    (0, n.Ay)("promocode-input").readOnly = true;
                    (0, n.Ay)("promocode-input").classList.add("disabled");
                    (0, n.Ay)("promocode-submit").style.display = "none";
                    (0, n.Ay)("promo-section").style.cursor = "not-allowed";
                    const e = (0, n.Ay)("wrapper-promo-option");
                    if (e) {
                      e.open = true;
                    }
                    this.appliedPromo = {
                      code: "PYPL-25-UPGRADE",
                      name: "PAYPAL UPGRADE 25% OFF",
                      amount: i,
                      productName: [this.productName],
                      productCode: [this.splanId]
                    };
                  }
                }
              }
              if ((0, n.Ay)("paypal-payment-option") && this.productName === "Pixlr Team") {
                (0, n.Ay)("paypal-payment-option").style.display = "none";
              }
              if (this.checkoutOptions.code) {
                if ((0, n.Ay)("promocode-input")) {
                  (0, n.Ay)("promocode-input").value = this.checkoutOptions.code;
                }
                this.applyPromoCode();
                this.checkoutOptions.code = "";
              }
              if (this._forcePaypal) {
                if ((d = (0, n.Ay)("chckout-loading")) !== null && d !== undefined) {
                  d.remove();
                }
              } else if ((p = (0, n.Ay)("chckout-loading")) !== null && p !== undefined) {
                p.remove();
              }
              this.loadEventListener();
            });
          } else if (this.checkoutType === "seats") {
            this.loadSeatsUI();
            this.selectSeats(document.querySelector(".seat-option"));
          } else if (this.checkoutType === "credits") {
            if (this._forcePaypal) {
              this.loadCreditsUI();
            } else {
              this.loadCreditPickerUI();
            }
          } else if (this.checkoutType === "paid") {
            this.splanId = this.checkoutOptions.plan;
            if (!this.splanId) {
              throw new Error("Invalid plan!");
            }
            this.productName = "Pixlr Premium";
            s.gs(["summer-campaign-ai-credits-2000", "summer-campaign-ai-credits-5000"]).then(e => {
              var t;
              if (!e.status) {
                throw new Error("Failed to get plan details");
              }
              this.subscriptionPlans = e.data;
              this.selectedPlan = this.setPlanDetails(this.splanId);
              if (this.checkoutOptions.code === "SUMMERCAMPAIGN") {
                this.applyPromoCode();
                this.checkoutOptions.code = "";
              }
              this.optionUI.append(o.qV());
              this.optionUI.append(o.YA(l.Ny.billingAddress || {}));
              this.summaryUI.append(o.z(this.checkoutType, this.selectedPlan.name));
              (0, n.Ay)("paypal-payment-option").style.display = "none";
              if ((t = (0, n.Ay)("chckout-loading")) !== null && t !== undefined) {
                t.remove();
              }
              this.loadEventListener();
            });
          }
        }
        async checkStripeForCredits(e) {
          const a = e ? Number(e) : this.genCredits;
          if (this.checkoutType === "credits" && a !== 0) {
            try {
              const e = await s.In("/api/checkout/stripe/available", "GET", {}, true);
              if (e.status && e.data?.stripeAvailable) {
                const e = this.getCreditPlanCode(a);
                if (e) {
                  const t = await s.In("/api/checkout/stripe/credits", "POST", Object.assign({
                    creditPlanCode: e,
                    currency: this.currency || "USD",
                    uiMode: "hosted",
                    cancelUrl: window.location.href,
                    promoCode: this.appliedPromo?.code || ""
                  }, this.checkoutOptions.redirectUrl ? {
                    redirectUrl: this.checkoutOptions.redirectUrl
                  } : {}));
                  if (t.status && t.data?.sessionUrl) {
                    window.location.href = t.data.sessionUrl;
                  }
                }
              }
            } catch (o) {
              console.error("[Checkout] Error checking Stripe for credits:", o);
            }
          }
        }
        getCreditPlanCode(e) {
          return {
            200: "Credit:200",
            500: "Credit:500",
            1000: "credit:1000",
            2000: "credit:2000",
            5000: "credit:5000"
          }[e] || null;
        }
        showStripeVATPrompt(e, t) {
          this.proceedToStripeCheckout(e, t);
        }
        async proceedToStripeCheckout(e, t) {
          var r;
          this.content.innerHTML = "";
          this.setContent("\n            <div style=\"padding:24px;text-align:center;\">\n                <div style=\"display:flex;flex-direction:column;align-items:center;gap:16px;\">\n                    <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"#e0e0e0\" stroke-width=\"3\"/><path d=\"M12 2a10 10 0 0 1 10 10\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\" stroke-linecap=\"round\"><animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 12 12\" to=\"360 12 12\" dur=\"1s\" repeatCount=\"indefinite\"/></path></svg>\n                    <p style=\"color:#666;margin:0;\">Redirecting to payment...</p>\n                </div>\n            </div>\n        ");
          try {
            if (t) {
              console.log("[Checkout] Redirecting to Stripe hosted checkout for credits:", t.creditPlanCode);
              const e = await s.In("/api/checkout/stripe/credits", "POST", Object.assign(Object.assign({
                creditPlanCode: t.creditPlanCode,
                currency: this.currency,
                uiMode: "hosted",
                cancelUrl: window.location.href
              }, this.checkoutOptions.redirectUrl ? {
                redirectUrl: this.checkoutOptions.redirectUrl
              } : {}), {
                promoCode: this.appliedPromo?.code || ""
              }));
              if (!e.status || !e.data?.sessionUrl) {
                throw new Error("Failed to create credit checkout session");
              }
              window.location.href = e.data.sessionUrl;
            } else if (this.checkoutOptions.checkoutMode === "upgrade") {
              const t = await s.In("/api/checkout/stripe/upgrade", "POST", Object.assign({
                newPlanCode: e
              }, this.checkoutOptions.redirectUrl ? {
                redirectUrl: this.checkoutOptions.redirectUrl
              } : {}));
              if (!t.status || !t.data?.sessionUrl) {
                throw new Error(t.message || "Failed to create upgrade session");
              }
              window.location.href = t.data.sessionUrl;
            } else {
              if (this.checkoutType === "credits") {
                this.dialog.id = "chckout";
                this.dialog.style.maxWidth = "";
                this.content.innerHTML = "";
                this.initializeTraditionalCheckout();
                return;
              }
              {
                const t = await s.In("/api/checkout/stripe/create-checkout", "POST", Object.assign({
                  splan: e,
                  currency: this.currency,
                  promoCode: this.checkoutOptions.code || "",
                  uiMode: "hosted",
                  cancelUrl: window.location.href
                }, this.checkoutOptions.redirectUrl ? {
                  redirectUrl: this.checkoutOptions.redirectUrl
                } : {}));
                if (!t.status || !t.data?.sessionUrl) {
                  throw new Error(t.message || "Failed to create checkout session");
                }
                window.location.href = t.data.sessionUrl;
              }
            }
          } catch (c) {
            console.error("[Checkout] Stripe redirect error:", c);
            this.dialog.style.display = "";
            this.dialog.classList.add("ani");
            this.modal.classList.add("dim");
            this.content.innerHTML = "";
            this.setContent("\n                <div style=\"padding:24px;text-align:center;\">\n                    <p style=\"color:#e53e3e;margin:0 0 16px;\">Something went wrong. Please try again.</p>\n                    <button id=\"stripe-retry\" style=\"\n                        padding:12px 24px;border:none;border-radius:8px;\n                        background:#635bff;color:#fff;font-size:14px;font-weight:500;cursor:pointer;\n                    \">Try again</button>\n                </div>\n            ");
            if ((r = document.getElementById("stripe-retry")) !== null && r !== undefined) {
              r.addEventListener("click", () => {
                this.showStripeVATPrompt(e, t);
              });
            }
          }
        }
      }
      h.CHECKOUT_LOCATION_STORAGE_KEY = "pixlr_checkout_location";
      const u = h;
    }
