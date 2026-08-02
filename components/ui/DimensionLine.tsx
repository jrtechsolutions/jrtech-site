import { cn } from "@/lib/utils";

type DimensionLineProps = {
  label: string;
  className?: string;
};

export function DimensionLine({ label, className }: DimensionLineProps) {
  return (
    <div className={cn("flex items-center gap-3", className)} aria-hidden="true">
      <div className="h-3 w-px bg-dimension" />
      <div className="h-px flex-1 bg-dimension" />
      <span className="font-mono text-[11px] uppercase tracking-wider text-dimension">
        {label}
      </span>
      <div className="h-px flex-1 bg-dimension" />
      <div className="h-3 w-px bg-dimension" />
    </div>
  );
}
