# Unpacking

elems = [1, 2, 3, 4]
a, b, c, d = elems
print(a, b, c, d)
# 1 2 3 4

# also unpacking
a, *new_elems, d = elems
print(a)
print(new_elems)
print(d)
# 1
# [2, 3]
# 4


# Slicing

# How to reverse a list with slicing: [::-1] 
elems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(elems[::-1])
# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]

"""
The syntax [x:y:z] means "take every zth element of a list from index x to index y." 
When z is negative, it indicates going backwards. 
When x isn't specified, it defaults to the first element of the list in the direction you are traversing the list. 
When y isn't specified, it defaults to the last element of the list. 
So if we want to take every 2th element of a list, we use [::2].
"""
elems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
evens = elems[::2]
print(evens)
# [0, 2, 4, 6, 8]

reversed_evens = elems[-2::-2] # starts at end of list two back. then traverses backwards by two
print(reversed_evens)
# [8, 6, 4, 2, 0]

# Delete even numbers in a list
del elems[::2]
print(elems)
# [1, 3, 5, 7, 9]


# Insertion

elems[1] = 10 # change value at index
elems[1:2] = [20, 30, 40] # replace values at indices
elems[1:1] = [0.2, 0.3, 0.5] # Insert 3 values between index 0 and index 1


# Flatten lists

list_of_lists = [[1], [2, 3], [4, 5, 6]]
sum(list_of_lists, [])
# [1, 2, 3, 4, 5, 6]

# flatten with list comprehension
regular_list = [[1, 2, 3, 4], [5, 6, 7], [8, 9]]
flat_list = [item for sublist in regular_list for item in sublist]
print('Original list', regular_list)
print('Transformed list', flat_list)
# Original list [[1, 2, 3, 4], [5, 6, 7], [8, 9]]
# Transformed list [1, 2, 3, 4, 5, 6, 7, 8, 9]


"""
Flatten List of Lists Using itertools (chain())

This approach is ideal for transforming a 2-D list into a single flat list as 
it treats consecutive sequences as a single sequence by iterating through the iterable 
passed as the argument in a sequential manner.
"""
import itertools

regular_list = [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
flat_list = list(itertools.chain(*regular_list))

print('Original list', regular_list)
print('Transformed list', flat_list)
# Original list [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]
# Transformed list [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
