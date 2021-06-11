"""
no requirement to store in continguous memory (pointers)

the location of the first item must be specified. the reference
is called the head of the list.

the last item aka tail needs to know there is no next item.

Node
 - the data field or list item aka value 
 - the reference to the next node
"""

class Node(object):
    def __init__(self, value):
        self.value = value
        self.next = None

example = Node(90)
example.value # 90

# THIS IS A LINKED LIST
class UnorderedList(object):

    def __init__(self):
        self.head = None

    # a linked list is empty if there is no head.
    def is_empty(self):
        return self.head is None 

    # when you add a node to a linked list, 
    # it goes to the front of the list.
    # its next reference becomes what is currently head
    # then the list's head is reset to be the new added node.
    def add(self, item):
        node = Node(item) # creates node with item value.
        node.next = self.head
        self.head = node 

    # we need to traverse the list and keep a count of the nodes
    def size(self): 
        current = self.head
        count = 0
        while current is not None:
            count = count + 1
            current = current.next 

        return count 

    # traversal required for search too
    def search(self, item):
        current = self.head

        while current is not None:
            if current.value == item:
                return True
            current = current.next

        return False 

    # in order to remove the node containing the item, we need to modify
    # the link in the previous node so that it refers to the node that
    # comes after current. 
    # this requires a previous node reference.
    def remove(self, item):
        current = self.head
        previous = None
        
        while True:
            if current.value == item:
                break
            # traverse forward until item found.
            previous, current = current, current.next 

        if previous is None:
            self.head = current.next
        else:
            previous.next = current.next # this will remove the current node aka found node.



my_list = UnorderedList()

# since 5 is added first to the linked list, that means every other added
# item is ahead of it. this makes it the last node in the list.
my_list.add(5)

# since 2 is the last added item, it will become the data value in the first node.
my_list.add(7)
my_list.add(2)

"""
Linked list traversal

Traversing means visiting each node starting with head.

To visit a node, move the reference to the next node by traversing the next reference.
"""