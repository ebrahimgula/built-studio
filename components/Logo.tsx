import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/icon.svg"
        alt=""
        aria-hidden
        width={28}
        height={28}
        className="shrink-0"
        priority
      />
      <span className="font-serif text-2xl tracking-tightest text-ink leading-none">
        Built <span className="text-terracotta">Studio</span>
      </span>
    </Link>
  );
}
