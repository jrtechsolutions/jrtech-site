import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, Public_Sans } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import { CookieConsent } from "@/components/CookieConsent";
import StructuredData from "@/components/StructuredData";
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
    default:
      "JR Technology Solutions — Infraestrutura, segurança e soluções digitais",
    template: "%s | JR Technology Solutions",
  },
  description: site.description,
  keywords: [
    "TI para empresas São Paulo",
    "infraestrutura de TI",
    "segurança da informação PME",
    "consultoria de TI",
    "desenvolvimento de sistemas sob medida",
    "governança de tecnologia",
  ],
  authors: [{ name: "JR Technology Solutions" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.jrtechnologysolutions.com.br",
    siteName: "JR Technology Solutions",
    title:
      "JR Technology Solutions — Infraestrutura, segurança e soluções digitais",
    description:
      "TI para pequenas e médias empresas em São Paulo — diagnóstico, implementação e acompanhamento em infraestrutura, segurança e desenvolvimento.",
    images: [
      {
        url: "/logo-original.png",
        width: 1024,
        height: 1024,
        alt: "JR Technology Solutions",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "JR Technology Solutions",
    description:
      "TI para pequenas e médias empresas em São Paulo — diagnóstico, implementação e acompanhamento.",
    images: ["/logo-original.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
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
        <StructuredData />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
