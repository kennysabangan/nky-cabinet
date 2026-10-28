/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
 *
 * Content rules (these keep the site out of trouble with Google and the FTC):
 * - No invented reviews, ratings, review counts, or "years in business".
 * - No credentials (licensed, insured, background-checked, guarantees,
 *   warranties, financing) until the service partner actually has them.
 */

export interface Service {
  title: string;
  slug: string;
  description: string;
  photo: string;
}

export interface City {
  name: string;
  slug: string;
  lat: string;
  lng: string;
  intro: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Cabinet Refacing Pros",
  phone: "(714) 494-9486",
  phoneE164: "+17144949486",
  domain: "nkycabinetpros.com",
  siteUrl: "https://nkycabinetpros.com",

  // ── Form Webhook ───────────────────────────────────────────────
  // Google Sheets web app URL (set after deploying google-sheets-webhook.gs)
  formWebhookUrl: "",

  // ── Analytics ───────────────────────────────────────────────────────
  // Set these to your real GA4 / GTM IDs to enable tracking.
  // Leave as placeholders (or empty) to disable — the site still works.
  ga4MeasurementId: "G-XXXXXXXXXX",   // Google Analytics 4
  gtmContainerId: "GTM-XXXXXXX",      // Google Tag Manager

  // Google Search Console → Add property → URL prefix → "HTML tag" method.
  // Paste only the content="..." value here. Leave empty if verified via DNS.
  googleSiteVerification: "",

  // helper: truthy only when the value looks like a real ID
  get hasGA4() {
    return this.ga4MeasurementId && !this.ga4MeasurementId.startsWith('G-XX');
  },
  get hasGTM() {
    return this.gtmContainerId && !this.gtmContainerId.startsWith('GTM-XX');
  },

  // ── Location ───────────────────────────────────────────────────────
  city: "Northern Kentucky",
  state: "KY",
  region: "NKY",
  geoLat: "39.0",
  geoLng: "-84.5",

  // ── SEO keywords ──────────────────────────────────────────────────
  serviceKeyword: "cabinet refacing",
  serviceKeywordPlural: "cabinet refacing services",
  brandColor: "#1a6bb5",

  // ── Hero content ─────────────────────────────────────────────────
  heroTagline: "Northern Kentucky Cabinet Refacing Service",
  heroSubtext: "New kitchen look without the full remodel cost. Call for a free estimate.",
  heroAlt: "Professional cabinet refacing in a Northern Kentucky kitchen",

  // ── Computed city lists ──────────────────────────────────────────
  get cityListShort() {
    return this.cities.slice(0, 4).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },
  get cityListLong() {
    return this.cities.slice(0, 8).map(c => c.name.replace(/, KY$/, '')).join(', ');
  },

  // ── Opening hours ─────────────────────────────────────────────────
  openingHours: "Mo-Sa 08:00-18:00",

  // ── Services ──────────────────────────────────────────────────────
  services: [
    {
      title: "Kitchen Cabinet Refacing",
      slug: "kitchen-refacing",
      description:
        "Replace your cabinet doors and drawer fronts while keeping the existing boxes. Choose from hundreds of styles, colors, and finishes. 3-5 day installation. 50-70% less than full replacement.",
      photo: "/photos/residential.jpg",
    },
    {
      title: "Cabinet Door Replacement",
      slug: "door-replacement",
      description:
        "Just need new doors? We custom-build and install replacement doors in any style — shaker, raised panel, flat panel, and more. Match your existing kitchen or go for a new look.",
      photo: "/photos/commercial.jpg",
    },
    {
      title: "Cabinet Hardware & Accessories",
      slug: "hardware-accessories",
      description:
        "New hinges, handles, drawer slides, pull-out shelves, lazy susans, and soft-close upgrades. Small changes that make a big difference in your kitchen's function.",
      photo: "/photos/cabinet-hardware.jpg",
    },
  ] as Service[],

