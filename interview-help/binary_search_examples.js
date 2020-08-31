/*
Solve: Binary Search problems
https://leetcode.com/problems/valid-perfect-square/
https://leetcode.com/problems/sqrtx/
https://leetcode.com/problems/squares-of-a-sorted-array/
*/ 

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
var sortedSquares = function(A) {
    
};
