"use client";

import React, { useState, useEffect } from "react";
import Header from "./header";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero-section");
    if (!hero) return;

    const handleScroll = () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      // If hero bottom is above header (scrolled past)
      setScrolledPastHero(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header always fixed */}
      <Header transparent={!scrolledPastHero} />

      {/* Main content */}
      <main className="relative z-0">{children}</main>
    </div>
  );
}
