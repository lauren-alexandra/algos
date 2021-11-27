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

// debug
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

/*
122. Best Time to Buy and Sell Stock II

You are given an array prices where prices[i] is the price of a given stock on the ith day.

Find the maximum profit you can achieve. You may complete as many transactions as you like (i.e., buy one and sell one share of the stock multiple times).

Note: You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 7
Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
Example 2:

Input: prices = [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are engaging multiple transactions at the same time. You must sell before buying again.
Example 3:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e., max profit = 0.
*/ 

/*
Solution Explanation:

Simple One Pass

Instead of looking for every peak following a valley, we can simply go on crawling over the slope and keep on adding the profit obtained from every consecutive transaction. 
In the end,we will be using the peaks and valleys effectively, but we need not track the costs corresponding to the peaks and valleys along with the maximum profit, but we can directly keep on adding the difference between the consecutive numbers of the array if the second number is larger than the first one, and at the total sum we obtain will be the maximum profit. 

[1, 7, 2, 3, 6, 7, 6, 7]

The graph corresponding to this array is:

From the above graph, we can observe that the sum A+B+C is equal to the difference D corresponding to the difference between the heights of the consecutive peak and valley.

Complexity Analysis

Time complexity : O(n). Single pass.

Space complexity: O(1). Constant space needed.
*/

/**
 * @param {number[]} prices
 * @return {number}
 */
 const maxProfit = function(prices) {
    
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
};

/*
1480. Running Sum of 1d Array

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        // Result at index `i` is sum of result at `i-1` and element at `i` 
        nums[i] += nums[i - 1];
    } 
    
    return nums;    
};

/*
121. Best Time to Buy and Sell Stock

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
*/ 
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            if(profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    
    return maxProfit; 
};

/*
78. Subsets

Given an integer array nums of unique elements, return all possible subsets (the power set).

The solution set must not contain duplicate subsets. Return the solution in any order.

 

Example 1:

Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Example 2:

Input: nums = [0]
Output: [[],[0]]
*/


/*
860. Lemonade Change

At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you don't have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with correct change, or false otherwise.

Example 1:

Input: bills = [5,5,5,10,20]
Output: true
Explanation: 
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    const cashInRegister = {
        '5': 0,
        '10': 0,
        '20': 0
    }; 
    
    for (const bill of bills) {
        if (bill === 5) {
            cashInRegister['5'] += 1;
        }
        else if (bill === 20) {
            let change1 = cashInRegister['10'] >= 1 && cashInRegister['5'] >= 1;
            let change2 = cashInRegister['5'] >= 3; 
            
            if (!change1 && !change2) {
                return false;
            }
            else if (change1) {
                cashInRegister['10'] -= 1;
                cashInRegister['5'] -= 1;
                
                cashInRegister['20'] += 1;
            }
            else {
                cashInRegister['5'] -= 3;
                
                cashInRegister['20'] += 1;
            }
        }
        else {
            let change3 = cashInRegister['5'] >= 1;
            
            if (!change3) {
                return false;
            } 
            else {
                cashInRegister['5'] -= 1;
                
                cashInRegister['10'] += 1;
            }
        }
    }
    
    return true;
};

/*
883. Projection Area of 3D Shapes

You are given an n x n grid where we place some 1 x 1 x 1 cubes that are axis-aligned with the x, y, and z axes.

Each value v = grid[i][j] represents a tower of v cubes placed on top of the cell (i, j).

We view the projection of these cubes onto the xy, yz, and zx planes.

A projection is like a shadow, that maps our 3-dimensional figure to a 2-dimensional plane. We are viewing the "shadow" when looking at the cubes from the top, the front, and the side.

Return the total area of all three projections.

Example 1:
Input: grid = [[1,2],[3,4]]
Output: 17
Explanation: Here are the three projections ("shadows") of the shape made with each axis-aligned plane.
*/

