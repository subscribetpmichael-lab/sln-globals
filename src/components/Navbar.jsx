import { useEffect, useState } from "react";
import { COMPANY, NAV_LINKS } from "../data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/85 shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-16 items-center justify-between gap-4">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent-500 text-lg shadow-md shadow-accent-500/30">
            🚢
          </span>
          <span className="font-display text-lg font-extrabold tracking-tight text-white">
            {COMPANY.name.split(" ")[0]}
            <span className="text-accent-400">.</span>
            <span className="text-brand-200">{COMPANY.name.split(" ")[1]}</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-3.5 py-2 text-[13px] font-semibold transition ${
                  active === l.href
                    ? "bg-white/10 text-accent-300"
                    : "text-brand-100/80 hover:bg-white/5 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/${COMPANY.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-[13px] font-bold text-white shadow transition hover:bg-emerald-400 sm:inline-flex"
          >
            💬 WhatsApp
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/20 text-white lg:hidden"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-brand-950/95 backdrop-blur-md lg:hidden">
          <ul className="container-x grid gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                    active === l.href
                      ? "bg-white/10 text-accent-300"
                      : "text-brand-100/85 hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="block rounded-lg bg-emerald-500 px-3 py-2.5 text-center text-sm font-bold text-white"
              >
                💬 Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
