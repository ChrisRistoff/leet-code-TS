import { buttonWithLongestTime } from "../../challenges/easy/buttonLongestPushTime";

describe('buttonWithLongestTime', () => {
    it('should return the correct button index', () => {
        const events = [[5,4],[20,14]];
        const result = buttonWithLongestTime(events);
        expect(result).toBe(20);
    });

    it('should return the correct button index for the first example', () => {
        const events = [[1, 2], [2, 5], [3, 9], [1, 15]];
        const result = buttonWithLongestTime(events);
        expect(result).toBe(1);
    });

    it('should return the correct button index for the second example', () => {
        const events = [[10, 5], [1, 7]];
        const result = buttonWithLongestTime(events);
        expect(result).toBe(10);
    });

    it('should return the only button index when there is a single event', () => {
        const events = [[4, 10]];
        const result = buttonWithLongestTime(events);
        expect(result).toBe(4);
    });

    it('should return the smallest index when multiple buttons have the same longest time', () => {
        const events = [[2, 1], [3, 5], [1, 9]];
        const result = buttonWithLongestTime(events);
        expect(result).toBe(1);
    });
});

