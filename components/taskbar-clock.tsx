"use client";

import { useEffect, useState, memo } from "react";

function formatClock(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

function TaskbarClockComponent() {
  const [currentTime, setCurrentTime] = useState(() => formatClock(new Date()));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime(formatClock(new Date()));
    }, 30_000);

    return () => window.clearInterval(timer);
  }, []);

  return <span className="site-shell__taskbar-tray-item site-shell__taskbar-clock">{currentTime}</span>;
}

export const TaskbarClock = memo(TaskbarClockComponent);