/*
Solution

Approach 1: Mathematical
Intuition and Algorithm

From the top, the shadow made by the shape will be 1 square for each non-zero value.

From the side, the shadow made by the shape will be the largest value for each row in the grid.

From the front, the shadow made by the shape will be the largest value for each column in the grid.

Example

With the example [[1,2],[3,4]]:

The shadow from the top will be 4, since there are four non-zero values in the grid;

The shadow from the side will be 2 + 4, since the maximum value of the first row is 2, and the maximum value of the second row is 4;

The shadow from the front will be 3 + 4, since the maximum value of the first column is 3, and the maximum value of the second column is 4.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
 var projectionArea = function(grid) {
    let answer = 0;
    
    for (let i = 0; i < grid.length; i++) {
        let bestRow = 0; 
        let bestCol = 0;
        
        for (let j = 0; j < grid.length; j++) {
            if (grid[i][j] > 0) {
                answer += 1; // add to top shadow
            }
            bestRow = Math.max(bestRow, grid[i][j]);
            bestCol = Math.max(bestCol, grid[j][i]);
        }
        answer += bestRow + bestCol; 
    }
    
    return answer;
};

/*
888. Fair Candy Swap

Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.

Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.

Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

Example 1:

Input: aliceSizes = [1,1], bobSizes = [2,2]
Output: [1,2]
Example 2:

Input: aliceSizes = [1,2], bobSizes = [2,3]
Output: [1,2]
*/

/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
 var fairCandySwap = function(aliceSizes, bobSizes) {
    // objective: find the two boxes from each collection that would 
    // balance out the two totals (if swapped)
    
    // the two boxes are guaranteed to exist
    
    // calcuate baseline totals for both arrays
    
    // brute force: 
    // nested iteration
    
    // for each size in alice
    // do a swap with a size in bob 
    
    // a swap can be defined as:
    // subtracting a number from a total and adding a new number to the total
    // do for both totals
    // then do a compare. 
    // if the totals are equal return the two sizes in array. 
    
    let aliceTotal = aliceSizes.reduce((a, b) => a + b, 0);
    let bobTotal = bobSizes.reduce((a, b) => a + b, 0);
    
    for (let aSize of aliceSizes) {
        for (let bSize of bobSizes) {
            // swap
            
            let currAliceTotal = aliceTotal - aSize + bSize;
            let currBobTotal = bobTotal - bSize + aSize;
            
            if (currAliceTotal === currBobTotal) {
                return [aSize, bSize];
            }
        }
    }
};

/* Arrays and Dynamic Programming example */

/*
221. Maximal Square

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example 1:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4
*/

/*
Solution:

Approach #2 (Dynamic Programming) [Accepted]
Algorithm

We will explain this approach with the help of an example.

We initialize another matrix (dp) with the same dimensions as the original one initialized with all 0’s.

dp(i,j) represents the side length of the maximum square whose bottom right corner is the cell with index (i,j) in the original matrix.

Starting from index (0,0), for every 1 found in the original matrix, we update the value of the current element as
dpMatrix[i][j] = Math.min(Math.min(dpMatrix[i][j-1], dpMatrix[i-1][j]), dpMatrix[i-1][j-1]) + 1; 

We also remember the size of the largest square found so far. In this way, we traverse the original matrix once and find out the required maximum size. This gives the side length of the square (say maxsqlenmaxsqlen). The required result is the area maxsqlen^2maxsqlen 
2
 .

 An entry 2 at (1, 3)(1,3) implies that we have a square of side 2 up to that index in the original matrix. Similarly, a 2 at (1, 2)(1,2) and (2, 2)(2,2) implies that a square of side 2 exists up to that index in the original matrix. Now to make a square of side 3, only a single entry of 1 is pending at (2, 3)(2,3). So, we enter a 3 corresponding to that position in the dp array.
*/

