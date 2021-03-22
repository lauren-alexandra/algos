import time 

# takes a function and it's arguments
def time_me(func, *args): 
    start = time.perf_counter() 

    try:
      func(*args)
    except: 
      print("Review function definition and try again.")

    stop = time.perf_counter()
    
    # prints a string measuring performance
    print(f"Took {stop - start} seconds.")

time_me(min, 5, 10, 25)

time_me(abs, -10)

time_me(dir)

time_me(pow, 'two', 'three')

time_me(pow, 2, 3)