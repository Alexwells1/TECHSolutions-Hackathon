

interface Prize {
  position: string;
  prize: string;
  description: string;
  highlight?: boolean;
}

interface PrizesProps {
  title?: string;
  subtitle?: string;
  prizes?: Prize[];
}

const DEFAULT_PRIZES: Prize[] = [
  {
    position: "1ST",
    prize: "#800K",
    description: "CASH PRIZE",
    highlight: true,
  },
  {
    position: "2ND",
    prize: "#400K",
    description: "CASH PRIZE",
  },
  {
    position: "3RD",
    prize: "MENTORSHIP",
    description: "CAREER GUIDANCE",
  },
];

export default function Prizes({
  title = "WHAT THE STUDENTS GAIN",
  subtitle = "Prizes & Rewards",
  prizes = DEFAULT_PRIZES,
}: PrizesProps) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-12">
          <div className="mb-4">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase text-primary">
              {subtitle}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide">
            {title}
          </h2>
        </div>

        {/* PRIZES - STEPPED LAYOUT */}
        <div className="relative">
          {/* CONNECTOR LINES */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          <div className="hidden md:block absolute top-1/2 left-1/3 w-0.5 h-16 bg-gradient-to-b from-transparent via-border to-transparent -translate-y-1/2" />
          <div className="hidden md:block absolute top-1/2 left-2/3 w-0.5 h-16 bg-gradient-to-b from-transparent via-border to-transparent -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {prizes.map((prize, index) => (
              <div
                key={index}
                className={`relative ${
                  prize.highlight
                    ? "md:mt-0"
                    : index === 1
                    ? "md:mt-8"
                    : "md:mt-16"
                }`}
              >
                {/* POSITION MEDAL */}
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                    prize.highlight
                      ? "bg-gradient-to-br from-yellow-500 to-yellow-300 border-4 border-yellow-200"
                      : index === 1
                      ? "bg-gradient-to-br from-gray-300 to-gray-100 border-4 border-gray-200"
                      : "bg-gradient-to-br from-amber-700 to-amber-500 border-4 border-amber-600"
                  }`}
                >
                  <span className="text-lg font-black text-white">
                    {prize.position}
                  </span>
                </div>

                {/* CARD */}
                <div
                  className={`border rounded-2xl pt-10 pb-6 px-6 text-center ${
                    prize.highlight
                      ? "border-primary/30 bg-gradient-to-b from-primary/5 to-transparent shadow-lg"
                      : "border-border"
                  }`}
                >
                  {/* PRIZE */}
                  <div className="mb-2">
                    <span
                      className={`text-4xl sm:text-5xl font-black ${
                        prize.highlight ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {prize.prize}
                    </span>
                  </div>

                  {/* DESCRIPTION */}
                  <div>
                    <span
                      className={`text-sm font-semibold uppercase tracking-wider ${
                        prize.highlight
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {prize.description}
                    </span>
                  </div>

                  {/* DECORATIVE ELEMENT */}
                  <div
                    className={`mt-4 w-12 h-1 mx-auto ${
                      prize.highlight ? "bg-primary" : "bg-border"
                    }`}
                  />
                </div>

                {/* POSITION LABEL */}
                <div className="mt-4 text-center">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    {prize.position} POSITION
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
