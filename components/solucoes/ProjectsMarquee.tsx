"use client";

import Image from "next/image";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MarqueeItem = {
  src: string;
  alt: string;
  url: string;
  title: string;
  description: string;
};

type ProjectsMarqueeProps = {
  items: MarqueeItem[];
  title?: string;
  lead?: string;
};

export function ProjectsMarquee({
  items,
  title = "O que já construímos",
  lead = "Projetos reais, no ar, atendendo clientes de verdade.",
}: ProjectsMarqueeProps) {
  const reduced = usePrefersReducedMotion();
  const loop = [...items, ...items];

  return (
    <div className="border-b border-border bg-paper py-12 md:py-16">
      <div className="site-container mb-8 max-w-[680px]">
        <h2 className="font-subheading text-lg font-semibold text-ink">
          {title}
        </h2>
        {lead ? (
          <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{lead}</p>
        ) : null}
      </div>

      <div
        className="group/marquee relative overflow-hidden"
        style={{ touchAction: "pan-y" }}
      >
        <div
          className={cn(
            "flex w-max gap-5 px-6 md:gap-6 md:px-8",
            !reduced &&
              "animate-solucoes-marquee group-hover/marquee:[animation-play-state:paused]",
          )}
        >
          {loop.map((item, index) => (
            <figure
              key={`${item.url}-${index}`}
              className="w-[300px] shrink-0"
            >
              <div className="overflow-hidden rounded-md border border-border bg-white shadow-sm">
                <div className="flex items-center gap-1.5 border-b border-border bg-[#F4F7F9] px-3 py-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3E9EE]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3E9EE]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#E3E9EE]" />
                  <span className="ml-2 truncate font-mono text-[10px] text-dimension">
                    {item.url}
                  </span>
                </div>
                <div className="relative aspect-[16/10] bg-ink">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover object-top"
                    sizes="300px"
                  />
                </div>
              </div>
              <figcaption className="mt-3 px-1">
                <p className="font-subheading text-[14px] font-semibold text-ink">
                  {item.title}{" "}
                  <span className="font-mono text-[11px] font-normal text-signal">
                    ({item.url})
                  </span>
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-ink-2">
                  {item.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
