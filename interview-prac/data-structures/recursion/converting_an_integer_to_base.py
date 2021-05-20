"""
convert integer to string given base

convert the integer 10 to its string representation in decimal as '10', 
or to its string representation in binary as '1010'. 

algorithm:
1. Reduce the original number to a series of single-digit numbers.
2. Convert the single digit-number to a string using a lookup.
3. Concatenate the single-digit strings together to form the final result.
"""

# works for any base between 2 and 16

CHAR_FOR_INT = '0123456789abcdef'

def to_string(n, base):
    if n < base:
        return CHAR_FOR_INT[n]

    return to_string(n // base, base) + CHAR_FOR_INT[n % base]

to_string(1453, 16) # => 5Ad

"""
When we detect the base case, we stop recursing and simply return the 
string from the CHAR_FOR_INT sequence. 
"""

"""
example

number 10 base 2

to_string(10) => 10 // 2 + '0' # remainder
to_string(5) => 5 // 2 + '1' # remainder
to_string(2) => 2 // 2 + '0' # remainder
to_string(1) = > 1 < 2 # '1' 

# outputs '1010'
"""