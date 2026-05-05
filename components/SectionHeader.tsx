import clsx from "clsx";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && <p className="eyebrow mb-3 md:mb-4">{eyebrow}</p>}
      <h2 className="h-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
        {title}
      </h2>
      {intro && (
        <p className="mt-4 md:mt-5 text-base md:text-lg text-muted leading-relaxed max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
}
