"""
By default Python uses a dict to store an object’s instance attributes.

The dict wastes a lot of RAM. Python can’t just allocate a static 
amount of memory at object creation to store all the attributes. 
Therefore it sucks a lot of RAM if you create a lot of objects 
(thousands/millions).

__slots__ tells Python not to use a dict, and only allocate space for 
a fixed set of attributes. 
"""

class MyClass(object):
    __slots__ = ['name', 'identifier']
    def __init__(self, name, identifier):
        self.name = name
        self.identifier = identifier
        self.set_up()