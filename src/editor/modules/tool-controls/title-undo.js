window.__editorModules[3012] = function (t, e, s) {
      s.d(e, {
        J: () => d
      });
      var i = s(7775);
      var a = s(7135);
      var n = s(98);
      var o = s(6460);
      var r = s(8342);
      var h = s(3900);
      var l = s(7732);
      var c = s(6279);
      class d {
        constructor(t, e, s = false) {
          this.fresco = t;
          this.undoStack = [];
          this.redoStack = [];
          this.ignore = false;
          this.disable = () => {
            this.ignore = true;
          };
          this.enable = () => {
            this.ignore = false;
          };
          this.dispatchHistoryStatus = () => {
            document.dispatchEvent(new CustomEvent("history-update", {
              detail: {
                atStart: this.undoStack.length <= 1,
                atEnd: this.redoStack.length === 0
              }
            }));
          };
          this.undo = async () => {
            if (!this.ignore && this.undoStack.length !== 0 && this.undoStack[this.undoStack.length - 1].data.type !== "open") {
              try {
                this.ignore = true;
                const {
                  local: t,
                  data: e
                } = this.undoStack.pop();
                const s = await (0, o.Z)(this.fresco, e);
                if (s) {
                  this.redoStack.push({
                    local: t,
                    data: s
                  });
                  document.dispatchEvent(new CustomEvent("viewport-render"));
                  document.dispatchEvent(new CustomEvent("layerlist-update"));
                  document.dispatchEvent(new CustomEvent("layer-select"));
                  (0, a.A)("undo");
                }
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, i.A)("titleUndo")
                }));
                document.dispatchEvent(new CustomEvent("sync-document", {
                  detail: this.fresco
                }));
                this.dispatchHistoryStatus();
              } finally {
                this.ignore = false;
              }
            }
          };
          this.redo = async () => {
            if (!this.ignore && this.redoStack.length !== 0) {
              try {
                this.ignore = true;
                const {
                  local: t,
                  data: e
                } = this.redoStack.pop();
                const s = await (0, r.t)(this.fresco, e);
                if (s) {
                  this.undoStack.push({
                    local: t,
                    data: s
                  });
                  document.dispatchEvent(new CustomEvent("viewport-render"));
                  document.dispatchEvent(new CustomEvent("layerlist-update"));
                  document.dispatchEvent(new CustomEvent("layer-select"));
                  (0, a.A)("redo");
                }
                document.dispatchEvent(new CustomEvent("notification", {
                  detail: (0, i.A)("titleRedo")
                }));
                document.dispatchEvent(new CustomEvent("sync-document", {
                  detail: this.fresco
                }));
              } finally {
                this.ignore = false;
                this.dispatchHistoryStatus();
              }
            }
          };
          this.hasChanges = () => this.undoStack.length > 1 || this.redoStack.length > 0;
          this.getActiveTransaction = () => this.transaction;
          this.redos = t => this.redoStack.filter(e => e.local === t).reverse().map(t => t.data);
          this.undos = t => this.undoStack.filter(e => e.local === t).map(t => t.data);
          this.add = t => {
            if (this.ignore) {
              return;
            }
            if (!(0, h.T)(this.fresco, t)) {
              return;
            }
            this.validateTransaction(t);
            const e = n.Ay.maxHistoryUndos;
            if (!this.transaction && this.undoStack.length >= e) {
              this.undoStack = this.undoStack.slice(this.undoStack.length + 1 - e);
            }
            this.undoStack.push({
              local: !!this.transaction,
              data: t
            });
            this.redoStack = [];
            this.dispatchHistoryStatus();
            if (t.type !== "open") {
              document.dispatchEvent(new CustomEvent("sync-document", {
                detail: this.fresco
              }));
            }
            if (this.undoStack.length < 1 || !this.undoStack[this.undoStack.length - 1].local) {
              document.dispatchEvent(new CustomEvent("layerlist-update"));
            }
          };
          this.validateTransaction = t => {
            if (t.type === "arrange" && t.kind !== "transform" || t.type === "arrangeStack" || t.type === "adjust" || t.type === "glitch" || t.type === "effect" || t.type === "textSettings" || t.type === "frameSettings" || t.type === "shapeSettings") {
              const e = t.type === "arrangeStack" ? t.id : t.layer.id;
              if (this.transaction && this.transaction.id !== t.type + "-" + e) {
                this.commitTransaction(true);
              }
              this.transaction ||= {
                id: t.type + "-" + e,
                type: t.type
              };
            } else {
              this.commitTransaction(true);
            }
          };
          this.abortTransaction = () => {
            if (this.transaction) {
              this.transaction = undefined;
              this.redoStack = this.redoStack.filter(t => !t.local);
              this.undoStack = this.undoStack.filter(t => !t.local);
              this.dispatchHistoryStatus();
            }
          };
          this.commitTransaction = (t = false) => {
            if (!this.transaction) {
              return;
            }
            const e = new Date();
            this.transaction = undefined;
            const s = this.undoStack.filter(t => t.local);
            if (s.length === 0) {
              return;
            }
            this.undoStack = this.undoStack.filter(t => !t.local);
            this.redoStack = [];
            let i = s[0].data;
            let a = false;
            switch (i.type) {
              case "arrange":
                {
                  const t = i.layer;
                  const s = i.action.rect;
                  if (t instanceof l.A && t.wouldApplyTransform()) {
                    const e = (0, c.$z)(t.canvas);
                    const i = (0, c.$z)(t.mask);
                    t.applyTransform(n.Ay.smoothScaling);
                    this.undoStack.push({
                      local: false,
                      data: {
                        type: "arrange",
                        kind: "transform",
                        layer: t,
                        action: {
                          type: "trans",
                          data: e,
                          mask: i,
                          rect: s
                        }
                      }
                    });
                  } else {
                    this.undoStack.push({
                      local: false,
                      data: {
                        type: "arrange",
                        kind: "arrange",
                        layer: t,
                        action: {
                          type: "rect",
                          rect: s
                        }
                      }
                    });
                  }
                  t.syncRequested = e;
                  a = true;
                  break;
                }
              case "arrangeStack":
                {
                  let t = i.stack;
                  let s = i.rects;
                  let o = Array();
                  let r = Array();
                  for (let i = 0; i < t.length; i++) {
                    let a = t[i];
                    let h = s[i];
                    if (a instanceof l.A && a.wouldApplyTransform()) {
                      const t = (0, c.$z)(a.canvas);
                      const e = (0, c.$z)(a.mask);
                      a.applyTransform(n.Ay.smoothScaling);
                      this.undoStack.push({
                        local: false,
                        data: {
                          type: "arrange",
                          kind: "transform",
                          layer: a,
                          action: {
                            type: "trans",
                            data: t,
                            mask: e,
                            rect: h
                          }
                        }
                      });
                    } else {
                      o.push(a);
                      r.push(h);
                    }
                    a.syncRequested = e;
                  }
                  if (o.length > 1) {
                    this.undoStack.push({
                      local: false,
                      data: {
                        type: "arrangeStack",
                        id: i.id,
                        kind: "arrange",
                        stack: o,
                        rects: r
                      }
                    });
                  } else if (o.length === 1) {
                    this.undoStack.push({
                      local: false,
                      data: {
                        type: "arrange",
                        kind: "arrange",
                        layer: o[0],
                        action: {
                          type: "rect",
                          rect: r[0]
                        }
                      }
                    });
                  }
                  a = true;
                  break;
                }
              case "glitch":
              case "effect":
              case "adjust":
                break;
              case "textSettings":
                {
                  const t = i.layer;
                  const s = i.settings;
                  this.undoStack.push({
                    local: false,
                    data: {
                      type: "textSettings",
                      kind: "settings",
                      layer: t,
                      settings: s
                    }
                  });
                  t.syncRequested = e;
                  a = true;
                  break;
                }
              case "frameSettings":
                {
                  const t = i.layer;
                  const s = i.settings;
                  this.undoStack.push({
                    local: false,
                    data: {
                      type: "frameSettings",
                      kind: "settings",
                      layer: t,
                      settings: s
                    }
                  });
                  t.syncRequested = e;
                  a = true;
                  break;
                }
              case "shapeSettings":
                {
                  const t = i.layer;
                  const s = i.settings;
                  this.undoStack.push({
                    local: false,
                    data: {
                      type: "shapeSettings",
                      kind: "settings",
                      layer: t,
                      settings: s
                    }
                  });
                  t.syncRequested = e;
                  a = true;
                  break;
                }
            }
            if (a && !t) {
              document.dispatchEvent(new CustomEvent("sync-document", {
                detail: this.fresco
              }));
              document.dispatchEvent(new CustomEvent("layerlist-update"));
            }
            this.dispatchHistoryStatus();
          };
          if (s) {
            this.ignore = true;
          } else {
            this.add({
              type: "open",
              kind: e
            });
            this.dispatchHistoryStatus();
          }
        }
        async jump(t) {
          if (!this.ignore && t !== 0) {
            try {
              this.ignore = true;
              document.dispatchEvent(new CustomEvent("render-enabled", {
                detail: false
              }));
              if (t < 0) {
                const e = Math.min(this.undoStack.length, Math.abs(t));
                for (let t = 0; t < e; t++) {
                  const {
                    local: t,
                    data: e
                  } = this.undoStack.pop();
                  const s = await (0, o.Z)(this.fresco, e);
                  if (s) {
                    this.redoStack.push({
                      local: t,
                      data: s
                    });
                  }
                }
                if (e > 0) {
                  (0, a.A)("undo");
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: (0, i.A)("titleUndo")
                  }));
                }
              } else {
                const e = Math.min(this.redoStack.length, t);
                for (let t = 0; t < e; t++) {
                  const {
                    local: t,
                    data: e
                  } = this.redoStack.pop();
                  const s = await (0, r.t)(this.fresco, e);
                  if (s) {
                    this.undoStack.push({
                      local: t,
                      data: s
                    });
                  }
                }
                if (e > 0) {
                  (0, a.A)("redo");
                  document.dispatchEvent(new CustomEvent("notification", {
                    detail: (0, i.A)("titleRedo")
                  }));
                }
              }
              document.dispatchEvent(new CustomEvent("render-enabled", {
                detail: true
              }));
              document.dispatchEvent(new CustomEvent("layerlist-update"));
              document.dispatchEvent(new CustomEvent("layer-select"));
              document.dispatchEvent(new CustomEvent("viewport-render"));
              document.dispatchEvent(new CustomEvent("sync-document", {
                detail: this.fresco
              }));
            } finally {
              this.ignore = false;
              document.dispatchEvent(new CustomEvent("render-enabled", {
                detail: true
              }));
              this.dispatchHistoryStatus();
            }
          }
        }
      }
    }
