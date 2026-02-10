import adejimi from "../assets/Adejimi.jpg";
import damfe from "../assets/damife.jpeg";
import Ifeoluwa from "../assets/Ifeoluwa.jpeg";
import ali from "../assets/ali.jpeg";
import { ArrowUpRight } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface TeamProps {
  teamMembers?: TeamMember[];
}

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  {
    id: 1,
    name: "Omowunmi Ifeoluwa",
    role: "Hackathon Coordinator",
    image: Ifeoluwa,
  },
  {
    id: 2,
    name: "Prof. Abayomi-Alli Adebayo ",
    role: "Judge & Mentor",
    image: ali,
  },
  { id: 3, name: "Damfe Samuel", role: "Stakeholder Manager", image: damfe },
  { id: 4, name: "Dr. Adejimi Alaba", role: "Judge & Mentor", image: adejimi },
];

export default function Team({
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: TeamProps) {
  return (
    <section className="py-14 sm:py-20 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide">
            The Team
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative rounded-2xl overflow-hidden bg-muted border border-border"
            >
              {/* IMAGE */}
              <div className="relative aspect-[3/4]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />

                {/* ACTION ICON */}
                <div className="absolute top-3 right-3">
                  <div className="h-7 w-7 md:h-8 md:w-8 rounded-full bg-background/80 border border-border flex items-center justify-center">
                    <span className="text-sm font-bold">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>

              {/* FOOTER */}
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-background/70">
                <p className="text-sm font-bold leading-tight">{member.name}</p>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
