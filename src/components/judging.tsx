

interface JudgingProps {
  title?: string;
  year?: string;
  criteria?: string[];
}

const DEFAULT_CRITERIA = [
  "INNOVATION",
  "FEASIBILITY",
  "USER IMPACT",
  "SCALABILITY",
];

export default function Judging({
  title = "JUDGING CRITERIA",

  criteria = DEFAULT_CRITERIA,
}: JudgingProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            {title}
          </h2>
        </div>



        {/* CRITERIA - SIMPLE LIST */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {criteria.map((item, index) => (
            <div key={item} className="flex items-center">
              {/* CRITERION */}
              <span className="text-sm sm:text-base font-bold uppercase tracking-wide">
                {item}
              </span>

              {/* SEPARATOR (except last) */}
              {index < criteria.length - 1 && (
                <span className="mx-3 sm:mx-4 text-muted-foreground">|</span>
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
