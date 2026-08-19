var web;
(() => {
  "use strict";

  var e = {
    8102(e, t, i) {
      var n = i(6314);
      var a = i.n(n)()(function (e) {
        return e[1];
      });
      a.push([e.id, "* {\n    --g15: #23262B;\n    --g20: #f0f0f0;\n    --g25: #6A6E74;\n    --g50: #D3D4D4;\n    --g70: #E9EDF1;\n\n    --primary: #000;\n    --disabled: #D9D9D9;\n}\n\n.fs-12 { font-size: 12px; }\n.fs-14 { font-size: 14px; }\n.fs-16 { font-size: 16px; }\n\n.bold { font-weight: 700; }\n.fw-7 { font-weight: 700; }\n.fw-4 { font-weight: 400; }\n\n.text-center { text-align: center; }\n.color-g25 { color: var(--g25); }\n.text-small {\n    font-size: 12px !important;\n    font-weight: 400 !important;\n    line-height: 18px !important;\n}\n.saving-badge {\n    display: inline-flex;\n    padding: 2px 8px;\n    margin-left: 4px;\n    background: #E84545;\n    color: white;\n    border-radius: 4px;\n}\n\n#chckout {\n    height: 600px;\n    min-height: 600px;\n}\n\n#chckout .content {\n    flex:1;\n    display: flex;\n    flex-direction: row;\n    overflow: hidden;\n}\n\n#chckout p {\n    color: var(--g15);\n}\n\n#chckout h4 {\n    font-weight: 700;\n    font-size: 16px;\n    color: var(--primary);\n    margin: 0;\n    line-height: 24px;\n}\n\n#chckout h5 {\n    font-weight: 700;\n    font-size: 14px;\n    color: var(--primary);\n    margin: 0;\n}\n\n#chckout h6 {\n    font-weight: 400;\n    font-size: 12px;\n    color: var(--primary);\n    margin: 0;\n    line-height: 18px;\n}\n\n#chckout p { margin: 0; }\n\n#chckout hr {\n    border: none;\n    border-top: 2px dotted var(--g50);\n    width: 100%;\n    margin: 0;\n}\n\n#chckout button {\n    color: #FFF;\n    background-color: var(--g15);\n    font-weight: 700;\n    font-size: 14px;\n\n    border: none;\n    border-radius: 4px;\n    cursor: pointer;\n    padding: 14px 0;\n}\n#chckout button:disabled {\n    opacity: 50%;\n}\n\n#chckout-options .kort {\n    gap: 10px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    border-radius: 8px;\n    background-color: var(--g20);\n    height: fit-content;\n}\n\n#chckout-options summary {\n    cursor: pointer;\n    padding: 16px;\n    user-select: none;\n    transition: all 100ms ease-in-out;\n}\n#chckout-options .kort > div {\n    padding: 5px 20px 20px 20px;\n}\n\n#chckout-options details summary img:last-of-type {\n    transition: all 150ms linear;\n    transform: rotate(180deg);\n}\n#chckout-options details[open] summary img:last-of-type {\n    transform: rotate(0deg);\n}\n\n.mini-kort {\n    padding: 5px;\n    border-radius: 4px;\n    background-color: var(--g70);\n}\n\n\n\n#chckout .flex {\n    display: flex;\n}\n\n#chckout-loading {\n    display: flex;\n    width: 100%;\n    height: 100%;\n    z-index: 199;\n    position: absolute;\n    background: #FFF;\n    border-radius: 20px;\n    align-items: center;\n    justify-content: center;\n}\n\n#chckout-options {\n    width: 55%;\n    row-gap: 10px;\n    padding: 24px;\n    display: flex;\n    overflow-y: scroll;\n    flex-direction: column;\n    margin: 1px 0;\n}\n\n#chckout-options::-webkit-scrollbar {\n    width: 16px;\n}\n#chckout-options::-webkit-scrollbar-thumb {\n    height: 56px;\n    border-radius: 8px;\n    border: 4px solid transparent;\n    background-clip: content-box;\n    background-color: #999;\n}\n#chckout-options::-webkit-scrollbar-thumb:hover {\n    background-color: #666;\n}\n\n#chckout-summary {\n    width: 45%;\n    padding: 40px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    overflow-y: auto;\n    position: relative;\n    align-items: flex-start;\n    background-color: #36373e;\n    background-size: 100% 100%;\n    background-repeat: no-repeat;\n    border-bottom-right-radius: 18px;\n    background-image: linear-gradient(315deg, #525a8f 0%, #46719f 74%);\n}\n\n#chckout-summary::after {\n    bottom:0;\n    right: 0;\n    content: '';\n    width: 800px;\n    height: 800px;\n    display: block;\n    position: absolute;\n    pointer-events: none;\n    background-image: radial-gradient( ellipse 100% 100% at 0% 100%, #d4d4d442, #dfdfdf00);\n    background-size: 800px 800px;\n    background-repeat: no-repeat;\n}\n\n#back-chckout {\n    align-self: flex-start;\n    cursor: pointer;\n}\n\n#chckout-summary #summary-wrapper,\n#chckout-summary #paypal-upgrade-notice-wrapper {\n    z-index: 2;\n    width: 92%;\n    row-gap: 20px;\n    display: flex;\n    padding: 30px;\n    margin: 0 auto;\n    border-radius: 15px;\n    background: #FFF;\n    flex-direction: column;\n    box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 15px 0px;\n}\n\n#chckout-summary #paypal-upgrade-notice-wrapper {\n    margin-top: 10px;\n    padding: 10px;\n}\n\n#summary-wrapper .summary-group {\n    display: none;\n    justify-content: space-between;\n}\n#summary-wrapper .summary-group.inc {\n    display: flex;\n}\n\n#summary-wrapper .summary-group > :first-child {\n    max-width: 95%;\n}\n\n#summary-wrapper .summary-group .desc {\n    display: flex;\n    flex-direction: column;\n}\n#summary-wrapper .summary-group .desc ul {\n    list-style-type: disc;\n    margin-left: 20px;\n    color: var(--g25);\n    font-weight: 400;\n    font-size: 14px;\n}\n\n\n/* Payment Method Component */\n#payment-option-radios {\n    display: flex;\n    column-gap: 29px;\n}\n.payment-options {\n    display: flex;\n    align-items: center;\n}\n.payment-options > input {\n    margin: 0 8px 0 0;\n    transform: scale(1.4);\n}\n.payment-options > label {\n    display: unset;\n}\n\n#saved-cards {\n    display: flex;\n    column-gap: 8px;\n    overflow-x: scroll;\n\n    -ms-overflow-style: none;  /* IE and Edge */\n    scrollbar-width: none;\n}\n#saved-cards::-webkit-scrollbar {\n    display: none;\n}\n\n#saved-cards > *.blocked {\n    opacity: 0.3;\n    user-select: none;\n}\n\n#saved-cards > * {\n    display: flex;\n    width: 35%;\n    min-width: 180px;\n    flex-direction: column;\n    border-radius: 8px;\n    padding: 5px 12px 15px;\n    color: #FFF;\n    font-size: 14px;\n    user-select: none;\n    cursor: pointer;\n}\n#saved-cards > *:nth-child(even) {\n    background-color: #2E4357;\n}\n#saved-cards > *:nth-child(odd) {\n    background-color: #23262B;\n}\n\n/* Plan Selection Component */\n.plan-options {\n    padding: 16px;\n    border-radius: 8px;\n    border: 1px solid var(--g50);\n    user-select: none;\n    cursor: pointer;\n}\n.plan-options.selected,\n.plan-options:hover {\n    border: 1px solid #000;\n}\n\n\n/* Promocode Option Component */\n#promo-section {\n    display: flex;\n    position: relative;\n    align-items: center;\n}\n#promo-section > input {\n    height: 35px;\n    flex-grow: 1;\n    margin-top: 0;\n    padding-left: 10px;\n    background-color: white;\n    border-radius: 4px 0px 0px 4px;\n    border: 1px solid #B9C4C9;\n    color: black;\n}\n#promo-section > span {\n    width: 100px;\n    cursor: pointer;\n    font-size: 14px;\n    color: white;\n    border-radius: 0 4px 4px 0;\n    text-align: center;\n    line-height: 35px;\n    background: var(--g15);\n}\n#promocode-error {\n    color: red !important;\n    font-size: 12px;\n    display: none;\n}\n\n/* Billing Form */\n#billing-form input {\n    width: 100% !important;\n    background-color: #FFFFFF !important;\n    color: #000000 !important;\n    border: 1px solid #b9c4c9 !important;\n\tborder-radius: 4px;\n    height: 40px !important;\n    font-size: 14px;\n}\n#billing-form .w-50 {\n\twidth: 48%;\n}\n#billing-form .form-group {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding-top: 15px;\n}\n#billing-form .form-group .country-select {\n    width: 100%;\n    border-radius: 4px;\n    border: 1px solid #b9c4c9;\n    width: 100%;\n    height: 40px;\n    background-color: white;\n    padding: 5px 8px;\n    line-height: initial;\n}\n#billing-form .form-group .country-select:hover {\n    border-color: #99a3ad;\n}\n#billing-form .form-group .country-select option {\n    background-color: white;\n}\n\n#billing-form .flex {\n\tjustify-content: space-between;\n    align-items: flex-end;\n    gap: 10px;\n}\n\n#billing-form .billing-title {\n    display: flex;\n    flex-direction: row;\n    gap: 10px;\n}\n\n\n\n\n/* Custom Seat */\n.seat-select {\n    display: flex;\n    justify-content: space-between;\n}\n\n.seat-select .seat-option,\n.credit-select .credit-option {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 18%;\n    height: 50px;\n    font-size: 12px;\n    border-radius: 5px;\n    background: #FFF;\n    position: relative;\n    border: 1px solid #E0E0E0;\n    transition: all 0.15s linear;\n}\n\n/* Override #chckout button dark theme for credit options */\n#chckout .credit-select .credit-option {\n    color: #333;\n    background-color: #FFF;\n    border: 2px solid #E0E0E0;\n    font-weight: 400;\n    border-radius: 6px;\n    height: auto;\n    width: 100%;\n    justify-content: space-between;\n    padding: 10px 14px;\n}\n\n#chckout .credit-select .credit-option:hover {\n    border-color: #999;\n    background-color: #f9f9f9;\n}\n\n#chckout .credit-select .credit-option.active {\n    border: 2px solid #635bff;\n    background-color: #f0efff;\n    color: #333;\n    font-weight: 700;\n}\n\n#chckout .credit-select .credit-option.active > div:last-child {\n    color: #635bff;\n}\n.credit-select .credit-option em {\n    display: block;\n    position: absolute;\n    right: -6px;\n    top: -10px;\n    color:white;\n\n    padding:1px 6px;\n    border-radius: 5px;\n    font-size: 11px;\n    font-weight: bold;\n    background-color: #E84545;\n}\n\n.seat-select .seat-option:last-of-type {\n    width: 26%;\n}\n\n\n\n.seat-select .seat-option:hover,\n.seat-select .seat-option.active {\n    cursor: pointer;\n    font-weight: 700;\n    border: 2px solid #000;\n}\n\n.credit-select .credit-option:hover {\n    cursor: pointer;\n    font-weight: 700;\n    border: 1px solid #000;\n}\n\n.credit-select .credit-option.active {\n    cursor: pointer;\n    font-weight: 700;\n    border: 2px solid #635bff;\n    background: #f0efff;\n}\n\n.credit-select .credit-option.active > div:last-child {\n    color: #635bff;\n}\n\n.seat-select .seat-option-custom {\n    width: 100px;\n}\n.seat-select .seat-option-custom input {\n    width: 100%;\n    text-align: center;\n    border: none;\n    color: #333;\n    background-color: #FFF;\n    margin-top: 0;\n}\n\n.seat-select .seat-option-custom input[type=\"number\"]:hover,\n.seat-select .seat-option-custom input[type=\"number\"]:focus {\n    border: none !important;\n}\n\n#chckout-result {\n\tdisplay: flex;\n\twidth: 100%;\n\theight: 100%;\n\tflex-direction: column;\n\talign-items: center;\n\tjustify-content: center;\n    text-align: center;\n\tpadding: 70px 35px;\n    /* background-color: #FFF; */\n}\n#chckout-result p {\n\tmargin: 0px;\n}\n\n\n#component-container {\n    min-width: 350px;\n    min-height: 175px;\n}\n\n#component-container.blocked {\n    opacity: 0.3;\n    cursor: not-allowed;\n}\n#component-container.blocked * {\n    pointer-events: none;\n}\n\n#component-container input,\n#billing-address input {\n    border: 1px solid #b9c4c9 !important;\n    padding: 5px 8px;\n}\n\n#component-3ds-container {\n    padding-top: 20px\n}\n#component-3ds-container > div {\n    margin: auto\n}\n\n\n/******************************************************************/\n/************************* Responsive *****************************/\n/******************************************************************/\n\n@media only screen and (min-width: 601px) and (max-width:825px) {\n    #component-container {\n        min-width: 250px;\n    }\n    #chckout-options {\n        padding: 24px 8px;\n        border-radius: 20px;\n    }\n    #chckout-options .kort > div {\n        padding: 5px 15px 20px 15px;\n    }\n    #chckout-options #chckout-planSelection .plan-options {\n        margin-top: 4px;\n    }\n    #chckout-options #chckout-planSelection .plan-options p {\n        display: flex;\n        flex-direction: column;\n        gap: 4px\n    }\n    #chckout-summary {\n        padding: 40px 0;\n    }\n    #chckout-summary #summary-wrapper,\n    #chckout-summary #paypal-upgrade-notice-wrapper {\n        padding: 16px;\n    }\n    .seat-select {\n        justify-content: flex-end;\n        flex-wrap: wrap;\n        gap: 12px;\n    }\n    .seat-select .seat-option {\n        flex: 0 0 30%;\n    }\n    .seat-select .seat-option.seat-option-custom {\n        flex: 0 0 40%;\n    }\n}\n\n@media only screen and (max-width:600px) {\n    #component-container {\n        min-width: 250px;\n    }\n    #chckout {\n        height: auto;\n        min-height: unset;\n        max-height: 90vh;\n    }\n    #chckout .content {\n        flex-direction: column;\n        gap: 16px;\n        border-radius: 20px;\n        overflow-y: auto;\n    }\n    #chckout-options, #chckout-summary {\n        width: 100%;\n        overflow-y: unset;\n        padding: 8px 4px 8px 8px;\n    }\n    #chckout-summary {\n        margin: 8px;\n        padding: 10px;\n        border-bottom-left-radius: 18px;\n        width: 97%;\n    }\n}\n/* touch screen device */\n@media (pointer: coarse)  {\n    .seat-select .seat-option:hover,\n    .credit-select .credit-option:hover {\n        font-weight: 400;\n        border: 1px solid #E0E0E0;\n    }\n    .seat-select .seat-option.active,\n    .credit-select .credit-option.active {\n        cursor: pointer;\n        font-weight: 700;\n        border: 1px solid #000;\n    }\n}", ""]);
      const o = a;
      i.d(t, ["A", 0, o]);
    },
    6314(e) {
      e.exports = function (e) {
        var t = [];
        t.toString = function () {
          return this.map(function (t) {
            var i = e(t);
            if (t[2]) {
              return `@media ${t[2]} {${i}}`;
            } else {
              return i;
            }
          }).join("");
        };
        t.i = function (e, i, n) {
          if (typeof e == "string") {
            e = [[null, e, ""]];
          }
          var a = {};
          if (n) {
            for (var o = 0; o < this.length; o++) {
              var s = this[o][0];
              if (s != null) {
                a[s] = true;
              }
            }
          }
          for (var r = 0; r < e.length; r++) {
            var c = [].concat(e[r]);
            if (!n || !a[c[0]]) {
              if (i) {
                if (c[2]) {
                  c[2] = `${i} and ${c[2]}`;
                } else {
                  c[2] = i;
                }
              }
              t.push(c);
            }
          }
        };
        return t;
      };
    },
    1413(e, t, i) {
      i.r(t);
      var n = i(5072);
      var a = i.n(n);
      var o = i(8102);
      var s = {
        insert: "head",
        singleton: false
      };
      a()(o.A, s);
      const r = o.A.locals || {};
      i.d(t, ["default", 0, r]);
    },
    5072(e, t, i) {
      var n;
      function a() {
        if (n === undefined) {
          n = Boolean(window && document && document.all && !window.atob);
        }
        return n;
      }
      var o = function () {
        var e = {};
        return function (t) {
          if (e[t] === undefined) {
            var i = document.querySelector(t);
            if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) {
              try {
                i = i.contentDocument.head;
              } catch (n) {
                i = null;
              }
            }
            e[t] = i;
          }
          return e[t];
        };
      }();
      var s = [];
      function r(e) {
        var t = -1;
        for (var i = 0; i < s.length; i++) {
          if (s[i].identifier === e) {
            t = i;
            break;
          }
        }
        return t;
      }
      function c(e, t) {
        var i = {};
        var n = [];
        for (var a = 0; a < e.length; a++) {
          var o = e[a];
          var c = t.base ? o[0] + t.base : o[0];
          var l = i[c] || 0;
          var d = `${c} ${l}`;
          i[c] = l + 1;
          var p = r(d);
          var h = {
            css: o[1],
            media: o[2],
            sourceMap: o[3]
          };
          if (p !== -1) {
            s[p].references++;
            s[p].updater(h);
          } else {
            s.push({
              identifier: d,
              updater: g(h, t),
              references: 1
            });
          }
          n.push(d);
        }
        return n;
      }
      function l(e) {
        var t = document.createElement("style");
        var n = e.attributes || {};
        if (n.nonce === undefined) {
          var a = i.nc;
          if (a) {
            n.nonce = a;
          }
        }
        Object.keys(n).forEach(function (e) {
          t.setAttribute(e, n[e]);
        });
        if (typeof e.insert == "function") {
          e.insert(t);
        } else {
          var s = o(e.insert || "head");
          if (!s) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }
          s.appendChild(t);
        }
        return t;
      }
      var d;
      d = [];
      function p(e, t) {
        d[e] = t;
        return d.filter(Boolean).join("\n");
      }
      function h(e, t, i, n) {
        var a = i ? "" : n.media ? `@media ${n.media} {${n.css}}` : n.css;
        if (e.styleSheet) {
          e.styleSheet.cssText = p(t, a);
        } else {
          var o = document.createTextNode(a);
          var s = e.childNodes;
          if (s[t]) {
            e.removeChild(s[t]);
          }
          if (s.length) {
            e.insertBefore(o, s[t]);
          } else {
            e.appendChild(o);
          }
        }
      }
      function u(e, t, i) {
        var n = i.css;
        var a = i.media;
        var o = i.sourceMap;
        if (a) {
          e.setAttribute("media", a);
        } else {
          e.removeAttribute("media");
        }
        if (o && typeof btoa != "undefined") {
          n += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(o))))} */`;
        }
        if (e.styleSheet) {
          e.styleSheet.cssText = n;
        } else {
          while (e.firstChild) {
            e.removeChild(e.firstChild);
          }
          e.appendChild(document.createTextNode(n));
        }
      }
      var m = null;
      var y = 0;
      function g(e, t) {
        var i;
        var n;
        var a;
        if (t.singleton) {
          var o = y++;
          i = m ||= l(t);
          n = h.bind(null, i, o, false);
          a = h.bind(null, i, o, true);
        } else {
          i = l(t);
          n = u.bind(null, i, t);
          a = function () {
            (function (e) {
              if (e.parentNode === null) {
                return false;
              }
              e.parentNode.removeChild(e);
            })(i);
          };
        }
        n(e);
        return function (t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) {
              return;
            }
            n(e = t);
          } else {
            a();
          }
        };
      }
      e.exports = function (e, t) {
        if (!(t = t || {}).singleton && typeof t.singleton != "boolean") {
          t.singleton = a();
        }
        var i = c(e = e || [], t);
        return function (e) {
          e = e || [];
          if (Object.prototype.toString.call(e) === "[object Array]") {
            for (var n = 0; n < i.length; n++) {
              var a = r(i[n]);
              s[a].references--;
            }
            var o = c(e, t);
            for (var l = 0; l < i.length; l++) {
              var d = r(i[l]);
              if (s[d].references === 0) {
                s[d].updater();
                s.splice(d, 1);
              }
            }
            i = o;
          }
        };
      };
    },
    6361(e, t, i) {
      i.d(t, {
        $U: () => n,
        Vr: () => o,
        Xr: () => r,
        _0: () => s,
        mi: () => a
      });
      i(98);
      class n {
        constructor(e) {
          const o = e.resources || [];
          const s = o.find(e => e.type === "image" || e.type === "video" || e.type === "audio") || o.find(e => e.type !== "thumbnail") || o[0];
          const r = o.find(e => e.type === "thumbnail");
          this.url = (s == null ? undefined : s.url) || e.resource?.url || "";
          this.thumb = (r == null ? undefined : r.url) || (s == null ? undefined : s.url) || e.resource?.thumb || e.resource?.url || "";
          this.type = (s == null ? undefined : s.type) || e.resource?.type || e.type || "image";
          this.isImage = this.type === "image";
          this.isVideo = this.type === "video";
          this.isAudio = this.type === "audio";
        }
        get image() {
          if (this.isImage) {
            return this.url;
          } else {
            return null;
          }
        }
        get video() {
          if (this.isVideo) {
            return this.url;
          } else {
            return null;
          }
        }
        get audio() {
          if (this.isAudio) {
            return this.url;
          } else {
            return null;
          }
        }
        get exists() {
          return !!this.url;
        }
      }
      async function a(e) {
        const t = await fetch(`/api/aif/generation/${e}`, {
          method: "DELETE"
        });
        if (!t.ok) {
          throw new Error(`Delete generation failed: ${t.status}`);
        }
      }
      function o(e, t) {
        fetch(`/api/aif/generation/${e}/thumb`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            waveform: t
          })
        }).catch(() => {});
      }
      function s(e, t, i) {
        const n = e.getContext("2d");
        if (!n) {
          return;
        }
        const a = e.width;
        const o = e.height;
        n.fillStyle = i;
        const s = t.length / a;
        for (let r = 0; r < a; r++) {
          const e = t[Math.floor(r * s)] / 100;
          const i = Math.max(1, e * o);
          n.fillRect(r, (o - i) / 2, 1, i);
        }
      }
      async function r(e, t = 200) {
        const i = await fetch(e);
        const n = await i.arrayBuffer();
        const a = new AudioContext();
        const o = (await a.decodeAudioData(n)).getChannelData(0);
        const s = Math.ceil(o.length / t);
        const r = [];
        let c = 0;
        for (let d = 0; d < t; d++) {
          let e = 0;
          let t = 0;
          for (let n = 0; n < s; n++) {
            const i = d * s + n;
            if (i >= o.length) {
              break;
            }
            e += o[i] * o[i];
            t++;
          }
          const i = Math.sqrt(e / (t || 1));
          r.push(i);
          if (i > c) {
            c = i;
          }
        }
        const l = r.map(e => Math.round(Math.pow(e / (c || 1), 1.8) * 70));
        a.close();
        return l;
      }
    },
    7135(e, t, i) {
      i.d(t, {
        A: () => o
      });
      var n = i(98);
      var a = i(5432);
      const o = (e, t) => {
        if (typeof gtag != "undefined" && !((window.dataLayer?.length ?? 0) > 1000)) {
          gtag("event", e, {
            product: n.Ay.product,
            user_type: a.Ny?.type ?? "guest",
            label: t
          });
        }
      };
    },
    4947(e, t, i) {
      i.d(t, {
        In: () => o
      });
      i(5432);
      var n = i(5283);
      let a = null;
      async function o(e, t = "GET", i = {}, o = false) {
        try {
          const s = {
            "Content-Type": "application/json"
          };
          if (o) {
            s.Authorization = `Bearer ${(0, n.lR)("__pat", (0, n.lR)("__prt", ""))}`;
          }
          const r = {
            method: t,
            headers: s
          };
          if (t !== "GET") {
            r.body = JSON.stringify(i);
          }
          let c = await fetch(e, r);
          if (c.status === 401 && o) {
            if (await async function () {
              return a || (a = fetch("/api/auth/refresh", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                }
              }).then(e => e.json()).then(e => e.status === true).catch(() => false).finally(() => {
                a = null;
              }), a);
            }()) {
              s.Authorization = `Bearer ${(0, n.lR)("__pat", "")}`;
              const a = {
                method: t,
                headers: s
              };
              if (t !== "GET") {
                a.body = JSON.stringify(i);
              }
              c = await fetch(e, a);
            }
          }
          return await c.json();
        } catch (s) {
          console.error(s);
          return {
            status: false,
            message: "Internal Server Error"
          };
        }
      }
      const s = async (e = 500) => {
        const o = new AbortController();
        const s = setTimeout(() => o.abort(), e);
        try {
          const e = await fetch("/api/geoip/", {
            signal: o.signal
          });
          clearTimeout(s);
          if (!e.ok) {
            return {
              status: false
            };
          }
          const r = await e.json();
          const c = (r == null ? undefined : r.registeredCountry)?.isoCode || (r == null ? undefined : r.country)?.isoCode;
          const l = (r == null ? undefined : r.subdivisions)?.[0]?.isoCode;
          const d = r == null ? undefined : r.ip;
          if (c) {
            return {
              status: true,
              countryIso: c,
              stateIso: l,
              ip: d
            };
          } else {
            return {
              status: false,
              ip: d
            };
          }
        } catch (r) {
          clearTimeout(s);
          return {
            status: false
          };
        }
      };
      i.d(t, ["ED", 0, ["AF", "AL", "DZ", "AO", "AZ", "BS", "BH", "BD", "BB", "BJ", "BT", "BO", "BA", "BW", "BF", "BI", "KH", "CM", "CV", "CF", "TD", "KM", "CU", "DJ", "DM", "DO", "EC", "SV", "ER", "ET", "FJ", "GA", "GH", "GD", "GT", "GN", "GW", "GY", "HT", "HN", "IN", "ID", "IQ", "JM", "KE", "KG", "LA", "LR", "LY", "MG", "MW", "ML", "MR", "MD", "MN", "MZ", "MM", "NR", "NP", "NI", "NE", "NG", "PW", "PG", "RW", "KN", "LC", "VC", "WS", "SN", "SC", "SL", "SB", "SO", "SD", "SR", "TJ", "TL", "TG", "TO", "TT", "TM", "TV", "UG", "UA", "UZ", "VU", "EH", "ZM", "ZW"], "FS", 0, {
        AF: "Afghanistan",
        AX: "Åland Islands",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius and Saba",
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo, Republic of the (Brazzaville)",
        CD: "Congo, the Democratic Republic of the (Kinshasa)",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Côte d'Ivoire, Republic of",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (Islas Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern and Antarctic Lands",
        GA: "Gabon",
        GM: "Gambia, The",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard Island and McDonald Islands",
        VA: "Holy See (Vatican City)",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran, Islamic Republic of",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "Korea, Democratic People's Republic of",
        KR: "Korea, Republic of",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Laos",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia, Republic of",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia, Federated States of",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestine, State of",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthélemy",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        KN: "Saint Kitts and Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        PM: "Saint Pierre and Miquelon",
        VC: "Saint Vincent and the Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome and Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten (Dutch part)",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia and South Sandwich Islands",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syrian Arab Republic",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania, United Republic of",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela, Bolivarian Republic of",
        VN: "Viet Nam",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        WF: "Wallis and Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
      }, "Pe", 0, (e, t, i) => o(`/api/promo/status/?code=${e}&product=${t}&splan=${i}`), "VM", 0, s, "Vi", 0, e => o("/checkout/upgrade/details", "POST", {
        plan: e
      }), "X6", 0, () => o("/api/country/"), "_t", 0, async () => (await s()).countryIso || "US", "dL", 0, () => o("/checkout/products/"), "eC", 0, ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "GB"], "gs", 0, e => {
        const t = new URLSearchParams();
        if (e == null ? undefined : e.length) {
          t.append("codes", e.join(","));
        }
        const i = t.toString();
        return o("/checkout/plans/" + (i ? `?${i}` : ""));
      }, "kP", 0, () => o("/api/credits/plans"), "sG", 0, (e, t) => o(`/paypal/polling?id=${e}&type=${t}`, "POST")]);
    },
    9266(e, t, i) {
      i.d(t, {
        Ay: () => p,
        FS: () => c
      });
      var n = i(7775);
      var a = i(7135);
      var o = i(4947);
      var s = i(5283);
      var r = i(1122);
      const c = {
        AF: "Afghanistan",
        AX: "Åland Islands",
        AL: "Albania",
        DZ: "Algeria",
        AS: "American Samoa",
        AD: "Andorra",
        AO: "Angola",
        AI: "Anguilla",
        AQ: "Antarctica",
        AG: "Antigua and Barbuda",
        AR: "Argentina",
        AM: "Armenia",
        AW: "Aruba",
        AU: "Australia",
        AT: "Austria",
        AZ: "Azerbaijan",
        BS: "Bahamas",
        BH: "Bahrain",
        BD: "Bangladesh",
        BB: "Barbados",
        BY: "Belarus",
        BE: "Belgium",
        BZ: "Belize",
        BJ: "Benin",
        BM: "Bermuda",
        BT: "Bhutan",
        BO: "Bolivia",
        BQ: "Bonaire, Sint Eustatius and Saba",
        BA: "Bosnia and Herzegovina",
        BW: "Botswana",
        BV: "Bouvet Island",
        BR: "Brazil",
        IO: "British Indian Ocean Territory",
        BN: "Brunei Darussalam",
        BG: "Bulgaria",
        BF: "Burkina Faso",
        BI: "Burundi",
        KH: "Cambodia",
        CM: "Cameroon",
        CA: "Canada",
        CV: "Cape Verde",
        KY: "Cayman Islands",
        CF: "Central African Republic",
        TD: "Chad",
        CL: "Chile",
        CN: "China",
        CX: "Christmas Island",
        CC: "Cocos (Keeling) Islands",
        CO: "Colombia",
        KM: "Comoros",
        CG: "Congo, Republic of the (Brazzaville)",
        CD: "Congo, the Democratic Republic of the (Kinshasa)",
        CK: "Cook Islands",
        CR: "Costa Rica",
        CI: "Côte d'Ivoire, Republic of",
        HR: "Croatia",
        CU: "Cuba",
        CW: "Curaçao",
        CY: "Cyprus",
        CZ: "Czech Republic",
        DK: "Denmark",
        DJ: "Djibouti",
        DM: "Dominica",
        DO: "Dominican Republic",
        EC: "Ecuador",
        EG: "Egypt",
        SV: "El Salvador",
        GQ: "Equatorial Guinea",
        ER: "Eritrea",
        EE: "Estonia",
        ET: "Ethiopia",
        FK: "Falkland Islands (Islas Malvinas)",
        FO: "Faroe Islands",
        FJ: "Fiji",
        FI: "Finland",
        FR: "France",
        GF: "French Guiana",
        PF: "French Polynesia",
        TF: "French Southern and Antarctic Lands",
        GA: "Gabon",
        GM: "Gambia, The",
        GE: "Georgia",
        DE: "Germany",
        GH: "Ghana",
        GI: "Gibraltar",
        GR: "Greece",
        GL: "Greenland",
        GD: "Grenada",
        GP: "Guadeloupe",
        GU: "Guam",
        GT: "Guatemala",
        GG: "Guernsey",
        GN: "Guinea",
        GW: "Guinea-Bissau",
        GY: "Guyana",
        HT: "Haiti",
        HM: "Heard Island and McDonald Islands",
        VA: "Holy See (Vatican City)",
        HN: "Honduras",
        HK: "Hong Kong",
        HU: "Hungary",
        IS: "Iceland",
        IN: "India",
        ID: "Indonesia",
        IR: "Iran, Islamic Republic of",
        IQ: "Iraq",
        IE: "Ireland",
        IM: "Isle of Man",
        IL: "Israel",
        IT: "Italy",
        JM: "Jamaica",
        JP: "Japan",
        JE: "Jersey",
        JO: "Jordan",
        KZ: "Kazakhstan",
        KE: "Kenya",
        KI: "Kiribati",
        KP: "Korea, Democratic People's Republic of",
        KR: "Korea, Republic of",
        KW: "Kuwait",
        KG: "Kyrgyzstan",
        LA: "Laos",
        LV: "Latvia",
        LB: "Lebanon",
        LS: "Lesotho",
        LR: "Liberia",
        LY: "Libya",
        LI: "Liechtenstein",
        LT: "Lithuania",
        LU: "Luxembourg",
        MO: "Macao",
        MK: "Macedonia, Republic of",
        MG: "Madagascar",
        MW: "Malawi",
        MY: "Malaysia",
        MV: "Maldives",
        ML: "Mali",
        MT: "Malta",
        MH: "Marshall Islands",
        MQ: "Martinique",
        MR: "Mauritania",
        MU: "Mauritius",
        YT: "Mayotte",
        MX: "Mexico",
        FM: "Micronesia, Federated States of",
        MD: "Moldova",
        MC: "Monaco",
        MN: "Mongolia",
        ME: "Montenegro",
        MS: "Montserrat",
        MA: "Morocco",
        MZ: "Mozambique",
        MM: "Myanmar",
        NA: "Namibia",
        NR: "Nauru",
        NP: "Nepal",
        NL: "Netherlands",
        NC: "New Caledonia",
        NZ: "New Zealand",
        NI: "Nicaragua",
        NE: "Niger",
        NG: "Nigeria",
        NU: "Niue",
        NF: "Norfolk Island",
        MP: "Northern Mariana Islands",
        NO: "Norway",
        OM: "Oman",
        PK: "Pakistan",
        PW: "Palau",
        PS: "Palestine, State of",
        PA: "Panama",
        PG: "Papua New Guinea",
        PY: "Paraguay",
        PE: "Peru",
        PH: "Philippines",
        PN: "Pitcairn",
        PL: "Poland",
        PT: "Portugal",
        PR: "Puerto Rico",
        QA: "Qatar",
        RE: "Réunion",
        RO: "Romania",
        RU: "Russian Federation",
        RW: "Rwanda",
        BL: "Saint Barthélemy",
        SH: "Saint Helena, Ascension and Tristan da Cunha",
        KN: "Saint Kitts and Nevis",
        LC: "Saint Lucia",
        MF: "Saint Martin",
        PM: "Saint Pierre and Miquelon",
        VC: "Saint Vincent and the Grenadines",
        WS: "Samoa",
        SM: "San Marino",
        ST: "Sao Tome and Principe",
        SA: "Saudi Arabia",
        SN: "Senegal",
        RS: "Serbia",
        SC: "Seychelles",
        SL: "Sierra Leone",
        SG: "Singapore",
        SX: "Sint Maarten (Dutch part)",
        SK: "Slovakia",
        SI: "Slovenia",
        SB: "Solomon Islands",
        SO: "Somalia",
        ZA: "South Africa",
        GS: "South Georgia and South Sandwich Islands",
        SS: "South Sudan",
        ES: "Spain",
        LK: "Sri Lanka",
        SD: "Sudan",
        SR: "Suriname",
        SZ: "Swaziland",
        SE: "Sweden",
        CH: "Switzerland",
        SY: "Syrian Arab Republic",
        TW: "Taiwan",
        TJ: "Tajikistan",
        TZ: "Tanzania, United Republic of",
        TH: "Thailand",
        TL: "Timor-Leste",
        TG: "Togo",
        TK: "Tokelau",
        TO: "Tonga",
        TT: "Trinidad and Tobago",
        TN: "Tunisia",
        TR: "Turkey",
        TM: "Turkmenistan",
        TC: "Turks and Caicos Islands",
        TV: "Tuvalu",
        UG: "Uganda",
        UA: "Ukraine",
        AE: "United Arab Emirates",
        GB: "United Kingdom",
        US: "United States",
        UM: "United States Minor Outlying Islands",
        UY: "Uruguay",
        UZ: "Uzbekistan",
        VU: "Vanuatu",
        VE: "Venezuela, Bolivarian Republic of",
        VN: "Viet Nam",
        VG: "Virgin Islands, British",
        VI: "Virgin Islands, U.S.",
        WF: "Wallis and Futuna",
        EH: "Western Sahara",
        YE: "Yemen",
        ZM: "Zambia",
        ZW: "Zimbabwe"
      };
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
              i.src = "/img/icon/eye-hide.svg";
            } else {
              n.type = "text";
              i.src = "/img/icon/eye-show.svg";
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
    },
    1122(e, t, i) {
      i.d(t, {
        A: () => c
      });
      var n = i(7775);
      var a = i(9266);
      var o = i(4947);
      var s = i(5432);
      const r = window.location.href.includes("localhost") ? "10000000-ffff-ffff-ffff-000000000001" : "550ad708-3266-4d24-8566-69208120dbe6";
      class c {
        constructor() {
          this.chooser = () => `\n            <div class="chooser">\n                <div class="social-button" data-social="google">\n                    <img src="/images/icon/google.svg" alt="google">\n                    ${(0, n.A)("commonContinueWith")} Google\n                </div>\n                <div class="social-button" data-social="facebook">\n                    <img src="/images/icon/facebook.svg" alt="facebook">\n                    ${(0, n.A)("commonContinueWith")} Facebook\n                </div>\n                <div class="social-button" data-social="apple">\n                    <img src="/images/icon/apple_gray.svg" alt="apple">\n                    ${(0, n.A)("commonContinueWith")} Apple\n                </div>\n                <a class="top-20" style="display:inline-block;text-align:center;font-size:15px;" id="choose-email">\n                    <strong>${(0, n.A)("commonOrUseEmail")}</strong>\n                </a>\n            </div>\n            <p class="top-30 center" style="padding:0 25px">\n                ${(0, n.A)("commonAgreeTo")} <a href="/terms-of-use/" target='_new'>${(0, n.A)("commonTermsOfUse")}</a> ${(0, n.A)("commonAnd")} <a href="/privacy-policy/" target='_new'> ${(0, n.A)("commonPrivacyPolicy")}</a>.\n            </p>\n        `;
          this.login = () => `\n\n            <div class="center top-10">\n                ${(0, n.A)("commonNotMember")} &nbsp; <strong><a id="load-signup">${(0, n.A)("commonSignUp")}!</a></strong>\n            </div>\n\n            <form id="entry-form" data-entry="login" class="top-30">\n                <div class="input-group">\n                    <label for="entry-email">${(0, n.A)("commonEmail")}</label>\n                    <input type="email" maxlength="70" name="email" id="entry-email" placeholder="Email address">\n                    <p class="error-msg">${(0, n.A)("commonEnterValidEmail")}</p>\n                </div>\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonPassword")}</label>\n                    <input type="password" name="password" id="entry-password" placeholder="Enter password" data-login="true">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                </div>\n\n                <input type="checkbox" id="entry-rememberMe" name="rememberMe" checked/>\n                <label class="top-20 switch" for="entry-rememberMe"><span></span> ${(0, n.A)("commonRememberMe")}</label>\n\n                <div id="h-captcha" style="margin: 0px" data-sitekey="${r}"></div>\n\n                <button type="submit" class="button med w-100 top-40" id="entry-submit">${(0, n.A)("commonLogin")}</button>\n\n                <div class="center top-30"><strong><a id="load-forgotPassword">${(0, n.A)("commonForgotPass")}</a></strong></center>\n\n            </form>\n        `;
          this.register = async () => {
            let e = "";
            let t = false;
            const i = await (0, o._t)();
            for (let n in a.FS) {
              if (t || n !== "US" && i != n) {
                e += `<option value="${n}">${a.FS[n]}</option>`;
              } else {
                e += `<option value="${n}" selected>${a.FS[n]}</option>`;
                t = true;
              }
            }
            return `\n            <form id="entry-form" data-entry="register">\n                <div class="input-group">\n                    <label for="entry-email">${(0, n.A)("commonEmail")}</label>\n                    <input type="email" maxlength="70" name="email" id="entry-email" placeholder="Email address">\n                    <p class="error-msg">${(0, n.A)("commonEnterValidEmail")}</p>\n                </div>\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonPassword")}</label>\n                    <input type="password" name="password" id="entry-password" placeholder="Enter password">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                 </div>\n\n                <input type="checkbox" id="entry-newsletter" name="newsletter">\n                <label class="top-20 switch" for="entry-newsletter"><span></span>${(0, n.A)("subscribeToNewsletter")}</label>\n\n                <div id="h-captcha" style="margin: 0px" data-sitekey="${r}"></div>\n\n                <button type="submit" class="button med w-100 top-40">${(0, n.A)("commonSignUp")}</button>\n            </form>\n        `;
          };
          this.forgotPassword = () => `\n            <h2 class="top-30">${(0, n.A)("commonForgotPass")}</h2>\n\n            <form id="entry-form" class="top-30" data-entry="forgotPassword">\n                <div class="input-group">\n                    <label for="entry-email">${(0, n.A)("commonEmail")}</label>\n                    <input type="email" maxlength="70" name="email" id="entry-email" placeholder="Email address"/>\n                    <p class="error-msg">${(0, n.A)("commonEnterValidEmail")}</p>\n                </div>\n\n                <div id="h-captcha" style="margin: 0px" data-sitekey="${r}"></div>\n\n                <button type="submit" class="button large w-100 top-40" id="load-verification">${(0, n.A)("commonReqCode")}</button>\n            </form>\n        `;
          this.resetPassword = (e = false) => `\n            <h2 class="top-10">${e ? (0, n.A)("commonSetPassword") : (0, n.A)("commonResetPass")}</h2>\n\n            <form id="entry-form" class="top-30" data-entry="${e ? "setPassword" : "resetPassword"}">\n                <div class="input-group">\n                    <label for="entry-email">${(0, n.A)("commonEmail")}</label>\n                    <input type="email" maxlength="70" name="email" id="entry-email" readonly/>\n                    <p class="error-msg">${(0, n.A)("commonEnterValidEmail")}</p>\n                </div>\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonNewPass")}</label>\n                    <input type="password" name="password" id="entry-password">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                    <span id="password-meter" class="none">\n                        <span></span><span></span><span></span><span></span>\n                    </span>\n                </div>\n                <div class="input-group">\n                    <label for="entry-code">${(0, n.A)("commonCode")}</label>\n                    <input type="number" name="code" id="entry-code" style="text-align: left;" onkeypress="if(this.value.length===6)return false;">\n                    <p class="error-msg">${(0, n.A)("commonEnterValidCode")}</p>\n                </div>\n\n                ${e ? `<p class="center top-20 text-center"><strong><a id="entry-resend">${(0, n.A)("commonSendResetCode")}</a></strong></p>` : ""}\n\n                <div id="h-captcha" style="margin: 0px" data-sitekey="${r}"></div>\n                <button class="button large w-100 top-20" type="submit">${(0, n.A)("commonUpdatePass")}</button>\n                ${e ? "" : `<p class="top-20 hide center" id="entry-resend">${(0, n.A)("commonDidNotReceiveCode")} <a class="anchor">${(0, n.A)("commonResend")}</a></p>`}\n            </form>\n        `;
          this.policyReset = (e = "") => `\n            <h2 class="top-10">${(0, n.A)("commonResetPass")}</h2>\n            ${e ? `<div class="info-box top-20"><p>${e}</p></div>` : ""}\n\n            <form id="entry-form" class="top-30" data-entry="policyReset">\n                <div class="input-group">\n                    <label for="entry-email">${(0, n.A)("commonEmail")}</label>\n                    <input type="email" name="email" id="entry-email" readonly/>\n                </div>\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonNewPass")}</label>\n                    <input type="password" name="password" id="entry-password">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                    <span id="password-meter" class="none">\n                        <span></span><span></span><span></span><span></span>\n                    </span>\n                </div>\n                <input type="hidden" name="token" id="entry-token">\n\n                <button class="button large w-100 top-20" type="submit">${(0, n.A)("commonUpdatePass")}</button>\n            </form>\n        `;
          this.verification = e => `\n            <h1>${(0, n.A)("commonVerifyAcc")}</h1>\n            <p id="entry-to-email" data-text="${(0, n.A)("commonSentCodeDesc")}">${(0, n.A)("commonSentCodeDesc")}</p>\n\n            <form id="entry-form" data-entry="${e}">\n                <input id="verification-email" type="hidden" name="email" readonly/>\n                <div class="input-group">\n                    <label for="code">${(0, n.A)("commonCode")}</label>\n                    <input type="number" name="code" id="entry-code" style="text-align: left;" onkeypress="if(this.value.length===6)return false;">\n                    <p class="error-msg">${(0, n.A)("commonEnterValidCode")}</p>\n                </div>\n\n                <button type="submit" class="button large w-100 top-20">${(0, n.A)("commonVerify")}</button>\n                <p class="top-20 hide text-center" id="entry-resend">${(0, n.A)("commonDidNotReceiveCode")} &nbsp; <a class="anchor">${(0, n.A)("commonResend")}</a></p>\n            </form>\n        `;
          this.changePassword = () => `\n            <h2>${(0, n.A)("commonChangePassword")}</h2>\n            <form id="entry-form" class="top-30" data-entry="changePassword">\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonOldPass")}</label>\n                    <input type="password" name="password" id="entry-password">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                </div>\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonNewPass")}</label>\n                    <input type="password" name="new-password" id="entry-password-new">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password-2" class="input-icon" src="/img/icon/eye-hide.svg">\n                    <span id="password-meter" class="none">\n                        <span></span><span></span><span></span><span></span>\n                    </span>\n                </div>\n                <button type="submit" class="button w-100 top-20" style="margin-bottom: 20px">${(0, n.A)("commonChangePassword")}</button>\n            </form>\n        `;
          this.changeEmail = () => `\n            <h2>${(0, n.A)("commonChangeEmail")}</h2>\n\n            <form id="entry-form" class="top-30" data-entry="changeEmail">\n                <div class="input-group">\n                    <label class="text-capitalize" for="email">${(0, n.A)("commonNewEmail")}</label>\n                    <input type="email" maxlength="70" name="email" id="entry-email">\n                    <p class="error-msg">${(0, n.A)("commonEnterValidEmail")}</p>\n                </div>\n\n                <button type="submit" class="button w-100 top-20" style="margin-bottom: 20px">${(0, n.A)("commonNewEmail")}</button>\n            </form>\n        `;
          this.changeUsername = (e = "") => `\n            <h2>${(0, n.A)("changeUsername")}</h2>\n\n            <form id="entry-form" class="top-30" data-entry="changeUsername">\n                <div class="input-group">\n                    <label for="entry-username">${(0, n.A)("newUsername")}</label>\n                    <input type="text" name="name" id="entry-username" value="${e}">\n                </div>\n\n                <button type="submit" class="button w-100 top-20">${(0, n.A)("update")}</button>\n            </form>\n        `;
          this.deleteAccount = e => `\n            <h2>${(0, n.A)("commonDeleteMyAccount")}</h2>\n            <p class="top-20">Hey ${e},</p>\n            <p class="no-margin">${(0, n.A)("commonSadToSeeYouGoWhyLeaving")}</p>\n\n            <form id="entry-form" data-entry="deleteAccount">\n                <div class="input-group">\n                    <label class="top-20 text-uppercase">${(0, n.A)("commonLeavingBecause")}</label>\n                    <select name="reason">\n                        <option value="leavingReasonDefault" disabled selected>${(0, n.A)("commonLeavingReasonDefault")}</option>\n                        <option value="leavingReasons1">${(0, n.A)("commonLeavingReasons1")}</option>\n                        <option value="leavingReasons2">${(0, n.A)("commonLeavingReasons2")}</option>\n                        <option value="leavingReasons3">${(0, n.A)("commonLeavingReasons3")}</option>\n                        <option value="leavingReasons4">${(0, n.A)("commonLeavingReasons4")}</option>\n                        <option value="leavingReasons5">${(0, n.A)("commonLeavingReasons5")}</option>\n                    <select>\n                </div>\n\n                <button type="submit" class="button red w-100 top-20" style="margin-bottom: 20px">${(0, n.A)("commonDeleteMyAccount")}</button>\n            </form>\n        `;
          this.deleteAccountConfirmation = (e = "leavingReasonDefault") => `\n            <h4 class="top-35 text-default">${(0, n.A)("areYouSureYouWantToDelete")} </h4>\n            ${s.Ny.subscription ? `<p class="top-35">${(0, n.A)("commonYouHaveActiveSubsBeforeDelete")}</p>` : ""}\n            <p class="top-15">${(0, n.A)("youCanStillChangeYourMind")} </p>\n\n            <form id="entry-form" data-entry="deleteAccountConfirmation">\n                <input type="hidden" name="reason" value="${e}">\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonPassword")}</label>\n                    <input type="password" name="password" id="entry-password">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                </div>\n\n                <div class="input-group checkbox-group inline justify-center flex-wrap" style="margin-top: 30px">\n                    <button id="entry-cancel" class="button full positive">${(0, n.A)("cancel")}</button>\n                    <button id="delete-confirm" type="submit" class="button w-100 transparent">${(0, n.A)("deleteMyAccount")}</button>\n                </div>\n            </form>\n        `;
          this.additionalVerification = () => `\n            <h3 class="heavy">${(0, n.A)("enterYourPasswordToContinue")}</h3>\n\n            <form id="entry-form" data-entry="additionalVerification">\n                <div class="input-group">\n                    <label for="entry-password">${(0, n.A)("commonPassword")}</label>\n                    <input type="password" name="password" id="entry-password">\n                    <p class="error-msg"></p>\n                    <img id="toggle-password" class="input-icon" src="/img/icon/eye-hide.svg">\n                </div>\n\n                <div class="input-group checkbox-group inline justify-center" style="margin-top: 30px">\n                    <button type="submit" class="button full top-20">Continue</button>\n                </div>\n            </form>\n        `;
        }
      }
    },
    6279(e, t, i) {
      const n = new class {
        constructor() {
          this.pool = [];
          this.backingStore = new WeakMap();
          this.registry = new Set();
          this.recycleEvents = 0;
        }
        acquire(e, t) {
          if (e < 1) {
            e = 1;
          }
          if (t < 1) {
            t = 1;
          }
          const n = this.pool.pop() ?? document.createElement("canvas");
          n.width = e;
          n.height = t;
          return n;
        }
        release(e) {
          if (e) {
            this.backingStore.delete(e);
            this.registry.delete(e);
            if (this.pool.length < 20) {
              e.width = 1;
              e.height = 1;
              this.pool.push(e);
            }
          }
        }
        backup(e) {
          if (!e || e.width === 0 || e.height === 0) {
            return;
          }
          const t = e.getContext("2d", {
            willReadFrequently: true
          });
          if (t) {
            this.backingStore.set(e, t.getImageData(0, 0, e.width, e.height));
            this.registry.add(e);
          }
        }
        unregister(e) {
          if (e) {
            this.backingStore.delete(e);
            this.registry.delete(e);
          }
        }
        isRecycled(e) {
          const t = this.backingStore.get(e);
          if (!t) {
            return false;
          }
          const i = e.getContext("2d");
          if (!i) {
            return false;
          }
          const n = e.width;
          const a = e.height;
          if (n !== t.width || a !== t.height) {
            return false;
          }
          const o = i.getImageData(0, 0, n, a).data;
          const s = [[0, 0], [n - 1, 0], [0, a - 1], [n - 1, a - 1], [n >> 1, a >> 1]];
          for (const [r, c] of s) {
            const e = (c * n + r) * 4;
            if (t.data[e + 3] !== 0 && (o[e] !== t.data[e] || o[e + 1] !== t.data[e + 1] || o[e + 2] !== t.data[e + 2] || o[e + 3] !== t.data[e + 3])) {
              return true;
            }
          }
          return false;
        }
        restore(e) {
          const t = this.backingStore.get(e);
          if (!t) {
            return false;
          }
          const i = e.getContext("2d", {
            willReadFrequently: true
          });
          return !!i && (e.width === t.width && e.height === t.height || (e.width = t.width, e.height = t.height), i.putImageData(t, 0, 0), this.recycleEvents++, true);
        }
        ensure(e) {
          return !!e && !!this.isRecycled(e) && this.restore(e);
        }
        backupAll(e) {
          for (const t of e) {
            if (t) {
              this.backup(t);
            }
          }
        }
        ensureAll(e) {
          let t = false;
          for (const i of e) {
            if (i && this.ensure(i)) {
              t = true;
            }
          }
          return t;
        }
        get diagnostics() {
          return {
            poolSize: this.pool.length,
            registeredBackups: this.registry.size,
            recycleEvents: this.recycleEvents
          };
        }
      }();
      i.d(t, ["mM", 0, n]);
    },
    9175(e, t, i) {
      i.d(t, {
        Ei: () => l,
        i0: () => o,
        nS: () => c,
        yW: () => s
      });
      var n = i(7775);
      var a = i(5283);
      function o(e, t = 100, i = "", o = "", s = "") {
        return (0, a.T)("div", {
          className: `form-group w-${t}`
        }, (0, a.T)("div", {
          className: "billing-title"
        }, (0, a.T)("span", {
          className: "billing-label"
        }, `${(0, n.A)(e)} ${(0, n.A)(o)}`), s), (0, a.T)("input", {
          type: "text",
          id: e,
          maxLength: 56,
          required: true,
          value: i
        }));
      }
      function s(e, t = 70, i = "", o = false) {
        return (0, a.T)("button", {
          style: {
            minWidth: "70px",
            height: "40px",
            padding: "unset"
          },
          type: "button",
          id: e,
          disabled: o
        }, (0, n.A)(i));
      }
      function r(e, t = 100, i, o = "") {
        return (0, a.T)("div", {
          className: `form-group w-${t}`
        }, (0, a.T)("span", {
          className: "billing-label"
        }, (0, n.A)(e)), (0, a.T)("select", {
          id: i,
          name: i,
          className: `${i}-select`,
          value: o
        }));
      }
      function c(e, t = 100, i = "") {
        return r(e, t, "country", i);
      }
      function l(e, t = 100, i = "", n = "", s = "") {
        return (0, a.T)("div", {
          className: `w-${t}`
        }, o(e, 100, i, n, s), r(e, 100, "state-select", i));
      }
    },
    9754(e, t, i) {
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
                src: "/images/checkout/icon/card.svg",
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
                src: "/images/icon/red-cross.png",
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
                src: "/images/myaccount/black-loading.gif",
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
                src: "/images/icon/green-tick.png",
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
              src: "/img/icon/arrow-left-black.svg"
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
                  src: "/images/checkout/icon/card.svg",
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
                      src: "/images/checkout/icon/card.svg",
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
    },
    9671(e, t, i) {
      async function n(e, t = 5000, i = 30000) {
        const n = new Date().getTime() + i;
        const a = (i, o) => {
          Promise.resolve(e()).then(e => {
            console.log(e);
            const s = new Date().getTime();
            if (e.status === "success") {
              i(e);
            } else if (s < n && e.status === "pending") {
              setTimeout(a, t, i, o);
            } else {
              o(new Error("AsyncPoller: reached timeout"));
            }
          }).catch(e => {
            o(e);
          });
        };
        return new Promise(a);
      }
      i.d(t, {
        Q: () => n
      });
    },
    8484(e, t, i) {
      var n = i(5283);
      var a = i(7775);
      var o = i(9175);
      i.d(t, ["YA", 0, e => {
        e ||= {
          isVATNumberValid: false
        };
        const t = e.isVATNumberValid;
        return (0, n.T)("details", {
          id: "wrapper-billing-option",
          className: "kort"
        }, (0, n.T)("summary", {
          style: "display: flex; align-items: center;"
        }, (0, n.T)("img", {
          src: "/images/checkout/icon/card.svg",
          width: 24,
          height: 24,
          style: "margin-right: 8px;"
        }), (0, n.T)("span", {
          className: "fs-16 fw-7"
        }, (0, a.A)("optionalBillingInformation")), (0, n.T)("img", {
          src: "/images/icon/up.svg",
          style: "margin-left: auto"
        })), (0, n.T)("div", {
          id: "billing-form",
          className: "w-100"
        }, (0, n.T)("form", {}, (0, n.T)("div", {
          className: "flex"
        }, o.i0("checkoutFirstName", 50, e.firstName), o.i0("checkoutLastName", 50, e.lastName)), (0, n.T)("div", {
          className: "flex"
        }, o.i0("checkoutCompanyName", 100, e.companyName || "", "checkoutOptional")), (0, n.T)("div", {
          id: "checkout-vat-row",
          className: "flex"
        }, (0, n.T)("div", {
          className: "form-group w-100"
        }, (0, n.T)("div", {
          className: "adyen-checkout-title"
        }, (0, n.T)("span", {
          className: "adyen-checkout__label__text"
        }, `${(0, a.A)("checkoutVATNumber")} ${(0, a.A)("checkoutOptional")}`)), (0, n.T)("select", {
          id: "vat-select",
          className: "adyen-checkout__input",
          style: "display:none; width:100%; margin-bottom:4px;"
        }, (0, n.T)("option", {
          value: "__new__"
        }, (0, a.A)("checkoutEnterVATNumber") || "Enter new VAT number...")), (0, n.T)("input", {
          type: "text",
          id: "vatNumber",
          className: "adyen-checkout__input",
          maxLength: 56,
          required: true,
          value: e.vatNumber || ""
        })), o.yW("validate-vat", 30, t ? "verified" : "verify", t)), (0, n.T)("div", {
          className: "flex"
        }, o.i0("checkoutAddress", 100, e.address)), (0, n.T)("div", {
          className: "flex"
        }, o.i0("checkoutCity", 50, e.city), o.i0("checkoutZipCode", 50, e.zipCode)), (0, n.T)("div", {
          className: "flex"
        }, o.nS("checkoutCountry", 50, e.country), o.Ei("checkoutState", 50, e.state)))));
      }, "aJ", 0, () => (0, n.T)("div", {
        id: "paypal-upgrade-notice-wrapper",
        style: "display: flex; flex-direction: row; column-gap: 7px"
      }, (0, n.T)("img", {
        src: "/img/icon/warning.svg",
        style: "width: 30px"
      }), (0, a.A)("paypalUpgradeConfirmationDisclaimerOnPreviousSubscription")), "bV", 0, (e = false) => (0, n.T)("details", {
        id: "wrapper-promo-option",
        className: "kort",
        open: e
      }, (0, n.T)("summary", {
        style: "display: flex; align-items: center;"
      }, (0, n.T)("img", {
        src: "/images/checkout/icon/percent.svg",
        width: 24,
        height: 24,
        style: "margin-right: 8px;"
      }), (0, n.T)("span", {
        className: "fs-16 fw-7"
      }, (0, a.A)("promoCode")), (0, n.T)("img", {
        src: "/images/icon/up.svg",
        style: "margin-left: auto"
      })), (0, n.T)("div", (0, n.T)("div", {
        id: "promo-section"
      }, (0, n.T)("input", {
        id: "promocode-input",
        type: "text",
        placeholder: (0, a.A)("enterPromoCode")
      }), (0, n.T)("span", {
        id: "promocode-submit",
        className: "apply"
      }, (0, a.A)("apply"))), (0, n.T)("p", {
        id: "promocode-error"
      }, (0, a.A)("invalidPromoCode")), (0, n.T)("p", {
        className: "text-small",
        style: "margin-top: 8px"
      }, (0, a.A)("promoCodeValidOneTimeOnly")))), "iZ", 0, (e, t = "USD") => {
        const r = [...e].sort((e, t) => e.credits - t.credits);
        const c = r.length > 0 ? (r[0].pricing?.[t]?.amount ?? r[0].amount) / r[0].credits : 0;
        const l = t === "EUR" ? "€" : "$";
        const d = r.map(e => {
          const o = (e.pricing?.[t] || {
            amount: e.amount,
            symbol: l
          }).amount;
          const s = o / e.credits;
          const r = c > 0 ? Math.round((1 - s / c) * 100) : 0;
          const d = e.credits.toLocaleString();
          return (0, n.T)("button", {
            className: "credit-option",
            dataset: {
              value: String(e.credits),
              price: String(o),
              planCode: e.code
            },
            style: "display: flex; justify-content: space-between; align-items: center; padding: 10px 14px; border-radius: 6px; color: #333; cursor: pointer; transition: all 0.2s; text-align: left; width: 100%;"
          }, (0, n.T)("div", {
            style: "font-size: 20px; font-weight: 600; display: flex; align-items: baseline;"
          }, d, (0, n.T)("span", {
            style: "font-size: 13px; margin-left: 4px;"
          }, (0, a.A)("checkoutCreditsLabel"))), (0, n.T)("div", {
            style: "text-align: right;"
          }, (0, n.T)("div", {
            style: "font-size: 13px; font-weight: 600; color: #333;"
          }, `${l}${o.toFixed(2)}`), r > 0 ? (0, n.T)("div", {
            style: "color: #ff6b6b; font-size: 14px; font-weight: 600;"
          }, (0, a.A)("checkoutSavingsOff", r)) : ""));
        });
        return (0, n.T)("div", {
          id: "wrapper-credit-option",
          className: "credit-select",
          style: "display: flex; flex-direction: column; gap: 8px; padding: 0;"
        }, (0, n.T)("h2", {
          style: "font-size: 16px; font-weight: 600; margin: 0 0 4px 0;"
        }, (0, a.A)("generativeCredits")), (0, n.T)("p", {
          style: "color: #666; font-size: 12px; margin: 0 0 12px 0;"
        }, (0, a.A)("checkoutAICreditsDesc")), (0, n.T)("div", {
          style: "display: flex; flex-direction: column; gap: 8px;"
        }, ...d), (0, n.T)("a", {
          className: "subscribe-link",
          style: "margin-top: 8px; font-size: 12px; color: var(--accent-color); text-align: center; cursor: pointer; text-decoration: underline;"
        }, (0, a.A)("checkoutOrSubscribe")));
      }, "m3", 0, () => (0, n.T)("details", {
        id: "wrapper-seat-option",
        className: "kort"
      }, (0, n.T)("summary", {
        style: "display: flex; align-items: center;"
      }, (0, n.T)("img", {
        src: "/images/checkout/icon/seats.svg",
        width: 24,
        height: 24,
        style: "margin-right: 8px;"
      }), (0, n.T)("span", {
        className: "fs-16 fw-7"
      }, (0, a.A)("addMoreSeats")), (0, n.T)("img", {
        src: "/images/icon/up.svg",
        style: "margin-left: auto"
      })), (0, n.T)("div", (0, n.T)("div", {
        className: "seat-select"
      }, (0, n.T)("span", {
        className: "seat-option",
        dataset: {
          value: "5"
        }
      }, "5 seats"), (0, n.T)("span", {
        className: "seat-option",
        dataset: {
          value: "10"
        }
      }, "10 seats"), (0, n.T)("span", {
        className: "seat-option",
        dataset: {
          value: "20"
        }
      }, "20 seats"), (0, n.T)("span", {
        className: "seat-option seat-option-custom"
      }, (0, n.T)("input", {
        type: "number",
        placeholder: "Custom",
        min: "1",
        max: "100"
      }))))), "ov", 0, (e, t, i) => {
        const [o, s] = function (e, t) {
          let i;
          let n;
          t.forEach(t => {
            if (t.product === e) {
              if (t.monthDuration === 1) {
                i = t;
              } else if (t.monthDuration === 12) {
                n = t;
              }
            }
          });
          if (!i || !n) {
            console.error(`Could not find both monthly and yearly plans for product: ${e}`);
            throw new Error(`Missing plans for product: ${e}`);
          }
          return [{
            code: i.code,
            monthlyPrice: i.pricing.USD.amount.toFixed(2),
            yearlyPrice: (i.pricing.USD.amount * 12).toFixed(2)
          }, {
            code: n.code,
            monthlyPrice: String(n.pricing.USD.displayPriceInMonths),
            yearlyPrice: n.pricing.USD.amount.toFixed(2)
          }];
        }(t, i);
        const r = Math.round((1 - +s.yearlyPrice / +o.yearlyPrice) * 100);
        const c = t.replace("Pixlr ", "").toLowerCase();
        const l = {
          "Pixlr Plus": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#9cc42b\" fill=\"none\"><path d=\"M13.5771 3.25586L13.501 3.25195L10.5029 3.25C10.3039 3.24987 10.1124 3.32906 9.97168 3.46973 9.8663 3.5751 9.79548 3.70855 9.7666 3.85254L9.75195 4V9.75195H4C3.61183 9.75195 3.29253 10.0468 3.25391 10.4248L3.25 10.502V13.5C3.25 13.9142 3.58579 14.25 4 14.25H9.75195V20.002C9.75195 20.4162 10.0877 20.752 10.502 20.752H13.5C13.9142 20.752 14.25 20.4162 14.25 20.002V14.25H20C20.4139 14.25 20.7495 13.9148 20.75 13.501L20.752 10.5029C20.7521 10.3039 20.6729 10.1124 20.5322 9.97168 20.3916 9.83103 20.2009 9.75195 20.002 9.75195H14.25V4.00195C14.25 3.61381 13.9551 3.29449 13.5771 3.25586Z\" fill=\"currentColor\" /></svg>",
          "Pixlr Premium": "<svg width=\"24\" height=\"24\" color=\"#ecc800\" fill=\"none\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12 3.5c-.578 0-1.116.33-1.408.877l-3.35 7.373L3.96 8.457c-.692-.49-1.604-.392-2.194.235a1.98 1.98 0 0 0-.425 1.932l2.951 9.148c.106.325.39.544.708.544h14c.319 0 .603-.218.708-.544l2.949-9.139.002-.008a1.98 1.98 0 0 0-.425-1.931c-.59-.628-1.502-.726-2.194-.237l-.003.002-3.278 3.291-3.348-7.368-.003-.005C13.116 3.834 12.58 3.5 12 3.5\" clip-rule=\"evenodd\" fill=\"currentColor\" fill-rule=\"evenodd\"/></svg>",
          "Pixlr Ultra": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#f56123\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.2611 1.29711C14.5548 1.40637 14.7496 1.68669 14.7496 2.00004V10.2502H19.5004C19.7938 10.2502 20.0603 10.4213 20.1824 10.6881 20.3045 10.9549 20.2598 11.2684 20.068 11.4904L10.568 22.4902C10.3632 22.7274 10.0326 22.8122 9.73888 22.7029 9.4452 22.5937 9.2504 22.3134 9.2504 22V13.7499H4.4996C4.20619 13.7499 3.93973 13.5788 3.81763 13.312 3.69553 13.0452 3.74021 12.7317 3.93199 12.5096L13.432 1.50982C13.6368 1.27267 13.9674 1.18785 14.2611 1.29711Z\" fill=\"currentColor\" /></svg>",
          "Pixlr Ultra Max": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" color=\"#f56123\" fill=\"none\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M14.2611 1.29711C14.5548 1.40637 14.7496 1.68669 14.7496 2.00004V10.2502H19.5004C19.7938 10.2502 20.0603 10.4213 20.1824 10.6881 20.3045 10.9549 20.2598 11.2684 20.068 11.4904L10.568 22.4902C10.3632 22.7274 10.0326 22.8122 9.73888 22.7029 9.4452 22.5937 9.2504 22.3134 9.2504 22V13.7499H4.4996C4.20619 13.7499 3.93973 13.5788 3.81763 13.312 3.69553 13.0452 3.74021 12.7317 3.93199 12.5096L13.432 1.50982C13.6368 1.27267 13.9674 1.18785 14.2611 1.29711Z\" fill=\"currentColor\" /></svg>"
        }[t] || `/img/misc/${c}-icon.svg`;
        return (0, n.T)("details", {
          id: "chckout-planSelection",
          className: "kort",
          open: t === "Pixlr Plus"
        }, (0, n.T)("summary", {
          style: "display: flex; align-items: center;"
        }, (0, n.T)("img", {
          src: `data:image/svg+xml;utf8,${encodeURIComponent(l)}`,
          width: 24,
          height: 24,
          style: "margin-right: 8px;"
        }), (0, n.T)("span", {
          className: "fs-16 fw-7"
        }, t), (0, n.T)("img", {
          src: "/images/icon/up.svg",
          style: "margin-left: auto"
        })), (0, n.T)("div", {
          style: "display: flex; flex-direction: column; row-gap: 8px"
        }, (0, n.T)("div", {
          className: "plan-options " + (e === o.code ? "selected" : ""),
          dataset: {
            plan: o.code
          }
        }, (0, n.T)("p", {
          className: "fs-14 fw-7"
        }, (0, a.A)("payMonthly")), (0, n.T)("p", (0, n.T)("span", {
          className: "fs-14 fw-7",
          style: "margin-right: 5px"
        }, `${o.monthlyPrice} /month`), (0, n.T)("span", {
          className: "fs-12 fw-4"
        }, `. ${o.yearlyPrice} /year`))), (0, n.T)("div", {
          className: "plan-options " + (e === s.code ? "selected" : ""),
          dataset: {
            plan: s.code
          }
        }, (0, n.T)("p", {
          className: "fs-14 fw-7"
        }, (0, a.A)("payYearly")), (0, n.T)("p", (0, n.T)("span", {
          className: "fs-14 fw-7",
          style: "margin-right: 5px"
        }, `${s.monthlyPrice} /month`), (0, n.T)("span", {
          className: "fs-12 fw-4"
        }, `. ${s.yearlyPrice} /year`, (0, n.T)("span", {
          className: "saving-badge"
        }, `Save ${r}%`)))), (0, n.T)("span", {
          className: "fs-12 fw-4",
          style: "line-height: 18px"
        }, (0, a.A)("youCanCancelAuto"))));
      }, "qV", 0, () => (0, n.T)("details", {
        open: true,
        id: "wrapper-payment-method",
        className: "kort"
      }, (0, n.T)("summary", {
        style: "display: flex; align-items: center;"
      }, (0, n.T)("img", {
        src: "/images/checkout/icon/card.svg",
        width: 24,
        height: 24,
        style: "margin-right: 8px;"
      }), (0, n.T)("span", {
        className: "fs-16 fw-7"
      }, (0, a.A)("paymentMethod")), (0, n.T)("img", {
        src: "/images/icon/up.svg",
        style: "margin-left: auto"
      })), (0, n.T)("div", {
        style: "display: flex; flex-direction: column; row-gap: 18px;"
      }, (0, n.T)("div", {
        id: "saved-cards"
      }), (0, n.T)("div", {
        id: "payment-option-radios"
      }, (0, n.T)("div", {
        id: "paypal-payment-option",
        className: "payment-options"
      }, (0, n.T)("input", {
        id: "paypal-radio-option",
        type: "radio",
        name: "payment",
        value: "paypal",
        checked: true
      }), (0, n.T)("label", {
        htmlFor: "paypal-radio-option",
        className: "fs-12 fw-7"
      }, "Paypal"))), (0, n.T)("div", {
        id: "component-container"
      }), (0, n.T)("div", {
        id: "component-3ds-container"
      }))), "z", 0, (e, t) => (0, n.T)("div", {
        id: "summary-wrapper"
      }, (0, n.T)("h3", (0, a.A)("orderSummary")), e === "credits" ? (0, n.T)("div", (0, n.T)("h4", (0, a.A)("generativeCredits")), (0, n.T)("h6", (0, a.A)("useCreditToGenerateAIAcrossTools"))) : "", (0, n.T)("hr"), (0, n.T)("div", {
        style: "display: flex; flex-direction: column; row-gap: 14px"
      }, e === "subscription" ? (0, n.T)("div", {
        id: "summary-base",
        className: "summary-group inc"
      }, (0, n.T)("div", {
        className: "desc"
      }, (0, n.T)("h5", `${t.replace("Pixlr ", "")} Subscription`), t === "Pixlr Plus" ? (0, n.T)("ul", {
        className: "top-5"
      }, (0, n.T)("li", (0, a.A)("addFreeUnlimitedSave")), (0, n.T)("li", {
        id: "summary-base-credits"
      })) : t === "Pixlr Premium" ? (0, n.T)("ul", {
        className: "top-5"
      }, (0, n.T)("li", (0, a.A)("fullAccesstoPixlrAppAndAsset")), (0, n.T)("li", {
        id: "summary-base-credits"
      }), (0, n.T)("li", {
        id: "summary-base-credits-free-trial",
        style: "display: none"
      })) : t === "Pixlr Team" ? (0, n.T)("ul", {
        className: "top-5"
      }, (0, n.T)("li", (0, a.A)("manageYourTeamMembersAndCollaborate")), (0, n.T)("li", {
        id: "summary-base-credits"
      }), (0, n.T)("li", (0, a.A)("fiveExtraSeatsIncluded"))) : t === "Pixlr Ultra" || t === "Pixlr Ultra Max" ? (0, n.T)("ul", {
        className: "top-5"
      }, (0, n.T)("li", (0, a.A)("fullAccesstoPixlrAppAndAsset")), (0, n.T)("li", {
        id: "summary-base-credits"
      })) : ""), (0, n.T)("span", {
        id: "summary-base-value",
        className: "bold"
      }, "9.99")) : "", e === "credits" ? (0, n.T)("div", {
        id: "summary-credits",
        className: "summary-group"
      }, (0, n.T)("h5", (0, n.T)("span", {
        id: "summary-credits-amount"
      })), (0, n.T)("span", {
        id: "summary-credits-value",
        className: "bold"
      }, "x")) : "", e === "paid" ? (0, n.T)("div", {
        id: "summary-base",
        className: "summary-group inc"
      }, (0, n.T)("div", {
        className: "desc"
      }, (0, n.T)("h5", t), (0, n.T)("ul", {
        className: "top-5"
      }, (0, n.T)("li", (0, a.A)("fullAccesstoPixlrAppAndAsset")), (0, n.T)("li", {
        id: "summary-base-credits"
      }))), (0, n.T)("span", {
        id: "summary-base-value",
        className: "bold"
      }, "9.99")) : "", (0, n.T)("div", {
        id: "summary-balance",
        className: "summary-group"
      }, (0, n.T)("h5", (0, a.A)("planBalanceUpgrade")), (0, n.T)("span", {
        id: "summary-balance-value",
        className: "bold"
      }, "x")), (0, n.T)("div", {
        id: "summary-promo",
        className: "summary-group"
      }, (0, n.T)("div", {
        className: "desc"
      }, (0, n.T)("h5", (0, a.A)("promoCode")), (0, n.T)("span", {
        id: "summary-promo-remarks",
        className: "color-g25 fw-4 fs-14"
      }, "x")), (0, n.T)("span", {
        id: "summary-promo-value"
      }, "x")), (0, n.T)("div", {
        id: "summary-seats",
        className: "summary-group"
      }, (0, n.T)("div", {
        className: "desc"
      }, (0, n.T)("h5", (0, a.A)("additionalSeats")), (0, n.T)("span", {
        id: "summary-seats-count",
        className: "color-g25 fw-4 fs-14"
      }, "x5 seats")), (0, n.T)("span", {
        id: "summary-seats-value"
      }, "x")), (0, n.T)("div", {
        style: "margin-top: 8px; display: flex; flex-direction: column; gap: 4px;"
      }, (0, n.T)("div", {
        id: "summary-subtotal",
        className: "summary-group inc"
      }, (0, n.T)("h5", (0, a.A)("subtotal")), (0, n.T)("span", {
        id: "summary-subtotal-value"
      }, "x")), (0, n.T)("div", {
        id: "summary-tax",
        className: "summary-group"
      }, (0, n.T)("h5", {
        id: "summary-tax-label"
      }, "VAT"), (0, n.T)("span", {
        id: "summary-tax-value"
      }, "x"))), (0, n.T)("div", {
        id: "summary-summer-campaign",
        className: "summary-group"
      }, (0, n.T)("div", {
        className: "desc"
      }, (0, n.T)("h5", `${(0, a.A)("limitedTimeDiscount")}`), (0, n.T)("span", {
        id: "summary-summer-campaign-note",
        className: "color-g25 fw-4 fs-14"
      })), (0, n.T)("span", {
        id: "summary-summer-campaign-discount"
      }, "15%"))), (0, n.T)("hr"), (0, n.T)("div", {
        id: "summary-total",
        className: "summary-group inc"
      }, (0, n.T)("div", {
        className: "desc"
      }, (0, n.T)("h5", (0, a.A)("checkoutTotalDue"), " (", (0, n.T)("span", {
        className: "currency"
      }, "USD"), ")"), (0, n.T)("span", {
        id: "summary-total-tax",
        className: "color-g25 fw-4 fs-14",
        style: "display: none; font-size:12px;margin-top: 4px;"
      }, "(incl. GST)")), (0, n.T)("span", {
        className: "total-price bold"
      }, "x")), (0, n.T)("p", {
        id: "summary-billing-note",
        style: "margin-top: 4px; font-size: 12px;"
      }, `${(0, a.A)("checkoutBillingCountry")}: -`), (0, n.T)("button", {
        id: "proceed-payment",
        disabled: true
      }, (0, a.A)("payNow")), (0, n.T)("i", {
        id: "payment-info-message",
        className: "summary-group"
      }))]);
    },
    5283(e, t, i) {
      i.d(t, {
        Ay: () => o,
        Bb: () => l,
        T: () => s,
        TT: () => d,
        TV: () => c,
        lR: () => r
      });
      var n = i(7775);
      var a = i(6050);
      function o(e) {
        return document.getElementById(e);
      }
      function s(e, ...t) {
        const i = document.createElement(e);
        if (t.length === 0) {
          return i;
        }
        const n = t[0];
        const a = typeof n != "string" && !(n instanceof HTMLElement);
        const o = a ? t.slice(1) : t;
        if (a && n) {
          if (n.style) {
            const e = n.style;
            delete n.style;
            if (typeof e == "string") {
              i.setAttribute("style", e);
            } else {
              Object.assign(i.style, e);
            }
          }
          if (n.dataset) {
            const e = n.dataset;
            delete n.dataset;
            if (typeof e == "object") {
              Object.entries(e).map(([e, t]) => i.setAttribute(`data-${e}`, t));
            }
          }
          if (n.tooltip) {
            i.setAttribute("tooltip", n.tooltip);
          }
          if (n.flow) {
            i.setAttribute("flow", n.flow);
          }
          Object.assign(i, n);
        }
        i.append(...o.filter(e => e != null));
        return i;
      }
      function r(e, t) {
        const i = document.cookie.split(";").map(e => e.trim().split("=")).find(([t, i]) => t === e);
        if (i) {
          return i[1];
        } else {
          return t;
        }
      }
      function c(e, t, i) {
        let n = `${encodeURIComponent(e)}=${encodeURIComponent(t)}`;
        if (i.path) {
          n += `; path=${i.path}`;
        }
        if (i.domain) {
          n += `; domain=${i.domain}`;
        }
        if (i.expires) {
          n += `; expires=${i.expires.toUTCString()}`;
        }
        if (i.sameSite) {
          n += `; samesite=${i.sameSite}`;
        }
        document.cookie = n;
      }
      function l(e, t, i, n) {
        e.style.touchAction = "none";
        const o = e => {
          e.stopPropagation();
          e.preventDefault();
          if (i) {
            i(new a.A(e.clientX, e.clientY));
          }
        };
        const s = t => {
          t.stopPropagation();
          t.preventDefault();
          if (n) {
            n(new a.A(t.clientX, t.clientY));
          }
          e.removeEventListener("pointermove", o, true);
          e.removeEventListener("pointerup", s, true);
          e.releasePointerCapture(t.pointerId);
        };
        e.addEventListener("pointerdown", i => {
          i.preventDefault();
          if (!(i.button > 0)) {
            e.addEventListener("pointermove", o, true);
            e.addEventListener("pointerup", s, true);
            e.setPointerCapture(i.pointerId);
            if (t) {
              t(new a.A(i.clientX, i.clientY));
            }
          }
        }, true);
      }
      function d(e, t, i, a = false) {
        let o = false;
        t ||= e.value;
        if (i === "email") {
          if ((t = t.trim()).match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) || a && t === "") {
            e.classList.remove("invalid");
            e.nextElementSibling.style.display = "none";
          } else {
            o = true;
            e.classList.add("invalid");
            e.nextElementSibling.style.display = "block";
          }
        } else if (i === "password") {
          const i = e.nextElementSibling;
          if (t.length < 8 || t.length > 50) {
            o = true;
            e.classList.add("invalid");
            i.style.display = "block";
            if (t.length < 8) {
              i.innerHTML = (0, n.A)("commonMinPassword");
            } else if (t.length > 50) {
              i.innerHTML = (0, n.A)("commonMaxPassword");
            }
          } else if (t.indexOf("'") > -1 || t.indexOf("\"") > -1) {
            o = true;
            e.classList.add("invalid");
            i.style.display = "block";
            i.innerHTML = (0, n.A)("commonInvalidSpecialChar");
          } else if (e.getAttribute("data-login") || /^(?=\S*$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).+$/.test(t)) {
            e.classList.remove("invalid");
            i.style.display = "none";
          } else {
            o = true;
            e.classList.add("invalid");
            i.style.display = "block";
            i.innerHTML = (0, n.A)("commonInvalidPasswordCombination");
          }
        } else if (i === "code") {
          const i = e.nextElementSibling;
          if (t.length !== 6) {
            e.classList.add("invalid");
            i.style.display = "block";
            o = true;
          } else {
            e.classList.remove("invalid");
            i.style.display = "none";
          }
          setTimeout(() => {
            e.classList.remove("invalid");
            i.style.display = "none";
          }, 3000);
        }
        return !o;
      }
      i.d(t, ["y8", 0, (e = "success", t = "commonServerError", i = 3, a) => {
        var r;
        if ((r = o("toast-box")) !== null && r !== undefined) {
          r.remove();
        }
        let c = t ? (0, n.A)(t) : e == "danger" ? (0, n.A)("commonServerError") : (0, n.A)("commonSuccess");
        if (a) {
          c = c.replace("{email}", a);
        }
        const l = {
          success: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M22 11.08V12a10 10 0 1 1-5.93-9.14\"/><polyline points=\"22 4 12 14.01 9 11.01\"/></svg>",
          warning: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z\"/><line x1=\"12\" y1=\"9\" x2=\"12\" y2=\"13\"/><line x1=\"12\" y1=\"17\" x2=\"12.01\" y2=\"17\"/></svg>",
          danger: "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"#fff\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><line x1=\"15\" y1=\"9\" x2=\"9\" y2=\"15\"/><line x1=\"9\" y1=\"9\" x2=\"15\" y2=\"15\"/></svg>"
        };
        const d = s("div", {
          className: "toast-icon"
        });
        d.innerHTML = l[e] || l.success;
        const p = s("div", {
          className: "toast-close",
          onclick: () => {
            var e;
            if ((e = o("toast-box")) === null || e === undefined) {
              return undefined;
            } else {
              return e.remove();
            }
          }
        });
        p.innerHTML = "<svg viewBox=\"0 0 24 24\"><line x1=\"18\" y1=\"6\" x2=\"6\" y2=\"18\"/><line x1=\"6\" y1=\"6\" x2=\"18\" y2=\"18\"/></svg>";
        document.body.append(s("div", {
          id: "toast-box",
          className: `toast ${e}`
        }, d, s("span", {
          className: "toast-text"
        }, c), p));
        setTimeout(() => {
          var e;
          if ((e = o("toast-box")) === null || e === undefined) {
            return undefined;
          } else {
            return e.remove();
          }
        }, i * 1000);
      }]);
    },
    7775(e, t, i) {
      function n(e, ...t) {
        if (!I18N_STRINGS) {
          return e;
        }
        let i = I18N_STRINGS[e];
        if (!i) {
          console.log("No translation for key", e);
          i = e;
        }
        if (!t || t.length === 0) {
          return i;
        }
        let n = 0;
        return i.replace(/%(\d+\$)?(s|d|f){1}/gm, (e, ...i) => {
          const [a, o] = i;
          const s = a ? parseInt(a.slice(0, -1), 10) : n++;
          switch (o) {
            case "d":
              const i = t[s];
              if (typeof i != "number") {
                return "NaN";
              } else {
                return i.toFixed(0);
              }
            case "s":
              const n = t[s];
              if (n) {
                return n.toString();
              } else {
                return e;
              }
            default:
              return e;
          }
        });
      }
      i.d(t, {
        A: () => n
      });
    },
    1535(e, t, i) {
      i.d(t, {
        A: () => a
      });
      var n = i(6050);
      class a {
        constructor(e = 1, t = 0, i = 0, n = 1, o = 0, s = 0) {
          this.a = e;
          this.b = t;
          this.c = i;
          this.d = n;
          this.e = o;
          this.f = s;
          this.reset = () => {
            this.a = this.d = 1;
            this.b = this.c = this.e = this.f = 0;
          };
          this.translate = e => {
            this.transform(1, 0, 0, 1, e.x, e.y);
          };
          this.rotate = e => {
            let t = Math.cos(e);
            let i = Math.sin(e);
            this.transform(t, i, -i, t, 0, 0);
          };
          this.rotateDegree = function (e) {
            this.rotate(e * 0.017453292519943295);
          };
          this.transform = (e, t, i, n, a, o) => {
            const s = this.a;
            const r = this.b;
            const c = this.c;
            const l = this.d;
            const d = this.e;
            const p = this.f;
            this.a = s * e + c * t;
            this.b = r * e + l * t;
            this.c = s * i + c * n;
            this.d = r * i + l * n;
            this.e = s * a + c * o + d;
            this.f = r * a + l * o + p;
          };
          this.invert = () => {
            let e = this.a;
            let t = this.b;
            let i = this.c;
            let n = this.d;
            let o = this.e;
            let s = this.f;
            new a();
            let r = e * n - t * i;
            this.a = n / r;
            this.b = -t / r;
            this.c = -i / r;
            this.d = e / r;
            this.e = (i * s - n * o) / r;
            this.f = -(e * s - t * o) / r;
          };
        }
        transformPoint(e) {
          return new n.A(e.x * this.a + e.y * this.c + this.e, e.x * this.b + e.y * this.d + this.f);
        }
      }
    },
    6050(e, t, i) {
      i.d(t, {
        A: () => n
      });
      class n {
        constructor(e = 0, t = 0) {
          this.x = e;
          this.y = t;
        }
        distanceTo(e) {
          return Math.sqrt(Math.pow(this.x - e.x, 2) + Math.pow(this.y - e.y, 2));
        }
        angleTo(e) {
          let t = -(this.x - e.x);
          let i = this.y - e.y;
          let n = 360 - Math.atan2(i, t) * (180 / Math.PI);
          if (n < 0) {
            n += 360;
          }
          if (n > 360) {
            n -= 360;
          }
          return n;
        }
        dot(e) {
          return this.x * e.x + this.y * e.y;
        }
        lengthSQ() {
          return this.dot(this);
        }
        length() {
          return Math.sqrt(this.lengthSQ());
        }
        hypot2() {
          return this.dot(this);
        }
        hypot() {
          return Math.hypot(this.x, this.y);
        }
        add(e) {
          if (e) {
            if (e instanceof n) {
              return new n(this.x + e.x, this.y + e.y);
            } else {
              return new n(this.x + e, this.y + e);
            }
          } else {
            return this;
          }
        }
        neg(e) {
          if (e instanceof n) {
            return new n(this.x - e.x, this.y - e.y);
          } else {
            return new n(this.x - e, this.y - e);
          }
        }
        mul(e) {
          if (e instanceof n) {
            return new n(this.x * e.x, this.y * e.y);
          } else {
            return new n(this.x * e, this.y * e);
          }
        }
        rotateAround(e, t) {
          let i = Math.sin(t);
          let a = Math.cos(t);
          let o = this.x - e.x;
          let s = this.y - e.y;
          let r = o * i + s * a;
          return new n(o * a - s * i + e.x, r + e.y);
        }
        equalTo(e) {
          return this.x === e.x && this.y === e.y;
        }
        clone() {
          return new n(this.x, this.y);
        }
      }
    },
    3244(e, t, i) {
      i.d(t, {
        A: () => s
      });
      var n = i(1535);
      var a = i(6050);
      var o = i(651);
      class s {
        constructor(e = 0, t = 0, i = 0, n = 0, a = 0) {
          this.x = e;
          this.y = t;
          this.width = i;
          this.height = n;
          this.rotation = a;
        }
        left() {
          return this.x;
        }
        right() {
          return this.x + this.width;
        }
        top() {
          return this.y;
        }
        bottom() {
          return this.y + this.height;
        }
        size() {
          return new o.A(this.width, this.height);
        }
        center() {
          return new a.A(this.x + this.width / 2, this.y + this.height / 2);
        }
        topLeft() {
          return new a.A(this.x, this.y);
        }
        topRight() {
          return new a.A(this.right(), this.y);
        }
        bottomLeft() {
          return new a.A(this.x, this.bottom());
        }
        bottomRight() {
          return new a.A(this.right(), this.bottom());
        }
        setTop(e) {
          this.height = this.y + this.height - e;
          this.y = e;
        }
        setLeft(e) {
          this.width = this.x + this.width - e;
          this.x = e;
        }
        setRight(e) {
          this.width = Math.round(e - this.x);
        }
        setBottom(e) {
          this.height = Math.round(e - this.y);
        }
        setCenter(e) {
          this.x = e.x - this.width * 0.5;
          this.y = e.y - this.height * 0.5;
        }
        setCenterX(e) {
          this.x = e - this.width * 0.5;
        }
        setCenterY(e) {
          this.y = e - this.height * 0.5;
        }
        moveRight(e) {
          this.x = Math.round(e - this.width);
        }
        moveBottom(e) {
          this.y = Math.round(e - this.height);
        }
        isSet() {
          return this.x > 0 || this.y > 0 || this.width > 0 || this.height > 0 || this.rotation > 0;
        }
        isInside(e) {
          return e.x >= this.x && e.x < this.x + this.width && e.y >= this.y && e.y < this.y + this.height;
        }
        contains(e) {
          return !!e && !!(e.x >= this.x) && !!(e.y >= this.y) && !!(e.bottom() <= this.bottom()) && !!(e.right() <= this.right());
        }
        equalTo(e) {
          return !!e && this.x === e.x && this.y === e.y && this.width === e.width && this.height === e.height && this.rotation === e.rotation;
        }
        clone() {
          return new s(this.x, this.y, this.width, this.height, this.rotation);
        }
        scale(e) {
          return new s(Math.round(this.x * e), Math.round(this.y * e), Math.round(this.width * e), Math.round(this.height * e), this.rotation);
        }
        flipWidthAndHeight() {
          return new s(this.y, this.x, this.height, this.width);
        }
        union(e) {
          if (!e) {
            return this;
          }
          const t = Math.min(this.x, e.x);
          const i = Math.min(this.y, e.y);
          const n = Math.max(this.x + this.width, e.x + e.width);
          const a = Math.max(this.y + this.height, e.y + e.height);
          return new s(t, i, n - t, a - i);
        }
        intersect(e) {
          let t = Math.max(this.x, e.x);
          let i = Math.min(this.x + this.width, e.x + e.width);
          if (i <= t) {
            return;
          }
          let n = Math.max(this.y, e.y);
          let a = Math.min(this.y + this.height, e.y + e.height);
          if (a <= n) {
            return undefined;
          } else {
            return new s(t, n, i - t, a - n);
          }
        }
        rebase(e, t) {
          return new s(Math.round(this.x - e), Math.round(this.y - t), Math.round(this.width), Math.round(this.height));
        }
        gridAlign() {
          return new s(Math.floor(this.x), Math.floor(this.y), Math.ceil(this.width), Math.ceil(this.height));
        }
        getRotatedBounds() {
          if (this.rotation === 0) {
            return this;
          }
          let e = new n.A();
          let t = this.center();
          e.translate(t);
          e.rotate(this.rotation * Math.PI / 180);
          e.invert();
          const i = e.transformPoint(this.topLeft());
          const a = e.transformPoint(this.topRight());
          const o = e.transformPoint(this.bottomLeft());
          const r = e.transformPoint(this.bottomRight());
          let c = s.fromPoints([i, a, o, r]);
          c.x = Math.round(c.x + t.x);
          c.y = Math.round(c.y + t.y);
          c.rotation = this.rotation;
          return c;
        }
        rotatedSize(e) {
          const t = this.width;
          const i = this.height;
          const n = (e, t) => {
            var i = e[0].x;
            var n = e[0].y;
            var o = e[1].x;
            var s = e[1].y;
            var r = t[0].x;
            var c = t[0].y;
            var l = t[1].x;
            var d = t[1].y;
            return new a.A(((i * s - n * o) * (r - l) - (i - o) * (r * d - c * l)) / ((i - o) * (c - d) - (n - s) * (r - l)), ((i * s - n * o) * (c - d) - (n - s) * (r * d - c * l)) / ((i - o) * (c - d) - (n - s) * (r - l)));
          };
          let s;
          let r;
          let c;
          let l;
          let d;
          let p;
          let h;
          var u = e * (Math.PI / 180);
          var m = [new a.A(0, 0), new a.A(t, 0), new a.A(t, i), new a.A(0, i)];
          var y = ((e, t) => {
            var i = new Array();
            for (var n = 0; n < e.length; ++n) {
              i.push(new a.A(e[n].x * Math.cos(t) - e[n].y * Math.sin(t), e[n].x * Math.sin(t) + e[n].y * Math.cos(t)));
            }
            return i;
          })(m = ((e, t, i) => {
            var n = new Array();
            for (var o = 0; o < e.length; ++o) {
              n.push(new a.A(e[o].x + t, e[o].y + i));
            }
            return n;
          })(m, -t / 2, -i / 2), u);
          if (e >= 0) {
            s = [new a.A(0, 0), new a.A(-t / 2, -i / 2)];
            c = [y[0], y[3]];
            p = n(s, c);
            r = [new a.A(0, 0), new a.A(t / 2, -i / 2)];
            l = [y[0], y[1]];
            h = n(r, l);
          } else {
            s = [new a.A(0, 0), new a.A(t / 2, -i / 2)];
            c = [y[1], y[2]];
            h = n(s, c);
            r = [new a.A(0, 0), new a.A(-t / 2, -i / 2)];
            l = [y[0], y[1]];
            p = n(r, l);
          }
          d = new a.A(Math.max(p.x, -h.x), Math.max(p.y, h.y));
          return new o.A(Math.round(-d.x - d.x), Math.round(-d.y - d.y));
        }
        pad(e) {
          return new s(this.x - e, this.y - e, this.width + e * 2, this.height + e * 2);
        }
        getAspect() {
          return this.width / this.height;
        }
        getComparedScale(e) {
          if (e) {
            return new o.A(this.width / e.width, this.height / e.height);
          }
        }
        static calculate(e, t, i = 0) {
          if (!e || !t) {
            return;
          }
          let n = new s();
          n.x = Math.round(e.x < t.x ? e.x : t.x);
          n.y = Math.round(e.y < t.y ? e.y : t.y);
          n.width = Math.round(e.x < t.x ? t.x - n.x : e.x - n.x);
          n.height = i !== 0 ? Math.round(n.width / i) : Math.round(e.y < t.y ? t.y - n.y : e.y - n.y);
          return n;
        }
        static merge(e, t) {
          if (!e && !t) {
            return;
          }
          if (e && !t) {
            return e;
          }
          if (!e && t) {
            return t;
          }
          const i = Math.round(Math.min(e.x, t.x));
          const n = Math.round(Math.min(e.y, t.y));
          const a = Math.round(Math.max(e.x + e.width, t.x + t.width));
          const o = Math.round(Math.max(e.y + e.height, t.y + t.height));
          return new s(i, n, a - i, o - n);
        }
        static fillFit(e, t, i, n, a = false) {
          let o = 1;
          o = e / t < i / n ? i / e : n / t;
          if (a && o > 1) {
            o = 1;
          }
          return new s(Math.round((i - e * o) / 2), Math.round((n - t * o) / 2), Math.round(e * o), Math.round(t * o));
        }
        static bestFit(e, t, i, n, a = false) {
          let o = 1;
          o = e / t > i / n ? i / e : n / t;
          if (o > 1 && !a) {
            o = 1;
          }
          return new s(Math.round((i - e * o) / 2), Math.round((n - t * o) / 2), Math.round(e * o), Math.round(t * o));
        }
        static fromPoints(e) {
          let t = e[0].x;
          let i = e[0].x;
          let n = e[0].y;
          let a = e[0].y;
          e.forEach(e => {
            t = Math.min(e.x, t);
            i = Math.max(e.x, i);
            n = Math.min(e.y, n);
            a = Math.max(e.y, a);
          });
          return new s(Math.round(t), Math.round(n), Math.round(i - t), Math.round(a - n));
        }
        static fromPointRects(e, t, i) {
          let n = e[0].x;
          let a = e[0].x + t;
          let o = e[0].y;
          let r = e[0].y + i;
          e.forEach(e => {
            n = Math.min(e.x, n);
            a = Math.max(e.x + t, a);
            o = Math.min(e.y, o);
            r = Math.max(e.y + i, r);
          });
          return new s(n, o, a - n, r - o);
        }
      }
    },
    651(e, t, i) {
      i.d(t, {
        A: () => n
      });
      class n {
        constructor(e = 0, t = 0) {
          this.width = e;
          this.height = t;
        }
      }
    },
    98(e, t, i) {
      i.d(t, {
        Ay: () => c,
        ZC: () => s
      });
      var n = i(5283);
      var a = i(7135);
      var o = i(6050);
      function s(e, t) {
        (0, a.A)("setting-" + e, t.toString());
        const i = window.localStorage.getItem("user-settings");
        const n = JSON.parse(i || "{}");
        r[e] = n[e] = t;
        window.localStorage.setItem("user-settings", JSON.stringify(n));
        if (e === "workspace" || e === "accent") {
          document.cookie = `${e}=${t};path=/;max-age=31536000`;
          document.documentElement.className = `${r.workspace} ${r.accent}`;
        }
        document.dispatchEvent(new CustomEvent("user-setting-updated", {
          detail: e
        }));
      }
      const r = function () {
        const e = {
          product: "web",
          debug: "",
          cdnUrl: "",
          isIOS: false,
          isHDPI: false,
          isSafari: false,
          canTouch: false,
          accent: "default",
          workspace: "default",
          disabledTools: [],
          allTooltip: false,
          autoSelect: true,
          showGuides: true,
          snapToGuides: true,
          smoothScaling: true,
          askToPreResize: true,
          useLegacySave: false,
          performanceMode: false,
          scrollMode: "zoom",
          maxHistoryUndos: 25,
          expressLayerbar: "minimized",
          panelFloating: false,
          panelNavigator: true,
          panelLayer: true,
          panelHistory: true,
          barQuicklink: true,
          mainColor: "#ffffff",
          altColor: "#000000",
          oldColor: ["#A8534B", "#EC9D75", "#F9D697", "#DCE6A7", "#9ADFB0", "#57CBAB", "#38A793", "#5A5E5A"],
          gradients: [],
          dialogPos: new o.A(0, 0),
          hideAiPrompt: false,
          lastModel: {},
          lastNewsCheck: "1970-01-01T00:00:00Z",
          ddid: ""
        };
        Object.assign(e, (() => {
          const e = window.localStorage.getItem("user-settings");
          return JSON.parse(e || "{}");
        })());
        Object.assign(e, (() => {
          const e = new URL(window.location.href);
          const t = {};
          e.searchParams.forEach((e, i) => {
            t[i] = e;
          });
          return t;
        })());
        Object.assign(e, (() => {
          const e = (0, n.Ay)("config_data");
          if (e && e.innerText) {
            let e = JSON.parse((0, n.Ay)("config_data").innerText);
            (0, n.Ay)("config_data").remove();
            return e;
          }
          return {};
        })());
        return e;
      }();
      const c = r;
    },
    5833(e, t, i) {
      i.d(t, {
        A: () => o
      });
      var n = i(5283);
      var a = i(5699);
      class o {
        constructor(e = true, t) {
          this.scopedId = e => `${this.mid}-${e}`;
          this.setContent = (...e) => {
            if (e[0] instanceof HTMLElement) {
              this.content.append(...e);
            } else {
              this.content.innerHTML += e[0];
            }
          };
          this.keyDown = e => {
            if (e.key === "Escape" || e.key === "Esc") {
              this.cleanUp();
            }
          };
          this.cleanUp = () => {
            document.removeEventListener("keydown", this.keyDown, false);
            this.dialog.classList.remove("ani");
            this.modal.classList.remove("dim");
            setTimeout(() => {
              this.dialog.remove();
              this.dialog = null;
              this.modal.remove();
              this.modal = null;
            }, 200);
            if (this.redirectUrl) {
              window.location.href = this.redirectUrl;
            }
          };
          this.redirectUrl = t;
          this.mid = a.r0();
          this.modal = (0, n.T)("div", {
            id: "modal-" + this.mid,
            className: "modal"
          });
          document.body.appendChild(this.modal);
          this.dialog = (0, n.T)("div", {
            className: "announce"
          });
          this.modal.appendChild(this.dialog);
          this.content = (0, n.T)("div", {
            className: "content"
          });
          this.dialog.append((0, n.T)("div", {
            id: "announce-close" + this.mid,
            className: "announce-close",
            onclick: () => this.cleanUp()
          }, (0, n.T)("img", {
            src: "/img/icon/close.svg"
          })), this.content);
          document.addEventListener("keydown", this.keyDown, false);
          setTimeout(() => this.dialog.classList.add("ani"), 5);
          if (e) {
            setTimeout(() => this.modal.classList.add("dim"), 5);
          }
        }
      }
    },
    1168(e, t, i) {
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
    },
    2443(e, t, i) {
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
    },
    3673(e, t, i) {
      function n(e, t) {
        let i = 0;
        let n = 0;
        let a = false;
        let o = 0;
        e.addEventListener("touchstart", t => {
          const s = t.touches[0];
          const r = e.getBoundingClientRect();
          if (s.clientY - r.top > 60) {
            return;
          }
          if (!t.target.closest(".sheet-nav")) {
            i = s.clientY;
            n = i;
            o = r.height;
            a = true;
            e.style.transition = "none";
          }
        });
        e.addEventListener("touchmove", t => {
          if (!a) {
            return;
          }
          t.preventDefault();
          n = t.touches[0].clientY;
          const s = n - i;
          if (s > 0) {
            e.style.transform = `translateY(${s}px)`;
          } else {
            const t = window.innerHeight * 0.95;
            const i = Math.min(t, o - s);
            e.style.maxHeight = i + "px";
          }
        }, {
          passive: false
        });
        e.addEventListener("touchend", () => {
          if (!a) {
            return;
          }
          a = false;
          const o = n - i;
          if (o > 100) {
            e.style.transition = "transform 200ms ease-out";
            e.style.transform = "translateY(100%)";
            setTimeout(t, 200);
          } else if (o < -30) {
            e.style.transition = "max-height 200ms ease";
            e.style.maxHeight = "95dvh";
            setTimeout(() => {
              e.style.transition = "";
            }, 200);
          } else {
            e.style.transition = "transform 150ms ease, max-height 150ms ease";
            e.style.transform = "";
            setTimeout(() => {
              e.style.transition = "";
            }, 150);
          }
        });
      }
      i.d(t, {
        a: () => n
      });
    },
    5432(e, t, i) {
      i.d(t, {
        $4: () => r,
        Ny: () => a,
        zl: () => s
      });
      var n = i(5283);
      let a = function () {
        let e;
        const t = (0, n.Ay)("current_user");
        if (t && t.innerText !== "null") {
          try {
            e = JSON.parse(t.innerText);
          } catch (a) {
            console.error("Could not read user data json");
          }
        }
        const i = new URL(location.href);
        if (e && i.hostname !== "pixlr.com" && i.searchParams.get("premium") === "true") {
          e.subscription = true;
          e.subscriptionAccess = "premium";
        }
        return e;
      }();
      const o = ["free", "plus", "premium", "ultra"];
      function s(e) {
        const t = (a == null ? undefined : a.subscriptionAccess) || "free";
        return o.indexOf(t) >= o.indexOf(e);
      }
      async function r() {
        try {
          const e = await fetch("/api/auth/me");
          const t = await e.json();
          if (t.status && t.data) {
            a = t.data;
            const e = (0, n.Ay)("current_user");
            if (e) {
              e.innerText = JSON.stringify(t.data);
            }
            return a;
          }
        } catch (e) {
          console.error("Failed to refresh user", e);
        }
        return null;
      }
      i.d(t, ["dV", 0, {
        firstName: "",
        lastName: "",
        companyName: "",
        vatNumber: "",
        address: "",
        city: "",
        state: "",
        stateCode: "",
        zipCode: "",
        country: "",
        countryCode: "",
        isVATNumberValid: false
      }]);
    },
    5699(e, t, i) {
      i.d(t, {
        $e: () => d,
        B3: () => m,
        H5: () => g,
        Nw: () => c,
        Os: () => S,
        PG: () => p,
        SE: () => x,
        TL: () => k,
        VI: () => r,
        XP: () => L,
        bD: () => s,
        bK: () => v,
        k8: () => u,
        lz: () => l,
        oM: () => w,
        oc: () => A,
        p: () => f,
        qE: () => P,
        r0: () => N,
        tN: () => h,
        tm: () => y,
        wc: () => M,
        y2: () => b,
        yz: () => T,
        zR: () => C
      });
      var n = i(7775);
      var a = i(3244);
      var o = i(6279);
      function s(e, t) {
        if (t === undefined) {
          return;
        }
        if (t instanceof e) {
          return t;
        }
        const i = Object.create(e.prototype);
        return Object.assign(i, t);
      }
      function r(e, t) {
        if (e < 0) {
          e = 1;
        }
        if (t < 0) {
          t = 1;
        }
        let i = document.createElement("canvas");
        i.width = e;
        i.height = t;
        return i;
      }
      function c(e, t) {
        if (e < 0) {
          e = 1;
        }
        if (t < 0) {
          t = 1;
        }
        return o.mM.acquire(e, t);
      }
      async function l(e) {
        if (!e) {
          return;
        }
        const t = URL.createObjectURL(e);
        const i = await d(t);
        URL.revokeObjectURL(t);
        return i;
      }
      function d(e, t = false) {
        if (e !== undefined) {
          return new Promise((i, n) => {
            if (!e) {
              console.log("Invalid URL in dataURLToCanvas");
              i(undefined);
              return;
            }
            const a = t ? r(100, 100) : c(100, 100);
            const o = a.getContext("2d");
            const s = new Image();
            s.onerror = e => n(e);
            s.onload = () => {
              a.width = s.width;
              a.height = s.height;
              o.drawImage(s, 0, 0);
              i(a);
            };
            s.crossOrigin = "anonymous";
            s.src = e;
          });
        }
      }
      function p(e, t) {
        if (!e) {
          return;
        }
        const i = (t == null ? undefined : t.rect) || new a.A(0, 0, e.width, e.height);
        const n = c(i.width, i.height);
        n.getContext("2d").drawImage(e, -i.x, -i.y);
        return new Promise((e, i) => n.toBlob(e, t == null ? undefined : t.type, t == null ? undefined : t.quality));
      }
      function h(e, t, i) {
        if (!e || !t) {
          return;
        }
        let n = e.getContext("2d");
        n.save();
        n.globalCompositeOperation = "copy";
        n.drawImage(t, i.x, i.y);
        n.restore();
        n = undefined;
      }
      function u(e, t, i = 0, o = false) {
        const s = E();
        if (s === 0) ;else if (e.width > s || e.height > s) {
          alert((0, n.A)("imageMaxAllowedError").replace("{width}", s.toString()).replace("{height}", s.toString()));
          return null;
        }
        let l = o ? r(e.width, e.height) : c(e.width, e.height);
        let d = l.getContext("2d");
        d.drawImage(e, 0, 0, e.width, e.height);
        d = undefined;
        if (l.width > t || l.height > t) {
          let i = a.A.bestFit(e.width, e.height, t, t);
          l = y(l, i.width, i.height);
        }
        if (i !== 0) {
          l = x(l, i);
        }
        return l;
      }
      function m(e, t, i) {
        if (!e) {
          return;
        }
        let n = c(t, i);
        var a = e.getContext("2d").getImageData(0, 0, e.width, e.height);
        var o = new Int32Array(a.data.buffer);
        var s = e.width;
        var r = e.height;
        var l = n.width;
        var d = n.height;
        let p = n.getContext("2d");
        var h = p.getImageData(0, 0, n.width, n.height);
        var u = new Int32Array(h.data.buffer);
        const m = l / s;
        const y = d / r;
        for (let c = 0; c < d;) {
          const e = s * ~~(c / y);
          const t = l * c++;
          for (let i = 0; i < l;) {
            u[t + i++] = o[e + ~~(i / m)];
          }
        }
        p.putImageData(h, 0, 0);
        return n;
      }
      function y(e, t, i) {
        if (!e) {
          return;
        }
        if (t > e.width || i > e.width) {
          return g(e, t, i);
        }
        if (t < 4096 && i < 4096 && (e.width > 4096 || e.height > 4096)) {
          let t = a.A.bestFit(e.width, e.height, 4096, 4096);
          e = g(e, t.width, t.height);
        }
        let n = c(t, i);
        var o = e.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, e.width, e.height).data;
        var s = e.width;
        var r = e.height;
        var l = n.width;
        var d = n.height;
        let p = n.getContext("2d");
        var h = p.getImageData(0, 0, n.width, n.height);
        var u = h.data;
        var m = s / l;
        var y = r / d;
        var v = Math.ceil(m / 2);
        var f = Math.ceil(y / 2);
        for (var b = 0; b < d; b++) {
          for (var w = 0; w < l; w++) {
            var x = (w + b * l) * 4;
            var A = 0;
            var T = 0;
            var k = 0;
            var C = 0;
            var S = 0;
            var N = 0;
            var P = (b + 0.5) * y;
            for (var L = Math.floor(b * y); L < (b + 1) * y; L++) {
              var M = Math.abs(P - (L + 0.5)) / f;
              var E = (w + 0.5) * m;
              var I = M * M;
              for (var U = Math.floor(w * m); U < (w + 1) * m; U++) {
                var $ = Math.abs(E - (U + 0.5)) / v;
                var R = Math.sqrt(I + $ * $);
                if (R >= -1 && R <= 1 && (A = R * 2 * R * R - R * 3 * R + 1) > 0) {
                  k += A * o[$ = (U + L * s) * 4];
                  C += A * o[$ + 1];
                  S += A * o[$ + 2];
                  N += A * o[$ + 3];
                  T += A;
                }
              }
            }
            u[x] = k / T;
            u[x + 1] = C / T;
            u[x + 2] = S / T;
            u[x + 3] = N / T;
          }
        }
        p.putImageData(h, 0, 0);
        return n;
      }
      function g(e, t, i, n = true, a) {
        if (!e) {
          return;
        }
        if (t < 1) {
          t = 1;
        }
        if (i < 1) {
          i = 1;
        }
        let o = a ?? c(t, i);
        var s = o.getContext("2d");
        s.imageSmoothingQuality = "high";
        s.imageSmoothingEnabled = n;
        s.drawImage(e, 0, 0, o.width, o.height);
        s = undefined;
        return o;
      }
      function v(e, t) {
        let i = c(t.width, t.height);
        let n = i.getContext("2d");
        n.drawImage(e, -t.x, -t.y);
        n = undefined;
        return i;
      }
      function f(e, t, i) {
        let n = c(i.width, i.height);
        let a = n.getContext("2d");
        a.imageSmoothingQuality = "high";
        a.imageSmoothingEnabled = true;
        a.drawImage(e, t.x - i.x, t.y - i.y, t.width, t.height);
        a = undefined;
        return n;
      }
      function b(e, t) {
        if (e) {
          var i = c(t.width, t.height);
          var n = i.getContext("2d");
          n.drawImage(e, -t.x, -t.y);
          n = undefined;
          return i;
        }
      }
      function w(e, t = false) {
        if (e) {
          var i = t || e instanceof HTMLCanvasElement ? r(e.width, e.height) : c(e.width, e.height);
          var n = i.getContext("2d");
          n.drawImage(e, 0, 0);
          n = undefined;
          return i;
        }
      }
      function x(e, t) {
        if (e) {
          var i = c(e.width, e.height);
          var n = i.getContext("2d");
          if (t !== 180) {
            i.width = e.height;
            i.height = e.width;
          }
          n.translate(i.width / 2, i.height / 2);
          n.rotate(t * Math.PI / 180);
          n.drawImage(e, -e.width / 2, -e.height / 2);
          n.setTransform(1, 0, 0, 1, 0, 0);
          n = undefined;
          return i;
        }
      }
      function A(e, t, i) {
        let n = c(i.width, i.height);
        let a = n.getContext("2d");
        a.save();
        a.translate(i.width / 2, i.height / 2);
        a.rotate(t * Math.PI / 180);
        a.drawImage(e, -e.width / 2, -e.height / 2);
        a.restore();
        a = null;
        return n;
      }
      function T(e, t) {
        if (e) {
          var i = c(e.width, e.height);
          var n = i.getContext("2d");
          n.save();
          if (t) {
            n.scale(1, -1);
            n.drawImage(e, 0, -e.height, e.width, e.height);
          } else {
            n.scale(-1, 1);
            n.drawImage(e, -e.width, 0, e.width, e.height);
          }
          n.restore();
          n = undefined;
          return i;
        }
      }
      function k(e) {
        if (!e) {
          return;
        }
        const t = e.width;
        const i = e.height;
        return C(e.getContext("2d", {
          willReadFrequently: true
        }).getImageData(0, 0, t, i));
      }
      function C(e) {
        if (!e) {
          return;
        }
        const t = e.width;
        const i = e.height;
        let n;
        let o;
        let s = new Uint32Array(e.data.buffer);
        let r = -1;
        let c = -1;
        let l = -1;
        let d = -1;
        for (o = 0; o < i; ++o) {
          for (n = 0; n < t; ++n) {
            if (s[n + o * t] > 0) {
              c = o;
              break;
            }
          }
          if (c !== -1) {
            break;
          }
        }
        if (c !== -1) {
          for (o = i - 1; o >= c; --o) {
            for (n = 0; n < t; ++n) {
              if (s[n + o * t] > 0) {
                d = o + 1;
                break;
              }
            }
            if (d !== -1) {
              break;
            }
          }
          for (n = 0; n < t; ++n) {
            for (o = c; o <= d; ++o) {
              if (s[n + o * t] > 0) {
                r = n;
                break;
              }
            }
            if (r !== -1) {
              break;
            }
          }
          for (n = t - 1; n >= r; --n) {
            for (o = c; o <= d; ++o) {
              if (s[n + o * t] > 0) {
                l = n + 1;
                break;
              }
            }
            if (l !== -1) {
              break;
            }
          }
          return new a.A(r, c, l - r, d - c);
        }
      }
      function S() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
          var t = Math.random() * 16 | 0;
          return (e == "x" ? t : t & 3 | 8).toString(16);
        });
      }
      function N() {
        return "xxxxyxxx4xxx".replace(/[xy]/g, function (e) {
          var t = Math.random() * 16 | 0;
          return (e == "x" ? t : t & 3 | 8).toString(16);
        });
      }
      function P(e, t, i) {
        if (isNaN(e)) {
          return t;
        } else {
          return Math.min(Math.max(e, t), i);
        }
      }
      function L(e) {
        const t = (new Date().getTime() - e.getTime()) / 1000;
        if (t < 0) {
          return "It's the future man";
        }
        const i = Math.floor(t / 86400);
        if (i >= 1) {
          if (i > 1) {
            return (0, n.A)("sinceDays", i);
          } else {
            return (0, n.A)("sinceDay");
          }
        }
        const a = Math.floor(t / 3600);
        if (a >= 1) {
          if (a > 1) {
            return (0, n.A)("sinceHours", a);
          } else {
            return (0, n.A)("sinceHour");
          }
        }
        const o = Math.floor(t / 60);
        if (o >= 1) {
          if (o > 1) {
            return (0, n.A)("sinceMinutes", o);
          } else {
            return (0, n.A)("sinceMinute");
          }
        } else {
          return (0, n.A)("sinceNow");
        }
      }
      class M {
        constructor() {
          this.promise = new Promise((e, t) => {
            this.resolve = e;
            this.reject = t;
          });
        }
        then(e, t) {
          return this.promise.then(e, t);
        }
        catch(e) {
          return this.promise.catch(e);
        }
        finally(e) {
          return this.promise.finally(e);
        }
      }
      Symbol.toStringTag;
      Error;
      const E = (e = 32768) => {
        const t = (e, t) => {
          var i;
          t.width = t.height = e;
          const n = t.getContext("2d");
          try {
            return !!n && !((i = n.isContextLost) === null || i === undefined ? undefined : i.call(n)) && (n.fillStyle = "#000", n.fillRect(0, 0, 1, 1), n.getImageData(0, 0, 1, 1).data[3] === 255);
          } catch (a) {
            return false;
          }
        };
        let i = e;
        while (i > 0) {
          const e = document.createElement("canvas");
          const n = t(i, e);
          I(e);
          if (n) {
            return i;
          }
          i = Math.floor(i / 2);
        }
        return 0;
      };
      const I = e => {
        try {
          e.width = 0;
          e.height = 0;
        } catch (t) {}
        try {
          if (e.parentNode) {
            e.parentNode.removeChild(e);
          }
        } catch (i) {}
        e = null;
      };
      i.d(t, ["Q5", 0, e => {
        const t = e.lastIndexOf("(");
        const i = e.lastIndexOf(")");
        const n = () => {
          const t = e.lastIndexOf(".");
          return `${e.slice(0, t)} (1)${e.slice(t)}`;
        };
        if (!t || !i) {
          return n();
        }
        const a = parseInt(e.slice(t + 1, i));
        if (a) {
          return e.slice(0, t + 1) + (a + 1) + e.slice(i);
        } else {
          return n();
        }
      }]);
    }
  };
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
  }[e] || e) + "." + {
    21: "1b4db4780c3d992e170e",
    220: "f29da89cf56abf6de871",
    262: "97faf13b7b620e00b6a9",
    273: "3d570dc56c6ee0fb1ac0",
    334: "f543b122c198cd20f653",
    497: "06205716d644cfa03051",
    596: "ff5428b21db80918373e",
    876: "e13362de6a3c17f1978e",
    946: "fedb68c7b025734de7f3",
    990: "a138c7c55a28e6eccc44"
  }[e] + ".js";
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
  i.p = "/dist/";
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
            return `\n        <div id="redeemed-success">\n            <div class="redeem-detail">\n                <h2>${(0, r.A)("successfullyRedeemedWelcomeProductName").replace("{product}", e.product || "")}</h2>\n                <p class="top-10"><b>${n}</b></p>\n                ${o ? `<p class="top-20"><b>${(0, r.A)("whatYouGet")}</b></p><ul class="redeem-benefits">${o}</ul>` : ""}\n\n                <h5 class="heavy top-20">${(0, r.A)("pixlrMobileApps")}</h5>\n                <div class="redeem-apps">\n                    <div class="mobile-app-item"><img src="/img/general/mobile-x-icon.png" width="32" height="32" alt="Pixlr Express">Pixlr Express</div>\n                    <div class="mobile-app-item"><img src="/img/general/mobile-remove-bg-icon.png" width="32" height="32" alt="Remove Background by Pixlr">Remove Background by Pixlr</div>\n                    <div class="mobile-app-item"><img src="/img/general/mobile-stories-icon.png" width="32" height="32" alt="Stories by Pixlr">Stories by Pixlr</div>\n                    <div class="mobile-app-item"><img src="/img/general/mobile-img-gen-icon.png" width="32" height="32" alt="AI Image Generator">AI Image Generator</div>\n                    <div class="mobile-app-item"><img src="/img/general/mobile-face-flip-icon.png" width="32" height="32" alt="FaceFlip">FaceFlip</div>\n                </div>\n\n                <a class="button top-20" href="/editor/">${(0, r.A)("startEditing")}</a>\n            </div>\n            <div class="redeem-card">\n                <img src="/images/license/pixlr-redeem-success.png" alt="pixlr redeem license success">\n            </div>\n        </div>\n    `;
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
      src: "/img/icon/close.svg",
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
          src: m.liked ? "/img/icon/heart-filled.svg" : "/img/icon/heart-outline.svg",
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
              e.src = "/img/icon/heart-outline.svg";
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
              e.src = "/img/icon/heart-filled.svg";
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
          src: "/img/icon/download.svg",
          width: 18,
          height: 18,
          style: "width:18px;height:18px"
        })));
      }
      if (m._id && d.Ny && (m.userId === d.Ny.id || d.Ny.isAdmin)) {
        const e = m.personal || false;
        const t = (0, s.T)("img", {
          src: e ? "/img/icon/locked.svg" : "/img/icon/public.svg",
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
              t.src = m.personal ? "/img/icon/locked.svg" : "/img/icon/public.svg";
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
          src: "/img/icon/trash.svg",
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
          src: "/img/icon/report.svg",
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
            src: "/img/icon/remix.svg",
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
            src: "/img/icon/remix.svg",
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
          src: "/img/icon/prompt.svg",
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
                    src: "/img/icon/check.svg",
                    width: 18,
                    height: 18,
                    onerror: "this.src=\"/img/tool/ai.svg\""
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
          src: "/img/tool/ai.svg",
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
          src: "/img/tool/ai.svg",
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
          src: "/img/tool/fill.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("imageGeneratorEdit")}`));
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            location.href = "/video-generator/?ref=" + encodeURIComponent(P);
          }
        }, (0, s.T)("img", {
          src: "/img/icon/play.svg",
          width: 18,
          height: 18
        }), ` ${(0, r.A)("commonCreateVideo")}`));
        E.append((0, s.T)("div", {
          className: "button outline",
          onclick: () => {
            location.href = "/face-swap/?file=" + encodeURIComponent(P);
          }
        }, (0, s.T)("img", {
          src: "/img/tool/face-swap.svg",
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
          src: "/img/icon/video.svg",
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
        src: "/img/icon/trash.svg"
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
          src: "/img/icon/download.svg"
        })));
      }
    }
    if (e._id) {
      n.append(function (e) {
        let t = !!e.liked;
        const i = (0, s.T)("img", {
          src: t ? "/img/icon/heart-filled.svg" : "/img/icon/heart-outline.svg"
        });
        const n = (0, s.T)("span", {
          className: "like-burst"
        });
        const a = (a, s) => {
          t = a;
          e.liked = a;
          o.setAttribute("tooltip", a ? (0, r.A)("commonUnlike") : (0, r.A)("commonLike"));
          if (a) {
            i.src = "/img/icon/heart-filled.svg";
            if (s) {
              n.classList.add("run");
              setTimeout(() => n.classList.remove("run"), 1200);
            }
          } else {
            i.src = "/img/icon/heart-outline.svg";
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
        src: "/img/icon/locked.svg",
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
        src: "/img/icon/play.svg"
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
        src: "/img/icon/play.svg"
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
      o.innerHTML = "\n            <h3 style=\"text-align:center;padding:20px 20px 10px\">Open in</h3>\n            <div style=\"display:flex;justify-content:center;gap:20px;padding:10px 20px 30px\">\n                <a href=\"/express/\" class=\"gbox\" style=\"display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px 30px;text-decoration:none;color:var(--text-color);font-weight:600;font-size:0.85rem\">\n                    <img src=\"/images/express-icon.svg\" width=\"48\" height=\"48\" alt=\"Pixlr Express\">\n                    Express\n                </a>\n                <a href=\"/editor/\" class=\"gbox\" style=\"display:flex;flex-direction:column;align-items:center;gap:10px;padding:20px 30px;text-decoration:none;color:var(--text-color);font-weight:600;font-size:0.85rem\">\n                    <img src=\"/images/editor-icon.svg\" width=\"48\" height=\"48\" alt=\"Pixlr Editor\">\n                    Editor\n                </a>\n            </div>\n        ";
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