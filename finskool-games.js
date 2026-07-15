/* ============================================================================
 * DoughJo — catalog + config  (SINGLE SOURCE OF TRUTH for the /finskool mockup)
 * ----------------------------------------------------------------------------
 * A concept mockup of a full, RBC-owned financial-literacy GAME portal.
 * Self-contained: this file + finskool.js + finskool.html reuse styles.css but
 * never touch the live homepage (index.html / app.js / games.js).
 *
 *   • Rebrand the site ............. change FINSKOOL.brand (one place, swaps
 *                                    everywhere: tab title, topbar, hero, footer)
 *   • Add / reorder age bands ...... edit FINSKOOL.ages   (14–16 is the default focus)
 *   • Add / reorder topics ......... edit FINSKOOL.topics (browse-section order)
 *   • Add a game ................... push to FINSKOOL_GAMES with topic + ageKey
 *   • Make a game playable ......... set status:"live" and a real `url` (+ logo)
 *   • Feature a game (top rail) .... set featured:true
 * ==========================================================================*/

window.FINSKOOL = {
  brand: "DoughJo",                         // ← swap here to try another name
  tagline: "Train your money moves",
  // Ordered age bands. 14–16 is the default target audience (featured on top).
  ages: [
    { key: "8-10",  label: "Ages 8–10"  },
    { key: "11-13", label: "Ages 11–13" },
    { key: "14-16", label: "Ages 14–16" },
    { key: "17+",   label: "Ages 17+"   }
  ],
  // Ordered finlit topics → browse sections.
  topics: [
    { key: "foundations",      label: "Money Math" },
    { key: "saving",           label: "Saving" },
    { key: "budgeting",        label: "Budgeting" },
    { key: "banking",          label: "Banking" },
    { key: "earning",          label: "Earning & Careers" },
    { key: "entrepreneurship", label: "Entrepreneurship" },
    { key: "credit",           label: "Credit & Debt" },
    { key: "investing",        label: "Investing" },
    { key: "fraud",            label: "Fraud & Online Safety" },
    { key: "taxes",            label: "Taxes" },
    { key: "giving",           label: "Giving" }
  ]
};

/* ---------------------------------------------------------------------------
 * The catalog — 24 games. Five are REAL & playable (real `url` + `logo`, drawn
 * from the live demo); the rest are "coming-soon" concept placeholders that
 * render as emoji cards on accent-gradient banners.
 * ------------------------------------------------------------------------- */
