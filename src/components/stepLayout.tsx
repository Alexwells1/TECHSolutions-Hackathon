import { useEffect, type ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  children: ReactNode;
  disableNext?: boolean;
  warnOnReload?: boolean;
}

export function StepLayout({
  title,
  onNext,
  onBack,
  children,
  disableNext,
  warnOnReload,
}: Props) {
  useEffect(() => {
    if (!warnOnReload) return;

    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [warnOnReload]);

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-semibold">{title}</h1>

      {children}

      <div className="flex justify-between">
        {onBack && (
          <Button variant="outline" onClick={onBack}>
            Back
          </Button>
        )}
        {onNext && (
          <Button onClick={onNext} disabled={disableNext}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}
