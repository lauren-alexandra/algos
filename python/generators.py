"""
Generators

Iterator
- an object that enables you to traverse a container, e.g. list
- an object that has a __next__ method defined

Iteration
- when we use a loop to loop over something

Generator
- an iterator that you can only iterate over once. this is because
they don't store values in memory but generate them on the fly
- you use them by iterating over them, either with a ‘for’ loop or 
by passing them to any function or construct that iterates
- most of the time generators are implemented as functions
- however, they do not return a value, they yield it. 
"""

# example
def generator_function():
    for i in range(10):
        yield i   # In yield, the function is executed from where it is paused in last function call

for item in generator_function():
    print(item)

# Output: 0
# 1
# 2
# 3
# 4
# 5
# 6
# 7
# 8
# 9

# example generator which calculates fibonacci numbers
def fibon(n):
    a = b = 1
    for i in range(n):
        yield a
        a, b = b, a + b

# how its used
for x in fibon(1000000):
    print(x)


# next()
# built-in function of Python, next(). It allows us to access the next element of a sequence. 
def generator_function():
    for i in range(3):
        yield i

gen = generator_function()
print(next(gen))
# Output: 0
print(next(gen))
# Output: 1
print(next(gen))
# Output: 2
print(next(gen))
# Output: Traceback (most recent call last):
#            File "<stdin>", line 1, in <module>
#         StopIteration


# how to do it with strings: iter()
"""
str is not an iterator. It’s an iterable but not an iterator. 
This means that it supports iteration but we can’t iterate over it directly. 
So how would we iterate over it? 
It returns an iterator object from an iterable.
"""
my_string = "Yasoob"
my_iter = iter(my_string)
print(next(my_iter))
# Output: 'Y'