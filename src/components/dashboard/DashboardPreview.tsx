"use client";

import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import DashboardHeader from "./Header";
import RevenueCard from "./RevenueCard";
import MetricsGrid from "./MetricsGrid";
import RevenueChart from "./RevenueChart";
import ActivityFeed from "./ActivityFeed";
import RecentChannels from "./RecentChannels";

export default function DashboardPreview() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const hasLoadedSidebarState = useRef(false);

  useEffect(() => {
    queueMicrotask(() => {
      const savedState = window.localStorage.getItem("dashboard-sidebar-collapsed");
      if (savedState !== null) {
        setIsCollapsed(savedState === "true");
      }
      hasLoadedSidebarState.current = true;
    });
  }, []);

  useEffect(() => {
    if (!hasLoadedSidebarState.current) {
      return;
    }
    window.localStorage.setItem("dashboard-sidebar-collapsed", String(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="relative mt-12">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/5 to-indigo-500/5 rounded-[32px] blur-2xl" />
      <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className={`grid min-w-0 gap-6 p-4 transition-[grid-template-columns] duration-300 sm:p-6 lg:p-8 ${isCollapsed ? "lg:grid-cols-[88px_minmax(0,1fr)]" : "lg:grid-cols-[280px_minmax(0,1fr)]"}`}>
          <button
            aria-label="Open sidebar"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-sm transition hover:bg-slate-800 lg:hidden"
            onClick={() => setIsMobileOpen(true)}
            type="button"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Sidebar
            isCollapsed={isCollapsed}
            isMobileOpen={isMobileOpen}
            onToggleCollapse={() => setIsCollapsed((value) => !value)}
            onCloseMobile={() => setIsMobileOpen(false)}
          />

          <div className="min-w-0 space-y-6">
            <DashboardHeader />
            <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
              <div className="min-w-0 space-y-6">
                <RevenueCard />
                <MetricsGrid />
              </div>
              <RevenueChart />
            </div>
            <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
              <ActivityFeed />
              <RecentChannels />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
