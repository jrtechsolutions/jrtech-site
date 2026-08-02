import Image from "next/image";
import { sobre } from "@/data/content";
import { cn } from "@/lib/utils";

export function Sobre() {
  return (
    <section id="sobre" className="sobre-section relative bg-ink">
      <div className="relative z-[1] mx-auto flex w-full max-w-container flex-col items-center px-6 md:px-12 lg:flex-row lg:items-end lg:pl-[72px] lg:pr-0">
        {/* Coluna esquerda — conteúdo */}
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

            <div className="flex flex-col gap-5 sm:flex-row sm:items-stretch sm:gap-0">
              {sobre.stats.map((stat, index) => (
                <div
                  key={stat.value}
                  className={cn(
                    "flex flex-col justify-center",
                    index > 0 &&
                      "sm:border-l sm:border-[#2C3E56] sm:pl-6 lg:pl-8",
                    index < sobre.stats.length - 1 && "sm:pr-6 lg:pr-8",
                  )}
                >
                  <span className="font-heading text-[28px] font-bold leading-none text-paper">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 font-mono text-[10px] text-[#4A5A72]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna direita — personagem */}
        <div className="sobre-char relative w-full flex-shrink-0 pb-3 lg:w-[420px] lg:flex-none">
          <div className="sobre-character-mask flex justify-center lg:justify-end">
            <Image
              src="/personagem-transparente.png"
              alt="Especialista JR Technology"
              width={357}
              height={460}
              className="sobre-character-float h-[300px] w-auto object-contain lg:h-[460px]"
              priority={false}
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
