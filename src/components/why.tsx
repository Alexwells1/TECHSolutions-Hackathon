export default function WhyHackathon() {
  return (
    <section className="relative w-full py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[320px] sm:h-[420px] rounded-3xl overflow-hidden">
          <img
            src="/images/students-laptops.jpg"
            alt="Students collaborating"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/40 to-transparent" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative z-10">
          <p className="text-xs tracking-[0.35em] uppercase text-muted-foreground mb-4">
            Why a Hackathon?
          </p>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-8">
            Beyond the Classroom
          </h2>

          <ul className="space-y-5 text-muted-foreground max-w-xl">
            <li>
              • Provides hands-on learning beyond the traditional classroom
              environment.
            </li>
            <li>
              • Enhances the school’s visibility and strengthens its tech
              reputation.
            </li>
            <li>
              • Builds career-ready skills in software development, UI/UX, and
              innovation.
            </li>
            <li>
              • Sparks startup ideas that can grow into real-world ventures.
            </li>
            <li>
              • Encourages teamwork, creativity, and effective problem-solving.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
