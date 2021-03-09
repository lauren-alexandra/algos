"""
Title: Mixing Colors
Description: The program prompts the user to enter the names of two primary colors to mix. 
If the user enters anything other than "red," "blue," or "yellow," the program displays an error message. 
Otherwise, the program returns the name of the secondary color that results.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys

def main():
    colors = get_colors()
    mix_colors(colors)

    sys.exit()

def mix_colors(colors):
    f = open('MixingColors.txt', 'w+')

    if 'red' in colors and 'blue' in colors:
      f.write('purple')
    elif 'red' in colors and 'yellow' in colors:
      f.write('orange')
    else:
      f.write('green')

    f.close()

def get_colors():
    no_primary = True
    colors = []
    primary_colors = ('red', 'yellow', 'blue')
    
    while no_primary:
      no_primary = False
      for i in range(2):
          color = str.lower(input('Enter a primary color to mix: '))

          if color not in primary_colors:
            print('Color must be red or blue or yellow.')
            colors = []
            no_primary = True
            break

          elif color in colors:
            print('Enter different primary colors to mix.')
            colors = []
            no_primary = True
            break

          else: 
            colors.append(color)
              
    return colors

if __name__ == "__main__":
    main()