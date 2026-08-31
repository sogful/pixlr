window.__editorModules[7516] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor() {
          this.clip = "M 0,0 H 100 V 100 H 0 Z";
          this.clipSize = 0;
          this.outline = false;
          this.outlineColor = "#555555";
          this.outlineSize = 0.3;
          this.shadow = false;
          this.shadowBlur = 0.3;
          this.shadowOpacity = 0.8;
          this.shadowColor = "#000000";
          this.shadowDistance = 0.3;
          this.shadowDirection = 180;
        }
        clone() {
          const t = Object.create(i.prototype);
          return Object.assign(t, this);
        }
        equalTo(t) {
          return !!t && this.clip === t.clip && this.outline === t.outline && this.outlineSize === t.outlineSize && this.outlineColor === t.outlineColor && this.shadow === t.shadow && this.shadowBlur === t.shadowBlur && this.shadowColor === t.shadowColor && this.shadowOpacity === t.shadowOpacity && this.shadowDistance === t.shadowDistance && this.shadowDirection === t.shadowDirection;
        }
      }
    }
