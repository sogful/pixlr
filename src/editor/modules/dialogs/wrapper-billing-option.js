window.__editorModules[8484] = function (t, e, s) {
      var i = s(5283);
      var a = s(7775);
      var n = s(9175);
      s.d(e, ["YA", 0, t => {
        t ||= {
          isVATNumberValid: false
        };
        const e = t.isVATNumberValid;
        return (0, i.T)("details", {
          id: "wrapper-billing-option",
          className: "kort"
        }, (0, i.T)("summary", {
          style: "display: flex; align-items: center;"
        }, (0, i.T)("img", {
          src: "assets/images/checkout/icon/card.svg",
          width: 24,
          height: 24,
          style: "margin-right: 8px;"
        }), (0, i.T)("span", {
          className: "fs-16 fw-7"
        }, (0, a.A)("optionalBillingInformation")), (0, i.T)("img", {
          src: "assets/images/icon/up.svg",
          style: "margin-left: auto"
        })), (0, i.T)("div", {
          id: "billing-form",
          className: "w-100"
        }, (0, i.T)("form", {}, (0, i.T)("div", {
          className: "flex"
        }, n.i0("checkoutFirstName", 50, t.firstName), n.i0("checkoutLastName", 50, t.lastName)), (0, i.T)("div", {
          className: "flex"
        }, n.i0("checkoutCompanyName", 100, t.companyName || "", "checkoutOptional")), (0, i.T)("div", {
          id: "checkout-vat-row",
          className: "flex"
        }, (0, i.T)("div", {
          className: "form-group w-100"
        }, (0, i.T)("div", {
          className: "adyen-checkout-title"
        }, (0, i.T)("span", {
          className: "adyen-checkout__label__text"
        }, `${(0, a.A)("checkoutVATNumber")} ${(0, a.A)("checkoutOptional")}`)), (0, i.T)("select", {
          id: "vat-select",
          className: "adyen-checkout__input",
          style: "display:none; width:100%; margin-bottom:4px;"
        }, (0, i.T)("option", {
          value: "__new__"
        }, (0, a.A)("checkoutEnterVATNumber") || "Enter new VAT number...")), (0, i.T)("input", {
          type: "text",
          id: "vatNumber",
          className: "adyen-checkout__input",
          maxLength: 56,
          required: true,
          value: t.vatNumber || ""
        })), n.yW("validate-vat", 30, e ? "verified" : "verify", e)), (0, i.T)("div", {
          className: "flex"
        }, n.i0("checkoutAddress", 100, t.address)), (0, i.T)("div", {
          className: "flex"
        }, n.i0("checkoutCity", 50, t.city), n.i0("checkoutZipCode", 50, t.zipCode)), (0, i.T)("div", {
          className: "flex"
        }, n.nS("checkoutCountry", 50, t.country), n.Ei("checkoutState", 50, t.state)))));
      }, "aJ", 0, () => (0, i.T)("div", {
        id: "paypal-upgrade-notice-wrapper",
        style: "display: flex; flex-direction: row; column-gap: 7px"
      }, (0, i.T)("img", {
        src: "assets/images/icon/warning.svg",
        style: "width: 30px"
      }), (0, a.A)("paypalUpgradeConfirmationDisclaimerOnPreviousSubscription")), "bV", 0, (t = false) => (0, i.T)("details", {
        id: "wrapper-promo-option",
        className: "kort",
        open: t
      }, (0, i.T)("summary", {
        style: "display: flex; align-items: center;"
      }, (0, i.T)("img", {
        src: "assets/images/checkout/icon/percent.svg",
        width: 24,
        height: 24,
        style: "margin-right: 8px;"
      }), (0, i.T)("span", {
        className: "fs-16 fw-7"
      }, (0, a.A)("promoCode")), (0, i.T)("img", {
        src: "assets/images/icon/up.svg",
        style: "margin-left: auto"
      })), (0, i.T)("div", (0, i.T)("div", {
        id: "promo-section"
      }, (0, i.T)("input", {
        id: "promocode-input",
        type: "text",
        placeholder: (0, a.A)("enterPromoCode")
      }), (0, i.T)("span", {
        id: "promocode-submit",
        className: "apply"
      }, (0, a.A)("apply"))), (0, i.T)("p", {
        id: "promocode-error"
      }, (0, a.A)("invalidPromoCode")), (0, i.T)("p", {
        className: "text-small",
        style: "margin-top: 8px"
      }, (0, a.A)("promoCodeValidOneTimeOnly")))), "iZ", 0, (t, e = "USD") => {
        const r = [...t].sort((t, e) => t.credits - e.credits);
        const h = r.length > 0 ? (r[0].pricing?.[e]?.amount ?? r[0].amount) / r[0].credits : 0;
        const l = e === "EUR" ? "€" : "$";
        const c = r.map(t => {
          const n = (t.pricing?.[e] || {
            amount: t.amount,
            symbol: l
          }).amount;
          const o = n / t.credits;
          const r = h > 0 ? Math.round((1 - o / h) * 100) : 0;
          const c = t.credits.toLocaleString();
          return (0, i.T)("button", {
            className: "credit-option",
            dataset: {
              value: String(t.credits),
              price: String(n),
              planCode: t.code
            },
            style: "display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-radius: 6px; color: #333; cursor: pointer; transition: all 0.2s; text-align: left; width: 100%;"
          }, (0, i.T)("div", {
            style: "font-size: 20px; font-weight: 600; display: flex; align-items: baseline;"
          }, c, (0, i.T)("span", {
            style: "font-size: 13px; margin-left: 4px;"
          }, (0, a.A)("checkoutCreditsLabel"))), (0, i.T)("div", {
            style: "text-align: right;"
          }, (0, i.T)("div", {
            style: "font-size: 13px; font-weight: 600; color: #333;"
          }, `${l}${n.toFixed(2)}`), r > 0 ? (0, i.T)("div", {
            style: "color: #ff6b6b; font-size: 14px; font-weight: 600;"
          }, (0, a.A)("checkoutSavingsOff", r)) : ""));
        });
        return (0, i.T)("div", {
          id: "wrapper-credit-option",
          className: "credit-select",
          style: "display: flex; flex-direction: column; gap: 8px; padding: 0;"
        }, (0, i.T)("h2", {
          style: "font-size: 16px; font-weight: 600; margin: 0 0 4px 0;"
        }, (0, a.A)("generativeCredits")), (0, i.T)("p", {
          style: "color: #666; font-size: 12px; margin: 0 0 12px 0;"
        }, (0, a.A)("checkoutAICreditsDesc")), (0, i.T)("div", {
          style: "display: flex; flex-direction: column; gap: 8px;"
        }, ...c), (0, i.T)("a", {
          className: "subscribe-link",
          style: "margin-top: 8px; font-size: 12px; color: var(--accent-color); text-align: center; cursor: pointer; text-decoration: underline;"
        }, (0, a.A)("checkoutOrSubscribe")));
      }, "m3", 0, () => (0, i.T)("details", {
        id: "wrapper-seat-option",
        className: "kort"
      }, (0, i.T)("summary", {
        style: "display: flex; align-items: center;"
      }, (0, i.T)("img", {
        src: "assets/images/checkout/icon/seats.svg",
        width: 24,
        height: 24,
        style: "margin-right: 8px;"
      }), (0, i.T)("span", {
        className: "fs-16 fw-7"
      }, (0, a.A)("addMoreSeats")), (0, i.T)("img", {
        src: "assets/images/icon/up.svg",
        style: "margin-left: auto"
      })), (0, i.T)("div", (0, i.T)("div", {
        className: "seat-select"
      }, (0, i.T)("span", {
        className: "seat-option",
        dataset: {
          value: "5"
        }
      }, "5 seats"), (0, i.T)("span", {
        className: "seat-option",
        dataset: {
          value: "10"
        }
      }, "10 seats"), (0, i.T)("span", {
        className: "seat-option",
        dataset: {
          value: "20"
        }
      }, "20 seats"), (0, i.T)("span", {
        className: "seat-option seat-option-custom"
      }, (0, i.T)("input", {
        type: "number",
        placeholder: "Custom",
        min: "1",
        max: "100"
      }))))), "ov", 0, (t, e, s) => {
        const [n, o] = function (t, e) {
          let s;
          let i;
          e.forEach(e => {
            if (e.product === t) {
              if (e.monthDuration === 1) {
                s = e;
              } else if (e.monthDuration === 12) {
                i = e;
              }
            }
          });
          if (!s || !i) {
            console.error(`Could not find both monthly and yearly plans for product: ${t}`);
            throw new Error(`Missing plans for product: ${t}`);
          }
          return [{
            code: s.code,
            monthlyPrice: s.pricing.USD.amount.toFixed(2),
            yearlyPrice: (s.pricing.USD.amount * 12).toFixed(2)
          }, {
            code: i.code,
            monthlyPrice: String(i.pricing.USD.displayPriceInMonths),
            yearlyPrice: i.pricing.USD.amount.toFixed(2)
          }];
        }(e, s);
        const r = Math.round((1 - +o.yearlyPrice / +n.yearlyPrice) * 100);
        const h = e.replace("Pixlr ", "").toLowerCase();
        const l = {
          "Pixlr Plus": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#9cc42b\" fill=\"none\"><path d=\"M13.5771 3.25586L13.501 3.25195L10.5029 3.25C10.3039 3.24987 10.1124 3.32906 9.97168 3.46973 9.8663 3.5751 9.79548 3.70855 9.7666 3.85254L9.75195 4V9.75195H4C3.61183 9.75195 3.29253 10.0468 3.25391 10.4248L3.25 10.502V13.5C3.25 13.9142 3.58579 14.25 4 14.25H9.75195V20.002C9.75195 20.4162 10.0877 20.752 10.502 20.752H13.5C13.9142 20.752 14.25 20.4162 14.25 20.002V14.25H20C20.4139 14.25 20.7495 13.9148 20.75 13.501L20.752 10.5029C20.7521 10.3039 20.6729 10.1124 20.5322 9.97168 20.3916 9.83103 20.2009 9.75195 20.002 9.75195H14.25V4.00195C14.25 3.61381 13.9551 3.29449 13.5771 3.25586Z\" fill=\"currentColor\" /></svg>",
          "Pixlr Premium": "<svg width=\"24\" height=\"24\" color=\"#ecc800\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.5c-.578 0-1.116.33-1.408.877l-3.35 7.373L3.96 8.457c-.692-.49-1.604-.392-2.194.235a1.98 1.98 0 0 0-.425 1.932l2.951 9.148c.106.325.39.544.708.544h14c.319 0 .603-.218.708-.544l2.949-9.139.002-.008a1.98 1.98 0 0 0-.425-1.931c-.59-.628-1.502-.726-2.194-.237l-.003.002-3.278 3.291-3.348-7.368-.003-.005C13.116 3.834 12.58 3.5 12 3.5\" clip-rule=\"evenodd\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>",
          "Pixlr Ultra": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#f56123\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.2611 1.29711C14.5548 1.40637 14.7496 1.68669 14.7496 2.00004V10.2502H19.5004C19.7938 10.2502 20.0603 10.4213 20.1824 10.6881 20.3045 10.9549 20.2598 11.2684 20.068 11.4904L10.568 22.4902C10.3632 22.7274 10.0326 22.8122 9.73888 22.7029 9.4452 22.5937 9.2504 22.3134 9.2504 22V13.7499H4.4996C4.20619 13.7499 3.93973 13.5788 3.81763 13.312 3.69553 13.0452 3.74021 12.7317 3.93199 12.5096L13.432 1.50982C13.6368 1.27267 13.9674 1.18785 14.2611 1.29711Z\" fill=\"currentColor\" /></svg>",
          "Pixlr Ultra Max": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#f56123\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.2611 1.29711C14.5548 1.40637 14.7496 1.68669 14.7496 2.00004V10.2502H19.5004C19.7938 10.2502 20.0603 10.4213 20.1824 10.6881 20.3045 10.9549 20.2598 11.2684 20.068 11.4904L10.568 22.4902C10.3632 22.7274 10.0326 22.8122 9.73888 22.7029 9.4452 22.5937 9.2504 22.3134 9.2504 22V13.7499H4.4996C4.20619 13.7499 3.93973 13.5788 3.81763 13.312 3.69553 13.0452 3.74021 12.7317 3.93199 12.5096L13.432 1.50982C13.6368 1.27267 13.9674 1.18785 14.2611 1.29711Z\" fill=\"currentColor\" /></svg>"
        }[e] || `/img/misc/${h}-icon.svg`;
        return (0, i.T)("details", {
          id: "chckout-planSelection",
          className: "kort",
          open: e === "Pixlr Plus"
        }, (0, i.T)("summary", {
          style: "display: flex; align-items: center;"
        }, (0, i.T)("img", {
          src: `data:image/svg+xml;utf8,${encodeURIComponent(l)}`,
          width: 24,
          height: 24,
          style: "margin-right: 8px;"
        }), (0, i.T)("span", {
          className: "fs-16 fw-7"
        }, e), (0, i.T)("img", {
          src: "assets/images/icon/up.svg",
          style: "margin-left: auto"
        })), (0, i.T)("div", {
          style: "display: flex; flex-direction: column; row-gap: 8px"
        }, (0, i.T)("div", {
          className: "plan-options " + (t === n.code ? "selected" : ""),
          dataset: {
            plan: n.code
          }
        }, (0, i.T)("p", {
          className: "fs-14 fw-7"
        }, (0, a.A)("payMonthly")), (0, i.T)("p", (0, i.T)("span", {
          className: "fs-14 fw-7",
          style: "margin-right: 5px"
        }, `${n.monthlyPrice} /month`), (0, i.T)("span", {
          className: "fs-12 fw-4"
        }, `. ${n.yearlyPrice} /year`))), (0, i.T)("div", {
          className: "plan-options " + (t === o.code ? "selected" : ""),
          dataset: {
            plan: o.code
          }
        }, (0, i.T)("p", {
          className: "fs-14 fw-7"
        }, (0, a.A)("payYearly")), (0, i.T)("p", (0, i.T)("span", {
          className: "fs-14 fw-7",
          style: "margin-right: 5px"
        }, `${o.monthlyPrice} /month`), (0, i.T)("span", {
          className: "fs-12 fw-4"
        }, `. ${o.yearlyPrice} /year`, (0, i.T)("span", {
          className: "saving-badge"
        }, `Save ${r}%`)))), (0, i.T)("span", {
          className: "fs-12 fw-4",
          style: "line-height: 18px"
        }, (0, a.A)("youCanCancelAuto"))));
      }, "qV", 0, () => (0, i.T)("details", {
        open: true,
        id: "wrapper-payment-method",
        className: "kort"
      }, (0, i.T)("summary", {
        style: "display: flex; align-items: center;"
      }, (0, i.T)("img", {
        src: "assets/images/checkout/icon/card.svg",
        width: 24,
        height: 24,
        style: "margin-right: 8px;"
      }), (0, i.T)("span", {
        className: "fs-16 fw-7"
      }, (0, a.A)("paymentMethod")), (0, i.T)("img", {
        src: "assets/images/icon/up.svg",
        style: "margin-left: auto"
      })), (0, i.T)("div", {
        style: "display: flex; flex-direction: column; row-gap: 18px;"
      }, (0, i.T)("div", {
        id: "saved-cards"
      }), (0, i.T)("div", {
        id: "payment-option-radios"
      }, (0, i.T)("div", {
        id: "paypal-payment-option",
        className: "payment-options"
      }, (0, i.T)("input", {
        id: "paypal-radio-option",
        type: "radio",
        name: "payment",
        value: "paypal",
        checked: true
      }), (0, i.T)("label", {
        htmlFor: "paypal-radio-option",
        className: "fs-12 fw-7"
      }, "Paypal"))), (0, i.T)("div", {
        id: "component-container"
      }), (0, i.T)("div", {
        id: "component-3ds-container"
      }))), "z", 0, (t, e) => (0, i.T)("div", {
        id: "summary-wrapper"
      }, (0, i.T)("h3", (0, a.A)("orderSummary")), t === "credits" ? (0, i.T)("div", (0, i.T)("h4", (0, a.A)("generativeCredits")), (0, i.T)("h6", (0, a.A)("useCreditToGenerateAIAcrossTools"))) : "", (0, i.T)("hr"), (0, i.T)("div", {
        style: "display: flex; flex-direction: column; row-gap: 14px"
      }, t === "subscription" ? (0, i.T)("div", {
        id: "summary-base",
        className: "summary-group inc"
      }, (0, i.T)("div", {
        className: "desc"
      }, (0, i.T)("h5", `${e.replace("Pixlr ", "")} Subscription`), e === "Pixlr Plus" ? (0, i.T)("ul", {
        className: "top-5"
      }, (0, i.T)("li", (0, a.A)("addFreeUnlimitedSave")), (0, i.T)("li", {
        id: "summary-base-credits"
      })) : e === "Pixlr Premium" ? (0, i.T)("ul", {
        className: "top-5"
      }, (0, i.T)("li", (0, a.A)("fullAccesstoPixlrAppAndAsset")), (0, i.T)("li", {
        id: "summary-base-credits"
      }), (0, i.T)("li", {
        id: "summary-base-credits-free-trial",
        style: "display: none"
      })) : e === "Pixlr Team" ? (0, i.T)("ul", {
        className: "top-5"
      }, (0, i.T)("li", (0, a.A)("manageYourTeamMembersAndCollaborate")), (0, i.T)("li", {
        id: "summary-base-credits"
      }), (0, i.T)("li", (0, a.A)("fiveExtraSeatsIncluded"))) : e === "Pixlr Ultra" || e === "Pixlr Ultra Max" ? (0, i.T)("ul", {
        className: "top-5"
      }, (0, i.T)("li", (0, a.A)("fullAccesstoPixlrAppAndAsset")), (0, i.T)("li", {
        id: "summary-base-credits"
      })) : ""), (0, i.T)("span", {
        id: "summary-base-value",
        className: "bold"
      }, "9.99")) : "", t === "credits" ? (0, i.T)("div", {
        id: "summary-credits",
        className: "summary-group"
      }, (0, i.T)("h5", (0, i.T)("span", {
        id: "summary-credits-amount"
      })), (0, i.T)("span", {
        id: "summary-credits-value",
        className: "bold"
      }, "x")) : "", t === "paid" ? (0, i.T)("div", {
        id: "summary-base",
        className: "summary-group inc"
      }, (0, i.T)("div", {
        className: "desc"
      }, (0, i.T)("h5", e), (0, i.T)("ul", {
        className: "top-5"
      }, (0, i.T)("li", (0, a.A)("fullAccesstoPixlrAppAndAsset")), (0, i.T)("li", {
        id: "summary-base-credits"
      }))), (0, i.T)("span", {
        id: "summary-base-value",
        className: "bold"
      }, "9.99")) : "", (0, i.T)("div", {
        id: "summary-balance",
        className: "summary-group"
      }, (0, i.T)("h5", (0, a.A)("planBalanceUpgrade")), (0, i.T)("span", {
        id: "summary-balance-value",
        className: "bold"
      }, "x")), (0, i.T)("div", {
        id: "summary-promo",
        className: "summary-group"
      }, (0, i.T)("div", {
        className: "desc"
      }, (0, i.T)("h5", (0, a.A)("promoCode")), (0, i.T)("span", {
        id: "summary-promo-remarks",
        className: "color-g25 fw-4 fs-14"
      }, "x")), (0, i.T)("span", {
        id: "summary-promo-value"
      }, "x")), (0, i.T)("div", {
        id: "summary-seats",
        className: "summary-group"
      }, (0, i.T)("div", {
        className: "desc"
      }, (0, i.T)("h5", (0, a.A)("additionalSeats")), (0, i.T)("span", {
        id: "summary-seats-count",
        className: "color-g25 fw-4 fs-14"
      }, "x5 seats")), (0, i.T)("span", {
        id: "summary-seats-value"
      }, "x")), (0, i.T)("div", {
        style: "margin-top: 8px; display: flex; flex-direction: column; gap: 4px;"
      }, (0, i.T)("div", {
        id: "summary-subtotal",
        className: "summary-group inc"
      }, (0, i.T)("h5", (0, a.A)("subtotal")), (0, i.T)("span", {
        id: "summary-subtotal-value"
      }, "x")), (0, i.T)("div", {
        id: "summary-tax",
        className: "summary-group"
      }, (0, i.T)("h5", {
        id: "summary-tax-label"
      }, "VAT"), (0, i.T)("span", {
        id: "summary-tax-value"
      }, "x"))), (0, i.T)("div", {
        id: "summary-summer-campaign",
        className: "summary-group"
      }, (0, i.T)("div", {
        className: "desc"
      }, (0, i.T)("h5", `${(0, a.A)("limitedTimeDiscount")}`), (0, i.T)("span", {
        id: "summary-summer-campaign-note",
        className: "color-g25 fw-4 fs-14"
      })), (0, i.T)("span", {
        id: "summary-summer-campaign-discount"
      }, "15%"))), (0, i.T)("hr"), (0, i.T)("div", {
        id: "summary-total",
        className: "summary-group inc"
      }, (0, i.T)("div", {
        className: "desc"
      }, (0, i.T)("h5", (0, a.A)("checkoutTotalDue"), " (", (0, i.T)("span", {
        className: "currency"
      }, "USD"), ")"), (0, i.T)("span", {
        id: "summary-total-tax",
        className: "color-g25 fw-4 fs-14",
        style: "display: none; font-size:12px;margin-top: 4px;"
      }, "(incl. GST)")), (0, i.T)("span", {
        className: "total-price bold"
      }, "x")), (0, i.T)("p", {
        id: "summary-billing-note",
        style: "margin-top: 4px; font-size: 12px;"
      }, `${(0, a.A)("checkoutBillingCountry")}: -`), (0, i.T)("button", {
        id: "proceed-payment",
        disabled: true
      }, (0, a.A)("payNow")), (0, i.T)("i", {
        id: "payment-info-message",
        className: "summary-group"
      }))]);
    }
