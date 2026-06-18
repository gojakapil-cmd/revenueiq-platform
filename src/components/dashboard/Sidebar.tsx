import { dashboardSidebar, sidebarIconPaths } from "../../data/mockDashboard";

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
}

function SidebarIcon({ name }: { name: string }) {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      viewBox="0 0 24 24"
    >
      <path d={sidebarIconPaths[name] ?? sidebarIconPaths.grid} />
    </svg>
  );
}

export default function Sidebar({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onCloseMobile,
}: SidebarProps) {
  const sidebarContent = (
    <>
      <div className={`mb-8 ${isCollapsed ? "lg:text-center" : ""}`}>
        <div className={`flex items-center ${isCollapsed ? "lg:justify-center" : "justify-between"} gap-3`}>
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center justify-center rounded-2xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm">
              <span className="truncate">Analytics</span>
            </div>
          </div>
          <button
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-200 transition hover:bg-white/15 lg:inline-flex"
            onClick={onToggleCollapse}
            type="button"
          >
            <svg
              aria-hidden="true"
              className={`h-5 w-5 transition-transform ${isCollapsed ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>
      </div>
      <div className="space-y-2">
        {dashboardSidebar.map((item, idx) => (
          <button
            key={idx}
            title={item.label}
            className={`flex w-full min-w-0 items-center rounded-3xl px-4 py-3 text-left text-sm font-medium transition ${
              isCollapsed ? "lg:justify-center" : "justify-between gap-3"
            } ${
              item.active
                ? "bg-white/10 text-white shadow-inner"
                : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
            }`}
            type="button"
          >
            <span className="flex min-w-0 items-center gap-3">
              <SidebarIcon name={item.icon} />
              <span className={`min-w-0 truncate ${isCollapsed ? "lg:hidden" : ""}`}>{item.label}</span>
            </span>
            <span className={`shrink-0 text-slate-500 ${isCollapsed ? "lg:hidden" : ""}`}>›</span>
          </button>
        ))}
      </div>

      <div className={`mt-8 rounded-3xl border border-slate-800 bg-slate-900 p-5 text-sm text-slate-300 shadow-sm ${isCollapsed ? "lg:hidden" : ""}`}>
        <p className="truncate text-xs uppercase tracking-[0.2em] text-slate-400">Next review</p>
        <p className="mt-3 break-words text-lg font-semibold text-white">Daily creator pulse</p>
        <div className="mt-4 flex min-w-0 items-center justify-between gap-3 rounded-2xl bg-slate-950/80 px-4 py-3 text-sm">
          <span className="min-w-0 truncate">Agencies online</span>
          <span className="shrink-0 font-semibold text-white">18</span>
        </div>
      </div>
    </>
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/50 transition-opacity duration-300 lg:hidden ${
          isMobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onCloseMobile}
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[min(18rem,calc(100vw-2rem))] rounded-r-3xl border-r border-slate-800 bg-slate-950/95 p-6 text-slate-300 shadow-2xl transition-transform duration-300 lg:hidden ${
          isMobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between gap-3">
          <span className="min-w-0 truncate text-lg font-semibold text-white">Revenue IQ</span>
          <button
            aria-label="Close sidebar"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-slate-200 transition hover:bg-white/15"
            onClick={onCloseMobile}
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
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        {sidebarContent}
      </aside>

      <aside className={`hidden min-w-0 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950/95 p-6 text-slate-300 shadow-sm transition-all duration-300 lg:block ${isCollapsed ? "px-4" : ""}` }>
        {sidebarContent}
      </aside>
    </>
  );
}
