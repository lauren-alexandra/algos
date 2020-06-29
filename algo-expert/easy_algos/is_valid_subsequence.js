/*
Valid Subsequence

Given two non-empty arrays of integers, write a function that determines
whether the second array is a subsequence of the first one. 

A subsequence of an array is a set of numbers that aren't necessarily 
adjacent in the array but that are in the same order as they appear in
the array. For instance, the numbers [1, 3, 4] form a subsequence of the
array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number
in an array and the array itself are both valid subsequences of the array.

Sample Input:
array = [5, 1, 22, 25, 6, -1, 8, 10]
sequence = [1, 6, -1, 10]
*/

// Note: array and sequence share the same sort order 

function isValidSubsequence(array, sequence) {
    let arrIdx = 0; // array index 
    let seqIdx = 0; // seqeuence index
    // while the array index is less than the array length
    // and while the sequence index is less than the sequence length
    while(arrIdx < array.length && seqIdx < sequence.length) {
        // if a value in the array is equal to the value in the sequence
        // increment sequence index, continue to next sequence integer
        if(array[arrIdx] === sequence[seqIdx]) seqIdx++; 
        // always increment array index to continue forward in comparison
        arrIdx++; 
    }
    // if the sequence index at the end of the while loop is equal to the 
    // sequence length, then the entire sequence is in the array. This would return
    // true otherwise false. 
    return seqIdx === sequence.length; 
}