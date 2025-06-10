export const asShape = (input:string): string => {
  switch (input) {
    case 'circle':
      return 'circle';
    case 'square':
      return 'square';
    case 'diamond':
      return 'diamond';
    case 'triangle':
      return 'triangle';
    default:
      return 'default';
  }
};
