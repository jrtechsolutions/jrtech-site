import { solucoes } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { SemanticCard } from "@/components/ui/SemanticCard";

export function Solucoes() {
  return (
    <Section id="solucoes">
      <Kicker>{solucoes.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {solucoes.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {solucoes.items.map((item) => (
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
            <div className="mt-3.5 flex flex-wrap gap-1.5">
              {item.includes.map((tag) => (
                <span
                  key={tag}
                  className="rounded-[3px] border border-connector px-2.5 py-[3px] font-mono text-[10.5px] text-dimension"
                >
                  {tag}
                </span>
              ))}
            </div>
          </SemanticCard>
        ))}
      </div>
    </Section>
  );
}
