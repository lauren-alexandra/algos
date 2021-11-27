/*
Top of stack is at the end of the list

LIFO - last in first out
think of a stack of plates 
*/

// #232 implement queue using stacks // success

var MyQueue = function() {
    this.elements = []; 
};

MyQueue.prototype.push = function(x) {
    return this.elements.push(x); 
};

MyQueue.prototype.pop = function() {
    return this.elements.shift(); 
};

MyQueue.prototype.peek = function() {
    return this.elements.slice(0, 1); 
};

MyQueue.prototype.empty = function() {
  return this.elements.length === 0;    
};


// #921 minimum add to make parentheses valid  // success

var minAddToMakeValid = function(S) {
    var a = 0;
    var balance = 0; 
    var parenArr = S.split("");
    parenArr.forEach(function(item) {
        if(item === '\(') {
            // if left paren increase balance
            balance++;
        } else {
            // if right paren decrease balance
            balance--; 
        }
        
        if(balance === -1) {
            a++;
            balance++; 
        }
    }); 
    // if 0 then balanced, valid
    return a + balance; 
};

// #1190 reverse substrings between each pair of parentheses
// not all tests passed 
/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    var str = s; 
    var strLen = str.length; 
    var tmp = "";
    var finStr = ""; 
    var strReversed = ""; 
    var arr = s.split("");
    var stack = new Array(); 
    
    for(var j = 0; j < strLen; j++) {
        if(str[j] === '\('){
            stack.push(j);
        }
        if(str[j] === '\)'){
            // reverse string starting from beginning of ( 
            tmp = str.slice(stack[-1], j + 1).split("").reverse().join("");
            strReversed += tmp.slice(0, -1);
            // remove last ( index from stack 
            stack.splice(-1, 1);
        }   
    };
    
    // create final string without parentheses
    for(var k = 0; k < strReversed.length; k++) {
        if(strReversed[k] !== '\(' && strReversed[k] !== '\)') {
            finStr += strReversed[k];
        }
    } 
    
    return finStr;
};


// backspace compare

function backspaceCompare(str1, str2) {
  var strStack1 = str1.split("");  // S = "ab#c" => ['a', 'b', '#', 'c'] 
  var strStack2 = str2.split(""); 
  var finStack1 = new Array(); 
  var finStack2 = new Array(); 
  var myStacks = [
    [strStack1, finStack1], 
    [strStack2, finStack2] 
  ]; 
  
  myStacks.forEach(function(group) {
    var initialStack = group[0]; 
    var modStack = group[1]; 
    while(initialStack.length > 0) {
      if(initialStack[-1] === '#') {
        initialStack.pop();  
        initialStack.pop();
      } else {
        modStack.push(initialStack[-1]); 
      }
    }
  }); 
  
  // compare strings 
  return finStack1.join("") === finStack2.join(""); 
}

/*
856. Score of Parentheses

Given a balanced parentheses string s, compute the score of the string based on the following rule:

() has score 1
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.
 

Example 1:

Input: s = "()"
Output: 1
Example 2:

Input: s = "(())"
Output: 2
Example 3:

Input: s = "()()"
Output: 2
Example 4:

Input: s = "(()(()))"
Output: 6

*/

/**
 * @param {string} s
 * @return {number}
 */
 const scoreOfParentheses = function(s) {
    
    let stack = [0]; // current score
    
    // for...of can be used for iterating over Strings without 'array-fying' them first
    for (const char of s) {
        if (char === '(') {
            stack.push(0); // not gaining a point with this paren
        }
        else {
            let v = stack.pop(); // remove previous ( paren score
            let w = stack.pop(); // remove score before prev (can be original 0)
            
            // then add twice the score of the previous paren which has a score of 1  
            // Math.max() will return the higher value of the two provided
            let addTwicePreviousScore = w + Math.max(2 * v, 1); 
            
            stack.push(addTwicePreviousScore); 
        }
    }
    
    return stack.pop(); // aka return last score which is current
};


