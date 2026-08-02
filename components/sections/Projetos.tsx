import { projetos } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";

export function Projetos() {
  return (
    <Section id="projetos">
      <Kicker>{projetos.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {projetos.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projetos.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-md border border-border bg-white transition-[border-color] duration-150 hover:border-ink"
          >
            <div
              className="flex h-[120px] items-center justify-center font-mono text-[11px] text-dimension"
              style={{
                background:
                  "repeating-linear-gradient(135deg, #E3E9EE, #E3E9EE 10px, #DAE1E7 10px, #DAE1E7 20px)",
              }}
              aria-hidden="true"
            >
              {item.thumb}
            </div>
            <div className="p-5">
              <span className="mb-2 block font-mono text-[10.5px] text-signal">
                {item.category}
              </span>
              <h3 className="mb-2 font-subheading text-[15.5px] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-[13px] text-ink-2">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
