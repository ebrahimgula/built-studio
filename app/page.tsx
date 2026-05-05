import Image from "next/image";
import Link from "next/link";
import {
  hero,
  audiences,
  capabilities,
  howItWorks,
  pillars,
  testimonials,
  faqs,
  packages,
  projects,
  waLink,
} from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { PackageCard } from "@/components/PackageCard";
import { FAQ } from "@/components/FAQ";
import { ArrowRight, Quote, WhatsApp, iconMap } from "@/components/Icons";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x pt-8 md:pt-14 pb-12 md:pb-20">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="eyebrow mb-5">
                  <span className="font-serif italic normal-case tracking-normal text-base text-terracotta">
                    {hero.greeting}
                  </span>
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="h-display text-[36px] sm:text-5xl md:text-6xl lg:text-[82px] leading-[0.98]">
                  Your business deserves more than a{" "}
                  <span className="italic text-terracotta">DM inbox.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-5 md:mt-7 text-base md:text-lg text-muted max-w-xl leading-relaxed">
                  {hero.sub}
                </p>
              </Reveal>
              <Reveal delay={220}>
                <div className="mt-7 md:mt-9 flex flex-wrap gap-2.5 md:gap-3">
                  <Link href={hero.primaryCta.href} className="btn-primary">
                    {hero.primaryCta.label}
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href={hero.secondaryCta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <WhatsApp size={16} />
                    {hero.secondaryCta.label}
                  </a>
                </div>
              </Reveal>
              <Reveal delay={300}>
                <div className="mt-8 md:mt-10 flex items-center gap-4 md:gap-6 text-sm text-muted">
                  <div className="flex -space-x-2">
                    {[
                      "from-terracotta-300 to-terracotta-600",
                      "from-forest-300 to-forest-600",
                      "from-terracotta-200 to-forest-400",
                    ].map((c, i) => (
                      <span
                        key={i}
                        className={`w-8 h-8 rounded-full ring-2 ring-cream bg-gradient-to-br ${c}`}
                      />
                    ))}
                  </div>
                  <span>
                    Trusted by independent brands and growing businesses worldwide.
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-3xl aspect-[4/5]">
                    <Image
                      src="/hero-main.webp"
                      alt={hero.imageAlt}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 md:-bottom-6 md:-left-6 bg-cream border border-ink/10 rounded-2xl p-3 md:p-4 shadow-lg max-w-[200px] md:max-w-[220px]">
                    <p className="text-xs uppercase tracking-[0.18em] text-muted mb-1">
                      Recently shipped
                    </p>
                    <p className="font-serif text-lg leading-tight">
                      Hawrat — Instagram brand to international ecommerce.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="section bg-sand/40 border-y border-ink/10">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Who this is for"
              title={
                <>
                  Two kinds of businesses.
                  <br />
                  <span className="italic text-terracotta">One studio that gets both.</span>
                </>
              }
              intro="We work with the brand just leaving Instagram and the restaurant ready to ditch its old WordPress site. Different packages. Same care."
            />
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-5 md:gap-8">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="card-elevated group h-full flex flex-col">
                  <div className="relative overflow-hidden rounded-2xl mb-6" style={{ aspectRatio: "16/10" }}>
                    <Image
                      src={i === 0 ? "/audience-starter.webp" : "/audience-business.webp"}
                      alt={a.imageAlt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <p className="eyebrow">{a.eyebrow}</p>
                  <h3 className="h-display text-3xl md:text-4xl mt-2">{a.title}</h3>
                  <p className="mt-4 text-ink/80 leading-relaxed">{a.body}</p>
                  <Link
                    href={a.cta.href}
                    className="mt-6 inline-flex items-center gap-1.5 text-terracotta font-medium group-hover:gap-3 transition-all"
                  >
                    {a.cta.label}
                    <ArrowRight size={16} />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="What we build"
              title={
                <>
                  Everything a modern business needs —{" "}
                  <span className="italic text-terracotta">nothing it doesn't.</span>
                </>
              }
              intro="We don't sell features. We solve the problem in front of you, and use only the tools that fit."
            />
          </Reveal>

          <div className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {capabilities.map((cap, i) => {
              const Icon = iconMap[cap.icon as keyof typeof iconMap];
              return (
                <Reveal key={cap.title} delay={i * 60}>
                  <div className="card group hover:border-terracotta/40 hover:bg-cream/80 h-full">
                    <div className="w-11 h-11 rounded-xl bg-terracotta/10 text-terracotta inline-flex items-center justify-center mb-5 group-hover:bg-terracotta group-hover:text-cream transition-colors">
                      {Icon && <Icon size={22} />}
                    </div>
                    <h3 className="font-serif text-2xl tracking-tightest">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-ink/70 leading-relaxed">{cap.body}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="packages" className="section bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="The three packages"
              title={
                <span className="text-cream">
                  Fixed prices.{" "}
                  <span className="italic text-terracotta-200">No surprises.</span>
                </span>
              }
              intro={
                <span className="text-cream/75">
                  Pick a starting point. Upgrade later. Every quote is final before we begin — no hourly billing, no scope creep tax.
                </span>
              }
            />
          </Reveal>

          <div className="mt-10 md:mt-14 grid lg:grid-cols-3 gap-5 lg:gap-5 items-stretch">
            {packages.map((pkg, i) => (
              <Reveal key={pkg.id} delay={i * 100} className="h-full">
                <PackageCard pkg={pkg} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/packages"
              className="inline-flex items-center gap-2 text-terracotta-200 hover:text-cream transition-colors font-medium"
            >
              See the full comparison and FAQ
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="How it works"
              title={
                <>
                  From WhatsApp message to live website,{" "}
                  <span className="italic text-terracotta">in four steps.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {howItWorks.map((s, i) => (
              <Reveal key={s.step} delay={i * 80}>
                <div className="relative h-full">
                  <div className="font-serif text-6xl md:text-7xl text-terracotta/15 leading-none mb-3 md:mb-4">
                    {s.step}
                  </div>
                  <h3 className="font-serif text-[22px] md:text-2xl tracking-tightest leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-ink/70 leading-relaxed">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Built Studio (pillars) */}
      <section className="section bg-sand/40 border-y border-ink/10">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 md:gap-10">
            <div className="lg:col-span-5">
              <Reveal>
                <SectionHeader
                  eyebrow="Why Built Studio"
                  title={
                    <>
                      The studio we{" "}
                      <span className="italic text-terracotta">wished existed</span> for our friends' businesses.
                    </>
                  }
                  intro="Most agencies are too far away, too expensive, or too detached. We built the alternative."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-5">
                {pillars.map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <div className="card-elevated h-full">
                      <h3 className="font-serif text-xl tracking-tightest">
                        {p.title}
                      </h3>
                      <p className="mt-2 text-ink/70 leading-relaxed">{p.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent work */}
      <section className="section">
        <div className="container-x">
          <div className="flex items-end justify-between flex-wrap gap-4 md:gap-6 mb-8 md:mb-10">
            <Reveal>
              <SectionHeader
                eyebrow="Recent work"
                title={
                  <>
                    Built for{" "}
                    <span className="italic text-terracotta">independent operators.</span>
                  </>
                }
              />
            </Reveal>
            <Reveal delay={120}>
              <Link
                href="/work"
                className="inline-flex items-center gap-2 text-ink/80 hover:text-terracotta transition-colors font-medium"
              >
                View all work
                <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
        <div className="overflow-x-auto -mx-5 sm:-mx-8 lg:-mx-12 px-5 sm:px-8 lg:px-12 scrollbar-none">
          <ul className="flex gap-5 min-w-max pr-5 sm:pr-8 lg:pr-12">
            {projects.map((p, i) => (
              <li key={p.id} className="w-[280px] md:w-[340px] shrink-0">
                <Reveal delay={i * 60}>
                  <Link href={`/work#${p.id}`} className="block group">
                    <div className="relative overflow-hidden rounded-3xl" style={{ aspectRatio: "4/5" }}>
                      <Image
                        src={p.image}
                        alt={p.imageAlt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="340px"
                      />
                    </div>
                    <div className="mt-3.5">
                      <p className="font-serif text-2xl tracking-tightest group-hover:text-terracotta transition-colors">
                        {p.name}
                      </p>
                      <p className="text-sm text-muted line-clamp-2 mt-1">
                        {p.summary}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-terracotta text-cream">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="What clients say"
              title={
                <span className="text-cream">
                  Words from{" "}
                  <span className="italic">people we've worked with.</span>
                </span>
              }
            />
          </Reveal>

          <div className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5 md:gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="bg-cream text-ink rounded-3xl p-6 md:p-8 h-full flex flex-col">
                  <Quote size={28} className="text-terracotta" />
                  <blockquote className="mt-4 md:mt-5 font-serif text-lg md:text-[22px] tracking-tightest leading-snug flex-1">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-7 pt-5 border-t border-ink/10">
                    <p className="font-medium">{t.name}</p>
                    <p className="text-sm text-muted">{t.role}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container-x max-w-4xl">
          <Reveal>
            <SectionHeader
              eyebrow="Common questions"
              title={
                <>
                  Things people{" "}
                  <span className="italic text-terracotta">always ask.</span>
                </>
              }
            />
          </Reveal>

          <div className="mt-10 md:mt-12">
            <FAQ items={[...faqs]} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container-x">
          <div className="relative rounded-3xl bg-forest text-cream p-7 md:p-14 lg:p-20 overflow-hidden grain">
            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow text-cream/60 mb-5">Ready to grow?</p>
              <h2 className="h-display text-cream text-4xl md:text-6xl lg:text-7xl leading-[1.02]">
                Let's build something{" "}
                <span className="italic text-terracotta-200">real.</span>
              </h2>
              <p className="mt-5 md:mt-6 text-base md:text-lg text-cream/80 max-w-xl leading-relaxed">
                Send us a WhatsApp. Tell us about your business. We'll come back with a fixed quote within a few hours — and a clear plan you can actually understand.
              </p>
              <div className="mt-7 md:mt-9 flex flex-wrap gap-2.5 md:gap-3">
                <a
                  href={waLink("default")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <WhatsApp size={16} />
                  Chat on WhatsApp
                </a>
                <Link href="/contact" className="btn-ghost border-cream/20 text-cream hover:bg-cream/10 hover:border-cream/40">
                  Send a detailed enquiry
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
