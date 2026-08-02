import type { Metadata } from "next";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Infraestrutura, segurança e soluções digitais",
  description: site.description,
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-[720px] px-6 py-16 md:px-8">
      <h1 className="mb-6 font-heading text-3xl font-bold text-ink">
        Política de privacidade
      </h1>
      <div className="space-y-4 text-[15px] leading-relaxed text-ink-2">
        <p>
          A {site.name} respeita a privacidade dos visitantes do site e trata
          os dados pessoais conforme a legislação aplicável.
        </p>
        <p>
          Os dados enviados pelo formulário de contato são utilizados
          exclusivamente para responder à sua solicitação e não são
          compartilhados com terceiros, exceto quando necessário para o
          funcionamento do serviço de e-mail.
        </p>
        <p>
          Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento
          de dados, entre em contato pelo e-mail{" "}
          <a
            href={`mailto:${site.email}`}
            className="text-ink underline underline-offset-2"
          >
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
