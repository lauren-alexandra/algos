/*
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// one way of doing two pointers (not recursion)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let backIndex = s.length - 1;
    
    for (let i = 0; i < s.length / 2; i++) {
        let currentLetter = s[i];
        s[i] = s[backIndex]; 
        s[backIndex] = currentLetter; 
        backIndex = backIndex - 1;
    }
    
    return s;
};

// two pointers (with recursion)

/*
Algorithm

Here is an example. Let's implement recursive function helper which receives two pointers, left and right, as arguments.

Base case: if left >= right, do nothing. (because already swapped)

Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).

To solve the problem, call helper function passing the head and tail indexes as arguments: return helper(0, len(s) - 1).

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    const helper = (s, left, right) => {
        if (left < right) {
            // swap operation 
            let leftChar = s[left];
            s[left] = s[right];
            s[right] = leftChar;
            
            // recursive call to continue iteration
            helper(s, left + 1, right - 1);
        }
    }
    
    // init call
    helper(s, 0, s.length - 1);
};


/*
206. Reverse Linked List

Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
*/

// Approach #1 (Iterative) 
/*
While you are traversing the list, change the current node's next pointer to 
point to its previous element. Since a node does not have reference to its 
previous node, you must store its previous element beforehand. You also need 
another pointer to store the next node before changing the reference. Do not 
forget to return the new head reference at the end!
*/
/*
Complexity analysis

Time complexity : O(n). Assume that nn is the list's length, the time complexity is O(n)O(n).

Space complexity : O(1).
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    
    let prev = null; 
    let curr = head;
    
    while (curr !== null) {
        let currentNext = curr.next; 
        curr.next = prev; // this is how you swap
        prev = curr;
        curr = currentNext; // this is how you continue
    }
    
    return prev; // modified linked list
};

// Approach #2 (Recursive)
/*
The recursive version is slightly trickier and the key is to work backwards. 
Assume that the rest of the list had already been reversed, now how do I reverse the front part?
*/
/*
Complexity analysis

Time complexity : O(n). Assume that n is the list's length, the time complexity is O(n)O(n).

Space complexity : O(n). The extra space comes from implicit stack space due to recursion. The recursion could go up to nn levels deep.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    
    let p = reverseList(head.next);
    head.next.next = head; 
    head.next = null; // this puts the node at the end
    
    return p; 
};


