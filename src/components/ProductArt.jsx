/* Hand-drawn flat SVG product illustrations — self-contained, no external images */

const A = {
  /* ---------- SPICES ---------- */
  chilliS4: (
    <g>
      <ellipse cx="100" cy="118" rx="52" ry="9" fill="rgba(0,0,0,0.25)" />
      <path d="M60 108 Q 74 62 104 66 Q 96 108 60 108 Z" fill="#d13438" />
      <path d="M104 66 Q 84 84 70 104 Q 90 96 102 78 Z" fill="#7f1d1d" opacity="0.5" />
      <path d="M104 66 Q 108 58 116 58 L 112 70 Z" fill="#4d7c0f" />
      <path d="M148 100 Q 130 52 96 58 Q 118 104 148 100 Z" fill="#ef4444" transform="rotate(14 120 80)" />
      <path d="M96 58 Q 108 50 118 54 L 108 64 Z" fill="#4d7c0f" transform="rotate(14 120 80)" />
      <circle cx="128" cy="52" r="7" fill="#fb7185" opacity="0.6" />
      <circle cx="78" cy="58" r="5" fill="#fb7185" opacity="0.4" />
    </g>
  ),
  tejaS17: (
    <g>
      <ellipse cx="100" cy="120" rx="44" ry="8" fill="rgba(0,0,0,0.25)" />
      <path d="M76 112 Q 82 58 118 54 Q 130 84 112 116 Q 94 122 76 112 Z" fill="#ef4444" />
      <path d="M96 110 Q 118 92 116 60 Q 128 88 108 114 Z" fill="#991b1b" opacity="0.55" />
      <path d="M118 54 Q 126 46 134 50 L 124 62 Z" fill="#166534" />
      <path d="M92 34 Q 104 22 122 24 M 100 40 Q 108 30 124 30" stroke="#f59e0b" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.85" />
      <circle cx="70" cy="60" r="4" fill="#f59e0b" opacity="0.7" />
    </g>
  ),
  turmeric: (
    <g>
      <ellipse cx="100" cy="120" rx="54" ry="9" fill="rgba(0,0,0,0.25)" />
      <path d="M58 106 Q 66 72 96 74 Q 128 76 140 100 Q 126 116 92 112 Q 68 116 58 106 Z" fill="#eab308" />
      <path d="M92 74 Q 88 92 92 110" stroke="#a16207" strokeWidth="3" fill="none" opacity="0.6" />
      <path d="M112 78 Q 110 94 110 108" stroke="#a16207" strokeWidth="3" fill="none" opacity="0.5" />
      <path d="M74 82 Q 74 98 76 112" stroke="#a16207" strokeWidth="3" fill="none" opacity="0.5" />
      <circle cx="142" cy="72" r="10" fill="#facc15" opacity="0.55" />
      <circle cx="142" cy="72" r="16" fill="none" stroke="#facc15" strokeWidth="2" opacity="0.4" />
    </g>
  ),
  cumin: (
    <g>
      <ellipse cx="100" cy="120" rx="50" ry="8" fill="rgba(0,0,0,0.25)" />
      <circle cx="100" cy="82" r="30" fill="#a16207" opacity="0.95" />
      <circle cx="100" cy="82" r="18" fill="#ca8a04" />
      {[
        [88, 78, -20],
        [104, 74, 30],
        [96, 90, 80],
        [112, 88, -40],
        [82, 92, 10],
      ].map(([x, y, r], i) => (
        <g key={i} transform={`translate(${x} ${y}) rotate(${r})`}>
          <ellipse rx="4" ry="9" fill="#f4e4c1" stroke="#854d0e" strokeWidth="1.2" />
          <line x1="0" y1="-6" x2="0" y2="6" stroke="#854d0e" strokeWidth="1" />
        </g>
      ))}
      <path d="M100 52 Q 104 44 112 44" stroke="#65a30d" strokeWidth="3" fill="none" strokeLinecap="round" />
    </g>
  ),

  /* ---------- WATER ---------- */
  bottle500: (
    <g>
      <ellipse cx="100" cy="122" rx="38" ry="8" fill="rgba(0,0,0,0.3)" />
      <path d="M86 44 Q 86 56 80 62 L 80 104 Q 96 112 120 104 L 120 62 Q 114 56 114 44 Z" fill="rgba(148,202,240,0.95)" stroke="#7ec3ea" strokeWidth="1.5" />
      <rect x="83" y="38" width="34" height="10" rx="3" fill="#0d9488" />
      <rect x="88" y="70" width="24" height="24" rx="3" fill="#ffffff" stroke="#bfdbfe" />
      <path d="M94 76 Q 100 74 106 76 L 105 90 L 95 90 Z" fill="#0ea5e9" opacity="0.85" />
      <path d="M84 96 Q 100 104 118 94" stroke="#bae6fd" strokeWidth="3" fill="none" opacity="0.7" />
      <circle cx="126" cy="52" r="5" fill="#e0f2fe" opacity="0.9" />
      <circle cx="134" cy="64" r="3" fill="#e0f2fe" opacity="0.7" />
    </g>
  ),
  bottle1L: (
    <g>
      <ellipse cx="100" cy="124" rx="46" ry="8" fill="rgba(0,0,0,0.3)" />
      <path d="M88 36 Q 88 50 80 58 L 80 108 Q 98 118 122 108 L 122 58 Q 114 50 114 36 Z" fill="#56a8dd" />
      <rect x="85" y="28" width="32" height="11" rx="3.5" fill="#134e4a" />
      <rect x="84" y="68" width="34" height="30" rx="4" fill="#ffffff" stroke="#bfdbfe" />
      <path d="M92 74 Q 101 72 110 74 L 109 92 L 93 92 Z" fill="#0891b2" opacity="0.9" />
      <path d="M84 100 Q 100 110 124 98" stroke="#93c5fd" strokeWidth="3.5" fill="none" opacity="0.6" />
      <circle cx="72" cy="66" r="5" fill="#dbeafe" opacity="0.8" />
      <circle cx="128" cy="48" r="4" fill="#dbeafe" opacity="0.8" />
    </g>
  ),
  jar20L: (
    <g>
      <ellipse cx="100" cy="124" rx="46" ry="9" fill="rgba(0,0,0,0.3)" />
      <path d="M72 50 L 128 50 Q 136 50 136 60 L 136 100 Q 136 122 100 122 Q 64 122 64 100 L 64 60 Q 64 50 72 50 Z" fill="#1e73be" />
      <path d="M64 62 L 136 62 L 136 72 L 64 72 Z" fill="#1663a8" opacity="0.9" />
      <rect x="90" y="38" width="20" height="14" rx="3" fill="#bae6fd" />
      <rect x="74" y="80" width="52" height="26" rx="5" fill="#ffffff" />
      <path d="M82 88 Q 100 84 118 88 L 118 100 Q 100 104 82 100 Z" fill="#0ea5e9" opacity="0.85" />
      <path d="M70 58 Q 74 46 84 50" stroke="#93c5fd" strokeWidth="4" fill="none" opacity="0.5" />
    </g>
  ),

  /* ---------- PHARMA ---------- */
  tablets: (
    <g>
      <ellipse cx="100" cy="122" rx="44" ry="8" fill="rgba(0,0,0,0.3)" />
      <g transform="rotate(-8 100 84)">
        <rect x="62" y="66" width="76" height="34" rx="8" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1.5" />
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect x={68 + i * 17} y="71" width="11" height="24" rx="2.5" fill="rgba(148,163,184,0.4)" />
            <circle cx={73.5 + i * 17} cy="83" r="6.5" fill="#0891b2" />
            <circle cx={73.5 + i * 17} cy="83" r="6.5" fill="none" stroke="#0e7490" strokeWidth="1" />
          </g>
        ))}
      </g>
      <g transform="rotate(18 130 108)">
        <rect x="112" y="102" width="38" height="14" rx="7" fill="#f59e0b" />
        <rect x="112" y="102" width="19" height="14" rx="7" fill="#d97706" />
        <rect x="122" y="102" width="2" height="14" fill="#fffbeb" opacity="0.85" />
      </g>
      <circle cx="66" cy="52" r="4" fill="#e2e8f0" opacity="0.8" />
    </g>
  ),
  apis: (
    <g>
      <ellipse cx="100" cy="122" rx="44" ry="8" fill="rgba(0,0,0,0.3)" />
      <rect x="66" y="62" width="56" height="54" rx="8" fill="#7c3aed" />
      <rect x="66" y="62" width="56" height="16" rx="8" fill="#a78bfa" opacity="0.6" />
      <ellipse cx="94" cy="62" rx="28" ry="7" fill="#8b5cf6" />
      <ellipse cx="94" cy="62" rx="20" ry="4.5" fill="#5b21b6" />
      <g stroke="#e9d5ff" strokeWidth="2" fill="none">
        <circle cx="132" cy="70" r="7" />
        <circle cx="142" cy="82" r="5" />
        <line x1="136" y1="76" x2="140" y2="80" />
      </g>
      <path d="M70 72 Q 74 86 70 100" stroke="#ddd6fe" strokeWidth="3" fill="none" opacity="0.7" />
    </g>
  ),
  nutra: (
    <g>
      <ellipse cx="100" cy="122" rx="44" ry="8" fill="rgba(0,0,0,0.3)" />
      <path d="M64 96 Q 74 56 108 50 Q 100 74 84 96 Q 74 104 64 96 Z" fill="#22c55e" />
      <path d="M104 54 Q 100 72 88 90" stroke="#15803d" strokeWidth="2.5" fill="none" />
      <path d="M136 78 Q 132 96 120 104 Q 114 92 118 80 Q 128 72 136 78 Z" fill="#16a34a" opacity="0.9" />
      <g transform="rotate(-14 126 116)">
        <ellipse cx="126" cy="116" rx="16" ry="10" fill="#f59e0b" />
        <ellipse cx="132" cy="112" rx="6" ry="3" fill="#fcd34d" opacity="0.8" />
      </g>
      <circle cx="66" cy="56" r="4" fill="#bbf7d0" opacity="0.8" />
      <circle cx="72" cy="50" r="2.5" fill="#bbf7d0" opacity="0.6" />
    </g>
  ),
};

