"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";

const CONSENT_KEY = "cookie_consent";
const GA_ID = "G-228MTHS53C";

type Consent = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted" || stored === "declined") {
      setConsent(stored);
    }
    setReady(true);
  }, []);

  const save = (value: "accepted" | "declined") => {
    localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  };

  return (
    <>
      {consent === "accepted" ? <GoogleAnalytics gaId={GA_ID} /> : null}

      {ready && consent === null ? (
        <div
          role="dialog"
          aria-label="Consentimento de cookies"
          className="fixed inset-x-0 bottom-0 z-[90] border-t border-white/10 bg-ink px-6 py-4 shadow-[0_-8px_32px_rgba(0,0,0,0.35)] md:px-8"
        >
          <div className="mx-auto flex max-w-container flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="max-w-2xl font-body text-[13px] leading-relaxed text-paper/90">
              Usamos cookies de análise (Google Analytics) para entender como o
              site é usado.{" "}
              <Link
                href="/politica-de-privacidade"
                className="underline underline-offset-2 transition-colors hover:text-signal"
              >
                Política de privacidade
              </Link>
              .
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => save("declined")}
                className="px-3 py-2 font-body text-[12.5px] text-paper/60 transition-colors hover:text-paper"
              >
                Recusar
              </button>
              <button
                type="button"
                onClick={() => save("accepted")}
                className="btn-ruler inline-flex min-h-10 items-center bg-signal px-5 text-[13.5px] font-medium text-ink transition-colors hover:bg-signal/90"
              >
                Aceitar
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
