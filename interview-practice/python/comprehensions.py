# comprehensions are constructs that allow sequences to be built from other sequences

# list comprehensions
multiples = [i for i in range(30) if i % 3 == 0]
print(multiples)
# Output: [0, 3, 6, 9, 12, 15, 18, 21, 24, 27]

squared = [x**2 for x in range(10)]

# dict comprehensions
mcase = {'a': 10, 'b': 34, 'A': 7, 'Z': 3}

mcase_frequency = {
    k.lower(): mcase.get(k.lower(), 0) + mcase.get(k.upper(), 0)
    for k in mcase.keys()
}

# mcase_frequency == {'a': 17, 'z': 3, 'b': 34}


# set comprehensions
squared = {x**2 for x in [1, 1, 2]}
print(squared)
# Output: {1, 4}

# generator comprehensions
"""
They are also similar to list comprehensions. 
The only difference is that they don’t allocate memory 
for the whole list but generate one item at a time, thus more 
memory efficient.
"""
multiples_gen = (i for i in range(30) if i % 3 == 0)
print(multiples_gen)
# Output: <generator object <genexpr> at 0x7fdaa8e407d8>
for x in multiples_gen:
  print(x)
  # Outputs numbers