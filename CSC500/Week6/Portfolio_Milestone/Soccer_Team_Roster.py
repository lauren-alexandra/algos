"""
Title: Soccer Team Roster
Description: Asks the user for 5 jersey numbers and each player's rating. Displays the roster and a menu of options to modify the roster.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys
from collections import OrderedDict 

def main():
    def get_roster(): 
        players = dict()
        needs_roster = True

        while needs_roster: 
            needs_roster = False 
            for n in range(1, 6):
                try:
                    jersey = int(input(f"Enter player {n}'s jersey number: "))

                    if not (jersey >= 0 and jersey < 100):
                        print("Jersey numbers are from 0 to 99.")
                        needs_roster = True
                        break
                except ValueError:
                    print("Enter numbers only.")
                    needs_roster = True
                    break

                try:
                    rating = int(input(f"Enter player {n}'s rating: "))

                    if not (rating > 0 and rating < 10):
                        print("Player ratings are from 1 to 9.")
                        needs_roster = True
                        break 
                except ValueError: 
                    print("Enter numbers only.")
                    needs_roster = True
                    break

                players[jersey] = rating 

        roster = OrderedDict(sorted(players.items()))
        print(f"\nROSTER")
        for jersey, rating in roster.items(): 
            print(f"Jersey number: {jersey}, Rating: {rating}")

    def show_menu():
        MENU_OPTIONS = ('a', 'd', 'u', 'r', 'o', 'q') 

        opt = str.lower(input(f"\nMENU\na - Add player\nd - Remove player\nu - Update player rating\nr - Output players above a rating\no - Output roster\nq - Quit\nChoose an option:\n"))
            
        if opt not in MENU_OPTIONS:
            print('Please enter option from menu.')
            show_menu() 
        elif opt == 'q':
            sys.exit()
        else:
            show_menu() 

    get_roster()
    show_menu()

if __name__ == "__main__":
    main()