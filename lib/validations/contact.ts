import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Informe seu nome completo")
    .max(100, "Nome muito longo")
    .transform((val) => val.trim()),
  email: z
    .string()
    .email("Informe um e-mail válido")
    .max(254, "E-mail muito longo")
    .transform((val) => val.trim().toLowerCase()),
  company: z
    .string()
    .min(2, "Informe o nome da empresa")
    .max(120, "Nome da empresa muito longo")
    .transform((val) => val.trim()),
  message: z
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(2000, "Mensagem muito longa")
    .transform((val) => val.trim()),
  website: z
    .string()
    .optional()
    .refine((val) => !val || val.length === 0, "Campo inválido"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
