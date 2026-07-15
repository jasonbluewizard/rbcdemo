/* ============================================================================
 * RBC Quest — game catalog  (SINGLE SOURCE OF TRUTH)
 * ----------------------------------------------------------------------------
 * This is the ONLY file you need to edit to update the demo.
 *
 *   • Add a game's live link ....... set `url` to the playable URL
 *   • Swap a game's art ............ set `logo` to an image in assets/
 *                                    (falls back to `emoji` if omitted)
 *   • Mark a game "best on desktop"  set `desktopOnly: true`
 *                                    (shows a badge + warns phone visitors)
 *   • Group a game ................. set `category` to "fin-lit" or "math"
 *                                    ("Financial Literacy" vs "Early Math" sections)
 *   • Tint a card's tile ........... edit `accent` (2 hex colors)
 *   • Reword a card ................ edit `blurb`, `skills`, `ageBand`
 *
 * The blurbs / tags below are friendly PLACEHOLDERS — please confirm or
 * replace them so they match each game before the RBC demo.
 * ==========================================================================*/

window.GAMES = [
  {
    id: "last-resort",
    title: "Last Resort",
    url: "https://pyramid2.replit.app/last-resort/",
    category: "fin-lit",
    blurb: "Run the last resort standing in a post-apocalyptic, zombie-overrun world — ration supplies, earn, and invest your way back to five stars.",
    skills: ["Budgeting", "Decision-making"],
    ageBand: "Ages 10+",
    logo: "assets/last-resort-logo.png",
    emoji: "🏝️",
    accent: ["#06b6d4", "#0e7490"],
    desktopOnly: false,           // set true if this plays best on desktop
    status: "live"                // "live" | "coming-soon"
  },
  {
    id: "squirrel-stash",
    title: "Squirrel Stash",
    url: "https://acorntrail.replit.app",
    category: "fin-lit",
    blurb: "Help a thrifty squirrel save up for winter — a playful first taste of saving and setting goals.",
    skills: ["Saving", "Goal-setting"],
    ageBand: "Ages 6+",
    logo: "assets/squirrel-stash-logo.png",
    emoji: "🐿️",
    accent: ["#f59e0b", "#b45309"],
    desktopOnly: false,
    status: "live"
  },
  {
    id: "monkey-money",
    title: "Monkey Money",
    url: "https://amuze.me",
    category: "fin-lit",
    blurb: "Earn it, count it, spend it wisely — money basics with a cheeky monkey.",
    skills: ["Money basics", "Counting"],
    ageBand: "Ages 5+",
    logo: "assets/monkey-money-logo.png",
    emoji: "🐵",
    accent: ["#22c55e", "#15803d"],
    desktopOnly: false,
    status: "live"
  },
  {
    id: "greater-gator",
    title: "Greater Gator",
    url: "https://greatergator.replit.app",
    category: "math",
    blurb: "Feed the hungry gator the bigger number — sharpen comparison and number sense.",
    skills: ["Comparing", "Number sense"],
    ageBand: "Ages 5+",
    logo: "assets/greater-gator-logo.png",
    emoji: "🐊",
    accent: ["#84cc16", "#3f6212"],
    desktopOnly: false,
    status: "live"
  },
  {
    id: "adventure-101",
    title: "Adventure 101",
    url: "https://adv101.com",
    category: "math",
    blurb: "A number-quest adventure — solve math challenges to unlock each new chapter.",
    skills: ["Arithmetic", "Problem-solving"],
    ageBand: "Ages 6+",
    logo: "assets/adventure-101-logo.png",
    emoji: "🗺️",
    accent: ["#6366f1", "#4338ca"],
    desktopOnly: false,
    status: "live"
  }
];
