import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects, waLink } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { ArrowRight, Check, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies of Tanzanian and East African businesses we've helped move from DM-driven chaos to real digital infrastructure.",
};

export default function WorkPage() {
  const featured = projects[0];
  const others = projects.slice(1);

  return (
    <>
      <section className="pt-12 md:pt-18 pb-12 md:pb-18">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Selected work"
              title={
                <>
                  Brands we've helped{" "}
                  <span className="italic text-terracotta">grow up online.</span>
                </>
              }
              intro="Each of these started somewhere familiar — DMs, spreadsheets, a printed menu, a phone ringing through dinner service. Here's where they are now."
            />
          </Reveal>
        </div>
      </section>

      {/* Featured case study: Hawrat */}
      <section id={featured.id} className="pb-16 md:pb-24 scroll-mt-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-3xl overflow-hidden bg-ink text-cream">
              <div className="grid lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-6 p-6 md:p-10 lg:p-16 flex flex-col">
                  <p className="eyebrow text-terracotta-200">{featured.tag}</p>
                  <h2 className="h-display text-cream text-4xl md:text-6xl mt-3">
                    {featured.name}
                  </h2>
                  <p className="mt-3 text-cream/70">
                    {featured.industry} · {featured.location}
                  </p>
                  <p className="mt-5 md:mt-6 text-base md:text-lg text-cream/85 leading-relaxed">
                    {featured.summary}
                  </p>

                  {"link" in featured && featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center gap-2 text-terracotta-200 hover:text-cream transition-colors font-medium"
                    >
                      Visit hawrat.com
                      <ArrowRight size={16} />
                    </a>
                  )}
                </div>

                <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] lg:min-h-0">
                  <Image
                    src="/work-hawrat-thumb.webp"
                    alt={featured.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 border-t border-cream/10">
                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-cream/10">
                  <p className="eyebrow text-cream/50 mb-4">The challenge</p>
                  <p className="text-cream/85 leading-relaxed">
                    {featured.challenge}
                  </p>
                </div>

                <div className="p-6 md:p-10 border-b md:border-b-0 md:border-r border-cream/10">
                  <p className="eyebrow text-cream/50 mb-4">What we built</p>
                  <ul className="space-y-2.5">
                    {featured.built.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2.5 text-cream/85 text-[15px] leading-relaxed"
                      >
                        <Check
                          size={16}
                          className="mt-1 shrink-0 text-terracotta-200"
                        />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 md:p-10">
                  <p className="eyebrow text-cream/50 mb-4">The transformation</p>
                  <ul className="space-y-2.5">
                    {featured.transformation.map((t) => (
                      <li
                        key={t}
                        className="flex items-start gap-2.5 text-cream/85 text-[15px] leading-relaxed"
                      >
                        <ArrowRight
                          size={16}
                          className="mt-1 shrink-0 text-terracotta-200"
                        />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other projects */}
      <section className="section bg-sand/40 border-y border-ink/10">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="More case studies"
              title={
                <>
                  Different businesses,{" "}
                  <span className="italic text-terracotta">same care.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-6 lg:gap-10">
            {others.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <article
                  id={p.id}
                  className="card-elevated group h-full flex flex-col scroll-mt-24"
                >
                  <div className="relative overflow-hidden rounded-2xl mb-6" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={p.image}
                      alt={p.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="eyebrow">{p.industry} · {p.location}</p>
                  <h3 className="h-display text-3xl md:text-4xl mt-2">
                    {p.name}
                  </h3>
                  <p className="mt-4 text-ink/80 leading-relaxed">{p.summary}</p>

                  <div className="mt-6 grid sm:grid-cols-2 gap-5 pt-6 border-t border-ink/10">
                    <div>
                      <p className="eyebrow mb-3">What we built</p>
                      <ul className="space-y-1.5">
                        {p.built.slice(0, 3).map((b) => (
                          <li
                            key={b}
                            className="flex items-start gap-2 text-sm text-ink/80"
                          >
                            <Check size={14} className="mt-1 shrink-0 text-forest" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="eyebrow mb-3">The transformation</p>
                      <ul className="space-y-1.5">
                        {p.transformation.slice(0, 3).map((t) => (
                          <li
                            key={t}
                            className="flex items-start gap-2 text-sm text-ink/80"
                          >
                            <ArrowRight
                              size={14}
                              className="mt-1 shrink-0 text-terracotta"
                            />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {"link" in p && p.link && (
                    <div className="mt-5 pt-5 border-t border-ink/10">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-terracotta font-medium hover:gap-3 transition-all text-sm"
                      >
                        Visit live site
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <div className="rounded-3xl bg-terracotta text-cream p-7 md:p-14 grain">
            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <h2 className="h-display text-cream text-3xl md:text-5xl">
                  Could be your business next.
                </h2>
                <p className="mt-4 text-cream/85 leading-relaxed max-w-md">
                  Tell us where you are now. We'll be honest about whether we can help — and if not, we'll point you somewhere better.
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
