window.__editorModules[8439] = function (t, e, s) {
      s.d(e, {
        A: () => o
      });
      var i = s(9310);
      var a = s(5283);
      var n = s(7775);
      class o extends i.A {
        constructor(t) {
          super(t, (0, n.A)("titleMonochrome"));
          this.setValue = (t, e, s) => {
            this.mRed.style.height = Math.round(24 + t * 100) + "px";
            this.mGreen.style.height = Math.round(24 + e * 100) + "px";
            this.mBlue.style.height = Math.round(24 + s * 100) + "px";
            (0, a.Ay)("monochrome-red").innerText = "R: " + (t * 100).toFixed(1) + "%";
            (0, a.Ay)("monochrome-green").innerText = "G: " + (e * 100).toFixed(1) + "%";
            (0, a.Ay)("monochrome-blue").innerText = "B: " + (s * 100).toFixed(1) + "%";
            this.update(t, e, s);
          };
          this.update = (t, e, s) => {
            this.change("monochrome", {
              r: t,
              g: e,
              b: s
            });
          };
          this.dialog.style.width = "440px";
          this.dialog.style.maxWidth = "440px";
          this.mRed = (0, a.T)("div", {
            style: "background-color:#d1480e;"
          });
          this.mGreen = (0, a.T)("div", {
            style: "background-color:#929C1F;"
          });
          this.mBlue = (0, a.T)("div", {
            style: "background-color:#3a6e9a;"
          });
          this.content.classList.add("flex");
          var e = (0, a.T)("div", {
            style: "margin-top:2px",
            className: "select"
          });
          e.innerHTML = "\n            <select id=\"monochrome-preset\">\n                <option value=\"0.299:0.587:0.114\" selected>Rec601 Luma (Vision)</option>\n                <option value=\"0.2126:0.7152:0.0722\">sRGB ITU-R BT.709</option>\n                <option value=\"0.2627:0.6780:0.0593\">HDR ITU-R BT.2100</option>\n                <option value=\"0.3333333:0.3333334:0.3333333\">Unweighted</option>\n                <option value=\"1:0:0\">Red</option>\n                <option value=\"0:1:0\">Green</option>\n                <option value=\"0:0:1\">Blue</option>\n                <option value=\"0.18:0.41:0.41\">Agfa 200X</option>\n                <option value=\"0.25:0.39:0.36\">Agfapan 25</option>\n                <option value=\"0.21:0.40:0.39\">Agfapan 100</option>\n                <option value=\"0.20:0.41:0.39\">Agfapan 400</option>\n                <option value=\"0.21:0.42:0.37\">Ilford Delta 100 & XP2 Super</option>\n                <option value=\"0.22:0.42:0.36\">Ilford Delta 400</option>\n                <option value=\"0.31:0.36:0.33\">Ilford Delta 400 Pro & 3200</option>\n                <option value=\"0.28:0.41:0.31\">Ilford FP4</option>\n                <option value=\"0.23:0.37:0.40\">Ilford HP5</option>\n                <option value=\"0.33:0.36:0.31\">Ilford Pan F</option>\n                <option value=\"0.36:0.31:0.33\">Ilford SFX</option>\n                <option value=\"0.21:0.42:0.37\">Ilford</option>\n                <option value=\"0.24:0.37:0.39\">Kodak Tmax 100</option>\n                <option value=\"0.27:0.36:0.37\">Kodak Tmax 400</option>\n                <option value=\"0.25:0.35:0.40\">Kodak Tri-X</option>\n                <option value=\"0.5:0.5:0\">Red Green</option>\n                <option value=\"0:0.5:0.5:\">Green Blue</option>\n                <option value=\"0.5:0:0.5:\">Blue Red</option>\n            </select>\n        ";
          let s = (0, a.T)("div", {
            style: "margin:10px 20px;opacity:0.7",
            className: "flex"
          });
          s.innerHTML = "\n            <div id=\"monochrome-red\">R: </div>\n            <div id=\"monochrome-green\">G: </div>\n            <div id=\"monochrome-blue\">B: </div>\n        ";
          this.setContent((0, a.T)("div", {
            style: "position:relative;margin-top:20px;margin-bottom:30px;margin-left:10px;margin-right:5px;"
          }, (0, a.T)("div", {
            className: "swatch-slider"
          }, this.mRed), (0, a.T)("div", {
            className: "swatch-slider"
          }, this.mGreen), (0, a.T)("div", {
            className: "swatch-slider"
          }, this.mBlue)), (0, a.T)("div", {
            style: "flex-grow:1;margin:20px"
          }, (0, a.T)("label", {}, (0, n.A)("preset")), e, s));
          (0, a.Ay)("monochrome-preset").addEventListener("change", () => {
            let t = (0, a.Ay)("monochrome-preset").value.split(":");
            this.setValue(Number(t[0]), Number(t[1]), Number(t[2]));
          });
          this.setValue(0.299, 0.587, 0.114);
        }
      }
    }
