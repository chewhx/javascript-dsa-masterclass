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
  // DFS(vertex) {
  //   let list = this.adjacencyList;
  //   // create a list to store end result
  //   let results = [];
  //   // create an object to store visited articles
  //   let visited = {};
  //   // helper function
  //   function helper(vertex) {
  //     // if vertex is empty, return
  //     if (!vertex) return;
  //     // place vertex into visited object
  //     visited[vertex] = true;
  //     // push vertex into results array
  //     results.push(vertex);
  //     // loop over all values in adjacencyList for that vertex
  //     for (let value of list[vertex]) {
  //       // if any of the values not visited, recursively invoke the helper function
  //       if (!visited[value]) helper(value);
  //     }
  //   }
  //   helper(vertex);
  //   return results;
  // }

  // iterative
  DFS(vertex) {
    const list = this.adjacencyList;
    // create a stack to keep track of vertices
    const stack = [vertex];
    // create a list to store the end result, to be returned at the very end
    const results = [];
    // create an object to store visited vertices
    const visited = {};
    // add starting vertex to stack and mark it visited
    stack.push(...list[vertex]);
    visited[vertex] = true;
    results.push(vertex);
    // while stack has something
    while (stack) {
      // pop the next vertex from stack
      const popped = stack.pop();
      if (!popped) break;
      // if that vertex hasnt been visited
      if (!visited[popped]) {
        // mark it as visisted
        visited[popped] = true;
        // add to result list
        results.push(popped);
        // push all of its neighbours to stack
        stack.push(...list[popped]);
      }
    }
    // return result array
    return results;
  }

  BFS(vertex) {
    const list = this.adjacencyList;
    // create a stack to keep track of vertices
    const stack = [vertex];
    // create a list to store the end result, to be returned at the very end
    const results = [];
    // create an object to store visited vertices
    const visited = {};
    // add starting vertex to stack and mark it visited
    stack.push(...list[vertex]);
    visited[vertex] = true;
    results.push(vertex);
    // while stack has something
    while (stack) {
      // pop the next vertex from stack
      const popped = stack.shift();
      if (!popped) break;
      // if that vertex hasnt been visited
      if (!visited[popped]) {
        // mark it as visisted
        visited[popped] = true;
        // add to result list
        results.push(popped);
        // push all of its neighbours to stack
        stack.push(...list[popped]);
      }
    }
    // return result array
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
console.log(g.BFS("A"));
// console.log(g);
