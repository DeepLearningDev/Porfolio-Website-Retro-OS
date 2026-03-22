import * as react from 'react';
import { ComponentPropsWithoutRef, ReactNode } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
type ButtonSize = "sm" | "md" | "lg";
interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
    fullWidth?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
}
declare const Button: react.ForwardRefExoticComponent<ButtonProps & react.RefAttributes<HTMLButtonElement>>;

type IconButtonSize = "sm" | "md" | "lg";
type IconButtonShape = "square" | "round";
interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
    asChild?: boolean;
    shape?: IconButtonShape;
    size?: IconButtonSize;
    variant?: ButtonVariant;
}
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;

type InputSize = "sm" | "md" | "lg";
interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: InputSize;
    inputSize?: InputSize;
    invalid?: boolean;
}
declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

type TextareaSize = "sm" | "md" | "lg";
interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {
    invalid?: boolean;
    size?: TextareaSize;
    textareaSize?: TextareaSize;
}
declare const Textarea: react.ForwardRefExoticComponent<TextareaProps & react.RefAttributes<HTMLTextAreaElement>>;

type SelectSize = "sm" | "md" | "lg";
interface SelectProps extends Omit<ComponentPropsWithoutRef<"select">, "size"> {
    invalid?: boolean;
    size?: SelectSize;
    selectSize?: SelectSize;
}
declare const Select: react.ForwardRefExoticComponent<SelectProps & react.RefAttributes<HTMLSelectElement>>;

type ChoiceSize = "sm" | "md";
interface CheckboxProps extends Omit<ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, "asChild"> {
    children?: ReactNode;
    className?: string;
    description?: ReactNode;
    invalid?: boolean;
    size?: ChoiceSize;
}
declare const Checkbox: react.ForwardRefExoticComponent<CheckboxProps & react.RefAttributes<HTMLButtonElement>>;

interface SwitchProps extends Omit<ComponentPropsWithoutRef<typeof SwitchPrimitive.Root>, "asChild"> {
    children?: ReactNode;
    className?: string;
    description?: ReactNode;
    invalid?: boolean;
    size?: ChoiceSize;
}
declare const Switch: react.ForwardRefExoticComponent<SwitchProps & react.RefAttributes<HTMLButtonElement>>;

type BadgeTone = "neutral" | "accent" | "violet" | "pink" | "success" | "warning" | "danger";
type BadgeVariant = "solid" | "subtle" | "outline";
interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
    tone?: BadgeTone;
    variant?: BadgeVariant;
}
declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

type PanelTone = "default" | "elevated" | "terminal" | "sidebar";
type PanelPadding = "none" | "sm" | "md" | "lg";
interface PanelProps extends ComponentPropsWithoutRef<"div"> {
    asChild?: boolean;
    padding?: PanelPadding;
    tone?: PanelTone;
}
declare const Panel: react.ForwardRefExoticComponent<PanelProps & react.RefAttributes<HTMLDivElement>>;

interface CardProps extends ComponentPropsWithoutRef<"article"> {
    asChild?: boolean;
    interactive?: boolean;
    padding?: PanelPadding;
    tone?: Extract<PanelTone, "default" | "elevated" | "terminal">;
}
declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLElement>>;

type SeparatorProps = ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>;
declare const Separator: react.ForwardRefExoticComponent<Omit<SeparatorPrimitive.SeparatorProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Tabs: react.ForwardRefExoticComponent<TabsPrimitive.TabsProps & react.RefAttributes<HTMLDivElement>>;
type TabsListProps = ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
declare const TabsList: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsListProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type TabsTriggerProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>;
declare const TabsTrigger: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsTriggerProps & react.RefAttributes<HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;
type TabsContentProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Content>;
declare const TabsContent: react.ForwardRefExoticComponent<Omit<TabsPrimitive.TabsContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type TabsProps = ComponentPropsWithoutRef<typeof TabsPrimitive.Root>;

declare const TooltipProvider: react.FC<TooltipPrimitive.TooltipProviderProps>;
declare const Tooltip: react.FC<TooltipPrimitive.TooltipProps>;
declare const TooltipTrigger: react.ForwardRefExoticComponent<TooltipPrimitive.TooltipTriggerProps & react.RefAttributes<HTMLButtonElement>>;
type TooltipContentProps = ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>;
declare const TooltipContent: react.ForwardRefExoticComponent<Omit<TooltipPrimitive.TooltipContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;

