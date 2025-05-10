import { matrixReshape } from "../../challenges/easy/reshapeTheMatrix";

describe("matrixReshape", () => {
    test("should reshape a 2x2 matrix into a 1x4 matrix", () => {
        const mat = [
            [1, 2],
            [3, 4]
        ];
        const r = 1;
        const c = 4;
        const expected = [[1, 2, 3, 4]];
        expect(matrixReshape(mat, r, c)).toEqual(expected);
    });

    test("should return the original matrix if reshape is not possible", () => {
        const mat = [
            [1, 2],
            [3, 4]
        ];
        const r = 2;
        const c = 4;
        const expected = [
            [1, 2],
            [3, 4]
        ];
        expect(matrixReshape(mat, r, c)).toEqual(expected);
    });

    test("should work on a single row matrix", () => {
        const mat = [[1, 2, 3, 4, 5]];
        const r = 5;
        const c = 1;
        const expected = [[1], [2], [3], [4], [5]];
        expect(matrixReshape(mat, r, c)).toEqual(expected);
    });

    test("should work on a single column matrix", () => {
        const mat = [[1], [2], [3], [4]];
        const r = 2;
        const c = 2;
        const expected = [
            [1, 2],
            [3, 4]
        ];
        expect(matrixReshape(mat, r, c)).toEqual(expected);
    });

    test("should handle case with different dimensions but valid total elements", () => {
        const mat = [[1, 2, 3], [4, 5, 6]];
        const r = 3;
        const c = 2;
        const expected = [
            [1, 2],
            [3, 4],
            [5, 6]
        ];
        expect(matrixReshape(mat, r, c)).toEqual(expected);
    });
});
