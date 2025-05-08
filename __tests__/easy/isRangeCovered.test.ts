import { isCovered } from '../../challenges/easy/isRangeCovered';

describe('isCovered', () => {
    it('should return true when all numbers are covered', () => {
        expect(isCovered([[1, 2], [3, 4], [5, 6]], 2, 5)).toBe(true);
    });

    it('should return false when a number is missing', () => {
        expect(isCovered([[1, 10], [10, 20]], 21, 21)).toBe(false);
    });

    it('should handle single number ranges', () => {
        expect(isCovered([[5, 5]], 5, 5)).toBe(true);
        expect(isCovered([[5, 5]], 6, 6)).toBe(false);
    });

    it('should handle overlapping ranges', () => {
        expect(isCovered([[1, 3], [2, 5]], 2, 4)).toBe(true);
    });

    it('should handle completely uncovered ranges', () => {
        expect(isCovered([[10, 20], [30, 40]], 5, 9)).toBe(false);
    });

    it('should handle partially covered ranges', () => {
        expect(isCovered([[1, 3], [5, 7]], 2, 6)).toBe(false);
    });

    it('should handle ranges that fully enclose the target', () => {
        expect(isCovered([[0, 10]], 3, 7)).toBe(true);
    });

    it('should handle multiple overlapping ranges', () => {
        expect(isCovered([[1, 4], [3, 6], [5, 8]], 2, 7)).toBe(true);
    });

    it('should return true for empty range (left > right)', () => {
        expect(isCovered([[1, 10]], 5, 3)).toBe(true);
    });
});

