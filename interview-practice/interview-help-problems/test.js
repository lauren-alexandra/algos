// This file is for testing scripts

console.log('it runs\n');

/**
 * @param {number} n
 * @return {string[]}
 */
 const generateParenthesis = function(n) {
    /*
    this is about generating sequences and ensuring balanced parentheses.
    this solution uses recursion.
    
    if you have 2 characters e.g. ( and )
    
    then generate all 2^2n sequences of those characters.
    */

    /*
    To generate all sequences, we use a recursion. All sequences of length n is just '(' plus all sequences of length n-1, 
    and then ')' plus all sequences of length n-1.
    */
    
    const result = [];
    
    const generate = () => {
        let arr = []; 
        if (arr.length === 2**n) {
            if (valid(arr)) {
                result.push("".join(arr));
                console.log({result})
            }
        }
        else {
            arr.push('\(');
            generate(arr); 
            arr.pop();
            arr.push('\)');
            generate(arr);
            arr.pop();
        }
    };
    
    /* To check whether a sequence is valid, we keep track of balance, the net number of opening brackets minus closing brackets. 
    If it falls below zero at any time, or doesn't end in zero, the sequence is invalid - otherwise it is valid. */
    
    const valid = (arr) => {
        let bal = 0;
        
        for (let c in arr) {
            
            if (c === '\(') {
                bal += 1; 
            } else {
                bal -= 1;
            }
            
            if (bal < 0) {
                return false;
            }
        }
        
        return bal === 0;
    };
    
    generate();
    console.log(result);
};

generateParenthesis(3);
