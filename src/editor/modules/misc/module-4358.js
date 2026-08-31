window.__editorModules[4358] = function (t, e, s) {
      s.d(e, {
        A: () => i
      });
      class i {
        constructor() {
          this.color = "";
          this.collapsed = false;
          this.numberOfMembers = 0;
        }
        clone() {
          const t = Object.create(i.prototype);
          return Object.assign(t, this);
        }
        equalTo(t) {
          return !!t && this.collapsed === t.collapsed && this.numberOfMembers === t.numberOfMembers;
        }
      }
    }
