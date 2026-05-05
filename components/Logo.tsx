import Link from "next/link";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 ${className}`}>
      <Image
        src="/icon-mark.webp"
        alt=""
        aria-hidden
        width={28}
        height={28}
        className="shrink-0"
      />
      <span className="font-serif text-2xl tracking-tightest text-ink leading-none">
        Built <span className="text-terracotta">Studio</span>
      </span>
    </Link>
  );
}
