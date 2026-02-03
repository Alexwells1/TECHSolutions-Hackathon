import { useNavigate } from "react-router-dom";

interface HeroProps {
  introducingText?: string;
  year?: string;
  titlePart1?: string;
  titlePart2?: string;
  subtitle?: string;
  registerButtonText?: string;
  detailsButtonText?: string;
  backgroundImage?: string;
}

export default function Hero({
  introducingText = "INTRODUCING FUNAAB",
  year = "2026",
  titlePart1 = "HACK",
  titlePart2 = "ATHON",
  subtitle = "Smart Solutions for a Fast-Moving World",
  registerButtonText = "Register Now",
  detailsButtonText = "View Details",
  backgroundImage = "https://aicadium.ai/wp-content/uploads/2024/09/blog-images-37.png",
}: HeroProps) {
  const navigate = useNavigate();

  return (
    <section id="hero-section" className="relative min-h-screen w-full">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-20">
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay */}
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 min-h-screen w-full flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6">
        <div className="text-center mx-auto max-w-md sm:max-w-lg md:max-w-2xl">
          {/* Intro */}
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-wrap items-center justify-center gap-2 px-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
              <span className="text-[10px] xs:text-xs font-semibold tracking-[0.2em] uppercase text-white/90 whitespace-nowrap">
                {introducingText}
              </span>
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>
          </div>

          {/* Year */}
          <div className="mb-3 sm:mb-4">
            <span className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-widest">
              {year}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight mb-1 sm:mb-2 leading-none text-white">
            {titlePart1}
            <span className="">{titlePart2}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 font-medium mb-6 sm:mb-8 px-2 sm:px-0">
            {subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-2">
            <button
              onClick={() => navigate("/register")}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-bold rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {registerButtonText}
            </button>

            <button
              onClick={() =>
                window.scrollTo({
                  top:
                    document.getElementById("details-section")?.offsetTop || 0,
                  behavior: "smooth",
                })
              }
              className="w-full sm:w-auto px-6 sm:px-8 py-3 text-sm sm:text-base font-medium rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              {detailsButtonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
