"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Native disclosure keeps navigation usable before hydration and without JavaScript.
export function MobileMenu({ children }: { children: ReactNode }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const details = detailsRef.current;
    if (!details) return;
    const desktop = window.matchMedia("(min-width: 768px)");
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && details?.open) {
        details.open = false;
        details.querySelector("summary")?.focus();
      }
    }
    function onOutside(event: PointerEvent) {
      if (details?.open && event.target instanceof Node && !details.contains(event.target)) details.open = false;
    }
    function onResize() {
      if (desktop.matches && details) details.open = false;
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  return (
    <details className="mobile-menu" ref={detailsRef} onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
    }} onClick={(event) => {
      if (event.target instanceof Element && event.target.closest("a") && detailsRef.current) {
        detailsRef.current.open = false;
      }
    }}>
      <summary aria-controls="mobile-navigation">
        <span className="menu-label">Menu</span>
        <span className="menu-icon" aria-hidden="true"><span /><span /></span>
      </summary>
      <div className="mobile-panel" id="mobile-navigation">{children}</div>
    </details>
  );
}

