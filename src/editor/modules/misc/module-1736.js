window.__editorModules[1736] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor() {
          this.radii = 0;
          this.outlineSize = 0;
          this.outlineColor = "#555555";
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
          return !!t && this.variant === t.variant && this.radii === t.radii && this.content === t.content && this.fillType === t.fillType && this.fillValue === t.fillValue && this.outlineSize === t.outlineSize && this.outlineColor === t.outlineColor && this.shadow === t.shadow && this.shadowBlur === t.shadowBlur && this.shadowColor === t.shadowColor && this.shadowOpacity === t.shadowOpacity && this.shadowDistance === t.shadowDistance && this.shadowDirection === t.shadowDirection;
        }
      }
    }
