import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
  inverted?: boolean;
};

export function Section({ id, children, className, inverted }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "border-b border-border py-16 md:py-[88px]",
        inverted ? "bg-ink text-paper" : "bg-paper text-ink",
        className,
      )}
    >
      <div className="site-container">{children}</div>
    </section>
  );
}
