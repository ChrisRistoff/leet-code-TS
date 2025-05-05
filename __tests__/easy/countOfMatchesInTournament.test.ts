import { numberOfMatches } from "../../challenges/easy/countOfMatchesInTournament";

describe('numberOfMatches', () => {
  test('single team tournament', () => {
    expect(numberOfMatches(1)).toBe(0);
  });

  test('minimum competitive teams', () => {
    expect(numberOfMatches(2)).toBe(1);
  });

  test('odd team count progression', () => {
    expect(numberOfMatches(3)).toBe(2);
  });

  test('example input with 7 teams', () => {
    expect(numberOfMatches(7)).toBe(6);
  });

  test('example input with 14 teams', () => {
    expect(numberOfMatches(14)).toBe(13);
  });

  test('multiple odd rounds', () => {
    expect(numberOfMatches(5)).toBe(4);
  });

  test('even-odd combination', () => {
    expect(numberOfMatches(6)).toBe(5);
  });

  test('perfect power of two', () => {
    expect(numberOfMatches(4)).toBe(3);
  });

  test('larger even number', () => {
    expect(numberOfMatches(200)).toBe(199);
  });
});

