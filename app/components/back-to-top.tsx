"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { scrollToHash } from "@/app/components/site-interactions";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToHash("#topo");
  };

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > 520);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  return (
    <a
      className={isVisible ? "back-to-top is-visible" : "back-to-top"}
      href="#topo"
      onClick={handleClick}
      aria-label="Voltar ao topo"
    >
      ↑
      <span>Topo</span>
    </a>
  );
}