/*
Complexity Analysis:

Time complexity : O(mn)O(mn). Single pass.

Space complexity : O(mn)O(mn). Another matrix of same size is used for dp.
*/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalSquare = function(matrix) {
    let rows = matrix.length;
    let cols = rows > 0 ? matrix[0].length : 0; 
    
    // create another matrix for keeping track of squares found.
    // the matrix has to be 1 size larger for both rows and columns because we are 
    // iterating 1 ahead below in search
    
    let dpMatrix = new Array(rows + 1);
    for(let d = 0; d < dpMatrix.length; d++) {
        if (cols > 0) {
            dpMatrix[d] = new Array(cols + 1);
            dpMatrix[d].fill(0);    
        }
    }
    
    /* Search for max square length */ 
    
    let maxSquareLen = 0; 
    
    for (let i = 1; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            if (matrix[i-1][j-1] === '1') {
                // this is the formula for finding the largest square so far
                dpMatrix[i][j] = Math.min(Math.min(dpMatrix[i][j-1], dpMatrix[i-1][j]), dpMatrix[i-1][j-1]) + 1; 
                maxSquareLen = Math.max(maxSquareLen, dpMatrix[i][j]);
            }
        }
    }
    
    return maxSquareLen * maxSquareLen;    
};


/*
941. Valid Mountain Array

Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
*/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    // check first condition greater than or equal to 3.
    
    // find "peak" - max value in array
    
    // then do two pointers
    // stop iterating one side if next is peak
    // the next element must be 1 or more greater than current
    
    let result = true;
    
    if (!(arr.length >= 3)) {
        return false;
    }
    
    const peak = Math.max(...arr);
    let peakLoc = arr.indexOf(peak);
    
    const side1 = arr.slice(0, peakLoc); 
    const side2 = arr.slice(peakLoc + 1).reverse(); 
    
    const sides = [side1, side2]; 
    
    if (side1.length !== 0 && side2.length !== 0) {
        sides.forEach(side => {
            for (let i = 0; i < side.length; i++) {
                if (side[i] < peak) {
                    if (side.length > 1 && i !== side.length - 1) {
                        if (side[i] < side[i + 1]) {
                            continue;
                        }
                        else {
                            result = false;
                        } 
                    }
                    else {
                        continue;
                    }   
                }
                else {
                    result = false;
                }
            }
        });   
    }
    else {
        result = false;
    }
    
    return result; 
};

/*
605. Can Place Flowers

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array flowerbed containing 0's and 1's, where 0 means empty and 1 means not empty, and an integer n, return if n new flowers can be planted in the flowerbed without violating the no-adjacent-flowers rule.


Example 1:

Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
*/

/*
Solution:
Approach #1 Single Scan [Accepted]
The solution is very simple. We can find out the extra maximum number of flowers, count, that can be planted for the given flowerbed arrangement. To do so, we can traverse over all the elements of the flowerbed and find out those elements which are 0(implying an empty position). For every such element, we check if its both adjacent positions are also empty. If so, we can plant a flower at the current position without violating the no-adjacent-flowers-rule. For the first and last elements, we need not check the previous and the next adjacent positions respectively.

If the count obtained is greater than or equal to nn, the required number of flowers to be planted, we can plant nn flowers in the empty spaces, otherwise not.
*/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let i = 0;
    let count = 0; 
    
    while (i < flowerbed.length) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            count++;
        }
        i++
    }
    
    return count >= n;
};

/*
1213. Intersection of Three Sorted Arrays

Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.


Example 1:

Input: arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]
Output: [1,5]
Explanation: Only 1 and 5 appeared in the three arrays.
*/

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
 var arraysIntersection = function(arr1, arr2, arr3) {
    // 3 pointers
    
    let result = [];
    
    let pointer1 = 0;
    let pointer2 = 0;
    let pointer3 = 0; 
    
    while (pointer1 < arr1.length && pointer2 < arr2.length && pointer3 < arr3.length) {
        if (arr1[pointer1] === arr2[pointer2] && arr2[pointer2] === arr3[pointer3]) {
            result.push(arr1[pointer1]);
            
            pointer1 += 1;
            pointer2 += 1;
            pointer3 += 1;
        }
        else {
            // if the value is smaller, you need to increment to compare appropriately
            if (arr1[pointer1] < arr2[pointer2]) {
                pointer1 += 1;
            }
            // if the value is smaller, you need to increment to compare appropriately
            else if (arr2[pointer2] < arr3[pointer3]) {
                pointer2 += 1;
            }
            // if the value is smaller, you need to increment to compare appropriately
            else {
                pointer3 += 1;
            }
        }
    }
    
    return result; 
};

