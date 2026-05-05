import type { Metadata } from "next";
import { site, waLink } from "@/content/site";
import { SectionHeader } from "@/components/SectionHeader";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { WhatsApp, Mail, Phone, Pin, Instagram } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Chat with the Built team on WhatsApp or send an enquiry. We reply within 4 hours during business hours.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-12 md:pt-18 pb-8 md:pb-12">
        <div className="container-x">
          <Reveal>
            <SectionHeader
              eyebrow="Contact"
              title={
                <>
                  Let's{" "}
                  <span className="italic text-terracotta">talk.</span>
                </>
              }
              intro="The fastest way to reach us is WhatsApp. If your enquiry is more detailed, the form below comes straight to us."
            />
          </Reveal>
        </div>
      </section>

      {/* WhatsApp hero */}
      <section className="pb-10 md:pb-16">
        <div className="container-x">
          <Reveal>
            <a
              href={waLink("default")}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-[#25D366] hover:bg-[#1FB957] transition-colors text-white p-6 md:p-12"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/20 inline-flex items-center justify-center shrink-0">
                  <WhatsApp size={30} />
                </div>
                <div className="flex-1">
                  <p className="text-sm uppercase tracking-[0.18em] opacity-80 mb-2">
                    Quickest path
                  </p>
                  <p className="font-serif text-[30px] md:text-5xl tracking-tightest leading-tight">
                    Chat with us on WhatsApp
                  </p>
                  <p className="mt-2.5 text-base md:text-lg opacity-90">
                    {site.responseTime}
                  </p>
                </div>
                <div className="text-right hidden md:block">
                  <p className="text-3xl font-serif tracking-tightest">→</p>
                </div>
              </div>
            </a>
          </Reveal>
        </div>
      </section>

      {/* Form + sidebar */}
      <section className="section">
        <div className="container-x">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="h-display text-[30px] md:text-4xl mb-2">
                  Or send a detailed enquiry
                </h2>
                <p className="text-muted mb-6 md:mb-8">
                  More context = a better first reply. Tell us as much as you'd like.
                </p>
                <ContactForm />
              </Reveal>
            </div>

            <aside className="lg:col-span-5 lg:pl-6">
              <Reveal delay={120}>
                <div className="rounded-3xl bg-sand/40 border border-ink/10 p-6 md:p-8">
                  <p className="eyebrow mb-5">Find us</p>
                  <ul className="space-y-5 text-ink/85">
                    <li className="flex items-start gap-3">
                      <Pin size={20} className="mt-0.5 text-terracotta shrink-0" />
                      <div>
                        <p className="font-medium">Studio</p>
                        <p className="text-muted">{site.location}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Phone size={20} className="mt-0.5 text-terracotta shrink-0" />
                      <div>
                        <p className="font-medium">Phone & WhatsApp</p>
                        <a
                          href={`tel:${site.phone}`}
                          className="text-muted hover:text-terracotta transition-colors"
                        >
                          {site.phone}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Mail size={20} className="mt-0.5 text-terracotta shrink-0" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a
                          href={`mailto:${site.email}`}
                          className="text-muted hover:text-terracotta transition-colors"
                        >
                          {site.email}
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Instagram size={20} className="mt-0.5 text-terracotta shrink-0" />
                      <div>
                        <p className="font-medium">Instagram</p>
                        <a
                          href={site.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-terracotta transition-colors"
                        >
                          @built.studio
                        </a>
                      </div>
                    </li>
                  </ul>

                  <div className="mt-7 pt-7 border-t border-ink/10">
                    <p className="eyebrow mb-3">Reply time</p>
                    <p className="font-serif text-xl tracking-tightest leading-snug">
                      {site.responseTime}
                    </p>
                    <p className="mt-2 text-sm text-muted">
                      Business hours: Mon–Fri, 9am–6pm EAT.
                    </p>
                  </div>
                </div>

                <div className="mt-6 rounded-3xl overflow-hidden border border-ink/10 aspect-[4/3] relative bg-gradient-to-br from-forest-200 via-terracotta-100 to-sand">
                  <span className="grain absolute inset-0" aria-hidden />
                  <div className="absolute inset-0 flex items-end p-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-ink/70 font-medium">
                      Map · Dar es Salaam (we'll plug in a real Google Map here)
                    </p>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
