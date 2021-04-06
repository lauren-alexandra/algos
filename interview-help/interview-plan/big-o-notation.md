Big O Notation - refers to time complexity not space complexity. 
Why? Think about performance in solutions to problems.

Big O is conceptual. It’s simply using math to describe the efficiency of what you’ve created.

Big O is worst-case, always. 

(in order of smallest time complexity to largest):

1) Only one operation: O(1) "order 1". Constant time
- e.g. Plucking an item from a list using an index or a key

2) Divide and conquer: O(log n). Logarithmic time
- e.g. We’re continually splitting things in half in a sorted set until we arrive at the thing we want.
- This is an -->inverse squaring operation<-- as we’re going from 2^3 (8) down to 2^2 (4) down to 2^1 (2) and finally 2^0 (1).

3) Looping over an iterable: O(N) "order n". Linear time
- why: one operation for every n items in the iterable

4) O(n log n). Log linear

5) Looping within a loop: O(N^2) "order n squared". Quadratic time
- note: "brute force" almost always denotes nested loop O(N^2) 