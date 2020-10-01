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
