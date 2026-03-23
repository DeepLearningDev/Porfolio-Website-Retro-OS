import { siteProfile } from "@/content/site";
import { Separator, Taskbar } from "@/lib/pastel-retroware";
import { TaskbarClock } from "@/components/taskbar-clock";
import { TaskbarControls } from "@/components/taskbar-controls";

export function PortfolioTaskbar() {
  return (
    <Taskbar className="site-shell__taskbar" aria-label="Portfolio taskbar">
      <div className="site-shell__taskbar-inner">
        <TaskbarControls />

        <Separator className="site-shell__taskbar-separator" orientation="vertical" />

        <div className="site-shell__taskbar-group site-shell__taskbar-group--meta">
          <div className="site-shell__taskbar-status">
            <span>network:online</span>
            <span>signal:{siteProfile.signalStrength}</span>
          </div>

          <div className="site-shell__taskbar-time">
            <TaskbarClock />
          </div>
        </div>
      </div>
    </Taskbar>
  );
}
