"use client";

import { useState } from "react";
import type { SemanticHover } from "@/lib/card-hover";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SemanticCardProps = {
  children: React.ReactNode;
  className?: string;
  hover: SemanticHover;
  variant?: "problema" | "solucao";
};

function OpenLockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3"
        y="6.5"
        width="8"
        height="6"
        rx="1"
        stroke="#C0392B"
        strokeWidth="1.2"
      />
      <path
        d="M5 6.5V4.2a2 2 0 0 1 3.7-1"
        stroke="#C0392B"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="4.4" stroke="#16253D" strokeWidth="1.1" />
      <path
        d="M6 3.5V6l1.8 1.2"
        stroke="#16253D"
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HoverHint({
  active,
  className,
  children,
  withCursor,
}: {
  active: boolean;
  className?: string;
  children: React.ReactNode;
  withCursor?: boolean;
}) {
  return (
    <div
      className={cn(
        "semantic-hint pointer-events-none absolute z-[3] font-mono text-[10px]",
        active && "is-active",
        withCursor && active && "semantic-doc-cursor",
        className,
      )}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

export function SemanticCard({
  children,
  className,
  hover,
  variant = "problema",
}: SemanticCardProps) {
  const reduced = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const active = hovered;
  const isSolucao = variant === "solucao";

  return (
    <article
      className={cn(
        "semantic-card group relative rounded-md border border-[rgba(22,37,61,0.28)] bg-white transition-[border-color,transform,box-shadow] duration-200 ease-out",
        hover === "warn" && active && "border-[#C0392B]",
        isSolucao && "semantic-solucao-card",
        className,
      )}
      data-hover={hover}
      data-variant={variant}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* P.01 */}
      {hover === "warn" && (
        <HoverHint
          active={active}
          className="right-3 top-3 rounded-[3px] border border-[#FECACA] bg-[#FEF2F2] px-2 py-1 text-[#C0392B]"
        >
          WARN: ambiente sem estrutura
        </HoverHint>
      )}

      {/* P.02 */}
      {hover === "lock-open" && (
        <HoverHint
          active={active}
          className="right-3 top-3 flex items-center gap-1.5 text-[#C0392B]"
        >
          <OpenLockIcon />
          <span>acesso: não protegido</span>
        </HoverHint>
      )}

      {/* P.03 */}
      {hover === "progress" && (
        <HoverHint
          active={active}
          className="bottom-3 left-3 right-3 top-auto"
        >
          <div className="mb-1.5 text-dimension">automatizando...</div>
          <div className="h-[2px] w-full overflow-hidden rounded-full bg-[#E3E9EE]">
            {active ? (
              <div
                key="progress-run"
                className={cn(
                  "h-full bg-signal",
                  reduced ? "w-2/3" : "semantic-progress-bar",
                )}
              />
            ) : (
              <div className="h-full w-0 bg-signal" />
            )}
          </div>
        </HoverHint>
      )}

      {/* P.04 */}
      {hover === "doc-stable" && (
        <HoverHint
          active={active}
          className="right-3 top-3 flex items-center gap-1.5 text-dimension"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>doc: v1.2 · estável</span>
        </HoverHint>
      )}

      {/* S.01 */}
      {hover === "uptime" && (
        <HoverHint
          active={active}
          className="right-3 top-3 flex items-center gap-1.5 text-success"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>uptime: 99.9%</span>
        </HoverHint>
      )}

      {/* S.02 */}
      {hover === "response" && (
        <HoverHint
          active={active}
          className="right-3 top-3 flex items-center gap-1.5 text-ink"
        >
          <ClockIcon />
          <span>resposta: &lt; 2h</span>
        </HoverHint>
      )}

      {/* S.03 */}
      {hover === "scan" && (
        <HoverHint
          active={active}
          className={cn(
            "right-3 top-3 flex items-center gap-1.5 text-success",
            isSolucao && "semantic-scan-stamp",
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>scan: 0 ameaças</span>
        </HoverHint>
      )}

      {/* S.04 */}
      {hover === "processes" && (
        <HoverHint
          active={active}
          withCursor={isSolucao}
          className="right-3 top-3 text-dimension"
        >
          processos: documentados · v2.1
        </HoverHint>
      )}

      {/* S.05 */}
      {hover === "build" && (
        <HoverHint active={active} className="right-3 top-3 text-success">
          build: concluído ✓
        </HoverHint>
      )}

      {children}

      {/* Barra indeterminada — Suporte (S.02) */}
      {isSolucao && hover === "response" && (
        <div
          className="semantic-support-bar pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] overflow-hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100"
          aria-hidden="true"
        >
          <div className="semantic-support-bar-inner h-full w-1/3 bg-signal" />
        </div>
      )}

      {/* Linha de build — Desenvolvimento (S.05) */}
      {isSolucao && hover === "build" && (
        <div
          className="semantic-build-line pointer-events-none absolute bottom-0 left-0 h-[2px] w-0 bg-signal transition-[width] duration-[250ms] ease-out group-hover:w-full"
          aria-hidden="true"
        />
      )}
    </article>
  );
}
