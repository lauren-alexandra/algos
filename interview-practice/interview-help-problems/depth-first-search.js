/*
695. Max Area of Island

You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island.

Return the maximum area of an island in grid. If there is no island, return 0.

 

Example 1:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0
*/

/*
Approach #1: Depth-First Search (Recursive) [Accepted]
Intuition and Algorithm

We want to know the area of each connected shape in the grid, then take the maximum of these.

If we are on a land square and explore every square connected to it 4-directionally (and recursively squares connected to those squares, and so on), then the total number of squares explored will be the area of that connected shape.

To ensure we don't count squares in a shape more than once, let's use seen to keep track of squares we haven't visited before. It will also prevent us from counting the same shape more than once.
*/

// need to fix syntax error probably but quasi solution

/**
 * @param {number[][]} grid
 * @return {number}
 */


 var maxAreaOfIsland = function(grid) {
    let result = 0; 
    let visited = new Set();
    
    const area = (r, c) => {
        if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || visited.has({r: r, c: c}) || grid[r][c] == 0) {
            return 0;
        }

        visited.add({r: r, c: c});

        return 1 + area(r+1, c) + area(r-1, c) + area(r, c-1) + area(r, c+1);
    }
; 
    
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            result = Math.max(result, area(r, c))
        }
    }
    
    return result;
};
