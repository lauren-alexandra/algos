"""
Balanced Symbols: A General Case

The general problem of balancing and nesting different kinds of opening and closing symbols occurs frequently. 

The algorithm:
Each opening symbol is simply pushed on the stack to wait for the matching closing symbol to appear later in the 
sequence. 

-->When a closing symbol does appear, the only difference is that we must check to be sure that it correctly 
matches the type of the opening symbol on top of the stack. 

If the two symbols don’t match, the string isn’t balanced. 
Once again, if the entire string is processed and nothing is left on the stack, the string is correctly balanced.
"""

PAIRINGS = {
    '(': ')',
    '{': '}',
    '[': ']'
}

def is_balanced(symbols):
    stack = []
    for s in symbols:  
        if s in PAIRINGS: # you're only adding the opening symbols to the stack  
            stack.append(s)
            print("\nAppend opening symbol to top of stack: ", s)
            continue  
        try:
            print("\nRemove from the top of the stack")
            expected_opening_symbol = stack.pop()   # remove from the end of the list aka top of the stack
        except IndexError: # too many closing symbols
            return False
        # If the value of s is not a opening symbol, we check that its pair is the correct one at the top of the stack. 
        print("Do they match?")
        print("Pairing symbol key's value from top of the stack: ", PAIRINGS[expected_opening_symbol])  
        print("The current symbol which is a closing symbol: ", s) 
        if s != PAIRINGS[expected_opening_symbol]: # mismatch
            return False
    return len(stack) == 0 # false if too many opening symbols

is_balanced('{{([][])}()}')  # => True
#is_balanced('{[])')  # => False
#is_balanced('((()))')  # => True
#is_balanced('(()')  # => False
#is_balanced('())')  # => False