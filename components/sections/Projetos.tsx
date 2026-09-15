import Image from "next/image";
import Link from "next/link";
import { projetos } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";

export function Projetos() {
  return (
    <Section id="projetos">
      <Kicker>{projetos.kicker}</Kicker>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
          {projetos.title}
        </h2>
        <Link
          href="/projetos"
          className="font-mono text-[12px] text-signal underline-offset-2 transition-colors hover:text-ink hover:underline"
        >
          Ver todos os projetos →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projetos.items.map((item) => (
          <article
            key={item.title}
            className="overflow-hidden rounded-md border border-border bg-white"
          >
            <div className="relative h-[140px] w-full overflow-hidden bg-ink">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                className={`${item.fit} ${item.objectPosition}`}
                sizes="(max-width: 768px) 100vw, 33vw"
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
