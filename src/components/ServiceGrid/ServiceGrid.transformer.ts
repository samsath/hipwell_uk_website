import type { HomepageDocumentDataBodyServicegridSlice } from '@/models/types.generated.ts';
import type { ServiceGridType } from '@/components/ServiceGrid/ServiceGrid.types.ts';
import { asHTML, asText } from '@prismicio/client';
import { asBackgroundColour } from '@/helpers/colours.ts';

export const serviceGridTransformer = (raw: HomepageDocumentDataBodyServicegridSlice): ServiceGridType => ({
  header: asText(raw.primary.header1),
  description: asHTML(raw.primary.description1),
  background: asBackgroundColour(raw.primary.background),
  items: raw.items.map((item) => ({
    title: asText(item.title),
    body: asHTML(item.body1)
  }))
});
