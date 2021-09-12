// #1365 How Many Numbers Are Smaller Than Current Number // Success 

// Input: nums = [8,1,2,2,3] - sort it and apply some hashMap
// Output: [4,0,1,1,3]

// [8,1,2,2,3]
// Sort - 
//  0 1 2 3 4
// [1,2,2,3,8]
 
//  1-0 - i
//  2-1  -i 
//  3-3  - i
//  8-4

// [8,1,2,2,3]
//  4 0 1 1 3

// Success passed. 
var smallerNumbersThanCurrent = function(nums) {
  // nums [8,1,2,2,3]
  var input = [...nums];
  var hashMap = new Map(); 
  var valuesToReturn = []; 
  
  // sort ascending  
  sorted = input.sort((a,b) => a - b); 
  // sorted [1,2,2,3,8] 
  
  // pseudocode 
  /* for each num in sorted 
  add value as key and index as value to hashmap 
  if the hashmap does not already have key */  
  
  for(var j = 0; j < sorted.length; j++){
    if(!hashMap.has(sorted[j])) {
       hashMap.set(sorted[j], j); 
    } 
  } 
  
  // pseudocode 
  /* then for each num in nums 
  do a lookup by key and add the value to 
  array to return. */ 
  
  for(var k = 0; k < nums.length; k++) {
    valuesToReturn.push(hashMap.get(nums[k])); 
  } 
    
    console.log(nums); 
  
  return valuesToReturn; 
}


// #760 Find Anagram Mappings

/*
Given two lists A and B, and B is an anagram of A. B is an anagram of A means B is made by randomizing the order of the elements in A.

We want to find an index mapping P, from A to B. A mapping P[i] = j means the ith element in A appears in B at index j.

These lists A and B may contain duplicates. If there are multiple answers, output any of them.

For example, given

A = [12, 28, 46, 32, 50]
B = [50, 12, 32, 46, 28]
We should return
[1, 4, 3, 2, 0]
*/

var anagramMappings = function(A, B) {
    var hashMap = new Map();
    var listToReturn = []; 
    
    // create HashMap using B  - hashMap
    // 50 0
    // 12 1
    // 32 2
    // 46 3
    // 28 4
    for(var i = 0; i < B.length; i ++) {
      hashMap.set(B[i], i); 
    } 
    
    for(var i = 0; i < A.length; i ++) {
       listToReturn.push(hashMap.get(A[i])); 
    }
    
    return listToReturn; 
  }; 

  /* 
  804. Unique Morse Code Words

  International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

  For convenience, the full table for the 26 letters of the English alphabet is given below:

  [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." + ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

  Return the number of different transformations among all words we have.

  Example:
  Input: words = ["gin", "zen", "gig", "msg"]
  Output: 2
  Explanation: 
  The transformation of each word is:
  "gin" -> "--...-."
  "zen" -> "--...-."
  "gig" -> "--...--."
  "msg" -> "--...--."

  There are 2 different transformations, "--...-." and "--...--.".
  Note:

  The length of words will be at most 100.
  Each words[i] will have length in range [1, 12].
  words[i] will only consist of lowercase letters.
  */

/**
 * @param {string[]} words
 * @return {number}
 */
 var uniqueMorseRepresentations = function(words) {
    
  const hashMap = new Map();
  
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]; 
  
  alphabet.forEach(letter => {
      let indexMorse = alphabet.indexOf(letter) 
      hashMap.set(letter, morse[indexMorse]); 
  });
  
  const transformations = []; 
  
  words.forEach(word => {
      let translation = "";
      word.split('').forEach(letter => {
          translation += hashMap.get(letter); 
      });
      
      transformations.push(translation); 
  }); 
  
  const uniqueTransforms = []; 
  
  transformations.forEach(code => {
      if (!uniqueTransforms.includes(code)) {
        uniqueTransforms.push(code);  
      } 
  });
  
  return uniqueTransforms.length;
};

/*
657. Robot Return to Origin

There is a robot starting at position (0, 0), the origin, on a 2D plane. Given a sequence of its moves, judge if this robot ends up at (0, 0) after it completes its moves.

The move sequence is represented by a string, and the character moves[i] represents its ith move. Valid moves are R (right), L (left), U (up), and D (down). If the robot returns to the origin after it finishes all of its moves, return true. Otherwise, return false.

Note: The way that the robot is "facing" is irrelevant. "R" will always make the robot move to the right once, "L" will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

 

Example 1:

Input: moves = "UD"
Output: true
Explanation: The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.
Example 2:

Input: moves = "LL"
Output: false
Explanation: The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.
*/

