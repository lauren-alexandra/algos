"""
Abstract Factory pattern

Avoid the Abstract Factory and use callables as factories instead.

Poor fit for Python. Why?

The pattern is a workaround for languages w/o first-class functions
and classes.

In Python however, we can instead simply pass a class or factory function
when a library needs to create objects on our behalf.
"""

# How it works:
# Every choice a class needs to make about object instantiation is 
# deferred to the factory instead.

# Example: 
class Factory(object):
    def build_sequence(self):
        return []

    def build_number(self, string):
        return Decimal(string)

class Loader(object):
    def load(string, factory):
        sequence = factory.build_sequence()
        for substring in string.split(','):
            item = factory.build_number(substring)
            sequence.append(item)
        return sequence

f = Factory()
result = Loader.load('1.23, 4.56', f)
print(result)
# [Decimal('1.23'), Decimal('4.56')]

"""
The above example can be improved with an abstract class.

Why? 

Consider the behavior of languages that force you to declare ahead of 
time the type of each method parameter. You would overly restrict your 
future choices if your code insisted that the factory parameter could 
only ever be an instance of this particular class Factory because then 
you could never pass in anything that didn’t inherit from it.

Instead, to more happily separate specification from implementation, 
you would create an abstract class. It’s this final step that merits 
the word “abstract” in the pattern’s name “Abstract Factory”. 

Your abstract class would merely promise that the factory argument to 
load() would be a class adhering to the required interface.
"""

from abc import ABCMeta, abstractmethod

class AbstractFactory(metaclass=ABCMeta):

    @abstractmethod
    def build_sequence(self):
        pass

    @abstractmethod
    def build_number(self, string):
        pass