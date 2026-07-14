"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  ["inspire", "Inspiração"],
  ["rsvp", "RSVP"],
].map(([id, label]) => ({ label, href: `#${id}` }));

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
  // Same-page anchor (on the home page): smooth-scroll to the section.
  if (href.startsWith("#")) {
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

  // Cross-page anchor (e.g. "/#program" from the checkout pages): let the
  // browser navigate back to the home page and jump to the section natively.
  if (href.includes("#")) {
    return (
      <a href={href} className={className} onClick={onClick}>
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

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === "/";
  // On the home page keep the in-page smooth-scroll anchors; on any other page
  // (e.g. the gift checkout) point back to the home page section.
  const toHref = (hash: string) => (onHome ? hash : `/${hash}`);
  const navItems = HOME_NAV.map((item) => ({ ...item, href: toHref(item.href) }));
  const brandHref = toHref("#top");
  const ctaHref = toHref("#rsvp");

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
        <div className="ij-nav-right">
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
