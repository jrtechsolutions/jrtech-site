import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { checkRateLimit } from "@/lib/rate-limit";
import { sanitizeText } from "@/lib/sanitize";

function getClientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() ?? "unknown";
  }
  return request.headers.get("x-real-ip") ?? "unknown";
}

type PhpContactResponse = {
  success?: boolean;
  message?: string;
};

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rateLimit = checkRateLimit(ip);

    if (!rateLimit.success) {
      return NextResponse.json(
        { error: "Muitas tentativas. Tente novamente mais tarde." },
        { status: 429 },
      );
    }

    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Dados inválidos. Verifique os campos e tente novamente." },
        { status: 400 },
      );
    }

    const { name, email, company, message, website } = parsed.data;

    // Honeypot — responde sucesso sem encaminhar
    if (website) {
      return NextResponse.json({ success: true });
    }

    const contactApiUrl = process.env.CONTACT_API_URL;
    const contactApiToken = process.env.CONTACT_API_TOKEN;

    if (!contactApiUrl) {
      console.error("CONTACT_API_URL não configurada");
      return NextResponse.json(
        { error: "Não foi possível processar sua solicitação." },
        { status: 500 },
      );
    }

    const payload = {
      name: sanitizeText(name),
      email: sanitizeText(email),
      company: sanitizeText(company),
      message: sanitizeText(message),
      phone: "",
      website: "",
    };

    const headers: HeadersInit = {
      "Content-Type": "application/json",
      Accept: "application/json",
    };

    // Token obrigatório no proxy server-side (Origin não passa na allowlist do PHP)
    if (contactApiToken) {
      headers["X-JR-Contact-Token"] = contactApiToken;
    }

    const phpResponse = await fetch(contactApiUrl, {
      method: "POST",
      headers,
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    let phpBody: PhpContactResponse = {};
    try {
      phpBody = (await phpResponse.json()) as PhpContactResponse;
    } catch {
      phpBody = {};
    }

    if (phpResponse.status === 429) {
      return NextResponse.json(
        {
          error:
            phpBody.message ??
            "Muitas tentativas. Aguarde alguns minutos.",
        },
        { status: 429 },
      );
    }

    if (phpResponse.status === 401) {
      console.error("Contact PHP: token inválido ou ausente");
      return NextResponse.json(
        { error: "Não foi possível processar sua solicitação." },
        { status: 500 },
      );
    }

    // O PHP responde 200 mesmo quando o SMTP falha mas o lead foi salvo
    if (phpResponse.ok && phpBody.success !== false) {
      return NextResponse.json({
        success: true,
        message: phpBody.message ?? "Mensagem enviada com sucesso!",
      });
    }

    console.error("Contact PHP error:", {
      status: phpResponse.status,
      message: phpBody.message,
    });

    return NextResponse.json(
      {
        error:
          phpBody.message ??
          "Não foi possível processar sua solicitação.",
      },
      { status: phpResponse.status >= 400 ? phpResponse.status : 500 },
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Não foi possível processar sua solicitação." },
      { status: 500 },
    );
  }
}
