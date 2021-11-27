"""
Linear data structure (stacks, queues, deques, and lists):  Once an item is added, it stays in the same position relative to its neighbors. 

Linear structures can be thought of as having two ends. What distinguishes one linear structure from another is where additions and removals may occur.

A stack is an ordered collection of items where the addition of new items and the removal of existing items always takes place at the same end. 

This end is commonly referred to as the “top”, and the opposite end is known as the “base”.

Top Plate (the end of the stack)  --> will be removed first. The insertion order is the reverse of the removal order.

Plate 

Plate

Base Plate (beginning of the stack)


An abstract data type means that we’re only concerned with what the data represents and not with how it’ll be constructed.

A data structure is an implementation of an abstract data type.

The separation of these two perspectives allows us to define complex data models for our problems without giving any 
details about how the model will actually be built.
"""
"""
Stack: abstract data type

The stack abstract data type is an ordered collection of items where items are added to and removed from the top. 

The interface for a stack is:

- Stack() creates a new, empty stack
- push(item) adds the given item to the top of the stack and returns nothing
- pop() removes and returns the top item from the stack
- peek() returns the top item from the stack but doesn’t remove it (the stack isn’t modified)
- is_empty() returns a boolean representing whether the stack is empty
- size() returns the number of items on the stack as an integer
"""
"""
Stack: implementation

A Python list “may be used as a” stack.

Of course, a Python list permits much more than the behavior of a stack, notably accessing an item by index, 
and inserting and deleting items at any point by index.

As such, we ought to communicate as clearly as possible our intention to use this (concrete) data structure of a list 
as an abstract data type stack. Sometimes we can achieve this simply by naming it a stack. Other times, we may want to 
use a class to abstract away the implementation of the stack as a list, and ONLY provide the behaviors that we require of a stack.
"""

# Top of stack is at the end of the list

class Stack:

    def __init__(self):
        self._items = []

    def is_empty(self):
        return not bool(self._items)

    def push(self, item):
        self._items.append(item)

    def pop(self):
        return self._items.pop()

    def peek(self):
        return self._items[-1]

    def size(self):
        return len(self._items)