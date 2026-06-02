"use client";

import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { scrollToHash } from "@/app/components/site-interactions";

type SectionLink = {
  id: string;
  label: string;
};

type ActiveNavProps = {
  sections: SectionLink[];
};

export function ActiveNav({ sections }: ActiveNavProps) {
  const [activeSection, setActiveSection] = useState(sections[0]?.id);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    scrollToHash(`#${sectionId}`);
  };

  useEffect(() => {
    let animationFrame = 0;

    const updateActiveSection = () => {
      const topbarHeight = document.querySelector(".topbar")?.getBoundingClientRect().height ?? 0;
      const readingLine = window.scrollY + topbarHeight + 120;
      let currentSection = sections[0]?.id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (element && element.offsetTop <= readingLine) {
          currentSection = section.id;
        }
      }

      setActiveSection(currentSection);
    };

    const queueUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", queueUpdate, { passive: true });
    window.addEventListener("resize", queueUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", queueUpdate);
      window.removeEventListener("resize", queueUpdate);
    };
  }, [sections]);

  return (
    <div className="nav-links">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(event) => handleClick(event, section.id)}
          className={activeSection === section.id ? "is-active" : undefined}
          aria-current={activeSection === section.id ? "location" : undefined}
        >
          {section.label}
        </a>
      ))}
    </div>
  );
}
