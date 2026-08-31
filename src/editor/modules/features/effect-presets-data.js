window.__editorModules[8749] = function (t, e, s) {
      s.d(e, {
        A: () => l
      });
      var i = s(5259);
      var a = s(7872);
      var n = s(3090);
      var o = s(6324);
      var r = s(5166);
      var h = s(9468);
      class l {
        static init() {
          if (!l.presets) {
            l.grouping = {
              "b-w": ["agnes", "conny", "gordon", "harrison", "henry", "logan", "olay", "porter", "sampi", "tom", "vinny"],
              friends: ["aladin", "alex", "amber", "anne", "antonio", "bob", "greg", "hagrid", "harry", "ivan", "jean", "josh", "karen", "lucas", "melissa", "peter", "salomon", "sara", "sophia", "tony"],
              instage: ["borg", "carl", "coco", "doris", "doug", "earl", "sun", "blues", "country", "lemonpell", "tiny dc", "minker"],
              retro: ["vib", "ranguit", "rangeen", "creamlow", "sven", "yenely", "ragwarm", "greered", "danligter", "garage"],
              tuning: ["punch", "bright", "contrast", "vivid", "clairify"],
              portrait: ["matte", "deep", "film", "sunny", "gritty"],
              food: ["berry", "ensalat", "morning", "corn", "sharp"],
              urban: ["cement", "style", "mold", "shimmer", "stalker", "sham"],
              nature: ["beach", "flower", "forest"],
              colors: ["strawberry", "clementine", "pear", "apple", "blueberry", "grapes", "dragon", "superone", "tonola", "reddish", "fellowing", "grassland", "springs", "justblues", "bluesteel", "flowerpot", "stinker", "violiin", "blupur", "beyllo", "wifortress"],
              artzy: ["poster", "glitch", "mozak", "frank", "pinvet", "night vision", "darkstreet", "blomberg", "lolita", "atonic"]
            };
            l.presets = {
              flower: [new a.A("vibrance", 0.2), new a.A("saturation", 0.1), new a.A("temperature", 0.1)],
              forest: [new a.A("saturation", -0.2), new a.A("vibrance", 1), new a.A("clarity", 0.2), new a.A("temperature", 0.16), new a.A("tint", 0.2), new a.A("curves", new h.X([[0, 0, 65, 52, 173, 190, 236, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]]))],
              beach: [new a.A("saturation", 0.2), new a.A("vibrance", 0.2), new a.A("curves", new h.X([[0, 0, 68, 56, 199, 208, 255, 255], [0, 0, 255, 255], [0, 0, 98, 97, 196, 201, 255, 255], [0, 0, 87, 85, 201, 182, 255, 255]])), new a.A("temperature", 0.1)],
              sham: [new a.A("saturation", -0.3), new a.A("fill", new n.A(new i.A(153, 221, 255), "overlay", 0.3)), new a.A("curves", new h.X([[60, 31, 191, 217], [0, 0, 120, 134, 255, 255], [0, 0, 255, 255], [0, 0, 120, 144, 255, 255]]))],
              stalker: [new a.A("curves", new h.X([[62, 64, 190, 191], [0, 0, 133, 125, 255, 255], [0, 0, 54, 65, 209, 208, 255, 255], [60, 62, 96, 99, 240, 230, 255, 255]])), new a.A("contrast", 0.1), new a.A("saturation", -0.2)],
              shimmer: [new a.A("temperature", -0.2), new a.A("tint", -0.12), new a.A("fill", new n.A(new i.A(190, 11, 255), "screen", 0.12)), new a.A("curves", new h.X([[8, 23, 244, 227], [0, 0, 255, 255], [0, 0, 131, 124, 255, 255], [0, 0, 149, 112, 255, 255]]))],
              mold: [new a.A("curves", new h.X([[65, 64, 233, 233], [0, 0, 138, 121, 255, 255], [0, 0, 60, 75, 184, 184, 255, 255], [0, 0, 64, 75, 181, 176, 255, 255]])), new a.A("contrast", 0.1), new a.A("saturation", -0.12)],
              style: [new a.A("curves", new h.X([[0, 0, 73, 74, 191, 177, 235, 221, 255, 255], [0, 26, 89, 64, 121, 126, 180, 213, 255, 255], [0, 0, 71, 50, 190, 210, 255, 255], [61, 64, 112, 97, 199, 198, 255, 255]])), new a.A("vibrance", -0.1), new a.A("saturation", -0.4), new a.A("temperature", 0.1)],
              cement: [new a.A("curves", new h.X([[0, 0, 73, 74, 191, 177, 235, 221, 255, 255], [0, 0, 255, 255], [0, 0, 60, 54, 198, 210, 255, 255], [0, 0, 73, 37, 150, 149, 199, 198, 255, 255]])), new a.A("vibrance", -0.1), new a.A("saturation", -0.1)],
              sharp: [new a.A("curves", new h.X([[0, 0, 42, 20, 199, 218, 224, 246, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]])), new a.A("vibrance", 0.1), new a.A("sharpen", 0.1), new a.A("clarity", 0.1)],
              corn: [new a.A("temperature", 0.1), new a.A("vibrance", 0.3), new a.A("contrast", 0.1), new a.A("curves", new h.X([[0, 0, 66, 78, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]]))],
              morning: [new a.A("tint", 0.18), new a.A("temperature", 0.1), new a.A("highlights", 0.08), new a.A("levels", new r.A(0, 245, 0, 255)), new a.A("curves", new h.X([[64, 64, 150, 181, 254, 255], [0, 0, 122, 138, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]])), new a.A("fill", new n.A(new i.A(194, 120, 41), "overlay", 0.2))],
              ensalat: [new a.A("highlights", 0.2), new a.A("shadows", -0.2), new a.A("brightness", 0.1), new a.A("levels", new r.A(10, 245, 0, 255)), new a.A("curves", new h.X([[0, 0, 135, 119, 191, 193, 255, 255], [0, 0, 255, 255], [0, 0, 129, 121, 255, 255], [0, 0, 255, 255]])), new a.A("clarity", 0.2), new a.A("sharpen", 0.15)],
              berry: [new a.A("vibrance", 0.44), new a.A("curves", new h.X([[0, 0, 62, 66, 121, 135, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]])), new a.A("contrast", 0.2), new a.A("highlights", 0.4), new a.A("shadows", -0.2), new a.A("levels", new r.A(20, 255, 0, 255))],
              gritty: [new a.A("saturation", -0.4), new a.A("levels", new r.A(20, 255, 0, 255)), new a.A("curves", new h.X([[0, 0, 50, 33, 128, 112, 190, 215, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]])), new a.A("clarity", 1), new a.A("grain", 0.3)],
              sunny: [new a.A("fill", new n.A(new i.A(255, 194, 96), "overlay", 0.2)), new a.A("temperature", 0.1), new a.A("glamour", 0.4), new a.A("clarity", 0.3)],
              film: [new a.A("sharpen", 0.2), new a.A("glamour", 0.5), new a.A("grain", 0.5), new a.A("highlights", -0.2), new a.A("shadows", -0.2), new a.A("saturation", -0.2)],
              matte: [new a.A("curves", new h.X([[0, 50, 38, 56, 79, 82, 152, 153, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]])), new a.A("contrast", 0.12), new a.A("saturation", -0.1)],
              deep: [new a.A("curves", new h.X([[0, 0, 117, 99, 191, 198, 255, 255], [0, 0, 71, 38, 177, 209, 255, 255], [0, 0, 236, 255], [0, 28, 75, 101, 190, 171, 254, 233]])), new a.A("saturation", -0.3)],
              aladin: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 52, 87, 99, 255, 255], [0, 0, 106, 107, 194, 190, 254, 212], [0, 0, 166, 129, 254, 142]]))],
              amber: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 98, 150, 255, 255], [0, 0, 138, 117, 255, 255], [0, 128, 254, 129]])), new a.A("saturation", -0.3), new a.A("levels", new r.A(20, 235, 0, 255))],
              anne: [new a.A("contrast", 0.25), new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 78, 66, 135, 171, 255, 255], [0, 0, 99, 87, 180, 208, 255, 255], [0, 0, 94, 93, 171, 161, 255, 255]]))],
              antonio: [new a.A("glamour", 0.8)],
              alex: [new a.A("glamour", 0.6)],
              bob: [new a.A("saturation", -0.6), new a.A("highlights", 0.5)],
              greg: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 74, 50, 181, 198, 255, 255], [0, 0, 61, 41, 108, 170, 158, 207, 254, 208], [0, 0, 83, 56, 168, 204, 255, 255]]))],
              hagrid: [new a.A("vibrance", 0.9), new a.A("saturation", 0.1), new a.A("clarity", 0.5), new a.A("shadows", -0.3)],
              harry: [new a.A("fill", new n.A(new i.A(214, 178, 119), "overlay", 0.7)), new a.A("grain", 0.5)],
              ivan: [new a.A("fill", new n.A(new i.A(255, 0, 68), "overlay", 0.4)), new a.A("shadows", 0.15), new a.A("levels", new r.A(6, 255, 0, 255))],
              jean: [new a.A("levels", new r.A(56, 233, 0, 255)), new a.A("saturation", -1), new a.A("tint", 0.1), new a.A("exposure", 0.78), new a.A("bloom", 0.1)],
              josh: [new a.A("curves", new h.X([[0, 0, 78, 52, 175, 207, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 64, 87, 129, 254, 193]]))],
              karen: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 89, 144, 255, 255], [0, 0, 138, 112, 255, 255], [0, 0, 162, 88, 255, 255]]))],
              lucas: [new a.A("tint", 1), new a.A("saturation", -0.85), new a.A("contrast", 0.4), new a.A("shadows", 1), new a.A("temperature", 0.1)],
              melissa: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 62, 255, 255], [0, 0, 255, 255], [0, 61, 254, 193]]))],
              peter: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 6, 31, 20, 65, 26, 87, 51, 195, 190, 254, 230], [0, 11, 24, 27, 102, 131, 189, 195, 255, 255], [0, 40, 126, 148, 254, 177]]))],
              salomon: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 83, 50, 177, 213, 255, 255], [0, 0, 69, 55, 186, 205, 255, 255], [11, 56, 254, 212]])), new a.A("contrast", -0.2)],
              sara: [new a.A("vibrance", 1), new a.A("contrast", 0.1), new a.A("highlights", 0.3)],
              sophia: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 140, 116, 222, 254], [0, 0, 70, 59, 182, 201, 255, 255], [0, 29, 252, 227]])), new a.A("saturation", 0.3)],
              tony: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 92, 42, 218, 252], [0, 0, 73, 75, 157, 194, 255, 255], [0, 27, 254, 227]]))],
              agnes: [new a.A("desaturate", 1), new a.A("contrast", 0.4)],
              conny: [new a.A("saturation", -0.55), new a.A("temperature", 0.25), new a.A("brightness", -0.25), new a.A("levels", new r.A(14, 233, 0, 255)), new a.A("exposure", 0.35), new a.A("highlights", -0.9)],
              gordon: [new a.A("desaturate", 1), new a.A("temperature", 0.7), new a.A("tint", 0.3), new a.A("saturation", -0.2)],
              harrison: [new a.A("toning", new o.A(new i.A(255, 240, 215), undefined, new i.A(48, 26, 24), 1)), new a.A("grain", 0.2)],
              henry: [new a.A("toning", new o.A(new i.A(255, 240, 215), undefined, new i.A(48, 26, 24), 1)), new a.A("saturation", -0.5)],
              logan: [new a.A("glamour", 0.5), new a.A("tint", 0.4), new a.A("saturation", -0.35), new a.A("toning", new o.A(new i.A(255, 240, 215), undefined, new i.A(48, 26, 24), 0.8))],
              olay: [new a.A("saturation", -1), new a.A("grain", 0.5), new a.A("vignette", 0.5)],
              porter: [new a.A("saturation", -1), new a.A("vignette", 0.4), new a.A("levels", new r.A(50, 205))],
              tom: [new a.A("desaturate", 1)],
              sampi: [new a.A("toning", new o.A(new i.A(255, 228, 196), undefined, new i.A(0, 0, 0), 1)), new a.A("levels", new r.A(0, 217, 0, 255)), new a.A("temperature", 0.3)],
              vinny: [new a.A("curves", new h.X([[0, 0, 133, 111, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 133, 138, 255, 255]])), new a.A("vibrance", -1), new a.A("saturation", 1), new a.A("temperature", 0.8), new a.A("contrast", -0.1), new a.A("highlights", 0.1)],
              borg: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 94, 66, 227, 255], [0, 0, 93, 94, 179, 198, 255, 255], [0, 19, 254, 228]])), new a.A("fill", new n.A(new i.A(204, 255, 0), "", 0.1))],
              carl: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 93, 64, 227, 255], [0, 0, 93, 94, 181, 189, 255, 255], [0, 19, 254, 228]])), new a.A("vignette", 0.3), new a.A("contrast", 0.15), new a.A("saturation", -0.3)],
              coco: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 64, 97, 255, 255], [0, 0, 142, 122, 255, 255], [0, 0, 144, 112, 255, 255]]))],
              doris: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 78, 48, 177, 209, 255, 255], [0, 0, 92, 94, 179, 208, 255, 255], [0, 52, 254, 215]])), new a.A("saturation", -0.2)],
              doug: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 64, 255, 255], [0, 0, 255, 255], [1, 64, 252, 193]])), new a.A("highlights", 0.5), new a.A("shadows", -0.3)],
              earl: [new a.A("vignette", 0.4), new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 222, 254], [0, 47, 223, 254], [0, 129, 222, 255]])), new a.A("fill", new n.A(new i.A(247, 218, 174), "multiply", 0.8))],
              sun: [new a.A("fill", new n.A(new i.A(251, 242, 163), "multiply", 0.8)), new a.A("vignette", -0.25)],
              blues: [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 77, 54, 181, 207, 255, 255], [0, 0, 73, 51, 180, 209, 255, 255], [0, 0, 54, 75, 201, 185, 255, 255]]))],
              country: [new a.A("curves", new h.X([[0, 0, 84, 74, 115, 105, 255, 255], [0, 0, 73, 80, 93, 124, 255, 255], [0, 0, 50, 34, 93, 105, 119, 142, 255, 255], [0, 0, 85, 85, 125, 112, 255, 255]]))],
              lemonpell: [new a.A("curves", new h.X([[0, 36, 80, 84, 156, 190, 255, 255], [0, 0, 255, 255], [0, 0, 103, 105, 158, 176, 255, 255], [0, 19, 107, 83, 198, 196, 255, 255]]))],
              "tiny dc": [new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 79, 46, 199, 217, 255, 255], [9, 1, 110, 126, 254, 232], [0, 46, 92, 103, 191, 158, 254, 205]])), new a.A("grain", 0.3)],
              minker: [new a.A("toning", new o.A(new i.A(255, 216, 153), undefined, new i.A(26, 0, 77), 0.8)), new a.A("levels", new r.A(0, 247, 8, 255)), new a.A("brightness", 0.14), new a.A("contrast", 0.4), new a.A("vibrance", 0.5)],
              superone: [new a.A("toning", new o.A(new i.A(255, 216, 153), undefined, new i.A(77, 0, 51), 0.8)), new a.A("levels", new r.A(50, 175, 0, 255))],
              tonola: [new a.A("toning", new o.A(new i.A(221, 255, 153), undefined, new i.A(77, 0, 51), 0.8)), new a.A("levels", new r.A(26, 213, 0, 255)), new a.A("saturation", 0.36), new a.A("temperature", 0.22)],
              reddish: [new a.A("toning", new o.A(new i.A(255, 214, 147), undefined, new i.A(110, 37, 0), 0.8)), new a.A("contrast", 0.3), new a.A("highlights", 1)],
              fellowing: [new a.A("toning", new o.A(new i.A(255, 216, 153), undefined, new i.A(77, 47, 0), 0.8)), new a.A("levels", new r.A(24, 203, 0, 255)), new a.A("contrast", 0.14), new a.A("saturation", 0.3), new a.A("temperature", 0.18)],
              grassland: [new a.A("toning", new o.A(new i.A(221, 255, 153), undefined, new i.A(0, 77, 25), 0.7)), new a.A("levels", new r.A(18, 227, 0, 255)), new a.A("contrast", 0.16)],
              springs: [new a.A("toning", new o.A(new i.A(221, 255, 153), undefined, new i.A(0, 26, 38), 1)), new a.A("highlights", 1), new a.A("levels", new r.A(40, 155, 0, 255)), new a.A("shadows", 1)],
              justblues: [new a.A("toning", new o.A(new i.A(198, 236, 255), undefined, new i.A(26, 0, 77), 0.79)), new a.A("levels", new r.A(16, 189, 0, 255)), new a.A("saturation", 0.2), new a.A("contrast", 0.2)],
              bluesteel: [new a.A("toning", new o.A(new i.A(255, 216, 153), undefined, new i.A(26, 0, 77), 0.8)), new a.A("levels", new r.A(0, 215, 12, 255))],
              flowerpot: [new a.A("toning", new o.A(new i.A(255, 153, 221), undefined, new i.A(51, 77, 0), 0.8)), new a.A("levels", new r.A(22, 215, 0, 255)), new a.A("vignette", -0.2)],
              stinker: [new a.A("toning", new o.A(new i.A(255, 216, 153), undefined, new i.A(26, 0, 77), 0.8)), new a.A("levels", new r.A(0, 247, 8, 255)), new a.A("brightness", 0.14), new a.A("contrast", 0.4)],
              violiin: [new a.A("contrast", 0.32), new a.A("toning", new o.A(new i.A(195, 166, 255), undefined, new i.A(33, 0, 0), 1)), new a.A("levels", new r.A(22, 223, 0, 255)), new a.A("exposure", 0.22), new a.A("brightness", 0.12)],
              blupur: [new a.A("toning", new o.A(new i.A(255, 153, 221), undefined, new i.A(7, 68, 97), 0.8)), new a.A("vibrance", 0.7), new a.A("contrast", 0.3)],
              beyllo: [new a.A("vibrance", 1), new a.A("saturation", 1), new a.A("temperature", -0.55), new a.A("tint", 0.1), new a.A("levels", new r.A(0, 255, 24, 249)), new a.A("toning", new o.A(new i.A(255, 213, 0), undefined, new i.A(125, 3, 84), 0.76)), new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 131, 115, 255, 255], [0, 0, 136, 128, 255, 255], [0, 0, 122, 145, 255, 255]])), new a.A("vignette", 0.28)],
              wifortress: [new a.A("toning", new o.A(new i.A(108, 206, 255), undefined, new i.A(0, 26, 38), 1)), new a.A("highlights", 1), new a.A("levels", new r.A(40, 155, 0, 255)), new a.A("shadows", 1)],
              vib: [new a.A("vibrance", 0.1), new a.A("saturation", 0.5), new a.A("brightness", 0.1), new a.A("temperature", 0.5), new a.A("levels", new r.A(12, 253, 0, 255)), new a.A("highlights", 0.2), new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 70, 80, 198, 181, 255, 255], [0, 0, 140, 135, 255, 255], [0, 0, 74, 96, 200, 172, 255, 255]])), new a.A("toning", new o.A(new i.A(255, 238, 210), undefined, new i.A(54, 6, 6), 0.07)), new a.A("contrast", -0.1)],
              ranguit: [new a.A("saturation", 0.22), new a.A("temperature", 0.96), new a.A("tint", -0.28), new a.A("contrast", 0.14), new a.A("brightness", -0.2), new a.A("levels", new r.A(0, 237, 56, 255)), new a.A("toning", new o.A(new i.A(221, 255, 153), undefined, new i.A(41, 35, 33), 0.26))],
              rangeen: [new a.A("vibrance", 1), new a.A("saturation", 0.46), new a.A("temperature", 0.36), new a.A("levels", new r.A(0, 251, 14, 255)), new a.A("shadows", 0.34), new a.A("highlights", 0.12), new a.A("toning", new o.A(new i.A(121, 255, 224), undefined, new i.A(245, 22, 107), 0.12)), new a.A("contrast", -0.1), new a.A("curves", new h.X([[0, 0, 144, 152, 255, 255], [0, 0, 136, 107, 255, 255], [0, 0, 115, 102, 255, 255], [0, 0, 106, 91, 255, 255]]))],
              creamlow: [new a.A("vibrance", 0.82), new a.A("saturation", -0.24), new a.A("temperature", 1), new a.A("tint", 0.78), new a.A("contrast", -0.3), new a.A("levels", new r.A(40, 247, 0, 255)), new a.A("highlights", 0.64), new a.A("toning", new o.A(new i.A(221, 255, 153), undefined, new i.A(145, 39, 9), 0.29)), new a.A("curves", new h.X([[0, 0, 5, 13, 78, 83, 172, 162, 255, 255], [0, 0, 255, 255], [0, 0, 131, 120, 255, 255], [0, 0, 68, 61, 175, 184, 255, 255]]))],
              sven: [new a.A("vibrance", 0.7), new a.A("temperature", 0.5), new a.A("tint", 0.3), new a.A("exposure", 0.2), new a.A("contrast", -0.2), new a.A("levels", new r.A(4, 255, 0, 235)), new a.A("highlights", -0.3), new a.A("shadows", 0.3), new a.A("grain", 0.3), new a.A("vignette", 0.45)],
              yenely: [new a.A("tint", 0.5), new a.A("levels", new r.A(0, 235, 20, 255)), new a.A("saturation", -0.62), new a.A("contrast", -0.3), new a.A("shadows", -0.6), new a.A("curves", new h.X([[0, 0, 148, 105, 255, 255], [0, 0, 92, 79, 128, 227, 255, 255], [0, 0, 74, 103, 119, 172, 255, 255], [0, 0, 111, 148, 255, 255]])), new a.A("highlights", 1), new a.A("brightness", 0.14), new a.A("temperature", 0.3), new a.A("vibrance", 1), new a.A("exposure", -0.1)],
              ragwarm: [new a.A("temperature", 0.62), new a.A("levels", new r.A(32, 255, 0, 243)), new a.A("highlights", -0.14), new a.A("vignette", 0.28), new a.A("toning", new o.A(new i.A(153, 255, 187), undefined, new i.A(21, 55, 143), 0.07)), new a.A("curves", new h.X([[0, 0, 126, 125, 255, 255], [0, 0, 255, 255], [0, 0, 130, 121, 255, 255], [0, 0, 138, 124, 255, 255]]))],
              greered: [new a.A("vibrance", 0.32), new a.A("temperature", 0.4), new a.A("tint", -0.5), new a.A("brightness", 0.24), new a.A("contrast", -0.1), new a.A("vignette", 0.31), new a.A("shadows", 0.38)],
              danligter: [new a.A("saturation", 0.86), new a.A("temperature", -1), new a.A("tint", -0.92), new a.A("brightness", 0.22), new a.A("exposure", 0.22), new a.A("contrast", 0.1), new a.A("levels", new r.A(0, 239, 0, 255)), new a.A("highlights", -0.12), new a.A("dehaze", -0.12), new a.A("toning", new o.A(new i.A(255, 216, 153), undefined, new i.A(0, 52, 77), 0.14)), new a.A("curves", new h.X([[0, 0, 255, 255], [0, 0, 96, 115, 162, 194, 255, 255], [0, 0, 101, 97, 185, 189, 255, 255], [0, 0, 144, 130, 222, 228, 255, 255]]))],
              garage: [new a.A("tint", 0.6), new a.A("saturation", -0.04), new a.A("shadows", -1), new a.A("grain", 0.42), new a.A("glamour", 0.3)],
              strawberry: [new a.A("fill", new n.A(new i.A(255, 0, 0), "soft-light", 0.5))],
              clementine: [new a.A("fill", new n.A(new i.A(255, 158, 0), "soft-light", 0.5))],
              pear: [new a.A("fill", new n.A(new i.A(170, 255, 0), "soft-light", 0.5))],
              apple: [new a.A("fill", new n.A(new i.A(0, 255, 85), "soft-light", 0.5))],
              blueberry: [new a.A("fill", new n.A(new i.A(0, 170, 255), "soft-light", 0.5))],
              grapes: [new a.A("fill", new n.A(new i.A(85, 0, 255), "soft-light", 0.5))],
              dragon: [new a.A("fill", new n.A(new i.A(255, 0, 170), "soft-light", 0.5))],
              punch: [new a.A("curves", new h.X([[0, 0, 80, 64, 173, 193, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255], [0, 0, 255, 255]])), new a.A("vibrance", 0.5)],
              bright: [new a.A("highlights", -0.3), new a.A("shadows", 0.5), new a.A("levels", new r.A(0, 215, 10, 255))],
              contrast: [new a.A("contrast", 0.2), new a.A("highlights", 0.2), new a.A("levels", new r.A(20, 215, 0, 255)), new a.A("shadows", 0.4)],
              vivid: [new a.A("vibrance", 0.4), new a.A("shadows", 0.25)],
              clairify: [new a.A("clarity", 0.6), new a.A("sharpen", 0.1), new a.A("glamour", 0.2)],
              poster: [new a.A("posterize", 0.08)],
              glitch: [new a.A("slice", {
                seed: 86,
                amount: 4,
                distance: 0.12,
                line: true
              }), new a.A("bleed", {
                seed: 58,
                amplitude: 0.05,
                block: 1.2
              })],
              mozak: [new a.A("mosaic", 0.5), new a.A("fringe", 0.2)],
              frank: [new a.A("fringe", 0.4)],
              pinvet: [new a.A("bloom", 0.33), new a.A("invert", 1), new a.A("pixelate", 0.7)],
              blomberg: [new a.A("bloom", 0.33), new a.A("invert", 1), new a.A("tint", 1), new a.A("temperature", -0.8), new a.A("saturation", -0.5)],
              lolita: [new a.A("fill", new n.A(new i.A(255, 153, 153), "vivid-light", 1))],
              atonic: [new a.A("curves", new h.X([[0, 0, 255, 255], [6, 235, 246, 4], [131, 3, 138, 255], [1, 42, 251, 213]]))],
              "night vision": [new a.A("fill", new n.A(new i.A(30, 255, 0), "multiply", 1)), new a.A("levels", new r.A(0, 183, 0, 255)), new a.A("vignette", 0.85), new a.A("grain", 0.6)],
              darkstreet: [new a.A("temperature", -1), new a.A("highlights", 0.58), new a.A("shadows", -1), new a.A("levels", new r.A(100, 249, 0, 255)), new a.A("grain", 1), new a.A("exposure", -1)],
              splash: [new a.A("desaturate", 1)],
              blur: [new a.A("blur", 0.5)],
              zoom: [new a.A("zoom", {
                x: 0.5,
                y: 0.5,
                amount: 0.2
              })],
              spin: [new a.A("radial", {
                amount: 0.08,
                x: 0.5,
                y: 0.5,
                direction: 2,
                symmetry: false
              })],
              motion: [new a.A("motion", {
                amount: 0.7,
                angle: Math.PI / 1.8 * 0.23
              })],
              mozaik: [new a.A("mosaic", 0.5)],
              pixel: [new a.A("pixelate", 0.7)]
            };
          }
        }
        static named(t) {
          l.init();
          return this.presets[t];
        }
        static firstInGroup(t) {
          l.init();
          return l.grouping[t][0];
        }
        static groupLength(t) {
          return l.grouping[t].length;
        }
        static groups() {
          l.init();
          const t = [];
          for (const e in l.grouping) {
            t.push(e);
          }
          return t;
        }
        static names(t) {
          l.init();
          const e = [];
          for (const s in l.grouping[t]) {
            e.push(l.grouping[t][s]);
          }
          return e;
        }
      }
    }
