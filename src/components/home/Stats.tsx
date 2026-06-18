import { stats } from "../../data/mockStats";

export default function Stats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="group min-w-0 rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl"
        >
          <div className="mb-4 flex min-w-0 items-start justify-between gap-3">
            <p className="min-w-0 break-words text-sm font-medium uppercase tracking-wide text-slate-600">
              {stat.label}
            </p>
            <div
              className={`inline-flex shrink-0 items-center gap-1 rounded-md px-2 py-1 ${
                stat.trendDirection === "up"
                  ? "bg-emerald-50 text-emerald-600"
                  : "bg-red-50 text-red-600"
              }`}
            >
              <svg
                className={`w-4 h-4 ${
                  stat.trendDirection === "up"
                    ? "transform rotate-0"
                    : "transform rotate-180"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" />
              </svg>
              <span className="text-xs font-semibold">{stat.trendValue}</span>
            </div>
          </div>
          <p className="mb-3 truncate text-4xl font-bold text-slate-900 md:text-5xl">{stat.value}</p>
          <p className="break-words text-sm text-slate-500">{stat.trend}</p>
        </div>
      ))}
    </div>
  );
}
