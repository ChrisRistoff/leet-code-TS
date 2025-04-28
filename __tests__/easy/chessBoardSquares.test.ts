import { checkTwoChessboards } from '../../challenges/easy/chessBoardSquares';

describe('checkTwoChessboards', () => {
  describe('should return true for squares with same color', () => {
    it('when both are black (example 1)', () => {
      expect(checkTwoChessboards('a1', 'c3')).toBe(true);
    });

    it('when both are white', () => {
      expect(checkTwoChessboards('b2', 'd4')).toBe(true);
    });

    it('with maximum row/column values', () => {
      expect(checkTwoChessboards('h8', 'g7')).toBe(true);
    });
  });

  describe('should return false for squares with different colors', () => {
    it('when one black and one white (example 2)', () => {
      expect(checkTwoChessboards('a1', 'h3')).toBe(false);
    });

    it('with adjacent squares', () => {
      expect(checkTwoChessboards('a1', 'a2')).toBe(false);
    });

    it('with diagonal maximum values', () => {
      expect(checkTwoChessboards('h1', 'a8')).toBe(true);
    });
  });

  it('should handle edge cases', () => {
    // Same column different rows
    expect(checkTwoChessboards('a1', 'a3')).toBe(true);
    // Same row different columns
    expect(checkTwoChessboards('a8', 'c8')).toBe(true);
    // Opposite corners
    expect(checkTwoChessboards('a1', 'h8')).toBe(true);
  });
});

