"""
https://bradfieldcs.com/algos/deques/introduction/

Deque

is a double-ended queue.
new items can be added at either the front or the rear.
exisiting items can be removed from either end.
"""

"""
The Dequeue abstract data type

operations:

- Deque() creates a new deque that is empty. It returns an empty deque.

- add_front(item) adds a new item to the front of the deque.

- add_rear(item) adds a new item to the rear of the deque. 

- remove_front() removes the front item from the deque. It returns the item. The deque is modified.

- remove_rear() removes the rear item from the deque. It returns the item. The deque is modified.

- is_empty() tests to see whether the deque is empty. Returns a boolean value.

- size() returns the number of items in the deque. 
"""

"""
operations
"""
d = Deque()

d.is_empty()
# []

d.add_rear(4)
# [4]

d.add_rear('dog')
# ['dog', 4]

d.add_front('cat')
# ['dog', 4, 'cat']

d.add_front(True)
# ['dog', 4, 'cat', True]

d.size()
# 4

d.is_empty()
# False

d.add_rear(8.4)
# [8.4, 'dog', 4, 'cat', True]

d.remove_rear()
# ['dog', 4, 'cat', True]  
# return value 8.4

d.remove_front()
# ['dog', 4, 'cat']
# return True