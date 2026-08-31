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
            const name = this.stage.fresco.name || "Untitled";
            let blob;
            if (fmt === "pxz") {
              try {
                blob = await (0, m.Ab)(this.stage, {
                  id: this.stage.fresco.id,
                  name: name,
                  quality: 1,
                  nonDestructive: false,
                  type: "document",
                  unit: "pixel"
                });
              } catch (err) {
                console.error(err);
                return;
              }
            } else {
              const needsBg = fmt === "jpg" || fmt === "pdf";
              const canvas = this.stage.getOutputCanvas(this.stage.fresco, 1, needsBg ? "#ffffff" : undefined);
              const mime = fmt === "pdf" ? "image/jpeg" : "image/" + fmt;
              blob = await new Promise(resolve => canvas.toBlob(resolve, mime, 0.92));
              if (fmt === "pdf") {
                try {
                  blob = await (0, m.EB)(this.stage.fresco.width, this.stage.fresco.height, blob);
                } catch (err) {
                  console.error(err);
                  return;
                }
              }
            }
            if (!blob) {
              return;
            }
            const file = new File([blob], name + "." + fmt);
            if ((0, m.zu)()) {
              const handle = await (0, m.D0)(name, fmt, fmt.toUpperCase(), file.type || "image/png");
              if (handle === false) {
                return;
              }
              if (!(await (0, m.IF)(handle, file))) {
                (0, m.gr)(file, name, fmt);
              }
            } else {
              (0, m.gr)(file, name, fmt);
            }
            this.cleanUp();
            document.dispatchEvent(new CustomEvent("notification", {
              detail: (0, i.A)("fileSaved")
            }));
          };
          (0, o.Ay)("save-simple").querySelectorAll("a[data-format]").forEach(btn => {
            btn.addEventListener("click", () => this.download(btn.getAttribute("data-format")));
          });
        }
      }
    }
