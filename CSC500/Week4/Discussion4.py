
"""
1. Isolating loan payments while creating a budget. 
   Loop: for loop using dict.items().

If we are traversing through a dictionary of bills, we can use a for loop.
Since dictionaries are mapping objects, they have the special method .__iter__().
When iterating over a dictionary using a for loop, Python will call the method
on the dictionary and return an iterator object. 

For this example I want to iterate over both the bill names and the amounts, 
so I will use dict.items() on the dictionary. Thus the iterator object will be 
a view object of the dictionary's items in (key, value) pairs. This means S
if the items change, the dictionary's 'view' will change as well.
"""

"""
List Comprehension example

https://www.geeksforgeeks.org/python-get-specific-keys-values/

get specific keys' values from a dictionary.
"""

loan_pmts = []
bills = {'Lender': 500.00, 'Coffee': 15.75, 'Pharmacy': 39.99, 'Auto': 430.20, 'Rent': 1240.00, 'Grocer': 56.90, 'Gas': 40.00, 'Phone': 153.70}

loan_keys = ["Lender", "Auto"]

loan_pmts = [bills[bill] for bill in loan_keys] 
"""
# this is equivalent to code above

for bill, amount in bills.items():
    if bill == "Lender" or bill == "Auto":
        loan_pmts.append(amount)
"""

print(f'Total Monthly Loan Payment: ${sum(loan_pmts):.2f}')

"""
2. Auto-reply email
   Loop: while loop

   If I want to ensure that an auto-reply email is sent while I am unreachable, I can make use of a while loop.
   The loop will continue to execute the auto-reply to incoming mail while unreachable is True. This condition
   can be toggled in mail settings when unreachable is no longer True. 
"""

"""
List comprehension

https://www.geeksforgeeks.org/python-list-comprehension-and-slicing/

List comprehension is an elegant way to define and create a list in python. 
We can create lists just like mathematical statements and in one line only. 
The syntax of list comprehension is easier to grasp.

A list comprehension generally consist of these parts:

Output expression,
Input sequence,
A variable representing a member of the input sequence and
An optional predicate part.
"""
lst  =  [x ** 2  for x in range (1, 11)   if  x % 2 == 1] 

      here, x ** 2 is output expression, 
      range (1, 11)  is input sequence, 
      x is variable and   
      if x % 2 == 1 is predicate part.