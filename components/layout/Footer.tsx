import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/data/content";
import { services } from "@/data/services";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-paper py-10">
      <div className="site-container flex flex-col gap-8">
        <div className="flex flex-col items-start justify-between gap-6 text-[12.5px] text-dimension md:flex-row md:items-center">
          <Image
            src="/logo-ink.png"
            alt="JR Technology Solutions logo"
            width={100}
            height={20}
            className="h-5 w-auto opacity-80"
          />
          <p>
            © {year} {site.name}. {footer.locationNote}. Todos os direitos
            reservados.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <Link
              href={footer.privacyHref}
              className="transition-colors hover:text-ink"
            >
              {footer.privacyLabel}
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="transition-colors hover:text-ink"
            >
              {site.email}
            </a>
          </div>
        </div>

        <nav
          aria-label="Soluções"
          className="flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-6 text-[12px] text-dimension"
        >
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/solucoes/${service.slug}`}
              className="transition-colors hover:text-ink"
            >
              {service.shortTitle}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
