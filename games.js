/* ============================================================================
 * RBC Quest — game catalog  (SINGLE SOURCE OF TRUTH)
 * ----------------------------------------------------------------------------
 * This is the ONLY file you need to edit to update the demo.
 *
 *   • Add a game's live link ....... set `url` to the playable URL
 *   • Mark a game "best on desktop"  set `desktopOnly: true`
 *                                    (shows a badge + warns phone visitors)
 *   • Change a card's look ......... edit `emoji` and `accent` (2 hex colors)
 *   • Reword a card ................ edit `blurb`, `skills`, `ageBand`
 *
 * The blurbs / tags below are friendly PLACEHOLDERS — please confirm or
 * replace them so they match each game before the RBC demo.
 * ==========================================================================*/

window.GAMES = [
  {
    id: "last-resort",
    title: "Last Resort",
    url: "",                      // TODO: paste the live game URL
    blurb: "Keep a wobbly island resort afloat — earn, spend, and invest your way back to five stars.",
    skills: ["Budgeting", "Decision-making"],
    ageBand: "Ages 10+",
    emoji: "🏝️",
    accent: ["#06b6d4", "#0e7490"],
    desktopOnly: false,           // set true if this plays best on desktop
    status: "live"                // "live" | "coming-soon"
  },
  {
    id: "squirrel-stash",
    title: "Squirrel Stash",
    url: "",                      // TODO: paste the live game URL
    blurb: "Help a thrifty squirrel save up for winter — a playful first taste of saving and setting goals.",
    skills: ["Saving", "Goal-setting"],
    ageBand: "Ages 6+",
    emoji: "🐿️",
    accent: ["#f59e0b", "#b45309"],
    desktopOnly: false,
    status: "live"
  },
  {
    id: "monkey-money",
    title: "Monkey Money",
    url: "",                      // TODO: paste the live game URL
    blurb: "Earn it, count it, spend it wisely — money basics with a cheeky monkey.",
    skills: ["Money basics", "Counting"],
    ageBand: "Ages 5+",
    emoji: "🐵",
    accent: ["#22c55e", "#15803d"],
    desktopOnly: false,
    status: "live"
  },
  {
    id: "greater-gator",
    title: "Greater Gator",
    url: "",                      // TODO: paste the live game URL
    blurb: "Feed the hungry gator the bigger number — sharpen comparison and number sense.",
    skills: ["Comparing", "Number sense"],
    ageBand: "Ages 5+",
    emoji: "🐊",
    accent: ["#84cc16", "#3f6212"],
    desktopOnly: false,
    status: "live"
  },
  {
    id: "adventure-101",
    title: "Adventure 101",
    url: "",                      // TODO: paste the live game URL
    blurb: "A choose-your-path money adventure — smart choices unlock the next chapter.",
    skills: ["Decision-making", "Money smarts"],
    ageBand: "Ages 8+",
    emoji: "🗺️",
    accent: ["#6366f1", "#4338ca"],
    desktopOnly: false,
    status: "live"
  }
];
