import type { SelectField } from '@prismicio/client/src/types/value/select.ts';

export enum BackgroundColor {
  white = 'white',
  green = 'green',
  blue = 'blue',
  orange = 'orange',
  black = 'black',
  Filled = 'filled'
}

export const asBackgroundColour = (input: SelectField): BackgroundColor => {
  switch (input) {
    case 'white':
      return BackgroundColor.white;
    case 'green':
      return BackgroundColor.green;
    case 'blue':
      return BackgroundColor.blue;
    case 'orange':
      return BackgroundColor.orange;
    case 'black':
      return BackgroundColor.black;
    default:
      return BackgroundColor.white;
  }
};


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
    case 'green':
      return 'bg-electric-green';
    case 'blue':
      return 'bg-cyber-blue';
    case 'orange':
      return 'bg-bold-orange';
    case 'white':
      return 'bg-white';
    case 'black':
      return 'bg-black';
    default:
      return 'bg-white';
  }
};
