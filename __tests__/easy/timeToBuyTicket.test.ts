import { timeRequiredToBuy } from "../../challenges/easy/timeToBuyTicket";

describe('timeRequiredToBuy', () => {
  it('handles example 1', () => {
    expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6);
  });

  it('handles example 2', () => {
    expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8);
  });

  it('calculates when k is last with higher tickets', () => {
    expect(timeRequiredToBuy([1, 1, 4], 2)).toBe(6);
  });

  it('counts people after k with more tickets', () => {
    expect(timeRequiredToBuy([3, 2, 5], 1)).toBe(5);
  });

  it('handles uniform tickets', () => {
    expect(timeRequiredToBuy([3, 3, 3], 1)).toBe(8);
  });

  it('works with single person queue', () => {
    expect(timeRequiredToBuy([4], 0)).toBe(4);
  });

  it('processes higher tickets before k', () => {
    expect(timeRequiredToBuy([5, 3, 2], 2)).toBe(6);
  });

  it('handles mixed ticket counts', () => {
    expect(timeRequiredToBuy([4, 2, 5, 3], 1)).toBe(6);
  });

  it('handles early exit of subsequent people', () => {
    expect(timeRequiredToBuy([2, 1, 1], 0)).toBe(4);
  });
});
