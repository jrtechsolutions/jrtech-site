"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ctaFinal, site } from "@/data/content";
import { Kicker } from "@/components/ui/Kicker";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  contactSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const fieldClass =
  "mt-1.5 h-9 rounded-[3px] border-[#2C3E56] bg-[#121E30] text-sm text-paper placeholder:text-[#4A5A72] focus-visible:border-signal focus-visible:ring-signal/30";

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 6.045L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
    </svg>
  );
}

export function CtaFinal() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("idle");
    try {
      const contactUrl =
        process.env.NEXT_PUBLIC_CONTACT_API_URL ?? "/api/contact.php";

      const response = await fetch(contactUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          company: data.company,
          message: data.message,
          phone: "",
          website: data.website ?? "",
        }),
      });

      const payload = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || payload?.success === false) {
        throw new Error(payload?.message ?? "Request failed");
      }

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  const detailHref = (key: string, href?: string) => {
    if (key === "phone") {
      return `https://wa.me/${site.whatsapp}`;
    }
    return href;
  };

  return (
    <Section id="contato" inverted>
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Coluna esquerda — WhatsApp principal + dados */}
        <div>
          <Kicker>{ctaFinal.kicker}</Kicker>
          <h2 className="mb-5 max-w-[520px] font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-paper">
            {ctaFinal.title}
          </h2>

          <p className="mb-6 max-w-[420px] font-body text-[14.5px] leading-[1.75] text-[#8E9DB0]">
            {ctaFinal.text}
          </p>

          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ruler mb-8 inline-flex items-center gap-3 rounded-[3px] bg-signal px-8 py-4 text-[15px] font-medium text-ink hover:bg-signal/90"
          >
            <WhatsAppIcon />
            {ctaFinal.whatsappCta}
          </a>

          <ul className="space-y-3">
            {ctaFinal.details.map((detail) => {
              const href = detailHref(
                detail.key,
                "href" in detail ? detail.href : undefined,
              );

              return (
                <li
                  key={detail.key}
                  className="font-mono text-[12px] text-[#5A6B80]"
                >
                  <span className="text-signal">{detail.label}:</span>{" "}
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="text-[#8E9DB0] transition-colors hover:text-paper"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <span className="text-[#8E9DB0]">{detail.value}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Coluna direita — formulário, alinhado ao topo com o kicker */}
        <div>
          <div className="mb-4 h-[1.5px] w-full bg-[#2C3E56]" aria-hidden="true" />
          <p className="mb-5 font-body text-[14px] leading-relaxed text-[#5A6B80]">
            {ctaFinal.formIntro}
          </p>

          <div className="rounded-[3px] border border-[#2C3E56] bg-[#121E30]/40 p-5 sm:p-6">
            <span className="mb-4 block font-mono text-[11px] uppercase tracking-[0.06em] text-signal">
              {ctaFinal.form.kicker}
            </span>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative space-y-3.5"
              noValidate
            >
              <div className="honeypot-field" aria-hidden="true">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  tabIndex={-1}
                  autoComplete="off"
                  {...register("website")}
                />
              </div>

              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-[12px] text-paper">
                    {ctaFinal.form.name}
                  </Label>
                  <Input
                    id="name"
                    placeholder={ctaFinal.form.namePlaceholder}
                    className={fieldClass}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-error" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="email" className="text-[12px] text-paper">
                    {ctaFinal.form.email}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder={ctaFinal.form.emailPlaceholder}
                    className={fieldClass}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-error" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="company" className="text-[12px] text-paper">
                  {ctaFinal.form.company}
                </Label>
                <Input
                  id="company"
                  placeholder={ctaFinal.form.companyPlaceholder}
                  className={fieldClass}
                  {...register("company")}
                />
                {errors.company && (
                  <p className="mt-1 text-sm text-error" role="alert">
                    {errors.company.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="message" className="text-[12px] text-paper">
                  {ctaFinal.form.message}
                </Label>
                <Textarea
                  id="message"
                  rows={3}
                  placeholder={ctaFinal.form.messagePlaceholder}
                  className={cn(fieldClass, "min-h-[88px]")}
                  {...register("message")}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-error" role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-ruler mt-1 min-h-10 w-full rounded-[3px] border border-white/15 bg-ink text-paper hover:bg-[#121E30]"
              >
                {isSubmitting ? "Enviando..." : ctaFinal.form.submit}
              </Button>

              {status === "success" && (
                <p className="text-sm text-success" role="status">
                  {ctaFinal.form.success}
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-error" role="alert">
                  {ctaFinal.form.error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}
