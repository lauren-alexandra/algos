"""
Title: Budget
Description: Determines if you are over or under budget for a month.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

"""
Option #2: Budget
Write a program that asks the user to enter the amount that they have budgeted for a month. 
A loop should then prompt the user to enter each of their expenses for the month and keep a 
running total. When the loop finishes, the program should display the amount that the user 
is over or under budget.

Compile and submit your source code and screenshots of the application executing the code 
and the results in a single document.
"""

import sys

def main():
    f = open('Budget.txt', 'w+')

    # ask user What is your monthly budget

    # enter an expense and add to total or hit "Enter" when done

    # when enter hit, 
    # 1) if total less than budget, subtract from budget and return that value under budget
    # 2) else if total greater, return $ over budget
    # 3) "Not over or under budget for month." 


    f.close()

if __name__ == "__main__":
    main()