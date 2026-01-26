// components/StructureTimeline/StructureTimeline.tsx


interface TimelineStep {
  id: number;
  title: string;
  description: string;
  weekNumber: number;
}

interface StructureTimelineProps {
  title?: string;
  subtitle?: string;
  timelineDescription?: string;
  timelineSteps?: TimelineStep[];
}

const DEFAULT_STEPS: TimelineStep[] = [
  {
    id: 1,
    title: "Ideation & Team Formation",
    description:
      "Teams will form, define a clear problem, and develop a creative, technology-based solution concept.",
    weekNumber: 1,
  },
  {
    id: 2,
    title: "Design & Prototype",
    description:
      "Teams will design wireframes and transform their ideas into tangible, testable prototypes (MVPs).",
    weekNumber: 2,
  },
  {
    id: 3,
    title: "Development Sprint",
    description:
      "Participants will focus on core coding, system integration, testing, and refining to build a functional prototype.",
    weekNumber: 3,
  },
  {
    id: 4,
    title: "Demo Day & Judging",
    description:
      "Completed projects are submitted, demonstrated live, and evaluated by judges, followed by an award ceremony.",
    weekNumber: 4,
  },
];

export default function StructureTimeline({
  title = "Duration: 4 Weekends",
  subtitle = "STRUCTURE AND TIMELINE",
  timelineDescription = "The hackathon runs across four weekends, guiding teams from product concept to demo while managing academic schedules.",
  timelineSteps = DEFAULT_STEPS,
}: StructureTimelineProps) {
  return (
    <section className="relative py-12 sm:py-16 md:py-20">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide">
            {subtitle}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT - TIMELINE STEPS */}
          <div className="space-y-6">
            {timelineSteps.map((step) => (
              <div key={step.id} className="flex gap-4">
                {/* WEEK NUMBER */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-foreground">
                    {step.weekNumber}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - DURATION INFO */}
          <div className="border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <span className="text-sm font-semibold uppercase tracking-wider">
                Timeline
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black mb-4">{title}</h3>

            <p className="text-muted-foreground mb-6">{timelineDescription}</p>

            {/* KEY POINTS */}
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Weekend-focused schedule</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Clear progression phases</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span className="text-sm">Academic schedule friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