/*
1085. Sum of Digits in the Minimum Number

Given an integer array nums, return 0 if the sum of the digits of the minimum integer in nums is odd, or 1 otherwise.

Example 1:

Input: nums = [34,23,1,24,75,33,54,8]
Output: 0
Explanation: The minimal element is 1, and the sum of those digits is 1 which is odd, so the answer is 0.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfDigits = function(nums) {
    /*
    find math min of nums
    
    then convert into string and split
    from there you need to add the integers - parseInt
    to init value 0
    
    once you get this value, find modulo. if can divide by 2,
    its even so return return 1. otherwise return 0. 
    */
    
    let min = Math.min(...nums);
    let minStr = min.toString().split('');
    let result = 0;
    
    for (let num of minStr) {
        result += parseInt(num, 10);    
    }
    
    return result % 2 === 0 ? 1 : 0; 
};


/*
1426. Counting Elements

Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.


Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
Example 2:

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there's no 2, 4, 6, or 8 in arr.
Example 3:

Input: arr = [1,3,2,3,5,0]
Output: 3
Explanation: 0, 1 and 2 are counted cause 1, 2 and 3 are in arr.
Example 4:

Input: arr = [1,1,2,2]
Output: 2
Explanation: Two 1s are counted cause 2 is in arr.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var countElements = function(arr) {
    /*
    iterate over arr
    for each element increment by 1 - sep var
    then do arr includes check. if true add to count
    */
      
    // edge cases
    // if the arr is length 1 or 0, return 0 
      
    let count = 0;
      
    if (arr.length <= 1) {
        return 0;
    }
      
    for (let elem of arr) {
        let incremented = elem + 1;
        if (arr.includes(incremented)) {
            count += 1;
        }
    }
      
    return count;
  };


/*
1762. Buildings With an Ocean View

There are n buildings in a line. You are given an integer array heights of size n that represents the heights of the buildings in the line.

The ocean is to the right of the buildings. A building has an ocean view if the building can see the ocean without obstructions. Formally, a building has an ocean view if all the buildings to its right have a smaller height.

Return a list of indices (0-indexed) of buildings that have an ocean view, sorted in increasing order.

 

Example 1:

Input: heights = [4,2,3,1]
Output: [0,2,3]
Explanation: Building 1 (0-indexed) does not have an ocean view because building 2 is taller.
*/

/**
 * @param {number[]} heights
 * @return {number[]}
 */
 var findBuildings = function(heights) {
/*
edge case:
if no buildings, return heights

if 1 building, return [0] 


define building with ocean view:
if every subsequent building is smaller than current building, then add the building index
to results to return. 

returning sorted results. the results are the indices of valid buildings i.e. have an ocean view
sorted in increasing order as an array of indices. 
*/
    
    if (heights.length === 0) {
        return [];
    }
    
    if (heights.length === 1) {
        return [0];
    }
    
    let results = []; 
    
    for (let b = 0; b < heights.length; b++) {
        
        
        // push the last building - guaranteed to have an ocean view
        if (heights.length - 1 === b) {
            results.push(b);
            break;
        }
        
        let buildingToRightIndex = b + 1;
        let buildingsToCompare = heights.slice(buildingToRightIndex);
        let currentBuildingHeight = heights[b];
        
        if (buildingsToCompare.every(height => height < currentBuildingHeight)) {
            results.push(b);
        }
    }
    
    return results.sort((a, b) => a - b); 
};