window.FINSKOOL_GAMES = [

  /* ===== Ages 8–10 — first money habits ================================== */
  {
    id: "squirrel-stash", title: "Squirrel Stash",
    topic: "saving", ageKey: "8-10", ageBand: "Ages 8–10",
    blurb: "Help a thrifty squirrel stash acorns for winter — your first taste of saving up and setting a goal.",
    skills: ["Saving", "Goal-setting"], emoji: "🐿️", accent: ["#f59e0b", "#b45309"],
    status: "live", url: "https://acorntrail.replit.app", logo: "assets/squirrel-stash-logo.png"
  },
  {
    id: "monkey-money", title: "Monkey Money",
    topic: "banking", ageKey: "8-10", ageBand: "Ages 8–10",
    blurb: "Earn it, count it, spend it wisely — money basics with a cheeky monkey.",
    skills: ["Money basics", "Counting"], emoji: "🐵", accent: ["#22c55e", "#15803d"],
    status: "live", url: "https://amuze.me", logo: "assets/monkey-money-logo.png"
  },
  {
    id: "greater-gator", title: "Greater Gator",
    topic: "foundations", ageKey: "8-10", ageBand: "Ages 8–10",
    blurb: "Feed the gator the bigger number — build the comparison and number sense every money decision starts with.",
    skills: ["Comparing", "Number sense"], emoji: "🐊", accent: ["#84cc16", "#3f6212"],
    status: "live", url: "https://greatergator.replit.app", logo: "assets/greater-gator-logo.png"
  },
  {
    id: "piggy-bank-parade", title: "Piggy Bank Parade",
    topic: "saving", ageKey: "8-10", ageBand: "Ages 8–10",
    blurb: "Fill piggy banks and march them to their goals — a bright first lesson in saving and patience.",
    skills: ["Saving", "Patience"], emoji: "🐷", accent: ["#f472b6", "#be185d"],
    status: "coming-soon"
  },
  {
    id: "allowance-island", title: "Allowance Island",
    topic: "earning", ageKey: "8-10", ageBand: "Ages 8–10",
    blurb: "Do chores, earn coins, and build your own island — where a little work turns into real rewards.",
    skills: ["Earning", "Chores"], emoji: "🏝️", accent: ["#34d399", "#047857"],
    status: "coming-soon"
  },

  /* ===== Ages 11–13 — tweens ============================================= */
  {
    id: "adventure-101", title: "Adventure 101",
    topic: "foundations", ageKey: "11-13", ageBand: "Ages 11–13",
    blurb: "A number-quest adventure — solve money-math challenges to unlock each new chapter.",
    skills: ["Arithmetic", "Problem-solving"], emoji: "🗺️", accent: ["#6366f1", "#4338ca"],
    status: "live", url: "https://adv101.com", logo: "assets/adventure-101-logo.png"
  },
  {
    id: "budget-bites", title: "Budget Bites",
    topic: "budgeting", ageKey: "11-13", ageBand: "Ages 11–13",
    blurb: "Run a food truck: buy ingredients, set prices, and keep the budget balanced through the lunch rush.",
    skills: ["Budgeting", "Trade-offs"], emoji: "🚚", accent: ["#f97316", "#c2410c"],
    status: "coming-soon"
  },
  {
    id: "bank-quest-jr", title: "Bank Quest Jr.",
    topic: "banking", ageKey: "11-13", ageBand: "Ages 11–13",
    blurb: "Open your first account and learn how banks keep, move, and grow your money.",
    skills: ["Banking", "Accounts"], emoji: "🏦", accent: ["#0ea5e9", "#0369a1"],
    status: "coming-soon"
  },
  {
    id: "wish-list-wars", title: "Wish List Wars",
    topic: "budgeting", ageKey: "11-13", ageBand: "Ages 11–13",
    blurb: "Needs vs. wants showdown — rank what matters and make your money reach your real goals.",
    skills: ["Needs vs wants", "Prioritizing"], emoji: "🎁", accent: ["#a855f7", "#7e22ce"],
    status: "coming-soon"
  },
  {
    id: "lemonade-legends", title: "Lemonade Legends",
    topic: "entrepreneurship", ageKey: "11-13", ageBand: "Ages 11–13",
    blurb: "Build a lemonade empire — price it right, watch the weather, and turn a profit.",
    skills: ["Pricing", "Supply & demand"], emoji: "🍋", accent: ["#eab308", "#a16207"],
    status: "coming-soon"
  },
  {
    id: "scam-squad-cadets", title: "Scam Squad Cadets",
    topic: "fraud", ageKey: "11-13", ageBand: "Ages 11–13",
    blurb: "Join the Scam Squad and spot the fakes — phishing texts, dodgy links, and too-good-to-be-true deals.",
    skills: ["Online safety", "Scam-spotting"], emoji: "🕵️", accent: ["#ef4444", "#b91c1c"],
    status: "coming-soon"
  },

  /* ===== Ages 14–16 — FEATURED band (the default target audience) ======== */
  {
    id: "last-resort", title: "Last Resort",
    topic: "budgeting", ageKey: "14-16", ageBand: "Ages 14–16", featured: true,
    blurb: "Run the last resort standing in a zombie-overrun world — ration supplies, earn, and invest your way back to five stars.",
    skills: ["Budgeting", "Decision-making"], emoji: "🏝️", accent: ["#06b6d4", "#0e7490"],
    status: "live", url: "https://pyramid2.replit.app/last-resort/", logo: "assets/last-resort-logo.png"
  },
  {
    id: "credit-clash", title: "Credit Clash",
    topic: "credit", ageKey: "14-16", ageBand: "Ages 14–16", featured: true,
    blurb: "Battle your way to a healthy credit score — borrow smart, pay on time, and dodge the interest traps.",
    skills: ["Credit", "Interest"], emoji: "💳", accent: ["#8b5cf6", "#6d28d9"],
    status: "coming-soon"
  },
  {
    id: "ticker", title: "Ticker",
    topic: "investing", ageKey: "14-16", ageBand: "Ages 14–16", featured: true,
    blurb: "Build a portfolio and ride the market — learn why time in the market beats timing the market.",
    skills: ["Investing", "Risk"], emoji: "📈", accent: ["#10b981", "#065f46"],
    status: "coming-soon"
  },
  {
    id: "side-hustle", title: "Side Hustle",
    topic: "entrepreneurship", ageKey: "14-16", ageBand: "Ages 14–16", featured: true,
    blurb: "Turn a bright idea into a side hustle — manage cash flow, reinvest your earnings, and scale up.",
    skills: ["Entrepreneurship", "Cash flow"], emoji: "💡", accent: ["#f59e0b", "#b45309"],
    status: "coming-soon"
  },
  {
    id: "rent-run", title: "Rent Run",
    topic: "budgeting", ageKey: "14-16", ageBand: "Ages 14–16", featured: true,
    blurb: "Move out and survive the month — rent, bills, groceries, and the surprise expense that tests your budget.",
    skills: ["Budgeting", "Bills"], emoji: "🔑", accent: ["#3b82f6", "#1d4ed8"],
    status: "coming-soon"
  },
  {
    id: "firewall", title: "Firewall",
    topic: "fraud", ageKey: "14-16", ageBand: "Ages 14–16", featured: true,
    blurb: "Freeze the fraud before it drains the account — spot the red flags and lock down your money in real time.",
    skills: ["Fraud", "Security"], emoji: "🛡️", accent: ["#f43f5e", "#9f1239"],
    status: "coming-soon"
  },
  {
    id: "paycheck", title: "Paycheck",
    topic: "earning", ageKey: "14-16", ageBand: "Ages 14–16",
    blurb: "Decode your first paycheck — gross vs. net, taxes, and where every dollar actually goes.",
    skills: ["Wages", "Deductions"], emoji: "🧾", accent: ["#14b8a6", "#0f766e"],
    status: "coming-soon"
  },
  {
    id: "interest-heist", title: "Interest Heist",
    topic: "saving", ageKey: "14-16", ageBand: "Ages 14–16",
    blurb: "Crack the compound-interest vault — see how small, steady savings snowball into a fortune.",
    skills: ["Compound interest", "Saving"], emoji: "🔓", accent: ["#eab308", "#854d0e"],
    status: "coming-soon"
  },
  {
    id: "cart-smart", title: "Cart Smart",
    topic: "budgeting", ageKey: "14-16", ageBand: "Ages 14–16",
    blurb: "Beat the checkout: compare unit prices, dodge impulse buys, and stretch every dollar in the cart.",
    skills: ["Smart spending", "Comparison"], emoji: "🛒", accent: ["#06b6d4", "#0e7490"],
    status: "coming-soon"
  },

  /* ===== Ages 17+ — young adult ========================================== */
  {
    id: "tax-tactics", title: "Tax Tactics",
    topic: "taxes", ageKey: "17+", ageBand: "Ages 17+",
    blurb: "File your first return without the panic — brackets, deductions, and the refund you didn't know you'd earned.",
    skills: ["Taxes", "Filing"], emoji: "🧮", accent: ["#64748b", "#334155"],
    status: "coming-soon"
  },
  {
    id: "loan-ranger", title: "Loan Ranger",
    topic: "credit", ageKey: "17+", ageBand: "Ages 17+",
    blurb: "Saddle up and compare loans — student, car, and credit — and learn what APR really costs you.",
    skills: ["Loans", "APR"], emoji: "🐎", accent: ["#7c3aed", "#5b21b6"],
    status: "coming-soon"
  },
  {
    id: "nest-egg", title: "Nest Egg",
    topic: "investing", ageKey: "17+", ageBand: "Ages 17+",
    blurb: "Start your nest egg early — RRSPs, TFSAs, and the quiet power of compounding over decades.",
    skills: ["Retirement", "Compounding"], emoji: "🥚", accent: ["#0d9488", "#134e4a"],
    status: "coming-soon"
  },
  {
    id: "give-smart", title: "Give Smart",
    topic: "giving", ageKey: "17+", ageBand: "Ages 17+",
    blurb: "Budget for good — choose causes, plan your donations, and make your giving go further.",
    skills: ["Giving", "Budgeting"], emoji: "💛", accent: ["#f59e0b", "#b45309"],
    status: "coming-soon"
  }
];
