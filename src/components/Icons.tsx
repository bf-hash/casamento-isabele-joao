import type { ReactNode } from "react";

/**
 * Ícones hand-drawn — estilo do menu Costa Brava
 * Outline-based, monocromático (navy/charcoal em fundo claro)
 */

function IconWrapper({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={`inline-block shrink-0 ${className ?? ""}`}
    >
      {children}
    </svg>
  );
}

export function IconCalendar({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </IconWrapper>
  );
}

export function IconMapPin({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </IconWrapper>
  );
}

export function IconHotel({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 21V13h6v8" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </IconWrapper>
  );
}

export function IconFlower({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
      <path d="M4.93 4.93l2.12 2.12" />
      <path d="M16.95 16.95l2.12 2.12" />
      <path d="M4.93 19.07l2.12-2.12" />
      <path d="M16.95 7.05l2.12-2.12" />
      <path d="M12 8a4 4 0 0 1 4 4" />
      <path d="M12 16a4 4 0 0 0-4-4" />
    </IconWrapper>
  );
}

export function IconGift({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v9H5v-9" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </IconWrapper>
  );
}

export function IconMessage({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </IconWrapper>
  );
}

export function IconPlane({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    </IconWrapper>
  );
}

export function IconWine({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M8 2h8v6a4 4 0 0 1-4 4 4 4 0 0 1-4-4V2z" />
      <path d="M12 12v10" />
      <path d="M8 22h8" />
    </IconWrapper>
  );
}

export function IconBoat({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-9-9 9a11.6 11.6 0 0 0 1.62 6" />
      <path d="M19 13a7 7 0 0 0-14 0" />
      <path d="M12 4v9" />
    </IconWrapper>
  );
}

export function IconLemon({ className }: { className?: string }) {
  return (
    <IconWrapper className={className}>
      <path d="M12 2c-2 2-4 6-4 10s2 8 4 10c2-2 4-6 4-10s-2-8-4-10z" />
      <path d="M12 2c2 2 4 6 4 10s-2 8-4 10c-2-2-4-6-4-10s2-8 4-10z" />
    </IconWrapper>
  );
}
