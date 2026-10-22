import { COMPANY } from "../data";
import heroBackdrop from "../assets/home-background.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-black pt-16 min-h-[80vh] lg:min-h-[90vh]"
    >
      {/* port backdrop — photo with a pan/zoom drift for a live-video feel */}
      <img
        src={heroBackdrop}
        alt=""
        aria-hidden="true"
        className="hero-drift absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* content centered mid-hero, Globistex-style */}
      <div className="container-x relative z-10 text-left">
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <span className="spin-slow text-lg text-accent-400" aria-hidden="true">
              ✳
            </span>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-white/85 sm:text-base">
              {COMPANY.name}
            </p>
          </div>

          <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:gap-6">
            <h1 className="font-display text-4xl leading-[1.06] font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
              From Indian Origin to Global Market
            </h1>
            <a
              href="#products"
              aria-label="Explore products"
              className="group flex shrink-0 items-center gap-3 rounded-full bg-accent-500 p-1.5 pl-6 transition hover:bg-accent-600"
            >
              <span className="font-display text-sm font-bold text-brand-950">
                Explore
              </span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-xl text-brand-950 transition group-hover:rotate-45">
                ↗
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
