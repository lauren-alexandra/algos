"""
e.g. from parts import *

This is irresponsible because it will import everything in module, 
even the imports of that module.

If we only want to import certain objects from a module, we
must specify them using the __all__ keyword at the top of the module.
"""

# parts.py module
__all__ = ['Encoder', 'Decoder', 'Loss'] 
import numpy
import tensorflow

class SomeClass:
    pass

# so when someone does this:
from parts import *
# they will only get 'Encoder', 'Decoder', 'Loss' 