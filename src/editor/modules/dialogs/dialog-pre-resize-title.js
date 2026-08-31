window.__editorModules[298] = function (t, e, s) {
      s.d(e, {
        A: () => c
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(6939);
      var o = s(5699);
      var r = s(651);
      var h = s(5432);
      var l = s(98);
      class c extends n.A {
        constructor(t, e) {
          super((0, a.A)("dialogPreResizeTitle"));
          this.rotation = 0;
          this.size = 1920;
          this.init = () => new Promise((t, e) => {
            this.apply = () => {
              if ((0, i.Ay)("preresize-never-ask-again").checked) {
                (0, l.ZC)("askToPreResize", false);
              }
              const e = new r.A(Number((0, i.Ay)("pre-resize-width").value), Number((0, i.Ay)("pre-resize-height").value));
              const s = (0, i.Ay)("pre-resize-auto-rotate").checked ? this.rotation : 0;
              this.cleanUp();
              t([e, s]);
            };
            this.cancel = () => {
              this.cleanUp();
              t([undefined, undefined]);
            };
          });
          this.presetChange = t => {
            let e = t.currentTarget;
            let s = (0, i.Ay)("pre-resize-preset").getElementsByTagName("li");
            for (var a = 0; a < s.length; a++) {
              s[a].classList.remove("selected");
            }
            e.classList.add("selected");
            this.size = Number(e.getAttribute("data"));
            this.setSize();
          };
          this.imageSizeInputChange = t => {
            let e;
            let s;
            let a = t.currentTarget;
            if (a.id === "pre-resize-width") {
              e = o.qE(Number(a.value), 1, this.width);
              s = Math.round(e / this.width * this.height);
            } else {
              s = o.qE(Number(a.value), 1, this.height);
              e = Math.round(s / this.height * this.width);
            }
            (0, i.Ay)("pre-resize-height").value = s.toString();
            (0, i.Ay)("pre-resize-width").value = e.toString();
          };
          this.setSize = () => {
            let t = (0, i.Ay)("pre-resize-width");
            let e = (0, i.Ay)("pre-resize-height");
            if (this.width > this.height) {
              t.value = this.size.toString();
              e.value = Math.round(this.size / this.width * this.height).toString();
            } else {
              e.value = this.size.toString();
              t.value = Math.round(this.size / this.height * this.width).toString();
            }
          };
          if ((0, h.zl)("premium")) {
            this.dialog.style.maxWidth = "560px";
          } else {
            this.dialog.style.maxWidth = "480px";
          }
          this.image = t;
          if (e === 90 || e === -90) {
            this.height = t.width;
            this.width = t.height;
          } else {
            this.width = t.width;
            this.height = t.height;
          }
          this.rotation = e;
          this.setContent(`\n            <span style="display: block;">${(0, a.A)("dialogPreResizeInfo1")} (<span id="pre-resize-start"></span>) ${(0, a.A)("dialogPreResizeInfo2")}</span>\n\n            <input type="checkbox" id="preresize-never-ask-again" />\n            <label class="switch top-10" for="preresize-never-ask-again">${(0, a.A)("neverAskMeAgain")}<span></span></label>\n\n            <span id="pre-resize-auto-rotate-setting" style="display:none;">\n                <input type="checkbox" checked id="pre-resize-auto-rotate" />\n                <label class="switch top-20" for="pre-resize-auto-rotate">${(0, a.A)("dialogPreResizeExif")}<span></span></label>\n            </span>\n        \n            <ul id="pre-resize-preset" class="push-buttons top-20">\n                <li id="pre-resize-original" data="4096"><img src="assets/images/icon/layer-image.svg" class="ic"><span>${(0, a.A)("original")}<br /><small id="pre-resize-uhd-size">Max 3840 px</small></span></li>\n                <li id="pre-resize-uhd" data="3840"><img src="assets/images/icon/size-uhd.svg" class="ic"><span>${(0, a.A)("sizeUltraHD")}<br /><small>Max 3840 px</small></span></li>\n                <li id="pre-resize-fhd" data="1920" class="selected"><img src="assets/images/icon/size-fhd.svg" class="ic"><span>${(0, a.A)("sizeFullHD")}<br /><small>Max 1920 px</small></span></li>\n                <li id="pre-resize-uhd" data="1280"><img src="assets/images/icon/size-web.svg" class="ic"><span>${(0, a.A)("sizeWeb")}<br /><small>Max 1280 px</small></span></li>\n            </ul>\n\n            <div class="top-20" style="text-align:right;line-height:32px;">${(0, a.A)("newSize")}<input type="number" style="text-align:center;margin-left:16px" id="pre-resize-width"/> x <input type="number" style="text-align:center" id="pre-resize-height"/></div>\n        `);
          this.maxSize = (0, h.zl)("premium") ? 8192 : 4096;
          if ((0, h.zl)("premium")) {
            if (this.width < 3840 && this.height < 3840) {
              (0, i.Ay)("pre-resize-uhd").style.display = "none";
            }
            (0, i.Ay)("pre-resize-original").setAttribute("data", Math.min(Math.max(this.width, this.height), this.maxSize).toString());
            (0, i.Ay)("pre-resize-uhd-size").innerText = (0, a.A)("dialogPreResizeMaxSize", Math.min(Math.max(this.width, this.height), this.maxSize));
          } else if (this.width < 3840 && this.height < 3840) {
            (0, i.Ay)("pre-resize-uhd").style.display = "none";
            (0, i.Ay)("pre-resize-original").setAttribute("data", Math.max(this.width, this.height).toString());
            (0, i.Ay)("pre-resize-uhd-size").innerText = (0, a.A)("dialogPreResizeMaxSize", Math.max(this.width, this.height));
          } else {
            (0, i.Ay)("pre-resize-original").style.display = "none";
          }
          if (e !== 0) {
            let t = (0, i.Ay)("pre-resize-auto-rotate-setting");
            t.style.display = "block";
            t.addEventListener("change", () => {
              let t = (0, i.Ay)("pre-resize-width");
              let e = (0, i.Ay)("pre-resize-height");
              const s = t.value;
              t.value = e.value;
              e.value = s;
            }, false);
          }
          (0, i.Ay)("pre-resize-start").innerText = this.width.toString() + " x " + this.height.toString();
          let s = (0, i.Ay)("pre-resize-preset").getElementsByTagName("li");
          for (var n = 0; n < s.length; n++) {
            s[n].addEventListener("click", this.presetChange, false);
          }
          this.setSize();
          (0, i.Ay)("pre-resize-width").addEventListener("change", this.imageSizeInputChange, false);
          (0, i.Ay)("pre-resize-height").addEventListener("change", this.imageSizeInputChange, false);
        }
      }
    }
