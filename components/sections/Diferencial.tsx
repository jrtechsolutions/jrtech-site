import { diferencial } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";

export function Diferencial() {
  return (
    <Section>
      <Kicker>{diferencial.kicker}</Kicker>
      <h2 className="mb-10 max-w-[720px] font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {diferencial.title}
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-0">
        {diferencial.blocks.map((block, index) => (
          <div
            key={block.num}
            className={
              index < diferencial.blocks.length - 1
                ? "md:border-r md:border-border md:pr-8 lg:pr-10"
                : ""
            }
          >
            <div className={index > 0 ? "md:pl-8 lg:pl-10" : ""}>
              <span className="mb-3 block font-mono text-[11px] text-signal">
                {block.num}
              </span>
              <h3 className="mb-2.5 font-subheading text-[15px] font-semibold text-ink">
                {block.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-ink-2">
                {block.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
