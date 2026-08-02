"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { LayoutGroup, motion } from "framer-motion";
import { nav } from "@/data/content";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { EASE_SNAP, usePrefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SECTION_IDS = nav.links.map((link) => link.href.replace("#", ""));

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Header() {
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.intersectionRatio);
        }

        let bestId: string | null = null;
        let bestRatio = 0;
        for (const id of SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        // Nenhum traço no Hero — só quando alguma âncora está em foco
        if (!bestId || bestRatio < 0.05) {
          const first = document.getElementById("solucoes");
          if (first && first.getBoundingClientRect().top > window.innerHeight * 0.45) {
            setActiveHref(null);
            return;
          }
        }

        setActiveHref(bestId ? `#${bestId}` : null);
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    scrollToHash(href);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border bg-paper backdrop-blur-md transition-shadow",
        scrolled && "shadow-sm",
      )}
    >
      <div className="site-container flex items-center justify-between py-[18px]">
        <Link
          href="/"
          className="flex min-h-11 min-w-11 items-center"
          aria-label="JR Technology Solutions — início"
        >
          <Image
            src="/logo-ink.png"
            alt="JR Technology Solutions logo"
            width={120}
            height={28}
            className="h-[26px] w-auto"
            priority
          />
        </Link>

        <LayoutGroup>
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Principal"
          >
            {nav.links.map((link) => {
              const isActive = activeHref === link.href;
              const hasUnderline =
                (hoveredHref ?? activeHref) === link.href;
              return (
                <button
                  key={link.href}
                  type="button"
                  onClick={() => handleNavClick(link.href)}
                  onMouseEnter={() => setHoveredHref(link.href)}
                  onMouseLeave={() => setHoveredHref(null)}
                  onFocus={() => setHoveredHref(link.href)}
                  onBlur={() => setHoveredHref(null)}
                  className="relative min-h-11 text-sm text-ink-2 transition-colors hover:text-ink"
                  aria-current={isActive ? "true" : undefined}
                >
                  {link.label}
                  {hasUnderline && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-2 left-0 right-0 h-[1.5px] bg-signal"
                      transition={
                        reduced
                          ? { duration: 0 }
                          : { duration: 0.25, ease: EASE_SNAP }
                      }
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </LayoutGroup>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg border-[1.5px] border-ink bg-transparent text-ink transition-colors hover:bg-white"
              aria-label="Abrir menu de navegação"
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-paper text-ink">
              <SheetHeader>
                <SheetTitle className="text-left font-heading text-ink">
                  Menu
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-2" aria-label="Mobile">
                {nav.links.map((link) => (
                  <button
                    key={link.href}
                    type="button"
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "min-h-11 rounded-md px-2 text-left text-base text-ink-2 transition-colors hover:bg-white hover:text-ink",
                      activeHref === link.href && "text-ink",
                    )}
                    aria-current={
                      activeHref === link.href ? "true" : undefined
                    }
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
