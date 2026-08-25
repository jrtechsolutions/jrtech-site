"use client";

import { useEffect, useRef, useState } from "react";
import { comoTrabalhamos } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STEP_COUNT = comoTrabalhamos.steps.length;
const STEP_DELAY_MS = 200;

export function ComoTrabalhamos() {
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasStartedRef = useRef(false);
  const timersRef = useRef<number[]>([]);

  const [visibleSteps, setVisibleSteps] = useState(reduced ? STEP_COUNT : 0);
  const [lineProgress, setLineProgress] = useState(reduced ? 100 : 0);

  useEffect(() => {
    if (reduced) {
      setVisibleSteps(STEP_COUNT);
      setLineProgress(100);
      return;
    }

    const el = sectionRef.current;
    if (!el || hasStartedRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStartedRef.current) return;

        hasStartedRef.current = true;
        observer.unobserve(el);

        for (let i = 0; i < STEP_COUNT; i++) {
          const timerId = window.setTimeout(() => {
            setVisibleSteps(i + 1);
            setLineProgress(((i + 1) / STEP_COUNT) * 100);
          }, i * STEP_DELAY_MS);
          timersRef.current.push(timerId);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [reduced]);

  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
      timersRef.current = [];
    };
  }, []);

  return (
    <Section>
      <Kicker>{comoTrabalhamos.kicker}</Kicker>
      <h2 className="mb-10 font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-ink">
        {comoTrabalhamos.title}
      </h2>

      <div ref={sectionRef} className="relative max-w-[640px] pl-7">
        <div
          className="absolute bottom-2 left-[5px] top-2 w-px bg-[rgba(22,37,61,0.28)]"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-2 left-[5px] top-2 w-px overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="w-full origin-top bg-[rgba(22,37,61,0.28)] transition-[height] duration-[200ms] ease-out"
            style={{ height: `${lineProgress}%` }}
          />
        </div>

        <div className="flex flex-col">
          {comoTrabalhamos.steps.map((step, index) => {
            const isVisible = visibleSteps > index;

            if (!isVisible) return null;

            return (
              <div
                key={step.num}
                className={cn(
                  "relative pb-7 last:pb-0",
                  !reduced && "animate-timeline-step",
                )}
              >
                <span
                  className="absolute -left-7 top-1 h-[9px] w-[9px] rounded-full border-2 border-paper bg-signal shadow-[0_0_0_1px_#E8720C]"
                  aria-hidden="true"
                />

                <span className="mb-1 block font-mono text-[11px] text-dimension">
                  {step.num}
                </span>
                <h3 className="mb-1.5 font-subheading text-base font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-[13.5px] text-ink-2">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
