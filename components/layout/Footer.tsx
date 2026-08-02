import Image from "next/image";
import Link from "next/link";
import { footer, site } from "@/data/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-paper py-10">
      <div className="site-container flex flex-col items-start justify-between gap-6 text-[12.5px] text-dimension md:flex-row md:items-center">
        <Image
          src="/logo-ink.png"
          alt="JR Technology Solutions logo"
          width={100}
          height={20}
          className="h-5 w-auto opacity-80"
        />
        <p>© {year} {site.name}. Todos os direitos reservados.</p>
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
    </footer>
  );
}
