import { ListGridSchema, type ListGridType } from '@/components/ListGrid/ListGrid.types.ts';
import { getBackgroundColour } from '@/helpers/colours.ts';

export const ListGrid = (input: ListGridType) => {
  console.log(input);
  const result = ListGridSchema.safeParse(input);
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
        <div className="projects-grid">
          {items.map((item, number) => {
            const colors = ['green', 'blue', 'orange'];
            const colorClass = colors[number % colors.length];

            return (
              <div className={`project-card ${colorClass} ${item.bullet}`} key={`project-card-${number}`}>
                <h4>{item.title}</h4>
                {/* eslint-disable-next-line react/no-danger-with-children */}
                <div dangerouslySetInnerHTML={item.list ? { __html: item.list } : { __html: '' }}></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
