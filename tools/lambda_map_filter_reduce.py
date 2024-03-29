# Lambda, map, filter, reduce

# create inline functions
square_ld = lambda x: x * x
ld_result = square_ld(2)
print(ld_result)


# map(fn, iterable) applies the fn to all elements of the iterable (e.g. list, set, dictionary, tuple, string) and returns a map object.

nums = [1, 2, 3]
even_nums = [2, 4, 6]

map1 = map(lambda x: x * x, nums) # this returns a map object and does not modify original iterable

# map1 is a map object, specifically an iterator which means its values aren't stored but generated as needed
print(list(map1)) # to store values from iterator, convert to list

# TOOL for iterating over 2 or more iterables simultaneously:
# You can use map with more than one iterable
map2 = map(lambda a, b: a + b, nums, even_nums) # this will iterate over both lists at the same time and add indices
# 1 + 2 
# 2 + 4
# 3 + 6
print(list(map2))
# [3, 6, 9]


# filter(fn, iterable) works the same way as map, except that 
# fn returns a boolean value and 
# filter returns all the elements of the iterable for which the fn returns True.

predictions = [0.2, 1, 2, 3]
incorrect = filter(lambda x: x > 0.5, predictions)
print(list(incorrect))


# reduce(fn, iterable, initializer) is used when we want to iteratively APPLY AN OPERATOR to all elements in a list. 
# Reduce is a really useful function for performing some computation on a list and returning the result.

# For example, if we want to calculate the product of all elements in a list:
# without reduce
nums = [1, 2, 3]

product = 1
for num in nums:
    product *= num
print(product)
# 6

# with reduce
from functools import reduce
product = reduce(lambda x, y: x * y, nums)
print(product)
# 6 