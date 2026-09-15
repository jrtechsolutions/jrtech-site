import Image from "next/image";
import Link from "next/link";
import { TrackedWhatsAppLink } from "@/components/analytics/TrackedWhatsAppLink";
import { CompareSection } from "@/components/solucoes/CompareSection";
import { PhotoHero } from "@/components/solucoes/PhotoHero";
import { ProcessTimeline } from "@/components/solucoes/ProcessTimeline";
import { ProjectsMarquee } from "@/components/solucoes/ProjectsMarquee";
import { site } from "@/data/content";
import {
  serviceWhatsAppMessage,
  type ServicePage,
} from "@/data/services";

type ServicePageContentProps = {
  service: ServicePage;
};

export function ServicePageContent({ service }: ServicePageContentProps) {
  const waHref = `https://wa.me/${site.whatsapp}?text=${serviceWhatsAppMessage}`;

  return (
    <div className="bg-paper">
      <PhotoHero
        kicker={service.kicker}
        title={service.title}
        intro={service.intro}
        imageSrc={service.heroImage}
        imageAlt={service.heroAlt}
        objectPosition={service.heroObjectPosition}
        waHref={waHref}
        waLocation={`service_${service.slug}`}
      />

      {service.proof?.kind === "marquee" ? (
        <ProjectsMarquee
          items={service.proof.items}
          title={service.proof.title}
          lead={service.proof.lead}
        />
      ) : null}

      {service.proof?.kind === "image" ? (
        <ProofImageSection proof={service.proof} />
      ) : null}

      {service.processSteps ? (
        <ProcessTimeline
          steps={service.processSteps}
          title={service.processTitle}
          lead={service.processLead}
        />
      ) : null}

      {service.flowSteps ? (
        <FlowSection
          title={service.flowTitle!}
          lead={service.flowLead!}
          note={service.flowNote}
          steps={service.flowSteps}
        />
      ) : null}

      {service.chatMock ? (
        <ChatSection
          title={service.chatTitle!}
          lead={service.chatLead!}
          bar={service.chatBar!}
          messages={service.chatMock}
        />
      ) : null}

      {service.includes ? (
        <IncludesSection
          title={service.includesTitle ?? "O que inclui"}
          lead={service.includesLead}
          items={service.includes}
        />
      ) : null}

      {service.coverItems ? (
        <IncludesSection
          title={service.coverTitle ?? "O que cobrimos"}
          lead={service.coverLead}
          items={service.coverItems}
        />
      ) : null}

      {service.monitorItems ? (
        <MonitorSection
          title={service.monitorTitle!}
          lead={service.monitorLead!}
          items={service.monitorItems}
        />
      ) : null}

      {service.frameworks ? (
        <FrameworksSection
          title={service.frameworksTitle!}
          lead={service.frameworksLead!}
          items={service.frameworks}
        />
      ) : null}

      {service.structure ? (
        <StructureSection
          title={service.structureTitle!}
          lead={service.structureLead!}
          diagram={service.structure}
        />
      ) : null}

      {service.outcomes ? (
        <section className="border-b border-border py-14 md:py-16">
          <div className="site-container">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] lg:gap-12">
              <h2 className="font-heading text-[clamp(1.35rem,2.5vw,1.75rem)] font-bold leading-snug text-ink lg:pt-1">
                Resultado esperado
              </h2>
              <ul className="space-y-4">
                {service.outcomes.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-md border border-border bg-white p-5"
                  >
                    <h3 className="mb-1.5 font-subheading text-[15px] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-ink-2">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : null}

      <CompareSection
        title={service.compare.title}
        lead={service.compare.lead}
        before={service.compare.before}
        after={service.compare.after}
      />

      {service.showFinalCta === false ? null : (
        <section className="border-b border-border py-14 md:py-16">
          <div className="mx-auto max-w-[680px] px-6 md:px-8">
            <div className="rounded-md border border-border bg-white p-6 md:p-8">
              <h2 className="mb-2 font-subheading text-base font-semibold text-ink">
                Quer um diagnóstico deste pilar?
              </h2>
              <p className="mb-5 text-[14px] leading-relaxed text-ink-2">
                Conversa de 30–40 minutos, presencial em São Paulo ou remota —
                sem custo e sem compromisso. Você fala direto com quem executa.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/#contato"
                  className="btn-ruler inline-flex min-h-11 items-center justify-center bg-ink px-6 text-[14px] font-medium text-paper transition-colors hover:bg-ink/90"
                >
                  Solicitar diagnóstico
                </Link>
                <TrackedWhatsAppLink
                  href={waHref}
                  location={`service_${service.slug}_cta`}
                  className="inline-flex min-h-11 items-center justify-center px-2 text-[14px] text-ink-2 underline-offset-2 transition-colors hover:text-ink hover:underline"
                >
                  Falar no WhatsApp
                </TrackedWhatsAppLink>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

function ProofImageSection({
  proof,
}: {
  proof: Extract<ServicePage["proof"], { kind: "image" }>;
}) {
  if (!proof) return null;

  return (
    <section className="border-b border-border bg-ink py-10 md:py-14">
      <div className="site-container">
        {proof.title ? (
          <div className="mb-6 max-w-[640px]">
            <h2 className="mb-2 font-subheading text-lg font-semibold text-paper">
              {proof.title}
            </h2>
            {proof.text ? (
              <p className="text-[14px] leading-relaxed text-[#8E9DB0]">
                {proof.text}
              </p>
            ) : null}
          </div>
        ) : null}
        <div className="overflow-hidden rounded-md border border-white/10">
          <div className="relative aspect-[21/9] min-h-[220px] w-full md:min-h-[320px]">
            <Image
              src={proof.src}
              alt={proof.alt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1520px) 100vw, 1520px"
            />
          </div>
        </div>
        {proof.caption ? (
          <p className="mt-4 flex items-center gap-2 font-mono text-[11px] text-[#8E9DB0]">
            {proof.captionDot ? (
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-success"
                aria-hidden="true"
              />
            ) : null}
            {proof.caption}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function IncludesSection({
  title,
  lead,
  items,
}: {
  title: string;
  lead?: string;
  items: NonNullable<ServicePage["includes"]>;
}) {
  return (
    <section className="border-b border-border py-14 md:py-16">
      <div className="mx-auto max-w-[680px] px-6 md:px-8">
        <h2 className="mb-3 font-subheading text-lg font-semibold text-ink">
          {title}
        </h2>
        {lead ? (
          <p className="mb-8 text-[14.5px] leading-relaxed text-ink-2">{lead}</p>
        ) : (
          <div className="mb-8" />
        )}
        <ol className="space-y-7">
          {items.map((item, index) => (
            <li key={item.title} className="flex gap-4">
              <span className="mt-0.5 font-mono text-[12px] tabular-nums text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="mb-1.5 font-subheading text-[15.5px] font-semibold text-ink">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-ink-2">
                  {item.description}
                </p>
                {item.stack?.length ? (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-border bg-[#F4F7F9] px-2.5 py-1 font-mono text-[10px] text-ink-2"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function FrameworksSection({
  title,
  lead,
  items,
}: {
  title: string;
  lead: string;
  items: NonNullable<ServicePage["frameworks"]>;
}) {
  return (
    <section className="border-b border-border py-14 md:py-16">
      <div className="site-container">
        <div className="mb-8 max-w-[640px]">
          <h2 className="mb-2 font-subheading text-lg font-semibold text-ink">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-2">{lead}</p>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item.name}
              className="rounded-md border border-border bg-white p-5"
            >
              <span className="mb-2 block font-mono text-[10px] uppercase tracking-[0.06em] text-signal">
                {item.tag}
              </span>
              <h3 className="mb-1.5 font-subheading text-[15px] font-semibold text-ink">
                {item.name}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-ink-2">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StructureSection({
  title,
  lead,
  diagram,
}: {
  title: string;
  lead: string;
  diagram: NonNullable<ServicePage["structure"]>;
}) {
  return (
    <section className="border-b border-border py-14 md:py-16">
      <div className="site-container">
        <div className="mx-auto max-w-[720px]">
          <div className="mb-8 max-w-[640px]">
            <h2 className="mb-2 font-subheading text-lg font-semibold text-ink">
              {title}
            </h2>
            <p className="text-[14.5px] leading-relaxed text-ink-2">{lead}</p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="rounded-md border border-ink bg-ink px-6 py-3 text-center font-subheading text-[14px] font-semibold text-paper">
              {diagram.top}
            </div>
            <div className="h-6 w-px bg-border" aria-hidden="true" />
            <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
              {diagram.middle.map((node) => (
                <div
                  key={node.title}
                  className="rounded-md border border-border bg-white px-4 py-4 text-center"
                >
                  <p className="font-subheading text-[14px] font-semibold text-ink">
                    {node.title}
                  </p>
                  <p className="mt-1 font-mono text-[11px] text-dimension">
                    {node.sub}
                  </p>
                </div>
              ))}
            </div>
            <div className="h-6 w-px bg-border" aria-hidden="true" />
            <div className="rounded-md border border-signal/40 bg-[#fff7f0] px-6 py-3 text-center font-mono text-[12px] text-ink">
              {diagram.result}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowSection({
  title,
  lead,
  note,
  steps,
}: {
  title: string;
  lead: string;
  note?: string;
  steps: string[];
}) {
  return (
    <section className="border-b border-border py-14 md:py-16">
      <div className="site-container">
        <div className="mb-8 max-w-[640px]">
          <h2 className="mb-2 font-subheading text-lg font-semibold text-ink">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-2">{lead}</p>
        </div>

        <ol className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex items-center gap-3 rounded-md border border-border bg-white px-4 py-4"
            >
              <span className="font-mono text-[12px] text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[14px] font-medium text-ink">{step}</span>
            </li>
          ))}
        </ol>

        {note ? (
          <p className="max-w-[640px] text-[13.5px] leading-relaxed text-ink-2">
            {note}
          </p>
        ) : null}
      </div>
    </section>
  );
}

function ChatSection({
  title,
  lead,
  bar,
  messages,
}: {
  title: string;
  lead: string;
  bar: string;
  messages: NonNullable<ServicePage["chatMock"]>;
}) {
  return (
    <section className="border-b border-border py-14 md:py-16">
      <div className="site-container">
        <div className="mb-8 max-w-[640px]">
          <h2 className="mb-2 font-subheading text-lg font-semibold text-ink">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-2">{lead}</p>
        </div>

        <div className="mx-auto max-w-[480px] overflow-hidden rounded-md border border-border bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-border bg-[#F4F7F9] px-4 py-3">
            <span
              className="h-2 w-2 rounded-full bg-success"
              aria-hidden="true"
            />
            <span className="font-mono text-[11px] text-ink-2">{bar}</span>
          </div>
          <div className="space-y-3 p-4">
            {messages.map((msg) => (
              <div
                key={`${msg.time}-${msg.text.slice(0, 12)}`}
                className={
                  msg.from === "jr"
                    ? "ml-6 rounded-md bg-ink px-3 py-2 text-paper"
                    : "mr-6 rounded-md bg-[#F4F7F9] px-3 py-2 text-ink"
                }
              >
                <p className="text-[13.5px] leading-relaxed">{msg.text}</p>
                <p
                  className={
                    msg.from === "jr"
                      ? "mt-1 font-mono text-[10px] text-white/50"
                      : "mt-1 font-mono text-[10px] text-dimension"
                  }
                >
                  {msg.time}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MonitorSection({
  title,
  lead,
  items,
}: {
  title: string;
  lead: string;
  items: string[];
}) {
  return (
    <section className="border-b border-border py-14 md:py-16">
      <div className="site-container">
        <div className="mb-8 max-w-[640px]">
          <h2 className="mb-2 font-subheading text-lg font-semibold text-ink">
            {title}
          </h2>
          <p className="text-[14.5px] leading-relaxed text-ink-2">{lead}</p>
        </div>
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 rounded-md border border-border bg-white px-3 py-3"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-success"
                aria-hidden="true"
              />
              <span className="font-mono text-[11px] text-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
