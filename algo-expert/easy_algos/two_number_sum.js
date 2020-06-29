/*
Two Number Sum 

Write a function that takes in a non-empty array of
distinct integers and an integer representing a target sum.
If any two numbers in the input array sum up to the target sum,
the function should return them in an array, in any order. 
If no two numbers sum up to the target sum, the function should return
an empty array. 

Note that the target sum has to be obtained by summing two different
integers in the array; you can't add a single integer to itself in order
to obtain the target sum. 

You can assume that there will be at most one pair of numbers summing up 
to the target sum.

Sample Input:
array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10 
*/ 

// O(n^2) time | O(1) space
function twoNumbersSum(array, targetSum) {
    // iterate over every number
    for(let i = 0; i < array.length - 1; i++) {
        // select the number in the array
        // can use const here because no reassignment
        const firstNumber = array[i];
        // iterate over every number that will be the + operand, 
        // all other addition options
        for(let j = i + 1; j < array.length; j++) {
             // select another number as operand in the array
            const secondNumber = array[j];
            // add the possible operands together
            if(firstNumber + secondNumber === targetSum) {
                // if they are equal to target, return array with numbers
                return [firstNumber, secondNumber]
            }
        }
    }
    // no solution: return empty array 
    return []; 
}