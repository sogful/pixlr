window.__editorModules[6957] = function (t, e, s) {
      s.d(e, {
        A: () => m
      });
      var i = s(6050);
      var a = s(5259);
      var n = s(4776);
      var o = s(4295);
      var r = s(7135);
      var h = s(3090);
      var l = s(4908);
      var c = s(6324);
      var d = s(8749);
      var u = s(5166);
      var p = s(9468);
      var g = s(5699);
      class m {
        constructor(t) {
          this.drawShader = 0;
          this.sourceTexture = null;
          this.vertexBuffer = null;
          this.debug = false;
          this.lastInChain = false;
          this.currentFramebufferIndex = 0;
          this.tempFramebuffers = {};
          this.width = -1;
          this.height = -1;
          this.lastTextureSlot = -1;
          this.handleContextLost = () => {
            if (this.canvas == null) {
              this.canvas = (0, g.Nw)(100, 100);
            }
            this.initContext();
          };
          this.getError = () => {
            if (this.debug) {
              this.ctx.getError();
            }
          };
          this.addShader = (t, e, s = false) => {
            if (t == "fill" && e.amount == 0 || t == "toning" && e.amount == 0 || t == "levels" && e.isFlat() || e == null || e === 0) {
              this.removeShader(t, s);
            } else {
              for (var i = 0; i < this.chain.length; i++) {
                if (this.chain[i].type === t && this.chain[i].sidekick === s) {
                  this.chain[i].value = e;
                  return;
                }
              }
              this.chain.push(new y(t, e, s));
            }
          };
          this.getShaderValue = t => {
            for (var e = 0; e < this.chain.length; e++) {
              if (this.chain[e].type == t) {
                return this.chain[e].value;
              }
            }
          };
          this.addPreset = (t, e = 1) => {
            const s = d.A.named(t);
            if (s) {
              if (e !== 1) {
                s.forEach(t => {
                  switch (t.name) {
                    case "curves":
                      {
                        const s = t.value;
                        const i = p.X.createCurveSet(s);
                        i.percent = e;
                        this.addShader(t.name, i);
                        break;
                      }
                    case "levels":
                      {
                        const s = t.value;
                        const i = new u.A(Math.round(s.minin * e), Math.round(255 - (255 - s.maxin) * e));
                        this.addShader(t.name, i);
                        break;
                      }
                    case "toning":
                      {
                        const s = t.value;
                        const i = new c.A(s.highlight, s.midtone, s.shadow, s.amount * e);
                        this.addShader(t.name, i);
                        break;
                      }
                    case "fill":
                      {
                        const s = t.value;
                        const i = new h.A(s.color, s.blend, s.amount * e);
                        this.addShader(t.name, i);
                        break;
                      }
                    default:
                      this.addShader(t.name, t.value * e);
                  }
                });
              } else {
                s.forEach(t => this.addShader(t.name, t.value));
              }
            }
          };
          this.removeShaderSidekick = () => {
            let t = new Array();
            for (var e = 0; e < this.chain.length; e++) {
              if (!this.chain[e].sidekick) {
                t.push(this.chain[e]);
              }
            }
            this.chain = t;
          };
          this.removeShader = (t, e = false) => {
            for (var s = 0; s < this.chain.length; s++) {
              if (this.chain[s].type === t && this.chain[s].sidekick === e) {
                this.chain.splice(s, 1);
                return;
              }
            }
          };
          this.runShader = (t, e) => {
            switch (t) {
              case "vibrance":
                return this.vibrance(e);
              case "brightness":
                return this.brightness(e);
              case "temperature":
                return this.temperature(e);
              case "balance":
                return this.balance(e);
              case "tint":
                return this.tint(e);
              case "colorize":
                return this.colorize(e);
              case "grain":
                return this.grain(e);
              case "noise":
                return this.noise(e);
              case "vignette":
                return this.vignette(e);
              case "sharpen":
                return this.sharpen(e);
              case "blur":
                return this.blur(e);
              case "zoom":
                return this.zoom(e);
              case "bokeh":
                return this.bokeh(e);
              case "gaussian":
                return this.gaussian(e);
              case "motion":
                return this.motion(e);
              case "radial":
                return this.radial(e);
              case "smooth":
                return this.smooth(e);
              case "denoise":
                return this.denoise(e);
              case "contrast":
                return this.contrast(e);
              case "monochrome":
                return this.monochrome(e);
              case "desaturate":
                return this.desaturate();
              case "invert":
                return this.invert();
              case "exposure":
                return this.exposure(e);
              case "highlights":
                return this.highlights(e);
              case "shadows":
                return this.shadows(e);
              case "dehaze":
                return this.dehaze(e);
              case "curves":
                return this.curves(e);
              case "toning":
                return this.toning(e);
              case "lookup":
                return this.lookup(e);
              case "fill":
                return this.fill(e);
              case "bwpoint":
                return this.bwpoint(e);
              case "levels":
                return this.levels(e);
              case "multilevels":
                return this.multilevels(e);
              case "threshold":
                return this.threshold(e);
              case "alphaThreshold":
                return this.alphaThreshold(e);
              case "bloom":
                return this.bloom(e);
              case "glamour":
                return this.glamour(e);
              case "mimichdr":
                return this.mimicHDR(e);
              case "posterize":
                return this.posterize(e);
              case "fringe":
                return this.fringe(e);
              case "pixelate":
                return this.pixelate(e);
              case "clarity":
                return this.clarity(e);
              case "mosaic":
                return this.mosaic(e);
              case "polarcoordinates":
                return this.polarcoordinates(e);
              case "kaleidoscope":
                return this.kaleidoscope(e);
              case "reflect":
                return this.reflect(e);
              case "wave":
                return this.wave(e);
              case "fisheye":
                return this.fisheye(e);
              case "scanlines":
                return this.scanlines(e);
              case "dealiasing":
                return this.dealiasing();
              case "alpha-reset":
                return this.alphaReset();
              case "alpha-invert":
                return this.alphaInvert();
              case "alpha-mask":
                return this.alphaMask();
              case "alpha-shift-mask":
                return this.alphaShiftMask();
              case "outer-glow":
                return this.outerGlow(e);
              case "inner-glow":
                return this.innerGlow(e);
              case "sobel":
                return this.sobel();
              case "solarize":
                return this.solarize();
              case "halftone":
                return this.halftone(e);
              case "stroke":
                return this.stroke(e);
              case "bevel":
                return this.bevel(e);
              case "border":
                return this.border(e);
              case "rgb-split":
                return this.rgbSplit(e);
              case "slice":
                return this.slice(e);
              case "bleed":
                return this.bleed(e);
              case "interference":
                return this.interference(e);
              case "hue":
                return this.hue(e);
              case "hue-red":
                return this.hue(e, 317, 46);
              case "hue-yellow":
                return this.hue(e, 17, 106);
              case "hue-green":
                return this.hue(e, 77, 166);
              case "hue-cyan":
                return this.hue(e, 137, 226);
              case "hue-blue":
                return this.hue(e, 197, 286);
              case "hue-magenta":
                return this.hue(e, 257, 346);
              case "saturation":
                return this.saturation(e);
              case "saturation-red":
                return this.saturation(e, 317, 46);
              case "saturation-yellow":
                return this.saturation(e, 17, 106);
              case "saturation-green":
                return this.saturation(e, 77, 166);
              case "saturation-cyan":
                return this.saturation(e, 137, 226);
              case "saturation-blue":
                return this.saturation(e, 197, 286);
              case "saturation-magenta":
                return this.saturation(e, 257, 346);
              case "lightness":
                return this.lightness(e);
              case "lightness-red":
                return this.lightness(e, 317, 46);
              case "lightness-yellow":
                return this.lightness(e, 17, 106);
              case "lightness-green":
                return this.lightness(e, 77, 166);
              case "lightness-cyan":
                return this.lightness(e, 137, 226);
              case "lightness-blue":
                return this.lightness(e, 197, 286);
              case "lightness-magenta":
                return this.lightness(e, 257, 346);
              case "melt":
                return this.melt(e);
              case "gooey":
                return this.gooey(e);
              case "block":
                return this.block(e);
              case "curtain":
                return this.curtain(e);
              case "blinds":
                return this.blinds(e);
              case "wipe":
                return this.wipe(e);
              case "slot":
                return this.slot(e);
              case "split":
                return this.split(e);
              case "circular":
                return this.circular(e);
              case "ripple":
                return this.ripple(e);
              case "warp":
                return this.warp(e);
              case "swipe":
                return this.swipe(e);
              case "marquee":
                return this.marquee(e);
              default:
                return console.error("We don't have this type shader, " + t);
            }
          };
          this.reset = () => {
            this.chain = [];
            this.compiledProgram.forEach(function (t) {
              t.destroy(this.ctx);
            }, this);
            this.compiledProgram.clear();
            if (this.sourceTexture) {
              this.activeSourceTexture = undefined;
              this.sourceTexture.destroy(this.ctx);
              this.sourceTexture = null;
            }
            for (let t in this.tempFramebuffers) {
              this.tempFramebuffers[t].destroy(this.ctx);
            }
            this.tempFramebuffers = {};
          };
          this.apply = (t, e = false) => {
            if (this.chain.length == 0) {
              return t;
            }
            this.resize(t.width, t.height);
            this.drawShader = 0;
            if (!this.sourceTexture || this.width != t.width || this.height != t.height) {
              if (this.sourceTexture) {
                this.sourceTexture.destroy(this.ctx);
                this.sourceTexture = null;
              }
              this.sourceTexture = new n.A("texture");
              this.sourceTexture.createTexture(this.ctx, t.width, t.height);
            }
            if (t !== this.activeSourceTexture || e) {
              this.sourceTexture.uploadData(this.ctx, t);
              this.activeSourceTexture = t;
            }
            for (var s = 0; s < this.chain.length; s++) {
              this.lastInChain = s == this.chain.length - 1;
              this.runShader(this.chain[s].type, this.chain[s].value);
            }
            this.currentFramebufferIndex = 0;
            return this.canvas;
          };
          this.resize = (t, e) => {
            if (t != this.width || e != this.height) {
              this.canvas.width = this.width = t;
              this.canvas.height = this.height = e;
              if (!this.vertexBuffer) {
                var s = new Float32Array([-1, -1, 0, 0, 1, -1, 1, 0, -1, 1, 0, 1, -1, 1, 0, 1, 1, -1, 1, 0, 1, 1, 1, 1]);
                if (!this.ctx) {
                  this.initContext();
                }
                this.vertexBuffer = this.ctx.createBuffer();
                this.ctx.bindBuffer(this.ctx.ARRAY_BUFFER, this.vertexBuffer);
                this.ctx.bufferData(this.ctx.ARRAY_BUFFER, s, this.ctx.STATIC_DRAW);
              }
              this.ctx.viewport(0, 0, this.width, this.height);
              for (let t in this.tempFramebuffers) {
                this.tempFramebuffers[t].destroy(this.ctx);
              }
              this.tempFramebuffers = {};
            }
          };
          this.getTempFramebuffer = t => {
            this.tempFramebuffers[t] = this.tempFramebuffers[t] || this.createFramebufferTexture(this.width, this.height);
            return this.tempFramebuffers[t];
          };
          this.createFramebufferTexture = (t, e) => {
            let s = this.ctx.createFramebuffer();
            this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, s);
            let i = this.ctx.createRenderbuffer();
            this.ctx.bindRenderbuffer(this.ctx.RENDERBUFFER, i);
            this.ctx.renderbufferStorage(this.ctx.RENDERBUFFER, this.ctx.DEPTH_COMPONENT16, t, e);
            let a = this.ctx.createTexture();
            this.ctx.bindTexture(this.ctx.TEXTURE_2D, a);
            this.ctx.texImage2D(this.ctx.TEXTURE_2D, 0, this.ctx.RGBA, t, e, 0, this.ctx.RGBA, this.ctx.UNSIGNED_BYTE, null);
            this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MAG_FILTER, this.ctx.NEAREST);
            this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_MIN_FILTER, this.ctx.NEAREST);
            this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_S, this.ctx.CLAMP_TO_EDGE);
            this.ctx.texParameteri(this.ctx.TEXTURE_2D, this.ctx.TEXTURE_WRAP_T, this.ctx.CLAMP_TO_EDGE);
            this.ctx.framebufferTexture2D(this.ctx.FRAMEBUFFER, this.ctx.COLOR_ATTACHMENT0, this.ctx.TEXTURE_2D, a, 0);
            this.ctx.framebufferRenderbuffer(this.ctx.FRAMEBUFFER, this.ctx.DEPTH_ATTACHMENT, this.ctx.RENDERBUFFER, i);
            this.ctx.bindTexture(this.ctx.TEXTURE_2D, null);
            this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, null);
            return new l.A(s, i, a);
          };
          this.draw = (t, e = false) => {
            if ((this.chain.length <= 1 || this.lastInChain) && !e) {
              this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, null);
            } else {
              let t = this.getTempFramebuffer(this.currentFramebufferIndex);
              this.ctx.bindFramebuffer(this.ctx.FRAMEBUFFER, t.framebuffer);
            }
            this.ctx.uniform4f(t.uniform.transform, 1, 1, 0, 0);
            this.ctx.clear(this.ctx.COLOR_BUFFER_BIT);
            this.ctx.clearColor(0, 0, 0, 0);
            this.setTexture(t.texture);
            this.ctx.drawArrays(this.ctx.TRIANGLES, 0, 6);
            this.drawShader++;
            this.currentFramebufferIndex ^= 1;
            this.getError();
          };
          this.setTexture = t => {
            let e = -1;
            t.forEach(function (t, s) {
              this.ctx.activeTexture(this.ctx.TEXTURE0 + s);
              if (s === 0 && this.drawShader === 0) {
                this.ctx.bindTexture(this.ctx.TEXTURE_2D, this.sourceTexture.texture);
              } else if (s === 0) {
                let t = this.currentFramebufferIndex ^ 1;
                let e = this.getTempFramebuffer(t);
                this.ctx.bindTexture(this.ctx.TEXTURE_2D, e.texture);
              } else {
                this.ctx.bindTexture(this.ctx.TEXTURE_2D, t.texture);
              }
              e = Math.max(e, s);
            }, this);
            for (let s = e + 1; s <= this.lastTextureSlot; ++s) {
              this.ctx.activeTexture(this.ctx.TEXTURE0 + s);
              this.ctx.bindTexture(this.ctx.TEXTURE_2D, null);
            }
            this.lastTextureSlot = e;
          };
          this.cleanUp = () => {
            this.sourceTexture = null;
            this.canvas = null;
            this.ctx = null;
          };
          this.compileShader = (t, e = this.VERTEX_IDENTITY) => {
            let s = new o.A(this.ctx, e, t);
            var i = Float32Array.BYTES_PER_ELEMENT;
            this.ctx.enableVertexAttribArray(s.attribute.apos);
            this.ctx.vertexAttribPointer(s.attribute.apos, 2, this.ctx.FLOAT, false, i * 4, i * 0);
            this.ctx.enableVertexAttribArray(s.attribute.auv);
            this.ctx.vertexAttribPointer(s.attribute.auv, 2, this.ctx.FLOAT, false, i * 4, i * 2);
            return s;
          };
          this.VERTEX_IDENTITY = "\n        precision highp float;\n        attribute vec2 apos;\n        attribute vec2 auv;\n        varying vec2 uv;\n        uniform vec4 transform;\n\n        void main(void) {\n            uv = auv;\n            gl_Position = vec4(apos.x * transform.x + transform.z, apos.y * transform.y + transform.w, 0.0, 1.0);\n        }";
          this.FRAGMENT_IDENTITY = "\n        precision highp float;\n        varying vec2 uv;\n        uniform sampler2D texture;\n\n        void main(void) {\n            gl_FragColor = texture2D(texture, uv);\n        }";
          this.GAUSSKERN_MAX = 15;
          this.cloneChain = () => {
            var t;
            var e;
            var s;
            const i = [];
            for (let a = 0; a < this.chain.length; a++) {
              const n = this.chain[a];
              let o;
              switch (n.type) {
                case "curves":
                  {
                    const t = n.value;
                    const e = t.rgb.map(t => t.clone());
                    const s = t.red.map(t => t.clone());
                    const i = t.green.map(t => t.clone());
                    const a = t.blue.map(t => t.clone());
                    o = new p.A(t.scale, e, s, i, a);
                    break;
                  }
                case "levels":
                  {
                    const t = n.value;
                    o = new u.A(t.minin, t.maxin, t.minout, t.maxout, t.midin, t.mid);
                    break;
                  }
                case "toning":
                  {
                    const i = n.value;
                    o = new c.A((t = i.highlight) === null || t === undefined ? undefined : t.clone(), (e = i.midtone) === null || e === undefined ? undefined : e.clone(), (s = i.shadow) === null || s === undefined ? undefined : s.clone(), i.amount);
                    break;
                  }
                case "fill":
                  {
                    const t = n.value;
                    o = new h.A(t.color.clone(), t.blend, t.amount);
                    break;
                  }
                default:
                  o = n.value;
              }
              i.push(new y(n.type, o));
            }
            return i;
          };
          this.chain = t || [];
          this.compiledProgram = new Map();
          this.canvas = (0, g.Nw)(100, 100);
          this.initContext();
          this.canvas.addEventListener("webglcontextlost", this.handleContextLost, false);
        }
        initContext() {
          this.ctx = this.canvas.getContext("webgl", {
            alpha: true,
            premultipliedAlpha: false,
            depth: false,
            stencil: false,
            antialias: false
          });
          if (!this.ctx) {
            this.canvas = (0, g.Nw)(100, 100);
            this.ctx = this.canvas.getContext("webgl");
            (0, r.A)("weg-gl-pre-error");
          }
          if (!this.ctx) {
            console.log("Could not get shaders webgl canvas context!");
            (0, r.A)("weg-gl-error");
          }
        }
        bevel(t) {
          let e = this.compiledProgram.get("bevel");
          if (!e) {
            let t = "\n                precision highp float;\n\n                varying vec2 uv;\n                \n                uniform float zeroPoint;\n                uniform vec3 lightNormal;\n                uniform float dz;\n                uniform float size;\n\n                uniform vec4 lowColor;\n                uniform vec4 highColor;\n                \n                uniform sampler2D dist;\n                uniform sampler2D texture;\n                uniform vec2 px;\n\n                vec4 straightBlend(vec4 src, vec4 dst) {\n                    float alpha = src.a + dst.a * (1.0 - src.a);\n\n                    return vec4(\n                        ((src.rgb * src.a) + (dst.rgb * dst.a) * (1.0 - src.a)) / alpha,\n                        alpha\n                    );\n                }\n                \n                void main() {                    \n                    vec2 flipuv = vec2(uv.x, 1.0 - uv.y);\n                                         \n                    /* PER PIXEL OPS */\n                    float tl = clamp(0.0, size, texture2D(dist, flipuv + vec2(-px.x, -px.y)).a);\n                    float tm = clamp(0.0, size, texture2D(dist, flipuv + vec2(    0, -px.y)).a);\n                    float tr = clamp(0.0, size, texture2D(dist, flipuv + vec2( px.x, -px.y)).a);\n                \n                    float ml = clamp(0.0, size, texture2D(dist, flipuv + vec2(-px.x,     0)).a);\n                    float mr = clamp(0.0, size, texture2D(dist, flipuv + vec2( px.x,     0)).a);\n                \n                    float bl = clamp(0.0, size, texture2D(dist, flipuv + vec2(-px.x,  px.y)).a);\n                    float bm = clamp(0.0, size, texture2D(dist, flipuv + vec2(    0,  px.y)).a);\n                    float br = clamp(0.0, size, texture2D(dist, flipuv + vec2( px.x,  px.y)).a);\n                \n                    float dx = (tr + 2.0 * mr + br) - (tl + 2.0 * ml + bl);\n                    float dy = (bl + 2.0 * bm + br) - (tl + 2.0 * tm + tr);\n                \n                    vec3 surfaceNormal = vec3(dx, dy, dz);\n                    float norm = sqrt(dx*dx + dy*dy + dz*dz);\n                \n                    // Calculate incident light amount, range [-1, 0]\n                    float incidentLight = ((dot(surfaceNormal, lightNormal) / norm) - zeroPoint) - (1.0 - zeroPoint);\n                    \n                    vec4 slopes = mix(lowColor, highColor, 1.0 - abs(incidentLight));\n                    \n                    // Texture\n                    vec4 color = texture2D(texture, uv);\n\n                    // Bevel color, only use the the color where we need it\n                    float alpha = smoothstep(1e-5, dz + 8.0, distance(vec3(0.0,0.0,dz), surfaceNormal));\n                    vec4 bevelColor = vec4(slopes.rgb, slopes.a * alpha);\n\n                    gl_FragColor = straightBlend(\n                        bevelColor,\n                        color\n                    );\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("bevel", e);
          }
          this.ctx.useProgram(e.program);
          e.getTextureById("dist").setTexture(t.distanceMap);
          const s = Math.sin(t.lightElevation);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.ctx.uniform1f(e.uniform.zeroPoint, s);
          this.ctx.uniform3f(e.uniform.lightNormal, Math.cos(t.lightElevation) * -Math.cos(t.lightAngle), Math.cos(t.lightElevation) * -Math.sin(t.lightAngle), s);
          this.ctx.uniform4f(e.uniform.lowColor, t.lowLightColor.r / 255, t.lowLightColor.g / 255, t.lowLightColor.b / 255, t.lowOpacity);
          this.ctx.uniform4f(e.uniform.highColor, t.highLightColor.r / 255, t.highLightColor.g / 255, t.highLightColor.b / 255, t.highOpacity);
          this.ctx.uniform1f(e.uniform.dz, 1 / t.depth);
          this.ctx.uniform1f(e.uniform.size, t.size);
          this.draw(e);
        }
        stroke(t) {
          const e = "stroke" + (t.cutout ? "-cutout" : "");
          let s = this.compiledProgram.get(e);
          if (!s) {
            let i = `\n                precision highp float;\n\n                #define CUTOUT ${t.cutout ? 1 : 0}\n\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform sampler2D distanceMap;\n                            \n                uniform vec4 glowColor;\n                uniform float size;\n\n                vec4 straightBlend(vec4 src, vec4 dst) {\n                    float alpha = src.a + dst.a * (1.0 - src.a);\n\n                    return vec4(\n                        ((src.rgb * src.a) + (dst.rgb * dst.a) * (1.0 - src.a)) / alpha,\n                        alpha\n                    );\n                }\n\n                void main(void) {           \n                    vec2 flipped = vec2(uv.x, 1.0 - uv.y);\n\n                    float distance = texture2D(distanceMap, flipped).a;\n                    float gAlpha = 1.0-smoothstep(size - 3.0, size, distance);\n\n                    vec4 gColor = vec4(\n                        glowColor.rgb, \n                        gAlpha * glowColor.a\n                    );\n\n                    vec4 texColor = texture2D(texture, uv);\n\n                    #if CUTOUT == 1\n                        vec4 tran = vec4(0);\n                        gl_FragColor = mix(gColor, tran, texColor.a);\n                    #else\n                        gl_FragColor = straightBlend(texColor, gColor);                    \n                    #endif\n                }\n            `;
            s = this.compileShader(i);
            this.compiledProgram.set(e, s);
          }
          this.ctx.useProgram(s.program);
          this.ctx.uniform4f(s.uniform.glowColor, t.color.r / 255, t.color.g / 255, t.color.b / 255, t.opacity);
          s.getTextureById("distanceMap").setTexture(t.distanceMap);
          this.ctx.uniform1f(s.uniform.size, t.size);
          this.draw(s);
        }
        innerGlow(t) {
          let e = this.compiledProgram.get("innerglow");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform sampler2D distanceMap;\n                            \n                uniform vec4 glowColor;\n                uniform float size;\n                uniform float feather;\n\n                void main(void) {           \n                    vec2 flipped = vec2(uv.x, 1.0 - uv.y);\n\n                    float distance = texture2D(distanceMap, flipped).a;\n                    float balance = 1.0-smoothstep(size * (1.0-feather), size, distance);\n\n                    vec4 texColor = texture2D(texture, uv);\n\n                    vec4 gColor = vec4(\n                        glowColor.rgb, \n                        texColor.a\n                    );\n                       \n                    gl_FragColor = mix(texColor, gColor, balance * glowColor.a);\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("innerglow", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform4f(e.uniform.glowColor, t.color.r / 255, t.color.g / 255, t.color.b / 255, t.opacity);
          e.getTextureById("distanceMap").setTexture(t.distanceMap);
          this.ctx.uniform1f(e.uniform.size, t.size);
          this.ctx.uniform1f(e.uniform.feather, t.feather);
          this.draw(e);
        }
        outerGlow(t) {
          let e = this.compiledProgram.get("outerglow");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform sampler2D distanceMap;\n                            \n                uniform vec4 glowColor;\n                uniform float size;\n                uniform float feather;\n\n                vec4 straightBlend(vec4 src, vec4 dst) {\n                    float alpha = src.a + dst.a * (1.0 - src.a);\n\n                    return vec4(\n                        ((src.rgb * src.a) + (dst.rgb * dst.a) * (1.0 - src.a)) / alpha,\n                        alpha\n                    );\n                }\n                \n                void main(void) {           \n                    vec2 flipped = vec2(uv.x, 1.0 - uv.y);\n\n                    float distance = texture2D(distanceMap, flipped).a;\n                    float gAlpha = 1.0-smoothstep(size * (1.0-feather), size, distance);\n\n                    vec4 gColor = vec4(\n                        glowColor.rgb, \n                        gAlpha * glowColor.a\n                    );\n\n                    vec4 texColor = texture2D(texture, uv);\n                    \n                    gl_FragColor = straightBlend(texColor, gColor);                    \n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("outerglow", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform4f(e.uniform.glowColor, t.color.r / 255, t.color.g / 255, t.color.b / 255, t.opacity);
          e.getTextureById("distanceMap").setTexture(t.distanceMap);
          this.ctx.uniform1f(e.uniform.size, t.size);
          this.ctx.uniform1f(e.uniform.feather, t.feather);
          this.draw(e);
        }
        sobel() {
          let t = this.compiledProgram.get("sobel");
          if (!t) {
            let e = "\n                precision mediump float;\n\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n\n                uniform float m[3];\n                #define M_PI 3.1415926535897932384626433832795\n                #define GET_PIXEL(x,y) (texture2D(texture, uv + px*vec2(x,y)))\n\n                void main() {\n\n                    float dx = (length(GET_PIXEL(-1, -1)*m[0] +\n                                GET_PIXEL(-1,  0)*m[1] +\n                                GET_PIXEL(-1, +1)*m[2]) -\n                            length(GET_PIXEL(+1, -1)*m[0] +\n                                GET_PIXEL(+1,  0)*m[1] +\n                                GET_PIXEL(+1, +1)*m[2]));\n\n                    float dy = (length(GET_PIXEL(-1, -1)*m[0] +\n                                GET_PIXEL(0, -1)*m[1] +\n                                GET_PIXEL(+1, -1)*m[2]) -\n                            length(GET_PIXEL(-1, +1)*m[0] +\n                                GET_PIXEL(0, +1)*m[1] +\n                                GET_PIXEL(+1, +1)*m[2]));\n\n                    float theta = (atan(dy, dx) + M_PI) / (2.0*M_PI);\n\n                    gl_FragColor = vec4(length(vec2(dx, dy)), theta, 0.0, 1.0);\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("sobel", t);
          }
          this.ctx.useProgram(t.program);
          this.ctx.uniform2f(t.uniform.px, 1 / this.width, 1 / this.height);
          this.ctx.uniform1fv(t.uniform.m, [1, 2, 1]);
          this.draw(t, true);
          t = this.compiledProgram.get("sobelNMS");
          if (!t) {
            let e = "\n                precision mediump float;\n\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n\n                #define M_PI 3.1415926535897932384626433832795\n\n                void main() {\n                    vec4 cc = texture2D(texture, uv);  \n                    float theta = degrees(cc.y*M_PI*2.0); \n                    int ax = 0, ay = 0; \n                    if ((theta >= 337.5) || (theta < 22.5)) { ax = 1; ay = 0; } \n                    else if ((theta >= 22.5) && (theta < 67.5)) { ax = 1; ay = 1; } \n                    else if ((theta >= 67.5) && (theta < 112.5)) { ax = 0; ay = 1; } \n                    else if ((theta >= 112.5) && (theta < 157.5)) { ax =-1; ay = 1; } \n                    else if ((theta >= 157.5) && (theta < 202.5)) { ax =-1; ay = 0; } \n                    else if ((theta >=202.5) && (theta < 247.5)) { ax =-1; ay =-1; } \n                    else if ((theta >=247.5) && (theta < 292.5)) { ax = 0; ay =-1; } \n                    else if ((theta >= 292.5) && (theta < 337.5)) { ax = 1; ay =-1; }\n                \n                    vec4 ca = texture2D(texture, uv + px*vec2(ax, ay));\n                    vec4 cb = texture2D(texture, uv + px*vec2(-ax, -ay));\n                    gl_FragColor = vec4((((cc.x <= ca.x) || (cc.x < cb.x)) ? vec3(0) : vec3(cc.x)), 1.0);\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("sobelNMS", t);
          }
          this.ctx.useProgram(t.program);
          this.ctx.uniform2f(t.uniform.px, 1 / this.width, 1 / this.height);
          this.draw(t);
        }
        vibrance(t) {
          let e = this.compiledProgram.get("vibrance");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n\n                    vec4 col = texture2D(texture, uv.xy);\n                    vec3 color = col.rgb;\n                \n                    float luminance = color.r*0.299 + color.g*0.587 + color.b*0.114;\n                    float mn = min(min(color.r, color.g), color.b);\n                    float mx = max(max(color.r, color.g), color.b);\n                    float sat = (1.0-(mx - mn)) * (1.0-mx) * luminance * 5.0;\n                    vec3 lightness = vec3((mn + mx)/2.0);\n                \n                    // vibrance\n                    color = mix(color, mix(color, lightness, -amount), sat);\n                \n                    // negative vibrance\n                    gl_FragColor = vec4(mix(color, lightness, (1.0-lightness)*(1.0-amount)/2.0*abs(amount)), col.a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("vibrance", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        brightness(t) {
          let e;
          if (t > 0) {
            e = this.compiledProgram.get("brightness-up");
            if (!e) {
              let t = "\n                    precision highp float;\n                    varying vec2 uv;\n                    uniform sampler2D texture;\n                    uniform float amount;\n\n                    #define PI 3.1415926535897932384626433832795\n\n                    void main() {\n                        vec4 color = texture2D(texture, uv);\n\n                        color.r = color.r + amount * sin(color.r * PI);\n                        color.g = color.g + amount * sin(color.g * PI);\n                        color.b = color.b + amount * sin(color.b * PI);\n\n                        gl_FragColor = color;\n                    }";
              e = this.compileShader(t);
              this.compiledProgram.set("brightness-up", e);
            }
          } else {
            e = this.compiledProgram.get("brightness-down");
            if (!e) {
              let t = "\n                    precision highp float;\n                    varying vec2 uv;\n                    uniform sampler2D texture;\n                    uniform float amount;\n\n                    void main() {\n                        vec4 color = texture2D(texture, uv);\n     \n                        color.r = (1.0 + amount) * color.r;\n                        color.g = (1.0 + amount) * color.g;\n                        color.b = (1.0 + amount) * color.b;\n\n                        gl_FragColor = color;\n                    }";
              e = this.compileShader(t);
              this.compiledProgram.set("brightness-down", e);
            }
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t > 0 ? t * 0.35 : t * 0.75);
          this.draw(e);
        }
        bwpoint(t) {
          let e = this.compiledProgram.get("bwpoint");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                uniform float white;\n                uniform float black;\n\n                void main() {\n\n                    float bval = black / 255.0;\n                    float wval = (255.0 / (white - black));\n                \n                    vec3 color = texture2D(texture, uv).rgb;\n                    color = color * wval - (bval *  wval);\n\n                    gl_FragColor = vec4(color, texture2D(texture, uv).a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("bwpoint", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.black, t.black);
          this.ctx.uniform1f(e.uniform.white, t.white);
          this.draw(e);
        }
        dealiasing() {
          let t = this.compiledProgram.get("dealiasing");
          if (!t) {
            let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.a = (color.a < 0.25) ? 0.0 : 1.0;\n                    gl_FragColor = color;\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("dealiasing", t);
          }
          this.ctx.useProgram(t.program);
          this.draw(t);
        }
        alphaInvert() {
          let t = this.compiledProgram.get("alpha-invert");
          if (!t) {
            let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.a = 1.0 - color.a;\n                    gl_FragColor = color;\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("alpha-invert", t);
          }
          this.ctx.useProgram(t.program);
          this.draw(t);
        }
        alphaMask() {
          let t = this.compiledProgram.get("alpha-mask");
          if (!t) {
            let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    gl_FragColor = vec4(0,0,0, texture2D(texture, uv).a);\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("alpha-mask", t);
          }
          this.ctx.useProgram(t.program);
          this.draw(t);
        }
        alphaShiftMask() {
          let t = this.compiledProgram.get("alpha-shift-mask");
          if (!t) {
            let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    gl_FragColor = vec4(0,0,0, texture2D(texture, uv).r);\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("alpha-shift-mask", t);
          }
          this.ctx.useProgram(t.program);
          this.draw(t);
        }
        alphaReset() {
          let t = this.compiledProgram.get("alpha-reset");
          if (!t) {
            let e = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    gl_FragColor = vec4(color.rgb, 1.0);\n                }";
            t = this.compileShader(e);
            this.compiledProgram.set("alpha-reset", t);
          }
          this.ctx.useProgram(t.program);
          this.draw(t);
        }
        border(t) {
          let e = this.compiledProgram.get("border");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform float size;\n                uniform vec4 color;\n                uniform vec2 screen;\n                uniform vec2 px;\n\n                void main() {\n                    vec4 pixel = texture2D(texture, uv);\n\n                    if(uv.y <= size*px.y || uv.y >= (screen.y-size)*px.y ||\n                       uv.x <= size*px.x || uv.x >= (screen.x-size)*px.x) {\n                        gl_FragColor = color;\n                    } else {\n                        gl_FragColor = pixel;\n                    }\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("border", e);
          }
          let s = Math.round((this.width + this.height) / 2 * t.size);
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.size, s);
          this.ctx.uniform2f(e.uniform.screen, this.width, this.height);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.ctx.uniform4f(e.uniform.color, t.color.r / 255, t.color.g / 255, t.color.b / 255, 1);
          this.draw(e);
        }
        balance(t) {
          let e = this.compiledProgram.get("balance");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                uniform float sr;\n                uniform float sg;\n                uniform float sb;\n                uniform float mr;\n                uniform float mg;\n                uniform float mb;\n                uniform float hr;\n                uniform float hg;\n                uniform float hb;\n                uniform float preserve;\n\n                #define PI 3.1415926535897932384626433832795\n\n                float Lum(vec4 c){\n                    return 0.299*c.r + 0.587*c.g + 0.114*c.b;\n                }\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    \n                    float olum = Lum(color);\n\n                    //highlight\n                    color.r = clamp(color.r + (hr * (exp(color.r) - 1.0)), 0.0, 1.0);\n                    color.g = clamp(color.g + (hg * (exp(color.g) - 1.0)), 0.0, 1.0);\n                    color.b = clamp(color.b + (hb * (exp(color.b) - 1.0)), 0.0, 1.0);\n\n                    //midtone\n                    color.r = clamp(color.r + (mr * 0.25) * sin(color.r * PI), 0.0, 1.0);\n                    color.g = clamp(color.g + (mg * 0.25) * sin(color.g * PI), 0.0, 1.0);\n                    color.b = clamp(color.b + (mb * 0.25) * sin(color.b * PI), 0.0, 1.0);\n\n                    //shadow\n                    color.r = clamp((1.0 - sr * 0.5) * color.r + (1.0 - (1.0 - sr * 0.5)), 0.0, 1.0);\n                    color.g = clamp((1.0 - sg * 0.5) * color.g + (1.0 - (1.0 - sg * 0.5)), 0.0, 1.0);\n                    color.b = clamp((1.0 - sb * 0.5) * color.b + (1.0 - (1.0 - sb * 0.5)), 0.0, 1.0);\n                    \n                    if(preserve == 1.0) {\n                        float nlum = Lum(color);\n                        color.rgb = color.rgb * (olum/nlum);\n                    }\n\n                    gl_FragColor = color;\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("balance", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.sr, t.shadowRed);
          this.ctx.uniform1f(e.uniform.sg, t.shadowGreen);
          this.ctx.uniform1f(e.uniform.sb, t.shadowBlue);
          this.ctx.uniform1f(e.uniform.mr, t.midtoneRed);
          this.ctx.uniform1f(e.uniform.mg, t.midtoneGreen);
          this.ctx.uniform1f(e.uniform.mb, t.midtoneBlue);
          this.ctx.uniform1f(e.uniform.hr, t.highlightRed);
          this.ctx.uniform1f(e.uniform.hg, t.highlightGreen);
          this.ctx.uniform1f(e.uniform.hb, t.highlightBlue);
          this.ctx.uniform1f(e.uniform.preserve, Number(t.preserve));
          this.draw(e);
        }
        temperature(t) {
          let e = this.compiledProgram.get("temperature");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.r = clamp(color.r + amount, 0.0, 1.0);\n                    color.b = clamp(color.b - amount, 0.0, 1.0);\n                    gl_FragColor = color;\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("temperature", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t / 6);
          this.draw(e);
        }
        tint(t) {
          let e = this.compiledProgram.get("tint");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    color.g = clamp(color.g + amount, 0.0, 1.0);\n                    gl_FragColor = color;\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("tint", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t / 6);
          this.draw(e);
        }
        threshold(t) {
          let e = this.compiledProgram.get("threshold");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n    \n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    float grayscale = (color.r + color.g + color.b) / 3.0;\n                    float grayValue = step(amount, grayscale);\n                    gl_FragColor = vec4(grayValue, grayValue, grayValue, color.a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("threshold", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        alphaThreshold(t) {
          let e = this.compiledProgram.get("alphaThreshold");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    if (color.a < 0.05) {\n                        gl_FragColor = color;\n                    }\n                    else {\n                        color.a = step(amount, color.a);\n                        gl_FragColor = vec4(color.r, color.g, color.b, color.a);\n                    }\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("alphaThreshold", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        noise(t) {
          let e = this.compiledProgram.get("noise");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                float random(vec2 p) {\n                    vec2 r = vec2(23.14069263277926,2.665144142690225);\n                    return fract(cos(mod(12345678.,256. * dot(p,r))));\n                }\n\n                void main() {\n                    vec4 color = texture2D(texture, uv);\n                    float noise = (random(uv) -0.5)*amount;\n\n                    gl_FragColor = vec4(color.r+noise, color.g+noise, color.b+noise, color.a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("noise", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        halftone(t) {
          let e = this.compiledProgram.get("halftone");
          if (!e) {
            this.ctx.getExtension("OES_standard_derivatives");
            let t = "\n                #ifdef GL_OES_standard_derivatives\n                #extension GL_OES_standard_derivatives : enable\n                #endif\n\n                precision highp float;                \n\n                uniform sampler2D texture;\n                uniform vec2 size;\n                uniform float frequency;\n  \n                varying vec2 uv; // Texcoords\n\n                float aastep(float threshold, float value) {\n                #ifdef GL_OES_standard_derivatives\n                    float afwidth = 0.7 * length(vec2(dFdx(value), dFdy(value)));\n                #else\n                    float afwidth = frequency * (1.0/size.x);\n                #endif\n                    return smoothstep(threshold-afwidth, threshold+afwidth, value);\n                }\n\n                // Explicit bilinear texture lookup to circumvent bad hardware precision.\n                // The extra arguments specify the dimension of the texture. (GLSL 1.30\n                // introduced textureSize() to get that information from the sampler.)\n                // 'dims' is the width and height of the texture, 'one' is 1.0/dims.\n                // (Precomputing 'one' saves two divisions for each lookup.)\n                vec4 texture2D_bilinear(sampler2D tex, vec2 st, vec2 dims, vec2 one) {\n                    vec2 uv = st * dims;\n                    vec2 uv00 = floor(uv - vec2(0.5)); // Lower left corner of lower left texel\n                    vec2 uvlerp = uv - uv00 - vec2(0.5); // Texel-local lerp blends [0,1]\n                    vec2 st00 = (uv00 + vec2(0.5)) * one;\n                    vec4 texel00 = texture2D(tex, st00);\n                    vec4 texel10 = texture2D(tex, st00 + vec2(one.x, 0.0));\n                    vec4 texel01 = texture2D(tex, st00 + vec2(0.0, one.y));\n                    vec4 texel11 = texture2D(tex, st00 + one);\n                    vec4 texel0 = mix(texel00, texel01, uvlerp.y); \n                    vec4 texel1 = mix(texel10, texel11, uvlerp.y); \n                    return mix(texel0, texel1, uvlerp.x);\n                }\n\n                vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n                vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }\n                vec3 permute(vec3 x) { return mod289((( x * 34.0) + 1.0) * x); }\n                \n                float snoise(vec2 v) {\n                    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                                        -0.577350269189626,  // -1.0 + 2.0 * C.x\n                                        0.024390243902439); // 1.0 / 41.0\n                    // First corner\n                    vec2 i = floor(v + dot(v, C.yy) );\n                    vec2 x0 = v - i + dot(i, C.xx);\n                    // Other corners\n                    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n                    vec4 x12 = x0.xyxy + C.xxzz;\n                    x12.xy -= i1;\n                    // Permutations\n                    i = mod289(i); // Avoid truncation effects in permutation\n                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n                                            + i.x + vec3(0.0, i1.x, 1.0 ));\n                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),\n                                            dot(x12.zw,x12.zw)), 0.0);\n                    m = m*m; m = m*m;\n                    // Gradients\n                    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n                    vec3 h = abs(x) - 0.5;\n                    vec3 a0 = x - floor(x + 0.5);\n                    // Normalise gradients implicitly by scaling m\n                    m *= 1.792843 - 0.853735 * ( a0*a0 + h*h );\n                    // Compute final noise value at P\n                    vec3 g;\n                    g.x = a0.x * x0.x + h.x * x0.y;\n                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n                    return 130.0 * dot(m, g);\n                }\n                \n                void main() {\n                    // Correct UVs for aspect ratio so we get round balls not squished\n                    vec2 auv = uv;\n                    auv.x *= size.x / size.y;\n\n                    vec3 color = texture2D_bilinear(texture, uv, size, 1.0 / size).rgb;\n\n                    float n = 0.1*snoise(auv*200.0); // Fractal noise\n                    n += 0.05*snoise(auv*400.0);\n                    n += 0.025*snoise(auv*800.0);\n\n                    vec3 white = vec3(n*0.2 + 0.97);\n                    vec3 black = vec3(n + 0.1);\n\n                    // Perform a rough RGB-to-CMYK conversion\n                    vec4 cmyk;\n                    cmyk.xyz = 1.0 - color;\n                    cmyk.w = min(cmyk.x, min(cmyk.y, cmyk.z)); // Create K\n                    cmyk.xyz -= cmyk.w; // Subtract K equivalent from CMY\n                \n                    // Distance to nearest point in a grid of\n                    // (frequency x frequency) points over the unit square\n                    vec2 Kst = frequency*mat2(0.707, -0.707, 0.707, 0.707)*auv;\n                    vec2 Kuv = 2.0*fract(Kst)-1.0;\n                    float k = aastep(0.0, sqrt(cmyk.w)-length(Kuv)+n);\n                    vec2 Cst = frequency*mat2(0.966, -0.259, 0.259, 0.966)*auv;\n                    vec2 Cuv = 2.0*fract(Cst)-1.0;\n                    float c = aastep(0.0, sqrt(cmyk.x)-length(Cuv)+n);\n                    vec2 Mst = frequency*mat2(0.966, 0.259, -0.259, 0.966)*auv;\n                    vec2 Muv = 2.0*fract(Mst)-1.0;\n                    float m = aastep(0.0, sqrt(cmyk.y)-length(Muv)+n);\n                    vec2 Yst = frequency*auv; // 0 deg\n                    vec2 Yuv = 2.0*fract(Yst)-1.0;\n                    float y = aastep(0.0, sqrt(cmyk.z)-length(Yuv)+n);\n                \n                    vec3 rgbscreen = 1.0 - 0.9*vec3(c,m,y) + n;\n                    rgbscreen = mix(rgbscreen, black, 0.85*k + 0.3*n);\n                \n                    #ifdef GL_OES_standard_derivatives\n                        float afwidth = 2.0 * frequency * max(length(dFdx(uv)), length(dFdy(uv)));\n                    #else\n                        float afwidth = frequency * (1.0/size.x);\n                    #endif\n                    \n                    float blend = smoothstep(0.7, 1.4, afwidth); \n                    gl_FragColor = vec4(mix(rgbscreen, color, blend), 1.0);\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("halftone", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.size, this.width, this.height);
          this.ctx.uniform1f(e.uniform.frequency, Math.round(t * 100));
          this.draw(e);
        }
        vignette(t) {
          let e = this.compiledProgram.get(t < 0 ? "vignette-white" : "vignette-black");
          if (!e) {
            let s = ["precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "uniform float size;", "void main() {", "vec4 color = texture2D(texture, uv);", "float dist = distance(uv, vec2(0.5, 0.5));", "float grd = smoothstep(0.8, size * 0.799, dist * (amount*0.6 + size*2.0));", "color.rgb += vec3(1.0, 1.0, 1.0) * (1.0 - grd);", "gl_FragColor = color;", "}"].join("\n");
            let i = ["precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "uniform float size;", "void main() {", "vec4 color = texture2D(texture, uv);", "float dist = distance(uv, vec2(0.5, 0.5));", "color.rgb *= smoothstep(0.8, size * 0.799, dist * (amount*0.75 + size*2.0));", "gl_FragColor = color;", "}"].join("\n");
            e = this.compileShader(t < 0 ? s : i);
            this.compiledProgram.set(t < 0 ? "vignette-white" : "vignette-black", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.size, 0.25);
          this.ctx.uniform1f(e.uniform.amount, t < 0 ? t * -1 : t);
          this.draw(e);
        }
        grain(t) {
          let e = this.compiledProgram.get("grain");
          if (!e) {
            let t = ["precision highp float;", "uniform sampler2D texture;", "varying vec2 uv;", "uniform float width;", "uniform float height;", "uniform float grainamount;", "uniform float timer;", "const float permTexUnit = 1.0/256.0;", "const float permTexUnitHalf = 0.5/256.0;", "float grainsize = 1.8;", "float lumamount = 1.0;", "vec4 rnm(in vec2 tc)", "{", "float noise =  sin(dot(tc + vec2(timer,timer),vec2(12.9898,78.233))) * 43758.5453;", "float noiseR =  fract(noise)*2.0-1.0;", "float noiseG =  fract(noise*1.2154)*2.0-1.0; ", "float noiseB =  fract(noise*1.3453)*2.0-1.0;", "float noiseA =  fract(noise*1.3647)*2.0-1.0;", "return vec4(noiseR,noiseG,noiseB,noiseA);", "}", "float fade(in float t) {", "return t*t*t*(t*(t*6.0-15.0)+10.0);", "}", "float pnoise3D(in vec3 p)", "{", "vec3 pi = permTexUnit*floor(p)+permTexUnitHalf;", "vec3 pf = fract(p);", "float perm00 = rnm(pi.xy).a ;", "vec3  grad000 = rnm(vec2(perm00, pi.z)).rgb * 4.0 - 1.0;", "float n000 = dot(grad000, pf);", "vec3  grad001 = rnm(vec2(perm00, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n001 = dot(grad001, pf - vec3(0.0, 0.0, 1.0));", "float perm01 = rnm(pi.xy + vec2(0.0, permTexUnit)).a ;", "vec3  grad010 = rnm(vec2(perm01, pi.z)).rgb * 4.0 - 1.0;", "float n010 = dot(grad010, pf - vec3(0.0, 1.0, 0.0));", "vec3  grad011 = rnm(vec2(perm01, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n011 = dot(grad011, pf - vec3(0.0, 1.0, 1.0));", "float perm10 = rnm(pi.xy + vec2(permTexUnit, 0.0)).a ;", "vec3  grad100 = rnm(vec2(perm10, pi.z)).rgb * 4.0 - 1.0;", "float n100 = dot(grad100, pf - vec3(1.0, 0.0, 0.0));", "vec3  grad101 = rnm(vec2(perm10, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n101 = dot(grad101, pf - vec3(1.0, 0.0, 1.0));", "float perm11 = rnm(pi.xy + vec2(permTexUnit, permTexUnit)).a ;", "vec3  grad110 = rnm(vec2(perm11, pi.z)).rgb * 4.0 - 1.0;", "float n110 = dot(grad110, pf - vec3(1.0, 1.0, 0.0));", "vec3  grad111 = rnm(vec2(perm11, pi.z + permTexUnit)).rgb * 4.0 - 1.0;", "float n111 = dot(grad111, pf - vec3(1.0, 1.0, 1.0));", "vec4 n_x = mix(vec4(n000, n001, n010, n011), vec4(n100, n101, n110, n111), fade(pf.x));", "vec2 n_xy = mix(n_x.xy, n_x.zw, fade(pf.y));", "float n_xyz = mix(n_xy.x, n_xy.y, fade(pf.z));", "return n_xyz;", "}", "vec2 coordRot(in vec2 tc, in float angle)", "{", "float aspect = width/height;", "float rotX = ((tc.x*2.0-1.0)*aspect*cos(angle)) - ((tc.y*2.0-1.0)*sin(angle));", "float rotY = ((tc.y*2.0-1.0)*cos(angle)) + ((tc.x*2.0-1.0)*aspect*sin(angle));", "rotX = ((rotX/aspect)*0.5+0.5);", "rotY = rotY*0.5+0.5;", "return vec2(rotX,rotY);", "}", "void main() ", "{", "vec3 rotOffset = vec3(1.425,3.892,5.835);", "vec2 rotCoordsR = coordRot(uv, timer + rotOffset.x);", "vec3 noise = vec3(pnoise3D(vec3(rotCoordsR*vec2(width/grainsize,height/grainsize),0.0)));", "vec4 tex = texture2D(texture, uv);", "vec3 col = tex.rgb;", "vec3 lumcoeff = vec3(0.299,0.587,0.114);", "float luminance = mix(0.0,dot(col, lumcoeff),lumamount);", "float lum = smoothstep(0.2,0.0,luminance);", "lum += luminance;", "noise = mix(noise,vec3(0.0),pow(lum,4.0));", "col = col+noise*grainamount;", "gl_FragColor =  vec4(col, tex.w);", "}"].join("\n");
            e = this.compileShader(t);
            this.compiledProgram.set("grain", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.width, this.width);
          this.ctx.uniform1f(e.uniform.height, this.height);
          this.ctx.uniform1f(e.uniform.grainamount, t / 10);
          this.draw(e);
        }
        sharpen(t) {
          let e = this.compiledProgram.get("sharpen");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n                uniform float m[9];\n                uniform float amount;\n\n                void main(void) {\n                    vec4 c11 = texture2D(texture, uv - px); // top left\n                    vec4 c12 = texture2D(texture, vec2(uv.x, uv.y - px.y)); // top center\n                    vec4 c13 = texture2D(texture, vec2(uv.x + px.x, uv.y - px.y)); // top right\n\n                    vec4 c21 = texture2D(texture, vec2(uv.x - px.x, uv.y) ); // mid left\n                    vec4 c22 = texture2D(texture, uv); // mid center\n                    vec4 c23 = texture2D(texture, vec2(uv.x + px.x, uv.y) ); // mid right\n\n                    vec4 c31 = texture2D(texture, vec2(uv.x - px.x, uv.y + px.y) ); // bottom left\n                    vec4 c32 = texture2D(texture, vec2(uv.x, uv.y + px.y) ); // bottom center\n                    vec4 c33 = texture2D(texture, uv + px ); // bottom right\n\n                    vec4 color = \n                        c11 * m[0] + c12 * m[1] + c13 * m[2] +\n                        c21 * m[3] + c22 * m[4] + c23 * m[5] +\n                        c31 * m[6] + c32 * m[7] + c33 * m[8];\n\n                    gl_FragColor = color * amount + (c22 * (1.0 - amount));\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("sharpen", e);
          }
          let s = new Float32Array([-1, -1, -1, -1, 9, -1, -1, -1, -1]);
          this.ctx.useProgram(e.program);
          this.ctx.uniform1fv(e.uniform.m, s);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.ctx.uniform1f(e.uniform.amount, t / 2);
          this.draw(e);
        }
        blur(t, e = false) {
          let s = this.compiledProgram.get("blur");
          if (!s) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 size;\n                float random(vec3 scale, float seed) {\n                    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n                }\n                void main() {\n                    vec4 color = vec4(0.0);\n                    float total = 0.0;\n                    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n                    for (float t = -30.0; t <= 30.0; t++) {\n                        float percent = (t + offset - 0.5) / 30.0;\n                        float weight = 1.0 - abs(percent);\n                        vec4 sample = texture2D(texture, uv + size * percent);\n                        sample.rgb *= sample.a;\n                        color += sample * weight;\n                        total += weight;\n                    }\n                    gl_FragColor = color / total;\n                    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n                }";
            s = this.compileShader(t);
            this.compiledProgram.set("blur", s);
          }
          let i = t * 40 / this.canvas.width;
          let a = t * 40 / this.canvas.height;
          this.ctx.useProgram(s.program);
          this.ctx.uniform2f(s.uniform.size, 0, a);
          this.draw(s, true);
          this.ctx.uniform2f(s.uniform.size, i, 0);
          this.draw(s, e);
        }
        zoom(t) {
          let e = this.compiledProgram.get("zoom");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n\n                uniform vec2 center;\n                uniform float amount;\n                uniform vec2 px;\n                \n                float random(vec3 scale, float seed) {\n                    /* use the fragment position for a different seed per-pixel */                    return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);\n                }\n                void main() {\n                    vec4 color = vec4(0.0);\n                    float total = 0.0;\n                    vec2 toCenter = (center - uv) * px;\n                    \n                    /* randomize the lookup values to hide the fixed number of samples */\n                    float offset = random(vec3(12.9898, 78.233, 151.7182), 0.0);\n                    \n                    for (float t = 0.0; t <= 40.0; t++) {\n                        float percent = (t + offset) / 40.0;\n                        float weight = 4.0 * (percent - percent * percent);\n                        vec4 sample = texture2D(texture, uv + toCenter * percent * amount / px);\n                        \n                        /* switch to pre-multiplied alpha to correctly blur transparent images */\n                        sample.rgb *= sample.a;\n                        \n                        color += sample * weight;\n                        total += weight;\n                    }\n                    gl_FragColor = color / total;\n                    gl_FragColor.rgb /= gl_FragColor.a + 0.00001;\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("zoom", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform2f(e.uniform.center, t.x, t.y);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.draw(e);
        }
        makeKernel(t) {
          const e = this.GAUSSKERN_MAX + Number(!(this.GAUSSKERN_MAX & 1));
          const s = Math.sqrt(Math.PI * 2) * t;
          const i = t * 2 * t;
          var a;
          var n;
          var o = ~~(e / 2);
          var r = new Float32Array(e);
          n = 0;
          a = -o;
          for (; n < e; a++, n++) {
            r[n] = Math.exp(-a * a / i) / s;
          }
          return r;
        }
        makeDynamicKernel(t) {
          const e = Math.min(Math.ceil(t * 10) | 1, 1024);
          const s = Math.sqrt(Math.PI * 2) * t;
          const i = t * 2 * t;
          const a = new Float32Array(e);
          const n = Math.floor(e / 2);
          let o = 0;
          for (let r = 0; r < e; r++) {
            const t = r - n;
            a[r] = Math.exp(-t * t / i) / s;
            o += a[r];
          }
          for (let r = 0; r < e; r++) {
            a[r] /= o;
          }
          return a;
        }
        scaleKernel(t) {
          const e = t.reduce((t, e) => t + e) || 1;
          return t.map(t => t / e);
        }
        gaussian(t) {
          const e = this.makeDynamicKernel(t * 10);
          const s = e.length + Number(!(e.length & 1));
          let i = this.compiledProgram.get(`guass-${s}`);
          if (!i) {
            let t = `\n                precision mediump float;\n                #define KERNEL_SIZE ${s}\n                #define KERNEL_HALF KERNEL_SIZE / 2\n                // our texture\n                varying vec2 uv;\n                uniform vec2 px;\n                uniform sampler2D texture;\n                uniform float kernel[KERNEL_SIZE];\n                void main() {\n                    vec4 result = vec4(0.0);\n                    for (int i = 0; i < KERNEL_SIZE; i++) {\n                        result += texture2D(texture, uv + px*vec2(i - KERNEL_HALF))*kernel[i];\n                    }\n                    gl_FragColor = result;\n                }\n            `;
            i = this.compileShader(t);
            this.compiledProgram.set(`guass-${s}`, i);
          }
          this.ctx.useProgram(i.program);
          this.ctx.uniform2f(i.uniform.px, 0, 1 / this.height);
          this.ctx.uniform1fv(i.uniform.kernel, this.scaleKernel(e));
          this.draw(i, true);
          this.ctx.uniform2f(i.uniform.px, 1 / this.width, 0);
          this.draw(i);
        }
        radial(t) {
          let e = this.compiledProgram.get("radial");
          if (!e) {
            let t = "\n                precision highp float;\n                const float PI = 3.1415926535897932384626433832795;\n                const float samples = 100.;\n\n                uniform sampler2D texture;\n\n                varying vec2 uv;\n                uniform vec2 center;\n                uniform vec2 resolution;\n\n                uniform float amount;\n                uniform int direction;\n                uniform int symmetry;\n               \n                mat2 rotate2d(float _angle){\n                    return mat2(cos(_angle),-sin(_angle),\n                                sin(_angle),cos(_angle));\n                }\n\n                vec2 rotateUV(vec2 uv, mat2 transform, vec2 centerc) {\n                    uv -= centerc;\n                    uv = transform * uv;\n                    uv += centerc;\n                    return uv;\n                }\n             \n                void main(void) {\n                    float ar = resolution.x / resolution.y;\n                    vec2 uvc = uv;\n                    vec2 centerc = center;\n\n                    if (symmetry == 1)\n                    {\n                        if (resolution.x > resolution.y) {\n                            centerc.y /= ar;\n                            uvc.y /= ar;\n                        }\n                        else {\n                            centerc.x *= ar;\n                            uvc.x *= ar;\n                        }\n                    }\n\n                    vec2 coordcw = uvc;\n                    vec2 coordccw = uvc;\n                    vec4 FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n                    vec2 toCenter = uvc - centerc;\n                    float endsamples = 0.;\n\n                    float a = amount / samples;\n\n                    mat2 matcw = rotate2d(-a * PI / 180.);\n                    mat2 matccw = rotate2d(a * PI / 180.);\n\n                    for (float i = 0.; i < samples; i+=1.) {\n                        if (direction == 1 || direction == 2) {\n                            coordccw = rotateUV(coordccw, matccw, centerc);\n                            FragColor += texture2D(texture, coordccw);\n                            endsamples += 1.;\n                        }\n\n                        if (direction == 0 || direction == 2) {\n                            coordcw = rotateUV(coordcw, matcw, centerc);\n                            FragColor += texture2D(texture, coordcw);\n                            endsamples += 1.;\n                        }\n                    }\n                    FragColor /= endsamples;\n                    gl_FragColor = FragColor;\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("radial", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount * 180);
          this.ctx.uniform2f(e.uniform.center, t.x, t.y);
          this.ctx.uniform1i(e.uniform.direction, t.direction);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.ctx.uniform1i(e.uniform.symmetry, t.symmetry ? 1 : 0);
          this.draw(e);
        }
        motion(t) {
          let e = this.compiledProgram.get("motion");
          if (!e) {
            let t = "\n                precision mediump float;\n                uniform float KERNEL_SIZE;\n                varying vec2 uv;\n                uniform vec2 resolution;\n                uniform sampler2D texture;\n                uniform float angle;\n\n                bool outOfRange(vec2 uv) {\n                    return uv.x < 0. || uv. y < 0. || uv.x > 1. || uv.y > 1.;\n                }\n                mat2 rotate2d(float _angle){\n                    return mat2(cos(_angle),-sin(_angle),\n                                sin(_angle),cos(_angle));\n                }\n                void main() {\n                    vec4 result = vec4(0.0);\n                    vec2 resol = vec2 (1./resolution.x, 0.);//1./resolution.y);\n                    resol = rotate2d(angle) * resol;\n                    float divcnt = 1.;\n                    for (float i=1.; i <= 100.; i+=1.) {\n                        vec2 before = uv - resol * i;\n                        if (!outOfRange(before)) {\n                            result += texture2D(texture, before);\n                            divcnt += 1.;\n                        }\n                        vec2 after = uv + resol * i;\n                        if (!outOfRange(after)) {\n                            result += texture2D(texture, after);\n                            divcnt += 1.;\n                        }\n                        if (i >= KERNEL_SIZE) break;\n                    }\n                    result += texture2D(texture, uv);\n                    result /= divcnt;\n                    gl_FragColor = result;\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("motion", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.KERNEL_SIZE, t.amount * 100);
          this.ctx.uniform1f(e.uniform.angle, t.angle);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.draw(e);
        }
        clarity(t) {
          let e = this.compiledProgram.get("clarity");
          if (!e) {
            const t = "\n                #define GLSLIFY 1\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 px;\n                           \n                float Lum(vec3 c){\n                    return 0.299*c.r + 0.587*c.g + 0.114*c.b;\n                }\n                float BlendOverlayf(float base, float blend){\n                    return (base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend)));\n                }\n                vec3 BlendOverlay(vec3 base, vec3 blend){\n                    return vec3(BlendOverlayf(base.r, blend.r), BlendOverlayf(base.g, blend.g), BlendOverlayf(base.b, blend.b));\n                }\n                float BlendVividLightf(float base, float blend){\n                    float BlendColorBurnf = (((2.0 * blend) == 0.0) ? (2.0 * blend) : max((1.0 - ((1.0 - base) / (2.0 * blend))), 0.0));\n                    float BlendColorDodgef =  (((2.0 * (blend - 0.5)) == 1.0) ? (2.0 * (blend - 0.5)) : min(base / (1.0 - (2.0 * (blend - 0.5))), 1.0));\n                    return ((blend < 0.5) ? BlendColorBurnf : BlendColorDodgef);\n                }\n                vec3 BlendVividLight(vec3 base, vec3 blend){\n                    return vec3(BlendVividLightf(base.r, blend.r), BlendVividLightf(base.g, blend.g), BlendVividLightf(base.b, blend.b));\n                }\n\n                float normpdf(in float x, in float sigma) {\n                    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;\n                }\n\n                vec3 blurMap() {\n                    //declare stuff\n                    const int mSize = 11;\n                    const int kSize = (mSize-1)/2;\n                    float kernel[mSize];\n                    vec3 final_colour = vec3(0.0);\n                    \n                    //create the 1-D kernel\n                    float sigma = 7.0;\n                    float Z = 0.0;\n                    for (int j = 0; j <= kSize; ++j){\n                        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);\n                    }\n                    \n                    //get the normalization factor (as the gaussian has been clamped)\n                    for (int j = 0; j < mSize; ++j){\n                        Z += kernel[j];\n                    }\n                    \n                    //read out the texels\n                    for (int i=-kSize; i <= kSize; ++i){\n                        for (int j=-kSize; j <= kSize; ++j){\n                            final_colour += kernel[kSize+j] * kernel[kSize+i] * texture2D(texture, (uv.xy + vec2(float(i),float(j))*px)).rgb;\n                        }\n                    }\n                    return vec3(final_colour/(Z*Z));\n                }\n    \n                void main() {\n\n                    vec4 base4 = texture2D(texture, uv.xy);\n                    \n                    vec3 blurMap = blurMap();\n                    vec3 base = base4.rgb;\n                    \n                    float intensity = (amount < 0.0) ? (amount / 2.0) : amount;\n                    float lum = Lum(base);\n                  \n                    vec3 col = vec3(lum);\n                    vec3 mask = vec3(1.0 - pow(lum, 1.8));\n                    // invert blurred texture\n                    vec3 layer = vec3(1.0 - Lum(blurMap));\n                    vec3 detail = clamp(BlendVividLight(col, layer), 0.0, 1.0);\n                    // we get negative detail by inverting the detail layer\n                    vec3 inverse = mix(1.0 - detail, detail, (intensity+1.0)/2.0);\n                  \n                    gl_FragColor = vec4(BlendOverlay(base, mix(vec3(0.5), inverse, mask)), base4.a);       \n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("clarity", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.ctx.uniform1f(e.uniform.amount, t * 2);
          this.draw(e);
        }
        smooth(t) {
          let e = this.compiledProgram.get("smooth");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 px;\n                uniform float m[9];\n                uniform float amount;\n\n                void main(void) {\n                    vec4 c11 = texture2D(texture, uv - px);\n                    vec4 c12 = texture2D(texture, vec2(uv.x, uv.y - px.y));\n                    vec4 c13 = texture2D(texture, vec2(uv.x + px.x, uv.y - px.y));\n\n                    vec4 c21 = texture2D(texture, vec2(uv.x - px.x, uv.y) );\n                    vec4 c22 = texture2D(texture, uv);\n                    vec4 c23 = texture2D(texture, vec2(uv.x + px.x, uv.y) );\n\n                    vec4 c31 = texture2D(texture, vec2(uv.x - px.x, uv.y + px.y) );\n                    vec4 c32 = texture2D(texture, vec2(uv.x, uv.y + px.y) );\n                    vec4 c33 = texture2D(texture, uv + px );\n\n                    vec4 color = \n                        c11 * m[0] + c12 * m[1] + c13 * m[2] +\n                        c21 * m[3] + c22 * m[4] + c23 * m[5] +\n                        c31 * m[6] + c32 * m[7] + c33 * m[8];\n\n                    gl_FragColor = color * amount + (c22 * (1.0 - amount));\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("smooth", e);
          }
          let s = new Float32Array([1 / 16, 2 / 16, 1 / 16, 2 / 16, 0.25, 2 / 16, 1 / 16, 2 / 16, 1 / 16]);
          this.ctx.useProgram(e.program);
          this.ctx.uniform1fv(e.uniform.m, s);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        denoise(t) {
          const e = Math.round(t[0] * 30);
          let s = this.compiledProgram.get("denoise" + e);
          if (!s) {
            let t = "\n                precision mediump float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                \n                uniform float sigma;\n                uniform float threshold;\n                uniform vec2 resolution;\n\n                #define INV_SQRT_OF_2PI 0.39894228040143267793994605993439  // 1.0/SQRT_OF_2PI\n                #define INV_PI 0.31830988618379067153776752674503\n                #define RADIUS %radius%.0\n              \n                void main(void) {\n\n                       float invSigmaQx2 = .5 / (sigma * sigma);      // 1.0 / (sigma^2 * 2.0)\n                       float invSigmaQx2PI = INV_PI * invSigmaQx2;    // 1.0 / (sqrt(PI) * sigma)\n                       \n                       float invThresholdSqx2 = .5 / (threshold * threshold);     // 1.0 / (sigma^2 * 2.0)\n                       float invThresholdSqrt2PI = INV_SQRT_OF_2PI / threshold;   // 1.0 / (sqrt(2*PI) * sigma)\n                       \n                       vec4 center = texture2D(texture,uv); \n                       \n                       float zBuff = 0.0;\n                       vec4 aBuff = vec4(0.0);\n                       \n                       for(float x=-RADIUS; x <= RADIUS; x++) {\n                           float pt = sqrt(RADIUS*RADIUS-x*x);  // pt = yRadius: have circular trend\n                           for(float y=-RADIUS; y <= RADIUS; y++) {\n   \n                               if(y >= pt || y <= pt) {\n   \n                                   vec2 d = vec2(x,y)/resolution;\n                       \n                                   float blurFactor = exp( -dot(d , d) * invSigmaQx2 ) * invSigmaQx2;\n                                   \n                                   vec4 pxx =  texture2D(texture,uv+d);\n                       \n                                   vec4 dC = pxx-center;\n                                   float deltaFactor = exp( -dot(dC, dC) * invThresholdSqx2) * invThresholdSqrt2PI * blurFactor;\n                                                       \n                                   zBuff += deltaFactor;\n                                   aBuff += deltaFactor*pxx;\n                               }\n                           }\n                       }\n                       gl_FragColor = aBuff/zBuff;\n                } ";
            s = this.compileShader(t.replace(/%radius%/g, e.toString()));
            this.compiledProgram.set("denoise" + e, s);
          }
          this.ctx.useProgram(s.program);
          this.ctx.uniform1f(s.uniform.sigma, e / 3);
          this.ctx.uniform1f(s.uniform.threshold, t[1]);
          this.ctx.uniform2f(s.uniform.resolution, this.width, this.height);
          this.draw(s);
        }
        colorMatrix(t) {
          let e = new Float32Array(t);
          e[4] /= 255;
          e[9] /= 255;
          e[14] /= 255;
          e[19] /= 255;
          let s = this.compiledProgram.get("colormatrix");
          if (!s) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float m[20];\n\n                void main(void) {\n                    vec4 c = texture2D(texture, uv);\n                    gl_FragColor.r = m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4];\n                    gl_FragColor.g = m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9];\n                    gl_FragColor.b = m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14];\n                    gl_FragColor.a = m[15] * c.r + m[16] * c.g + m[17] * c.b + m[18] * c.a + m[19];\n                } ";
            s = this.compileShader(t);
            this.compiledProgram.set("colormatrix", s);
          }
          this.ctx.useProgram(s.program);
          this.ctx.uniform1fv(s.uniform.m, e);
          this.draw(s);
        }
        colorMatrixRange(t, e, s) {
          let i = new Float32Array(t);
          i[4] /= 255;
          i[9] /= 255;
          i[14] /= 255;
          i[19] /= 255;
          let a = this.compiledProgram.get("colormatrix-range");
          if (!a) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float m[20];\n                uniform float from;\n                uniform float to;\n\n                vec3 rgb2hsv(vec3 c) {\n                    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n                    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n                    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n                \n                    float d = q.x - min(q.w, q.y);\n                    float e = 1.0e-10;\n                    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n                }\n\n                void main(void) {\n                    vec4 c = texture2D(texture, uv);\n                    vec3 hsv = rgb2hsv(c.rgb);\n\n                    gl_FragColor = c;\n\n                    if((hsv.x >= from && hsv.x <= to) || (to < from && (hsv.x >= from || hsv.x <= to))) {\n\n                        float blend = 1.0;\n                        float grad = 29.0/360.0;\n\n                        float distFrom = distance(hsv.x, from);\n                        float distTo = distance(hsv.x, to);\n\n                        if(distFrom <= grad) blend = distFrom / grad;\n                        if(distTo <= grad) blend = distTo / grad;\n\n                        vec4 b = vec4(\n                            m[0] * c.r + m[1] * c.g + m[2] * c.b + m[3] * c.a + m[4],\n                            m[5] * c.r + m[6] * c.g + m[7] * c.b + m[8] * c.a + m[9],\n                            m[10] * c.r + m[11] * c.g + m[12] * c.b + m[13] * c.a + m[14],\n                            m[15] * c.r + m[16] * c.g + m[17] * c.b + m[18] * c.a + m[19]);\n                        \n                        gl_FragColor = mix(c, b, blend);\n                    }\n                } ";
            a = this.compileShader(t);
            this.compiledProgram.set("colormatrix-range", a);
          }
          this.ctx.useProgram(a.program);
          this.ctx.uniform1fv(a.uniform.m, i);
          this.ctx.uniform1f(a.uniform.from, e / 360);
          this.ctx.uniform1f(a.uniform.to, s / 360);
          this.draw(a);
        }
        desaturate() {
          this.saturation(-1);
        }
        invert() {
          this.colorMatrix([-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0]);
        }
        contrast(t) {
          let e = t + 1;
          let s = (e - 1) * -128;
          this.colorMatrix([e, 0, 0, 0, s, 0, e, 0, 0, s, 0, 0, e, 0, s, 0, 0, 0, 1, 0]);
        }
        hue(t, e, s) {
          let i = this.compiledProgram.get("hue" + (e ? "-range" : ""));
          if (!i) {
            let t = "\n            precision highp float;\n            varying vec2 uv;\n            \n            uniform sampler2D texture;\n            uniform float rotation;\n            uniform float from;\n            uniform float to;\n            \n            vec3 rgb2hsv(vec3 c) {\n                vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\n                vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\n                vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\n            \n                float d = q.x - min(q.w, q.y);\n                float e = 1.0e-10;\n                return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\n            }\n            vec3 hsv2rgb(vec3 c) {\n                vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n                vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n                return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n            }";
            t += e ? "\n                void main() {\n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    vec3 hsv = rgb2hsv(base.rgb);\n\n                    gl_FragColor = base;\n\n                    if((hsv.x >= from && hsv.x <= to) || (to < from && (hsv.x >= from || hsv.x <= to))) {\n\n                        float blend = 1.0;\n                        float grad = 29.0/360.0;\n\n                        float distFrom = distance(hsv.x, from);\n                        float distTo = distance(hsv.x, to);\n\n                        if(distFrom <= grad) blend = distFrom / grad;\n                        if(distTo <= grad) blend = distTo / grad;\n                        \n                        hsv.x += rotation * blend;\n                        \n                        gl_FragColor.rgb = hsv2rgb(hsv);\n                    }\n                }" : "\n                void main() {\n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    vec3 hsv = rgb2hsv(base.rgb);\n\n                    hsv.x += rotation;\n\n                    gl_FragColor = vec4(hsv2rgb(hsv), base.a);\n                }";
            i = this.compileShader(t);
            this.compiledProgram.set("hue" + (e ? "-range" : ""), i);
          }
          this.ctx.useProgram(i.program);
          this.ctx.uniform1f(i.uniform.rotation, t / 360);
          if (e) {
            this.ctx.uniform1f(i.uniform.from, e / 360);
            this.ctx.uniform1f(i.uniform.to, s / 360);
          }
          this.draw(i);
        }
        saturation(t, e, s) {
          let i = t * 2 / 3 + 1;
          let a = (i - 1) * -0.5;
          if (e) {
            this.colorMatrixRange([i, a, a, 0, 0, a, i, a, 0, 0, a, a, i, 0, 0, 0, 0, 0, 1, 0], e, s);
          } else {
            this.colorMatrix([i, a, a, 0, 0, a, i, a, 0, 0, a, a, i, 0, 0, 0, 0, 0, 1, 0]);
          }
        }
        lightness(t, e, s) {
          t *= 255;
          if (e) {
            this.colorMatrixRange([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0], e, s);
          } else {
            this.colorMatrix([1, 0, 0, 0, t, 0, 1, 0, 0, t, 0, 0, 1, 0, t, 0, 0, 0, 1, 0]);
          }
        }
        colorize(t) {
          this.fill(new h.A(a.A.fromHSB(t, 1, 1), "color", 1));
        }
        exposure(t) {
          let e = this.compiledProgram.get("exposure");
          if (!e) {
            let t = ["#define GLSLIFY 1", "precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "const float epsilon = 0.000001;", "const float mx = 1.0 - epsilon;", "const mat3 matRGBtoROMM = mat3(0.5293459296226501, 0.3300727903842926, 0.14058130979537964, 0.09837432950735092, 0.8734610080718994, 0.028164653107523918, 0.01688321679830551, 0.11767247319221497, 0.8654443025588989);", "const mat3 matROMMtoRGB = mat3(2.0340757369995117, -0.727334201335907, -0.3067416846752167, -0.22881317138671875, 1.2317301034927368, -0.0029169507324695587, -0.008569774217903614, -0.1532866358757019, 1.1618564128875732);", "float ramp(in float t){", "t *= 2.0;", "if (t >= 1.0) {", "t -= 1.0;", "t = log(0.5) / log(0.5*(1.0-t) + 0.9332*t);", "}", "return clamp(t, 0.001, 10.0);", "}", "vec3 rgb2hsv(in vec3 c) {", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsv2rgb(in vec3 c) {", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "vec3 setHue(in vec3 res, in vec3 base) {", "vec3 hsv = rgb2hsv(base);", "vec3 res_hsv = rgb2hsv(res);", "return hsv2rgb(vec3(hsv.x, res_hsv.y, res_hsv.z));", "}", "void main() {", "lowp vec4 col = texture2D(texture, uv.xy);", "vec3 base = col.rgb * matRGBtoROMM;", "float a = abs(amount) * col.a + epsilon;", "float v = pow(2.0, a*2.0+1.0)-2.0;", "float m = mx - exp(-v);", "vec3 res = (amount > 0.0) ? (1.0 - exp(-v*base)) / m : log(1.0-base*m) / -v;", "res = mix(base, res, min(a*100.0, 1.0));", "res = setHue(res, base);", "res = pow(res, vec3(ramp(1.0 - (0.0 * col.a + 1.0) / 2.0)));", "res = res * matROMMtoRGB;", "gl_FragColor = vec4(res, col.a);", "}"].join("\n");
            e = this.compileShader(t);
            this.compiledProgram.set("exposure", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        highlights(t) {
          let e = this.compiledProgram.get("highlights");
          if (!e) {
            let t = ["#define GLSLIFY 1", "precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "const float epsilon = 0.000001;", "const float mx = 1.0 - epsilon;", "const float PI = 3.1415926535897932384626433832795;", "const mat3 matRGBtoROMM = mat3(0.5293459296226501, 0.3300727903842926, 0.14058130979537964, 0.09837432950735092, 0.8734610080718994, 0.028164653107523918, 0.01688321679830551, 0.11767247319221497, 0.8654443025588989);", "const mat3 matROMMtoRGB = mat3(2.0340757369995117, -0.727334201335907, -0.3067416846752167, -0.22881317138671875, 1.2317301034927368, -0.0029169507324695587, -0.008569774217903614, -0.1532866358757019, 1.1618564128875732);", "float luma_romm(in vec3 color){", "return dot(color, vec3(0.242655, 0.755158, 0.002187));", "}", "float luma(in vec3 color){", "return dot(color, vec3(0.298839, 0.586811, 0.11435));", "}", "vec3 rgb2hsv(in vec3 c) {", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsv2rgb(in vec3 c) {", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "vec3 setHue(in vec3 res, in vec3 base) {", "vec3 hsv = rgb2hsv(base);", "vec3 res_hsv = rgb2hsv(res);", "return hsv2rgb(vec3(hsv.x, res_hsv.y, res_hsv.z));", "}", "float gaussian(in float x) {", "return 1.0 - exp(-PI*2.0*x*x);", "}", "void main() {", "lowp vec4 col = texture2D(texture, uv.xy);", "lowp vec3 map = col.rgb;", "vec3 base = col.rgb * matRGBtoROMM;", "float base_lum = luma(col.rgb);", "float map_lum = luma_romm(map * matRGBtoROMM);", "float exposure = mix(amount, 0.0, 1.0 - map_lum) * col.a;", "float a = abs(exposure) * col.a + epsilon;", "float v = pow(2.0, a+1.0)-2.0;", "float m = mx - exp(-v);", "vec3 res = (exposure > 0.0) ? (1.0 - exp(-v*base)) / m : log(1.0-base*m) / -v;", "res = mix(base, res, min(a*100.0, 1.0));", "res = setHue(res, base);", "res = res * matROMMtoRGB;", "gl_FragColor = vec4(res, col.a);", "}"].join("\n");
            e = this.compileShader(t);
            this.compiledProgram.set("highlights", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        shadows(t) {
          let e = this.compiledProgram.get("shadows");
          if (!e) {
            let t = ["#define GLSLIFY 1", "precision highp float;", "varying vec2 uv;", "uniform sampler2D texture;", "uniform float amount;", "const float epsilon = 0.000001;", "const float mx = 1.0 - epsilon;", "const float PI = 3.1415926535897932384626433832795;", "const mat3 matRGBtoROMM = mat3(0.5293459296226501, 0.3300727903842926, 0.14058130979537964, 0.09837432950735092, 0.8734610080718994, 0.028164653107523918, 0.01688321679830551, 0.11767247319221497, 0.8654443025588989);", "const mat3 matROMMtoRGB = mat3(2.0340757369995117, -0.727334201335907, -0.3067416846752167, -0.22881317138671875, 1.2317301034927368, -0.0029169507324695587, -0.008569774217903614, -0.1532866358757019, 1.1618564128875732);", "float luma_romm(in vec3 color){", "return dot(color, vec3(0.242655, 0.755158, 0.002187));", "}", "float luma(in vec3 color){", "return dot(color, vec3(0.298839, 0.586811, 0.11435));", "}", "vec3 rgb2hsv(in vec3 c) {", "vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);", "vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));", "vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));", "float d = q.x - min(q.w, q.y);", "float e = 1.0e-10;", "return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);", "}", "vec3 hsv2rgb(in vec3 c) {", "vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);", "vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);", "return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);", "}", "vec3 setHue(in vec3 res, in vec3 base) {", "vec3 hsv = rgb2hsv(base);", "vec3 res_hsv = rgb2hsv(res);", "return hsv2rgb(vec3(hsv.x, res_hsv.y, res_hsv.z));", "}", "float gaussian(in float x) {", "return 1.0 - exp(-PI*2.0*x*x);", "}", "void main() {", "lowp vec4 col = texture2D(texture, uv.xy);", "lowp vec3 map = col.rgb;", "vec3 base = col.rgb * matRGBtoROMM;", "float base_lum = luma(col.rgb);", "float map_lum = luma_romm(map * matRGBtoROMM);", "float exposure = mix(0.0, amount, 1.0 - map_lum) * col.a;", "float a = abs(exposure) * col.a + epsilon;", "float v = pow(2.0, a+1.0)-2.0;", "float m = mx - exp(-v);", "vec3 res = (exposure > 0.0) ? (1.0 - exp(-v*base)) / m : log(1.0-base*m) / -v;", "res = mix(base, res, min(a*100.0, 1.0));", "res = setHue(res, base);", "res = res * matROMMtoRGB;", "gl_FragColor = vec4(res, col.a);", "}"].join("\n");
            e = this.compileShader(t);
            this.compiledProgram.set("shadows", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        dehaze(t) {
          let e = this.compiledProgram.get("dehaze");
          if (!e) {
            let t = "\n\n                #define GLSLIFY 1;\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform float amount;  // -1.0 ~ 1.0\n\n                uniform vec2 size;\n\n                float hazeMap(vec4 base) {\n                    vec3 color = vec3(1.0, 1.0, 1.0);\n                    vec2 step = vec2(1.0 / size.xy);\n                    const int patchRadius = 1; // the half size for shift in 3 x 3 patch.\n                    for (int i = -patchRadius; i <= patchRadius; ++i) {\n                       for (int j = -patchRadius; j <= patchRadius; ++j) {\n                           vec2 uv = clamp(uv + (vec2(i, j) * step), 0.0, 1.0);\n                           color = min(color, base.rgb);\n                        }\n                    }\n                    return min(color.r, min(color.g, color.b));\n                }\n\n                void main() {\n                    \n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    lowp float haze = hazeMap(base);\n\n                    float transmission = 1.0 - 0.95 * haze;\n                    const float A = 0.95; //0.95 intensity. We can consider to collect 0.1% brightest pixel from the dark channel image.\n                    const float t0 = 0.1; //0.1 in the paper, we can increase it for solving the color bleeding.\n                    float t = mix(1.0, max(t0, transmission), amount);\n                    vec3 J = (base.rgb - A) / t + A;\n                    gl_FragColor = vec4(J, base.a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("dehaze", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.size, this.width, this.height);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        solarize() {
          this.paletteMap ||= new ImageData(256, 1);
          for (let t = 0; t < 256; ++t) {
            let e = (t / 255 > 0.5 ? (t / 255 - 0.5) * 2 : (0.5 - t / 255) * 2) * 255;
            e = e > 255 ? 255 : e < 0 ? 0 : e;
            this.paletteMap.data[t * 4] = this.paletteMap.data[t * 4 + 1] = this.paletteMap.data[t * 4 + 2] = e;
          }
          this.mapping(this.paletteMap);
        }
        monochrome(t) {
          let e = this.compiledProgram.get("monochrome");
          if (!e) {
            let t = "\n            precision highp float;\n            varying vec2 uv;\n            \n            uniform sampler2D texture;\n\n            uniform float r;\n            uniform float g;\n            uniform float b;\n            \n            float luma(vec3 color) {\n                return dot(color, vec3(r, g, b));\n            }\n            void main() {\n                lowp vec4 base = texture2D(texture, uv.xy);\n                float avg = luma(base.rgb);\n\n                gl_FragColor = vec4(avg, avg, avg, base.a);\n            }";
            e = this.compileShader(t);
            this.compiledProgram.set("monochrome", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.r, t.r);
          this.ctx.uniform1f(e.uniform.g, t.g);
          this.ctx.uniform1f(e.uniform.b, t.b);
          this.draw(e);
        }
        curves(t) {
          this.paletteMap ||= new ImageData(256, 1);
          if (t.preset !== undefined) {
            t = p.X.createCurveSet(t);
          }
          p.A.fillPaletteMap(t, this.paletteMap);
          this.mapping(this.paletteMap);
        }
        levels(t) {
          this.paletteMap ||= new ImageData(256, 1);
          u.A.fillPaletteMap(t, this.paletteMap);
          this.mapping(this.paletteMap);
        }
        multilevels(t) {
          this.paletteMap ||= new ImageData(256, 1);
          u.A.fillRGBPaletteMap(t[0].isFlat() ? undefined : t[0], t[1].isFlat() ? undefined : t[1], t[2].isFlat() ? undefined : t[2], this.paletteMap);
          this.mapping(this.paletteMap);
        }
        mapping(t) {
          let e = this.compiledProgram.get("mapping");
          if (!e) {
            let t = "\n                #define GLSLIFY 1\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform sampler2D paletteMap;\n\n                void main() {\n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    float r = texture2D(paletteMap, vec2(base.r, 0)).r;\n                    float g = texture2D(paletteMap, vec2(base.g, 0)).g;\n                    float b = texture2D(paletteMap, vec2(base.b, 0)).b;\n                    gl_FragColor = vec4(r, g, b, base.a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("mapping", e);
          }
          this.ctx.useProgram(e.program);
          let s = e.getTextureById("paletteMap");
          s.createTexture(this.ctx, t.width, t.height);
          s.uploadData(this.ctx, t);
          this.draw(e);
        }
        lookup(t) {
          let e = this.compiledProgram.get("lookup");
          if (!e) {
            let t = "\n            precision highp float;\n            varying vec2 uv;\n\n            uniform sampler2D texture;\n            uniform sampler2D paletteMap;\n            \n            float luma(vec3 color) {\n                return dot(color, vec3(0.299, 0.587, 0.114));\n            }\n\n            void main() {\n                lowp vec4 base = texture2D(texture, uv.xy);\n                float avg = luma(base.rgb);\n                float r = texture2D(paletteMap, vec2(avg, 0)).r;\n                float g = texture2D(paletteMap, vec2(avg, 0)).g;\n                float b = texture2D(paletteMap, vec2(avg, 0)).b;\n                gl_FragColor = vec4(r, g, b, base.a);\n            }";
            e = this.compileShader(t);
            this.compiledProgram.set("lookup", e);
          }
          this.ctx.useProgram(e.program);
          let s = e.getTextureById("paletteMap");
          s.createTexture(this.ctx, t.width, t.height);
          s.uploadData(this.ctx, t);
          this.draw(e);
        }
        toning(t) {
          this.paletteMap ||= new ImageData(256, 1);
          c.A.fillPaletteMap(t, this.paletteMap);
          let e = this.compiledProgram.get("toning");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n\n                uniform sampler2D texture;\n                uniform sampler2D paletteMap;\n\n                uniform float amount;\n                \n                float luma(vec3 color) {\n                    return dot(color, vec3(0.299, 0.587, 0.114));\n                }\n\n                void main() {\n                    lowp vec4 base = texture2D(texture, uv.xy);\n                    float avg = luma(base.rgb);\n                    float r = texture2D(paletteMap, vec2(avg, 0)).r;\n                    float g = texture2D(paletteMap, vec2(avg, 0)).g;\n                    float b = texture2D(paletteMap, vec2(avg, 0)).b;\n                    gl_FragColor = mix(base, vec4(r, g, b, base.a), amount);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("toning", e);
          }
          this.ctx.useProgram(e.program);
          let s = e.getTextureById("paletteMap");
          s.createTexture(this.ctx, this.paletteMap.width, this.paletteMap.height);
          s.uploadData(this.ctx, this.paletteMap);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        fill(t) {
          let e = this.compiledProgram.get("fill-" + t.blend);
          if (!e) {
            let s = "";
            switch (t.blend) {
              case "color":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        vec3 blendColor(vec3 base, vec3 blend) {\n                            vec3 color = vec3(blend.rgb);\n                            base.r = base.r * 0.30 + base.g * 0.59 + base.b * 0.11;\n                            \n                            vec3 power = (color.r+color.g+color.b) * 0.3333 - color;\n                            base.rgb = pow(base.rrr, 1.0 + power);\n\n                            return base;\n                        }\n                        vec3 blendColor(vec3 base, vec3 blend, float opacity) {\n                            return (blendColor(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendColor(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "soft-light":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendSoftLight(float base, float blend) {\n                            return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n                        }\n                        vec3 blendSoftLight(vec3 base, vec3 blend) {\n                            return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));\n                        }\n                        vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n                            return (blendSoftLight(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendSoftLight(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "hard-light":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendOverlay(float base, float blend) {\n                            return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n                        }\n                        vec3 blendOverlay(vec3 base, vec3 blend) {\n                            return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n                        }\n                        vec3 blendHardLight(vec3 base, vec3 blend) {\n                            return blendOverlay(blend,base);\n                        }\n                        vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n                            return (blendHardLight(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendHardLight(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "vivid-light":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendColorBurn(float base, float blend) {\n                            return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n                        }\n                        float blendColorDodge(float base, float blend) {\n                            return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n                        }\n                        float blendVividLight(float base, float blend) {\n                            return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));\n                        }\n                        vec3 blendVividLight(vec3 base, vec3 blend) {\n                            return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));\n                        }\n                        vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n                            return (blendVividLight(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendVividLight(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "overlay":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n\n                        float blendOverlay(float base, float blend) {\n                            return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n                        }\n                        vec3 blendOverlay(vec3 base, vec3 blend) {\n                            return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));\n                        }\n                        vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n                            return (blendOverlay(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendOverlay(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "multiply":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        vec3 blendMultiply(vec3 base, vec3 blend) {\n                            return base*blend;\n                        }\n                        vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n                            return (blendMultiply(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendMultiply(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "color-dodge":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        float blendColorDodge(float base, float blend) {\n                            return (blend==1.0)?blend:min(base/(1.0-blend),1.0);\n                        }\n                        vec3 blendColorDodge(vec3 base, vec3 blend) {\n                            return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));\n                        }\n                        vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n                            return (blendColorDodge(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendColorDodge(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "color-burn":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        float blendColorBurn(float base, float blend) {\n                            return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);\n                        }\n                        vec3 blendColorBurn(vec3 base, vec3 blend) {\n                            return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));\n                        }\n                        vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n                            return (blendColorBurn(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendColorBurn(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              case "screen":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        float blendScreen(float base, float blend) {\n                            return 1.0-((1.0-base)*(1.0-blend));\n                        }\n                        vec3 blendScreen(vec3 base, vec3 blend) {\n                            return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));\n                        }\n                        vec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n                            return (blendScreen(base, blend) * opacity + base * (1.0 - opacity));\n                        }\n\n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = vec4(blendScreen(base.rgb, color.rgb, amount), base.a);\n                        }";
                break;
              default:
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform vec4 color;\n                        \n                        void main() {\n                            vec4 base = texture2D(texture, uv.xy);\n                            gl_FragColor = mix(base, color, amount);\n                        }";
            }
            e = this.compileShader(s);
            this.compiledProgram.set("fill-" + t.blend, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform4f(e.uniform.color, t.color.r / 255, t.color.g / 255, t.color.b / 255, 1);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        glamour(t) {
          let e = this.compiledProgram.get("glamour");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 px;\n\n                float normpdf(in float x, in float sigma) {\n                    return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;\n                }\n\n                vec3 blurMap() {\n                    //declare stuff\n                    const int mSize = 11;\n                    const int kSize = (mSize-1)/2;\n                    float kernel[mSize];\n                    vec3 final_colour = vec3(0.0);\n                    \n                    //create the 1-D kernel\n                    float sigma = 7.0;\n                    float Z = 0.0;\n                    for (int j = 0; j <= kSize; ++j){\n                        kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);\n                    }\n                    \n                    //get the normalization factor (as the gaussian has been clamped)\n                    for (int j = 0; j < mSize; ++j){\n                        Z += kernel[j];\n                    }\n                    \n                    //read out the texels\n                    for (int i=-kSize; i <= kSize; ++i){\n                        for (int j=-kSize; j <= kSize; ++j){\n                            final_colour += kernel[kSize+j] * kernel[kSize+i] * texture2D(texture, (uv.xy + vec2(float(i),float(j))*px)).rgb;\n                        }\n                    }\n                    return vec3(final_colour/(Z*Z));\n                }\n\n                float luma(vec3 color) {\n                    return dot(color, vec3(0.299, 0.587, 0.114));\n                }\n\n                void main() {\n                    \n                    vec4 base = texture2D(texture, uv);\n                    vec3 color = blurMap();\n                    \n                    color = vec3(luma(color));\n\n                    color = vec3(\n                        (base.r <= 0.5) ? (2.0 * base.r * color.r) : (1.0 - 2.0 * (1.0 - base.r) * (1.0 - color.r)),\n                        (base.g <= 0.5) ? (2.0 * base.g * color.g) : (1.0 - 2.0 * (1.0 - base.g) * (1.0 - color.g)),\n                        (base.b <= 0.5) ? (2.0 * base.b * color.b) : (1.0 - 2.0 * (1.0 - base.b) * (1.0 - color.b))\n                    );\n                \n                    gl_FragColor = mix(base, vec4(color, base.a), amount);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("glamour", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.draw(e);
        }
        kaleidoscope(t) {
          let e = this.compiledProgram.get("kaleidoscope");
          if (!e) {
            let t = "\n                precision mediump float;\n                varying vec2 uv;\n                #define PI 3.14159265359\n\n                uniform sampler2D texture;\n                uniform vec2 resolution;\n\n                uniform float u_stretch;\n                uniform float u_position;\n                uniform float u_amount;\n\n                int modwhole(float a, float b) {\n                    float m = mod(a, b);\n\n                    return int (m+.5);\n                }\n\n                void main(void) {\n                    int numOfAxis = int(u_amount);\n                    float angleFrac = (2. * PI) / float ( 2 * numOfAxis);\n\n                    vec2 uvc = uv;\n                    uvc -= .5;\n\n                    // Convert to Polar\n                    float phi = abs(atan(uvc.x, uvc.y));\n                    float r = length(uvc);\n\n                    int count = int(phi / angleFrac);\n\n                    phi = mod(phi, angleFrac);\n                    if (modwhole (float(count), 2.) == 1) {\n                        phi = angleFrac - phi;\n                    }\n\n                    // from polar coordiantes\n                    float x = r * cos(phi);\n                    float y = r * sin(phi);\n\n                    float stretch = 1. + (1. - u_stretch);\n                    float position = u_position * PI * .5;\n\n                    uvc = vec2(x, y) * stretch + sin(position);\n\n                    if (uvc.x < 0.) uvc.x += 1.;\n                    if (uvc.x > 1.) uvc.x -= 1.;\n                \n                    if (uvc.y < 0.) uvc.y += 1.;\n                    if (uvc.y > 1.) uvc.y -= 1.;\n\n                    gl_FragColor = texture2D (texture, uvc);\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("kaleidoscope", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.u_amount, t.amount);
          this.ctx.uniform1f(e.uniform.u_stretch, t.stretch);
          this.ctx.uniform1f(e.uniform.u_position, t.position);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.draw(e);
        }
        polarcoordinates(t) {
          let e = this.compiledProgram.get("polarcoordinates");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                #define PI 3.14159265359\n                #define PI_2 6.2831\n\n                uniform sampler2D texture;\n                uniform int flip;\n                uniform float overlap;\n                uniform float rotate;\n                uniform vec2 resolution;\n                uniform int symmetry;\n\n                mat2 rotate2d(float _angle){\n                    return mat2(cos(_angle),-sin(_angle),\n                                sin(_angle),cos(_angle));\n                }\n\n                vec2 squareImage(vec2 uv) {\n                    // Aspect Ratio\n                    float ar = resolution.x / resolution.y;\n\n                    // Square the image at the center if rectangular\n                    if (symmetry == 1) {\n                        if (resolution.x > resolution.y) {\n                            float leftEdge = (1.0-1.0/ar) * 0.5;\n                            float rightEdge = 1.0 - leftEdge;\n\n                            if (uv.x < leftEdge) {\n                                uv = vec2(0, uv.y); // Fill in the left edge\n                            } else if (uv.x > rightEdge) {\n                                uv = vec2(1, uv.y); // Fill in the right edge\n                            }\n                            else {\n                                uv.x -= leftEdge; // Square the image on X\n                                uv.x *= ar;\n                            }\n                        } else if (resolution.y > resolution.x) {\n                            float bottomEdge = (1.0-ar) * 0.5;\n                            float topEdge = 1.0 - bottomEdge;\n\n                            if (uv.y < bottomEdge) {\n                                uv = vec2(uv.x, 0); // Fill in the bottom edge\n                            } else if (uv.y > topEdge) {\n                                uv = vec2(uv.x, 1); // Fill in the top edge\n                            }\n                            else {\n                                uv.y -= bottomEdge; // Square the image on Y\n                                uv.y /= ar;\n                            }\n                        }\n                    }\n                    return uv;\n                }\n\n                void main(void) {           \n                    // Square the image\n                    vec2 uvc = squareImage(uv);\n\n                    // Bring uv coordinates to center 0.5\n                    uvc = uvc-0.5;\n\n                    // Rotate uv by angle\n                    uvc = rotate2d( rotate ) * uvc;\n\n                    // Cartesian to polar\n                    float r = length(uvc) * 2.0;\n                    float a = atan(uvc.x, uvc.y);\n\n                    // Move from -PI -> PI to 0 -> 1\n                    vec2 uvp = vec2(a / (PI_2 + overlap) + 0.5, r);\n\n                    // Flip the image by 180 degrees\n                    uvp = flip == 1 ? 1.0 - uvp : uvp;\n\n                    // Compute color\n                    gl_FragColor = texture2D(texture, uvp);\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("polarcoordinates", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1i(e.uniform.flip, t.flip ? 1 : 0);
          this.ctx.uniform1i(e.uniform.symmetry, t.symmetry ? 1 : 0);
          this.ctx.uniform1f(e.uniform.overlap, t.overlap);
          this.ctx.uniform1f(e.uniform.rotate, t.rotate);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.draw(e);
        }
        fisheye(t) {
          let e = this.compiledProgram.get("fisheye");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                #define PI 3.14159265359\n\n                uniform sampler2D texture;\n                uniform vec2 center;\n                uniform float amount;\n                uniform float aperture;\n                uniform int edgeFill;\n                uniform vec2 resolution;\n\n                vec2 edgeFillReflect(vec2 uvc) {\n                    if (uvc.x < 0.) uvc.x = -uvc.x;\n                    if (uvc.y < 0.) uvc.y = -uvc.y;\n                    if (uvc.x > 1.) uvc.x = 2. - uvc.x;\n                    if (uvc.y > 1.) uvc.y = 2. - uvc.y;\n\n                    return uvc;\n                }\n\n                vec2 edgeFillRepeat(vec2 uvc) {\n                    if (uvc.x < 0.) uvc.x = 1. + uvc.x;\n                    if (uvc.y < 0.) uvc.y = 1. + uvc.y;\n                    if (uvc.x > 1.) uvc.x = uvc.x - 1.;\n                    if (uvc.y > 1.) uvc.y = uvc.y - 1.;\n\n                    return uvc;\n                }\n\n                int edgeFillNone(vec2 uvc) {\n                    if (uvc.x < 0. || uvc.y < 0. || uvc.x > 1. || uvc.y > 1.) {\n                        return 1;\n                    }\n                    return 0;\n                }\n\n                void main(void) {\n\n                    // Normalized device space i.e. range of [-1, 1]\n                    vec2 ndcPos = uv * 2. - center * 2.;\n\n                    // Aspect ratio of the viewport\n                    float aspect = resolution.x / resolution.y;\n\n                    // Relationship between the radius of the perimeter circle (r or half_dist) and\n                    // the angle (eye_angle): \n                    // Bisect the isosceles triangle\n                    float eye_angle = abs(aperture);\n                    float half_angle = eye_angle / 2.;\n                    float half_dist = tan(half_angle);\n\n                    // With the aspect ratio of the viewport (aspect)\n                    vec2 vp_scale = vec2(aspect, 1.);\n                    vec2 P = ndcPos * vp_scale;\n\n                    // Diameter or the length of the viewport\n                    float vp_dia = length(vp_scale);\n\n                    // Relative distance to the center of the viewport\n                    float rel_dist = length(P) / vp_dia;\n\n                    // Relative position of the point P in relation to the aspect ratio\n                    vec2 rel_P = normalize(P) / normalize(vp_scale);\n\n                    vec2 pos_prj = ndcPos;\n                    if (aperture > 0.) {\n                        // Projection from spherical surface to the place\n                        float beta = rel_dist * half_angle;\n                        pos_prj = rel_P * tan(beta) / half_angle * pow(.9, amount * 5.);\n                    } else if (aperture < 0.) {\n                        // Projection from the plane to the spherical surface\n                        float beta = atan(rel_dist * half_dist);\n                        pos_prj = rel_P * beta / half_angle * pow(.9, amount * 5.);\n                    }\n\n                    vec2 uv_prj = pos_prj * .5 + center;\n\n                    // Return transparent if no edge fill\n                    if (edgeFill == 0) {\n                        if (edgeFillNone(uv_prj) == 1) {\n                            discard;\n                        }\n                    }\n                    if (edgeFill == 1) {\n                        uv_prj = edgeFillReflect(uv_prj);\n                    } \n                    if (edgeFill == 2) {\n                        uv_prj = edgeFillRepeat(uv_prj);\n                    }\n\n                    gl_FragColor = texture2D(texture, uv_prj);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("fisheye", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform1f(e.uniform.aperture, t.aperture);
          this.ctx.uniform2f(e.uniform.center, t.x, t.y);
          this.ctx.uniform1i(e.uniform.edgeFill, t.edgeFill);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.draw(e);
        }
        wave(t) {
          let e = this.compiledProgram.get("wave");
          if (!e) {
            let t = "\n                precision mediump float;\n                uniform int type;\n                uniform float amplitude;\n                uniform float scale;\n                varying vec2 uv;\n                uniform int edgeApprox;\n                // uniform vec2 resolution;\n                uniform sampler2D texture;\n                uniform float rotate;\n                #define PI 3.14159265359\n\n                mat2 rotate2d(float _angle){\n                    return mat2(cos(_angle),-sin(_angle),\n                                sin(_angle),cos(_angle));\n                }\n\n                float cot(float angle) {\n                    return cos(angle) / sin(angle);\n                }\n\n                float sinewave(float rad) {\n                    return amplitude * sin(scale * 2. * PI * rad);\n                }\n\n                float trianglewave(float rad) {\n                    return amplitude * 2. / PI * asin(sin(scale * 2. * PI * rad));\n                }\n\n                float squarewave(float rad) {\n                    return amplitude * sign(sin(scale * 2. * PI * rad));\n                }\n\n                void main() {\n                    vec2 uvc = uv;\n\n                    uvc -= 0.5;\n                    uvc = rotate2d(-rotate) * uvc;\n\n                    if (type == 0) {\n                        // sine wave\n                        uvc.y = sinewave(uvc.x) + uvc.y;\n                    } else if (type == 1) {\n                        // triangular wave\n                        uvc.y = trianglewave(uvc.x) + uvc.y;\n                    } else if (type == 2) {\n                        // square wave\n                        uvc.y = squarewave(uvc.x) + uvc.y;\n                    } else {\n                        // sawtooth wave\n                        // uvc.y = amplitude * 2. / PI * atan(cot(scale * 2. * PI * uvc.x));\n                    }\n                    \n                    uvc = rotate2d(rotate) * uvc;\n                    uvc += 0.5;\n                    \n                    // Clamp\n                    // uvc = clamp(uvc, 0., 1.);\n\n                    if (edgeApprox == 2) {\n                        // Repeat acros the edges with the opposite side color\n                        if (uvc.x < 0.) uvc.x = 1. + uvc.x;\n                        if (uvc.y < 0.) uvc.y = 1. + uvc.y;\n                        if (uvc.x > 1.) uvc.x = uvc.x - 1.;\n                        if (uvc.y > 1.) uvc.y = uvc.y - 1.;\n                    } else if (edgeApprox == 1) {\n                        // Approximate (natural) around the edges with the reflection color\n                        if (uvc.x < 0.) uvc.x = -uvc.x;\n                        if (uvc.y < 0.) uvc.y = -uvc.y;\n                        if (uvc.x > 1.) uvc.x = 2. - uvc.x;\n                        if (uvc.y > 1.) uvc.y = 2. - uvc.y;    \n                    } else {\n                        // Don't approximate, render transparent\n                        if (uvc.x < 0. || uvc.x > 1. || \n                            uvc.y < 0. || uvc.y > 1.) {\n                            gl_FragColor = vec4 (0.0, 0.0, 0.0, 0.0);\n                            return;\n                        }    \n                    }\n\n                    gl_FragColor = texture2D(texture, uvc);\n                    return;\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("wave", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1i(e.uniform.type, t.type);
          this.ctx.uniform1f(e.uniform.amplitude, t.amplitude);
          this.ctx.uniform1f(e.uniform.scale, t.scale);
          this.ctx.uniform1f(e.uniform.rotate, t.rotate);
          this.ctx.uniform1i(e.uniform.edgeApprox, t.edgeApprox);
          this.draw(e);
        }
        reflect(t) {
          let e = this.compiledProgram.get("reflect");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                #define PI 3.14159265359\n                #define PI_2 6.2831\n\n                uniform sampler2D texture;\n                uniform int type;\n                uniform vec2 resolution;\n                uniform vec2 center;\n                uniform vec2 offset;\n\n                // constant integers for directions\n                const int RIGHT = 1, LEFT = -1, ZERO = 0;\n\n                const float ALMOST_ZERO = 0.00001;\n\n                mat2 rotate2d(float _angle){\n                    return mat2(cos(_angle),-sin(_angle),\n                                sin(_angle),cos(_angle));\n                }\n\n                vec2 squareImage(vec2 uv) {\n                    // return uv;\n\n                    float ar = resolution.x / resolution.y;\n\n                    if (resolution.x > resolution.y) {\n                        uv.y /= ar;\n                    }\n                    else {\n                        uv.x *= ar;\n                    }\n                    return uv;\n                }\n\n                vec2 squareImagereverse(vec2 uv) {\n                    float ar = resolution.x / resolution.y;\n\n                    if (resolution.x > resolution.y) {\n                        uv.y /= ar;\n                        uv.y += (1. - 1./ar) * 0.5;\n                    }\n                    else {\n                        uv.x *= ar;\n                        uv.x += (1. - ar) * 0.5;\n                    }\n                    return uv;\n                }\n\n                int direction(vec2 A, vec2 B, vec2 P) {\n                    // subtracting co-ordinates of point A from\n                    // B and P, to make A as origin\n                    B.x -= A.x;\n                    B.y -= A.y;\n                    P.x -= A.x;\n                    P.y -= A.y;\n                \n                    // Determining cross Product\n                    float cross_product = B.x * P.y - B.y * P.x;\n                \n                    // return RIGHT if cross product is positive\n                    if (cross_product > ALMOST_ZERO)\n                        return LEFT;\n                \n                    // return LEFT if cross product is negative\n                    if (cross_product < -ALMOST_ZERO)\n                        return RIGHT;\n                \n                    // return ZERO if cross product is zero.\n                    return ZERO;\n                }\n                \n                vec2 reflectmagic(vec2 uvc, int reflectfrom, mat2 transf, vec2 A, vec2 B, vec2 center) {\n\n                    vec2 cent = center - 0.5;\n                    uvc -= center;\n\n                    int dircent = direction(A, B, cent);\n                    int diruv = direction(A, B, uvc);\n\n                    uvc = dircent >= ZERO && diruv >= ZERO || dircent == LEFT && diruv == LEFT ? transf * uvc : uvc;\n\n                    uvc += center;\n\n                    uvc -= 0.5;\n\n                    if (reflectfrom == LEFT) {\n                        uvc = dircent >= ZERO ? uvc : transf * uvc;\n                    } else {\n                        uvc = dircent == LEFT ? uvc : transf * uvc;\n                    }\n\n                    uvc += 0.5;\n\n                    return uvc;\n                }\n\n                vec2 reflectx(vec2 uvc, int reflectfrom) {\n                    mat2 transf = mat2(-1., 0., 0., 1.);     \n\n                    vec2 A = vec2 (0., -1.);\n                    vec2 B = vec2 (0., 1.);\n\n                    return reflectmagic(uvc, reflectfrom, transf, A, B, center);\n                }\n\n                vec2 reflecty(vec2 uvc, int reflectfrom) {\n                    mat2 transf = mat2(1., 0., 0., -1.);    \n\n                    vec2 A = vec2 (-1., 0.);\n                    vec2 B = vec2 (1., 0.);\n\n                    return reflectmagic(uvc, reflectfrom, transf, A, B, center);\n                }\n\n                vec2 reflectxequalminusy(vec2 uvc, int reflectfrom) {\n                    mat2 transf = mat2(0., 1., 1., 0.);\n\n                    vec2 A = vec2 (-1., -1.);\n                    vec2 B = vec2 (1., 1.);\n\n                    return reflectmagic(uvc, reflectfrom, transf, A, B, vec2(center.x, 1.-center.x));\n                }\n\n                vec2 reflectxequaly(vec2 uvc, int reflectfrom) {\n                    mat2 transf = mat2(0., -1., -1., 0.);\n\n                    vec2 A = vec2 (-1., 1.);\n                    vec2 B = vec2 (1., -1.);\n\n                    return reflectmagic(uvc, reflectfrom, transf, A, B, vec2(center.x, center.x));\n                }\n\n                vec2 reflect(vec2 uvc) {\n                    //reflect-type-minus-x\n                    if (type == 1) {\n                        uvc = reflectx(uvc, LEFT);\n                    }\n                    //reflect-type-minus-y\n                    else if (type == 2) {\n                        uvc = reflecty(uvc, LEFT);\n                    }\n                    //reflect-type-plus-x\n                    if (type == 3) {\n                        uvc = reflectx(uvc, RIGHT);\n                    }\n                    //reflect-type-plus-y\n                    else if (type == 4) {\n                        uvc = reflecty(uvc, RIGHT);\n                    }\n                    //reflect-type-minus-x-minus-y\n                    else if (type == 5) {\n                        uvc = reflectx(uvc, LEFT);\n                        uvc = reflecty(uvc, LEFT);\n                    }\n                    //reflect-type-minus-x-plus-y\n                    else if (type == 6) {\n                        uvc = reflectx(uvc, LEFT);\n                        uvc = reflecty(uvc, RIGHT);\n                    }\n                    //reflect-type-plus-x-plus-y\n                    else if (type == 7) {\n                        uvc = reflectx(uvc, RIGHT);\n                        uvc = reflecty(uvc, RIGHT);\n                    }\n                    //reflect-type-plus-x-minus-y\n                    else if (type == 8) {\n                        uvc = reflectx(uvc, RIGHT);\n                        uvc = reflecty(uvc, LEFT);\n                    }\n                    //reflect-type-above-x-equalto-y\n                    else if (type == 9) {\n                        uvc = reflectxequalminusy(uvc, LEFT);\n                    }\n                    // reflect-type-below-x-equalto-minus-y\n                    else if (type == 10) {\n                        uvc = reflectxequaly(uvc, RIGHT);\n                    }\n                    // reflect-type-above-x-equalto-minus-y\n                    else if (type == 11) {\n                        uvc = reflectxequaly(uvc, LEFT);\n                    }\n                    // reflect-type-below-x-equalto-y\n                    else if (type == 12) {\n                        uvc = reflectxequalminusy(uvc, RIGHT);\n                    }\n                    return uvc;\n                }\n\n                void main(void) {\n                    vec2 uvc = reflect(uv) - offset;\n                    gl_FragColor = texture2D(texture, uvc);\n                }\n            ";
            e = this.compileShader(t);
            this.compiledProgram.set("reflect", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1i(e.uniform.type, t.type);
          this.ctx.uniform2f(e.uniform.center, t.x, t.y);
          this.ctx.uniform2f(e.uniform.offset, t.xo, t.yo);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.draw(e);
        }
        bloom(t) {
          let e = this.compiledProgram.get("bloom");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 px;\n                float thresh = .5;\n                \n                void main() {\n                    vec4 sum = vec4(0);\n                \n                    // mess of for loops due to gpu compiler/hardware limitations\n                    int j=-2;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=-1;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=0;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=1;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    j=2;\n                    for( int i=-2; i<=2; i++) sum+=texture2D(texture,uv+vec2(i,j)*px);\n                    sum/=25.0;\n                \n                    gl_FragColor= texture2D(texture, uv);\n                \n                    // use the blurred colour if it's bright enough\n                    if (length(sum) > thresh) {\n                        gl_FragColor += sum*amount;\n                    }\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("bloom", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.draw(e);
        }
        posterize(t) {
          let e = this.compiledProgram.get("posterize");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                float areas = 256.0 / amount;\n                float values = 255.0 / (amount - 1.0);\n                \n                void main() {\n                    vec4 px = texture2D(texture, uv);\n\n                    px.r = floor(values * floor((px.r*255.0) / areas))/255.0;\n                    px.g = floor(values * floor((px.g*255.0) / areas))/255.0;\n                    px.b = floor(values * floor((px.b*255.0) / areas))/255.0;\n\n                    gl_FragColor = px;\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("posterize", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t * 100 + 1);
          this.draw(e);
        }
        fringe(t) {
          let e = this.compiledProgram.get("fringe");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform vec2 amount;\n\n                void main() {\n                    vec2 dir = uv - vec2( .5 );\n                    float d = .7 * length( dir );\n                    normalize( dir );\n                    vec2 value = d * dir * amount;\n                \n                    vec4 c1 = texture2D( texture, uv - value);\n                    vec4 c2 = texture2D( texture, uv );\n                    vec4 c3 = texture2D( texture, uv + value);\n                    \n                    gl_FragColor = vec4( c1.r, c2.g, c3.b, c1.a + c2.a + c3.b);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("fringe", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.amount, t, t);
          this.draw(e);
        }
        rgbSplit(t) {
          let e = 0;
          let s = 0;
          let i = 0;
          const a = t.distance;
          switch (t.type) {
            case "red-blue":
              e = a;
              i = -a;
              break;
            case "green-red":
              e = -a;
              s = a;
              break;
            case "blue-green":
              s = -a;
              i = a;
              break;
            case "red":
              e = a;
              break;
            case "green":
              s = a;
              break;
            case "blue":
              i = a;
          }
          let n = this.compiledProgram.get("rgb-split");
          if (!n) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                uniform vec2 r;\n                uniform vec2 g;\n                uniform vec2 b;\n\n                void main() {\n                \n                    vec4 px = texture2D(texture, uv);\n\n                    vec4 c1 = texture2D( texture, uv - r);\n                    vec4 c2 = texture2D( texture, uv - g);\n                    vec4 c3 = texture2D( texture, uv - b);\n                    \n                    gl_FragColor = mix(px, vec4( c1.r, c2.g, c3.b, (c1.a + c2.a + c3.a)/3.0), amount);\n                }";
            n = this.compileShader(t);
            this.compiledProgram.set("rgb-split", n);
          }
          this.ctx.useProgram(n.program);
          this.ctx.uniform1f(n.uniform.amount, t.amount);
          var o = t.direction * Math.PI / 180;
          var r = Math.cos(o);
          var h = Math.sin(o);
          this.ctx.uniform2f(n.uniform.r, r * e, h * e);
          this.ctx.uniform2f(n.uniform.g, r * s, h * s);
          this.ctx.uniform2f(n.uniform.b, r * i, h * i);
          this.draw(n);
        }
        interference(t) {
          let e = this.compiledProgram.get("interference");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float seed;\n                uniform float amount;\n                uniform int direction;\n\n                float rand(vec2 co){\n                    return fract(sin(dot(co.xy, vec2(12.9898,78.233)*3.141)) * 43758.5453);\n                }\n\n                void main() {\n\n                    float rand1 = rand(vec2(seed,seed));\n                    float rand2 = rand(vec2(seed,rand1));\n                \n                    float rand1xy = rand(vec2(rand1*uv.x,rand2*uv.y));\n                    float rand2xy = rand(vec2(rand1*uv.y,rand2*uv.x));\n                  \n                    float rand1x = rand(vec2(rand1*uv.x,rand2));\n                    float rand2x = rand(vec2(rand1x,rand1x));     \n\n                    float rand1y = rand(vec2(rand1*uv.y,rand2));\n                    float rand2y = rand(vec2(rand1y,rand1y));                       \n                    \n                    if(direction == 0) {\n                        if(rand2y/100.0 > rand1y) {\n                            if(rand2xy < 0.3) gl_FragColor = vec4(rand1xy, rand1xy, rand1xy, 0.0);\n                            else gl_FragColor = texture2D(texture, uv);\n                        }\n                        else {\n                            gl_FragColor = texture2D(texture, vec2(uv.x + rand1y * amount, uv.y));\n                        }\n                    } else {\n                        if(rand2x/100.0 > rand1x) {\n                            if(rand2xy < 0.3) gl_FragColor = vec4(rand1xy, rand1xy, rand1xy, 0.0);\n                            else gl_FragColor = texture2D(texture, uv);\n                        }\n                        else {\n                            gl_FragColor = texture2D(texture, vec2(uv.x, uv.y + rand1x * amount));\n                        }\n                    }\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("interference", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.seed, t.seed);
          this.ctx.uniform1f(e.uniform.amount, t.amount / 15);
          this.ctx.uniform1i(e.uniform.direction, t.direction ? 1 : 0);
          this.draw(e);
        }
        bleed(t) {
          let e = this.compiledProgram.get("bleed");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float seed;\n                uniform float block;\n                uniform float amplitude;\n              \n                float rand(vec2 n) { \n                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n                }\n                float randomRange (in vec2 sd, in float min, in float max) {\n                    return min + rand(sd) * (max - min);\n                }\n                float insideRange(float v, float bottom, float top) {\n                   return step(bottom, v) - step(top, v);\n                }\n\n                float noise(vec2 uv, float blockiness){   \n                    vec2 lv = fract(uv);\n                    vec2 id = floor(uv);\n                    \n                    float n1 = rand(id);\n                    float n2 = rand(id+vec2(1,0));\n                    float n3 = rand(id+vec2(0,1));\n                    float n4 = rand(id+vec2(1,1));\n                    \n                    vec2 u = smoothstep(0.0, 1.0 + blockiness, lv);\n\n                    return mix(mix(n1, n2, u.x), mix(n3, n4, u.x), u.y);\n                }\n\n                float fbm(vec2 uv, int count, float blockiness, float complexity) {\n                    float val = 0.0;\n                    float amp = 0.5;\n                    \n                    for (int i = 0; i < 1000; i++) {\n                        if(i == count) break;\n                        \n                        val += amp * noise(uv, blockiness);\n                        amp *= 0.5;\n                        uv *= complexity;    \n                    }  \n                    return val;\n                }\n\n                const float shift = 2.0; //2\n\n                void main()\n                {\n                    vec4 px = texture2D(texture, uv);\n\n                    for (float i = 0.0; i < 20.0; i += 1.0) {\n\n                        float sliceY = rand(vec2(seed, 2035.0 + float(i)));\n                        float sliceX = rand(vec2(seed, 3234.0 + float(i)));\n\n                        float sliceH = rand(vec2(seed, 2035.0 - float(i))) * 0.1;\n                        float sliceW = rand(vec2(seed, 3234.0 + float(i))) * 1.5;\n\n                        if(insideRange(uv.y, sliceY, fract(sliceY+sliceH)) == 1.0 && insideRange(uv.x, sliceX, fract(sliceX+sliceW)) == 1.0){\n                           \n                            vec2 id = floor(uv * 5.0);\n        \n                            // Generate shift amplitude\n                            float shift = amplitude * fbm(uv, int(id * 6.), shift, block);\n                            //float shift = randomRange(vec2(seed, 5234.0 + float(i)), -amplitude, amplitude);\n        \n                            float r = texture2D(texture, vec2(uv.x + shift, uv.y)).r * (1. - shift) ;\n                            float g = texture2D(texture, vec2(uv.x - shift, uv.y)).g * (1. - shift) + rand(id) * shift;\n                            float b = texture2D(texture, vec2(uv.x - shift, uv.y)).b * (1. - shift);\n        \n                            px = mix(vec4(r, g, b, px.a), px, 0.5);\n                        }\n                        gl_FragColor = px;\n                    }\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("bleed", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.seed, t.seed);
          this.ctx.uniform1f(e.uniform.amplitude, t.amplitude);
          this.ctx.uniform1f(e.uniform.block, t.block);
          this.draw(e);
        }
        slice(t) {
          let e = this.compiledProgram.get("slice");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float seed;\n                uniform float amount;\n                uniform float distance;\n                uniform int line;\n\n                //2D (returns 0 - 1)\n                float random2d(vec2 n) { \n                    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);\n                }\n                float randomRange (in vec2 sd, in float min, in float max) {\n                    return min + random2d(sd) * (max - min);\n                }\n                \n                // return 1 if v inside 1d range\n                float insideRange(float v, float bottom, float top) {\n                   return step(bottom, v) - step(top, v);\n                }\n                  \n                void main() {\n                  \n                    vec4 px = texture2D(texture, uv);\n\n                    for (float i = 0.0; i < 100.0; i += 1.0) {\n\n                        if(i == amount) break;\n\n                        float sliceY = random2d(vec2(seed, 2035.0 + float(i)));\n                        float sliceX = random2d(vec2(seed, 5234.0 + float(i)));\n\n                        float sliceH = random2d(vec2(seed, 2035.0 - float(i))) * 0.1;\n                        float sliceW = random2d(vec2(seed, 5234.0 + float(i))) * 1.5;\n\n                        float hOffset = randomRange(vec2(seed, 2035.0 + float(i)), -distance*.5, distance*.5);\n                        float wOffset = randomRange(vec2(seed, 5234.0 + float(i)), -distance, distance);\n\n                        vec2 uvOff = uv;\n                        uvOff.x += wOffset;\n                        uvOff.y += hOffset;\n\n                        if(insideRange(uv.y, sliceY, fract(sliceY+sliceH)) == 1.0 && (line == 1 || insideRange(uv.x, sliceX, fract(sliceX+sliceW)) == 1.0)){\n                            px = texture2D(texture, uvOff);\n                        }\n                    }\n                    gl_FragColor = px;\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("slice", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.seed, t.seed);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform1f(e.uniform.distance, t.distance / 3);
          this.ctx.uniform1i(e.uniform.line, t.line ? 1 : 0);
          this.draw(e);
        }
        mimicHDR(t) {
          let e = this.compiledProgram.get("mimicHDR");
          if (!e) {
            const t = "\n                precision highp float;\n\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform sampler2D blurMap;\n\n                uniform float amount;\n                uniform float contra;\n                \n                float blendSoftLight(float base, float blend) {\n                    return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(base)*(2.0*blend-1.0)+2.0*base*(1.0-blend));\n                }\n                vec4 blendSoftLight(vec4 base, vec4 blend) {\n                    return vec4(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b), base.a);\n                }\n\n                float blendOverlay(float base, float blend) {\n                    return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));\n                }\n                vec4 blendOverlay(vec4 base, vec4 blend) {\n                    return vec4(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b), base.a);\n                }\n               \n                void main() {\n                    vec4 px = texture2D(texture, uv);\n                    vec4 blur = texture2D(blurMap, uv);\n\n                    vec4 blend = blendOverlay(px, blur);\n                    blend = mix(blend, blendSoftLight(px, blend), contra);\n\n                    gl_FragColor = mix(px, blend, amount);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("mimicHDR", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform1f(e.uniform.contra, t.contra);
          let s = e.getTextureById("blurMap");
          s.createTexture(this.ctx, t.blurMap.width, t.blurMap.height);
          s.uploadData(this.ctx, t.blurMap);
          this.draw(e);
        }
        pixelate(t) {
          let e = this.compiledProgram.get("pixelate");
          if (!e) {
            const t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform vec2 resolution;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    float d = 1.0 / amount;\n                    float ar = resolution.x / resolution.y;\n                    float u = floor( uv.x / d ) * d + d*0.5;\n                    d = ar / amount;\n                    float v = floor( uv.y / d ) * d + d*0.5;\n                    gl_FragColor = texture2D(texture, vec2( u, v ) );\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("pixelate", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, (100 - t * 100) * 4);
          this.ctx.uniform2f(e.uniform.resolution, this.width, this.height);
          this.draw(e);
        }
        scanlines(t) {
          let e = this.compiledProgram.get("scanlines");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform float size;\n\n                uniform int colorize;\n                uniform int direction;\n\n                void main() {\n                    \n                    vec2 sl;\n                    vec4 scanlines;\n                    vec4 color = texture2D(texture, uv);\n\n                    if(direction == 0) {\n                        sl = vec2(sin(uv.y * size), cos(uv.y * size)) * amount;\n                    }\n                    else {\n                        sl = vec2(sin(uv.x * size), cos(uv.x * size)) * amount;\n                    }\n\n                    if(colorize == 1) {\n                        scanlines = vec4(sl.x, sl.y, sl.x, 1.0);\n                    } \n                    else {\n                        scanlines = vec4(sl.x, sl.x, sl.x, 1.0);\n                    }\n\n                    gl_FragColor = vec4(color.r + scanlines.r, color.g + scanlines.g, color.b + scanlines.b, color.a);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("scanlines", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.size, t.direction ? Math.round(this.height / t.size) : Math.round(this.width / t.size));
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform1i(e.uniform.colorize, t.colorize ? 1 : 0);
          this.ctx.uniform1i(e.uniform.direction, t.direction ? 1 : 0);
          this.draw(e);
        }
        mosaic(t) {
          let e = this.compiledProgram.get("mosaic");
          if (!e) {
            const t = "\n                precision highp float;\n                varying vec2 uv;\n                \n                uniform sampler2D texture;\n                uniform vec2 num;\n                \n                void main()\n                {\n                    vec2 uv = uv;\n                    vec2 uv2 = floor(uv*num)/num;\n                    uv -= uv2;\n                    uv *= num;\n                    gl_FragColor = texture2D(texture, \n                                    uv2 + vec2(step(1.0-uv.y,uv.x)/(2.0*num.x),\n                                    step(uv.x,uv.y)/(2.0*num.y)));\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("mosaic", e);
          }
          let s = Math.round((1 - t) * 100);
          let i = Math.round(this.height / this.width * s);
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.num, s, i);
          this.draw(e);
        }
        bokeh(t) {
          let e = this.compiledProgram.get("bokeh-" + t.type);
          if (!e) {
            let s = "";
            switch (t.type) {
              case "circle":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform float size;\n                        uniform vec2 px;\n                        \n                        #define PI 3.1415926538\n                        #define KNL 100.0\n\n                        void main() {\n\n                            float spread = floor(size*30.0 + 0.5) + 1.0;\n                            float myx = spread*2.0;\n\n                            vec3 mcol = vec3(0.0);\n                            vec3 avg  = vec3(0.0);                          \n                            float rc = 0.0;\n\n                            for(float x = 0.0; x < KNL; x += 1.0)\n                            {\n                                if(x == myx) break;\n        \n                                for(float y = 0.0; y < KNL; y += 1.0)\n                                {\n                                    if(y == myx) break;\n        \n                                    float l = length(vec2(x-spread,y-spread));\n                                    if(l <= spread)\n                                    {\n                                        vec3 col = texture2D(texture, uv + px * vec2(x-spread,y-spread) * 2.0).rgb;\n                                        mcol = max(mcol, col);\n                                        avg += col;\n                                        rc += 1.0;\n                                    }\n                                }\n                            }\n                            gl_FragColor = vec4(mix(avg / rc, mcol, amount), 1.0);\n                        }";
                break;
              case "square":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform float size;\n                        uniform vec2 px;\n\n                        #define KNL 100.0\n\n                        void main() {\n\n                            float spread = floor(size*30.0 + 0.5) + 1.0;\n                            float myx = spread*2.0;\n\n                            vec3 mcol = vec3(0.0);\n                            vec3 avg = vec3(0.0);\n        \n                            for(float x = 0.0; x < KNL; x += 1.0)\n                            {\n                                if(x == myx) break;\n        \n                                for(float y = 0.0; y < KNL; y += 1.0)\n                                {\n                                    if(y == myx) break;\n        \n                                    vec3 col = texture2D(texture, uv + px * vec2(x-spread,y-spread) * 2.0).rgb;\n                                    mcol = max(mcol, col);\n                                    avg += col;\n                                }\n                            }\n                            gl_FragColor = vec4(mix(avg / (myx * myx), mcol, amount), 1.0);\n                        }";
                break;
              case "hexagon":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform float size;\n                        uniform vec2 px;\n                        \n                        #define PI 3.1415926538\n                        #define PI2 6.283185308\n                        #define KNL 100.0\n\n                        void main() {\n\n                            float spread = floor(size*30.0 + 0.5) + 1.0;\n                            float myx = spread*2.0;\n\n                            vec3 mcol = vec3(0.0);\n                            vec3 avg  = vec3(0.0);\n                            float rc = 0.0;\n        \n                            for(float x = 0.0; x < KNL; x += 1.0)\n                            {\n                                if(x == myx) break;\n        \n                                for(float y = 0.0; y < KNL; y += 1.0)\n                                {\n                                    if(y == myx) break;\n        \n                                    vec2 pt = vec2(x-spread, y-spread);\n        \n                                    float an = 0.33 + atan(pt.x, pt.y); //0.33 Angle\n                                    float ngon = cos(an - (PI2 * floor((PI + 6.0 * an) / PI2)) / 6.0) / cos(PI / 6.0); //6 corners\n                                    float ngonSdf = ngon * length(pt) - spread;\n                            \n                                    if(ngonSdf <= 0.0) {\n                                        vec3 col = texture2D(texture, uv + px * vec2(x-spread, y-spread) * 2.0).rgb;\n                                        mcol = max(mcol, col);\n                                        avg += col;\n                                        rc += 1.0;\n                                    }\n                                }\n                            }\n                            gl_FragColor = vec4(mix(avg / rc, mcol, amount), 1.0);\n                        }";
                break;
              case "cross":
                s = "\n                        precision highp float;\n                        varying vec2 uv;\n                        uniform sampler2D texture;\n                        uniform float amount;\n                        uniform float size;\n                        uniform vec2 px;\n                        \n                        #define KNL 100.0\n\n                        void main() {\n\n                            float spread = floor(size*30.0 + 0.5) + 1.0;\n        \n                            vec3 mcol = vec3(0.0);\n                            vec3 avg  = vec3(0.0);\n                            float rc = 0.0;\n        \n                            float myx = spread*2.0;\n                            float low = spread*.7;\n                            float high = spread*1.3;\n        \n                            for(float x = 0.0; x < KNL; x += 1.0)\n                            {\n                                if(x == myx) break;\n        \n                                for(float y = 0.0; y < KNL; y += 1.0)\n                                {\n                                    if(y == myx) break;\n        \n                                    if((y > low && y < high) || (x > low && x < high))\n                                    {\n                                        vec3 col = texture2D(texture, uv + px * vec2(x-spread,y-spread) * 2.0).rgb;\n                                        mcol = max(mcol, col);\n                                        avg += col;\n                                        rc += 1.0;\n                                    }\n                                }\n                            }\n                            gl_FragColor = vec4(mix(avg / rc, mcol, amount), 1.0);\n                        }";
            }
            e = this.compileShader(s);
            this.compiledProgram.set("bokeh-" + t.type, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.size, t.size);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform2f(e.uniform.px, 1 / this.width, 1 / this.height);
          this.draw(e);
        }
        art(t) {
          let e = this.compiledProgram.get("art");
          if (!e) {
            let t = ["precision highp float;", "uniform sampler2D texture;", "varying vec2 uv;", "void main() {", "vec4 color, tmp, add;", "vec2 uv = uv + vec2( sin( uv.y * 100.0 ), sin( uv.x * 100.0 )) * 0.0005;", "color = texture2D( texture, uv );", "add = tmp = texture2D( texture, uv + vec2( 0.0015, 0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( -0.0015, 0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( -0.0015, -0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0.0015, -0.0015 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0.002, 0.0 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( -0.002, 0.0 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0, 0.002 ));", "if( tmp.r < color.r ) color = tmp;", "add += tmp = texture2D( texture, uv + vec2( 0, -0.002 ));", "if( tmp.r < color.r ) color = tmp;", "uv = (uv - vec2(0.5)) * vec2(0.7);", "gl_FragColor = vec4(mix(color.rgb * color.rgb * vec3(1.8), color.ggg * color.ggg - vec3(0.4), vec3(dot(uv, uv))), 1.0);", "}"].join("\n");
            e = this.compileShader(t);
            this.compiledProgram.set("art", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.screenWidth, this.canvas.width);
          this.ctx.uniform1f(e.uniform.screenHeight, this.canvas.height);
          this.ctx.uniform1f(e.uniform.sampleDistance, t);
          this.ctx.uniform1f(e.uniform.waveFactor, 0.01);
          this.draw(e);
        }
        melt(t) {
          let e = this.compiledProgram.get("melt");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 center;\n              \n                float rand(vec2 co){\n                    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);\n                }\n                vec3 mod289(vec3 x) {\n                    return x - floor(x * (1.0 / 289.0)) * 289.0;\n                }\n                  \n                vec2 mod289(vec2 x) {\n                    return x - floor(x * (1.0 / 289.0)) * 289.0;\n                }\n                  \n                vec3 permute(vec3 x) {\n                    return mod289(((x*34.0)+1.0)*x);\n                }\n                  \n                float snoise(vec2 v) {\n\n                    const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0\n                                        0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)\n                                       -0.577350269189626,  // -1.0 + 2.0 * C.x\n                                        0.024390243902439); // 1.0 / 41.0\n                  // First corner\n                    vec2 i  = floor(v + dot(v, C.yy) );\n                    vec2 x0 = v -   i + dot(i, C.xx);\n                  \n                  // Other corners\n                    vec2 i1;\n                    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n                    vec4 x12 = x0.xyxy + C.xxzz;\n                    x12.xy -= i1;\n                  \n                  // Permutations\n                    i = mod289(i); // Avoid truncation effects in permutation\n                    vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))\n                          + i.x + vec3(0.0, i1.x, 1.0 ));\n                  \n                    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);\n                    m = m*m ;\n                    m = m*m ;\n                                   \n                    vec3 x = 2.0 * fract(p * C.www) - 1.0;\n                    vec3 h = abs(x) - 0.5;\n                    vec3 ox = floor(x + 0.5);\n                    vec3 a0 = x - ox;\n                  \n                    m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );\n                  \n                  // Compute final noise value at P\n                    vec3 g;\n                    g.x  = a0.x  * x0.x  + h.x  * x0.y;\n                    g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n                    return 130.0 * dot(m, g);\n                }\n\n                void main() {\n                    vec4 px = texture2D(texture, uv);\n                    \n                    float opacity = 0.0;\n\n                    if(amount == 0.0 || amount == 1.0) {\n                        opacity = amount;\n                    } \n                    else {\n                        if(center.x == 0.5) {\n                            float dist = distance(center, uv)- amount*exp(snoise(vec2(uv.x, 0.0)));\n                            float r = amount - rand(vec2(uv.x, 0.1));\n                            opacity = dist <= r ? 1.0 : (amount*amount*amount);\n                        }\n                        else {\n                            float dist = distance(center, uv)- amount*exp(snoise(vec2(0.0, uv.y)));\n                            float r = amount - rand(vec2(0.1, uv.y));\n                            opacity = dist <= r ? 1.0 : (amount*amount*amount);\n                        }   \n                    }\n                    gl_FragColor = vec4(px.rgb, px.a * (1.0 - opacity));\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("melt", e);
          }
          this.ctx.useProgram(e.program);
          let s = new i.A(0.5, 0.5);
          switch (t.direction) {
            case "down":
              s.y = 0;
              break;
            case "right":
              s.x = 1;
              break;
            case "left":
              s.x = 0;
              break;
            case "up":
              s.y = 1;
          }
          this.ctx.uniform2f(e.uniform.center, s.x, s.y);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        gooey(t) {
          let e = this.compiledProgram.get("gooey");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n              \n                // http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/\n                float random(vec2 co) {\n\n                    highp float a = 12.9898; //seed;\n                    highp float b = 78.233;\n                    highp float c = 43758.5453;\n                    highp float dt= dot(co.xy ,vec2(a,b));\n                    highp float sn= mod(dt,3.14);\n                    return fract(sin(sn) * c);\n                }\n\n                // 2D Noise based on Morgan McGuire @morgan3d\n                // https://www.shadertoy.com/view/4dS3Wd\n                float noise (in vec2 st) {\n\n                    vec2 i = floor(st);\n                    vec2 f = fract(st);\n\n                    // Four corners in 2D of a tile\n                    float a = random(i);\n                    float b = random(i + vec2(1.0, 0.0));\n                    float c = random(i + vec2(0.0, 1.0));\n                    float d = random(i + vec2(1.0, 1.0));\n\n                    // Cubic Hermine Curve.  Same as SmoothStep()\n                    vec2 u = f*f*(3.0-2.0*f);\n\n                    // Mix 4 coorners porcentages\n                    return mix(a, b, u.x) +\n                            (c - a)* u.y * (1.0 - u.x) +\n                            (d - b) * u.x * u.y;\n                }\n\n                void main() {\n\n                    vec4 col = texture2D(texture, uv);\n                    float n = noise(uv * 10.0); //scale\n                    \n                    float p = mix(-0.01, 1.0 + 0.01, amount);\n                    float lower = p - 0.01;\n                    float higher = p + 0.01;\n                    \n                    float opacity = smoothstep(lower, higher, n);\n                    \n                    gl_FragColor = vec4(col.rgb, col.a * opacity);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("gooey", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        block(t) {
          let e = this.compiledProgram.get("block");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n              \n                float rand (vec2 co) {\n                    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);\n                }\n\n                void main() {\n                    vec4 col = texture2D(texture, uv);\n                    \n                    float r = rand(floor(vec2(10.0) * uv)); //size\n                    float opacity = smoothstep(0.0, -0.5, r - (amount * (1.0 + 0.5)));\n                   \n                    gl_FragColor = vec4(col.rgb, col.a * (1.0 - opacity));\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("block", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        curtain(t) {
          let e = this.compiledProgram.get("curtain-" + t.direction);
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n              \n                void main() {\n                    vec2 p = uv;\n                    vec4 col = vec4(0);\n                ";
            if (t.direction === "horizontal") {
              s += "                    \n                        if(2.0 * abs(p.x-0.5) - amount > 0.0) {\n                            p = p + (p.x > 0.5 ? -1.0 : 1.0) * vec2(0.5*amount, 0.0);\n                            col = texture2D(texture, p);\n                        }\n                    ";
            } else {
              s += "\n                        if(2.0 * abs(p.y-0.5) - amount > 0.0) {\n                            p = p + (p.y > 0.5 ? -1.0 : 1.0) * vec2(0.0, 0.5*amount);\n                            col = texture2D(texture, p);\n                        }\n                    ";
            }
            s += "\n                    gl_FragColor = col;\n                }";
            e = this.compileShader(s);
            this.compiledProgram.set("curtain-" + t.direction, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        blinds(t) {
          let e = this.compiledProgram.get("blinds-" + t.direction);
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n              \n                void main() {\n                    vec4 col = texture2D(texture, uv);\n                ";
            switch (t.direction) {
              case "up":
                s += "float opacity = step(smoothstep(-0.5, 0.0, (1.0 - uv.y) - amount * (1.0 + 0.5)), fract(12.0 * uv.y));";
                break;
              case "right":
                s += "float opacity = step(smoothstep(-0.5, 0.0, (1.0 - uv.x) - amount * (1.0 + 0.5)), fract(12.0 * uv.x));";
                break;
              case "left":
                s += "float opacity = step(smoothstep(-0.5, 0.0, uv.x - amount * (1.0 + 0.5)), fract(12.0 * uv.x));";
                break;
              case "down":
                s += "float opacity = step(smoothstep(-0.5, 0.0, uv.y - amount * (1.0 + 0.5)), fract(12.0 * uv.y));";
            }
            s += "\n                    gl_FragColor = vec4(col.rgb, col.a * (1.0 - opacity));\n                }";
            e = this.compileShader(s);
            this.compiledProgram.set("blinds-" + t.direction, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        wipe(t) {
          let e = this.compiledProgram.get("wipe-" + t.direction);
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n              \n                void main() {\n                    vec4 col = texture2D(texture, uv);\n                ";
            switch (t.direction) {
              case "down":
                s += "float opacity = 1.0 - step(uv.y, amount);";
                break;
              case "right":
                s += "float opacity = step(uv.x, 1.0 - amount);";
                break;
              case "left":
                s += "float opacity = 1.0 - step(uv.x, amount);";
                break;
              case "up":
                s += "float opacity = step(uv.y, 1.0 - amount);";
            }
            s += "\n                    gl_FragColor = vec4(col.rgb, col.a * opacity);\n                }";
            e = this.compileShader(s);
            this.compiledProgram.set("wipe-" + t.direction, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        swipe(t) {
          let e = this.compiledProgram.get("swipe-" + t.direction);
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec4 color; \n              \n                void main() {\n\n                ";
            switch (t.direction) {
              case "down":
                s += "\n                        if(amount > 0.5) gl_FragColor = vec4(color.rgb, 1.0 - step(1.0 + uv.y, amount*2.0));\n                        else gl_FragColor = step(uv.y, amount*2.0) == 1.0 ? color : texture2D(texture, uv);\n                    }";
                break;
              case "right":
                s += "\n                        if(amount > 0.5) gl_FragColor = vec4(color.rgb, 1.0 - step(2.0 - uv.x, amount*2.0));\n                        else gl_FragColor = step(1.0 - uv.x, amount*2.0) == 1.0 ? color : texture2D(texture, uv);\n                    }";
                break;
              case "left":
                s += "\n                        if(amount > 0.5) gl_FragColor = vec4(color.rgb, 1.0 - step(1.0 + uv.x, amount*2.0));\n                        else gl_FragColor = step(uv.x, amount*2.0) == 1.0 ? color : texture2D(texture, uv);\n                    }";
                break;
              case "up":
                s += "\n                        if(amount > 0.5) gl_FragColor = vec4(color.rgb, 1.0 - step(2.0 - uv.y, amount*2.0));\n                        else gl_FragColor = step(1.0 - uv.y, amount*2.0) == 1.0 ? color : texture2D(texture, uv);\n                    }";
            }
            e = this.compileShader(s);
            this.compiledProgram.set("swipe-" + t.direction, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.ctx.uniform4f(e.uniform.color, t.color.r / 255, t.color.g / 255, t.color.b / 255, 1);
          this.draw(e);
        }
        slot(t) {
          let e = this.compiledProgram.get("slot");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 dir;\n\n                void main() {\n                   \n                    vec2 p = uv + amount * sign(dir);\n                    vec2 f = fract(p);\n                    float opacity = step(0.0, p.y) * step(p.y, 1.0) * step(0.0, p.x) * step(p.x, 1.0);\n                   \n                    vec4 col = texture2D(texture, p);\n                    gl_FragColor = vec4(col.rgb, col.a * opacity);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("slot", e);
          }
          let s = new i.A(0, 0);
          switch (t.direction) {
            case "down":
              s.y = -1;
              break;
            case "right":
              s.x = 1;
              break;
            case "left":
              s.x = -1;
              break;
            case "up":
              s.y = 1;
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.dir, s.x, s.y);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        marquee(t) {
          let e = this.compiledProgram.get("marquee");
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform vec2 dir;\n\n                void main() {\n                   \n                    vec2 p = uv + amount * sign(dir);\n                ";
            switch (t.direction) {
              case "up":
                s += "if(p.y < 0.0) p.y += 1.0;";
                break;
              case "down":
                s += "if(p.y > 1.0) p.y -= 1.0;";
                break;
              case "right":
                s += "if(p.x < 0.0) p.x += 1.0;";
                break;
              case "left":
                s += "if(p.x > 1.0) p.x -= 1.0;";
            }
            s += "\n         \n                    gl_FragColor = texture2D(texture, p);\n                }";
            e = this.compileShader(s);
            this.compiledProgram.set("marquee", e);
          }
          let s = new i.A(0, 0);
          switch (t.direction) {
            case "up":
              s.y += -1;
              break;
            case "down":
              s.y += 1;
              break;
            case "right":
              s.x += -1;
              break;
            case "left":
              s.x += 1;
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform2f(e.uniform.dir, s.x, s.y);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        split(t) {
          let e = this.compiledProgram.get("split-" + t.direction);
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n                uniform float sections;\n\n                void main() {\n                    vec2 p = uv;\n                ";
            if (t.direction === "horizontal") {
              s += "float num = floor(uv.y*sections);\n                    float odd = num - (2.0 * floor(num/2.0));\n                    p.x = uv.x + amount*sign(odd-0.5);\n             \n                    float opacity = (p.x * (1.0-step(odd,0.5)*2.0) - sign(odd) > 0.0) ? 0.0 : 1.0;\n                    ";
            } else {
              s += "float num = floor(uv.x*sections);\n                    float odd = num - (2.0 * floor(num/2.0));\n                    p.y = uv.y + amount*sign(odd-0.5);\n             \n                    float opacity = (p.y * (1.0-step(odd,0.5)*2.0) - sign(odd) > 0.0) ? 0.0 : 1.0;\n                    ";
            }
            s += "vec4 col = texture2D(texture, p);\n                    gl_FragColor = vec4(col.rgb, col.a * opacity);\n                }";
            e = this.compileShader(s);
            this.compiledProgram.set("split-" + t.direction, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.sections, t.sections);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
        circular(t) {
          let e = this.compiledProgram.get("circular");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                const float PI = 3.141592653589;\n\n                void main() {\n                    vec4 col = texture2D(texture, uv);\n\n                    vec2 p = uv*2.-1.;\n                    float opacity = smoothstep(0.0, 0.5, atan(p.y,p.x) - (amount-.5) * PI * 2.5);\n                   \n                    gl_FragColor = vec4(col.rgb, col.a * opacity);\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("circular", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        ripple(t) {
          let e = this.compiledProgram.get("ripple");
          if (!e) {
            let t = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n                    \n                    vec2 dir = uv - vec2(.5);\n                    float dist = length(dir);\n                    vec2 offset = dir * (sin(amount * dist * 100.0 - amount * 40.0) + 0.5) / 30.0; //100 amp 40 speed\n\n                    float opacity = smoothstep(0.2, 1.0, amount);\n\n                    vec4 px = texture2D(texture, uv + offset);                   \n                    gl_FragColor = vec4(px.rgb, px.a * (1.0 - opacity));\n                }";
            e = this.compileShader(t);
            this.compiledProgram.set("ripple", e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t);
          this.draw(e);
        }
        warp(t) {
          let e = this.compiledProgram.get("warp-" + t.direction);
          if (!e) {
            let s = "\n                precision highp float;\n                varying vec2 uv;\n                uniform sampler2D texture;\n                uniform float amount;\n\n                void main() {\n            ";
            switch (t.direction) {
              case "up":
                s += "float x = smoothstep(0.0, 1.0, (amount*2.0 + uv.y-1.0)); vec4 col = texture2D(texture, (uv-0.5)*(1.0-x)+0.5);";
                break;
              case "right":
                s += "float x = smoothstep(0.0, 1.0, (amount*2.0 + uv.x-1.0)); vec4 col = texture2D(texture, (uv-0.5)*(1.0-x)+0.5);";
                break;
              case "left":
                s += "float x = smoothstep(0.0, 1.0, ((1.0-amount)*2.0 + uv.x-1.0)); vec4 col = texture2D(texture, (uv-0.5)*(x)+0.5);";
                break;
              case "down":
                s += "float x = smoothstep(0.0, 1.0, ((1.0-amount)*2.0 + uv.y-1.0)); vec4 col = texture2D(texture, (uv-0.5)*(x)+0.5);";
            }
            s += "\n                gl_FragColor = vec4(col.rgb, col.a * (1.0 - amount));\n            }";
            e = this.compileShader(s);
            this.compiledProgram.set("warp-" + t.direction, e);
          }
          this.ctx.useProgram(e.program);
          this.ctx.uniform1f(e.uniform.amount, t.amount);
          this.draw(e);
        }
      }
      class y {
        constructor(t, e, s = false) {
          this.type = t;
          this.value = e;
          this.sidekick = s;
        }
      }
    }
