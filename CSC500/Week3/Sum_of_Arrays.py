"""
Title: Sum of Arrays
Description: Checks the sum of three elements from three arrays.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

"""
the program checks the sum of three elements from three arrays. 
user enters the index values of each of the three elements. note: each index will select an item from a separate array.

the user needs to provide 3 arrays X, the indices that need to be checked, and the target value (does the sum meet the target?)
"""

"""
Write a Python program to check the sum of three elements from three arrays. 
Please have the code check to see if the sum is equal to the target value (inputted from the user). 
Then have the program print the three-element combinations. ie the values adding to return a sum.

Compile and submit your source code and screenshots of the application executing the code and the results in a single document.
"""

import sys
import array

    #f = open('SumOfArrays.txt', 'w+')

    #try:
        #total = input('Enter the numbers of the first array: ')

    # try:
    #     list(map(float, arr.split(" "))
    # except ValueError:
    #     print('Not numbers.', file = f)
    #     sys.exit()

    #purchases_week_01 = array.array('d', [2.19, 16.49, 3.50, 40.41])

    #f.close()

def main():
    #f = open('RestaurantTotal.txt', 'w+')

    first_arr = array.array('f', [])
    second_arr = array.array('f', [])
    third_arr = array.array('f', [])
    arr_list = []

    first_input = input('Enter the numbers of the first array: ')
    check_input(first_input, first_arr, arr_list)
    second_input = input('Enter the numbers of the second array: ')
    check_input(second_input, second_arr, arr_list)
    third_input = input('Enter the numbers of the third array: ')
    check_input(third_input, third_arr, arr_list)

    indices = input('Enter the indices of the three elements starting with the first array: ')
    check_indices(indices, arr_list)


def check_input(input, arr, list_):
    try:
        input_list = list(map(float, input.split(" ")))
        arr.extend(input_list)
        list_.append(input_list)

    except ValueError:
        print('Not numbers.')
        sys.exit()  


def check_indices(indices_, list_):
    try:
        elements = list(map(int, indices_.split(" ")))
        if len(elements) != 3:
            print('Not at least 3 indices provided.')
            sys.exit()
        
        for elem in elements:
            for arr in list_: 
                if elem > len(arr) - 1:
                    print('Indices must be in bounds.')
                    sys.exit()

    except ValueError:
        print('Not numbers.')
        sys.exit()


if __name__ == "__main__":
    main()