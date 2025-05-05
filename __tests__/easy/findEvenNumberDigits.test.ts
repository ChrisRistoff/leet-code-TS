import { findNumbers } from "../../challenges/easy/findEvenNumberDigits";

describe('findNumbers', () => {
  it('handles example 1', () => {
    expect(findNumbers([12, 345, 2, 6, 7896])).toBe(2);
  });

  it('handles example 2', () => {
    expect(findNumbers([555, 901, 482, 1771])).toBe(1);
  });

  it('counts all even-digit numbers', () => {
    expect(findNumbers([22, 4444, 555555])).toBe(3);
  });

  it('returns 0 when no even-digit numbers exist', () => {
    expect(findNumbers([1, 3, 5, 7, 9])).toBe(0);
  });

  it('handles single even-digit number', () => {
    expect(findNumbers([10])).toBe(1);
  });

  it('handles single odd-digit number', () => {
    expect(findNumbers([5])).toBe(0);
  });

  it('counts mixed even/odd digits', () => {
    expect(findNumbers([1234, 56, 7, 8901, 42])).toBe(4);
  });
});
