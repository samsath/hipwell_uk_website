import type { SelectField } from '@prismicio/client/src/types/value/select.ts';

export enum BackgroundColor {
  white = 'white',
  green = 'green',
  blue = 'blue',
  orange = 'orange',
  black = 'black',
  Filled = 'filled'
}

export const getBodyColour = (baseColour: string) => {
  switch (baseColour) {
    case 'white':
      return 'text-black *:text-black';
    case 'black':
      return 'text-white *:text-white';
    default:
      return 'text-black *:text-black';
  }
};

export const getBackgroundColour = (baseColour: string) => {
  switch (baseColour) {
    case 'grey':
      return 'bg-grey';
    case 'pink':
      return 'bg-pink';
    case 'yellow':
      return 'bg-yellow';
    case 'white':
      return 'bg-white';
    case 'black':
      return 'bg-black';
    default:
      return 'bg-white';
  }
};
