"""
Compile and submit your source code and screenshots of the application executing the code 
and the results in a single document.
"""

"""
Title: Restaurant Total
Description: Finds the total food charge, sales tax, and tip amounts.

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
        print("Not a number.")
        sys.exit()

    # calculate sales tax of 7% 
    sales_tax = round((total * 0.07), 2)
    total += sales_tax 

    # calculate tip of 18%
    tip = round((total * 0.18), 2)
    total = round((total + tip), 2)

    print("Sales tax: ", sales_tax, file = f)
    print("Tip: ", tip, file = f)
    print("Total: ", total, file = f)

    f.close()

if __name__ == "__main__":
    main()