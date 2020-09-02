/* Heap and Priority Queue 

Heap 
- memory is used to store global variables
- supports dynamic memory allocation
- hierarchical data structure
- memory will become fragmented as blocks of memory are first allocated then freed
- memory is allocated in any random order (not contiguous) 
- variable deallocation is needed (unlike stack)

Priority Queue
- a type of queue in which each element is associated with a priority and is served according to its priority
- if elements with the same priority occur, they are served according to their order in the queue


Queue vs. Priority Queue
- in a queue the first-in-first-out rule is used 
- in a priority queue the values are removed on the basis of priority. The element with the highest priority is removed first.
*/

/*
Max-heap: root max - descending
Min-heap: root min - ascending

Max Heap - 1) Complete B.T + Heap property - root>= all child //recursively true 
Min Heap - 1) Complete B.T + Heap property - root<= all child //recursively true 

When creating heap from array, need to swap elements in Binary Tree to
maintain max or min heap order.

Min heap example

45, 20, 23, 25, 24, 43, 51 - N - input size - Delete one element 
// min heap    
       20  
     /   \
    23    43  
   / \   /  \
  25 24  45  51   
  
  N = 2^0 + 2^1 + 2^2......h time 
  
  // base 2 is default
  // 3 levels
  log2 8 = 3 

  h = Log N
  the height (levels) of the binary tree is O(Log N) 

Inserting one element - Time Complexity ? O(1) - Height of the tree O(Log N)

O(log N) is less than O(N)

An algorithm is O(log n) if instead of scrolling through a structure 1 by 1,
you divide the structure in half over and over again and do a constant number of
operations for each split. 
e.g. search algorithms where the space keeps getting split up
e.g. binary search

Deletion: 
1) Swap root with the last child node
2) Delete child node
3) Reorder tree as min or max as necessary

Insertion:
1) Insert value as the last child node
2) Reorder the tree as min or max as necessary
*/

/* #1046 Last Stone Weight

Last Stone Weight
We have a collection of stones, each stone has a positive integer weight.

Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  The result of this smash is:

If x == y, both stones are totally destroyed;
If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

Example 1:

Input: [2,7,4,1,8,1]


2,7,4,1,8,1

1 1 1 2 


2 - 4=2 

7 -8 1 

Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.

// pseudocode  

use a Max-Heap

add the stones to the heap

while heap has at least one stone
do a comparison:
y = remove the maximum
x = remove the maxium 
if x != y
  y = y - x
  put y into the queue 

if heap empty
  return 0

return last stone
*/  
  
// implementation   
// leet code does not allow imports -
// have to test elsewhere
var Heap = require("collections/heap");  

var lastStoneWeight = function(stones) {
  var heap = new Heap(stones); 
  var x;
  var y; 
  
  while (heap.length > 0) {
    y = heap.pop();
    x = heap.pop();
    
    if (x != y) {
      y = y - x; 
      heap.push(y);
    }
  }
  
  if (heap.length == 0) {
    return 0;  
  }
  
  return heap.pop(); 
};  

/*
HW

https://leetcode.com/problems/k-closest-points-to-origin/
https://leetcode.com/problems/kth-largest-element-in-a-stream/
*/ 