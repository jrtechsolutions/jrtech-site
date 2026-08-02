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
  "mt-1.5 h-10 rounded-[3px] border-[#2C3E56] bg-[#121E30] text-paper placeholder:text-[#4A5A72] focus-visible:border-signal focus-visible:ring-signal/30";

function ContactIcon({ type }: { type: string }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    "aria-hidden": true as const,
  };

  switch (type) {
    case "phone":
      return (
        <svg {...common}>
          <path
            d="M3.2 2.5h2.1l.9 2.3-1.3 1.3a8.5 8.5 0 0 0 3.9 3.9l1.3-1.3 2.3.9v2.1a1.2 1.2 0 0 1-1.3 1.2A10.2 10.2 0 0 1 2 3.8a1.2 1.2 0 0 1 1.2-1.3Z"
            stroke="#8E9DB0"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "email":
      return (
        <svg {...common}>
          <rect
            x="2"
            y="3.5"
            width="12"
            height="9"
            rx="1"
            stroke="#8E9DB0"
            strokeWidth="1.1"
          />
          <path
            d="M2.5 4.5 8 8.5l5.5-4"
            stroke="#8E9DB0"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path
            d="M8 14s4.5-3.4 4.5-7A4.5 4.5 0 0 0 3.5 7c0 3.6 4.5 7 4.5 7Z"
            stroke="#8E9DB0"
            strokeWidth="1.1"
            strokeLinejoin="round"
          />
          <circle cx="8" cy="7" r="1.4" stroke="#8E9DB0" strokeWidth="1.1" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="5.5" stroke="#8E9DB0" strokeWidth="1.1" />
          <path
            d="M8 5v3.2l2 1.3"
            stroke="#8E9DB0"
            strokeWidth="1.1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
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
      <Kicker>{ctaFinal.kicker}</Kicker>
      <h2 className="mb-6 max-w-[640px] font-heading text-[clamp(1.5rem,3vw,1.875rem)] font-bold text-paper">
        {ctaFinal.title}
      </h2>

      <div className="mb-10 h-px w-full bg-[#2C3E56]" aria-hidden="true" />

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Coluna esquerda — texto + dados */}
        <div>
          <p className="mb-10 max-w-[480px] font-body text-[14.5px] leading-[1.75] text-[#8E9DB0]">
            {ctaFinal.text}
          </p>

          <ul className="border-t border-[#2C3E56]">
            {ctaFinal.details.map((detail) => {
              const href = detailHref(
                detail.key,
                "href" in detail ? detail.href : undefined,
              );
              const valueClass =
                "font-body text-[14.5px] text-paper break-all sm:break-normal";

              return (
                <li
                  key={detail.key}
                  className="flex items-start gap-3.5 border-b border-[#2C3E56] py-4"
                >
                  <span
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-[3px] border border-[#2C3E56]"
                    aria-hidden="true"
                  >
                    <ContactIcon type={detail.key} />
                  </span>
                  <div className="min-w-0">
                    <span className="mb-1 block font-mono text-[10px] uppercase tracking-[0.06em] text-[#8E9DB0]">
                      {detail.label}
                    </span>
                    {href ? (
                      <a
                        href={href}
                        {...(href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={cn(
                          valueClass,
                          "transition-colors hover:text-signal",
                        )}
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <span className={valueClass}>{detail.value}</span>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Coluna direita — formulário */}
        <div className="rounded-[3px] border border-[#2C3E56] bg-[#121E30]/40 p-6 sm:p-8">
          <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.06em] text-signal">
            {ctaFinal.form.kicker}
          </span>
          <p className="mb-6 font-body text-[13.5px] text-[#8E9DB0]">
            {ctaFinal.form.subtitle}
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
            <div className="hidden" aria-hidden="true">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                tabIndex={-1}
                autoComplete="off"
                {...register("website")}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name" className="text-[13px] text-paper">
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
                <Label htmlFor="email" className="text-[13px] text-paper">
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
              <Label htmlFor="company" className="text-[13px] text-paper">
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
              <Label htmlFor="message" className="text-[13px] text-paper">
                {ctaFinal.form.message}
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder={ctaFinal.form.messagePlaceholder}
                className={cn(fieldClass, "min-h-[110px]")}
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
              className="btn-ruler mt-2 min-h-11 w-full rounded-[3px] bg-signal text-ink hover:bg-signal/90"
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
    </Section>
  );
}
