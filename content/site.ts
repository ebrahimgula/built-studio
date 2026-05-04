export const site = {
  name: "Built Studio",
  tagline: "We build the website. You grow the business.",
  description:
    "Built Studio is a small digital studio designing modern websites, payments, and growth tools for ambitious brands — from independent operators to established businesses. Fixed prices. Real support. No agency theatrics.",
  url: "https://built.studio",

  // Contact
  phone: "+61431338722",
  whatsappNumber: "61431338722", // wa.me strips the +
  email: "hello@built.studio",
  instagram: "https://instagram.com/built.studio",
  location: "Dar es Salaam · Working worldwide",
  responseTime: "We reply within 4 hours, every day of the week.",

  // WhatsApp pre-filled messages
  waMessages: {
    default: "Hi! I'd like to learn more about Built.",
    starter: "Hi! I'm interested in the Starter package.",
    business: "Hi! I'm interested in the Business package.",
    pro: "Hi! I'm interested in the Pro package.",
    upgrade: "Hi! I have an existing website I'd like to upgrade.",
  },
} as const;

export const waLink = (key: keyof typeof site.waMessages = "default") =>
  `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
    site.waMessages[key]
  )}`;

export const formatUSD = (n: number) =>
  `$${n.toLocaleString("en-US")}`;
export const formatTZS = (n: number) =>
  `${n.toLocaleString("en-US")} TZS`;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
] as const;

// =============================================================================
// HOMEPAGE
// =============================================================================

export const hero = {
  greeting: "A small studio with serious craft",
  headline: "Your business deserves more than a DM inbox.",
  sub: "We design modern websites, payments, and growth tools for ambitious brands. Fixed prices. Real humans. Work that ships.",
  primaryCta: { label: "See packages", href: "#packages" },
  secondaryCta: { label: "Chat on WhatsApp", href: waLink("default") },
  imageAlt: "Founder at a desk reviewing a website mockup in soft daylight",
};

export const audiences = [
  {
    eyebrow: "Just starting out?",
    title: "Make it official.",
    body: "If you're selling on Instagram, building a brand from your kitchen, or freelancing solo — you have customers, but you don't have a home. We give you a real website, a payment link, and a way for people to find and trust you.",
    cta: { label: "Start with Starter", href: "/packages#starter" },
    imageAlt: "Hands wrapping a small parcel on a clean wooden surface",
  },
  {
    eyebrow: "Already established?",
    title: "Scale without the chaos.",
    body: "If you're running a real operation that's outgrown its tools — we build the operating system. Modern ecommerce, inventory, email marketing, automation. Set up properly the first time.",
    cta: { label: "See Business & Pro", href: "/packages#business" },
    imageAlt: "A studio desk with a laptop showing a finished website mockup",
  },
] as const;

export const capabilities = [
  {
    icon: "Layout",
    title: "Beautiful websites",
    body: "Modern, fast, mobile-first sites that make your business look like the real deal.",
  },
  {
    icon: "CreditCard",
    title: "Online payments",
    body: "Stripe, PayPal, Pesapal, mobile money — set up properly, working out of the box.",
  },
  {
    icon: "Boxes",
    title: "Inventory tracking",
    body: "Know what's in stock, what's selling, and what to reorder. Without a spreadsheet.",
  },
  {
    icon: "Mail",
    title: "Email marketing",
    body: "Welcome flows, newsletters, abandoned-cart reminders — set up and running.",
  },
  {
    icon: "Search",
    title: "Show up on Google",
    body: "On-page SEO and Google Business Profile so the right customers actually find you.",
  },
  {
    icon: "Calendar",
    title: "Bookings & reservations",
    body: "Take appointments and table bookings online. No more phone tag.",
  },
] as const;

export const howItWorks = [
  {
    step: "01",
    title: "Chat with us on WhatsApp",
    body: "Tell us about your business. We'll listen, ask the right questions, and quote a fixed price.",
  },
  {
    step: "02",
    title: "We design your site",
    body: "You'll see real designs and previews — not vague promises. We iterate until it feels like you.",
  },
  {
    step: "03",
    title: "You review and approve",
    body: "Nothing goes live until you're happy with it. We sit together (in person or on a call) and walk through it.",
  },
  {
    step: "04",
    title: "We launch — and stay with you",
    body: "Monthly support is included. We're on WhatsApp when you need an update, a fix, or a new feature.",
  },
] as const;

