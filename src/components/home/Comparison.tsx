import { comparisonData } from "../../data/mockStats";

export default function Comparison() {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="min-w-0 overflow-x-auto">
        <table className="min-w-[620px] table-fixed">
          <thead>
            <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
              <th className="w-[40%] px-8 py-6 text-left text-base font-bold">
                <span className="block truncate">Feature</span>
              </th>
              <th className="w-[30%] px-8 py-6 text-center text-base font-bold">
                <span className="block truncate">Traditional Analytics Platforms</span>
              </th>
              <th className="w-[30%] px-8 py-6 text-center text-base font-bold">
                <span className="block truncate">RevenueIQ</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, idx) => (
              <tr
                key={idx}
                className={`border-b border-slate-200 hover:bg-indigo-50 transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <td className="px-8 py-6 font-semibold text-slate-900">
                  <span className="block truncate">{row.feature}</span>
                </td>
                <td className="px-8 py-6 text-center text-slate-600">
                  <span className="block truncate">{row.traditionalAnalytics}</span>
                </td>
                <td className="px-8 py-6 text-center">
                  <span className="inline-block max-w-full truncate rounded-lg bg-indigo-100 px-4 py-2 font-bold text-indigo-700">
                    {row.revenueIQ}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
