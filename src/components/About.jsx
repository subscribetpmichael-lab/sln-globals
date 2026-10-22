import { COMPANY, WHY_US } from "../data";
import founderImg from "../assets/founder-sathwik.jpg";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-24">
      <div className="container-x">
        <div className="mx-auto w-full max-w-2xl">
          {/* founder spotlight */}
          <div className="overflow-hidden rounded-2xl bg-brand-950 dot-grid-dark">
            {/* full photo, never cropped */}
            <div className="bg-white">
              <img
                src={founderImg}
                alt="Omkaram Sathwik Raju — Proprietor & Founder"
                className="mx-auto max-w-[420px] w-full"
                loading="lazy"
              />
            </div>
            <div className="px-5 py-5">
              <p className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">
                Proprietor &amp; Founder
              </p>
              <h3 className="mt-1 font-display text-xl font-bold text-white">
                Omkaram Sathwik Raju
              </h3>
              <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[12px]">
                <dt className="font-semibold text-brand-100/50">Entity</dt>
                <dd className="font-semibold text-white">{COMPANY.name} · Proprietorship</dd>
                <dt className="font-semibold text-brand-100/50">GSTIN</dt>
                <dd className="font-semibold text-white">{COMPANY.gstin}</dd>
                <dt className="font-semibold text-brand-100/50">Office</dt>
                <dd className="font-semibold text-white">Parkal, Hanumakonda</dd>
              </dl>
            </div>
          </div>

          <h3 className="mt-8 text-sm font-bold tracking-[0.16em] text-slate-500 uppercase">
            Why start with us
          </h3>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {WHY_US.map((w) => (
              <div
                key={w.title}
                className="group card p-5 transition hover:-translate-y-0.5 hover:border-accent-400 hover:shadow-md"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-xl transition group-hover:bg-accent-500/15">
                  {w.icon}
                </span>
                <h4 className="mt-4 text-[15px] font-bold text-brand-950">
                  {w.title}
                </h4>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                  {w.desc}
                </p>
              </div>
            ))}
          </div>

          {/* promise banner */}
          <div className="mt-4 overflow-hidden rounded-2xl bg-brand-950 p-6 dot-grid-dark">
            <p className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">
              The founder's promise
            </p>
            <p className="mt-3 font-display text-lg leading-snug font-bold text-white">
              "We start small on purpose. Our name sits on every document we
              issue — so the standard is simple: never over-promise, and
              never let paper lag behind cargo."
            </p>
            <p className="mt-3 text-xs text-brand-100/60">
              — Sathwik, Proprietor · {COMPANY.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
