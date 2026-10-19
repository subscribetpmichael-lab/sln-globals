import { COMPANY, WHY_US } from "../data";
import founderImg from "../assets/founder-sathwik.jpg";

export default function About() {
  return (
    <section id="about" className="relative bg-white py-20 lg:py-24">
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* left: story */}
          <div>
            <span className="eyebrow">—who we are</span>
            <h2 className="section-title">
              A new export house, born in the <span className="text-accent-600">Deccan spice belt</span>
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-slate-600">
              <strong className="text-brand-950">{COMPANY.name}</strong> is a
              proprietorship trading house founded by{" "}
              <strong className="text-brand-950">Omkaram Sathwik Raju</strong>{" "}
              ("Sathwik"), opening for commercial trade on{" "}
              <strong className="text-brand-950">20 October 2026</strong> from
              Parkal in Hanumakonda district, Telangana — a short drive from
              India's chilli and turmeric mandis and the Hyderabad pharma
              corridor.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              We deliberately narrow our field to three verticals where our
              home region holds real, defensible advantage:{" "}
              <span className="font-semibold text-brand-800">Indian spices</span>{" "}
              (chilli, turmeric and condiment lots),{" "}
              <span className="font-semibold text-brand-800">packaged drinking water</span>{" "}
              for private-label retail, hospitality and aviation buyers, and{" "}
              <span className="font-semibold text-brand-800">pharmaceutical products</span>{" "}
              routed through WHO-GMP certified partner plants.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              We begin as a small, disciplined operation — GST-registered from
              September 2026, with the IEC approved and the FSSAI licence
              tracked to grant.
              What we can promise today is backed by paper; what needs time is
              stated honestly rather than glossed over.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#products" className="btn-primary">Browse Products</a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                💬 Talk to Sathwik's Desk
              </a>
            </div>
          </div>

          {/* right: facts + why us */}
          <div>
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
                <p className="mt-2 text-[13px] leading-relaxed text-brand-100/70">
                  "Sathwik" — a first-generation exporter building a trading
                  house on the Deccan's doorstep: the spice mandis to one side,
                  the pharma corridor to the other.
                </p>
                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/10 pt-4 text-[12px]">
                  <dt className="font-semibold text-brand-100/50">Entity</dt>
                  <dd className="font-semibold text-white">{COMPANY.name} · Proprietorship</dd>
                  <dt className="font-semibold text-brand-100/50">GSTIN</dt>
                  <dd className="font-semibold text-white">{COMPANY.gstin}</dd>
                  <dt className="font-semibold text-brand-100/50">Registered</dt>
                  <dd className="font-semibold text-white">01 Sep 2026 · Telangana</dd>
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
      </div>
    </section>
  );
}
