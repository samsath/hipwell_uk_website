import z from 'zod/v4';

export const ServiceItemSchema = z.object({
  title: z.string(),
  body: z.string().optional().nullish(),
});

export const ServiceGridSchema = z.object({
  header: z.string(),
  description: z.string().optional().nullish(),
  background: z.string(),
  items: z.array(ServiceItemSchema),
});

export type ServiceGridType = z.infer<typeof ServiceGridSchema>;
