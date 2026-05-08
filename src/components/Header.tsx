"use client";

import { useState } from "react";
import Image from "next/image";

const NAV_ITEMS: [string, string][] = [
  ["welcome", "Início"],
  ["program", "Programação"],
  ["howtoget", "Como chegar"],
  ["tips", "Dicas"],
  ["gifts", "Presentes"],
  ["rsvp", "RSVP"],
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <nav className="ij-nav">
      <div className="ij-nav-inner">
        <a href="#top" className="ij-nav-mono" onClick={go("top")}>
          <Image
            src="/assets/monogram-olive.png"
            alt="I&J"
            width={36}
            height={36}
            style={{ height: 36, width: "auto" }}
          />
        </a>
        <ul className="ij-nav-links">
          {NAV_ITEMS.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={go(id)}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#rsvp" onClick={go("rsvp")} className="ij-nav-cta">
          Confirmar
        </a>
        <button
          className="ij-nav-burger"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>
      {mobileOpen && (
        <div className="ij-nav-mobile">
          {NAV_ITEMS.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={go(id)}>
              {label}
            </a>
          ))}
          <a
            href="#rsvp"
            onClick={go("rsvp")}
            style={{ color: "var(--terracotta)", fontWeight: 600 }}
          >
            Confirmar presença
          </a>
        </div>
      )}
    </nav>
  );
}
