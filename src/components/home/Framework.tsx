import { framework } from "../../data/mockStats";

export default function Framework() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {framework.map((item, idx) => (
        <div
          key={idx}
          className={`min-w-0 rounded-xl border border-slate-200 bg-white p-8 transition-all hover:shadow-lg ${item.color}`}
        >
          <h3 className="mb-3 break-words text-lg font-bold text-slate-900">{item.title}</h3>
          <p className="break-words text-sm leading-relaxed text-slate-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
