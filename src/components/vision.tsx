// components/Vision/Vision.tsx
import React from "react";

interface VisionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  highlight?: string;
  imageSrc?: string;
}

export default function Vision({
  title = "Empowering Innovation at FUNAAB",
  subtitle = "Vision",
  description = "Empowering students and alumni to design technology-driven solutions for everyday challenges in logistics, business, and mobility.",
  imageSrc = "https://aventurauniversal.com/wp-content/uploads/2025/01/eliminar-bot-2048x1536.jpg.webp",
}: VisionProps) {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* LEFT - TEXT */}
          <div className="lg:w-3/5">
            {/* SUBTITLE */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-medium tracking-[0.2em] uppercase text-primary">
                {subtitle}
              </span>
            </div>

            {/* TITLE */}
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">
              {title}
            </h2>

            {/* DESCRIPTION */}
            <div className="space-y-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                {description}
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                The goal is to establish{" "}
                <span className="font-bold text-foreground">FUNAAB</span> as a
                center for digital innovation and practical problem-solving.
              </p>
            </div>
          </div>

          {/* RIGHT - IMAGE */}
          <div className="lg:w-2/5">
            <div className="relative h-64 sm:h-72 w-full group">
              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={imageSrc}
                  alt="Innovation at FUNAAB"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* IMAGE CAPTION */}
              <div className="mt-4 text-center">
                <span className="text-xs text-muted-foreground italic">
                  Driving technological advancement through education
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
