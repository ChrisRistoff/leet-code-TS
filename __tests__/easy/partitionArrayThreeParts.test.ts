import { canThreePartsEqualSum } from "../../challenges/easy/partitionArrayThreeParts";

describe('canThreePartsEqualSum', () => {
  test('Example 1', () => {
    expect(canThreePartsEqualSum([0,2,1,-6,6,-7,9,1,2,0,1])).toBe(true);
  });

  test('Example 2', () => {
    expect(canThreePartsEqualSum([0,2,1,-6,6,7,9,-1,2,0,1])).toBe(false);
  });

  test('Example 3', () => {
    expect(canThreePartsEqualSum([3,3,6,5,-2,2,5,1,-9,4])).toBe(true);
  });

  test('Sum divisible by 3 but cannot split', () => {
    expect(canThreePartsEqualSum([1,2,3,0])).toBe(false);
  });

  test('All zeros', () => {
    expect(canThreePartsEqualSum([0,0,0,0])).toBe(true);
  });

  test('Array length 3, valid', () => {
    expect(canThreePartsEqualSum([1,1,1])).toBe(true);
  });

  test('Array length 3, invalid sum', () => {
    expect(canThreePartsEqualSum([1,0,0])).toBe(false);
  });

  test('Sum zero with valid splits', () => {
    expect(canThreePartsEqualSum([3,-3,3,-3,3,-3])).toBe(true);
  });
});
