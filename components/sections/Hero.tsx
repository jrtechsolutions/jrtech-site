"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/data/content";
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
    <h1 className="mb-5 font-heading text-[clamp(2rem,4.5vw,2.625rem)] font-bold leading-[1.14] text-ink">
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
    <section
      id="hero"
      className="hero-section relative min-h-[560px] overflow-hidden border-b border-border bg-paper"
    >
      {/* Coluna visual — desktop absolute */}
      <div className="hero-visual absolute inset-y-0 right-0 z-[1] hidden w-[44%] lg:block">
        <div className="hero-visual-clip absolute inset-0 bg-ink" />
        <div className="absolute inset-0 flex items-end justify-center">
          <Image
            src="/personagem-transparente.png"
            alt="Personagem representando o atendimento direto da JR Technology Solutions, consultoria de TI em São Paulo"
            width={420}
            height={520}
            className="hero-character relative z-[2] h-[88%] w-auto object-contain object-bottom"
            priority
          />
        </div>
      </div>

      <div className="site-container relative z-[2] flex min-h-[560px] flex-col justify-center py-16 lg:py-20">
        <div className="w-full max-w-[420px] lg:max-w-none lg:w-[46%] lg:pr-8">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal">
            {hero.kicker}
          </span>
          <PlotterHeadline reduced={reduced} />
          <p className="mb-8 max-w-[420px] text-[14.5px] leading-relaxed text-ink-2">
            {hero.subtitle}
          </p>
          <button
            type="button"
            onClick={() => scrollTo("contato")}
            className="btn-ruler hero-cta-clip inline-flex min-h-12 items-center bg-ink px-8 text-[14.5px] font-medium text-paper transition-colors hover:bg-ink/90"
          >
            {hero.primaryCta}
          </button>
        </div>

        {/* Coluna visual — mobile/tablet no fluxo */}
        <div className="relative mt-12 flex w-full flex-col items-center lg:hidden">
          <div className="relative flex w-full justify-center overflow-hidden rounded-sm bg-ink px-4 pt-8">
            <Image
              src="/personagem-transparente.png"
              alt="Personagem representando o atendimento direto da JR Technology Solutions, consultoria de TI em São Paulo"
              width={280}
              height={300}
              className="h-[280px] w-auto object-contain object-bottom"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