  // ── FAQs ──────────────────────────────────────────────────────────
  faqs: [
    {
      question: "How much does cabinet refacing cost?",
      answer:
        "Call (714) 494-9486 for a free estimate. Refacing saves 50-70% compared to full replacement.",
    },
    {
      question: "How long does refacing take?",
      answer:
        "Most kitchens take 3-5 days to install. Compare that to 4-8 weeks for a full kitchen remodel. You'll have a new-looking kitchen by the weekend.",
    },
    {
      question: "Can I change the color of my cabinets?",
      answer:
        "Yes. Refacing lets you completely change the color, style, and finish of your cabinets. From classic white to modern navy to warm wood tones — anything is possible.",
    },
    {
      question: "Will refacing look like new cabinets?",
      answer:
        "Yes. When done professionally, refaced cabinets are indistinguishable from new. New doors, new drawer fronts, new hardware — everything you see and touch is brand new.",
    },
    {
      question: "Do my cabinet boxes need to be in good shape?",
      answer:
        "Yes. Refacing works best when the existing cabinet boxes are structurally sound. If your boxes are damaged, we'll discuss repair or replacement options.",
    },
    {
      question: "How long does refacing last?",
      answer:
        "With proper care, refaced cabinets can last 15-20 years. Commercial-grade materials and adhesives are used, and the existing boxes need to be structurally sound to start with.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (714) 494-9486. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
    },
  ] as FAQ[],

  // ── Cities served ─────────────────────────────────────────────────
  cities: [
    {
      name: "Florence, KY",
      slug: "florence-ky",
      lat: "38.9989",
      lng: "-84.6266",
      intro:
        "NKY Cabinet Refacing Pros gives Florence kitchens a brand-new look without the cost of full replacement. Whether you live near the Florence Mall area or in one of the neighborhoods off US-42, our team brings professional cabinet refacing expertise right to your kitchen. We work with hundreds of door styles, colors, and finishes — from classic shaker to modern flat panel — so your Florence kitchen gets exactly the look you want. With 3-5 day installations and typical savings of 50-70% over new cabinets, refacing is a practical alternative to a full remodel.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and riverfront properties deserve kitchens that match their character. NKY Cabinet Refacing Pros refaces kitchens across Covington, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our cabinet refacing process preserves the solid cabinet boxes your home already has while replacing the doors, drawer fronts, and hardware with beautiful new materials. Whether you want to keep a classic look or go for something modern, we'll make your Covington kitchen shine.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect a higher standard of cabinet refacing. NKY Cabinet Refacing Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented cabinet refacing that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Refacing keeps your existing cabinet boxes in place, so the kitchen stays usable for most of the 3-5 day installation.",
    },
    {
      name: "Erlanger, KY",
      slug: "erlanger-ky",
      lat: "39.0169",
      lng: "-84.6027",
      intro:
        "Erlanger residents know that a kitchen upgrade doesn't have to mean tearing everything out. NKY Cabinet Refacing Pros is proud to serve this thriving community with cabinet refacing that's fast, affordable, and delivers stunning results. Whether you're in a ranch-style home near the Erlanger city park or a two-story house off Stevenson Road, we can transform your kitchen in just 3-5 days. We also serve Erlanger's growing commercial corridor, giving restaurants and offices updated cabinetry without the disruption of a full remodel.",
    },
    {
      name: "Independence, KY",
      slug: "independence-ky",
      lat: "38.9431",
      lng: "-84.5431",
      intro:
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes — and many of those kitchens are ready for an upgrade. NKY Cabinet Refacing Pros provides cabinet refacing throughout Independence. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we help homeowners get the kitchen they've always wanted without the cost and hassle of a full renovation. Refacing typically saves 50-70% compared to replacement.",
    },
    {
      name: "Newport, KY",
      slug: "newport-ky",
      lat: "39.0915",
      lng: "-84.4954",
      intro:
        "Newport has transformed into one of the region's most vibrant communities, and NKY Cabinet Refacing Pros is proud to help keep its kitchens looking their best. From the Newport on the Levee district to the residential streets of Clifton and Southgate, we provide expert cabinet refacing for homes and businesses throughout the city. Our refacing process gives you brand-new doors, drawer fronts, and hardware while keeping your existing cabinet boxes — so you get a fresh new look in days, not weeks.",
    },
    {
      name: "Edgewood, KY",
      slug: "edgewood-ky",
      lat: "39.0142",
      lng: "-84.5779",
      intro:
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Cabinet Refacing Pros helps keep its kitchens that way. We provide the kind of careful, professional cabinet refacing that this neighborhood's homes call for. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, new doors, drawer fronts, and hardware can transform a kitchen in 3-5 days.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — and NKY Cabinet Refacing Pros provides kitchen cabinet refacing that preserves your home's character while giving your kitchen a fresh new look. We're experienced with the unique styles Fort Thomas kitchens present: from classic raised-panel doors in older homes to modern shaker styles in updated kitchens. Our team handles everything with skill and care.",
    },
  ] as City[],
};
