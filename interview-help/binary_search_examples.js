/* Binary Search

An algorithm for searching for a specific value in an ordered collection.
Divide and conquer technique.

1) Need to sort the collection
- ascending if the elements are numbers
- dictionary order if the elements are strings

2) Binary search algorithm (use loop or recursion)
Maintains the left, right, and middle indices of the search space (array or sub-array)
and compares the target to the middle value.
If the target does not equal the middle value,
then the half of the search space in which the target can not exist is dropped.
The other half becomes the new search space.
This continues until the target is equal to a middle value OR
the search space is empty and thus the target can not be found. 

target: the value you are searching for
index: the current location that you are searching
left, right: the indicies from which we use to maintain our search space
mid: the index that we use to apply a condition to determine if we should
search left or right
the condition: if target smaller than middle, set index as middle + 1. if greater, middle - 1. 

time: O(log N) (good) - dividing the problem up into subproblems
space: O(1)    (good)
*/ 

// #704 Binary Search
/*
Given a sorted (in ascending order) integer array nums of n elements and a target value, write a function to search target in nums. If target exists, then return its index, otherwise return -1.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/ 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binaryRecursiveSearch = function(arr, target, left, right) {
    // if left greater than right, return -1  
    if(left > right) {
        return -1; 
    }
    
    // find middle 
    let middle = Math.floor((left + right) / 2); // rounds down

    // compare target and middle
    if(arr[middle] === target){
        // return index of target 
        return arr.indexOf(target); 
    } 
    // if middle is greater than target, go left of middle and search
    else if (arr[middle] > target) {
        // recursive call 
        return binaryRecursiveSearch(arr, target, left, middle - 1); 
    } 
    // if middle is less than target, go right of middle and search 
    else {
        // recursive call 
        return binaryRecursiveSearch(arr, target, middle + 1, right) 
    }
}

var search = function(nums, target) {
    // left initialized as nums start
    // right initialized as nums end 
    let left = 0;
    let right = nums.length - 1; 

    return binaryRecursiveSearch(nums, target, left, right); 
};

// #1064 Fixed Point 
/*
Given an array A of distinct integers sorted in ascending order, return the smallest index i that satisfies A[i] == i.  Return -1 if no such i exists.

Example 1:

Input: [-10,-5,0,3,7]
Output: 3
Explanation: 
For the given array, A[0] = -10, A[1] = -5, A[2] = 0, A[3] = 3, thus the output is 3.
*/ 

/* 
Solved without binary search. Since I am 
returning the smallest index I search 
in consecutive ascending order rather
than divide and conquer search. 
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var fixedPoint = function(A) {
    for(let j = 0; j < A.length; j++){
        if(A[j] === j) {
            return j; 
        }
    }
    return -1; 
};

// #367 Valid Perfect Square 
/*
Given a positive integer num, write a function which returns True if num is a perfect square else False.

Follow up: Do not use any built-in library function such as sqrt.

Example 1:

Input: num = 16
Output: true

Example 2:

Input: num = 14
Output: false
*/ 

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    if (num < 2) {
        return true;  
    }
    // set left to 2 
    // set right to num/2
    var left = 2; 
    var right = Math.floor(num / 2); 
    var guess; 
    var pivot; 

    while (left <= right) {
        pivot = left + (right - left) / 2; 
        guess = Math.floor(pivot);  
        guessSquared = guess * guess; 

        // if product is greater than num, decrease right
        if (guessSquared > num) {
          right = guess - 1;         
        }
        // if product is less than num, increase left
        else if (guessSquared < num) {
            left = guess + 1; 
        }
        else {
            return true; 
        }
    }
    // no perfect square
    return false;      
};

// #69 Sqrt(x)
/*
Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
*/ 

// given x, the square root will be smaller than x/2 and larger than 0
// x is greater than or equal to 2 
// 0 < sqrt < x/2

/**
 * @param {number} x
 * @return {number}
 */
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 2) {
        return x;  
    }
    // set left to 2 
    // set right to x/2
    var left = 2; 
    var right = Math.floor(x / 2); // round down 
    var guess; 
    var pivot; 

    while (left <= right) {
        pivot = left + (right - left) / 2; 
        guess = Math.floor(pivot); // round down
        guessSquared = guess * guess; 

        // if product is greater than x, decrease right
        if (guessSquared > x) {
          right = guess - 1;         
        }
        // if product is less than x, increase left
        else if (guessSquared < x) {
            left = guess + 1; 
        }
        else {
            return guess; 
        }
    }
    
    return right; 
};

// #977 Squares of a Sorted Array 
/*
Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]

Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
*/ 

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {                   // not solved with binary search
    for (let num = 0; num < A.length; num++) {
      A[num] = A[num] * A[num]; 
    }
    return A.sort(function(a, b) {
      return a - b;
    }); 
};

