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