import type { HomepageDocumentDataBodyContactformSlice } from '@/models/types.generated.ts';
import { asText, asHTML } from '@prismicio/client';
import type { ContactFormType } from '@/components/ContactForm/ContactForm.types.ts';

export const contactFormTransformer = (raw: HomepageDocumentDataBodyContactformSlice): ContactFormType => ({
  title: asText(raw.primary.title),
  body: asHTML(raw.primary.body1),
  email: asText(raw.primary.email_name)
});
