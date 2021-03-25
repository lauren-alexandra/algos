"""
Title: Soccer Team Roster
Description: Stores roster and rating information for a soccer team. 
Coaches rate players during tryouts to ensure a balanced team.

Term: Winter D
Course: CSC 500
Instructor: Amr Elchouemi

Author: Lauren Alexandra
Email: lauren.alexandra@csuglobal.edu
"""

import sys

def main():
    players = dict()

    def get_weights():
        weights = []
        need_weights = True

        while need_weights: 
            need_weights = False 
            for n in range(1, 5):
                try:
                    weights.append(float(input(f'Enter weight {n}: ')))
                except ValueError:
                    print("Not a number.")
                    need_weights = True
                    break

        average_weight = sum(weights) / len(weights) 
        maximum_weight = max(weights)

        print(f'Weights: {weights}')
        print(f'\nAverage weight: {average_weight:.2f}')
        print(f'\nMax weight: {maximum_weight:.2f}')

    def get_jersey(jersey_msg): 
        try: 
            jersey = int(input(jersey_msg))
        except ValueError:
            print("Enter numbers only.")
            return "Invalid" 

        if not (jersey >= 0 and jersey < 100):
            print("Jersey numbers are from 0 to 99.")
            return "Invalid" 

        return jersey 

    def get_rating(rating_msg):
        try:
            rating = int(input(rating_msg))
        except ValueError: 
            print("Enter numbers only.")
            return "Invalid" 

        if not (rating > 0 and rating < 10):
            print("Player ratings are from 1 to 9.")
            return "Invalid"

        return rating
    
    def get_roster(): 
        need_roster = True

        while need_roster: 
            need_roster = False 
            for n in range(1, 6):
                jersey_msg = f"Enter player {n}'s jersey number: "
                jersey = get_jersey(jersey_msg)
                if jersey == "Invalid":
                    need_roster = True
                    break 

                ratingq_msg = f"Enter player {n}'s rating: "
                rating = get_rating(rating_msg)
                if rating == "Invalid":
                    need_roster = True
                    break 

                players[jersey] = rating 
 
        roster = dict(sorted(players.items()))
        print(f"\nROSTER")
        for jersey, rating in roster.items(): 
            print(f"Jersey number: {jersey}, Rating: {rating}")

    def show_menu():
        MENU_OPTIONS = ('a', 'd', 'u', 'r', 'o', 'q') 

        opt = str.lower(input(f"\nMENU\na - Add player\nd - Remove player\nu - Update player rating\nr - Output players above a rating\no - Output roster\nq - Quit\nChoose an option:\n"))
            
        if opt not in MENU_OPTIONS:
            print('Please enter option from menu.')
            show_menu() 

        elif opt == 'a':
            need_player = True

            while need_player: 
                jersey_msg = "Enter a new player's jersey number: "
                jersey = get_jersey(jersey_msg)
                if jersey == "Invalid":
                    need_player = True
                    break 

                rating_msg = "Enter the player's rating: "
                rating = get_rating(rating_msg)
                if rating == "Invalid":
                    need_player = True
                    break 

                players[jersey] = rating 
                break

            show_menu()

        elif opt == 'd':
            need_jersey = True

            while need_jersey: 
                jersey_msg = "Enter a jersey number: "
                jersey = get_jersey(jersey_msg)
                if jersey == "Invalid":
                    need_jersey = True
                    break 

                del players[jersey]
                break 

            show_menu()

        elif opt == 'r':
            need_rating = True

            while need_rating: 
                rating_msg = "Enter a rating: "
                player_rating = get_rating(rating_msg)
                if player_rating == "Invalid":
                    need_rating = True
                    break 

                print(f"ABOVE {player_rating}:")
                for jersey, rating in players.items(): 
                    if player_rating < rating:
                        print(f"Jersey number: {jersey}, Rating: {rating}")

                break 

            show_menu()

        elif opt == 'q':
            sys.exit()

        else:
            show_menu() 

    
  
    """
    Step 7: Print the jersey number and rating for all players with ratings above the entered value.

    Example:

    Enter a rating:

    5

    ABOVE 5

    Jersey number: 66, Rating: 9

    Jersey number: 84, Rating: 7
    """

    get_weights()
    get_roster()
    show_menu()
    sys.exit()

if __name__ == "__main__":
    main()