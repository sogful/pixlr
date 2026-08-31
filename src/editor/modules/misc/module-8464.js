window.__editorModules[8464] = function (t, e, s) {
      var i = s(5283);
      var a = s(5699);
      class n {
        constructor(t, e, s = true) {
          this.lineSpace = 0;
          this.letterSpace = 0;
          this.bold = false;
          this.italic = false;
          this.uppercase = false;
          this.underline = false;
          this.align = "center";
          this.curve = false;
          this.curveAmount = 0;
          this.curveType = "arc";
          this.curveFlip = false;
          this.curveSpread = false;
          this.warp = false;
          this.warpEdgeSize = 0;
          this.warpCenterSize = 0;
          this.warpHorizontalOffset = 0;
          this.warpVerticalOffset = 0;
          this.warpType = n.WARP_CIRCULAR;
          this.warpMode = n.WARP_UPPER;
          this.background = false;
          this.backgroundOffset = 0;
          this.backgroundPunch = false;
          this.backgroundColor = "#555555";
          this.backgroundType = n.BACKGROUND_FULL;
          this.outline = false;
          this.outlinePunch = false;
          this.outlineColor = "#555555";
          this.outlineSize = 0.3;
          this.outlineDistance = 0;
          this.outlineDirection = 305;
          this.shadow = false;
          this.shadowBlur = 0.3;
          this.shadowColor = "#000000";
          this.shadowAlpha = 0.6;
          this.shadowDistance = 0.3;
          this.shadowDirection = 160;
          this.font = t;
          this.size = e;
          if (s) {
            this.measureText();
          }
        }
        setSize(t) {
          this.size = t;
          this.measureText();
        }
        setFont(t) {
          this.font = t;
          this.measureText();
        }
        measureText() {
          if (this.size < 1) {
            return;
          }
          var t = document.createElement("canvas");
          t.width = this.size * 20;
          t.height = Math.round(this.size * 2);
          const e = t.getContext("2d", {
            willReadFrequently: true
          });
          e.textBaseline = "top";
          e.fillStyle = "white";
          e.font = this.getCssFont();
          e.fillText("SfTgMjkHpqLRnliIFIABCDEFGIJKNOPQSUVXYZabcdeghmnorstuvxyz", 0, Math.round(this.size * 0.5));
          const s = a.zR(e.getImageData(0, 0, t.width, t.height));
          if (s) {
            this.ascent = s.y - Math.round(this.size * 0.5);
            this.height = s.height;
            e.clearRect(0, 0, t.width, t.height);
            e.fillText("SMOP", 0, Math.round(this.size * 0.5));
            const i = a.zR(e.getImageData(0, 0, t.width, t.height));
            this.baseline = i.height;
          }
          if (this.height <= 0) {
            this.measureTextFallback();
          }
          this.padding = Math.round(this.height * 0.2);
        }
        measureTextFallback() {
          var t = document.createElement("span");
          t.innerHTML = "ABCDEFGHIJKLMNOPQRSTUVXYZabcdefghijklmnopqrstuvxyz";
          t.style.fontFamily = this.font;
          t.style.fontSize = this.size + "px";
          var e = document.createElement("div");
          e.style.display = "inline-block";
          e.style.width = "1px";
          e.style.height = "0px";
          var s = document.createElement("div");
          s.appendChild(t);
          s.appendChild(e);
          (0, i.Ay)("workspace").appendChild(s);
          try {
            e.style.verticalAlign = "baseline";
            this.ascent = e.offsetTop - t.offsetTop + 1;
            e.style.verticalAlign = "bottom";
            this.height = e.offsetTop - t.offsetTop + 1;
            this.baseline = this.height;
          } finally {
            s.remove();
          }
        }
        getLineSpacing() {
          return Math.ceil(this.height * Number(this.lineSpace ?? 0));
        }
        getLetterSpacing() {
          return Math.ceil(this.height / 2 * Number(this.letterSpace ?? 0));
        }
        getCssFont(t = this.size) {
          return (this.italic ? "italic " : "") + (this.bold ? "bold " : "") + t + "px " + this.font;
        }
        clone() {
          const t = Object.create(n.prototype);
          return Object.assign(t, this);
        }
        equalTo(t) {
          return !!t && this.font === t.font && this.size === t.size && this.lineSpace === t.lineSpace && this.letterSpace === t.letterSpace && this.bold === t.bold && this.italic === t.italic && this.underline === t.underline && this.uppercase === t.uppercase && this.fillType === t.fillType && this.fillValue === t.fillValue && this.align === t.align && this.curve === t.curve && this.curveAmount === t.curveAmount && this.curveType === t.curveType && this.curveSpread === t.curveSpread && this.curveFlip === t.curveFlip && this.warp === t.curve && this.warpMode === t.warpMode && this.warpType === t.warpType && this.warpEdgeSize === t.warpEdgeSize && this.warpCenterSize === t.warpCenterSize && this.warpHorizontalOffset === t.warpHorizontalOffset && this.warpVerticalOffset === t.warpVerticalOffset && this.background === t.background && this.backgroundPunch === t.backgroundPunch && this.backgroundColor === t.backgroundColor && this.backgroundType === t.backgroundType && this.outline === t.outline && this.outlinePunch === t.outlinePunch && this.outlineSize === t.outlineSize && this.outlineColor === t.outlineColor && this.outlineDistance === t.outlineDistance && this.outlineDirection === t.outlineDirection && this.shadow === t.shadow && this.shadowBlur === t.shadowBlur && this.shadowColor === t.shadowColor && this.shadowAlpha === t.shadowAlpha && this.shadowDistance === t.shadowDistance && this.shadowDirection === t.shadowDirection;
        }
      }
      n.BACKGROUND_FULL = "full";
      n.BACKGROUND_LINE = "line";
      n.BACKGROUND_WORD = "word";
      n.WARP_CIRCULAR = "circular";
      n.WARP_ANGULAR = "angular";
      n.WARP_UPPER = "upper";
      n.WARP_MIDDLE = "middle";
      n.WARP_LOWER = "lower";
      const o = n;
      s.d(e, ["A", 0, o]);
    }