/*
1099. Two Sum Less Than K

Given an array nums of integers and integer k, return the maximum sum such that there exists i < j with nums[i] + nums[j] = sum and sum < k. If no i, j exist satisfying this equation, return -1.

 

Example 1:

Input: nums = [34,23,1,24,75,33,54,8], k = 60
Output: 58
Explanation: We can use 34 and 24 to sum 58 which is less than 60.
Example 2:

Input: nums = [10,20,30], k = 15
Output: -1
Explanation: In this case it is not possible to get a pair sum less that 15.
 
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var twoSumLessThanK = function(nums, k) {
    let answer = -1;
    
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            let sum = nums[i] + nums[j];
            
            if (sum < k) {
                answer = Math.max(answer, sum);
            }
        }
    }
    
    return answer;
};


/*
1243. Array Transformation

Given an initial array arr, every day you produce a new array using the array of the previous day.

On the i-th day, you do the following operations on the array of day i-1 to produce the array of day i:

If an element is smaller than both its left neighbor and its right neighbor, then this element is incremented.
If an element is bigger than both its left neighbor and its right neighbor, then this element is decremented.
The first and last elements never change.
After some days, the array does not change. Return that final array.

 

Example 1:

Input: arr = [6,2,3,4]
Output: [6,3,3,4]
Explanation: 
On the first day, the array is changed from [6,2,3,4] to [6,3,3,4].
No more operations can be done to this array.
*/


/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var transformArray = function(arr) {
    
    let changed = true;
    let result = arr.slice();
    
    while (changed) {
        changed = false;
        
        for (var i = 1; i < arr.length - 1; i++) {
            
            if (arr[i - 1] > arr[i] && arr[i + 1] > arr[i]) {
                result[i] = arr[i] + 1;
                changed = true;
            } else if (arr[i - 1] < arr[i] && arr[i + 1] < arr[i]) {
                result[i] = arr[i] - 1;
                changed = true;
            }
        }
        
        if (changed) {
            arr = result.slice();
        }
    }
    
    return result;
};

/*
1196. How Many Apples Can You Put into the Basket

You have some apples, where arr[i] is the weight of the i-th apple.  You also have a basket that can carry up to 5000 units of weight.

Return the maximum number of apples you can put in the basket.

 

Example 1:

Input: arr = [100,200,150,1000]
Output: 4
Explanation: All 4 apples can be carried by the basket since their sum of weights is 1450.
Example 2:

Input: arr = [900,950,800,1000,700,800]
Output: 5
Explanation: The sum of weights of the 6 apples exceeds 5000 so we choose any 5 of them.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
 var maxNumberOfApples = function(arr) {
    /*
    initialize apple count at 0. 
    
    if we want the maximum number of apples, we
    can sort the arr in increasing order.
    then iterate through list 
    add increase apple count by 1
    and add the weight to the currentWeight
    if the currentWeight is greater than or equal to basketMaxWeight
    then break
    
    note: before you add an apple, you must make sure that adding the apple does not
    go above basket max weight. 
    
    return apple count
    */
    
    let appleCount = 0; 
    let currentWeight = 0; 
    const BASKET_MAX_WEIGHT = 5000; 
    
    let sortedWeights = arr.sort((a, b) => a - b); 
    
    for (let weight of arr) {
        if (currentWeight > BASKET_MAX_WEIGHT) {
            break;
        }
        else {
            if (currentWeight + weight < BASKET_MAX_WEIGHT) {
                appleCount++;
                currentWeight += weight; 
                continue;
            }
            break; 
        }
    }
    
    return appleCount;
};


