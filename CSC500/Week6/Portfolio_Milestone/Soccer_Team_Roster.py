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
                    rating = int(input(f"Enter player {n}'s rating: "))
                except ValueError:
                    print("Enter jersey number (0 - 99) and player's rating (1 - 9).")
                    needs_roster = True
                    break

                # do a check if jersey number NOT greater than or equal to 0 and less than 100
                # break and print jersey numbers must be between 0 and 99

                # do a check if rating not greater than 0 and less than 10
                # break and print rating must be 1-9
                
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
            needs_selection = True
            show_menu() 

    get_roster()
    show_menu()

if __name__ == "__main__":
    main()