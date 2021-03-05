"""
https://bradfieldcs.com/algos/queues/introduction/

Queue
(abstract data type)

A queue is an ordered collection of items

addition of new items happens at one end "rear"

removal of items from the "front"

"First-come first-served"
think of as a line.

FIFO "first-in first-out"
"""

"""
Queue operations:

- Queue() creates a new empty queue. 

- enqueue(item) adds a new item to the rear of the queue.

- dequeue() removes the front item from the queue. It returns
the item. 

- is_empty() checks if queue is empty. returns a boolean value.

- size() returns the number of items in the queue. retuns an integer.
"""

"""
operations
"""
q = []

q.is_empty()
# True

q.enqueue(4)
# [4]

q.enqueue('dog')
# ['dog', 4]        4 is the front of the line

q.size()
# 2

q.is_empty() 
# False

q.dequeue() 
# 4 is returned.
# ['dog']

q.size()
# 1

"""
Queue Implementation

In practice, many Python programmers will use the standard library’s 
collections.deque class to achieve O(1)O(1) enqueues and dequeues. 
"""
# this is a ticketing queue

from collections import deque
deq = deque([1, 2, 3])
deq.appendLeft(5)
deq.append(6)
deq
# deque([5, 1, 2, 3, 6])
deq.popleft()
# 5
deq.pop()
# 6
deq
# deque([1, 2, 3])