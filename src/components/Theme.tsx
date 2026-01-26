interface FocusArea {
  id: number;
  title: string;
}

interface ThemeProps {
  title?: string;
  themeName?: string;
  description?: string;
  focusAreas?: FocusArea[];
}

const DEFAULT_FOCUS_AREAS: FocusArea[] = [
  { id: 1, title: "Logistics & Delivery Services" },
  { id: 2, title: "Urban Mobility & Navigation" },
  { id: 3, title: "Education & Learning Tools" },
  { id: 4, title: "Small Business Operations" },
  { id: 5, title: "Community Service Platforms" },
];

export default function Theme({
  title = "THE THEME",
  themeName = "Smart Solutions for a Fast-Moving World",
  description = "Building technology-driven applications that improve:",
  focusAreas = DEFAULT_FOCUS_AREAS,
}: ThemeProps) {
  return (
    <section id="details-section" className="py-12 sm:py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* SECTION TITLE */}
        <div className="text-center mb-8">
          <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">
            {title}
          </span>
        </div>

        {/* THEME NAME - BOLDEST */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            {themeName}
          </h2>
        </div>

        {/* DESCRIPTION */}
        <div className="text-center mb-8">
          <p className="text-sm sm:text-base text-muted-foreground">
            {description}
          </p>
        </div>

        {/* FOCUS AREAS */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {focusAreas.map((item, index) => (
            <div key={item.id} className="flex items-center">
              {/* ITEM */}
              <span className="text-sm sm:text-base">{item.title}</span>

              {/* SEPARATOR */}
              {index < focusAreas.length - 1 && (
                <span className="mx-3 sm:mx-4 text-muted-foreground">•</span>
              )}
            </div>
          ))}
        </div>

        {/* DECORATIVE LINE */}
        <div className="flex justify-center mt-8">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
      </div>
    </section>
  );
}
