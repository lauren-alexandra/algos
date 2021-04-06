"""
Factory Method Pattern

aka objects creating other objects

Not a good design for Python.

It was designed for underpowered programming languages where classes 
and functions can’t be passed as parameters or stored as attributes.
"""

"""
Example Problem:

You will often create objects in Python that themselves need to turn 
around and create more objects. Imagine an HTTP connection pool, for 
example, that sometimes needs to create new connections to replace old 
connections as they time out and close.

Now comes the challenge. What if your program will run behind a special 
corporate proxy, and the HTTP connection pool will only be able to 
communicate if it creates and uses specially configured network 
connections instead of the generic sockets that it usually creates?
"""

"""
Example Solution: Subclassing (somewhat not Pythonic)

The subclass will behave exactly like a normal Standard Library HTTP 
connection except when the moment comes to instantiate a response. At 
that point the connection will access its response_class attribute, 
receive the alternative class you provided instead of the normal one, 
and the alternative response class will then be in control.
"""
class HTTPConnection:
    ...
    response_class = HTTPResponse
    ...
    def getresponse(self):
        ...
        response = self.response_class(self.sock, method=self._method)
        ...

class SpecialHTTPConnection(HTTPConnection):
    response_class = SpecialHTTPResponse

"""
An alternative to subclassing: use an Instance Attribute Factory

Why? no need to add additional class. When to use:

If you can imagine developers ever wanting to customize object creation,
then go ahead and try making the object creation routine (the “factory”) 
a parameter in your __init__() method and store it as an instance 
attribute. 

If instead you think that customization will be extremely rare, 
then make it a class attribute, remembering that the developer can 
always reach in and override it in those rare cases where they need to.
"""
class JSONDecoder(object):
    ...
    def __init__(self, ... parse_float=None, ...):
        ...
        self.parse_float = parse_float or float
        ...

from decimal import Decimal
from json import JSONDecoder

my_decoder = JSONDecoder(parse_float=Decimal)


"""
An alternative to Factory Method Pattern:
Dependency Injection

Does the class you’re designing really need to go around creating other 
classes?

Why? 
the Dependency Injection pattern completely eliminates the need 
for an object like a JSON parser to have its design made more 
complicated by the details of how other objects get created.

If you know up front all the objects that the class will need, you 
should consider providing them to the class yourself through Dependency 
Injection.
"""
import json
with open('input_data.json') as f:
    data = json.load(f)


"""
You will see excellent examples of this simpler pattern everywhere 
that Python libraries let you pass an already-open file object instead 
of making you supply a path and insisting on opening the file themselves. 

By leaving you in charge of instantiating the file object, this maneuver 
accomplishes many goals at once.

- Decoupling: the library doesn’t need to know all the parameters 
accepted by the open() method, and doesn’t need to accept every one of 
them as a parameter itself. If the file object were to grow more 
creation parameters in the future, json.load() won’t need to change.

- Efficiency: If you already have the file open for other reasons, you 
can go ahead and provide the open file object. The library won’t insist 
on re-opening the file. This is crucial if the file is a read-once 
source of data like an anonymous pipe.

- Flexibility: You can pass any file-like object you want. It can be a 
subclass of the standard file object, or be completely independent. 
You could pass a StringIO that operates directly on data in RAM instead 
of needing the JSON written to disk first. Or you could offer a wrapper 
around a socket that lets you parse JSON data as it arrives off the 
network without needing to be stored locally first.
"""