export const pillars = [
  {
    title: "Small studio, senior hands",
    body: "Every project is run by someone who's shipped serious software before. No juniors learning on your dime.",
  },
  {
    title: "Fixed prices",
    body: "Everything's priced upfront. No hourly billing. No surprise invoices. No scope-creep tax.",
  },
  {
    title: "Real humans",
    body: "WhatsApp goes straight to a person who knows your project. Not a chatbot. Not a ticket queue.",
  },
  {
    title: "Monthly support included",
    body: "We don't ghost you after launch. Updates, fixes, and small changes are part of the plan.",
  },
] as const;

export const testimonials = [
  {
    quote:
      "Before Built, I was screenshotting bank transfers and chasing customers in DMs. Now orders come in while I sleep. It paid for itself in the first month.",
    name: "A. Mansoor",
    role: "Founder, independent fashion brand",
  },
  {
    quote:
      "We had an old site nobody could update. Built rebuilt the whole thing and trained our team. Reservations doubled in three months.",
    name: "Y. K.",
    role: "Operator, restaurant group",
  },
  {
    quote:
      "What I love is they actually pick up the phone. Last week I needed a product added before a launch — done in an hour.",
    name: "L. P.",
    role: "Founder, beauty studio",
  },
] as const;

export const faqs = [
  {
    q: "How long does it take to build my website?",
    a: "Starter sites usually launch in 2 weeks. Business sites take 3–4 weeks. Pro builds run 6–8 weeks. We give you a clear timeline before we start, and we hit it.",
  },
  {
    q: "What if I don't have product photos yet?",
    a: "We'll guide you through phone-photography that looks great, or we can introduce you to a photographer we trust. The site won't wait for perfect — we launch with what you have, and improve it as you grow.",
  },
  {
    q: "Can I update the website myself?",
    a: "Yes. Every package comes with a simple admin panel for editing products, pages, and prices. We train your team in person — usually it takes about an hour.",
  },
  {
    q: "What happens if I stop the monthly plan?",
    a: "Your site keeps running. The monthly fee covers hosting, maintenance, and our support. If you cancel, we hand you the code and help you move it. No lock-in, no drama.",
  },
  {
    q: "Where do you work — and do you work remotely?",
    a: "Our studio is based in Dar es Salaam. We work with clients across East Africa, the Gulf, the UK, and Australia — entirely remotely on most projects, with travel for the ones that warrant it. Time zones haven't been a problem yet.",
  },
  {
    q: "Can I pay in installments?",
    a: "Yes. We split the build cost into 50% to start and 50% on launch. For the Pro package, we can do three payments. We'll talk it through on WhatsApp.",
  },
  {
    q: "I already have a website — can you upgrade it?",
    a: "Most likely yes. Send us the link on WhatsApp and we'll take a look. If it's a small fix we'll quote you. If it needs a rebuild, we'll be honest about that too.",
  },
  {
    q: "What's the difference between the three packages?",
    a: "Starter is for businesses that need a clean, professional presence online. Business adds payments, ecommerce, and SEO. Pro is full operations — automation, advanced inventory, and marketing tools. The packages page has the full breakdown.",
  },
] as const;

// =============================================================================
// PACKAGES
// =============================================================================

