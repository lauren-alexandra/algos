"""
Finds the multiplication and division of two numbers.
"""

import sys

def main():
    try:
        num1 = float(input('Enter a number: '))
    except ValueError:
        print("Not a number.")
        sys.exit()

    try: 
        num2 = float(input('Enter a non-zero number: '))
    except ZeroDivisionError:
        print("Can not divide by 0.")
        sys.exit()
    else:
        print("Not a number.")
        sys.exit()

    print(num2)
    product = num1 * num2
    #quotient = num1 / num2
    print("Product: ", product)
    #print("Quotient: ", quotient)

if __name__ == "__main__":
    main()