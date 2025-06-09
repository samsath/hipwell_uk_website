import { describe, expect, it } from 'vitest';
import { asBool } from './values';

describe('asBool', () => {
  it('should return true for true boolean', () => {
    expect(asBool(true)).toBe(true);
  });

  it('should return false for false boolean', () => {
    expect(asBool(false)).toBe(false);
  });

  it('should return true for string "true"', () => {
    expect(asBool('true')).toBe(true);
  });

  it('should return false for string "false"', () => {
    expect(asBool('false')).toBe(false);
  });

  it('should be case-insensitive with "TRUE"', () => {
    expect(asBool('TRUE')).toBe(true);
  });

  it('should return false for null', () => {
    expect(asBool(null)).toBe(false);
  });

  it('should return false for undefined', () => {
    expect(asBool(undefined)).toBe(false);
  });

  it('should return false for random strings', () => {
    expect(asBool('yes')).toBe(false);
    expect(asBool('1')).toBe(false);
    expect(asBool('')).toBe(false);
  });
});
