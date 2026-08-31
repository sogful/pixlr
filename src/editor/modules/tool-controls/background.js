window.__editorModules[3900] = function (t, e, s) {
      s.d(e, {
        T: () => h
      });
      var i = s(7135);
      var a = s(2216);
      var n = s(4932);
      var o = s(9632);
      var r = s(5887);
      function h(t, e) {
        const s = new Date();
        switch (e.type) {
          case "open":
            (0, i.A)("open", e.kind);
            return true;
          case "addLayer":
            (0, i.A)("layer-add", e.layer.type);
            return true;
          case "bitmapSwitch":
          case "bitmapChange":
            (0, i.A)(e.kind);
            e.layer.syncRequested = s;
            return true;
          case "flipLayer":
            (0, i.A)("layer-flip");
            e.layer.syncRequested = s;
            return true;
          case "rotateLayer":
            (0, i.A)("layer-rotate");
            e.layer.syncRequested = s;
            return true;
          case "frameContent":
            (0, i.A)("frame-content");
            e.layer.syncRequested = s;
            return true;
          case "frameSettings":
            return !e.layer.frameSettings.equalTo(e.settings) && ((0, i.A)("frame-settings"), e.layer.syncRequested = s, true);
          case "order":
            (0, i.A)("layer-order");
            return true;
          case "layerSettings":
            (0, i.A)("layer-settings", e.kind);
            e.layer.syncRequested = s;
            return true;
          case "deleteLayer":
            (0, i.A)(e.layer.type + "-delete");
            return true;
          case "textChange":
            return e.layer.text !== e.text && ((0, i.A)("text-change"), e.layer.syncRequested = s, true);
          case "textSettings":
            return !e.layer.textSettings.equalTo(e.settings) && ((0, i.A)("text-settings"), e.layer.syncRequested = s, true);
          case "shapeSettings":
            return !e.layer.shapeSettings.equalTo(e.settings) && ((0, i.A)("shape-settings"), e.layer.syncRequested = s, true);
          case "groupSettings":
            return !e.layer.groupSettings.equalTo(e.settings) && ((0, i.A)("group-settings"), e.layer.syncRequested = s, true);
          case "mask":
            (0, i.A)("mask");
            e.layer.syncRequested = s;
            return true;
          case "crop":
            (0, i.A)("crop");
            t.layers.forEach(t => t.syncRequested = s);
            return true;
          case "background":
            (0, i.A)("background");
            return true;
          case "maskInvert":
            (0, i.A)("mask-invert");
            e.layer.syncRequested = s;
            return true;
          case "arrange":
            switch (e.action.type) {
              case "rect":
                if (e.layer.rect.equalTo(e.action.rect)) {
                  return false;
                }
                break;
              case "trim":
                if (e.layer.trim.equalTo(e.action.rect)) {
                  return false;
                }
            }
            (0, i.A)("arrange");
            return true;
          case "arrangeStack":
            {
              let t = false;
              for (let s = 0; s < e.stack.length; s++) {
                if (e.stack[s].rect && !e.stack[s].rect.equalTo(e.rects[s])) {
                  t = true;
                }
              }
              (0, i.A)("arrangeStack");
              return t;
            }
          case "link":
            (0, i.A)("link");
            for (let t = 0; t < e.stack.length; t++) {
              e.stack[t].layer.syncRequested = s;
            }
            return true;
          case "pageSize":
            (0, i.A)("page-size");
            t.layers.forEach(t => t.syncRequested = s);
            return true;
          case "pageResize":
            (0, i.A)("page-resize");
            e.layers.forEach(t => t.syncRequested = s);
            return true;
          case "flip":
            (0, i.A)("flip", e.vertical ? "vertical" : "horizontal");
            t.layers.forEach(t => t.syncRequested = s);
            return true;
          case "rotate":
            (0, i.A)("rotate", e.counterClock ? "left" : "right");
            t.layers.forEach(t => t.syncRequested = s);
            return true;
          case "merge":
            (0, i.A)("merge-layers", e.kind);
            return true;
          case "adjust":
            (0, i.A)("adjust", e.kind);
            return true;
          case "effect":
            (0, i.A)("effect", e.name);
            return true;
          case "glitch":
            (0, i.A)("glitch", e.kind);
            return true;
          case "selectionChange":
          case "selectionAndBitmapSwitch":
            (0, i.A)("selection", e.kind);
            return true;
          case "rasterize":
            (0, i.A)("rasterize", e.layer.type);
            return e.layer instanceof r.A || e.layer instanceof a.A || e.layer instanceof n.A || e.layer instanceof o.A || (console.warn("Tried to rasterize an unknown layer type"), false);
          case "convertSelectionToMask":
            (0, i.A)("selection-to-mask");
            e.layer.syncRequested = s;
            return true;
          case "convertMaskToSelection":
            (0, i.A)("mask-to-selection");
            e.layer.syncRequested = s;
            return true;
          case "applyMask":
            (0, i.A)("apply-mask");
            e.layer.syncRequested = s;
            return true;
          default:
            return false;
        }
      }
    }
