// This file is for testing scripts

console.log('it runs\n');

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]

var reverseString = function(s) {
    const helper = (s, left, right) => {
        console.log("This is on every helper call: ");
        console.log("s: ", s, ". left: ", left, ". right: ", right);
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

let input = ["h","e","l","l","o"];

reverseString(input);
