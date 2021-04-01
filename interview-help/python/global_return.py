"""
global keyword vs return keyword
"""

def add(value1, value2):
    return value1 + value2

result = add(3, 5)
print(result)
# Output: 8

def add(value1,value2):
    global result
    result = value1 + value2

add(3,5)
print(result)
# Output: 8