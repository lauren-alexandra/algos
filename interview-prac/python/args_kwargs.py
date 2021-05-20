# note: these are conventions
# *args
# **kwargs
# they both allow you to pass an unspecified number of arguments

"""
When to use them?

 The most common use case is when making function decorators. 
 
 Moreover it can be used in monkey patching as well. 
 Monkey patching means modifying some code at runtime.
"""

def func1(first_arg, *args):
    print("first arg: ", first_arg)
    for arg in args:
        print(arg)

func1('apples', 'bananas', 'oranges')
# apples
# bananas
# oranges

# **kwargs allows you to pass keyworded variable length of arguments
def func2(**kwargs):
    for key, value in kwargs.items():
        print(key, value)

func2(apples=1, oranges=2)
# apples 1
# oranges 2