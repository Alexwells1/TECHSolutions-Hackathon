// components/Team/Team.tsx
import React from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
}

interface TeamProps {
  teamMembers?: TeamMember[];
}

const DEFAULT_TEAM_MEMBERS: TeamMember[] = [
  { id: 1, name: "Omowunmi Ifeoluwa", role: "Hackathon Coordinator" },
  { id: 2, name: "TBA", role: "Judge & Mentor" },
  { id: 3, name: "Damfe Samuel", role: "Stakeholder Manager" },
  { id: 4, name: "TBA", role: "Coordinator" },
];

export default function Team({
  teamMembers = DEFAULT_TEAM_MEMBERS,
}: TeamProps) {
  return (
    <section className="py-12 sm:py-16 border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* TITLE */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-wide">
            THE TEAM
          </h2>
        </div>

        {/* TEAM GRID - Perfectly Centered */}
        <div className="flex flex-wrap justify-center gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] md:w-[calc(25%-16px)] lg:w-48"
            >
              {/* IMAGE */}
              <div className="relative aspect-square mb-3 rounded-xl overflow-hidden bg-gradient-to-br from-secondary to-secondary/50 border border-border">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-foreground/60">
                    {member.name.charAt(0)}
                  </span>
                </div>
              </div>

              {/* INFO */}
              <div className="text-center">
                <h3 className="font-bold text-sm sm:text-base mb-1">
                  {member.name}
                </h3>
                <p className="text-xs text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
