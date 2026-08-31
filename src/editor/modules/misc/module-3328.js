window.__editorModules[3328] = function (t, e, s) {
      class i {
        constructor(t = "circle", e = 40, s = 0.2, i = 1, a = 0, n = 1, o = 2, r = 0.2, h = undefined) {
          this.type = t;
          this.size = e;
          this.softness = s;
          this.opacity = i;
          this.angle = a;
          this.aspect = n;
          this.spikes = o;
          this.distance = r;
          this.source = h;
        }
      }
      i.isEqual = (t, e) => !!t && !!e && t.type === e.type && t.size === e.size && t.softness === e.softness && t.angle === e.angle && t.aspect === e.aspect && t.spikes === e.spikes && t.source === e.source;
      const a = i;
      s.d(e, ["A", 0, a]);
    }
