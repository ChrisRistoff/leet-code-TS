import { scoreOfString } from "../../challenges/easy/scoreOfString";

describe("scoreOfString", () => {
    it("should return 13 for input 'hello'", () => {
        const s = "hello";
        const expected = 13;
        expect(scoreOfString(s)).toBe(expected);
    });

    it("should return 50 for input 'zaz'", () => {
        const s = "zaz";
        const expected = 50;
        expect(scoreOfString(s)).toBe(expected);
    });

    it("should correctly calculate the score for a two-character string 'ab'", () => {
        const s = "ab";
        const expected = Math.abs("a".charCodeAt(0) - "b".charCodeAt(0));
        expect(scoreOfString(s)).toBe(expected);
    });

    it("should correctly calculate the score for a two-character string 'ba'", () => {
        const s = "ba";
        const expected = Math.abs("b".charCodeAt(0) - "a".charCodeAt(0));
        expect(scoreOfString(s)).toBe(expected);
    });

    it("should return 0 when all characters are the same", () => {
        const s = "aaa";
        const expected = 0;
        expect(scoreOfString(s)).toBe(expected);
    });
});
