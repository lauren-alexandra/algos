"""
Title: Sum of Arrays
Description: Checks the sum of three elements from three arrays.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys
import array

def main():
    f = open('SumofArrays.txt', 'w+')

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

    indices_input = input('Enter the indices of the three elements starting with the first array: ')
    indices = check_indices(indices_input, arr_list)

    try:
        target = float(input('Enter the target sum: '))
        sum = find_sum(indices, arr_list)

        print("Target = ", target , file = f)
        print("Sum = ", sum, file = f)
        print("Target and sum are equal." if target == sum else "Not equal.", file = f)

    except ValueError:
        print('Not a number.', file = f)
        sys.exit()  

    f.close()


def find_sum(indices_, list_):
    sum = 0

    for (index, arr) in zip(indices_, list_):
        sum += arr[index]

    return sum


def check_input(input, arr, list_):
    try:
        input_list = list(map(float, input.split(" ")))
        arr.extend(input_list)
        list_.append(input_list)

    except ValueError:
        print('Not numbers.', file = f)
        sys.exit()  


def check_indices(input_, list_):
    try:
        indices_ = list(map(int, input_.split(" ")))
        if len(indices_) != 3:
            print('Three indices not provided.', file = f)
            sys.exit()

        for (index, arr) in zip(indices_, list_): 
            if index > len(arr) - 1:
                print('Indices must be in bounds.', file = f)
                sys.exit()

        return indices_

    except ValueError:
        print('Not numbers.', file = f)
        sys.exit()


if __name__ == "__main__":
    main()