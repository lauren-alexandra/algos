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
            # for first row and col 
            if i == 0 or j == 0:
                # if it's 1, update to 1
                if matrix[i][j] == '1':
                    dp[i][j] = 1

            else:
                if matrix[i][j] == '1':
                    # find the min value of previous left, top, and top-left diagonal + 1 if it's 1
                    dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1

            ans = max(ans, dp[i][j])

    return ans * ans 

def mainFunction(input):
	n = len(input)
	memo = dict()
	def recurrence(i): # i is the index of a subproblem
		if isBaseCase(i): return # result for base case
		if i in memo: return memo[i]
		memo[i] = aggregate(option1, option2, ...) # aggregate can be max/min/sum ...
		return memo[i]
	return recurrence(goalIndex) 

"""
322. Coin Change

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the 
coins, return -1.

You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Example 3:

Input: coins = [1], amount = 0
Output: 0
 
Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
"""
















