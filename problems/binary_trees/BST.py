class Node:
    def __init__(self, data, left=None, right=None):
        self.data=data
        self.left = left
        self.right = right 

class Tree:
    def __init__(self, values):
        self.value = values
        self.root = self.build_tree(values) 

    def build_tree(self, arr):       
        def build(arr, start, end):
            if start > end: return None
        
            mid = (start + end) // 2
            node = Node(arr[mid])
        
            node.left = build(arr, start, mid-1)
            node.right = build(arr, mid+1, end)
            return node

        arr = list(set(sorted(arr)))
        tree = build(arr, 0, len(arr) - 1)
        return tree 

    def insert(self, value, node):
        if value < node.data:
            if node.left is None:
                node.left = Node(value)
            else:
                self.insert(value, node.left)
        
        elif value > node.data:
            if node.right is None:
                node.right = Node(value)
            else:
                self.insert(value, node.right)

    def delete(self, value, node):
        def find_successor(node, deletion_node):
            if node.left:
                node.left = find_successor(node.left, deletion_node)
                return node 
            else:
                deletion_node.data = node.data
                return node.right

        if node is None: return None

        elif value < node.data:
            node.left = self.delete(value, node.left)
            return node 

        elif value > node.data:
            node.right = self.delete(value, node.right)
            return node 

        elif value == node.data:
            if node.left is None:
                return node.right
            elif node.right is None:
                return node.left
            else:
                node.right = find_successor(node.right, node)
                return node

# inorder
def print_tree(root):  
    if root: 
        print_tree(root.left)
        print(root.data)
        print_tree(root.right)
        
tree = Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])
print("Original: ")
print_tree(tree.root)
print("\nInserting a new value: 76")
tree.insert(76, tree.root)
print_tree(tree.root)
print("\nDeleting a value: 76")
tree.delete(76, tree.root)
print_tree(tree.root)
