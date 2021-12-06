"""
Height-balanced binary tree

Given a binary tree, determine if it is height-balanced.

This means a binary tree in which the depth of the two subtrees
of *every* node never differ by more than 1. 

Given the tree [1, 2, 2, 3, 3, null, null, 4, 4]
return False.
"""
class TreeNode:
    def __init__(self, data):
        self.val = data
        self.left = None
        self.right = None

def heightBalanced(root):

    def findHeight(root):
        # base condition 
        if root is None: return 0
        return max(findHeight(root.left), findHeight(root.right)) + 1

    # base condition 
    if root is None: return True 

    # track left and right subtrees
    left_subtree = findHeight(root.left)
    right_subtree = findHeight(root.right)

    if (abs(left_subtree - right_subtree) <= 1) and heightBalanced(root.left) is True and heightBalanced(root.right) is True:
        return True 
    else:
        return False 

# test 
root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.left.left.left = TreeNode(8)

if heightBalanced(root): print('Balanced.')
else: print('Unbalanced.')