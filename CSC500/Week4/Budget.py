"""
Title: Budget
Description: Determines if you are over or under budget for a month.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys

def main():
    f = open('Budget.txt', 'w+')

    total = 0.00
    
    try:
        budget = float(input(f'What is your monthly budget? '))
    except ValueError:
        log_err('Budget must be a number.')

    while True:
        expense = input(f'Enter an expense or hit "Enter" when done: ')
        if len(expense) == 0:
            break
        else:
            try:
                total += float(expense)
            except ValueError:
                log_err('Expense must be a number.')

    if total < budget:
        print(f'${(budget - total):.2f} under budget.', file = f)
    elif total > budget:
        print(f'${(total - budget):.2f} over budget.', file = f)
    else:
        print('Not over or under budget for month.', file = f)

    sys.exit()

def log_err(err):    
    f = open('Budget.txt', 'w+')   
    f.write(err)
    f.close()
    sys.exit()

if __name__ == "__main__":
    main()