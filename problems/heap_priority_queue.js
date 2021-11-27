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

K Closest Points to Origin

We have a list of points on the plane.  Find the K closest points to the origin (0, 0).

(Here, the distance between two points on a plane is the Euclidean distance.)

You may return the answer in any order.  The answer is guaranteed to be unique (except for the order that it is in.)

Example 1:

Input: points = [[1,3],[-2,2]], K = 1
Output: [[-2,2]]
Explanation: 
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest K = 1 points from the origin, so the answer is just [[-2,2]].

/* this can probably be solved with a priority queue. */

var kClosest = function(points, K) {
  var pointCollection = []; 
  var result; 
  
  // associate each point with a distance 
  points.forEach(function(point) {
    let distance = point[0]**2 + point[1]**2; 
    pointCollection.push({p: point, value: distance}); 
  }); 
  
  pointCollection.sort(function (a, b) {
    return a.value - b.value;
  });
    
  // the first k points 
  kPoints = pointCollection[:K]; 
  
  kPoints.map(function(point){
    result = list[point.value];
  });
  
  return result; 
};

/*
Kth Largest Element in a Stream

Design a class to find the kth largest element in a stream. Note that it is the kth largest element in the sorted order, not the kth distinct element.

Your KthLargest class will have a constructor which accepts an integer k and an integer array nums, which contains initial elements from the stream. For each call to the method KthLargest.add, return the element representing the kth largest element in the stream.

Example:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
Note: 
You may assume that nums' length ≥ k-1 and k ≥ 1.

/* the k'th largest element in a list will be the top of the min-heap when we restrict  the size of the heap to k*/

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
  
    this.tree = new BH();
    this.tree.enqueue(nums);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.tree.add(val);  
  
  // if the heap is bigger than k, remove elements until the heap is size k
  while (this.tree.values.length > this.k) {
      this.tree.values.pop(); 
  }
  
  // return the smallest number in the heap
  return this.tree.extractMin()
};




// binary heap
class BH {
  constructor() {
    this.values = [];
  }
  add(element) {
    this.values.push(element);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent <= current) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
  extractMin() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild < current) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild < current) ||
          (swap !== null && rightChild < leftChild)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return min;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}
// priority queue
class PQ {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    let index = this.values.length - 1;
    const current = this.values[index];

    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];

      if (parent.priority >= current.priority) {
        this.values[parentIndex] = current;
        this.values[index] = parent;
        index = parentIndex;
      } else break;
    }
  }
  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    let index = 0;
    const length = this.values.length;
    const current = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < current.priority) swap = leftChildIndex;
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild.priority < current.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        )
          swap = rightChildIndex;
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = current;
      index = swap;
    }

    return min;
  }
}
