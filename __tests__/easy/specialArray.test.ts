import { isArraySpecial } from "../../challenges/easy/specialArray";

describe('isArraySpecial', () => {
  test('should return true for an array with a single element', () => {
    expect(isArraySpecial([1])).toBe(true);
  });

  test('should return true for special array [2, 1, 4]', () => {
    expect(isArraySpecial([2, 1, 4])).toBe(true);
  });

  test('should return false for non-special array [4, 3, 1, 6]', () => {
    expect(isArraySpecial([4, 3, 1, 6])).toBe(false);
  });

  test('should return true for an empty array', () => {
    // Assuming an empty array is considered special.
    expect(isArraySpecial([])).toBe(true);
  });

  test('should return false when two adjacent even numbers appear', () => {
    expect(isArraySpecial([2, 4])).toBe(false);
  });

  test('should return false when two adjacent odd numbers appear', () => {
    expect(isArraySpecial([1, 3])).toBe(false);
  });

  test('should return true for alternating odd and even numbers', () => {
    expect(isArraySpecial([1, 2, 3, 4, 5])).toBe(true);
  });

  test('should return false for longer arrays that are not special', () => {
    // In the following, nums[2] and nums[3] are both odd
    expect(isArraySpecial([2, 3, 5, 7, 8, 9])).toBe(false);
  });
});
