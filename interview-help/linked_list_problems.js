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

/*
21. Merge Two Sorted Lists

Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  // if either list is null, return list not null 
  if (l1 === null) {
    return l2; 
  }
  else if (l2 === null) {
    return l1;  
  }
  // traverse both lists
  // if head of a list is less than head of other list
  // set that head as the next value
  // in the merged list 
    
  // * do this through recursion e.g. 
  // mergeTwoLists(l1, l2.next) 

  // return merged list 
  
  else if (l1.next < l2.next) {
   l1.next = mergeTwoLists(l1.next, l2); 

   return l1; 
  }
  else {
   l2.next = mergeTwoLists(l1, l2.next); 

   return l2;
  }
};


/*
HW:
- do single pass for 

19. Remove Nth Node From End of List

https://leetcode.com/problems/linked-list-cycle/ 
https://leetcode.com/problems/partition-list/
https://leetcode.com/problems/rotate-list/
*/ 

/*
Linked lists big O

Time complexity 
Singly-Linked List	Θ(n)	Θ(n)	Θ(1)	Θ(1)
Space
O(n)

Doubly-Linked List	Θ(n)	Θ(n)	Θ(1)	Θ(1)
Space
O(n)
*/

/*
141. Linked List Cycle

Given head, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

Return true if there is a cycle in the linked list. Otherwise, return false.

Follow up:

Can you solve it using O(1) (i.e. constant) memory?


Example 1:
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).


Two Pointers
Intuition

Imagine two runners running on a track at different speed. What happens when the track is actually a circle?

Algorithm

The space complexity can be reduced to O(1)O(1) by considering two pointers at different speed - a slow pointer and a fast pointer. The slow pointer moves one step at a time while the fast pointer moves two steps at a time.

If there is no cycle in the list, the fast pointer will eventually reach the end and we can return false in this case.

Now consider a cyclic list and imagine the slow and fast pointers are two runners racing around a circle track. The fast runner will eventually meet the slow runner. Why? Consider this case (we name it case A) - The fast runner is just one step behind the slow runner. In the next iteration, they both increment one and two steps respectively and meet each other.

How about other cases? For example, we have not considered cases where the fast runner is two or three steps behind the slow runner yet. This is simple, because in the next or next's next iteration, this case will be reduced to case A mentioned above.
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (head == null || head.next == null) {
      return false;
  }
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
      if (fast == null || fast.next == null) {
          return false;
      }
      slow = slow.next;
      fast = fast.next.next;
  }
  return true;
};

/*
86. Partition List

Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

Example:

Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
*/


/*
61. Rotate List

Given a linked list, rotate the list to the right by k places, where k is non-negative.

Example 1:

Input: 1->2->3->4->5->NULL, k = 2
Output: 4->5->1->2->3->NULL
Explanation:
rotate 1 steps to the right: 5->1->2->3->4->NULL
rotate 2 steps to the right: 4->5->1->2->3->NULL
*/ 

/* 
160. Intersection of Two Linked Lists

Write a program to find the node at which the intersection of two singly linked lists begins.

Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
Output: Reference of the node with value = 8
Input Explanation: The intersected node's value is 8 (note that this must not be 0 if the two lists intersect). 
From the head of A, it reads as [4,1,8,4,5]. From the head of B, it reads as [5,6,1,8,4,5]. There are 2 nodes 
before the intersected node in A; There are 3 nodes before the intersected node in B.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  var hPointerA = headA;
  var hPointerB = headB; 
  var ALength = 0; 
  var BLength = 0;
  while(headA.next != null) {
    ALength++;
    headA = headA.next;
  }
  while(headB.next != null) {
    BLength++;
    headB = headB.next;
  }

  // adjust length by step
  if(ALength > BLength) {
   var step = ALength - BLength;
   // step for A 
    while(step) {
     hPointerA = hPointerA.next; 
     step--; 
    }
  } 
  else {
   var step = BLength - ALength;   
   while(step) {
    hPointerB = hPointerB.next;
    step--;  
   }
  }

  // then traverse both lists 
  var currANode;
  var currBNode;

  while(hPointerA.next != null && hPointerB.next != null) {
   currANode = hPointerA; 
   currBNode = hPointerB; 
   if(currANode === currBNode) {
     // return intersection node 
     return hPointerA;
   }
   else {
     hPointerA = hPointerA.next;
     hPointerB = hPointerB.next;
   }
  }    
   
  // no intersection  
  return null; 
};

/*
83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only once.

Example 1:

Input: 1->1->2
Output: 1->2
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
var deleteDuplicates = function(head) {
  /*iterate over list
  for each node check its next value
  if same
  then 
  set node.next to node.next.next 
  check if same
  then again
  node.next to node.next.next
  else
  continue to next node in traversal*/
  
  var currNode = head; 
  
  while(currNode != null && currNode.next != null) {
      if(currNode.next.val == currNode.val) {
          currNode.next = currNode.next.next; 
      }
      else {
          currNode = currNode.next; 
      }
  }

  return head; 
};