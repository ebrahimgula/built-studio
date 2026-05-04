"use client";

import { useEffect, useState } from "react";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const dismissed = window.localStorage.getItem("built-cookies");
    if (!dismissed) {
      const t = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  if (!show) return null;

  const dismiss = () => {
    window.localStorage.setItem("built-cookies", "1");
    setShow(false);
  };

  return (
    <div className="fixed bottom-5 left-5 right-5 md:right-auto md:max-w-md z-40">
      <div className="rounded-2xl bg-ink text-cream px-5 py-4 shadow-2xl flex items-start gap-4">
        <p className="text-sm leading-relaxed">
          We use a small number of cookies to keep the site fast and understand what's working. Nothing personal, nothing sold.
        </p>
        <button
          onClick={dismiss}
          className="shrink-0 text-xs uppercase tracking-wider px-3 py-2 rounded-full bg-terracotta hover:bg-terracotta-600 transition-colors"
        >
          Got it
        </button>
      </div>
    </div>
  );
}