declare const Dialog: react.FC<DialogPrimitive.DialogProps>;
declare const DialogTrigger: react.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>;
declare const DialogPortal: react.FC<DialogPrimitive.DialogPortalProps>;
declare const DialogClose: react.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>;
type DialogOverlayProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>;
declare const DialogOverlay: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogOverlayProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type DialogContentProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Content>;
declare const DialogContent: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogContentProps & react.RefAttributes<HTMLDivElement>, "ref"> & react.RefAttributes<HTMLDivElement>>;
type DialogHeaderProps = ComponentPropsWithoutRef<"div">;
declare function DialogHeader({ className, ...props }: DialogHeaderProps): react_jsx_runtime.JSX.Element;
type DialogFooterProps = ComponentPropsWithoutRef<"div">;
declare function DialogFooter({ className, ...props }: DialogFooterProps): react_jsx_runtime.JSX.Element;
type DialogTitleProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Title>;
declare const DialogTitle: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogTitleProps & react.RefAttributes<HTMLHeadingElement>, "ref"> & react.RefAttributes<HTMLHeadingElement>>;
type DialogDescriptionProps = ComponentPropsWithoutRef<typeof DialogPrimitive.Description>;
declare const DialogDescription: react.ForwardRefExoticComponent<Omit<DialogPrimitive.DialogDescriptionProps & react.RefAttributes<HTMLParagraphElement>, "ref"> & react.RefAttributes<HTMLParagraphElement>>;

type ScrollAreaAxis = "vertical" | "horizontal" | "both";
interface ScrollAreaProps extends Omit<ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>, "type"> {
    axis?: ScrollAreaAxis;
    viewportClassName?: string;
}
declare const ScrollArea: react.ForwardRefExoticComponent<ScrollAreaProps & react.RefAttributes<HTMLDivElement>>;

type WindowTone = "default" | "terminal";
interface WindowProps extends ComponentPropsWithoutRef<"section"> {
    asChild?: boolean;
    tone?: WindowTone;
}
type WindowHeaderProps = Omit<ComponentPropsWithoutRef<"header">, "title"> & {
    status?: ReactNode;
    subtitle?: ReactNode;
    title?: ReactNode;
};
interface WindowControlsProps extends ComponentPropsWithoutRef<"div"> {
    alignment?: "start" | "end";
}
interface WindowBodyProps extends ComponentPropsWithoutRef<"div"> {
    padded?: boolean;
}
declare const Window: react.ForwardRefExoticComponent<WindowProps & react.RefAttributes<HTMLElement>>;
declare const WindowHeader: react.ForwardRefExoticComponent<Omit<Omit<react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>, "ref">, "title"> & {
    status?: ReactNode;
    subtitle?: ReactNode;
    title?: ReactNode;
} & react.RefAttributes<HTMLElement>>;
declare const WindowControls: react.ForwardRefExoticComponent<WindowControlsProps & react.RefAttributes<HTMLDivElement>>;
declare const WindowBody: react.ForwardRefExoticComponent<WindowBodyProps & react.RefAttributes<HTMLDivElement>>;

interface SidebarProps extends Omit<ComponentPropsWithoutRef<"aside">, "title"> {
    asChild?: boolean;
    footer?: ReactNode;
    subtitle?: ReactNode;
    title?: ReactNode;
}
declare const Sidebar: react.ForwardRefExoticComponent<SidebarProps & react.RefAttributes<HTMLElement>>;

interface ExplorerListProps extends ComponentPropsWithoutRef<"div"> {
    dense?: boolean;
}
interface ExplorerItemProps extends ComponentPropsWithoutRef<"button"> {
    description?: ReactNode;
    icon?: ReactNode;
    label: ReactNode;
    meta?: ReactNode;
    selected?: boolean;
}
declare const ExplorerList: react.ForwardRefExoticComponent<ExplorerListProps & react.RefAttributes<HTMLDivElement>>;
declare const ExplorerItem: react.ForwardRefExoticComponent<ExplorerItemProps & react.RefAttributes<HTMLButtonElement>>;

interface TaskbarProps extends ComponentPropsWithoutRef<"nav"> {
    asChild?: boolean;
}
interface TaskbarButtonProps extends ComponentPropsWithoutRef<"button"> {
    active?: boolean;
    indicator?: ReactNode;
}
declare const Taskbar: react.ForwardRefExoticComponent<TaskbarProps & react.RefAttributes<HTMLElement>>;
declare const TaskbarButton: react.ForwardRefExoticComponent<TaskbarButtonProps & react.RefAttributes<HTMLButtonElement>>;