const BG = {
  spices: ["#431407", "#7f1d1d"],
  water: ["#082f49", "#134e4a"],
  pharma: ["#1e1b4b", "#4c1d95"],
};

export default function ProductArt({ art, category, className = "" }) {
  const [from, to] = BG[category] || ["#1e293b", "#334155"];
  return (
    <svg
      viewBox="0 0 200 130"
      className={`w-full ${className}`}
      role="img"
      aria-label="Product illustration"
    >
      <defs>
        <linearGradient id={`pa-${art}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`pa-glow-${art}`} cx="50%" cy="42%" r="70%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.16)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="200" height="130" fill={`url(#pa-${art})`} />
      <rect width="200" height="130" fill={`url(#pa-glow-${art})`} />
      <g opacity="0.14">
        <circle cx="24" cy="20" r="2" fill="#fff" />
        <circle cx="52" cy="12" r="1.5" fill="#fff" />
        <circle cx="170" cy="24" r="2.5" fill="#fff" />
        <circle cx="188" cy="60" r="1.5" fill="#fff" />
        <circle cx="14" cy="94" r="1.5" fill="#fff" />
        <path d="M0 22 L 40 22 A 11 11 0 0 1 62 22" fill="none" stroke="#fff" strokeWidth="1" />
        <path d="M150 118 Q 160 104 172 118" fill="none" stroke="#fff" strokeWidth="1" />
      </g>
      {A[art] || null}
    </svg>
  );
}
