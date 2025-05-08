import { distributeCandies } from "../../challenges/easy/distributeCandies";

describe('distributeCandies', () => {
    it('should handle example 1', () => {
        expect(distributeCandies([1, 1, 2, 2, 3, 3])).toBe(3);
    });

    it('should handle example 2', () => {
        expect(distributeCandies([1, 1, 2, 3])).toBe(2);
    });

    it('should handle example 3', () => {
        expect(distributeCandies([6, 6, 6, 6])).toBe(1);
    });

    it('returns n/2 when all candies are unique', () => {
        expect(distributeCandies([1, 2, 3, 4])).toBe(2);
    });

    it('returns unique count when duplicates limit variety', () => {
        expect(distributeCandies([1, 1, 1, 2, 2, 3])).toBe(3);
    });

    it('handles minimum array size', () => {
        expect(distributeCandies([5, 7])).toBe(1);
    });

    it('handles large array with many duplicates', () => {
        const arr = Array(10000).fill(0).map((_, i) => i % 50);
        expect(distributeCandies(arr)).toBe(50);
    });
});

