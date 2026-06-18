"use client";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Features from "../components/home/Features";
import Framework from "../components/home/Framework";
import Comparison from "../components/home/Comparison";
import DashboardPreview from "../components/dashboard/DashboardPreview";
import { steps } from "../data/mockStats";
import { trendingChannels } from "../data/mockChannels";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main>
        <section className="bg-white py-20 md:py-28 border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <Hero />
            <DashboardPreview />
          </div>
        </section>

        <section className="bg-slate-50 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <Stats />
          </div>
        </section>

        <section id="features" className="bg-white py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Powerful Features for Deep Analysis
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to make informed decisions about YouTube channels and creators.
              </p>
            </div>
            <Features />
          </div>
        </section>

        <section className="bg-slate-50 py-20 md:py-28 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                How RevenueIQ Works
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Our intelligent 4-step process analyzes any YouTube channel in seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, idx) => (
                <div key={idx} className="relative min-w-0">
                  <div className="h-full min-w-0 rounded-xl border border-slate-200 bg-white p-8 transition-all hover:shadow-xl">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 font-bold text-lg mb-6">
                      {step.number}
                    </div>
                    <h3 className="mb-3 break-words text-xl font-bold text-slate-900">{step.title}</h3>
                    <p className="break-words text-sm leading-relaxed text-slate-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Our Trusted Revenue Framework
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Five core pillars that power accurate revenue intelligence.
              </p>
            </div>
            <Framework />
          </div>
        </section>

        <section id="comparison" className="bg-white py-20 md:py-28 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Why Choose RevenueIQ?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                See how we compare to other analytics platforms in the market.
              </p>
            </div>
            <Comparison />
          </div>
        </section>

        <section id="trending" className="bg-slate-50 py-20 md:py-28 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Top Trending Channels
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Real-time analysis of the fastest-growing channels powering creator economy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingChannels.map((channel, idx) => (
                <div
                  key={idx}
                  className="group min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-indigo-300 hover:shadow-xl"
                >
                  <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-4 text-white">
                    <div className="mb-2 flex min-w-0 items-start justify-between gap-3">
                      <h3 className="min-w-0 truncate text-lg font-bold">{channel.name}</h3>
                      <span className="inline-block max-w-[45%] shrink-0 truncate rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                        {channel.category}
                      </span>
                    </div>
                    <p className="truncate text-sm text-slate-300">{channel.subscribers} subscribers</p>
                  </div>

                  <div className="p-6 space-y-6">
                    <div className="min-w-0 rounded-lg border border-indigo-200 bg-gradient-to-br from-indigo-50 to-indigo-100 p-4">
                      <p className="mb-2 truncate text-xs font-semibold uppercase tracking-wide text-indigo-700">Est. Monthly Revenue</p>
                      <p className="truncate text-2xl font-bold text-indigo-600">{channel.estimatedRevenue}</p>
                    </div>

                    <div className="grid min-w-0 grid-cols-3 gap-3 sm:gap-4">
                      <div className="min-w-0 rounded-lg border border-emerald-200 bg-emerald-50 p-3">
                        <p className="mb-1 truncate text-xs font-semibold uppercase tracking-wide text-emerald-700">Growth</p>
                        <p className="truncate text-lg font-bold text-emerald-600">{channel.growth}</p>
                      </div>
                      <div className="min-w-0 rounded-lg border border-blue-200 bg-blue-50 p-3">
                        <p className="mb-1 truncate text-xs font-semibold uppercase tracking-wide text-blue-700">Confidence</p>
                        <p className="truncate text-lg font-bold text-blue-600">{channel.confidence}</p>
                      </div>
                      <div className="min-w-0 rounded-lg border border-amber-200 bg-amber-50 p-3">
                        <p className="mb-1 truncate text-xs font-semibold uppercase tracking-wide text-amber-700">Status</p>
                        <p className="truncate text-lg font-bold text-amber-600">Rising</p>
                      </div>
                    </div>

                    <button className="w-full min-w-0 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-700">
                      <span className="truncate">View Details</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
