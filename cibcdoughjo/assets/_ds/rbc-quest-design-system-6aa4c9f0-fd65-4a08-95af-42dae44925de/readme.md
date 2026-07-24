# RBC Quest — Design System

A brand-accurate design system for **RBC Quest**, a financial-literacy quest/game demo built on top of Royal Bank of Canada's identity. RBC's identity is *trustworthy, not cold* — blue-dominant, calm, uncluttered. For the quest demo we layer reward and warmth on top of that foundation: **blue carries trust and structure; yellow carries reward and progress.** The trick is staying clean enough to read as a real financial brand while making the yellow moments feel earned.

## Sources
- `uploads/RBC-Logo.png` — official RBC shield (lion + globe). Copied to `assets/logo.png`. **This is the real RBC mark — never redraw or approximate it; only ever use this file.**
- `uploads/Fira_Sans/` and `uploads/Fira_Sans,Source_Sans_3/` — the brand type (Fira Sans) + fallback (Source Sans 3), copied to `assets/fonts/`.
- `uploads/rbc_quest_style_tile.html` — the provided style tile that seeded the palette, type scale and component looks.
- Brief notes from the user on tone, audience, and the exact color/type token set.

No codebase or Figma file was provided; the component inventory here is authored from-scratch against the style tile and brief (see *Intentional additions*).

---

## Content fundamentals
How RBC Quest copy is written:
- **Voice:** warm, encouraging, plain-spoken. Second person ("you", "your goal"), present tense, active. Never lecturing or jargon-y — this is financial literacy made friendly.
- **Casing:** sentence case everywhere (titles, buttons, labels). Not Title Case. UI labels may be UPPERCASE only as a small tracked accent (e.g. specimen labels), not in product chrome.
- **Encouragement over pressure:** failure states stay gentle ("Try again", "Finish 2 more steps") — never scolding. Success is celebrated ("Quest complete!", "Correct!").
- **Numbers are the hero of game copy:** scores, coins, XP, currency and streaks are front-and-center, always in tabular figures so digits don't jitter as they tick up. Format with separators ("1,250 XP", "$500.00").
- **Emoji:** used sparingly and purposefully as game iconography — 🪙 coins, 🔥 streaks, ⭐ XP, 🎯 quests, 🎉 rewards, ✓/✅ completion, 🔒 locked. Not decorative filler. Keep to one per element.
- **Examples:** "Continue quest" · "Claim reward" · "Save $25 this week" · "Put aside a little each day toward your goal." · "250 XP to Level 5" · "7 day streak".

---

