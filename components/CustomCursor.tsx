"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // hide on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.body.style.cursor = "none";

    // also apply none to all elements so inherited cursor doesn't show
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = "*, *::before, *::after { cursor: none !important; }";
    document.head.appendChild(style);

    let ringX = 0,
      ringY = 0;
    let mouseX = 0,
      mouseY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dot.current) {
        dot.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ring.current) {
        ring.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => {
      if (ring.current) ring.current.style.transform += " scale(1.6)";
      if (ring.current) ring.current.style.borderColor = "rgba(0,200,224,0.8)";
    };
    const onLeave = () => {
      if (ring.current) ring.current.style.borderColor = "rgba(0,200,224,0.4)";
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    // scale ring on clickable elements
    const clickables = document.querySelectorAll("a, button, [role=button]");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      document.body.style.cursor = "";
      document.getElementById("custom-cursor-style")?.remove();
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* dot */}
      <div
        ref={dot}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-gold pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      />
      {/* ring */}
      <div
        ref={ring}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-gold/40 pointer-events-none z-[9998] transition-[border-color,transform] duration-150"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
