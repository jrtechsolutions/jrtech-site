"use client";

import { useEffect, useRef } from "react";
import { trackVirtualPageView } from "@/lib/analytics";

const HOME_SECTIONS = [
  {
    id: "hero",
    path: "/",
    title: "JR Technology Solutions — Início",
  },
  {
    id: "solucoes",
    path: "/#solucoes",
    title: "Soluções — JR Technology Solutions",
  },
  {
    id: "projetos",
    path: "/#projetos",
    title: "Projetos — JR Technology Solutions",
  },
  {
    id: "faq",
    path: "/#faq",
    title: "Perguntas frequentes — JR Technology Solutions",
  },
  {
    id: "sobre",
    path: "/#sobre",
    title: "Sobre — JR Technology Solutions",
  },
  {
    id: "contato",
    path: "/#contato",
    title: "Contato — JR Technology Solutions",
  },
] as const;

/**
 * Quando o visitante rola a home, atualiza o hash da URL e envia
 * um page_view virtual ao GA — sem precisar digitar outro endereço.
 */
export function SectionTracker() {
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    const elements = HOME_SECTIONS.map((section) => {
      const el = document.getElementById(section.id);
      return el ? { el, section } : null;
    }).filter(Boolean) as Array<{
      el: HTMLElement;
      section: (typeof HOME_SECTIONS)[number];
    }>;

    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const commit = (section: (typeof HOME_SECTIONS)[number]) => {
      if (lastPath.current === section.path) return;
      lastPath.current = section.path;

      const nextUrl =
        section.path === "/"
          ? `${window.location.pathname}${window.location.search}`
          : section.path;

      if (
        section.path === "/" &&
        (window.location.hash === "" || window.location.hash === "#")
      ) {
        // já na home limpa
      } else if (section.path === "/") {
        window.history.replaceState(null, "", nextUrl || "/");
      } else if (window.location.hash !== `#${section.id}`) {
        window.history.replaceState(null, "", section.path);
      }

      trackVirtualPageView(section.path, section.title);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let best: (typeof HOME_SECTIONS)[number] | null = null;
        let bestRatio = 0;

        for (const { section } of elements) {
          const ratio = ratios.get(section.id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            best = section;
          }
        }

        if (best && bestRatio >= 0.12) {
          commit(best);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach(({ el }) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
