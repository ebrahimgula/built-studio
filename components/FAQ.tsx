"use client";

import { useState } from "react";
import clsx from "clsx";
import { Plus, Minus } from "./Icons";

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left flex items-start gap-5 py-6 md:py-7 group"
              aria-expanded={isOpen}
            >
              <span
                className={clsx(
                  "shrink-0 mt-1 w-7 h-7 rounded-full inline-flex items-center justify-center transition-colors",
                  isOpen ? "bg-terracotta text-cream" : "bg-ink/5 text-ink group-hover:bg-ink/10"
                )}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
              <span className="font-serif text-xl md:text-2xl tracking-tightest text-ink leading-snug">
                {item.q}
              </span>
            </button>
            <div
              className={clsx(
                "grid transition-all duration-300 ease-out",
                isOpen ? "grid-rows-[1fr] opacity-100 pb-7" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pl-12 pr-4 text-ink/80 leading-relaxed max-w-2xl">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
