// ===== Undirected Graph ====
// Using adjacency list

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // no error handling
  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  // no error handling
  removeEdge(v1, v2) {
    this.adjacencyList[v1] = this.adjacencyList[v1].filter(
      (each) => each !== v2
    );
    this.adjacencyList[v2] = this.adjacencyList[v2].filter(
      (each) => each !== v1
    );
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (const el of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, el);
      }
      delete this.adjacencyList[vertex];
    }
  }

  // recursive
  DFS(vertex) {
    let list = this.adjacencyList;
    // create a list to store end result
    let results = [];
    // create an object to store visited articles
    let visited = {};
    // helper function
    function helper(vertex) {
      // if vertex is empty, return
      if (!vertex) return;
      // place vertex into visited object
      visited[vertex] = true;
      // push vertex into results array
      results.push(vertex);
      // loop over all values in adjacencyList for that vertex
      for (let value of list[vertex]) {
        // if any of the values not visited, recursively invoke the helper function
        if (!visited[value]) helper(value);
      }
    }
    helper(vertex);
    return results;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
console.log(g.DFS("A"));
// console.log(g);
