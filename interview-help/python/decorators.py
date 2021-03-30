"""
Decorators

are functions which modify the functionality of other functions

e.g. @decorator is equivalent to:

some_func = decorator(some_func)
"""

"""
this is what decorators do in python
they wrap a given function and modify its functionality

When you use the @my_decorator syntax, you are applying a wrapper 
function with a single function as a parameter. 

Remember, everything in Python is an object, and this includes 
functions! With that in mind, we can write a function that returns 
a wrapper function.
"""

from functools import wraps 
"""
Note: @wraps takes a function to be decorated and adds the 
functionality of copying over the function name, docstring, 
arguments list, etc. This allows us to access the pre-decorated 
function’s properties in the decorator.
"""

def a_new_decorator(a_func):
    @wraps(a_func)
    def wrapTheFunction():
        print("I am doing some boring work before executing a_func()")
        a_func()
        print("I am doing some boring work after executing a_func()")
    return wrapTheFunction

@a_new_decorator
def a_function_requiring_decoration():
    """Hey yo! Decorate me!"""
    print("I am the function which needs some decoration to "
          "remove my foul smell")

print(a_function_requiring_decoration.__name__)
# Output: a_function_requiring_decoration

"""
this is where @ comes in 
"""

@a_new_decorator
def a_function_requiring_decoration():
    pass 

#the @a_new_decorator is just a short way of saying:
a_function_requiring_decoration = a_new_decorator(a_function_requiring_decoration)


"""
Decorators can check if user is authorized to use an endpoint
"""

from functools import wraps

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            authenticate()
        return f(*args, **kwargs)
    return decorated


"""
Decorators can be used with logging
"""

from functools import wraps

def logit(func):
    @wraps(func)
    def with_logging(*args, **kwargs):
        print(func.__name__ + " was called")
        return func(*args, **kwargs)
    return with_logging

@logit
def addition_func(x):
   """Do some math."""
   return x + x


result = addition_func(4)
# Output: addition_func was called