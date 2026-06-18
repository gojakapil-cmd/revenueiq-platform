import SearchBar from "@/components/common/SearchBar";

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

      <div className="mx-auto mb-16 max-w-2xl">
        <SearchBar />
      </div>
    </div>
  );
}
