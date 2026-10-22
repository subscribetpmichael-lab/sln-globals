import { useState } from "react";
import { COMPANY } from "../data";
import PHOTOS from "../photos";

const CHIPS = ["India-origin sourcing", "Buyer-specific specifications", "Enquiry-led availability"];

const BRIEF_CARDS = [
  ["Quantity", "Buyer-defined"],
  ["Destination", "Buyer-defined"],
  ["Packaging", "Buyer-defined"],
  ["Trade terms", "FOB / CIF / CFR"],
];

const CONFIRM = ["Exact specifications", "MOQ", "Packaging", "Certifications", "Availability", "Trade terms"];

export default function ProductBrief({ brief }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", country: "", quantity: "", packaging: "" });
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const waBrief = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(
    `Hello SLN GLOBALS, I would like to enquire about ${brief.title} — please share the catalogue and specifications.`,
  )}`;

  const mailtoCatalogue = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
    `${brief.title} catalogue request — SLN GLOBALS`,
  )}&body=${encodeURIComponent(
    `Product: ${brief.title}\nGrade / variety:\nQuantity:\nPackaging:\nDestination:\nIncoterm:\nCompany:`,
  )}`;

  const submit = (e) => {
    e.preventDefault();
    const body = [
      `Product: ${brief.title}`,
      `Company: ${form.company}`,
      ``,
      `Quantity / requirement: ${form.quantity}`,
      `Packaging: ${form.packaging}`,
      `Destination: ${form.country}`,
      `Incoterm: FOB / CFR / CIF`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Bulk ${brief.title.toLowerCase()} enquiry — ${form.company || form.name || "new buyer"}`,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-[13.5px] text-brand-950 placeholder:text-slate-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25";

  return (
    <section className="bg-white pt-28 pb-20 lg:pb-24">
      <div className="container-x">
        <a href="#products" className="inline-flex items-center gap-2 text-[13px] font-bold text-brand-600 transition hover:text-accent-600">
          ← Back to Products
        </a>

        {/* ===== title ===== */}
        <div className="mt-8 max-w-3xl">
          <span className="eyebrow">{COMPANY.name} · product sourcing</span>
          <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tight text-brand-950 sm:text-5xl">{brief.title}</h1>
          <p className="mt-2 font-display text-lg font-semibold text-brand-500">{brief.varieties}</p>
          <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
            <strong className="text-brand-950">{COMPANY.name}</strong> {brief.intro}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {CHIPS.map((chip) => (
              <span key={chip} className="rounded-full border border-brand-200 bg-brand-50 px-3 py-1.5 text-[12px] font-semibold text-brand-700">
                {chip}
              </span>
            ))}
          </div>
        </div>

        {/* ===== brief + photo ===== */}
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h2 className="section-title">Source {brief.title.toLowerCase()} to your brief.</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Share quantity, destination and packaging. We match your requirement against
              available supplier capability.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {BRIEF_CARDS.map(([k, v]) => (
                <div key={k} className="card p-4">
                  <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">{k}</p>
                  <p className="mt-1 text-[13.5px] font-semibold text-brand-800">{v}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={waBrief}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
              >
                💬 WhatsApp this brief ↗
              </a>
              <a href={mailtoCatalogue} className="btn-outline">
                Email for catalogue →
              </a>
            </div>
          </div>

          <div className="grid gap-3">
            <img
              src={PHOTOS[brief.photo.main]}
              alt={brief.photo.alt}
              className="w-full rounded-2xl object-cover shadow-md"
            />
            <img
              src={PHOTOS[brief.photo.gallery]}
              alt={brief.photo.galleryAlt}
              className="max-h-64 w-full rounded-2xl object-cover shadow-md"
            />
          </div>
        </div>

        {/* ===== how we source ===== */}
        <div className="mt-20">
          <span className="eyebrow">how we source</span>
          <h2 className="section-title">Buyer-specific sourcing from verified supplier networks.</h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-600">
            We do not treat the catalogue as a fixed stock list. Availability, specifications,
            packaging, certifications and trade terms are confirmed against the offered lot and
            buyer requirement.
          </p>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            <div className="card p-6">
              <h3 className="text-[11px] font-bold tracking-[0.16em] text-slate-400 uppercase">Source regions</h3>
              <ul className="mt-4 grid gap-2.5">
                {brief.regions.map((r) => (
                  <li key={r} className="flex gap-2.5 text-[13.5px] leading-snug text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" /> {r}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-[11px] font-bold tracking-[0.16em] text-slate-400 uppercase">Who we source for</h3>
              <ul className="mt-4 grid gap-2.5">
                {brief.buyers.map((b) => (
                  <li key={b} className="flex gap-2.5 text-[13.5px] leading-snug text-slate-600">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-400" /> {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-6">
              <h3 className="text-[11px] font-bold tracking-[0.16em] text-slate-400 uppercase">Our sourcing flow</h3>
              <ol className="mt-4 grid gap-3.5">
                {brief.flow.map((s, i) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="font-display grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-950 text-[12px] font-bold text-accent-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-1 text-[13.5px] leading-snug text-slate-600">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* ===== what we source ===== */}
        <div className="mt-20">
          <span className="eyebrow">what we source</span>
          <h2 className="section-title">Types and formats available through {COMPANY.name}.</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {brief.types.map((t, i) => (
              <div key={t} className="card flex items-start gap-4 p-5">
                <span className="font-display text-lg font-extrabold text-accent-500">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-[13.5px] leading-snug text-slate-600">{t}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ===== catalogue + confirmed ===== */}
        <div className="mt-20 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="eyebrow">catalogue & availability</span>
            <h2 className="section-title">Need the detailed catalogue?</h2>
            <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-slate-600">
              Contact {COMPANY.name} with your {brief.catalogueNeeds}.
            </p>
            <a href={mailtoCatalogue} className="btn-primary mt-6 inline-flex">
              Request catalogue →
            </a>
          </div>
          <div className="card bg-brand-950 p-6 dot-grid-dark">
            <p className="text-[11px] font-bold tracking-[0.16em] text-accent-400 uppercase">What gets confirmed</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {CONFIRM.map((c) => (
                <span key={c} className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[12px] font-semibold text-white">
                  {c}
                </span>
              ))}
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-brand-100/60">
              Detailed catalogue versions, exact specifications, MOQ, packaging, certifications and
              availability are shared after enquiry and confirmed against the relevant supplier lot.
            </p>
          </div>
        </div>

        {/* ===== bulk enquiry ===== */}
        <div className="mt-20">
          <span className="eyebrow">bulk enquiry</span>
          <h2 className="section-title">Tell us exactly what you need.</h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600">
            Share product, quantity, destination and packaging requirements. We will match your
            requirement against available supplier capability and offered lots.
          </p>

          <form onSubmit={submit} className="card mt-8 bg-brand-950 p-6 sm:p-8 dot-grid-dark">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                placeholder="Quantity / requirement (e.g. 5 MT)"
                className={input}
                value={form.quantity}
                onChange={set("quantity")}
              />
              <input placeholder="Packaging (e.g. 5 kg PP bags)" className={input} value={form.packaging} onChange={set("packaging")} />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name *" className={input} value={form.name} onChange={set("name")} />
              <input placeholder="Company name" className={input} value={form.company} onChange={set("company")} />
              <input required type="email" placeholder="Email *" className={input} value={form.email} onChange={set("email")} />
              <input placeholder="Destination country" className={input} value={form.country} onChange={set("country")} />
            </div>
            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary">
                Request a Quote →
              </button>
              {sent && (
                <p className="text-[12.5px] font-semibold text-emerald-300">
                  ✓ Opening your mail app with the enquiry pre-filled…
                </p>
              )}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-brand-100/40">
              Your details are used for replying to this enquiry only — never shared with third
              parties.
            </p>
          </form>
        </div>

        {/* ===== bottom CTA ===== */}
        <div className="mt-20 rounded-3xl bg-brand-950 p-10 text-center dot-grid-dark">
          <p className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">Ready to source {brief.title}?</p>
          <p className="mt-3 font-display text-3xl font-extrabold text-white">
            Tell us your requirement.
            <br />
            We source it.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <a href="#contact" className="btn-primary">
              Contact {COMPANY.name} →
            </a>
            <a
              href={waBrief}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              💬 WhatsApp us ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
