import type { Metadata } from "next";
import Link from "next/link";
import { about, waLink } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Photo } from "@/components/Photo";
import { Reveal } from "@/components/Reveal";
import { Check, WhatsApp } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built is a Dar es Salaam digital agency founded by Ebrahim Gulamali. Local team, fixed prices, real support — built for Tanzanian businesses.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-14 md:pt-20 pb-16 md:pb-24">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeader
                  eyebrow="About Built"
                  title={
                    <>
                      A small team{" "}
                      <span className="italic text-terracotta">that picks up the phone.</span>
                    </>
                  }
                  intro="Built is a small digital studio with a base in Dar es Salaam and clients worldwide. We design websites, payments, and growth tools — with the same care whether you're shipping a small product line or running a restaurant group."
                />
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={140}>
                <Photo
                  alt="Founder Ebrahim Gulamali at work in a sunlit studio"
                  ratio="4/5"
                  tone="terracotta"
                  caption="Founder · Ebrahim Gulamali"
                />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section bg-sand/40 border-y border-ink/10">
        <div className="container-x max-w-4xl">
          <div className="space-y-12 md:space-y-16">
            {about.story.map((s, i) => (
              <Reveal key={s.heading} delay={i * 80}>
                <article>
                  <h2 className="h-display text-3xl md:text-5xl leading-tight">
                    {s.heading}
                  </h2>
                  <p className="mt-5 text-lg text-ink/80 leading-relaxed">
                    {s.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <Photo
                  alt={`${about.founder.name}, ${about.founder.role} of Built`}
                  ratio="1/1"
                  tone="forest"
                  caption="The team · Founder portrait"
                />
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={100}>
                <p className="eyebrow mb-4">The team</p>
                <h2 className="h-display text-4xl md:text-5xl leading-tight">
                  {about.founder.name}
                </h2>
                <p className="mt-2 text-terracotta font-medium">
                  {about.founder.role}
                </p>
                <p className="mt-6 text-lg text-ink/80 leading-relaxed max-w-xl">
                  {about.founder.bio}
                </p>
                <p className="mt-5 text-ink/70 leading-relaxed max-w-xl">
                  Built works with a small bench of trusted designers, photographers, and developers — assembled per project, across continents, so you get the right people for the job rather than whoever was free.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="section bg-ink text-cream">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Our promise"
              title={
                <span className="text-cream">
                  Five things you can count on,{" "}
                  <span className="italic text-terracotta-200">every time.</span>
                </span>
              }
            />
          </Reveal>
          <div className="mt-14 max-w-3xl">
            <ul className="space-y-5">
              {about.promise.map((p, i) => (
                <Reveal key={p} delay={i * 60}>
                  <li className="flex items-start gap-4 pb-5 border-b border-cream/10 last:border-0">
                    <span className="font-serif text-2xl text-terracotta-200 leading-none mt-1">
                      0{i + 1}
                    </span>
                    <p className="text-lg md:text-xl font-serif tracking-tightest text-cream leading-snug">
                      {p}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stack */}
      <section className="section">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="The modern stack we use"
              title={
                <>
                  How we keep your costs low{" "}
                  <span className="italic text-terracotta">and your site fast.</span>
                </>
              }
              intro="We use the same tools serious modern teams use — but we set them up for you, run them for you, and pass the cost savings on."
            />
          </Reveal>

          <div className="mt-14 grid sm:grid-cols-2 gap-5">
            {about.stack.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 60}>
                <div className="card hover:border-terracotta/30 h-full">
                  <div className="flex items-start gap-3">
                    <Check size={20} className="mt-1 text-forest shrink-0" />
                    <div>
                      <h3 className="font-serif text-2xl tracking-tightest">
                        {tool.name}
                      </h3>
                      <p className="mt-2 text-ink/75 leading-relaxed">
                        {tool.why}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20 md:pb-28">
        <div className="container-x">
          <div className="rounded-3xl bg-forest text-cream p-10 md:p-14 grain">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="h-display text-cream text-4xl md:text-5xl">
                  Want to work together?
                </h2>
                <p className="mt-4 text-cream/85 leading-relaxed max-w-md">
                  Send us a WhatsApp. We'll get back within a few hours with honest thoughts and a clear next step.
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
