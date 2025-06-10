import z from 'zod/v4';

export const ListGridItemSchema = z.object({
  title: z.string(),
  list: z.string(),
  bullet: z.string(),
  link: z.string().optional().nullish(),
});

export const ListGridSchema = z.object({
  header: z.string(),
  description: z.string().optional().nullish(),
  background: z.string(),
  items: z.array(ListGridItemSchema),
});

export type ListGridType = z.infer<typeof ListGridSchema>;
export type ListGridItemType = z.infer<typeof ListGridItemSchema>;