## Visual foundations
- **Color:** RBC's own rule — outside the logo, **blue is always dominant**, yellow + white support. `--rbc-blue #005DAA` is the hero (chrome, nav, primary buttons, headers). `--rbc-yellow #FFD200` is a **scarce accent** for reward/CTA/coins/XP — scarce yellow reads as *valuable*. White is the ground. Blue tints (`#73B0E3 / #C3E2FA / #E3F4FF`) fill panels, secondary surfaces and disabled states. Game accents: Sun `#FCA311` (streaks/warnings), Red `#F93F26` (fail — used lightly, tone stays encouraging), Green `#2E9E5B` (a cleaner "correct!" green added because RBC's own greens skew olive). Max 1–2 background colors per surface.
- **Type:** Fira Sans (Spiekermann's studio's free descendant of RBC's FF Meta) → Source Sans 3 → system-ui. Ships proper tabular figures. Scale: Display 48/800 · Title 32/700 · Section 24/700 · Subhead 20 · Body 16/400 (1.6 leading) · Labels 15/600 with slight tracking · Numbers 600 tabular.
- **Backgrounds:** flat and calm. App background is a barely-blue off-white (`--bg #F5F8FC`). Blue headers use solid fills, occasionally a subtle radial (reward screen only) `#005DAA → #003A75`. No photography, no busy patterns, no gradient mesh. The only "texture" is confetti dots on the celebration moment.
- **Corner radii:** rounded but not childish. `--radius 12px` default (buttons, cards), 8px small, 16–20px large panels, 999px pills (chips, coins, progress bars).
- **Cards:** white surface, 1px `--line` border, soft **blue-tinted** shadow (never harsh black) — `--shadow-md`. Complete quests swap the border to green. Brand cards invert to blue fill with white text.
- **Shadows:** soft and blue-tinted (`rgba(20,33,61,…)`). Two special glows: `--shadow-brand` (blue) on primary CTAs, `--shadow-reward` (yellow) on reward moments.
- **Buttons/CTAs:** filled, weight-700, 12px radius. Primary = blue with blue glow; reward = yellow with yellow glow (earned moments only); secondary = blue tint; ghost = text-only; danger = red (sparingly).
- **Motion:** calm standard easing (`cubic-bezier(.4,0,.2,1)`) for chrome; `--ease-out` for progress-bar fills; a light **bounce** (`--ease-bounce`) reserved for reward moments only. Durations 120/200/360ms.
- **Hover / press:** buttons scale to `0.97` on press (icon buttons `0.92`); inputs grow a blue focus ring (`0 0 0 3px var(--rbc-blue-200)`). Hover darkens toward `--rbc-blue-dark`.
- **Transparency/blur:** used lightly — translucent white panels (`rgba(255,255,255,.12–.18)`) inside blue headers for level/progress cards. No heavy glassmorphism.
- **Imagery vibe:** cool, clean, corporate-trustworthy with warm reward highlights. No grain, no b&w.

---

## Iconography
- **Brand mark:** the RBC shield (lion + globe) — `assets/logo.png`. The only real logo asset; never reconstruct it.
- **In-product icons:** this demo uses **emoji as game glyphs** (🪙 🔥 ⭐ 🎯 🎉 ✓ 🔒 💰 📊 👤 🏠) — deliberate, scarce, one per element. This suits the playful quest layer while keeping build-cost low for a demo.
- **No icon font or SVG sprite** was provided in the sources, so none is bundled. **Substitution flag:** if you need a production-grade line-icon set, add [Lucide](https://lucide.dev) via CDN (clean humanist strokes that pair well with Fira Sans) and document it — this has NOT been added, to avoid inventing inventory the brief didn't specify.
- Unicode arrows (←, ▶, ＋, ✓) are used for nav/controls.

---

## Intentional additions
No codebase/Figma defined a component inventory, so a standard game-UI set was authored from the style tile + brief:
- **Success green `--rbc-green #2E9E5B`** — added (not brand-official) because RBC's greens skew olive and read wrong for a "correct!" state. Flagged in the brief.
- **Fira Sans** stands in for RBC's licensed **FF Meta** (same designer's studio; closest free match). Flag to the user if exact brand type is required.
- Component set (Button, IconButton, Input, Checkbox, Badge, ProgressBar, Card, StatTile, QuestCard) is a sensible quest-game inventory, not a copy of an existing library.

---

## Index / manifest
Root:
- `styles.css` — single entry point (`@import`s everything below). Consumers link this.
- `thumbnail.html` — homepage tile. `SKILL.md` — Agent-Skills wrapper. `readme.md` — this file.

`tokens/` — `colors.css` · `typography.css` · `spacing.css` (spacing/radii/shadows/motion) · `fonts.css` (@font-face).

`assets/` — `logo.png` (RBC shield) · `fonts/` (Fira Sans 300–900 + Source Sans 3 variable).

`components/` (React primitives — namespace `RBCQuestDesignSystem_6aa4c9`):
- **forms/** — `Button`, `IconButton`, `Input`, `Checkbox`
- **feedback/** — `Badge`, `ProgressBar`
- **surfaces/** — `Card`, `StatTile`, `QuestCard`

`ui_kits/rbc_quest/` — full mobile app recreation: `LoginScreen`, `HomeScreen`, `QuestScreen`, `RewardScreen`, wired click-through in `index.html` (sign-in → dashboard → quest checklist → reward celebration).

`guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab.
