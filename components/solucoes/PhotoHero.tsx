import Image from "next/image";
import Link from "next/link";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";

export type PhotoHeroPos =
  | "infraestrutura"
  | "seguranca"
  | "desenvolvimento"
  | "governanca"
  | "suporte"
  | "sobre";

type PhotoHeroProps = {
  kicker: string;
  title: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: PhotoHeroPos;
  waHref?: string;
  waLocation?: string;
  primaryHref?: string;
  showCtas?: boolean;
  overlayVariant?: "default" | "sobre";
};

function mobileSrcFrom(desktopSrc: string) {
  return desktopSrc.replace(/(\.[a-z]+)$/i, "-mobile$1");
}

export function PhotoHero({
  kicker,
  title,
  intro,
  imageSrc,
  imageAlt,
  objectPosition,
  waHref,
  waLocation = "photo_hero",
  primaryHref = "/#contato",
  showCtas = true,
  overlayVariant = "default",
}: PhotoHeroProps) {
  const mobileSrc = mobileSrcFrom(imageSrc);

  return (
    <section
      className="photo-hero"
      data-pos={objectPosition}
      data-overlay={overlayVariant === "sobre" ? "sobre" : undefined}
    >
      {/* Desktop / tablet landscape crop */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="bg bg-desktop"
        sizes="100vw"
      />
      {/* Mobile portrait crop focused on the person */}
      <Image
        src={mobileSrc}
        alt=""
        fill
        priority
        aria-hidden="true"
        className="bg bg-mobile"
        sizes="100vw"
      />
      <div className="overlay" aria-hidden="true" />
      <div className="content">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.06em] text-[#F5A25C]">
          {kicker}
        </span>

        <h1 className="mb-3.5 font-heading text-[clamp(1.6rem,3.6vw,2rem)] font-bold leading-[1.18] text-paper">
          {title}
        </h1>

        <p className="mb-7 max-w-[480px] text-[14.5px] leading-[1.65] text-[#C7D0DC]">
          {intro}
        </p>

        {showCtas ? (
          <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              href={primaryHref}
              className="inline-flex min-h-11 items-center justify-center bg-signal px-[26px] py-3 text-[14px] font-semibold text-ink transition-colors hover:bg-signal/90"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)",
              }}
            >
              Solicitar diagnóstico
            </Link>
            {waHref ? (
              <TrackedWhatsAppLink
                href={waHref}
                location={waLocation}
                className="inline-flex min-h-11 items-center justify-center border-[1.5px] border-white/30 bg-white/[0.06] px-[26px] py-3 text-[14px] font-medium text-paper backdrop-blur-[3px] transition-colors hover:border-white/50 hover:bg-white/10"
              >
                Falar no WhatsApp
              </TrackedWhatsAppLink>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
