import { largestGoodInteger } from "../../challenges/easy/largestSame3Digit";

describe('largestGoodInteger', () => {
    test('returns largest triplet from multiple options', () => {
        expect(largestGoodInteger("6777133339")).toBe("777");
    });

    test('handles triplet with zeros', () => {
        expect(largestGoodInteger("2300019")).toBe("000");
    });

    test('returns empty string when no triplet exists', () => {
        expect(largestGoodInteger("42352338")).toBe("");
    });

    test('handles input shorter than 3 characters', () => {
        expect(largestGoodInteger("42")).toBe("");
    });

    test('returns exact triplet when input length is 3', () => {
        expect(largestGoodInteger("000")).toBe("000");
    });

    test('selects later higher-value triplet', () => {
        expect(largestGoodInteger("111222")).toBe("222");
    });

    test('finds trailing zero triplet', () => {
        expect(largestGoodInteger("0122000")).toBe("000");
    });

    test('chooses highest digit from multiple triplets', () => {
        expect(largestGoodInteger("4445555666")).toBe("666");
    });

    test('extracts triplet from quad-run', () => {
        expect(largestGoodInteger("9999")).toBe("999");
    });

    test('prioritizes earliest possible triplet when equal', () => {
        expect(largestGoodInteger("111111")).toBe("111");
    });
});
