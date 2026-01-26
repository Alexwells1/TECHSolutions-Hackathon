

interface Objective {
  id: number;
  title: string;
  description: string;
}

interface ObjectivesProps {
  title?: string;
  objectives?: Objective[];
}

const DEFAULT_OBJECTIVES: Objective[] = [
  {
    id: 1,
    title: "Direct & Impactful",
    description:
      "Inspire students to develop creative, real-world solutions through technology.",
  },
  {
    id: 2,
    title: "Emotional Appeal",
    description:
      "Strengthen collaboration between students and build strong team spirit.",
  },
  {
    id: 3,
    title: "Comparative Framing",
    description:
      "Encourage entrepreneurship and tech incubation within the school.",
  },
];

export default function Objectives({
  title = "OBJECTIVES",
  objectives = DEFAULT_OBJECTIVES,
}: ObjectivesProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            {title}
          </h2>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((objective, index) => (
            <div
              key={objective.id}
              className={`
                relative rounded-xl sm:rounded-2xl border border-border p-6 sm:p-8
                ${index === 1 ? "md:border-primary md:border-2" : ""}
              `}
            >
              {/* NUMBER BADGE */}
              <div
                className={`
                absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full flex items-center justify-center
                ${index === 1 ? "bg-primary" : "bg-secondary"}
              `}
              >
                <span
                  className={`
                  text-sm font-bold
                  ${index === 1 ? "text-primary-foreground" : "text-foreground"}
                `}
                >
                  {index + 1}
                </span>
              </div>

              {/* TITLE */}
              <h3
                className={`
                text-lg sm:text-xl font-bold mb-4 uppercase tracking-wide text-center
                ${index === 1 ? "text-primary" : ""}
              `}
              >
                {objective.title}
              </h3>

              {/* SEPARATOR */}
              <div
                className={`
                w-12 h-0.5 mx-auto mb-4
                ${index === 1 ? "bg-primary" : "bg-border"}
              `}
              />

              {/* DESCRIPTION */}
              <p className="text-center text-sm sm:text-base text-muted-foreground">
                {objective.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
