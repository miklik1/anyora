import { z } from "zod";

export const FormDataSchema = z.object({
  name: z.string().nonempty("Jméno je povinné."),
  message: z
    .string()
    .nonempty("Zpráva je povinná.")
    .min(6, { message: "Zpráva musí mít nejméně 6 znaků." }),
});

export const ContactFormSchema = z.object({
  name: z.string().nonempty("Jméno je povinné."),
  email: z.string().nonempty("E-mail je povinný").email("Neplatný e-mail."),
  message: z
    .string()
    .nonempty("Zpráva je povinná.")
    .min(6, { message: "Zpráva musí mít nejméně 6 znaků." }),
});

export const NewsletterFormSchema = z.object({
  email: z.string().nonempty("E-mail je povinný").email("Neplatný e-mail."),
});
