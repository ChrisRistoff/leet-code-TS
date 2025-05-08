import { deleteDuplicates } from "../../challenges/easy/removeDuplicatesFromSortedLL";
import { arrayToList, listToArray } from "../../helpers/linkedList";

describe('deleteDuplicates', () => {
    it('handles empty list', () => {
        expect(deleteDuplicates(null)).toBeNull();
    });

    it('handles single node list', () => {
        const head = arrayToList([5]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([5]);
    });

    it('removes multiple duplicates from start', () => {
        const head = arrayToList([1, 1, 2, 3]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });

    it('removes consecutive end duplicates', () => {
        const head = arrayToList([1, 2, 2]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([1, 2]);
    });

    it('removes multiple duplicate groups', () => {
        const head = arrayToList([1, 1, 2, 3, 3, 4]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('handles all-duplicate list', () => {
        const head = arrayToList([2, 2, 2]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([2]);
    });

    it('preserves already-unique list', () => {
        const head = arrayToList([1, 2, 3, 4]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([1, 2, 3, 4]);
    });

    it('matches example 1', () => {
        const head = arrayToList([1, 1, 2]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([1, 2]);
    });

    it('matches example 2', () => {
        const head = arrayToList([1, 1, 2, 3, 3]);
        const result = deleteDuplicates(head);
        expect(listToArray(result)).toEqual([1, 2, 3]);
    });
});
