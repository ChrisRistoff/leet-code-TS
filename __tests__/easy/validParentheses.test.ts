import { isValid } from "../../challenges/easy/validParentheses";

describe("isValid", () => {
    test("Example 1: s = '()' should return true", () => {
        expect(isValid("()")).toBe(true);
    });

    test("Example 2: s = '()[]{}' should return true", () => {
        expect(isValid("()[]{}")).toBe(true);
    });

    test("Example 3: s = '(]' should return false", () => {
        expect(isValid("(]")).toBe(false);
    });

    test("Example 4: s = '([])' should return true", () => {
        expect(isValid("([])")).toBe(true);
    });

    // Additional tests
    test("Nested valid brackets: s = '{[]}' should return true", () => {
        expect(isValid("{[]}")).toBe(true);
    });

    test("Invalid order: s = '([)]' should return false", () => {
        expect(isValid("([)]")).toBe(false);
    });

    test("Single opening bracket: s = '(' should return false", () => {
        expect(isValid("(")).toBe(false);
    });

    test("Single closing bracket: s = ']' should return false", () => {
        expect(isValid("]")).toBe(false);
    });

    test("Longer valid string: s = '(){}{[()()]}' should return true", () => {
        expect(isValid("(){}{[()()]}")).toBe(true);
    });

    test("Longer invalid string: s = '(){}{[(])}' should return false", () => {
        expect(isValid("(){}{[(])}")).toBe(false);
    });
});
