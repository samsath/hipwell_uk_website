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
    <section className={`py-10 relative ${backgroundColour} text-black`}>
      <div className="container max-w-6xl mx-auto px-8">
        <div
          className="text-center bg-black text-white my-16 p-16 border-8 border-white shadow-brutal-green-lg -rotate-1">
          <h3
            className="text-3xl md:text-4xl lg:text-5xl font-black mb-8 text-bold-orange uppercase text-shadow-brutal-black-sm">
            { header }
          </h3>
          <div className="text-xl font-semibold max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={body ? { __html: body } : { __html: '' }}>
          </div>
        </div>
      </div>
    </section>
      )
    }
