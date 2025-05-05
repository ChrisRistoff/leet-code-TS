import { deleteDuplicates, ListNode } from "../../challenges/easy/removeDuplicatesFromSortedLL";

describe('deleteDuplicates', () => {

  function arrayToList(arr: number[]): ListNode | null {
    if (!arr.length) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
      current.next = new ListNode(arr[i]);
      current = current.next;
    }
    return head;
  };

  // Helper to convert linked list to array
  function listToArray(head: ListNode | null): number[] {
    const arr: number[] = [];
    let current = head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  };

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
