const CONSENT_KEY = "cookie_consent";

type GtagFn = (...args: unknown[]) => void;

function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") return undefined;

  const w = window as Window & {
    gtag?: GtagFn;
    dataLayer?: object[];
  };

  if (typeof w.gtag === "function") return w.gtag;

  // Recria o helper gtag no mesmo formato do snippet do Google
  if (Array.isArray(w.dataLayer)) {
    w.gtag = function gtag() {
      // Precisa ser `arguments` (objeto Arguments), não um array
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments as unknown as object);
    };
    return w.gtag;
  }

  return undefined;
}

/** Dispara evento no GA4 apenas com consentimento de cookies. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!hasAnalyticsConsent()) return;

  const gtag = getGtag();
  if (!gtag) return;

  gtag("event", name, params ?? {});
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", { location });
}

export function trackGenerateLead(method: string = "contact_form"): void {
  trackEvent("generate_lead", { method });
}
