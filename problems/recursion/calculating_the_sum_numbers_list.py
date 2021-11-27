# Recursion 101

"""
Let's say given list. And we use a for loop to calculate the total.
[1, 3, 5, 7, 9]

The loop could look like this, with new numbers added to the current sum,
each iteration.

total=(1+(3+(5+(7+9))))
total = (1 + (3 + (5 + 16)))
total = (1 + (3 + 21))
total = (1 + 24)
total = 25
"""

"""
First, let’s restate the sum problem in terms of Python lists. 
We might say the the sum of the list numbers is the sum of the 
first element of the list (numbers[0]), 
and the sum of the numbers in the rest of the list (numbers[1:])
"""

# example

def find_sum(numbers): 
    if len(numbers) == 0: 
        return 0 

    return numbers[0] + find_sum(numbers[1:]) 

find_sum([1, 3, 5, 7, 9]) # => 25

"""
this is how it works with recursive calls.
why? piece together the solutions of each small problem until initial problem solved

given [1, 3, 5, 7, 9]

9                           # this would be numbers[0] + find_sum() of nothing
7 + find_sum(9)             # this would be numbers[0] + find_sum(9)
then 5 + find_sum(7, 9)     # this would be numbers[0] + find_sum(7, 9)
then 3 + find_sum(5, 7, 9)  # this would be numbers[0] + find_sum(5, 7, 9)
1 + find_sum(3, 5, 7, 9)    # this would be numbers[0] + find_sum(3, 5, 7, 9)
"""