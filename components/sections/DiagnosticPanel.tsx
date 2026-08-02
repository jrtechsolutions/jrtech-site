"use client";

import { useEffect, useRef, useState } from "react";
import { animate } from "framer-motion";
import { EASE_SNAP, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Scenario = "antes" | "depois";

type LiveValues = {
  uptime: number;
  latency: number;
  vulnFlash: boolean;
};

type RowDef = {
  key: "uptime" | "latency" | "backups" | "monitoramento" | "vulnerabilidades";
  label: string;
  note: string;
  positive?: boolean;
};

const BASE_DEPOIS = {
  uptime: 99.98,
  latency: 12,
} as const;

const LATENCY_POOL = [11, 12, 13, 14] as const;

const rowsDepois: RowDef[] = [
  {
    key: "uptime",
    label: "uptime",
    note: "medido · últimas 24h",
  },
  {
    key: "latency",
    label: "latência média",
    note: "média estável",
  },
  {
    key: "backups",
    label: "backups",
    note: "última verificação · rotina diária",
    positive: true,
  },
  {
    key: "monitoramento",
    label: "monitoramento",
    note: "alertas ativos",
    positive: true,
  },
  {
    key: "vulnerabilidades",
    label: "vulnerabilidades",
    note: "scan preventivo",
    positive: true,
  },
];

const scenariosAntes = [
  {
    key: "uptime",
    label: "uptime",
    note: "falhas sem alerta · últimas 24h",
    value: "97.2%",
  },
  {
    key: "latency",
    label: "latência média",
    note: "picos sem monitoramento",
    value: "84ms",
  },
  {
    key: "backups",
    label: "backups",
    note: "rotina irregular",
    value: "sem padrão",
  },
  {
    key: "monitoramento",
    label: "monitoramento",
    note: "visão parcial do ambiente",
    value: "parcial",
  },
  {
    key: "vulnerabilidades",
    label: "vulnerabilidades",
    note: "sem varredura periódica",
    value: "não mapeadas",
  },
] as const;

function formatUptime(n: number) {
  return `${n.toFixed(2)}%`;
}

function formatLatency(n: number) {
  return `${n}ms`;
}

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pickLatency(current: number) {
  const options = LATENCY_POOL.filter((n) => n !== current);
  return options[Math.floor(Math.random() * options.length)] ?? 12;
}

export function DiagnosticPanel() {
  const reduced = usePrefersReducedMotion();
  const [scenario, setScenario] = useState<Scenario>("depois");
  const [playKey, setPlayKey] = useState(0);
  const [entryDone, setEntryDone] = useState(reduced);
  const [live, setLive] = useState<LiveValues>({
    uptime: BASE_DEPOIS.uptime,
    latency: BASE_DEPOIS.latency,
    vulnFlash: false,
  });
  const [flashKey, setFlashKey] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [display, setDisplay] = useState({
    uptime: 0,
    latency: 0,
    backups: "",
    monitoramento: "",
    vulnerabilidades: "",
  });
  const liveRef = useRef(live);
  liveRef.current = live;

  // Entrada com contagem (uma vez por playKey / cenário)
  useEffect(() => {
    setEntryDone(reduced);
    setFlashKey(null);
    setLive({
      uptime: BASE_DEPOIS.uptime,
      latency: BASE_DEPOIS.latency,
      vulnFlash: false,
    });

    if (scenario === "antes") {
      setDisplay({
        uptime: 97.2,
        latency: 84,
        backups: "sem padrão",
        monitoramento: "parcial",
        vulnerabilidades: "não mapeadas",
      });
      setEntryDone(true);
      return;
    }

    if (reduced) {
      setDisplay({
        uptime: BASE_DEPOIS.uptime,
        latency: BASE_DEPOIS.latency,
        backups: "diário · ok",
        monitoramento: "ativo",
        vulnerabilidades: "0 críticas",
      });
      setEntryDone(true);
      return;
    }

    setDisplay({
      uptime: 0,
      latency: 0,
      backups: "",
      monitoramento: "",
      vulnerabilidades: "",
    });

    const timers: number[] = [];
    const controls: Array<{ stop: () => void }> = [];

    const uptimeAnim = animate(0, BASE_DEPOIS.uptime, {
      duration: 0.55,
      delay: 0,
      ease: EASE_SNAP,
      onUpdate: (v) => setDisplay((d) => ({ ...d, uptime: v })),
    });
    controls.push(uptimeAnim);

    const latencyAnim = animate(0, BASE_DEPOIS.latency, {
      duration: 0.55,
      delay: 0.1,
      ease: EASE_SNAP,
      onUpdate: (v) => setDisplay((d) => ({ ...d, latency: v })),
    });
    controls.push(latencyAnim);

    timers.push(
      window.setTimeout(
        () => setDisplay((d) => ({ ...d, backups: "diário · ok" })),
        200,
      ),
    );
    timers.push(
      window.setTimeout(
        () => setDisplay((d) => ({ ...d, monitoramento: "ativo" })),
        300,
      ),
    );
    timers.push(
      window.setTimeout(
        () => setDisplay((d) => ({ ...d, vulnerabilidades: "0 críticas" })),
        400,
      ),
    );
    timers.push(
      window.setTimeout(() => setEntryDone(true), 1100),
    );

    return () => {
      timers.forEach(clearTimeout);
      controls.forEach((c) => c.stop());
    };
  }, [playKey, reduced, scenario]);

  // Loop ao vivo — só no cenário "depois", após a entrada
  useEffect(() => {
    if (reduced || scenario !== "depois" || !entryDone) return;

    let cancelled = false;
    let timeoutId = 0;

    const schedule = () => {
      const delay = randomBetween(5000, 7000);
      timeoutId = window.setTimeout(async () => {
        if (cancelled) return;

        const kinds = ["latency", "uptime", "vuln"] as const;
        const kind = kinds[Math.floor(Math.random() * kinds.length)];
        const current = liveRef.current;

        if (kind === "latency") {
          const next = pickLatency(current.latency);
          setFlashKey("latency");
          await wait(200);
          if (cancelled) return;
          setLive((v) => ({ ...v, latency: next }));
          setDisplay((d) => ({ ...d, latency: next }));
          setFlashKey(null);
        } else if (kind === "uptime") {
          const next = Math.min(99.99, Number((current.uptime + 0.01).toFixed(2)));
          if (next === current.uptime) {
            schedule();
            return;
          }
          setFlashKey("uptime");
          await wait(200);
          if (cancelled) return;
          setLive((v) => ({ ...v, uptime: next }));
          setDisplay((d) => ({ ...d, uptime: next }));
          setFlashKey(null);
        } else {
          setFlashKey("vulnerabilidades");
          setLive((v) => ({ ...v, vulnFlash: true }));
          await wait(300);
          if (cancelled) return;
          setDisplay((d) => ({ ...d, vulnerabilidades: "0 críticas" }));
          setLive((v) => ({ ...v, vulnFlash: false }));
          setFlashKey(null);
        }

        schedule();
      }, delay);
    };

    schedule();
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, [entryDone, reduced, scenario]);

  const switchScenario = (next: Scenario) => {
    if (next === scenario) return;
    setScenario(next);
    setPlayKey((k) => k + 1);
  };

  const depoisRows = rowsDepois.map((row) => {
    let value = "";
    let positive = row.positive;
    if (row.key === "uptime") value = formatUptime(display.uptime);
    else if (row.key === "latency") value = formatLatency(Math.round(display.latency));
    else if (row.key === "backups") value = display.backups;
    else if (row.key === "monitoramento") value = display.monitoramento;
    else value = display.vulnerabilidades;

    const flashing = flashKey === row.key;
    return { ...row, value, positive, flashing };
  });

  return (
    <div className="w-full max-w-[320px]">
      <div
        className="mb-3 flex gap-2"
        role="tablist"
        aria-label="Cenário do diagnóstico"
      >
        {(
          [
            { id: "antes", label: "Antes" },
            { id: "depois", label: "Depois" },
          ] as const
        ).map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={scenario === tab.id}
            onClick={() => switchScenario(tab.id)}
            className={cn(
              "min-h-9 flex-1 rounded-[3px] border px-3 font-mono text-[11px] transition-colors duration-150",
              scenario === tab.id
                ? "border-ink bg-ink text-paper"
                : "border-border bg-white text-ink-2 hover:border-ink hover:text-ink",
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="overflow-hidden rounded-md border-[1.5px] border-ink bg-white"
        aria-label="Painel de diagnóstico do ambiente"
      >
        <div className="flex min-h-10 items-center justify-between bg-ink px-4">
          <span className="font-mono text-[10.5px] font-medium tracking-[0.04em] text-paper">
            DIAGNÓSTICO · AMBIENTE
          </span>
          <span
            className="diagnostic-live-dot h-2 w-2 rounded-full bg-[#4ADE80]"
            aria-label="Diagnóstico ativo"
          />
        </div>

        {scenario === "antes"
          ? scenariosAntes.map((row) => (
              <PanelRow
                key={row.key}
                label={row.label}
                value={row.value}
                note={row.note}
                hovered={hovered === row.key}
                flashing={false}
                onEnter={() => setHovered(row.key)}
                onLeave={() => setHovered(null)}
              />
            ))
          : depoisRows.map((row) => (
              <PanelRow
                key={row.key}
                label={row.label}
                value={row.value || "—"}
                note={row.note}
                positive={row.positive}
                flashing={row.flashing}
                hovered={hovered === row.key}
                invisible={!row.value}
                onEnter={() => setHovered(row.key)}
                onLeave={() => setHovered(null)}
              />
            ))}
      </div>
      <p className="mt-2 font-mono text-[10px] text-dimension">
        {scenario === "antes"
          ? "ambiente típico sem método"
          : "ambiente após organização JR"}
      </p>
    </div>
  );
}

function wait(ms: number) {
  return new Promise<void>((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

function PanelRow({
  label,
  value,
  note,
  positive,
  flashing,
  hovered,
  invisible,
  onEnter,
  onLeave,
}: {
  label: string;
  value: string;
  note: string;
  positive?: boolean;
  flashing: boolean;
  hovered: boolean;
  invisible?: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <div
      className={cn(
        "flex min-h-10 cursor-default flex-col justify-center border-b border-border px-4 py-2 last:border-b-0",
        invisible && "invisible",
      )}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="flex items-center justify-between gap-5">
        <span className="font-mono text-[10.5px] lowercase text-dimension">
          {label}
        </span>
        <span
          className={cn(
            "whitespace-nowrap font-mono text-[11px] font-medium transition-colors duration-150",
            flashing
              ? "text-signal"
              : positive
                ? "text-success"
                : "text-ink",
          )}
        >
          {value}
        </span>
      </div>
      {hovered && (
        <span className="mt-1 font-mono text-[9px] text-signal">{note}</span>
      )}
    </div>
  );
}
