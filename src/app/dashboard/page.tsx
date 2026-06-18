"use client";

import Navbar from "../../components/layout/Navbar";
import DashboardPreview from "../../components/dashboard/DashboardPreview";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main className="px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <DashboardPreview />
        </div>
      </main>
    </div>
  );
}
