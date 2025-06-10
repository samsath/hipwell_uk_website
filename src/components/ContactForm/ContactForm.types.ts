import z from 'zod/v4';

export const ContactFormSchema = z.object({
  title: z.string(),
  body: z.string(),
  email: z.string(),
});

export type ContactFormType = z.infer<typeof ContactFormSchema>;
