"use client";

import { useCallback, useEffect, useId, useRef } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { nav, site } from "@/data/content";
import { EASE_SNAP, usePrefersReducedMotion } from "@/lib/motion";

const MENU_LINKS = nav.links.map((link, index) => ({
  ...link,
  num: String(index + 1).padStart(2, "0"),
}));

type MenuOverlayProps = {
  open: boolean;
  onClose: () => void;
};

export function MenuOverlay({ open, onClose }: MenuOverlayProps) {
  const reduced = usePrefersReducedMotion();
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  const scrollToHash = useCallback(
    (href: string) => {
      onClose();
      window.setTimeout(() => {
        const id = href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, reduced ? 0 : 260);
    },
    [onClose, reduced],
  );

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      firstLinkRef.current?.focus();
    }, 50);

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-label="Menu de navegação"
          className="fixed inset-0 z-[100] flex flex-col bg-ink px-6 py-8 md:px-16 md:py-16"
          initial={
            reduced
              ? { opacity: 0 }
              : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
          }
          animate={
            reduced
              ? { opacity: 1 }
              : { clipPath: "inset(0 0 0% 0)", opacity: 1 }
          }
          exit={
            reduced
              ? { opacity: 0 }
              : { clipPath: "inset(0 0 100% 0)", opacity: 1 }
          }
          transition={
            reduced
              ? { duration: 0.15 }
              : { duration: 0.25, ease: EASE_SNAP }
          }
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-ink.png"
                alt=""
                width={100}
                height={24}
                className="h-6 w-auto brightness-0 invert"
              />
              <span
                id={titleId}
                className="font-mono text-xs text-[#8E9DB0]"
              >
                Technology Solutions
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex min-h-11 items-center gap-2.5 font-mono text-xs text-paper transition-colors hover:text-signal"
              aria-label="Fechar menu"
            >
              FECHAR
              <X className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>

          <nav
            className="mt-16 flex flex-1 flex-col justify-center gap-1.5 md:mt-20"
            aria-label="Principal"
          >
            {MENU_LINKS.map((link, index) => (
              <button
                key={link.href}
                ref={index === 0 ? firstLinkRef : undefined}
                type="button"
                onClick={() => scrollToHash(link.href)}
                className="menu-overlay-link group flex w-full items-baseline gap-4 border-0 border-b border-[#2C3E56] bg-transparent py-4 text-left outline-none ring-0 transition-colors duration-150 hover:text-signal focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:text-signal md:py-5"
              >
                <span className="font-mono text-sm text-[#4A5A72] transition-colors duration-150 group-hover:text-signal group-focus-visible:text-signal">
                  {link.num}
                </span>
                <span className="font-heading text-[32px] font-bold leading-none text-paper transition-colors duration-150 group-hover:text-signal group-focus-visible:text-signal md:text-[48px]">
                  {link.label}
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-3 font-mono text-[11px] text-dimension sm:flex-row sm:gap-10">
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-paper"
            >
              {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-paper"
            >
              {site.email}
            </a>
            <span>São Paulo, SP</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
