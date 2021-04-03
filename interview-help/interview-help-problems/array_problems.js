/*#243 Shortest Word Distance
Given a list of words and two words word1 and word2, return the shortest distance between these two words in the list.

Example:
Assume that words = ["practice", "makes", "perfect", "coding", "makes"].

Input: word1 = “coding”, word2 = “practice”
Output: 3
Input: word1 = "makes", word2 = "coding"
Output: 1*/ 
/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function(words, word1, word2) {
    var firstIndex = -1;
    var secondIndex = -1;
    var minDistance = words.length;
    for (var i = 0; i < words.length; i++) {
        if (words[i] == word1) {
            firstIndex = i;
        } else if (words[i] == word2) {
            secondIndex = i;
        }

        if (firstIndex != -1 && secondIndex != -1) {
            minDistance = Math.min(minDistance, Math.abs(firstIndex - secondIndex));
        }
    }
    return minDistance;
};
/*
#766 Toeplitz Matrix
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.*/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    for (var row = 0; row < matrix.length; row++) {
     for (var col = 0; col < matrix[0].length; col++) {
         if (row > 0 && col > 0 && matrix[row-1][col-1] != matrix[row][col]) {
                return false;
            } 
        } 
    }
    return true;
};

/*
#409 Longest Palindrome
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.*/ 
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    var count = new Array(); 
    var arr = s.split(""); 
    arr.forEach(function(c) {
        count[c]++; 
    }); 

    var answer = 0; 
    for(var letter of count) {
        answer += (answer / 2) * 2;
        if(answer % 2 == 0 && letter % 2 == 1){
            answer++
        }
    }
    return answer;    
};

/*
#283 Move Zeroes
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]*/ 
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  var indexOfLastNonZero = 0;
    for (var current = 0; current < nums.length; current++) {
        if (nums[current] != 0) {
            var tmpCurr = nums[current];
            nums[current] = nums[indexOfLastNonZero];
            nums[indexOfLastNonZero] = tmpCurr;
            indexOfLastNonZero++; 
        }
    }  
};










// need to debug
/* #867 Transpose Matrix
Given a matrix A, return the transpose of A.

The transpose of a matrix is the matrix flipped over it's main diagonal, switching the row and column indices of the matrix.

Example 1:

Input: [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
*/ 
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
  /*
  pseudocode
  iterate over rows, columns
  swap r, c with c, r
  */
  
  // get col, row length
  var Row = A.length;
  var Col = A[0].length; 
  
  // create matrix to return 
  var result = Array(Col).fill(Array(Row).fill(0)); 
  
  // trying another way of initializing matrix-- returning result all 0s
  
  
  // iterate rows
    for(var r = 0; r < Row; r++) {
      // iterate cols
      for(var c = 0; c < Col; c++) {
        // swap
        // p
        result[c][r] = A[r][c]; 
        //print result[c][r]
        
      }
    }
  
  return result; 
};

/* #643 Maximum Average Subarray I

Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
*/ 
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    sum = new Array(nums.length); 
    sum[0] = nums[0];
    for(var i = 1; i < nums.length; i++) {
        sum[i] = sum[i - 1] + nums[i]
        res = sum[k - 1] * 1.0 / k;
    }
    for(var i = k; i < nums.length; i++) {
        res = Math.max(res, (sum[i] - sum[i - k]) * 1.0 / k); 
    }
    
    return res; 
};

/* #189 Rotate Array

Given an array, rotate the array to the right by k steps, where k is non-negative.

Follow up:

Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
Could you do it in-place with O(1) extra space?
 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
*/ 

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var newArr = []; 
    var index;
    for(var i = 0; i < nums.length; i++){
        index = (i + k) % nums.length; 
        newArr[index] = nums[i];
    }
    var end = nums.length; 
    nums.splice(0, end);
    
    for(var j = 0; j < newArr.length; j++) {
        nums.push(newArr[j]); 
    }
}