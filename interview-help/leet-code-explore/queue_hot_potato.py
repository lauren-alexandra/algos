"""
Hot Potato Game

To simulate the circle, we will use a queue. 
Assume that the child holding the potato will be at the front of the queue. 

Upon passing the potato, the simulation will simply dequeue and then immediately enqueue that child, 
--->putting her at the end of the line. 
so dequeue person then subsequently enqueue that person.

She will then wait until all the others have been at the front before it will be her turn again. 

After num dequeue/enqueue operations, the child at the front will be removed permanently and another 
cycle will begin. This process will continue until only one name remains (the size of the queue is 1).

---> This is the number parameter: 
At X dequeue/enqueue operations, persons are removed permanenetly and not enqueued again.
"""

from collections import deque

def hot_potato(names, num):
    queue = deque() # instantiate queue
    for name in names:
        queue.appendleft(name) # Bill is the first person in the list and therefore moves to the front of the queue.

    while len(queue) > 1:
        for _ in range(num):
            queue.appendleft(queue.pop())  # this will append to the front the last item popped off the queue (the back of the queue goes to front)

        queue.pop() # here: once X number of dequeue/enqueue operations has occurred (above for loop), the permanently dequeue

    # when there is one person left in queue (after while loop above), then pop and return that person.
    return queue.pop()

hot_potato(('Bill', 'David', 'Susan', 'Jane', 'Kent', 'Brad'), 9)
# => 'David'