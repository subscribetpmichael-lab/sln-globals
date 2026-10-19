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
import PHOTOS from "../photos";

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

/* great-circle arcs between hub and each port, pre-sampled */
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

  const [dragging, setDragging] = useState(false);

  const dragRef = useRef(false);
  const prevPt = useRef({ x: 0, y: 0 });
  const idleRef = useRef(0);

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
      if (!dragRef.current && !reduced) {
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

  /* ----- drag to rotate (mouse 2-axis · touch horizontal via pan-y) ----- */
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    e.currentTarget.setPointerCapture?.(e.pointerId);
    dragRef.current = true;
    prevPt.current = { x: e.clientX, y: e.clientY };
    idleRef.current = 0;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (!dragRef.current) return;
    const dx = e.clientX - prevPt.current.x;
    const dy = e.clientY - prevPt.current.y;
    prevPt.current = { x: e.clientX, y: e.clientY };
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

  const [hubX, hubY] = projPt(HUB_GEO);
  const hubVis = vis(HUB_GEO);

  return (
    <section id="sourcing" className="relative overflow-hidden bg-brand-950 py-20 lg:py-24">
      <div className="dot-grid-dark absolute inset-0" />
      <div className="pointer-events-none absolute top-0 right-0 h-72 w-96 rounded-full bg-brand-600/25 blur-[110px]" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <span className="eyebrow-dark">—global reach · standout feature</span>
          <h2 className="section-title !text-white">Live Trade Routes</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-100/75">
            Straight from the deck of the ship. India's origin belts pulse at
            the globe's centre; every glowing lane carries our cargo to the
            markets we serve. Spin it — drag or swipe.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          {/* ================= GLOBE ================= */}
          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm sm:p-6">
            <div className="flex items-center justify-between px-1">
              <p className="font-display text-sm font-bold text-white">
                🌍 Interactive Trade Globe
              </p>
              <p className="text-[11px] font-medium text-brand-100/50">
                {dragging ? "spinning…" : "drag / swipe to spin"}
              </p>
            </div>

            {/* square canvas: the sphere is always dead-centre */}
            <svg
              viewBox={`0 0 ${S} ${S}`}
              className={`mx-auto mt-2 block w-full select-none ${
                dragging ? "globe-grabbing" : "globe-grab"
              }`}
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
              <circle cx={CX} cy={CY} r={SCALE + 14} fill="url(#haloG)" />
              <circle
                cx={CX}
                cy={CY}
                r={SCALE}
                fill="url(#oceanG)"
                stroke="rgba(148,190,235,0.35)"
                strokeWidth="1"
              />

              {/* graticule + land */}
              <path
                d={gratPath}
                fill="none"
                stroke="rgba(148,190,235,0.14)"
                strokeWidth="0.8"
                strokeDasharray="2 5"
              />
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
                    <path
                      d={d}
                      fill="none"
                      stroke="#7fb2e8"
                      strokeWidth="1.5"
                      opacity="0.45"
                    />
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
                  <circle cx={hubX} cy={hubY} r="12" fill="#f59e0b" opacity="0.2" />
                  <circle
                    cx={hubX}
                    cy={hubY}
                    r="6"
                    fill="#f59e0b"
                    stroke="#fff"
                    strokeWidth="1.4"
                  />
                  <text
                    x={hubX}
                    y={hubY + 22}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="800"
                    fill="#fcd34d"
                  >
                    🇮🇳 INDIA
                  </text>
                </g>
              )}

              {/* origin cluster dots */}
              {ORIGINS.map((o) => {
                const geo = [o.lon, o.lat];
                if (!vis(geo)) return null;
                const [x, y] = projPt(geo);
                return (
                  <g key={o.id}>
                    <circle cx={x} cy={y} r="8" fill={o.color} opacity="0.18" />
                    <circle
                      cx={x}
                      cy={y}
                      r="4.2"
                      fill={o.color}
                      stroke="#fff"
                      strokeWidth="1"
                    />
                  </g>
                );
              })}

              {/* destination port dots */}
              {PORTS.map((p) => {
                if (!vis(p.geo)) return null;
                const [x, y] = projPt(p.geo);
                return (
                  <g key={p.name}>
                    <circle cx={x} cy={y} r="8" fill="#34d399" opacity="0.2" />
                    <circle
                      cx={x}
                      cy={y}
                      r="4.6"
                      fill="#34d399"
                      stroke="#fff"
                      strokeWidth="1.1"
                    />
                  </g>
                );
              })}
            </svg>

            <p className="mt-2 text-center text-[11.5px] font-medium text-brand-100/45">
              amber = origin belts · green = destination ports · arcs = live sea lanes
            </p>
          </div>

          {/* ================= SHIPPING PHOTO PANEL ================= */}
          <div className="min-w-0 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur">
            <div className="relative">
              <img
                src={PHOTOS.shipping}
                alt="Container vessel being loaded at port — SLN GLOBALS export sailings"
                className="h-60 w-full object-cover sm:h-72"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-950/90 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 rounded-full bg-brand-950/70 px-3 py-1.5 text-[11px] font-semibold text-accent-300 ring-1 ring-white/15 backdrop-blur">
                ⚓ FCL sailings · Nhava Sheva &amp; Mundra gateways
              </span>
            </div>

            <div className="p-5 sm:p-6">
              <h3 className="font-display text-lg font-extrabold text-white">
                Reefer &amp; dry box, every lane mapped
              </h3>
              <p className="mt-2 text-[13px] leading-relaxed text-brand-100/65">
                Consignments gate-in at Nhava Sheva or Mundra and sail on
                weekly services to the Gulf, Southeast Asia, Europe, the UK,
                the Americas and Australia — FCL, reefer, LCL groupage or
                air-freight, matched to your order size.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                {[["SIX", "origin belts"], [String(PORTS.length), "sea lanes"], ["5–32", "days at sea"]].map(
                  ([v, l]) => (
                    <div
                      key={l}
                      className="rounded-xl border border-white/10 bg-white/[0.04] px-2 py-3"
                    >
                      <p className="font-display text-lg font-extrabold text-accent-300">
                        {v}
                      </p>
                      <p className="mt-0.5 text-[10.5px] font-semibold text-brand-100/60">
                        {l}
                      </p>
                    </div>
                  ),
                )}
              </div>

              <a
                href="#contact"
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-accent-500 px-5 py-2.5 text-[13px] font-bold text-brand-950 transition hover:bg-accent-400"
              >
                Plan a shipment →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