/*
#74 Search a 2D Matrix
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
*/ 
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  // binary search 
  var row = matrix.length; 
  var first; 
  if(matrix[0]) {
      first = matrix[0];   // need to check for this 
  } else {
      return false; 
  }
  var col = first.length; 
  
  var left = 0;
  var right = (row * col) - 1;
  var pivotIndex, pivotVal, r, c; 
  
  while(left <= right) {
    pivotIndex = Math.floor((left + right) / 2);
    r = Math.floor(pivotIndex / col); // gives integer not float 
    c = Math.floor(pivotIndex % col); // same int
    pivotVal = matrix[r][c];
    
    if (pivotVal == target) {
      return true; 
    }
    else if(target < pivotVal) {
      right = pivotIndex - 1; // shorten search space on right
    }
    else {
      left = pivotIndex + 1; // shorten search space on left 
    }       
  }
  
  return false; 
};
/* // m - row. n - col. 
Time complexity : O(log(mn)) since it's a standard binary search.
Space complexity : O(1).
*/
#34 Find First and Last Position of Element in Sorted Array

Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]

// need to 
// use binary search to find the target and its index
// once find the target, need to iterate both left and right until reach indices not target
// return range
// [firstTargetIndex, lastTargetIndex] 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


 public int findFirstIdx(int []nums, int target){
            int index=-1;
            int low=0;
            int high = nums.length-1;
            int mid=0;
            while(low<=high){
                mid=(low+high)/2;
                if(nums[mid]==target){
                    index=mid;
                     high=mid-1;
                }else if(nums[mid] >= target){
                    high=mid-1;
                }else if(nums[mid]<target){
                    low=mid+1;
                }
                
            }
        return index;
        }




var searchRange = function(nums, target) {
// 2 subproblems
// 1) find leftmost index
// 2) find rightmost index
  var result = []; 

  // binary search
  // start at mid
  // continue traverse left until 
  // low is target and
  // low - 1 is not target 
  
  
  var findLeftBinarySearch = function() {
   // init low and high and mid
   var low = 0;
   var high = nums.length - 1;
   var mid; 
    
   while (low <= high) {
     mid = Math.floor((low + high) / 2); 
     //   match then continue search left until no match 
     if (nums[mid] === target) {    // check if target
      // check if prev not target
      // [5,7,7,8,8,99999,,8,8,8,8,10],
       if (nums[mid - 1] !== target) { // mid=0
          result.push(mid); // push left index to results  
          break;  
       }else{
         // traverse left until
         high = mid - 1; 
       }
       
     
     } else {
        if (nums[mid] < nums[mid + 1]) {
          low = mid + 1;
        }
        else {
          high = mid - 1; 
        } 
       }
     else {
       // binary search here as well  
     }
     
   }
  }
  
  var findLeftmost = function() { // binary search
   // given sorted array start from left
   // iterate until find first instance of target
   // return index
    for(var i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        result.push(i); // push left 
        break; 
     }
    }
  }
  
  var findRightmost = function() { // apply binary search 
    // given sorted array start from end of array
    // iterate backwards
    // until find first instance of target
    // return index 
    var end = nums.length - 1;
    
    for(var i = end; i > -1; i--) {
      if (nums[i] === target) {
        result.push(i); // push right 
        break; 
     }
    }
  }
  
  findLeftmost();
  findRightmost();
  
  if (result.length === 0) {
      return [-1, -1]; // if no target 
  }
  else {
   return result;    
  } 
};



#852 Peak Index in a Mountain Array

Let's call an array arr a mountain if the following properties hold:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... arr[i-1] < arr[i]
arr[i] > arr[i+1] > ... > arr[arr.length - 1]
Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

 

Example 1:

Input: arr = [0,1,0]
Output: 1

int bms(int* arr, int begin, int end) {
    int mid;
    
  while (begin <= end) {
    mid = begin + (end - begin)/2;

   
    if ((arr[mid -1] < arr[mid]) && (arr[mid] > arr[mid +1])){
        return mid;
    }
    else if (arr[mid] < arr[mid +1]){
        begin = mid +1;
        
    } else if (arr[mid] > arr[mid +1]){
        end = mid; 
    }   
  }


[1 2 3 4 5 4 3 2 1]

  return mid;
  
}
  
int peakIndexInMountainArray(int* arr, int arrSize){
  return bms(arr, 0, arrSize -1);

}


/**
 * @param {number[]} arr
 * @return {number}
 */
// O(N) solution 
var peakIndexInMountainArray = function(arr) {
    for(i of arr) {
      if (arr[i] > arr[i + 1]) {
        return i; 
      }
    }
};

// Binary Search
// [0,10,5,2 1 0 -1] 
// arr is a mountain - need to search until find largest value - return index 
var peakIndexInMountainArray = function(arr) {
  // identify mid
  // where arr[i] < arr[i + 1] 
  //   return index
  
  // init low and high and mid
  var low = 0;
  var high = arr.length - 1;
  var mid;
  
  while (low < high) {// low <= high - infinite loop 
   mid = Math.floor((low + high) / 2); // returns integer not float 
   if (arr[mid] < arr[mid + 1]) {  // condition 
      low = mid + 1;
   }
   else {
     // do not want to discard value in search space
     // thats why we don't want to do high = mid - 1
      high = mid;    
   } 
  }
  
  return low; 
};