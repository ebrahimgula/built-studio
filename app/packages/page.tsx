import type { Metadata } from "next";
import Link from "next/link";
import { packages, packageFaqs, formatTZS, formatUSD, waLink } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { PackageCard } from "@/components/PackageCard";
import { FAQ } from "@/components/FAQ";
import { Reveal } from "@/components/Reveal";
import { Check, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Three honest packages — Starter, Business, and Pro. USD-first pricing with TZS reference.",
};

const comparison = [
  { feature: "Custom domain & hosting", starter: true, business: true, pro: true },
  { feature: "Mobile-first design", starter: true, business: true, pro: true },
  { feature: "WhatsApp + contact form", starter: true, business: true, pro: true },
  { feature: "Instagram feed embed", starter: true, business: true, pro: true },
  { feature: "Google Business Profile setup", starter: true, business: true, pro: true },
  { feature: "Pages", starter: "3", business: "6–8", pro: "Unlimited" },
  { feature: "Online payments (Stripe, PayPal, Pesapal)", starter: false, business: true, pro: true },
  { feature: "Product catalog / menu", starter: false, business: "Up to 50", pro: "Unlimited" },
  { feature: "Bookings & reservations", starter: false, business: true, pro: true },
  { feature: "Custom domain email", starter: false, business: true, pro: true },
  { feature: "On-page SEO", starter: false, business: true, pro: "+ keyword research & reports" },
  { feature: "Inventory tracking", starter: false, business: "Basic", pro: "Variants, multi-location" },
  { feature: "Email marketing automation", starter: false, business: false, pro: true },
  { feature: "Accounting integrations", starter: false, business: false, pro: true },
  { feature: "Quarterly strategy calls", starter: false, business: false, pro: true },
  { feature: "Priority WhatsApp support", starter: false, business: false, pro: true },
];

function CompCell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <Check size={18} className="text-forest mx-auto" />;
  }
  if (value === false) {
    return <span className="text-ink/20">—</span>;
  }
  return <span className="text-sm">{value}</span>;
}

export default function PackagesPage() {
  return (
    <>
      <section className="pt-12 md:pt-18 pb-8 md:pb-14">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Packages & pricing"
              title={
                <>
                  Three packages.{" "}
                  <span className="italic text-terracotta">All prices visible.</span>
                </>
              }
              intro="Hiding prices is a Western SaaS habit. We don't do that. Here's exactly what each package costs and what it includes."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="container-x">
          <div className="grid lg:grid-cols-3 gap-5 lg:gap-5 items-stretch">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 100} className="h-full">
                <PackageCard pkg={pkg} expanded />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-sm text-muted text-center max-w-2xl mx-auto leading-relaxed">
              Prices are shown in USD first, with TZS as a local reference. We invoice in TZS, USD, GBP, AUD, AED, or EUR — whichever is cleanest for you. Setup fees split 50% to start, 50% on launch (Pro can split into three).
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison table */}
      <section className="section bg-sand/40 border-y border-ink/10">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Side-by-side"
              title={
                <>
                  Quick{" "}
                  <span className="italic text-terracotta">comparison.</span>
                </>
              }
            />
          </Reveal>

          <Reveal>
            <div className="mt-10 rounded-3xl bg-cream border border-ink/10 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-ink/10 bg-sand/40">
                      <th className="px-5 md:px-7 py-5 font-serif text-lg tracking-tightest sticky left-0 bg-sand/40 z-10">
                        What's included
                      </th>
                      {packages.map((pkg) => (
                        <th
                          key={pkg.id}
                          className="px-4 md:px-6 py-5 text-center min-w-[140px]"
                        >
                          <div className="font-serif text-xl tracking-tightest">
                            {pkg.name}
                          </div>
                          <div className="text-xs text-muted mt-1">
                            {formatUSD(pkg.setupUSD)} + {formatUSD(pkg.monthlyUSD)}/mo ({formatTZS(pkg.setupTZS)} + {formatTZS(pkg.monthlyTZS)}/mo)
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, i) => (
                      <tr
                        key={row.feature}
                        className={
                          i % 2 === 0 ? "bg-cream" : "bg-sand/20"
                        }
                      >
                        <td className="px-5 md:px-7 py-4 text-ink/85 sticky left-0 bg-inherit z-10 text-sm md:text-base">
                          {row.feature}
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center">
                          <CompCell value={row.starter} />
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center bg-ink/[0.02]">
                          <CompCell value={row.business} />
                        </td>
                        <td className="px-4 md:px-6 py-4 text-center">
                          <CompCell value={row.pro} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Package FAQ */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionHeader
              eyebrow="Pricing & terms"
              title={
                <>
                  Questions{" "}
                  <span className="italic text-terracotta">we hear often.</span>
                </>
              }
            />
          </Reveal>
          <div className="mt-10 md:mt-12">
            <FAQ items={packageFaqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="relative rounded-3xl bg-ink text-cream p-7 md:p-14 overflow-hidden grain">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="h-display text-cream text-3xl md:text-5xl">
                  Not sure which one fits?
                </h2>
                <p className="mt-4 text-cream/75 leading-relaxed max-w-md">
                  Send us a WhatsApp and tell us about your business. We'll recommend the right starting point — even if it's the smallest package.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href={waLink("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsApp size={16} />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn-ghost border-cream/20 text-cream hover:bg-cream/10 hover:border-cream/40"
                >
                  Send an enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
