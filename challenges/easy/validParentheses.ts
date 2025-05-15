/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.


Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true


Constraints:
1 <= s.length <= 104
s consists of parentheses only '()[]{}'.
*/

export function isValid(s: string): boolean {
    const left = '([{';
    const right = ')]}';
    const found: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (left.includes(s[i])) {
            found.push(s[i]);
        } else if (right.indexOf(s[i]) !== left.indexOf(found.pop()!)) {
            return false
        }
    }

    return found.length === 0;
}
