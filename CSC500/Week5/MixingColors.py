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
    no_colors_to_mix = True
    colors = []
    PRIMARY_COLORS = ('red', 'yellow', 'blue')
    
    while no_colors_to_mix:
      no_colors_to_mix = False
      for i in range(2):
        color = str.lower(input('Enter a primary color to mix: '))

        if color not in PRIMARY_COLORS:
          print('Color must be red or blue or yellow.')
          colors = []
          no_colors_to_mix = True
          break

        elif color in colors:
          print('Enter different primary colors to mix.')
          colors = []
          no_colors_to_mix = True
          break

        else: 
          colors.append(color)
              
    return colors

  colors = get_colors()
  mix_colors(colors)

  sys.exit()

if __name__ == "__main__":
    main()