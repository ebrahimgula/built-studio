import Link from "next/link";
import clsx from "clsx";
import { Check } from "./Icons";
import { formatUSD, formatTZS, waLink, packages } from "@/content/site";

type Pkg = (typeof packages)[number];

export function PackageCard({ pkg, expanded = false }: { pkg: Pkg; expanded?: boolean }) {
  return (
    <div
      id={pkg.id}
      className={clsx(
        "relative flex flex-col rounded-3xl p-7 md:p-8 transition-all duration-300",
        pkg.highlighted
          ? "bg-ink text-cream shadow-2xl md:scale-[1.02] ring-1 ring-terracotta/40"
          : "bg-cream border border-ink/10 hover:border-ink/25"
      )}
    >
      {pkg.highlighted && "badge" in pkg && pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-terracotta text-cream text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 font-medium shadow">
          {pkg.badge}
        </span>
      )}

      <div className="flex items-baseline justify-between">
        <div>
          <p className={clsx("eyebrow", pkg.highlighted && "text-cream/70")}>
            {pkg.subtitle}
          </p>
          <h3 className={clsx("h-display text-3xl md:text-4xl mt-1", pkg.highlighted && "text-cream")}>
            {pkg.name}
          </h3>
        </div>
      </div>

      <div className="mt-5 pb-5 border-b border-ink/10">
        <p className={clsx("text-sm leading-relaxed", pkg.highlighted ? "text-cream/80" : "text-muted")}>
          {pkg.perfectFor}
        </p>
      </div>

      <div className="py-5 space-y-2">
        <div>
          <div className="flex items-baseline gap-2">
            <span className={clsx("font-serif text-3xl md:text-4xl", pkg.highlighted && "text-cream")}>
              {formatUSD(pkg.setupUSD)}
            </span>
            <span className={clsx("text-sm", pkg.highlighted ? "text-cream/70" : "text-muted")}>
              one-time
            </span>
          </div>
          <p className={clsx("text-xs mt-0.5", pkg.highlighted ? "text-cream/55" : "text-muted/80")}>
            {formatTZS(pkg.setupTZS)}
          </p>
        </div>
        <div>
          <div className="flex items-baseline gap-2">
            <span className={clsx("font-serif text-2xl", pkg.highlighted ? "text-terracotta-200" : "text-terracotta")}>
              + {formatUSD(pkg.monthlyUSD)}
            </span>
            <span className={clsx("text-sm", pkg.highlighted ? "text-cream/70" : "text-muted")}>
              / month
            </span>
          </div>
          <p className={clsx("text-xs mt-0.5", pkg.highlighted ? "text-cream/55" : "text-muted/80")}>
            {formatTZS(pkg.monthlyTZS)} / month
          </p>
        </div>
      </div>

      {"inheritsFrom" in pkg && pkg.inheritsFrom && (
        <p className={clsx("text-sm font-medium mb-3", pkg.highlighted ? "text-cream/90" : "text-ink")}>
          Everything in {pkg.inheritsFrom}, plus:
        </p>
      )}

      <ul className="space-y-3 flex-1">
        {pkg.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-[15px] leading-relaxed">
            <Check
              size={18}
              className={clsx("mt-0.5 shrink-0", pkg.highlighted ? "text-terracotta-200" : "text-forest")}
            />
            <span className={pkg.highlighted ? "text-cream/95" : "text-ink/90"}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      <a
        href={waLink(pkg.cta.waKey)}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",
          pkg.highlighted
            ? "bg-terracotta text-cream hover:bg-terracotta-400"
            : "bg-ink text-cream hover:bg-ink/80"
        )}
      >
        {pkg.cta.label} →
      </a>
      {expanded && (
        <Link
          href="/contact"
          className={clsx(
            "mt-2 text-center text-xs underline-offset-4 hover:underline",
            pkg.highlighted ? "text-cream/70" : "text-muted"
          )}
        >
          Or send a detailed enquiry
        </Link>
      )}
    </div>
  );
}
