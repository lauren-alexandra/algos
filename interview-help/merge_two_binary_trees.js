/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    // modify tree 1 as appropriate
    
    // do null check comparisons: 
    
    // if node of tree 1 is null, use tree 2 node as node to be added to final tree 
    if (t1 == null) {
        return t2; 
    }
    // if node of tree 2 is null, use tree 1 node as node to be added to final tree 
    else if (t2 == null) {
        return t1; 
    }
    
    // sum overlapping nodes to set t1 value 
    t1.val += t2.val; 
    
    // recursive call 
    
    // assign left node 
    t1.left = mergeTrees(t1.left, t2.left);
    // assign right node 
    t1.right = mergeTrees(t1.right, t2.right); 
    
    return t1; 
};