window.__editorModules[2216] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5699);
      var a = s(749);
      var n = s(4587);
      var o = s(3244);
      var r = s(5259);
      var h = s(6050);
      var l = s(7732);
      var c = s(8464);
      class d extends a.A {
        constructor(t = i.Os(), e, s, u) {
          super(a.A.TYPE_TEXT);
          this.id = t;
          this.prepare = async (t = false) => {
            if (!this.fill || !!t) {
              this.fill = await n.A.fromString(this.textSettings.fillType, this.textSettings.fillValue);
              document.dispatchEvent(new CustomEvent("layer-select"));
            }
            this.setText();
          };
          this.setText = (t = this.text) => {
            this.text = t;
            this.settings.name = t.substring(0, 25) + "..";
            if (this.textSettings.uppercase) {
              this.words = this.text.replace(/[\n]/g, " §§§ ").toUpperCase().split(" ");
            } else {
              this.words = this.text.replace(/[\n]/g, " §§§ ").split(" ");
            }
            this.render();
          };
          this.setTextSize = t => {
            this.textSettings.setSize(t);
            this.render();
          };
          this.setLineSpace = t => {
            this.textSettings.lineSpace = t;
            this.render();
          };
          this.setLetterSpace = t => {
            this.textSettings.letterSpace = t;
            this.render();
          };
          this.setTextFill = (t, e = false) => {
            this.fill = t;
            if (!e) {
              this.textSettings.fillType = t.getType();
              this.textSettings.fillValue = t.getStringValue();
            }
            this.render();
          };
          this.setTextFont = (t, e = false) => {
            this.textSettings.setFont(t);
            this.render(e);
          };
          this.setTextUpperCase = t => {
            this.textSettings.uppercase = t;
            this.setText(this.text);
          };
          this.setTextItalic = t => {
            this.textSettings.italic = t;
            this.setText(this.text);
          };
          this.setTextBold = t => {
            this.textSettings.bold = t;
            this.setText(this.text);
          };
          this.setTextUnderline = t => {
            this.textSettings.underline = t;
            this.setText(this.text);
          };
          this.setTextAlign = t => {
            this.textSettings.align = t;
            this.render();
          };
          this.setCurve = (t, e, s, i, a) => {
            this.textSettings.curve = t;
            this.textSettings.curveType = e;
            this.textSettings.curveAmount = s;
            this.textSettings.curveSpread = i;
            this.textSettings.curveFlip = a;
            this.render();
          };
          this.setWarp = (t, e, s, i, a, n, o) => {
            this.textSettings.warp = t;
            this.textSettings.warpType = e;
            this.textSettings.warpMode = s;
            this.textSettings.warpEdgeSize = i;
            this.textSettings.warpCenterSize = a;
            this.textSettings.warpHorizontalOffset = n;
            this.textSettings.warpVerticalOffset = o;
            this.render();
          };
          this.setBackground = (t, e, s, i, a) => {
            this.textSettings.background = t;
            this.textSettings.backgroundType = e;
            this.textSettings.backgroundColor = s;
            this.textSettings.backgroundPunch = i;
            this.textSettings.backgroundOffset = a;
            this.render();
          };
          this.setOutline = (t, e, s, i, a, n) => {
            this.textSettings.outline = t;
            this.textSettings.outlineSize = e;
            this.textSettings.outlineColor = s;
            this.textSettings.outlinePunch = i;
            this.textSettings.outlineDistance = a;
            this.textSettings.outlineDirection = n;
            this.render();
          };
          this.setShadow = (t, e, s, i, a, n) => {
            this.textSettings.shadow = t;
            this.textSettings.shadowBlur = e;
            this.textSettings.shadowAlpha = s;
            this.textSettings.shadowColor = i;
            this.textSettings.shadowDistance = a;
            this.textSettings.shadowDirection = n;
            this.render();
          };
          this.setTextSettings = t => {
            this.textSettings = t;
            this.render();
          };
          this.setCanvasStyle = () => {
            var t;
            this.ctx.textBaseline = "top";
            this.ctx.font = this.textSettings.getCssFont();
            this.ctx.strokeStyle = this.textSettings.outlineColor;
            this.ctx.lineWidth = Math.round(this.textSettings.outlineSize * this.textSettings.padding);
            this.ctx.lineJoin = "miter";
            this.ctx.miterLimit = 2;
            if ((t = this.fill) !== null && t !== undefined) {
              t.addToCanvasFillStyle(this.ctx);
            }
          };
          this.isPunchOut = false;
          this.isWordBackground = false;
          this.render = (t = false) => {
            this.isPunchOut = this.fill === undefined || this.textSettings.background && this.textSettings.backgroundPunch || this.textSettings.outline && this.textSettings.outlinePunch;
            this.isWordBackground = this.textSettings.background && this.textSettings.backgroundType === c.A.BACKGROUND_WORD;
            let e = this.textSettings.padding;
            this.canvas ||= i.Nw(50, 50);
            this.ctx ||= this.canvas.getContext("2d");
            this.setCanvasStyle();
            const s = new h.A();
            if (this.textSettings.outline && this.textSettings.outlineDistance > 0) {
              const t = (this.textSettings.outlineDirection - 90) * Math.PI / 180;
              s.x = Math.cos(t) * this.textSettings.outlineDistance * e;
              s.y = Math.sin(t) * this.textSettings.outlineDistance * e;
            }
            const a = this.textSettings.getLineSpacing();
            let n = this.textSettings.height + e + a;
            let l = this.textSettings.background ? Math.round(this.textSettings.backgroundOffset * e) : 0;
            if (this.textSettings.background && this.textSettings.backgroundType !== c.A.BACKGROUND_FULL) {
              n += e * 2;
            }
            let d = this.splitTextIntoLines(n);
            this.setCanvasSize(d.length, a);
            this.setCanvasStyle();
            let u = false;
            if (this.textSettings.curve && this.textSettings.curveType === "arc") {
              u = true;
              if (this.textSettings.curveAmount !== 0) {
                const t = this.textSettings.getLetterSpacing();
                let [e, s] = this.calculateArcRadius();
                let i = (e - this.textSettings.height / 2) * Math.PI * 2;
                u = (this.ctx.measureText(" ").width + t) / i * Math.PI * 2 < 0.0005;
              }
              if (this.textSettings.curveAmount <= 0 && !u) {
                d = d.reverse();
              }
            }
            for (let i = 0; i < d.length; i++) {
              if (d[i] === "") {
                continue;
              }
              const t = this.lineWidth(d[i]);
              if (this.textSettings.curve && !u) {
                this.drawCurveLine(d[i], e + i * n, t, l, s);
              } else {
                this.drawLine(d[i], e + i * n, t, l, s, u);
              }
            }
            if (this.textSettings.warp) {
              this.transient = i.oM(this.canvas);
              this.ctx.imageSmoothingEnabled = true;
              this.ctx.imageSmoothingQuality = "high";
              let t = this.textSettings.warpMode;
              let s = this.textSettings.warpType === "angular";
              let a = this.textSettings.background || this.textSettings.outline ? 0 : e;
              let n = this.transient.width;
              let o = this.transient.height - a * 2;
              let r = o + o * this.textSettings.warpEdgeSize;
              let h = o + o * this.textSettings.warpCenterSize;
              let l = n * (0.5 + this.textSettings.warpHorizontalOffset * 0.5);
              let c = n * (1 - (0.5 + this.textSettings.warpHorizontalOffset * 0.5));
              let d = 180 / (l * 2);
              let u = 180 / (c * 2);
              let p = 0;
              let g = o * this.textSettings.warpVerticalOffset;
              if (t === "upper") {
                if (g < 0) {
                  this.rect.height = Math.max(Math.abs(g) + r, h);
                  p -= g;
                } else {
                  this.rect.height = Math.max(g + h, r);
                }
              } else if (t === "lower") {
                g *= -1;
                p = Math.max(r, h - g) - o;
                this.rect.height = g <= 0 ? Math.max(Math.abs(g) + h, r) : Math.max(g + r, h);
              } else if (t === "middle") {
                g *= 0.75;
                p = (Math.max(r, h) - o) * 0.5;
                let t = (r - h) * 0.5;
                let e = Math.max(h, r);
                if (g < 0) {
                  let t = (r - h) * 0.5;
                  let e = Math.max(h, r);
                  if (t + h + Math.abs(g) > e) {
                    this.rect.height = t + h + Math.abs(g);
                    p -= t + g;
                    if (t < 0) {
                      p += t;
                    }
                  } else {
                    this.rect.height = e;
                    if (h > r) {
                      p -= g;
                    }
                  }
                } else if (t + h + g > e) {
                  this.rect.height = t + h + g;
                  if (t < 0) {
                    p += t;
                  }
                } else {
                  this.rect.height = e;
                  if (h > r) {
                    p -= g;
                  }
                }
              }
              this.rect.height += a * 2;
              this.canvas.width = this.rect.width;
              this.canvas.height = this.rect.height;
              while (n--) {
                let e = 0;
                e = n > l ? s ? 1 - (n - l) / c : Math.sin((c - (n - l)) * u * Math.PI / 180) : s ? 1 - (l - n) / l : Math.sin(n * d * Math.PI / 180);
                let i = (1 - e) * r + h * e;
                let m = e * g;
                let y = t === "upper" ? 0 : t === "lower" ? o - i : (o - i) * 0.5;
                this.ctx.drawImage(this.transient, n, a, 1, o, n, a + m + y + p, 1, i);
              }
              this.transient = undefined;
            }
            if (this.textSettings.shadow && !t) {
              this.baked ||= i.Nw(100, 100);
              let t = this.baked.getContext("2d");
              this.bect = new o.A(this.rect.x - e * 4, this.rect.y - e * 4, this.rect.width + e * 8, this.rect.height + e * 8, this.rect.rotation);
              this.baked.width = this.bect.width;
              this.baked.height = this.bect.height;
              if (this.textSettings.shadow) {
                t.save();
                var p = (this.textSettings.shadowDirection - 90) * Math.PI / 180;
                var g = Math.cos(p) * this.textSettings.shadowDistance;
                var m = Math.sin(p) * this.textSettings.shadowDistance;
                t.shadowBlur = this.textSettings.shadowBlur * this.textSettings.padding * 2;
                t.shadowOffsetX = g * this.textSettings.padding * 2;
                t.shadowOffsetY = m * this.textSettings.padding * 2;
                t.shadowColor = r.A.fromHEX(this.textSettings.shadowColor, Math.round(this.textSettings.shadowAlpha * 255)).toRGBA();
                t.drawImage(this.canvas, e * 4, e * 4);
                t.restore();
              }
            } else {
              this.baked = undefined;
              this.bect = undefined;
            }
          };
          this.scaleBect = t => {
            if (this.bect) {
              const e = this.textSettings.padding * 4 * t;
              this.bect = new o.A(this.rect.x - e, this.rect.y - e, this.rect.width + e * 2, this.rect.height + e * 2, this.rect.rotation);
              if (this.bect.width < 1) {
                this.bect.width = 1;
              }
              if (this.bect.height < 1) {
                this.bect.height = 1;
              }
            }
          };
          this.setCanvasSize = (t, e) => {
            if (this.textSettings.background && this.textSettings.backgroundType !== c.A.BACKGROUND_FULL) {
              this.rect.height = (this.textSettings.height + this.textSettings.padding * 3) * t + e * (t - 1) - this.textSettings.padding;
            } else {
              this.rect.height = (this.textSettings.height + this.textSettings.padding) * t + e * (t - 1) + this.textSettings.padding;
            }
            if (this.textSettings.curve) {
              switch (this.textSettings.curveType) {
                case "arc":
                  let t = this.calculateArcHeight();
                  this.rect.height += t;
                  break;
                case "circle":
                  this.rect.height = this.rect.width;
                  break;
                case "half":
                  this.rect.height = Math.round(this.rect.width / 2);
              }
            }
            this.canvas.width = this.rect.width;
            this.canvas.height = this.rect.height;
            if (this.textSettings.background && this.textSettings.backgroundType === c.A.BACKGROUND_FULL) {
              this.ctx.fillStyle = this.textSettings.backgroundColor;
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
            }
          };
          this.splitTextIntoLines = t => {
            let e = "";
            let s = new Array();
            let i = this.textSettings.curve ? this.curveMaxWidth(0, t) : this.rect.width;
            for (var a = 0; a < this.words.length; a++) {
              let n = e !== "" ? e + " " + this.words[a] : this.words[a];
              if (this.words[a] === "§§§" || this.lineWidth(n) > i && n !== this.words[a]) {
                s.push(e);
                e = this.words[a] === "§§§" ? "" : this.words[a];
                if (this.textSettings.curve && (i = this.curveMaxWidth(s.length, t), i < 0)) {
                  return s;
                }
              } else {
                e = n;
              }
            }
            s.push(e);
            return s;
          };
          this.lineWidth = t => {
            let e = 0;
            let s = this.textSettings.getLineSpacing();
            let i = this.textSettings.getLetterSpacing();
            if (this.isWordBackground) {
              let a = t.split(" ").filter(t => t);
              for (let t = 0; t < a.length; t++) {
                e += this.measureTextWidth(a[t], i, true) + this.textSettings.padding * 2;
                e += this.textSettings.padding + s;
              }
              if (!this.textSettings.curve || this.textSettings.curveType !== "circle") {
                e -= this.textSettings.padding + s;
              }
            } else if (this.textSettings.curve && this.textSettings.curveType === "circle") {
              e = this.measureTextWidth(t, i, false);
              e += this.measureTextWidth(" ", i, false);
            } else {
              e = this.measureTextWidth(t, i, true);
              e += this.textSettings.padding * 2;
            }
            return e;
          };
          this.curveMaxWidth = (t, e) => {
            if (this.textSettings.curveType === "arc") {
              if (this.textSettings.curveAmount === 0) {
                return this.rect.width;
              }
              let [t, s] = this.calculateArcRadius();
              if (this.textSettings.curveAmount < 0) {
                s += -e / 4;
              }
              return s;
            }
            if (this.textSettings.curveType === "circle") {
              let s = this.rect.width / 2 - this.textSettings.padding - t * e;
              if (s < e) {
                return -1;
              } else {
                return s * Math.PI * 2;
              }
            }
            {
              let s = this.rect.width / 2 - t * e - (this.textSettings.background ? this.textSettings.padding : 0);
              if (s < e) {
                return -1;
              } else {
                return s * Math.PI;
              }
            }
          };
          this.calculateArcHeight = () => Math.round(this.rect.width / 5 * Math.abs(this.textSettings.curveAmount));
          this.calculateArcRadius = () => {
            let t = this.calculateArcHeight();
            let e = new h.A(0, t);
            let s = new h.A(this.rect.width / 2, 0);
            let i = new h.A(this.rect.width, t);
            let a = (s.y - e.y) / (s.x - e.x);
            let n = (i.y - s.y) / (i.x - s.x);
            let o = ((a * n * (e.y - i.y) + n * (e.x + s.x) - a * (s.x + i.x)) / ((n - a) * 2) - (e.x + s.x) / 2) * -1 / a + (e.y + s.y) / 2;
            return [o, Math.atan2(this.rect.width / 2, o - t) * o * 2];
          };
          this.drawHalfLine = (t, e, s, i, a) => {
            var n;
            const o = this.textSettings.curveFlip;
            const r = this.textSettings.curveSpread;
            const h = this.textSettings.getLineSpacing();
            const l = this.textSettings.getLetterSpacing();
            let d = false;
            let u = this.rect.width / 2 - e;
            let p = u * Math.PI * 2;
            if (this.textSettings.background) {
              if (this.textSettings.backgroundType === c.A.BACKGROUND_LINE) {
                let t = u - this.textSettings.height / 2;
                if (t > 0) {
                  this.ctx.save();
                  this.ctx.strokeStyle = this.textSettings.backgroundColor;
                  this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                  this.ctx.beginPath();
                  this.ctx.ellipse(this.rect.width / 2, o ? 0 : this.rect.width / 2, t, t, 0, Math.PI, 0, o);
                  this.ctx.stroke();
                  this.ctx.restore();
                }
              } else if (this.textSettings.backgroundType === c.A.BACKGROUND_WORD) {
                let e = r ? -p / 4 : -s / 2;
                let a = (p / 2 - s) / t.replace(/\s/g, "").length;
                this.ctx.save();
                this.ctx.strokeStyle = this.textSettings.backgroundColor;
                this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                let n = t.split(" ").filter(t => t);
                for (var g = 0; g < n.length; g++) {
                  let t = this.measureTextWidth(n[g], l, true);
                  if (r) {
                    t += a * n[g].length;
                  }
                  let s = u - this.textSettings.height / 2;
                  if (s < this.textSettings.height) {
                    continue;
                  }
                  let c = (t + this.textSettings.padding * 2) / p * 360 * (Math.PI / 180);
                  let d = e / p * 360 * (Math.PI / 180);
                  let m = o ? 90 : 270;
                  let y = m * (Math.PI / 180) + (o ? -d : d);
                  let v = m * (Math.PI / 180) + (o ? -(c + d) : c + d);
                  this.ctx.beginPath();
                  this.ctx.arc(this.rect.width / 2, o ? 0 : this.rect.width / 2, s, y, v, o);
                  this.ctx.stroke();
                  if (this.textSettings.underline) {
                    const a = Math.ceil(this.textSettings.height * 0.06);
                    const n = Math.round(this.textSettings.padding + l);
                    this.fill.addToCanvasStrokeStyle(this.ctx);
                    this.ctx.lineWidth = a;
                    d = (e + n) / p * 360 * (Math.PI / 180);
                    c = (t - l * 2) / p * 360 * (Math.PI / 180);
                    y = m * (Math.PI / 180) + (o ? -d : d);
                    v = m * (Math.PI / 180) + (o ? -(c + d) : c + d);
                    const r = Math.round((this.textSettings.baseline + a) * 0.5 + i);
                    if (this.isPunchOut) {
                      this.ctx.globalCompositeOperation = "destination-out";
                    }
                    this.ctx.beginPath();
                    this.ctx.arc(this.rect.width / 2, o ? 0 : this.rect.width / 2, s + (o ? r : -r), y, v, o);
                    this.ctx.stroke();
                    this.ctx.globalCompositeOperation = "source-over";
                    this.ctx.strokeStyle = this.textSettings.backgroundColor;
                    this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                  }
                  e += Math.round(t + this.textSettings.padding * 3 + h);
                }
                this.ctx.restore();
                d = true;
              }
            }
            let m = 0;
            if (r) {
              m = (p / 2 - s) / (d ? t.replace(/\s/g, "").length : t.length + 1) / 2;
              s = d ? p / 2 : p / 2 - m * 2;
            }
            if (this.textSettings.underline && !this.isWordBackground) {
              let t = u - this.textSettings.height / 2;
              if (t < this.textSettings.height) {
                const e = Math.ceil(this.textSettings.height * 0.06);
                let a = (s - Math.round(this.textSettings.padding + l) * 2) / (u * Math.PI * 2) * 360 * (Math.PI / 180 / 2);
                let n = o ? 90 : 270;
                let r = n * (Math.PI / 180) - a;
                let h = n * (Math.PI / 180) + a;
                const c = Math.round((this.textSettings.baseline + e) * 0.5 + i);
                this.ctx.save();
                if (this.isPunchOut) {
                  this.ctx.globalCompositeOperation = "destination-out";
                }
                this.fill.addToCanvasStrokeStyle(this.ctx);
                this.ctx.lineWidth = e;
                this.ctx.beginPath();
                if (o) {
                  this.ctx.arc(this.rect.width / 2, 0, t + c, r, h);
                } else {
                  this.ctx.arc(this.rect.width / 2, this.rect.width / 2, t - c, r, h);
                }
                this.ctx.stroke();
                this.ctx.restore();
              }
            }
            this.ctx.save();
            if (t.length > 0) {
              const e = this.rect.width * 0.5;
              const r = o ? 0 : this.rect.width * 0.5;
              if ((n = this.fill) !== null && n !== undefined) {
                n.addToCanvasFillStyle(this.ctx, -e, -r);
              }
              this.ctx.translate(e, r);
              let c = o ? u - this.textSettings.height - this.textSettings.ascent : -u - this.textSettings.ascent;
              this.ctx.textAlign = "center";
              let g = o ? -1 : 1;
              let v = d ? l * 2 + this.textSettings.padding * 2 : this.textSettings.padding * 2 + l * 2;
              this.ctx.rotate((s - v) / p * Math.PI * -g);
              this.ctx.textAlign = "center";
              for (var y = 0; y < t.length; y++) {
                if (d && t[y] === " ") {
                  if (y > 0 && t[y - 1] === " ") {
                    continue;
                  }
                  this.ctx.rotate((this.textSettings.padding * 3 + h + l) / p * (Math.PI * 2) * g);
                  continue;
                }
                let e = this.ctx.measureText(t[y]).width / 2;
                this.ctx.rotate((e + m) / p * Math.PI * 2 * g);
                this.drawChar(t[y], 0, c + i, a);
                this.ctx.rotate((e + l + m) / p * Math.PI * 2 * g);
              }
            }
            this.ctx.restore();
          };
          this.drawCircleLine = (t, e, s, i, a) => {
            var n;
            const o = this.textSettings.curveFlip;
            const r = this.textSettings.curveSpread;
            const h = this.textSettings.getLineSpacing();
            const l = this.textSettings.getLetterSpacing();
            let d = false;
            let u = this.rect.width / 2 - e;
            let p = u * Math.PI * 2;
            if (this.textSettings.background) {
              if (this.textSettings.backgroundType === c.A.BACKGROUND_LINE) {
                let t = u - this.textSettings.height / 2;
                if (t > this.textSettings.height) {
                  this.ctx.save();
                  this.ctx.strokeStyle = this.textSettings.backgroundColor;
                  this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                  this.ctx.beginPath();
                  this.ctx.ellipse(this.rect.width / 2, this.rect.width / 2, t, t, 0, 0, Math.PI * 2);
                  this.ctx.stroke();
                  this.ctx.restore();
                }
              } else if (this.textSettings.backgroundType === c.A.BACKGROUND_WORD) {
                let e = r ? this.textSettings.padding / 2 + h / 2 - p / 2 : this.textSettings.padding / 2 + h / 2 - s / 2;
                let a = (p - s) / t.replace(/\s/g, "").length;
                this.ctx.save();
                this.ctx.strokeStyle = this.textSettings.backgroundColor;
                this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                let n = t.split(" ").filter(t => t);
                for (var g = 0; g < n.length; g++) {
                  let t = this.measureTextWidth(n[g], l, true);
                  if (r) {
                    t += a * n[g].length;
                  }
                  let s = u - this.textSettings.height / 2;
                  if (s < this.textSettings.height) {
                    continue;
                  }
                  let c = (t + this.textSettings.padding * 2) / p * 360 * (Math.PI / 180);
                  let d = e / p * 360 * (Math.PI / 180);
                  let m = o ? 90 : 270;
                  let y = m * (Math.PI / 180) + (o ? -d : d);
                  let v = m * (Math.PI / 180) + (o ? -(c + d) : c + d);
                  this.ctx.beginPath();
                  this.ctx.arc(this.rect.width / 2, this.rect.width / 2, s, y, v, o);
                  this.ctx.stroke();
                  if (this.textSettings.underline) {
                    const a = Math.ceil(this.textSettings.height * 0.06);
                    const n = Math.round(this.textSettings.padding + l);
                    this.fill.addToCanvasStrokeStyle(this.ctx);
                    this.ctx.lineWidth = a;
                    d = (e + n) / p * 360 * (Math.PI / 180);
                    c = (t - l * 2) / p * 360 * (Math.PI / 180);
                    y = m * (Math.PI / 180) + (o ? -d : d);
                    v = m * (Math.PI / 180) + (o ? -(c + d) : c + d);
                    const r = Math.round((this.textSettings.baseline + a) * 0.5 + i);
                    if (this.isPunchOut) {
                      this.ctx.globalCompositeOperation = "destination-out";
                    }
                    this.ctx.beginPath();
                    this.ctx.arc(this.rect.width / 2, this.rect.width / 2, s + (o ? r : -r), y, v, o);
                    this.ctx.stroke();
                    this.ctx.globalCompositeOperation = "source-over";
                    this.ctx.strokeStyle = this.textSettings.backgroundColor;
                    this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                  }
                  e += Math.round(t + this.textSettings.padding * 3 + h);
                }
                this.ctx.restore();
                d = true;
              }
            }
            let m = 0;
            if (r) {
              m = (p - s) / (d ? t.replace(/\s/g, "").length : t.length + 1) / 2;
              s = d ? p : p - m * 2;
            }
            if (this.textSettings.underline && !this.isWordBackground) {
              let t = u - this.textSettings.height / 2;
              if (t > this.textSettings.height) {
                const e = Math.ceil(this.textSettings.height * 0.06);
                let a = (s - Math.round(this.textSettings.padding + l) * 2) / (u * Math.PI * 2) * 360 * (Math.PI / 180 / 2);
                let n = o ? 90 : 270;
                let r = n * (Math.PI / 180) - a;
                let h = n * (Math.PI / 180) + a;
                const c = Math.round((this.textSettings.baseline + e) * 0.5 + i);
                this.ctx.save();
                if (this.isPunchOut) {
                  this.ctx.globalCompositeOperation = "destination-out";
                }
                this.fill.addToCanvasStrokeStyle(this.ctx);
                this.ctx.lineWidth = e;
                this.ctx.beginPath();
                if (o) {
                  this.ctx.arc(this.rect.width / 2, this.rect.width / 2, t + c, r, h);
                } else {
                  this.ctx.arc(this.rect.width / 2, this.rect.width / 2, t - c, r, h);
                }
                this.ctx.stroke();
                this.ctx.restore();
              }
            }
            this.ctx.save();
            if (t.length > 0) {
              const e = this.rect.width * 0.5;
              const r = this.rect.height * 0.5;
              if ((n = this.fill) !== null && n !== undefined) {
                n.addToCanvasFillStyle(this.ctx, -e, -r);
              }
              this.ctx.translate(e, r);
              let c = o ? u - this.textSettings.height - this.textSettings.ascent : -u - this.textSettings.ascent;
              let g = o ? -1 : 1;
              let v = d ? l * 2 + this.textSettings.padding * 3 + h : this.measureTextWidth(" ", l, true);
              this.ctx.rotate((s - v) / p * Math.PI * -g);
              this.ctx.textAlign = "center";
              for (var y = 0; y < t.length; y++) {
                if (d && t[y] === " ") {
                  if (y > 0 && t[y - 1] === " ") {
                    continue;
                  }
                  this.ctx.rotate((this.textSettings.padding * 3 + h + l) / p * (Math.PI * 2) * g);
                  continue;
                }
                let e = this.ctx.measureText(t[y]).width / 2;
                this.ctx.rotate((e + m) / p * Math.PI * 2 * g);
                this.drawChar(t[y], 0, c + i, a);
                this.ctx.rotate((e + l + m) / p * Math.PI * 2 * g);
              }
            }
            this.ctx.restore();
          };
          this.drawArcLine = (t, e, s, i, a) => {
            var n;
            const o = this.textSettings.getLineSpacing();
            const r = this.textSettings.getLetterSpacing();
            let [h, l] = this.calculateArcRadius();
            let d = h - e;
            let u = d * Math.PI * 2;
            let p = this.textSettings.curveAmount < 0;
            let g = false;
            if (this.textSettings.background) {
              if (this.textSettings.backgroundType === c.A.BACKGROUND_WORD) {
                let e = -s / 2;
                this.ctx.save();
                this.ctx.strokeStyle = this.textSettings.backgroundColor;
                this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                let a = t.split(" ").filter(t => t);
                for (var m = 0; m < a.length; m++) {
                  let t = this.measureTextWidth(a[m], r, true);
                  let s = d - this.textSettings.height / 2;
                  if (s < this.textSettings.height) {
                    continue;
                  }
                  let n = (t + this.textSettings.padding * 2) / u * 360 * (Math.PI / 180);
                  let l = e / u * 360 * (Math.PI / 180);
                  let c = p ? this.canvas.height - h : h;
                  let g = p ? 90 : 270;
                  let y = g * (Math.PI / 180) + (p ? -l : l);
                  let v = g * (Math.PI / 180) + (p ? -(n + l) : n + l);
                  this.ctx.beginPath();
                  if (p) {
                    this.ctx.arc(this.rect.width / 2, c, s, v, y);
                  } else {
                    this.ctx.arc(this.rect.width / 2, c, s, y, v);
                  }
                  this.ctx.stroke();
                  if (this.textSettings.underline) {
                    const a = Math.ceil(this.textSettings.height * 0.06);
                    const o = Math.round(this.textSettings.padding + r);
                    this.fill.addToCanvasStrokeStyle(this.ctx);
                    this.ctx.lineWidth = a;
                    l = (e + o) / u * 360 * (Math.PI / 180);
                    n = (t - r * 2) / u * 360 * (Math.PI / 180);
                    y = g * (Math.PI / 180) + (p ? -l : l);
                    v = g * (Math.PI / 180) + (p ? -(n + l) : n + l);
                    const h = Math.round((this.textSettings.baseline + a) * 0.5 + i);
                    this.ctx.beginPath();
                    if (this.isPunchOut) {
                      this.ctx.globalCompositeOperation = "destination-out";
                    }
                    if (p) {
                      this.ctx.arc(this.rect.width / 2, c, s + h, v, y);
                    } else {
                      this.ctx.arc(this.rect.width / 2, c, s - h, y, v);
                    }
                    this.ctx.stroke();
                    this.ctx.globalCompositeOperation = "source-over";
                    this.ctx.strokeStyle = this.textSettings.backgroundColor;
                    this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                  }
                  e += Math.round(t + this.textSettings.padding * 3 + o);
                }
                this.ctx.restore();
                g = true;
              } else if (this.textSettings.backgroundType === c.A.BACKGROUND_LINE) {
                let t = d - this.textSettings.height / 2;
                if (t > this.textSettings.height) {
                  let e = s / (d * Math.PI * 2) * 360 * (Math.PI / 180 / 2);
                  let i = p ? this.canvas.height - h : h;
                  let a = p ? 90 : 270;
                  let n = a * (Math.PI / 180) - e;
                  let o = a * (Math.PI / 180) + e;
                  this.ctx.save();
                  if (this.isPunchOut) {
                    this.ctx.globalCompositeOperation = "destination-out";
                  }
                  this.ctx.strokeStyle = this.textSettings.backgroundColor;
                  this.ctx.lineWidth = this.textSettings.height + this.textSettings.padding * 2;
                  this.ctx.beginPath();
                  this.ctx.arc(this.rect.width / 2, i, t, n, o);
                  this.ctx.stroke();
                  this.ctx.restore();
                }
              }
            }
            if (this.textSettings.underline && !this.isWordBackground) {
              let t = d - this.textSettings.height / 2;
              if (t > this.textSettings.height) {
                const e = Math.ceil(this.textSettings.height * 0.06);
                let a = (s - Math.round(this.textSettings.padding + r) * 2) / (d * Math.PI * 2) * 360 * (Math.PI / 180 / 2);
                let n = p ? this.canvas.height - h : h;
                let o = p ? 90 : 270;
                let l = o * (Math.PI / 180) - a;
                let c = o * (Math.PI / 180) + a;
                const u = Math.round((this.textSettings.baseline + e) * 0.5 + i);
                this.ctx.save();
                if (this.isPunchOut) {
                  this.ctx.globalCompositeOperation = "destination-out";
                }
                this.fill.addToCanvasStrokeStyle(this.ctx);
                this.ctx.lineWidth = e;
                this.ctx.beginPath();
                if (p) {
                  this.ctx.arc(this.rect.width / 2, n, t + u, l, c);
                } else {
                  this.ctx.arc(this.rect.width / 2, n, t - u, l, c);
                }
                this.ctx.stroke();
                this.ctx.restore();
              }
            }
            this.ctx.save();
            if (t.length > 0) {
              let e = p ? -1 : 1;
              let l = p ? d - this.textSettings.height - this.textSettings.ascent : -d - this.textSettings.ascent;
              this.ctx.textAlign = "center";
              const c = this.ctx.canvas.width * 0.5;
              const m = p ? this.canvas.height - h : h;
              this.ctx.translate(c, m);
              if ((n = this.fill) !== null && n !== undefined) {
                n.addToCanvasFillStyle(this.ctx, -c, -m);
              }
              this.ctx.rotate((s - r * 2 - this.textSettings.padding * 2) / u * Math.PI * -e);
              for (var y = 0; y < t.length; y++) {
                if (g && t[y] === " ") {
                  if (y > 0 && t[y - 1] === " ") {
                    continue;
                  }
                  this.ctx.rotate((this.textSettings.padding * 3 + o + r) / u * (Math.PI * 2) * e);
                  continue;
                }
                let s = this.ctx.measureText(t[y]).width;
                if (s / u * Math.PI * 2 > 0.0005) {
                  this.ctx.rotate(s / 2 / u * Math.PI * 2 * e);
                  this.drawChar(t[y], 0, l + i, a);
                  this.ctx.rotate((s / 2 + r) / u * Math.PI * 2 * e);
                } else {
                  this.drawChar(t[y], s / 2, l + i, a);
                  this.ctx.rotate((s + r) / u * Math.PI * 2 * e);
                }
              }
            }
            this.ctx.restore();
          };
          this.drawLine = (t, e, s, i, a, n = false) => {
            var o;
            var r;
            let h = 0;
            let l = 0;
            const d = this.textSettings.getLineSpacing();
            const u = this.textSettings.getLetterSpacing();
            const p = Math.ceil(this.textSettings.height * 0.06);
            const g = Math.round(this.textSettings.padding + u);
            const m = t.split(" ");
            if (this.textSettings.align == "center") {
              h = Math.round((this.rect.width - s) / 2);
            } else if (this.textSettings.align == "right") {
              h = Math.round(this.rect.width - s);
            } else if (this.textSettings.align == "justify" && m.length > 1 && s / this.rect.width > 0.7) {
              l = this.isWordBackground ? (this.rect.width - s) / (t.split(" ").filter(t => t).length - 1) : (this.rect.width - s) / (m.length - 1);
              s = this.rect.width;
            }
            if (this.textSettings.background && this.textSettings.backgroundType === c.A.BACKGROUND_LINE) {
              this.ctx.fillStyle = this.textSettings.backgroundColor;
              this.ctx.fillRect(h, e - this.textSettings.padding, Math.round(s), this.textSettings.height + this.textSettings.padding * 2);
              if ((o = this.fill) !== null && o !== undefined) {
                o.addToCanvasFillStyle(this.ctx);
              }
            }
            if (this.textSettings.underline && !this.isWordBackground) {
              const t = Math.ceil(this.textSettings.height * 0.06);
              const a = Math.round(this.textSettings.padding + u);
              if (this.isPunchOut) {
                this.ctx.globalCompositeOperation = "destination-out";
              }
              this.ctx.fillRect(h + a, e + this.textSettings.baseline + t + i, s - a * 2, t);
              this.ctx.globalCompositeOperation = "source-over";
            }
            if (l !== 0 || this.isWordBackground) {
              let t = this.ctx.measureText(" ").width;
              for (let s = 0; s < m.length; s++) {
                const n = this.measureTextWidth(m[s], u, true);
                if (this.isWordBackground) {
                  if (!m[s]) {
                    continue;
                  }
                  this.ctx.fillStyle = this.textSettings.backgroundColor;
                  this.ctx.fillRect(h, e - this.textSettings.padding, Math.round(n + this.textSettings.padding * 2), this.textSettings.height + this.textSettings.padding * 2);
                  if ((r = this.fill) !== null && r !== undefined) {
                    r.addToCanvasFillStyle(this.ctx);
                  }
                  t = this.textSettings.padding * 3 + d;
                  if (this.textSettings.underline) {
                    if (this.isPunchOut) {
                      this.ctx.globalCompositeOperation = "destination-out";
                    }
                    this.ctx.fillRect(h + g, e + this.textSettings.baseline + p + i, Math.round(n + this.textSettings.padding * 2) - g * 2, p);
                    this.ctx.globalCompositeOperation = "source-over";
                  }
                }
                if (u === 0) {
                  this.drawText(m[s], h + this.textSettings.padding + u, e - this.textSettings.ascent + i, a);
                } else {
                  this.drawSpacedText(m[s], h + this.textSettings.padding + u, e - this.textSettings.ascent + i, u, a);
                }
                h += Math.round(n + t + l);
              }
            } else if (u !== 0 || n) {
              this.drawSpacedText(t, h + this.textSettings.padding + u, e - this.textSettings.ascent + i, u, a);
            } else {
              this.drawText(t, h + this.textSettings.padding + u, e - this.textSettings.ascent + i, a);
            }
          };
          this.drawSpacedText = (t, e, s, i, a) => {
            let n = 0;
            let o = "";
            while (n < t.length) {
              o = t[n++];
              this.drawChar(o, e, s, a);
              e += this.ctx.measureText(o).width + i;
            }
          };
          this.drawText = (t, e, s, i) => {
            if (this.textSettings.outline && i.x === 0 && i.y === 0) {
              this.ctx.strokeText(t, e, s);
            }
            if (this.isPunchOut) {
              this.ctx.globalCompositeOperation = "destination-out";
            }
            this.ctx.fillText(t, e, s);
            this.ctx.globalCompositeOperation = "source-over";
            if (!!this.textSettings.outline && (i.x !== 0 || i.y !== 0)) {
              this.ctx.strokeText(t, e + i.x, s + i.y);
            }
          };
          this.drawChar = (t, e, s, i) => {
            if (this.textSettings.outline && i.x === 0 && i.y === 0) {
              this.ctx.strokeText(t, e, s);
            }
            if (this.isPunchOut) {
              this.ctx.globalCompositeOperation = "destination-out";
            }
            this.ctx.fillText(t, e, s);
            this.ctx.globalCompositeOperation = "source-over";
            if (!!this.textSettings.outline && (i.x !== 0 || i.y !== 0)) {
              this.ctx.strokeText(t, e + i.x, s + i.y);
            }
          };
          this.measureTextWidth = (t, e, s) => {
            if (!t) {
              return 0;
            }
            let i = 0;
            if (e !== 0) {
              for (let e = 0; e < t.length; e++) {
                i += this.ctx.measureText(t[e]).width;
              }
              i += t.length * e;
            } else {
              i = this.ctx.measureText(t).width;
            }
            if (s) {
              i += e;
            }
            return i;
          };
          this.position = (t, e) => {
            if (this.rect) {
              if (t !== undefined) {
                this.rect.x = t;
              }
              if (e !== undefined) {
                this.rect.y = e;
              }
              if (this.bect) {
                this.bect.x = this.rect.x - this.textSettings.padding * 4;
                this.bect.y = this.rect.y - this.textSettings.padding * 4;
              }
            }
          };
          this.scale = (t, e) => {
            this.textSettings.setSize(Math.round(this.textSettings.size * e));
            this.rect.x = Math.round(this.rect.x * t);
            this.rect.y = Math.round(this.rect.y * e);
            this.rect.width = Math.round(this.rect.width * t);
            this.render();
          };
          this.calculate = (t, e) => {
            this.rect.x = Math.round(t.x);
            this.rect.width = Math.round(e.x - t.x);
            if (this.rect.width < 20) {
              this.rect.width = 20;
            }
            this.render();
          };
          this.setWidth = t => {
            this.rect.width = Math.round(t);
            if (this.rect.width < 20) {
              this.rect.width = 20;
            }
            this.render();
          };
          this.getHeight = () => this.textSettings.height;
          this.setHeightScale = t => {
            let e = Math.round(this.textSettings.size * t);
            this.setTextSize(e > 1000 ? 1000 : e);
          };
          this.rotate = t => {
            this.rect.rotation += t ? -90 : 90;
          };
          this.rasterize = () => {
            let t = this.baked ? this.baked : this.canvas;
            let e = this.bect ? this.bect.clone() : this.rect.clone();
            const s = new l.A(i.Os(), this.settings.name, t, e, this.settings.locked);
            s.settings = Object.assign({}, this.settings);
            s.applyTransform();
            return s;
          };
          this.clone = (t = false) => {
            let e = new d(t ? this.id : i.Os(), this.text, this.rect.clone(), this.textSettings.clone());
            e.settings = Object.assign({}, this.settings);
            e.rect = this.rect.clone();
            e.canvas = i.oM(this.canvas);
            e.prepare();
            return e;
          };
          this.textSettings = u;
          this.text = e;
          this.rect = s;
        }
        drawCurveLine(t, e, s, i, a) {
          switch (this.textSettings.curveType) {
            case "arc":
              this.drawArcLine(t, e, s, i, a);
              break;
            case "circle":
              this.drawCircleLine(t, e, s, i, a);
              break;
            case "half":
              this.drawHalfLine(t, e, s, i, a);
          }
        }
      }
    }
