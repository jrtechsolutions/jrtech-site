import type { Metadata } from "next";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Política de privacidade",
  description:
    "Como a JR Technology Solutions trata dados pessoais, cookies e Analytics neste site, em conformidade com a LGPD.",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
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
          os dados pessoais conforme a Lei Geral de Proteção de Dados (LGPD) e
          demais normas aplicáveis.
        </p>

        <h2 className="pt-2 font-subheading text-lg font-semibold text-ink">
          Dados do formulário de contato
        </h2>
        <p>
          Os dados enviados pelo formulário de contato (nome, e-mail, empresa e
          mensagem) são utilizados exclusivamente para responder à sua
          solicitação e não são compartilhados com terceiros, exceto quando
          necessário para o funcionamento do serviço de e-mail.
        </p>

        <h2 className="pt-2 font-subheading text-lg font-semibold text-ink">
          Cookies e Analytics
        </h2>
        <p>
          Mediante o seu consentimento, utilizamos o Google Analytics 4 para
          medir visitas e uso do site. Esses cookies coletam informações como
          páginas acessadas, dispositivo/navegador e identificadores técnicos
          (incluindo endereço IP tratado pelo Google). O Analytics só é
          carregado depois que você aceita o banner de cookies. Se recusar, a
          navegação continua normalmente sem esse rastreamento.
        </p>
        <p>
          Você pode alterar a escolha apagando os dados do site no navegador
          (localStorage) e recarregando a página — o banner de consentimento
          será exibido novamente.
        </p>

        <h2 className="pt-2 font-subheading text-lg font-semibold text-ink">
          Seus direitos
        </h2>
        <p>
          Para exercer seus direitos (acesso, correção, exclusão ou informação
          sobre o tratamento) ou esclarecer dúvidas, entre em contato pelo
          e-mail{" "}
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
