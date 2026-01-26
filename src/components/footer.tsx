export default function Footer() {
    return (
      <footer className="border-t border-border py-8 sm:py-12 px-4 sm:px-6 mt-12 sm:mt-16 md:mt-20">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p className="mb-4 text-sm sm:text-base">
            © 2025 FUNAAR Hackathon. All rights reserved.
          </p>
          <div className="flex justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <span className="cursor-pointer hover:text-primary transition-colors">
              Contact
            </span>
            <span className="text-border">•</span>
            <span className="cursor-pointer hover:text-primary transition-colors">
              About
            </span>
            <span className="text-border">•</span>
            <span className="cursor-pointer hover:text-primary transition-colors">
              Terms
            </span>
          </div>
        </div>
      </footer>
    );
}