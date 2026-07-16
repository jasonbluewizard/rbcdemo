/* @ds-bundle: {"format":4,"namespace":"RBCQuestDesignSystem_6aa4c9","components":[{"name":"Badge","sourcePath":"components/feedback/Badge.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"QuestCard","sourcePath":"components/surfaces/QuestCard.jsx"},{"name":"StatTile","sourcePath":"components/surfaces/StatTile.jsx"}],"sourceHashes":{"components/feedback/Badge.jsx":"f185c5e13c84","components/feedback/ProgressBar.jsx":"1444915932b7","components/forms/Button.jsx":"e721c2065f24","components/forms/Checkbox.jsx":"17875536a73b","components/forms/IconButton.jsx":"8aa09a42c88e","components/forms/Input.jsx":"8d19f267384a","components/surfaces/Card.jsx":"a7a6d354663c","components/surfaces/QuestCard.jsx":"1897b6efaaa3","components/surfaces/StatTile.jsx":"c553756116fe","ui_kits/rbc_quest/HomeScreen.jsx":"6c8291d1e42a","ui_kits/rbc_quest/LoginScreen.jsx":"97f8ab62841d","ui_kits/rbc_quest/QuestScreen.jsx":"5157f285e03b","ui_kits/rbc_quest/RewardScreen.jsx":"83eca66d52ec"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RBCQuestDesignSystem_6aa4c9 = window.RBCQuestDesignSystem_6aa4c9 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/feedback/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  reward: {
    background: "var(--rbc-yellow)",
    color: "var(--ink)"
  },
  coin: {
    background: "var(--rbc-yellow)",
    color: "var(--ink)"
  },
  blue: {
    background: "var(--rbc-blue)",
    color: "#fff"
  },
  tint: {
    background: "var(--rbc-blue-100)",
    color: "var(--rbc-blue-dark)"
  },
  success: {
    background: "var(--rbc-green)",
    color: "#fff"
  },
  streak: {
    background: "var(--rbc-sun)",
    color: "#fff"
  },
  danger: {
    background: "var(--rbc-red)",
    color: "#fff"
  },
  neutral: {
    background: "var(--bg)",
    color: "var(--ink-muted)"
  }
};

/** Pill badge for coins, XP, streaks and status. Tabular figures when `numeric`. */
function Badge({
  tone = "tint",
  numeric = false,
  icon,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.tint;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      fontSize: "13px",
      padding: "5px 12px",
      borderRadius: "999px",
      lineHeight: 1.2,
      whiteSpace: "nowrap",
      fontVariantNumeric: numeric ? "tabular-nums" : "normal",
      ...t,
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "13px",
      lineHeight: 1
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
/** Quest/XP progress bar. Rounded pill track; blue fill by default, reward-yellow optional. */
function ProgressBar({
  value = 0,
  max = 100,
  tone = "blue",
  height = 12,
  showLabel = false,
  label,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  const fill = {
    blue: "var(--rbc-blue)",
    reward: "var(--rbc-yellow)",
    success: "var(--rbc-green)",
    sun: "var(--rbc-sun)"
  }[tone] || "var(--rbc-blue)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-brand)",
      width: "100%",
      ...style
    }
  }, showLabel && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "12px",
      color: "var(--text-muted)",
      marginBottom: "6px",
      fontWeight: 600
    }
  }, /*#__PURE__*/React.createElement("span", null, label || "Progress"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontVariantNumeric: "tabular-nums",
      color: "var(--text-primary)"
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: "var(--rbc-blue-100)",
      borderRadius: "999px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: "100%",
      background: fill,
      borderRadius: "999px",
      transition: "width var(--dur-slow) var(--ease-out)"
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  primary: {
    background: "var(--rbc-blue)",
    color: "var(--rbc-white)",
    border: "none",
    boxShadow: "var(--shadow-brand)"
  },
  reward: {
    background: "var(--rbc-yellow)",
    color: "var(--ink)",
    border: "none",
    boxShadow: "var(--shadow-reward)"
  },
  secondary: {
    background: "var(--rbc-blue-100)",
    color: "var(--rbc-blue-dark)",
    border: "1px solid var(--rbc-blue-200)",
    boxShadow: "none"
  },
  ghost: {
    background: "transparent",
    color: "var(--rbc-blue)",
    border: "1px solid transparent",
    boxShadow: "none"
  },
  danger: {
    background: "var(--rbc-red)",
    color: "var(--rbc-white)",
    border: "none",
    boxShadow: "none"
  }
};
const SIZES = {
  sm: {
    padding: "7px 14px",
    fontSize: "14px",
    borderRadius: "8px"
  },
  md: {
    padding: "11px 20px",
    fontSize: "15px",
    borderRadius: "10px"
  },
  lg: {
    padding: "14px 26px",
    fontSize: "17px",
    borderRadius: "12px"
  }
};

