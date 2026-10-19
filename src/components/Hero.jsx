import { COMPANY, STATS } from "../data";
import PHOTOS from "../photos";

const SHOWCASE = [
  {
    photo: PHOTOS.chilli,
    label: "Chillies",
    blurb: "Guntur S4, 35,000–40,000 SHU, ASTA 80+ lots",
  },
  {
    photo: PHOTOS.waterbottle,
    label: "Packaged Drinking Water",
    blurb: "Ozonated, private-label PET bottles & jars",
  },
  {
    photo: PHOTOS.medicine,
    label: "Pharmaceuticals",
    blurb: "WHO-GMP formulations from Hyderabad partners",
  },
];

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
          <span className="eyebrow-dark">🇮🇳 Welcome — Spices · Water · Pharma · Parkal, Telangana</span>
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
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary"
            >
              💬 Chat with us →
            </a>
            <a href="#products" className="btn-outline-dark">
              📦 Explore Products
            </a>
          </div>

          {/* mini stat chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "GSTIN 36OIFPS8030B1Z2",
              "Spices · Water · Pharma",
              "IEC approved",
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

        {/* right visual — product showcase (photo preview card) */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="anim-float rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-100/60 uppercase">
                What we export
              </span>
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                Launch-ready
              </span>
            </div>

            {/* product photo rows */}
            <div className="mt-4 grid gap-3">
              {SHOWCASE.map((s) => (
                <div
                  key={s.label}
                  className="flex items-center gap-3.5 rounded-2xl bg-white/[0.04] p-3 ring-1 ring-white/10 transition hover:bg-white/[0.07]"
                >
                  <img
                    src={s.photo}
                    alt={s.label}
                    className="h-14 w-20 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-bold text-white">{s.label}</p>
                    <p className="truncate text-[12px] text-brand-100/60">
                      {s.blurb}
                    </p>
                  </div>
                </div>
              ))}
            </div>

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
