import { Hero } from "@/components/sections/Hero";
import { Problema } from "@/components/sections/Problema";
import { Solucoes } from "@/components/sections/Solucoes";
import { ComoTrabalhamos } from "@/components/sections/ComoTrabalhamos";
import { Projetos } from "@/components/sections/Projetos";
import { Diferencial } from "@/components/sections/Diferencial";
import { Tecnologias } from "@/components/sections/Tecnologias";
import { Sobre } from "@/components/sections/Sobre";
import { Faq } from "@/components/sections/Faq";
import { CtaFinal } from "@/components/sections/CtaFinal";
import { FaqStructuredData } from "@/components/FaqStructuredData";

export default function HomePage() {
  return (
    <>
      <FaqStructuredData />
      <Hero />
      <Problema />
      <Solucoes />
      <ComoTrabalhamos />
      <Projetos />
      <Diferencial />
      <Tecnologias />
      <Faq />
      <Sobre />
      <CtaFinal />
    </>
  );
}
