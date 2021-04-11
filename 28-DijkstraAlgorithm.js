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
  Dijkstra(start, finish) {
    // distance object - set each key to be every vertex in the adjacency list with a value of infinity, except the starting vertex with value of 0
    const distances = {};
    // priority queue - add each vertex with priroity of Infinity to the PQ, except the starting vertex, which have priority of 0
    const nodes = new PQ();
    // previous object - set each key to be every vertex in adjacency list with value of null
    const previous = {};

    let path = [];
    let smallest;

    // ====== SET STARTING VALUES =======
    for (let vertex in this.adjacencyList) {
      // for-in accesses objects
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // start looping as long as there is anything in PQ
    while (nodes.values.length) {
      // dequeue a vertex from the PQ
      smallest = nodes.dequeue().val;
      // if that vertex is the same as the ending vertex, return
      if (smallest === finish) {
        //done
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      // otherwise, loop through each value in the adjacencyList at that vertex
      if (smallest || distances[smallest] !== Infinity) {
        // get the neighbours
        for (let neighbour of this.adjacencyList[smallest]) {
          // calculate the distance to that vertex from the starting vertex
          let candidate = distances[smallest] + neighbour.weight;
          // if the distance is less than what is currently stored in our distances object
          if (candidate < distances[neighbour.node]) {
            // updated the distances object with new lower distance
            distances[neighbour.node] = candidate;
            // update the previous object to contain that vertex
            previous[neighbour.node] = smallest;
            // enqueue the vertex with the total distance from the start node
            nodes.enqueue(neighbour.node, candidate);
          }
        }
      }
    }
    return { path };
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
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);
// console.log(g.adjacencyList);
console.log(g.Dijkstra("A", "E"));
