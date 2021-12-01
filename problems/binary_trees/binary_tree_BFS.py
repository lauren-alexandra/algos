"""
Maximum depth of a binary tree

The maximum depth is the number of nodes along the longest path
from the root node down to the farthest leaf node. The root is at depth 1.

A leaf is a node with no children. 

Given binary tree [3, 9, 20, null, null, 15, 7]
return its depth.
# 3 

For reference here is the TreeNode class definition

class TreeNode(object):
    def __init__(self, x): 
        self.val = x
        self.left = None
        self.right = None
"""
from collections import deque 

def solution(root):
    res = []
    Q = deque([root])
    while Q: 
        res.append([])
        currLevelSize = len(Q)
        for i in range(currLevelSize):
            node = Q.popleft()
            res[-1].append(node.val)
            if node.left: Q.append(node.left)
            if node.right: Q.append(node.right)
    return len(res) 
