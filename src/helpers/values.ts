export const asBool = (value: string | null | undefined | boolean): boolean => {
  if (typeof value === 'string') {
    return value.toLowerCase() === 'true';
  }
  return value === true;
};
