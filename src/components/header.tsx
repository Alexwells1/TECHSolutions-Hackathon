import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  textPart1?: string;
  textPart2?: string;
}

export default function Header({
  textPart1 = "TECH",
  textPart2 = "Solutions",
}: HeaderProps) {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      if (!hero) return;

      // check if bottom of hero is above top of viewport
      const heroBottom = hero.getBoundingClientRect().bottom;
      setScrolledPastHero(heroBottom <= 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // check on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const headerClasses = isHome
    ? `fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        scrolledPastHero
          ? "bg-white text-foreground border-b border-border backdrop-blur-sm"
          : "bg-transparent text-white border-none"
      }`
    : "relative w-full bg-white text-foreground border-b border-border";

  const text1Classes = isHome
    ? `text-sm font-black transition-colors duration-300 ${
        scrolledPastHero ? "text-foreground" : "text-white"
      }`
    : "text-sm font-black text-foreground";

  const text2Classes = isHome
    ? `text-sm font-black transition-colors duration-300 ${
        scrolledPastHero ? "text-primary" : "text-white"
      }`
    : "text-sm font-black text-primary";

  const dotClasses = isHome
    ? `w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
        scrolledPastHero ? "bg-primary" : "bg-white"
      }`
    : "w-1.5 h-1.5 rounded-full bg-primary";

  return (
    <header className={headerClasses}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className={text1Classes}>{textPart1}</span>
          <span className={text2Classes}>{textPart2}</span>
        </div>

        <nav>
          {isHome ? (
            ""
          ) : (
            <Link
              to="/"
              className="ml-6 px-1 py-1 text-primary border-b-2 border-transparent hover:border-primary transition-all duration-300"
            >
              Home
            </Link>
          )}
        </nav>

        {/* Dots */}
        <div className="flex gap-1">
          {[1, 2, 3].map((dot) => (
            <div key={dot} className={dotClasses} />
          ))}
        </div>
      </div>
    </header>
  );
}
