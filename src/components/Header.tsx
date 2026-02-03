"use client";

import { useState } from "react";

const LINKS = [
  { label: "Início", href: "#hero" },
  { label: "Boas-vindas", href: "#welcome" },
  { label: "Programação", href: "#program" },
  { label: "Como chegar", href: "#howtoget" },
  { label: "Dicas", href: "#tips" },
  { label: "Presentes", href: "#gifts" },
  { label: "RSVP", href: "#rsvp" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-marfim/98 backdrop-blur-md border-b border-charcoal/5">
      <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-semibold text-sm uppercase tracking-[0.2em] text-charcoal hover:text-terracotta transition-colors"
        >
          Isabele &amp; João
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-serif font-light text-xs uppercase tracking-[0.15em] text-charcoal/60 hover:text-terracotta transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-charcoal/10 px-6 py-4 flex flex-col gap-4">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="font-serif font-light text-sm uppercase tracking-[0.12em] text-charcoal/70 hover:text-charcoal"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
