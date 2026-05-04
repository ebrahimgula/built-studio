"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Logo } from "./Logo";
import { nav, waLink } from "@/content/site";
import { Menu, Close, WhatsApp } from "./Icons";

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-cream/85 backdrop-blur-md border-b border-ink/8"
          : "bg-cream/0"
      )}
    >
      <nav className="container-x flex items-center justify-between h-16 md:h-20">
        <Logo />

        <div className="hidden md:flex items-center gap-1">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "px-3.5 py-2 text-sm rounded-full transition-colors",
                  active
                    ? "text-ink bg-ink/5"
                    : "text-muted hover:text-ink hover:bg-ink/[0.03]"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <a
            href={waLink("default")}
            className="btn-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp size={16} />
            WhatsApp
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <Close /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/8 bg-cream">
          <div className="container-x py-4 flex flex-col gap-1">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "px-3 py-3 rounded-xl text-base",
                    active
                      ? "bg-ink/5 text-ink"
                      : "text-muted hover:bg-ink/[0.03]"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={waLink("default")}
              className="btn-whatsapp mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsApp size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
