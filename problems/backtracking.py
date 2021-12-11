"""
Example with explanation. 

79. Word Search

Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.

Example 1:
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
"""

"""
Create a set with all characters present in board.
Check if all characters in a word are present in board.
If a character in a word is not present in the board, we
know the word is not there either. 

"""        
characters = set()
for i in range(len(board)):
    for j in range(len(board[0])):
        if board[i][j] not in characters: 
            characters.add(board[i][j])

for s in word: 
    if s not in characters: 
        return False

def dfs(row, col, index, visited):
    # current index of word (string)
    # check for indices out of bounds 
    if row < 0 or row > len(board) - 1 or col < 0 or col > len(board[0]) - 1: 
        return False
    # if cell visited return false
    if (row, col) in visited: 
        return False
    # if we find that a char at (row, col) matches word[index],
    # continue to next char. Search in all directions 
    if board[row][col] == word[index]:
        visited.add((row, col))
        # if the end of the word is reached return true
        if index == len(word) - 1: 
            return True
        isExist = (
                    dfs(row, col - 1, index + 1, visited) or 
                    dfs(row, col + 1, index + 1, visited) or
                    dfs(row - 1, col, index + 1, visited) or 
                    dfs(row + 1, col, index + 1, visited)
                )   
        # remove at the end because we may land on this cell again in a different path
        visited.remove((row, col))
        return isExist
    
    return False

# DFS when the char in the cell (i,j) matches with word[0] aka start of a word
for i in range(len(board)):
    for j in range(len(board[0])):
        if board[i][j] == word[0]:
            visited = set()
            if dfs(i, j, 0, visited): 
                return True

return False


"""
22. Generate Parentheses
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]
 

Constraints:

1 <= n <= 8
"""

def genParens(n):
    partialSolution = []
    allSolutions = []

    def backtracking(openCount, closeCount):
        # deadends - aka pruning the decision tree. 
        # backtrack (return) immediately at deadend

        # deadend: if there are too many open parentheses
        if openCount > n: return
        # deadend: if there are unmatched/unbalanced parentheses 
        if closeCount > openCount: return 

        # a complete solution is reached: no more decisions to make  
        if len(partialSolution) == 2*n: # all parens used in a combination
            allSolutions.append(''.join(partialSolution))
        else:
            # Surround the recursive call with the code to transform
            # the current partial solution into the child before the call,
            # and the code to reverse the change after the call. 
            # Why? Optimization. Add extra state so you don't need to recompute it at each node.
            
            partialSolution.append('(')
            # try adding open parens
            backtracking(openCount+1, closeCount)
            partialSolution.pop()

            partialSolution.append(')')
            # try adding closing parens
            backtracking(openCount, closeCount+1)
            partialSolution.pop()

    # init call
    backtracking(0, 0) 

    print(allSolutions)
    return allSolutions 

# example
genParens(3)
# ['((()))', '(()())', '(())()', '()(())', '()()()'] 

"""
37. Sudoku Solver

Write a program to solve a Sudoku puzzle by filling the empty cells.

A sudoku solution must satisfy all of the following rules:

Each of the digits 1-9 must occur exactly once in each row. -> no dup check in a row. track the row.
Each of the digits 1-9 must occur exactly once in each column. - no dup check in a col. track the col. 
Each of the digits 1-9 must occur exactly once in each of the 9 3x3 sub-boxes SUB-BOXES of the grid.
-> this means you need to search for duplicates in EACH 3x3 sub-grid. 

The '.' character indicates empty cells.

so if cell is not '.' remove that number from possible options.
if cell is '.' then pop off a cell from possible options and use that as the cell. 

Example 1:

The board is 9x9 cells. It can be split into sub-boxes of 3x3. 
Input: board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]]
Output: [["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]
"""

