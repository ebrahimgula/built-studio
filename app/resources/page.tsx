import type { Metadata } from "next";
import Link from "next/link";
import { resources, waLink } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Plain-English guides for Tanzanian business owners — getting online, mobile money, what a website actually costs.",
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
              intro="No jargon, no fluff, no AI-generated SEO bait. Short reads written for people running actual businesses in Tanzania."
            />
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {resources.map((r, i) => (
              <Reveal key={r.slug} delay={i * 60}>
                <article className="group h-full flex flex-col">
                  <Photo
                    alt={`Cover for ${r.title}`}
                    ratio="4/3"
                    tone={i % 3 === 0 ? "terracotta" : i % 3 === 1 ? "forest" : "sand"}
                    caption={`Article · ${r.readTime}`}
                  />
                  <div className="mt-5 flex flex-col flex-1">
                    <p className="eyebrow">Coming soon</p>
                    <h3 className="font-serif text-[22px] md:text-2xl tracking-tightest mt-2 leading-snug group-hover:text-terracotta transition-colors">
                      {r.title}
                    </h3>
                    <p className="mt-3 text-ink/75 leading-relaxed flex-1">
                      {r.excerpt}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-muted">
                      {r.readTime}
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-14 text-center text-muted max-w-xl mx-auto leading-relaxed">
              Articles are being written. If you have a question you'd like covered, send it to us on WhatsApp — chances are we'll write that one next.
            </p>
          </Reveal>
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
