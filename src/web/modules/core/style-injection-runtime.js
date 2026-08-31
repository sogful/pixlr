window.__webModules[5072] = function (e, t, i) {
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
    }
