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
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <h2 className="h-display text-4xl sm:text-5xl md:text-6xl leading-[1.02]">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-lg text-muted leading-relaxed max-w-2xl">
          {intro}
        </p>
      )}
    </div>
  );
}
