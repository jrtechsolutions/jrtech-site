"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faq } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/motion";

export function Faq() {
  const baseId = useId();
  const reduced = usePrefersReducedMotion();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="faq">
      <div className="mx-auto max-w-[720px] text-center">
        <Kicker className="mb-3">{faq.kicker}</Kicker>
        <h2 className="mb-3 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
          {faq.title}
        </h2>
        <p className="mx-auto max-w-md font-body text-[14px] leading-relaxed text-ink-2">
          {faq.intro}
        </p>
      </div>

      <div className="mx-auto mt-10 max-w-[680px] md:mt-12">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `${baseId}-panel-${index}`;
          const buttonId = `${baseId}-button-${index}`;

          return (
            <div
              key={item.question}
              className="border-b border-border first:border-t"
            >
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/20 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggle(index)}
                >
                  <span className="font-subheading text-[15px] font-semibold text-ink">
                    {item.question}
                  </span>
                  <span
                    className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-border text-ink"
                    aria-hidden="true"
                  >
                    {isOpen ? (
                      <Minus className="h-3.5 w-3.5" strokeWidth={1.75} />
                    ) : (
                      <Plus className="h-3.5 w-3.5" strokeWidth={1.75} />
                    )}
                  </span>
                </button>
              </h3>

              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className={cn(
                  "grid transition-[grid-template-rows] ease-out",
                  reduced ? "duration-0" : "duration-300",
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                )}
              >
                <div className="overflow-hidden">
                  <p className="pb-4 pr-11 text-[13.5px] leading-relaxed text-ink-2">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