/*
1150. Check If a Number Is Majority Element in a Sorted Array

Given an integer array nums sorted in non-decreasing order and an integer target, return true if target is a majority element, or false otherwise.

A majority element in an array nums is an element that appears more than nums.length / 2 times in the array.

 

Example 1:

Input: nums = [2,4,5,5,5,5,5,6,6], target = 5
Output: true
Explanation: The value 5 appears 5 times and the length of the array is 9.
Thus, 5 is a majority element because 5 > 9/2 is true.
Example 2:

Input: nums = [10,100,101,101], target = 101
Output: false
Explanation: The value 101 appears 2 times and the length of the array is 4.
Thus, 101 is not a majority element because 2 > 4/2 is false.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
 var isMajorityElement = function(nums, target) {
    /*
    
    find target count aka how many times target occurs in array
    
    majority means target count greater than nums.length / 2 
    */
    
    let targetCount = 0; 
    let result = false;
    
    for (let num of nums) {
        if (num === target) {
            targetCount++;
        }
    }
    
    if (targetCount > (nums.length / 2)) {
        result = true;
    }
    
    return result;
};


/*
163. Missing Ranges

You are given an inclusive range [lower, upper] and a sorted unique integer array nums, where all elements are in the inclusive range.

A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

Return the smallest sorted list of ranges that cover every missing number exactly. That is, no element of nums is in any of the ranges, and each missing number is in one of the ranges.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 

Example 1:

Input: nums = [0,1,3,50,75], lower = 0, upper = 99
Output: ["2","4->49","51->74","76->99"]
Explanation: The ranges are:
[2,2] --> "2"
[4,49] --> "4->49"
[51,74] --> "51->74"
[76,99] --> "76->99"
Example 2:

Input: nums = [], lower = 1, upper = 1
Output: ["1"]
Explanation: The only missing range is [1,1], which becomes "1".
Example 3:

Input: nums = [], lower = -3, upper = -1
Output: ["-3->-1"]
Explanation: The only missing range is [-3,-1], which becomes "-3->-1".
Example 4:

Input: nums = [-1], lower = -1, upper = -1
Output: []
Explanation: There are no missing ranges since there are no missing numbers.
Example 5:

Input: nums = [-1], lower = -2, upper = -1
Output: ["-2"]
*/

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
 var findMissingRanges = function(nums, lower, upper) {
    /*
    iterate nums up until second to last number: arr.length - 2
    if the next integer is not an increase by 1, 
    then add one to current and subtract one from next (values only do not touch original)
    
    if these values are the same, then add "value" to listToReturn 
    else add "valueOne->valueTwo" to listToReturn 
    */
    
    
    /*
    if nums is length 0, then add the ranges: "lower->upper" to list
    
    if nums is length 1, check if it contains "lower" or "upper". return missing one. 
    if neither occur then add range of "lower->current - 1" and "current + 1->upper" to list 
    */ 
    
    let missingRanges = []; 
    
    // edge case 
    if (nums.length === 0) {
        if (lower === upper) {
            return [lower.toString()];
        }
        else {
            let lowToUpper = `${lower}->${upper}`; 
            return [lowToUpper];   
        }
    }
    
    // edge case 
    if (nums.length === 1) {
        let includesLower = nums.includes(lower.toString());
        let includesUpper = nums.includes(upper.toString());
        
        if (includesLower) {
            return [upper.toString()];
        }
        else if (includesUpper) {
            return [lower.toString()];
        }
        else {
            let onlyNum = parseInt(nums[0], 10);
            let firstRange = `${lower}->${onlyNum - 1}`;
            let secondRange = `${onlyNum + 1}->${upper}`;
            
            return [firstRange, secondRange];
        }
    }
    
    // add missing lower range if it exists first 
    if (parseInt(nums[0], 10) > lower) {
        let firstMinus = parseInt(nums[0], 10) - 1;
        let missingLower = `${lower}->${firstMinus}`; 
        missingRanges.push(missingLower);
    }
    
    for (let i = 0; i < nums.length - 1; i++) {
        let nextIndex = i + 1; 
        let current = parseInt(nums[i], 10); 
        let next = parseInt(nums[nextIndex], 10);
        let currentPlus = 0;
        let nextMinus = 0;
        
        if (next - 1 !== current) {
            currentPlus = current + 1;
            nextMinus = next - 1; 
            
            if (currentPlus === nextMinus) {
                missingRanges.push(currentPlus.toString());
            }
            else {
                let newMissingRange = `${currentPlus}->${nextMinus}`; 
                missingRanges.push(newMissingRange);
            }
        }
    }
    
    // add missing upper range if it exists last 
    if (parseInt(nums[nums.length - 1], 10) < upper) {
        let lastPlus = parseInt(nums[nums.length - 1], 10) + 1;
        let missingHigher = `${lastPlus}->${upper}`; 
        missingRanges.push(missingHigher);
    }
    
    return missingRanges; 
};


