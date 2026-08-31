window.__editorModules[6324] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor(t, e, s, i = 1) {
          this.highlight = t;
          this.midtone = e;
          this.shadow = s;
          this.amount = i;
        }
        static fillPaletteMap(t, e) {
          if (t.midtone) {
            for (let s = 0; s < 128; s++) {
              let i = s / 127;
              e.data[s * 4] = Math.round(t.midtone.r * i + t.shadow.r * (1 - i));
              e.data[s * 4 + 1] = Math.round(t.midtone.g * i + t.shadow.g * (1 - i));
              e.data[s * 4 + 2] = Math.round(t.midtone.b * i + t.shadow.b * (1 - i));
            }
            for (let s = 128; s < 256; s++) {
              let i = (s - 127) / 128;
              e.data[s * 4] = Math.round(t.highlight.r * i + t.midtone.r * (1 - i));
              e.data[s * 4 + 1] = Math.round(t.highlight.g * i + t.midtone.g * (1 - i));
              e.data[s * 4 + 2] = Math.round(t.highlight.b * i + t.midtone.b * (1 - i));
            }
          } else {
            for (let s = 0; s < 256; ++s) {
              let i = s / 255;
              e.data[s * 4] = Math.round(t.highlight.r * i + t.shadow.r * (1 - i));
              e.data[s * 4 + 1] = Math.round(t.highlight.g * i + t.shadow.g * (1 - i));
              e.data[s * 4 + 2] = Math.round(t.highlight.b * i + t.shadow.b * (1 - i));
            }
          }
        }
      }
    }
