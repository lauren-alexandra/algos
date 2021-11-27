"""
Lists are a built-in type and do not require an imported module. Also like you said, list elements can be of different types. 
Arrays on the other hand are good for mathematical operations and storing large amounts of data; if you don't need this, use a list.

When you build a list in Python, you really don’t need to specify how large the array or list is beforehand, 
instead, in Python, the list is of dynamic nature i.e. we could just keep adding the item constantly. 
So, How does Python actually do this? Well, the answer is dynamic arrays.


Big O Efficiency

index[]
O(1)

index assignment
O(1)

append
O(1)

pop()
O(1)

pop(i)
O(n)

insert(i, item)
O(n)

del
O(n)

iteration
O(n)

contains (in)
O(n)

get slice [x:y]
O(k)                # k is the size of the slice

del slice
O(n)

reverse
O(n)

concatenate
O(k)                # k is the size of the concatenated list

sort
O(n log n)

multiply
O(nk)               # k-sized list, n times multiply
"""

item_list = ['apples', 1, 1.5, ('apples', 'bananas', 'oranges'), {'apple': 1.0, 'bananas': 2.0}, ['nested list', 'hi']]

print(item_list[0])
print(item_list[-1][0]) # returns first index of last item in item_list
print(item_list[1:3]) # prints index 1 and 2

item_list[0] = 'blueberries'
item_list[1:3] = [2, 4] # change values of multiple indices

item_list.index('blueberries') # returns index of the first matched value

item_list.count('blueberries') # returns how many times value appears in list

# if you need the original list unchanged when the list is modified:
# USE DEEPCOPY FOR NESTED ELEMENTS IN LIST
import copy
copy_of_item_list = copy.deepcopy(item_list)
# This means, both the item_list and the copy_of_item_list are independent. 
# This is because the item_list was recursively copied, which is true for all its nested objects.

item_list.reverse() # reverses order of list elements

# sort by default will sort elements in ascending order
vowel_list = ['e', 'a', 'u', 'o', 'i']
vowel_list.sort()
# Sorted list: ['a', 'e', 'i', 'o', 'u']

# if want to sort in descending order
vowel_list.sort(reverse=True)
# Sorted list (in Descending): ['u', 'o', 'i', 'e', 'a']

item_list.append(10) # add an item
item_list.extend([7, 8, 9]) # add items

# list membership test. is x in list? 
print('x' in item_list) # False
print('blueberries' in item_list) # True

# iterate through list
for item in item_list:
    print(item)

# insert a value at a specific index. this will move elements to the right aka increase the size of the list. think of adding to cart in specific spot.
item_list.insert(1, 'papayas')

# remove an item by value
item_list.remove('papayas')

# remove an item by index
item_list.pop(1)

# Note the pop method helps us implement a stack (first in, last out). think plates
# pop() removes from the back (or last index) if no index provided
my_stack = [0]
my_stack.append(1)
my_stack == [0, 1]
my_stack.pop() # this will remove the value of the last index. 1
my_stack == [0]
my_stack.pop() # this will now remove the first element in the stack, making it the last out of the stack

# delete an item
del item_list[0]

# delete multiple items
del item_list[1:3]

# this will "clear out" a list of all items
item_list.clear()

# delete list
del item_list

"""
List comprehension

List comprehension is an elegant way to define and create a list in python. 
We can create lists just like mathematical statements and in one line only. 
The syntax of list comprehension is easier to grasp.

A list comprehension generally consist of these parts:

Output expression,
Input sequence,
A variable representing a member of the input sequence and
An optional predicate part.
"""
lst  =  [x ** 2  for x in range (1, 11)   if  x % 2 == 1] 

      here, x ** 2 is output expression, 
      range (1, 11)  is input sequence, 
      x is variable and   
      if x % 2 == 1 is predicate part.