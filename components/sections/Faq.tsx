"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <Section id="faq">
      <Kicker>{faq.kicker}</Kicker>
      <h2 className="mb-8 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {faq.title}
      </h2>

      <div className="max-w-[720px]">
        {faq.items.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={item.question}
              className="border-b border-[rgba(22,37,61,0.14)] first:border-t first:border-[rgba(22,37,61,0.14)]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 py-4 text-left font-body text-[14px] font-medium text-ink"
                aria-expanded={isOpen}
                onClick={() => toggle(index)}
              >
                <span>{item.question}</span>
                <span
                  className={cn(
                    "shrink-0 font-mono text-base text-signal transition-transform duration-[250ms] ease-out",
                    isOpen && "rotate-45",
                  )}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>
              <div
                className={cn(
                  "overflow-hidden transition-[max-height] duration-[250ms] ease-out",
                  isOpen ? "max-h-48" : "max-h-0",
                )}
              >
                <p className="pb-4 text-[12.5px] leading-relaxed text-ink/60">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