/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    
  const officialMoves = new Map([
    ['R', 1],
    ['L', -1],
    ['U', 1],
    ['D', -1]
  ]);
  
  const location = [0, 0];
  const userMoves = moves.split('');
  
  
  userMoves.forEach(move => {
      let moveValue = officialMoves.get(move);
      console.log(moveValue);
      
      if (move === 'U' || move === 'D') {
          location[1] = location[1] + moveValue;
      } else {
          location[0] = location[0] + moveValue;
      }
  });
  
  return location[0] === 0 && location[1] === 0;
};

/* 890. Find and Replace Pattern
Given a list of strings words and a string pattern, return a list of words[i] that match pattern. You may return the answer in any order.

A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.

Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.

 

Example 1:

Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
Output: ["mee","aqq"]
Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}. 
"ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation, since a and b map to the same letter.
Example 2:

Input: words = ["a","b","c"], pattern = "a"
Output: ["a","b","c"]
*/ 

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
 var findAndReplacePattern = function(words, pattern) {
    
  // zips two arrays into one
  const zip = (a, b) => {
      // map((element, index)
      return a.map((k, i) => [k, b[i]]);
  };
  
  const findMatch = word => {
      const hashMap1 = new Map();
      const hashMap2 = new Map();  
      let foundMatch = true;
      
      const compareTwo = zip(word.split(''), pattern.split(''));
      
      // for (const [key, value] of iterable)
      for (const [w, p] of compareTwo) {
      
        if (!hashMap1.has(w)) {
            hashMap1.set(w, p);
        }
          
        if (!hashMap2.has(p)) {
            hashMap2.set(p, w);
        }
        
        const pair = [hashMap1.get(w), hashMap2.get(p)];
          
        if (pair[0] !== p || pair[1] !== w) {
            foundMatch = false;
        }    
      }
      
      return foundMatch;
  }; 
  
  const matches = words.filter(word => findMatch(word)); 
  
  return matches; 
};

/*
1133. Largest Unique Number

Given an integer array nums, return the largest integer that only occurs once. If no integer occurs once, return -1.

 

Example 1:

Input: nums = [5,7,3,9,4,9,8,3,1]
Output: 8
Explanation: The maximum integer in the array is 9 but it is repeated. The number 8 occurs only once, so it is the answer.
Example 2:

Input: nums = [9,9,8,8]
Output: -1
Explanation: There is no number that occurs only once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var largestUniqueNumber = function(nums) {
  /*
  create hash map with counts from nums
  each num in nums is key
  
  you need to find all keys filter where object[key] === 1
  then find the max of that array and return it or 
  return -1 if array empty. 
  */
  
  let counts = {};
  
  for (let num of nums) {
      if (counts[num]) {
          counts[num] = counts[num] + 1;
      }
      else {
          counts[num] = 1;
      }
  }
  
  let keys = Object.keys(counts);
  
  let keysWithOne = keys.filter(key => counts[key] === 1);
  
  if (keysWithOne.length > 0) {
      return Math.max(...keysWithOne);
  }
  else {
      return -1; 
  }
};

/*
266. Palindrome Permutation


Given a string s, return true if a permutation of the string could form a palindrome.

Example 1:

Input: s = "code"
Output: false
Example 2:

Input: s = "aab"
Output: true
*/

/**
* @param {string} s
* @return {boolean}
*/
var canPermutePalindrome = function(s) {
  /*
  each character in the string must have an even count
  but can have an exception: if only one character is odd,
  then it can also be a palindrome
  
  you need to keep track of the number of odds
  */
  
  // you need to write your edge cases before you submit your code
  // edge case    
  if (s.length === 2) {
      if (s[0] !== s[1]) {
          return false;
      }
  }
  
  let charCounts = {};
  
  for (let char of s) {
      if (charCounts[char]) {
          charCounts[char] += 1;
      }
      else {
          charCounts[char] = 1;
      }
  }
  
  let oddCount = 0; 
  
  for (let key of Object.keys(charCounts)) {      
      if (charCounts[key] % 2 !== 0) {
          oddCount += 1;
      }
  }
  
  // handle result eval at the end
  return oddCount > 1 ? false : true; 
};

