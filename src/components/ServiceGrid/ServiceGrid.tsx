import { getBackgroundColour } from '@/helpers/colours.ts';
import { ServiceGridSchema, type ServiceGridType } from './ServiceGrid.types.ts';

export const ServiceGrid = (input: ServiceGridType) => {
  const result = ServiceGridSchema.safeParse(input);
  if (!result.success) {
    return <></>;
  }
  const { header, description, background, items } = result.data;

  const backgroundColour = getBackgroundColour(background);

  return (
    <section className={`py-20 pt-32 relative ${backgroundColour} text-black`}>
      <div className="container max-w-6xl mx-auto px-8">
        <h2
          className="text-5xl md:text-6xl lg:text-7xl font-black text-center mb-16 uppercase tracking-tight text-shadow-brutal-black">
          {header}
        </h2>
        {description && (
          <div
            className="*:text-lg *:text-black text-black leading-relaxed font-semibold ">
            {description}
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {items.map((item, number) => (
            <div
              key={'service-grid-' + number}
              className="service-card bg-black text-white p-12 border-8 border-white transition-all duration-300 relative overflow-hidden hover:-translate-y-4 hover:rotate-2 hover:shadow-brutal-white hover:text-black">
              <h3 className="text-3xl font-extrabold mb-6 uppercase tracking-wide">{item.title}</h3>
              <div className="*:text-lg leading-relaxed *:font-medium"
                   dangerouslySetInnerHTML={item.body ? { __html: item.body } : { __html: '' }}>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};
