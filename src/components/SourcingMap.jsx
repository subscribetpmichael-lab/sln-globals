import { useEffect, useMemo, useRef, useState } from "react";
import {
  geoOrthographic,
  geoPath,
  geoGraticule10,
  geoDistance,
  geoInterpolate,
} from "d3-geo";
import { feature } from "topojson-client";
import world110m from "world-atlas/countries-110m.json";
import { ORIGINS, PORTS, HUB_GEO_REF } from "../data";

/* ---------- static geometry (computed once) ---------- */
const S = 460;
const CX = S / 2;
const CY = S / 2;
const SCALE = S / 2 - 26;
const LIM = Math.PI / 2 - 0.03; // front-hemisphere visibility cutoff

const countries = feature(world110m, world110m.objects.countries).features;
const indiaFeature = countries.find((f) => f.properties?.name === "India");
const otherLand = countries.filter((f) => f !== indiaFeature);
const GRATICULE = geoGraticule10();

const HUB_GEO = HUB_GEO_REF; // [lon, lat] — Nhava Sheva

/* great-circle arc between hub and each port, pre-sampled */
const ARCS = PORTS.map((p) => {
  const interp = geoInterpolate(HUB_GEO, p.geo);
  const pts = [];
  for (let i = 0; i <= 60; i++) pts.push(interp(i / 60));
  return pts;
});

