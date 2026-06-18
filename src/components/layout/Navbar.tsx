export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="text-xl font-bold text-slate-900">RevenueIQ</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900 transition">
            Features
          </a>
          <a href="#comparison" className="text-slate-600 hover:text-slate-900 transition">
            Dashboard
          </a>
          <a href="#trending" className="text-slate-600 hover:text-slate-900 transition">
            Pricing
          </a>
          <a href="#footer" className="text-slate-600 hover:text-slate-900 transition">
            About
          </a>
        </div>

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
          Get Started
        </button>
      </nav>
    </header>
  );
}
