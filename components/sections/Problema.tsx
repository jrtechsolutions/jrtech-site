import { problema } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { SemanticCard } from "@/components/ui/SemanticCard";

export function Problema() {
  return (
    <Section>
      <Kicker>{problema.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {problema.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {problema.items.map((item) => (
          <SemanticCard
            key={item.tag}
            hover={item.hover}
            className="p-[26px]"
          >
            <span className="mb-3 block font-mono text-[11px] text-dimension">
              {item.tag}
            </span>
            <h3 className="mb-2.5 font-subheading text-[16.5px] font-semibold text-ink">
              {item.title}
            </h3>
            <p className="text-[13.5px] leading-relaxed text-ink-2">
              {item.description}
            </p>
          </SemanticCard>
        ))}
      </div>
    </Section>
  );
}
