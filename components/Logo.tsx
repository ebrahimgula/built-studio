import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <span aria-hidden className="relative inline-block w-7 h-7">
        <span className="absolute inset-0 rounded-md bg-terracotta" />
        <span className="absolute inset-[3px] rounded-sm bg-cream" />
        <span className="absolute inset-[7px] rounded-[1px] bg-terracotta" />
      </span>
      <span className="font-serif text-2xl tracking-tightest text-ink leading-none">
        Built<span className="text-terracotta">.</span>
      </span>
    </Link>
  );
}
