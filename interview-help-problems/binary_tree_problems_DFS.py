"""
Problem 6: find the size (number of nodes) of a binary tree (not on leetcode).
Solution: to get the total number of nodes, we count the nodes in each subtree and then add 1 for the root. We use the induction template:
"""

def size(root):
  if not root: return 0
  return 1 + size(root.left) + size(root.right)


"""
Problem 7: find the maximum value of a binary tree (not on leetcode).
Solution: the maximum value is the maximum between the root and the maximum of each subtree. We use the induction template:

In Python, float("-inf") is the minimum possible numeric value. This guarantees that the max() function always chooses the other value.
"""

def maxValue(root): 
  if not root: return float("-inf")
  return max(root.val, max(maxValue(root.left), maxValue(root.right)))

"""
Problem 8: given a binary tree, invert it and return the root after inverting it (see the link for an explanation / example of what inverting means).
Link: https://leetcode.com/problems/invert-binary-tree/
Solution: this problem requires modifying the tree. Basically, we need to swap the children of each node. We can still use the induction template: we swap the children of the root, and let recursion take care of the subtrees.
"""

def invert(root):
  if not root: return None
  invert(root.left)
  invert(root.right)
  root.left, root.right = root.right, root.left
  return root


"""
Problem 9: find the maximum difference between any two values in a binary tree (not on leetcode).
Solution: the largest difference could be between a node in the left subtree and a node in the right subtree. 
Thus, we cannot compute the answer for the entire tree from the answers for the subtrees. 
This means that the induction template is not applicable. Instead, we need to find the maximum and minimum values 
in the entire tree. We can use the traverse-and-accumulate template. We keep maxVal and minVal as non-local variables 
that are updated as we traverse the tree:
"""

def maxDiff(root):
  if not root: return 0
  maxVal = float("-inf")
  minVal = float("inf")
 
  def visit(node):
    if not node: return
    nonlocal maxVal, minVal
    maxVal = max(maxVal, node.val)
    minVal = min(minVal, node.val)
    visit(node.left)
    visit(node.right)
 
  visit(root)
  return maxVal-minVal


"""
Problem 10: find the most common value in a binary tree, also known as the mode (not on leetcode).
Solution: The induction approach does not work because we cannot find the mode of the entire tree from the 
mode of the subtrees. The mode could be a value that appears often in both subtrees, but it is not the mode in either. 
Instead, we can build a dictionary / hash table val2count (read the "2" as "to") from the values in the tree to the number 
of times they appear. We can use the traverse-and-accumulate template. At the end, we can return the most frequent element 
in the dictionary.
"""

def mode(root):
  if not root: return None
  val2count = dict()
 
  def visit(node):
    if not node: return
    if node.val in val2count: val2count[node.val] += 1
    else val2count[node.val] = 1
    visit(node.left)
    visit(node.right)    
 
  visit(root)
 
  mode = 0
  modeCount = 0
  for val, count in val2count.items():
    if count > modeCount:
      mode = val
      modeCount = count
  return mode

"""
Problem 11: find the length of the longest vertical path of nodes with the same value. 
A vertical path is a path with at most 1 node at each height (not on leetcode).
Solution: we use the traverse-and-accumulate template. That is, as we visit the nodes, we keep 
track of the longest univalue vertical path found so far in a nonlocal variable. To calculate the 
streak at the current node, we pass down the tree the value and length of the current streak of 
consecutive ancestors with the same value.
"""

def longestVerticalPath(root):
  longest = 0
 
  def visit(node, streakVal, streakLen):
    if not node: return
    if node.val == streakVal: streakLen += 1
    else streakLen = 1
    nonlocal longest
    longest = max(longest, streakLen)
    visit(node.left, node.val, streakLen)
    visit(node.right, node.val, streakLen)
      
  visit(root, None, 0)
  return longest

"""
Problem 12: find the diameter of a binary tree. The diameter of a binary tree is the maximum distance between any 2 nodes.
Link: https://leetcode.com/problems/diameter-of-binary-tree/
Solution: any path in a rooted tree looks like /\, /, or \, so any path has a unique "shallowest" node (a node that is closer to the 
root than any other node in the path). For each node, we can find the longest path that has it as the shallowest node. The diameter is 
the length of the longest path among those paths.

To find the longest path that has a given node as the shallowest node, we have to try to go as deep as possible on each subtree of the node. 
In other words, we need to find the depth of each subtree of each node.

In the code, we combine the induction and traverse-and-accumulate templates: we use the induction template to pass the depth of each 
subtree to its parent. We use the traverse-and-accumulate template to keep track of the longest path seen so far with any of the visited 
nodes as the shallowest node.
"""

def diameter(root):
  longestPath = 0
    
  def depth(node):
    if not node: return 0
    depthLeft = depth(node.left)
    depthRight = depth(node.right)
    nonlocal longestPath
    longestPath = max(longestPath, depthLeft + depthRight)
    return 1 + max(depthLeft, depthRight)
  
  depth(root)
  return longestPath

"""
Problem 13: Find the tilt of a binary tree. The tilt of a binary tree is defined as the sum, for all the nodes, of the absolute difference between the sum of all left subtree node values and the sum of all right subtree node values (see the link for examples).
Link: https://leetcode.com/problems/binary-tree-tilt/
Solution: again, we combine the induction and traverse-and-accumulate templates. We use induction to pass the total sum of the subtrees from the children to parents. At the same time, we accumulate the tilt in a nonlocal variable.
"""

def tilt(root):
  tilt = 0
  
  def valueSum(node):
    if not root: return 0
    lSum = valueSum(node.left)
    rSum = valueSum(node.right)
    nonlocal tilt
    tilt += abs(lSum-rSum)
    return lSum + rSum + node.val
  
  valueSum(root)
  return tilt


