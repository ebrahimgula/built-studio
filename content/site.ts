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
  instagram: "https://instagram.com/builtstudio_tz",
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
      "Before Built, I was screenshotting bank transfers and chasing customers on DMs. Every order was a conversation. Now it just runs — inventory, payments, email. It paid for itself in the first month.",
    name: "Hawrat Design Studio",
    role: "Modest fashion brand · International",
    link: "https://hawrat.com",
  },
  {
    quote:
      "Ebrahim understood the product before he understood the brief. The site feels like the oil — considered, warm, unhurried. Our customers actually read it.",
    name: "Fletcher Herbals",
    role: "Natural haircare brand · Australia",
    link: "https://fletcherherbals.pages.dev/",
  },
  {
    quote:
      "We went from no web presence to bookings, product sales, and a Google listing in under three weeks. The team picked up the WhatsApp at 9pm to fix a last thing before launch.",
    name: "Newcastle Barber",
    role: "Barbershop · Newcastle, Australia",
    link: "https://newcastle-barber.pages.dev/",
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
    setupUSD: 350,
    monthlyUSD: 30,
    setupTZS: 900000,
    monthlyTZS: 75000,
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
    setupUSD: 900,
    monthlyUSD: 70,
    setupTZS: 2400000,
    monthlyTZS: 180000,
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
    setupUSD: 2100,
    monthlyUSD: 140,
    setupTZS: 5500000,
    monthlyTZS: 350000,
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
    image: "/work-hawrat-thumb.webp",
    imageAlt: "Hawrat editorial photography — abaya draped on a model in soft daylight",
  },
  {
    id: "fletcher-herbals",
    name: "Fletcher Herbals",
    tag: "Live site",
    industry: "Herbal haircare / beauty",
    size: "Independent brand, direct-to-consumer",
    location: "Australia",
    summary:
      "A grandmother's hair-oil recipe turned into a modern DTC brand. We built an editorial experience with parallax scroll, a botanical ingredient library, and an interactive dosage quiz — all loading under 2 seconds.",
    challenge:
      "The product had a genuine story worth telling — generations of herbal wisdom, a handmade recipe, real ingredients. A generic Shopify template would have killed it. The site had to feel as considered as the product itself.",
    built: [
      "Full-screen parallax hero with scroll-driven jar animation",
      "Interactive botanical library — tap any ingredient to see its benefit",
      "Dosage calculator quiz — recommends personalised usage based on hair type, scalp, and goal",
      "Ingredient origins & brand story timeline",
      "Haptic feedback on mobile for interactive elements",
      "Framer Motion scroll animations throughout",
      "Structured data for rich Google results",
      "Deployed to Cloudflare Pages via Wrangler",
    ],
    transformation: [
      "A family recipe now has a home worthy of the story behind it",
      "Interactive ingredient library builds trust and educates without overwhelming",
      "Dosage quiz converts browsers into confident first-time buyers",
    ],
    link: "https://fletcherherbals.com",
    image: "/work-fletcher.webp",
    imageAlt: "Fletcher Herbals — green herb oil jar with botanicals and label on a wooden surface",
  },
  {
    id: "newcastle-barber",
    name: "Newcastle Barber",
    tag: "Live site",
    industry: "Barbershop / grooming",
    size: "Single-location walk-in + appointment shop",
    location: "Newcastle West, Australia",
    summary:
      "A local barbershop getting by on foot traffic and phone calls. We built a full marketing site with online product sales, dark/light mode, parallax scroll, and a Google Maps integration. Now it's the shop's permanent digital home.",
    challenge:
      "No web presence beyond a Google listing. Products like beard oils and clippers were sold only in-store. No way for customers to browse services or prices before walking in.",
    built: [
      "Full marketing site with hero, services, pricing, testimonials, FAQ, and location",
      "Online product shop with cart and Stripe checkout",
      "Dark and light mode with smooth theme switching",
      "Parallax hero with animated scroll effects",
      "Google Maps integration for walk-in directions",
      "Responsive mobile-first layout",
    ],
    transformation: [
      "Shop now has a permanent digital home customers can find on Google",
      "Products available for purchase 24/7 — not just during shop hours",
      "Professional online presence matches the quality of the cuts",
    ],
    link: "https://newcastle-barber.pages.dev/",
    image: "/work-newcastle.webp",
    imageAlt: "Newcastle Barber — team in their modern barbershop at opening day",
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
    category: "Getting online",
    body: [
      {
        type: "p" as const,
        text: "Here's a thought that might sting a little: if you're answering the same questions in DMs every day — 'What are your prices?', 'Do you deliver?', 'What sizes do you have?' — you're already running a website. It's just a slow, manual, exhausting one.",
      },
      {
        type: "h2" as const,
        text: "1. You're answering the same DM questions on repeat",
      },
      {
        type: "p" as const,
        text: "Count how many times this week you typed out your prices, your opening hours, or your delivery policy. If it's more than five, you have a FAQ problem. A website solves this permanently. Put the answers on a page, link it in your bio, and watch the question volume drop.",
      },
      {
        type: "h2" as const,
        text: "2. Customers can't find you without a direct referral",
      },
      {
        type: "p" as const,
        text: "Instagram is a closed garden. If someone searches Google for 'abaya brand Tanzania' or 'barber near me Newcastle', Instagram doesn't show up in those results — your website does. If your business only exists inside a social platform, you're invisible to everyone who hasn't already heard of you.",
      },
      {
        type: "h2" as const,
        text: "3. You're chasing payments instead of receiving them",
      },
      {
        type: "p" as const,
        text: "Screenshots of bank transfers, following up on M-Pesa confirmations, customers who say they'll pay 'later' — these are symptoms of a business without a payment system. A website with a checkout takes money before it ships the order. That's not just convenient, it's how you get paid on time, every time.",
      },
      {
        type: "h2" as const,
        text: "4. You feel embarrassed to send people somewhere",
      },
      {
        type: "p" as const,
        text: "When someone asks 'where can I find out more about your business?', what do you send them? If the answer is a link to an Instagram account or a WhatsApp number, something is missing. Your website is the one place you own completely — no algorithm decides who sees it, no platform can deactivate it.",
      },
      {
        type: "h2" as const,
        text: "5. You're ready to grow but there's nothing to grow into",
      },
      {
        type: "p" as const,
        text: "A website isn't just a brochure — it's infrastructure. It's where you run email marketing, where you track what products are selling, where you take bookings without being awake. If you're serious about the business beyond this year, a website is the foundation everything else is built on.",
      },
      {
        type: "p" as const,
        text: "If you ticked three or more of these, you're not just ready — you're overdue. A Starter site takes two weeks and costs less than a month's rent. Send us a message on WhatsApp and we'll tell you exactly what makes sense for where you are.",
      },
    ],
  },
  {
    slug: "mobile-money-online-tanzania",
    title: "How to accept mobile money payments online in Tanzania",
    excerpt:
      "A plain-English guide to Pesapal, Flutterwave, and what actually works for small businesses.",
    readTime: "6 min read",
    category: "Payments",
    body: [
      {
        type: "p" as const,
        text: "If you're selling in Tanzania, mobile money isn't optional — it's how most of your customers expect to pay. M-Pesa alone handles billions in transactions every month. The question isn't whether to accept it, it's how to wire it into your website without becoming a developer.",
      },
      {
        type: "h2" as const,
        text: "The options that actually work",
      },
      {
        type: "p" as const,
        text: "There are three payment processors worth knowing: Pesapal, Flutterwave, and DPO Group. Each has a different sweet spot.",
      },
      {
        type: "h2" as const,
        text: "Pesapal — best for East Africa-first businesses",
      },
      {
        type: "p" as const,
        text: "Pesapal is built for Kenya, Uganda, and Tanzania. It accepts M-Pesa, Tigo Pesa, Airtel Money, and cards. Settlement is fast (usually 1–2 business days) and their support understands local banking. For a Tanzanian business selling locally, Pesapal is usually the right starting point. The main limitation: it's harder to use if you have significant international customers paying in foreign currencies.",
      },
      {
        type: "h2" as const,
        text: "Flutterwave — best for cross-border and international sales",
      },
      {
        type: "p" as const,
        text: "Flutterwave covers 30+ African countries and accepts cards, bank transfers, and mobile money across most of them. If you sell to customers in the UK, UAE, or across East Africa, Flutterwave handles the currency complexity better than Pesapal. Settlement comes in USD or your local currency depending on how you configure it.",
      },
      {
        type: "h2" as const,
        text: "Stripe and PayPal — for international-only customers",
      },
      {
        type: "p" as const,
        text: "If your customers are primarily outside Africa paying by card or PayPal, Stripe is the cleanest developer experience available. But Stripe doesn't natively support M-Pesa or local bank transfers, so it's a complement, not a replacement, for local payment rails.",
      },
      {
        type: "h2" as const,
        text: "What to actually do",
      },
      {
        type: "p" as const,
        text: "For most small Tanzanian businesses: set up Pesapal for local customers, and if you have meaningful international volume, add Stripe or Flutterwave alongside it. Both can live on the same checkout page. The goal is to never lose a sale because the customer's preferred payment method wasn't available.",
      },
      {
        type: "p" as const,
        text: "We handle all of this setup as part of our Business and Pro packages — including testing, tax configuration, and making sure payouts land where they should. If you want to talk through what makes sense for your specific business, send us a WhatsApp.",
      },
    ],
  },
  {
    slug: "instagram-alone-costing-customers",
    title: "Why Instagram alone is costing you customers",
    excerpt:
      "Three customer behaviours that kill sales when DMs are your only checkout.",
    readTime: "5 min read",
    category: "Getting online",
    body: [
      {
        type: "p" as const,
        text: "Instagram is an extraordinary tool for discovery. People find you, fall in love with your product, and want to buy. Then you lose them. Here's what's actually happening — and why it happens quietly enough that most sellers don't notice until they look at the numbers.",
      },
      {
        type: "h2" as const,
        text: "Behaviour 1: The late-night browser",
      },
      {
        type: "p" as const,
        text: "Your customer is scrolling at 11pm, sees your product, wants it. They go to DM you — but it's late, you're asleep, and they don't want to wait for a reply. They move on. By morning, the impulse is gone. With a website and a checkout, that 11pm browser becomes a confirmed order before breakfast.",
      },
      {
        type: "h2" as const,
        text: "Behaviour 2: The researcher",
      },
      {
        type: "p" as const,
        text: "Some customers don't buy on impulse. They compare, think, come back. When their research path takes them to Google — 'best herbal hair oil Australia' or 'custom cakes Dar es Salaam' — Instagram doesn't appear. Your competitors with websites do. The researcher, who was already interested in exactly what you sell, never finds you.",
      },
      {
        type: "h2" as const,
        text: "Behaviour 3: The friction-averse buyer",
      },
      {
        type: "p" as const,
        text: "DMs require effort: typing a message, waiting for a response, negotiating payment, waiting for bank details, sending proof. Every step is friction. Research consistently shows that checkout abandonment spikes with each additional step. A customer who would have happily paid with a saved card in 30 seconds will not chase a DM conversation for 20 minutes — even if they want the product.",
      },
      {
        type: "h2" as const,
        text: "The invisible cost",
      },
      {
        type: "p" as const,
        text: "The insidious thing about these lost sales is that they're invisible. Nobody sends you a message saying 'I wanted to buy but didn't'. Your DM inbox just stays quiet, and you assume there wasn't demand. In reality, the demand was there — the friction ate it.",
      },
      {
        type: "p" as const,
        text: "A website doesn't replace Instagram. It converts the audience Instagram builds. The Instagram account gets people interested. The website closes the sale.",
      },
    ],
  },
  {
    slug: "what-business-website-costs-2026",
    title: "What a good business website actually costs in 2026",
    excerpt:
      "Honest numbers, what to skip, and where to spend if you only have one budget.",
    readTime: "7 min read",
    category: "Pricing",
    body: [
      {
        type: "p" as const,
        text: "This is the question we get most on WhatsApp. And because we publish our prices openly, we can give you a straight answer — and some context for why the range is so wide.",
      },
      {
        type: "h2" as const,
        text: "The real price range",
      },
      {
        type: "p" as const,
        text: "A basic business website in 2026 costs between $350 and $15,000 depending on what you actually need. That's a wide range, and it's honest. Here's how to figure out where you fall.",
      },
      {
        type: "h2" as const,
        text: "$350–$800: A clean presence site",
      },
      {
        type: "p" as const,
        text: "Three to five pages — Home, About, Services, Contact. Mobile-first design. A WhatsApp button. Contact form. Custom domain. This is what most solo operators and Instagram-led brands need first. It makes you look legitimate, it answers the basic questions, and it means you exist on Google. This is our Starter package.",
      },
      {
        type: "h2" as const,
        text: "$2,000–$8,000: A full business site",
      },
      {
        type: "p" as const,
        text: "A product catalogue or menu. Online checkout. Booking system. SEO. Email marketing automation. This is for businesses that have outgrown DMs and need their website to actually work — taking orders, managing stock, running campaigns. This is our Business package range.",
      },
      {
        type: "h2" as const,
        text: "$10,000+: Full operations infrastructure",
      },
      {
        type: "p" as const,
        text: "Multi-location inventory. Accounting integrations. Custom automation. Advanced analytics. If you're running a real operation — a restaurant group, a fashion brand with wholesale and retail, a business with staff who need different access levels — this is the territory. Our Pro package covers this.",
      },
      {
        type: "h2" as const,
        text: "What to skip",
      },
      {
        type: "p" as const,
        text: "Skip the features you won't use. A home baker doesn't need multi-location inventory. A solo consultant doesn't need a product catalogue. Paying for complexity you don't need is money wasted and a site that's harder to manage. Start with what solves the problem in front of you, not what might be useful in three years.",
      },
      {
        type: "h2" as const,
        text: "Where to spend if you only have one budget",
      },
      {
        type: "p" as const,
        text: "Design. Not decoration — clarity. A site that loads fast, explains what you do in ten seconds, and makes it easy to buy or contact you will outperform a beautiful site that's slow and confusing every time. After design, spend on a real payment system. A checkout that works is worth more than a blog nobody reads.",
      },
      {
        type: "p" as const,
        text: "Our prices are listed openly on the packages page. If you're not sure which tier makes sense for you, send us a WhatsApp — we'll tell you honestly, even if the answer is that you don't need us yet.",
      },
    ],
  },
  {
    slug: "swahili-vs-english-content",
    title: "Should your website be in Swahili, English, or both?",
    excerpt:
      "How to decide based on your customers, not on assumptions about who's reading.",
    readTime: "4 min read",
    category: "Content",
    body: [
      {
        type: "p" as const,
        text: "This comes up in almost every project we do in Tanzania. The assumption most people start with is wrong: it's not about which language sounds more professional, it's about which language your customer thinks in when they're about to spend money.",
      },
      {
        type: "h2" as const,
        text: "Start with your customer, not your preference",
      },
      {
        type: "p" as const,
        text: "Ask yourself: when my best customer is talking to their friends about what they bought, what language are they using? That's your answer. If you're serving Dar es Salaam households buying groceries or household goods, Swahili isn't just appropriate — it's warmer, more trusted, more direct. If you're a B2B service dealing with corporate clients, government, or international buyers, English is expected.",
      },
      {
        type: "h2" as const,
        text: "The case for bilingual",
      },
      {
        type: "p" as const,
        text: "Most Tanzanian businesses serve a mixed audience. A restaurant might have local walk-in customers and international tourists. A fashion brand might have Dar es Salaam customers and diaspora buyers in the UK or UAE. For these businesses, building a bilingual site — with a simple language toggle — is the right answer. It costs slightly more to write content twice, but the conversion lift from speaking to each customer in their language is worth it.",
      },
      {
        type: "h2" as const,
        text: "What not to do",
      },
      {
        type: "p" as const,
        text: "Don't mix languages mid-sentence. Don't write in English and assume a Swahili-speaking customer will struggle through it because 'they'll manage'. Don't use Google Translate for important pages — the output is recognisable as machine translation to anyone reading it, and it reads as unprofessional in both languages.",
      },
      {
        type: "h2" as const,
        text: "Our default recommendation",
      },
      {
        type: "p" as const,
        text: "For most of our Tanzanian clients: English as the primary language with key selling points mirrored in Swahili. Navigation and CTAs in both. Pricing in both TZS and USD (or the currency your international audience uses). This covers the widest audience without needing to maintain two full versions of every page.",
      },
    ],
  },
  {
    slug: "checklist-launch-online-shop",
    title: "The 12-point checklist before launching your online shop",
    excerpt:
      "What to test, photograph, and write before you turn checkout on.",
    readTime: "5 min read",
    category: "Ecommerce",
    body: [
      {
        type: "p" as const,
        text: "Launching without this checklist is how you end up with customers trying to buy a product that's out of stock, paying with a card that's not connected to anything, and emailing you about an error message at 2am. We've seen all of it. Use this.",
      },
      {
        type: "h2" as const,
        text: "Products",
      },
      {
        type: "p" as const,
        text: "1. Every product has at least one photo that was taken in daylight, not under fluorescent lights. 2. Every product has a price in your primary currency (and TZS if you're selling locally). 3. Stock quantities are set — nothing is showing as available that you don't have. 4. Product descriptions answer the questions a customer would ask: size, material, weight, how it's used.",
      },
      {
        type: "h2" as const,
        text: "Checkout",
      },
      {
        type: "p" as const,
        text: "5. You've made a real test purchase — card declined should not be the first time a customer sees your checkout. 6. The confirmation email is set up and goes to your own inbox first. 7. Delivery cost is calculated correctly (flat rate, by weight, or free above a threshold — whichever you chose). 8. Your refund and return policy is written and linked in the footer.",
      },
      {
        type: "h2" as const,
        text: "Trust",
      },
      {
        type: "p" as const,
        text: "9. Your About page exists and has a real name or face on it. Anonymous shops convert worse — customers want to know who they're buying from. 10. Your WhatsApp number or email is visible without anyone having to search for it. 11. You have at least one testimonial or review showing. It doesn't have to be elaborate — even a screenshot quote from a happy customer works.",
      },
      {
        type: "h2" as const,
        text: "Technical",
      },
      {
        type: "p" as const,
        text: "12. You've checked the site on your phone, on a different browser, and on someone else's phone. What you see on your laptop is not what your customer sees on a 2-year-old Android. If it looks broken on one device, fix it before you tell anyone the shop is open.",
      },
      {
        type: "p" as const,
        text: "If you're working with us, we run through this list before every launch — and we won't hand a site over until everything on it is green. If you're doing it yourself, this is the minimum. Good luck.",
      },
    ],
  },
] as const;
