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

