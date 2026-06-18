export default function DashboardHeader() {
  return (
    <div className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
      <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm uppercase tracking-[0.24em] text-slate-500">Overview</p>
          <h3 className="mt-3 break-words text-3xl font-semibold text-slate-900">Subscribed Creator Revenue</h3>
          <p className="mt-3 max-w-2xl break-words text-sm text-slate-600">
            The fastest way to benchmark YouTube creator revenue, RPM, audience shifts, and forecasted momentum.
          </p>
        </div>
        <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="min-w-0 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
            <span className="block truncate text-xs uppercase text-slate-500">Last update</span>
            5 min ago
          </div>
          <button className="inline-flex min-w-0 items-center justify-center rounded-3xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-700">
            <span className="truncate">Sync data</span>
          </button>
        </div>
      </div>

      <div className="mt-6 flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-500 text-white">🔎</span>
          <div className="min-w-0">
            <p className="truncate text-sm text-slate-500">Search creators</p>
            <p className="mt-2 break-words text-base font-semibold text-slate-900 sm:truncate">Search channel, topic, or vertical</p>
          </div>
        </div>
        <div className="flex min-w-0 flex-wrap items-center gap-3">
          <button className="inline-flex min-w-0 items-center justify-center rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
            <span className="truncate">Add alert</span>
          </button>
          <div className="inline-flex min-w-0 items-center gap-2 rounded-3xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-900 shadow-sm">
            <span className="shrink-0">🔔</span>
            <span className="truncate">Notifications</span>
          </div>
        </div>
      </div>
    </div>
  );
}
