"""
Tower of Hanoi

SEE this for visual https://www.geeksforgeeks.org/python-program-for-tower-of-hanoi/

assignment is to transfer all 64 disks from one of the three poles to 
another, with two important constraints:

can only move one disk at a time
can never place a larger disk on top of a smaller one
"""

"""
Here is a high-level outline of how to move a tower from the starting pole, 
to the goal pole, using an intermediate pole:

1. Move a tower of height-1 to an intermediate pole, using the final pole.
2. Move the remaining disk to the final pole.
3. Move the tower of height-1 from the intermediate pole to the final pole using 
the original pole.
"""

"""
base case is a tower of 1

A base case is the condition that allows the algorithm to stop recursing. 
A base case is typically a problem that is small enough to solve directly. 
"""

"""
The key to the simplicity of the algorithm is that we make two different 
recursive calls, the first to move all but the bottom disk on the initial 
tower to an intermediate pole. 

Before we make a second recursive call, we simply move the bottom disk to its 
final resting place. 

Finally we move the tower from the intermediate pole to the top of the largest 
disk. 

The base case is detected when the tower height is 0; in this case there is 
nothing to do, so the move_tower function simply returns. 

The important thing to remember about handling the base case this way is that 
simply returning from move_tower is what finally allows the move_disk function 
to be called.
"""

def move_tower(height, from_pole, to_pole, with_pole):
    if height >= 1:
        move_tower(height - 1, from_pole, with_pole, to_pole)
        move_disk(from_pole, to_pole)
        move_tower(height - 1, with_pole, to_pole, from_pole)

def move_disk(from_pole, to_pole):
    print('moving disk from {} to {}'.format(from_pole, to_pole))

"""
move_tower(3, 'A', 'B', 'C')
calling move_tower with arguments 'A', 'B', 'C': # a b and c are poles not disks.

moving disk from A to B
moving disk from A to C
moving disk from B to C
moving disk from A to B
moving disk from C to A
moving disk from C to B
moving disk from A to B


       
       disk-1
       disk-2        
       disk-3
 A       B       C

"""