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
