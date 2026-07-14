/* ============================================================================
 * RBC Quest — renderer
 * Builds the game cards from window.GAMES and wires up the mobile "best on
 * desktop" warning. No dependencies, no build step.
 * ==========================================================================*/
(function () {
  "use strict";

  var grid = document.getElementById("game-grid");
  var banner = document.getElementById("mobile-banner");
  var games = Array.isArray(window.GAMES) ? window.GAMES : [];

  // Small screen OR touch device → treat as "mobile" for warnings.
  function isSmallScreen() {
    try {
      return window.matchMedia("(max-width: 720px)").matches ||
             window.matchMedia("(pointer: coarse)").matches;
    } catch (e) {
      return window.innerWidth <= 720;
    }
  }

  function isPlayableUrl(url) {
    return typeof url === "string" && /^https?:\/\//i.test(url.trim());
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function buildCard(game, mobile) {
    var card = el("article", "card");
    card.setAttribute("role", "listitem");

    /* ---- banner (gradient + emoji + optional desktop badge) ---- */
    var a = (game.accent && game.accent[0]) || "#1d4ed8";
    var b = (game.accent && game.accent[1]) || "#0e7490";
    var bannerEl = el("div", "card__banner");
    bannerEl.style.background = "linear-gradient(135deg, " + a + ", " + b + ")";
    bannerEl.appendChild(el("span", "card__emoji", game.emoji || "🎮"));

    if (game.desktopOnly) {
      var badge = el("span", "card__badge");
      badge.appendChild(el("span", null, "🖥️"));
      badge.appendChild(el("span", null, "Best on desktop"));
      bannerEl.appendChild(badge);
    }
    card.appendChild(bannerEl);

    /* ---- body ---- */
    var body = el("div", "card__body");

    var titleRow = el("div", "card__titlerow");
    titleRow.appendChild(el("h3", "card__title", game.title || "Untitled"));
    if (game.ageBand) titleRow.appendChild(el("span", "card__age", game.ageBand));
    body.appendChild(titleRow);

    if (game.blurb) body.appendChild(el("p", "card__blurb", game.blurb));

    if (Array.isArray(game.skills) && game.skills.length) {
      var skills = el("div", "card__skills");
      game.skills.forEach(function (s) { skills.appendChild(el("span", "chip", s)); });
      body.appendChild(skills);
    }
    card.appendChild(body);

    /* ---- footer / action ---- */
    var foot = el("div", "card__foot");
    foot.appendChild(buildAction(game, mobile));
    card.appendChild(foot);

    return card;
  }

  function buildAction(game, mobile) {
    var comingSoon = game.status === "coming-soon";
    var playable = !comingSoon && isPlayableUrl(game.url);

    if (!playable) {
      var disabled = el("span", "btn btn--disabled", comingSoon ? "Coming soon" : "Link coming soon");
      disabled.setAttribute("aria-disabled", "true");
      return disabled;
    }

    var link = el("a", "btn btn--play");
    link.href = game.url;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.appendChild(el("span", null, "Play"));
    link.appendChild(el("span", "btn__arrow", "▸"));
    link.setAttribute("aria-label", "Play " + (game.title || "game") + " (opens in a new tab)");

    // On phones, warn before opening a desktop-only game.
    if (game.desktopOnly && mobile) {
      link.addEventListener("click", function (e) {
        var ok = window.confirm(
          (game.title || "This game") +
          " is designed for a desktop or laptop and may not work well on a phone.\n\nOpen it anyway?"
        );
        if (!ok) e.preventDefault();
      });
    }
    return link;
  }

  function render() {
    if (!grid) return;
    var mobile = isSmallScreen();

    grid.textContent = "";
    var frag = document.createDocumentFragment();
    games.forEach(function (g) { frag.appendChild(buildCard(g, mobile)); });
    grid.appendChild(frag);

    // Show the top banner only on small screens when a game truly needs desktop.
    var anyDesktopOnly = games.some(function (g) { return g.desktopOnly; });
    if (banner) banner.hidden = !(mobile && anyDesktopOnly);
  }

  // Wire the banner's dismiss button once.
  if (banner) {
    var close = banner.querySelector(".mobile-banner__close");
    if (close) close.addEventListener("click", function () { banner.hidden = true; });
  }

  // Re-evaluate mobile state if the window is resized/rotated.
  var resizeTimer;
  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 150);
  });

  window.renderGames = render; // exposed for quick testing / re-render
  render();
})();
