export default function Hero() {
  return (
    <div className="text-center mb-16">
      <div className="mb-4 inline-block max-w-full rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1">
        <span className="block truncate text-sm font-medium text-indigo-600">Powered by Advanced AI</span>
      </div>
      <h1 className="break-words text-5xl font-bold leading-tight text-slate-900 mb-6 md:text-6xl lg:text-7xl">
        Understand Any YouTube Channel&apos;s Revenue Potential
      </h1>
      <p className="mx-auto mb-12 max-w-3xl break-words text-xl leading-relaxed text-slate-600 md:text-2xl">
        AI-powered revenue intelligence, audience insights, and growth analytics for content creators.
      </p>

      <div className="mx-auto mb-16 flex max-w-2xl min-w-0 flex-col gap-3 sm:flex-row">
        <input
          type="text"
          placeholder="Search a YouTube channel..."
          className="min-w-0 flex-1 rounded-xl border border-slate-300 px-6 py-4 text-base text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button className="min-w-0 rounded-xl bg-indigo-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-indigo-700 hover:shadow-xl sm:whitespace-nowrap">
          <span className="truncate">Analyze Channel</span>
        </button>
      </div>
    </div>
  );
}
