"""
Dijkstra’s Algorithm

Before diving into the code, let’s start with a high-level illustration of Dijkstra’s algorithm.

First, we initialize the algorithm as follows:

We set Reykjavik as the starting node.
We set the distances between Reykjavik and all other cities to infinity, except for the distance between Reykjavik and itself, which we set to 0.
After that, we iteratively execute the following steps:

We choose the node with the smallest value as the “current node” and visit all of its neighboring nodes. As we visit each neighbor, we update their tentative distance from the starting node.
Once we visit all of the current node’s neighbors and update their distances, we mark the current node as “visited.” Marking a node as “visited” means that we’ve arrived at its final cost.
We go back to step one. The algorithm loops until it visits all the nodes in the graph
"""

def dijkstra_algorithm(graph, start_node):
    unvisited_nodes = list(graph.get_nodes())
 
    # We'll use this dict to save the cost of visiting each node and update it as we move along the graph   
    shortest_path = {}
 
    # We'll use this dict to save the shortest known path to a node found so far
    previous_nodes = {}
 
    # We'll use max_value to initialize the "infinity" value of the unvisited nodes   
    max_value = sys.maxsize
    for node in unvisited_nodes:
        shortest_path[node] = max_value
    # However, we initialize the starting node's value with 0   
    shortest_path[start_node] = 0
    
    # The algorithm executes until we visit all nodes
    while unvisited_nodes:
        # The code block below finds the node with the lowest score
        current_min_node = None
        for node in unvisited_nodes: # Iterate over the nodes
            if current_min_node == None:
                current_min_node = node
            elif shortest_path[node] < shortest_path[current_min_node]:
                current_min_node = node
                
        # The code block below retrieves the current node's neighbors and updates their distances
        neighbors = graph.get_outgoing_edges(current_min_node)
        for neighbor in neighbors:
            tentative_value = shortest_path[current_min_node] + graph.value(current_min_node, neighbor)
            if tentative_value < shortest_path[neighbor]:
                shortest_path[neighbor] = tentative_value
                # We also update the best path to the current node
                previous_nodes[neighbor] = current_min_node
 
        # After visiting its neighbors, we mark the node as "visited"
        unvisited_nodes.remove(current_min_node)
    
    return previous_nodes, shortest_path
    