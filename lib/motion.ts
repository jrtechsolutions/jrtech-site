"use client";

import { useReducedMotion } from "framer-motion";

export function usePrefersReducedMotion(): boolean {
  return useReducedMotion() ?? false;
}

/** Mecânico / preciso — não spring, não ease-out padrão */
export const EASE_SNAP = [0.16, 1, 0.3, 1] as const;
