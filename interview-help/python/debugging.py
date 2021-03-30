# debugging from command line
# python -m pdb my_script.py

# debugging from inside a script
import pdb

def make_bread():
    pdb.set_trace()
    return "bread"

print(make_bread())

"""
debugging commands:

c: continue execution
w: shows the context of the current line it is executing.
a: print the argument list of the current function
s: Execute the current line and stop at the first possible occasion.
n: Continue execution until the next line in the current function is reached or it returns.
"""