import z from 'zod/v4';

export const TextBlockSchema = z.object({
  header: z.string(),
  body: z.string(),
  hasBorder: z.boolean(),
  background: z.string(),
});

export type TextBlockType = z.infer<typeof TextBlockSchema>;
