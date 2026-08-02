"use client";

import { useState } from "react";
import type { SemanticHover } from "@/lib/card-hover";
import { usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SemanticCardProps = {
  children: React.ReactNode;
  className?: string;
  hover: SemanticHover;
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
}: {
  active: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "semantic-hint pointer-events-none absolute z-[3] font-mono text-[10px]",
        active && "is-active",
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
}: SemanticCardProps) {
  const reduced = usePrefersReducedMotion();
  const [hovered, setHovered] = useState(false);
  const active = hovered;

  return (
    <article
      className={cn(
        "semantic-card group relative rounded-md border border-border bg-white transition-[border-color] duration-150",
        hover === "warn" && active && "border-[#C0392B]",
        className,
      )}
      data-hover={hover}
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
          className="right-3 top-3 flex items-center gap-1.5 text-success"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-success" />
          <span>scan: 0 ameaças</span>
        </HoverHint>
      )}

      {/* S.04 */}
      {hover === "processes" && (
        <HoverHint
          active={active}
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
    </article>
  );
}
