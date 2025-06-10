import { TextBlockSchema, type TextBlockType } from '@/components/TextBlock/TextBlock.types.ts';
import { getBackgroundColour } from '@/helpers/colours.ts';

export const TextBlock = (input: TextBlockType) => {
  const result = TextBlockSchema.safeParse(input);
  if (!result.success) {
    return <></>;
  }
  const { header, body, hasBorder, background } = result.data;
  const backgroundColour = getBackgroundColour(background);

  return (
    <section className={`section philosophical ${backgroundColour}`}>
      <div className="philosophy">
        <h3>{header}</h3>
        <div dangerouslySetInnerHTML={body ? { __html: body } : { __html: '' }}></div>
      </div>
    </section>
  );
};
