/** ease-out-cubic: 1 - (1 - t)^3 */
export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function animateCounter(
  from: number,
  to: number,
  durationMs: number,
  onUpdate: (value: number) => void,
  onComplete?: () => void,
): () => void {
  const start = performance.now();
  let frameId = 0;

  const tick = (now: number) => {
    const progress = Math.min((now - start) / durationMs, 1);
    const eased = easeOutCubic(progress);
    onUpdate(from + (to - from) * eased);
    if (progress < 1) {
      frameId = requestAnimationFrame(tick);
    } else {
      onComplete?.();
    }
  };

  frameId = requestAnimationFrame(tick);
  return () => cancelAnimationFrame(frameId);
}
