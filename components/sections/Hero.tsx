"use client";

import { motion } from "framer-motion";
import { hero } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Button } from "@/components/ui/button";
import { DiagnosticPanel } from "@/components/sections/DiagnosticPanel";
import { EASE_SNAP, usePrefersReducedMotion } from "@/lib/motion";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const TITLE_LINES = [
  "Organizamos, protegemos e evoluímos",
  "a tecnologia da sua empresa",
] as const;

function PlotterHeadline({ reduced }: { reduced: boolean }) {
  return (
    <h1 className="mb-5 font-heading text-[clamp(2rem,5vw,2.875rem)] font-bold leading-[1.14] text-ink">
      {TITLE_LINES.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={reduced ? false : { clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={
              reduced
                ? { duration: 0 }
                : {
                    duration: 0.5,
                    delay: i * 0.09,
                    ease: EASE_SNAP,
                  }
            }
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

export function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative border-b border-border bg-paper pt-14 md:pt-[56px]">
      <div className="site-container relative flex flex-col items-center gap-10 pb-16 md:flex-row md:gap-12 md:pb-[88px]">
        <div className="w-full max-w-[540px] flex-1">
          <Kicker>{hero.kicker}</Kicker>
          <PlotterHeadline reduced={reduced} />
          <p className="mb-8 max-w-[460px] text-[15.5px] leading-relaxed text-ink-2">
            {hero.subtitle}
          </p>
          <div className="flex flex-col gap-3.5 sm:flex-row">
            <Button
              onClick={() => scrollTo("contato")}
              className="btn-ruler min-h-11 bg-ink px-6 text-sm font-medium text-paper hover:bg-ink/90"
            >
              {hero.primaryCta}
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollTo("solucoes")}
              className="btn-ruler min-h-11 border-[1.5px] border-ink bg-transparent px-6 text-sm font-medium text-ink hover:bg-white"
            >
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="flex w-full flex-1 justify-center">
          <DiagnosticPanel />
        </div>
      </div>
    </section>
  );
}