/*
1275. Find Winner on a Tic Tac Toe Game

Tic-tac-toe is played by two players A and B on a 3 x 3 grid.

Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares (" ").
The first player A always places "X" characters, while the second player B always places "O" characters.
"X" and "O" characters are always placed into empty squares, never on filled ones.
The game ends when there are 3 of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.
Given an array moves where each element is another array of size 2 corresponding to the row and column of the grid where they mark their respective character in the order in which A and B play.

Return the winner of the game if it exists (A or B), in case the game ends in a draw return "Draw", if there are still movements to play return "Pending".

You can assume that moves is valid (It follows the rules of Tic-Tac-Toe), the grid is initially empty and A will play first.

 

Example 1:

Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: "A"
Explanation: "A" wins, he always plays first.
"X  "    "X  "    "X  "    "X  "    "X  "
"   " -> "   " -> " X " -> " X " -> " X "
"   "    "O  "    "O  "    "OO "    "OOX"
*/

/**
 * @param {number[][]} moves
 * @return {string}
 */
 var tictactoe = function(moves) {
    /*
        if moves.flat().length > 9, return "Pending"
        
        you need to fill boardArray. 
        create Array, then push filler array on it 3 times
        [0, 0, 0] this is the filler array
        
        iterate through moves. starting with currentPlayer A, make mark X at 
        location in boardArray
        
        then you can do checks
        start with A: do rowCheck, do columnCheck, do diagonalCheck
        if any are true, return true. 
        create a function and pass in "X" do check with that
        
        call the function with "O" too and return true if true otherwise false
        
        then return as appropriate: 
        if A_Winner = true, return "A"
        if B_Winner = true, return "B"
        else return "Draw"
    */
    
    // check if possible first: Pending case
    if (moves.length > 9) {
       return "Pending";
    }
    
    let gameBoard = [];
    let fillerArray = [0, 0, 0];
    
    for (let i = 0; i < 3; i++) {
        gameBoard.push(fillerArray);
    }
    
    for (let move of moves) {
        let row = move[0];
        let col = move[1];
        let currentPlayer = "B";
        let mark = "";
        
        // flip currentPlayer 
        // if B then A and set mark to "X" 
        // if A then B and set mark to "O" 
        if (currentPlayer === "B") {
            currentPlayer = "A";
            mark = "X";
        }
        else {
            currentPlayer = "B";
            mark = "O";
        }
        
        gameBoard[row][col] = mark;
    }
    
    const boardCheck = (mark) => {
        let col0 = [];
        let col1 = [];
        let col2 = [];
        let columns = [col0, col1, col2];
        
        // rowCheck (a win across the row)
        for (let row of gameBoard) {
            if ([...new Set(row)].length === 1) {
                return true;
            }
            // generate columns
            col0.push(row[0]);
            col1.push(row[1]);
            col2.push(row[2]);
        }
        
        // columnCheck
        for (let c of columns) {
            if ([...new Set(c)].length === 1) {
                return true;
            }
        }
        
        // diagonalCheck
        // a diagonal is [0,0], [1,1], [2,2]
        // or [0, 2], [1, 1], [2, 0]
        let firstDiagonal = [gameBoard[0][0], gameBoard[1][1], gameBoard[2][2]];
        let secondDiagonal = [gameBoard[0][2], gameBoard[1][1], gameBoard[2][0]];
        if ([...new Set(firstDiagonal)].length === 1) {
            return true;
        }
        if ([...new Set(secondDiagonal)].length === 1) {
            return true;
        }
                
        // if no wins
        return false; 
    };
    
    let A_Winner = boardCheck("X");
    let B_Winner = boardCheck("O");
    
    if (A_Winner) {
        return "A";
    } 
    else if (B_Winner) {
        return "B";
    }
    else {
        return "Draw";
    }
};


/*
496. Next Greater Element I

The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.

 

Example 1:

Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    /*
    for each num in nums1:
    
    find the indexOf the num in nums2.
    create a slice array starting at that index
    
    then iterate through that array and find next greater element
    add that to ans array to return. if no greater, add -1 to ans.
    */
  
    let ans = [];
      
    for (let n of nums1) {
        let startingIndex = nums2.indexOf(n);
        let searchArr = nums2.slice(startingIndex);
        let resultElem = -1;
        
        for (let elem of searchArr) {
            if (elem > n) {
                resultElem = elem;
                break;
            }
        }
        
        ans.push(resultElem);
    }
      
    return ans; 
  };

  






