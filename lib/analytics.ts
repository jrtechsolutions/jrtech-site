import { sendGAEvent } from "@next/third-parties/google";

const CONSENT_KEY = "cookie_consent";

function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

/** Dispara evento no GA4 apenas com consentimento de cookies. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!hasAnalyticsConsent()) return;
  try {
    sendGAEvent("event", name, params ?? {});
  } catch {
    // GA ainda não inicializado — ignora
  }
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", { location });
}

export function trackGenerateLead(method: string = "contact_form"): void {
  trackEvent("generate_lead", { method });
}
