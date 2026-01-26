// components/Divider/Divider.tsx


interface DividerProps {
  variant?: "dots" | "line" | "simple";
}

export default function Divider({ variant = "dots" }: DividerProps) {
  if (variant === "dots") {
    return (
      <div className="flex justify-center py-4">
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
          <div className="w-1.5 h-1.5 rounded-full bg-border" />
        </div>
      </div>
    );
  }

  if (variant === "line") {
    return (
      <div className="py-4">
        <div className="w-full h-px bg-border" />
      </div>
    );
  }

  return <div className="py-6" />;
}
