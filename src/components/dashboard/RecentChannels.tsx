import { recentChannels } from "../../data/mockDashboard";

export default function RecentChannels() {
  return (
    <div className="min-w-0 rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-6">
      <div className="mb-6 flex min-w-0 flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <h3 className="break-words text-xl font-semibold text-slate-900">Recent Channels</h3>
          <p className="break-words text-sm text-slate-600">Latest analyzed channels with performance snapshot.</p>
        </div>
        <button className="inline-flex min-w-0 items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100">
          <span className="truncate">View All Channels</span>
        </button>
      </div>
      <div className="min-w-0 overflow-x-auto">
        <table className="min-w-[560px] table-fixed text-left text-sm text-slate-600">
          <thead>
            <tr>
              <th className="w-[32%] border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">
                <span className="block truncate">Channel</span>
              </th>
              <th className="w-[20%] border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">
                <span className="block truncate">Category</span>
              </th>
              <th className="w-[18%] border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">
                <span className="block truncate">Revenue</span>
              </th>
              <th className="w-[15%] border-b border-slate-200 pb-3 pr-4 font-semibold text-slate-900">
                <span className="block truncate">Growth</span>
              </th>
              <th className="w-[15%] border-b border-slate-200 pb-3 font-semibold text-slate-900">
                <span className="block truncate">Confidence</span>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {recentChannels.map((channel, idx) => (
              <tr key={idx} className="hover:bg-white">
                <td className="py-4 pr-4 font-medium text-slate-900">
                  <span className="block truncate">{channel.name}</span>
                </td>
                <td className="py-4 pr-4">
                  <span className="block truncate">{channel.category}</span>
                </td>
                <td className="py-4 pr-4 font-semibold text-slate-900">
                  <span className="block truncate">{channel.revenue}</span>
                </td>
                <td className="py-4 pr-4 text-emerald-600">
                  <span className="block truncate">{channel.growth}</span>
                </td>
                <td className="py-4 text-slate-500">
                  <span className="block truncate">{channel.confidence}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
