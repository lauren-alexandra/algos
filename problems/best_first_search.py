"""
Best-First-Search
"""

graph = {
    'Seattle':[('Portland', 1), ('Los Angeles', 4), ('Chicago', 2)],
    'Portland':[('New York', 7), ('Boston', 6)],
    'Los Angeles':[('Boston', 11), ('Miami', 13)],
    'Chicago':[('Miami', 9)],
    'New York':[],
    'Boston':[],
    'Miami':[]
}

def bfs(start, target, graph, queue=[], visited=[]):
    if start not in visited:
        print(start)
        visited.append(start)

    queue=queue+[x for x in graph[start] if x[0][0] not in visited]
    queue.sort(key=lambda x:x[1])
 
    if queue[0][0]==target:
        print(queue[0][0])
    else:
        processing=queue[0]
        queue.remove(processing)
        bfs(processing[0], target, graph, queue, visited)

print("Let's find the flight path from Seattle to your destination.\n")
print("These are the cities on our routes: Portland, Los Angeles, Chicago, New York, Boston, Miami\n")
destination_city = input("Please enter a destination city: ")
print("\nFlight path: ")

bfs('Seattle', destination_city, graph)
