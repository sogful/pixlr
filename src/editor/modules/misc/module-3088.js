window.__editorModules[3088] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        static rotation(t) {
          return new Promise((e, s) => {
            const i = new FileReader();
            i.onload = t => {
              if (!t.target) {
                e(0);
              }
              const s = t.target;
              const i = new DataView(s.result);
              if (i.getUint16(0, false) !== 65496) {
                e(0);
              }
              const a = i.byteLength;
              let n = 2;
              while (n < a) {
                if (i.getUint16(n + 2, false) <= 8) {
                  e(0);
                }
                const t = i.getUint16(n, false);
                n += 2;
                if (t === 65505) {
                  if (i.getUint32(n += 2, false) !== 1165519206) {
                    e(0);
                  }
                  const t = i.getUint16(n += 6, false) === 18761;
                  n += i.getUint32(n + 4, t);
                  const s = i.getUint16(n, t);
                  n += 2;
                  for (let a = 0; a < s; a++) {
                    if (i.getUint16(n + a * 12, t) === 274) {
                      switch (i.getUint16(n + a * 12 + 8, t)) {
                        case 8:
                          e(-90);
                          break;
                        case 6:
                          e(90);
                          break;
                        case 3:
                          e(180);
                          break;
                        default:
                          e(0);
                      }
                      return;
                    }
                  }
                } else {
                  if (~t & 65280) {
                    break;
                  }
                  n += i.getUint16(n, false);
                }
              }
              e(0);
            };
            i.readAsArrayBuffer(t);
          });
        }
      }
    }
