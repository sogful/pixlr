window.__editorModules[4182] = function (t, e, s) {
      var i = s(5699);
      var a = s(9973);
      var n = s(5056);
      var o = s(8464);
      class r {
        constructor(t, e, s = false, i = "woff", a, n) {
          this.name = t;
          this.short = e;
          this.premium = s;
          this.local = !!a;
          this.thumb = n;
          this.font = a;
          this.type = i;
        }
        static async save(t) {
          const e = await (0, a.P2)();
          const [s] = e.transaction("readwrite", "fonts");
          await s.put(t, t.name);
        }
        static async delete(t) {
          const e = await (0, a.P2)();
          const [s] = e.transaction("readwrite", "fonts");
          await s.delete(t.name);
        }
      }
      class h {
        static async loadFontFromTemplate(t, e, s) {
          var i;
          var a;
          let n = (i = s.split(".")[0]) === null || i === undefined ? undefined : i.toLowerCase();
          let o = (a = s.split(".")[1]) === null || a === undefined ? undefined : a.toLowerCase();
          return await h.createLocalFontDesc(t, e, n, o);
        }
        static async loadFontFromUpload(t) {
          var e;
          var s;
          let i = (e = t.name.split(".")[0]) === null || e === undefined ? undefined : e.substring(0, 50).replace(/[~`!@#$%^&*()+={}\[\];:\'\"<>.,\/\\\?]/g, "").replace(/-/g, " ").replace(/   /g, " ").replace(/  /g, " ");
          let a = (s = t.name.split(".")[1]) === null || s === undefined ? undefined : s.toLowerCase();
          let n = i.substring(0, 20).replace(" ", "").toLowerCase();
          i = (i == null ? undefined : i.charAt(0).toUpperCase()) + (i == null ? undefined : i.slice(1));
          if (h.fontList.find(t => t.name === i)) {
            document.dispatchEvent(new CustomEvent("notification", {
              detail: "Font already exists!"
            }));
            return;
          }
          let o = a;
          switch (a) {
            case "otf":
              o = "opentype";
              break;
            case "ttf":
              o = "truetype";
          }
          const r = new Blob([t], {
            type: "font/" + o
          });
          let l = await h.createLocalFontDesc(r, i, n, a);
          if (l) {
            document.dispatchEvent(new CustomEvent("notification", {
              detail: "Font was added!"
            }));
          }
          return l;
        }
        static async createLocalFontDesc(t, e, s, a) {
          const n = new r(e, s, false, a, t);
          try {
            await h.addToDOM(n);
          } catch (p) {
            console.log(p);
            document.dispatchEvent(new CustomEvent("notification", {
              detail: "Failed to load font!"
            }));
            return;
          }
          let l = new o.A(e, 56);
          if (l.height > 72) {
            l.setSize(Math.floor(72 / l.height * 56));
          }
          const c = i.VI(500, 80);
          const d = c.getContext("2d");
          d.font = l.getCssFont();
          d.fillStyle = "#ffffff";
          d.textBaseline = "top";
          d.fillText(e, 0, Math.round((80 - l.height) / 2) - l.ascent);
          var u;
          n.thumb = await (u = c, new Promise((t, e) => {
            u.toBlob(e => {
              t(e);
            }, "image/png");
          }));
          await r.save(n);
          h.fontList.unshift(n);
          return n;
        }
        static async removeLocalFontDesc(t) {
          let e = h.getFontDesc(t);
          if (e) {
            await r.delete(e);
            h.fontList = h.fontList.filter(t => t !== e);
          }
        }
        static async addToDOM(t) {
          if (!t) {
            return;
          }
          const e = t.local ? new FontFace(t.name, await (0, n.CB)(t.font)) : new FontFace(t.name, `url(assets/fonts/${t.short}.woff) format('woff')`);
          if (document.fonts.has(e)) {
            return Promise.resolve(e);
          }
          let s = await e.load();
          document.fonts.add(s);
          return s;
        }
        static getFontDesc(t) {
          return h.fontList.find(e => e.name === t);
        }
        static async getFontFile(t) {
          let e = this.getFontDesc(t);
          if (!e) {
            return;
          }
          if (e.local) {
            return new File([e.font], e.name);
          }
          let s = await fetch("assets/fonts/" + e.short + ".woff").then(t => t.blob());
          if (s) {
            return new File([s], e.short + ".woff", {
              type: "font/woff"
            });
          } else {
            return undefined;
          }
        }
        static async loadSaved() {
          const t = await (0, a.P2)();
          const [e] = t.transaction("readonly", "fonts");
          return e.iterate();
        }
      }
      h.fontList = [new r("Arial", "arial"), new r("Courier New", "courier"), new r("Georgia", "georgia"), new r("Trebuchet MS", "trebuchet"), new r("Verdana", "verdana"), new r("Aberus", "aberus"), new r("Ablation", "ablation", true), new r("Adeft", "adeft"), new r("Adelya", "adelya", true), new r("Adios Amigos", "adios"), new r("Adolfine", "adolfine"), new r("Agnostic", "agnostic", true), new r("Aiden", "aiden"), new r("Amaranth", "amaranth"), new r("Amateur Typewriter", "amateur", true), new r("Alder", "alder", true), new r("Almondia", "almondia"), new r("Aloma Island", "alomaisland", true), new r("Alvida", "alvida"), new r("Amoreiza", "amoreiza"), new r("AmoretteLight", "amorette"), new r("Angeleno Brush Script", "angeleno", true), new r("Antreas", "antreas"), new r("Arm Race", "arm"), new r("Artick", "artick"), new r("Asap", "asap"), new r("Atomsfer", "atomosfer"), new r("Atthens", "atthens"), new r("Avocado Sans", "avocado", true), new r("Baangkarr Press", "baangkarr", true), new r("Badstar", "badstar", true), new r("Bahram", "bahram"), new r("Baileyns", "baileyns"), new r("Barooduck", "barooduck", true), new r("Bearley", "bearley"), new r("Beat", "beat", true), new r("BebasNeue", "bebasneue"), new r("Bellquinas", "bellquinas"), new r("Bengrraas", "bengrraas"), new r("Beornheard", "beornheard"), new r("Berretti", "berretti"), new r("Biker New", "biker", true), new r("Blossom Berry Script", "blossomberry", true), new r("Boullervard", "boullervard"), new r("Bondie", "bondie", true), new r("Bondrians", "bondrians", true), new r("Braga Deco", "braga"), new r("Brave Hearted", "brave"), new r("Bright Orchid", "brightorchid", true), new r("Brioche", "brioche", true), new r("Brocklyn", "brocklyn"), new r("Bronzier", "bronzier", true), new r("Brooklyn", "brooklyn", true), new r("Brodetto", "brodetto"), new r("Bronela", "bronela", true), new r("The Brownies", "brownies"), new r("Bubbble Gum", "bubbblegum", true), new r("Brushcheetah", "brushcheetah"), new r("Butternut Script", "butternut", true), new r("Caang", "caang"), new r("Cakehtreuks", "cakehtreuks"), new r("Cannoli Poke", "cannoli", true), new r("Camille", "camille"), new r("Calamandria", "calamandria"), new r("Caldwell", "caldwell", true), new r("Carafun", "carafun"), new r("Carnavonts", "carnavonts"), new r("Carvino", "carvino"), new r("Cervantes", "cervantes"), new r("Chaiaathah", "chaiaathah", true), new r("Chalkyal", "chalkyal"), new r("Chiqarine", "chiqarine"), new r("Chukies", "chukies"), new r("Cincoyo", "cincoyo"), new r("Clockwise", "clockwise", true), new r("Coast Redwood", "coast"), new r("Colombo", "colombo", true), new r("College", "college", true), new r("Companion", "companion"), new r("Corlombus", "corlombus"), new r("Conseration", "conseration", true), new r("CuprumFFU", "cuprum"), new r("Cupello sons", "cupello", true), new r("Costa Mala", "costamala", true), new r("Cozy", "cozy", true), new r("CreamyMoony", "creamy"), new r("Cross Road", "crossroad", true), new r("Cross Road Slab", "crossroadslab", true), new r("Daddy Day", "daddy"), new r("Dankduck", "dankduck"), new r("Darbots", "darbots", true), new r("Davish", "davish", true), new r("Davish Rounded", "davishround", true), new r("Dear Journal", "dearjournal", true), new r("Delicious", "delicious", true), new r("Desmodus", "desmodus"), new r("Desmosedici", "desmosedici"), new r("Dhangdose", "dhangdose"), new r("Dingle", "dingle", true), new r("Djangart Rough", "djangart"), new r("Dolington", "dolington", true), new r("Doppelganger", "doppelganger", true), new r("Dorr", "dorr", true), new r("Dustin", "dustin", true), new r("Earth And Sky", "earth"), new r("Easterica", "easterica"), new r("Eastone", "eastone"), new r("Eastwood", "eastwood", true), new r("Echizen", "echizen"), new r("El-Karnito", "elkarnito"), new r("Elliot", "elliot"), new r("Elysian", "elysian", true), new r("Emery", "emery"), new r("Empire View", "empire"), new r("Eugiene", "eugiene"), new r("Espano", "espano", true), new r("Erleane", "erleane"), new r("Everleigh", "everleigh", true), new r("Exquisite", "exquisite", true), new r("Farewell Angelina", "angelina", true), new r("Father and Son", "father"), new r("Fatherly", "fatherly"), new r("Fenord", "fenord", true), new r("Finland", "finland", true), new r("Flamingo", "flamingo"), new r("FoxyMist", "foxy"), new r("Forever Freedom", "forever", true), new r("Game On", "game"), new r("Gamour", "gamour", true), new r("Gallerina", "gallerina", true), new r("Geronide", "geronide", true), new r("Geronide Stamp", "geronidestamp", true), new r("Gingle Snowland", "ginglesnowland", true), new r("Gingerbreads", "gingerbreads"), new r("Gladiolusy", "gladiolusy", true), new r("Glamper", "glamper", true), new r("Goldie Dreambox", "goldiedreambox", true), new r("Gordon", "gordon", true), new r("Gorgeous", "gorgeous", true), new r("Gingerly", "gingerly", true), new r("Goorraatt", "goorraatt"), new r("Grayson", "grayson", true), new r("Great Again", "great"), new r("Grovana", "grovana", true), new r("Gustavo", "gustavo"), new r("Haahloddoh", "haahloddoh"), new r("Hadrea", "hadrea"), new r("Hairmusk", "hairmusk"), new r("Hakushou", "hakushou"), new r("Harietta", "harietta", true), new r("Hattori Hanzo", "hattori"), new r("Haystacks", "haystacks", true), new r("Heater", "heater"), new r("Hedonist", "hedonist", true), new r("Hello Alpha", "helloa"), new r("Hello Daddy", "hellod", true), new r("Hello People", "hello"), new r("Hello Spring", "hellospring", true), new r("Hellowins", "hellowins"), new r("Heypatricks", "heypatricks"), new r("Highway", "highway", true), new r("Hippo Letto", "hippo"), new r("Historia", "historia", true), new r("Hollawind", "hollawind"), new r("Hodor", "hodor", true), new r("Honey", "honey"), new r("Honeyspice", "honeyspice", true), new r("Huckleberries", "huckleberries"), new r("Hymned Sans", "hymnedsans", true), new r("Hymned Script", "hymnedscript", true), new r("IacottNeue", "iacottneue", true), new r("Icebold", "icebold", true), new r("Inder", "inder"), new r("Indigo", "indigo", true), new r("Irish gold", "irishgold"), new r("Irishgreen", "irishgreen"), new r("Its mine", "itsmine"), new r("Jacinda", "jacinda", true), new r("Jared", "jared"), new r("Jarots", "jarots"), new r("Jomantara", "jomantara"), new r("Josefin", "josefin"), new r("Juneville", "juneville"), new r("Jura", "jura"), new r("Kajika", "kajika"), new r("Kakamora", "kakamora"), new r("Katey Blue", "kateyblue", true), new r("Keripik", "keripik"), new r("Ketapang", "ketapang"), new r("Kindel", "kindel", true), new r("Kingbirds", "kingbirds", true), new r("Laahleggek", "laahleggek"), new r("Laborations", "laborations"), new r("La Fiesta", "lafiesta"), new r("Landon", "landon"), new r("Landre", "landre", true), new r("Langley", "langley"), new r("La Vonn", "vonn"), new r("Laudya Bloods", "laudya"), new r("Leaderson", "leaderson"), new r("Leath", "leath"), new r("Legendum", "legendum"), new r("Leobronx", "leobronx"), new r("Little Edelweiss", "little"), new r("Little Girl", "littlegirl"), new r("Lotus Eater", "lotuseater", true), new r("Lobster", "lobster"), new r("Lovalicious", "lovalicious", true), new r("Loverstruck", "loverstruck"), new r("MaaLLaangBronks", "maallaangbronks"), new r("Madison", "madison"), new r("Magic Winter", "magicwinter"), new r("Magic Trick", "magic"), new r("Mai Leho Bahhrala", "maileho"), new r("Maldisa", "maldisa"), new r("Malinsha", "malinsha", true), new r("Maple Leaves", "mapleleaves", true), new r("Maxton", "maxton"), new r("Market", "market"), new r("Marones", "marones", true), new r("Me and my dog", "meandmydog", true), new r("Meidy", "meidy"), new r("Menighampiil", "menighampiil"), new r("Mewton", "mewton"), new r("Merry Merry", "merrymerry", true), new r("Molot", "molot"), new r("Momday", "momday"), new r("Moms Note", "moms"), new r("Monday Lovers", "monday"), new r("Monetta", "monetta"), new r("Mongli", "mongli"), new r("Montour", "montour"), new r("Morissette Script", "morissette"), new r("Mountain", "mountain"), new r("Mooka", "mooka", true), new r("More Magic", "moremagic", true), new r("Morgana Sonz", "morgana", true), new r("Nature Force", "natureforce", true), new r("Ms Orange Sky", "ms"), new r("Najova", "najova"), new r("Natarajasana", "natarajasana"), new r("Naville", "naville"), new r("Neorah", "neorah"), new r("New Autumn", "new"), new r("No Siesta", "nosiesta"), new r("Night Jump", "nightjump"), new r("Notes", "notes", true), new r("NoFire", "nofire"), new r("North Avellion", "northavellion", true), new r("Northern", "northern"), new r("North High Shadow", "northhighsdw", true), new r("North High", "northhigh", true), new r("Novante", "novante", true), new r("Nunu", "nunu"), new r("Offlander", "offlander", true), new r("Oliemolly", "oliemolly", true), new r("Oracles", "oracles"), new r("Ostern", "ostern"), new r("Otakaku", "otakaku"), new r("Out Hill", "out"), new r("Overdose", "overdose"), new r("Paabaalioot", "paabaalioot"), new r("Painted Gallery", "paintedgallery", true), new r("Pandoura", "pandoura"), new r("PapaRocknRoll", "papa"), new r("Paradise", "paradise"), new r("Patlabour", "patlabour", true), new r("Peach Market", "peachmarket", true), new r("Peanut", "peanut"), new r("Peony Rose", "peonyrose", true), new r("Perfect Thoughts", "perfectthoughts", true), new r("Pina Colada", "pinacolada", true), new r("Piqolo", "piqolo"), new r("Pixelo", "pixelo"), new r("Plunge", "plunge"), new r("Pop Fist", "pop"), new r("Ponch", "ponch", true), new r("Popera", "popera"), new r("Powder", "powder", true), new r("Practish", "practish"), new r("Print Clearly", "print"), new r("Pulsate", "pulsate", true), new r("Qlassik", "qlassik"), new r("quatro", "quatro", true), new r("Quattrocento", "quattrocento"), new r("Queenata", "queenata"), new r("Quella Script", "quella"), new r("Questro", "questro"), new r("Quickie Sweet", "quickie"), new r("Quill & Ink", "quillink"), new r("Quish", "quish"), new r("Ranania", "ranania"), new r("Rankings Caps", "rankingscaps", true), new r("Raroedette", "raroedette"), new r("Rawwwing", "rawwwing"), new r("Raquella", "raquella"), new r("Reepouh", "reepouh"), new r("Regan Slab", "regan"), new r("Reewoooh", "reewoooh", true), new r("Reilly", "reilly"), new r("Remembrance", "remembrance", true), new r("Retrocycles", "retrocycles"), new r("Retros", "retros"), new r("Revans", "revans", true), new r("Reynolds Square", "reynoldssquare", true), new r("Rhapsody", "rhapsody"), new r("Riverside", "riverside"), new r("Republiko", "republiko", true), new r("Rocky", "rocky"), new r("Roars", "roars"), new r("Rockford", "rockford", true), new r("Rockrace", "rockrace", true), new r("Romaniesta", "romaniesta"), new r("Romelio", "romelio"), new r("Roossooh", "roossooh"), new r("Ropa", "ropa"), new r("Rolves", "rolves", true), new r("Roque", "roque"), new r("Rosario", "rosario"), new r("Roundaries", "roundaries"), new r("Rowan", "rowan", true), new r("Salmonberry", "salmonberry", true), new r("San Barley", "san"), new r("Saqanone", "saqanone"), new r("Sants", "sants"), new r("Sanur beach", "sanur"), new r("Scriptonesia", "scriptonesia", true), new r("Secretary Typewriter", "secretary", true), new r("Sedalia", "sedalia", true), new r("Search", "search", true), new r("Searchlight", "searchlight", true), new r("See De Mayo", "see"), new r("Serenity", "serenity"), new r("The Servant", "servant"), new r("Sheraton", "sheraton", true), new r("Shoelaces", "shoelaces", true), new r("Silvertone", "silvertone", true), new r("Smoother", "smoother", true), new r("Spring Break", "springbreak", true), new r("Spotlights Thin", "spotlightsthin", true), new r("Spotlights Chunky", "spotlightschunky", true), new r("Squiborn", "squiborn", true), new r("Staatliches", "staatliches"), new r("Stardust Moonlight", "stardust"), new r("The Stoothgart", "stoothgart"), new r("Summer Coconut", "summer"), new r("Summer Joy", "summerjoy"), new r("Summer Nude", "summernude", true), new r("Summer Peach", "summerpeach"), new r("Summer Solstice", "summersolstice", true), new r("Summery", "summery"), new r("Sun Again", "sunagain"), new r("Sun Pepper", "sun"), new r("Sun Streets", "sunstreets"), new r("Sunny Bay", "sunnybay", true), new r("Sunshine Boy", "sunshine"), new r("Super Slayers", "super"), new r("Surface", "surface"), new r("Sweeneey", "sweeneey"), new r("Teaspoon", "teaspoon"), new r("Tabu", "tabu"), new r("Teodore", "teodore", true), new r("TeXGyreHeros", "texgyreheros"), new r("The Brocker", "brocker"), new r("The California", "thecalifornia"), new r("The Harison", "harison"), new r("The Love For Money", "theloveformoney", true), new r("The Mastiff", "mastiff"), new r("The Patriot", "patriot"), new r("The Pinta", "pinta"), new r("The Roxv", "roxv"), new r("The Rogue", "rogue"), new r("The Stegris", "thestegris", true), new r("The Queen", "queen"), new r("Thirtylane", "thirtylane", true), new r("Titian", "titian"), new r("Todes", "todes", true), new r("Tropical Coast", "tropicalcoast"), new r("Torberta", "torberta"), new r("Twigs", "twigs"), new r("Twirly Ballerina", "twirly", true), new r("Unreal", "unreal"), new r("Vaganza", "vaganza"), new r("Valeria", "valeria", true), new r("Valery", "valery"), new r("Vignette", "vignette"), new r("Von Everect", "von"), new r("The Voyager", "voyager", true), new r("Wandering Flowers", "wandering", true), new r("Wargate", "wargate", true), new r("Western Shooter", "westernshooter", true), new r("West Java", "westjava", true), new r("Winter Sunrise", "wintersunrise", true), new r("White Wonder", "whitewonder", true), new r("Yanone Kaffeesatz", "kaffeesatz"), new r("Wonderul Wilderness", "wonderulwilderness", true), new r("Yoseline", "yoseline"), new r("Zombie Dust", "zombie")];
      h.loadFont = t => {
        let e = h.fontList.find(e => e.name === t);
        if (e) {
          return h.addToDOM(e);
        }
      };
      const l = h;
      s.d(e, ["A", 0, l]);
    }
