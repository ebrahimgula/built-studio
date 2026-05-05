import Link from "next/link";
import { site, nav, waLink } from "@/content/site";
import { Instagram, WhatsApp, Mail, Pin } from "./Icons";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand/40">
      <div className="container-x py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-8 md:gap-8">
          <div className="md:col-span-5">
            <Logo className="mb-4" />
            <p className="font-serif text-[30px] md:text-4xl tracking-tightest text-ink leading-[1.08]">
              We build the website.
              <br />
              <span className="text-terracotta">You grow the business.</span>
            </p>
            <p className="mt-4 md:mt-5 text-muted max-w-md leading-relaxed text-[15px] md:text-base">
              {site.description}
            </p>
            <a
              href={waLink("default")}
              className="btn-whatsapp mt-6"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp size={16} />
              Start a conversation
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow mb-4">Site</p>
            <ul className="space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-ink/80 hover:text-terracotta transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow mb-4">Contact</p>
            <ul className="space-y-3 text-ink/80">
              <li className="flex items-start gap-2.5">
                <Pin size={18} className="mt-0.5 text-terracotta shrink-0" />
                <span>{site.location}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={18} className="mt-0.5 text-terracotta shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-terracotta transition-colors">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Instagram size={18} className="mt-0.5 text-terracotta shrink-0" />
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-terracotta transition-colors"
                >
                  @built.studio
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 md:mt-14 pt-5 md:pt-6 border-t border-ink/10 flex flex-col-reverse md:flex-row md:justify-between md:items-center gap-2.5 md:gap-3 text-sm text-muted">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p className="font-serif italic">
            A small studio. Made for the world.
          </p>
        </div>
      </div>
    </footer>
  );
}
