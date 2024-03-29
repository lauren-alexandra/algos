"""
1014. Best Sightseeing Pair

You are given an integer array values where values[i] represents the value of the ith sightseeing spot. Two sightseeing spots i and j 
have a distance j - i between them.

The score of a pair (i < j) of sightseeing spots is values[i] + values[j] + i - j: the sum of the values of the sightseeing spots, 
minus the distance between them.

Return the maximum score of a pair of sightseeing spots.

Example 1:

Input: values = [8,1,5,2,6]
Output: 11
Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11


Example 2:

Input: values = [1,2]
Output: 2
 

Constraints:

2 <= values.length <= 5 * 104
1 <= values[i] <= 1000
"""

from asyncio.subprocess import SubprocessStreamProtocol
from subprocess import CalledProcessError
from tkinter import N
from unittest import result


def best_sightseeing_pair(values): 
    n = len(values)
    ans = 0
    valuesiplusi = values[0]+0

    for j in range(1, n):
        ans = max(ans, valuesiplusi + values[j]-j)
        valuesiplusi = max(valuesiplusi, values[j]+j)
    
    return ans 


"""
221. Maximal Square

Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

Example 1:

Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 4

Example 2:

Input: matrix = [["0","1"],["1","0"]]
Output: 1

Example 3:

Input: matrix = [["0"]]
Output: 0

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.
"""
"""
In the tabulation bottom-up approach to DP (also known as the table-filling method) you solve all sub-problems and store their results on a matrix. 
These results are then used to solve larger problems that depend on the previously computed results.
"""

def maximal_square(matrix):
    row = len(matrix)
    col = len(matrix[0])

    # This generates a list containing row_size different lists of length column_size. A list comprehension:
    dp = [[0 for i in range(col)] for j in range(row)] 
    ans = 0 

    # O(row*col)
    for i in range(row):
        for j in range(col):
            #base case - for the first column or row - max value stored can be 1. check for that
            if i == 0 or j == 0:
                # if 1 is found in matrix, update dp to 1 for size of square
                if matrix[i][j] == '1':
                    dp[i][j] = 1

            else:
                if matrix[i][j] == '1':
                    # to make a square check left, top, top-left diagonal
                    # take the min value of these boxes to add to 1, storing the largest square found so far
                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1

            # answer is the largest square
            ans = max(ans, dp[i][j])

    return ans * ans # square area

# memo
def mainFunction(input):
	n = len(input)
	memo = dict()
	def recurrence(i): # i is the index of a subproblem
		if isBaseCase(i): return # result for base case
		if i in memo: return memo[i]
		memo[i] = aggregate(option1, option2, ...) # aggregate can be max/min/sum ...
		return memo[i]
	return recurrence(goalIndex) 


# tab
def mainFunction(input):
	n = # number of subproblems
	DP = n * [0] # table with one entry per subproblem

	DP[0] = # fill in base cases 

	for i in range(generalCaseStart, generalCaseEnd):
		DP[i] = aggregate(option1, option2, ...) # aggregate can be max/min/sum/...

	return DP[goalIndex] 














"""
198. House Robber

You are a professional robber planning to rob nums along a street. Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent nums have security systems connected and **it will automatically contact 
the police if two adjacent nums were broken into on the same night**.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob 
tonight without alerting the police.

Example 1:

Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
"""
# Top Down (Memoization)- store the result for each subproblem in a dictionary and use the stored value if you revisit a repeated subproblem 

# Rob(i): max value we can get from the suffix of nums nums[i..n-1]

def house_robber(nums):
	n = len(nums)
	memo = dict()

	def rob(i):
		# Base cases:
		# Rob(i) = 0 for i >= n
		if i >= n: return 0

		if i in memo: return memo[i] # return cached solution to a subproblem
		
		# General case (0 <= i <= n-1):
		# Rob(i) = max(nums[i]+Rob(i+2), Rob(i+1))
		# store the result of each subproblem in the memo dictionary if not there
		memo[i] = max(nums[i]+rob(i+2), rob(i+1))
		return memo[i]
		
	# Goal: Rob(0)
	return rob(0) 

















