import { CATEGORIES } from "../data";
import PHOTOS from "../photos";

const CAT_COLOR = {
  spices: { chip: "bg-red-100 text-red-700" },
  water: { chip: "bg-sky-100 text-sky-700" },
  pharma: { chip: "bg-violet-100 text-violet-700" },
};

export default function Products() {
  const items = CATEGORIES.flatMap((c) =>
    c.items.map((p) => ({ ...p, catLabel: c.label, catId: c.id })),
  );

  return (
    <section id="products" className="relative bg-brand-50/60 py-20 lg:py-24">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="eyebrow">—what we trade</span>
          <h2 className="section-title">Our Products</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            Everything we ship is sampled, tested and export-ready — from
            Indian farms and certified plants to international markets.
          </p>
        </div>

        {/* single SVK-style product grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {items.map((p) => (
            <article
              key={p.id}
              className="card group flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* photo */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={PHOTOS[p.photo]}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span
                  className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[10px] font-bold ring-1 ring-black/5 backdrop-blur ${
                    CAT_COLOR[p.catId].chip
                  }`}
                >
                  {p.catLabel}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h4 className="text-[15px] font-bold text-brand-950">{p.name}</h4>
                <p className="mt-2 flex-1 text-[12.5px] leading-relaxed text-slate-600">
                  {p.desc}
                </p>
                <p className="mt-4 border-t border-brand-100 pt-3 text-[11.5px] font-medium text-slate-500">
                  📦 {p.pack} · ⚖️ MOQ {p.moq}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-[13px] text-slate-500">
          Looking for a specific grade or packing format?{" "}
          <a
            href="#contact"
            className="font-semibold text-brand-600 underline decoration-accent-400 underline-offset-2"
          >
            The trade desk replies within one working day
          </a>
          .
        </p>
      </div>
    </section>
  );
}
