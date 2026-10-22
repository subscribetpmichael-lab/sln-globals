import { useEffect, useState } from "react";
import { CERTIFICATES, CERT_NOTE } from "../data";
import gstPdf from "../assets/sln-globals-gst.pdf";
import iecPdf from "../assets/sln-globals-iec.pdf";

const FILES = { gst: gstPdf, iec: iecPdf };

const STATUS_META = {
  issued: {
    label: "✓ Issued",
    cls: "border-emerald-300 bg-emerald-50 text-emerald-700",
  },
  approved: {
    label: "✓ Approved",
    cls: "border-sky-300 bg-sky-50 text-sky-700",
  },
  "in-progress": {
    label: "⏳ In process",
    cls: "border-amber-300 bg-amber-50 text-amber-700",
  },
  partner: {
    label: "🤝 Partner-held",
    cls: "border-violet-300 bg-violet-50 text-violet-700",
  },
};

export default function Certificates() {
  const [viewing, setViewing] = useState(null);

  // lock page scroll while modal open
  useEffect(() => {
    document.body.style.overflow = viewing ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [viewing]);

  // esc to close
  useEffect(() => {
    if (!viewing) return;
    const onKey = (e) => e.key === "Escape" && setViewing(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewing]);

  const cert = CERTIFICATES.find((c) => c.id === viewing);

  return (
    <section id="certificates" className="relative bg-brand-50/60 py-20 lg:py-24">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow">—compliance & trust</span>
            <h2 className="section-title">Licences & registrations</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              A new business must earn its paperwork in full view — so here is
              the complete live status. Click any card for details; the GST
              and IEC certificates open exactly as issued.
            </p>
          </div>
        </div>

        {/* certificate grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATES.map((c) => (
            <button
              key={c.id}
              onClick={() => setViewing(c.id)}
              className="card group flex flex-col p-6 text-left transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <span
                  className="grid h-12 w-12 place-items-center rounded-2xl text-2xl transition group-hover:scale-110"
                  style={{ backgroundColor: `${c.color}1a` }}
                >
                  {c.emoji}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-bold ${STATUS_META[c.status].cls}`}
                >
                  {STATUS_META[c.status].label}
                </span>
              </div>
              <h3 className="mt-4 text-[15px] font-bold text-brand-950">{c.name}</h3>
              <p className="mt-1 text-[11px] font-semibold tracking-wide text-brand-500 uppercase">
                {c.code}
              </p>
              <p className="mt-2 line-clamp-2 flex-1 text-[12.5px] leading-relaxed text-slate-600">
                {c.authority}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-[12px] font-bold text-accent-600">
                View {FILES[c.id] ? "certificate" : "status"}
                <span className="transition group-hover:translate-x-0.5">→</span>
              </span>
            </button>
          ))}
        </div>

        <p className="mt-6 text-center text-[12px] text-slate-400">{CERT_NOTE}</p>
      </div>

      {/* ===== modal ===== */}
      {cert && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center overflow-y-auto bg-brand-950/70 p-4 backdrop-blur-sm"
          onClick={() => setViewing(null)}
        >
          <div
            className="anim-fade-up my-8 w-full max-w-lg rounded-3xl bg-white p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* header visual */}
            <div
              className="relative overflow-hidden rounded-2xl p-6"
              style={{ background: `linear-gradient(135deg, ${cert.color} 0%, ${cert.color}cc 100%)` }}
            >
              <div className="dot-grid-dark absolute inset-0 opacity-40" />
              <div className="relative flex items-center justify-between text-white">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase opacity-80">
                    {STATUS_META[cert.status].label} · {cert.code}
                  </p>
                  <p className="mt-1 font-display text-xl font-extrabold">{cert.name}</p>
                </div>
                <span className="text-4xl">{cert.emoji}</span>
              </div>
              <div className="relative mt-6 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-bold tracking-wider text-white/75 uppercase">
                  {cert.status === "partner" ? "Held by" : "Issued by"}
                </p>
                <p className="mt-1 text-[13px] leading-snug font-semibold text-white">
                  {cert.authority}
                </p>
              </div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full border-4 border-white/25 bg-white/10 backdrop-blur-sm" />
            </div>

            <div className="p-6">
              {/* real certificate preview */}
              {cert.file && FILES[cert.id] ? (
                <iframe
                  src={FILES[cert.id]}
                  title={`${cert.name} — SLN GLOBALS`}
                  className="h-[420px] w-full rounded-xl border border-brand-100"
                />
              ) : (
                <div className="rounded-xl bg-brand-50 p-4 text-[13px] leading-relaxed text-slate-600">
                  {cert.scope}
                </div>
              )}

              <p className="mt-4 text-[12.5px] leading-relaxed text-slate-500">
                {cert.scope}
              </p>

              <div className="mt-5 flex items-center gap-3">
                {cert.file ? (
                  <a
                    href={FILES[cert.id]}
                    download={`SLN-GLOBALS-${cert.id.toUpperCase()}-Certificate.pdf`}
                    className="btn-primary flex-1 py-2.5 text-[13px]"
                  >
                    ⬇ Download certificate
                  </a>
                ) : (
                  <a href="#contact" onClick={() => setViewing(null)} className="btn-primary flex-1 py-2.5 text-[13px]">
                    Follow-up on this licence
                  </a>
                )}
                <button
                  onClick={() => setViewing(null)}
                  className="rounded-full border border-brand-200 px-4 py-2.5 text-[13px] font-semibold text-brand-800 hover:bg-brand-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
