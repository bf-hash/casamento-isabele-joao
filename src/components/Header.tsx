"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

interface NavItem {
  label: string;
  href: string;
}

const HOME_NAV: NavItem[] = [
  ["top", "Início"],
  ["program", "Programação"],
  ["howtoget", "Como chegar"],
  ["tips", "Dicas"],
  ["gifts", "Presentes"],
  ["rsvp", "RSVP"],
].map(([id, label]) => ({ label, href: `#${id}` }));

const ROTEIROS_NAV: NavItem[] = [
  { label: "Início", href: "/#top" },
  { label: "Barcelona", href: "#barcelona" },
  { label: "Costa Brava", href: "#costa-brava" },
];

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

function NavLink({
  href,
  className,
  onClick,
  children,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  const isSamePageAnchor = href.startsWith("#");

  if (isSamePageAnchor) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault();
          scrollToId(href.slice(1));
          onClick?.();
        }}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Header({ variant = "home" }: { variant?: "home" | "roteiros" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = variant === "roteiros" ? ROTEIROS_NAV : HOME_NAV;
  const brandHref = variant === "roteiros" ? "/#top" : "#top";
  const ctaHref = variant === "roteiros" ? "/#rsvp" : "#rsvp";

  const close = () => setMobileOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`ij-nav${scrolled ? " ij-nav-scrolled" : ""}`}>
      <div className="ij-nav-inner">
        <NavLink href={brandHref} className="ij-nav-mono" onClick={close}>
          <Logo size={36} />
        </NavLink>
        <ul className="ij-nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <NavLink href={item.href} onClick={close}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <NavLink href={ctaHref} className="ij-nav-cta">
          Confirmar
        </NavLink>
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
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} onClick={close}>
              {item.label}
            </NavLink>
          ))}
          <NavLink href={ctaHref} className="ij-nav-cta-mobile" onClick={close}>
            Confirmar presença
          </NavLink>
        </div>
      )}
    </nav>
  );
}
