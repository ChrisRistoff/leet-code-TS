import { getLongestSubsequence } from "../../challenges/easy/unequalAdjacentGroups";

describe("getLongestSubsequence", () => {
    test("Example 1: words = ['e','a','b'] and groups = [0,0,1] returns ['e','b']", () => {
        const words = ["e", "a", "b"];
        const groups = [0, 0, 1];
        const expected = ["e", "b"];
        expect(getLongestSubsequence(words, groups)).toEqual(expected);
    });

    test("Example 2: words = ['a','b','c','d'] and groups = [1,0,1,1] returns ['a','b','c']", () => {
        const words = ["a", "b", "c", "d"];
        const groups = [1, 0, 1, 1];
        const expected = ["a", "b", "c"];
        expect(getLongestSubsequence(words, groups)).toEqual(expected);
    });

    test("Single element list returns the only element", () => {
        const words = ["hello"];
        const groups = [0];
        const expected = ["hello"];
        expect(getLongestSubsequence(words, groups)).toEqual(expected);
    });

    test("All groups same: words = ['a','b','c','d'] and groups = [0,0,0,0] returns ['a']", () => {
        const words = ["a", "b", "c", "d"];
        const groups = [0, 0, 0, 0];
        const expected = ["a"];
        expect(getLongestSubsequence(words, groups)).toEqual(expected);
    });

    test("Already alternating: words = ['a','b','c','d'] and groups = [0,1,0,1] returns full sequence", () => {
        const words = ["a", "b", "c", "d"];
        const groups = [0, 1, 0, 1];
        const expected = ["a", "b", "c", "d"];
        expect(getLongestSubsequence(words, groups)).toEqual(expected);
    });
});