export default function SourcingMap() {
  /* rotation [λ, φ] — (-λ, -φ) is the point at globe centre */
  const [rotation, setRotationState] = useState([-72, -20]);
  const rotRef = useRef(rotation);

  const [selOrigin, setSelOrigin] = useState(ORIGINS[0].id); // Guntur
  const [selPort, setSelPort] = useState(PORTS[3].name); // Jebel Ali
  const [dragging, setDragging] = useState(false);

  const dragRef = useRef(false);
  const movedRef = useRef(0);
  const prevPt = useRef({ x: 0, y: 0 });
  const idleRef = useRef(0);
  const flyRef = useRef(false);
  const flyRaf = useRef(0);

  const setRot = (lon, lat) => {
    if (lon > 180) lon -= 360;
    else if (lon < -180) lon += 360;
    lat = Math.max(-85, Math.min(85, lat));
    rotRef.current = [lon, lat];
    setRotationState([lon, lat]);
  };

  /* ----- auto-spin when idle ----- */
  useEffect(() => {
    let raf;
    let last = performance.now();
    let acc = 0;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const loop = (t) => {
      const dt = Math.min(100, t - last);
      last = t;
      if (!dragRef.current && !flyRef.current && !reduced) {
        idleRef.current += dt;
        if (idleRef.current > 4000) {
          acc += dt;
          if (acc >= 40) {
            acc = 0;
            const r = rotRef.current;
            rotRef.current = [r[0] - 0.16, r[1]];
            setRotationState(rotRef.current);
          }
        }
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  useEffect(() => () => cancelAnimationFrame(flyRaf.current), []);

  /* ----- drag to rotate (mouse 2-axis · touch horizontal via pan-y) ----- */
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = true;
    movedRef.current = 0;
    prevPt.current = { x: e.clientX, y: e.clientY };
    idleRef.current = 0;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - prevPt.current.x;
    const dy = e.clientY - prevPt.current.y;
    prevPt.current = { x: e.clientX, y: e.clientY };
    movedRef.current += Math.abs(dx) + Math.abs(dy);
    const sens = 180 / (Math.PI * SCALE); // deg per px at the rim
    const r = rotRef.current;
    setRot(r[0] + dx * sens, r[1] - dy * sens);
    idleRef.current = 0;
  };

  const endDrag = () => {
    dragRef.current = false;
    setDragging(false);
    idleRef.current = 0;
  };

  /* ----- animated fly-to (shortest λ path) ----- */
  const flyTo = (lon, lat) => {
    idleRef.current = 0;
    flyRef.current = true;
    cancelAnimationFrame(flyRaf.current);
    const from = rotRef.current;
    let toL = -lon;
    toL += Math.round((from[0] - toL) / 360) * 360;
    const toB = Math.max(-85, Math.min(85, -lat));
    const t0 = performance.now();
    const D = 950;
    const ease = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
    const step = (now) => {
      const p = Math.min(1, (now - t0) / D);
      const e = ease(p);
      rotRef.current = [from[0] + (toL - from[0]) * e, from[1] + (toB - from[1]) * e];
      setRotationState(rotRef.current);
      if (p < 1) flyRaf.current = requestAnimationFrame(step);
      else flyRef.current = false;
    };
    flyRaf.current = requestAnimationFrame(step);
  };

  const selectOrigin = (o) => {
    setSelOrigin(o.id);
    flyTo(o.lon, o.lat);
  };
  const selectPort = (p) => {
    setSelPort(p.name);
    flyTo(p.geo[0], p.geo[1]);
  };

  /* ----- projection & re-render geometry ----- */
  const projection = useMemo(() => {
    const p = geoOrthographic().translate([CX, CY]).scale(SCALE).clipAngle(90);
    p.rotate(rotation);
    return p;
  }, [rotation]);
  const pathGen = useMemo(() => geoPath(projection), [projection]);
  const center = [-rotation[0], -rotation[1]];
  const vis = (pt) => geoDistance(pt, center) < LIM;
  const projPt = (pt) => projection(pt);

  const landPath = otherLand.map((f) => pathGen(f)).join(" ");
  const indiaPath = pathGen(indiaFeature);
  const gratPath = pathGen(GRATICULE);

  const arcPathStr = (pts) => {
    let d = "";
    let open = false;
    for (const pt of pts) {
      if (!vis(pt)) {
        open = false;
        continue;
      }
      const [x, y] = projPt(pt);
      d += (open ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
      open = true;
    }
    return d;
  };

  const origin = ORIGINS.find((o) => o.id === selOrigin);
  const dest = PORTS.find((p) => p.name === selPort);
  const [hubX, hubY] = projPt(HUB_GEO);
  const hubVis = vis(HUB_GEO);

  return (
    <section id="sourcing" className="relative overflow-hidden bg-brand-950 py-20 lg:py-24">
      <div className="dot-grid-dark absolute inset-0" />
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-96 rounded-full bg-brand-600/25 blur-[110px]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">—global reach · standout feature</span>
          <h2 className="section-title !text-white">The Global Sourcing Globe</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-100/75">
            A spinning world, straight from the deck of the ship. India's
            origin belts pulse at the centre; every glowing lane carries
            cargo to the markets we serve.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          {/* ================= GLOBE PANEL ================= */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:p-6">
            <div className="flex items-center justify-between px-1">
              <p className="font-display text-sm font-bold text-white">
                🌍 <span className="hidden sm:inline">Interactive</span> Trade Globe
              </p>
              <p className="text-[11px] font-medium text-brand-100/50">
                {dragging ? "spinning…" : "drag / swipe to spin"}
              </p>
            </div>

            <svg
              viewBox="-26 -14 512 492"
              className={`mx-auto mt-1 w-full max-w-[470px] select-none ${dragging ? "globe-grabbing" : "globe-grab"}`}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={endDrag}
              onPointerCancel={endDrag}
              onPointerLeave={() => dragRef.current && endDrag()}
              role="img"
              aria-label="Rotating globe showing Indian exports to international destinations"
            >
              <defs>
                <radialGradient id="oceanG" cx="38%" cy="32%" r="80%">
                  <stop offset="0%" stopColor="#1c4d7f" />
                  <stop offset="70%" stopColor="#0d2c50" />
                  <stop offset="100%" stopColor="#081f3a" />
                </radialGradient>
                <radialGradient id="haloG">
                  <stop offset="62%" stopColor="rgba(84,132,189,0)" />
                  <stop offset="92%" stopColor="rgba(129,166,214,0.22)" />
                  <stop offset="100%" stopColor="rgba(129,166,214,0)" />
                </radialGradient>
              </defs>

              {/* atmosphere halo + sphere */}
              <circle cx={CX} cy={CY} r={SCALE + 18} fill="url(#haloG)" />
              <circle cx={CX} cy={CY} r={SCALE} fill="url(#oceanG)" stroke="rgba(148,190,235,0.35)" strokeWidth="1" />

              {/* graticule + land */}
              <path d={gratPath} fill="none" stroke="rgba(148,190,235,0.14)" strokeWidth="0.8" strokeDasharray="2 5" />
              <path
                d={landPath}
                fill="rgba(96,140,196,0.38)"
                stroke="rgba(148,190,235,0.55)"
                strokeWidth="0.6"
              />
              {/* origin country highlight */}
              <path
                d={indiaPath}
                fill="#f59e0b"
                fillOpacity="0.88"
                stroke="#fcd34d"
                strokeWidth="0.9"
              />

              {/* sea lanes India → world */}
              {ARCS.map((pts, i) => {
                const d = arcPathStr(pts);
                if (!d) return null;
                return (
                  <g key={PORTS[i].name}>
                    <path d={d} fill="none" stroke="#7fb2e8" strokeWidth="1.5" opacity="0.45" />
                    <path
                      d={d}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      opacity="0.9"
                      pathLength="100"
                      className="arc-comet"
                    />
                  </g>
                );
              })}

              {/* gateway hub — Nhava Sheva */}
              {hubVis && (
                <g>
                  <circle cx={hubX} cy={hubY} r="10" fill="#f59e0b" opacity="0.2" />
                  <circle cx={hubX} cy={hubY} r="6" fill="#f59e0b" stroke="#fff" strokeWidth="1.4" />
                  <text x={hubX} y={hubY + 21} textAnchor="middle" fontSize="10" fontWeight="800" fill="#fcd34d">
                    🇮🇳 INDIA
                  </text>
                </g>
              )}

              {/* origin clusters */}
              {ORIGINS.map((o) => {
                const geo = [o.lon, o.lat];
                if (!vis(geo)) return null;
                const [x, y] = projPt(geo);
                const isSel = o.id === selOrigin;
                return (
                  <g
                    key={o.id}
                    className="cursor-pointer"
                    onClick={() => movedRef.current < 6 && selectOrigin(o)}
                    role="button"
                    aria-label={`Fly to ${o.name} origin`}
                  >
                    <circle cx={x} cy={y} r={isSel ? 9 : 5.5} fill={o.color} opacity={isSel ? 0.3 : 0.18} />
                    <circle cx={x} cy={y} r={isSel ? 5 : 3.4} fill={o.color} stroke="#fff" strokeWidth={isSel ? 1.5 : 1} />
                    {isSel && (
                      <text x={x} y={y - 9} textAnchor="middle" fontSize="9.5" fontWeight="800" fill="#ffffff">
                        {o.emoji} {o.name}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* destination ports */}
              {PORTS.map((p) => {
                if (!vis(p.geo)) return null;
                const [x, y] = projPt(p.geo);
                const isSel = p.name === selPort;
                return (
                  <g
                    key={p.name}
                    className="cursor-pointer"
                    onClick={() => movedRef.current < 6 && selectPort(p)}
                    role="button"
                    aria-label={`Fly to ${p.name}`}
                  >
                    <circle cx={x} cy={y} r={isSel ? 8 : 5} fill="#34d399" stroke="#fff" strokeWidth={isSel ? 1.6 : 1.1} />
                    <text x={x} y={y - 9} textAnchor="middle" fontSize="12">
                      {p.flag}
                    </text>
                    <text x={x} y={y + 14} textAnchor="middle" fontSize="9" fontWeight={isSel ? 800 : 600} fill={isSel ? "#a7f3d0" : "rgba(211,229,245,0.65)"}>
                      {p.name.split(" — ")[0]}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* destination pills */}
            <div className="mt-2 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {PORTS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => selectPort(p)}
                  className={`inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[12px] font-semibold transition ${
                    p.name === selPort
                      ? "border-emerald-400 bg-emerald-400/15 text-emerald-300"
                      : "border-white/15 bg-white/5 text-brand-100/70 hover:border-white/40"
                  }`}
                >
                  {p.flag} {p.name.split(" — ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* ================= SIDE PANEL ================= */}
          <div className="grid content-start gap-5">
            {/* origin chips */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur">
              <p className="text-[11px] font-bold tracking-[0.2em] text-accent-300 uppercase">
                Tap an origin — the globe flies there
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {ORIGINS.map((o) => (
                  <button
                    key={o.id}
                    onClick={() => selectOrigin(o)}
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[12.5px] font-semibold transition ${
                      o.id === selOrigin
                        ? "border-accent-400 bg-accent-400/15 text-accent-300"
                        : "border-white/15 bg-white/5 text-brand-100/75 hover:border-white/40"
                    }`}
                  >
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: o.color }} />
                    {o.emoji} {o.name}
                  </button>
                ))}
              </div>
            </div>

            {/* selected origin card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-[11px] font-bold tracking-[0.2em] text-accent-300 uppercase">
                Sourcing region
              </p>
              <h3 className="mt-2 font-display text-xl font-extrabold text-white">
                {origin.emoji} {origin.name}
              </h3>
              <p className="mt-1 text-[13px] font-medium text-brand-100/60">
                {origin.state} · {origin.season}
              </p>

              <ul className="mt-4 grid gap-2">
                {origin.products.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 rounded-xl bg-white/[0.05] px-3.5 py-2.5 text-[13px] font-semibold text-brand-100/90"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: origin.color }} />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 text-[12.5px] sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 px-3.5 py-2.5">
                  <p className="font-bold text-accent-300">Min. order</p>
                  <p className="mt-1 text-brand-100/75">{origin.moq}</p>
                </div>
                <div className="rounded-xl border border-white/10 px-3.5 py-2.5">
                  <p className="font-bold text-accent-300">Exit port</p>
                  <p className="mt-1 text-brand-100/75">{origin.port}</p>
                </div>
              </div>
            </div>

            {/* selected destination card */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
              <p className="text-[11px] font-bold tracking-[0.2em] text-accent-300 uppercase">
                Shipping destination
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-3xl">{dest.flag}</span>
                <div>
                  <h3 className="font-display text-lg font-extrabold text-white">{dest.name}</h3>
                  <p className="text-[12.5px] font-medium text-emerald-300">{dest.days} transshipment-free</p>
                </div>
              </div>
              <p className="mt-3 text-[12.5px] leading-relaxed text-brand-100/60">
                Carries {dest.flag} consignments of{" "}
                <span className="font-semibold text-brand-100/85">{origin.name}</span> exports —
                FCL reefer & dry, NVOCC groupage and air-freight options available.
              </p>
              <a
                href="#contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-[13px] font-bold text-brand-950 transition hover:bg-accent-400"
              >
                Quote me for {dest.name.split(" — ")[0]} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
