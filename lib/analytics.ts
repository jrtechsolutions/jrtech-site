const CONSENT_KEY = "cookie_consent";
const GA_ID = "G-228MTHS53C";

type GtagFn = (...args: unknown[]) => void;

function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return localStorage.getItem(CONSENT_KEY) === "accepted";
  } catch {
    return false;
  }
}

function ensureGtag(): GtagFn {
  const w = window as Window & {
    gtag?: GtagFn;
    dataLayer?: object[];
  };

  w.dataLayer = w.dataLayer || [];

  if (typeof w.gtag !== "function") {
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer!.push(arguments as unknown as object);
    };
  }

  return w.gtag;
}

/** Dispara evento no GA4 apenas com consentimento de cookies. */
export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (!hasAnalyticsConsent()) return;

  const gtag = ensureGtag();
  const payload = { ...(params ?? {}), send_to: GA_ID };
  gtag("event", name, payload);

  // Se o script do GA ainda não montou, reenvia 1x após o load
  const gaScript = document.querySelector(
    'script[src*="googletagmanager.com/gtag/js"]',
  );
  if (!gaScript) {
    window.setTimeout(() => {
      if (!hasAnalyticsConsent()) return;
      ensureGtag()("event", name, payload);
    }, 1200);
  }
}

export function trackWhatsAppClick(location: string): void {
  trackEvent("whatsapp_click", { location });
}

export function trackGenerateLead(method: string = "contact_form"): void {
  trackEvent("generate_lead", { method });
}

export function trackCookieAccepted(): void {
  trackEvent("cookie_accepted");
}

export function trackContactFormSubmit(): void {
  trackEvent("contact_form_submit");
}

/** Conta seção da home como “página” no GA4 (page_path virtual). */
export function trackVirtualPageView(path: string, title: string): void {
  if (!hasAnalyticsConsent()) return;

  const origin = window.location.origin;
  const location = `${origin}${path === "/" ? "/" : path}`;

  ensureGtag()("event", "page_view", {
    page_path: path,
    page_title: title,
    page_location: location,
    send_to: GA_ID,
  });

  trackEvent("section_view", {
    section_path: path,
    section_title: title,
  });
}

