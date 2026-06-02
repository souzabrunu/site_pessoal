"use client";

import { useEffect } from "react";

const SCROLL_DURATION = 1150;
let scrollAnimationFrame = 0;

function easeInOutCubic(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 3) / 2;
}

function getScrollTargetTop(target: HTMLElement) {
  const scrollMarginTop = Number.parseFloat(window.getComputedStyle(target).scrollMarginTop);
  return target.getBoundingClientRect().top + window.scrollY - (Number.isNaN(scrollMarginTop) ? 0 : scrollMarginTop);
}

function scrollToTarget(target: HTMLElement, duration = SCROLL_DURATION) {
  const startTop = window.scrollY;
  const endTop = getScrollTargetTop(target);
  const distance = endTop - startTop;

  window.cancelAnimationFrame(scrollAnimationFrame);

  if (Math.abs(distance) < 2) {
    window.scrollTo({ top: endTop, behavior: "auto" });
    return;
  }

  const startTime = performance.now();

  const animate = (currentTime: number) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startTop + distance * easedProgress);

    if (progress < 1) {
      scrollAnimationFrame = window.requestAnimationFrame(animate);
    }
  };

  scrollAnimationFrame = window.requestAnimationFrame(animate);
}

export function scrollToHash(hash: string) {
  const targetId = decodeURIComponent(hash.replace(/^#/, ""));
  const target = targetId ? document.getElementById(targetId) : null;

  if (!target) {
    return;
  }

  history.pushState(null, "", `#${targetId}`);
  scrollToTarget(target);
}

function getAnchorFromEventTarget(target: EventTarget | null) {
  if (!(target instanceof Node)) {
    return null;
  }

  const element = target instanceof Element ? target : target.parentElement;
  return element?.closest<HTMLAnchorElement>('a[href^="#"]') ?? null;
}

export function SiteInteractions() {
  useEffect(() => {
    const topbar = document.querySelector<HTMLElement>(".topbar");
    const updateTopbar = () => {
      topbar?.classList.toggle("is-scrolled", window.scrollY > 12);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const link = getAnchorFromEventTarget(event.target);

      if (!link) {
        return;
      }

      if (!link.hash) {
        return;
      }

      event.preventDefault();
      scrollToHash(link.hash);
    };

    updateTopbar();
    document.addEventListener("click", handleAnchorClick, { capture: true });
    window.addEventListener("scroll", updateTopbar, { passive: true });

    return () => {
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      window.removeEventListener("scroll", updateTopbar);
    };
  }, []);

  return null;
}
