import { PROCESS } from "../data";

export default function Process() {
  return (
    <section id="process" className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">—how we ship</span>
          <h2 className="section-title">From enquiry to doorstep, in 6 steps</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
            A transparent operating rhythm refined over 1,200+ containers.
            You always know what's happening, with which document, and when.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className="card relative overflow-hidden p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* step watermark */}
              <span className="pointer-events-none absolute -top-3 right-2 font-display text-[80px] leading-none font-extrabold text-brand-50 select-none">
                {p.step}
              </span>

              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-accent-500/12 text-2xl">
                {p.icon}
              </span>
              <h3 className="relative mt-5 text-[15px] font-bold text-brand-950">
                {p.title}
              </h3>
              <p className="relative mt-2 text-[13px] leading-relaxed text-slate-600">
                {p.desc}
              </p>

              {i < PROCESS.length - 1 && (
                <span className="relative mt-4 inline-flex items-center gap-1 text-[11px] font-bold tracking-wider text-accent-600 uppercase">
                  → step {String(i + 2).padStart(2, "0")}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
