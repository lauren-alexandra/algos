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