export const packages = [
  {
    id: "starter",
    name: "Starter",
    subtitle: "Presence Package",
    setupUSD: 1500,
    monthlyUSD: 80,
    setupTZS: 3500000,
    monthlyTZS: 200000,
    perfectFor:
      "Independent operators, Instagram-led brands, freelance professionals — anyone who needs to look legitimate online.",
    features: [
      "3-page website (Home, About, Contact)",
      "Mobile-first design",
      "Instagram feed embedded",
      "Prominent WhatsApp button",
      "Contact form",
      "Custom domain (.com, .co, .studio, or local TLD)",
      "Hosting on fast, reliable global infrastructure",
      "Google Business Profile setup so you appear on Maps",
    ],
    cta: { label: "Start with Starter", waKey: "starter" as const },
    highlighted: false,
  },
  {
    id: "business",
    name: "Business",
    subtitle: "Operations Package",
    setupUSD: 6000,
    monthlyUSD: 200,
    setupTZS: 14000000,
    monthlyTZS: 500000,
    perfectFor:
      "Restaurants, studios, established boutiques, retailers ready to run a real operation online.",
    features: [
      "6–8 page website with proper structure",
      "Stripe, PayPal, Pesapal — international + local checkout",
      "Product catalog or menu (up to 50 items)",
      "Booking or reservation form for service businesses",
      "Custom domain email (info@yourbusiness.com)",
      "On-page SEO and Google optimization",
      "Simple inventory tracking with low-stock alerts",
      "Staff training session (we teach you how to manage it)",
    ],
    cta: { label: "Start with Business", waKey: "business" as const },
    highlighted: true,
    badge: "Most popular",
    inheritsFrom: "Starter",
  },
  {
    id: "pro",
    name: "Pro",
    subtitle: "Growth Package",
    setupUSD: 14000,
    monthlyUSD: 600,
    setupTZS: 32000000,
    monthlyTZS: 1500000,
    perfectFor:
      "Established businesses ready to scale seriously — doing real revenue and ready to invest in the operating system that lets it compound.",
    features: [
      "Full ecommerce with unlimited products",
      "Advanced inventory (variants, multi-location stock, supplier tracking)",
      "Email marketing automation (welcome, abandoned cart, newsletters)",
      "Proper SEO with keyword research and monthly reports",
      "Accounting integrations (QuickBooks, Xero, and similar)",
      "Priority WhatsApp support",
      "Quarterly strategy calls",
    ],
    cta: { label: "Start with Pro", waKey: "pro" as const },
    highlighted: false,
    inheritsFrom: "Business",
  },
] as const;

export const packageFaqs = [
  {
    q: "What's included in the monthly fee?",
    a: "Hosting on fast servers, your domain, security updates, backups, small content edits, and direct WhatsApp support. Think of it like rent for your business's online home — except we also keep the place clean.",
  },
  {
    q: "Are there contracts I'm locked into?",
    a: "No long-term lock-in. Monthly support is month-to-month. Pause or cancel anytime — we'll hand over your site and help you move it.",
  },
  {
    q: "Can I upgrade between packages later?",
    a: "Yes, easily. We design every site so it can grow. The cost is just the difference between packages — no full rebuild.",
  },
  {
    q: "Do prices include taxes?",
    a: "USD prices are exclusive of any local VAT or sales tax. TZS prices are exclusive of VAT. We issue a proper invoice with tax broken out for businesses that need it.",
  },
  {
    q: "Can I pay in my own currency?",
    a: "Yes. We invoice in USD, GBP, AUD, AED, EUR, or TZS — whichever is cleanest for your accounting. Bank transfer, card via Stripe, or local rails. We figure out the rails so you don't have to.",
  },
  {
    q: "What if I need something custom that's not in any package?",
    a: "Talk to us on WhatsApp. We've built custom integrations for delivery providers, accounting tools, and POS systems. We'll quote it as a fixed price add-on.",
  },
];

// =============================================================================
// WORK
// =============================================================================

