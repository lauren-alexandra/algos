/*
#11 Container with Most Water

Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.

Notice that you may not slant the container.

Example 1:

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

Example 2:

Input: height = [1,1]
Output: 1

Example 3:

Input: height = [4,3,2,1,4]
Output: 16
*/

// first solution is brute force nested time complexity O(n^2)
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    // init max
    var max = 0;
    
    // iterate over possible pairs of vertical lines
    for (var i = 0; i < height.length; i++) {
      for (var j = i + 1; j < height.length; j++) {
        // get shorter of two lines as 'container top edge'
        // need to find the smaller line of the pair
        // do a comparison. greater than max? reassign 
       max = Math.max(max, Math.min(height[i], height[j]) * (j - i)); 
      }
    }
    
    return max; 
  };

// optimized solution is one pass O(n) time complexity 
// one pass with two pointers

var maxArea = function(height) {
    // init max
    var max = 0; 
    // init left and right
    var left = 0;
    var right = height.length - 1; 
    
    // left must be less than right. move towards middle
    while (left < right) {
     // do compare with curr max
     max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
      
     // if left smaller increment
     if (height[left] < height[right]) {
       left++; 
     }
     else {
       // decrement on right
       right--;  
     }
    }
    
    return max; 
  }; 





