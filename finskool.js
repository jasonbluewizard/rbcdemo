/* ============================================================================
 * DoughJo — renderer for the /finskool mockup
 * ----------------------------------------------------------------------------
 * Self-contained (no shared code with the homepage's app.js). Reads
 * window.FINSKOOL (brand + taxonomy) and window.FINSKOOL_GAMES, then builds:
 *   • a brand-injected topbar / hero / footer   (name lives in ONE place)
 *   • a Featured rail (ages 14–16), never filtered
 *   • Age + Topic filter chips (vanilla, no deps)
 *   • a browse catalog grouped into topic sections
 * Reuses the existing .section / .grid / .card / .badge / .btn CSS verbatim,
 * plus a small scoped `.finskool …` block in styles.css.
 * ==========================================================================*/
(function () {
  "use strict";

  var CFG = window.FINSKOOL || {};
  var GAMES = Array.isArray(window.FINSKOOL_GAMES) ? window.FINSKOOL_GAMES : [];

  var TOPIC = {};
  (CFG.topics || []).forEach(function (t) { TOPIC[t.key] = t.label; });
  function topicLabel(k) { return TOPIC[k] || k; }

  /* ---- Brand injection: the name lives in exactly one place (CFG.brand) ---- */
  var BRAND = CFG.brand || "DoughJo";
  function setText(sel, text) {
    var n = document.querySelector(sel);
    if (n && text != null) n.textContent = text;
  }
  document.title = BRAND + " — Money games for every age";
  setText(".topbar__wordmark", BRAND);
  setText(".hero__title", BRAND);
  setText(".site-footer__mark", BRAND);
  if (CFG.tagline) setText(".hero__tagline", CFG.tagline);

  /* ---- helpers (mirrors app.js) ---- */
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

  function buildCard(game, index) {
    var card = el("article", "card");
    card.setAttribute("role", "listitem");
    if (typeof index === "number") card.style.animationDelay = Math.min(index, 8) * 70 + "ms";

    /* ---- banner: real games keep the light logo tile; concepts get a bold
       accent gradient so ~19 emoji cards stay visually distinct ---- */
    var banner = el("div", "card__banner");
    if (game.logo) {
      var img = el("img", "card__logo");
      img.src = game.logo;
      img.alt = "";               // decorative — title is in the heading below
      img.loading = "lazy";
      banner.appendChild(img);
    } else {
      var a = (Array.isArray(game.accent) && game.accent.length === 2)
        ? game.accent : ["#005DAA", "#003A75"];
      banner.classList.add("card__banner--accent");
      banner.style.background = "linear-gradient(135deg," + a[0] + " 0%," + a[1] + " 100%)";
      banner.appendChild(el("span", "card__emoji", game.emoji || "🎮"));
    }
    if (game.topic) banner.appendChild(badge(topicLabel(game.topic), "card__tag"));
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

  function buildSection(group, list, startIndex, extraClass) {
    var section = el("section", extraClass ? "section " + extraClass : "section");

    var head = el("div", "section__head");
    var titleRow = el("div", "section__titlerow");
    titleRow.appendChild(el("span", "section__bar"));
    titleRow.appendChild(el("h3", "section__title", group.title));
    head.appendChild(titleRow);
    if (group.blurb) head.appendChild(el("p", "section__blurb", group.blurb));
    section.appendChild(head);

    var g = el("div", "grid");
    g.setAttribute("role", "list");
    list.forEach(function (game, i) { g.appendChild(buildCard(game, (startIndex || 0) + i)); });
    section.appendChild(g);

    return section;
  }

  /* ---- Featured rail — rendered once, never touched by the filters ---- */
  function renderFeatured() {
    var host = document.getElementById("fs-featured");
    if (!host) return;
    var featured = GAMES.filter(function (g) { return g.featured; });
    if (!featured.length) return;
    host.appendChild(buildSection(
      { title: "Featured — Ages 14–16", blurb: "Hand-picked for the 14–16 crowd — jump in and play." },
      featured, 0, "section--featured"
    ));
  }

  /* ---- Filters ---- */
  var state = { age: "all", topic: "all" };
  function matches(g) {
    return (state.age === "all" || g.ageKey === state.age)
        && (state.topic === "all" || g.topic === state.topic);
  }

  function buildChipRow(labelText, kind, items) {
    var row = el("div", "filters");
    row.appendChild(el("span", "filters__label", labelText));
    var opts = [{ value: "all", label: "All" }].concat((items || []).map(function (it) {
      return { value: it.key, label: it.label };
    }));
    opts.forEach(function (opt) {
      var chip = el("button", "chip", opt.label);
      chip.type = "button";
      chip.dataset.kind = kind;
      chip.dataset.value = opt.value;
      chip.setAttribute("aria-pressed", String(state[kind] === opt.value));
      chip.addEventListener("click", function () { onChip(kind, opt.value, row); });
      row.appendChild(chip);
    });
    return row;
  }

  function onChip(kind, value, row) {
    state[kind] = value;
    row.querySelectorAll(".chip").forEach(function (c) {
      c.setAttribute("aria-pressed", String(c.dataset.value === value));
    });
    renderBrowse();
  }

  function renderFilters() {
    var host = document.getElementById("fs-filters");
    if (!host) return;
    host.appendChild(buildChipRow("Age", "age", CFG.ages));
    host.appendChild(buildChipRow("Topic", "topic", CFG.topics));
  }

  /* ---- Browse catalog — grouped by topic, re-rendered on filter change ---- */
  function renderBrowse() {
    var host = document.getElementById("fs-browse");
    if (!host) return;
    host.textContent = "";
    var frag = document.createDocumentFragment();
    var order = 0;

    (CFG.topics || []).forEach(function (t) {
      var list = GAMES.filter(function (g) { return g.topic === t.key && matches(g); });
      if (!list.length) return;                       // skip empty topic sections
      frag.appendChild(buildSection({ title: t.label, blurb: "" }, list, order));
      order += list.length;
    });

    if (!frag.childNodes.length) {
      host.appendChild(el("p", "fs-empty", "No games match those filters yet — try a different age or topic."));
      return;
    }
    host.appendChild(frag);
  }

  /* ---- init ---- */
  renderFeatured();
  renderFilters();
  renderBrowse();

  window.renderFinskool = renderBrowse; // exposed for quick testing / re-render
})();
