import { hasIncreasingSubarrays } from "../../challenges/easy/adjacentIncreasingSubArrays";

describe("hasIncreasingSubarrays", () => {
    test("Example 1: two adjacent strictly increasing subarrays exist", () => {
        const nums = [2, 5, 7, 8, 9, 2, 3, 4, 3, 1];
        const k = 3;
        expect(hasIncreasingSubarrays(nums, k)).toBe(true);
    });

    test("Example 2: adjacent strictly increasing subarrays do not exist", () => {
        const nums = [1, 2, 3, 4, 4, 4, 4, 5, 6, 7];
        const k = 5;
        expect(hasIncreasingSubarrays(nums, k)).toBe(false);
    });

    test("Edge case: array length less than 2*k returns false", () => {
        const nums = [1, 2, 3];
        const k = 2;
        expect(hasIncreasingSubarrays(nums, k)).toBe(false);
    });

    test("Edge case: k equals 1 always returns true if array has at least 2 elements", () => {
        const nums = [5, 3];
        const k = 1;
        expect(hasIncreasingSubarrays(nums, k)).toBe(true);
    });

    test("Multiple increasing subarrays with only one valid adjacent pair", () => {
        const nums = [1, 2, 3, 0, 1, 2, 3, 4];
        const k = 3;
        expect(hasIncreasingSubarrays(nums, k)).toBe(true);
    });

    test("Subarrays with duplicate adjacent elements should not count as strictly increasing", () => {
        const nums = [1, 2, 2, 3, 4, 5];
        const k = 3;
        expect(hasIncreasingSubarrays(nums, k)).toBe(false);
    });
});
