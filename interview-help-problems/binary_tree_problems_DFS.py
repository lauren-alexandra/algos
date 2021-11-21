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



# Traversal and Induction Problems Leetcode

"""
236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the definition of LCA on Wikipedia: 
“The lowest common Ancestor is defined between two nodes p and q as the lowest node in T 
that has both p and q as descendants (where we allow a node to be a descendant of itself).”


Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.

Example 2:
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
         # dfs recursive
            
        if not root: return
        if root is p or root is q:
            return root
        
        left = self.lowestCommonAncestor(root.left,p,q)
        right = self.lowestCommonAncestor(root.right,p,q)
        
        # can't find common ancestor
        if not (left or right): return

        # found a common root
        elif left and right: return root

        # p or q is the common
        elif left: return left
        # p or q is the common
        elif right: return right


"""
129. Sum Root to Leaf Numbers

You are given the root of a binary tree containing digits from 0 to 9 only.

Each root-to-leaf path in the tree represents a number.

For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
Return the total sum of all root-to-leaf numbers. Test cases are generated so that the answer will fit in a 32-bit integer.

A leaf node is a node with no children.

Example 1:
Input: root = [1,2,3]
Output: 25
Explanation:
The root-to-leaf path 1->2 represents the number 12.
The root-to-leaf path 1->3 represents the number 13.
Therefore, sum = 12 + 13 = 25.

Example 2:
Input: root = [4,9,0,5,1]
Output: 1026
Explanation:
The root-to-leaf path 4->9->5 represents the number 495.
The root-to-leaf path 4->9->1 represents the number 491.
The root-to-leaf path 4->0 represents the number 40.
Therefore, sum = 495 + 491 + 40 = 1026.
"""

"""
I think it's a traverse and accumlate
You need to go down every root to leaf path and add each value in the
path to a path sum.
That path sum should be added to the total to return.
"""

"""
It is Traverse-and-accumulate template. 

Traverse-and-accumulate template: we visit all the nodes with a traversal, and accumulate the wanted information in a nonlocal variable.

If we need to accumulate some global information about the entire tree, we can use the traverse-and-accumulate template. 
This template is like doing a for loop through all the nodes, which is often very convenient. It would be great to be able to simply do

initialize some data
for node in tree:
  do_something(node)

The traverse-and-accumulate template is basically a way to achieve this. It doesn’t look like a for loop, because it uses recursion, but it can be used like a for loop!
"""

# Template
def solution(root):
  res = ... #initial value
 
  def visit(node):
    if not node: return
    res = ... #update res here
    visit(node.left)
    visit(node.right)
  
  visit(root)
  return res

"""
We use Depth First Search to reach to every leaf node. 
Since we are adding the digits together, e.g. 1 + 2 + 3 = 123 as we traverse, 
we can multiply by 10 so that in the next recursive call, we will just need to add the 
current root.val number which will be in the single digits. 

Step 1: Define base case and append all the sum
Step 2: Recurse through child and pass sum * 10 as a parameter

Big O: O(n) Linear
If we visit every node (e.g., if we are doing one of the traversals), then the runtime is O(n*T), 
where T is the time spent at each node. Usually, T is just constant, so the runtime is O(n).
"""

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def sumNumbers(self, root: Optional[TreeNode]) -> int:
      # to store sum till each child
      res = []
      
      def dfs(root, sum):
          nonlocal res
          sum += root.val
          #base case - this includes reaching the leaf values and having the sum be someting like 123. 
          if root.left == None and root.right == None:
              res.append(sum)
              return
          
          # As we traverse, we can multiply by 10 so that in the next recursive call, we will just need 
          # to add the current root.val number which will be in the single digits.
          if root.left: dfs(root.left, sum * 10)
          if root.right: dfs(root.right, sum * 10)
      
      if root:   
          # starting the process with 0 as the initial sum
          dfs(root, 0) 

          # return sum of all child
          return sum(res) # will return the total of all sums in res array.

      # return 0 as edge case if no root. 
      return 0 


"""
865. Smallest Subtree with all the Deepest Nodes

Given the root of a binary tree, the depth of each node is the shortest distance to the root.

Return the smallest subtree such that it contains all the deepest nodes in the original tree.

A node is called the deepest if it has the largest depth possible among any node in the entire tree.

The subtree of a node is a tree consisting of that node, plus the set of all descendants of that node.

Example 1:
Input: root = [3,5,1,6,2,0,8,null,null,7,4]
Output: [2,7,4]
Explanation: We return the node with value 2, colored in yellow in the diagram.
The nodes coloured in blue are the deepest nodes of the tree.
Notice that nodes 5, 3 and 2 contain the deepest nodes in the tree but node 2 is the smallest subtree among them, so we return it.

Example 2:

Input: root = [1]
Output: [1]
Explanation: The root is the deepest node in the tree.
"""

"""
It is Traverse-and-accumulate template. 

Traverse-and-accumulate template: we visit all the nodes with a traversal, and accumulate the wanted information in a nonlocal variable.

If we need to accumulate some global information about the entire tree, we can use the traverse-and-accumulate template. 
This template is like doing a for loop through all the nodes, which is often very convenient. It would be great to be able to simply do.

O(n) because every node visited. 
"""

"""
Discussion of the recursion in the tree aka how this line works in traversal() call:
return max(cur_lvl, l_child_lvl, r_child_lvl)

The most common pattern for solving binary tree problems is to compute things in the children and then aggregate them in the parent. 
This is sometimes called the "bottom-up" approach. 
It works really well with recursion: to solve a problem for the entire tree, we can solve it first for the subtrees of the root 
(recursion takes care of that), and then use the results at the subtrees to solve the entire problem at the root.

e.g. We compute something for each subtree recursively and pass it up to the root using the return value of the recursive function.
"""

# Template
def solution(root):
  res = ... #initial value
 
  def visit(node):
    if not node: return
    res = ... #update res here
    visit(node.left)
    visit(node.right)
  
  visit(root)
  return res

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def subtreeWithAllDeepest(self, root: TreeNode) -> TreeNode:
        ans = root
        max_depth = 0

        def traversal(node, cur_lvl):
          nonlocal ans, max_depth

          if node == None:
              return 0
              
          # search left if left node and increase the current level as you traverse down the tree
          # we will get the return value from traversal as the max of current level, and the child levels
          l_child_lvl = traversal(node.left, cur_lvl + 1)
          
          # search right if right node and increase the current level as you traverse down the tree
          r_child_lvl = traversal(node.right, cur_lvl + 1)
          
          # continute to update the max depth as appropriate 
          if cur_lvl > max_depth:
              max_depth = cur_lvl
              
          if l_child_lvl == r_child_lvl == max_depth or cur_lvl == max_depth:
              # You want to return the node containing the subtree 
              # If the left child level and right child level are both the max depth (smallest subtree with greatest depth)
              # Or if the current level is equal to the max depth. This would be the case if there was one level in the tree.
              ans = node 

          # to set the left and right child levels appropriately (see above), we need to return max depth of the 3
          # to return the max from traversal()  
          return max(cur_lvl, l_child_lvl, r_child_lvl)

        traversal(root, 0)
        
        # return new subtree if exists 
        return ans

