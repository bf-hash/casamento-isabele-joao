"use client";

import {
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /**
   * When true and `children` is a single element, the reveal class + observer
   * are applied directly to that element instead of a wrapping <div>. This keeps
   * structural CSS selectors (:first-child / :last-child / :nth-child) intact.
   */
  asChild?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  asChild = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Elementos mais altos que a viewport nunca atingem um threshold fixo,
    // então o limite é reduzido proporcionalmente à altura do elemento.
    const ratio = window.innerHeight / Math.max(el.offsetHeight, 1);
    const threshold = Math.min(0.12, ratio * 0.3);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delayClass = delay > 0 ? `ij-reveal-delay-${delay}` : "";

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;
    return cloneElement(child, {
      ref,
      className: `ij-reveal ${delayClass} ${child.props.className ?? ""} ${className}`
        .replace(/\s+/g, " ")
        .trim(),
    } as Partial<{ className?: string }> & { ref: typeof ref });
  }

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`ij-reveal ${delayClass} ${className}`.replace(/\s+/g, " ").trim()}
    >
      {children}
    </div>
  );
}
