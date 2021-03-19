# subclass the linked list class

from linked_list_ordered import Node, UnorderedList

class OrderedList(UnorderedList):
    # we only need to modify 
    # search and add methods

    # search: if item not in the list,
    # we make use of the ordering to 
    # stop the search asap.
    # once the value of the node becomes
    # greater than the value we are searching for,
    # return False.
    def search(self, item):
        current = self.head

        while current is not None:
            if current.value == item:
                return True
            if current.value > item:
                return False
            current = current.next # traverse continue

        return False 

    """
    add
    we now need to find where in the list 
    the given item belongs in the order.

    place new item at head if there is no previous
    OR
    between previous and current
    """

    def add(self, item):
        current = self.head
        previous = None

        while current is not Note:
            if current.value > item:
                break
            previous, current = current, current.next

        node = Node(item)
        if previous is None:
            node.next, self.head = self.head, node # if not previous, put at head.
        else:
            node.next, previous.next = current, node # this will sandwich node between previous and current.

"""
Big O

if traversing O(n)

is_empty is O(1)
"""