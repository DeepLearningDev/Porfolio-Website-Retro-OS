import { siteProfile } from "@/content/site";
import { Taskbar } from "@/lib/pastel-retroware";
import { TaskbarClock } from "@/components/taskbar-clock";
import { TaskbarControls } from "@/components/taskbar-controls";

export function PortfolioTaskbar() {
  return (
    <Taskbar className="site-shell__taskbar" aria-label="Portfolio taskbar">
      <div className="site-shell__taskbar-inner">
        <div className="site-shell__taskbar-nav">
          <TaskbarControls />
        </div>

        <div className="site-shell__taskbar-system" aria-label="System status">
          <span className="site-shell__taskbar-system-item">network:online</span>
          <span className="site-shell__taskbar-system-item">
            signal:{siteProfile.signalStrength}
          </span>
          <TaskbarClock />
        </div>
      </div>
    </Taskbar>
  );
}
