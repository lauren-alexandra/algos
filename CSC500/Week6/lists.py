cart = ['soap', ('pencil', 'pen', 'marker'), {'apples': 2, 'bananas': 3}, ['cups', 'plates']]
print(cart)

cart.insert(1, 'shampoo') # insert at a given index
print(cart)

cart.append('mints') # insert at end
print(cart)

cart.extend(['eraser', 'glue']) # insert at end
print(cart)

cart[-1] = 'tylenol' # update last value
cart[0:2] = ["toothpaste", "toothbrush"] # update multiple values by indices
print(cart)

cart[-4] = [dinnerware.capitalize() for dinnerware in cart[-4]] # update list by index
print(cart)

cart.remove('toothbrush') # removes the first matching value
print(cart)

del cart[1] # remove by index
print(cart)

cart.pop(1) # remove by index. pop() will return the removed value.

cart.pop() # remove last item