export const projects = [
  {
    id: "hawrat",
    name: "Hawrat",
    tag: "Featured case study",
    industry: "Modest fashion / Abaya",
    size: "Instagram-led brand → operating business",
    location: "International audience",
    summary:
      "Hawrat began as an Instagram-led abaya brand. We rebuilt it as a real business — full ecommerce, inventory, international payments, customer accounts, and email marketing. Now it runs as an operation, not a DM thread.",
    challenge:
      "The brand had product, taste, and a loyal Instagram following — but no infrastructure. Orders came through DMs. Stock was tracked on a spreadsheet. Payments meant chasing screenshots. The founders were drowning in admin while the brand grew.",
    built: [
      "Full ecommerce site with product variants (size, colour, length)",
      "Stripe and PayPal checkout for international orders",
      "Inventory management with low-stock alerts",
      "Customer accounts and order history",
      "Email automation: welcome series, abandoned cart, post-purchase",
      "Editorial content layouts to keep the brand voice intact",
      "Admin training so the team can run it without us",
    ],
    transformation: [
      "Moved from DM order-taking to a structured ecommerce operation",
      "Inventory now tracked in one place — no more spreadsheet",
      "Founders freed up to focus on product and brand instead of admin",
      "Email list became a revenue channel, not just a newsletter",
    ],
    link: "https://hawrat.com",
    imageAlt: "Hawrat editorial photography — abaya draped on a model in soft daylight",
  },
  {
    id: "atelier-bake",
    name: "Atelier Bake",
    industry: "Independent bakery",
    size: "Solo founder, ~30 orders/week",
    location: "International",
    summary:
      "Home baker shipping a handful of orders a week through a WhatsApp inbox. We launched a clean ordering site with Stripe checkout. Orders went from 5/week to 30+/week within two months.",
    challenge:
      "Customers loved the cakes but ordering meant a back-and-forth on Instagram, then a screenshot of a bank transfer. People dropped off. Lots of orders just never happened.",
    built: [
      "Clean Starter site with full menu and pricing",
      "Stripe checkout for cards and Apple Pay",
      "Custom-cake order form with delivery date picker",
      "WhatsApp button on every page for special requests",
    ],
    transformation: [
      "Orders grew from 5/week to 30+/week in 8 weeks",
      "No more chasing screenshots — payments arrive automatically",
      "Founder reclaimed evenings that used to go to DMs",
    ],
    imageAlt: "Hands finishing a decorated cake on a clean studio counter",
  },
  {
    id: "northfold",
    name: "Northfold",
    industry: "Fashion / textiles & ready-to-wear",
    size: "10K+ Instagram audience",
    location: "International",
    summary:
      "Instagram-led label with strong demand and no checkout. Rebuilt as a full ecommerce store with inventory tied to in-store stock. Conversion lifted, returns dropped.",
    challenge:
      "Beautiful product, growing audience, but every sale was a conversation. Shop-floor stock and online stock weren't connected — items got sold twice.",
    built: [
      "Full ecommerce with product variants and lookbook layouts",
      "Stripe + local rails for international + domestic checkout",
      "Inventory synced between in-store POS and online",
      "Email flows for new collections and restocks",
    ],
    transformation: [
      "Online checkout closed sales that used to die in DMs",
      "Stock conflicts between online and in-store eliminated",
      "Email became the brand's biggest launch channel",
    ],
    imageAlt: "Folded textile bolts on an editorial shelf in soft daylight",
  },
  {
    id: "table-no-9",
    name: "Table No. 9",
    industry: "Restaurant / contemporary dining",
    size: "60-seat venue, lunch + dinner",
    location: "International",
    summary:
      "Took the printed menu online and added a reservation system. Reservations doubled in 3 months. Staff stopped chasing phone bookings during service.",
    challenge:
      "Old WordPress site nobody could update. Bookings via phone meant interruptions during service. Menu changes meant reprinting everything.",
    built: [
      "Modern site with editable digital menu (the manager updates it)",
      "Online reservation form with table-size logic",
      "Photo gallery built from real service shots",
      "Google Business Profile optimisation — discoverable on Maps",
    ],
    transformation: [
      "Reservations roughly doubled in the first quarter",
      "Menu updates take 2 minutes instead of a print run",
      "Staff focus on service instead of phone bookings",
    ],
    imageAlt: "Plate being finished at the pass in a contemporary restaurant kitchen",
  },
  {
    id: "florence-studio",
    name: "Florence Studio",
    industry: "Beauty / salon services",
    size: "3 stylists, 5-day week",
    location: "International",
    summary:
      "Phone bookings became online bookings. No-shows dropped because of automated reminders. Stylists' calendars are no longer chaos.",
    challenge:
      "Bookings came via WhatsApp at all hours. Double-bookings happened. No-shows were costing real money.",
    built: [
      "Online booking system tied to each stylist's calendar",
      "SMS and WhatsApp reminders 24h and 2h before",
      "Service menu with prices upfront",
      "Customer profiles so returning clients book in seconds",
    ],
    transformation: [
      "No-show rate dropped sharply with automated reminders",
      "Bookings happen overnight without anyone checking a phone",
      "Staff stopped manually managing a paper calendar",
    ],
    imageAlt: "Salon styling station with morning light, brushes laid out",
  },
] as const;

