type ProcessStep = {
  title: string;
  description: string;
};

type ProcessTimelineProps = {
  steps: ProcessStep[];
  title?: string;
  lead?: string;
};

export function ProcessTimeline({
  steps,
  title = "Como funciona",
  lead,
}: ProcessTimelineProps) {
  const cols =
    steps.length >= 5
      ? "lg:grid-cols-5"
      : steps.length === 4
        ? "lg:grid-cols-4"
        : "lg:grid-cols-3";

  return (
    <section className="border-b border-border bg-paper py-14 md:py-16">
      <div className="site-container">
        <div className="mb-10 max-w-[680px]">
          <h2 className="font-subheading text-lg font-semibold text-ink">
            {title}
          </h2>
          {lead ? (
            <p className="mt-2 text-[14.5px] leading-relaxed text-ink-2">
              {lead}
            </p>
          ) : null}
        </div>

        <ol
          className={`relative grid grid-cols-1 gap-8 sm:grid-cols-2 ${cols} lg:gap-4`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[10%] right-[10%] top-5 hidden h-px bg-connector lg:block"
          />

          {steps.map((step, index) => (
            <li
              key={step.title}
              className="relative flex flex-col items-start lg:items-center lg:text-center"
            >
              <div className="relative z-[1] mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-paper font-mono text-[12px] font-medium text-ink">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mb-1.5 font-subheading text-[15px] font-semibold text-ink">
                {step.title}
              </h3>
              <p className="max-w-[220px] text-[13px] leading-relaxed text-ink-2">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
