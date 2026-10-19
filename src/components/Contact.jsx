import { useState } from "react";
import { COMPANY, CATEGORIES } from "../data";

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  interest: CATEGORIES[0].label,
  destination: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [sent, setSent] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Product interest: ${form.interest}`,
      `Destination: ${form.destination}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
      `Trade enquiry — ${form.interest} (${form.name || "new buyer"})`
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const input =
    "w-full rounded-xl border border-brand-200 bg-white px-4 py-3 text-[13.5px] text-brand-950 placeholder:text-slate-400 outline-none transition focus:border-accent-500 focus:ring-2 focus:ring-accent-500/25";

  return (
    <section id="contact" className="bg-white py-20 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* left: info */}
          <div>
            <span className="eyebrow">—get in touch</span>
            <h2 className="section-title">Let's draft your first container</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-slate-600">
              Share your target grade, quantity and destination country — the
              trade desk replies within one working day with availability and
              sample logistics.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                ["✉️", "Email", COMPANY.email, `mailto:${COMPANY.email}`],
                ["📞", "Phone / WhatsApp", COMPANY.phone, `https://wa.me/${COMPANY.whatsapp}`],
                ["🏢", "Registered office", COMPANY.address, null],
                ["🕘", "Working hours", COMPANY.hours, null],
              ].map(([icon, label, value, href]) => (
                <div key={label} className="card flex items-start gap-4 p-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-xl">
                    {icon}
                  </span>
                  <div>
                    <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">
                      {label}
                    </p>
                    {href ? (
                      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-[13.5px] font-semibold text-brand-800 hover:text-accent-600">
                        {value}
                      </a>
                    ) : (
                      <p className="text-[13.5px] font-semibold text-brand-800">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition hover:bg-emerald-400"
            >
              💬 Chat instantly on WhatsApp
            </a>
          </div>

          {/* right: form */}
          <form onSubmit={submit} className="card bg-brand-950 p-6 sm:p-8 dot-grid-dark">
            <h3 className="font-display text-lg font-extrabold text-white">
              Send an enquiry
            </h3>
            <p className="mt-1 text-[13px] text-brand-100/60">
              Fields marked * are required. Replies in ≤ 24 working hours.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <input required placeholder="Full name *" className={input} value={form.name} onChange={set("name")} />
              <input placeholder="Company name" className={input} value={form.company} onChange={set("company")} />
              <input required type="email" placeholder="Email *" className={input} value={form.email} onChange={set("email")} />
              <input required type="tel" placeholder="Phone / WhatsApp *" className={input} value={form.phone} onChange={set("phone")} />
              <select className={`${input} appearance-scroll`} value={form.interest} onChange={set("interest")}>
                {CATEGORIES.map((c) => (
                  <option key={c.id}>{c.label}</option>
                ))}
              </select>
              <input placeholder="Destination country" className={input} value={form.destination} onChange={set("destination")} />
            </div>

            <textarea
              rows={4}
              placeholder="Tell us the grade, packing, incoterm (FOB/CFR/CIF) and ideal lead time…"
              className={`${input} mt-4 resize-none`}
              value={form.message}
              onChange={set("message")}
            />

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <button type="submit" className="btn-primary">
                Send Enquiry →
              </button>
              {sent && (
                <p className="text-[12.5px] font-semibold text-emerald-300">
                  ✓ Opening your mail app with the enquiry pre-filled…
                </p>
              )}
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-brand-100/40">
              Your details are used for replying to this enquiry only — never
              shared with third parties.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
