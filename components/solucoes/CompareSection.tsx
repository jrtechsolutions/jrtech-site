type CompareSide = {
  label: string;
  items: string[];
};

type CompareSectionProps = {
  title: string;
  lead: string;
  before: CompareSide;
  after: CompareSide;
};

export function CompareSection({
  title,
  lead,
  before,
  after,
}: CompareSectionProps) {
  return (
    <section className="pb-14 pt-2 md:pb-16 md:pt-0">
      <div className="site-container">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-9 max-w-[680px]">
            <h2 className="mb-2.5 font-heading text-[clamp(1.4rem,2.8vw,1.625rem)] font-bold leading-snug text-ink">
              {title}
            </h2>
            <p className="text-[14px] leading-relaxed text-dimension">{lead}</p>
          </div>

          <div className="grid grid-cols-1 overflow-hidden rounded-lg border-[1.5px] border-border lg:grid-cols-2">
            <CompareCol side={before} variant="before" />
            <CompareCol side={after} variant="after" />
          </div>
        </div>
      </div>
    </section>
  );
}

function CompareCol({
  side,
  variant,
}: {
  side: CompareSide;
  variant: "before" | "after";
}) {
  const isAfter = variant === "after";

  return (
    <div
      className={
        isAfter
          ? "bg-ink px-[22px] py-[26px] md:px-9 md:py-8"
          : "border-b border-border bg-white px-[22px] py-[26px] md:border-b-0 md:border-r md:border-border md:px-9 md:py-8"
      }
    >
      <div className="mb-7 flex items-center gap-2.5">
        <span
          className={
            isAfter
              ? "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full bg-signal text-[12px] text-ink"
              : "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border border-border bg-[#F3EFE6] text-[12px] text-[#8AA0B8]"
          }
          aria-hidden="true"
        >
          {isAfter ? "✓" : "!"}
        </span>
        <span
          className={
            isAfter
              ? "font-mono text-[11px] uppercase tracking-[0.05em] text-[#8E9DB0]"
              : "font-mono text-[11px] uppercase tracking-[0.05em] text-[#8AA0B8]"
          }
        >
          {side.label}
        </span>
      </div>

      <ul className="flex flex-col gap-5">
        {side.items.map((item) => (
          <li
            key={item}
            className={
              isAfter
                ? "flex gap-3 text-[13.5px] leading-[1.6] text-[#D7DEE6]"
                : "flex gap-3 text-[13.5px] leading-[1.6] text-dimension"
            }
          >
            <span
              className={
                isAfter
                  ? "mt-px shrink-0 font-mono text-[13px] text-[#4ADE80]"
                  : "mt-px shrink-0 font-mono text-[13px] text-connector"
              }
              aria-hidden="true"
            >
              {isAfter ? "✓" : "−"}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
