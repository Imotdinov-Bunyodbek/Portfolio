"use client";

import { useEffect, useRef } from "react";

export default function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop with fine pointer
    if (!window.matchMedia("(pointer: fine)").matches) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`;
        dotRef.current.style.top = `${mouseY}px`;
      }

      if (auraRef.current) {
        auraRef.current.style.left = `${mouseX}px`;
        auraRef.current.style.top = `${mouseY}px`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`;
        ringRef.current.style.top = `${ringY}px`;
      }

      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animId = requestAnimationFrame(render);

    const handleMouseEnterInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "56px";
        ringRef.current.style.height = "56px";
        ringRef.current.style.borderColor = "rgba(56, 189, 248, 0.75)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1.6)";
      }
    };

    const handleMouseLeaveInteractive = () => {
      if (ringRef.current) {
        ringRef.current.style.width = "36px";
        ringRef.current.style.height = "36px";
        ringRef.current.style.borderColor = "rgba(168, 85, 247, 0.45)";
      }
      if (dotRef.current) {
        dotRef.current.style.transform = "translate(-50%, -50%) scale(1)";
      }
    };

    // Attach listeners on hoverable elements
    const elements = document.querySelectorAll(
      "a, button, input, textarea, select, .glow-card, .tilt-wrapper"
    );
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnterInteractive);
      el.addEventListener("mouseleave", handleMouseLeaveInteractive);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnterInteractive);
        el.removeEventListener("mouseleave", handleMouseLeaveInteractive);
      });
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot hidden md:block" />
      <div ref={ringRef} className="custom-cursor-ring hidden md:block" />
      <div
        ref={auraRef}
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[130px] bg-gradient-to-r from-brand-cyan/40 via-brand-blue/30 to-brand-violet/40 z-0 hidden md:block transition-opacity duration-700"
      />
    </>
  );
}
