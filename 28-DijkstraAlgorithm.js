// simple PQ Class
class PQ {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // no error handling
  addEdge(v1, v2, weight) {
    this.adjacencyList[v1].push({ node: v2, weight });
    this.adjacencyList[v2].push({ node: v1, weight });
  }

  // Dijkstra
  Dijkstra(startV, endV) {
    // distance object - set each key to be every vertex in the adjacency list with a value of infinity, except the starting vertex with value of 0
    const distanceObj = {};
    Object.keys(this.adjacencyList).map((key) => {
      distanceObj[key] = Infinity;
      if (key === startV) distanceObj[key] = 0;
    });
    // priority queue - add each vertex with priroity of Infinity to the PQ, except the starting vertex, which have priority of 0
    const priorityQueue = new PQ();
    Object.keys(this.adjacencyList).map((key) => {
      if (key === startV) {
        priorityQueue.enqueue(key, 0);
      } else {
        priorityQueue.enqueue(key, Infinity);
      }
    });
    // previous object - set each key to be every vertex in adjacency list with value of null
    const previousObject = {};
    Object.keys(this.adjacencyList).map((key) => {
      previousObject[key] = null;
    });
    // start looping as long as there is anything in PQ
    while (priorityQueue.values) {
      // dequeue a vertex from the PQ
      const dequeuedVertex = priorityQueue.dequeue();
      // if that vertex is the same as the ending vertex, return
      if (dequeuedVertex.val === endV) return;
      // otherwise, loop through each value in the adjacencyList at that vertex
      for (const edge of this.adjacencyList[dequeuedVertex.val]) {
        if (!dequeuedVertex.val) return;
        // calculate the distance to that vertex from the starting vertex
       function findDistance(vertex, weight) {
        // check previousobject for previous vertex
        let previous = previousObject[vertex]
        // get from shortestDistance object, the matched vertex
        let shortest = distanceObj[previous]
        return findDistance(previous, shortest)
        // return weight + findDistance
       }
        // if the distance is less than what is currently stored in our distances object
        // updated the distances object with new lower distance
        // update the previous ojbect to contain that vertex
        // enqueue the vertex with the total distance from the start node
      }
    }

    return null;
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("D", "E", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
// console.log(g)
console.log(g.Dijkstra("A"));
