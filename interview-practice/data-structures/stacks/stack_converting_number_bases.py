"""
https://bradfieldcs.com/algos/stacks/converting-number-bases/

How can we easily convert integer values into binary numbers? 
The answer is an algorithm called “Divide by 2” that uses a stack to keep track of the digits for the binary result.

The Divide by 2 algorithm assumes that we start with an integer greater than 0. 

--> A simple iteration then continually divides the decimal number by 2 and keeps track of the remainder. 
The first division by 2 gives information as to whether the value is even or odd. An even value will have a 
remainder of 0. It will have the digit 0 in the ones place. An odd value will have a remainder of 1 and will 
have the digit 1 in the ones place. 

We think about building our binary number as a sequence of digits; the first remainder we compute will actually 
be the last digit in the sequence. 

Implementation:

The Python code below implements the Divide by 2 algorithm. The function convert_to_binary takes an argument that 
is a decimal number and REPEATEDLY DIVIDES IT BY 2. 

Line 7 uses the built-in modulo operator, %, to extract the remainder and line 8 then pushes it on the stack. 
After the division process (divide by 2) reaches 0, a binary string is constructed in lines 11-13. Line 11 
creates an empty string. The binary digits are popped from the stack one at a time and appended to the right-hand 
end of the string. The binary string is then returned.
"""

def convert_to_binary(decimal_number):
    remainder_stack = []

    while decimal_number > 0:
        remainder = decimal_number % 2
        remainder_stack.append(remainder)
        decimal_number = decimal_number // 2

    binary_digits = []
    while remainder_stack:
        # we could just reverse and join `remainder_stack` of course,
        # as it is simply a Python list, but popping off into another
        # list helps demonstrate that the only behavior we need from
        # `remainder_stack` is stack-like
        binary_digits.append(str(remainder_stack.pop()))

    return ''.join(binary_digits)

convert_to_binary(42)  # => '101010'

"""
The function convert_to_binary can be modified to accept not only a decimal value but also a base for the intended 
conversion. The “Divide by 2” idea is simply replaced with a more general “Divide by base.”
"""

DIGITS = '0123456789abcdef'


def convert_to_base(decimal_number, base):
    remainder_stack = []

    while decimal_number > 0:
        remainder = decimal_number % base
        remainder_stack.append(remainder)
        decimal_number = decimal_number // base

    new_digits = []
    while remainder_stack:
        new_digits.append(DIGITS[remainder_stack.pop()])

    return ''.join(new_digits)


convert_to_base(25, 2)  # => '11001'
convert_to_base(25, 16)  # => '19'