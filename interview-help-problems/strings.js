/*
#125 Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
*/
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  // set two pointers, one at each end of the string
  // traverse inwards
  // if space, skip comparison
  // otherwise compare eq. if not eq, return false
   
  var firstP = 0;
  var secondP = s.length - 1;
   
  var alphaReg = /[a-z]/i;  
  var numReg = /^\d+$/; 
  var first, second;
   
  while (firstP < secondP) {
   // check first pointer 0-9 or a-z 
   if(s[firstP].match(alphaReg) || s[firstP].match(numReg)) {
      // convert to lowercase if str
      if (s[firstP].match(alphaReg)) {
         first = s[firstP].toLowerCase(); 
      } else {
          first = s[firstP].match(numReg);  
      }     
     
     // check second pointer 0-9 or a-z 
      if(s[secondP].match(alphaReg) || s[secondP].match(numReg)) {
        // convert to lowercase if str
        if (s[secondP].match(alphaReg)) {
          second = s[secondP].toLowerCase();
        } else {
          second = s[secondP].match(numReg); 
        }     
     
        // compare eq 
        if (first != second) {
         console.log("Not Valid");
         return false;
        } 
        // if match 
        else {
         firstP++;   // traverse inwards from front
         secondP--;  // traverse inwards from back
        }
        
      }
      else {
        secondP--; 
      }
   } 
   // if char not alphanumeric aka it's likely a space so move forward
   else {
    firstP++; 
   }
  }
     
  console.log("Valid Palindrome");    
  return true;
};

// test
isPalindrome("race a car"); // will log Not Valid
isPalindrome("A man, a plan, a canal: Panama"); // will log Valid Palindrome

/*
#151 Reverse Words in a String

Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

Example 1:

Input: s = "the sky is blue"
Output: "blue is sky the"
Example 2:

Input: s = "  hello world  "
Output: "world hello"
Explanation: Your reversed string should not contain leading or trailing spaces.
Example 3:

Input: s = "a good   example"
Output: "example good a"
Explanation: You need to reduce multiple spaces between two words to a single space in the reversed string.
*/
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.trim().split(/\s+/).reverse().join(" "); 
};

/*
#13 Roman to Integer

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.

Example 1:

Input: "III"
Output: 3
Example 2:

Input: "IV"
Output: 4
*/
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  var romanValues = {
  "I": 1,
  "V": 5, 
  "X": 10,
  "L": 50,
  "C": 100,
  "D": 500,
  "M": 1000
}; 
var total = 0; // init total
var i = 0;

// iterate through s
while(i < s.length) {
  // if a smaller symbol comes before a larger symbol e.g. IV, subtract smaller from       // larger and add the difference to the total
  var curr = romanValues[s[i]]; 
  var next;
  if (romanValues[s[i + 1]] != null) {
    next = romanValues[s[i + 1]]; 
  }
   
  // need to check that next exists here 
  if ((i + 1 < s.length) && (curr < next)) {
    var diff = next - curr; 
    total += diff; 
    
    // here need to iterate 2 because checked 2 values
    i += 2; 
  }
  // otherwise add symbol value to total 
  else {
    total += curr; 
    i++; 
  }
}

return total;     
};

/*
#551 Student Attendance Record I

You are given a string representing an attendance record for a student. The record only contains the following three characters:
'A' : Absent.
'L' : Late.
'P' : Present.
A student could be rewarded if his attendance record doesn't contain more than one 'A' (absent) or more than two continuous 'L' (late).

You need to return whether the student could be rewarded according to his attendance record.

Example 1:
Input: "PPALLP"
Output: True
Example 2:
Input: "PPALLL"
Output: False
*/
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  // need to check for 2 conditions
  // count of A less than 2
  // and in string there can't be 'LLL'

  var count = 0; // init

  // and count must be less than 2 to proceed
  for(var i = 0; i < s.length && count < 2; i++) {
    // check if A 
    if (s.charAt(i) == 'A') {
      count++; 
    }
  }; 

   // check for continous 'LLL' 
  var notMoreThanTwoLate = s.indexOf('LLL') === -1;  // returns -1 if not found

  // attendance good 
  return count < 2 && notMoreThanTwoLate; 
};

