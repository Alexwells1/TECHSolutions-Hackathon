interface HeaderProps {
  textPart1?: string;
  textPart2?: string;
  transparent?: boolean;
}

export default function Header({
  textPart1 = "TECH",
  textPart2 = "Solutions",
  transparent = false,
}: HeaderProps) {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-colors duration-300 ${
        transparent
          ? "bg-transparent text-white border-none"
          : "bg-white text-foreground border-b border-border backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span
            className={`text-sm font-black transition-colors duration-300 ${
              transparent ? "text-white" : "text-foreground"
            }`}
          >
            {textPart1}
          </span>
          <span
            className={`text-sm font-black transition-colors duration-300 ${
              transparent ? "" : "text-primary"
            }`}
          >
            {textPart2}
          </span>
        </div>

        {/* Dots */}
        <div className="flex gap-1">
          {[1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${
                transparent ? "bg-white" : "bg-primary"
              }`}
            />
          ))}
        </div>
      </div>
    </header>
  );
}