/** Primary call-to-action button. Blue is the default; reward (yellow) is reserved for earned moments. */
function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft,
  iconRight,
  children,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontFamily: "var(--font-brand)",
      fontWeight: 700,
      letterSpacing: "0.01em",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      width: fullWidth ? "100%" : "auto",
      lineHeight: 1,
      transition: "transform var(--dur-fast) var(--ease-standard), filter var(--dur-fast) var(--ease-standard)",
      ...v,
      ...s,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
/** Checkbox with label — used for quest task lists and settings. Blue when checked. */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  id,
  style
}) {
  const cid = id || `cb-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cid,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      fontFamily: "var(--font-brand)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 22,
      height: 22,
      borderRadius: "7px",
      flexShrink: 0,
      border: `2px solid ${checked ? "var(--rbc-blue)" : "var(--border-strong)"}`,
      background: checked ? "var(--rbc-blue)" : "var(--rbc-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: 14,
      fontWeight: 900,
      lineHeight: 1,
      transition: "all var(--dur-fast) var(--ease-standard)"
    }
  }, checked ? "✓" : ""), /*#__PURE__*/React.createElement("input", {
    id: cid,
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "15px",
      color: "var(--text-primary)",
      textDecoration: checked ? "line-through" : "none",
      textDecorationColor: "var(--rbc-blue-300)"
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Compact icon-only button. Circular; matches Button variants for chrome consistency. */
function IconButton({
  variant = "secondary",
  size = "md",
  disabled = false,
  label,
  children,
  style,
  ...rest
}) {
  const dim = size === "sm" ? 34 : size === "lg" ? 52 : 42;
  const V = {
    primary: {
      background: "var(--rbc-blue)",
      color: "#fff",
      border: "none"
    },
    reward: {
      background: "var(--rbc-yellow)",
      color: "var(--ink)",
      border: "none"
    },
    secondary: {
      background: "var(--rbc-blue-100)",
      color: "var(--rbc-blue-dark)",
      border: "1px solid var(--rbc-blue-200)"
    },
    ghost: {
      background: "transparent",
      color: "var(--rbc-blue)",
      border: "1px solid transparent"
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: {
      width: dim,
      height: dim,
      borderRadius: "999px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontFamily: "var(--font-brand)",
      fontSize: size === "lg" ? 22 : 18,
      transition: "transform var(--dur-fast) var(--ease-standard)",
      ...V,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.92)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with label and helper/error text. RBC blue focus ring. */
function Input({
  label,
  helper,
  error,
  id,
  style,
  ...rest
}) {
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-brand)",
      width: "100%"
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "13px",
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: {
      fontFamily: "var(--font-brand)",
      fontSize: "15px",
      color: "var(--ink)",
      padding: "11px 14px",
      borderRadius: "10px",
      border: `1.5px solid ${error ? "var(--rbc-red)" : "var(--line)"}`,
      background: "var(--rbc-white)",
      outline: "none",
      width: "100%",
      boxSizing: "border-box",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)",
      ...style
    },
    onFocus: e => {
      if (!error) {
        e.target.style.borderColor = "var(--rbc-blue)";
        e.target.style.boxShadow = "0 0 0 3px var(--rbc-blue-200)";
      }
    },
    onBlur: e => {
      e.target.style.borderColor = error ? "var(--rbc-red)" : "var(--line)";
      e.target.style.boxShadow = "none";
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "12px",
      color: error ? "var(--rbc-red)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Base surface container. White by default; `brand` for blue hero panels, `tint` for secondary. */
function Card({
  variant = "default",
  elevation = "md",
  padding = 20,
  children,
  style,
  ...rest
}) {
  const V = {
    default: {
      background: "var(--surface-card)",
      color: "var(--ink)",
      border: "1px solid var(--line)"
    },
    tint: {
      background: "var(--rbc-blue-100)",
      color: "var(--ink)",
      border: "1px solid var(--rbc-blue-200)"
    },
    brand: {
      background: "var(--rbc-blue)",
      color: "#fff",
      border: "none"
    },
    dark: {
      background: "var(--rbc-blue-dark)",
      color: "#fff",
      border: "none"
    }
  }[variant] || {};
  const shadow = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  }[elevation];
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: "var(--radius-lg)",
      padding,
      fontFamily: "var(--font-brand)",
      boxShadow: shadow,
      ...V,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/QuestCard.jsx
try { (() => {
/** Quest card — the core RBC Quest unit. Title, description, progress, reward, and CTA. */
function QuestCard({
  title,
  description,
  value = 0,
  max = 100,
  reward,
  status = "active",
  cta = "Continue",
  onAction,
  icon,
  style
}) {
  const locked = status === "locked";
  const done = status === "complete";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      padding: 20,
      fontFamily: "var(--font-brand)",
      background: "var(--surface-card)",
      border: `1px solid ${done ? "var(--rbc-green)" : "var(--line)"}`,
      boxShadow: "var(--shadow-md)",
      opacity: locked ? 0.6 : 1,
      display: "flex",
      flexDirection: "column",
      gap: 14,
      minWidth: 260,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: "12px",
      background: done ? "var(--rbc-green)" : "var(--rbc-blue-100)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      flexShrink: 0
    }
  }, done ? "✓" : icon || "🎯"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, title), reward != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "coin",
    icon: "\uD83E\uDE99",
    numeric: true
  }, "+", reward)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "4px 0 0",
      fontSize: 14,
      color: "var(--text-muted)",
      lineHeight: 1.5
    }
  }, description))), !locked && !done && /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: value,
    max: max,
    showLabel: true,
    label: "Progress"
  }), /*#__PURE__*/React.createElement("div", null, locked ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    disabled: true,
    fullWidth: true
  }, "\uD83D\uDD12 Locked") : done ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "reward",
    size: "sm",
    fullWidth: true,
    onClick: onAction
  }, "Claim reward") : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    fullWidth: true,
    onClick: onAction
  }, cta)));
}
Object.assign(__ds_scope, { QuestCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/QuestCard.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/StatTile.jsx
try { (() => {
/** Compact metric tile — big tabular number over a label. For dashboards (saved, XP, streak). */
function StatTile({
  value,
  label,
  tone = "default",
  icon,
  style
}) {
  const V = {
    default: {
      background: "var(--surface-card)",
      color: "var(--ink)",
      border: "1px solid var(--line)",
      accent: "var(--rbc-blue)"
    },
    brand: {
      background: "var(--rbc-blue)",
      color: "#fff",
      border: "none",
      accent: "var(--rbc-yellow)"
    },
    reward: {
      background: "var(--rbc-blue-100)",
      color: "var(--ink)",
      border: "1px solid var(--rbc-blue-200)",
      accent: "var(--rbc-sun)"
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: "var(--radius-lg)",
      padding: "16px 18px",
      fontFamily: "var(--font-brand)",
      boxShadow: "var(--shadow-sm)",
      minWidth: 120,
      background: V.background,
      color: V.color,
      border: V.border,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      fontWeight: 800,
      lineHeight: 1,
      fontVariantNumeric: "tabular-nums",
      color: V.accent
    }
  }, value)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginTop: 8,
      opacity: tone === "brand" ? 0.85 : 1,
      color: tone === "brand" ? "#fff" : "var(--text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { StatTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/StatTile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rbc_quest/HomeScreen.jsx
try { (() => {
const {
  StatTile,
  QuestCard,
  ProgressBar,
  Badge
} = window.RBCQuestDesignSystem_6aa4c9;

/** RBC Quest home dashboard — greeting, level progress, stats, active quests. */
function HomeScreen({
  onOpenQuest,
  coins = 1250,
  streak = 7
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--bg)",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rbc-blue)",
      color: "#fff",
      padding: "22px 20px 26px",
      borderRadius: "0 0 22px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--rbc-blue-200)",
      fontWeight: 500
    }
  }, "Good morning,"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800
    }
  }, "Jordan")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "reward",
    icon: "\uD83E\uDE99",
    numeric: true
  }, coins.toLocaleString()), /*#__PURE__*/React.createElement(Badge, {
    tone: "streak",
    icon: "\uD83D\uDD25"
  }, streak))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "rgba(255,255,255,.12)",
      borderRadius: 16,
      padding: "14px 16px",
      border: "1px solid rgba(255,255,255,.18)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Level 4 \xB7 Saver"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--rbc-blue-200)",
      fontVariantNumeric: "tabular-nums"
    }
  }, "250 XP to Level 5")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 75,
    tone: "reward",
    height: 10
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      padding: "18px 20px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "$500",
    label: "Saved",
    icon: "\uD83D\uDCB0",
    style: {
      minWidth: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(StatTile, {
    value: "12",
    label: "Quests done",
    tone: "reward",
    icon: "\u2705",
    style: {
      minWidth: 0
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "12px 20px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 18,
      fontWeight: 700,
      color: "var(--ink)"
    }
  }, "This week's quests"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      color: "var(--rbc-blue)"
    }
  }, "See all")), /*#__PURE__*/React.createElement(QuestCard, {
    title: "Save $25 this week",
    description: "Put aside a little each day toward your goal.",
    value: 65,
    reward: 50,
    cta: "Continue",
    onAction: onOpenQuest,
    style: {
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(QuestCard, {
    title: "Track 5 purchases",
    description: "Log what you spend to spot patterns.",
    value: 40,
    reward: 30,
    cta: "Continue",
    onAction: onOpenQuest,
    style: {
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement(QuestCard, {
    title: "Budget master",
    description: "Reach Level 5 to unlock this challenge.",
    status: "locked",
    style: {
      minWidth: 0
    }
  })));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rbc_quest/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rbc_quest/LoginScreen.jsx
try { (() => {
const {
  Button,
  Input
} = window.RBCQuestDesignSystem_6aa4c9;

/** RBC Quest welcome / sign-in screen. */
function LoginScreen({
  onSignIn
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "var(--rbc-blue)",
      color: "#fff",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 28px",
      textAlign: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo.png",
    alt: "RBC",
    style: {
      height: 88,
      marginBottom: 8
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 34,
      fontWeight: 800,
      lineHeight: 1.1
    }
  }, "RBC Quest"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      lineHeight: 1.5,
      color: "var(--rbc-blue-200)",
      maxWidth: 260,
      margin: "4px 0 0"
    }
  }, "Build money habits that stick \u2014 one small quest at a time.")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      borderRadius: "24px 24px 0 0",
      padding: "26px 24px 30px",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Client card",
    placeholder: "4519 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    onClick: onSignIn
  }, "Sign in"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      fontSize: 14,
      color: "var(--text-muted)"
    }
  }, "New to RBC? ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--rbc-blue)",
      fontWeight: 700
    }
  }, "Create an account"))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rbc_quest/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rbc_quest/QuestScreen.jsx
try { (() => {
const {
  Checkbox,
  ProgressBar,
  Button,
  Badge,
  IconButton,
  Card
} = window.RBCQuestDesignSystem_6aa4c9;

/** Quest detail — task checklist that drives progress toward the reward. */
function QuestScreen({
  onBack,
  onComplete
}) {
  const [tasks, setTasks] = React.useState([{
    label: "Set your weekly savings goal",
    done: true
  }, {
    label: "Move $10 to your goal",
    done: true
  }, {
    label: "Move another $10",
    done: false
  }, {
    label: "Turn on auto-save",
    done: false
  }]);
  const done = tasks.filter(t => t.done).length;
  const pct = done / tasks.length * 100;
  const allDone = done === tasks.length;
  const toggle = i => setTasks(ts => ts.map((t, j) => j === i ? {
    ...t,
    done: !t.done
  } : t));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      overflowY: "auto",
      background: "var(--bg)",
      fontFamily: "var(--font-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--rbc-blue)",
      color: "#fff",
      padding: "16px 18px 24px",
      borderRadius: "0 0 22px 22px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10,
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Back",
    variant: "ghost",
    onClick: onBack,
    style: {
      background: "rgba(255,255,255,.14)",
      color: "#fff"
    }
  }, "\u2190"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, "Quest"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: "auto"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "reward",
    icon: "\uD83E\uDE99",
    numeric: true
  }, "+50"))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      lineHeight: 1.15
    }
  }, "Save $25 this week"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      color: "var(--rbc-blue-200)",
      margin: "6px 0 16px",
      lineHeight: 1.5
    }
  }, "Complete every step to claim your coins and keep your streak alive."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      marginBottom: 8,
      fontVariantNumeric: "tabular-nums"
    }
  }, /*#__PURE__*/React.createElement("span", null, done, " of ", tasks.length, " steps"), /*#__PURE__*/React.createElement("span", null, Math.round(pct), "%")), /*#__PURE__*/React.createElement(ProgressBar, {
    value: pct,
    tone: "reward",
    height: 10
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "18px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 8,
    elevation: "sm"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, tasks.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      padding: "12px 12px",
      borderBottom: i < tasks.length - 1 ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: t.label,
    checked: t.done,
    onChange: () => toggle(i)
  }))))), /*#__PURE__*/React.createElement(Button, {
    variant: allDone ? "reward" : "primary",
    size: "lg",
    fullWidth: true,
    disabled: !allDone,
    onClick: onComplete
  }, allDone ? "Claim +50 coins 🪙" : `Finish ${tasks.length - done} more step${tasks.length - done > 1 ? "s" : ""}`)));
}
window.QuestScreen = QuestScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rbc_quest/QuestScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/rbc_quest/RewardScreen.jsx
try { (() => {
const {
  Button,
  Badge
} = window.RBCQuestDesignSystem_6aa4c9;

/** Reward celebration screen — the earned yellow moment after a quest. */
function RewardScreen({
  onDone,
  coins = 50,
  xp = 120
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "0 28px",
      fontFamily: "var(--font-brand)",
      background: "radial-gradient(120% 80% at 50% 0%, var(--rbc-blue) 0%, var(--rbc-blue-dark) 100%)",
      color: "#fff",
      position: "relative",
      overflow: "hidden"
    }
  }, [...Array(14)].map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: "absolute",
      width: 10,
      height: 10,
      borderRadius: i % 2 ? "50%" : "2px",
      background: ["var(--rbc-yellow)", "#fff", "var(--rbc-sun)", "var(--rbc-blue-200)"][i % 4],
      top: `${i * 37 % 90}%`,
      left: `${i * 53 % 92}%`,
      opacity: 0.9,
      transform: `rotate(${i * 40}deg)`
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: "50%",
      background: "var(--rbc-yellow)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 60,
      boxShadow: "var(--shadow-reward)",
      marginBottom: 24,
      zIndex: 1
    }
  }, "\uD83C\uDF89"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 800,
      zIndex: 1
    }
  }, "Quest complete!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--rbc-blue-200)",
      margin: "8px 0 22px",
      zIndex: 1
    }
  }, "You saved $25 this week. Your streak is now 8 days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      marginBottom: 30,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "reward",
    icon: "\uD83E\uDE99",
    numeric: true,
    style: {
      fontSize: 16,
      padding: "10px 18px"
    }
  }, "+", coins, " coins"), /*#__PURE__*/React.createElement(Badge, {
    tone: "streak",
    icon: "\u2B50",
    numeric: true,
    style: {
      fontSize: 16,
      padding: "10px 18px"
    }
  }, "+", xp, " XP")), /*#__PURE__*/React.createElement(Button, {
    variant: "reward",
    size: "lg",
    onClick: onDone,
    style: {
      zIndex: 1
    }
  }, "Back to quests"));
}
window.RewardScreen = RewardScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/rbc_quest/RewardScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.QuestCard = __ds_scope.QuestCard;

__ds_ns.StatTile = __ds_scope.StatTile;

})();
