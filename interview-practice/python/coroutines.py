"""
generators are data producers

coroutines are data consumers

Coroutines consume values which are sent to it. 
great for allowing a user to search, enter input that checks
value
"""

def grep(pattern):
    print("Searching for", pattern)
    while True:
        line = (yield)
        if pattern in line:
            print(line)


search = grep('coroutine')
next(search)
# Output: Searching for coroutine
search.send("I love you") # send data - data consumption where yield
search.send("Don't you love me?")
search.send("I love coroutines instead!")
# Output: I love coroutines instead!

"""
The sent values are accessed by yield. Why did we run next()? 
It is required in order to start the coroutine. Just like generators, 
coroutines do not start the function immediately. Instead they run 
it in response to the __next__() and .send() methods. Therefore, 
you have to run next() so that the execution advances to the yield 
expression.
"""

# We can close a coroutine by calling the .close() method:
search.close()