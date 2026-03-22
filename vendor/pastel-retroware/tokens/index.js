// src/index.ts
var tokenCatalog = {
  color: {
    bg: {
      canvas: "var(--pr-color-bg-canvas)",
      canvasAlt: "var(--pr-color-bg-canvas-alt)",
      panel: "var(--pr-color-bg-panel)",
      elevated: "var(--pr-color-bg-elevated)",
      terminal: "var(--pr-color-bg-terminal)",
      sidebar: "var(--pr-color-bg-sidebar)",
      selection: "var(--pr-color-bg-selection)"
    },
    border: {
      window: "var(--pr-color-border-window)",
      accent: "var(--pr-color-border-accent)",
      muted: "var(--pr-color-border-muted)",
      strong: "var(--pr-color-border-strong)"
    },
    text: {
      primary: "var(--pr-color-text-primary)",
      secondary: "var(--pr-color-text-secondary)",
      accent: "var(--pr-color-text-accent)",
      inverse: "var(--pr-color-text-inverse)"
    },
    accent: {
      cyan: "var(--pr-color-accent-cyan)",
      violet: "var(--pr-color-accent-violet)",
      blue: "var(--pr-color-accent-blue)",
      pink: "var(--pr-color-accent-pink)"
    },
    state: {
      success: "var(--pr-color-state-success)",
      warning: "var(--pr-color-state-warning)",
      danger: "var(--pr-color-state-danger)"
    }
  },
  shadow: {
    window: "var(--pr-shadow-window)",
    panel: "var(--pr-shadow-panel)",
    overlay: "var(--pr-shadow-overlay)"
  },
  glow: {
    cyanSoft: "var(--pr-glow-cyan-soft)",
    cyanStrong: "var(--pr-glow-cyan-strong)",
    violetSoft: "var(--pr-glow-violet-soft)",
    violetStrong: "var(--pr-glow-violet-strong)"
  },
  spacing: {
    xs: "var(--pr-space-xs)",
    sm: "var(--pr-space-sm)",
    md: "var(--pr-space-md)",
    lg: "var(--pr-space-lg)",
    xl: "var(--pr-space-xl)",
    "2xl": "var(--pr-space-2xl)"
  },
  radius: {
    sm: "var(--pr-radius-sm)",
    md: "var(--pr-radius-md)",
    lg: "var(--pr-radius-lg)",
    window: "var(--pr-radius-window)"
  },
  typography: {
    body: "var(--pr-font-body)",
    display: "var(--pr-font-display)",
    mono: "var(--pr-font-mono)",
    size: {
      xs: "var(--pr-font-size-xs)",
      sm: "var(--pr-font-size-sm)",
      md: "var(--pr-font-size-md)",
      lg: "var(--pr-font-size-lg)",
      xl: "var(--pr-font-size-xl)"
    }
  },
  icon: {
    sm: "var(--pr-icon-size-sm)",
    md: "var(--pr-icon-size-md)",
    lg: "var(--pr-icon-size-lg)"
  },
  motion: {
    fast: "var(--pr-motion-fast)",
    normal: "var(--pr-motion-normal)",
    slow: "var(--pr-motion-slow)"
  },
  zIndex: {
    base: "var(--pr-z-base)",
    dock: "var(--pr-z-dock)",
    overlay: "var(--pr-z-overlay)",
    tooltip: "var(--pr-z-tooltip)"
  },
  size: {
    titlebar: {
      height: "var(--pr-size-titlebar-height)"
    },
    taskbar: {
      height: "var(--pr-size-taskbar-height)"
    },
    windowControl: {
      size: "var(--pr-size-window-control)"
    }
  },
  grid: {
    cell: "var(--pr-grid-cell-size)",
    line: "var(--pr-grid-line-color)",
    glow: "var(--pr-grid-glow-color)"
  },
  focus: {
    ring: "var(--pr-focus-ring)",
    outline: "var(--pr-focus-outline)"
  }
};
var themeClassNames = {
  cyberRetro: "pr-theme-cyber-retro",
  softPastel: "pr-theme-soft-pastel"
};
var themes = [
  {
    name: "cyberRetro",
    label: "Cyber Retro",
    className: themeClassNames.cyberRetro,
    description: "Deep indigo shell with neon cyan and violet glow accents."
  },
  {
    name: "softPastel",
    label: "Soft Pastel",
    className: themeClassNames.softPastel,
    description: "Lighter lavender-infused retro shell with softer contrast."
  }
];
var defaultThemeName = "cyberRetro";
export {
  defaultThemeName,
  themeClassNames,
  themes,
  tokenCatalog
};
//# sourceMappingURL=index.js.map