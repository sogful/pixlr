window.__editorModules[9754] = function (t, e, s) {
      s.d(e, {
        A: () => p
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(8484);
      var o = s(4947);
      var r = s(7135);
      var h = s(9671);
      var l = s(5432);
      var c = s(5833);
      var d = s(2443);
      class u extends c.A {
        constructor(t, e = {}) {
          if ((0, i.lR)("RequestFrom", "")) {
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
            var t;
            this.optionUI.append(n.m3());
            this.optionUI.append(n.qV());
            this.optionUI.append(n.YA(l.Ny.billingAddress || {}));
            this.summaryUI.append(n.z(this.checkoutType, this.productName));
            if ((0, i.Ay)("paypal-payment-option")) {
              (0, i.Ay)("paypal-payment-option").style.display = "none";
            }
            if ((t = (0, i.Ay)("chckout-loading")) !== null && t !== undefined) {
              t.remove();
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
            o.kP().then(t => {
              var e;
              var a;
              if ((e = (0, i.Ay)("chckout-loading")) !== null && e !== undefined) {
                e.remove();
              }
              if (!t.status || !t.data?.length) {
                this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #666;\">No credit plans available at the moment.</p>";
                return;
              }
              this._creditPlans = t.data;
              const o = this.currency || "USD";
              this.optionUI.append(n.iZ(t.data, o));
              document.querySelectorAll(".credit-option").forEach(t => {
                t.addEventListener("click", async () => {
                  const e = t.dataset.value;
                  const s = t.dataset.planCode || t.dataset.plancode;
                  if (!s) {
                    return;
                  }
                  const {
                    provider: i
                  } = await this.checkStripeAvailability();
                  if (i === "stripe") {
                    this.dialog.id = "payment-method-picker";
                    this.dialog.style.maxWidth = "420px";
                    this.content.style.flex = "1";
                    this.showStripeVATPrompt(this.checkoutOptions.plan || "premium-yearly", {
                      credits: e,
                      creditPlanCode: s
                    });
                    return;
                  } else if (i === "paypal") {
                    this.genCredits = Number(e);
                    this.splanId = s;
                    this._forcePaypal = true;
                    this.dialog.id = "chckout";
                    this.dialog.style.maxWidth = "";
                    this.content.innerHTML = "";
                    this.initializeTraditionalCheckout();
                    return;
                  } else {
                    this.showPaymentMethodPicker({
                      credits: e,
                      creditPlanCode: s
                    });
                    return;
                  }
                });
              });
              if ((a = this.optionUI.querySelector(".subscribe-link")) !== null && a !== undefined) {
                a.addEventListener("click", () => {
                  this.cleanUp();
                  new d.default("credits-checkout", "credit");
                });
              }
            }).catch(t => {
              var e;
              if ((e = (0, i.Ay)("chckout-loading")) !== null && e !== undefined) {
                e.remove();
              }
              console.error("[Checkout] Failed to load credit plans:", t);
              this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #cc0000;\">Failed to load credit plans. Please try again.</p>";
            });
          };
          this.loadCreditsUI = () => {
            o.kP().then(t => {
              var e;
              var a;
              var o;
              if ((e = (0, i.Ay)("chckout-loading")) !== null && e !== undefined) {
                e.remove();
              }
              if (!t.status || !t.data?.length) {
                this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #666;\">No credit plans available at the moment.</p>";
                return;
              }
              this._creditPlans = t.data;
              const r = this.currency || "USD";
              const h = (0, i.T)("div", {
                id: "wrapper-payment-method",
                className: "kort",
                style: "border-radius: 8px; padding: 16px; display: flex; flex-direction: row; align-items: center; gap: 8px;"
              }, (0, i.T)("img", {
                src: "assets/images/checkout/icon/card.svg",
                width: 24,
                height: 24
              }), (0, i.T)("span", {
                className: "fs-16 fw-7"
              }, "Payment Method: Paypal"));
              this.optionUI.append(h);
              this.selectedPayment = "paypal";
              this.optionUI.append(n.iZ(t.data, r));
              if ((a = this.optionUI.querySelector(".subscribe-link")) !== null && a !== undefined) {
                a.addEventListener("click", () => {
                  this.cleanUp();
                  new d.default("credits-checkout", "credit");
                });
              }
              this.optionUI.append(n.YA(l.Ny.billingAddress || {}));
              this.summaryUI.append(n.z(this.checkoutType, this.productName));
              let c = null;
              if (this.genCredits) {
                c = document.querySelector(`.credit-option[data-value="${this.genCredits}"]`);
              }
              c ||= document.querySelector(".credit-option");
              if (c) {
                this.selectCredit(c, true);
              }
              if ((o = (0, i.Ay)("chckout-loading")) !== null && o !== undefined) {
                o.remove();
              }
              this.loadEventListener();
            }).catch(t => {
              var e;
              if ((e = (0, i.Ay)("chckout-loading")) !== null && e !== undefined) {
                e.remove();
              }
              console.error("[Checkout] Failed to load credit plans:", t);
              this.optionUI.innerHTML = "<p style=\"padding: 16px; color: #cc0000;\">Failed to load credit plans. Please try again.</p>";
            });
          };
          this.loadEventListener = () => {
            var t;
            var e;
            var s;
            var a;
            var n;
            var o;
            var r;
            var h;
            if ((t = (0, i.Ay)("back-chckout")) !== null && t !== undefined) {
              t.addEventListener("click", this.backPreviousPopup);
            }
            document.querySelectorAll("input[name=\"payment\"][type=\"radio\"]").forEach(t => {
              t.addEventListener("change", () => this.setPaymentMethod(t));
            });
            document.querySelectorAll(".plan-options").forEach(t => {
              t.addEventListener("click", () => this.setPlan(t));
            });
            if ((e = (0, i.Ay)("promocode-submit")) !== null && e !== undefined) {
              e.addEventListener("click", () => this.applyPromoCode());
            }
            if ((s = (0, i.Ay)("promocode-input")) !== null && s !== undefined) {
              s.addEventListener("input", this.promoCodeOnInput);
            }
            if ((a = (0, i.Ay)("validate-vat")) !== null && a !== undefined) {
              a.addEventListener("click", () => this.validateVATNumber());
            }
            if ((n = (0, i.Ay)("vat-select")) !== null && n !== undefined) {
              n.addEventListener("change", () => this.handleVATSelect());
            }
            document.querySelectorAll(".seat-option").forEach(t => {
              t.addEventListener("click", () => this.selectSeats(t));
              if (t.querySelector("input")) {
                t.querySelector("input").addEventListener("keyup", () => this.selectSeats(t));
              }
            });
            document.querySelectorAll(".credit-option").forEach(t => {
              t.addEventListener("click", () => this.selectCredit(t));
            });
            document.querySelectorAll("#billing-form input").forEach(t => {
              this.paymentData.billingAddress[t.id] = t.value;
              t.addEventListener("keyup", () => {
                const e = t.id.replace("checkout", "").charAt(0).toLowerCase() + t.id.replace("checkout", "").slice(1);
                this.paymentData.billingAddress[e] = t.value;
                if (t.id === "vatNumber") {
                  const e = (0, i.Ay)("vat-select");
                  if (e && !t.readOnly) {
                    e.value = "__new__";
                  }
                  this.setIsReverseCharge();
                }
                if (t.id === "checkoutState") {
                  this.paymentData.billingAddress.stateOrProvince = t.value;
                }
                this.isReadyToPay();
              });
            });
            this.paymentData.billingAddress = Object.assign({}, l.Ny.billingAddress || {});
            if ((o = (0, i.Ay)("country")) !== null && o !== undefined) {
              o.addEventListener("change", this.handleUserCountryChange);
            }
            if ((r = (0, i.Ay)("state-select")) !== null && r !== undefined) {
              r.addEventListener("change", this.handleUserStateChange);
            }
            this.populateCountry();
            if ((h = (0, i.Ay)("proceed-payment")) !== null && h !== undefined) {
              h.addEventListener("click", () => this.proceedPayment());
            }
          };
          this.selectCredit = (t, e = false) => {
            document.querySelectorAll(".credit-option").forEach(t => {
              t.classList.remove("active");
            });
            t.classList.add("active");
            if (t.dataset.value) {
              this.genCredits = Number(t.dataset.value);
            } else {
              this.genCredits = 0;
            }
            if (t.dataset.planCode || t.dataset.plancode) {
              this.splanId = t.dataset.planCode || t.dataset.plancode;
            }
            this.updatePrice();
          };
          this.selectSeats = t => {
            const e = document.querySelectorAll(".seat-option");
            const s = (0, i.Ay)("proceed-payment");
            this.isReadyToPay();
            e.forEach(e => {
              if (e !== t) {
                e.classList.remove("active");
              }
            });
            t.classList.add("active");
            if (t.classList.contains("active")) {
              if (t.classList.contains("seat-option-custom")) {
                const e = t.getElementsByTagName("input")[0];
                if (e.value === "" || Number(e.value) === 0) {
                  s.disabled = true;
                  this.extraSeats = 0;
                } else {
                  this.extraSeats = Number(e.value);
                }
              } else if (t.dataset.value) {
                this.extraSeats = Number(t.dataset.value);
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
              const t = sessionStorage.getItem(u.CHECKOUT_LOCATION_STORAGE_KEY);
              if (t) {
                return JSON.parse(t);
              } else {
                return null;
              }
            } catch (c) {
              return null;
            }
          };
          this.storeLocation = (t, e) => {
            try {
              sessionStorage.setItem(u.CHECKOUT_LOCATION_STORAGE_KEY, JSON.stringify({
                countryCode: t,
                stateCode: e || ""
              }));
            } catch (c) {}
          };
          this.handleUserCountryChange = () => {
            this.hasUserLocationOverride = true;
            this.updateCountry();
            const t = this.paymentData.billingAddress.countryCode;
            const e = this.paymentData.billingAddress.stateCode;
            if (t) {
              this.storeLocation(t, e);
            }
          };
          this.handleUserStateChange = () => {
            this.hasUserLocationOverride = true;
            this.updateState();
            const t = this.paymentData.billingAddress.countryCode;
            const e = this.paymentData.billingAddress.stateCode;
            if (t) {
              this.storeLocation(t, e);
            }
          };
          this.applyLocation = (t, e) => {
            const s = (0, i.Ay)("country");
            const a = this.countryList.country[t];
            if (a) {
              for (let e = 0; e < s.options.length; e++) {
                if (s.options[e].value === a) {
                  s.selectedIndex = e;
                  this.paymentData.billingAddress.country = a;
                  this.paymentData.billingAddress.countryCode = t;
                  break;
                }
              }
              this.updateCountry();
              if (e && this.countryList.countryStates[t]) {
                const s = this.countryList.countryStates[t][e];
                if (s) {
                  const t = (0, i.Ay)("state-select");
                  for (let e = 0; e < t.options.length; e++) {
                    if (t.options[e].value === s) {
                      t.selectedIndex = e;
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
              const s = await o.X6();
              const a = s == null ? undefined : s.data;
              if (a && a.country && Object.keys(a.country).length !== 0) {
                this.countryList = a;
              } else {
                const t = {
                  country: o.FS,
                  countryEU: o.eC,
                  country3Tier: o.ED,
                  tax: {},
                  countryStates: {}
                };
                this.countryList = t;
              }
              const n = (0, i.Ay)("country");
              if (!n) {
                console.error("[Checkout] Country select element not found");
                return;
              }
              const r = l.Ny?.billingAddress?.countryCode;
              const h = l.Ny?.billingAddress?.stateCode;
              const c = r && (!this.countryList.countryStates[r] || h);
              let d = r || l.Ny?.country || "US";
              for (const t in this.countryList.country) {
                const e = (0, i.T)("option", {
                  value: this.countryList.country[t]
                }, this.countryList.country[t]);
                if (d === t) {
                  e.selected = true;
                  this.paymentData.billingAddress.country = this.countryList.country[t];
                }
                n.append(e);
              }
              this.updateCountry();
              const u = o.VM(3000).catch(() => null);
              if (c) {
                if (h && this.countryList.countryStates[r]) {
                  const t = (0, i.Ay)("state-select");
                  const e = this.countryList.countryStates[r][h];
                  if (e && t) {
                    for (let s = 0; s < t.options.length; s++) {
                      if (t.options[s].value === e) {
                        t.selectedIndex = s;
                        break;
                      }
                    }
                    this.updateState();
                  }
                }
                return;
              }
              const p = this.getStoredLocation();
              if (p == null ? undefined : p.countryCode) {
                this.hasUserLocationOverride = true;
                this.applyLocation(p.countryCode, p.stateCode);
                return;
              }
              const g = await u;
              if ((g == null ? undefined : g.status) && g.countryIso && this.countryList.country[g.countryIso]) {
                const t = g.stateIso;
                const e = !!this.countryList.countryStates[g.countryIso] && t && this.countryList.countryStates[g.countryIso][t];
                this.applyLocation(g.countryIso, e ? t : undefined);
              }
            } catch (s) {
              console.error("[Checkout] Failed to populate country dropdown:", s);
              const t = (0, i.Ay)("country");
              if (t) {
                this.countryList = {
                  country: o.FS,
                  countryEU: o.eC,
                  country3Tier: o.ED,
                  tax: {},
                  countryStates: {}
                };
                for (const e in o.FS) {
                  const s = (0, i.T)("option", {
                    value: o.FS[e]
                  }, o.FS[e]);
                  if (e === "US") {
                    s.selected = true;
                  }
                  t.append(s);
                }
                this.paymentData.billingAddress.country = "United States";
                this.paymentData.billingAddress.countryCode = "US";
              }
            }
          };
          this.populateState = t => {
            this.paymentData.billingAddress.stateOrProvince = "";
            this.paymentData.billingAddress.state = "";
            this.paymentData.billingAddress.stateCode = "";
            const s = this.countryList;
            const n = (0, i.Ay)("state-select");
            const o = Object.keys(s.countryStates).includes(t);
            (0, i.Ay)("checkoutState").parentElement.style.display = o ? "none" : "flex";
            n.parentElement.style.display = o ? "flex" : "none";
            if (o) {
              const o = s.countryStates[t];
              const r = l.Ny?.billingAddress?.stateCode || Object.keys(o).find(t => o[t] === (0, i.Ay)("checkoutState").value);
              (0, i.Ay)("wrapper-billing-option").open = true;
              (0, i.Ay)("payment-info-message").classList.add("inc");
              (0, i.Ay)("payment-info-message").innerHTML = `* ${(0, a.A)("stateRequired")}`;
              if (n.dataset.country === t && n.options.length > 1) {
                return;
              }
              n.innerHTML = "";
              const h = (0, i.T)("option", {
                value: ""
              }, (0, a.A)("checkoutPleaseSelectState") || "— Please Select a State —");
              h.selected = true;
              h.disabled = false;
              n.append(h);
              n.setAttribute("data-country", t);
              let c = false;
              Object.entries(o).forEach(([t, e]) => {
                const s = (0, i.T)("option", {
                  value: e
                }, e);
                if (r === t) {
                  s.selected = true;
                  c = true;
                }
                n.append(s);
              });
              if (!c) {
                n.selectedIndex = 0;
              }
              this.updateState();
            } else {
              (0, i.Ay)("payment-info-message").classList.remove("inc");
              (0, i.Ay)("payment-info-message").innerHTML = "";
              n.innerHTML = "";
              n.removeAttribute("data-country");
              this.updateState();
            }
          };
          this.recalculateUpgradeVAT = async () => {
            var s;
            var a;
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              try {
                const t = await o.In("/checkout/upgrade/preview", "POST", {
                  plan: this.splanId,
                  billingAddress: this.paymentData.billingAddress
                });
                if (t.status && t.data) {
                  this.planBalance = t.data.planBalance;
                  if ((this.selectedPayment === "paypal" || !!this._forcePaypal) && this.appliedPromo?.code === "PYPL-25-UPGRADE" && typeof this.appliedPromo.amount == "number") {
                    this.appliedPromo.amount = t.data.planBalance;
                  }
                  const o = (((s = this.paymentData.billingAddress.vatNumber) === null || s === undefined ? undefined : s.trim()) || "") && this.getValidVATNumbers().includes(this.paymentData.billingAddress.vatNumber);
                  const l = (a = this.countryList?.countryEU) === null || a === undefined ? undefined : a.includes(this.paymentData.billingAddress.countryCode);
                  if (o && l) {
                    this.tax.status = true;
                    this.tax.percentage = 0;
                    this.tax.originalVatRate = t.data.tax?.percentage || 0;
                    this.tax.isReverseCharge = true;
                    this.tax.reverseChargeReason = "EU B2B - Article 44, 196";
                    this.tax.type = t.data.tax?.taxType || this.tax.type;
                  } else if (t.data.tax?.status) {
                    this.tax.status = true;
                    this.tax.percentage = t.data.tax.percentage;
                    this.tax.type = t.data.tax.taxType || this.tax.type;
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
            const t = (0, i.Ay)("country").value;
            const e = Object.keys(this.countryList.country).find(e => this.countryList.country[e] === t);
            if (this.paymentData.billingAddress.countryCode && this.paymentData.billingAddress.countryCode !== e) {
              this.paymentData.billingAddress.vatNumber = "";
              this.paymentData.billingAddress.isVATNumberValid = false;
              const t = (0, i.Ay)("vatNumber");
              if (t) {
                t.value = "";
                t.readOnly = false;
              }
            }
            this.paymentData.billingAddress.country = t;
            this.paymentData.billingAddress.countryCode = e;
            this.tax = Object.assign(Object.assign({}, this.tax), this.getTaxFromCountryState(e));
            if (this.countryList.countryEU.some(t => t === e)) {
              this.currency = "EUR";
              this.currencySymbol = "€";
            } else {
              this.currency = "USD";
              this.currencySymbol = "$";
            }
            document.querySelectorAll(".currency").forEach(t => t.innerHTML = this.currency);
            document.querySelectorAll(".currency-symbol").forEach(t => t.innerHTML = this.currencySymbol);
            this.populateState(e);
            const s = (0, i.Ay)("checkout-vat-row");
            if (s) {
              s.style.display = this.countryList.countryEU.includes(e) ? "flex" : "none";
            }
            this.populateVATSelect();
            this.isReadyToPay();
            this.setIsReverseCharge();
            this.recalculateUpgradeVAT();
          };
          this.updateState = () => {
            const t = this.countryList.countryStates[this.paymentData.billingAddress.countryCode];
            const e = (0, i.Ay)("state-select").value;
            const s = (0, i.Ay)("state-select").parentElement.style.display !== "none";
            const n = (0, i.Ay)("checkoutState").value;
            if (s) {
              (0, i.Ay)("checkoutState").value = e;
            }
            if (s && e) {
              (0, i.Ay)("payment-info-message").classList.remove("inc");
              (0, i.Ay)("payment-info-message").innerHTML = "";
            } else if (s) {
              (0, i.Ay)("payment-info-message").classList.add("inc");
              (0, i.Ay)("payment-info-message").innerHTML = `* ${(0, a.A)("stateRequired")}`;
            }
            this.paymentData.billingAddress.stateOrProvince = s ? e : n;
            this.paymentData.billingAddress.state = s ? e : n;
            this.paymentData.billingAddress.stateCode = t ? Object.keys(t).find(s => t[s] === e) : "";
            const o = this.paymentData.billingAddress.countryCode;
            const r = this.paymentData.billingAddress.stateCode;
            this.tax = Object.assign(Object.assign({}, this.tax), this.getTaxFromCountryState(o, r));
            this.isReadyToPay();
            this.setIsReverseCharge();
            this.recalculateUpgradeVAT();
          };
          this.getTaxFromCountryState = (t, e) => {
            const r = this.countryList.tax[t];
            const h = {};
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              h.status = false;
              h.percentage = 0;
            } else if (r) {
              h.status = true;
              h.percentage = e ? r.states?.[e] ?? r.countryRate ?? 0 : r.countryRate;
              h.type = e && r.stateType?.[e] ? r.stateType[e] : r.countryType;
            } else {
              h.status = false;
            }
            return h;
          };
          this.applyPromoCode = async () => {
            const e = (0, i.Ay)("promocode-submit");
            if ((e == null ? undefined : e.dataset.applied) === "true") {
              this.removePromoCode();
              return;
            }
            const s = (0, i.Ay)("promocode-input");
            let a = this.checkoutOptions?.code ? this.checkoutOptions.code : s.value.toUpperCase().trim();
            try {
              const t = await o.Pe(a, this.productName, this.splanId);
              if (!t.status) {
                throw new Error("Invalid promocode!");
              }
              this.appliedPromo = t.promo;
              if (s) {
                s.readOnly = true;
              }
              if (e) {
                e.innerText = "Remove";
                e.dataset.applied = "true";
              }
              this.updatePrice();
            } catch ({
              response: n,
              message: r
            }) {
              this.removePromoCode();
              (0, i.Ay)("promocode-error").style.display = "block";
              setTimeout(() => {
                (0, i.Ay)("promocode-error").style.display = "none";
              }, 1500);
            }
          };
          this.removePromoCode = () => {
            const t = (0, i.Ay)("promocode-submit");
            const e = (0, i.Ay)("promocode-input");
            t.innerText = "Apply";
            delete t.dataset.applied;
            this.appliedPromo = undefined;
            this.updatePrice();
            e.readOnly = false;
            e.value = "";
          };
          this.promoCodeOnInput = t => {
            const e = t.target;
            e.value = e.value.toUpperCase();
          };
          this.updatePrice = () => {
            let o;
            if (this.checkoutType === "subscription" || this.checkoutType === "paid") {
              if (this.selectedPlan.pricing[this.currency]) {
                o = this.selectedPlan.pricing[this.currency].amount;
              } else {
                o = this.selectedPlan.pricing.USD.amount;
                this.currency = "USD";
                this.currencySymbol = "$";
                document.querySelectorAll(".currency").forEach(t => t.innerHTML = this.currency);
                document.querySelectorAll(".currency-symbol").forEach(t => t.innerHTML = this.currencySymbol);
              }
            } else if (this.checkoutType === "seats" || this.checkoutType === "credits") {
              o = 0;
            }
            let r = o;
            let h = 0;
            let l = 0;
            let c = 0;
            if (this.checkoutType === "subscription") {
              (0, i.Ay)("summary-base-value").innerText = o.toFixed(2);
              (0, i.Ay)("summary-base-credits").innerText = (0, a.A)("creditForAIGeneration", this.getCreditsByPlan());
            } else if (this.checkoutType === "credits") {
              const e = this._creditPlans.find(t => t.credits === this.genCredits);
              if (e) {
                const s = e.pricing?.[this.currency] || {
                  amount: e.amount
                };
                r = o = s.amount;
              } else {
                r = o = 0;
              }
              (0, i.Ay)("summary-credits-amount").innerText = (0, a.A)("totalGenerativeCredits", this.genCredits.toFixed());
              (0, i.Ay)("summary-credits-value").innerText = o.toFixed(2);
              (0, i.Ay)("summary-credits").classList.add("inc");
            } else if (this.checkoutType === "paid") {
              (0, i.Ay)("summary-base-value").innerText = o.toFixed(2);
              (0, i.Ay)("summary-base-credits").innerText = (0, a.A)("creditForAIGeneration", this.getCreditsByPlan());
            }
            (0, i.Ay)("summary-subtotal-value").innerText = o.toFixed(2);
            if (this.checkoutType !== "paid" && this.appliedPromo) {
              const {
                productCode: t,
                productName: e,
                percentage: s,
                amount: n
              } = this.appliedPromo;
              (0, i.Ay)("summary-promo-remarks").innerText = s ? (0, a.A)("discountPercentageOffFirstPayingMonth").replace("{discountAmount}", `${s}%`) : (0, a.A)("discountAmountOnlyFirstPayingMonth").replace("{discountAmount}", n.toFixed(2));
              if (e.includes(this.productName) && t.includes(this.splanId)) {
                if (s) {
                  h = o * s / 100;
                } else if (n) {
                  h = n;
                }
                (0, i.Ay)("summary-promo-value").innerText = `- ${h.toFixed(2)}`;
                (0, i.Ay)("summary-promo").classList.add("inc");
              }
            } else {
              (0, i.Ay)("summary-promo").classList.remove("inc");
            }
            if (this.productName !== "Pixlr Team" && this.checkoutType !== "seats" || !this.extraSeats) {
              (0, i.Ay)("summary-seats").classList.remove("inc");
            } else {
              const t = this.getSingleSeatPrice();
              l = this.extraSeats * t;
              (0, i.Ay)("summary-seats-count").innerText = `x${this.extraSeats} seats`;
              (0, i.Ay)("summary-seats-value").innerText = l.toFixed(2);
              (0, i.Ay)("summary-seats").classList.add("inc");
            }
            const d = this.selectedPayment === "paypal" || this._forcePaypal ? 0 : this.planBalance;
            r = o - h - d + l;
            if (this.checkoutOptions?.checkoutMode === "upgrade") {
              (0, i.Ay)("summary-subtotal-value").innerText = r.toFixed(2);
            }
            (0, i.Ay)("summary-billing-note").innerHTML = `${(0, a.A)("checkoutBillingCountry")}: ${this.paymentData.billingAddress.country}`;
            if (this.tax.status) {
              c = r * (this.tax.percentage / 100);
              (0, i.Ay)("summary-tax-value").innerHTML = c.toFixed(2);
              (0, i.Ay)("summary-total-tax").style.display = "block";
              (0, i.Ay)("summary-total-tax").innerHTML = this.tax.isReverseCharge ? "Reverse charge applies - You will self-account for VAT" : `(incl. ${this.tax.type ?? "GST"})`;
              if (this.countryList.countryStates.hasOwnProperty(this.paymentData.billingAddress.countryCode) && this.paymentData.billingAddress.stateCode) {
                (0, i.Ay)("summary-tax-label").innerHTML = `${this.tax.type} (${this.tax.percentage}% - ${this.paymentData.billingAddress.stateCode}, ${this.paymentData.billingAddress.country} )`;
                (0, i.Ay)("summary-billing-note").innerHTML = `${(0, a.A)("checkoutBillingCountry")}: ${this.paymentData.billingAddress.state}, ${this.paymentData.billingAddress.country}`;
              } else {
                (0, i.Ay)("summary-tax-label").innerHTML = `${this.tax.type} (${this.tax.percentage}% - ${this.paymentData.billingAddress.country})`;
              }
              (0, i.Ay)("summary-tax").classList.add("inc");
            } else {
              (0, i.Ay)("summary-tax").classList.remove("inc");
              (0, i.Ay)("summary-total-tax").style.display = "none";
            }
            r += c;
            if (this.checkoutType === "paid" && this.appliedPromo?.code) {
              const t = this.appliedPromo.percentage;
              const e = r * (1 - t / 100);
              const s = (r - e).toFixed(2);
              r = +e.toFixed(2);
              (0, i.Ay)("summary-summer-campaign-discount").innerText = `-${s}`;
              (0, i.Ay)("summary-summer-campaign-note").innerText = `${(0, a.A)("limitedTimeDiscountSummerDesc")}`;
              (0, i.Ay)("summary-summer-campaign").classList.add("inc");
            } else {
              (0, i.Ay)("summary-summer-campaign").classList.remove("inc");
            }
            document.querySelectorAll(".total-price").forEach(t => t.innerHTML = r.toFixed(2));
          };
          this.setPaymentMethod = t => {
            let e = t.value;
            t.checked = true;
            if (t.dataset.value === "saved-card") {
              e = "saved-card";
            }
            switch (e) {
              case "paypal":
                this.selectedPayment = "paypal";
                (0, i.Ay)("wrapper-payment-method").open = false;
                (0, i.Ay)("component-container").classList.add("blocked");
                (0, i.Ay)("saved-cards").classList.add("blocked");
                (0, i.Ay)("payment-info-message").classList.remove("inc");
                (0, i.Ay)("payment-info-message").innerHTML = "";
                this.isReadyToPay();
                break;
              case "saved-card":
                this.selectedPayment = "saved-card";
                this.selectedSavedCard = t.id;
                (0, i.Ay)("wrapper-billing-option").style.display = "inline-flex";
                (0, i.Ay)("component-container").classList.add("blocked");
                (0, i.Ay)("saved-cards").classList.remove("blocked");
                if (t.className.includes("selected")) {
                  t.classList.remove("selected");
                  this.setPaymentMethod((0, i.Ay)("cc-radio-option"));
                  return;
                }
                document.querySelectorAll(".saved-card-item").forEach(t => {
                  t.classList.remove("selected");
                  t.classList.add("blocked");
                });
                t.classList.add("selected");
                t.classList.remove("blocked");
                this.isReadyToPay();
                break;
              default:
                this.selectedPayment = "credit";
                (0, i.Ay)("wrapper-billing-option").style.display = "inline-flex";
                (0, i.Ay)("component-container").classList.remove("blocked");
                (0, i.Ay)("saved-cards").classList.remove("blocked");
                this.isReadyToPay();
            }
          };
          this.setPlan = t => {
            this.splanId = t.dataset.plan;
            this.selectedPlan = this.setPlanDetails(this.splanId);
            document.querySelector(".plan-options.selected").classList.remove("selected");
            t.classList.add("selected");
            this.updatePrice();
          };
          this.setPlanDetails = t => this.subscriptionPlans.filter(e => e.code === t)[0];
          this.proceedPayment = async () => {
            const s = (0, i.Ay)("proceed-payment");
            if (s.disabled) {
              return;
            }
            s.disabled = true;
            if (this.selectedPayment === "paypal") {
              return this.loadPaypal();
            }
            s.style.cursor = "wait";
            const a = `/checkout/payments/${this.checkoutType}?platform=${this.checkoutOptions.platform}`;
            const n = this.getCheckoutData();
            n.utm = this.getUtmParams();
            try {
              const s = await o.In(a, "POST", n);
              if (s.status === true) {
                const {
                  paymentResponse: e,
                  affiliate: i
                } = s.data;
                if (i) {
                  this.affiliate(s.data?.affiliate);
                }
                this.paymentResult(s.status, s.data.settings);
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
                  message: s.message ?? ""
                });
              }
            } catch (r) {
              console.error(r);
              this.paymentResult(false, {});
            }
          };
          this.paymentResult = (t, e) => {
            var s;
            var n;
            var o;
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
            if ((s = (0, i.Ay)("chckout-loading")) !== null && s !== undefined) {
              s.remove();
            }
            if ((n = (0, i.Ay)("chckout-result")) !== null && n !== undefined) {
              n.remove();
            }
            if (t === false) {
              const t = (((o = e.message) === null || o === undefined ? undefined : o.toLowerCase()) || "").includes("fraud") ? "There was an issue processing your payment. Please contact customer support for assistance." : e.message;
              this.setContent((0, i.T)("div", {
                id: "chckout-result"
              }, (0, i.T)("img", {
                src: "assets/images/icon/red-cross.png",
                width: 100,
                style: "margin-bottom: 20px"
              }), (0, i.T)("h2", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("paymentFailed")), (0, i.T)("p", (0, a.A)("paymentUnsuccessful")), t && (0, i.T)("p", {
                style: "margin-top: 60px; color: #535353; font-style: italic"
              }, t)));
            } else if (t === "processing") {
              this.setContent((0, i.T)("div", {
                id: "chckout-result"
              }, (0, i.T)("img", {
                src: "assets/images/myaccount/black-loading.gif",
                width: 150
              }), (0, i.T)("h2", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("pleaseCompleteYourPaymentAtPaypal")), (0, i.T)("p", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("pleaseDoNotRefreshOrCloseThisPageWhilePaymentIsProcessing")), (0, i.T)("p", (0, a.A)("youWillAutomaticallyBeRedirectedToMyAccount"))));
              if (e) {
                Object.assign(l.Ny, e);
              }
            } else {
              this.setContent((0, i.T)("div", {
                id: "chckout-result"
              }, (0, i.T)("img", {
                src: "assets/images/icon/green-tick.png",
                width: 100,
                style: "margin-bottom: 20px"
              }), (0, i.T)("h2", {
                style: "margin-bottom: 10px"
              }, (0, a.A)("paymentSuccessful")), this.checkoutType !== "paid" ? (0, i.T)("p", (0, a.A)("youWillAutomaticallyBeRedirectedToMyAccount")) : ""));
              if (e) {
                Object.assign(l.Ny, e);
              }
              this.clearUTMParameters();
              (0, l.$4)().then(t => {
                if (t) {
                  document.dispatchEvent(new CustomEvent("user-login", {
                    detail: t
                  }));
                }
              }).catch(() => {});
            }
          };
          this.loadPaypal = async t => {
            const e = "/paypal/" + (this.checkoutType === "subscription" ? "subscriptions" : "purchase");
            const s = this.getCheckoutData();
            console.log(s);
            this.checkoutType;
            let a = null;
            const n = (screen.width - 800) / 2;
            const r = (screen.height - 650) / 4;
            a = window.open("about:blank", "Paypal Checkout", `resizable=yes,width=800,height=650,top=${r},left=${n}`);
            try {
              const n = await fetch(e, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  Accept: "application/json"
                },
                body: JSON.stringify(s)
              });
              const r = await n.json();
              if (!r.status) {
                if (a != null) {
                  a.close();
                }
                if (t) {
                  return t(r.message);
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
                const t = r.vatBreakdown;
                const e = (0, i.Ay)("summary-tax");
                const s = (0, i.Ay)("summary-tax-label");
                const a = (0, i.Ay)("summary-tax-value");
                const n = (0, i.Ay)("summary-total-tax");
                if (t.isReverseCharge) {
                  if (e) {
                    e.classList.add("inc");
                  }
                  if (s) {
                    s.innerHTML = `VAT (0% - ${t.countryCode}) — Reverse Charge`;
                  }
                  if (a) {
                    a.innerHTML = "0.00";
                  }
                  if (n) {
                    n.style.display = "block";
                    n.innerHTML = "Reverse charge applies — you will self-account for VAT";
                  }
                } else if (t.vatAmount > 0) {
                  if (e) {
                    e.classList.add("inc");
                  }
                  if (s) {
                    s.innerHTML = `VAT (${t.vatPercentage}% - ${t.countryCode})`;
                  }
                  if (a) {
                    a.innerHTML = t.vatAmount.toFixed(2);
                  }
                  if (n) {
                    n.style.display = "none";
                  }
                }
              }
              this.paymentResult("processing", {});
              let l = false;
              const c = async () => {
                if (!l) {
                  try {
                    const t = await (0, h.Q)(async () => {
                      try {
                        return Promise.resolve(await o.sG(r.id, this.checkoutType));
                      } catch (t) {
                        return Promise.reject(t);
                      }
                    }, 8000, 90000);
                    if (l) {
                      return;
                    }
                    l = true;
                    if ((0, i.Ay)("try-premium")) {
                      (0, i.Ay)("try-premium").style.display = "none";
                    }
                    if (!t.status) {
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
                  } catch (t) {
                    if (l) {
                      return;
                    }
                    console.error("[Checkout] PayPal polling failed:", t);
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
              let d = false;
              const u = t => {
                const s = t.data?.status;
                if (s === "success" || s === "failed") {
                  d = true;
                  window.removeEventListener("message", u);
                  if (s === "success") {
                    c();
                  } else if (s === "failed") {
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
              window.addEventListener("message", u);
              const p = setInterval(() => {
                if (a == null ? undefined : a.closed) {
                  clearInterval(p);
                  if (!d && !l) {
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
              if (t) {
                return t(l == null ? undefined : l.message);
              }
              this.paymentResult(false, {});
            }
          };
          this.handleOnChange = t => {
            const {
              data: e,
              isValid: s
            } = t;
            const {
              browserInfo: i,
              paymentMethod: a
            } = e;
            this.encryptedCardData.isValid = s;
            this.encryptedCardData.paymentMethod = a;
            this.encryptedCardData.cardHolderName = document.getElementsByClassName("adyen-checkout__input--text")[0].value;
            this.browserInfo = i;
            this.isReadyToPay();
          };
          this.requiredBillingInput = ["firstName", "lastName", "address", "city", "zipCode"];
          this.isReadyToPay = () => {
            var t;
            const {
              isValid: e,
              paymentMethod: s
            } = this.encryptedCardData;
            const a = (0, i.Ay)("proceed-payment");
            try {
              if (this.selectedPayment === "credit") {
                if (!e) {
                  throw false;
                }
                if (!this.encryptedCardData.cardHolderName.length) {
                  throw false;
                }
              }
              const s = this.countryList.countryStates.hasOwnProperty(this.paymentData.billingAddress.countryCode);
              const n = Object.keys(this.paymentData.billingAddress).filter(t => this.paymentData.billingAddress[t] !== "");
              if (!n.includes("stateOrProvince") && s) {
                throw false;
              }
              if (this.requiredBillingInput.some(t => n.includes(t))) {
                this.requiredBillingInput.forEach(t => {
                  if (!this.paymentData.billingAddress[t]) {
                    throw false;
                  }
                });
              }
              if (this.paymentData.billingAddress.vatNumber && ((t = (0, i.Ay)("checkout-vat-row")) === null || t === undefined ? undefined : t.style.display) !== "none" && !this.getValidVATNumbers().includes(this.paymentData.billingAddress.vatNumber)) {
                throw false;
              }
              a.disabled = false;
            } catch (n) {
              a.disabled = true;
            }
          };
          this.backPreviousPopup = () => {
            this.cleanUp();
            if (this.checkoutOptions.bounceSource === "premiumbounce") {
              new d.default(this.checkoutOptions.bounceType, "premium");
            }
          };
          this.getCreditsByPrice = t => {
            if (t === 71) {
              return 0.01;
            }
            if (t === 200) {
              return 3.99;
            }
            if (t === 500) {
              return 6.99;
            }
            if (t === 1000) {
              return 9.99;
            }
            if (t === 2000) {
              return 16.99;
            }
            if (t === 5000) {
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
            var t;
            if (this.checkoutType === "seats") {
              if ((t = l.Ny?.subscriptionCode) === null || t === undefined ? undefined : t.includes("monthly")) {
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
            const i = {
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
              i.checkoutMethod = "upgrade";
            }
            if (this.browserInfo) {
              i.browserInfo = this.browserInfo;
              i.origin = window.location.origin;
            }
            if (this.checkoutType === "subscription") {
              i.splan = this.splanId;
            } else if (this.checkoutType === "credits") {
              i.credits = this.genCredits;
              if (this.splanId) {
                i.splan = this.splanId;
              }
            }
            if (this.checkoutType === "paid") {
              i.splan = this.splanId;
              i.credits = +this.selectedPlan.credits;
              i.promo = this.appliedPromo.code;
            }
            if (this.selectedPayment === "credit") {
              i.paymentMethod = this.encryptedCardData.paymentMethod;
            } else if (this.selectedPayment === "saved-card" && this.selectedSavedCard) {
              i.paymentCard = this.selectedSavedCard;
            }
            if (this.productName === "Pixlr Team" || this.checkoutType === "seats") {
              i.seatsToAdd = this.extraSeats;
            }
            if (this.tax.isReverseCharge) {
              const t = (this.paymentData.billingAddress.vatNumber || "").replace(/\s+/g, "").toUpperCase();
              const e = (this.paymentData.billingAddress.countryCode || "").toUpperCase();
              const s = e === "GR" ? "EL" : e;
              const a = !!s && t.slice(0, 2) === s;
              i.tax = {
                customerVatNumber: a ? this.paymentData.billingAddress.vatNumber : undefined,
                isReverseCharge: true,
                reverseChargeReason: this.tax.reverseChargeReason
              };
              if (a) {
                i.billingAddress.isVATNumberValid = true;
              }
            }
            return i;
          };
          this.loadAwin = () => {
            this.dialog.append((0, i.T)("script", {
              src: "https://www.dwin1.com/65758.js",
              type: "text/javascript",
              defer: true
            }));
          };
          this.affiliate = t => {
            const {
              awin: e
            } = t;
            if (e) {
              const {
                params: t
              } = e;
              document.body.append((0, i.T)("img", {
                src: `https://www.awin1.com/sread.img?tt=ns&tv=2&merchant=65758&amount=${t.amount}&cr=${t.cr}&ref=${t.ref}&parts=DEFAULT:${t.saleAmount}&vc=${t.vc}&ch=${t.ch}&customeracquisition=${t.customeracquisition}`,
                width: 0,
                height: 0,
                style: {
                  border: "none"
                }
              }));
              if (s !== undefined && s.Tracking !== undefined) {
                var s = {};
                s.Tracking.Sale = {};
                s.Tracking.Sale.amount = t.amount;
                s.Tracking.Sale.orderRef = t.ref;
                s.Tracking.Sale.parts = `DEFAULT:${t.amount}`;
                s.Tracking.Sale.voucher = t.vc;
                s.Tracking.Sale.currency = t.cr;
                s.Tracking.Sale.channel = t.ch;
                s.Tracking.Sale.customerAcquisition = t.customeracquisition;
                s.Tracking.run();
              } else {
                const e = (0, i.T)("script", {
                  type: "text/javascript"
                });
                e.innerHTML = `\n                    //<![CDATA[ /*** Do not change ***/\n                        var AWIN = {};\n                        AWIN.Tracking = {};\n                        AWIN.Tracking.Sale = {};\n                        /*** Set your transaction parameters ***/\n                        AWIN.Tracking.Sale.amount = "${t.amount}";\n                        AWIN.Tracking.Sale.orderRef = "${t.ref}";\n                        AWIN.Tracking.Sale.parts = "DEFAULT:${t.amount}";\n                        AWIN.Tracking.Sale.voucher = "${t.vc}";\n                        AWIN.Tracking.Sale.currency = "${t.cr}";\n                        AWIN.Tracking.Sale.channel = "${t.ch}";\n                        AWIN.Tracking.Sale.customerAcquisition = "${t.customeracquisition}";\n                    //]]>\n                `;
                document.body.append(e);
                this.loadAwin();
              }
            }
          };
          this.trackShareASale = t => {
            const {
              merchantReference: e,
              paidAmount: s,
              currency: i,
              sscid: a,
              newCustomer: n = 0
            } = t;
            if (a) {
              const t = document.createElement("img");
              t.id = "_SHRSL_img_1";
              t.src = `https://www.shareasale.com/sale.cfm?tracking=${e}&amount=${s}&merchantID=94987&transtype=sale&sscidmode=6&sscid=${a}&currency=${i}&newcustomer=${n}`;
              t.style.width = "1";
              t.style.height = "1";
              const o = document.createElement("script");
              o.src = "https://www.dwin1.com/19038.js";
              o.type = "text/javascript";
              o.defer = true;
              this.dialog.appendChild(t);
              this.dialog.appendChild(o);
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
          this.disablePaymentMethod = t => {
            var e;
            var s;
            var a;
            switch (t) {
              case "paypal":
                const t = (0, i.Ay)("paypal-payment-option");
                if (t) {
                  t.style.display = "none";
                }
                break;
              case "saved-card":
                const n = (0, i.Ay)("wrapper-payment-method");
                if (n) {
                  n.open = false;
                }
                if ((e = (0, i.Ay)("component-container")) !== null && e !== undefined) {
                  e.classList.add("blocked");
                }
                if ((s = (0, i.Ay)("saved-cards")) !== null && s !== undefined) {
                  s.classList.add("blocked");
                }
                break;
              case "cc":
                const o = (0, i.Ay)("cc-payment-option");
                if (o) {
                  o.style.display = "none";
                }
                const r = (0, i.Ay)("component-container");
                if (r) {
                  r.style.display = "none";
                }
                if ((a = (0, i.Ay)("component-3ds-container")) !== null && a !== undefined) {
                  a.remove();
                }
            }
          };
          this.getValidVATNumbers = () => {
            const t = this.paymentData.billingAddress.countryCode || l.Ny.billingAddress.countryCode;
            return this.verifiedVATNumbers.map(e => e.countryCode === t ? e.vatNumber : "");
          };
          this.setIsReverseCharge = () => {
            var t;
            var e;
            var n;
            const o = ((t = this.paymentData.billingAddress.vatNumber) === null || t === undefined ? undefined : t.trim()) || "";
            const r = o && this.getValidVATNumbers().includes(this.paymentData.billingAddress.vatNumber);
            const h = (0, i.Ay)("validate-vat");
            if (h) {
              h.style.display = o && ((e = (0, i.Ay)("checkout-vat-row")) === null || e === undefined ? undefined : e.style.display) !== "none" ? "block" : "none";
              h.disabled = !!r;
              h.innerText = r ? (0, a.A)("verified") : (0, a.A)("verify");
            }
            const {
              countryCode: l,
              stateCode: c
            } = this.paymentData.billingAddress;
            const d = (n = this.countryList?.countryEU) === null || n === undefined ? undefined : n.includes(l);
            const u = this.getTaxFromCountryState(l, c);
            if (r && d) {
              this.tax.status = true;
              this.tax.percentage = 0;
              this.tax.originalVatRate = u.percentage;
              this.tax.isReverseCharge = true;
              this.tax.reverseChargeReason = "EU B2B - Article 44, 196";
            } else {
              this.tax.status = u.status;
              this.tax.percentage = u.percentage || 0;
              this.tax.originalVatRate = u.percentage || 0;
              this.tax.isReverseCharge = false;
              this.tax.reverseChargeReason = "";
            }
            this.updatePrice();
          };
          this.validateVATNumber = async () => {
            const {
              vatNumber: e,
              countryCode: s
            } = this.paymentData.billingAddress;
            if (!e) {
              return (0, i.y8)("danger", (0, a.A)("checkoutEnterVATNumber"), 3);
            }
            if (!s) {
              return (0, i.y8)("danger", (0, a.A)("common-CannotLeaveEmpty") + ": " + (0, a.A)("checkoutBillingCountry"), 3);
            }
            const n = e.trim().toUpperCase();
            const r = (0, i.Ay)("validate-vat");
            const h = r == null ? undefined : r.innerText;
            if (r) {
              r.disabled = true;
              r.innerText = "...";
            }
            try {
              const e = await o.In("/api/myaccount/validateVAT", "POST", {
                vatNumber: n,
                countryCode: s
              }, true);
              if (!e.status || !e.isValid) {
                throw new Error(e.message);
              }
              if (e.isValid) {
                if (e.verifiedVATNumbers?.length) {
                  this.verifiedVATNumbers = e.verifiedVATNumbers.map(t => ({
                    countryCode: t.countryCode,
                    vatNumber: t.vatNumber
                  }));
                } else {
                  const {
                    countryCode: t,
                    stateCode: e
                  } = this.paymentData.billingAddress;
                  this.verifiedVATNumbers.push(Object.assign({
                    countryCode: t,
                    vatNumber: n
                  }, e ? {
                    stateCode: e
                  } : {}));
                }
                this.populateVATSelect();
                const s = (0, i.Ay)("vatNumber");
                if (s) {
                  s.readOnly = true;
                  s.value = n;
                }
                const a = (0, i.Ay)("vat-select");
                if (a) {
                  a.value = n;
                }
              }
              this.paymentData.billingAddress.vatNumber = e.isValid ? n : "";
              this.setIsReverseCharge();
              this.isReadyToPay();
              return (0, i.y8)("success", e.message + " - Reverse charge will apply (no VAT charged)", 3);
            } catch (l) {
              if (r) {
                r.disabled = false;
                r.innerText = h || (0, a.A)("verify");
              }
              this.setIsReverseCharge();
              if (l.message.includes("service temporarily unavailable")) {
                return (0, i.y8)("danger", "Unable to verify VAT number - Standard pricing with VAT will apply", 3);
              } else {
                return (0, i.y8)("danger", "VAT number invalid - Standard pricing with VAT will apply (" + l.message + ")", 3);
              }
            }
          };
          this.fetchVerifiedVATNumbers = async () => {
            try {
              const t = await o.In("/api/myaccount/verifiedVATNumbers", "GET");
              if (t.status && t.data) {
                for (const e of t.data) {
                  if (!this.verifiedVATNumbers.some(t => t.vatNumber === e.vatNumber && t.countryCode === e.countryCode)) {
                    this.verifiedVATNumbers.push({
                      countryCode: e.countryCode,
                      vatNumber: e.vatNumber
                    });
                  }
                }
                this.populateVATSelect();
              }
            } catch (t) {
              console.warn("[Checkout] Failed to fetch verified VAT numbers:", t);
            }
          };
          this.populateVATSelect = () => {
            var e;
            const s = (0, i.Ay)("vat-select");
            if (!s) {
              return;
            }
            const n = this.paymentData.billingAddress.countryCode || l.Ny.billingAddress?.countryCode;
            const o = (n || "").toUpperCase();
            const r = this.verifiedVATNumbers.filter(t => t.countryCode === n && !!t.vatNumber && t.vatNumber.toUpperCase().startsWith(o));
            s.innerHTML = "";
            const h = document.createElement("option");
            h.value = "__new__";
            h.textContent = (0, a.A)("checkoutEnterVATNumber") || "Enter new VAT number...";
            s.append(h);
            for (const i of r) {
              const t = document.createElement("option");
              t.value = i.vatNumber;
              t.textContent = `${i.vatNumber} (${(0, a.A)("verified")})`;
              s.append(t);
            }
            s.style.display = r.length > 0 ? "block" : "none";
            const c = (e = this.paymentData.billingAddress.vatNumber) === null || e === undefined ? undefined : e.trim();
            const d = (0, i.Ay)("vatNumber");
            if (c && r.some(t => t.vatNumber === c)) {
              s.value = c;
              if (d) {
                d.readOnly = true;
              }
            } else {
              s.value = "__new__";
              if (d) {
                d.readOnly = false;
              }
            }
          };
          this.handleVATSelect = () => {
            const t = (0, i.Ay)("vat-select");
            const e = (0, i.Ay)("vatNumber");
            if (t && e) {
              if (t.value === "__new__") {
                e.value = "";
                e.readOnly = false;
                e.focus();
                this.paymentData.billingAddress.vatNumber = "";
              } else {
                e.value = t.value;
                e.readOnly = true;
                this.paymentData.billingAddress.vatNumber = t.value;
              }
              this.setIsReverseCharge();
              this.isReadyToPay();
            }
          };
          (0, r.A)("checkout", t);
          this.checkoutType = t;
          this.checkoutOptions = Object.assign(Object.assign({}, this.checkoutOptions), e);
          const p = l.Ny.billingAddress;
          if ((p == null ? undefined : p.isVATNumberValid) && p.vatNumber && p.countryCode && p.vatNumber.toUpperCase().startsWith(p.countryCode.toUpperCase())) {
            this.verifiedVATNumbers.push(Object.assign({
              countryCode: p.countryCode,
              vatNumber: p.vatNumber
            }, p.stateCode ? {
              stateCode: p.stateCode
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
              const t = this.splanId.split("-")[0];
              this.productName = `Pixlr ${t.charAt(0).toUpperCase() + t.slice(1)}`;
            }
          }
          Promise.resolve().then(s.bind(s, 1413));
          this.dialog.id = "chckout";
          this.dialog.style.display = "none";
          if (this.checkoutType === "credits") {
            this.dialog.style.display = "";
            setTimeout(() => this.dialog.classList.add("ani"), 5);
            setTimeout(() => this.modal.classList.add("dim"), 5);
            this.initializeTraditionalCheckout();
            return;
          }
          this.checkStripeAvailability().then(t => {
            const e = t.available;
            const s = t.provider;
            if (t.dunning && this.checkoutType === "subscription") {
              this.dialog.id = "payment-method-picker";
              this.dialog.style.display = "";
              this.dialog.style.maxWidth = "420px";
              this.content.style.flex = "1";
              setTimeout(() => this.dialog.classList.add("ani"), 5);
              setTimeout(() => this.modal.classList.add("dim"), 5);
              this.showStripeVATPrompt(this.checkoutOptions.plan || "premium-yearly");
              return;
            } else if (this.checkoutOptions.checkoutMode === "upgrade" && s === "paypal") {
              this._forcePaypal = true;
              this.dialog.style.display = "";
              setTimeout(() => this.dialog.classList.add("ani"), 5);
              setTimeout(() => this.modal.classList.add("dim"), 5);
              this.initializeTraditionalCheckout();
              return;
            } else if (this.checkoutOptions.checkoutMode === "upgrade" && s === "stripe") {
              this.dialog.id = "payment-method-picker";
              this.dialog.style.display = "";
              this.dialog.style.maxWidth = "420px";
              this.content.style.flex = "1";
              setTimeout(() => this.dialog.classList.add("ani"), 5);
              setTimeout(() => this.modal.classList.add("dim"), 5);
              this.showStripeVATPrompt(this.checkoutOptions.plan || "premium-yearly");
              return;
            } else {
              if (e && this.checkoutType === "subscription") {
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
            const i = await o.In("/api/checkout/stripe/available", "GET", {}, true);
            return {
              available: i.status && i.data?.stripeAvailable,
              provider: i.status ? i.data?.activeSubscriptionProvider : null,
              dunning: !!i.status && !!i.data?.stripeDunning
            };
          } catch (i) {
            console.error("[Checkout] Failed to check Stripe availability:", i);
            return {
              available: false,
              provider: null,
              dunning: false
            };
          }
        }
        showPaymentMethodPicker(t) {
          var s;
          var i;
          const n = this.checkoutOptions.plan || "premium-yearly";
          if ((l.Ny.billingAddress?.countryCode || l.Ny.country || "").toUpperCase() === "IN") {
            this.showStripeVATPrompt(n, t);
            return;
          }
          const o = t ? (0, a.A)("checkoutSelectPayForCredits", t.credits) : (0, a.A)("checkoutSelectPay");
          this.content.innerHTML = "";
          this.dialog.id = "payment-method-picker";
          this.dialog.style.display = "";
          this.dialog.style.maxWidth = "420px";
          this.content.style.flex = "1";
          setTimeout(() => this.dialog.classList.add("ani"), 5);
          setTimeout(() => this.modal.classList.add("dim"), 5);
          this.paymentData.billingAddress = Object.assign({}, l.Ny.billingAddress || {});
          this.setContent(`\n            <div style="padding:24px;text-align:center;">\n                <h2 style="margin:0 0 8px;font-size:20px;font-weight:600;">${(0, a.A)("checkoutChoosePaymentMethod")}</h2>\n                <p style="margin:0 0 24px;color:#666;font-size:14px;">${o}</p>\n                <button id="pick-credit-card" style="\n                    display:flex;align-items:center;justify-content:center;gap:10px;\n                    width:100%;padding:14px 20px;margin-bottom:12px;\n                    border:2px solid #e0e0e0;border-radius:10px;background:#fff;\n                    font-size:16px;font-weight:500;cursor:pointer;transition:border-color .2s,box-shadow .2s;\n                " onmouseover="this.style.borderColor='#635bff';this.style.boxShadow='0 0 0 1px #635bff'"\n                   onmouseout="this.style.borderColor='#e0e0e0';this.style.boxShadow='none'">\n                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#635bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/>\n                    </svg>\n                    ${(0, a.A)("checkoutCreditDebitCard")}\n                </button>\n                <button id="pick-paypal" style="\n                    display:flex;align-items:center;justify-content:center;gap:10px;\n                    width:100%;padding:14px 20px;\n                    border:2px solid #e0e0e0;border-radius:10px;background:#fff;\n                    font-size:16px;font-weight:500;cursor:pointer;transition:border-color .2s,box-shadow .2s;\n                " onmouseover="this.style.borderColor='#0070ba';this.style.boxShadow='0 0 0 1px #0070ba'"\n                   onmouseout="this.style.borderColor='#e0e0e0';this.style.boxShadow='none'">\n                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#0070ba">\n                        <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797H9.603c-.564 0-1.04.408-1.13.964L7.076 21.337z"/>\n                    </svg>\n                    PayPal\n                </button>\n                <div id="pick-loading" style="display:none;padding:20px;text-align:center;">\n                    <div style="display:flex;flex-direction:column;align-items:center;gap:16px;">\n                        <svg width="32" height="32" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10" fill="none" stroke="#e0e0e0" stroke-width="3"/><path d="M12 2a10 10 0 0 1 10 10" fill="none" stroke="#333" stroke-width="3" stroke-linecap="round"><animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/></path></svg>\n                        <p style="color:#666;margin:0;">${(0, a.A)("checkoutRedirecting")}</p>\n                    </div>\n                </div>\n            </div>\n        `);
          if ((s = document.getElementById("pick-credit-card")) !== null && s !== undefined) {
            s.addEventListener("click", async () => {
              this.showStripeVATPrompt(n, t);
            });
          }
          if ((i = document.getElementById("pick-paypal")) !== null && i !== undefined) {
            i.addEventListener("click", () => {
              if (t) {
                this.genCredits = Number(t.credits);
                this.splanId = t.creditPlanCode;
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
          this.optionUI = (0, i.Ay)("chckout-options");
          this.summaryUI = (0, i.Ay)("chckout-summary");
          if (this.checkoutOptions.bounceSource) {
            this.optionUI.append((0, i.T)("img", {
              id: "back-chckout",
              src: "assets/images/icon/arrow-left-black.svg"
            }));
          }
          if ((0, i.lR)("promo-code", "") !== "") {
            this.checkoutOptions.code = (0, i.lR)("promo-code", "");
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
              const t = this.splanId.split("-")[0];
              this.productName = `Pixlr ${t.charAt(0).toUpperCase() + t.slice(1)}`;
            }
            Promise.all([o.gs(), o.Vi(this.splanId)]).then(([t, e]) => {
              var o;
              var c;
              var d;
              if (!t.status) {
                throw new Error("Failed to get plan details");
              }
              if (this.checkoutOptions.checkoutMode === "upgrade" && e.status && !this._forcePaypal) {
                this.planBalance = e.data.planBalance;
              }
              this.subscriptionPlans = t.data;
              this.selectedPlan = this.setPlanDetails(this.splanId);
              if (this._forcePaypal) {
                const t = (0, i.T)("div", {
                  id: "wrapper-payment-method",
                  className: "kort",
                  style: "border-radius: 8px; padding: 16px; display: flex; flex-direction: row; align-items: center; gap: 8px;"
                }, (0, i.T)("img", {
                  src: "assets/images/checkout/icon/card.svg",
                  width: 24,
                  height: 24
                }), (0, i.T)("span", {
                  className: "fs-16 fw-7"
                }, "Payment Method: Paypal"));
                this.optionUI.append(t);
                this.selectedPayment = "paypal";
              }
              this.optionUI.append(n.ov(this.splanId, this.productName, this.subscriptionPlans));
              if (this.productName === "Pixlr Team") {
                this.optionUI.append(n.m3());
              }
              if (!this._forcePaypal) {
                this.optionUI.append(n.qV());
              }
              this.optionUI.append(n.YA(l.Ny.billingAddress || {}));
              this.optionUI.append(n.bV());
              this.summaryUI.append(n.z(this.checkoutType, this.productName));
              if (!this.checkoutOptions.showMonthly) {
                document.querySelector("#chckout-planSelection .plan-options").style.display = "none";
              }
              if (this.checkoutOptions.checkoutMode === "upgrade" && e.status === false) {
                this.paymentResult(false, {});
                return;
              }
              const u = e.status && this.checkoutOptions.checkoutMode === "upgrade" && (e.data.paymentMethod === "paypal" || this._forcePaypal) && e.data.existingPlan?.monthDuration === 12 && e.data.newPlan?.monthDuration === 12;
              if ((this.checkoutOptions.checkoutMode === "checkout" && this.productName === "Pixlr Plus" || this.checkoutOptions.checkoutMode === "upgrade" && this.splanId !== "premium-yearly") && !u) {
                if ((o = (0, i.Ay)("wrapper-promo-option")) !== null && o !== undefined) {
                  o.remove();
                }
              }
              if (this.checkoutOptions.checkoutMode === "upgrade" && e.status) {
                document.querySelector("#chckout-planSelection .plan-options").style.display = "none";
                if (e.data.planBalance > 0 && !this._forcePaypal) {
                  (0, i.Ay)("summary-balance-value").innerText = `- ${e.data.planBalance.toFixed(2)}`;
                  (0, i.Ay)("summary-balance").classList.add("inc");
                }
                if (e.data.paymentMethod !== "paypal" && !this._forcePaypal && (0, i.Ay)("paypal-payment-option")) {
                  (0, i.Ay)("paypal-payment-option").style.display = "none";
                }
                const t = e.data.existingPlan?.monthDuration === 12 && e.data.newPlan?.monthDuration === 12;
                const s = e.data.planBalance || 0;
                if (e.data.paymentMethod === "paypal" || this._forcePaypal) {
                  this.selectedPayment = "paypal";
                  if (!this._forcePaypal) {
                    this._forcePaypal = true;
                    const t = (0, i.Ay)("wrapper-payment-method");
                    if (t) {
                      t.remove();
                    }
                    const e = (0, i.T)("div", {
                      id: "wrapper-payment-method",
                      style: "border-radius: 8px; padding: 16px; display: flex; flex-direction: row; align-items: center; gap: 8px; background: transparent;"
                    }, (0, i.T)("img", {
                      src: "assets/images/checkout/icon/card.svg",
                      width: 24,
                      height: 24
                    }), (0, i.T)("span", {
                      className: "fs-16 fw-7"
                    }, "Payment Method: Paypal"));
                    this.optionUI.prepend(e);
                  }
                  this.summaryUI.append(n.aJ());
                  if (t && s > 0 && (0, i.Ay)("promocode-input")) {
                    (0, i.Ay)("promocode-input").value = "PYPL-25-UPGRADE";
                    (0, i.Ay)("promocode-input").readOnly = true;
                    (0, i.Ay)("promocode-input").classList.add("disabled");
                    (0, i.Ay)("promocode-submit").style.display = "none";
                    (0, i.Ay)("promo-section").style.cursor = "not-allowed";
                    const t = (0, i.Ay)("wrapper-promo-option");
                    if (t) {
                      t.open = true;
                    }
                    this.appliedPromo = {
                      code: "PYPL-25-UPGRADE",
                      name: "PAYPAL UPGRADE 25% OFF",
                      amount: s,
                      productName: [this.productName],
                      productCode: [this.splanId]
                    };
                  }
                }
              }
              if ((0, i.Ay)("paypal-payment-option") && this.productName === "Pixlr Team") {
                (0, i.Ay)("paypal-payment-option").style.display = "none";
              }
              if (this.checkoutOptions.code) {
                if ((0, i.Ay)("promocode-input")) {
                  (0, i.Ay)("promocode-input").value = this.checkoutOptions.code;
                }
                this.applyPromoCode();
                this.checkoutOptions.code = "";
              }
              if (this._forcePaypal) {
                if ((c = (0, i.Ay)("chckout-loading")) !== null && c !== undefined) {
                  c.remove();
                }
              } else if ((d = (0, i.Ay)("chckout-loading")) !== null && d !== undefined) {
                d.remove();
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
            o.gs(["summer-campaign-ai-credits-2000", "summer-campaign-ai-credits-5000"]).then(t => {
              var e;
              if (!t.status) {
                throw new Error("Failed to get plan details");
              }
              this.subscriptionPlans = t.data;
              this.selectedPlan = this.setPlanDetails(this.splanId);
              if (this.checkoutOptions.code === "SUMMERCAMPAIGN") {
                this.applyPromoCode();
                this.checkoutOptions.code = "";
              }
              this.optionUI.append(n.qV());
              this.optionUI.append(n.YA(l.Ny.billingAddress || {}));
              this.summaryUI.append(n.z(this.checkoutType, this.selectedPlan.name));
              (0, i.Ay)("paypal-payment-option").style.display = "none";
              if ((e = (0, i.Ay)("chckout-loading")) !== null && e !== undefined) {
                e.remove();
              }
              this.loadEventListener();
            });
          }
        }
        async checkStripeForCredits(t) {
          const a = t ? Number(t) : this.genCredits;
          if (this.checkoutType === "credits" && a !== 0) {
            try {
              const t = await o.In("/api/checkout/stripe/available", "GET", {}, true);
              if (t.status && t.data?.stripeAvailable) {
                const t = this.getCreditPlanCode(a);
                if (t) {
                  const e = await o.In("/api/checkout/stripe/credits", "POST", Object.assign({
                    creditPlanCode: t,
                    currency: this.currency || "USD",
                    uiMode: "hosted",
                    cancelUrl: window.location.href,
                    promoCode: this.appliedPromo?.code || ""
                  }, this.checkoutOptions.redirectUrl ? {
                    redirectUrl: this.checkoutOptions.redirectUrl
                  } : {}));
                  if (e.status && e.data?.sessionUrl) {
                    window.location.href = e.data.sessionUrl;
                  }
                }
              }
            } catch (n) {
              console.error("[Checkout] Error checking Stripe for credits:", n);
            }
          }
        }
        getCreditPlanCode(t) {
          return {
            200: "Credit:200",
            500: "Credit:500",
            1000: "credit:1000",
            2000: "credit:2000",
            5000: "credit:5000"
          }[t] || null;
        }
        showStripeVATPrompt(t, e) {
          this.proceedToStripeCheckout(t, e);
        }
        async proceedToStripeCheckout(t, e) {
          var r;
          this.content.innerHTML = "";
          this.setContent("\n            <div style=\"padding:24px;text-align:center;\">\n                <div style=\"display:flex;flex-direction:column;align-items:center;gap:16px;\">\n                    <svg width=\"32\" height=\"32\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"12\" cy=\"12\" r=\"10\" fill=\"none\" stroke=\"#e0e0e0\" stroke-width=\"3\"/><path d=\"M12 2a10 10 0 0 1 10 10\" fill=\"none\" stroke=\"#333\" stroke-width=\"3\" stroke-linecap=\"round\"><animateTransform attributeName=\"transform\" type=\"rotate\" from=\"0 12 12\" to=\"360 12 12\" dur=\"1s\" repeatCount=\"indefinite\"/></path></svg>\n                    <p style=\"color:#666;margin:0;\">Redirecting to payment...</p>\n                </div>\n            </div>\n        ");
          try {
            if (e) {
              console.log("[Checkout] Redirecting to Stripe hosted checkout for credits:", e.creditPlanCode);
              const t = await o.In("/api/checkout/stripe/credits", "POST", Object.assign(Object.assign({
                creditPlanCode: e.creditPlanCode,
                currency: this.currency,
                uiMode: "hosted",
                cancelUrl: window.location.href
              }, this.checkoutOptions.redirectUrl ? {
                redirectUrl: this.checkoutOptions.redirectUrl
              } : {}), {
                promoCode: this.appliedPromo?.code || ""
              }));
              if (!t.status || !t.data?.sessionUrl) {
                throw new Error("Failed to create credit checkout session");
              }
              window.location.href = t.data.sessionUrl;
            } else if (this.checkoutOptions.checkoutMode === "upgrade") {
              const e = await o.In("/api/checkout/stripe/upgrade", "POST", Object.assign({
                newPlanCode: t
              }, this.checkoutOptions.redirectUrl ? {
                redirectUrl: this.checkoutOptions.redirectUrl
              } : {}));
              if (!e.status || !e.data?.sessionUrl) {
                throw new Error(e.message || "Failed to create upgrade session");
              }
              window.location.href = e.data.sessionUrl;
            } else {
              if (this.checkoutType === "credits") {
                this.dialog.id = "chckout";
                this.dialog.style.maxWidth = "";
                this.content.innerHTML = "";
                this.initializeTraditionalCheckout();
                return;
              }
              {
                const e = await o.In("/api/checkout/stripe/create-checkout", "POST", Object.assign({
                  splan: t,
                  currency: this.currency,
                  promoCode: this.checkoutOptions.code || "",
                  uiMode: "hosted",
                  cancelUrl: window.location.href
                }, this.checkoutOptions.redirectUrl ? {
                  redirectUrl: this.checkoutOptions.redirectUrl
                } : {}));
                if (!e.status || !e.data?.sessionUrl) {
                  throw new Error(e.message || "Failed to create checkout session");
                }
                window.location.href = e.data.sessionUrl;
              }
            }
          } catch (h) {
            console.error("[Checkout] Stripe redirect error:", h);
            this.dialog.style.display = "";
            this.dialog.classList.add("ani");
            this.modal.classList.add("dim");
            this.content.innerHTML = "";
            this.setContent("\n                <div style=\"padding:24px;text-align:center;\">\n                    <p style=\"color:#e53e3e;margin:0 0 16px;\">Something went wrong. Please try again.</p>\n                    <button id=\"stripe-retry\" style=\"\n                        padding:12px 24px;border:none;border-radius:8px;\n                        background:#635bff;color:#fff;font-size:14px;font-weight:500;cursor:pointer;\n                    \">Try again</button>\n                </div>\n            ");
            if ((r = document.getElementById("stripe-retry")) !== null && r !== undefined) {
              r.addEventListener("click", () => {
                this.showStripeVATPrompt(t, e);
              });
            }
          }
        }
      }
      u.CHECKOUT_LOCATION_STORAGE_KEY = "pixlr_checkout_location";
      const p = u;
    }
