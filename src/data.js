export const COMPANY = {
  name: "SLN GLOBALS",
  tagline: "Spices · Packaged Water · Pharmaceuticals — from Telangana to the world",
  email: "info@slnglobals.com",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  address:
    "7-7-J 0001, J Komuraiah to Velumawada Cross, Parkal, Hanumakonda District, Telangana 506164, India",
  gstin: "36OIFPS8030B1Z2",
  launchDate: "20 October 2026",
  proprietor: "Omkaram Sathwik Raju",
  hours: "Mon–Sat · 9:30 AM – 7:00 PM IST",
};

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#products", label: "Products" },
  { href: "#sourcing", label: "Sourcing Globe" },
  { href: "#process", label: "Process" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export const CATEGORIES = [
  {
    id: "spices",
    label: "Spices",
    emoji: "🌶️",
    blurb: "Sourced from the Deccan chilli–turmeric mandis, tested before packing, shipped with full traceability.",
    tag: "phytosanitary certified",
    items: [
      {
        name: "Guntur S4 Chillies",
        emoji: "🌶️",
        origin: "Guntur, Andhra Pradesh",
        hs: "0904.21",
        pack: "25 kg PP bags / vacuum bales · powder & flakes on spec",
        moq: "5 MT",
        desc: "India's most traded chilli: 35,000–40,000 SHU heat with ASTA colour 80+. Steam-sterilised, aflatoxin-tested lots with third-party lab reports.",
      },
      {
        name: "Teja S17 Chillies",
        emoji: "🔥",
        origin: "Khammam & AP border mandis",
        hs: "0904.21",
        pack: "25 kg bales",
        moq: "3 MT",
        desc: "The premium pungency pick — 60,000–100,000 SHU — favoured by Gulf and Southeast Asian spice houses for paste and oleoresin making.",
      },
      {
        name: "Turmeric Finger (Nizamabad)",
        emoji: "🟡",
        origin: "Nizamabad, Telangana",
        hs: "0910.30",
        pack: "25 kg jute / PP bags · ground 100-mesh powder",
        moq: "5 MT",
        desc: "3–5% curcumin, double-polished boiles from the Telangana belt. Ground variants processed to tight mesh and volatile-oil specs.",
      },
      {
        name: "Cumin Seeds (VLCG 9911)",
        emoji: "🌱",
        origin: "Unjha, Gujarat",
        hs: "0909.31",
        pack: "25 kg PP bags",
        moq: "5 MT",
        desc: "99% purity bold grade from India's cumin capital, machine-cleaned with Sortex — the clean-start staple for any spice traders' basket.",
      },
    ],
  },
  {
    id: "water",
    label: "Packaged Drinking Water",
    emoji: "💧",
    blurb: "BPA-free, ozonated water lines with private-label printing for retailers, aviation and hospitality buyers.",
    tag: "sealed & batch-coded",
    items: [
      {
        name: "500 ml PET Bottles",
        emoji: "🚰",
        origin: "Telangana bottling plants",
        hs: "2201.10",
        pack: "24 × 500 ml shrink-cased cartons, pallet-wrapped",
        moq: "1 × 20ft (mixed 500 ml / 1 L allowed)",
        desc: "TDS-balanced 80–120 ppm water, pH 7.2–7.6, ozonated at fill. Private-label sleeves and custom bottle moulds on program orders.",
      },
      {
        name: "1 L PET Bottles",
        emoji: "🧴",
        origin: "Telangana bottling plants",
        hs: "2201.10",
        pack: "12 × 1 L shrink-cased cartons",
        moq: "1 × 20ft",
        desc: "Long-shelf-life mineral profile with tamper-evident caps and batch laser-coding — built for duty-free, hotels and retail chains.",
      },
      {
        name: "20 L Bulk Jars",
        emoji: "🫙",
        origin: "Telangana bottling plants",
        hs: "2201.10",
        pack: "20 L food-grade jars, wrap-protected on pallets",
        moq: "1 × 20ft (approx. 650 jars)",
        desc: "High-volume kitchen and event supply format with returnable-jar handling programs for regional distributors.",
      },
    ],
  },
  {
    id: "pharma",
    label: "Pharmaceuticals",
    emoji: "💊",
    blurb: "Formulations, APIs and nutraceuticals supplied through WHO-GMP certified partner plants with batch-level documentation.",
    tag: "WHO-GMP partner units",
    items: [
      {
        name: "Generic Formulations",
        emoji: "💊",
        origin: "Hyderabad Pharma City partners",
        hs: "3004.90",
        pack: "Alu-packs and bottles in defenced secondary cartons · cold-chain where required",
        moq: "1 pallet per SKU",
        desc: "Tablets, capsules and syrups from WHO-GMP plants — COA, batch release and stability reports shared per consignment.",
      },
      {
        name: "APIs & Key Intermediates",
        emoji: "⚗️",
        origin: "Hyderabad / Telangana units",
        hs: "2941 / 2942 series",
        pack: "25 kg fibre drums with liner",
        moq: "25–50 kg per API",
        desc: "Pharma-grade active ingredients with impurity profiles and DMF-ready documentation for regulated-market buyers.",
      },
      {
        name: "Nutraceuticals",
        emoji: "🧬",
        origin: "Partner sites, Telangana",
        hs: "2106.90",
        pack: "Bottles, strips and sachets; bulk formats to packers",
        moq: "10,000 units per SKU",
        desc: "Vitamins, herbal extracts and supplements built to buyer artwork with food-safety clearances for destination markets.",
      },
    ],
  },
];

export const ORIGINS = [
  {
    id: "guntur",
    name: "Guntur Belt",
    state: "Andhra Pradesh",
    emoji: "🌶️",
    lon: 80.4,
    lat: 16.3,
    color: "#ef4444",
    products: ["Chilli S4 (35k SHU)", "Teja S17", "Chilli powder (ASTA 80+)"],
    season: "Jan – Apr arrivals · stocks year-round",
    moq: "3–5 MT lots",
    port: "Chennai / Krishnapatnam",
  },
  {
    id: "nizamabad",
    name: "Nizamabad Turmeric",
    state: "Telangana",
    emoji: "🟡",
    lon: 78.1,
    lat: 18.2,
    color: "#fbbf24",
    products: ["Turmeric fingers", "Ground turmeric (100-mesh)", "Blended masalas"],
    season: "Feb – Apr arrivals",
    moq: "5 MT",
    port: "Hyderabad / Chennai → sea",
  },
  {
    id: "unjha",
    name: "Unjha Mandi",
    state: "Gujarat",
    emoji: "🌱",
    lon: 72.4,
    lat: 23.8,
    color: "#34d399",
    products: ["Cumin VLCG 9911", "Fennel & fenugreek", "Psyllium husk"],
    season: "Mar – Aug",
    moq: "5 MT program lots",
    port: "Mundra / Kandla",
  },
  {
    id: "kerala",
    name: "Malabar Coast",
    state: "Kerala",
    emoji: "🌿",
    lon: 76.6,
    lat: 10.0,
    color: "#4ade80",
    products: ["Malabar black pepper", "Green cardamom 8 mm", "Ginger (fresh & dry)"],
    season: "Nov – Feb harvest",
    moq: "3 MT · 300 kg marquee lots",
    port: "Kochi / Bengaluru (air)",
  },
  {
    id: "hyderabad",
    name: "Hyderabad Hubs",
    state: "Telangana",
    emoji: "💊",
    lon: 78.4,
    lat: 17.4,
    color: "#a78bfa",
    products: ["Generic formulations", "APIs & intermediates", "Bottled water (private label)"],
    season: "Year-round program lots",
    moq: "From 1 pallet per SKU",
    port: "Hyderabad RGIA (air) / Chennai (sea)",
  },
  {
    id: "hq",
    name: "Parkal HQ Desk",
    state: "Hanumakonda, Telangana",
    emoji: "🏢",
    lon: 79.7,
    lat: 18.2,
    color: "#fb923c",
    products: ["Chilli & turmeric procurement", "Customs & trade documentation", "Water-line coordination"],
    season: "Mon–Sat trade desk",
    moq: "—",
    port: "Head office at the origin mandis",
  },
];

export const PORTS = [
  { flag: "🇺🇸", name: "New York — USA", geo: [-74.0, 40.7], days: "26–32 days" },
  { flag: "🇬🇧", name: "Felixstowe — UK", geo: [1.35, 51.95], days: "20–24 days" },
  { flag: "🇩🇪", name: "Hamburg — EU", geo: [10.0, 53.55], days: "22–26 days" },
  { flag: "🇦🇪", name: "Jebel Ali — UAE", geo: [55.06, 25.01], days: "5–7 days" },
  { flag: "🇸🇬", name: "Singapore — SG", geo: [103.85, 1.29], days: "12–15 days" },
  { flag: "🇦🇺", name: "Sydney — AUS", geo: [151.2, -33.87], days: "20–26 days" },
];

export const HUB = { label: "Nhava Sheva Gateway", geo: [72.95, 18.95] };
export const HUB_GEO_REF = HUB.geo;

export const STATS = [
  { value: "20 Oct 2026", label: "Commercial launch date" },
  { value: "3", label: "Focused product verticals" },
  { value: "GST", label: "Registered trade entity" },
  { value: "40+", label: "Export markets on roadmap" },
];

export const WHY_US = [
  {
    icon: "🧾",
    title: "Compliance-First Paperwork",
    desc: "GST-registered from day one, with IEC and FSSAI tracked project-style. Invoices, permits and lab reports are filed before your shipment moves — not after.",
  },
  {
    icon: "🎯",
    title: "Three Verticals Only",
    desc: "Spices, packaged water and pharmaceuticals — chosen because our home region genuinely excels at each. We'd rather master three trades than advertise ten.",
  },
  {
    icon: "🚚",
    title: "Right-Sized Logistics",
    desc: "Full-container, pallet groupage and air-freight options sized to your actual order — with honest lead times instead of optimistic promises.",
  },
  {
    icon: "💬",
    title: "Direct to the Proprietor",
    desc: "Enquiries reach Sathwik's own desk — one accountable name behind every quotation, sample dispatch and document sent.",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Enquiry & RFQ",
    desc: "Share your specs — grade, HS code, quantity, destination. The trade desk confirms availability and indicative pricing within one working day.",
    icon: "📨",
  },
  {
    step: "02",
    title: "Samples & Quotation",
    desc: "Courier samples for your organoleptic or lab checks, then final FOB / CFR / CIF quotes with incoterms, packing and payment terms (LC, TT, escrow).",
    icon: "🧾",
  },
  {
    step: "03",
    title: "Contract & Documentation",
    desc: "Proforma invoice and sales contract with quality schedules. We prepare GST invoices, certificates of origin, phyto and analysis reports on schedule.",
    icon: "📝",
  },
  {
    step: "04",
    title: "QC, Grading & Packing",
    desc: "Lot selection, cleaning, lab testing and export-grade packing — at our partner units, with buyer inspectors welcome at any stage.",
    icon: "🔎",
  },
  {
    step: "05",
    title: "Customs & Port Operations",
    desc: "Shipping bill filing, permits, container stuffing with recording and vessel booking — tracked to gate-in day.",
    icon: "⚓",
  },
  {
    step: "06",
    title: "Delivery & After-sales",
    desc: "BL/telex release, insurance support and arrival follow-ups. Anything off-spec is acknowledged transparently — that's how a new name earns a market.",
    icon: "📦",
  },
];

export const CERTIFICATES = [
  {
    id: "gst",
    name: "GST Registration",
    code: "Form GST REG-06",
    emoji: "🧾",
    authority: "Goods & Services Tax Network, Telangana",
    scope:
      "Regular-registration trade entity for goods, effective 01/09/2026. GSTIN 36OIFPS8030B1Z2 · proprietor Omkaram Sathwik Raju · principal place of business Parkal, Hanumakonda.",
    color: "#0369a1",
    status: "issued",
    file: true,
  },
  {
    id: "iec",
    name: "IEC — Import–Export Code",
    code: "DGFT Licence",
    emoji: "🔐",
    authority: "Directorate General of Foreign Trade, Ministry of Commerce",
    scope:
      "The PAN-based 10-digit licence that authorises any Indian entity to legally import and export. Application filed and in progress — the next certificate this business earns.",
    color: "#1d4ed8",
    status: "in-progress",
  },
  {
    id: "fssai",
    name: "FSSAI Licence",
    code: "Food Safety Registration",
    emoji: "🛡️",
    authority: "Food Safety & Standards Authority of India",
    scope:
      "Food Business Operator licence for hygienic spice handling and packaged-drinking-water export. Filing in process — required before the first food consignment clears.",
    color: "#0d9488",
    status: "in-progress",
  },
  {
    id: "gmp",
    name: "WHO-GMP Compliance",
    code: "Pharma Partner Credentials",
    emoji: "💊",
    authority: "Partner plants certified by CDSCO-accredited inspectors",
    scope:
      "Our pharmaceutical lines are supplied exclusively through WHO-GMP certified partner plants, with COA, batch-release and stability documentation provided per consignment.",
    color: "#7c3aed",
    status: "partner",
  },
];

export const CERT_NOTE =
  "The GST certificate is shown exactly as issued by the Government of India. IEC and FSSAI licences are published here as each one is granted — interim status available on request.";
