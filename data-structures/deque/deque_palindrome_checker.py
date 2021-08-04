"""
Deque implementation

the most straightforward way to utilize a deque in Python will be to 
import deque from the collections module

You are also likely to observe that in this implementation adding and removing 
items from the front is O(1)O(1) whereas adding and removing from the rear is O(n)O(n). 
"""

"""
Palindrome Checker

A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam. 

We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.

The front of the deque will hold the first character of the string and the rear of the deque will hold the last character.

Since we can remove both of them directly, we can compare them and continue only if they match. 

If we can keep matching first and the last items, we will eventually either run out of characters or be left with a deque of size 1 depending on whether the length of the original string was even or odd.
"""

from collections import deque

def is_palindrome(characters):
    character_deque = deque(characters)

    while len(character_deque) > 1:
        first = character_deque.popleft()
        last = character_deque.pop()
        if first != last:
            return False

    return True

is_palindrome('lsdkjfskf') # => False
is_palindrome('radar') # => True