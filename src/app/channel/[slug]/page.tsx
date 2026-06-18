import Navbar from "../../../components/layout/Navbar";
import {
  aiInsights,
  audienceDistribution,
  channel,
  growthTrend,
  nicheSignals,
  revenueBreakdown,
} from "../../../data/mockChannels";

interface ChannelPageProps {
  params: {
    slug: string;
  };
}

function MetricCard({ label, value, detail }: { label: string; value: string; detail?: string }) {
  return (
    <div className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{label}</p>
      <p className="mt-3 truncate text-3xl font-semibold text-slate-900">{value}</p>
      {detail ? <p className="mt-2 break-words text-sm text-slate-600">{detail}</p> : null}
    </div>
  );
}

function SectionCard({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <div className="min-w-0">
        <p className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{eyebrow}</p>
        <h2 className="mt-3 break-words text-2xl font-semibold text-slate-900">{title}</h2>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

export default function ChannelIntelligencePage({ params }: ChannelPageProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="px-6 py-10 md:py-14">
        <div className="mx-auto max-w-7xl space-y-10">
          <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/30 md:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="min-w-0 space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">Channel Intelligence</p>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{channel.name}</h1>
                <p className="max-w-3xl text-lg leading-8 text-slate-600">
                  AI-powered channel intelligence for {params.slug.replace(/-/g, " ")} with revenue, audience, niche, and growth insights.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Subscribers</p>
                  <p className="mt-4 text-2xl font-semibold text-slate-900">{channel.subscribers}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Total views</p>
                  <p className="mt-4 text-2xl font-semibold text-slate-900">{channel.totalViews}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Videos</p>
                  <p className="mt-4 text-2xl font-semibold text-slate-900">{channel.videos}</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Category</p>
                  <p className="mt-4 text-2xl font-semibold text-slate-900">{channel.category}</p>
                </div>
              </div>
            </div>
          </section>

          <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <SectionCard eyebrow="Revenue Intelligence" title="Estimated monetization range">
                <div className="grid min-w-0 gap-4 md:grid-cols-2">
                  <div className="rounded-3xl bg-gradient-to-br from-indigo-50 to-indigo-100 p-5 ring-1 ring-indigo-200">
                    <p className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-indigo-700">Estimated Revenue</p>
                    <p className="mt-4 truncate text-4xl font-semibold text-indigo-700">{channel.estimatedRevenue}</p>
                    <p className="mt-3 text-sm text-indigo-900/70">
                      Monthly revenue estimate based on views, RPM, geography, engagement, and sponsorship signals.
                    </p>
                  </div>

                  <div className="rounded-3xl bg-slate-950/95 p-5 text-white">
                    <p className="truncate text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Confidence Score</p>
                    <p className="mt-4 truncate text-4xl font-semibold text-emerald-300">{channel.confidenceScore}</p>
                    <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[92%] rounded-full bg-emerald-400" />
                    </div>
                  </div>
                </div>
              </SectionCard>

              <SectionCard eyebrow="Audience Distribution" title="Where the audience is concentrated">
                <div className="space-y-4">
                  {audienceDistribution.map((item) => (
                    <div key={item.label} className="min-w-0">
                      <div className="mb-2 flex min-w-0 items-center justify-between gap-4 text-sm">
                        <span className="truncate font-medium text-slate-700">{item.label}</span>
                        <span className="font-semibold text-slate-900">{item.value}</span>
                      </div>
                      <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                        <div className={`${item.color} ${item.width} h-full rounded-full`} />
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard eyebrow="Growth Trend" title="Six-month performance momentum">
                <div className="min-w-0 overflow-x-auto">
                  <table className="min-w-[620px] table-fixed text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 text-slate-500">
                        <th className="w-1/3 pb-3 pr-4 font-semibold">Month</th>
                        <th className="w-1/3 pb-3 pr-4 font-semibold">Views</th>
                        <th className="w-1/3 pb-3 font-semibold">Growth</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {growthTrend.map((item) => (
                        <tr key={item.month}>
                          <td className="py-4 pr-4 font-semibold text-slate-900">{item.month}</td>
                          <td className="py-4 pr-4 text-slate-600">{item.views}</td>
                          <td className="py-4 font-semibold text-emerald-600">{item.growth}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-6 overflow-hidden rounded-[28px] bg-slate-950/95 p-4">
                  <svg viewBox="0 0 720 220" className="h-56 w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 0 160 C 120 160 180 80 260 90 C 340 100 400 50 480 70 C 560 90 620 40 720 25" stroke="#6366f1" strokeWidth="6" strokeLinecap="round" fill="none" />
                    <path d="M 0 165 C 120 165 180 95 260 105 C 340 115 400 60 480 85 C 560 110 620 50 720 30" stroke="#818cf8" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <circle cx="0" cy="160" r="6" fill="#a5b4fc" />
                    <circle cx="260" cy="105" r="6" fill="#a5b4fc" />
                    <circle cx="480" cy="85" r="6" fill="#a5b4fc" />
                    <circle cx="720" cy="30" r="6" fill="#a5b4fc" />
                  </svg>
                </div>
              </SectionCard>
            </div>

            <div className="space-y-6">
              <SectionCard eyebrow="Niche Detection" title="Channel intelligence summary">
                <div className="grid gap-4 sm:grid-cols-2">
                  {nicheSignals.map((signal) => (
                    <div key={signal.label} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <h3 className="text-sm font-semibold text-slate-900">{signal.label}</h3>
                      <p className="mt-2 text-sm text-slate-600">{signal.value}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>

              <SectionCard eyebrow="AI Insights" title="Signals from the intelligence engine">
                <div className="space-y-4">
                  {aiInsights.map((insight, idx) => (
                    <p key={idx} className="break-words text-sm leading-relaxed text-slate-600">{insight}</p>
                  ))}
                </div>
              </SectionCard>

              <SectionCard eyebrow="Revenue Breakdown" title="Estimated income sources">
                <div className="space-y-4">
                  {revenueBreakdown.map((item) => (
                    <div key={item.source} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                      <div className="flex items-center justify-between gap-4 text-sm text-slate-600">
                        <span>{item.source}</span>
                        <span className="font-semibold text-slate-900">{item.share}</span>
                      </div>
                      <p className="mt-2 text-base font-semibold text-slate-900">{item.value}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
