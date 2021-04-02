"""
defaultdict

unlike dict, you do not need to check whether a key is present or not

e.g. if you use dict, if a key is not present you get a KeyError.
don't get this with defaultdict.
"""
from collections import defaultdict

colours = (
    ('Yasoob', 'Yellow'),
    ('Ali', 'Blue'),
    ('Arham', 'Green'),
    ('Ali', 'Black'),
    ('Yasoob', 'Red'),
    ('Ahmed', 'Silver'),
)

tree = lambda: defaultdict(tree)
some_dict = tree()

some_dict['colours']['favourite'] = "yellow"

import json
print(json.dumps(some_dict))
# Output: {"colours": {"favourite": "yellow"}}

"""
note: in Python 3, dict maintains insertion order.
"""

"""
Counter

allows you to count the occurrences of an item
"""
from collections import Counter

colours = (
    ('Yasoob', 'Yellow'),
    ('Ali', 'Blue'),
    ('Arham', 'Green'),
    ('Ali', 'Black'),
    ('Yasoob', 'Red'),
    ('Ahmed', 'Silver'),
)

favs = Counter(name for name, colour in colours)
print(favs)
# Output: Counter({
#    'Yasoob': 2,
#    'Ali': 2,
#    'Arham': 1,
#    'Ahmed': 1
# })

# count the most common lines in a file 
with open('filename', 'rb') as f:
    line_count = Counter(f)
print(line_count)

"""
deque = double ended queue. means can append and delete from
both sides of queue.
"""
from collections import deque

d = deque()
d.append('1')
d.append('2')
d.append('3')

print(len(d))
# Output: 3

print(d[0])
# Output: '1'

print(d[-1])
# Output: '3'

d = deque(range(5))
print(len(d))
# Output: 5

d.popleft()
# Output: 0

d.pop()
# Output: 4

print(d)
# Output: deque([1, 2, 3])

"""
we can set max limit of queue.
if item added, item pop'd on left
"""
d = deque([0, 1, 2, 3, 5], maxlen=5)
print(d)
# Output: deque([0, 1, 2, 3, 5], maxlen=5)

d.extend([6])
print(d)
#Output: deque([1, 2, 3, 5, 6], maxlen=5)

# if no limit
d = deque([1,2,3,4,5])
d.extendleft([0])
d.extend([6,7,8])
print(d)
# Output: deque([0, 1, 2, 3, 4, 5, 6, 7, 8])


"""
namedtuple: like dictionaries but immutable.

A tuple is basically a immutable list which allows you to store a sequence of values separated by commas.
"""
from collections import namedtuple

Animal = namedtuple('Animal', 'name age type')
perry = Animal(name="perry", age=31, type="cat")

print(perry)
# Output: Animal(name='perry', age=31, type='cat')

print(perry.name)
# Output: 'perry'

print(perry[0])
# Output: perry

print(perry._asdict()) # can convert to dict

"""
enum 

Enums are an enumerated type

Enums have names and values associated with them.

Why?
Enums are advantageous because they give a name to a constant, which makes code more readable; 
and because the individual members cannot be rebound, making Python Enums semi-constant 
(because the Enum itself could still be rebound).

Besides more readable code, debugging is also easier as you see a name along with the value, 
not just the value
"""

from enum import Enum
  
# creating enumerations using class
class Animal(Enum):
    dog = 1
    cat = 2
    lion = 3
  
# printing enum member as string
print ("The string representation of enum member is : ",end="")
print (Animal.dog)
  
# printing enum member as repr
print ("The repr representation of enum member is : ",end="")
print (repr(Animal.dog))
  
# printing the type of enum member using type()
print ("The type of enum member is : ",end ="")
print (type(Animal.dog))
  
# printing name of enum member using "name" keyword
print ("The name of enum member is : ",end ="")
print (Animal.dog.name)