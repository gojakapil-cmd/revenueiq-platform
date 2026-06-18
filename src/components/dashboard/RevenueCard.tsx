export default function RevenueCard() {
  return (
    <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm uppercase tracking-[0.24em] text-slate-500">Revenue Performance</p>
          <h2 className="mt-3 break-words text-4xl font-semibold text-slate-900">$96.7K</h2>
          <p className="mt-2 break-words text-sm text-slate-600">Forecasted revenue for the current 28-day cycle.</p>
        </div>
        <div className="min-w-0 rounded-3xl bg-slate-950/95 px-5 py-4 text-sm text-slate-200 shadow-sm">
          <p className="truncate text-xs uppercase tracking-[0.2em] text-slate-400">Change</p>
          <p className="mt-2 truncate text-2xl font-semibold text-emerald-400">+21.4%</p>
        </div>
      </div>
    </div>
  );
}
