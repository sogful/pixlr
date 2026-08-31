window.__editorModules[1178] = function (t, e, s) {
      s.d(e, {
        A: () => d
      });
      var i = s(5283);
      var a = s(7775);
      var n = s(9468);
      var o = s(9310);
      var r = s(6050);
      class h {
        constructor() {
          this.points = [];
        }
        add(t) {
          for (var e = 0; e < this.points.length; e++) {
            if (t.x == this.points[e].x && t.y == this.points[e].y) {
              return null;
            }
          }
          this.points.push(t);
          this.sortPoints();
          return this.points.indexOf(t);
        }
        sortPoints() {
          this.points.sort(function (t, e) {
            return t.x - e.x;
          });
        }
        remove(t) {
          var e = null;
          if (t > 0 && t < this.points.length - 1) {
            e = this.points.splice(t, 1)[0];
          }
          return e;
        }
        removeAll() {
          this.points = [];
        }
        getClosestFrom(t, e) {
          if (!this.points.length) {
            return null;
          }
          var s = Infinity;
          var i = null;
          for (var a = 0; a < this.points.length; a++) {
            var n = Math.sqrt(Math.pow(t.x - this.points[a].x, 2) + Math.pow(t.y - this.points[a].y, 2));
            if (n < s) {
              s = n;
              i = a;
            }
          }
          return {
            index: i,
            distance: s * e
          };
        }
        getPoint(t) {
          if (t >= 0 && t < this.points.length) {
            return this.points[t];
          } else {
            return null;
          }
        }
        getNumberOfPoints() {
          return this.points.length;
        }
        getPoints() {
          return this.points;
        }
        updatePoint(t, e) {
          let s = t;
          if (t >= 0 && t < this.points.length) {
            this.points[t].x = e.x;
            this.points[t].y = e.y;
            var i = this.points[t];
            this.sortPoints();
            s = this.points.indexOf(i);
          }
          return s;
        }
      }
      var l = s(466);
      class c {
        constructor(t, e, s, i, a) {
          this.move = t => {
            t.preventDefault();
            t.stopPropagation();
            var e = this.canvas.getBoundingClientRect();
            this.mouseMoved = true;
            this.mouse.x = (t.clientX - e.left) / this.width;
            this.mouse.y = (this.height - (t.clientY - e.top)) / this.height;
            var s = this.pointSet.getClosestFrom(this.mouse, this.width);
            if (s) {
              if (this.pointGrabbedIndex == -1) {
                if (s.distance <= this.controlPointRadius) {
                  this.pointHoveredIndex = s.index;
                } else if (this.pointHoveredIndex != -1) {
                  this.pointHoveredIndex = -1;
                  this.draw();
                }
              } else {
                this.pointGrabbedIndex = this.pointSet.updatePoint(this.pointGrabbedIndex, this.mouse);
                this.pointHoveredIndex = this.pointGrabbedIndex;
              }
              if (this.pointHoveredIndex != -1 || this.pointGrabbedIndex != -1) {
                this.draw();
              }
              if (this.pointGrabbedIndex != -1 && this.callback) {
                this.callback(this, "change");
              }
            }
          };
          this.down = t => {
            t.preventDefault();
            t.stopPropagation();
            this.mouseDown = true;
            this.mouseMoved = false;
            document.addEventListener("mouseup", this.up, false);
            if (this.pointHoveredIndex != -1) {
              this.pointGrabbedIndex = this.pointHoveredIndex;
              this.callback(this, "down");
            }
          };
          this.up = t => {
            t.preventDefault();
            t.stopPropagation();
            const e = this.pointGrabbedIndex != -1;
            const s = this.mouseMoved;
            this.mouseDown = false;
            this.mouseMoved = false;
            this.pointGrabbedIndex = -1;
            document.removeEventListener("mouseup", this.up, false);
            if (e && s) {
              this.draw();
            }
            if (e && this.callback && s) {
              this.callback(this, "up");
            }
          };
          this.dblClick = t => {
            t.preventDefault();
            t.stopPropagation();
            this.canvas.focus();
            if (this.pointHoveredIndex == -1) {
              let t = this.add(new r.A(this.mouse.x, this.mouse.y));
              this.pointHoveredIndex = t;
            } else {
              this.remove(this.pointHoveredIndex);
              this.pointHoveredIndex = -1;
              this.pointGrabbedIndex = -1;
            }
            if (this.callback) {
              this.callback(this, "dblclick");
            }
          };
          this.add = (t, e = true, s = false) => {
            let i = this.pointSet.add(t);
            if (e) {
              this.draw();
            }
            if (s && this.callback) {
              this.callback(this, "change");
            }
            return i;
          };
          this.addAll = t => {
            this.pointSet.removeAll();
            for (var e = 0; e < t.length; e++) {
              this.pointSet.add(t[e]);
            }
            this.draw();
          };
          this.remove = t => {
            this.pointSet.remove(t);
            this.draw();
            if (this.callback) {
              this.callback(this, "change");
            }
          };
          this.removeAll = () => {
            this.pointSet.removeAll();
            this.draw();
            if (this.callback) {
              this.callback(this, "change");
            }
          };
          this.reset = () => {
            this.pointSet.removeAll();
            this.add(new r.A(0, 0), false, false);
            this.add(new r.A(1, 1), false, false);
            this.draw();
          };
          this.draw = () => {
            if (!this.pointSet.points.length) {
              return;
            }
            let t;
            let e = this.width;
            let s = this.height;
            let i = [];
            let a = [];
            let n = this.pointSet.getPoints();
            for (var o = 0; o < n.length; o++) {
              i.push(n[o].x * e);
              a.push(n[o].y * s);
            }
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.ctx.beginPath();
            this.ctx.moveTo(i[0] / this.screenRatio, (s - a[0]) / this.screenRatio);
            let r = new l.A(i, a);
            for (var h = 0; h < Math.ceil(i[0]); h++) {
              t = a[0];
              t = t < 0 ? 0.5 : t > s ? s - 0.5 : t;
              this.ctx.lineTo(h / this.screenRatio, (s - t) / this.screenRatio);
            }
            for (h = Math.ceil(i[0]); h < Math.ceil(i[i.length - 1]); h++) {
              t = r.interpolate(h);
              t = t < 0 ? 0.5 : t > s ? s - 0.5 : t;
              this.ctx.lineTo(h / this.screenRatio, (s - t) / this.screenRatio);
            }
            for (h = Math.ceil(i[i.length - 1]); h < e; h++) {
              t = a[a.length - 1];
              t = t < 0 ? 0.5 : t > s ? s - 0.5 : t;
              this.ctx.lineTo(h / this.screenRatio, (s - t) / this.screenRatio);
            }
            this.ctx.strokeStyle = this.pointHoveredIndex == -1 ? this.idleColor : this.hoverColor;
            this.ctx.lineWidth = this.curveThickness / this.screenRatio;
            this.ctx.stroke();
            this.ctx.closePath();
            for (o = 0; o < i.length; o++) {
              this.ctx.beginPath();
              this.ctx.arc(i[o] / this.screenRatio, (s - a[o]) / this.screenRatio, this.controlPointRadius / this.screenRatio, 0, Math.PI * 2);
              if (this.pointHoveredIndex != -1 && o == this.pointHoveredIndex) {
                this.ctx.fillStyle = this.hoverColor;
              } else {
                this.ctx.fillStyle = this.idleColor;
              }
              this.ctx.fill();
              this.ctx.closePath();
            }
          };
          this.getPoints = () => this.pointSet.getPoints();
          this.cleanUp = () => {
            this.canvas.removeEventListener("mousemove", this.move, true);
            this.canvas.removeEventListener("mousedown", this.down, true);
            this.canvas.removeEventListener("dblclick", this.dblClick, true);
          };
          this.callback = s;
          this.controlPointRadius = 5;
          this.idleColor = i;
          this.hoverColor = a;
          this.mouse = new r.A();
          this.curveThickness = 2;
          this.pointHoveredIndex = -1;
          this.pointGrabbedIndex = -1;
          this.screenRatio = window.devicePixelRatio;
          this.canvas = t;
          this.canvas.width = this.width = e;
          this.canvas.height = this.height = e;
          this.ctx = this.canvas.getContext("2d");
          this.ctx.scale(this.screenRatio, this.screenRatio);
          this.canvas.addEventListener("mousemove", this.move, true);
          this.canvas.addEventListener("mousedown", this.down, true);
          this.canvas.addEventListener("dblclick", this.dblClick, true);
          this.pointSet = new h();
          this.add(new r.A(0, 0), false, false);
          this.add(new r.A(1, 1), false, false);
          this.draw();
        }
      }
      class d extends o.A {
        constructor(t) {
          super(t, (0, a.A)("titleCurves"));
          this.setUp = () => {
            let t = (0, i.Ay)("curves-swatches").getElementsByTagName("div");
            for (var e = 0; e < t.length; e++) {
              t[e].addEventListener("click", function () {
                for (var e = 0; e < t.length; e++) {
                  t[e].classList.remove("active");
                  (0, i.Ay)("curves-graph-" + t[e].getAttribute("data-name")).classList.remove("active");
                }
                this.classList.add("active");
                (0, i.Ay)("curves-graph-" + this.getAttribute("data-name")).classList.add("active");
              }, false);
            }
            let s = (0, i.Ay)("curves-grid").getContext("2d");
            s.lineWidth = 2;
            s.strokeStyle = "rgb(68,68,68)";
            s.strokeRect(1, 1, 254, 254);
            s.lineWidth = 1;
            s.translate(0.5, 0.5);
            s.beginPath();
            s.moveTo(0, 63);
            s.lineTo(255, 63);
            s.moveTo(0, 191);
            s.lineTo(255, 191);
            s.moveTo(63, 0);
            s.lineTo(63, 255);
            s.moveTo(191, 0);
            s.lineTo(191, 255);
            s.closePath();
            s.stroke();
            s.setTransform(1, 0, 0, 1, 0, 0);
            s.beginPath();
            s.lineWidth = 2;
            s.moveTo(0, 128);
            s.lineTo(256, 128);
            s.moveTo(128, 0);
            s.lineTo(128, 256);
            s.closePath();
            s.stroke();
            s.beginPath();
            s.lineWidth = 1.5;
            s.moveTo(0, 256);
            s.lineTo(256, 0);
            s.closePath();
            s.stroke();
            this.all = new c((0, i.Ay)("curves-graph-all"), 256, this.curvesChange, "rgba(100, 100, 100, 1)", "rgba(125, 125, 125, 1)");
            this.red = new c((0, i.Ay)("curves-graph-red"), 256, this.curvesChange, "rgba(209, 72, 14, 1)", "rgba(232, 82, 16, 1)");
            this.green = new c((0, i.Ay)("curves-graph-green"), 256, this.curvesChange, "rgba(146, 156, 31, 1)", "rgba(169, 181, 36, 1)");
            this.blue = new c((0, i.Ay)("curves-graph-blue"), 256, this.curvesChange, "rgba(58, 110, 154, 1)", "rgba(68, 129, 179, 1)");
          };
          this.curvesChange = (t, e) => {
            this.change("curves", new n.A(255, this.all.getPoints(), this.red.getPoints(), this.green.getPoints(), this.blue.getPoints()));
          };
          this.dialog.style.width = "380px";
          this.dialog.style.maxWidth = "380px";
          this.setContent(`\n            <div id="curves-holder">      \n                <div id="curves-swatches" class="swatches">\n                    <div class="active" data-name="all" flow="left" tooltip="${(0, a.A)("main")}"><span class="ic" style="background-color: #ccc"></span></div>\n                    <div data-name="red" flow="left" tooltip="${(0, a.A)("red")}"><span style="background-color: #d1480e;"></span></div>\n                    <div data-name="green" flow="left" tooltip="${(0, a.A)("green")}"><span style="background-color:#929C1F;"></span></div>\n                    <div data-name="blue" flow="left" tooltip="${(0, a.A)("blue")}"><span style="background-color: #3a6e9a"></span></div>\n                </div>\n                <div id="curves-overlay">\n                    <canvas id="curves-grid" unselectable="on" width="256" height="256"></canvas>\n                    <canvas class="curves-graph active" unselectable="on" id="curves-graph-all"></canvas>\n                    <canvas class="curves-graph" unselectable="on" id="curves-graph-red"></canvas>\n                    <canvas class="curves-graph" unselectable="on" id="curves-graph-green"></canvas>\n                    <canvas class="curves-graph" unselectable="on" id="curves-graph-blue"></canvas>\n                </div>\n            </div>\n            <div class="tip top-20"><small>${(0, a.A)("addCurvesControlDesc")}</small></div>\n        `);
          this.setUp();
        }
      }
    }
