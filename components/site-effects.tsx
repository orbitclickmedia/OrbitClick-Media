"use client";

import { useEffect } from "react";

export function SiteEffects() {
  useEffect(() => {
    const nav = document.getElementById("main-nav");
    const glow = document.getElementById("cursor-glow");

    const onScroll = () => nav?.classList.toggle("scrolled", window.scrollY > 32);
    const onMouseMove = (event: MouseEvent) => {
      if (!glow) return;
      glow.style.left = `${event.clientX}px`;
      glow.style.top = `${event.clientY}px`;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("in");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".rv").forEach((element) => observer.observe(element));
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return null;
}
