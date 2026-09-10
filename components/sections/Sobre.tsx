"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { sobre } from "@/data/content";
import { animateCounter } from "@/lib/easing";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type StatDef = {
  value: string;
  label: string;
  numeric: number;
  prefix: string;
  suffix: string;
};

const STATS: StatDef[] = [
  {
    value: "+1 ano",
    label: "de operação",
    numeric: 1,
    prefix: "+",
    suffix: " ano",
  },
  {
    value: "100%",
    label: "atendimento direto",
    numeric: 100,
    prefix: "",
    suffix: "%",
  },
  {
    value: "0",
    label: "terceirizações",
    numeric: 0,
    prefix: "",
    suffix: "",
  },
];

export function Sobre() {
  const reduced = usePrefersReducedMotion();
  const statsRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);
  const [display, setDisplay] = useState(
    STATS.map((s) => (reduced ? s.value : s.numeric === 0 ? "0" : "0")),
  );

  useEffect(() => {
    if (reduced) {
      setDisplay(STATS.map((s) => s.value));
      return;
    }

    const el = statsRef.current;
    if (!el) return;

    const cancels: Array<() => void> = [];

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasAnimated.current) return;
        hasAnimated.current = true;
        observer.unobserve(el);

        STATS.forEach((stat, index) => {
          if (stat.numeric === 0) {
            setDisplay((d) => {
              const next = [...d];
              next[index] = "0";
              return next;
            });
            return;
          }

          const cancel = animateCounter(
            0,
            stat.numeric,
            600,
            (v) => {
              setDisplay((d) => {
                const next = [...d];
                next[index] =
                  `${stat.prefix}${Math.round(v)}${stat.suffix}`;
                return next;
              });
            },
            () => {
              setDisplay((d) => {
                const next = [...d];
                next[index] = stat.value;
                return next;
              });
            },
          );
          cancels.push(cancel);
        });
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      cancels.forEach((c) => c());
    };
  }, [reduced]);

  return (
    <section id="sobre" className="sobre-section relative bg-ink">
      <div className="relative z-[1] mx-auto flex w-full max-w-container flex-col items-center px-6 md:px-12 lg:flex-row lg:items-end lg:pl-[72px] lg:pr-0">
        <div className="w-full flex-1 py-14 md:py-16 lg:max-w-none lg:py-[72px] lg:pr-10">
          <div className="max-w-[560px]">
            <span className="mb-5 block font-mono text-[11px] uppercase tracking-[0.07em] text-signal">
              {sobre.kicker}
            </span>

            <h2 className="mb-6 font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold leading-[1.18] text-paper">
              {sobre.titleLine1}
              <br />
              {sobre.titleLine2}
            </h2>

            <div className="mb-10 max-w-[480px] space-y-4">
              {sobre.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 32)}
                  className="font-body text-[14.5px] leading-[1.75] text-[#8E9DB0]"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div
              ref={statsRef}
              className="flex flex-col gap-5 sm:flex-row sm:items-stretch sm:gap-0"
            >
              {STATS.map((stat, index) => (
                <div
                  key={stat.value}
                  className={cn(
                    "flex flex-col justify-center",
                    index > 0 &&
                      "sm:border-l sm:border-[#2C3E56] sm:pl-6 lg:pl-8",
                    index < STATS.length - 1 && "sm:pr-6 lg:pr-8",
                  )}
                >
                  <span className="font-heading text-[28px] font-bold tabular-nums leading-none text-paper">
                    {display[index]}
                  </span>
                  <span className="mt-1.5 font-mono text-[10px] text-[#4A5A72]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sobre-char relative w-full flex-shrink-0 pb-3 lg:w-[420px] lg:flex-none">
          <div className="sobre-character-mask flex justify-center lg:justify-end">
            <Image
              src="/personagem-transparente.png"
              alt="Personagem representando o atendimento direto da JR Technology Solutions, consultoria de TI em São Paulo"
              width={357}
              height={460}
              className="sobre-character-float h-[300px] w-auto object-contain lg:h-[460px]"
            />
          </div>

          <div
            className="sobre-status-badge mx-auto mt-3 flex w-fit items-center gap-2 rounded px-3 py-2"
            aria-hidden="true"
          >
            <span className="sobre-status-dot h-1.5 w-1.5 shrink-0 rounded-full bg-success" />
            <span className="font-mono text-[10px] text-[#8E9DB0]">
              monitoramento ativo
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