// =============================================================================
// ABOUT
// =============================================================================

export const about = {
  founder: {
    name: "Ebrahim Gulamali",
    role: "Founder",
    bio: "Ebrahim grew up between Dar es Salaam and Australia, spent years building software for serious companies, and kept watching independent brands he loved struggle with the same problem: brilliant product, broken admin. Built is the studio he wished existed for them.",
  },
  story: [
    {
      heading: "Why Built exists",
      body: "I kept seeing the same thing — a friend running a beautiful brand on Instagram, taking orders in DMs, losing customers to the friction. A restaurant we loved still on a 2010-era WordPress site. Independent operators with great taste and no infrastructure to match. The product was great. The plumbing was the bottleneck.",
    },
    {
      heading: "The first project changed everything",
      body: "We rebuilt Hawrat — a taste-driven abaya brand running on Instagram — into a proper ecommerce operation with inventory, international payments, and email marketing. The transformation wasn't about technology. It was about giving the founders their time back. That's the work I want to do, anywhere it's needed.",
    },
    {
      heading: "Small studio, global craft",
      body: "Built is a small studio in Dar es Salaam that works with brands worldwide. Being small means every project gets senior hands. Being global means we don't pick favourites between local and international clients — same care, same standard, same fixed prices.",
    },
  ],
  promise: [
    "Fixed prices. Every quote is final before we start.",
    "Monthly support is included — we never disappear after launch.",
    "Real humans on WhatsApp. No tickets, no chatbots.",
    "We use modern tools so your costs stay low and your site stays fast.",
    "If we're not the right fit, we'll tell you upfront and point you somewhere better.",
  ],
  stack: [
    {
      name: "Next.js & Vercel",
      why: "How we keep your site fast everywhere — on a fibre line in London, on 3G in Mwanza.",
    },
    {
      name: "Stripe, Pesapal & local rails",
      why: "How we accept cards, Apple Pay, mobile money, and bank transfers without you needing a dev team.",
    },
    {
      name: "Resend & Brevo",
      why: "How we send transactional emails and marketing campaigns without the bloated SaaS markup.",
    },
    {
      name: "Sanity & Notion",
      why: "How you edit your site without writing code or calling us for every change.",
    },
  ],
};

// =============================================================================
// RESOURCES
// =============================================================================

export const resources = [
  {
    slug: "5-signs-ready-for-website",
    title: "5 signs your business is ready for a website",
    excerpt:
      "If you're answering the same questions in DMs every day, you're already running a website — just badly.",
    readTime: "4 min read",
  },
  {
    slug: "mobile-money-online-tanzania",
    title: "How to accept mobile money payments online in Tanzania",
    excerpt:
      "A plain-English guide to Pesapal, Flutterwave, and what actually works for small businesses.",
    readTime: "6 min read",
  },
  {
    slug: "instagram-alone-costing-customers",
    title: "Why Instagram alone is costing you customers",
    excerpt:
      "Three customer behaviours that kill sales when DMs are your only checkout.",
    readTime: "5 min read",
  },
  {
    slug: "what-business-website-costs-2026",
    title: "What a good business website actually costs in 2026",
    excerpt:
      "Honest numbers, what to skip, and where to spend if you only have one budget.",
    readTime: "7 min read",
  },
  {
    slug: "swahili-vs-english-content",
    title: "Should your website be in Swahili, English, or both?",
    excerpt:
      "How to decide based on your customers, not on assumptions about who's reading.",
    readTime: "4 min read",
  },
  {
    slug: "checklist-launch-online-shop",
    title: "The 12-point checklist before launching your online shop",
    excerpt:
      "What to test, photograph, and write before you turn checkout on.",
    readTime: "5 min read",
  },
] as const;
