window.__editorModules[3343] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(7775);
      var a = s(6939);
      var n = s(5283);
      var o = s(5699);
      var r = s(7135);
      var h = s(98);
      var l = s(5432);
      var c = s(3641);
      class d extends a.A {
        constructor(t) {
          super((0, i.A)("errorReport"));
          this.stage = t;
          this.hide = () => {
            this.modal.style.display = "none";
          };
          this.show = () => {
            this.modal.style.display = "flex";
          };
          this.apply = async () => {
            this.disableApply();
            this.disableCancel();
            try {
              const t = new FormData();
              t.append("email", (0, n.Ay)(`email-${this.mid}`).value);
              t.append("platform", function () {
                const t = [navigator.userAgent, `Product: ${h.Ay.product}`];
                const e = navigator.userAgentData;
                if (e) {
                  const s = e.brands.map(t => `${t.brand}: ${t.version}`);
                  s.push(`Platform: ${e.platform}`);
                  s.push(`Mobile: ${e.mobile}`);
                  t.push(s.join("\n"));
                }
                const s = navigator.deviceMemory;
                if (s) {
                  t.push(`Main memory: ${s}`);
                }
                return t.join("\n\n");
              }());
              t.append("description", (0, n.Ay)(`description-${this.mid}`).value);
              if ((0, n.Ay)(`include-doc-${this.mid}`).checked) {
                const e = await (0, c.Ab)(this.stage, {
                  id: this.stage.fresco.id,
                  name: "document",
                  quality: 0.8,
                  nonDestructive: false,
                  type: "document",
                  unit: "pixel"
                });
                t.append("document", e, "document.pxd");
              }
              const e = (0, n.Ay)(`screenshot-canvas-${this.mid}`);
              if (e) {
                const s = await new Promise(t => e.toBlob(t, "image/jpeg", 80));
                t.append("screenshot", s, "screenshot.jpg");
              }
              await fetch("/api/error-report", {
                method: "POST",
                body: t
              });
              this.cleanUp();
            } catch (t) {
              this.enableApply();
              this.enableCancel();
              console.error(t);
            }
          };
          (0, r.A)("error-report");
          (0, n.Ay)("dialog-apply" + this.mid).innerHTML = (0, i.A)("send");
          this.dialog.style.width = "800px";
          this.dialog.style.maxWidth = "800px";
          this.setContent(`\n            <div style="display: flex;gap: 20px">\n                <section>\n                    <div id="screenshot-${this.mid}" class="error-report-screenshot">   \n                        <div id="error-report-screenoverlay-${this.mid}" class="error-report-screenoverlay">                     \n                            <button id="takescreen-${this.mid}" class="button positive">${(0, i.A)("commonTakeScreenshot")}</button>\n                            ${(0, i.A)("commonOr")}\n                            <label id="upload-${this.mid}" for="fileupload-${this.mid}" class="button">${(0, i.A)("commonUploadImage")}</label>\n                            <input id="fileupload-${this.mid}" type="file" hidden accept="image/*" />\n                        </div>\n                    </div>         \n                </section>\n\n                <section>\n                    <div>\n                        <label>${(0, i.A)("commonEmail")}</label>\n                        <input id="email-${this.mid}" style="width: 100%" type="text" value="${l.Ny?.email ?? ""}">\n                    </div>\n\n                    <div class="top-20">\n                        <label>${(0, i.A)("commonDescription")}</label>\n                        <small>${(0, i.A)("commonErrorReportHelp")}</small>\n                        <textarea id="description-${this.mid}" style="width:100%" rows="10"></textarea>\n                    </div>\n\n                    <div class="top-20">\n                        <input id="include-doc-${this.mid}" type="checkbox">\n                        <label class="switch" for="include-doc-${this.mid}">\n                            ${(0, i.A)("commonIncludeDocument")}\n                            <span></span>\n                        </label>\n                        <small>${(0, i.A)("commonIncludeDocumentHelp")}</small>\n                    </div>\n                </section>\n            </div>\n        `);
          this.descriptionInput = (0, n.Ay)(`description-${this.mid}`);
          this.emailInput = (0, n.Ay)(`email-${this.mid}`);
          this.descriptionInput.addEventListener("keydown", t => {
            if (t.key === "Enter") {
              t.stopPropagation();
            }
          });
          this.emailInput.addEventListener("keydown", t => {
            if (t.key === "Enter") {
              t.stopPropagation();
            }
          });
          const s = (0, n.Ay)(`fileupload-${this.mid}`);
          s.addEventListener("change", async () => {
            var t;
            const e = s.files[0];
            const i = o.oM(await o.lz(e), true);
            i.id = `screenshot-canvas-${this.mid}`;
            if ((t = (0, n.Ay)(`screenshot-canvas-${this.mid}`)) !== null && t !== undefined) {
              t.remove();
            }
            (0, n.Ay)(`screenshot-${this.mid}`).appendChild(i);
            (0, n.Ay)(`error-report-screenoverlay-${this.mid}`).classList.add("with-image");
          });
          (0, n.Ay)(`takescreen-${this.mid}`).addEventListener("click", () => {
            this.takeScreenshot();
          });
        }
        async takeScreenshot() {
          var t;
          try {
            this.hide();
            const e = document.createElement("video");
            const s = await navigator.mediaDevices.getDisplayMedia({
              preferCurrentTab: true
            });
            e.srcObject = s;
            await e.play();
            e.pause();
            const i = (0, n.T)("canvas", {
              width: e.videoWidth,
              height: e.videoHeight,
              id: `screenshot-canvas-${this.mid}`
            });
            i.getContext("2d").drawImage(e, 0, 0);
            s.getTracks().forEach(t => t.stop());
            if ((t = (0, n.Ay)(`screenshot-canvas-${this.mid}`)) !== null && t !== undefined) {
              t.remove();
            }
            (0, n.Ay)(`screenshot-${this.mid}`).appendChild(i);
            (0, n.Ay)(`error-report-screenoverlay-${this.mid}`).classList.add("with-image");
          } catch (e) {
            console.log(e);
          } finally {
            this.show();
          }
        }
      }
    }
