import { COMPANY, STATS } from "../data";
import PHOTOS from "../photos";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-brand-950 pt-16">
      {/* full-bleed shipping photo background */}
      <div className="absolute inset-0">
        <img
          src={PHOTOS.shipping}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-950/90 via-brand-950/80 to-brand-950/95" />
      </div>

      {/* minimal hero — name + tagline only, Globistix-style */}
      <div className="container-x relative flex flex-col items-center justify-center gap-6 py-32 text-center sm:py-40 lg:py-48">
        <h1 className="font-display text-4xl leading-[1.08] font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
          {COMPANY.name}
        </h1>
        <p className="max-w-xl font-display text-lg font-semibold text-accent-400 sm:text-2xl">
          From Indian Origin to Global Markets
        </p>
        <a
          href="#products"
          aria-label="Scroll to products"
          className="mt-4 grid h-12 w-12 animate-bounce place-items-center rounded-full border border-white/25 bg-white/10 text-xl text-white backdrop-blur transition hover:bg-white/20"
        >
          ↓
        </a>
      </div>

      {/* stats strip (Globistix stat-card motif) */}
      <div className="relative border-t border-white/10 bg-brand-950/60">
        <div className="container-x grid grid-cols-3 gap-6 py-8">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
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
