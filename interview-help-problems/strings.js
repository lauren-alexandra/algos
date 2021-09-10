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
  var multiplier; 
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

/*
1119. Remove Vowels from a String

Example 1:

Input: s = "leetcodeisacommunityforcoders"
Output: "ltcdscmmntyfrcdrs"
Example 2:

Input: s = "aeiou"
Output: ""
*/

/**
 * @param {string} s
 * @return {string}
 */
 var removeVowels = function(s) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  return s.split('').filter(char => !vowels.includes(char)).join('');
};

/*
1165. Single-Row Keyboard

There is a special keyboard with all keys in a single row.

Given a string keyboard of length 26 indicating the layout of the keyboard (indexed from 0 to 25). Initially, your finger is at index 0. To type a character, you have to move your finger to the index of the desired character. The time taken to move your finger from index i to index j is |i - j|.

You want to type a string word. Write a function to calculate how much time it takes to type it with one finger.

Example 1:

Input: keyboard = "abcdefghijklmnopqrstuvwxyz", word = "cba"
Output: 4
Explanation: The index moves from 0 to 2 to write 'c' then to 1 to write 'b' then to 0 again to write 'a'.
Total time = 2 + 1 + 1 = 4. 
Example 2:

Input: keyboard = "pqrstuvwxyzabcdefghijklmno", word = "leetcode"
Output: 73
*/

/**
 * @param {string} keyboard
 * @param {string} word
 * @return {number}
 */
 var calculateTime = function(keyboard, word) {
  /*
  preserving order matters
  
  current location and relative location to next matters
  
  find indices 
  then add 1 to each (for calc purposes)
  
  iterate through the array of indices and perform absolute subtractions
  
  add each difference to the total
  
  return the total. 
  */
  let indices = []; 
  let total = 0;
  
  for (letter of word) {
      indices.push(keyboard.indexOf(letter) + 1);    
  }
  
  // init total
  if (indices) {
   total += indices[0] - 1;   
  }
  
  if (indices.length > 1) {
     for (let i = 0; i < indices.length - 1; i++) {      
          let next = i + 1;
          total += Math.abs(indices[i] - indices[next]);
      }
  }
  
  return total; 
};


/*
293. Flip Game

You are playing a Flip Game with your friend.

You are given a string currentState that contains only '+' and '-'. You and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move, and therefore the other person will be the winner.

Return all possible states of the string currentState after one valid move. You may return the answer in any order. If there is no valid move, return an empty list [].

Example 1:

Input: currentState = "++++"
Output: ["--++","+--+","++--"]
Example 2:

Input: currentState = "+"
Output: []
*/

/**
 * @param {string} currentState
 * @return {string[]}
 */
 var generatePossibleNextMoves = function(currentState) {
  /*
  you flip ++ into -- only one way
  
  return all possible consecutive flips. meaning order matters and length matters
  
  for each possible flip: make a copy of the string. then splice at the copy and replace 2 with - 
  then push onto results array 
  */
  
  // edge case: length is 1, then return [] 
  
  let results = [];
  
  if (currentState.length < 2) {
      return [];
  }
  
  for (let i = 0; i < currentState.length - 1; i++) {
      let next = i + 1;
      let possible = "";
      
      if (currentState[i] === '+' && currentState[next] === '+') {
          let strCopy = currentState.slice();
          let modArr = [];
          for (const char of strCopy) {
              modArr.push(char);
          }
          
          // do flip 
          modArr.splice(i, 2, '-', '-'); 
          for (const item of modArr) {
              possible += item;
          }
          // add possible flip to results 
          results.push(possible); 
      }
  }
  
  return results;
};


