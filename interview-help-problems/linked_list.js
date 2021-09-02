/*
876. Middle of the Linked List

Given a non-empty, singly linked list with head node head, return a middle node of linked list.

If there are two middle nodes, return the second middle node.

Example 1:

Input: [1,2,3,4,5] // singly linked list
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

/*
369. Plus One Linked List

Given a non-negative integer represented as non-empty a singly linked list of digits, plus one to the integer.

You may assume the integer do not contain any leading zero, except the number 0 itself.

The digits are stored such that the most significant digit is at the head of the list.

Example :

Input: [1,2,3]
Output: [1,2,4]
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
var plusOne = function(head) {
  // pseudocode
  /*identify the rightmost digit not equal to 9
  and increase by 1
  each node equal to 9 should be set to 0*/
  
  var sentinelHead = new ListNode(0);
  sentinelHead.next = head;
  var notNine = sentinelHead; 
  
  // find rightmost (not nine)
  while(head) {
   if(head.val != 9) {
     notNine = head;
   }
    
   head = head.next;  
  }
  
  // notNine increase by 1
  notNine.val += 1;
  
  // set following 9s to 0
  notNine = notNine.next 
  while(notNine) {
   notNine.val = 0;
   notNine = notNine.next; 
  }
  
  if(sentinelHead.val) {
    return sentinelHead;
  } 
  else {
    return sentinelHead.next; 
  }
  
};


/*
1290. Convert Binary Number in a Linked List to Integer

Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1. The linked list holds the binary representation of a number.

Return the decimal value of the number in the linked list.

Example:
Input: head = [1,0,1]
Output: 5
Explanation: (101) in base 2 = (5) in base 10
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
 * @return {number}
 */
 var getDecimalValue = function(head) {
  let node = head;
  let num = "";
  
  while (node) {
      num += node.val;
      
      node = node.next;
  }
  
  return parseInt(num, 2);
};

/*
328. Odd Even Linked List

Here's how it works:
Even an ordered list aka odd followed by even, 
set the pointers accordingly so that the odd list is created
and the even list is created 
and the end of the odd list points to the head of the even list

Given: 1, 2, 3, 4, 5
Return a linked list of 1, 3, 5, 2, 4

Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

The first node is considered odd, and the second node is even, and so on.

Note that the relative order inside both the even and odd groups should remain as it was in the input.

You must solve the problem in O(1) extra space complexity and O(n) time complexity.
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
 var oddEvenList = function(head) {    
  if (head === null) {
      return null;
  }
  
  let odd = head;
  let even = head.next;
  let evenHead = even; 
  
  while (even !== null && even.next !== null) {
      odd.next = even.next;
      odd = odd.next;
      even.next = odd.next;
      even = even.next;
  }
  
  odd.next = evenHead;
  return head; 
};


/*
1836. Remove Duplicates From an Unsorted Linked List

Given the head of a linked list, find all the values that appear more than once in the list and delete the nodes that have any of those values.

Return the linked list after the deletions.

Example 1:
Input: head = [1,2,3,2]
Output: [1,3]
Explanation: 2 appears twice in the linked list, so all 2's should be deleted. After deleting all 2's, we are left with [1,3].

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
 var deleteDuplicatesUnsorted = function(head) {
  /*
  first traverse through linked list and extract values. push then into an array
  
  then get uniques from array 
  
  then build a new linked list from the values in uniques. while uniques.length > 0
  make use of ListNode func to build it. 
  */
  
  // you need to remember the order of the linked list. use a Map to preserve insertion order
  let originalValues = new Map(); 
  let currentOrgNode = head; 
  
  while(currentOrgNode) {
      if (originalValues.get(currentOrgNode.val)) {
          let updateVal = originalValues.get(currentOrgNode.val) + 1;
          originalValues.set(currentOrgNode.val, updateVal); 
      }
      else {
          originalValues.set(currentOrgNode.val, 1); 
      }
      
      currentOrgNode = currentOrgNode.next; 
  }
  
  // find all the values that appear more than once in the list and delete any of those values
  let uniques = [];
  
  for (const key of originalValues.keys()) {
      if (originalValues.get(key) === 1) {
          uniques.push(key);
      }
  }
  
  if (uniques.length >= 2) {
      let headPointer = new ListNode(uniques[0]);
      headPointer.next = new ListNode(uniques[1]); 
      let currentNewNode = head;

      if (uniques.length > 2) {
          for (let i = 2; i < uniques.length; i++) {
              currentNewNode.next = new ListNode(uniques[i]); 
              currentNewNode = currentNewNode.next; 
          }   
      }

      return headPointer; 
  }
  // this is an edge case
  else if (uniques.length === 1) {
      return new ListNode(uniques[0]);
  }
  // this is an edge case
  else {
      return null; // this is an empty linked list
  }
};




