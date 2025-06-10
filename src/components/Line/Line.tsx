import { LineSchema, type LineType } from '@/components/Line/Line.types.ts';
import { getBackgroundColour } from '@/helpers/colours.ts';

export const Line = (input: LineType) => {
  const result = LineSchema.safeParse(input);
  if (!result.success) {
    return <></>;
  }
  const { colour } = result.data;
  const backgroundColour = getBackgroundColour(colour);

  return (
    <div className={`accent-line ${backgroundColour}`}></div>
  );
};
