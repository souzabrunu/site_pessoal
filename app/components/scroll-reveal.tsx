"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export function ScrollReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>(revealSelector)];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || elements.length === 0) return;

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.setAttribute("data-revealed", "true");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.08 },
    );

    elements.forEach((element) => observer.observe(element));

    let frame = 0;
    const updateScrollState = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        document.documentElement.toggleAttribute("data-scrolled", window.scrollY > 16);
      });
    };

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateScrollState);
      document.documentElement.classList.remove("motion-ready");
      document.documentElement.removeAttribute("data-scrolled");
    };
  }, []);

  return null;
}
