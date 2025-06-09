import type { HomepageDocumentDataBodyTextBlockSlice } from '@/models/types.generated.ts';
import type { TextBlockType } from './TextBlock.types.ts';
import { asHTML, asText } from '@prismicio/client';
import { asBool } from '@/helpers/values.ts';
import { asBackgroundColour } from '@/helpers/colours.ts';

export const textBlockTransformer = (raw: HomepageDocumentDataBodyTextBlockSlice):TextBlockType => ({
  header: asText(raw.primary.header1),
  body: asHTML(raw.primary.body1),
  hasBorder: asBool(raw.primary.border),
  background: asBackgroundColour(raw.primary.background),
});
