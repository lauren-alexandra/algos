"""
Title: Check for Speed
Description: Finds the multiplication and division of two numbers.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys
import os
import stat

def main():
    f = open('CheckForSpeedResults.txt', 'w+')

    try:
        num1 = float(input('Enter a number: '))
    except ValueError:
        print("Not a number.", file = f)
        sys.exit()

    try: 
        num2 = float(input('Enter another number: '))
    except ValueError:
        print("Not a number.", file = f)
        sys.exit()

    product = num1 * num2

    try:
        quotient = num1 / num2
    except ZeroDivisionError:
        print("Can not divide by 0.", file = f)
        sys.exit()

    print("Product: ", product, file = f)
    print("Quotient: ", quotient, file = f)

    f.close()
    os.chmod("CheckForSpeedResults.txt", stat.S_IREAD)

if __name__ == "__main__":
    main()