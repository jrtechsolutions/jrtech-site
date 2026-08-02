/**
 * Rate limiting em memória por IP.
 * Adequado para MVP em instância única (Vercel serverless).
 * Para produção multi-instância, migrar para Upstash Redis.
 */

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const store = new Map<string, RateLimitEntry>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutos
const MAX_REQUESTS = 5;

export function checkRateLimit(ip: string): {
  success: boolean;
  remaining: number;
} {
  const now = Date.now();
  const entry = store.get(ip);

  if (!entry || now > entry.resetAt) {
    store.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { success: true, remaining: MAX_REQUESTS - 1 };
  }

  if (entry.count >= MAX_REQUESTS) {
    return { success: false, remaining: 0 };
  }

  entry.count += 1;
  return { success: true, remaining: MAX_REQUESTS - entry.count };
}

// Limpeza periódica para evitar vazamento de memória
if (typeof setInterval !== "undefined") {
  setInterval(() => {
    const now = Date.now();
    Array.from(store.entries()).forEach(([key, entry]) => {
      if (now > entry.resetAt) {
        store.delete(key);
      }
    });
  }, WINDOW_MS);
}
