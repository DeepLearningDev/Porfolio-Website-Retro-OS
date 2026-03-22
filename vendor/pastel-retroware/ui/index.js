// src/components/primitives/button.tsx
import { Slot } from "@radix-ui/react-slot";
import { forwardRef } from "react";

// src/lib/cn.ts
function cn(...values) {
  return values.filter(Boolean).join(" ");
}

// src/components/primitives/button.tsx
import { jsx } from "react/jsx-runtime";
var Button = forwardRef(
  ({
    asChild = false,
    className,
    fullWidth = false,
    size = "md",
    type,
    variant = "primary",
    ...props
  }, ref) => {
    const Component = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: cn(
          "pr-button",
          `pr-button--${variant}`,
          `pr-button--${size}`,
          fullWidth && "pr-button--full-width",
          className
        ),
        "data-size": size,
        "data-variant": variant,
        ref,
        type: asChild ? void 0 : type ?? "button",
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/primitives/icon-button.tsx
import { Slot as Slot2 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
var IconButton = forwardRef2(
  ({
    asChild = false,
    className,
    shape = "square",
    size = "md",
    type,
    variant = "secondary",
    ...props
  }, ref) => {
    const Component = asChild ? Slot2 : "button";
    return /* @__PURE__ */ jsx2(
      Component,
      {
        className: cn(
          "pr-button",
          "pr-icon-button",
          `pr-button--${variant}`,
          `pr-icon-button--${size}`,
          `pr-icon-button--${shape}`,
          className
        ),
        "data-shape": shape,
        ref,
        type: asChild ? void 0 : type ?? "button",
        ...props
      }
    );
  }
);
IconButton.displayName = "IconButton";

// src/components/primitives/input.tsx
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Input = forwardRef3(
  ({ className, inputSize, invalid = false, size, type = "text", ...props }, ref) => {
    const controlSize = size ?? inputSize ?? "md";
    return /* @__PURE__ */ jsx3(
      "input",
      {
        "aria-invalid": invalid || props["aria-invalid"],
        className: cn(
          "pr-control",
          "pr-input",
          `pr-control--${controlSize}`,
          className
        ),
        "data-invalid": invalid ? "true" : void 0,
        ref,
        type,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/primitives/textarea.tsx
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Textarea = forwardRef4(
  ({ className, invalid = false, rows = 5, size, textareaSize, ...props }, ref) => {
    const controlSize = size ?? textareaSize ?? "md";
    return /* @__PURE__ */ jsx4(
      "textarea",
      {
        "aria-invalid": invalid || props["aria-invalid"],
        className: cn(
          "pr-control",
          "pr-textarea",
          `pr-control--${controlSize}`,
          className
        ),
        "data-invalid": invalid ? "true" : void 0,
        ref,
        rows,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/primitives/select.tsx
import { forwardRef as forwardRef5 } from "react";

// src/lib/icons.tsx
import { jsx as jsx5 } from "react/jsx-runtime";
function CheckIcon(props) {
  return /* @__PURE__ */ jsx5("svg", { "aria-hidden": "true", fill: "none", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ jsx5(
    "path",
    {
      d: "M3.5 8.25 6.5 11l6-6.5",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }
  ) });
}
function ChevronDownIcon(props) {
  return /* @__PURE__ */ jsx5("svg", { "aria-hidden": "true", fill: "none", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ jsx5(
    "path",
    {
      d: "m4 6 4 4 4-4",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.6"
    }
  ) });
}
function MinusIcon(props) {
  return /* @__PURE__ */ jsx5("svg", { "aria-hidden": "true", fill: "none", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ jsx5(
    "path",
    {
      d: "M4 8h8",
      stroke: "currentColor",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeWidth: "1.8"
    }
  ) });
}

// src/components/primitives/select.tsx
import { jsx as jsx6, jsxs } from "react/jsx-runtime";
var Select = forwardRef5(
  ({ className, disabled, invalid = false, selectSize, size, ...props }, ref) => {
    const controlSize = size ?? selectSize ?? "md";
    return /* @__PURE__ */ jsxs(
      "span",
      {
        className: cn(
          "pr-select",
          `pr-control--${controlSize}`,
          disabled && "pr-select--disabled",
          className
        ),
        "data-invalid": invalid ? "true" : void 0,
        children: [
          /* @__PURE__ */ jsx6(
            "select",
            {
              "aria-invalid": invalid || props["aria-invalid"],
              className: "pr-select__input",
              disabled,
              ref,
              ...props
            }
          ),
          /* @__PURE__ */ jsx6(ChevronDownIcon, { className: "pr-select__icon" })
        ]
      }
    );
  }
);
Select.displayName = "Select";

// src/components/primitives/checkbox.tsx
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { forwardRef as forwardRef6, useId } from "react";
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
var Checkbox = forwardRef6(
  ({
    children,
    className,
    description,
    disabled,
    invalid = false,
    size = "md",
    ...props
  }, ref) => {
    const descriptionId = useId();
    const labelId = useId();
    return /* @__PURE__ */ jsxs2(
      "label",
      {
        className: cn(
          "pr-choice",
          "pr-checkbox",
          `pr-choice--${size}`,
          disabled && "pr-choice--disabled",
          className
        ),
        children: [
          /* @__PURE__ */ jsx7(
            CheckboxPrimitive.Root,
            {
              "aria-describedby": description ? descriptionId : void 0,
              "aria-labelledby": children ? labelId : void 0,
              "aria-invalid": invalid || props["aria-invalid"],
              className: "pr-choice__control",
              "data-invalid": invalid ? "true" : void 0,
              disabled,
              ref,
              ...props,
              children: /* @__PURE__ */ jsx7(CheckboxPrimitive.Indicator, { className: "pr-choice__indicator", children: props.checked === "indeterminate" ? /* @__PURE__ */ jsx7(MinusIcon, { className: "pr-choice__icon" }) : /* @__PURE__ */ jsx7(CheckIcon, { className: "pr-choice__icon" }) })
            }
          ),
          (children || description) && /* @__PURE__ */ jsxs2("span", { className: "pr-choice__content", children: [
            children && /* @__PURE__ */ jsx7("span", { className: "pr-choice__label", id: labelId, children }),
            description && /* @__PURE__ */ jsx7("span", { className: "pr-choice__description", id: descriptionId, children: description })
          ] })
        ]
      }
    );
  }
);
Checkbox.displayName = "Checkbox";

// src/components/primitives/switch.tsx
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { forwardRef as forwardRef7, useId as useId2 } from "react";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var Switch = forwardRef7(
  ({
    children,
    className,
    description,
    disabled,
    invalid = false,
    size = "md",
    ...props
  }, ref) => {
    const descriptionId = useId2();
    const labelId = useId2();
    return /* @__PURE__ */ jsxs3(
      "label",
      {
        className: cn(
          "pr-choice",
          "pr-switch",
          `pr-choice--${size}`,
          disabled && "pr-choice--disabled",
          className
        ),
        children: [
          /* @__PURE__ */ jsx8(
            SwitchPrimitive.Root,
            {
              "aria-describedby": description ? descriptionId : void 0,
              "aria-labelledby": children ? labelId : void 0,
              "aria-invalid": invalid || props["aria-invalid"],
              className: "pr-switch__control",
              "data-invalid": invalid ? "true" : void 0,
              disabled,
              ref,
              ...props,
              children: /* @__PURE__ */ jsx8(SwitchPrimitive.Thumb, { className: "pr-switch__thumb" })
            }
          ),
          (children || description) && /* @__PURE__ */ jsxs3("span", { className: "pr-choice__content", children: [
            children && /* @__PURE__ */ jsx8("span", { className: "pr-choice__label", id: labelId, children }),
            description && /* @__PURE__ */ jsx8("span", { className: "pr-choice__description", id: descriptionId, children: description })
          ] })
        ]
      }
    );
  }
);
Switch.displayName = "Switch";

// src/components/primitives/badge.tsx
import { forwardRef as forwardRef8 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var Badge = forwardRef8(
  ({ className, tone = "neutral", variant = "subtle", ...props }, ref) => /* @__PURE__ */ jsx9(
    "span",
    {
      className: cn(
        "pr-badge",
        `pr-badge--${tone}`,
        `pr-badge--${variant}`,
        className
      ),
      ref,
      ...props
    }
  )
);
Badge.displayName = "Badge";

// src/components/primitives/panel.tsx
import { Slot as Slot3 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef9 } from "react";
import { jsx as jsx10 } from "react/jsx-runtime";
var Panel = forwardRef9(
  ({ asChild = false, className, padding = "md", tone = "default", ...props }, ref) => {
    const Component = asChild ? Slot3 : "div";
    return /* @__PURE__ */ jsx10(
      Component,
      {
        className: cn(
          "pr-panel",
          `pr-panel--${tone}`,
          `pr-panel--padding-${padding}`,
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Panel.displayName = "Panel";

// src/components/primitives/card.tsx
import { Slot as Slot4 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef10 } from "react";
import { jsx as jsx11 } from "react/jsx-runtime";
var Card = forwardRef10(
  ({
    asChild = false,
    className,
    interactive = false,
    padding = "lg",
    tone = "elevated",
    ...props
  }, ref) => {
    const Component = asChild ? Slot4 : "article";
    return /* @__PURE__ */ jsx11(
      Component,
      {
        className: cn(
          "pr-card",
          `pr-panel--${tone}`,
          `pr-panel--padding-${padding}`,
          interactive && "pr-card--interactive",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Card.displayName = "Card";

// src/components/primitives/separator.tsx
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { forwardRef as forwardRef11 } from "react";
import { jsx as jsx12 } from "react/jsx-runtime";
var Separator = forwardRef11(
  ({ className, decorative = true, orientation = "horizontal", ...props }, ref) => /* @__PURE__ */ jsx12(
    SeparatorPrimitive.Root,
    {
      className: cn("pr-separator", className),
      decorative,
      orientation,
      ref,
      ...props
    }
  )
);
Separator.displayName = "Separator";

// src/components/primitives/tabs.tsx
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef as forwardRef12 } from "react";
import { jsx as jsx13 } from "react/jsx-runtime";
var Tabs = TabsPrimitive.Root;
var TabsList = forwardRef12(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
    TabsPrimitive.List,
    {
      className: cn("pr-tabs__list", className),
      ref,
      ...props
    }
  )
);
TabsList.displayName = "TabsList";
var TabsTrigger = forwardRef12(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
    TabsPrimitive.Trigger,
    {
      className: cn("pr-tabs__trigger", className),
      ref,
      ...props
    }
  )
);
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = forwardRef12(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx13(
    TabsPrimitive.Content,
    {
      className: cn("pr-tabs__content", className),
      ref,
      ...props
    }
  )
);
TabsContent.displayName = "TabsContent";

// src/components/primitives/tooltip.tsx
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { forwardRef as forwardRef13 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var TooltipProvider = TooltipPrimitive.Provider;
var Tooltip = TooltipPrimitive.Root;
var TooltipTrigger = TooltipPrimitive.Trigger;
var TooltipContent = forwardRef13(
  ({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ jsx14(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsx14(
    TooltipPrimitive.Content,
    {
      className: cn("pr-tooltip", className),
      ref,
      sideOffset,
      ...props
    }
  ) })
);
TooltipContent.displayName = "TooltipContent";

// src/components/primitives/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { forwardRef as forwardRef14 } from "react";
import { jsx as jsx15, jsxs as jsxs4 } from "react/jsx-runtime";
var Dialog = DialogPrimitive.Root;
var DialogTrigger = DialogPrimitive.Trigger;
var DialogPortal = DialogPrimitive.Portal;
var DialogClose = DialogPrimitive.Close;
var DialogOverlay = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
    DialogPrimitive.Overlay,
    {
      className: cn("pr-dialog__overlay", className),
      ref,
      ...props
    }
  )
);
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = forwardRef14(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(DialogPortal, { children: [
    /* @__PURE__ */ jsx15(DialogOverlay, {}),
    /* @__PURE__ */ jsx15(
      DialogPrimitive.Content,
      {
        className: cn("pr-dialog__content", className),
        ref,
        ...props,
        children
      }
    )
  ] })
);
DialogContent.displayName = "DialogContent";
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx15("div", { className: cn("pr-dialog__header", className), ...props });
}
function DialogFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx15("div", { className: cn("pr-dialog__footer", className), ...props });
}
var DialogTitle = forwardRef14(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
    DialogPrimitive.Title,
    {
      className: cn("pr-dialog__title", className),
      ref,
      ...props
    }
  )
);
DialogTitle.displayName = "DialogTitle";
var DialogDescription = forwardRef14(({ className, ...props }, ref) => /* @__PURE__ */ jsx15(
  DialogPrimitive.Description,
  {
    className: cn("pr-dialog__description", className),
    ref,
    ...props
  }
));
DialogDescription.displayName = "DialogDescription";

// src/components/primitives/scroll-area.tsx
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { forwardRef as forwardRef15 } from "react";
import { jsx as jsx16, jsxs as jsxs5 } from "react/jsx-runtime";
function renderScrollbar(orientation) {
  return /* @__PURE__ */ jsx16(
    ScrollAreaPrimitive.Scrollbar,
    {
      className: cn(
        "pr-scroll-area__scrollbar",
        `pr-scroll-area__scrollbar--${orientation}`
      ),
      orientation,
      children: /* @__PURE__ */ jsx16(ScrollAreaPrimitive.Thumb, { className: "pr-scroll-area__thumb" })
    }
  );
}
var ScrollArea = forwardRef15(
  ({
    axis = "vertical",
    children,
    className,
    scrollHideDelay = 300,
    viewportClassName,
    ...props
  }, ref) => /* @__PURE__ */ jsxs5(
    ScrollAreaPrimitive.Root,
    {
      className: cn("pr-scroll-area", className),
      ref,
      scrollHideDelay,
      type: "hover",
      ...props,
      children: [
        /* @__PURE__ */ jsx16(
          ScrollAreaPrimitive.Viewport,
          {
            className: cn("pr-scroll-area__viewport", viewportClassName),
            children
          }
        ),
        (axis === "vertical" || axis === "both") && renderScrollbar("vertical"),
        (axis === "horizontal" || axis === "both") && renderScrollbar("horizontal"),
        axis === "both" && /* @__PURE__ */ jsx16(ScrollAreaPrimitive.Corner, { className: "pr-scroll-area__corner" })
      ]
    }
  )
);
ScrollArea.displayName = "ScrollArea";

// src/components/signature/window.tsx
import { Slot as Slot5 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef16 } from "react";
import { jsx as jsx17, jsxs as jsxs6 } from "react/jsx-runtime";
var Window = forwardRef16(
  ({ asChild = false, className, tone = "default", ...props }, ref) => {
    const Component = asChild ? Slot5 : "section";
    return /* @__PURE__ */ jsx17(
      Component,
      {
        className: cn(
          "pr-panel",
          "pr-panel--elevated",
          "pr-window",
          `pr-window--${tone}`,
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Window.displayName = "Window";
var WindowHeader = forwardRef16(
  ({ children, className, status, subtitle, title, ...props }, ref) => /* @__PURE__ */ jsxs6("header", { className: cn("pr-window__header", className), ref, ...props, children: [
    /* @__PURE__ */ jsxs6("div", { className: "pr-window__heading", children: [
      title && /* @__PURE__ */ jsx17("span", { className: "pr-window__title", children: title }),
      (subtitle || status) && /* @__PURE__ */ jsxs6("span", { className: "pr-window__meta", children: [
        subtitle && /* @__PURE__ */ jsx17("span", { children: subtitle }),
        status && /* @__PURE__ */ jsx17("span", { className: "pr-window__status", children: status })
      ] })
    ] }),
    children && /* @__PURE__ */ jsx17("div", { className: "pr-window__actions", children })
  ] })
);
WindowHeader.displayName = "WindowHeader";
var WindowControls = forwardRef16(
  ({ alignment = "end", className, ...props }, ref) => /* @__PURE__ */ jsx17(
    "div",
    {
      className: cn(
        "pr-window__controls",
        `pr-window__controls--${alignment}`,
        className
      ),
      ref,
      ...props
    }
  )
);
WindowControls.displayName = "WindowControls";
var WindowBody = forwardRef16(
  ({ className, padded = true, ...props }, ref) => /* @__PURE__ */ jsx17(
    "div",
    {
      className: cn(
        "pr-window__body",
        padded && "pr-window__body--padded",
        className
      ),
      ref,
      ...props
    }
  )
);
WindowBody.displayName = "WindowBody";

// src/components/signature/sidebar.tsx
import { Slot as Slot6 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef17, useId as useId3 } from "react";
import { jsx as jsx18, jsxs as jsxs7 } from "react/jsx-runtime";
var Sidebar = forwardRef17(
  ({ asChild = false, children, className, footer, subtitle, title, ...props }, ref) => {
    const titleId = useId3();
    const Component = asChild ? Slot6 : "aside";
    return /* @__PURE__ */ jsxs7(
      Component,
      {
        "aria-labelledby": title ? titleId : void 0,
        className: cn("pr-panel", "pr-panel--sidebar", "pr-sidebar", className),
        ref,
        ...props,
        children: [
          (title || subtitle) && /* @__PURE__ */ jsxs7("div", { className: "pr-sidebar__header", children: [
            title && /* @__PURE__ */ jsx18("h2", { className: "pr-sidebar__title", id: titleId, children: title }),
            subtitle && /* @__PURE__ */ jsx18("p", { className: "pr-sidebar__subtitle", children: subtitle })
          ] }),
          /* @__PURE__ */ jsx18("div", { className: "pr-sidebar__body", children }),
          footer && /* @__PURE__ */ jsx18("div", { className: "pr-sidebar__footer", children: footer })
        ]
      }
    );
  }
);
Sidebar.displayName = "Sidebar";

// src/components/signature/explorer.tsx
import { forwardRef as forwardRef18 } from "react";
import { jsx as jsx19, jsxs as jsxs8 } from "react/jsx-runtime";
var ExplorerList = forwardRef18(
  ({ className, dense = false, ...props }, ref) => /* @__PURE__ */ jsx19(
    "div",
    {
      className: cn(
        "pr-explorer-list",
        dense && "pr-explorer-list--dense",
        className
      ),
      ref,
      ...props
    }
  )
);
ExplorerList.displayName = "ExplorerList";
var ExplorerItem = forwardRef18(
  ({
    className,
    description,
    icon,
    label,
    meta,
    selected = false,
    type,
    ...props
  }, ref) => /* @__PURE__ */ jsxs8(
    "button",
    {
      className: cn(
        "pr-explorer-item",
        selected && "pr-explorer-item--selected",
        className
      ),
      "data-selected": selected ? "true" : void 0,
      ref,
      type: type ?? "button",
      ...props,
      children: [
        icon && /* @__PURE__ */ jsx19("span", { className: "pr-explorer-item__icon", children: icon }),
        /* @__PURE__ */ jsxs8("span", { className: "pr-explorer-item__content", children: [
          /* @__PURE__ */ jsxs8("span", { className: "pr-explorer-item__label-row", children: [
            /* @__PURE__ */ jsx19("span", { className: "pr-explorer-item__label", children: label }),
            meta && /* @__PURE__ */ jsx19("span", { className: "pr-explorer-item__meta", children: meta })
          ] }),
          description && /* @__PURE__ */ jsx19("span", { className: "pr-explorer-item__description", children: description })
        ] })
      ]
    }
  )
);
ExplorerItem.displayName = "ExplorerItem";

// src/components/signature/taskbar.tsx
import { Slot as Slot7 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef19 } from "react";
import { jsx as jsx20, jsxs as jsxs9 } from "react/jsx-runtime";
var Taskbar = forwardRef19(
  ({ asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot7 : "nav";
    return /* @__PURE__ */ jsx20(Component, { className: cn("pr-taskbar", className), ref, ...props });
  }
);
Taskbar.displayName = "Taskbar";
var TaskbarButton = forwardRef19(
  ({ active = false, children, className, indicator, type, ...props }, ref) => /* @__PURE__ */ jsxs9(
    "button",
    {
      className: cn(
        "pr-taskbar-button",
        active && "pr-taskbar-button--active",
        className
      ),
      "data-active": active ? "true" : void 0,
      ref,
      type: type ?? "button",
      ...props,
      children: [
        /* @__PURE__ */ jsx20("span", { className: "pr-taskbar-button__label", children }),
        indicator && /* @__PURE__ */ jsx20("span", { className: "pr-taskbar-button__indicator", children: indicator })
      ]
    }
  )
);
TaskbarButton.displayName = "TaskbarButton";

// src/components/signature/desktop-icon.tsx
import { forwardRef as forwardRef20 } from "react";
import { jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var DesktopIcon = forwardRef20(
  ({ active = false, className, description, icon, label, type, ...props }, ref) => /* @__PURE__ */ jsxs10(
    "button",
    {
      className: cn(
        "pr-desktop-icon",
        active && "pr-desktop-icon--active",
        className
      ),
      "data-active": active ? "true" : void 0,
      ref,
      type: type ?? "button",
      ...props,
      children: [
        /* @__PURE__ */ jsx21("span", { className: "pr-desktop-icon__tile", children: icon }),
        /* @__PURE__ */ jsx21("span", { className: "pr-desktop-icon__label", children: label }),
        description && /* @__PURE__ */ jsx21("span", { className: "pr-desktop-icon__description", children: description })
      ]
    }
  )
);
DesktopIcon.displayName = "DesktopIcon";

// src/components/signature/system-panel.tsx
import { Slot as Slot8 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef21, useId as useId4 } from "react";
import { jsx as jsx22, jsxs as jsxs11 } from "react/jsx-runtime";
var SystemPanel = forwardRef21(
  ({
    actions,
    asChild = false,
    children,
    className,
    description,
    status,
    title,
    ...props
  }, ref) => {
    const titleId = useId4();
    const Component = asChild ? Slot8 : "section";
    return /* @__PURE__ */ jsxs11(
      Component,
      {
        "aria-labelledby": title ? titleId : void 0,
        className: cn(
          "pr-panel",
          "pr-panel--default",
          "pr-system-panel",
          className
        ),
        ref,
        ...props,
        children: [
          (title || description || status || actions) && /* @__PURE__ */ jsxs11("div", { className: "pr-system-panel__header", children: [
            /* @__PURE__ */ jsxs11("div", { className: "pr-system-panel__heading", children: [
              title && /* @__PURE__ */ jsx22("h3", { className: "pr-system-panel__title", id: titleId, children: title }),
              description && /* @__PURE__ */ jsx22("p", { className: "pr-system-panel__description", children: description })
            ] }),
            (status || actions) && /* @__PURE__ */ jsxs11("div", { className: "pr-system-panel__rail", children: [
              status && /* @__PURE__ */ jsx22("div", { className: "pr-system-panel__status", children: status }),
              actions && /* @__PURE__ */ jsx22("div", { className: "pr-system-panel__actions", children: actions })
            ] })
          ] }),
          /* @__PURE__ */ jsx22("div", { className: "pr-system-panel__body", children })
        ]
      }
    );
  }
);
SystemPanel.displayName = "SystemPanel";

// src/components/signature/metric-bar.tsx
import { forwardRef as forwardRef22 } from "react";
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
var MetricBar = forwardRef22(
  ({
    className,
    label,
    max = 100,
    min = 0,
    tone = "accent",
    value,
    valueLabel,
    ...props
  }, ref) => {
    const bounded = clamp(value, min, max);
    const percent = (bounded - min) / (max - min || 1) * 100;
    return /* @__PURE__ */ jsxs12(
      "div",
      {
        className: cn("pr-metric-bar", `pr-metric-bar--${tone}`, className),
        ref,
        ...props,
        children: [
          /* @__PURE__ */ jsxs12("div", { className: "pr-metric-bar__header", children: [
            /* @__PURE__ */ jsx23("span", { className: "pr-metric-bar__label", children: label }),
            /* @__PURE__ */ jsx23("span", { className: "pr-metric-bar__value", children: valueLabel ?? `${Math.round(percent)}%` })
          ] }),
          /* @__PURE__ */ jsx23(
            "div",
            {
              "aria-label": typeof label === "string" ? label : void 0,
              "aria-valuemax": max,
              "aria-valuemin": min,
              "aria-valuenow": bounded,
              className: "pr-metric-bar__track",
              role: "progressbar",
              children: /* @__PURE__ */ jsx23(
                "span",
                {
                  className: "pr-metric-bar__fill",
                  style: { width: `${percent}%` }
                }
              )
            }
          )
        ]
      }
    );
  }
);
MetricBar.displayName = "MetricBar";

// src/components/signature/terminal-pane.tsx
import { Slot as Slot9 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef23, useId as useId5 } from "react";
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
var TerminalPane = forwardRef23(
  ({
    actions,
    asChild = false,
    children,
    className,
    prompt,
    status,
    title,
    ...props
  }, ref) => {
    const titleId = useId5();
    const Component = asChild ? Slot9 : "section";
    return /* @__PURE__ */ jsxs13(
      Component,
      {
        "aria-labelledby": title ? titleId : void 0,
        className: cn(
          "pr-panel",
          "pr-panel--terminal",
          "pr-terminal-pane",
          className
        ),
        ref,
        ...props,
        children: [
          (title || prompt || status || actions) && /* @__PURE__ */ jsxs13("div", { className: "pr-terminal-pane__header", children: [
            /* @__PURE__ */ jsxs13("div", { className: "pr-terminal-pane__heading", children: [
              title && /* @__PURE__ */ jsx24("h3", { className: "pr-terminal-pane__title", id: titleId, children: title }),
              prompt && /* @__PURE__ */ jsx24("span", { className: "pr-terminal-pane__prompt", children: prompt })
            ] }),
            (status || actions) && /* @__PURE__ */ jsxs13("div", { className: "pr-terminal-pane__rail", children: [
              status && /* @__PURE__ */ jsx24("span", { className: "pr-terminal-pane__status", children: status }),
              actions && /* @__PURE__ */ jsx24("div", { className: "pr-terminal-pane__actions", children: actions })
            ] })
          ] }),
          /* @__PURE__ */ jsx24("div", { className: "pr-terminal-pane__body", children })
        ]
      }
    );
  }
);
TerminalPane.displayName = "TerminalPane";

// src/components/signature/command-line.tsx
import { forwardRef as forwardRef24 } from "react";
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
var CommandLine = forwardRef24(
  ({ actions, children, className, prompt = ">", ...props }, ref) => /* @__PURE__ */ jsxs14("form", { className: cn("pr-command-line", className), ref, ...props, children: [
    /* @__PURE__ */ jsx25("span", { className: "pr-command-line__prompt", "aria-hidden": "true", children: prompt }),
    /* @__PURE__ */ jsx25("div", { className: "pr-command-line__field", children }),
    actions && /* @__PURE__ */ jsx25("div", { className: "pr-command-line__actions", children: actions })
  ] })
);
CommandLine.displayName = "CommandLine";

// src/components/signature/status-strip.tsx
import { Slot as Slot10 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef25 } from "react";
import { jsx as jsx26 } from "react/jsx-runtime";
var StatusStrip = forwardRef25(
  ({ asChild = false, className, ...props }, ref) => {
    const Component = asChild ? Slot10 : "footer";
    return /* @__PURE__ */ jsx26(
      Component,
      {
        className: cn("pr-status-strip", className),
        ref,
        ...props
      }
    );
  }
);
StatusStrip.displayName = "StatusStrip";

// src/components/signature/start-menu.tsx
import { Slot as Slot11 } from "@radix-ui/react-slot";
import { forwardRef as forwardRef26, useId as useId6 } from "react";
import { jsx as jsx27, jsxs as jsxs15 } from "react/jsx-runtime";
var StartMenu = forwardRef26(
  ({ asChild = false, children, className, footer, subtitle, title, ...props }, ref) => {
    const titleId = useId6();
    const Component = asChild ? Slot11 : "section";
    return /* @__PURE__ */ jsxs15(
      Component,
      {
        "aria-labelledby": title ? titleId : void 0,
        className: cn(
          "pr-panel",
          "pr-panel--elevated",
          "pr-start-menu",
          className
        ),
        ref,
        ...props,
        children: [
          (title || subtitle) && /* @__PURE__ */ jsxs15("div", { className: "pr-start-menu__header", children: [
            title && /* @__PURE__ */ jsx27("h2", { className: "pr-start-menu__title", id: titleId, children: title }),
            subtitle && /* @__PURE__ */ jsx27("p", { className: "pr-start-menu__subtitle", children: subtitle })
          ] }),
          /* @__PURE__ */ jsx27("div", { className: "pr-start-menu__body", children }),
          footer && /* @__PURE__ */ jsx27("div", { className: "pr-start-menu__footer", children: footer })
        ]
      }
    );
  }
);
StartMenu.displayName = "StartMenu";
export {
  Badge,
  Button,
  Card,
  Checkbox,
  CommandLine,
  DesktopIcon,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  ExplorerItem,
  ExplorerList,
  IconButton,
  Input,
  MetricBar,
  Panel,
  ScrollArea,
  Select,
  Separator,
  Sidebar,
  StartMenu,
  StatusStrip,
  Switch,
  SystemPanel,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Taskbar,
  TaskbarButton,
  TerminalPane,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  Window,
  WindowBody,
  WindowControls,
  WindowHeader
};
//# sourceMappingURL=index.js.map