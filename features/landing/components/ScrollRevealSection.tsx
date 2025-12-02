"use client";

import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useProgressiveLoad";

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollRevealSection({
  children,
  className = "",
  delay = 0,
}: ScrollRevealSectionProps) {
  const { elementRef, isAnimated } = useScrollAnimation({
    threshold: 0.1,
    rootMargin: "0px",
    triggerOnce: true,
  });

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ease-out ${
        isAnimated
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
