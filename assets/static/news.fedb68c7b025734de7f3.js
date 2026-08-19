"use strict";
(self.webpackChunkpixlr = self.webpackChunkpixlr || []).push([
  [946],
  {
    3013(e, s, t) {
      (t.r(s), t.d(s, { default: () => r }));
      var a = t(7775),
        n = t(5283),
        l = t(5833),
        c = t(7135),
        i = t(5432),
        d = t(2443),
        o = t(98);
      class r extends l.A {
        constructor(e) {
          var s, t;
          if (
            (super(),
            (this.selectedIndex = 0),
            this.dialog.classList.add("news-dialog"),
            e.length > 1)
          ) {
            const t = (e) => (e.length > 50 ? e.slice(0, 50) + "…" : e),
              l = e.map((s, a) =>
                (0, n.T)(
                  "a",
                  {
                    id: `news-menu-item-${a}`,
                    className:
                      a === this.selectedIndex ? "item selected" : "item",
                    href: "javascript:;",
                    onclick: () => {
                      var s;
                      ((0, n.Ay)(
                        `news-menu-item-${this.selectedIndex}`,
                      ).classList.remove("selected"),
                        (0, n.Ay)(`news-menu-item-${a}`).classList.add(
                          "selected",
                        ),
                        (0, n.Ay)("news-current").replaceWith(m(e[a])),
                        (this.selectedIndex = a),
                        null === (s = (0, n.Ay)("new-checkout-cta")) ||
                          void 0 === s ||
                          s.addEventListener("click", () => {
                            (new d.default("news", "premium"), this.cleanUp());
                          }),
                        (0, c.A)("news-select"));
                    },
                  },
                  (0, n.T)("div", t(s.title)),
                ),
              );
            (this.setContent(
              (0, n.T)(
                "div",
                { className: "news-split" },
                (0, n.T)(
                  "div",
                  { className: "news-menu" },
                  (0, n.T)(
                    "div",
                    { className: "headline" },
                    (0, a.A)("whatsNew"),
                  ),
                  (0, n.T)("div", {}, ...l),
                ),
                (0, n.T)(
                  "div",
                  { className: "news-body" },
                  m(e[this.selectedIndex]),
                ),
              ),
            ),
              null === (s = (0, n.Ay)("new-checkout-cta")) ||
                void 0 === s ||
                s.addEventListener("click", () => {
                  (new d.default("news", "premium"), this.cleanUp());
                }));
          } else
            (this.dialog.classList.add("single-news"),
              this.setContent(m(e[0])),
              null === (t = (0, n.Ay)("new-checkout-cta")) ||
                void 0 === t ||
                t.addEventListener("click", () => {
                  (new d.default("news", "premium"), this.cleanUp());
                }));
          (0, o.ZC)("lastNewsCheck", new Date().toISOString());
        }
      }
      function m(e, s) {
        const t = new Date(e.publishDate);
        let l;
        if (e.video) {
          const t = () => {
            const s = Math.max(360, a.getBoundingClientRect().height),
              t = `https://www.youtube.com/embed/${e.video}?autoplay=1&modestbranding=1`;
            ((l.style.height = s + "px"),
              (a.style.filter = "blur(6px)"),
              (0, c.A)("news-play"),
              l.append(
                (0, n.T)(
                  "div",
                  { className: "player-container" },
                  (0, n.T)("iframe", {
                    width: "640",
                    height: "360",
                    src: t,
                    className: "player",
                    allow: "autoplay",
                  }),
                ),
              ));
          };
          let a = (0, n.T)("img", {
              className: "news-cover",
              src: e.cover,
              onload: s,
            }),
            i = (0, n.T)(
              "div",
              { className: "play-button", onclick: t },
              (0, n.T)("img", { src: "/img/icon/play-circle.svg" }),
            );
          l = (0, n.T)("div", { className: "cover-stack" }, a, i);
        } else
          l = (0, n.T)("img", {
            className: "news-cover",
            src: e.cover,
            onload: s,
          });
        return (0, n.T)(
          "div",
          { id: "news-current" },
          l,
          (0, n.T)(
            "div",
            { className: "news-content" },
            (0, n.T)(
              "div",
              { className: "news-title" },
              (0, n.T)(
                "div",
                { className: "news-date" },
                (0, n.T)("span", `${t.toLocaleDateString()}`),
              ),
              (0, n.T)("span", { className: "news-headline" }, e.title),
            ),
            (0, n.T)("div", { className: "news-text" }, e.text),
            e.checkoutCta &&
              "free" ===
                (null === i.Ny || void 0 === i.Ny
                  ? void 0
                  : i.Ny.subscriptionAccess)
              ? (0, n.T)(
                  "a",
                  {
                    className: "button med",
                    style: "margin-left:auto;",
                    id: "new-checkout-cta",
                    dataset: e.ctaDataset || {},
                  },
                  i.Ny
                    ? (0, a.A)("commonGetSubscription")
                    : (0, a.A)("commonSignUpNow"),
                )
              : e.urlWeb
                ? (0, n.T)(
                    "a",
                    {
                      className: "button med",
                      style: "margin-left:auto;",
                      href: e.urlWeb,
                      target: "_blank",
                      onmousedown: () => {
                        (0, c.A)("news-url-web");
                      },
                    },
                    e.cta,
                  )
                : "",
          ),
        );
      }
    },
  },
]);
