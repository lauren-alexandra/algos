"""
Title: Soccer Team Roster
Description: Gathers weights and finds the average and max weights.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys

def main():

    f = open('SoccerTeamRoster.txt', 'w+')
    weights = []

    for n in range(1, 5):
        try:
            weights.append(float(input(f'Enter weight {n}: ')))
        except ValueError:
            print("Not a number.", file = f)

    average_weight = sum(weights) / len(weights) 
    maximum_weight = max(weights)

    print(f'Weights: ', weights, file = f)
    print(f'\nAverage weight: {average_weight:.2f}', file = f)
    print(f'\nMax weight: {maximum_weight:.2f}', file = f)

    f.close()


if __name__ == "__main__":
    main()