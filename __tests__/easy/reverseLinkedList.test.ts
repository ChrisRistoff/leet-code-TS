import { reverseList } from "../../challenges/easy/reverseLinkedList";
import { arrayToList, listToArray } from "../../helpers/linkedList";

describe('reverse linked list', () => {
    it('handles empty list', () => {
        expect(reverseList(null)).toBeNull();
    });

    it('handles single node list', () => {
        const head = arrayToList([5]);
        const result = reverseList(head);
        expect(listToArray(result)).toEqual([5]);
    });

    it('reverse', () => {
        const head = arrayToList([1, 1, 2, 3]);
        const result = reverseList(head);
        expect(listToArray(result)).toEqual([3, 2, 1, 1]);
    });

    it('reverse', () => {
        const head = arrayToList([1, 2, 2]);
        const result = reverseList(head);
        expect(listToArray(result)).toEqual([2, 2, 1]);
    });

    it('reverse same items', () => {
        const head = arrayToList([2, 2, 2]);
        const result = reverseList(head);
        expect(listToArray(result)).toEqual([2, 2, 2]);
    });

    it('reverse', () => {
        const head = arrayToList([1, 2, 3, 4]);
        const result = reverseList(head);
        expect(listToArray(result)).toEqual([4, 3, 2, 1]);
    });
});
