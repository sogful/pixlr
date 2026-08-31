window.__editorModules[6931] = function (t, e, s) {
      s.d(e, {
        A: () => c
      });
      var i = s(7775);
      var a = s(6939);
      var n = s(5283);
      var o = s(5259);
      var r = s(5328);
      var h = s(5432);
      var l = s(3508);
      class c extends a.A {
        constructor(t) {
          super((0, i.A)("createNew"), true, document.body.clientWidth >= 650);
          this.selectType = t => {
            let e = t.currentTarget;
            this.setType(e.id.replace("tab-", ""));
          };
          this.setType = t => {
            if (this.type) {
              this.holder.innerHTML = "";
              (0, n.Ay)("tab-" + this.type).classList.remove("selected");
            }
            (0, n.Ay)("tab-" + t).classList.add("selected");
            this.type = t;
            switch (this.type) {
              case "recommended":
                if (this.stage.clipboardSize) {
                  let t = this.stage.clipboardSize;
                  this.addBox((0, i.A)("clipboard"), t.width, t.height, "assets/images/icon/new-cutout.svg");
                }
                this.addBox((0, i.A)("social-media-post"), 1080, 1080, "assets/images/icon/category/social.svg");
                this.addBox((0, i.A)("social-media-story"), 1080, 1920, "assets/images/icon/category/social.svg");
                this.addBox("Web med", 1600, 900, "assets/images/icon/category/web.svg");
                this.addBox("Thumb 720p", 1280, 720, "assets/images/icon/category/video.svg");
                this.addBox("Wide 1080p", 1920, 1080, "assets/images/icon/category/video.svg");
                this.addBox("Art grid", 1000, 1000, "assets/images/icon/category/art.svg");
                this.addBox("12 mpx 4:3", 4032, 3024, "assets/images/icon/category/landscape.svg");
                this.addBox("8 mpx 4:3", 3264, 2448, "assets/images/icon/category/landscape.svg");
                break;
              case "photo":
                this.addBox("12 mpx 4:3", 4032, 3024, "assets/images/icon/category/landscape.svg");
                this.addBox("8 mpx 4:3", 3264, 2448, "assets/images/icon/category/landscape.svg");
                this.addBox("Landscape 3x2 in", 900, 600, "assets/images/icon/category/landscape.svg");
                this.addBox("Landscape 6x4 in", 1800, 1200, "assets/images/icon/category/landscape.svg");
                this.addBox("Landscape 7x5 in", 2100, 1500, "assets/images/icon/category/landscape.svg");
                this.addBox("Landscape 10x8 in", 3000, 2400, "assets/images/icon/category/landscape.svg");
                this.addBox("Portrait 2x3 in", 600, 900, "assets/images/icon/category/portrait.svg");
                this.addBox("Portrait 4x6 in", 1200, 1800, "assets/images/icon/category/portrait.svg");
                this.addBox("Portrait 5x7 in", 1500, 2100, "assets/images/icon/category/portrait.svg");
                this.addBox("Portrait 8x10 in", 2400, 3000, "assets/images/icon/category/portrait.svg");
                break;
              case "social":
                this.addBox((0, i.A)("instagram-square"), 1080, 1080, "assets/images/icon/category/instagram.svg");
                this.addBox((0, i.A)("instagram-post"), 1080, 1350, "assets/images/icon/category/instagram.svg");
                this.addBox((0, i.A)("instagram-story"), 1080, 1920, "assets/images/icon/category/instagram.svg");
                this.addBox((0, i.A)("facebook-post"), 1200, 630, "assets/images/icon/category/facebook.svg");
                this.addBox((0, i.A)("facebook-story"), 1080, 1920, "assets/images/icon/category/facebook.svg");
                this.addBox((0, i.A)("facebook-cover"), 851, 315, "assets/images/icon/category/facebook.svg");
                this.addBox((0, i.A)("facebook-profile"), 850, 850, "assets/images/icon/category/facebook.svg");
                this.addBox((0, i.A)("twitter-post"), 1600, 900, "assets/images/icon/category/twitter.svg");
                this.addBox((0, i.A)("twitter-cover"), 1500, 500, "assets/images/icon/category/twitter.svg");
                this.addBox((0, i.A)("twitter-profile"), 400, 400, "assets/images/icon/category/twitter.svg");
                this.addBox((0, i.A)("youtube-profile"), 800, 800, "assets/images/icon/category/youtube.svg");
                this.addBox((0, i.A)("youtube-thumbnail"), 1280, 720, "assets/images/icon/category/youtube.svg");
                this.addBox((0, i.A)("youtube-channel-art"), 2048, 1152, "assets/images/icon/category/youtube.svg");
                this.addBox((0, i.A)("pinterest-pin"), 1000, 1500, "assets/images/icon/category/pinterest.svg");
                this.addBox((0, i.A)("pinterest-square-pin"), 1000, 1000, "assets/images/icon/category/pinterest.svg");
                this.addBox((0, i.A)("pinterest-long-pin"), 1000, 2100, "assets/images/icon/category/pinterest.svg");
                break;
              case "print":
                this.addBox("Letter 8 x 11 in", 2400, 3300, "assets/images/icon/category/paper.svg");
                this.addBox("Legal 8 x 14 in", 2400, 4200, "assets/images/icon/category/paper.svg", true);
                this.addBox("Tabloid 11 x 17 in", 3300, 5100, "assets/images/icon/category/paper.svg", true);
                this.addBox("A3 297 x 420 mm", 3508, 4961, "assets/images/icon/category/paper.svg", true);
                this.addBox("A4 210 x 297 mm", 2480, 3508, "assets/images/icon/category/paper.svg");
                this.addBox("A5 148 x 210 mm", 1748, 2480, "assets/images/icon/category/paper.svg");
                this.addBox("A6 105 x 148 mm", 1240, 1748, "assets/images/icon/category/paper.svg");
                this.addBox((0, i.A)("business-card"), 1050, 600, "assets/images/icon/category/business-card.svg");
                this.addBox((0, i.A)("flyer") + " 4.25 x 5.5 in", 1275, 1650, "assets/images/icon/category/flyer.svg");
                this.addBox((0, i.A)("flyer") + " 5.5 x 8.5 in", 1650, 2550, "assets/images/icon/category/flyer.svg");
                this.addBox((0, i.A)("flyer") + " 8.5 x 11 in", 2550, 3300, "assets/images/icon/category/flyer.svg");
                this.addBox((0, i.A)("brochure") + " 8.5 x 11 in", 2550, 3300, "assets/images/icon/category/flyer.svg");
                this.addBox((0, i.A)("brochure") + " 8.5 x 14 in", 2550, 4200, "assets/images/icon/category/flyer.svg", true);
                this.addBox((0, i.A)("brochure") + " 11 x 17 in", 3300, 5100, "assets/images/icon/category/flyer.svg", true);
                this.addBox((0, i.A)("invitation") + " 4 x 6 in", 384, 576, "assets/images/icon/category/invitation.svg");
                this.addBox((0, i.A)("invitation") + " 5 x 7 in", 480, 672, "assets/images/icon/category/invitation.svg");
                break;
              case "web":
                this.addBox("Web 1994", 800, 600, "assets/images/icon/category/web.svg");
                this.addBox("Web 2004", 1280, 720, "assets/images/icon/category/web.svg");
                this.addBox("Web 2012", 1366, 768, "assets/images/icon/category/web.svg");
                this.addBox("Web 2016", 1440, 900, "assets/images/icon/category/web.svg");
                this.addBox("Web 2020", 1920, 1200, "assets/images/icon/category/web.svg");
                this.addBox("Icon 16", 16, 16, "assets/images/icon/category/icon.svg");
                this.addBox("Icon 32", 32, 32, "assets/images/icon/category/icon.svg");
                this.addBox("Icon 64", 64, 64, "assets/images/icon/category/icon.svg");
                this.addBox("Icon 512", 512, 512, "assets/images/icon/category/icon.svg");
                this.addBox("Icon 1024", 1024, 1024, "assets/images/icon/category/icon.svg");
                break;
              case "video":
                this.addBox("360p", 640, 360, "assets/images/icon/category/video.svg");
                this.addBox("480p", 854, 480, "assets/images/icon/category/video.svg");
                this.addBox("720p", 1280, 720, "assets/images/icon/category/video.svg");
                this.addBox("1080p HD", 1920, 1080, "assets/images/icon/category/video.svg");
                this.addBox("1440p 2K", 2560, 1440, "assets/images/icon/category/video.svg");
                this.addBox("4K UHD", 3840, 2160, "assets/images/icon/category/video.svg");
            }
          };
          this.presetChange = t => {
            let e = t.currentTarget;
            let s = (0, n.Ay)("ceate-new-outer").getElementsByClassName("new-box");
            for (var i = 0; i < s.length; i++) {
              s[i].classList.remove("selected");
            }
            e.classList.add("selected");
            let a = e.getAttribute("data").split(":");
            (0, n.Ay)("new-canvas-width").value = a[0];
            (0, n.Ay)("new-canvas-height").value = a[1];
          };
          this.addBox = (t, e, s, i, a = false) => {
            let o = (0, n.T)("div", {
              className: "new-box",
              style: "width:" + this.boxSize + "px"
            }, (0, n.T)("div", {
              className: "holder"
            }, (0, n.T)("img", {
              src: i
            })), (0, n.T)("span", {}, t), (0, n.T)("small", {}, e + "x" + s + " px"));
            if (a) {
              o.classList.add("premium");
            }
            o.addEventListener("click", this.presetChange, false);
            o.setAttribute("data", e + ":" + s);
            this.holder.appendChild(o);
          };
          this.apply = async () => {
            let t = (0, n.Ay)("new-canvas-width").value;
            let e = (0, n.Ay)("new-canvas-height").value;
            let s = Number.isNaN(Number(t)) ? 600 : Number(t);
            let i = Number.isNaN(Number(e)) ? 600 : Number(e);
            let a = (0, h.zl)("premium") ? 8192 : 4096;
            if (s > a) {
              s = a;
            }
            if (i > a) {
              i = a;
            }
            let o = (0, n.Ay)("new-canvas-name").value;
            let r = !(0, n.Ay)("new-canvas-background").checked;
            this.stage.createNew(o, s, i, r ? undefined : this.backgroundColor.getHex());
            this.cleanUp();
          };
          this.stage = t;
          (0, n.Ay)("dialog-apply" + this.mid).innerText = (0, i.A)("create");
          (0, n.Ay)("dialog-buttons" + this.mid).style.marginTop = "0px";
          if (document.body.clientWidth >= 650) {
            this.dialog.style.width = "90%";
            this.dialog.style.maxWidth = "1200px";
            this.dialog.style.height = window.innerHeight - 300 + "px";
            this.content.style.padding = "0";
            this.content.style.height = "1vh";
            this.content.style.display = "flex";
            this.content.style.position = "relative";
            this.content.style.flexDirection = "column";
            this.setContent(`\n\n                <ul id="preset-type" class="tab-list top-10" style="flex: 0 1 auto;margin-left:20px;margin-right:20px;margin-bottom:10px">\n                    <li id="tab-recommended">${(0, i.A)("recommended")}</li>\n                    <li id="tab-photo">${(0, i.A)("photo")}</li>\n                    <li id="tab-social">${(0, i.A)("social")}</li>\n                    <li id="tab-web">${(0, i.A)("web")}</li>\n                    <li id="tab-print">${(0, i.A)("print")}</li>\n                    <li id="tab-video">${(0, i.A)("video")}</li>\n                </ul>\n                <div class="flex" style="position:relative;height:calc(100% - 58px);margin:0px 20px;">\n\n                    <div id="ceate-new-outer" style="flex-grow:2">\n                        <div id="create-new-content" class="new-holder">\n\n                        </div>\n                    </div>\n                    <div style="flex: 0 0 auto;flex-basis:220px;width:220px;min-width:220px;margin-left:10px;overflow:hidden;">\n                        <label for="new-canvas-name">${(0, i.A)("name")}</label>\n                        <input type="text" style="width: 100%;" id="new-canvas-name" value="${(0, i.A)("untitled")}" />\n\n                        <label class="split top-20">${(0, i.A)("width")} <input type="number" id="new-canvas-width" value="1920"/></label>\n                        <label class="split">${(0, i.A)("height")} <input type="number" id="new-canvas-height" value="1080"/></label>\n                        <label class="top-10" style="text-align:right;font-size:10px;float:none;clear: both;">${(0, i.A)("max")}<span id="new-max-size">4096 x 4096 px</span></label>\n\n                        <input type="checkbox" class="toggle-check" id="new-canvas-background" />\n                        <label class="switch subline top-20" for="new-canvas-background">${(0, i.A)("background")}<span></span><span class="arrow"></span></label>\n                        <div class="toggle">\n                            <div id="new-canvas-background-color-picker" class="color-picker top-0"></div>\n                        </div>\n                    </div>\n                <div>\n                \n            `);
            this.holder = (0, n.Ay)("create-new-content");
            let t = (0, n.Ay)("preset-type").getElementsByTagName("li");
            for (var e = 0; e < t.length; e++) {
              t[e].addEventListener("click", this.selectType, false);
            }
            let s = this.holder.clientWidth;
            let a = Math.floor(s / 125);
            this.boxSize = Math.floor(125 + (s - a * 125) / a);
            new r.A((0, n.Ay)("ceate-new-outer"));
            this.setType("recommended");
          } else {
            this.setContent(`\n\n                <label for="new-canvas-name">${(0, i.A)("name")}</label>\n                <input type="text" style="width: 100%;" id="new-canvas-name" value="${(0, i.A)("untitled")}" />\n\n                <label class="split top-20">${(0, i.A)("width")} <input type="number" id="new-canvas-width" value="1920"/></label>\n                <label class="split">${(0, i.A)("height")} <input type="number" id="new-canvas-height" value="1080"/></label>\n                <label class="top-10" style="text-align:right;font-size:10px;float:none;clear: both;">${(0, i.A)("max")}<span id="new-max-size">4096 x 4096 px</span></label>\n\n                <input type="checkbox" class="toggle-check" id="new-canvas-background" />\n                <label class="switch subline top-20" for="new-canvas-background">${(0, i.A)("background")}<span></span><span class="arrow"></span></label>\n                <div class="toggle">\n                    <div id="new-canvas-background-color-picker" class="color-picker top-0"></div>\n                </div>\n            `);
          }
          this.backgroundColor = new l.A((0, n.Ay)("new-canvas-background-color-picker"), new o.A(), undefined, false, false);
          if ((0, h.zl)("premium")) {
            (0, n.Ay)("new-max-size").innerText = "8192 x 8192 px";
          }
          this.position();
        }
      }
    }