/*
682. Baseball Game

You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

An integer x - Record a new score of x.
"+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
"D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
"C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
Return the sum of all the scores on the record.

 

Example 1:

Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.
*/
/**
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    let record = []; 
    
    for (let op of ops) {
        op = parseInt(op) ? parseInt(op) : op;

        if (typeof op === 'number') {
            record.push(op); 
        }
        else if (op === '+') {
            let sumScore = record[record.length - 1] + record[record.length - 2];
            record.push(sumScore);
        }
        else if (op === 'D') {
            let doublePrev = record[record.length - 1] * 2;
            record.push(doublePrev);
        }
        else {
            record.pop(); 
        }
    }
    
    const finalSum = record.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    }, 0)

    
    return finalSum; 
};

/*
844. Backspace String Compare

Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.
 

Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".

Example 2:

Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".
*/ 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
    let stackS = [];
    let stackT = [];
    
    const stackManipulate = (str, stack) => {
        for (let letter of str) {
            if (letter === '#') {
                stack.pop();
            }
            else {
                stack.push(letter);
            }
        }
        
        return stack;
    };
    
    stackManipulate(s, stackS);
    stackManipulate(t, stackT);
    
    return stackS.join("") === stackT.join(""); 
};


/*
921. Minimum Add to Make Parentheses Valid

Given a string s of '(' and ')' parentheses, we add the minimum number of parentheses ( '(' or ')', and in any positions ) so that the resulting parentheses string is valid.

Formally, a parentheses string is valid if and only if:

It is the empty string, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
Given a parentheses string, return the minimum number of parentheses we must add to make the resulting string valid.


Example 1:

Input: s = "())"
Output: 1
Example 2:

Input: s = "((("
Output: 3
Example 3:

Input: s = "()"
Output: 0
Example 4:

Input: s = "()))(("
Output: 4

Complexity Analysis

Time Complexity: O(N), where N is the length of S.

Space Complexity: O(1).
*/
/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
    let minAdd = 0; 
    let balanceTracker = 0; 
      
    for (let char = 0; char < s.length; char++) {
        balanceTracker += s[char] === '(' ? 1 : -1; 
        
        // requires an add 
        if (balanceTracker === -1) {
            minAdd += 1; // add 
            balanceTracker += 1; // neutralize balance to 0
        }
    }
      
    // if the balance isn't 0 means we need to add a paren for it too 
    return minAdd + balanceTracker;
  };


/*
946. Validate Stack Sequences

Given two sequences pushed and popped with distinct values, return true if and only if this could have been the result of a sequence of push and pop operations on an initially empty stack.

 

Example 1:

Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
Output: true
Explanation: We might do the following sequence:
push(1), push(2), push(3), push(4), pop() -> 4,
push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
Example 2:

Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
Output: false
Explanation: 1 cannot be popped before 2.
*/

/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
    /*
    We have to push the items in order, so when do we pop them?

    If the stack has say, 2 at the top, then if we have to pop that value next, we must do it now. That's because any subsequent push will make the top of the stack different from 2, and we will never be able to pop again.

    Algorithm

    For each value, push it to the stack.

    Then, greedily pop values from the stack if they are the next values to pop.

    At the end, we check if we have popped all the values successfully.
    */
    
    let stack = [];
    let i = 0; 
    
    for (const val of pushed) {
        stack.push(val);
        
        while(stack.length > 0 && i < popped.length && stack[stack.length - 1] === popped[i]) {
            stack.pop(); 
            i++; 
        }
    }
    
    return i === popped.length; 
};

/*
1249. Minimum Remove to Make Valid Parentheses

Given a string s of '(' , ')' and lowercase English characters.

Your task is to remove the minimum number of parentheses ( '(' or ')', in any positions ) so that the resulting parentheses string is valid and return any valid string.

Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.
 

Example 1:

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"
Explanation: "lee(t(co)de)" , "lee(t(c)ode)" would also be accepted.
Example 2:

Input: s = "a)b(c)d"
Output: "ab(c)d"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
    /*
    you are learning how to do stacks. 
    */
      let stack = []; // only monitors left parens
      let indexesToRemove = [];
      let newStr = "";
            
      for (let i = 0; i < s.length; i++) {
              if (s.charAt(i) === '\(') {
                  stack.push(i);
              } 
              else if (s.charAt(i) === '\)') {
                  if (stack.length === 0) {
                      indexesToRemove.push(i);
                  } else {
                      stack.pop(); // remove left paren if right paren found
                  }
              }
      }
      
      for (let j = 0; j < s.length; j++) {
          if (!indexesToRemove.includes(j) && !stack.includes(j)) {
              newStr += s[j];
          }
      }
      
      return newStr; 
  };
