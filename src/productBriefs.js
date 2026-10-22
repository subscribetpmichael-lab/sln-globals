/* per-product catalogue detail pages, sugoglobal.com style.
   Structural sections (chips, brief cards, what-gets-confirmed) are shared
   across products; only the facts below differ. */
export const BRIEFS = {
  chilli: {
    title: "Chilli",
    varieties: "Guntur Sannam · Teja · Byadgi · Kashmiri",
    intro:
      "source chilli from major Indian chilli-growing belts with buyer-specific specifications for variety, grade, pungency, colour, moisture, cleanliness and packaging.",
    photo: { main: "chilli2", alt: "Chilli flakes and dried red chillies", gallery: "chilli", galleryAlt: "Dried red chillies at the mandi" },
    regions: [
      "Andhra Pradesh — Guntur belt",
      "Karnataka — Byadgi region",
      "Jammu & Kashmir",
      "Himachal Pradesh",
      "Gujarat",
      "Other Indian chilli-growing states",
    ],
    buyers: [
      "Spice processors",
      "Food manufacturers",
      "Sauce and condiment manufacturers",
      "Distributors & wholesalers",
      "Retail and private-label buyers",
    ],
    flow: [
      "Verified supplier sourcing",
      "Buyer-specific variety and grade matching",
      "Lot-based quality checks and testing",
      "Export documentation and shipment coordination",
    ],
    types: [
      "Whole Dried Chillies — stem / no-stem, sorted and graded",
      "Chilli Powder — custom mesh size, ASTA colour value and moisture",
      "Chilli Flakes — cut size and seed content tailored to requirement",
      "Guntur Sannam (S4)",
      "Teja (S17)",
      "Byadgi",
      "Kashmiri",
      "Reshampatti",
      "273 and other regional varieties",
    ],
    catalogueNeeds: "chilli variety, grade, SHU/ASTA target, testing requirements, quantity and destination",
  },

  coffee: {
    title: "Coffee",
    varieties: "Arabica · Robusta · Speciality",
    intro:
      "source Indian coffee to buyer-defined grade, origin, processing, physical parameters and cup profile, with supplier verification and lot-based quality confirmation before shipment commitment.",
    photo: { main: "coffee1", alt: "Robusta and Arabica beans in jute sacks", gallery: "coffee2", galleryAlt: "Green coffee beans cupped in hands" },
    regions: ["Karnataka", "Kerala", "Tamil Nadu"],
    buyers: [
      "Commercial coffee buyers",
      "Specialty roasters",
      "Coffee importers",
      "Foodservice and beverage businesses",
      "Private-label buyers",
    ],
    flow: [
      "Buyer-specific sourcing",
      "Supplier verification",
      "Lot-based checks for moisture, screen, defects and cup profile",
      "Export documentation, packaging and Incoterm coordination",
    ],
    types: [
      "Arabica — washed and natural grades",
      "Robusta — export-oriented grades",
      "Speciality & Estate Coffee — traceable, lot-specific offerings",
      "Green Coffee Beans — commercial and export grades",
      "Roasted Coffee — buyer-specified roast profile",
      "Ground Coffee — whole bean, coarse, medium, fine and espresso where available",
      "Custom Arabica / Robusta blends",
      "Private-label coffee subject to buyer requirements and supplier capability",
    ],
    catalogueNeeds:
      "coffee type, grade, processing, screen, moisture, quantity, packaging, destination and Incoterm requirements",
  },

  basmati: {
    title: "Basmati Rice",
    varieties: "1121 · 1509 · Pusa · Traditional",
    intro:
      "sources export-grade basmati rice from India's Punjab–Haryana and Uttarakhand–UP belts to buyer-defined variety, grain length, purity, moisture and breakage specifications — every lot is checked at the mill and before dispatch, with hygienic processing at certified facilities.",
    photo: { main: "basmati", alt: "Aged basmati rice in a wooden bowl with a wooden scoop", gallery: "basmati", galleryAlt: "Long-grain aged basmati, sorted and packed for export" },
    regions: [
      "Punjab — premium aged lots",
      "Haryana — 1121 & 1509 belt",
      "Western Uttar Pradesh — traditional belt",
      "Uttarakhand — premium paddy",
    ],
    buyers: [
      "Rice importers & wholesalers",
      "Supermarket and private-label buyers",
      "Foodservice and catering businesses",
      "Food manufacturers",
      "Distributors & repackers",
    ],
    flow: [
      "Verified farm and mill sourcing",
      "Buyer-specific variety, grain length and processing matching",
      "Lot checks — purity, moisture, breakage, grain size and aroma",
      "Export documentation, packaging and Incoterm coordination",
    ],
    types: [
      "1121 Raw — extra-long grain, highest elongation",
      "1121 Steam — export favourite for GCC",
      "1121 Sella (Parboiled) — retail and bulk formats",
      "1509 Basmati — early season, value-tuned",
      "Pusa Basmati — mid-segment and private label",
      "Traditional Basmati — legacy aroma premium",
      "Sona Masoori & Swarna — medium-grain non-basmati",
      "IR 64 Parboiled — bulk and food-aid grades",
      "Broken rice — for processing, snacks and brewing",
    ],
    catalogueNeeds:
      "rice variety, grain length, processing (raw / steam / sella / parboiled), moisture and breakage targets, packaging, quantity, destination and Incoterm requirements",
  },

  "non-basmati-rice": {
    title: "Non-Basmati Rice",
    varieties: "Swarna · IR 64 · IR 36 · Sona Masoori · Broken",
    intro:
      "export a wide range of non-basmati rice varieties that meet international standards in quality, hygiene and taste — short to long grain lots with distinct flavour and high yield, sourced from select farms using sustainable cultivation and processed with hygienic, closely monitored milling.",
    photo: { main: "nonbasmati", alt: "Sortex-cleaned non-basmati rice in bulk sacks", gallery: "nonbasmati", galleryAlt: "Non-basmati rice, double-polished and ready for export packing" },
    regions: [
      "Andhra Pradesh — Sona Masoori & Swarna belt",
      "Telangana — parboiled rice mills",
      "West Bengal & Eastern UP — IR 64 / Swarna",
      "Karnataka & Tamil Nadu — medium-grain lots",
    ],
    buyers: [
      "Rice importers & wholesalers",
      "Supermarket and private-label buyers",
      "Food manufacturers",
      "Foodservice and catering businesses",
      "Distributors & repackers",
    ],
    flow: [
      "Verified farm and mill sourcing",
      "Buyer-specific variety, grain profile and processing matching",
      "Lot checks — sortex cleanliness, purity, moisture, breakage and cooking quality",
      "Export documentation, packaging and Incoterm coordination",
    ],
    types: [
      "Swarna Rice — popular medium grain, everyday consumption",
      "IR 64 Parboiled — long grain, high yield, cost-effective",
      "IR 36 Rice — soft texture with a pleasant aroma",
      "Sona Masoori — lightweight, aromatic South-Indian staple",
      "IR 64 Raw — bulk wholesale export grade",
      "Broken Rice — for processing, snacks, pet food and brewing",
      "Sortex-cleaned & polished lots — per buyer cleanliness specs",
      "Retail packs & bulk sacks — 5 kg to 50 kg formats",
    ],
    catalogueNeeds:
      "rice type, variety, grain profile, processing (raw / steam / parboiled), sortex cleanliness, breakage, packaging, quantity, destination and Incoterm requirements",
  },

  turmeric: {
    title: "Turmeric",
    varieties: "Fingers · Powder · Curcumin Extracts",
    intro:
      "export India's golden spice — in strong global demand across the food, cosmetic and pharmaceutical industries — to buyer-defined curcumin content, colour and moisture. Every batch is sourced from India's finest farms, closely monitored from field to container and tested against international quality and hygiene standards.",
    photo: { main: "turmeric4", alt: "Sun-dried turmeric fingers in a stone mortar", gallery: "turmeric2", galleryAlt: "Turmeric finger lots arriving at the mandis in jute sacks" },
    regions: [
      "Nizamabad — Telangana finger belt",
      "Salem & Erode — Tamil Nadu",
      "Duggirala — Andhra Pradesh",
      "Sangli — Maharashtra",
    ],
    buyers: [
      "Food & beverage — spices, condiments, curry powders",
      "Pharmaceuticals & Ayurveda — capsules, curcumin extract",
      "Cosmetics & skincare — natural formulations",
      "Health & wellness — superfood blends, detox teas",
    ],
    flow: [
      "Traceable farm and mill sourcing with buyer-specified specs",
      "Sampling and approval before bulk processing",
      "Lot QC at NABL-certified labs — curcumin, microbial load, moisture, foreign matter",
      "FSSAI / APEDA-compliant documentation — phyto, COO — and shipment coordination",
    ],
    types: [
      "Turmeric Fingers — whole, sun-dried, natural oils and colour retained",
      "Polished & Unpolished — both variants per market preference",
      "Turmeric Powder — hygienically ground, bulk and private-label formats",
      "Curcumin-rich Extracts — pharmaceutical and nutraceutical grade",
      "Double-polished export lots — low-moisture, colour-tight",
      "High-curcumin grades — lab-checked per consignment",
      "Vacuum-sealed retail packs — moisture-proof transit packing",
      "Bulk jute sacks — buyer-labelled export packing",
    ],
    catalogueNeeds:
      "turmeric variety, curcumin target, physical specs (moisture, foreign matter), certifications, packaging, quantity, destination and Incoterm requirements",
  },
};
