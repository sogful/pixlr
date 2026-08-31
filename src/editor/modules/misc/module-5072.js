window.__editorModules[5072] = function (t, e, s) {
      var i;
      function a() {
        if (i === undefined) {
          i = Boolean(window && document && document.all && !window.atob);
        }
        return i;
      }
      var n = function () {
        var t = {};
        return function (e) {
          if (t[e] === undefined) {
            var s = document.querySelector(e);
            if (window.HTMLIFrameElement && s instanceof window.HTMLIFrameElement) {
              try {
                s = s.contentDocument.head;
              } catch (i) {
                s = null;
              }
            }
            t[e] = s;
          }
          return t[e];
        };
      }();
      var o = [];
      function r(t) {
        var e = -1;
        for (var s = 0; s < o.length; s++) {
          if (o[s].identifier === t) {
            e = s;
            break;
          }
        }
        return e;
      }
      function h(t, e) {
        var s = {};
        var i = [];
        for (var a = 0; a < t.length; a++) {
          var n = t[a];
          var h = e.base ? n[0] + e.base : n[0];
          var l = s[h] || 0;
          var c = `${h} ${l}`;
          s[h] = l + 1;
          var d = r(c);
          var u = {
            css: n[1],
            media: n[2],
            sourceMap: n[3]
          };
          if (d !== -1) {
            o[d].references++;
            o[d].updater(u);
          } else {
            o.push({
              identifier: c,
              updater: y(u, e),
              references: 1
            });
          }
          i.push(c);
        }
        return i;
      }
      function l(t) {
        var e = document.createElement("style");
        var i = t.attributes || {};
        if (i.nonce === undefined) {
          var a = s.nc;
          if (a) {
            i.nonce = a;
          }
        }
        Object.keys(i).forEach(function (t) {
          e.setAttribute(t, i[t]);
        });
        if (typeof t.insert == "function") {
          t.insert(e);
        } else {
          var o = n(t.insert || "head");
          if (!o) {
            throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
          }
          o.appendChild(e);
        }
        return e;
      }
      var c;
      c = [];
      function d(t, e) {
        c[t] = e;
        return c.filter(Boolean).join("\n");
      }
      function u(t, e, s, i) {
        var a = s ? "" : i.media ? `@media ${i.media} {${i.css}}` : i.css;
        if (t.styleSheet) {
          t.styleSheet.cssText = d(e, a);
        } else {
          var n = document.createTextNode(a);
          var o = t.childNodes;
          if (o[e]) {
            t.removeChild(o[e]);
          }
          if (o.length) {
            t.insertBefore(n, o[e]);
          } else {
            t.appendChild(n);
          }
        }
      }
      function p(t, e, s) {
        var i = s.css;
        var a = s.media;
        var n = s.sourceMap;
        if (a) {
          t.setAttribute("media", a);
        } else {
          t.removeAttribute("media");
        }
        if (n && typeof btoa != "undefined") {
          i += `
/*# sourceMappingURL=data:application/json;base64,${btoa(unescape(encodeURIComponent(JSON.stringify(n))))} */`;
        }
        if (t.styleSheet) {
          t.styleSheet.cssText = i;
        } else {
          while (t.firstChild) {
            t.removeChild(t.firstChild);
          }
          t.appendChild(document.createTextNode(i));
        }
      }
      var g = null;
      var m = 0;
      function y(t, e) {
        var s;
        var i;
        var a;
        if (e.singleton) {
          var n = m++;
          s = g ||= l(e);
          i = u.bind(null, s, n, false);
          a = u.bind(null, s, n, true);
        } else {
          s = l(e);
          i = p.bind(null, s, e);
          a = function () {
            (function (t) {
              if (t.parentNode === null) {
                return false;
              }
              t.parentNode.removeChild(t);
            })(s);
          };
        }
        i(t);
        return function (e) {
          if (e) {
            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) {
              return;
            }
            i(t = e);
          } else {
            a();
          }
        };
      }
      t.exports = function (t, e) {
        if (!(e = e || {}).singleton && typeof e.singleton != "boolean") {
          e.singleton = a();
        }
        var s = h(t = t || [], e);
        return function (t) {
          t = t || [];
          if (Object.prototype.toString.call(t) === "[object Array]") {
            for (var i = 0; i < s.length; i++) {
              var a = r(s[i]);
              o[a].references--;
            }
            var n = h(t, e);
            for (var l = 0; l < s.length; l++) {
              var c = r(s[l]);
              if (o[c].references === 0) {
                o[c].updater();
                o.splice(c, 1);
              }
            }
            s = n;
          }
        };
      };
    }
