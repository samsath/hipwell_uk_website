import type { HomepageDocumentDataBodyLineSlice } from '@/models/types.generated.ts';
import type { LineType } from '@/components/Line/Line.types.ts';
import { asBackgroundColour } from '@/helpers/colours.ts';

export const lineTransformer = (raw: HomepageDocumentDataBodyLineSlice): LineType => ({
  colour: asBackgroundColour(raw.primary.colour),
});
