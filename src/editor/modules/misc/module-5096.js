window.__editorModules[5096] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(749);
      var a = s(3244);
      var n = s(5699);
      var o = s(4932);
      var r = s(7793);
      var h = s(3747);
      class l {
        constructor(t, e, s, r, h, c, d) {
          this.saveMethod = "normal";
          this.layerAddedCounterForUserEase = 0;
          this.savedTimesCounterForUserEase = 0;
          this.getSelected = () => this.selected.length !== 1 ? undefined : this.selected[0];
          this.getSelectedStack = () => this.selected;
          this.getSelectedLinkedStack = () => this.selectedLinked;
          this.updateSelectedLinkedStack = () => {
            let t = new Set();
            for (let s of this.selected) {
              if (s.hasLink()) {
                t.add(s.settings.link);
              }
            }
            let e = this.layers.filter(e => t.has(e.settings.link));
            this.selectedLinked = [...new Set([...this.selected, ...e])];
          };
          this.getNotSelectedStack = (t = this.selected) => this.layers.filter(e => !t.includes(e));
          this.getStackRect = (t = this.selected) => {
            let e = new Array();
            for (let s of t) {
              e.push(s.rect ? s.rect.clone() : undefined);
            }
            return e;
          };
          this.getStackBounds = (t = this.selected) => {
            let e;
            if (t.length === 1) {
              e = t[0].editMode && t[0] instanceof o.A ? t[0].trim.clone() : t[0].rect ? t[0].rect.clone() : undefined;
            } else {
              for (let s of t) {
                if (s.rect) {
                  e = a.A.merge(e, s.rect.getRotatedBounds());
                }
              }
            }
            return e;
          };
          this.getStackId = (t = this.selected) => {
            let e = new Array();
            t.forEach(t => {
              e.push(t.id);
            });
            return e;
          };
          this.getStackHashId = (t = this.selected) => {
            if (t.length === 0) {
              return;
            }
            if (t.length === 1) {
              return t[0].id;
            }
            let e = this.getStackId(t).join();
            let s = 0;
            for (let i = 0; i < e.length; i++) {
              s = (s << 5) - s + e.charCodeAt(i);
              s &= s;
            }
            return s.toString();
          };
          this.getLayerById = t => {
            let e;
            this.layers.forEach(s => {
              if (s.id === t) {
                e = s;
              }
            });
            return e;
          };
          this.hasSelected = () => this.selected.length > 0;
          this.isSelectedStack = () => this.selected.length > 1;
          this.isSelectedLinkedStack = () => this.selectedLinked.length > 1;
          this.isSelectedType = t => this.selected.length === 1 && this.selected[0].type === t;
          this.isSelectedImageWithCanvas = () => (!this.selected || this.selected.length === 1) && this.selected[0].type === i.A.TYPE_IMAGE && !!this.selected[0].canvas;
          this.isSelectedShaderbleWithCanvas = () => (!this.selected || this.selected.length === 1) && (this.selected[0].type === i.A.TYPE_IMAGE || this.selected[0].type === i.A.TYPE_FRAME || this.selected[0].type === i.A.TYPE_ELEMENT) && !!this.selected[0].canvas;
          this.isSelectedById = t => {
            if (t) {
              return this.selected.findIndex(e => e.id === t) !== -1;
            }
          };
          this.isSelectedLinkedById = t => {
            if (t) {
              return this.selectedLinked.findIndex(e => e.id === t) !== -1;
            }
          };
          this.selectLayerById = (t, e = false, s = false) => {
            if (this.selected[0]) {
              this.selected[0].editMode = false;
            }
            let a = false;
            if (t) {
              if (e) {
                if (this.isSelectedById(t)) {
                  if (s) {
                    this.unselectLayerById(t);
                    a = true;
                  }
                } else {
                  this.selected.push(this.getLayerById(t));
                  a = true;
                }
              } else if (!this.isSelectedById(t) || this.selected.length !== 1) {
                this.selected = [this.getLayerById(t)];
                a = true;
              }
            } else if (this.layers.length !== 0 && this.layers[0].settings.locked && this.layers[0].type === i.A.TYPE_IMAGE) {
              if (this.selected.length !== 0 && (this.selected.length !== 1 || this.selected[0] !== this.layers[0])) {
                this.selected = [this.layers[0]];
                a = true;
              }
            } else if (this.selected.length !== 0) {
              this.selected = [];
              a = true;
            }
            if (this.selected.length > 1) {
              this.selected.sort((t, e) => this.layers.indexOf(t) - this.layers.indexOf(e));
            }
            this.updateSelectedLinkedStack();
            return a;
          };
          this.unselectLayerById = t => {
            const e = this.selected.findIndex(e => e.id === t);
            if (e !== -1) {
              this.selected.splice(e, 1);
              return true;
            } else {
              this.updateSelectedLinkedStack();
              return false;
            }
          };
          this.unselectLayers = () => {
            this.selected = [];
            this.selectedLinked = [];
          };
          this.selectLayerStack = (t, e = false) => {
            this.selected = t;
            this.updateSelectedLinkedStack();
          };
          this.deleteLayerById = t => {
            const e = this.layers.findIndex(e => e.id === t);
            let s;
            if (e !== -1) {
              s = this.layers[e];
              this.layers.splice(e, 1);
              this.unselectLayerById(t);
            }
            if (!this.hasSelected() && this.layers.length > 0) {
              this.selected = [this.layers[e > 0 ? e - 1 : 0]];
            }
            this.updateSelectedLinkedStack();
            return s;
          };
          this.clone = t => {
            const e = (0, n.Q5)(this.name);
            const s = new l(t || n.Os(), e, this.width, this.height, this.color, this.templateMeta, this.source);
            s.layers = this.layers.map(t => t.clone());
            return s;
          };
          this.cleanUp = () => {
            if (this.saveMethod instanceof MessagePort) {
              this.saveMethod.postMessage("close");
              this.saveMethod.close();
            }
          };
          this.id = t;
          this.name = e;
          this.width = s;
          this.height = r;
          this.color = h;
          this.templateMeta = c;
          this.source = d;
          this.layers = [];
          this.selected = [];
          this.selectedLinked = [];
        }
        addScratch() {
          this.scratch ||= new r.A();
          return this.scratch;
        }
        removeScratch() {
          this.scratch = undefined;
        }
        hasScratch() {
          return !!this.scratch && this.scratch.renderMode !== "none";
        }
        addSelection() {
          this.selection ||= new h.A(this.width, this.height);
        }
        clearSelection() {
          if (this.selection) {
            this.selection.clear();
          }
        }
        removeSelection() {
          if (this.selection) {
            this.selection.cleanUp();
            this.selection = undefined;
          }
        }
        hasSelection() {
          return this.selection && this.selection.bounds && this.selection.outline && this.selection.outline.length > 0;
        }
        hasLayers() {
          return this.layers.length > 0;
        }
        hasLayer(t) {
          return this.layerNr(t.id) >= 0;
        }
        numLayers() {
          return this.layers.length;
        }
        numSelected() {
          return this.selected.length;
        }
        isSelectedLinked() {
          return this.selected.filter(t => t.hasLink()).length === this.selected.length;
        }
        nextAddedLayerNumber() {
          if (this.numLayers() > this.layerAddedCounterForUserEase) {
            this.layerAddedCounterForUserEase = this.numLayers();
          }
          return (this.layerAddedCounterForUserEase + 1).toString();
        }
        lockedBackground() {
          return this.layers.length > 0 && this.layers[0].settings.locked && this.layers[0].type === i.A.TYPE_IMAGE;
        }
        selectedLayerNr() {
          if (this.selected.length === 0) {
            return -1;
          }
          if (this.selected.length === 1) {
            return this.layerNr(this.selected[0].id);
          }
          let t = 0;
          this.selected.forEach(e => {
            t = Math.max(t, this.layerNr(e.id));
          });
          return t;
        }
        layerNr(t) {
          return this.layers.findIndex(e => e.id === t);
        }
        changeLayerOrder(t, e) {
          this.layers.splice(e, 0, this.layers.splice(t, 1)[0]);
        }
        rotate(t) {
          let e = this.width;
          this.width = this.height;
          this.height = e;
          for (let s = 0; s < this.layers.length; s++) {
            this.layers[s].rotate(t);
            this.layers[s].render();
          }
        }
        flip(t) {
          for (let e = 0; e < this.layers.length; e++) {
            if (this.layers[e].type === i.A.TYPE_IMAGE) {
              this.layers[e].flip(t);
              this.layers[e].render();
            }
          }
        }
        straighten(t, e, s) {
          if (this.lockedBackground()) {
            let i = this.layers[0];
            i.rect.rotation = t;
            i.rect.x = -(i.rect.width - e) / 2;
            i.rect.y = -(i.rect.height - s) / 2;
          }
          this.width = e;
          this.height = s;
        }
        crop(t) {
          this.width = t.width;
          this.height = t.height;
          for (let e = 0; e < this.layers.length; e++) {
            if (this.layers[e].rect) {
              this.layers[e].rect.x -= t.x;
              this.layers[e].rect.y -= t.y;
              this.layers[e].render();
            }
          }
          if (this.selection) {
            this.selection.size(this.width, this.height);
          }
        }
        setSize(t, e) {
          this.width = t;
          this.height = e;
        }
        resize(t, e, s) {
          let i = t / this.width;
          let a = e / this.height;
          this.width = t;
          this.height = e;
          for (let n = 0; n < this.layers.length; n++) {
            this.layers[n].scale(i, a, s);
          }
          if (this.selection) {
            this.selection.resize(this.width, this.height);
          }
        }
        size(t, e, s, i) {
          let a = s ? t : t - this.width;
          let n = s ? e : e - this.height;
          this.width = s ? this.width + t : t;
          this.height = s ? this.height + e : e;
          if (i != "TL") {
            if (i == "CL" || i == "BL") {
              a = 0;
            }
            if (i == "TC" || i == "CC" || i == "BC") {
              a = Math.round(a / 2);
            }
            if (i == "TC" || i == "TR") {
              n = 0;
            }
            if (i == "CL" || i == "CC" || i == "CR") {
              n = Math.round(n / 2);
            }
            for (let t = 0; t < this.layers.length; t++) {
              if (this.layers[t].rect) {
                this.layers[t].rect.x += a;
                this.layers[t].rect.y += n;
                this.layers[t].render();
              }
            }
          }
          if (this.selection) {
            this.selection.size(this.width, this.height);
          }
        }
        addLayer(t) {
          this.layerAddedCounterForUserEase++;
          let e = this.selectedLayerNr();
          if (e > -1) {
            this.layers.splice(e + 1, 0, t);
          } else {
            this.layers.push(t);
          }
          this.selected = [t];
          this.updateSelectedLinkedStack();
          return t;
        }
        replaceLayer(t) {
          const e = this.layers.findIndex(e => e.id === t.id);
          this.layers[e] = t;
          const s = this.selected.findIndex(e => e.id === t.id);
          if (s !== -1) {
            this.selected[s] = t;
          }
          this.updateSelectedLinkedStack();
        }
      }
    }
