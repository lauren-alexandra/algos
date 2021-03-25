class Patron:
    # class attribute. accessible to all instances of the class.
    CHECKOUT_LIMIT = 5

    # instance constructor. the self argument refers to the instance.
    def __init__(self, name, age = None):
        # instance attribute. data only accessible to instance.
        self.name = name
        self.inventory = dict()

        # private 
        self.__age = age

    # private attribute getter
    def get_age(self):
        return self.__age

    # instance property 
    @property
    def info(self):
        print(f"Name: {self.name}")
        print(f"\nAge: {self.get_age()}")
        print("\nItems Checked Out:")
        for item in self.inventory:
            print(f"{item}")

    # instance method 
    def checkout_items(self, items):
        self.inventory.update(items)
        return self.inventory

    def return_items(self, items):
      for item in items:
        del self.inventory[item]
      return self.inventory 

    # class method. the cls argument refers to the class.
    @classmethod
    def get_checkout_limit(cls):
        print(f"\nThe checkout limit is {cls.CHECKOUT_LIMIT} items maximum.")

    # static method (called by the class)
    @staticmethod
    def show_receipt(items):
        print("You have these items:\n")
        for item in items:
            print(f"{item}")
        print("\nItems must be returned within 3 weeks of checkout.")

# create instance of type Patron
lily = Patron('Lily')
print(type(lily))
print(lily.name)

print(Patron.CHECKOUT_LIMIT == lily.CHECKOUT_LIMIT)

Patron.get_checkout_limit()

james = Patron('James', 80)
print('Age attribute public?', hasattr(james, '__age'))
print(f"Patron's age: {james.get_age()}")

items_out = james.checkout_items({'Jane Eyre': 'Movie', 'Emma': 'Book', 'Little Women': 'Book'})
Patron.show_receipt(items_out)

print(james.return_items({'Emma': 'Book'}))

james.info

