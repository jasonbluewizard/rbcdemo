/* ============================================================================
 * RBC Quest — renderer
 * Builds the labelled sections + game cards from window.GAMES, matching the
 * "RBC Quest — Home" design. No dependencies, no build step.
 * (Desktop guidance lives in the static hero note per the design; there is no
 *  per-card device warning here.)
 * ==========================================================================*/
(function () {
  "use strict";

  var grid = document.getElementById("game-grid");
  var games = Array.isArray(window.GAMES) ? window.GAMES : [];

  // Ordered catalog sections, grouped by each game's `category`.
  var GROUPS = [
    { key: "fin-lit", title: "Financial literacy", blurb: "Real money skills — saving, budgeting, and smart spending." },
    { key: "math",    title: "Early math",         blurb: "Number foundations — counting, comparison and problem-solving, geared to younger players." }
  ];

  function isPlayableUrl(url) {
    return typeof url === "string" && /^https?:\/\//i.test(url.trim());
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  function badge(text, extra) {
    return el("span", extra ? "badge " + extra : "badge", text);
  }

  function buildCard(game) {
    var card = el("article", "card");
    card.setAttribute("role", "listitem");

    /* ---- banner: light-blue tile with the game logo ---- */
    var banner = el("div", "card__banner");
    if (game.logo) {
      var img = el("img", "card__logo");
      img.src = game.logo;
      img.alt = "";              // decorative — the title is in the heading below
      img.loading = "lazy";
      banner.appendChild(img);
    } else {
      banner.appendChild(el("span", "card__emoji", game.emoji || "🎮"));
    }
    card.appendChild(banner);

    /* ---- body ---- */
    var body = el("div", "card__body");

    var titleRow = el("div", "card__titlerow");
    titleRow.appendChild(el("h3", "card__title", game.title || "Untitled"));
    if (game.ageBand) titleRow.appendChild(badge(game.ageBand, "card__age"));
    body.appendChild(titleRow);

    if (game.blurb) body.appendChild(el("p", "card__blurb", game.blurb));

    if (Array.isArray(game.skills) && game.skills.length) {
      var skills = el("div", "card__skills");
      game.skills.forEach(function (s) { skills.appendChild(badge(s)); });
      body.appendChild(skills);
    }
    card.appendChild(body);

    /* ---- action ---- */
    var foot = el("div", "card__foot");
    foot.appendChild(buildAction(game));
    card.appendChild(foot);

    return card;
  }

  function buildAction(game) {
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
    return link;
  }

  function buildSection(group, list) {
    var section = el("section", "section");

    var head = el("div", "section__head");
    var titleRow = el("div", "section__titlerow");
    titleRow.appendChild(el("span", "section__bar"));
    titleRow.appendChild(el("h3", "section__title", group.title));
    head.appendChild(titleRow);
    if (group.blurb) head.appendChild(el("p", "section__blurb", group.blurb));
    section.appendChild(head);

    var g = el("div", "grid");
    g.setAttribute("role", "list");
    list.forEach(function (game) { g.appendChild(buildCard(game)); });
    section.appendChild(g);

    return section;
  }

  function render() {
    if (!grid) return;
    grid.textContent = "";
    var frag = document.createDocumentFragment();
    var placed = {};

    GROUPS.forEach(function (group) {
      var inGroup = games.filter(function (g) { return g.category === group.key; });
      if (!inGroup.length) return;
      inGroup.forEach(function (g) { placed[g.id] = true; });
      frag.appendChild(buildSection(group, inGroup));
    });

    // Any game without a matching category still shows, ungrouped, at the end.
    var leftovers = games.filter(function (g) { return !placed[g.id]; });
    if (leftovers.length) {
      frag.appendChild(buildSection({ title: "More games", blurb: "" }, leftovers));
    }

    grid.appendChild(frag);
  }

  window.renderGames = render; // exposed for quick testing / re-render
  render();
})();
