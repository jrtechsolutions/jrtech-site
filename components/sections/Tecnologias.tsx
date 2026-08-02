import { tecnologias } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";

export function Tecnologias() {
  return (
    <Section>
      <Kicker>{tecnologias.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {tecnologias.title}
      </h2>
      <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {tecnologias.categories.map((category) => (
          <div key={category.label} className="min-w-0">
            <span className="mb-3 block font-mono text-[11px] uppercase tracking-[0.04em] text-signal">
              {category.label}
            </span>
            <div className="flex flex-col gap-2.5">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="w-full rounded-[3px] border border-border bg-white px-3.5 py-2.5"
                >
                  <span className="block font-subheading text-[13px] font-semibold text-ink">
                    {item.name}
                  </span>
                  <span className="mt-[3px] block font-mono text-[10.5px] text-dimension">
                    {item.use}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
