/*
Dynamic programming is used where we have problems, which can be divided into similar sub-problems, so that their results can be re-used.

Wherever we see a recursive solution that has repeated calls for same inputs, we can optimize it using Dynamic Programming.
*/

/*
#53 Maximum Subarray
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var n = nums.length;
  var maxSum = nums[0];
  for(var i = 1; i < n; i++) {
    if (nums[i - 1] > 0) {
      nums[i] += nums[i - 1];  
    } 
    maxSum = Math.max(nums[i], maxSum);
  }
  return maxSum;  
};

/*
#198 House Robber
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
             Total amount you can rob = 1 + 3 = 4.
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  var prevMax = 0;
  var currMax = 0;
  for (var x = 0; x < nums; x++) {
      var temp = currMax;
      currMax = Math.max(prevMax + x, currMax);
      prevMax = temp;
  }
  return currMax;  
};

/*
#121 Best Time to Buy and Sell Stock
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

Example 1:

Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var minprice = 0;
    var maxprofit = 0;
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < minprice)
            minprice = prices[i];
        else if (prices[i] - minprice > maxprofit)
            maxprofit = prices[i] - minprice;
    }
    return maxprofit; 
};

/*
#256 Paint House
There is a row of n houses, where each house can be painted one of three colors: red, blue, or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.

The cost of painting each house with a certain color is represented by a n x 3 cost matrix. For example, costs[0][0] is the cost of painting house 0 with the color red; costs[1][2] is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.

Example 1:

Input: costs = [[17,2,17],[16,16,5],[14,3,19]]
Output: 10
Explanation: Paint house 0 into blue, paint house 1 into green, paint house 2 into blue.
Minimum cost: 2 + 5 + 3 = 10.
Example 2:

Input: costs = []
Output: 0
Example 3:

Input: costs = [[7,6,2]]
Output: 2
/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    // for each cost in cost
    // find min and add to total
    // and paint the house a color dif from adj
  
    /* 
    subproblem: cost for a house POSITION and COLOR
    e.g. 
    
    3 colors. (0, 1, 2) 
    if cost arr 3, then house cost 3 possible values. 
    3 X 3 = 9 total subproblems. 
     
    replace each house cost value in the array with the cost of painting the house a given color and the min cost to paint all the houses after it
    */
    
   /*
     r  b  g             when painting house, do not select adj (top) color.
   [[17,2,17],           select color which has the min value of 2 above houses
  i[16,16,5],            and add that value to current value of house
   [14,3,19]]
   */ 
  
  // get length of 2d arr
   var costsHeight = costs.length;
   
   // check that input arr is not empty 
   if (costsHeight === 0) {
    return 0;  
   }
  
   var prevRow = costs[costsHeight - 1];
  
   for(var n = costsHeight - 2; n >= 0; n--) {  
     var currRow = Object.assign({}, costs[n]);
     
     currRow[0] += Math.min(prevRow[1], prevRow[2]);
     
     currRow[1] += Math.min(prevRow[0], prevRow[2]);
     
     currRow[2] += Math.min(prevRow[0], prevRow[1]);

     prevRow = currRow
   }
  
   return Math.min(Math.min(prevRow[0], prevRow[1]), prevRow[2]); 
};

/*
#746 Min Cost Climbing Stairs

On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.
Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].

// Cost is sum of values of 'steps' to get to top.

// Can start on 'step' 0 or 1. There are 2 base cases: step 0 and step 1. 

// Can move 1 or 2 steps at a time.

// On each move check 1 step ahead and 2 steps ahead. Compare
// the two values and select min value. Move to this step. Repeat
// until reach the top. 

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
  var move1 = 0;
  var move2 = 0; 
  
  var cost = cost.reverse(); 
  
  cost.forEach(function(val) {
    move1 = val + Math.min(move1, move2); 
    move2 = move1;
  }); 
  
  return Math.min(move1, move2); 
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
