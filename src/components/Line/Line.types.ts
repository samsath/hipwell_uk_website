import z from 'zod/v4';

export const LineSchema = z.object({
  colour: z.string(),
});

export type LineType = z.infer<typeof LineSchema>;
