export default function RevenueChart() {
  return (
    <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          <p className="truncate text-sm uppercase tracking-[0.24em] text-slate-500">Revenue Trend</p>
          <h3 className="mt-3 break-words text-2xl font-semibold text-slate-900">Channel momentum</h3>
        </div>
        <div className="shrink-0 rounded-3xl bg-emerald-50 px-3 py-2 text-sm font-semibold text-emerald-700">
          +18% vs last period
        </div>
      </div>

      <div className="mt-6 min-w-0 overflow-hidden rounded-[28px] bg-slate-950/95 p-4">
        <svg viewBox="0 0 720 220" className="h-64 w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 160 C 120 160 180 80 260 90 C 340 100 400 50 480 70 C 560 90 620 40 720 25" stroke="#6366f1" strokeWidth="6" strokeLinecap="round" fill="none" />
          <path d="M 0 165 C 120 165 180 95 260 105 C 340 115 400 60 480 85 C 560 110 620 50 720 30" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" fill="none" />
          <circle cx="0" cy="160" r="6" fill="#a5b4fc" />
          <circle cx="260" cy="105" r="6" fill="#a5b4fc" />
          <circle cx="480" cy="85" r="6" fill="#a5b4fc" />
          <circle cx="720" cy="30" r="6" fill="#a5b4fc" />
        </svg>

        <div className="mt-6 grid min-w-0 grid-cols-3 gap-4 text-sm text-slate-400">
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">Views</p>
            <p className="mt-1 truncate">1.2M</p>
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">RPM</p>
            <p className="mt-1 truncate">$8.4</p>
          </div>
          <div className="min-w-0">
            <p className="truncate font-semibold text-slate-900">Audience</p>
            <p className="mt-1 truncate">420K</p>
          </div>
        </div>
      </div>
    </div>
  );
}
