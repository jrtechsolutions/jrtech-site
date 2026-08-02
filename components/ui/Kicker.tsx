import { cn } from "@/lib/utils";

type KickerProps = {
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
};

export function Kicker({ children, className, inverted }: KickerProps) {
  return (
    <span
      className={cn(
        "mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal",
        inverted && "text-signal",
        className,
      )}
    >
      {children}
    </span>
  );
}
