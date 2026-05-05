import Link from "next/link";
import clsx from "clsx";
import { Check } from "./Icons";
import { formatUSD, formatTZS, waLink, packages } from "@/content/site";

type Pkg = (typeof packages)[number];

export function PackageCard({ pkg, expanded = false }: { pkg: Pkg; expanded?: boolean }) {
  const hl = pkg.highlighted;

  return (
    <div
      id={pkg.id}
      className={clsx(
        "relative flex flex-col rounded-3xl p-7 md:p-8 transition-all duration-300",
        hl
          ? "bg-ink text-cream shadow-2xl md:scale-[1.02] ring-1 ring-terracotta/40"
          : "bg-cream text-ink border border-ink/10 hover:border-ink/25"
      )}
    >
      {hl && "badge" in pkg && pkg.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-terracotta text-cream text-[11px] uppercase tracking-[0.18em] px-3 py-1.5 font-medium shadow">
          {pkg.badge}
        </span>
      )}

      {/* Name */}
      <div>
        <p className={clsx("eyebrow", hl ? "text-cream/70" : "text-muted")}>
          {pkg.subtitle}
        </p>
        <h3 className={clsx("h-display text-3xl md:text-4xl mt-1", hl ? "text-cream" : "text-ink")}>
          {pkg.name}
        </h3>
      </div>

      {/* Perfect for */}
      <div className="mt-5 pb-5 border-b border-ink/10">
        <p className={clsx("text-sm leading-relaxed", hl ? "text-cream/80" : "text-muted")}>
          {pkg.perfectFor}
        </p>
      </div>

      {/* Pricing */}
      <div className="py-5 space-y-2">
        <div>
          <div className="flex items-baseline gap-2 whitespace-nowrap">
            <span className={clsx("font-serif text-3xl md:text-4xl", hl ? "text-cream" : "text-ink")}>
              {formatUSD(pkg.setupUSD)}
            </span>
            <span className={clsx("text-sm", hl ? "text-cream/70" : "text-muted")}>
              one-time
            </span>
            <span className={clsx("text-xs", hl ? "text-cream/55" : "text-muted")}>
              ({formatTZS(pkg.setupTZS)})
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-baseline gap-2 whitespace-nowrap">
            <span className={clsx("font-serif text-2xl", hl ? "text-terracotta-200" : "text-terracotta")}>
              + {formatUSD(pkg.monthlyUSD)}
            </span>
            <span className={clsx("text-sm", hl ? "text-cream/70" : "text-muted")}>
              / month
            </span>
            <span className={clsx("text-xs", hl ? "text-cream/55" : "text-muted")}>
              ({formatTZS(pkg.monthlyTZS)})
            </span>
          </div>
        </div>
      </div>

      {"inheritsFrom" in pkg && pkg.inheritsFrom && (
        <p className={clsx("text-sm font-medium mb-3", hl ? "text-cream/90" : "text-ink")}>
          Everything in {pkg.inheritsFrom}, plus:
        </p>
      )}

      {/* Features */}
      <ul className="space-y-3 flex-1">
        {pkg.features.map((feat) => (
          <li key={feat} className="flex items-start gap-3 text-[15px] leading-relaxed">
            <Check
              size={18}
              className={clsx("mt-0.5 shrink-0", hl ? "text-terracotta-200" : "text-forest")}
            />
            <span className={hl ? "text-cream/95" : "text-ink/90"}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={waLink(pkg.cta.waKey)}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all",
          hl
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
            hl ? "text-cream/70" : "text-muted"
          )}
        >
          Or send a detailed enquiry
        </Link>
      )}
    </div>
  );
}
