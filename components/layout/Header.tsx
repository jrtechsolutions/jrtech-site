"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { nav } from "@/data/content";
import { cn } from "@/lib/utils";
import { usePrefersReducedMotion } from "@/lib/motion";
import { trackVirtualPageView } from "@/lib/analytics";

const HASH_SECTION_IDS = nav.links
  .filter((l) => l.href.startsWith("#"))
  .map((l) => l.href.slice(1));

function scrollToHash(href: string) {
  const id = href.replace("#", "");
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const reduced = usePrefersReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [hoveredHref, setHoveredHref] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const dropdownId = "nav-pill-mobile";
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const firstItemRef = useRef<HTMLButtonElement>(null);

  const navRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const highlightHref =
    hoveredHref ??
    (pathname.startsWith("/solucoes") ? "/solucoes" : activeHref);

  const navigate = useCallback(
    (href: string) => {
      if (href.startsWith("#")) {
        if (pathname !== "/") {
          router.push(`/${href}`);
          return;
        }
        scrollToHash(href);
        const id = href.slice(1);
        const titles: Record<string, string> = {
          projetos: "Projetos — JR Technology Solutions",
          sobre: "Sobre — JR Technology Solutions",
          contato: "Contato — JR Technology Solutions",
          solucoes: "Soluções — JR Technology Solutions",
          faq: "Perguntas frequentes — JR Technology Solutions",
        };
        window.history.replaceState(null, "", href);
        trackVirtualPageView(
          `/${href}`,
          titles[id] ?? "JR Technology Solutions",
        );
        return;
      }
      router.push(href);
    },
    [pathname, router],
  );

  const movePill = useCallback((href: string | null) => {
    const pill = pillRef.current;
    const track = navRef.current;
    if (!pill || !track) return;

    if (!href) {
      pill.style.opacity = "0";
      return;
    }

    const target = linkRefs.current.get(href);
    if (!target) {
      pill.style.opacity = "0";
      return;
    }

    const trackRect = track.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    pill.style.left = `${targetRect.left - trackRect.left}px`;
    pill.style.width = `${targetRect.width}px`;
    pill.style.opacity = "1";
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHref(null);
      return;
    }

    const elements = HASH_SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean) as HTMLElement[];
    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set((entry.target as HTMLElement).id, entry.intersectionRatio);
        }

        let bestId: string | null = null;
        let bestRatio = 0;

        for (const id of HASH_SECTION_IDS) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }

        if (!bestId || bestRatio < 0.05) {
          setActiveHref(null);
          return;
        }

        setActiveHref(`#${bestId}`);
      },
      {
        root: null,
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    movePill(highlightHref);
  }, [highlightHref, movePill]);

  useEffect(() => {
    const onResize = () => movePill(highlightHref);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [highlightHref, movePill]);

  useEffect(() => {
    if (!mobileOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileOpen(false);
        menuBtnRef.current?.focus();
      }
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (dropdownRef.current?.contains(target)) return;
      if (menuBtnRef.current?.contains(target)) return;
      setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown, { passive: true });

    const t = window.setTimeout(
      () => firstItemRef.current?.focus(),
      reduced ? 0 : 60,
    );

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      window.clearTimeout(t);
    };
  }, [mobileOpen, reduced]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border transition-[background-color,box-shadow,backdrop-filter] duration-200",
        scrolled
          ? "bg-paper/90 shadow-sm backdrop-blur-md"
          : "bg-paper/80 backdrop-blur-sm",
      )}
    >
      <div className="site-container grid grid-cols-[1fr_auto] items-center gap-3 py-[18px] lg:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex min-h-11 items-center justify-self-start"
          aria-label="JR Technology Solutions — início"
        >
          <Image
            src="/logo-ink.png"
            alt="JR Technology Solutions logo"
            width={110}
            height={28}
            className="h-[26px] w-auto"
            priority
          />
        </Link>

        <nav
          ref={navRef}
          className="relative hidden items-center gap-[2px] justify-self-center rounded-full border border-border bg-[#F4F7F9] p-1 lg:flex"
          aria-label="Navegação"
          onMouseLeave={() => setHoveredHref(null)}
        >
          <div
            ref={pillRef}
            aria-hidden="true"
            className="pointer-events-none absolute top-1 bottom-1 z-[1] rounded-full bg-ink opacity-0"
            style={{
              left: 0,
              width: 0,
              transition: reduced
                ? "none"
                : "left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s",
            }}
          />

          {nav.links.map((item) => {
            const isLit = highlightHref === item.href;
            return (
              <button
                key={item.href}
                ref={(el) => {
                  if (el) linkRefs.current.set(item.href, el);
                  else linkRefs.current.delete(item.href);
                }}
                type="button"
                onClick={() => navigate(item.href)}
                onMouseEnter={() => setHoveredHref(item.href)}
                onFocus={() => setHoveredHref(item.href)}
                onBlur={(e) => {
                  if (!navRef.current?.contains(e.relatedTarget as Node)) {
                    setHoveredHref(null);
                  }
                }}
                aria-current={
                  (pathname.startsWith("/solucoes") &&
                    item.href === "/solucoes") ||
                  activeHref === item.href
                    ? "page"
                    : undefined
                }
                className={cn(
                  "relative z-[2] rounded-full px-4 py-2 text-[13px] font-medium font-body transition-colors duration-200",
                  "focus-visible:outline-none",
                  isLit ? "text-paper" : "text-[#3D4E63]",
                )}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center justify-self-end gap-2">
          <button
            type="button"
            onClick={() => navigate("#contato")}
            className="btn-ruler hidden items-center justify-center rounded-md bg-ink px-[22px] py-[11px] text-[13.5px] font-medium text-paper transition-colors duration-150 hover:bg-ink/90 focus-visible:bg-ink focus-visible:text-paper focus-visible:outline-none lg:inline-flex"
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
            }}
          >
            {nav.cta}
          </button>

          <div className="relative lg:hidden">
            <button
              ref={menuBtnRef}
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls={dropdownId}
              aria-label="Abrir menu de navegação"
              className="inline-flex min-h-11 items-center justify-center rounded-md px-3 text-ink transition-colors hover:text-signal focus-visible:text-signal focus-visible:outline-none"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
            </button>

            {mobileOpen && (
              <div
                ref={dropdownRef}
                id={dropdownId}
                role="menu"
                className="absolute right-0 top-[calc(100%+10px)] z-[60] w-[min(288px,calc(100vw-2rem))] overflow-hidden rounded-xl border border-border bg-white p-1.5 shadow-sm"
              >
                <div className="flex flex-col gap-[2px]">
                  {nav.links.map((item, index) => {
                    const isActive =
                      (pathname.startsWith("/solucoes") &&
                        item.href === "/solucoes") ||
                      activeHref === item.href;
                    return (
                      <button
                        key={item.href}
                        ref={index === 0 ? firstItemRef : undefined}
                        type="button"
                        role="menuitem"
                        aria-current={isActive ? "page" : undefined}
                        onClick={() => {
                          setMobileOpen(false);
                          navigate(item.href);
                        }}
                        className={cn(
                          "rounded-lg px-4 py-2.5 text-left text-[13.5px] font-body transition-colors duration-150",
                          "w-full bg-transparent text-[#3D4E63] hover:bg-ink hover:text-paper",
                          "focus-visible:bg-ink focus-visible:text-paper focus-visible:outline-none",
                          isActive && "bg-ink text-paper",
                        )}
                      >
                        {item.label}
                      </button>
                    );
                  })}

                  <div className="my-1.5 border-t border-border" />

                  <button
                    type="button"
                    role="menuitem"
                    onClick={() => {
                      setMobileOpen(false);
                      navigate("#contato");
                    }}
                    className="btn-ruler inline-flex w-full items-center justify-center rounded-md bg-ink px-4 py-3 text-[13.5px] font-medium text-paper transition-colors duration-150 hover:bg-ink/90 focus-visible:outline-none"
                    style={{
                      clipPath:
                        "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)",
                    }}
                  >
                    {nav.cta}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
