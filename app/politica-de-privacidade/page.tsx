import type { Metadata } from "next";
import { site } from "@/data/content";

export const metadata: Metadata = {
  title: "Política de Privacidade | JR Tech",
  description:
    "A JR Technology Solutions respeita a sua privacidade. Esta política explica quais dados coletamos, para que servem, e quais direitos você tem (LGPD).",
  alternates: {
    canonical: "/politica-de-privacidade",
  },
};

const sections = [
  {
    n: "01",
    title: "Quem é responsável pelos seus dados",
    paragraphs: [
      "JR Technology Solutions, com atuação em São Paulo, SP.",
      `Contato: ${site.email}`,
    ],
  },
  {
    n: "02",
    title: "Quais dados coletamos",
    paragraphs: [
      "Dados de navegação. Quando você visita o site e aceita o uso de cookies, coletamos dados de navegação através do Google Analytics: páginas visitadas, tempo de permanência, tipo de dispositivo e navegador, e localização aproximada (cidade/estado, com base no IP). Esses dados são anônimos e agregados, não identificam você diretamente.",
      "Dados que você fornece voluntariamente. Quando você preenche o formulário de contato ou envia mensagem pelo WhatsApp, coletamos nome, e-mail, empresa (quando informada), telefone (no caso do WhatsApp) e o conteúdo da mensagem.",
      "Não coletamos dados sensíveis (como dados de saúde, origem racial, opinião política) e não solicitamos esse tipo de informação em nenhum canal.",
    ],
  },
  {
    n: "03",
    title: "Por que coletamos esses dados",
    list: [
      "Dados de navegação: para entender como o site é usado e melhorar o conteúdo e a experiência de quem visita.",
      "Dados de contato: para responder sua solicitação, agendar o diagnóstico técnico, e elaborar proposta quando aplicável.",
    ],
    note: "Não usamos seus dados para enviar propaganda não solicitada, nem vendemos ou alugamos seus dados para terceiros.",
  },
  {
    n: "04",
    title: "Com quem compartilhamos seus dados",
    paragraphs: [
      "Os dados de navegação são processados pelo Google Analytics (Google LLC), sujeito à própria política de privacidade do Google. Não compartilhamos seus dados de contato com nenhum terceiro, exceto quando exigido por lei ou ordem judicial.",
    ],
  },
  {
    n: "05",
    title: "Cookies",
    paragraphs: [
      "Usamos cookies para o Google Analytics funcionar. Ao visitar o site pela primeira vez, você pode aceitar ou recusar esse uso através do aviso exibido na tela. Se você recusar, nenhum dado de navegação é coletado. Você pode alterar essa escolha a qualquer momento limpando os cookies do seu navegador.",
    ],
  },
  {
    n: "06",
    title: "Por quanto tempo guardamos seus dados",
    paragraphs: [
      "Dados de formulário de contato são mantidos pelo tempo necessário para atender sua solicitação e, depois disso, por até 6 meses para fins de histórico comercial, salvo se você solicitar exclusão antes. Dados de navegação seguem o período padrão de retenção do Google Analytics.",
    ],
  },
  {
    n: "07",
    title: "Seus direitos",
    lead: "De acordo com a LGPD, você pode a qualquer momento:",
    list: [
      "Confirmar se tratamos algum dado seu",
      "Pedir acesso aos dados que temos sobre você",
      "Pedir correção de dado incompleto ou desatualizado",
      "Pedir a exclusão dos seus dados",
      "Revogar o consentimento para uso de cookies/Analytics",
      "Pedir a portabilidade dos seus dados para outro fornecedor",
    ],
    note: `Para exercer qualquer um desses direitos, entre em contato pelo e-mail ${site.email}. Respondemos em até 15 dias úteis.`,
  },
  {
    n: "08",
    title: "Segurança",
    paragraphs: [
      "Adotamos medidas técnicas razoáveis para proteger os dados que coletamos contra acesso não autorizado, perda ou alteração indevida.",
    ],
  },
  {
    n: "09",
    title: "Alterações nesta política",
    paragraphs: [
      "Esta política pode ser atualizada periodicamente. A data da última atualização estará sempre indicada no topo desta página.",
    ],
  },
] as const;

export default function PrivacyPage() {
  return (
    <div className="border-b border-border bg-paper">
      <div className="mx-auto max-w-[720px] px-6 py-14 md:px-8 md:py-16">
        <span className="mb-4 block font-mono text-xs uppercase tracking-[0.07em] text-signal">
          Legal
        </span>
        <h1 className="mb-3 font-heading text-[clamp(1.75rem,4vw,2.25rem)] font-bold text-ink">
          Política de Privacidade
        </h1>
        <p className="mb-6 font-mono text-[12px] text-dimension">
          Última atualização: 15 de setembro de 2026
        </p>
        <p className="mb-10 text-[15px] leading-relaxed text-ink-2">
          A {site.name} respeita a sua privacidade. Esta política explica quais
          dados coletamos quando você visita nosso site ou entra em contato
          conosco, para que servem, e quais direitos você tem sobre eles, em
          conformidade com a Lei Geral de Proteção de Dados (LGPD, Lei nº
          13.709/2018).
        </p>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.n}>
              <h2 className="mb-3 flex gap-3 font-subheading text-lg font-semibold text-ink">
                <span className="font-mono text-[12px] text-signal">
                  {section.n}
                </span>
                <span>{section.title}</span>
              </h2>

              {"lead" in section && section.lead ? (
                <p className="mb-3 text-[14.5px] leading-relaxed text-ink-2">
                  {section.lead}
                </p>
              ) : null}

              {"paragraphs" in section && section.paragraphs
                ? section.paragraphs.map((p) => (
                    <p
                      key={p}
                      className="mb-3 text-[14.5px] leading-relaxed text-ink-2 last:mb-0"
                    >
                      {p.includes(site.email) ? (
                        <>
                          {p.split(site.email)[0]}
                          <a
                            href={`mailto:${site.email}`}
                            className="text-ink underline underline-offset-2"
                          >
                            {site.email}
                          </a>
                          {p.split(site.email)[1]}
                        </>
                      ) : (
                        p
                      )}
                    </p>
                  ))
                : null}

              {"list" in section && section.list ? (
                <ul className="mb-3 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-ink-2">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {"note" in section && section.note ? (
                <p className="text-[14px] leading-relaxed text-ink-2">
                  {section.note.includes(site.email) ? (
                    <>
                      {section.note.split(site.email)[0]}
                      <a
                        href={`mailto:${site.email}`}
                        className="text-ink underline underline-offset-2"
                      >
                        {site.email}
                      </a>
                      {section.note.split(site.email)[1]}
                    </>
                  ) : (
                    section.note
                  )}
                </p>
              ) : null}
            </section>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-border bg-white p-5">
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.06em] text-dimension">
            Dúvidas sobre esta política
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-[14.5px] text-ink underline underline-offset-2"
          >
            {site.email}
          </a>
        </div>
      </div>
    </div>
  );
}
