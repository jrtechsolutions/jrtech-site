import Image from "next/image";
import { projetos } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Projetos() {
  return (
    <Section id="projetos">
      <Kicker>{projetos.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {projetos.title}
      </h2>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projetos.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-md border border-border bg-white"
          >
            <div
              className={cn(
                "relative h-[160px] w-full overflow-hidden",
                item.title === "Fatia de Lei" ? "bg-[#F5F0E8]" : "bg-ink",
              )}
            >
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className={cn(item.fit, item.objectPosition)}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="p-5">
              <span className="mb-2 block font-mono text-[10.5px] text-signal">
                {item.category}
              </span>
              <h3 className="mb-2 font-subheading text-[15.5px] font-semibold text-ink">
                {item.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-ink-2">
                {item.description}
              </p>
              {"link" in item && item.link ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block font-mono text-[11px] text-signal no-underline hover:underline"
                >
                  {item.link.label}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
