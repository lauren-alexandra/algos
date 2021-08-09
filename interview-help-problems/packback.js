/*
The Fibonacci Sequence is the series of numbers:
0, 1, 1, 2, 3, 5...

The next number is found by adding up the two numbers before it.
*/

/* 
Modified fibonacci
Number palindrome
*/

/*
#509 Fibonacci Number

The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

F(0) = 0,   F(1) = 1
F(N) = F(N - 1) + F(N - 2), for N > 1.
Given N, calculate F(N).

Example 1:

Input: 2
Output: 1
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
Example 2:

Input: 3
Output: 2
Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
*/

/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    if (N <= 1) {
        return N; 
    }
    if (N == 2) {
        return 1;
    }

    let current = 0
    let firstPrevious = 1
    let secondPrevious = 1

    for (var i = 3; i < N + 1; i++) {
        current = firstPrevious + secondPrevious;
        secondPrevious = firstPrevious;
        firstPrevious = current;
    }
    return current; 
};

/*
#873 Length of Longest Fibonacci Subsequence

A sequence X_1, X_2, ..., X_n is fibonacci-like if:

n >= 3
X_i + X_{i+1} = X_{i+2} for all i + 2 <= n
Given a strictly increasing array A of positive integers forming a sequence, find the length of the longest fibonacci-like subsequence of A.  If one does not exist, return 0.

(Recall that a subsequence is derived from another sequence A by deleting any number of elements (including none) from A, without changing the order of the remaining elements.  For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].)

 

Example 1:

Input: [1,2,3,4,5,6,7,8]
Output: 5
Explanation:
The longest subsequence that is fibonacci-like: [1,2,3,5,8].
Example 2:

Input: [1,3,7,11,12,14,18]
Output: 3
Explanation:
The longest subsequence that is fibonacci-like:
[1,11,12], [3,11,14] or [7,11,18].
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function(A) {
    let N = A.length;
     let index = new Map();
     A.map((v, i) => index[v] = i);
 
     let longest = new Map();
     let ans = 0;
     for (let k = 0; k < N; ++k)
         for (let j = 0; j < k; ++j) {
             let i = index[A[k] - A[j]];
             if (i === undefined || i >= j) continue;
             if (longest[i * N + j] === undefined)
                 longest[i * N + j] = 2;
 
             longest[j * N + k] = longest[i * N + j] + 1;
             ans = Math.max(ans, longest[j * N + k]);
         }
 
     return ans >= 3 ? ans : 0; 
 };

/*
#234 Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Example 1:

Input: 1->2
Output: false
Example 2:

Input: 1->2->2->1
Output: true
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    var nums = [];
    var currNode = head;
    while(currNode != null) {
     nums.push(currNode.val);
     currNode = currNode.next; 
    }
    var front = 0;
    var back = nums.length - 1;
    while (front < back) {
     if (!nums[front] === nums[back]) {
         return false;
     }
     front++;
     back--;
    }
    return true;
 };
 