def solver(board): 
    res = None 

    # deadend 
    # if duplicate found, return True
    def foundConflict(row, col, num): 
        for i in range(9):
            if board[row][i] == num: return True
            if board[i][col] == num: return True 
            # check sub-grid 
            if board[3*(row//3)+i//3][3*(col//3)+i%3] == num: return True 
        return False 

    def backtracking(currIndex):
        nonlocal res, board # res, board is in outer scope
        
        if res: return # solution found. 
        if currIndex == 81: # 9x9=81 : all cells filled. 
            res = [row[:] for row in board]
            return 

        # dividing by the current index, e.g. 35 gives you the row 3
        r, c = currIndex//9, currIndex%9 # current row, column 

        if board[r][c] != '.':
            # skip cell
            backtracking(currIndex+1)
            return
        for option in '123456789': # option for cell 
            # prune deadends (children nodes) before decide on visit
            if not foundConflict(r, c, option):
                # fill the cell
                board[r][c] = option; 
                backtracking(currIndex+1)
                # undo change 
                board[r][c] = '.'

    backtracking(0)
    
    return res  

"""
93. Restore IP Addresses

A valid IP address consists of exactly four integers separated by single dots. Each integer is between 0 and 255 (inclusive) and 
cannot have leading zeros.

For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245", "192.168.1.312" and "192.168@1.1" are invalid 
IP addresses.
Given a string s containing only digits, return all possible valid IP addresses that can be formed by inserting dots into s. 
You are not allowed to reorder or remove any digits in s. You may return the valid IP addresses in any order.

Example 1:

Input: s = "25525511135"
Output: ["255.255.11.135","255.255.111.35"]
"""

"""
implementation: think of the problem as a decision tree.

The root is the original string. 

At each partial solution, the decision to make is where to place the next dot:
generate 3 children by placing the next dot 1, 2, or 3 characters to the right of the last dot.

Prune a branch if any of the integers generated is not between 0 and 255
and/or is not valid - includes other non integer characters.

The leaves are combinations that have all the dots placed. Validate the leaves
and only return the correct ones.
"""

def restoreAllIps(s):
    # invalid ip address.
    if len(s) > 12:
        return [] 

    # pruning 
    def isValidIPNumber(t):
        # deadend - prune: an integer can not be greater than 3 digits or have no digits.
        if len(t) > 3 or len(t) == 0: return False
        # deadend - prune: an integer that has more than one digit can not start with 0. invalid.
        if len(t) > 1 and t[0] == '0': return False
        # if integer is greater than 255, prune. 
        return int(t) <= 255 

    # format a leaf to add to final answer
    # the dots are inserted into the string.
    def formatIPWithDots():
        return '.'.join([s[:dots[0]], s[dots[0]:dots[1]], s[dots[1]:dots[2]], s[dots[2]:]])

    res = []
    # these are the indices of the dots to be placed in string
    dots = [] 

    def backtracking():
        # if all dots have been placed, validate string and add to result
        if len(dots) == 3:
            if isValidIPNumber(s[dots[2]:]):
                res.append(formatIPWithDots())
        # validate the integer and determine where to place the next dot - if integer valid
        else:
            # find the starting index of the integer given last dot index or start at 0 index if no dots yet
            start = dots[-1] if len(dots) > 0 else 0
            # determine where to place the next end dot of an integer - try all in range
            # you take the minimum of start+3 and the length(s) - 1 because
            # for the second dot, adding 3 indices may go beyond the remaining digits.
            # so take the smaller index which may be the last index in the string.
            for end in range(start, min(start+3, len(s)-1)):
                # end index is exclusive 
                if isValidIPNumber(s[start:end+1]):
                    # if you find a valid integer chunk, append a new dot index to dots
                    dots.append(end+1)
                    # once you add the next dot, call backtracking again to traverse down the decision tree
                    backtracking()
                    # reverse the change made to turn the current partial solution into the child
                    # in order to navigate back up one node to validate the other children of that node
                    dots.pop()
    
    backtracking()
    return res 
