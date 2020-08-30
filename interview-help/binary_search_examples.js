/*
1) Read Binary Search

2) Solve: Binary Search problems
https://leetcode.com/problems/binary-search/
https://leetcode.com/problems/fixed-point/
https://leetcode.com/problems/valid-perfect-square/
https://leetcode.com/problems/sqrtx/
https://leetcode.com/problems/squares-of-a-sorted-array/
*/ 

/* Binary Search

An algorithm for searching for a specific value in an ordered collection.
Divide and conquer technique.

1) Need to sort the collection
- ascending if the elements are numbers
- dictionary order if the elements are strings

2) Binary search algorithm (use loop or recursion)
Maintains the left, right, and middle indices of the search space (array or sub-array)
and compares the target to the middle value.
If the target does not equal the middle value,
then the half of the search space in which the target can not exist is dropped.
The other half becomes the new search space.
This continues until the target is equal to a middle value OR
the search space is empty and thus the target can not be found. 

target: the value you are searching for
index: the current location that you are searching
left, right: the indicies from which we use to maintain our search space
mid: the index that we use to apply a condition to determine if we should
search left or right
*/ 

