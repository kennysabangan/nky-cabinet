/**
 * siteConfig.ts — Central configuration for the site.
 *
 * To clone this template for a new niche site, ONLY edit this file
 * (and swap photos in /public/photos/). Everything else is generic.
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

export interface Testimonial {
  quote: string;
  name: string;
  city: string;
}

export const siteConfig = {
  // ── Business identity ──────────────────────────────────────────────
  businessName: "NKY Cabinet Refacing Pros",
  phone: "(859) 900-8065",
  phoneE164: "+18599008065",
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
        "Call (859) 900-8065 for a free estimate. Refacing saves 50-70% compared to full replacement.",
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
        "Refaced cabinets provide long-lasting results with proper care. We use commercial-grade materials and adhesives designed to last.",
    },
    {
      question: "Do you offer financing?",
      answer:
        "Yes. We offer flexible financing options including 0% interest plans for qualified buyers.",
    },
    {
      question: "How do I schedule?",
      answer:
        "Call (859) 900-8065. We serve Florence, Covington, Fort Mitchell, Erlanger, and all of Northern Kentucky.",
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
        "Florence homeowners trust NKY Cabinet Refacing Pros for kitchen transformations that look brand new without the cost of full replacement. Whether you live near the Florence Mall area or in one of the neighborhoods off US-42, our team brings professional cabinet refacing expertise right to your kitchen. We work with hundreds of door styles, colors, and finishes — from classic shaker to modern flat panel — so your Florence kitchen gets exactly the look you want. With 3-5 day installations and 50-70% savings over new cabinets, it's no wonder Florence homeowners choose refacing.",
    },
    {
      name: "Covington, KY",
      slug: "covington-ky",
      lat: "39.0836",
      lng: "-84.5085",
      intro:
        "Covington's historic homes and riverfront properties deserve kitchens that match their character. NKY Cabinet Refacing Pros has been transforming Covington kitchens for years, from the charming Victorian homes of Licking Riverside to the commercial spaces along Madison Avenue. Our cabinet refacing process preserves the solid cabinet boxes your home already has while replacing the doors, drawer fronts, and hardware with beautiful new materials. Whether you want to keep a classic look or go for something modern, we'll make your Covington kitchen shine.",
    },
    {
      name: "Fort Mitchell, KY",
      slug: "fort-mitchell-ky",
      lat: "39.0458",
      lng: "-84.5533",
      intro:
        "Fort Mitchell is one of Northern Kentucky's most desirable communities, and homeowners here expect a higher standard of cabinet refacing. NKY Cabinet Refacing Pros delivers exactly that. We specialize in the kind of meticulous, detail-oriented cabinet refacing that Fort Mitchell properties deserve — from the stately homes along Dixie Highway to the well-maintained colonials in the residential side streets. Our technicians are background-checked, fully insured, and trained to treat your home with the same respect they'd treat their own.",
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
        "As one of the fastest-growing cities in Kenton County, Independence has seen a surge of new homes — and many of those kitchens are ready for an upgrade. NKY Cabinet Refacing Pros provides cabinet refacing services that Independence homeowners count on. From the newer subdivisions near Taylor Mill Road to the established neighborhoods closer to downtown Independence, we help homeowners get the kitchen they've always wanted without the cost and hassle of a full renovation. Refacing saves 50-70% compared to replacement.",
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
        "Edgewood's tree-lined streets and well-kept homes make it one of Kenton County's most charming communities — and NKY Cabinet Refacing Pros helps keep its kitchens that way. We've served Edgewood homeowners for years, providing the kind of careful, professional cabinet refacing that this neighborhood's beautiful properties demand. From the homes along Turkeyfoot Road to the quiet cul-de-sacs throughout the city, we know how to deliver consistently excellent results that transform your kitchen.",
    },
    {
      name: "Fort Thomas, KY",
      slug: "fort-thomas-ky",
      lat: "39.0758",
      lng: "-84.4480",
      intro:
        "Fort Thomas is known for its stunning hilltop views, historic homes, and tree-canopied streets — and NKY Cabinet Refacing Pros is Fort Thomas's go-to service for kitchen cabinet refacing that preserves your home's character while giving your kitchen a fresh new look. We're experienced with the unique styles Fort Thomas kitchens present: from classic raised-panel doors in older homes to modern shaker styles in updated kitchens. Our team handles everything with skill and care.",
    },
    {
      name: "Bellevue, KY",
      slug: "bellevue-ky",
      lat: "39.1042",
      lng: "-84.4762",
      intro:
        "Bellevue's revitalized Fairfield Avenue corridor and charming hillside homes make it a standout community in Northern Kentucky. NKY Cabinet Refacing Pros is honored to serve Bellevue residents with top-quality cabinet refacing services. We understand the mix of historic and modern kitchens that define Bellevue, and we approach each job with the care and attention your home deserves. From panoramic-view condos to cozy bungalows, we bring the same level of professionalism to every project.",
    },
    {
      name: "Cold Spring, KY",
      slug: "cold-spring-ky",
      lat: "39.0114",
      lng: "-84.4369",
      intro:
        "Cold Spring's spacious properties and growing community make it a beautiful place to live — and your kitchen should match. NKY Cabinet Refacing Pros provides Cold Spring homeowners with expert cabinet refacing that transforms outdated kitchens into spaces you'll love. Whether your home overlooks Alexandria Pike or sits in one of Cold Spring's peaceful residential developments, we'll give your kitchen a fresh new look with new doors, drawer fronts, and hardware in just a few days.",
    },
    {
      name: "Taylor Mill, KY",
      slug: "taylor-mill-ky",
      lat: "39.0003",
      lng: "-84.5013",
      intro:
        "Taylor Mill has grown into a thriving community, and NKY Cabinet Refacing Pros is proud to serve the homes that make this city special. From the established neighborhoods along Taylor Mill Road to the newer developments spreading across the city, we provide cabinet refacing that Taylor Mill residents trust. Our team helps you choose the perfect style, color, and finish for your kitchen — and then installs everything in just 3-5 days with minimal disruption to your daily life.",
    },
    {
      name: "Villa Hills, KY",
      slug: "villa-hills-ky",
      lat: "39.0625",
      lng: "-84.5916",
      intro:
        "Villa Hills is one of Northern Kentucky's premier residential communities, and the kitchens here deserve quality service. NKY Cabinet Refacing Pros delivers premium cabinet refacing services that match Villa Hills' high standards. From classic wood tones to contemporary painted finishes, we offer hundreds of door styles and colors. Villa Hills homeowners trust us because we use commercial-grade materials, deliver flawless installations, and finish in just 3-5 days.",
    },
    {
      name: "Crescent Springs, KY",
      slug: "crescent-springs-ky",
      lat: "39.0544",
      lng: "-84.5829",
      intro:
        "Crescent Springs residents appreciate quality, and NKY Cabinet Refacing Pros delivers it with every project. We've been serving this close-knit community with cabinet refacing that homeowners and businesses rely on. Whether your property is along Buttermilk Pike or in one of Crescent Springs' well-maintained neighborhoods, we bring the same commitment to excellence. Our team handles everything from standard kitchen refacing to custom hardware upgrades and soft-close installations.",
    },
    {
      name: "Lakeside Park, KY",
      slug: "lakeside-park-ky",
      lat: "39.0331",
      lng: "-84.5711",
      intro:
        "Lakeside Park may be one of Northern Kentucky's smaller cities, but its residents expect — and deserve — top-tier cabinet refacing. NKY Cabinet Refacing Pros is proud to serve Lakeside Park with professional cabinet refacing that keeps kitchens looking pristine. The well-maintained properties that define Lakeside Park require a careful touch, and our technicians deliver exactly that. From kitchen refacing to bathroom vanity upgrades, Lakeside Park homeowners know they can count on us.",
    },
    {
      name: "Park Hills, KY",
      slug: "park-hills-ky",
      lat: "39.0667",
      lng: "-84.5285",
      intro:
        "Park Hills' hilltop location offers some of the best views in Northern Kentucky — and your kitchen should look just as impressive. NKY Cabinet Refacing Pros provides Park Hills homeowners with expert cabinet refacing that transforms tired kitchens into showpieces. We're experienced with the unique architectural features that Park Hills kitchens present, and our team uses proven techniques to deliver flawless results whether your home overlooks Devou Park or the Cincinnati skyline beyond.",
    },
    // ── Cincinnati-area cities ────────────────────────────────────────
    {
      name: "Walnut Hills, OH",
      slug: "walnut-hills-oh",
      lat: "39.1212",
      lng: "-84.4872",
      intro:
        "Walnut Hills is one of Cincinnati's most historic and diverse neighborhoods, and it's just minutes from Northern Kentucky across the river. NKY Cabinet Refacing Pros is proud to extend our cabinet refacing services to Walnut Hills homeowners and businesses. From the stately homes along Gilbert Avenue to the revitalized commercial district near Peeble's Corner, we bring the same professional-grade cabinet refacing that NKY residents trust. We handle every style — Victorian, craftsman, modern — with expertise.",
    },
    {
      name: "Hyde Park, OH",
      slug: "hyde-park-oh",
      lat: "39.1373",
      lng: "-84.4463",
      intro:
        "Hyde Park is one of Cincinnati's most desirable neighborhoods, known for its beautiful homes, tree-lined streets, and vibrant town square. NKY Cabinet Refacing Pros brings our professional cabinet refacing expertise right across the river to serve Hyde Park residents. Whether you own a historic craftsman near the square or a stately home in the surrounding hills, we understand the high standards Hyde Park homeowners expect. We deliver kitchens that look brand new — at a fraction of the cost of replacement.",
    },
    {
      name: "Norwood, OH",
      slug: "norwood-oh",
      lat: "39.1556",
      lng: "-84.4597",
      intro:
        "Norwood is a thriving independent city surrounded by Cincinnati, just a short drive from Northern Kentucky. NKY Cabinet Refacing Pros is happy to serve Norwood's dense residential neighborhoods and growing commercial district with reliable, affordable cabinet refacing. Norwood's mix of older homes, duplexes, and storefronts means kitchens here come in every style — and we know how to transform each one. Our team delivers beautiful results in just 3-5 days.",
    },
    {
      name: "Montgomery, OH",
      slug: "montgomery-oh",
      lat: "39.2289",
      lng: "-84.3541",
      intro:
        "Montgomery's tree-canopied streets and stately homes make it one of the Cincinnati area's premier residential communities. NKY Cabinet Refacing Pros extends our premium cabinet refacing services to Montgomery homeowners who expect quality service. The large kitchens and high-end finishes throughout Montgomery require a careful, experienced approach — and our team delivers exactly that. From homes near the downtown village center to sprawling estates, we bring meticulous attention to detail.",
    },
    {
      name: "Deer Park, OH",
      slug: "deer-park-oh",
      lat: "39.2053",
      lng: "-84.3922",
      intro:
        "Deer Park is a welcoming, family-friendly community just north of Cincinnati, and NKY Cabinet Refacing Pros is proud to bring our cabinet refacing services to this great neighborhood. From the well-kept ranch homes along Blue Ash Road to the two-story colonials in the residential side streets, Deer Park kitchens deserve a fresh new look. We offer flexible scheduling, Flexible scheduling, and the kind of dependable service that Deer Park homeowners appreciate. A new kitchen in 3-5 days.",
    },
    {
      name: "Amberly, OH",
      slug: "amberly-oh",
      lat: "39.1987",
      lng: "-84.4281",
      intro:
        "Amberley Village is one of the Cincinnati area's most exclusive residential communities, with large estates and beautifully maintained properties. NKY Cabinet Refacing Pros provides the premium cabinet refacing service that Amberley kitchens demand. The spacious kitchens, custom layouts, and high-end finishes throughout this community require a professional touch — and our fully insured, background-checked technicians deliver exactly that. We treat every kitchen like it's our own.",
    },
    {
      name: "Westwood, OH",
      slug: "westwood-oh",
      lat: "39.1531",
      lng: "-84.6164",
      intro:
        "Westwood is one of Cincinnati's largest and most established neighborhoods, with a strong sense of community and a wide range of homes. NKY Cabinet Refacing Pros is excited to serve Westwood with the same reliable cabinet refacing that Northern Kentucky residents have come to trust. From the charming Victorians along Harrison Avenue to the mid-century homes throughout the neighborhood, we've refaced every style of kitchen. Our team works efficiently and always delivers beautiful results.",
    },
    {
      name: "Fort Heights, OH",
      slug: "fort-heights-oh",
      lat: "39.0947",
      lng: "-84.5256",
      intro:
        "Fort Wright and the Fort Mitchell Heights area sit just across the river from Northern Kentucky, making them a natural extension of our service area. NKY Cabinet Refacing Pros brings our professional cabinet refacing expertise to Fort Heights homeowners who want the same quality service their NKY neighbors enjoy. Whether you're updating a galley kitchen or transforming a large open-concept space, we'll deliver results that look like a full remodel — at a fraction of the cost.",
    },
    {
      name: "Mt. Adams, OH",
      slug: "mt-adams-oh",
      lat: "39.1089",
      lng: "-84.4981",
      intro:
        "Mt. Adams is one of Cincinnati's most iconic hilltop neighborhoods, with stunning skyline views, steep streets, and a mix of historic and modern properties. NKY Cabinet Refacing Pros brings expert cabinet refacing to Mt. Adams homeowners and businesses who want to update their kitchens without the hassle of a full renovation. From renovated Victorians to modern condos, we'll make your kitchen cabinets look brand new in just a few days.",
    },
    {
      name: "Mt. Lookout, OH",
      slug: "mt-lookout-oh",
      lat: "39.1283",
      lng: "-84.4317",
      intro:
        "Mt. Lookout is a charming, walkable neighborhood on Cincinnati's east side, just across the river from Northern Kentucky. NKY Cabinet Refacing Pros serves Mt. Lookout homeowners with professional cabinet refacing that keeps kitchens looking their best. The neighborhood's mix of older bungalows, updated colonials, and new construction means we've seen every kitchen layout Mt. Lookout has to offer. We use commercial-grade materials designed for long-lasting results.",
    },
    {
      name: "Oakley, OH",
      slug: "oakley-oh",
      lat: "39.1536",
      lng: "-84.4228",
      intro:
        "Oakley is one of Cincinnati's fastest-growing neighborhoods, with a thriving business district, new developments, and a strong sense of community. NKY Cabinet Refacing Pros is proud to serve Oakley's homes and businesses with professional cabinet refacing that matches the neighborhood's upward trajectory. From the homes around Oakley Square to the new builds throughout the area, we provide refacing that's fast, affordable, and delivers stunning results.",
    },
    {
      name: "Columbia-Tusculum, OH",
      slug: "columbia-tusculum-oh",
      lat: "39.1128",
      lng: "-84.4136",
      intro:
        "Columbia-Tusculum is Cincinnati's oldest neighborhood, nestled along the Ohio River on the city's east side. NKY Cabinet Refacing Pros brings our professional cabinet refacing services to this historic riverfront community, where kitchens range from restored 19th-century layouts to modern open-concept designs. Whether your home overlooks the river or sits tucked into the hillside, we'll transform your cabinets with beautiful new doors, drawer fronts, and hardware.",
    },
    {
      name: "Pleasant Ridge, OH",
      slug: "pleasant-ridge-oh",
      lat: "39.1842",
      lng: "-84.4403",
      intro:
        "Pleasant Ridge is a vibrant, family-friendly neighborhood on Cincinnati's north side, known for its well-kept homes and strong community spirit. NKY Cabinet Refacing Pros is happy to extend our cabinet refacing services to Pleasant Ridge residents who want a fresh new kitchen without the cost and disruption of a full remodel. The neighborhood's diverse housing stock means we adapt our approach to each kitchen, delivering beautiful results every time.",
    },
  ] as City[],

  // ── Testimonials ──────────────────────────────────────────────────
  testimonials: [
    {
      quote:
        "NKY Cabinet Refacing Pros transformed our kitchen in Florence in just 4 days. New shaker doors, soft-close hinges, and new hardware. Looks like a high-end kitchen for a fraction of the cost.",
      name: "Jennifer M.",
      city: "Florence, KY",
    },
    {
      quote:
        "We thought we needed all new cabinets. They showed us refacing was the way to go. Our Covington kitchen looks brand new. Saved us money.",
      name: "Robert T.",
      city: "Covington, KY",
    },
    {
      quote:
        "Professional from start to finish. They helped us pick the perfect style and color. Our Fort Mitchell kitchen went from dated to modern in less than a week.",
      name: "Sarah K.",
      city: "Fort Mitchell, KY",
    },
    {
      quote:
        "We refaced our kitchen and bathrooms with NKY Cabinet Refacing Pros. Beautiful results, fair price, and the team was clean and respectful of our home. Highly recommend.",
      name: "Karen L.",
      city: "Edgewood, KY",
    },
  ] as Testimonial[],

  // ── Reviews (for reviews page) ────────────────────────────────────
  reviews: [
    {
      name: "Jennifer M.",
      location: "Florence, KY",
      text: "NKY Cabinet Refacing Pros transformed our kitchen in Florence in just 4 days. New shaker doors, soft-close hinges, and new hardware throughout. Looks like a high-end kitchen for a fraction of the cost. Quality home improvement decision we've ever made.",
    },
    {
      name: "Robert T.",
      location: "Covington, KY",
      text: "We thought we needed all new cabinets. They showed us refacing was the way to go. Our Covington kitchen looks brand new. Saved us money compared to full replacement. The team was professional and the results speak for themselves.",
    },
    {
      name: "Sarah K.",
      location: "Fort Mitchell, KY",
      text: "Professional from start to finish. They helped us pick the perfect style and color for our Fort Mitchell kitchen. Went from dated to modern in less than a week. The quality of the new doors and hardware is outstanding.",
    },
    {
      name: "Mike D.",
      location: "Erlanger, KY",
      text: "Hired them to reface the cabinets at our restaurant in Erlanger. They worked around our schedule so we didn't have to close. Great refacing service. Our customers have commented on how much better the kitchen looks. Will be using them for our next location.",
    },
    {
      name: "Jennifer P.",
      location: "Independence, KY",
      text: "We just moved into a new home in Independence and the kitchen cabinets were dated and worn. NKY Cabinet Refacing Pros came out and gave us a free estimate. 4 days later we had a brand new kitchen. New doors, new hardware, new finish. Highly recommend their refacing service.",
    },
    {
      name: "Dave S.",
      location: "Newport, KY",
      text: "Called for cabinet refacing on our home in Newport. They gave us a competitive price and came out the same week. Our kitchen went from 1990s oak to modern white shaker. They even installed soft-close hinges on every door. Great service, great service.",
    },
    {
      name: "Karen L.",
      location: "Edgewood, KY",
      text: "We refaced our kitchen and bathrooms with NKY Cabinet Refacing Pros. Beautiful results, fair price, and the team was clean and respectful of our home. Reliable cabinet refacing company in Northern Kentucky that we trust completely.",
    },
    {
      name: "Tom W.",
      location: "Fort Thomas, KY",
      text: "Our Fort Thomas kitchen had original 1970s cabinets. NKY Cabinet Refacing Pros made them look brand new with new doors, drawer fronts, and crown molding. The whole project took 5 days. Every detail was perfect. Professional cabinet refacing service in NKY.",
    },
  ] as { name: string; location: string; text: string }[],
};
