/*
Graph traversals

Graph traversal means visiting every vertex and edge exactly once in a well-defined order. While using certain graph algorithms, you must ensure that each vertex of the graph is visited exactly once. The order in which the vertices are visited are important and may depend upon the algorithm or question that you are solving.

During a traversal, it is important that you track which vertices have been visited. The most common way of tracking vertices is to mark them.
*/

/*
Breadth First Search (BFS)

There are many ways to traverse graphs. BFS is the most commonly used approach.

BFS is a traversing algorithm where you should start traversing from a selected node (source or starting node) and traverse the graph layerwise thus exploring the neighbour nodes (nodes which are directly connected to source node). You must then move towards the next-level neighbour nodes.

As the name BFS suggests, you are required to traverse the graph breadthwise as follows:

1. First move horizontally and visit all the nodes of the current layer
2. Move to the next layer

Traversing child nodes

A graph can contain cycles, which may bring you to the same node again while traversing the graph. To avoid processing of same node again, use a boolean array which marks the node after it is processed. While visiting the nodes in the layer of a graph, store them in a manner such that you can traverse the corresponding child nodes in a similar order.

To make this process easy, use a queue to store the node and mark it as 'visited' until all its neighbours (vertices that are directly connected to it) are marked. The queue follows the First In First Out (FIFO) queuing method, and therefore, the neigbors of the node will be visited in the order in which they were inserted in the node i.e. the node that was inserted first will be visited first, and so on.

Complexity

The time complexity of BFS is O(V + E), where V is the number of nodes and E is the number of edges.
*/

/*
Depth First Search (DFS)

The DFS algorithm is a recursive algorithm that uses the idea of backtracking. It involves exhaustive searches of all the nodes by going ahead, if possible, else by backtracking.

Here, the word backtrack means that when you are moving forward and there are no more nodes along the current path, you move backwards on the same path to find nodes to traverse. All the nodes will be visited on the current path till all the unvisited nodes have been traversed after which the next path will be selected.

This recursive nature of DFS can be implemented using stacks. The basic idea is as follows:
Pick a starting node and push all its adjacent nodes into a stack.
Pop a node from stack to select the next node to visit and push all its adjacent nodes into a stack.
Repeat this process until the stack is empty. However, ensure that the nodes that are visited are marked. This will prevent you from visiting the same node more than once. If you do not mark the nodes that are visited and you visit the same node more than once, you may end up in an infinite loop.

Time complexity , when implemented using an adjacency list.

Applications

How to find connected components using DFS?

A graph is said to be disconnected if it is not connected, i.e. if two nodes exist in the graph such that there is no edge in between those nodes. In an undirected graph, a connected component is a set of vertices in a graph that are linked to each other by paths.

Consider the example given in the diagram. Graph G is a disconnected graph and has the following 3 connected components.

First connected component is 1 -> 2 -> 3 as they are linked to each other
Second connected component 4 -> 5
Third connected component is vertex 6
In DFS, if we start from a start node it will mark all the nodes connected to the start node as visited. Therefore, if we choose any node in a connected component and run DFS on that node it will mark the whole connected component as visited.
*/ 
class Graph { 
    constructor(noOfVertices) 
    { 
        this.noOfVertices = noOfVertices; 
        this.AdjList = new Map(); // holds key/val pairs
    } 
  
    addVertex(v) 
    { 
        this.AdjList.set(v, []); 
    } 
  
    addEdge(v, w) 
    { 
        // get the list for vertex v and put the 
        // vertex w denoting edge between v and w 
        this.AdjList.get(v).push(w); 

        // Since graph is undirected, 
        // add an edge from w to v also 
        this.AdjList.get(w).push(v); 
    }
  
    DFS(node) {
     // create a Stack and add our initial node in it
     let s = new Array(this.nodes.length);
     let visited = new Set();
     s.push(node);

     // mark the first node as visited
     visited.add(node);

     // continue till our Stack gets empty
      while (!s.isEmpty()) {
        let t = s.pop();

        // Log every element that comes out of the Stack
          console.log(t);

        // 1. In the edges object, we search for nodes this node is directly connected to.
        // 2. We filter out the nodes that have already been visited.
        // 3. Then we mark each unvisited node as visited and push it to the Stack.
        this.edges[t]
        .filter(n => !visited.has(n))
        .forEach(n => {
           visited.add(n);
           s.push(n);
           });
      }
    }
  
    BFS(node) {
       // create a Queue and add initial node
       let q = new Array(this.nodes.length);
       let visited = new Set();
       q.push(node);

       // mark the first node as visited
       add(node);

       // continue till our queue gets empty
       while (!q.isEmpty()) {
          let t = q.shift(); // dequeue

          // Log every element that comes out of the Queue
          console.log(t);

          // 1. In the edges object, we search for nodes this node is directly connected to.
          // 2. We filter out the nodes that have already been visited.
          // 3. Then we mark each unvisited node as visited and add it to the queue.
          this.edges[t]
          .filter(n => !visited.has(n))
          .forEach(n => {
             visited.add(n);
             q.push(n);
          });
       }
    }
} 

// example 
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 
  
// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
    g.addVertex(vertices[i]); 
} 
  
// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 


// DFS depth first search
// Time complexity O(V+E) - for BFS too. vertices/nodes + edges
g.DFS("A");
// output
A
D
E
F
B
G
C
