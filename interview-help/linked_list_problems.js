/*
876. Middle of the Linked List

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: [1,2,3,4,5]
Output: Node 3 from this list (Serialization: [3,4,5])
The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
Note that we returned a ListNode object ans, such that:
ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.
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
var middleNode = function(head) {
    let slow = head;
    let fast = head; 

    // while there is fast and a next
    while(fast && fast.next) {
        // set slow to next
        slow = slow.next;
        // set fast to next's next 
        fast = fast.next.next;
    }

    // because fast twice as fast as slow, at fast end
    // slow should be mid
    return slow; 
};

/*
19. Remove Nth Node From End of List

Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // get the head node in case head removal 
    let hPointer = new ListNode(0); 
    hPointer.next = head;
    let first = head; 
    let length = 0; 
  
    // need to find the length of the list 
    // why: this gives us a location: length - n for nth node
    while (first != null) {
        length++;
        first = first.next;
    }
  
    // then need to traverse the list 
    /*     1    2
      1 -> 2 -> 3
      1 -> 3 */
    
    // length - n for nth node 
    length = length - n; 
    first = hPointer;
    while(length > 0) {
      length--;
      first = first.next; 
    } 
    
    // and point to (length - n) + 1 to 'skip' over nth node
    first.next = first.next.next; 
  
    // return head of list
    return hPointer.next; 
};



