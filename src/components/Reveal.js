// .reveal-section {
//  opacity: 0;
//  transform: translateY(30px);
//  transition: all 0.8s cubic-bezier(0.5, 0, 0, 1);
// }

// .reveal-section.is-visible {
//  opacity: 1;
//  transform: translateY(0);
// }




'use client';
import { useState, useRef, useEffect } from "react";

export const Reveal = ({ children, width = "100%", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width,
        position: "relative",
        transitionDelay: `${delay}ms`
      }}
      className={`reveal-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};
