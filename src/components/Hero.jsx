import { COMPANY, STATS } from "../data";
import PHOTOS from "../photos";

const SHOWCASE = [
  { photo: PHOTOS.chilli, label: "Chillies" },
  { photo: PHOTOS.waterbottle, label: "Packaged Drinking Water" },
  { photo: PHOTOS.medicine, label: "Pharmaceuticals" },
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
          <span className="eyebrow-dark">Welcome</span>
          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-5xl xl:text-[3.4rem]">
            {COMPANY.name}
            <span className="mt-2 block text-accent-400">
              Foreign Export House
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-brand-100/80">
            Exporting Indian <strong className="font-semibold text-brand-100">spices</strong>,{" "}
            <strong className="font-semibold text-brand-100">packaged drinking water</strong>{" "}
            and <strong className="font-semibold text-brand-100">pharmaceuticals</strong> to
            the world — launching commercially on{" "}
            <span className="font-semibold text-accent-300">20 October 2026</span>{" "}
            with compliance-first documentation and honest lead times.
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
              `GSTIN ${COMPANY.gstin}`,
              "IEC approved",
              "WHO-GMP partner plants",
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

        {/* right visual — shipping photo + what we export */}
        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="anim-float overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl backdrop-blur-sm">
            <div className="relative">
              <img
                src={PHOTOS.shipping}
                alt="Container ship being loaded — SLN GLOBALS export sailings"
                className="h-52 w-full object-cover sm:h-60"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full bg-brand-950/70 px-3 py-1.5 text-[11px] font-semibold text-accent-300 ring-1 ring-white/15 backdrop-blur">
                Sea, air &amp; land — FCL · LCL · air freight
              </span>
            </div>

            {/* what we export — photo rows */}
            <div className="grid gap-3 p-5">
              <span className="text-[11px] font-semibold tracking-[0.2em] text-brand-100/60 uppercase">
                What we export
              </span>
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
                  <p className="text-[13.5px] font-bold text-white">{s.label}</p>
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
