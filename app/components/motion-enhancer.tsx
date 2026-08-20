"use client";

import { useEffect } from "react";

const revealSelector = "[data-reveal]";

export function MotionEnhancer() {
  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));

    const showAll = () => {
      root.classList.remove("motion-ready");
      elements.forEach((element) => element.classList.add("is-visible"));
    };

    if (reduceMotion.matches) {
      showAll();
      return;
    }

    root.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.12 },
    );

    elements.forEach((element) => observer.observe(element));

    const handlePreferenceChange = () => {
      if (reduceMotion.matches) {
        observer.disconnect();
        showAll();
      }
    };

    reduceMotion.addEventListener("change", handlePreferenceChange);

    return () => {
      observer.disconnect();
      reduceMotion.removeEventListener("change", handlePreferenceChange);
      root.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
