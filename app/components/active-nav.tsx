"use client";

import { useEffect, useState } from "react";

type Section = {
  id: string;
  label: string;
};

export function ActiveNav({ sections }: { sections: Section[] }) {
  const [activeSection, setActiveSection] = useState<string>();

  useEffect(() => {
    const visibleSections = new Map<string, number>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        const nextSection = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
        setActiveSection(nextSection);
      },
      { rootMargin: "-20% 0px -60%", threshold: [0, 0.25, 0.5, 0.75] },
    );

    sections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div className="nav-links">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={activeSection === id ? "is-active" : undefined}
          aria-current={activeSection === id ? "location" : undefined}
        >
          {label}
        </a>
      ))}
    </div>
  );
}
