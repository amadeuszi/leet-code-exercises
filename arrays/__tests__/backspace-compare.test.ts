import { backspaceCompare } from '../backspace-compare';

describe('backspaceCompare', () => {
  test('should return true for identical strings without backspaces', () => {
    const s = "abc";
    const t = "abc";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return true when backspaces make strings equal', () => {
    const s = "ab#c";
    const t = "ad#c";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return true for strings with multiple backspaces', () => {
    const s = "ab##";
    const t = "c#d#";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return false when strings differ after backspace processing', () => {
    const s = "a#c";
    const t = "b";

    const result = backspaceCompare(s, t);

    expect(result).toBe(false);
  });

  test('should return true for empty strings', () => {
    const s = "";
    const t = "";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return true when backspaces result in empty strings', () => {
    const s = "a##";
    const t = "b#";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should handle consecutive backspaces correctly', () => {
    const s = "abc###";
    const t = "xyz###";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return false when one string is empty after backspaces', () => {
    const s = "a##";
    const t = "a";

    const result = backspaceCompare(s, t);

    expect(result).toBe(false);
  });

  test('should handle backspaces at the beginning of string', () => {
    const s = "#a";
    const t = "a";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return true for complex equal strings', () => {
    const s = "xywrrmp";
    const t = "xywrrmu#p";

    const result = backspaceCompare(s, t);

    expect(result).toBe(true);
  });

  test('should return false for different lenghts', () => {
    const s = "aaaa";
    const t = "aaa";

    const result = backspaceCompare(s, t);

    expect(result).toBe(false);
  });
});
