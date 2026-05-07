import type { Metadata } from "next";
import Link from "next/link";
import { resources, waLink } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-English guides for business owners — getting online, mobile money, what a website actually costs.",
};

const categoryColour: Record<string, string> = {
  "Getting online": "bg-terracotta/10 text-terracotta",
  Payments: "bg-forest/10 text-forest",
  Pricing: "bg-sand border border-ink/10 text-ink",
  Content: "bg-terracotta/10 text-terracotta",
  Ecommerce: "bg-forest/10 text-forest",
};

export default function ResourcesPage() {
  return (
    <>
      <section className="pt-12 md:pt-18 pb-8 md:pb-14">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Resources"
              title={
                <>
                  Plain-English guides{" "}
                  <span className="italic text-terracotta">for real owners.</span>
                </>
              }
              intro="No jargon, no fluff. Short reads written for people running actual businesses."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <Link href={`/resources/${r.slug}`} className="group block h-full">
                  <article className="h-full flex flex-col card hover:border-terracotta/30 transition-colors">
                    <span
                      className={`self-start text-[11px] uppercase tracking-[0.18em] font-medium px-2.5 py-1 rounded-full ${categoryColour[r.category] ?? "bg-sand text-ink"}`}
                    >
                      {r.category}
                    </span>
                    <h3 className="font-serif text-[22px] md:text-2xl tracking-tightest mt-4 leading-snug group-hover:text-terracotta transition-colors flex-1">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-ink/70 leading-relaxed text-sm">
                      {r.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between">
                      <span className="text-xs text-muted">{r.readTime}</span>
                      <span className="inline-flex items-center gap-1 text-sm text-terracotta font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Read <ArrowRight size={14} />
                      </span>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="rounded-3xl bg-ink text-cream p-7 md:p-14">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="h-display text-cream text-3xl md:text-5xl">
                  Want a question answered?
                </h2>
                <p className="mt-4 text-cream/75 leading-relaxed max-w-md">
                  Send it on WhatsApp. We'll either answer it directly or write a guide everyone can use.
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
                  Ask on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="btn-ghost border-cream/20 text-cream hover:bg-cream/10 hover:border-cream/40 inline-flex items-center gap-2"
                >
                  Send an enquiry
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
