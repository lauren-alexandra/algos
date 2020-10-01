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
           return false;  
          } 
          // if match 
          else {
           firstP++;
           secondP--;  
          }
          
        }
        else {
          secondP--; 
        }
     } 
     // if char not alphanumeric  
     else {
      firstP++; 
     }
    }
       
    return true;    
};

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
