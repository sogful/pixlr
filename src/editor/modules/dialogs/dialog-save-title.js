window.__editorModules[4034] = function (t, e, s) {
      s.d(e, {
        A: () => y
      });
      var i = s(7775);
      var a = s(6939);
      var n = s(3517);
      var o = s(5283);
      var r = s(5699);
      var h = s(7135);
      var l = s(5432);
      var c = s(5833);
      var d = s(9266);
      var u = s(2443);
      var p = s(98);
      var m = s(3641);
      class y extends a.A {
        constructor(t, e) {
          super((0, i.A)("dialogSaveTitle"), false);
          this.stage = t;
          this.dialog.style.maxWidth = "260px";
          this.setContent(`
        <section id="save-simple" style="display:flex;flex-direction:column;gap:10px;padding:6px 4px">
            <a class="button positive w-100" data-format="png">${(0, i.A)("download")}<span style="display:block;font-size:11px;opacity:.65;font-weight:normal">PNG</span></a>
            <a class="button positive w-100" data-format="jpg">${(0, i.A)("download")}<span style="display:block;font-size:11px;opacity:.65;font-weight:normal">JPG</span></a>
            <a class="button positive w-100" data-format="webp">${(0, i.A)("download")}<span style="display:block;font-size:11px;opacity:.65;font-weight:normal">WEBP</span></a>
            <a class="button positive w-100" data-format="pdf">${(0, i.A)("download")}<span style="display:block;font-size:11px;opacity:.65;font-weight:normal">PDF</span></a>
            <a class="button positive w-100" data-format="pxz">${(0, i.A)("download")}<span style="display:block;font-size:11px;opacity:.65;font-weight:normal">PXZ</span></a>
        </section>
    `);
          this.download = async fmt => {
            if (this.downloading) {
              return;
            }
            this.downloading = true;
            try {
              document.dispatchEvent(new CustomEvent("select-tool"));
              this.stage.history.commitTransaction();
              if (await m.download(this.stage, fmt)) {
                this.cleanUp();
              }
            } catch (error) {
              console.error("Download failed", error);
              document.dispatchEvent(new CustomEvent("notification", {
                detail: "Download failed. Please try again."
              }));
            } finally {
              this.downloading = false;
            }
          };
          (0, o.Ay)("save-simple").querySelectorAll("a[data-format]").forEach(btn => {
            btn.addEventListener("click", () => this.download(btn.getAttribute("data-format")));
          });
        }
      }
    }
