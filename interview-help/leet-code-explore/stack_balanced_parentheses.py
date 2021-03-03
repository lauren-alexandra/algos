"""
https://bradfieldcs.com/algos/stacks/balanced-parentheses/

 Balanced parentheses means that each opening symbol has a corresponding closing symbol and the pairs of parentheses are properly nested.

 The problem:
 The challenge then is to write an algorithm that will read a string of parentheses from left to right and decide whether the symbols are 
 balanced. To solve this problem we need to make an important observation. As you process symbols from left to right, the most recent opening 
 parenthesis must match the next closing symbol. Also, the first opening symbol processed may have to wait until the very last symbol for its match.

 Why use a stack for this problem:
 Closing symbols match opening symbols in the reverse order of their appearance; they match from the inside out. This is a clue that stacks can be 
 used to solve the problem.

 The algorithm:
 Starting with an empty stack, process the parenthesis strings from left to right. If a symbol is an opening parenthesis, push it on the stack as a 
 signal that a corresponding closing symbol needs to appear later. If, on the other hand, a symbol is a closing parenthesis, pop the stack. 
 
 How to tell its balanced: 
 As long as it’s possible to pop the stack to match every closing symbol, the parentheses remain balanced. If at any time there’s no opening symbol 
 on the stack to match a closing symbol, the string is not balanced properly. At the end of the string, when all symbols have been processed, the 
 stack should be empty. 

"""

OPENING = '('

def is_balanced(parentheses):
    stack = []
    for paren in parentheses:
        if paren == OPENING:
            stack.append(paren)
        else:
            try:
                stack.pop()
            except IndexError: # too many closing parens
                return False   
    return len(stack) == 0 # false if too many opening parens

is_balanced('((()))')  # => True
is_balanced('(()')  # => False
is_balanced('())')  # => False