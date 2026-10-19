import { CATEGORIES } from "../data";
import ProductArt from "./ProductArt";

const SPEC_KEYS = [
  { key: "origin", label: "Origin", icon: "📍" },
  { key: "hs", label: "HS Code", icon: "🔢" },
  { key: "pack", label: "Packing", icon: "📦" },
  { key: "moq", label: "Min. Order", icon: "⚖️" },
];

export default function Products() {
  return (
    <section id="products" className="relative bg-brand-50/60 py-20 lg:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">—what we trade</span>
          <h2 className="section-title">Three focused export verticals</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            We trade three things only — the ones our home region genuinely
            masters. Each vertical gets its own full section below, with
            origin, HS classification, packing format and minimum-order
            realities on every listing.
          </p>
        </div>

        {/* category jump chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-2.5 text-[13px] font-semibold text-brand-800 transition hover:border-brand-400 hover:shadow-sm"
            >
              <span className="text-base">{c.emoji}</span>
              {c.label}
              <span className="rounded-full bg-brand-50 px-1.5 text-[11px] font-bold text-brand-500">
                {c.items.length}
              </span>
            </a>
          ))}
        </div>

        {/* one separate, full-width section per category */}
        {CATEGORIES.map((cat, ci) => (
          <div
            key={cat.id}
            id={cat.id}
            className="mt-12 scroll-mt-24 first:mt-10"
          >
            {/* category header band */}
            <div
              className={`relative overflow-hidden rounded-3xl p-6 text-white sm:p-8 ${
                ci === 0
                  ? "bg-gradient-to-br from-brand-950 via-brand-900 to-red-950"
                  : ci === 1
                    ? "bg-gradient-to-br from-brand-950 via-sky-950 to-teal-950"
                    : "bg-gradient-to-br from-brand-950 via-indigo-950 to-violet-950"
              } dot-grid-dark`}
            >
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">
                    vertical {ci + 1} of 3
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
                    {cat.emoji} {cat.label}
                  </h3>
                  <p className="mt-2 max-w-xl text-[13.5px] leading-relaxed text-brand-100/80">
                    {cat.blurb}
                  </p>
                </div>
                <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-accent-300 ring-1 ring-white/15">
                  {cat.items.length} listings · {cat.tag}
                </span>
              </div>
            </div>

            {/* product cards with illustrated headers */}
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cat.items.map((p) => (
                <article
                  key={p.name}
                  className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
                >
                  {/* illustrated header */}
                  <div className="relative">
                    <ProductArt
                      art={p.art}
                      category={cat.id}
                      className="transition duration-300 group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 grid h-9 w-9 place-items-center rounded-xl bg-white/90 text-lg shadow-sm backdrop-blur">
                      {p.emoji}
                    </span>
                    <span className="absolute top-3 right-3 rounded-md bg-brand-950/85 px-2 py-1 text-[10px] font-bold tracking-wider text-accent-300 backdrop-blur">
                      HS {p.hs}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h4 className="text-[15px] font-bold text-brand-950">
                      {p.name}
                    </h4>
                    <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-slate-600">
                      {p.desc}
                    </p>

                    {/* specs */}
                    <dl className="mt-4 grid gap-1.5 border-t border-brand-100 pt-4 text-[12px]">
                      {SPEC_KEYS.map((s) => (
                        <div key={s.key} className="flex items-start gap-2">
                          <span className="shrink-0 opacity-70">{s.icon}</span>
                          <dt className="w-16 shrink-0 font-semibold text-slate-400">
                            {s.label}
                          </dt>
                          <dd className="font-medium text-brand-900">
                            {p[s.key]}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </article>
              ))}
            </div>

            {/* closing line per vertical */}
            <p className="mt-4 text-center text-[12.5px] text-slate-500">
              Request a full spec sheet, samples or FOB pricing for this
              vertical →{" "}
              <a
                href="#contact"
                className="font-semibold text-brand-600 underline decoration-accent-400 underline-offset-2"
              >
                enquire
              </a>
            </p>
          </div>
        ))}

        <p className="mt-10 text-center text-[13px] text-slate-500">
          Need a spec not listed here? Sourced from the{" "}
          <a
            href="#sourcing"
            className="font-semibold text-brand-600 underline decoration-accent-400 underline-offset-2"
          >
            chilli, turmeric, cumin &amp; pepper mandis
          </a>{" "}
          of Telangana, AP, Gujarat and Kerala — or send us your spec sheet.
        </p>
      </div>
    </section>
  );
}