interface DesktopIconProps extends ComponentPropsWithoutRef<"button"> {
    active?: boolean;
    description?: ReactNode;
    icon?: ReactNode;
    label: ReactNode;
}
declare const DesktopIcon: react.ForwardRefExoticComponent<DesktopIconProps & react.RefAttributes<HTMLButtonElement>>;

interface SystemPanelProps extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
    actions?: ReactNode;
    asChild?: boolean;
    description?: ReactNode;
    status?: ReactNode;
    title?: ReactNode;
}
declare const SystemPanel: react.ForwardRefExoticComponent<SystemPanelProps & react.RefAttributes<HTMLElement>>;

type MetricBarTone = "accent" | "violet" | "success" | "warning" | "danger";
interface MetricBarProps extends ComponentPropsWithoutRef<"div"> {
    label: ReactNode;
    max?: number;
    min?: number;
    tone?: MetricBarTone;
    value: number;
    valueLabel?: ReactNode;
}
declare const MetricBar: react.ForwardRefExoticComponent<MetricBarProps & react.RefAttributes<HTMLDivElement>>;

interface TerminalPaneProps extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
    actions?: ReactNode;
    asChild?: boolean;
    prompt?: ReactNode;
    status?: ReactNode;
    title?: ReactNode;
}
declare const TerminalPane: react.ForwardRefExoticComponent<TerminalPaneProps & react.RefAttributes<HTMLElement>>;

interface CommandLineProps extends ComponentPropsWithoutRef<"form"> {
    actions?: ReactNode;
    prompt?: ReactNode;
}
declare const CommandLine: react.ForwardRefExoticComponent<CommandLineProps & react.RefAttributes<HTMLFormElement>>;

interface StatusStripProps extends ComponentPropsWithoutRef<"footer"> {
    asChild?: boolean;
}
declare const StatusStrip: react.ForwardRefExoticComponent<StatusStripProps & react.RefAttributes<HTMLElement>>;

interface StartMenuProps extends Omit<ComponentPropsWithoutRef<"section">, "title"> {
    asChild?: boolean;
    footer?: ReactNode;
    subtitle?: ReactNode;
    title?: ReactNode;
}
declare const StartMenu: react.ForwardRefExoticComponent<StartMenuProps & react.RefAttributes<HTMLElement>>;

export { Badge, type BadgeProps, type BadgeTone, type BadgeVariant, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Card, type CardProps, Checkbox, type CheckboxProps, type ChoiceSize, CommandLine, type CommandLineProps, DesktopIcon, type DesktopIconProps, Dialog, DialogClose, DialogContent, type DialogContentProps, DialogDescription, type DialogDescriptionProps, DialogFooter, type DialogFooterProps, DialogHeader, type DialogHeaderProps, DialogOverlay, type DialogOverlayProps, DialogPortal, DialogTitle, type DialogTitleProps, DialogTrigger, ExplorerItem, type ExplorerItemProps, ExplorerList, type ExplorerListProps, IconButton, type IconButtonProps, type IconButtonShape, type IconButtonSize, Input, type InputProps, type InputSize, MetricBar, type MetricBarProps, type MetricBarTone, Panel, type PanelPadding, type PanelProps, type PanelTone, ScrollArea, type ScrollAreaAxis, type ScrollAreaProps, Select, type SelectProps, type SelectSize, Separator, type SeparatorProps, Sidebar, type SidebarProps, StartMenu, type StartMenuProps, StatusStrip, type StatusStripProps, Switch, type SwitchProps, SystemPanel, type SystemPanelProps, Tabs, TabsContent, type TabsContentProps, TabsList, type TabsListProps, type TabsProps, TabsTrigger, type TabsTriggerProps, Taskbar, TaskbarButton, type TaskbarButtonProps, type TaskbarProps, TerminalPane, type TerminalPaneProps, Textarea, type TextareaProps, type TextareaSize, Tooltip, TooltipContent, type TooltipContentProps, TooltipProvider, TooltipTrigger, Window, WindowBody, type WindowBodyProps, WindowControls, type WindowControlsProps, WindowHeader, type WindowHeaderProps, type WindowProps, type WindowTone };