/*
734. Sentence Similarity

We can represent a sentence as an array of words, for example, the sentence "I am happy with leetcode" can be represented as arr = ["I","am",happy","with","leetcode"].

Given two sentences sentence1 and sentence2 each represented as a string array and given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.

Return true if sentence1 and sentence2 are similar, or false if they are not similar.

Two sentences are similar if:

They have the same length (i.e., the same number of words)
sentence1[i] and sentence2[i] are similar.
Notice that a word is always similar to itself, also notice that the similarity relation is not transitive. For example, if the words a and b are similar, and the words b and c are similar, a and c are not necessarily similar.

 

Example 1:

Input: sentence1 = ["great","acting","skills"], sentence2 = ["fine","drama","talent"], similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]]
Output: true
Explanation: The two sentences have the same length and each word i of sentence1 is also similar to the corresponding word in sentence2.
Example 2:

Input: sentence1 = ["great"], sentence2 = ["great"], similarPairs = []
Output: true
Explanation: A word is similar to itself.
*/

/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
 var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
  /*
  you are given 2 sentences each an array of strings
  
  you are given an array which specifies which words are similar. 
  
  iterate through both sentences. create a pair array with each index and a reversed array
  
  check if similarPairs includes either pair array. 
  if it doesn't return false. 
  
  first check
  if the sentences are not the same length, return false
  */
  
  if (sentence1.length !== sentence2.length) {
      return false;
  }
  
  if (sentence1.length === 1 && sentence2.length === 1) {
      return sentence1[0] === sentence2[0];
  }
  
  // you compare strings. can't compare arrays bc they are references to dif instances.
  let pairsToCompare = similarPairs.map(pair => pair.join(''));
  
  for (let i = 0; i < sentence1.length; i++) {
      let pair = [sentence1[i], sentence2[i]].join('');
      let pairRev = [sentence2[i], sentence1[i]].join('');
      
      let pairCheck = pairsToCompare.includes(pair);
      let pairRevCheck = pairsToCompare.includes(pairRev); 
      
      if (!pairCheck && !pairRevCheck) {
          return false;
      }
  }
      
  return true;
};


/*
408. Valid Word Abbreviation

A string can be abbreviated by replacing any number of non-adjacent substrings with their lengths. For example, a string such as "substitution" could be abbreviated as (but not limited to):

"s10n" ("s ubstitutio n")
"sub4u4" ("sub stit u tion")
"12" ("substitution")
"su3i1u2on" ("su bst i t u ti on")
"substitution" (no substrings replaced)
Note that "s55n" ("s ubsti tutio n") is not a valid abbreviation of "substitution" because the replaced substrings are adjacent.

Given a string s and an abbreviation abbr, return whether the string matches with the given abbreviation.

 

Example 1:

Input: word = "internationalization", abbr = "i12iz4n"
Output: true
Example 2:

Input: word = "apple", abbr = "a2e"
Output: false
*/
/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
 var validWordAbbreviation = function(word, abbr) {
  /*
  given abbr
  iterate through string by index
  
  when you reach an integer, change the increment
  continue to iterate until next is non integer 
  when you reach a letter set increment back to 1
  */
  
  // edge case 
  if (word.length === 1 && word === abbr || word.length === 1 && abbr === "1") {
      return true;
  }
  
  // split on an integer
  let wordArr = abbr.split(/([0-9]+)/); 
  let newWord = "";
  
  for (let item of wordArr) {
      // check if value is an integer 
      if (parseInt(item, 10)) {
          // multiply a string 
          let fill = "#".repeat(item); 
          newWord += fill; 
      }
      else {
          newWord += item;
      }
  }
  
  if (word.length !== newWord.length) {
      return false; 
  }
  
  for (let w = 0; w < newWord.length; w++) {
      if (newWord[w] === "#") {
          continue;
      }
      else {
          if (newWord[w] !== word[w]) {
              return false;
          }
      }
  }
  
  return true;
};


/*
1436. Destination City

You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

 

Example 1:

Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
Output: "Sao Paulo" 
Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city. Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".
Example 2:

Input: paths = [["B","C"],["D","B"],["C","A"]]
Output: "A"
Explanation: All possible trips are: 
"D" -> "B" -> "C" -> "A". 
"B" -> "C" -> "A". 
"C" -> "A". 
"A". 
Clearly the destination city is "A".
Example 3:

Input: paths = [["A","Z"]]
Output: "Z"
*/

