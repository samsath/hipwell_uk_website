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
  <section className={`section ${backgroundColour}`}>
    <div className="container">
      <h2 className="section-title">{header}</h2>
      {description && (<div className="section-description">{description}</div>)}
      <div className="services-grid">
        {items.map((item, number) => {
          const colors = ['green', 'blue', 'orange'];
          const colorClass = colors[number % colors.length];

          return (
            <div className={`service-card ${colorClass}`} key={`service-card-${number}`}>
              <h3>{item.title}</h3>
              {/* eslint-disable-next-line react/no-danger-with-children */}
              <div dangerouslySetInnerHTML={item.body ? { __html: item.body } : { __html: '' }}></div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
)
;
};