/*
debug 

#394 Decode String

Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.

Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

 

Example 1:

Input: s = "3[a]2[bc]"
Output: "aaabcbc"
Example 2:

Input: s = "3[a2[c]]"
Output: "accaccacc"
*/

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  var stack = new Array(); 
  var alphaString = ''; 
  var currentMultiplier = '';
  var multipler; 
  var decodedStr = ''; 
  var alphaReg = /[a-z]/i;  
  var numReg = /^\d+$/; 
  var peek; 

  for (var i = 0; i < s.length; i++) {
   if (s[i] !== ']') {
    stack.push(s[i]);  
   }
   else {
    var last = s.length - 1; 
    peek = s.charAt(last);    
       
    // js has no peek method so use stack[-1]  
    while (peek != '[' && stack.length != 0) {     // peek at val 
      alphaString += stack.pop();
    }
    // remove [   
    stack.pop();
     
    // create multiplier  
    while (peek.match(numReg) && stack.length != 0) { // peek 
      currentMultiplier = stack.pop() + currentMultiplier;   
    }
    
    // once reach alpha char
    if (peek.match(alphaReg)) {  // peek
      multiplier = parseInt(currentMultiplier);  // convert str to int 122 
      decodedStr = multiplier * alphaString;   // 3 * 'c'  
      stack.push(decodedStr); 
    } 
   }  
  }
  
return decodedStr;     
};
/*
680. Valid Palindrome II

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.

/**
 * @param {string} s
 * @return {boolean}
 */
var checkPalindrome = function(s) {
    for (var i = 0; i < s.length / 2; i++) {
        // compare char 
        if (s.charAt(i) != s.charAt(s.length - 1 - i)) {
            return false;
        }
    }
    return true;
}

var validPalindrome = function(s) {
    for (var i = 0; i < s.length; i++) {
        var c = s.charAt(i);
        let str = s.split('');
        str.splice(i, 1);
        s = str.join(''); 
      
        if (checkPalindrome(s)) {
          return true;  
        } 
      
        let str2 = s.split('');
        str2.splice(i, 0, c);
        s = str2.join(''); 
    }
    return checkPalindrome(s);
};

/* 
557. Reverse Words in a String III

Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "God Ding"
Output: "doG gniD"
*/

/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  const words = s.split(' ');
  
  const reversed = words.map(word => {
      return word.split('').reverse().join('');
  });
  
  return reversed.join(' ');
};

/*
412. Fizz Buzz

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i if non of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

Complexity Analysis

Time Complexity: O(N)O(N)
Space Complexity: O(1)O(1)
*/
/**
 * @param {number} n
 * @return {string[]}
 */
 var fizzBuzz = function(n) {
  let answer = [];
  
  for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
          answer.push('FizzBuzz');
      }

      else if (i % 3 === 0) {
          answer.push('Fizz');
      }

      else if (i % 5 === 0) {
          answer.push('Buzz');
      }

      else {
          answer.push(i.toString())
      }   
  }
  
  return answer;
};


/*
205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.


Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
*/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isIsomorphic = function(s, t) {
  // create a hash map
  
  // if key already exists in hashmap, return false
  
  let charMapS = {};
  let charMapT = {}; 
  
  for (let char of s) {
      for (let char of t) {
          // check S is valid 
          if (charMapS[s]) {
              if (!(charMapS[s] === t)) {
                  return false;
              }
          }
          else {
              charMapS[s] = t; 
          }
          
          // check T is valid
          if (charMapT[t]) {
              if (!(charMapT[t] === s)) {
                  return false;
              }
          }
          else {
              charMapT[t] = s; 
          }
      }
  }
  
  return true;
};



