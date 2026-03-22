declare const tokenCatalog: {
    readonly color: {
        readonly bg: {
            readonly canvas: "var(--pr-color-bg-canvas)";
            readonly canvasAlt: "var(--pr-color-bg-canvas-alt)";
            readonly panel: "var(--pr-color-bg-panel)";
            readonly elevated: "var(--pr-color-bg-elevated)";
            readonly terminal: "var(--pr-color-bg-terminal)";
            readonly sidebar: "var(--pr-color-bg-sidebar)";
            readonly selection: "var(--pr-color-bg-selection)";
        };
        readonly border: {
            readonly window: "var(--pr-color-border-window)";
            readonly accent: "var(--pr-color-border-accent)";
            readonly muted: "var(--pr-color-border-muted)";
            readonly strong: "var(--pr-color-border-strong)";
        };
        readonly text: {
            readonly primary: "var(--pr-color-text-primary)";
            readonly secondary: "var(--pr-color-text-secondary)";
            readonly accent: "var(--pr-color-text-accent)";
            readonly inverse: "var(--pr-color-text-inverse)";
        };
        readonly accent: {
            readonly cyan: "var(--pr-color-accent-cyan)";
            readonly violet: "var(--pr-color-accent-violet)";
            readonly blue: "var(--pr-color-accent-blue)";
            readonly pink: "var(--pr-color-accent-pink)";
        };
        readonly state: {
            readonly success: "var(--pr-color-state-success)";
            readonly warning: "var(--pr-color-state-warning)";
            readonly danger: "var(--pr-color-state-danger)";
        };
    };
    readonly shadow: {
        readonly window: "var(--pr-shadow-window)";
        readonly panel: "var(--pr-shadow-panel)";
        readonly overlay: "var(--pr-shadow-overlay)";
    };
    readonly glow: {
        readonly cyanSoft: "var(--pr-glow-cyan-soft)";
        readonly cyanStrong: "var(--pr-glow-cyan-strong)";
        readonly violetSoft: "var(--pr-glow-violet-soft)";
        readonly violetStrong: "var(--pr-glow-violet-strong)";
    };
    readonly spacing: {
        readonly xs: "var(--pr-space-xs)";
        readonly sm: "var(--pr-space-sm)";
        readonly md: "var(--pr-space-md)";
        readonly lg: "var(--pr-space-lg)";
        readonly xl: "var(--pr-space-xl)";
        readonly "2xl": "var(--pr-space-2xl)";
    };
    readonly radius: {
        readonly sm: "var(--pr-radius-sm)";
        readonly md: "var(--pr-radius-md)";
        readonly lg: "var(--pr-radius-lg)";
        readonly window: "var(--pr-radius-window)";
    };
    readonly typography: {
        readonly body: "var(--pr-font-body)";
        readonly display: "var(--pr-font-display)";
        readonly mono: "var(--pr-font-mono)";
        readonly size: {
            readonly xs: "var(--pr-font-size-xs)";
            readonly sm: "var(--pr-font-size-sm)";
            readonly md: "var(--pr-font-size-md)";
            readonly lg: "var(--pr-font-size-lg)";
            readonly xl: "var(--pr-font-size-xl)";
        };
    };
    readonly icon: {
        readonly sm: "var(--pr-icon-size-sm)";
        readonly md: "var(--pr-icon-size-md)";
        readonly lg: "var(--pr-icon-size-lg)";
    };
    readonly motion: {
        readonly fast: "var(--pr-motion-fast)";
        readonly normal: "var(--pr-motion-normal)";
        readonly slow: "var(--pr-motion-slow)";
    };
    readonly zIndex: {
        readonly base: "var(--pr-z-base)";
        readonly dock: "var(--pr-z-dock)";
        readonly overlay: "var(--pr-z-overlay)";
        readonly tooltip: "var(--pr-z-tooltip)";
    };
    readonly size: {
        readonly titlebar: {
            readonly height: "var(--pr-size-titlebar-height)";
        };
        readonly taskbar: {
            readonly height: "var(--pr-size-taskbar-height)";
        };
        readonly windowControl: {
            readonly size: "var(--pr-size-window-control)";
        };
    };
    readonly grid: {
        readonly cell: "var(--pr-grid-cell-size)";
        readonly line: "var(--pr-grid-line-color)";
        readonly glow: "var(--pr-grid-glow-color)";
    };
    readonly focus: {
        readonly ring: "var(--pr-focus-ring)";
        readonly outline: "var(--pr-focus-outline)";
    };
};
declare const themeClassNames: {
    readonly cyberRetro: "pr-theme-cyber-retro";
    readonly softPastel: "pr-theme-soft-pastel";
};
type ThemeName = keyof typeof themeClassNames;
declare const themes: readonly [{
    readonly name: "cyberRetro";
    readonly label: "Cyber Retro";
    readonly className: "pr-theme-cyber-retro";
    readonly description: "Deep indigo shell with neon cyan and violet glow accents.";
}, {
    readonly name: "softPastel";
    readonly label: "Soft Pastel";
    readonly className: "pr-theme-soft-pastel";
    readonly description: "Lighter lavender-infused retro shell with softer contrast.";
}];
declare const defaultThemeName: ThemeName;
type TokenCatalog = typeof tokenCatalog;

export { type ThemeName, type TokenCatalog, defaultThemeName, themeClassNames, themes, tokenCatalog };
