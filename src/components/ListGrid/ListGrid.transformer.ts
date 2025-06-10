import type { HomepageDocumentDataBodyListGridSlice } from '@/models/types.generated.ts';
import type { ListGridItemType, ListGridType } from './ListGrid.types.ts';
import { asHTML, asText, asLink } from '@prismicio/client';
import { asBackgroundColour } from '@/helpers/colours.ts';
import { asShape } from '@/helpers/shape.ts';

export const listGridTransformer = (raw: HomepageDocumentDataBodyListGridSlice):ListGridType => ({
  header: asText(raw.primary.header1),
  description: asHTML(raw.primary.description1),
  background: asBackgroundColour(raw.primary.background),
  items: raw.items.map((item) => ({
    title: asText(item.title),
    bullet: asShape(item.bullet),
    link: asLink(item.link),
    list: asHTML(item.list)
  } as ListGridItemType))
});
