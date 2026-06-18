export default function Footer() {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-400 border-t border-slate-800 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-base">R</span>
              </div>
              <span className="text-2xl font-bold text-white">RevenueIQ</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              AI-powered revenue intelligence platform for YouTube creators, analysts, and content strategists.
            </p>
            <div className="flex gap-4">
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 transition text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20v-7.21H5.33V9.25h2.96V7.69c0-2.92 1.78-4.51 4.39-4.51 1.25 0 2.32.09 2.63.13v3.05h-1.81c-1.42 0-1.69.67-1.69 1.66V9.25h3.39l-.44 3.54h-2.95V20h-3.45z" />
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 transition text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7z" />
                </svg>
              </a>
              <a href="#" className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-indigo-600 transition text-slate-400 hover:text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Dashboard</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">API</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wide">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Cookies</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Compliance</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <p className="text-slate-500">© {new Date().getFullYear()} RevenueIQ Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-6 md:mt-0 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition">Status</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Security</a>
              <a href="#" className="text-slate-400 hover:text-white transition">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
