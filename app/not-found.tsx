import Link from "next/link";
import { waLink } from "@/content/site";
import { WhatsApp } from "@/components/Icons";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container-x py-20">
        <p className="eyebrow mb-6">404</p>
        <h1 className="h-display text-6xl md:text-8xl leading-none">
          This page{" "}
          <span className="italic text-terracotta">doesn't exist.</span>
        </h1>
        <p className="mt-6 text-lg text-muted max-w-md leading-relaxed">
          It might have moved, or the link might be wrong. No stress — here are a few places to go instead.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/" className="btn-primary">
            Back home
          </Link>
          <Link href="/packages" className="btn-ghost">
            See packages
          </Link>
          <a
            href={waLink("default")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <WhatsApp size={16} />
            Chat with us
          </a>
        </div>
      </div>
    </div>
  );
}
