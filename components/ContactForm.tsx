"use client";

import { useState } from "react";
import clsx from "clsx";
import { ArrowRight } from "./Icons";

const needs = [
  "A new website",
  "Upgrade my existing site",
  "Just exploring",
] as const;

const budgets = [
  "Starter (~900K + 75K/mo)",
  "Business (~2.4M + 180K/mo)",
  "Pro (5.5M + 350K/mo)",
  "Not sure yet",
] as const;

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [need, setNeed] = useState<(typeof needs)[number] | null>(null);
  const [budget, setBudget] = useState<(typeof budgets)[number] | null>(null);
  const [status, setStatus] = useState<Status>("idle");

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = new FormData(form);

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          body: data,
          headers: { Accept: "application/json" },
        });
        if (!res.ok) throw new Error("submit failed");
        setStatus("success");
        form.reset();
        setNeed(null);
        setBudget(null);
        return;
      } catch {
        setStatus("error");
        return;
      }
    }

    // No endpoint configured — simulate success so the form still works in dev.
    await new Promise((r) => setTimeout(r, 500));
    setStatus("success");
    form.reset();
    setNeed(null);
    setBudget(null);
  };

  if (status === "success") {
    return (
      <div className="rounded-3xl bg-forest text-cream p-10 text-center">
        <p className="font-serif text-4xl tracking-tightest">Asante sana.</p>
        <p className="mt-3 text-cream/85 leading-relaxed max-w-md mx-auto">
          We've got your message. We reply within 4 hours during business hours — usually faster.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required />
        <Field label="Business name" name="business" required />
      </div>

      <Field label="Email" name="email" type="email" required />

      <ButtonGroup
        label="What do you need?"
        options={needs}
        value={need}
        onChange={setNeed}
        name="need"
      />

      <ButtonGroup
        label="Budget range"
        options={budgets}
        value={budget}
        onChange={setBudget}
        name="budget"
      />

      <div>
        <label className="eyebrow block mb-2">Tell us about your business</label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="What you sell, where you're based, what's not working today, what good would look like…"
          className="w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3.5 text-ink placeholder:text-muted focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary w-full sm:w-auto disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
        <ArrowRight size={16} />
      </button>

      <p className="text-xs text-muted">
        We never share your details. We'll only use this to reply to your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="eyebrow block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full rounded-2xl border border-ink/15 bg-cream px-4 py-3.5 text-ink placeholder:text-muted focus:border-terracotta focus:ring-2 focus:ring-terracotta/20 focus:outline-none transition-all"
      />
    </div>
  );
}

function ButtonGroup<T extends string>({
  label,
  options,
  value,
  onChange,
  name,
}: {
  label: string;
  options: readonly T[];
  value: T | null;
  onChange: (v: T) => void;
  name: string;
}) {
  return (
    <div>
      <label className="eyebrow block mb-3">{label}</label>
      <input type="hidden" name={name} value={value ?? ""} />
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={clsx(
              "px-4 py-2.5 rounded-full text-sm border transition-all",
              value === opt
                ? "border-terracotta bg-terracotta text-cream"
                : "border-ink/15 bg-cream text-ink hover:border-ink/40"
            )}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
