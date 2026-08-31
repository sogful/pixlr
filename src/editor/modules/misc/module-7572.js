window.__editorModules[7572] = function (t, e, s) {
      var i = s(3244);
      class a {
        static roundRect(t, e, s, i, a, n = 0) {
          const o = Math.min(i / 2, a / 2, n);
          if (!(t instanceof Path2D)) {
            t.beginPath();
          }
          t.moveTo(e + o, s);
          t.lineTo(e + i - o, s);
          t.quadraticCurveTo(e + i, s, e + i, s + o);
          t.lineTo(e + i, s + a - o);
          t.quadraticCurveTo(e + i, s + a, e + i - o, s + a);
          t.lineTo(e + o, s + a);
          t.quadraticCurveTo(e, s + a, e, s + a - o);
          t.lineTo(e, s + o);
          t.quadraticCurveTo(e, s, e + o, s);
          t.closePath();
        }
        static cutRect(t, e, s, i, a, n = 0) {
          const o = Math.min(i / 2, a / 2, n);
          t.beginPath();
          t.moveTo(e + o, s);
          t.lineTo(e + i - o, s);
          t.lineTo(e + i, s + o);
          t.lineTo(e + i, s + a - o);
          t.lineTo(e + i - o, s + a);
          t.lineTo(e + o, s + a);
          t.lineTo(e, s + a - o);
          t.lineTo(e, s + o);
          t.lineTo(e + o, s);
          t.closePath();
        }
      }
      a.ellipse = (t, e, s) => {
        let i = (s.x - e.x) * 0.5;
        let a = (s.y - e.y) * 0.5;
        let n = e.x + i;
        let o = e.y + a;
        let r = 0.01;
        let h = r;
        let l = Math.PI * 2 - r;
        t.beginPath();
        t.moveTo(n + i * Math.cos(0), o + a * Math.sin(0));
        for (; h < l; h += r) {
          t.lineTo(n + i * Math.cos(h), o + a * Math.sin(h));
        }
        t.closePath();
      };
      a.triangle = (t, e, s) => {
        t.beginPath();
        t.moveTo(e.x, e.y);
        t.lineTo(s.x, s.y);
        t.lineTo(e.x - (s.x - e.x), s.y);
        t.lineTo(e.x, e.y);
        t.closePath();
      };
      a.star = (t, e, s) => {
        let i = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
        t.beginPath();
        t.translate(e.x, e.y);
        t.moveTo(0, 0 - i);
        for (var a = 0; a < 5; a++) {
          t.rotate(Math.PI / 5);
          t.lineTo(0, 0 - i * 0.5);
          t.rotate(Math.PI / 5);
          t.lineTo(0, 0 - i);
        }
        t.translate(-e.x, -e.y);
      };
      a.heart = (t, e, s) => {
        let i = Math.sqrt(Math.pow(s.x - e.x, 2) + Math.pow(s.y - e.y, 2));
        let a = i * 0.8;
        t.save();
        t.translate(e.x, e.y - i / 2);
        t.rotate(Math.PI * 45 / 180);
        t.beginPath();
        t.moveTo(0, 0);
        t.bezierCurveTo(-a, 0, -a, i, 0, i);
        t.lineTo(i, i);
        t.lineTo(i, 0);
        t.bezierCurveTo(i, -a, 0, -a, 0, 0);
        t.closePath();
        t.restore();
      };
      a.rectangle = (t, e, s, i, a) => {
        t.beginPath();
        t.moveTo(e, s);
        t.lineTo(e + i, s);
        t.lineTo(e + i, s + a);
        t.lineTo(e, s + a);
        t.lineTo(e, s);
        t.closePath();
      };
      a.line = (t, e, s) => {
        t.beginPath();
        t.moveTo(e.x, e.y);
        t.lineTo(s.x, s.y);
      };
      a.bezier = (t, e, s, i) => {
        t.beginPath();
        t.moveTo(e.x, e.y);
        t.quadraticCurveTo(i.x, i.y, s.x, s.y);
      };
      a.arc = (t, e, s) => {
        t.beginPath();
        t.arc(e.x, e.y, s, 0, Math.PI * 2);
      };
      a.fill = (t, e, s, n, o) => {
        switch (e) {
          case "rectangle":
            t.fillRect(s.x, s.y, n.x - s.x, n.y - s.y);
            break;
          case "rounded":
            const e = i.A.fromPoints([s, n]);
            a.roundRect(t, e.x, e.y, e.width, e.height, o);
            t.fill();
            break;
          case "ellipse":
            a.ellipse(t, s, n);
            t.fill();
            break;
          case "triangle":
            a.triangle(t, s, n);
            t.fill();
            break;
          case "star":
            a.star(t, s, n);
            t.fill();
            break;
          case "heart":
            a.heart(t, s, n);
            t.fill();
            break;
          case "line":
            a.line(t, s, n);
            t.stroke();
        }
      };
      a.stroke = (t, e, s, n, o) => {
        switch (e) {
          case "rectangle":
            t.strokeRect(s.x, s.y, n.x - s.x, n.y - s.y);
            break;
          case "rounded":
            const e = i.A.fromPoints([s, n]);
            a.roundRect(t, e.x, e.y, e.width, e.height, o);
            t.stroke();
            break;
          case "ellipse":
            a.ellipse(t, s, n);
            t.stroke();
            break;
          case "triangle":
            a.triangle(t, s, n);
            t.stroke();
            break;
          case "star":
            a.star(t, s, n);
            t.stroke();
            break;
          case "heart":
            a.heart(t, s, n);
            t.stroke();
            break;
          case "line":
            a.line(t, s, n);
            t.stroke();
        }
      };
      const n = a;
      s.d(e, ["A", 0, n]);
    }