# BALANCED BINARY TREE PROBLEMS

"""
Problem 13: given a binary tree, determine if it is balanced. For this problem, we consider that a tree is balanced if the left 
and right subtrees of the root are balanced and their heights differ at most by 1.
Link: https://leetcode.com/problems/balanced-binary-tree/

Solution: each node needs to know the height of its subtrees, so we use the induction template to pass the heights up the tree. 
We use a special height value, -1, to indicate that one of the subtrees is not balanced.
"""

def isBalanced(root):
    return getHeight(root) != -1
 
def getHeight(root):
    if not root: return 0
    lh, rh = getHeight(root.left), getHeight(root.right)
    if lh == -1 or rh == -1 or abs(lh - rh) > 1: return -1
    return max(lh, rh) + 1


# OR CAN DO THIS optimization:
"""
In addition, we can do an optimization in getHeight(): if any node is unbalanced, then the entire tree is unbalanced. 
Thus, if we find that one subtree is unbalanced, we don't need to check the other one, we can terminate early:
"""
def isBalanced(root):
    return getHeight(root) != -1
 
def getHeight(root):
    if not root: return 0
    lh = getHeight(root.left)
    if lh == -1: return -1
    rh = getHeight(root.right)
    if rh == -1 or abs(lh - rh) > 1: return -1
    return max(lh, rh) + 1


# BINARY SEARCH TREE PROBLEMS

"""
Problem 15: return whether a binary tree satisfies the BST property.
Link: https://leetcode.com/problems/validate-binary-search-tree/

Solution: we visit all the nodes following an inorder traversal, and we check that each node is larger 
than the previous one. We use the traverse-and-accumulate template to keep track of the previous node in the 
traversal in a nonlocal variable. We also keep track of whether the BST property has been broken. 
As an optimization, as soon as we find that it's not valid, we can stop visiting subtrees recursively and simply return. 
This takes us out of the recursive calls.
"""

def isValid(root):
  prev = None
  valid = True
  
 
  def visit(node):
    nonlocal prev, valid
    if not node: return
    if not valid: return 
    visit(node.left)
    if prev != None and node.val <= prev: valid = False
    prev = node.val
    visit(node.right)
  
  visit(root)
  return valid


"""
Problem 16: given a binary search tree, find the minimum absolute difference between the values of any two nodes.
Link: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

Solution: we use the following observation: since the nodes are sorted according to an inorder traversal, 
the minimum difference between any two nodes must exist between two consecutive nodes in an inorder traversal. 
As in the previous problem, we use the traverse-and-accumulate template to visit the nodes in an inorder traversal 
and keep track of the previous node in the order in a nonlocal variable. We also keep track of the smallest difference found so far.
"""

def minDifference(root):
  prev = None
  res = float('inf')
  
  def visit(node):
    if not node: return
    visit(node.left)
    nonlocal prev, res
    if prev != None: res = min(res, node.val - prev)
    prev = node.val
    visit(node.right)
  
  visit(root)
  return res


"""
Problem 17: given a binary search tree, replace the value of each node for the sum of all the values in the tree that are 
larger or equal than the node's value. Return the root of the modified tree.
Link: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/

Solution: we use the following observation: for each node, the nodes that have a larger value are the ones that appear 
later in an inorder traversal. This time, we traverse the nodes in a reverse inorder traversal, and accumulate the sum of 
values so far. We use the traverse-and-accumulate template.
"""

def greaterSumTree(root):
  accum = 0
  
  def visit(node):
    if not node: return
    visit(node.right)
    nonlocal accum
    accum += node.val
    node.val = accum
    visit(node.left)
  
  visit(root)
  return root


"""
Problem 18: check if a BST contains a given value.
Link: https://leetcode.com/problems/search-in-a-binary-search-tree/ (the problem is a bit different because it asks to return the node 
containing the value, instead of just true/false).

Solution: we compare the searched value with the value of the root. Depending if it's smaller, equal, or larger, we know we need to 
search in the left subtree, return True, or search in the right subtree. This is like doing binary search in an array, but instead of 
going into the left or right side of the midpoint, we go into the left or right subtrees of the root.
"""

def contains(root, value):
  if not root: return None
  if root.val == value: return root
  if root.val > value: return contains(root.left, value)
  return contains(root.right, value)


"""
Problem 19: insert a given value into a BST and return the root of the modified tree. Assume that the value is not already in the tree. You do not need to rebalance the tree if the insertion makes it unbalanced.
Link: https://leetcode.com/problems/insert-into-a-binary-search-tree/

Solution: we create a new node with the given value and we place it in one of the current missing nodes in the BST. 
To find where to put the new element, we basically do the same as searching for the value: if the new value is smaller than the root, 
we need to insert it in the left subtree, and if it is larger, we need to insert it in the right subtree.
"""

def insert(root, value):
  if root == None: return TreeNode(value)
  if root.val > value: root.left = insert(root.left, value)
  else: root.right = insert(root.right, value)
  return root


"""
Problem 20: given a BST, find the closest value in the tree to a given value.
Link: https://leetcode.com/problems/closest-binary-search-tree-value/ (Premium only)

Solution: we compare the given value with the root's value. If they are equal, we can return the value itself. 
If the root is larger, then we know for sure that the closest value is not in the right subtree. Thus, we can look only 
in the left subtree. Same with the alternative case. We follow this logic recursively. Here is an iterative solution:
"""

def closestValue(root, value):
  closest = root.val
  while root:
    if root.val == value: return root.val
    if abs(root.val - value) < abs(closest - value): closest = root.val
    if root.val > value: root = root.left
    else: root = root.right
  return closest


