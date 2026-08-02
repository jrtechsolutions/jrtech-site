"use client";

import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { comoTrabalhamos } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STEP_COUNT = comoTrabalhamos.steps.length;

export function ComoTrabalhamos() {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(reduced ? 1 : 0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.75", "end 0.45"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (!reduced) {
      setProgress(value);
    }
  });

  return (
    <Section>
      <Kicker>{comoTrabalhamos.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {comoTrabalhamos.title}
      </h2>
      <div ref={ref} className="relative max-w-[640px]">
        {/* Trilha de fundo */}
        <div
          className="absolute bottom-5 left-[19px] top-5 w-[1.5px] bg-connector"
          aria-hidden="true"
        />
        {/* Preenchimento vinculado ao scroll */}
        <div
          className="absolute bottom-5 left-[19px] top-5 w-[1.5px] overflow-hidden"
          aria-hidden="true"
        >
          <motion.div
            className="h-full w-full origin-top bg-ink"
            style={{ scaleY: reduced ? 1 : scrollYProgress }}
          />
        </div>
        <div className="flex flex-col">
          {comoTrabalhamos.steps.map((step, index) => {
            const threshold =
              STEP_COUNT <= 1 ? 0 : index / (STEP_COUNT - 1);
            const filled = progress >= threshold - 0.02;

            return (
              <div
                key={step.num}
                className="relative flex gap-5 pb-[34px] last:pb-0"
              >
                <div
                  className={cn(
                    "relative z-[1] flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[1.5px] font-mono text-[13px]",
                    filled
                      ? "border-ink bg-ink text-paper"
                      : "border-ink bg-paper text-ink",
                  )}
                >
                  {step.num}
                </div>
                <div>
                  <h3 className="mb-1.5 font-subheading text-base font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="text-[13.5px] text-ink-2">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
