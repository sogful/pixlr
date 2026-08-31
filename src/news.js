"use strict";

(self.webpackChunkpixlr = self.webpackChunkpixlr || []).push([[946], {
  3013(moduleArg, exportsArg, requireArg) {
    requireArg.r(exportsArg), requireArg.d(exportsArg, {
      default: () => NewsDialog
    });
    var i18n = requireArg(7775),
      dom = requireArg(5283),
      BaseModal = requireArg(5833),
      analytics = requireArg(7135),
      userSession = requireArg(5432),
      checkoutEntry = requireArg(2443),
      settings = requireArg(98);
    class NewsDialog extends BaseModal.A {
      constructor(newsItems) {
        var ctaButtonA, ctaButtonB;
        if (super(), this.selectedIndex = 0, this.dialog.classList.add("news-dialog"), newsItems.length > 1) {
          const truncate = title => title.length > 50 ? title.slice(0, 50) + "…" : title,
            menuItems = newsItems.map((newsItem, index) => (0, dom.T)("a", {
              id: `news-menu-item-${index}`,
              className: index === this.selectedIndex ? "item selected" : "item",
              href: "javascript:;",
              onclick: () => {
                var ctaButton;
                (0, dom.Ay)(`news-menu-item-${this.selectedIndex}`).classList.remove("selected"), (0, dom.Ay)(`news-menu-item-${index}`).classList.add("selected"), (0, dom.Ay)("news-current").replaceWith(renderNewsItem(newsItems[index])), this.selectedIndex = index, null === (ctaButton = (0, dom.Ay)("new-checkout-cta")) || void 0 === ctaButton || ctaButton.addEventListener("click", () => {
                  new checkoutEntry.default("news", "premium"), this.cleanUp();
                }), (0, analytics.A)("news-select");
              }
            }, (0, dom.T)("div", truncate(newsItem.title))));
          this.setContent((0, dom.T)("div", {
            className: "news-split"
          }, (0, dom.T)("div", {
            className: "news-menu"
          }, (0, dom.T)("div", {
            className: "headline"
          }, (0, i18n.A)("whatsNew")), (0, dom.T)("div", {}, ...menuItems)), (0, dom.T)("div", {
            className: "news-body"
          }, renderNewsItem(newsItems[this.selectedIndex])))), null === (ctaButtonA = (0, dom.Ay)("new-checkout-cta")) || void 0 === ctaButtonA || ctaButtonA.addEventListener("click", () => {
            new checkoutEntry.default("news", "premium"), this.cleanUp();
          });
        } else this.dialog.classList.add("single-news"), this.setContent(renderNewsItem(newsItems[0])), null === (ctaButtonB = (0, dom.Ay)("new-checkout-cta")) || void 0 === ctaButtonB || ctaButtonB.addEventListener("click", () => {
          new checkoutEntry.default("news", "premium"), this.cleanUp();
        });
        (0, settings.ZC)("lastNewsCheck", new Date().toISOString());
      }
    }
    function renderNewsItem(item, onCoverLoad) {
      const publishDate = new Date(item.publishDate);
      let coverElement;
      if (item.video) {
        const playHandler = () => {
          const playerHeight = Math.max(360, coverImg.getBoundingClientRect().height),
            embedUrl = `https://www.youtube.com/embed/${item.video}?autoplay=1&modestbranding=1`;
          coverElement.style.height = playerHeight + "px", coverImg.style.filter = "blur(6px)", (0, analytics.A)("news-play"), coverElement.append((0, dom.T)("div", {
            className: "player-container"
          }, (0, dom.T)("iframe", {
            width: "640",
            height: "360",
            src: embedUrl,
            className: "player",
            allow: "autoplay"
          })));
        };
        let coverImg = (0, dom.T)("img", {
            className: "news-cover",
            src: item.cover,
            onload: onCoverLoad
          }),
          playButton = (0, dom.T)("div", {
            className: "play-button",
            onclick: playHandler
          }, (0, dom.T)("img", {
            src: "assets/images/icon/play-circle.svg"
          }));
        coverElement = (0, dom.T)("div", {
          className: "cover-stack"
        }, coverImg, playButton);
      } else coverElement = (0, dom.T)("img", {
        className: "news-cover",
        src: item.cover,
        onload: onCoverLoad
      });
      return (0, dom.T)("div", {
        id: "news-current"
      }, coverElement, (0, dom.T)("div", {
        className: "news-content"
      }, (0, dom.T)("div", {
        className: "news-title"
      }, (0, dom.T)("div", {
        className: "news-date"
      }, (0, dom.T)("span", `${publishDate.toLocaleDateString()}`)), (0, dom.T)("span", {
        className: "news-headline"
      }, item.title)), (0, dom.T)("div", {
        className: "news-text"
      }, item.text), item.checkoutCta && "free" === (null === userSession.Ny || void 0 === userSession.Ny ? void 0 : userSession.Ny.subscriptionAccess) ? (0, dom.T)("a", {
        className: "button med",
        style: "margin-left:auto;",
        id: "new-checkout-cta",
        dataset: item.ctaDataset || {}
      }, userSession.Ny ? (0, i18n.A)("commonGetSubscription") : (0, i18n.A)("commonSignUpNow")) : item.urlWeb ? (0, dom.T)("a", {
        className: "button med",
        style: "margin-left:auto;",
        href: item.urlWeb,
        target: "_blank",
        onmousedown: () => {
          (0, analytics.A)("news-url-web");
        }
      }, item.cta) : ""));
    }
  }
}]);
