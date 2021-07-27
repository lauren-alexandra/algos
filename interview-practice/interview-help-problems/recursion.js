/*
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
*/

// one way of doing two pointers (not recursion)
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    let backIndex = s.length - 1;
    
    for (let i = 0; i < s.length / 2; i++) {
        let currentLetter = s[i];
        s[i] = s[backIndex]; 
        s[backIndex] = currentLetter; 
        backIndex = backIndex - 1;
    }
    
    return s;
};

// two pointers (with recursion)

/*
Algorithm

Here is an example. Let's implement recursive function helper which receives two pointers, left and right, as arguments.

Base case: if left >= right, do nothing. (because already swapped)

Otherwise, swap s[left] and s[right] and call helper(left + 1, right - 1).

To solve the problem, call helper function passing the head and tail indexes as arguments: return helper(0, len(s) - 1).

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
    const helper = (s, left, right) => {
        if (left < right) {
            // swap operation 
            let leftChar = s[left];
            s[left] = s[right];
            s[right] = leftChar;
            
            // recursive call to continue iteration
            helper(s, left + 1, right - 1);
        }
    }
    
    // init call
    helper(s, 0, s.length - 1);
};



