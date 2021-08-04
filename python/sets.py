"""
sets behave like lists but they can't have duplicates
"""

some_list = ['a', 'b', 'c', 'b', 'd', 'm', 'n', 'n']
duplicates = set([x for x in some_list if some_list.count(x) > 1])
print(duplicates)
# Output: set(['b', 'n'])

# intersect: commonalities in 2 sets
valid = set(['yellow', 'red', 'blue', 'green', 'black'])
input_set = set(['red', 'brown'])
print(input_set.intersection(valid))
# Output: set(['red'])

# difference: find the differences between 2 sets
valid = set(['yellow', 'red', 'blue', 'green', 'black'])
input_set = set(['red', 'brown'])
print(input_set.difference(valid))
# Output: set(['brown'])

# sets can also be created with new notation
a_set = {'red', 'blue', 'green'}
print(type(a_set))
# Output: <type 'set'>