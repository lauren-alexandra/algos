"""
Context managers allow you to allocate and release resources 
precisely when you want to. The most widely used example of 
context managers is the with statement. Suppose you have two 
related operations which you’d like to execute as a pair, with 
a block of code in between. Context managers allow you to do 
specifically that.
"""
with open('some_file', 'w') as opened_file:
    opened_file.write('Hola!')

# the above code is equivalent to:
file = open('some_file', 'w')
try:
    file.write('Hola!')
finally:
    file.close()

"""
We can also implement Context Managers using decorators and 
generators. Python has a contextlib module for this very purpose. 
Instead of a class, we can implement a Context Manager using 
a generator function.
"""
from contextlib import contextmanager

@contextmanager
def open_file(name):
    f = open(name, 'w')
    try:
        yield f
    finally:
        f.close()

"""
1. Python encounters the yield keyword. Due to this it creates a generator instead of a normal function.

2. Due to the decoration, contextmanager is called with the function name (open_file) as its argument.

3. The contextmanager decorator returns the generator wrapped by the GeneratorContextManager object.

4. The GeneratorContextManager is assigned to the open_file function. Therefore, when we later call the open_file function, we are actually calling the GeneratorContextManager object.
"""

# we can use the newly generated Context Manager like this:
with open_file('some_file') as f:
    f.write('hola!')