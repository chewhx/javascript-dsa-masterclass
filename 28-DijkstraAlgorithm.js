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
    // previous object - set each key to be every vertex in adjacency list with value of null
    // start looping as long as there is anything in PQ

    return distanceObj;
  }
}

let g = new WeightedGraph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("A", "B", 9);
g.addEdge("A", "C", 5);
g.addEdge("B", "C", 7);
console.log(g.Dijkstra("A"));
