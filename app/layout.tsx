import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/data/content";
import "./globals.css";

const archivoExpanded = Archivo({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-archivo-expanded",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["600"],
  variable: "--font-archivo",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-public-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Infraestrutura, segurança e soluções digitais`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/logo-original.png",
        width: 1200,
        height: 630,
        alt: `${site.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/logo-original.png"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/logo-original.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${archivoExpanded.variable} ${archivo.variable} ${publicSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-paper font-body text-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