/*
1275. Find Winner on a Tic Tac Toe Game

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player A always places "X" characters, while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

 

Example 1:

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: "A" wins, he always plays first.
"X  "    "X  "    "X  "    "X  "    "X  "
"   " -> "   " -> " X " -> " X " -> " X "
"   "    "O  "    "O  "    "OO "    "OOX"
*/

/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
    /*
        if moves.flat().length > 9, return "Pending"
        
        you need to fill boardArray. 
        create Array, then push filler array on it 3 times
        [0, 0, 0] this is the filler array
        
        iterate through moves. starting with currentPlayer A, make mark X at 
        location in boardArray
        
        then you can do checks
        start with A: do rowCheck, do columnCheck, do diagonalCheck
        if any are true, return true. 
        create a function and pass in "X" do check with that
        
        call the function with "O" too and return true if true otherwise false
        
        then return as appropriate: 
        if A_Winner = true, return "A"
        if B_Winner = true, return "B"
        else return "Draw"
    */
    
    // check if possible first: Pending case
    if (moves.length > 9) {
       return "Pending";
    }
    
    let gameBoard = [];
    let fillerArray = [0, 0, 0];
    
    for (let i = 0; i < 3; i++) {
        gameBoard.push(fillerArray);
    }
    
    for (let move of moves) {
        let row = move[0];
        let col = move[1];
        let currentPlayer = "B";
        let mark = "";
        
        // flip currentPlayer 
        // if B then A and set mark to "X" 
        // if A then B and set mark to "O" 
        if (currentPlayer === "B") {
            currentPlayer = "A";
            mark = "X";
        }
        else {
            currentPlayer = "B";
            mark = "O";
        }
        
        gameBoard[row][col] = mark;
    }
    
    const boardCheck = (mark) => {
        let col0 = [];
        let col1 = [];
        let col2 = [];
        let columns = [col0, col1, col2];
        
        // rowCheck (a win across the row)
        for (let row of gameBoard) {
            if ([...new Set(row)].length === 1) {
                return true;
            }
            // generate columns
            col0.push(row[0]);
            col1.push(row[1]);
            col2.push(row[2]);
        }
        
        // columnCheck
        for (let c of columns) {
            if ([...new Set(c)].length === 1) {
                return true;
            }
        }
        
        // diagonalCheck
        // a diagonal is [0,0], [1,1], [2,2]
        // or [0, 2], [1, 1], [2, 0]
        let firstDiagonal = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
        let secondDiagonal = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];
        if ([...new Set(firstDiagonal)].length === 1) {
            return true;
        }
        if ([...new Set(secondDiagonal)].length === 1) {
            return true;
        }
                
        // if no wins
        return false; 
    };
    
    let A_Winner = boardCheck("X");
    let B_Winner = boardCheck("O");
    
    if (A_Winner) {
        return "A";
    } 
    else if (B_Winner) {
        return "B";
    }
    else {
        return "Draw";
    }
};


/*
496. Next Greater Element I

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    /*
    for each num in nums1:
    
    find the indexOf the num in nums2.
    create a slice array starting at that index
    
    then iterate through that array and find next greater element
    add that to ans array to return. if no greater, add -1 to ans.
    */
  
    let ans = [];
      
    for (let n of nums1) {
        let startingIndex = nums2.indexOf(n);
        let searchArr = nums2.slice(startingIndex);
        let resultElem = -1;
        
        for (let elem of searchArr) {
            if (elem > n) {
                resultElem = elem;
                break;
            }
        }
        
        ans.push(resultElem);
    }
      
    return ans; 
  };
