import { useState } from "react";
import { CATEGORIES } from "../data";

const SPEC_KEYS = [
  { key: "origin", label: "Origin", icon: "📍" },
  { key: "hs", label: "HS Code", icon: "🔢" },
  { key: "pack", label: "Packing", icon: "📦" },
  { key: "moq", label: "Min. Order", icon: "⚖️" },
];

export default function Products() {
  const [active, setActive] = useState(CATEGORIES[0].id);
  const cat = CATEGORIES.find((c) => c.id === active);

  return (
    <section id="products" className="relative bg-brand-50/60 py-20 lg:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">—what we trade</span>
          <h2 className="section-title">Three focused export verticals</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            We trade three things only — the ones our home region genuinely
            masters. Every listing includes origin, HS classification,
            packing format and minimum-order realities: the details serious
            buyers ask for first.
          </p>
        </div>

        {/* category tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setActive(c.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-[13px] font-semibold transition ${
                active === c.id
                  ? "border-accent-500 bg-accent-500 text-brand-950 shadow-md shadow-accent-500/25"
                  : "border-brand-200 bg-white text-brand-800 hover:border-brand-400"
              }`}
            >
              <span className="text-base">{c.emoji}</span>
              {c.label}
              <span
                className={`rounded-full px-1.5 text-[11px] font-bold ${
                  active === c.id ? "bg-brand-950/15" : "bg-brand-50 text-brand-500"
                }`}
              >
                {c.items.length}
              </span>
            </button>
          ))}
        </div>

        {/* banner */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-accent-500/30 bg-accent-500/10 px-5 py-4">
          <p className="text-sm font-semibold text-brand-900">
            {cat.emoji} {cat.blurb}
          </p>
          <span className="text-xs font-semibold text-brand-600">
            {cat.items.length} listings · {cat.tag}
          </span>
        </div>

        {/* product cards */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {cat.items.map((p) => (
            <article
              key={p.name}
              className="card group flex flex-col p-5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-2xl transition group-hover:scale-110 group-hover:bg-accent-500/10">
                  {p.emoji}
                </span>
                <span className="rounded-md bg-brand-950 px-2 py-1 text-[10px] font-bold tracking-wider text-accent-300">
                  HS {p.hs}
                </span>
              </div>

              <h3 className="mt-4 text-[15px] font-bold text-brand-950">{p.name}</h3>
              <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-slate-600">
                {p.desc}
              </p>

              {/* specs */}
              <dl className="mt-4 grid gap-1.5 border-t border-brand-100 pt-4 text-[12px]">
                {SPEC_KEYS.map((s) => (
                  <div key={s.key} className="flex items-start gap-2">
                    <span className="shrink-0 opacity-70">{s.icon}</span>
                    <dt className="w-16 shrink-0 font-semibold text-slate-400">{s.label}</dt>
                    <dd className="font-medium text-brand-900">{p[s.key]}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-[13px] text-slate-500">
          Need a spec not listed here? Sourced from the{" "}
          <a href="#sourcing" className="font-semibold text-brand-600 underline decoration-accent-400 underline-offset-2">
            chilli, turmeric, cumin & pepper mandis
          </a>{" "}
          of Telangana, AP, Gujarat and Kerala — or send us your spec sheet.
        </p>
      </div>
    </section>
  );
}