/**
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
  /*
  a destination city has no outgoing path,
  which means it must be on the right and never on the left
  
  so iterate through paths. 
  add path[0] to incoming
  add path[1] to outgoing
  for each one in outgoing, check if its in incoming. if it's not, return it
  */
  
  // edge cases
  // paths length 1 return paths[i][1]
  if (paths.length === 1) {
      return paths[0][1];
  }
  
  let incoming = paths.map(path => path[0]);
  let outgoing = paths.map(path => path[1]);
  
  for (let path of outgoing) {
      if (!incoming.includes(path)) {
          return path;
      }
  }
  
  return -1;
};

/*
929. Unique Email Addresses

Every valid email consists of a local name and a domain name, separated by the '@' sign. Besides lowercase letters, the email may contain one or more '.' or '+'.

For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
If you add periods '.' between some characters in the local name part of an email address, mail sent there will be forwarded to the same address without dots in the local name. Note that this rule does not apply to domain names.

For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
If you add a plus '+' in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered. Note that this rule does not apply to domain names.

For example, "m.y+name@email.com" will be forwarded to "my@email.com".
It is possible to use both of these rules at the same time.

Given an array of strings emails where we send one email to each email[i], return the number of different addresses that actually receive mails.

 

Example 1:

Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
Output: 2
Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.
Example 2:

Input: emails = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"]
Output: 3
*/

/**
 * @param {string[]} emails
 * @return {number}
 */
 var numUniqueEmails = function(emails) {
  /*
  applying transformations to each email
  
  then grab only the uniques from the arrayoftransformed emails array to set to array
  return new array length 
  */
  
  /*
  transformations 
  
  iterate through each email
  split at the indexOf('@') [thatIndex, email.length - 1] will be the domain name to attach
  
  then iterate through local name. 
  replace all ('.', with a '' empty string);
  
  then continue iterate through local name, 
  if you indexOf where ('+')
  then split at index before it. that becomes the new local.
  if indexOf returns - 1, don't perform modifications
  
  join the localname to the domain name and push the new string to the mod array
  */
  let modEmails = [];
  
  for (let email of emails) {
      let emailParts = email.split('@'); 
      let domainName = '@' + emailParts[1]; 
      let localName = emailParts[0];
      
      localName = localName.replaceAll('.', '');
      
      if (localName.includes('+')) {
          let localParts = localName.split('+');
          localName = localParts[0];
      }
      
      let modEmail = localName + domainName;
      modEmails.push(modEmail);
  }  
  
  let uniqueEmails = [...new Set(modEmails)];
  
  return uniqueEmails.length; 
};

/*
1065. Index Pairs of a String

Given a string text and an array of strings words, return an array of all index pairs [i, j] so that the substring text[i...j] is in words.

Return the pairs [i, j] in sorted order (i.e., sort them by their first coordinate, and in case of ties sort them by their second coordinate).

 

Example 1:

Input: text = "thestoryofleetcodeandme", words = ["story","fleet","leetcode"]
Output: [[3,7],[9,13],[10,17]]
Example 2:

Input: text = "ababa", words = ["aba","ab"]
Output: [[0,1],[0,2],[2,3],[2,4]]
Explanation: Notice that matches can overlap, see "aba" is found in [0,2] and [2,4].
*/

/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
 var indexPairs = function(text, words) {
  const res = [];
  
  /*
  handle finding words by iterating by char through text
  and comparing the char to the first letter of a given word 
  
  then handle sort by sorting by the first index of the array
  if not the second index if the first indices are the same
  */
  
  for(let i = 0; i < text.length; i++) {
      words.forEach(word => {
      // check the first letter
          // text slice must be a valid equivalent of a word to confirm it exists 
          if(word[0] === text[i] && word === text.slice(i, i + word.length)) {
              res.push([i, i + word.length - 1])
          }
      })
  }
  return res.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
};



