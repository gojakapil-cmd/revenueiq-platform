import { dashboardMetrics } from "../../data/mockDashboard";

export default function MetricsGrid() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardMetrics.map((metric, idx) => (
        <div key={idx} className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-4">
          <p className="truncate text-xs uppercase tracking-[0.24em] text-slate-500">{metric.label}</p>
          <p className="mt-3 truncate text-2xl font-semibold text-slate-900">{metric.value}</p>
          <p className={`mt-2 truncate text-sm font-medium ${metric.deltaClass}`}>{metric.delta}</p>
        </div>
      ))}
    </div>
  );
}
