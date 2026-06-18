import { recentActivity } from "../../data/mockDashboard";

export default function ActivityFeed() {
  return (
    <div className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
      <div className="flex min-w-0 items-center justify-between gap-4">
        <div className="min-w-0">
          <p className="truncate text-sm uppercase tracking-[0.24em] text-slate-500">Activity</p>
          <h3 className="mt-3 break-words text-2xl font-semibold text-slate-900">Latest updates</h3>
        </div>
        <button className="inline-flex shrink-0 items-center justify-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200">
          See all
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {recentActivity.map((item, idx) => (
          <div key={idx} className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-4">
            <div className="flex min-w-0 items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 break-words text-sm text-slate-600">{item.description}</p>
              </div>
              <span className="shrink-0 whitespace-nowrap text-sm text-slate-500">{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
