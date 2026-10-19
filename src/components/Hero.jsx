import { COMPANY, STATS } from "../data";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-950 pt-16">
      {/* backdrop layers */}
      <div className="dot-grid-dark absolute inset-0" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-brand-600/30 blur-[120px]" />
      <div className="pointer-events-none absolute right-[-120px] bottom-[-80px] h-[360px] w-[480px] rounded-full bg-accent-500/10 blur-[110px]" />

      <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        {/* left copy */}
        <div>
          <span className="eyebrow-dark">🇮🇳 Spices · Water · Pharma — Parkal, Telangana</span>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl xl:text-[3.4rem]">
            From Indian Origins<br />
            to{" "}
            <span className="relative inline-block text-accent-400">
              Global Markets
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 220 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 9c40-6 120-8 214-3"
                  stroke="#f59e0b"
                  strokeWidth="4"
                  strokeLinecap="round"
                  opacity="0.65"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-brand-100/80">
            {COMPANY.tagline} Launching commercially on{" "}
            <span className="font-semibold text-accent-300">20 October 2026</span>,
            we export Indian spices (chilli, turmeric and more), packaged
            drinking water and pharmaceutical products from the Deccan
            corridor — with compliance-first documentation and honest lead
            times for buyers in 40+ target markets.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-primary">
              Request a Quote →
            </a>
            <a href="#sourcing" className="btn-outline-dark">
              🗺️ Explore Sourcing Map
            </a>
          </div>

          {/* mini stat chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "GSTIN 36OIFPS8030B1Z2",
              "Spices · Water · Pharma",
              "IEC in process",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-100/80"
              >
                ✓ {t}
              </span>
            ))}
          </div>
        </div>

        {/* right visual — stylised globe card */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="anim-float rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-100/60 uppercase">
                Live trade routes
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Gateway active
              </span>
            </div>

            <svg viewBox="0 0 400 300" className="mt-2 w-full">
              {/* dotted globe */}
              {Array.from({ length: 11 }).map((_, r) =>
                Array.from({ length: 16 }).map((_, c) => {
                  const dx = c - 7.5;
                  const dy = r - 5;
                  const d = Math.sqrt(dx * dx + dy * dy);
                  if (d > 5.4) return null;
                  return (
                    <circle
                      key={`${r}-${c}`}
                      cx={40 + c * 22}
                      cy={55 + r * 22}
                      r={d > 4.6 ? 1 : 1.7}
                      fill={d > 4.6 ? "rgba(148,190,235,0.25)" : "rgba(148,190,235,0.55)"}
                    />
                  );
                })
              )}
              {/* hub + routes */}
              <g>
                <circle cx="120" cy="170" r="6" fill="#f59e0b" />
                <circle cx="120" cy="170" r="12" fill="#f59e0b" opacity="0.25" />
                <path d="M120 170 Q 200 90 300 120" stroke="#5484bd" strokeWidth="1.6" fill="none" strokeDasharray="5 6" />
                <path d="M120 170 Q 210 150 310 205" stroke="#5484bd" strokeWidth="1.6" fill="none" strokeDasharray="5 6" />
                <path d="M120 170 Q 190 230 290 260" stroke="#5484bd" strokeWidth="1.6" fill="none" strokeDasharray="5 6" />
                <circle cx="300" cy="120" r="4" fill="#34d399" />
                <circle cx="310" cy="205" r="4" fill="#34d399" />
                <circle cx="290" cy="260" r="4" fill="#34d399" />
                <text x="304" y="112" fontSize="13" fill="#fff">🇺🇸</text>
                <text x="314" y="200" fontSize="13" fill="#fff">🇦🇪</text>
                <text x="294" y="256" fontSize="13" fill="#fff">🇦🇺</text>
              </g>
            </svg>

            {/* ticker rows */}
            <div className="mt-2 grid gap-2 border-t border-white/10 pt-4 text-[12.5px]">
              {[
                ["🌶️", "Chilli S4 lots, first bookings open", "Jebel Ali — 5–7 days"],
                ["🟡", "Turmeric program lots", "Southeast Asia — 12–15 days"],
                ["💧", "Bottled-water pallets (private label)", "GCC retail — sea & air"],
              ].map(([i, a, b]) => (
                <div
                  key={a}
                  className="flex items-center justify-between gap-3 rounded-lg bg-white/[0.03] px-3 py-2"
                >
                  <span className="flex items-center gap-2 font-medium text-brand-100/85">
                    <span>{i}</span>
                    {a}
                  </span>
                  <span className="shrink-0 font-semibold text-accent-300">{b}</span>
                </div>
              ))}
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -bottom-5 -left-4 rounded-2xl border border-white/10 bg-brand-900 px-4 py-3 shadow-xl sm:-left-8">
            <p className="font-display text-2xl font-extrabold text-accent-400">20 Oct</p>
            <p className="text-[11px] font-medium text-brand-100/70">Commercial launch, 2026</p>
          </div>
        </div>
      </div>

      {/* stats strip */}
      <div className="relative border-t border-white/10 bg-brand-950/60">
        <div className="container-x grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-display text-3xl font-extrabold text-white">
                {s.value}
              </p>
              <p className="mt-1 text-xs leading-snug text-brand-100/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
