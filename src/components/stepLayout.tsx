import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  title: string;
  onNext?: () => void;
  onBack?: () => void;
  children: ReactNode;
}

export function StepLayout({ title, onNext, onBack, children }: Props) {
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
        {onNext && <Button onClick={onNext}>Next</Button>}
      </div>
    </div>
  );
}
