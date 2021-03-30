"""
Memoization is an optimization technique used primarily to speed up 
computer programs by storing the results of expensive function calls 
and returning the cached result when the same inputs occur again.
"""

"""
Caching with @functools.lru_cache

Memoization is a form of cache: we cache the previously calculated 
Fibonacci numbers so that we don't have to calculate them again.

Caching is such an important technique that Python provides a built-in 
decorator to give your function the caching capacity. 

If you want fib_helper to reuse the previously calculated Fibonacci 
numbers, you can just add the decorator lru_cache from functools. 
lru stands for "least recently used".
"""

import functools

@functools.lru_cache()
def fib_helper(n):
    if n < 2:
        return n
    return fib_helper(n - 1) + fib_helper(n - 2)

def fib(n):
    """ fib is a wrapper function so that later we can change its behavior
    at the top level without affecting the behavior at every recursion step.
    """
    return fib_helper(n)

print(fib(50)) # 12586269025