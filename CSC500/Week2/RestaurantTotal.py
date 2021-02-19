"""
Title: Restaurant Total
Description: Finds the total food charge, sales tax, and tip.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys

def main():
    f = open('RestaurantTotal.txt', 'w+')

    try:
        total = float(input('Enter the charge: '))
    except ValueError:
        print('Not a number.', file = f)
        sys.exit()

    # calculate sales tax of 7% 
    sales_tax = round((total * 0.07), 2)
    total += sales_tax 

    # calculate tip of 18%
    tip = round((total * 0.18), 2)
    total = round((total + tip), 2)

    print(f"Sales tax: ${format(sales_tax, '.2f')}", file = f)
    print(f"Tip: ${format(tip, '.2f')}", file = f)
    print(f"Total: ${format(total, '.2f')}", file = f)

    f.close()

if __name__ == "__main__":
    main()