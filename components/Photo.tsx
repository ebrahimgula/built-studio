import clsx from "clsx";

/**
 * A descriptive placeholder so real photography can be dropped in later.
 * The aspect/treatment matches what the final image will look like.
 */
export function Photo({
  alt,
  ratio = "4/5",
  className,
  tone = "terracotta",
  caption,
}: {
  alt: string;
  ratio?: string;
  className?: string;
  tone?: "terracotta" | "forest" | "sand" | "ink";
  caption?: string;
}) {
  const toneMap: Record<string, string> = {
    terracotta:
      "from-terracotta-200 via-terracotta-300 to-terracotta-500 text-terracotta-900",
    forest: "from-forest-100 via-forest-300 to-forest-500 text-forest-900",
    sand: "from-sand to-terracotta-100 text-ink",
    ink: "from-ink to-terracotta-700 text-cream",
  };

  return (
    <figure
      className={clsx(
        "relative overflow-hidden rounded-3xl bg-gradient-to-br",
        toneMap[tone],
        className
      )}
      style={{ aspectRatio: ratio }}
      aria-label={alt}
      role="img"
    >
      <span className="grain absolute inset-0" aria-hidden />
      <span
        aria-hidden
        className="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6), transparent 40%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.4), transparent 40%)",
        }}
      />
      <div className="absolute inset-0 flex items-end p-5 md:p-6">
        <p className="text-[11px] md:text-xs uppercase tracking-[0.18em] opacity-90 font-medium leading-snug max-w-xs">
          Photo · {alt}
        </p>
      </div>
      {caption && (
        <figcaption className="absolute top-5 left-5 right-5 md:top-6 md:left-6 md:right-6 text-[11px] uppercase tracking-[0.18em] opacity-80 font-medium">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
