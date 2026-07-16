/* ============================================================================
 * DoughJo — renderer for the /finskool "arcade" mockup
 * ----------------------------------------------------------------------------
 * Reads window.FINSKOOL (brand + taxonomy) and window.FINSKOOL_GAMES, then:
 *   • injects the brand name into every [data-brand] slot (one source of truth)
 *   • renders the Featured rail as rich dark game cards
 *   • renders the browse catalog (reused .section/.grid/.card) with age/topic
 *     filter chips
 *   • wires the "Level up your skills" pills to the topic filter
 * No dependencies, no build step.
 * ==========================================================================*/
(function () {
  "use strict";

  var CFG = window.FINSKOOL || {};
  var GAMES = Array.isArray(window.FINSKOOL_GAMES) ? window.FINSKOOL_GAMES : [];

  var TOPIC = {};
  (CFG.topics || []).forEach(function (t) { TOPIC[t.key] = t.label; });
  function topicLabel(k) { return TOPIC[k] || k; }

  /* ---- Brand injection: the name lives in one place (CFG.brand) ---- */
  var BRAND = CFG.brand || "DoughJo";
  document.title = BRAND + " — Train your money moves";
  Array.prototype.forEach.call(document.querySelectorAll("[data-brand]"), function (n) {
    n.textContent = BRAND;
  });

  /* ---- helpers ---- */
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
  function accentOf(game) {
    return (Array.isArray(game.accent) && game.accent.length === 2) ? game.accent : ["#2C7BF6", "#1a3a86"];
  }

  /* ======================= Featured rail (dark game cards) ================= */
  function featuredCard(game) {
    var card = el("article", "dj-game");
    var a = accentOf(game);

    var art = el("div", "dj-game__art");
    art.style.background = "linear-gradient(150deg," + a[0] + " 0%," + a[1] + " 100%)";

    if (game.topic) art.appendChild(el("span", "dj-game__topic", topicLabel(game.topic)));

    if (game.logo) {
      var img = el("img", "dj-game__logo");
      img.src = game.logo; img.alt = ""; img.loading = "lazy";
      art.appendChild(img);
    } else {
      art.appendChild(el("div", "dj-game__name", game.title || "Untitled"));
      if (game.emoji) art.appendChild(el("span", "dj-game__emoji", game.emoji));
    }
    card.appendChild(art);

    var bar = el("div", "dj-game__bar");
    var meta = el("div", "dj-game__meta");
    meta.appendChild(el("span", null, "👥 " + (game.ageBand || "All ages")));
    meta.appendChild(el("span", null, "⏱ 5–10 min"));
    bar.appendChild(meta);
    bar.appendChild(featuredCta(game));
    card.appendChild(bar);

    return card;
  }

  function featuredCta(game) {
    var playable = game.status !== "coming-soon" && isPlayableUrl(game.url);
    if (!playable) {
      var soon = el("span", "dj-game__cta dj-game__cta--soon", "COMING SOON");
      soon.setAttribute("aria-disabled", "true");
      return soon;
    }
    var link = el("a", "dj-game__cta dj-game__cta--play", "PLAY NOW");
    link.href = game.url; link.target = "_blank"; link.rel = "noopener noreferrer";
    link.setAttribute("aria-label", "Play " + (game.title || "game") + " (opens in a new tab)");
    return link;
  }

  function renderFeatured() {
    var host = document.getElementById("dj-featured");
    if (!host) return;
    var featured = GAMES.filter(function (g) { return g.featured; });
    featured.forEach(function (g) { host.appendChild(featuredCard(g)); });
  }

  /* ======================= Browse catalog (reused .card) ================== */
  function buildCard(game, index) {
    var card = el("article", "card");
    card.setAttribute("role", "listitem");
    if (typeof index === "number") card.style.animationDelay = Math.min(index, 8) * 70 + "ms";

    var banner = el("div", "card__banner");
    if (game.logo) {
      var img = el("img", "card__logo");
      img.src = game.logo; img.alt = ""; img.loading = "lazy";
      banner.appendChild(img);
    } else {
      var a = accentOf(game);
      banner.classList.add("card__banner--accent");
      banner.style.background = "linear-gradient(135deg," + a[0] + " 0%," + a[1] + " 100%)";
      banner.appendChild(el("span", "card__emoji", game.emoji || "🎮"));
    }
    if (game.topic) banner.appendChild(badge(topicLabel(game.topic), "card__tag"));
    card.appendChild(banner);

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
    link.href = game.url; link.target = "_blank"; link.rel = "noopener noreferrer";
    link.appendChild(el("span", null, "Play"));
    link.appendChild(el("span", "btn__arrow", "▸"));
    link.setAttribute("aria-label", "Play " + (game.title || "game") + " (opens in a new tab)");
    return link;
  }

  function buildSection(group, list, startIndex) {
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
    list.forEach(function (game, i) { g.appendChild(buildCard(game, (startIndex || 0) + i)); });
    section.appendChild(g);
    return section;
  }

  /* ---- Filters ---- */
  var state = { age: "all", topic: "all" };
  function matches(g) {
    return (state.age === "all" || g.ageKey === state.age)
        && (state.topic === "all" || g.topic === state.topic);
  }

  function applyFilter(kind, value) {
    state[kind] = value;
    var host = document.getElementById("fs-filters");
    if (host) {
      Array.prototype.forEach.call(host.querySelectorAll('.chip[data-kind="' + kind + '"]'), function (c) {
        c.setAttribute("aria-pressed", String(c.dataset.value === value));
      });
    }
    renderBrowse();
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
      chip.addEventListener("click", function () { applyFilter(kind, opt.value); });
      row.appendChild(chip);
    });
    return row;
  }

  function renderFilters() {
    var host = document.getElementById("fs-filters");
    if (!host) return;
    host.appendChild(buildChipRow("Age", "age", CFG.ages));
    host.appendChild(buildChipRow("Topic", "topic", CFG.topics));
  }

  function renderBrowse() {
    var host = document.getElementById("fs-browse");
    if (!host) return;
    host.textContent = "";
    var frag = document.createDocumentFragment();
    var order = 0;
    (CFG.topics || []).forEach(function (t) {
      var list = GAMES.filter(function (g) { return g.topic === t.key && matches(g); });
      if (!list.length) return;
      frag.appendChild(buildSection({ title: t.label, blurb: "" }, list, order));
      order += list.length;
    });
    if (!frag.childNodes.length) {
      host.appendChild(el("p", "fs-empty", "No games match those filters yet — try a different age or topic."));
      return;
    }
    host.appendChild(frag);
  }

  /* ---- "Level up your skills" pills → topic filter + jump to catalog ---- */
  function wireSkillPills() {
    Array.prototype.forEach.call(document.querySelectorAll(".dj-skill[data-topic]"), function (btn) {
      btn.addEventListener("click", function () {
        applyFilter("topic", btn.dataset.topic);
        var games = document.getElementById("games");
        if (games) games.scrollIntoView({ behavior: "smooth" });
      });
    });
  }

  /* ---- init ---- */
  renderFeatured();
  renderFilters();
  renderBrowse();
  wireSkillPills();

  window.renderFinskool = renderBrowse; // exposed for quick testing / re-render
})();
