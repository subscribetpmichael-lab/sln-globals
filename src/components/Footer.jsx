import { COMPANY, NAV_LINKS, CATEGORIES } from "../data";

export default function Footer() {
  return (
    <footer className="bg-brand-950 pt-16 dot-grid-dark">
      <div className="container-x">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 text-lg">🚢</span>
              <span className="font-display text-lg font-extrabold text-white">
                {COMPANY.name.split(" ")[0]}
                <span className="text-accent-400">.</span>
                <span className="text-brand-200">{COMPANY.name.split(" ")[1]}</span>
              </span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-brand-100/60">
              Spices · Water · Pharma — from Telangana's Deccan corridor,
              connecting origin mandis and partner plants with importers
              across the Gulf, Europe, North America and Southeast Asia.
            </p>
            <div className="mt-5 flex flex-wrap gap-1.5">
              {["GST Registered", "IEC · approved", "WHO-GMP partners"].map((t) => (
                <span key={t} className="rounded-md bg-white/5 px-2 py-1 text-[10px] font-bold tracking-wider text-brand-100/70 ring-1 ring-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">
              Quick links
            </h4>
            <ul className="mt-4 grid gap-2.5">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-[13px] font-medium text-brand-100/70 transition hover:text-accent-300">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* products */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">
              Our verticals
            </h4>
            <ul className="mt-4 grid gap-2.5">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a href="#products" className="text-[13px] font-medium text-brand-100/70 transition hover:text-accent-300">
                    {c.emoji} {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-accent-400 uppercase">
              Reach us
            </h4>
            <ul className="mt-4 grid gap-3 text-[13px] text-brand-100/70">
              <li>✉️ <a href={`mailto:${COMPANY.email}`} className="hover:text-accent-300">{COMPANY.email}</a></li>
              <li>📞 <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} className="hover:text-accent-300">{COMPANY.phone}</a></li>
              <li>🏢 {COMPANY.address}</li>
              <li>🕘 {COMPANY.hours}</li>
            </ul>
            <a
              href={`https://wa.me/${COMPANY.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[12.5px] font-bold text-white transition hover:bg-emerald-400"
            >
              💬 WhatsApp Trade Desk
            </a>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 py-6 text-[12px] text-brand-100/45">
          <p>
            © {new Date().getFullYear()} {COMPANY.name} (Proprietorship ·
            Telangana). All rights reserved.
          </p>
          <p>GSTIN {COMPANY.gstin} · IEC approved</p>
        </div>
      </div>
    </footer>
  );
}
