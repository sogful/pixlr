window.__editorModules[5056] = function (t, e, s) {
      async function i(t, e) {
        return new Promise((s, i) => {
          var a = new XMLHttpRequest();
          var n = false;
          a.responseType = "arraybuffer";
          a.withCredentials = false;
          a.open("GET", t, true);
          a.onprogress = function (t) {
            if (t.lengthComputable) {
              if (e) {
                e(t.loaded / t.total * 100);
              }
            } else if (!n) {
              n = true;
              if (e) {
                e(-1);
              }
            }
          };
          a.onloadend = function () {
            if (a.status.toString().match(/^2/)) {
              if (!n) {
                if (e) {
                  e(100);
                }
              }
              s(new Blob([this.response], {
                type: a.getResponseHeader("Content-Type")
              }));
            } else {
              i(a);
            }
          };
          a.send();
        });
      }
      function a(t) {
        return new Promise((e, s) => {
          let i = new Image();
          i.onload = () => e(i);
          i.onerror = t => s(t);
          i.src = t;
        });
      }
      function n(t) {
        return new Promise((e, s) => {
          const i = new FileReader();
          i.onerror = () => s(i.error);
          i.onloadend = () => e(i.result);
          i.readAsArrayBuffer(t);
        });
      }
      function o(t) {
        return new Promise(async (e, s) => {
          const i = URL.createObjectURL(t);
          let a = new Image();
          a.crossOrigin = "Anonymous";
          a.onload = () => {
            URL.revokeObjectURL(i);
            if (a.width + a.height == 0) {
              return s(new Error("Image loaded but is empty or invalid"));
            }
            e(a);
          };
          a.onerror = function (e) {
            URL.revokeObjectURL(i);
            const a = t instanceof File ? t.name : "unknown";
            s(new Error(`Failed to load image: ${a}`));
          };
          a.name = t instanceof File ? t.name : "";
          a.src = i;
        });
      }
      s.d(e, {
        CB: () => n,
        Ep: () => o,
        kw: () => a,
        yP: () => i
      });
    }
