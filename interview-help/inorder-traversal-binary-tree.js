/*
Given a binary tree, return the inorder traversal of its nodes' values.

Iterative Solution
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var inorderTraversal = function(root) {
    var stack = []; 
    var results = []; 
    if(root == null) {
        return [];
    }
    
    stack.push(root); 
  
    while (stack.length != 0) {
      while(root != null) {
       stack.push(root);  
       root = root.left; 
      }
      // if left null, remove node from stack
      root = stack.pop();
      // add the node's value to the results
      results.push(root.val);  
      // then set the node to it's right node
      root = root.right; 
    }
    results.pop(); 
          
    return results; 
};